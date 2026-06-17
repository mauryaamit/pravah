// src/app/api/kavitalay/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { KAVITALAY_DATA, Poem, KavitalayDayEntry } from '@/app/(app)/kavitalay/data';
import { getAdminDb } from '@/lib/firebase/admin';
import { differenceInDays, parseISO, format } from 'date-fns';

export const dynamic = 'force-dynamic';

const EPOCH = new Date('2024-01-01');

function getDayIndex(modulo: number, date: Date) {
  const diff = differenceInDays(date, EPOCH);
  return Math.abs(diff % modulo);
}

function getTodayString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
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
        if (isNaN(date.getTime())) {
          date = new Date();
        }
      } catch (e) {
        date = new Date();
      }
    }

    const dateStr = getTodayString(date);
    const cacheRef = db.collection('kavitalay_cache').doc(dateStr);

    // Try reading cache first
    let cachedDoc = null;
    try {
      const doc = await cacheRef.get();
      if (doc.exists) {
        cachedDoc = doc.data();
      }
    } catch (dbError) {
      console.error('Firestore cache read error:', dbError);
    }

    if (cachedDoc && cachedDoc.entry) {
      return NextResponse.json({
        entry: cachedDoc.entry,
        fetchedAt: cachedDoc.fetchedAt,
        source: 'cache'
      });
    }

    // Determine seed base index
    const baseIdx = getDayIndex(365, date);
    
    // Build the daily entry
    const entry: KavitalayDayEntry = {
      dayIndex: baseIdx,
      hindi: { poem_of_day: {} as Poem, others: [{} as Poem, {} as Poem] },
      urdu: { poem_of_day: {} as Poem, others: [{} as Poem, {} as Poem] },
      english: { poem_of_day: {} as Poem, others: [{} as Poem, {} as Poem] },
      other: { poem_of_day: {} as Poem, others: [{} as Poem, {} as Poem] }
    };

    const usedRef = db.collection('used_poems');

    // Helper to find a unique poem from static seed for a language tab
    const getUniqueSeedPoems = async (lang: 'hindi' | 'urdu' | 'english' | 'other', count: number): Promise<Poem[]> => {
      const selected: Poem[] = [];
      let offset = 0;
      
      while (selected.length < count && offset < 365) {
        const idx = (baseIdx + offset) % KAVITALAY_DATA.length;
        const seedEntry = KAVITALAY_DATA[idx];
        const tabData = seedEntry[lang];
        const candidates = [tabData.poem_of_day, ...tabData.others];
        
        for (const candidate of candidates) {
          if (selected.length >= count) break;
          if (selected.some(p => p.id === candidate.id)) continue;
          
          // Check in Firestore registry
          let isUsed = false;
          try {
            const usedDoc = await usedRef.doc(candidate.id).get();
            if (usedDoc.exists) {
              const data = usedDoc.data();
              if (data && data.usedDate && data.usedDate !== dateStr) {
                isUsed = true;
              }
            }
          } catch (e) {
            console.error('Error checking used_poems:', e);
          }
          
          if (!isUsed) {
            selected.push(candidate);
          }
        }
        offset++;
      }

      // If we couldn't find enough unique ones, just fill with standard seeds
      if (selected.length < count) {
        const seedEntry = KAVITALAY_DATA[baseIdx % KAVITALAY_DATA.length];
        const tabData = seedEntry[lang];
        const candidates = [tabData.poem_of_day, ...tabData.others];
        for (const candidate of candidates) {
          if (selected.length >= count) break;
          if (!selected.some(p => p.id === candidate.id)) {
            selected.push(candidate);
          }
        }
      }
      
      return selected;
    };

    // 1. Fetch Hindi poems (seed-based uniqueness)
    const hindiPoems = await getUniqueSeedPoems('hindi', 3);
    entry.hindi = {
      poem_of_day: hindiPoems[0],
      others: [hindiPoems[1], hindiPoems[2]]
    };

    // 2. Fetch Urdu poems (seed-based uniqueness)
    const urduPoems = await getUniqueSeedPoems('urdu', 3);
    entry.urdu = {
      poem_of_day: urduPoems[0],
      others: [urduPoems[1], urduPoems[2]]
    };

    // 3. Fetch Other poems (seed-based uniqueness)
    const otherPoems = await getUniqueSeedPoems('other', 3);
    entry.other = {
      poem_of_day: otherPoems[0],
      others: [otherPoems[1], otherPoems[2]]
    };

    // 4. Fetch English poems (Try PoetryDB, fallback to seed-based uniqueness)
    let englishPoems: Poem[] = [];
    try {
      const res = await fetch('https://poetrydb.org/random/3', {
        next: { revalidate: 86400 }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length >= 3) {
          for (const item of data) {
            const poemId = `poetrydb-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
            
            // Check if used
            let isUsed = false;
            try {
              const usedDoc = await usedRef.doc(poemId).get();
              if (usedDoc.exists) {
                const docData = usedDoc.data();
                if (docData && docData.usedDate && docData.usedDate !== dateStr) {
                  isUsed = true;
                }
              }
            } catch (e) {
              console.error('Error checking used_poems for PoetryDB:', e);
            }
            
            if (!isUsed) {
              const resonanceWords = ["timeless", "contemplative", "lyric", "resonance", "harmony", "pulse", "silence"];
              const randomResonance = () => {
                const words: string[] = [];
                while (words.length < 3) {
                  const w = resonanceWords[Math.floor(Math.random() * resonanceWords.length)];
                  if (!words.includes(w)) words.push(w);
                }
                return words;
              };

              englishPoems.push({
                id: poemId,
                title: item.title,
                poet: `अंग्रेजी कवि / ${item.author}`,
                poet_bio: `${item.author} is a celebrated figure in English literature, known for their expressive verse, technical mastery, and exploring the landscape of human emotion.`,
                language: 'english',
                script: 'roman',
                text_roman: item.lines.join('\n'),
                era: item.lines.length > 30 ? 'classical' : 'modern',
                meaning: `This poem by ${item.author} is a beautiful meditation on life, nature, and the quiet spaces in between.`,
                resonance_words: randomResonance()
              });
            }
          }
        }
      }
    } catch (e) {
      console.error('PoetryDB fetch failed, using seed fallback:', e);
    }

    // Fallback/fill English using seed database if PoetryDB gave less than 3 poems
    if (englishPoems.length < 3) {
      const seedEng = await getUniqueSeedPoems('english', 3 - englishPoems.length);
      englishPoems = [...englishPoems, ...seedEng];
    }

    entry.english = {
      poem_of_day: englishPoems[0],
      others: [englishPoems[1], englishPoems[2]]
    };

    // Register all chosen poems in the used_poems registry
    const batch = db.batch();
    const allSelected = [
      entry.hindi.poem_of_day, ...entry.hindi.others,
      entry.urdu.poem_of_day, ...entry.urdu.others,
      entry.english.poem_of_day, ...entry.english.others,
      entry.other.poem_of_day, ...entry.other.others
    ];

    allSelected.forEach(p => {
      if (p && p.id) {
        batch.set(usedRef.doc(p.id), {
          usedDate: dateStr,
          title: p.title,
          language: p.language
        }, { merge: true });
      }
    });

    const fetchedAtStr = new Date().toISOString();

    // Cache the day's entry
    try {
      await cacheRef.set({
        entry,
        fetchedAt: fetchedAtStr
      });
      await batch.commit();

      // Async cleanup of old cache
      cleanupOldCache(db).catch(err => console.error('Cache cleanup error:', err));
    } catch (dbError) {
      console.error('Firestore write error:', dbError);
    }

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
  
  const snap = await db.collection('kavitalay_cache')
    .where('fetchedAt', '<', thirtyDaysAgo.toISOString())
    .get();
    
  if (snap.empty) return;
  
  const batch = db.batch();
  snap.docs.forEach((doc: any) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
}
