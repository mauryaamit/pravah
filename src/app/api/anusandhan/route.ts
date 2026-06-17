// src/app/api/anusandhan/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { ANUSANDHAN_FALLBACK, AnusandhanPaper } from '@/app/(app)/anusandhan/data-anusandhan';
import { getAdminDb } from '@/lib/firebase/admin';
import { differenceInDays, parseISO } from 'date-fns';

export const dynamic = 'force-dynamic';

const EPOCH = new Date('2024-01-01');

const CATEGORIES: Record<string, string> = {
  science: '31',      // Physics and Astronomy
  psychology: '32',   // Psychology
  math: '26',         // Mathematics
  sociology: '33',    // Social Sciences (Sociology)
  economics: '20',    // Economics
  environment: '23',  // Environmental Science
  tech: '17'          // Computer Science
};

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

function reconstructAbstract(invertedIndex: Record<string, number[]> | undefined): string {
  if (!invertedIndex) return 'Abstract not available.';
  const entries = Object.entries(invertedIndex);
  const words: string[] = [];
  for (const [word, positions] of entries) {
    for (const pos of positions) {
      words[pos] = word;
    }
  }
  const fullText = words.filter(Boolean).join(' ');
  if (fullText.length > 600) {
    return fullText.substring(0, 597) + '...';
  }
  return fullText;
}

function generateReflectionQuestion(title: string, category: string): string {
  const t = title.toLowerCase();
  if (category === 'tech' || t.includes('learning') || t.includes('intelligence') || t.includes('neural') || t.includes('ai')) {
    return 'How does this model of learning and technology redefine our understanding of human cognition and creative agency?';
  }
  if (category === 'science' || t.includes('quantum') || t.includes('relativity') || t.includes('universe') || t.includes('particle')) {
    return 'What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?';
  }
  if (category === 'economics' || t.includes('market') || t.includes('wealth') || t.includes('finance') || t.includes('capital')) {
    return 'How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?';
  }
  if (category === 'environment' || t.includes('climate') || t.includes('ecology') || t.includes('forest') || t.includes('warming')) {
    return 'What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?';
  }
  if (category === 'psychology' || t.includes('mind') || t.includes('mental') || t.includes('emotion') || t.includes('cognitive')) {
    return 'In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?';
  }
  if (category === 'sociology' || t.includes('social') || t.includes('culture') || t.includes('group') || t.includes('gender')) {
    return 'How do the collective systems and cultural norms we construct influence our individual freedom and identity?';
  }
  if (category === 'math' || t.includes('equation') || t.includes('geometry') || t.includes('theorem') || t.includes('algorithm')) {
    return 'Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?';
  }
  return 'How can the insights from this research be applied to foster deeper understanding and connection in our daily lives?';
}

export async function GET(request: NextRequest) {
  try {
    const db = getAdminDb();
    
    // Parse category
    const categoryParam = request.nextUrl.searchParams.get('category') || 'science';
    const category = CATEGORIES[categoryParam] ? categoryParam : 'science';
    
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

    const todayStr = getTodayString(date);
    const cacheDocId = `${category}_${todayStr}`;
    const cacheRef = db.collection('anusandhan_cache').doc(cacheDocId);

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

    if (cachedDoc && cachedDoc.paper) {
      return NextResponse.json({
        paper: cachedDoc.paper,
        fetchedAt: cachedDoc.fetchedAt,
        source: 'cache'
      });
    }

    // Select paper of the day
    const dayIdx = getDayIndex(100, date); // limit rotating index to 100

    // Fetch from OpenAlex API or fallback
    const fieldId = CATEGORIES[category];
    let paperData: AnusandhanPaper | null = null;

    try {
      const openAlexUrl = `https://api.openalex.org/works?filter=primary_topic.field.id:${fieldId}&sort=cited_by_count:desc&per_page=50`;
      const res = await fetch(openAlexUrl);
      if (res.ok) {
        const json = await res.json();
        if (json.results && json.results.length > 0) {
          const selectedWork = json.results[dayIdx % json.results.length];
          const authors = (selectedWork.authorships || []).map((a: any) => a.author?.display_name).filter(Boolean);
          const journal = selectedWork.primary_location?.source?.display_name || 'Unknown Journal';
          const abstract = reconstructAbstract(selectedWork.abstract_inverted_index);
          const title = selectedWork.title || 'Untitled Work';

          paperData = {
            id: selectedWork.id.replace('https://openalex.org/', ''),
            title,
            authors: authors.slice(0, 5),
            publication_year: selectedWork.publication_year || date.getFullYear(),
            journal,
            abstract,
            doi: selectedWork.doi || null,
            cited_by_count: selectedWork.cited_by_count || 0,
            category: category as any,
            reflection_question: generateReflectionQuestion(title, category)
          };
        }
      }
    } catch (fetchErr) {
      console.error('OpenAlex fetch error, falling back:', fetchErr);
    }

    // Fallback if API is down or failed to find entry
    if (!paperData) {
      const fallbackList = ANUSANDHAN_FALLBACK.filter(p => p.category === category);
      if (fallbackList.length > 0) {
        paperData = fallbackList[dayIdx % fallbackList.length];
      } else {
        // Absolute fallback safety net
        paperData = {
          id: `W_fallback_${category}`,
          title: `Introductory Research in ${category.charAt(0).toUpperCase() + category.slice(1)}`,
          authors: ["Pravah Research Collective"],
          publication_year: date.getFullYear(),
          journal: "Journal of Contemplative Inquiry",
          abstract: `This paper explores the foundational concepts and modern paradigms within the field of ${category}. By analyzing historical developments and contemporary experiments, we trace the evolution of core thoughts that continue to shape human knowledge and society.`,
          cited_by_count: 10,
          category: category as any,
          reflection_question: `How does the study of ${category} help you reflect on the structure of human inquiry?`
        };
      }
    }

    const fetchedAtStr = new Date().toISOString();

    // Cache the response
    try {
      await cacheRef.set({
        paper: paperData,
        fetchedAt: fetchedAtStr,
      });

      // Run cleanup asynchronously
      cleanupOldCache(db).catch(err => console.error('Cache cleanup error:', err));
    } catch (dbError) {
      console.error('Firestore cache write error:', dbError);
    }

    return NextResponse.json({
      paper: paperData,
      fetchedAt: fetchedAtStr,
      source: 'live'
    });
  } catch (err: any) {
    console.error('Unexpected error in Anusandhan API:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}

async function cleanupOldCache(db: any) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const snap = await db.collection('anusandhan_cache')
    .where('fetchedAt', '<', thirtyDaysAgo.toISOString())
    .get();
    
  if (snap.empty) return;
  
  const batch = db.batch();
  snap.docs.forEach((doc: any) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
  console.log(`Cleaned up ${snap.size} old anusandhan cache documents.`);
}
