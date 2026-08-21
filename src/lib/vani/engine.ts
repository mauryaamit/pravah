// src/lib/vani/engine.ts
// Vaani Zero-Repetition Content Engine with Historical Persistence
//
// Core principles:
//   1. TODAY: userId + section + todayDate → atomic assignment via progression cursor.
//      Persisted permanently in vani_daily_assignments/{userId}_{date}_{section}.
//   2. HISTORY: userId + section + pastDate → read-only lookup of stored assignment,
//      falling back to deterministic canonical corpus edition if prior to zero-repetition engine.
//      Never advances progression cursor, never modifies consumption set.
//   3. PROGRESS: advances ONLY when user explicitly marks item as consumed.

import { getAdminDb } from '@/lib/firebase/admin';
import {
  VaniSection,
  VaniAssignment,
  VaniProgress,
  VaniConsumption,
  VaniCorpusProgress,
  VANI_DAILY_COUNT,
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

// ─────────────── DATE HELPER ───────────────

export function getTodayDateKey(): string {
  const now = new Date();
  // Use IST (UTC+5:30) for consistent daily boundaries for Indian users
  const ist = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
  return ist.toISOString().slice(0, 10);
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
 * Get or create today's assignment for a user+section.
 * For today's date: fully idempotent (creates on first visit, returns existing on subsequent).
 * For historical dates: read-only retrieval of stored assignment or canonical daily fallback.
 * Never advances progress when viewing past dates.
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

  // 2. If it's a historical date and no assignment document was explicitly created in Firestore,
  // resolve the deterministic historical edition that was presented on that date.
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
        assignedAt: new Date(date).toISOString(),
        isConsumed: false,
      };

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

  // 3. For today's date: create a new assignment atomically from progression engine
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
