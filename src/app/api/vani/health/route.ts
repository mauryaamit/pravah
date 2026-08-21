// src/app/api/vani/health/route.ts
// Development / Admin diagnostic health endpoint for Vaani

import { NextRequest } from 'next/server';
import { runVaaniHealthCheck } from '@/lib/vani/health-check';
import { jsonUtf8 } from '@/lib/vani/api-helper';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const report = runVaaniHealthCheck();
    return jsonUtf8(report, { status: report.status === 'ERROR' ? 500 : 200 });
  } catch (err: any) {
    return jsonUtf8({ error: err.message }, { status: 500 });
  }
}
