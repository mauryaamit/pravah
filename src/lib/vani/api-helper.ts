// src/lib/vani/api-helper.ts
import { NextResponse } from 'next/server';

export function jsonUtf8(data: any, init?: { status?: number; headers?: Record<string, string> }) {
  const headers = new Headers(init?.headers);
  headers.set('Content-Type', 'application/json; charset=utf-8');
  return NextResponse.json(data, {
    status: init?.status ?? 200,
    headers,
  });
}
