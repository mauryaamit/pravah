// src/lib/khabar/engine/deduplication.ts
// Story Deduplication & Event Clustering Engine for Khabar

import { RawSourceItem, SourceCitation, TimelineItem } from '../types';

export interface StoryCluster {
  primaryTitle: string;
  category: string;
  items: RawSourceItem[];
  sources: SourceCitation[];
  timeline: TimelineItem[];
  firstSeenAt: string;
  lastSeenAt: string;
}

/**
 * Clean and tokenize a headline into a canonical word set for similarity matching.
 */
export function tokenizeHeadline(text: string): Set<string> {
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
    'by', 'from', 'is', 'are', 'was', 'were', 'has', 'have', 'had', 'been',
    'will', 'would', 'could', 'should', 'after', 'before', 'new', 'says', 'says:',
  ]);

  const clean = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = clean.split(' ').filter(w => w.length > 2 && !stopWords.has(w));
  return new Set(words);
}

/**
 * Calculates Jaccard similarity coefficient between two word sets.
 */
export function calculateSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const word of setA) {
    if (setB.has(word)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

/**
 * Clusters a stream of raw source items into consolidated story clusters.
 */
export function clusterRawItems(items: RawSourceItem[], similarityThreshold = 0.38): StoryCluster[] {
  const clusters: StoryCluster[] = [];

  for (const item of items) {
    const itemTokens = tokenizeHeadline(item.title);
    let matchedCluster: StoryCluster | null = null;

    for (const cluster of clusters) {
      const clusterTokens = tokenizeHeadline(cluster.primaryTitle);
      const similarity = calculateSimilarity(itemTokens, clusterTokens);

      if (similarity >= similarityThreshold) {
        matchedCluster = cluster;
        break;
      }
    }

    const citation: SourceCitation = {
      name: item.sourceName,
      type: item.sourceType,
      url: item.sourceUrl,
      title: item.title,
      publishedAt: item.publishedAt,
    };

    const timeString = new Date(item.publishedAt).toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const timelineEntry: TimelineItem = {
      timeOrDate: timeString,
      event: item.title,
    };

    if (matchedCluster) {
      matchedCluster.items.push(item);
      // Avoid duplicate source URLs
      if (!matchedCluster.sources.some(s => s.url === item.sourceUrl)) {
        matchedCluster.sources.push(citation);
      }
      matchedCluster.timeline.push(timelineEntry);
      if (new Date(item.publishedAt) > new Date(matchedCluster.lastSeenAt)) {
        matchedCluster.lastSeenAt = item.publishedAt;
      }
    } else {
      clusters.push({
        primaryTitle: item.title,
        category: item.category || 'india',
        items: [item],
        sources: [citation],
        timeline: [timelineEntry],
        firstSeenAt: item.publishedAt,
        lastSeenAt: item.publishedAt,
      });
    }
  }

  return clusters;
}
