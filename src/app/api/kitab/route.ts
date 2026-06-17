// src/app/api/kitab/route.ts
// Direct deterministic local data serving for Kitab page.
// Bypasses OpenLibrary API and Firestore caching for instant loads.

import { NextRequest, NextResponse } from 'next/server';
import { KITAB_DATA } from '@/app/(app)/kitab/data';
import { differenceInDays, parseISO } from 'date-fns';

export const dynamic = 'force-dynamic';

const EPOCH = new Date('2024-01-01');

type TabKey = 'hindi' | 'english' | 'indian_regional' | 'world' | 'classical_heritage';

function getDayIndex(modulo: number, date: Date) {
  const diff = differenceInDays(date, EPOCH);
  return Math.abs(diff % modulo);
}

export async function GET(request: NextRequest) {
  try {
    // Parse requested parameters
    const tab = (request.nextUrl.searchParams.get('tab') || 'hindi') as TabKey;
    const dateParam = request.nextUrl.searchParams.get('date');

    let date = new Date();
    if (dateParam) {
      try {
        date = parseISO(dateParam);
        if (isNaN(date.getTime())) {
          date = new Date();
        }
      } catch (e) {
        date = new Date();
      }
    }

    // Select book of the day using deterministic index
    const dayIdx = getDayIndex(KITAB_DATA.length, date);
    const dayEntry = KITAB_DATA[dayIdx];

    // Safe lookup fallback
    const tabData = dayEntry.tabs[tab] || dayEntry.tabs['hindi'];
    const { contemporary, classical } = tabData;

    // Rotate contemporary/classical based on dayIdx to ensure variety
    const book = (dayIdx % 2 === 0) ? contemporary : classical;

    return NextResponse.json({
      book,
      fetchedAt: new Date().toISOString(),
      source: 'local'
    });
  } catch (err: any) {
    console.error('Unexpected error in Kitab API:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}
