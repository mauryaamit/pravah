// src/lib/khabar/engine/hot-score.ts
// Hot Score & Dynamic Badge Engine for Khabar

import { StoryCluster } from './deduplication';
import { StoryBadge } from '../types';

export interface ScoredStoryCluster extends StoryCluster {
  hotScore: number;
  badge?: StoryBadge;
}

const HIGH_IMPACT_KEYWORDS = [
  'rbi', 'repo rate', 'gdp', 'inflation', 'supreme court', 'isro', 'semiconductor',
  'election', 'budget', 'imf', 'world bank', 'sensex', 'nifty', 'cabinet', 'treaty',
  'ai', 'quantum', 'space station', 'hydrogen', 'sanction', 'parliament',
];

/**
 * Calculates a dynamic Hot Score (0 - 100) and assigns an appropriate badge.
 */
export function scoreAndRankCluster(cluster: StoryCluster, now: Date = new Date()): ScoredStoryCluster {
  const publishedTime = new Date(cluster.lastSeenAt).getTime();
  const ageInHours = Math.max(0.1, (now.getTime() - publishedTime) / (1000 * 60 * 60));

  // 1. Recency Decay (0 - 35 pts)
  const recencyScore = Math.max(0, 35 - ageInHours * 3);

  // 2. Source Coverage & Multi-reporting (0 - 30 pts)
  const sourceCount = cluster.sources.length;
  const sourceScore = Math.min(30, sourceCount * 12);

  // 3. Keyword & Entity Impact (0 - 25 pts)
  let impactScore = 10;
  const titleLower = cluster.primaryTitle.toLowerCase();
  for (const kw of HIGH_IMPACT_KEYWORDS) {
    if (titleLower.includes(kw)) {
      impactScore += 4;
    }
  }
  impactScore = Math.min(25, impactScore);

  // 4. Primary Source Multiplier (0 - 10 pts)
  const hasPrimarySource = cluster.sources.some(s => s.type === 'Primary Government / Reg' || s.type === 'Scientific Journal');
  const primaryBonus = hasPrimarySource ? 10 : 0;

  const rawScore = Math.round(recencyScore + sourceScore + impactScore + primaryBonus);
  const hotScore = Math.min(100, Math.max(10, rawScore));

  // Determine Badge
  let badge: StoryBadge | undefined = undefined;
  if (hotScore >= 80 && ageInHours <= 1.5) {
    badge = 'BREAKING';
  } else if (cluster.sources.length >= 2 && cluster.timeline.length >= 2) {
    badge = 'DEVELOPING';
  } else if (titleLower.includes('nifty') || titleLower.includes('sensex') || titleLower.includes('market') || titleLower.includes('rbi')) {
    badge = 'MARKETS';
  } else if (hotScore >= 65) {
    badge = 'IMPORTANT';
  } else if (cluster.category === 'science' || cluster.category === 'tech' || cluster.category === 'economy') {
    badge = 'EXPLAINER';
  }

  return {
    ...cluster,
    hotScore,
    badge,
  };
}
