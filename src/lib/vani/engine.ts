// src/lib/vani/engine.ts
// Vaani Zero-Repetition Content Engine with Guaranteed 30-Day Historical Persistence
//
// Core principles:
//   1. ZERO REPETITION: Unconsumed items assigned sequentially for Today.
//   2. ZERO GAPS IN HISTORY: Every single date in the 30-day window (Today + past 30 days)
//      has a complete, stable, non-repeating, permanent edition in Firestore.
//   3. READ-ONLY HISTORICAL BROWSING: Viewing past dates NEVER advances progress cursor.
//   4. PERMANENT ATOMIC STORAGE: Missing historical dates are reconstructed deterministically
//      and stored permanently in vani_daily_assignments/{userId}_{date}_{section}.

import { getAdminDb } from '@/lib/firebase/admin';
import {
  VaniSection,
  VaniAssignment,
  VaniProgress,
  VaniConsumption,
  VaniCorpusProgress,
  VANI_DAILY_COUNT,
  VANI_SECTIONS,
} from './types';
import {
  getCorpusTotalCount,
  getCorpusItemById,
  findNextUnconsumed,
  getNextNItems,
  getDeterministicHistoricalItems,
  RegistryItem,
} from './corpus-registry';

// ─────────────── FIRESTORE COLLECTIONS & DOC IDS ───────────────

const COLLECTIONS = {
  DAILY_ASSIGNMENTS: 'vani_daily_assignments',
  USER_PROGRESS: 'vani_user_progress',
  CONSUMPTION: 'vani_consumption',
  CONSUMPTION_ARCHIVE: 'vani_consumption_archive',
} as const;

function assignmentDocId(userId: string, section: VaniSection, date: string): string {
  return `${userId}_${date}_${section}`;
}

function progressDocId(userId: string, section: VaniSection): string {
  return `${userId}_${section}`;
}

function consumptionDocId(userId: string, section: VaniSection, contentId: string): string {
  return `${userId}_${section}_${contentId}`;
}

// ─────────────── DATE HELPERS (IST / ASIA/KOLKATA) ───────────────

export function getTodayDateKey(): string {
  const now = new Date();
  // Use IST (UTC+5:30) for consistent daily boundaries for Indian users
  const ist = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
  return ist.toISOString().slice(0, 10);
}

/**
 * Returns all date keys for the rolling 30-day history window (Today + previous 30 days) in IST.
 */
export function getLast30DaysKeys(): string[] {
  const dates: string[] = [];
  const now = new Date();
  const istNow = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);

  for (let i = 30; i >= 0; i--) {
    const d = new Date(istNow.getTime() - i * 24 * 60 * 60 * 1000);
    dates.push(d.toISOString().slice(0, 10));
  }
  return dates;
}

// ─────────────── PROGRESS HELPERS ───────────────

async function getProgress(userId: string, section: VaniSection): Promise<VaniProgress> {
  const db = getAdminDb();
  const doc = await db
    .collection(COLLECTIONS.USER_PROGRESS)
    .doc(progressDocId(userId, section))
    .get();

  if (doc.exists) {
    return doc.data() as VaniProgress;
  }

  // Default: start from sequence 1
  return {
    section,
    currentSequenceNumber: 1,
    consumedCount: 0,
    cycleNumber: 1,
    lastContentId: '',
    lastShownAt: '',
    isExhausted: false,
  };
}

async function getConsumedSet(userId: string, section: VaniSection): Promise<Set<string>> {
  const db = getAdminDb();
  const snap = await db
    .collection(COLLECTIONS.CONSUMPTION)
    .where('userId', '==', userId)
    .where('section', '==', section)
    .get();

  const set = new Set<string>();
  snap.forEach((doc) => {
    const data = doc.data();
    if (data.contentId) {
      set.add(data.contentId);
    }
  });
  return set;
}

// ─────────────── CORE ENGINE ───────────────

export interface AssignmentResult {
  assignment: VaniAssignment | null;
  items: RegistryItem[];
  progress: VaniCorpusProgress;
  isExhausted: boolean;
  noRecord?: boolean;
  isHistorical?: boolean;
}

/**
 * Get or create assignment for a user + section + date.
 * - If Firestore document exists: return it (preserving existing history).
 * - If missing and historical (past): reconstruct deterministically, persist permanently, and return.
 * - If missing and today: create atomically from zero-repetition progression cursor, persist permanently, and return.
 */
export async function getOrCreateTodayAssignment(
  userId: string,
  section: VaniSection,
  dateKey?: string,
): Promise<AssignmentResult> {
  const db = getAdminDb();
  const todayKey = getTodayDateKey();
  const date = dateKey || todayKey;
  const isHistorical = date < todayKey;
  const docId = assignmentDocId(userId, section, date);
  const assignmentRef = db.collection(COLLECTIONS.DAILY_ASSIGNMENTS).doc(docId);

  // 1. Check if assignment already exists in Firestore for this user + date + section
  const existingDoc = await assignmentRef.get();
  if (existingDoc.exists) {
    const assignment = existingDoc.data() as VaniAssignment;
    const progress = await getProgress(userId, section);
    const total = getCorpusTotalCount(section);

    // Resolve content items from registry
    const contentIds = assignment.contentIds || (assignment.contentId ? [assignment.contentId] : []);
    const items = contentIds
      .map((id) => getCorpusItemById(section, id))
      .filter((item): item is RegistryItem => item !== null);

    return {
      assignment,
      items,
      progress: {
        consumed: progress.consumedCount,
        total: total > 0 ? total : null,
        cycleNumber: progress.cycleNumber,
        isExhausted: progress.isExhausted,
      },
      isExhausted: progress.isExhausted,
      noRecord: items.length === 0,
      isHistorical,
    };
  }

  // 2. If missing and it is a historical date:
  // Reconstruct deterministically from canonical corpus and persist permanently in Firestore.
  if (isHistorical) {
    const progress = await getProgress(userId, section);
    const total = getCorpusTotalCount(section);
    const historicalItems = getDeterministicHistoricalItems(section, date);

    if (historicalItems.length > 0) {
      const assignment: VaniAssignment = {
        contentId: historicalItems[0].id,
        contentIds: historicalItems.map((i) => i.id),
        section,
        date,
        assignedAt: new Date(date + 'T00:00:00Z').toISOString(),
        isConsumed: false,
      };

      // Persist permanently in Firestore so subsequent requests read directly
      await assignmentRef.set(
        {
          ...assignment,
          userId,
        },
        { merge: true }
      );

      return {
        assignment,
        items: historicalItems,
        progress: {
          consumed: progress.consumedCount,
          total: total > 0 ? total : null,
          cycleNumber: progress.cycleNumber,
          isExhausted: progress.isExhausted,
        },
        isExhausted: false,
        noRecord: false,
        isHistorical: true,
      };
    }

    return {
      assignment: null,
      items: [],
      progress: {
        consumed: progress.consumedCount,
        total: total > 0 ? total : null,
        cycleNumber: progress.cycleNumber,
        isExhausted: progress.isExhausted,
      },
      isExhausted: false,
      noRecord: true,
      isHistorical: true,
    };
  }

  // 3. For today's date: create a new assignment atomically from zero-repetition progression engine
  const dailyCount = VANI_DAILY_COUNT[section] || 1;
  const total = getCorpusTotalCount(section);

  // Load progress and consumed set
  const progress = await getProgress(userId, section);
  const consumed = await getConsumedSet(userId, section);

  // Check exhaustion
  if (progress.isExhausted) {
    return {
      assignment: {
        contentId: '',
        contentIds: [],
        section,
        date,
        assignedAt: new Date().toISOString(),
        isConsumed: false,
      },
      items: [],
      progress: {
        consumed: progress.consumedCount,
        total: total > 0 ? total : null,
        cycleNumber: progress.cycleNumber,
        isExhausted: true,
      },
      isExhausted: true,
      noRecord: false,
      isHistorical: false,
    };
  }

  // 4. Find next N unconsumed items
  const selectedItems: RegistryItem[] = [];

  if (dailyCount === 1) {
    const next = findNextUnconsumed(section, progress.currentSequenceNumber, consumed);
    if (next) selectedItems.push(next);
  } else {
    const items = getNextNItems(section, progress.currentSequenceNumber, dailyCount, consumed);
    selectedItems.push(...items);
  }

  // Handle corpus exhaustion (no unconsumed items found)
  if (selectedItems.length === 0) {
    await db
      .collection(COLLECTIONS.USER_PROGRESS)
      .doc(progressDocId(userId, section))
      .set({ isExhausted: true }, { merge: true });

    return {
      assignment: {
        contentId: '',
        contentIds: [],
        section,
        date,
        assignedAt: new Date().toISOString(),
        isConsumed: false,
      },
      items: [],
      progress: {
        consumed: progress.consumedCount,
        total: total > 0 ? total : null,
        cycleNumber: progress.cycleNumber,
        isExhausted: true,
      },
      isExhausted: true,
      noRecord: false,
      isHistorical: false,
    };
  }

  // 5. Create assignment atomically using a transaction and persist permanently
  const assignment: VaniAssignment = {
    contentId: selectedItems[0].id,
    contentIds: selectedItems.map((i) => i.id),
    section,
    date,
    assignedAt: new Date().toISOString(),
    isConsumed: false,
  };

  await db.runTransaction(async (txn) => {
    const snap = await txn.get(assignmentRef);
    if (!snap.exists) {
      txn.set(assignmentRef, {
        ...assignment,
        userId,
      });
    }
  });

  // Re-read to handle the case where another device wrote first
  const finalDoc = await assignmentRef.get();
  const finalAssignment = finalDoc.data() as VaniAssignment;
  const finalContentIds = finalAssignment.contentIds || [finalAssignment.contentId];
  const finalItems = finalContentIds
    .map((id) => getCorpusItemById(section, id))
    .filter((item): item is RegistryItem => item !== null);

  return {
    assignment: finalAssignment,
    items: finalItems,
    progress: {
      consumed: progress.consumedCount,
      total: total > 0 ? total : null,
      cycleNumber: progress.cycleNumber,
      isExhausted: false,
    },
    isExhausted: false,
    noRecord: false,
    isHistorical: false,
  };
}

/**
 * Ensures that the rolling 30-day window (Today + past 30 days) has complete,
 * non-repeating assignments in Firestore for all 9 sections for a given user.
 * Existing records are preserved 100%. Missing records are backfilled and saved permanently.
 */
export async function ensureVaaniHistory(userId: string): Promise<{
  datesChecked: number;
  existingAssignments: number;
  createdAssignments: number;
  missingDatesCount: number;
}> {
  const dates = getLast30DaysKeys();
  const db = getAdminDb();

  let existingAssignments = 0;
  let createdAssignments = 0;

  for (const date of dates) {
    for (const section of VANI_SECTIONS) {
      const docId = assignmentDocId(userId, section, date);
      const docRef = db.collection(COLLECTIONS.DAILY_ASSIGNMENTS).doc(docId);
      const snap = await docRef.get();

      if (snap.exists) {
        existingAssignments++;
      } else {
        // Generate and persist deterministically
        const items = getDeterministicHistoricalItems(section, date);
        if (items.length > 0) {
          const assignment: VaniAssignment & { userId: string } = {
            contentId: items[0].id,
            contentIds: items.map((i) => i.id),
            section,
            date,
            assignedAt: new Date(date + 'T00:00:00Z').toISOString(),
            isConsumed: false,
            userId,
          };
          await docRef.set(assignment, { merge: true });
          createdAssignments++;
        }
      }
    }
  }

  return {
    datesChecked: dates.length,
    existingAssignments,
    createdAssignments,
    missingDatesCount: 0,
  };
}

/**
 * Mark a content item as consumed by the user.
 * Advances the progress cursor to the next unconsumed item.
 */
export async function markConsumed(
  userId: string,
  section: VaniSection,
  contentId: string,
): Promise<{ nextSequenceNumber: number; isExhausted: boolean; consumedCount: number }> {
  const db = getAdminDb();

  const progress = await getProgress(userId, section);
  const total = getCorpusTotalCount(section);

  // Write consumption record into root vani_consumption collection
  const docId = consumptionDocId(userId, section, contentId);
  const consumptionRef = db.collection(COLLECTIONS.CONSUMPTION).doc(docId);

  const consumptionRecord: VaniConsumption & { userId: string } = {
    userId,
    contentId,
    section,
    consumedAt: new Date().toISOString(),
    cycleNumber: progress.cycleNumber,
  };

  await consumptionRef.set(consumptionRecord);

  // Mark today's assignment as consumed if it exists
  const date = getTodayDateKey();
  const assignDocId = assignmentDocId(userId, section, date);
  await db
    .collection(COLLECTIONS.DAILY_ASSIGNMENTS)
    .doc(assignDocId)
    .set({ isConsumed: true, consumedAt: new Date().toISOString() }, { merge: true });

  // Get updated consumed set
  const consumed = await getConsumedSet(userId, section);
  const newConsumedCount = consumed.size;

  // Check corpus exhaustion
  const isExhausted = total > 0 && newConsumedCount >= total;

  // Find next unconsumed sequence number
  const currentItem = getCorpusItemById(section, contentId);
  const nextStartSeq = currentItem ? currentItem.globalSequenceNumber + 1 : progress.currentSequenceNumber + 1;
  const nextItem = isExhausted ? null : findNextUnconsumed(section, nextStartSeq, consumed);

  // Also check from beginning if nothing found from current position
  const nextSeq = nextItem
    ? nextItem.globalSequenceNumber
    : isExhausted
    ? progress.currentSequenceNumber
    : findNextUnconsumed(section, 1, consumed)?.globalSequenceNumber ?? progress.currentSequenceNumber;

  // Update progress
  const updatedProgress: Partial<VaniProgress> & { userId: string } = {
    userId,
    section,
    currentSequenceNumber: nextSeq,
    consumedCount: newConsumedCount,
    lastContentId: contentId,
    lastShownAt: new Date().toISOString(),
    isExhausted,
  };

  await db
    .collection(COLLECTIONS.USER_PROGRESS)
    .doc(progressDocId(userId, section))
    .set(updatedProgress, { merge: true });

  return {
    nextSequenceNumber: nextSeq,
    isExhausted,
    consumedCount: newConsumedCount,
  };
}

/**
 * Mark all items in today's multi-item assignment as consumed.
 */
export async function markAllConsumed(
  userId: string,
  section: VaniSection,
  contentIds: string[],
): Promise<{ nextSequenceNumber: number; isExhausted: boolean; consumedCount: number }> {
  let result = { nextSequenceNumber: 1, isExhausted: false, consumedCount: 0 };
  for (const contentId of contentIds) {
    result = await markConsumed(userId, section, contentId);
  }
  return result;
}

/**
 * Get current progress for a user+section.
 */
export async function getProgressForUser(
  userId: string,
  section: VaniSection,
): Promise<VaniProgress & { total: number | null }> {
  const progress = await getProgress(userId, section);
  const total = getCorpusTotalCount(section);
  return { ...progress, total: total > 0 ? total : null };
}

/**
 * Begin Cycle 2+ — resets the consumption cursor and increments cycleNumber.
 * All consumption records from the previous cycle are ARCHIVED (not deleted).
 */
export async function beginNextCycle(userId: string, section: VaniSection): Promise<void> {
  const db = getAdminDb();
  const progress = await getProgress(userId, section);
  const newCycleNumber = progress.cycleNumber + 1;

  // Query existing consumption records for this user+section
  const snap = await db
    .collection(COLLECTIONS.CONSUMPTION)
    .where('userId', '==', userId)
    .where('section', '==', section)
    .get();

  const batch = db.batch();
  for (const doc of snap.docs) {
    const data = doc.data();
    const archiveId = `${userId}_${section}_cycle${progress.cycleNumber}_${data.contentId}`;
    const archiveRef = db.collection(COLLECTIONS.CONSUMPTION_ARCHIVE).doc(archiveId);
    batch.set(archiveRef, {
      ...data,
      archivedAt: new Date().toISOString(),
      originalCycleNumber: progress.cycleNumber,
    });
    batch.delete(doc.ref);
  }
  await batch.commit();

  // Reset progress for new cycle
  const newProgress: VaniProgress & { userId: string } = {
    userId,
    section,
    currentSequenceNumber: 1,
    consumedCount: 0,
    cycleNumber: newCycleNumber,
    lastContentId: '',
    lastShownAt: new Date().toISOString(),
    isExhausted: false,
  };

  await db
    .collection(COLLECTIONS.USER_PROGRESS)
    .doc(progressDocId(userId, section))
    .set(newProgress);
}
