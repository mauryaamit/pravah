// src/app/api/vani/[section]/today/route.ts
// GET /api/vani/{section}/today
// Returns today's deterministic assignment for the authenticated user.

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAdminAuth } from '@/lib/firebase/admin';
import { getOrCreateTodayAssignment, getTodayDateKey } from '@/lib/vani/engine';
import { VaniSection, VANI_SECTIONS } from '@/lib/vani/types';

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
      return NextResponse.json({ error: `Unknown section: ${section}` }, { status: 400 });
    }

    const userId = await getUserId(req);
    if (!userId) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const dateParam = req.nextUrl.searchParams.get('date');
    const dateKey = dateParam || getTodayDateKey();

    const result = await getOrCreateTodayAssignment(userId, section, dateKey);

    if (result.isExhausted) {
      return NextResponse.json({
        section,
        date: dateKey,
        isExhausted: true,
        corpusProgress: result.progress,
        message: 'Corpus complete! You have explored all available content in this section.',
        items: [],
      });
    }

    // Single-item sections
    const dailyCount = result.items.length;

    if (dailyCount === 1) {
      const item = result.items[0];
      return NextResponse.json({
        section,
        date: dateKey,
        contentId: item.id,
        sequence: item.globalSequenceNumber,
        isNew: !result.assignment.isConsumed,
        isAlreadyConsumed: result.assignment.isConsumed,
        corpusProgress: result.progress,
        content: item.content,
        source: item.source,
        subsection: item.subsection,
      });
    }

    // Multi-item sections (doha: 3, veda: 4)
    return NextResponse.json({
      section,
      date: dateKey,
      contentIds: result.items.map(i => i.id),
      isAlreadyConsumed: result.assignment.isConsumed,
      corpusProgress: result.progress,
      items: result.items.map(item => ({
        contentId: item.id,
        sequence: item.globalSequenceNumber,
        content: item.content,
        source: item.source,
        subsection: item.subsection,
      })),
    });
  } catch (err: any) {
    console.error('[/api/vani/today]', err);
    return NextResponse.json({ error: err.message || 'Internal error' }, { status: 500 });
  }
}
