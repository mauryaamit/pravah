// src/app/api/vani/[section]/progress/route.ts
// GET /api/vani/{section}/progress
// Returns current corpus progress for the authenticated user.

import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { getAdminAuth } from '@/lib/firebase/admin';
import { getProgressForUser } from '@/lib/vani/engine';
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

    const progress = await getProgressForUser(userId, section);

    return jsonUtf8({
      section,
      consumed: progress.consumedCount,
      total: progress.total,
      cycleNumber: progress.cycleNumber,
      lastContentId: progress.lastContentId,
      isExhausted: progress.isExhausted,
    });
  } catch (err: any) {
    console.error('[/api/vani/progress]', err);
    return jsonUtf8({ error: err.message || 'Internal error' }, { status: 500 });
  }
}
