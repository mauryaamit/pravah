// src/app/api/chalchitr/route.ts
// Direct deterministic local data serving for Chalchitr page from films pool.

import { NextRequest, NextResponse } from 'next/server';
import { HINDI_MOVIES, REGIONAL_MOVIES, ENGLISH_MOVIES, WORLD_MOVIES } from '@/app/(app)/chalchitr/films-pool';
import { differenceInDays, parseISO } from 'date-fns';

export const dynamic = 'force-dynamic';

const EPOCH = new Date('2024-01-01');

type CategoryKey = 'choice' | 'academy' | 'documentary' | 'short';
type LanguageKey = 'hindi' | 'indian_regional' | 'english' | 'world';

function get30DayIndex(date: Date) {
  const diff = differenceInDays(date, EPOCH);
  return Math.abs(diff % 30);
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

    const dayIdx = get30DayIndex(date);

    // Select the pool based on language
    let pool = HINDI_MOVIES;
    if (language === 'indian_regional') pool = REGIONAL_MOVIES;
    else if (language === 'english') pool = ENGLISH_MOVIES;
    else if (language === 'world') pool = WORLD_MOVIES;

    // Determine offsets based on category to ensure different movies in different categories
    let contemporaryOffset = 0;
    let classicalOffset = 15;

    if (category === 'choice') {
      contemporaryOffset = 0;
      classicalOffset = 15;
    } else if (category === 'academy') {
      contemporaryOffset = 3;
      classicalOffset = 18;
    } else if (category === 'documentary') {
      contemporaryOffset = 6;
      classicalOffset = 21;
    } else if (category === 'short') {
      contemporaryOffset = 9;
      classicalOffset = 24;
    }

    // Hindi pool is larger (60 movies), so we can shift classical by 30 to make sure no overlaps
    if (pool.length >= 60) {
      if (category === 'choice') {
        contemporaryOffset = 0;
        classicalOffset = 30;
      } else if (category === 'academy') {
        contemporaryOffset = 5;
        classicalOffset = 35;
      } else if (category === 'documentary') {
        contemporaryOffset = 10;
        classicalOffset = 40;
      } else if (category === 'short') {
        contemporaryOffset = 15;
        classicalOffset = 45;
      }
    }

    const contemporary = pool[(dayIdx + contemporaryOffset) % pool.length];
    const classical = pool[(dayIdx + classicalOffset) % pool.length];

    return NextResponse.json({
      contemporary,
      classical,
      fetchedAt: new Date().toISOString(),
      source: 'local_pool'
    });
  } catch (err: any) {
    console.error('Unexpected error in Chalchitr API:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}
