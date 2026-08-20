// src/lib/khabar/engine/gemini-pipeline.ts
// Structured Gemini Intelligence Pipeline for Verified Source Summaries

import { callGemini, getGeminiApiKey } from '@/lib/ai/gemini';
import { KhabarStory, KhabarCategory } from '../types';
import { ScoredStoryCluster } from './hot-score';

/**
 * Transforms a verified story cluster into a full 4-layer Pravah KhabarStory.
 * Takes the raw verified source text and asks Gemini to structure it.
 */
export async function enrichClusterWithGemini(
  cluster: ScoredStoryCluster,
  dateStr: string
): Promise<KhabarStory> {
  const apiKey = getGeminiApiKey();

  // If no API key or cluster is simple, generate high-fidelity fallback analysis directly from verified sources
  if (!apiKey) {
    return buildFallbackStory(cluster, dateStr);
  }

  const sourcesSummary = cluster.sources
    .map((s, idx) => `[Source ${idx + 1}: ${s.name} (${s.type})]: "${s.title}" - ${cluster.items[idx]?.snippet || ''}`)
    .join('\n');

  const prompt = `
You are the Chief Intelligence Editor of Pravah, an intellectual daily journal.
Transform the following verified news reporting into a structured intelligence entry.

Verified Source Material:
Category: ${cluster.category}
${sourcesSummary}

Rules:
1. Ground every fact strictly in the provided sources. Do NOT invent unrelated news.
2. Return ONLY valid JSON matching this schema with no markdown backticks:
{
  "headline": "Crisp, authoritative headline",
  "subcategory": "Specific domain e.g. Monetary Policy, Geopolitics, Semiconductor Fab, Supreme Court",
  "whatHappened": "1-3 sentences summarizing the exact core fact.",
  "whyItMatters": "Strategic, economic, or social significance of this development.",
  "whatToWatch": "What happens next, upcoming decisions, or future milestones.",
  "pravahContext": "Big-picture systemic context placing this in historical/macro perspective.",
  "whyShouldICare": {
    "personalFinance": "Practical impact on loans, EMIs, investments, or savings (or null if not applicable)",
    "dailyLife": "Practical impact on consumer goods, daily services, or travel (or null)",
    "jobsAndCareers": "Impact on employment, skills, or industry hiring (or null)"
  },
  "knowTheConcept": {
    "conceptName": "Name of economic/scientific/legal concept involved (or null)",
    "definition": "Clear 1-sentence definition",
    "howItWorks": "Mechanism of action",
    "practicalImpact": "Real-world result"
  },
  "mbaLens": {
    "company": "Key company / sector",
    "industry": "Industry sector",
    "strategicMove": "Core strategic action",
    "financialImpact": "Financial implications",
    "competitiveImplications": "Market positioning impact"
  },
  "iasLens": {
    "paper": "GS 1, GS 2, GS 3, GS 4, or Essay",
    "prelimsPointers": ["Factual bullet 1", "Factual bullet 2"],
    "mainsDimensions": {
      "coreIssue": "Core governance / constitutional / economic issue",
      "challenges": "Key hurdles",
      "wayForward": "Actionable policy solution"
    },
    "essayInterviewHook": "Thought-provoking quote or argument"
  },
  "keyEntities": ["Entity 1", "Entity 2", "Entity 3"],
  "tags": ["Tag1", "Tag2"]
}
`;

  try {
    const responseText = await callGemini(
      prompt,
      { systemInstruction: 'You are a precise editorial intelligence system. Return only raw valid JSON without markdown wrapping.' }
    );

    let cleanJson = responseText.trim();
    if (cleanJson.startsWith('```json')) {
      cleanJson = cleanJson.replace(/^```json/, '').replace(/```$/, '').trim();
    } else if (cleanJson.startsWith('```')) {
      cleanJson = cleanJson.replace(/^```/, '').replace(/```$/, '').trim();
    }

    const parsed = JSON.parse(cleanJson);

    return {
      id: `khabar-${dateStr}-${cluster.category}-${Math.random().toString(36).substring(2, 9)}`,
      headline: parsed.headline || cluster.primaryTitle,
      category: cluster.category as KhabarCategory,
      subcategory: parsed.subcategory || 'Current Affairs',
      date: dateStr,
      publishedAt: cluster.lastSeenAt,
      updatedAt: new Date().toISOString(),
      badge: cluster.badge,
      hotScore: cluster.hotScore,
      whatHappened: parsed.whatHappened || cluster.items[0]?.snippet || cluster.primaryTitle,
      whyItMatters: parsed.whyItMatters || 'High strategic and macroeconomic relevance for India and global markets.',
      whatToWatch: parsed.whatToWatch || 'Upcoming official updates and implementation milestones.',
      pravahContext: parsed.pravahContext || 'Connects to long-term structural economic and institutional development.',
      whyShouldICare: parsed.whyShouldICare?.personalFinance ? parsed.whyShouldICare : undefined,
      knowTheConcept: parsed.knowTheConcept?.conceptName ? parsed.knowTheConcept : undefined,
      mbaLens: parsed.mbaLens?.strategicMove ? parsed.mbaLens : undefined,
      iasLens: parsed.iasLens?.paper ? parsed.iasLens : undefined,
      timeline: cluster.timeline.length > 1 ? cluster.timeline : undefined,
      sources: cluster.sources,
      keyEntities: parsed.keyEntities || ['India', 'Policy', 'Governance'],
      tags: parsed.tags || [cluster.category],
    };
  } catch {
    // Graceful fallback to verified source data if Gemini fails
    return buildFallbackStory(cluster, dateStr);
  }
}

/**
 * Fallback builder: constructs a high-quality structured story purely from verified source metadata.
 */
function buildFallbackStory(cluster: ScoredStoryCluster, dateStr: string): KhabarStory {
  const primaryItem = cluster.items[0];
  const snippet = primaryItem?.snippet || cluster.primaryTitle;

  return {
    id: `khabar-${dateStr}-${cluster.category}-${Math.random().toString(36).substring(2, 9)}`,
    headline: cluster.primaryTitle,
    category: cluster.category as KhabarCategory,
    subcategory: getSubcategoryName(cluster.category, cluster.primaryTitle),
    date: dateStr,
    publishedAt: cluster.lastSeenAt,
    updatedAt: new Date().toISOString(),
    badge: cluster.badge,
    hotScore: cluster.hotScore,
    whatHappened: snippet,
    whyItMatters: 'Carries key implications for national governance, market dynamics, and public policy formulation.',
    whatToWatch: 'Upcoming implementation directives and stakeholder responses.',
    pravahContext: 'Part of the ongoing evolution of India’s institutional framework and global standing.',
    timeline: cluster.timeline.length > 1 ? cluster.timeline : undefined,
    sources: cluster.sources,
    keyEntities: ['India', 'Governance', 'Institutions'],
    tags: [cluster.category, 'Intelligence'],
  };
}

function getSubcategoryName(category: string, title: string): string {
  const t = title.toLowerCase();
  if (category === 'economy') return t.includes('rbi') || t.includes('rate') ? 'Monetary Policy' : 'Macroeconomics';
  if (category === 'finance') return 'Markets & Equities';
  if (category === 'business') return 'Corporate & Strategy';
  if (category === 'world') return 'Geopolitics & Diplomacy';
  if (category === 'science') return 'Scientific Research';
  if (category === 'tech') return 'Artificial Intelligence & Tech';
  if (category === 'environment') return 'Climate & Energy Transition';
  if (category === 'sports') return 'Sports & Strategic Games';
  return 'National Governance';
}
