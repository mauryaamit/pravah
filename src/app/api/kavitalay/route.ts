// src/app/api/kavitalay/route.ts
// Serving dynamic, unique daily poems from the 120-poem pool with a 30-day rotation.

import { NextRequest, NextResponse } from 'next/server';
import { Poem, KavitalayDayEntry } from '@/app/(app)/kavitalay/data';
import { HINDI_POEMS, URDU_POEMS, ENGLISH_POEMS, WORLD_POEMS } from '@/app/(app)/kavitalay/poems-pool';
import { differenceInDays, parseISO } from 'date-fns';

export const dynamic = 'force-dynamic';

const EPOCH = new Date('2024-01-01');

function get30DayIndex(date: Date): number {
  const diff = differenceInDays(date, EPOCH);
  return Math.abs(diff % 30);
}

export async function GET(request: NextRequest) {
  try {
    // Parse requested date
    const dateParam = request.nextUrl.searchParams.get('date');
    let date = new Date();
    if (dateParam) {
      try {
        date = parseISO(dateParam);
        if (isNaN(date.getTime())) date = new Date();
      } catch (e) {
        date = new Date();
      }
    }

    const dayIdx = get30DayIndex(date);

    // Build the dynamic entry from our unique pools ensuring no repeats within 30 days
    const entry: KavitalayDayEntry = {
      dayIndex: dayIdx,
      hindi: {
        poem_of_day: HINDI_POEMS[dayIdx % HINDI_POEMS.length],
        others: [
          HINDI_POEMS[(dayIdx + 1) % HINDI_POEMS.length],
          HINDI_POEMS[(dayIdx + 2) % HINDI_POEMS.length]
        ]
      },
      urdu: {
        poem_of_day: URDU_POEMS[dayIdx % URDU_POEMS.length],
        others: [
          URDU_POEMS[(dayIdx + 1) % URDU_POEMS.length],
          URDU_POEMS[(dayIdx + 2) % URDU_POEMS.length]
        ]
      },
      english: {
        poem_of_day: ENGLISH_POEMS[dayIdx % ENGLISH_POEMS.length],
        others: [
          ENGLISH_POEMS[(dayIdx + 1) % ENGLISH_POEMS.length],
          ENGLISH_POEMS[(dayIdx + 2) % ENGLISH_POEMS.length]
        ]
      },
      other: {
        poem_of_day: WORLD_POEMS[dayIdx % WORLD_POEMS.length],
        others: [
          WORLD_POEMS[(dayIdx + 1) % WORLD_POEMS.length],
          WORLD_POEMS[(dayIdx + 2) % WORLD_POEMS.length]
        ]
      }
    };

    return NextResponse.json({
      entry,
      fetchedAt: new Date().toISOString(),
      source: 'local_pool'
    });
  } catch (err: any) {
    console.error('Unexpected error in Kavitalay API:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}

