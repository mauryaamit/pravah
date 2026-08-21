// src/app/api/vani/[section]/today/route.ts
// GET /api/vani/{section}/today?date=YYYY-MM-DD
// Returns the deterministic assignment for the requested date (or today if omitted).

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

export async function GET(
  req: NextRequest,
  { params }: { params: { section: string } }
) {
  try {
    const section = params.section as VaniSection;

    if (!VANI_SECTIONS.includes(section)) {
      return jsonUtf8({ error: `Unknown section: ${section}` }, { status: 400 });
    }

    const userId = await getUserId(req);
    if (!userId) {
      return jsonUtf8({ error: 'Authentication required' }, { status: 401 });
    }

    const todayKey = getTodayDateKey();
    const dateParam = req.nextUrl.searchParams.get('date');
    const dateKey = dateParam || todayKey;
    const isHistorical = dateKey < todayKey;

    const result = await getOrCreateTodayAssignment(userId, section, dateKey);

    // 1. If it's a historical date and no edition was recorded
    if (result.noRecord) {
      return jsonUtf8({
        section,
        date: dateKey,
        noRecord: true,
        isHistorical: true,
        message: 'No Vaani edition was recorded for this day.',
        items: [],
        corpusProgress: result.progress,
      });
    }

    // 2. If corpus is exhausted
    if (result.isExhausted) {
      return jsonUtf8({
        section,
        date: dateKey,
        isExhausted: true,
        isHistorical,
        corpusProgress: result.progress,
        message: 'Corpus complete! You have explored all available content in this section.',
        items: [],
      });
    }

    // 3. Single-item sections
    const dailyCount = result.items.length;

    if (dailyCount === 1) {
      const item = result.items[0];
      return jsonUtf8({
        section,
        date: dateKey,
        contentId: item.id,
        sequence: item.globalSequenceNumber,
        isNew: !result.assignment?.isConsumed,
        isAlreadyConsumed: result.assignment?.isConsumed || false,
        corpusProgress: result.progress,
        content: item.content,
        source: item.source,
        subsection: item.subsection,
        isHistorical,
        noRecord: false,
      });
    }

    // 4. Multi-item sections (doha: 3, veda: 4)
    return jsonUtf8({
      section,
      date: dateKey,
      contentIds: result.items.map((i) => i.id),
      isAlreadyConsumed: result.assignment?.isConsumed || false,
      corpusProgress: result.progress,
      items: result.items.map((item) => ({
        contentId: item.id,
        sequence: item.globalSequenceNumber,
        content: item.content,
        source: item.source,
        subsection: item.subsection,
      })),
      isHistorical,
      noRecord: false,
    });
  } catch (err: any) {
    console.error('[/api/vani/today]', err);
    return jsonUtf8({ error: err.message || 'Internal error' }, { status: 500 });
  }
}
