import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth } from '@/lib/firebase/admin';

export async function POST(req: NextRequest) {
  try {
    const adminAuth = getAdminAuth();

    const { idToken } = await req.json();
    if (!idToken) {
      return NextResponse.json({ error: 'idToken is required' }, { status: 400 });
    }

    // Verify the ID token to get user info and creation time
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const userRecord = await adminAuth.getUser(decodedToken.uid);
    const creationTime = new Date(userRecord.metadata.creationTime).getTime();

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

    cookies().set('pravah-created-at', String(creationTime), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: expiresIn / 1000,
      path: '/',
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('[session] Error:', err);
    return NextResponse.json({ error: err.message || 'Unauthorized' }, { status: 401 });
  }
}

export async function DELETE() {
  cookies().delete('pravah-token');
  return NextResponse.json({ ok: true });
}
