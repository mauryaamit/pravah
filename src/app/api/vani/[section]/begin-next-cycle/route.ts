// src/app/api/vani/[section]/begin-next-cycle/route.ts
// POST /api/vani/{section}/begin-next-cycle
// Resets corpus progress to Cycle 2 after exhaustion.
// Requires user to explicitly call this — never automatic.

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAdminAuth } from '@/lib/firebase/admin';
import { beginNextCycle } from '@/lib/vani/engine';
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

    await beginNextCycle(userId, section);

    return NextResponse.json({
      ok: true,
      message: `Cycle 2 has begun for ${section}. Your journey starts fresh from the beginning.`,
    });
  } catch (err: any) {
    console.error('[/api/vani/begin-next-cycle]', err);
    return NextResponse.json({ error: err.message || 'Internal error' }, { status: 500 });
  }
}
