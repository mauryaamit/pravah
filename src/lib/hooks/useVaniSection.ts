// src/lib/hooks/useVaniSection.ts
// React hook for fetching and managing Vaani section content.
// Replaces all client-side corpus selection with backend API calls.

'use client';

import { useState, useEffect, useCallback } from 'react';
import { VaniSection } from '@/lib/vani/types';

export interface VaniContentItem {
  contentId: string;
  sequence: number;
  content: Record<string, any>;
  source: {
    name: string;
    edition?: string;
    url?: string;
    license: string;
  };
  subsection?: string;
}

export interface VaniCorpusProgress {
  consumed: number;
  total: number | null;
  cycleNumber: number;
  isExhausted: boolean;
}

export interface VaniSectionState {
  // For single-item sections
  item: VaniContentItem | null;
  // For multi-item sections (doha, veda)
  items: VaniContentItem[];
  // Progress
  progress: VaniCorpusProgress | null;
  // State flags
  loading: boolean;
  error: string | null;
  isConsumed: boolean;
  isExhausted: boolean;
  // Actions
  markAsExplored: () => Promise<void>;
  beginNextCycle: () => Promise<void>;
  reload: () => void;
}

const DEFAULT_PROGRESS: VaniCorpusProgress = {
  consumed: 0,
  total: null,
  cycleNumber: 1,
  isExhausted: false,
};

/**
 * Fetch today's Vaani content for a section.
 * Results are cached in sessionStorage to prevent redundant API calls on tab switches.
 */
export function useVaniSection(section: VaniSection): VaniSectionState {
  const [items, setItems] = useState<VaniContentItem[]>([]);
  const [progress, setProgress] = useState<VaniCorpusProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isConsumed, setIsConsumed] = useState(false);
  const [isExhausted, setIsExhausted] = useState(false);

  const cacheKey = `vani-${section}-${new Date().toISOString().slice(0, 10)}`;

  const fetchContent = useCallback(async () => {
    setLoading(true);
    setError(null);

    // Check sessionStorage cache first (prevents redundant API calls when switching tabs)
    try {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        setItems(parsed.items || []);
        setProgress(parsed.progress || DEFAULT_PROGRESS);
        setIsConsumed(parsed.isConsumed || false);
        setIsExhausted(parsed.isExhausted || false);
        setLoading(false);
        return;
      }
    } catch {}

    try {
      const res = await fetch(`/api/vani/${section}/today`);
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `HTTP ${res.status}`);
      }

      const data = await res.json();

      let resolvedItems: VaniContentItem[] = [];
      let resolvedProgress: VaniCorpusProgress = DEFAULT_PROGRESS;
      let resolvedIsConsumed = false;
      let resolvedIsExhausted = data.isExhausted || false;

      if (resolvedIsExhausted) {
        resolvedProgress = data.corpusProgress || DEFAULT_PROGRESS;
      } else if (data.items && Array.isArray(data.items)) {
        // Multi-item response (doha, veda)
        resolvedItems = data.items as VaniContentItem[];
        resolvedProgress = data.corpusProgress || DEFAULT_PROGRESS;
        resolvedIsConsumed = data.isAlreadyConsumed || false;
      } else if (data.contentId) {
        // Single-item response
        resolvedItems = [{
          contentId: data.contentId,
          sequence: data.sequence,
          content: data.content,
          source: data.source,
          subsection: data.subsection,
        }];
        resolvedProgress = data.corpusProgress || DEFAULT_PROGRESS;
        resolvedIsConsumed = data.isAlreadyConsumed || false;
      }

      setItems(resolvedItems);
      setProgress(resolvedProgress);
      setIsConsumed(resolvedIsConsumed);
      setIsExhausted(resolvedIsExhausted);

      // Cache result for this session
      try {
        sessionStorage.setItem(cacheKey, JSON.stringify({
          items: resolvedItems,
          progress: resolvedProgress,
          isConsumed: resolvedIsConsumed,
          isExhausted: resolvedIsExhausted,
        }));
      } catch {}
    } catch (e: any) {
      setError(e.message || 'Failed to load content');
    } finally {
      setLoading(false);
    }
  }, [section, cacheKey]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const markAsExplored = useCallback(async () => {
    if (isConsumed || isExhausted || items.length === 0) return;

    try {
      const contentIds = items.map(i => i.contentId);
      const res = await fetch(`/api/vani/${section}/mark-consumed`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contentIds }),
      });

      if (res.ok) {
        const data = await res.json();
        setIsConsumed(true);
        setIsExhausted(data.isExhausted || false);
        setProgress(prev => prev ? {
          ...prev,
          consumed: data.consumedCount,
          isExhausted: data.isExhausted || false,
        } : prev);

        // Invalidate cache so next load gets fresh assignment
        try { sessionStorage.removeItem(cacheKey); } catch {}
      }
    } catch (e) {
      console.error('[useVaniSection] markAsExplored failed:', e);
    }
  }, [section, items, isConsumed, isExhausted, cacheKey]);

  const beginNextCycleAction = useCallback(async () => {
    try {
      const res = await fetch(`/api/vani/${section}/begin-next-cycle`, { method: 'POST' });
      if (res.ok) {
        setIsExhausted(false);
        setIsConsumed(false);
        setProgress(DEFAULT_PROGRESS);
        try { sessionStorage.removeItem(cacheKey); } catch {}
        await fetchContent();
      }
    } catch (e) {
      console.error('[useVaniSection] beginNextCycle failed:', e);
    }
  }, [section, cacheKey, fetchContent]);

  return {
    item: items[0] || null,
    items,
    progress,
    loading,
    error,
    isConsumed,
    isExhausted,
    markAsExplored,
    beginNextCycle: beginNextCycleAction,
    reload: fetchContent,
  };
}
