// src/app/api/debug-env/route.ts
// Safe environment diagnostics endpoint.
// Returns which env vars are present (never their values) and validates the Gemini key
// by making a minimal live test call. No sensitive data is returned.

import { NextRequest, NextResponse } from 'next/server';
import { verifyGeminiKey, getGeminiApiKey } from '@/lib/ai/gemini';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Check which keys are present (without revealing values)
    const envStatus = {
      GEMINI_API_KEY: !!process.env.GEMINI_API_KEY,
      GOOGLE_GENERATIVE_AI_API_KEY: !!process.env.GOOGLE_GENERATIVE_AI_API_KEY,
      GOOGLE_AI_API_KEY: !!process.env.GOOGLE_AI_API_KEY,
      NASA_API_KEY: !!process.env.NASA_API_KEY,
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      FIREBASE_ADMIN_PROJECT_ID: !!process.env.FIREBASE_ADMIN_PROJECT_ID,
    };

    const resolvedKeyName =
      process.env.GEMINI_API_KEY ? 'GEMINI_API_KEY' :
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ? 'GOOGLE_GENERATIVE_AI_API_KEY' :
      process.env.GOOGLE_AI_API_KEY ? 'GOOGLE_AI_API_KEY' :
      null;

    // Only run live Gemini test if a key is present
    let geminiTest: Awaited<ReturnType<typeof verifyGeminiKey>> | null = null;
    if (resolvedKeyName) {
      geminiTest = await verifyGeminiKey();
    }

    const result = {
      timestamp: new Date().toISOString(),
      envStatus,
      gemini: {
        keyFound: !!resolvedKeyName,
        resolvedKeyName,
        test: geminiTest,
        status: geminiTest?.valid
          ? '✅ API key is valid and working'
          : resolvedKeyName
            ? `❌ Key found (${resolvedKeyName}) but test call failed: ${geminiTest?.error}`
            : '❌ No Gemini API key found. Add GEMINI_API_KEY to .env.local',
      },
    };

    const statusCode = geminiTest?.valid || !resolvedKeyName ? 200 : 424;
    return NextResponse.json(result, { status: statusCode });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Unexpected error in debug-env', timestamp: new Date().toISOString() },
      { status: 500 }
    );
  }
}
