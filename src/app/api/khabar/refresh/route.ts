// src/app/api/khabar/refresh/route.ts
// API Route to manually trigger an immediate live Khabar refresh

import { NextResponse } from 'next/server';
import { getOrGenerateEdition } from '@/lib/khabar/storage/edition-store';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const today = new Date();
    const freshEdition = await getOrGenerateEdition(today, true);
    return NextResponse.json({
      success: true,
      message: 'Khabar edition refreshed successfully',
      edition: freshEdition,
    });
  } catch (error) {
    console.error('Error refreshing Khabar edition:', error);
    return NextResponse.json(
      { error: 'Failed to refresh Khabar edition' },
      { status: 500 }
    );
  }
}
