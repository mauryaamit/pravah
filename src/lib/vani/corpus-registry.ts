// src/lib/vani/corpus-registry.ts
// Unified registry of all Vaani corpus data.
// Provides O(1) lookup, total counts, and item-by-sequence-number retrieval.

import {
  RAMAYAN_CHAUPAIS,
  GITA_SHLOKAS,
  MAHABHARAT_ENTRIES,
  UPANISHAD_ENTRIES,
  VEDA_DAILY_SETS,
  PURANA_ENTRIES,
  BHASHA_DISCOVERY_SETS,
  HINDI_VYAKARAN_ENTRIES,
} from '@/app/(app)/vani/data-heritage';
import { DOHA_COLLECTION } from '@/app/(app)/vani/data-doha';
import { VaniSection, CorpusSource } from './types';

// ─────────────── CORPUS ITEM INTERFACE ───────────────

export interface RegistryItem {
  id: string;
  globalSequenceNumber: number;
  section: VaniSection;
  subsection?: string;   // For Veda: 'rigveda' | 'samaveda' | 'yajurveda' | 'atharvaveda'
  content: Record<string, any>;
  source: CorpusSource;
}

// ─────────────── HELPERS ───────────────

/** Safely extracts id from any corpus entry, generating a fallback if missing. */
function safeId(entry: any, section: VaniSection, index: number): string {
  if (entry.id && typeof entry.id === 'string') return entry.id;
  return `${section}-auto-${String(index + 1).padStart(3, '0')}`;
}

/** Safely extracts globalSequenceNumber, falling back to index+1. */
function safeSeq(entry: any, index: number): number {
  if (typeof entry.globalSequenceNumber === 'number') return entry.globalSequenceNumber;
  if (typeof entry.sequenceNumber === 'number') return entry.sequenceNumber;
  return index + 1;
}

// ─────────────── CORPUS MAPS ───────────────
// Each corpus is stored as a sorted array (by globalSequenceNumber) and a Map for O(1) ID lookup.

function buildCorpus(
  rawEntries: any[],
  section: VaniSection,
  sourceResolver: (entry: any) => CorpusSource,
  subsectionResolver?: (entry: any) => string | undefined,
): RegistryItem[] {
  return rawEntries.map((entry, index) => ({
    id: safeId(entry, section, index),
    globalSequenceNumber: safeSeq(entry, index),
    section,
    subsection: subsectionResolver ? subsectionResolver(entry) : undefined,
    content: entry,
    source: sourceResolver(entry),
  })).sort((a, b) => a.globalSequenceNumber - b.globalSequenceNumber);
}

// DOHA
const dohaSource = (e: any): CorpusSource => ({
  name: e.source || 'Classical Doha Tradition',
  edition: 'Traditional Manuscript Canon',
  license: 'public-domain',
});

// GITA
const gitaSource = (): CorpusSource => ({
  name: 'Bhagavad Gita — Original Sanskrit',
  edition: 'Standard Sanskrit Critical Edition',
  url: 'https://www.gitasupersite.iitk.ac.in/',
  license: 'public-domain',
});

// RAMAYAN
const ramayanSource = (): CorpusSource => ({
  name: 'Shri Ramcharitmanas — Goswami Tulsidas',
  edition: 'Gita Press, Gorakhpur (Public Domain)',
  url: 'https://www.gitapress.org',
  license: 'public-domain',
});

// MAHABHARAT
const mahabharatSource = (): CorpusSource => ({
  name: 'Mahabharata — Critical Edition (Selected Passages)',
  edition: 'BORI Critical Edition selections (commentary Pravah original)',
  license: 'original-pravah-commentary',
});

// UPANISHAD
const upanishadSource = (e: any): CorpusSource => ({
  name: `${e.upanishadName || 'Upanishad'} — Original Sanskrit`,
  edition: 'Classical Sanskrit Text (Public Domain)',
  license: 'public-domain',
});

// VEDA
const vedaSource = (e: any): CorpusSource => ({
  name: 'Vedic Samhita — Classical Sanskrit',
  edition: 'Traditional recension (commentary Pravah original)',
  license: 'original-pravah-commentary',
});

// PURANA
const puranaSource = (e: any): CorpusSource => ({
  name: `${e.purana || 'Purana'} — Selected Passages`,
  edition: 'Traditional text (commentary Pravah original)',
  license: 'original-pravah-commentary',
});

// BHASHA
const bhashaSource = (): CorpusSource => ({
  name: 'Bharatiya Bhasha Multilingual Lexicon',
  edition: 'Pravah Original Compilation',
  license: 'original-pravah-commentary',
});

// VYAKARAN
const vyakaranSource = (): CorpusSource => ({
  name: 'Hindi Vyakaran — Structured Curriculum',
  edition: 'Pravah Original',
  license: 'original-pravah-commentary',
});

// ─────────────── BUILD ALL REGISTRIES ───────────────

export const DOHA_REGISTRY = buildCorpus(DOHA_COLLECTION, 'doha', dohaSource);
export const GITA_REGISTRY = buildCorpus(GITA_SHLOKAS, 'gita', gitaSource);
export const RAMAYAN_REGISTRY = buildCorpus(RAMAYAN_CHAUPAIS, 'ramayan', ramayanSource);
export const MAHABHARAT_REGISTRY = buildCorpus(MAHABHARAT_ENTRIES, 'mahabharat', mahabharatSource);
export const UPANISHAD_REGISTRY = buildCorpus(UPANISHAD_ENTRIES, 'upanishad', upanishadSource);
export const PURANA_REGISTRY = buildCorpus(PURANA_ENTRIES, 'purana', puranaSource);
export const BHASHA_REGISTRY = buildCorpus(BHASHA_DISCOVERY_SETS, 'bhasha', bhashaSource);
export const VYAKARAN_REGISTRY = buildCorpus(HINDI_VYAKARAN_ENTRIES, 'vyakaran', vyakaranSource);

// Veda is special: each "set" contains 4 sub-entries (one per Veda)
// We expand each set into individual items for the engine
export const VEDA_REGISTRY: RegistryItem[] = VEDA_DAILY_SETS.flatMap((set: any, setIndex: number) => {
  const vedas = ['rigveda', 'samaveda', 'yajurveda', 'atharvaveda'];
  const fields = ['rigveda', 'samaveda', 'yajurveda', 'atharvaveda'];
  return fields.map((veda, vIdx) => ({
    id: set[veda]?.id || `${veda.substring(0, 3)}-auto-${String(setIndex + 1).padStart(3, '0')}`,
    globalSequenceNumber: setIndex * 4 + vIdx + 1,
    section: 'veda' as VaniSection,
    subsection: veda,
    content: { ...set[veda], vedaType: veda, setIndex: setIndex + 1 },
    source: vedaSource(set[veda] || {}),
  }));
});

// ─────────────── CORPUS LOOKUP MAP ───────────────

export const REGISTRIES: Record<VaniSection, RegistryItem[]> = {
  doha: DOHA_REGISTRY,
  gita: GITA_REGISTRY,
  ramayan: RAMAYAN_REGISTRY,
  mahabharat: MAHABHARAT_REGISTRY,
  upanishad: UPANISHAD_REGISTRY,
  veda: VEDA_REGISTRY,
  purana: PURANA_REGISTRY,
  bhasha: BHASHA_REGISTRY,
  vyakaran: VYAKARAN_REGISTRY,
};

export const CORPUS_MAP = REGISTRIES;

// Build O(1) id-to-item maps
const ID_MAPS: Record<VaniSection, Map<string, RegistryItem>> = {} as any;
for (const section of Object.keys(REGISTRIES) as VaniSection[]) {
  ID_MAPS[section] = new Map(REGISTRIES[section].map(item => [item.id, item]));
}

// ─────────────── PUBLIC API ───────────────

/**
 * Get the total count of items in a corpus section.
 * Returns null only if the section is somehow not registered (shouldn't happen).
 */
export function getCorpusTotalCount(section: VaniSection): number {
  return REGISTRIES[section]?.length ?? 0;
}

/**
 * Get all items for a section, sorted by globalSequenceNumber.
 */
export function getCorpusItems(section: VaniSection): RegistryItem[] {
  return REGISTRIES[section] ?? [];
}

/**
 * Get a specific item by its content ID.
 */
export function getCorpusItemById(section: VaniSection, id: string): RegistryItem | null {
  return ID_MAPS[section]?.get(id) ?? null;
}

/**
 * Get the item at a given 1-indexed globalSequenceNumber.
 * Returns null if out of range (corpus exhausted).
 */
export function getCorpusItemBySequence(
  section: VaniSection,
  sequenceNumber: number
): RegistryItem | null {
  const items = REGISTRIES[section];
  if (!items || items.length === 0) return null;
  const item = items.find(i => i.globalSequenceNumber === sequenceNumber);
  return item ?? null;
}

/**
 * Get the next N items starting from a sequence number.
 * Used for daily multi-item sections (Doha x3, Veda x4).
 * Handles wrap-around if corpus is exhausted.
 */
export function getNextNItems(
  section: VaniSection,
  startSequence: number,
  count: number,
  consumed: Set<string>,
): RegistryItem[] {
  const items = REGISTRIES[section];
  if (!items || items.length === 0) return [];

  const result: RegistryItem[] = [];
  let cursor = startSequence - 1; // 0-indexed for array traversal

  for (let attempt = 0; attempt < items.length && result.length < count; attempt++) {
    const item = items[cursor % items.length];
    if (!consumed.has(item.id)) {
      result.push(item);
    }
    cursor++;
  }

  return result;
}

/**
 * Find the next unconsumed item in a corpus starting from a sequence number.
 * Returns null if all items are consumed (corpus exhausted).
 */
export function findNextUnconsumed(
  section: VaniSection,
  startSequence: number,
  consumed: Set<string>,
): RegistryItem | null {
  const items = REGISTRIES[section];
  if (!items || items.length === 0) return null;

  // Start searching from startSequence
  const sortedItems = [...items].sort((a, b) => a.globalSequenceNumber - b.globalSequenceNumber);
  
  // First: search from startSequence to end
  for (const item of sortedItems) {
    if (item.globalSequenceNumber >= startSequence && !consumed.has(item.id)) {
      return item;
    }
  }
  
  // If nothing found: all items from startSequence onwards consumed → corpus exhausted
  return null;
}

