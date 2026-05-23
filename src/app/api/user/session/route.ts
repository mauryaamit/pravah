import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase/admin';

export async function POST(req: NextRequest) {
  try {
    if (!adminAuth) {
      return NextResponse.json({ error: 'Firebase Admin not initialized' }, { status: 500 });
    }

    const { idToken } = await req.json();
    if (!idToken) {
      return NextResponse.json({ error: 'idToken is required' }, { status: 400 });
    }

    // Set session cookie valid for 5 days
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

    cookies().set('pravah-token', sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: expiresIn / 1000,
      path: '/',
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Session create error:', err);
    return NextResponse.json({ error: err.message || 'Unauthorized' }, { status: 401 });
  }
}

export async function DELETE() {
  cookies().delete('pravah-token');
  return NextResponse.json({ ok: true });
}
