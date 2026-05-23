// src/lib/firebase/admin.ts
import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import { getAuth, type Auth } from 'firebase-admin/auth';

let adminApp: App | null = null;
let adminDb: Firestore | null = null;
let adminAuth: Auth | null = null;

const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;

if (projectId && clientEmail && privateKey) {
  try {
    adminApp = getApps().find(a => a.name === 'admin') ?? initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey: privateKey.replace(/\\n/g, '\n'),
      }),
    }, 'admin');

    adminDb = getFirestore(adminApp);
    adminDb.settings({ ignoreUndefinedProperties: true });
    adminAuth = getAuth(adminApp);
  } catch (err) {
    console.error('Error initializing Firebase Admin SDK:', err);
  }
} else {
  console.warn('Firebase Admin environment variables missing. Firebase Admin SDK not initialized.');
}

export { adminDb, adminAuth };
