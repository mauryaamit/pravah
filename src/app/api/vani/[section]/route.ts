// src/app/api/vani/[section]/route.ts
// GET /api/vani/{section}?date=YYYY-MM-DD
// Direct alias to GET /api/vani/{section}/today?date=YYYY-MM-DD

import { NextRequest } from 'next/server';
import { GET as handleGet } from './today/route';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  context: { params: { section: string } }
) {
  return handleGet(req, context);
}
