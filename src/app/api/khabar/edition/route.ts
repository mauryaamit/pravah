// src/app/api/khabar/edition/route.ts
// API Route to fetch Khabar edition for any given date or today

import { NextRequest, NextResponse } from 'next/server';
import { getOrGenerateEdition } from '@/lib/khabar/storage/edition-store';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get('date');

    let targetDate = new Date();
    if (dateParam) {
      const parsed = new Date(dateParam);
      if (!isNaN(parsed.getTime())) {
        targetDate = parsed;
      }
    }

    const edition = await getOrGenerateEdition(targetDate, false);
    return NextResponse.json(edition);
  } catch (error) {
    console.error('Error serving Khabar edition:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve Khabar edition' },
      { status: 500 }
    );
  }
}
