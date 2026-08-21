// src/app/api/vani/route.ts
// GET /api/vani?date=YYYY-MM-DD
// Returns the complete Vaani edition for all 9 sections for the requested date (or today).

import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { getAdminAuth } from '@/lib/firebase/admin';
import { getOrCreateTodayAssignment, getTodayDateKey } from '@/lib/vani/engine';
import { VaniSection, VANI_SECTIONS } from '@/lib/vani/types';
import { jsonUtf8 } from '@/lib/vani/api-helper';

export const dynamic = 'force-dynamic';

async function getUserId(req: NextRequest): Promise<string | null> {
  try {
    const cookieStore = cookies();
    const sessionCookie = cookieStore.get('pravah-token')?.value;
    if (!sessionCookie) return null;
    const decoded = await getAdminAuth().verifySessionCookie(sessionCookie, false);
    return decoded.uid;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  try {
    const userId = await getUserId(req);
    if (!userId) {
      return jsonUtf8({ error: 'Authentication required' }, { status: 401 });
    }

    const todayKey = getTodayDateKey();
    const dateParam = req.nextUrl.searchParams.get('date');
    const dateKey = dateParam || todayKey;
    const isHistorical = dateKey < todayKey;
    const isToday = dateKey === todayKey;

    const sectionsData: Record<string, any> = {};
    let hasAnyData = false;

    // Fetch assignments for all sections in parallel
    const sectionPromises = VANI_SECTIONS.map(async (sec: VaniSection) => {
      const res = await getOrCreateTodayAssignment(userId, sec, dateKey);
      return { section: sec, result: res };
    });

    const results = await Promise.all(sectionPromises);

    for (const { section, result } of results) {
      if (result.noRecord) {
        sectionsData[section] = {
          noRecord: true,
          items: [],
          corpusProgress: result.progress,
        };
      } else {
        hasAnyData = true;
        sectionsData[section] = {
          contentIds: result.items.map((i) => i.id),
          isConsumed: result.assignment?.isConsumed || false,
          corpusProgress: result.progress,
          items: result.items.map((item) => ({
            contentId: item.id,
            sequence: item.globalSequenceNumber,
            content: item.content,
            source: item.source,
            subsection: item.subsection,
          })),
        };
      }
    }

    return jsonUtf8({
      date: dateKey,
      isToday,
      isHistorical,
      available: hasAnyData,
      sections: sectionsData,
    });
  } catch (err: any) {
    console.error('[/api/vani]', err);
    return jsonUtf8({ error: err.message || 'Internal error' }, { status: 500 });
  }
}
