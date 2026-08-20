// src/lib/vani/engine.ts
// Vaani Zero-Repetition Content Engine
//
// Core principle:
//   userId + section + date → one deterministic assignment
//   Assignment is created atomically and cached. Never random.
//   Progress advances only when the user explicitly marks an item as consumed.
//
// Firestore Collections:
//   vani_assignments/{userId}_{section}/{date}   ← daily idempotency
//   vani_progress/{userId}_{section}             ← sequence cursor
//   vani_consumption/{userId}_{section}/{contentId} ← consumed items

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
  getCorpusItems,
  getCorpusItemById,
  findNextUnconsumed,
  getNextNItems,
  RegistryItem,
} from './corpus-registry';

// ─────────────── FIRESTORE PATH HELPERS ───────────────

function assignmentDocPath(userId: string, section: VaniSection, date: string) {
  return `vani_assignments/${userId}_${section}/daily/${date}`;
}

function progressDocPath(userId: string, section: VaniSection) {
  return `vani_progress/${userId}_${section}`;
}

function consumptionColPath(userId: string, section: VaniSection) {
  return `vani_consumption/${userId}_${section}`;
}

// ─────────────── DATE HELPER ───────────────

export function getTodayDateKey(): string {
  const now = new Date();
  // Use IST (UTC+5:30) for consistent daily boundaries for Indian users
  const ist = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
  return ist.toISOString().slice(0, 10);
}

// ─────────────── PROGRESS HELPERS ───────────────

async function getProgress(userId: string, section: VaniSection): Promise<VaniProgress> {
  const db = getAdminDb();
  const doc = await db.doc(progressDocPath(userId, section)).get();
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
  const colRef = db.collection(consumptionColPath(userId, section));
  const snap = await colRef.get();
  return new Set(snap.docs.map(d => d.id));
}

// ─────────────── CORE ENGINE ───────────────

export interface AssignmentResult {
  assignment: VaniAssignment;
  items: RegistryItem[];
  progress: VaniCorpusProgress;
  isExhausted: boolean;
}

/**
 * Get or create today's assignment for a user+section.
 * This is fully idempotent: calling it N times on the same date returns the same result.
 */
export async function getOrCreateTodayAssignment(
  userId: string,
  section: VaniSection,
  dateKey?: string,
): Promise<AssignmentResult> {
  const db = getAdminDb();
  const date = dateKey || getTodayDateKey();
  const assignmentPath = assignmentDocPath(userId, section, date);

  // 1. Check if today's assignment already exists
  const existingDoc = await db.doc(assignmentPath).get();
  if (existingDoc.exists) {
    const assignment = existingDoc.data() as VaniAssignment;
    const progress = await getProgress(userId, section);
    const total = getCorpusTotalCount(section);

    // Resolve content items from registry
    const contentIds = assignment.contentIds || (assignment.contentId ? [assignment.contentId] : []);
    const items = contentIds
      .map(id => getCorpusItemById(section, id))
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
    };
  }

  // 2. No existing assignment — create one atomically
  const dailyCount = VANI_DAILY_COUNT[section];
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
    };
  }

  // 3. Find next N unconsumed items
  const selectedItems: RegistryItem[] = [];

  if (dailyCount === 1) {
    // Single-item section
    const next = findNextUnconsumed(section, progress.currentSequenceNumber, consumed);
    if (next) selectedItems.push(next);
  } else {
    // Multi-item section (doha: 3, veda: 4)
    const items = getNextNItems(section, progress.currentSequenceNumber, dailyCount, consumed);
    selectedItems.push(...items);
  }

  // Handle corpus exhaustion (no unconsumed items found)
  if (selectedItems.length === 0) {
    // Mark as exhausted in progress
    await db.doc(progressDocPath(userId, section)).set(
      { isExhausted: true },
      { merge: true }
    );

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
    };
  }

  // 4. Create assignment atomically using a transaction
  const assignment: VaniAssignment = {
    contentId: selectedItems[0].id,
    contentIds: selectedItems.map(i => i.id),
    section,
    date,
    assignedAt: new Date().toISOString(),
    isConsumed: false,
  };

  // Use a transaction to prevent race conditions across devices
  await db.runTransaction(async (txn) => {
    const docRef = db.doc(assignmentPath);
    const snap = await txn.get(docRef);
    if (!snap.exists) {
      txn.set(docRef, assignment);
    }
  });

  // Re-read to handle the case where another device wrote first
  const finalDoc = await db.doc(assignmentPath).get();
  const finalAssignment = finalDoc.data() as VaniAssignment;
  const finalContentIds = finalAssignment.contentIds || [finalAssignment.contentId];
  const finalItems = finalContentIds
    .map(id => getCorpusItemById(section, id))
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
  };
}

/**
 * Mark a content item as consumed by the user.
 * Advances the progress cursor to the next unconsumed item.
 * Returns: new progress state.
 */
export async function markConsumed(
  userId: string,
  section: VaniSection,
  contentId: string,
): Promise<{ nextSequenceNumber: number; isExhausted: boolean; consumedCount: number }> {
  const db = getAdminDb();

  const progress = await getProgress(userId, section);
  const total = getCorpusTotalCount(section);

  // Write consumption record
  const consumptionRef = db
    .collection(consumptionColPath(userId, section))
    .doc(contentId);

  const consumptionRecord: VaniConsumption = {
    contentId,
    section,
    consumedAt: new Date().toISOString(),
    cycleNumber: progress.cycleNumber,
  };

  await consumptionRef.set(consumptionRecord);

  // Mark today's assignment as consumed
  const date = getTodayDateKey();
  const assignmentPath = assignmentDocPath(userId, section, date);
  await db.doc(assignmentPath).set({ isConsumed: true, consumedAt: new Date().toISOString() }, { merge: true });

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
  const nextSeq = nextItem ? nextItem.globalSequenceNumber : (
    isExhausted ? progress.currentSequenceNumber : (
      findNextUnconsumed(section, 1, consumed)?.globalSequenceNumber ?? progress.currentSequenceNumber
    )
  );

  // Update progress
  const updatedProgress: Partial<VaniProgress> = {
    currentSequenceNumber: nextSeq,
    consumedCount: newConsumedCount,
    lastContentId: contentId,
    lastShownAt: new Date().toISOString(),
    isExhausted,
  };

  await db.doc(progressDocPath(userId, section)).set(updatedProgress, { merge: true });

  return {
    nextSequenceNumber: nextSeq,
    isExhausted,
    consumedCount: newConsumedCount,
  };
}

/**
 * Mark all items in today's multi-item assignment as consumed.
 * Used for sections with dailyCount > 1 (doha, veda).
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
 * Get current progress for a user+section (for progress bars).
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
 * Begin Cycle 2 — resets the consumption cursor and increments cycleNumber.
 * All consumption records from the previous cycle are ARCHIVED (not deleted).
 * User must explicitly call this after corpus exhaustion.
 */
export async function beginNextCycle(
  userId: string,
  section: VaniSection,
): Promise<void> {
  const db = getAdminDb();
  const progress = await getProgress(userId, section);
  const newCycleNumber = progress.cycleNumber + 1;

  // Archive existing consumption records with cycle label
  const colRef = db.collection(consumptionColPath(userId, section));
  const existing = await colRef.get();

  const batch = db.batch();
  for (const doc of existing.docs) {
    // Move to archive
    const archiveRef = db.collection(
      `vani_consumption_archive/${userId}_${section}_cycle${progress.cycleNumber}`
    ).doc(doc.id);
    batch.set(archiveRef, doc.data());
    batch.delete(doc.ref);
  }
  await batch.commit();

  // Reset progress for new cycle
  const newProgress: VaniProgress = {
    section,
    currentSequenceNumber: 1,
    consumedCount: 0,
    cycleNumber: newCycleNumber,
    lastContentId: '',
    lastShownAt: new Date().toISOString(),
    isExhausted: false,
  };

  await db.doc(progressDocPath(userId, section)).set(newProgress);
}
