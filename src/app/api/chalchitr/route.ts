// src/app/api/chalchitr/route.ts
// Direct deterministic local data serving for Chalchitr page.
// Bypasses OMDB API and Firestore caching for instant loads and no placeholder movie names.

import { NextRequest, NextResponse } from 'next/server';
import { CHALCHITR_DATA } from '@/app/(app)/chalchitr/data';
import { differenceInDays, parseISO } from 'date-fns';

export const dynamic = 'force-dynamic';

const EPOCH = new Date('2024-01-01');

type CategoryKey = 'choice' | 'academy' | 'documentary' | 'short';
type LanguageKey = 'hindi' | 'indian_regional' | 'english' | 'world';

function getDayIndex(modulo: number, date: Date) {
  const diff = differenceInDays(date, EPOCH);
  return Math.abs(diff % modulo);
}

export async function GET(request: NextRequest) {
  try {
    // Parse requested parameters
    const category = (request.nextUrl.searchParams.get('category') || 'choice') as CategoryKey;
    const language = (request.nextUrl.searchParams.get('language') || 'hindi') as LanguageKey;
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

    // Select film of the day using deterministic index
    const dayIdx = getDayIndex(CHALCHITR_DATA.length, date);
    const dayEntry = CHALCHITR_DATA[dayIdx];

    // Safe lookup fallback
    const categoryData = dayEntry.categories[category] || dayEntry.categories['choice'];
    const { contemporary, classical } = categoryData[language] || categoryData['hindi'];

    return NextResponse.json({
      contemporary,
      classical,
      fetchedAt: new Date().toISOString(),
      source: 'local'
    });
  } catch (err: any) {
    console.error('Unexpected error in Chalchitr API:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}
