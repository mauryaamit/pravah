// src/lib/firebase/admin.ts
// Firebase Admin SDK — singleton pattern safe for Next.js dev hot-reload.

import { getApps, initializeApp, cert, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import { getAuth, type Auth } from 'firebase-admin/auth';

function getOrInitAdminApp(): App {
  const existing = getApps().find(a => a.name === 'admin');
  if (existing) return existing;

  const projectId   = process.env.FIREBASE_ADMIN_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  const privateKey  = process.env.FIREBASE_ADMIN_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    const missing = [
      !projectId   && 'FIREBASE_ADMIN_PROJECT_ID',
      !clientEmail && 'FIREBASE_ADMIN_CLIENT_EMAIL',
      !privateKey  && 'FIREBASE_ADMIN_PRIVATE_KEY',
    ].filter(Boolean).join(', ');
    throw new Error(`Firebase Admin: missing env vars: ${missing}`);
  }

  // Next.js dotenv may deliver the key with real newlines already, or with
  // escaped \n sequences depending on quoting. Handle both.
  const normalizedKey = privateKey.includes('\\n')
    ? privateKey.replace(/\\n/g, '\n')
    : privateKey;

  return initializeApp(
    {
      credential: cert({ projectId, clientEmail, privateKey: normalizedKey }),
    },
    'admin',
  );
}

// Cached references — survive module re-evaluation in Next.js dev hot-reload
// because getApps() is a singleton maintained by firebase-admin itself.
let _db:   Firestore | null = null;
let _auth: Auth | null = null;
let _settingsApplied = false;

export function getAdminDb(): Firestore {
  if (_db) return _db;
  const app = getOrInitAdminApp();
  _db = getFirestore(app);
  // settings() must be called before any Firestore operation and only once.
  if (!_settingsApplied) {
    _db.settings({ ignoreUndefinedProperties: true });
    _settingsApplied = true;
  }
  return _db;
}

export function getAdminAuth(): Auth {
  if (_auth) return _auth;
  const app = getOrInitAdminApp();
  _auth = getAuth(app);
  return _auth;
}

// Legacy named exports kept for backward compatibility.
// New code should call getAdminDb() / getAdminAuth() directly.
export let adminDb:   Firestore | null = null;
export let adminAuth: Auth | null = null;

try {
  adminDb   = getAdminDb();
  adminAuth = getAdminAuth();
} catch (err) {
  console.error('[Firebase Admin] Initialization error:', (err as Error).message);
}
