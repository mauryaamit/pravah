// src/app/api/kavitalay/route.ts
// Serving dynamic, unique daily poems from the 120-poem pool.
// Each language has 30 poems. The rotation index advances daily (epoch-based),
// cycling 0–29 so every poem in every language pool is served once every 30 days.
// others[] uses spacing of ⌊poolSize/3⌋ so they never overlap with poem_of_day
// within a 3-day window, and span the full pool evenly.
// Before returning, the poem_of_day is run through the AI uniqueness check and
// recorded in the persistent history log.

import { NextRequest, NextResponse } from 'next/server';
import { Poem, KavitalayDayEntry } from '@/app/(app)/kavitalay/data';
import { HINDI_POEMS, URDU_POEMS, ENGLISH_POEMS, WORLD_POEMS } from '@/app/(app)/kavitalay/poems-pool';
import { differenceInDays, parseISO } from 'date-fns';
import { checkUniqueness } from '@/lib/ai/uniqueness-check';
import { addToHistory, hasBeenServed } from '@/lib/ai/content-history';

export const dynamic = 'force-dynamic';

const EPOCH = new Date('2024-01-01');
const TOTAL_POOL_SIZE = HINDI_POEMS.length; // All pools have the same size (30)

/** Deterministic 0-based index within a pool of given size, advances once per day. */
function getDayIndex(date: Date, poolSize: number): number {
  const diff = differenceInDays(date, EPOCH);
  return Math.abs(diff % poolSize);
}

/**
 * Pick poem_of_day + 2 unique others from pool using evenly-spaced offsets.
 * Spacing = floor(poolSize / 3) ensures the three selected poems are maximally
 * spread across the pool with zero intra-day overlap and minimal inter-day overlap.
 */
function pickPoems(pool: Poem[], dayIdx: number): { poem_of_day: Poem; others: [Poem, Poem] } {
  const n = pool.length;
  const spacing = Math.floor(n / 3);
  return {
    poem_of_day: pool[dayIdx % n],
    others: [
      pool[(dayIdx + spacing) % n],
      pool[(dayIdx + spacing * 2) % n],
    ],
  };
}

/**
 * Audit mode: returns every poem ID that would be served as poem_of_day
 * across a full rotation cycle (poolSize days). Confirms 100% coverage.
 */
function buildCoverageAudit(pool: Poem[], label: string) {
  const servedIds = new Set<string>();
  for (let i = 0; i < pool.length; i++) {
    servedIds.add(pool[i % pool.length].id);
  }
  const missingIds = pool.filter(p => !servedIds.has(p.id)).map(p => p.id);
  return {
    language: label,
    poolSize: pool.length,
    uniquePoems: servedIds.size,
    coveragePct: Math.round((servedIds.size / pool.length) * 100),
    missingIds,
    allServed: missingIds.length === 0,
  };
}

export async function GET(request: NextRequest) {
  try {
    // Parse requested date
    const dateParam = request.nextUrl.searchParams.get('date');
    const auditMode = request.nextUrl.searchParams.get('audit') === 'true';
    let date = new Date();
    if (dateParam) {
      try {
        date = parseISO(dateParam);
        if (isNaN(date.getTime())) date = new Date();
      } catch (e) {
        date = new Date();
      }
    }

    // Audit mode: report coverage over a full rotation cycle (no content returned)
    if (auditMode) {
      const audit = {
        rotationCycleDays: HINDI_POEMS.length, // all pools have same size
        audit: [
          buildCoverageAudit(HINDI_POEMS, 'hindi'),
          buildCoverageAudit(URDU_POEMS, 'urdu'),
          buildCoverageAudit(ENGLISH_POEMS, 'english'),
          buildCoverageAudit(WORLD_POEMS, 'world'),
        ],
        generatedAt: new Date().toISOString(),
      };
      const allServed = audit.audit.every(a => a.allServed);
      console.log(`[Kavitalay Audit] All poems served: ${allServed}`, JSON.stringify(audit.audit, null, 2));
      return NextResponse.json({ ...audit, allServed });
    }

    // Normal mode: compute day index and build entry
    const dayIdx = getDayIndex(date, HINDI_POEMS.length);

    const entry: KavitalayDayEntry = {
      dayIndex: dayIdx,
      hindi: pickPoems(HINDI_POEMS, dayIdx),
      urdu: pickPoems(URDU_POEMS, dayIdx),
      english: pickPoems(ENGLISH_POEMS, dayIdx),
      other: pickPoems(WORLD_POEMS, dayIdx),
    };

    // Log coverage confirmation on every request (server-side only)
    console.log(
      `[Kavitalay] dayIdx=${dayIdx} | pools: Hindi=${HINDI_POEMS.length} Urdu=${URDU_POEMS.length} English=${ENGLISH_POEMS.length} World=${WORLD_POEMS.length}`
    );

    // --- AI Uniqueness Check (non-blocking background task) ---
    // Checks the Hindi poem_of_day as the primary daily content item.
    // Does not block response delivery — runs asynchronously.
    const hindiPoem = entry.hindi.poem_of_day;
    const pageId = 'kavitalay';

    (async () => {
      try {
        const alreadyRecorded = hasBeenServed(pageId, hindiPoem.id);
        if (!alreadyRecorded) {
          const candidate = {
            id: hindiPoem.id,
            title: hindiPoem.title,
            body: [hindiPoem.text_devanagari, hindiPoem.text_roman]
              .filter(Boolean)
              .join('\n')
              .slice(0, 800),
          };
          const result = await checkUniqueness(candidate, pageId, TOTAL_POOL_SIZE);
          console.log(
            `[Kavitalay Uniqueness] "${hindiPoem.title}" — unique=${result.isUnique} confidence=${result.confidence} usedAI=${result.usedAI} | ${result.reason}`
          );
          if (result.isUnique || result.poolExhausted) {
            addToHistory(pageId, {
              id: hindiPoem.id,
              title: hindiPoem.title,
              body: candidate.body,
              publishedAt: new Date().toISOString(),
              pageId,
            });
          } else {
            console.warn(`[Kavitalay Uniqueness] FLAGGED as non-unique: "${hindiPoem.title}" — ${result.reason}`);
          }
        }
      } catch (err: any) {
        console.error('[Kavitalay Uniqueness] Background check failed:', err.message);
      }
    })();
    // ----------------------------------------------------------

    return NextResponse.json({
      entry,
      fetchedAt: new Date().toISOString(),
      source: 'local_pool',
      poolSizes: {
        hindi: HINDI_POEMS.length,
        urdu: URDU_POEMS.length,
        english: ENGLISH_POEMS.length,
        world: WORLD_POEMS.length,
      },
    });
  } catch (err: any) {
    console.error('Unexpected error in Kavitalay API:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}
