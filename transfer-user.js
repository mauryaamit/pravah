// transfer-user.js
// One-time script to merge Firestore data from anonymous account to main account.
// Run: node transfer-user.js

const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

// 1. Load environment variables from .env.local if present
const envLocalPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const firstEquals = trimmed.indexOf('=');
    if (firstEquals === -1) return;
    const key = trimmed.substring(0, firstEquals).trim();
    let val = trimmed.substring(firstEquals + 1).trim();
    // Remove surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.substring(1, val.length - 1);
    }
    process.env[key] = val;
  });
}

async function main() {
  const serviceAccountPath = path.join(__dirname, 'serviceAccount.json');
  let credential;

  if (fs.existsSync(serviceAccountPath)) {
    console.log('🔄 Loading credentials from serviceAccount.json...');
    const serviceAccount = require(serviceAccountPath);
    credential = admin.credential.cert(serviceAccount);
  } else {
    console.log('🔄 serviceAccount.json not found. Attempting to load credentials from environment variables...');
    const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;

    if (!projectId || !clientEmail || !privateKey) {
      console.error('❌ Error: Firebase credentials are missing.');
      console.error('Please define FIREBASE_ADMIN_PROJECT_ID, FIREBASE_ADMIN_CLIENT_EMAIL, and FIREBASE_ADMIN_PRIVATE_KEY in .env.local or place serviceAccount.json in the project root.');
      process.exit(1);
    }

    credential = admin.credential.cert({
      projectId,
      clientEmail,
      privateKey: privateKey.replace(/\\n/g, '\n'),
    });
  }

  console.log('🔄 Initializing Firebase Admin SDK...');
  admin.initializeApp({
    credential
  });

  const db = admin.firestore();
  db.settings({ ignoreUndefinedProperties: true });

  const sourceUid = 'gIPe9flj3hqsyRJFK9g3';
  const targetUid = 'xS4pdezHkXY9EJE4G3SV';

  console.log(`📦 Starting migration from source UID [${sourceUid}] to target UID [${targetUid}]...`);

  const sourceUserRef = db.collection('users').doc(sourceUid);
  const targetUserRef = db.collection('users').doc(targetUid);

  await copyDocument(sourceUserRef, targetUserRef);

  console.log('🎉 Transfer complete');
}

async function copyDocument(sourceDocRef, targetDocRef) {
  const sourceDocSnap = await sourceDocRef.get();
  if (!sourceDocSnap.exists) {
    console.log(`[WARN] Source document does not exist: ${sourceDocRef.path}`);
  } else {
    const targetDocSnap = await targetDocRef.get();
    if (targetDocSnap.exists) {
      console.log(`[SKIP] Document already exists in target (keeping target): ${targetDocRef.path}`);
    } else {
      console.log(`[COPY] Document only exists in source (copying to target): ${targetDocRef.path}`);
      await targetDocRef.set(sourceDocSnap.data(), { merge: true });
    }
  }

  // List all subcollections under the source document
  const subcollections = await sourceDocRef.listCollections();
  for (const subcollection of subcollections) {
    const targetSubcollectionRef = targetDocRef.collection(subcollection.id);
    await copyCollection(subcollection, targetSubcollectionRef);
  }
}

async function copyCollection(sourceColRef, targetColRef) {
  console.log(`[START] Copying collection: ${sourceColRef.path} -> ${targetColRef.path}`);
  const docsSnap = await sourceColRef.get();
  console.log(`[INFO] Found ${docsSnap.size} documents in ${sourceColRef.path}`);

  let copiedCount = 0;
  let skippedCount = 0;

  for (const doc of docsSnap.docs) {
    const targetDocRef = targetColRef.doc(doc.id);
    const targetDocSnap = await targetDocRef.get();
    
    if (targetDocSnap.exists) {
      console.log(`  [SKIP] Document already exists in target: ${targetDocRef.path}`);
      skippedCount++;
    } else {
      console.log(`  [COPY] Document copied: ${targetDocRef.path}`);
      await targetDocRef.set(doc.data(), { merge: true });
      copiedCount++;
    }

    // Recursively copy nested subcollections
    const subcollections = await doc.ref.listCollections();
    for (const subcollection of subcollections) {
      const targetSubcollectionRef = targetDocRef.collection(subcollection.id);
      await copyCollection(subcollection, targetSubcollectionRef);
    }
  }

  console.log(`[COMPLETE] Collection ${sourceColRef.path} finished. Copied: ${copiedCount}, Skipped: ${skippedCount}`);
}

main().catch(err => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
