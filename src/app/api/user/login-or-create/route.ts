import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb, getAdminAuth } from '@/lib/firebase/admin';

export async function POST(req: NextRequest) {
  try {
    // getAdminDb/getAdminAuth throw a clear error if env vars are missing
    const adminDb   = getAdminDb();
    const adminAuth = getAdminAuth();

    const { name, email } = await req.json();
    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    let uid: string;
    let userData: any = null;
    let isNewUser = false;

    if (email) {
      // Find existing user by email
      const snap = await adminDb.collection('users').where('email', '==', email).limit(1).get();
      if (!snap.empty) {
        const doc = snap.docs[0];
        uid = doc.id;
        userData = doc.data();
      } else {
        // Create new user with email
        const userRef = adminDb.collection('users').doc();
        uid = userRef.id;
        isNewUser = true;

        const defaultPrefs = {
          theme: 'system',
          script: 'devanagari',
          defaultLang: 'en',
          soundEnabled: false,
          volume: 0.15,
          ttsSpeed: 1.0,
        };

        userData = {
          name,
          email,
          createdAt: new Date(),
          preferences: defaultPrefs,
        };

        await userRef.set(userData);
        await adminAuth.createUser({ uid, displayName: name, email });
        // Create default streak document
        await adminDb.collection('users').doc(uid).collection('streak').doc('status').set({
          current_streak: 0,
          longest_streak: 0,
          last_active_date: '',
          rewire_score: 0,
        });
      }
    } else {
      // Create a guest user with no email
      const userRef = adminDb.collection('users').doc();
      uid = userRef.id;
      isNewUser = true;

      const defaultPrefs = {
        theme: 'system',
        script: 'devanagari',
        defaultLang: 'en',
        soundEnabled: false,
        volume: 0.15,
        ttsSpeed: 1.0,
      };

      userData = {
        name,
        email: '',
        createdAt: new Date(),
        preferences: defaultPrefs,
      };

      await userRef.set(userData);
      await adminAuth.createUser({ uid, displayName: name });
      // Create default streak document
      await adminDb.collection('users').doc(uid).collection('streak').doc('status').set({
        current_streak: 0,
        longest_streak: 0,
        last_active_date: '',
        rewire_score: 0,
      });
    }

    // Generate Custom Token for client-side Firebase Auth sign-in
    const customToken = await adminAuth.createCustomToken(uid);

    return NextResponse.json({
      customToken,
      user: {
        id: uid,
        name: userData.name,
        email: userData.email,
        preferences: userData.preferences,
      },
      isNewUser,
    });
  } catch (err: any) {
    console.error('[login-or-create] Error:', err);
    return NextResponse.json({ error: err.message || 'Authentication failed' }, { status: 500 });
  }
}
