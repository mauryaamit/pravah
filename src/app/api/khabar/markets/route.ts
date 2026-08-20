// src/app/api/khabar/markets/route.ts
// API Route to fetch live market snapshot and exchange statuses

import { NextResponse } from 'next/server';
import { defaultMarketProvider } from '@/lib/khabar/providers/market-provider';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const snapshot = await defaultMarketProvider.getMarketSnapshot();
    return NextResponse.json(snapshot);
  } catch (error) {
    console.error('Error fetching market snapshot:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve market snapshot' },
      { status: 500 }
    );
  }
}
