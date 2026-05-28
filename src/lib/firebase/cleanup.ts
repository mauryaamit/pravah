import { db } from './client';
import { collection, query, where, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { subDays, format } from 'date-fns';

/**
 * Writes a cleanup marker for any Firestore document that should be deleted after 30 days.
 * @param uid User ID
 * @param docPath Absolute path to the document (e.g. `users/{uid}/sukoon/resonances/{date}/{lang}`)
 * @param dateStr The date of the interaction in `YYYY-MM-DD` format
 */
export async function writeCleanupMarker(uid: string, docPath: string, dateStr: string) {
  if (!db) return;
  try {
    const safeKey = docPath.replace(/\//g, '_');
    const markerRef = doc(db, `users/${uid}/cleanup_markers`, safeKey);
    await setDoc(markerRef, {
      path: docPath,
      date: dateStr,
      createdAt: new Date()
    });
  } catch (err) {
    console.error('Error writing cleanup marker:', err);
  }
}

/**
 * Queries all cleanup markers for the user older than 30 days, deletes the target documents,
 * and removes the cleanup markers themselves.
 * @param uid User ID
 */
export async function runClientCleanup(uid: string) {
  if (!db) return;
  try {
    const thirtyDaysAgo = subDays(new Date(), 30);
    const dateStrLimit = format(thirtyDaysAgo, 'yyyy-MM-dd');

    const colRef = collection(db, `users/${uid}/cleanup_markers`);
    const q = query(colRef, where('date', '<', dateStrLimit));
    const snap = await getDocs(q);

    for (const markerDoc of snap.docs) {
      const data = markerDoc.data();
      const docPath = data.path;
      
      try {
        // Delete the actual target document
        await deleteDoc(doc(db, docPath));
      } catch (e) {
        // Document might already be deleted or inaccessible
      }
      
      // Delete the marker itself
      await deleteDoc(markerDoc.ref);
    }
  } catch (err) {
    console.error('Error running client-side cleanup:', err);
  }
}
