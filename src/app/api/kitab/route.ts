// src/app/api/kitab/route.ts
// Deterministic local data serving for Kitab page.
// Flat-index rotation: for each tab, we merge contemporary + classical books
// into a single linear sequence of (91 × 2 = 182) books per tab, then cycle
// dayIdx across the full sequence so every book is served before any repeats.
// Each page request runs an AI uniqueness check on the selected book and records
// it in the persistent history log.

import { NextRequest, NextResponse } from 'next/server';
import { KITAB_DATA, KitabBook } from '@/app/(app)/kitab/data';
import { differenceInDays, parseISO } from 'date-fns';
import { checkUniqueness } from '@/lib/ai/uniqueness-check';
import { addToHistory, hasBeenServed } from '@/lib/ai/content-history';

export const dynamic = 'force-dynamic';

const EPOCH = new Date('2024-01-01');

type TabKey = 'hindi' | 'english' | 'indian_regional' | 'world' | 'classical_heritage';

/**
 * Build a flat ordered list of all books for a given tab by interleaving
 * contemporary and classical from each day entry:
 *   slot 0 → entry[0].contemporary
 *   slot 1 → entry[0].classical
 *   slot 2 → entry[1].contemporary
 *   slot 3 → entry[1].classical
 *   …
 * Total per tab: KITAB_DATA.length × 2 books
 */
function buildFlatPool(tab: TabKey): KitabBook[] {
  const pool: KitabBook[] = [];
  for (const entry of KITAB_DATA) {
    const tabData = entry.tabs[tab] || entry.tabs['hindi'];
    pool.push(tabData.contemporary);
    pool.push(tabData.classical);
  }
  return pool;
}

function getDayIndex(poolSize: number, date: Date): number {
  const diff = differenceInDays(date, EPOCH);
  return Math.abs(diff % poolSize);
}

export async function GET(request: NextRequest) {
  try {
    const tab = (request.nextUrl.searchParams.get('tab') || 'hindi') as TabKey;
    const dateParam = request.nextUrl.searchParams.get('date');
    const auditMode = request.nextUrl.searchParams.get('audit') === 'true';

    let date = new Date();
    if (dateParam) {
      try {
        date = parseISO(dateParam);
        if (isNaN(date.getTime())) {
          date = new Date();
        }
      } catch (e) {
        date = new Date();
      }
    }

    // Audit mode: walk 30 days and confirm unique books
    if (auditMode) {
      const pool = buildFlatPool(tab);
      const seen = new Set<string>();
      const schedule: { day: number; title: string; type: string }[] = [];
      for (let i = 0; i < Math.min(30, pool.length); i++) {
        const idx = getDayIndex(pool.length, new Date(date.getTime() + i * 86400000));
        const book = pool[idx];
        const type = idx % 2 === 0 ? 'contemporary' : 'classical';
        seen.add(book.title);
        schedule.push({ day: i, title: book.title, type });
      }
      return NextResponse.json({
        tab,
        poolSize: pool.length,
        uniqueIn30Days: seen.size,
        schedule,
        allUnique: seen.size === Math.min(30, pool.length),
      });
    }

    // Normal mode: build flat pool and pick by day index
    const pool = buildFlatPool(tab);
    const dayIdx = getDayIndex(pool.length, date);
    const book = pool[dayIdx];

    const isContemporary = dayIdx % 2 === 0;
    console.log(
      `[Kitab] tab=${tab} dayIdx=${dayIdx}/${pool.length} book="${book.title}" type=${isContemporary ? 'contemporary' : 'classical'}`
    );

    // --- AI Uniqueness Check (non-blocking background task) ---
    const pageId = `kitab-${tab}`;
    const bookId = `${book.title}__${book.author}`;

    (async () => {
      try {
        const alreadyRecorded = hasBeenServed(pageId, bookId);
        if (!alreadyRecorded) {
          const candidate = {
            id: bookId,
            title: book.title,
            body: `${book.summary} ${book.opening_line} ${book.read_if}`.slice(0, 800),
          };
          const result = await checkUniqueness(candidate, pageId, pool.length);
          console.log(
            `[Kitab Uniqueness] "${book.title}" (${tab}) — unique=${result.isUnique} confidence=${result.confidence} | ${result.reason}`
          );
          if (result.isUnique || result.poolExhausted) {
            addToHistory(pageId, {
              id: bookId,
              title: book.title,
              body: candidate.body,
              publishedAt: new Date().toISOString(),
              pageId,
            });
          } else {
            console.warn(`[Kitab Uniqueness] FLAGGED as non-unique: "${book.title}" (${tab}) — ${result.reason}`);
          }
        }
      } catch (err: any) {
        console.error('[Kitab Uniqueness] Background check failed:', err.message);
      }
    })();
    // ----------------------------------------------------------

    return NextResponse.json({
      book,
      fetchedAt: new Date().toISOString(),
      source: 'local',
      poolSize: pool.length,
      dayIndex: dayIdx,
    });
  } catch (err: any) {
    console.error('Unexpected error in Kitab API:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}
