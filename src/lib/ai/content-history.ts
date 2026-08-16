// src/lib/ai/content-history.ts
// Persistent per-page content history for the AI uniqueness check.
// Stores a JSON log file per page under data/content-history/{pageId}.json.
// History is append-only; read on every uniqueness check to give the AI
// full context. Only resets (allows repeats) when the pool is exhausted.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const HISTORY_DIR = join(process.cwd(), 'data', 'content-history');

export interface ContentHistoryEntry {
  id: string;           // Unique identifier (poem id, book title+author, concept name)
  title: string;        // Display title
  body: string;         // Short fingerprint/summary of the content body (first 500 chars)
  publishedAt: string;  // ISO timestamp
  pageId: string;
}

function ensureDir() {
  if (!existsSync(HISTORY_DIR)) {
    mkdirSync(HISTORY_DIR, { recursive: true });
  }
}

function historyPath(pageId: string): string {
  return join(HISTORY_DIR, `${pageId}.json`);
}

/**
 * Load full history for a page. Returns empty array if no history yet.
 */
export function getHistory(pageId: string): ContentHistoryEntry[] {
  ensureDir();
  const path = historyPath(pageId);
  if (!existsSync(path)) return [];
  try {
    const raw = readFileSync(path, 'utf-8');
    return JSON.parse(raw) as ContentHistoryEntry[];
  } catch {
    return [];
  }
}

/**
 * Append a new entry to the history log.
 */
export function addToHistory(pageId: string, entry: ContentHistoryEntry): void {
  ensureDir();
  const history = getHistory(pageId);
  history.push(entry);
  writeFileSync(historyPath(pageId), JSON.stringify(history, null, 2), 'utf-8');
}

/**
 * Check if the full pool has been exhausted (all unique items have been served).
 * If exhausted, the uniqueness check allows repeats.
 */
export function isPoolExhausted(pageId: string, totalPoolSize: number): boolean {
  const history = getHistory(pageId);
  const uniqueServed = new Set(history.map(e => e.id)).size;
  return uniqueServed >= totalPoolSize;
}

/**
 * Check if a specific content ID has already been served.
 */
export function hasBeenServed(pageId: string, contentId: string): boolean {
  const history = getHistory(pageId);
  return history.some(e => e.id === contentId);
}

/**
 * Get a compact summary of history suitable for sending to the AI.
 * Returns the list of titles + body fingerprints (not full bodies).
 */
export function getHistorySummary(pageId: string): Array<{ title: string; bodySnippet: string }> {
  const history = getHistory(pageId);
  return history.map(e => ({
    title: e.title,
    bodySnippet: e.body.slice(0, 300),
  }));
}

/**
 * Stats about current history state.
 */
export function getHistoryStats(pageId: string, totalPoolSize?: number) {
  const history = getHistory(pageId);
  const uniqueIds = new Set(history.map(e => e.id));
  return {
    pageId,
    totalServed: history.length,
    uniqueServed: uniqueIds.size,
    totalPoolSize: totalPoolSize || null,
    exhausted: totalPoolSize ? uniqueIds.size >= totalPoolSize : false,
    oldestEntry: history[0]?.publishedAt || null,
    latestEntry: history[history.length - 1]?.publishedAt || null,
  };
}
