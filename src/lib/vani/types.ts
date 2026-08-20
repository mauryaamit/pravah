// src/lib/vani/types.ts
// Shared types for the Vaani Zero-Repetition Knowledge Engine

export type VaniSection =
  | 'doha'
  | 'gita'
  | 'ramayan'
  | 'mahabharat'
  | 'upanishad'
  | 'veda'
  | 'purana'
  | 'bhasha'
  | 'vyakaran';

export const VANI_SECTIONS: VaniSection[] = [
  'doha', 'gita', 'ramayan', 'mahabharat', 'upanishad',
  'veda', 'purana', 'bhasha', 'vyakaran',
];

// How many items are shown per day for multi-item sections
export const VANI_DAILY_COUNT: Record<VaniSection, number> = {
  doha: 3,       // 3 dohas per day
  gita: 1,       // 1 shloka per day
  ramayan: 1,    // 1 chaupai per day
  mahabharat: 1, // 1 entry per day
  upanishad: 1,  // 1 mantra per day
  veda: 4,       // 1 from each of the 4 Vedas
  purana: 1,     // 1 entry per day
  bhasha: 3,     // Sanskrit + Awadhi + regional
  vyakaran: 1,   // 1 concept per day
};

// ─────────────── CORPUS ITEM (generic) ───────────────
export interface CorpusItem {
  id: string;                  // Permanent, unique, deterministic
  globalSequenceNumber: number; // 1-indexed sequential position in corpus
  section: VaniSection;
  subsection?: string;         // For Veda: 'rigveda' | 'samaveda' | ...
  source: CorpusSource;
}

export interface CorpusSource {
  name: string;
  edition?: string;
  url?: string;
  license: 'public-domain' | 'creative-commons' | 'original-pravah-commentary' | 'traditional-oral';
}

// ─────────────── FIRESTORE SCHEMAS ───────────────

// vani_assignments/{userId}/{section}/{date}
export interface VaniAssignment {
  contentId: string;       // For single-item sections
  contentIds?: string[];   // For multi-item sections (doha: 3, veda: 4)
  section: VaniSection;
  date: string;            // YYYY-MM-DD
  assignedAt: string;      // ISO timestamp
  isConsumed: boolean;
  consumedAt?: string;
}

// vani_progress/{userId}/{section}
export interface VaniProgress {
  section: VaniSection;
  currentSequenceNumber: number;  // Next item to show (1-indexed)
  consumedCount: number;
  cycleNumber: number;            // 1 = first time through corpus
  lastContentId: string;
  lastShownAt: string;
  isExhausted: boolean;
}

// vani_consumption/{userId}_{section}/{contentId}
export interface VaniConsumption {
  contentId: string;
  section: VaniSection;
  consumedAt: string;
  cycleNumber: number;
}

// ─────────────── API RESPONSE TYPES ───────────────

export interface VaniCorpusProgress {
  consumed: number;
  total: number | null;    // null = corpus not fully seeded yet
  cycleNumber: number;
  isExhausted: boolean;
}

// Single-item API response
export interface VaniTodayResponse {
  section: VaniSection;
  date: string;
  contentId: string;
  sequence: number;
  isNew: boolean;              // False if already consumed today
  isAlreadyConsumed: boolean;
  corpusProgress: VaniCorpusProgress;
  content: Record<string, any>;
  source: CorpusSource;
}

// Multi-item API response (doha x3, veda x4)
export interface VaniTodayMultiResponse {
  section: VaniSection;
  date: string;
  contentIds: string[];
  isAlreadyConsumed: boolean;
  corpusProgress: VaniCorpusProgress;
  items: Array<{
    contentId: string;
    sequence: number;
    content: Record<string, any>;
    source: CorpusSource;
  }>;
}

export interface VaniProgressResponse {
  section: VaniSection;
  consumed: number;
  total: number | null;
  cycleNumber: number;
  lastContentId: string;
  isExhausted: boolean;
}

export interface VaniMarkConsumedResponse {
  ok: boolean;
  nextSequenceNumber: number;
  isExhausted: boolean;
}
