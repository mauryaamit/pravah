// src/lib/ai/uniqueness-check.ts
// AI-powered uniqueness checker for Pravah's daily content pipeline.
//
// Before any piece of content is published as "today's content" for a page,
// it runs through this check. The AI is given:
//   1. The candidate content (title + body)
//   2. A compact summary of everything previously shown on this page
// The AI judges whether the candidate is a duplicate or near-duplicate
// (catches paraphrased/templated repeats, not just exact string matches).
//
// If flagged as duplicate → caller should discard/regenerate and re-check.
// If pool is exhausted → allows repeats (with a flag in the result).

import { callGemini, getGeminiApiKey } from './gemini';
import { getHistorySummary, isPoolExhausted } from './content-history';

export interface UniquenessCandidate {
  id: string;
  title: string;
  body: string; // The main text content to judge
}

export type UniquenessConfidence = 'high' | 'medium' | 'low';

export interface UniquenessResult {
  isUnique: boolean;
  confidence: UniquenessConfidence;
  reason: string;
  poolExhausted: boolean;
  usedAI: boolean;
}

const SYSTEM_INSTRUCTION = `You are a content uniqueness judge for a daily reading app.
Your job is to decide whether a candidate piece of content is substantively unique
compared to a history of previously published content.

RULES:
- Flag as NOT unique if: the body is largely a template with only names/nouns swapped,
  the body is paraphrased from a previous entry, or the body copies the structure and
  meaning of a previous entry even if exact words differ.
- Mark as UNIQUE if: the core ideas, arguments, perspectives, or narrative content are
  substantively different from all previous entries.
- Ignore: minor phrasing similarities, shared vocabulary, shared genre, or shared topic
  as long as the actual content substance differs.

Respond ONLY with a JSON object (no markdown fences) in this exact format:
{"isUnique": true/false, "confidence": "high"/"medium"/"low", "reason": "one concise sentence explaining your judgment"}`;

/**
 * Check whether a candidate content item is unique compared to page history.
 * Falls back to a simple string-similarity check if Gemini is unavailable.
 *
 * @param candidate - The content item to check
 * @param pageId    - Page identifier (e.g. 'kavitalay', 'kitab', 'darshan')
 * @param totalPoolSize - Total number of possible unique items (for exhaustion check)
 */
export async function checkUniqueness(
  candidate: UniquenessCandidate,
  pageId: string,
  totalPoolSize?: number
): Promise<UniquenessResult> {
  // Check if pool is exhausted — if so, allow repeats
  const poolExhausted = totalPoolSize
    ? isPoolExhausted(pageId, totalPoolSize)
    : false;

  if (poolExhausted) {
    return {
      isUnique: true,
      confidence: 'high',
      reason: 'Pool exhausted — all unique variations have been served; repeats are now permitted.',
      poolExhausted: true,
      usedAI: false,
    };
  }

  // Get history for this page
  const historySummary = getHistorySummary(pageId);

  // If no history yet, candidate is trivially unique
  if (historySummary.length === 0) {
    return {
      isUnique: true,
      confidence: 'high',
      reason: 'No history yet — first content for this page.',
      poolExhausted: false,
      usedAI: false,
    };
  }

  // Quick exact-match check (fast path before calling AI)
  const exactMatch = historySummary.some(
    h => h.title.toLowerCase() === candidate.title.toLowerCase()
  );
  if (exactMatch) {
    return {
      isUnique: false,
      confidence: 'high',
      reason: `Exact title match found in history: "${candidate.title}" has been shown before.`,
      poolExhausted: false,
      usedAI: false,
    };
  }

  // If no Gemini key, fall back to title-based check only
  if (!getGeminiApiKey()) {
    return {
      isUnique: true,
      confidence: 'low',
      reason: 'No Gemini API key configured — using title-only uniqueness check. Configure GEMINI_API_KEY for full AI checking.',
      poolExhausted: false,
      usedAI: false,
    };
  }

  // Build AI prompt
  const historyList = historySummary
    .slice(-50) // Send last 50 entries to keep prompt manageable
    .map((h, i) => `${i + 1}. Title: "${h.title}" | Excerpt: "${h.bodySnippet}"`)
    .join('\n');

  const prompt = `
PREVIOUSLY PUBLISHED CONTENT (${historySummary.length} entries, showing last ${Math.min(50, historySummary.length)}):
${historyList}

CANDIDATE CONTENT TO EVALUATE:
Title: "${candidate.title}"
Body excerpt: "${candidate.body.slice(0, 800)}"

Is this candidate substantively unique compared to the history above?
`.trim();

  try {
    const raw = await callGemini(prompt, {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.1, // Low temperature for consistent judgment
      maxOutputTokens: 256,
    });

    // Parse JSON response
    const jsonStr = raw.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
    const parsed = JSON.parse(jsonStr) as {
      isUnique: boolean;
      confidence: UniquenessConfidence;
      reason: string;
    };

    return {
      isUnique: Boolean(parsed.isUnique),
      confidence: parsed.confidence || 'medium',
      reason: parsed.reason || 'AI judgment',
      poolExhausted: false,
      usedAI: true,
    };
  } catch (err: any) {
    // Fail open: if AI check errors, assume unique (don't block content delivery)
    console.error('[UniquenessCheck] AI check failed, failing open:', err.message);
    return {
      isUnique: true,
      confidence: 'low',
      reason: `AI check failed (${err.message}) — failing open. Manual review recommended.`,
      poolExhausted: false,
      usedAI: false,
    };
  }
}

/**
 * Convenience wrapper that runs the check and throws if content is flagged as duplicate.
 * Use in API routes where you want to hard-block non-unique content.
 */
export async function assertUnique(
  candidate: UniquenessCandidate,
  pageId: string,
  totalPoolSize?: number
): Promise<UniquenessResult> {
  const result = await checkUniqueness(candidate, pageId, totalPoolSize);
  if (!result.isUnique && !result.poolExhausted) {
    throw new Error(
      `[Uniqueness] Content "${candidate.title}" flagged as non-unique (${result.confidence} confidence): ${result.reason}`
    );
  }
  return result;
}
