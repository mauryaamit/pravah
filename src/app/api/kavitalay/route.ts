// src/app/api/kavitalay/route.ts
// Simplified: direct deterministic indexing into 365-day dataset.
// Each date maps uniquely to one KAVITALAY_DATA entry — no repetition within a year.

import { NextRequest, NextResponse } from 'next/server';
import { KAVITALAY_DATA, Poem, KavitalayDayEntry } from '@/app/(app)/kavitalay/data';
import { getAdminDb } from '@/lib/firebase/admin';
import { differenceInDays, parseISO } from 'date-fns';

export const dynamic = 'force-dynamic';

const EPOCH = new Date('2024-01-01');

function getDayIndex(date: Date): number {
  // Returns 0 to (KAVITALAY_DATA.length - 1)
  const diff = differenceInDays(date, EPOCH);
  return Math.abs(diff % KAVITALAY_DATA.length);
}

function getTodayString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const RESONANCE_WORDS = ["timeless", "contemplative", "lyric", "resonance", "harmony", "pulse", "silence", "luminous", "tender", "vast"];

function seededResonance(seed: number): string[] {
  const words: string[] = [];
  let s = seed;
  while (words.length < 3) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const w = RESONANCE_WORDS[Math.abs(s) % RESONANCE_WORDS.length];
    if (!words.includes(w)) words.push(w);
  }
  return words;
}

export async function GET(request: NextRequest) {
  try {
    const db = getAdminDb();

    // Parse requested date
    const dateParam = request.nextUrl.searchParams.get('date');
    let date = new Date();
    if (dateParam) {
      try {
        date = parseISO(dateParam);
        if (isNaN(date.getTime())) date = new Date();
      } catch (e) {
        date = new Date();
      }
    }

    const dateStr = getTodayString(date);
    const cacheRef = db.collection('kavitalay_cache').doc(dateStr);

    // Serve from Firestore cache if available
    try {
      const doc = await cacheRef.get();
      if (doc.exists && doc.data()?.entry) {
        return NextResponse.json({
          entry: doc.data()!.entry,
          fetchedAt: doc.data()!.fetchedAt,
          source: 'cache'
        });
      }
    } catch (dbError) {
      console.error('Firestore cache read error:', dbError);
    }

    // Deterministic index: each date → unique entry in the 365-day dataset
    const baseIdx = getDayIndex(date);
    const seedEntry = KAVITALAY_DATA[baseIdx];

    // Build entry directly from the deterministic seed — no used_poems tracking needed
    // since KAVITALAY_DATA has 365 unique entries indexed by day
    const entry: KavitalayDayEntry = {
      dayIndex: baseIdx,
      hindi: seedEntry.hindi,
      urdu: seedEntry.urdu,
      other: seedEntry.other,
      english: { poem_of_day: {} as Poem, others: [{} as Poem, {} as Poem] },
    };

    // English: try PoetryDB for fresh content, fallback to seed
    let englishPoems: Poem[] = [];
    try {
      const res = await fetch('https://poetrydb.org/random/3', {
        signal: AbortSignal.timeout(4000),
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length >= 3) {
          englishPoems = data.slice(0, 3).map((item: any, i: number) => ({
            id: `poetrydb-${baseIdx}-${i}-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 30)}`,
            title: item.title,
            poet: `अंग्रेजी कवि / ${item.author}`,
            poet_bio: `${item.author} is a celebrated figure in English literature, known for their expressive verse and exploration of the human condition.`,
            language: 'english' as const,
            script: 'roman' as const,
            text_roman: item.lines.join('\n'),
            era: item.lines.length > 30 ? 'classical' as const : 'modern' as const,
            meaning: `This poem by ${item.author} is a meditation on life, nature, and the quiet spaces in between.`,
            resonance_words: seededResonance(baseIdx * 100 + i),
          }));
        }
      }
    } catch (e) {
      console.error('PoetryDB fetch failed, using seed fallback:', e);
    }

    // Fallback to seed English poems if PoetryDB unavailable
    if (englishPoems.length < 3) {
      const seedEng = seedEntry.english;
      englishPoems = [seedEng.poem_of_day, ...seedEng.others].slice(0, 3);
    }

    entry.english = {
      poem_of_day: englishPoems[0],
      others: [englishPoems[1], englishPoems[2]],
    };

    const fetchedAtStr = new Date().toISOString();

    // Cache and cleanup (non-blocking)
    cacheRef.set({ entry, fetchedAt: fetchedAtStr })
      .then(() => cleanupOldCache(db))
      .catch(err => console.error('Firestore cache write error:', err));

    return NextResponse.json({
      entry,
      fetchedAt: fetchedAtStr,
      source: 'live'
    });
  } catch (err: any) {
    console.error('Unexpected error in Kavitalay API:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}

async function cleanupOldCache(db: any) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  try {
    const snap = await db.collection('kavitalay_cache')
      .where('fetchedAt', '<', thirtyDaysAgo.toISOString())
      .get();

    if (snap.empty) return;
    const batch = db.batch();
    snap.docs.forEach((doc: any) => batch.delete(doc.ref));
    await batch.commit();
    console.log(`Cleaned up ${snap.size} old kavitalay cache documents.`);
  } catch (e) {
    console.error('Cache cleanup error:', e);
  }
}
