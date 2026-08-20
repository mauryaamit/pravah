// src/app/api/vani/[section]/mark-consumed/route.ts
// POST /api/vani/{section}/mark-consumed
// Body: { contentId: string } or { contentIds: string[] }

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAdminAuth } from '@/lib/firebase/admin';
import { markConsumed, markAllConsumed } from '@/lib/vani/engine';
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

export async function POST(
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

    const body = await req.json();
    const contentId: string | undefined = body.contentId;
    const contentIds: string[] | undefined = body.contentIds;

    if (!contentId && (!contentIds || contentIds.length === 0)) {
      return NextResponse.json({ error: 'contentId or contentIds required' }, { status: 400 });
    }

    let result: { nextSequenceNumber: number; isExhausted: boolean; consumedCount: number };

    if (contentIds && contentIds.length > 0) {
      result = await markAllConsumed(userId, section, contentIds);
    } else {
      result = await markConsumed(userId, section, contentId!);
    }

    return NextResponse.json({
      ok: true,
      nextSequenceNumber: result.nextSequenceNumber,
      isExhausted: result.isExhausted,
      consumedCount: result.consumedCount,
    });
  } catch (err: any) {
    console.error('[/api/vani/mark-consumed]', err);
    return NextResponse.json({ error: err.message || 'Internal error' }, { status: 500 });
  }
}
