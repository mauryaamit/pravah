// src/app/api/content-check/route.ts
// Reusable AI uniqueness check endpoint for all daily-content pages.
//
// POST /api/content-check
// Body: {
//   pageId: string,            // e.g. 'kavitalay', 'kitab', 'darshan'
//   candidate: {
//     id: string,
//     title: string,
//     body: string,
//   },
//   totalPoolSize?: number,    // Optional: total unique items in pool (for exhaustion check)
//   recordIfUnique?: boolean,  // If true, add to history on pass (default: false)
// }
//
// Response: UniquenessResult + historyStats

import { NextRequest, NextResponse } from 'next/server';
import { checkUniqueness, UniquenessCandidate } from '@/lib/ai/uniqueness-check';
import { addToHistory, getHistoryStats } from '@/lib/ai/content-history';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pageId, candidate, totalPoolSize, recordIfUnique = false } = body as {
      pageId: string;
      candidate: UniquenessCandidate;
      totalPoolSize?: number;
      recordIfUnique?: boolean;
    };

    if (!pageId || !candidate?.id || !candidate?.title || candidate?.body === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: pageId, candidate.id, candidate.title, candidate.body' },
        { status: 400 }
      );
    }

    // Run uniqueness check
    const result = await checkUniqueness(candidate, pageId, totalPoolSize);

    // Record to history if unique and caller requested it
    if (result.isUnique && recordIfUnique) {
      addToHistory(pageId, {
        id: candidate.id,
        title: candidate.title,
        body: candidate.body.slice(0, 500),
        publishedAt: new Date().toISOString(),
        pageId,
      });
    }

    const stats = getHistoryStats(pageId, totalPoolSize);

    return NextResponse.json({
      ...result,
      historyStats: stats,
      checkedAt: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error('[content-check] Error:', err);
    return NextResponse.json(
      { error: err.message || 'Unexpected error in content-check' },
      { status: 500 }
    );
  }
}

// GET /api/content-check?pageId=xxx — return history stats for a page
export async function GET(request: NextRequest) {
  const pageId = request.nextUrl.searchParams.get('pageId');
  if (!pageId) {
    return NextResponse.json({ error: 'pageId query param required' }, { status: 400 });
  }
  const stats = getHistoryStats(pageId);
  return NextResponse.json(stats);
}
