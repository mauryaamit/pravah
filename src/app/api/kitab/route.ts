// src/app/api/kitab/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { OL_IDS } from '@/app/(app)/kitab/ol-ids';
import { getAdminDb } from '@/lib/firebase/admin';
import { differenceInDays, parseISO } from 'date-fns';

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

const MOCK_BOOKS: Record<string, any> = {
  "OL1168007W": {
    "title": "1984",
    "author": "George Orwell",
    "year": "1949",
    "genre": "Dystopian / Political Fiction",
    "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
    "summary": "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
    "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
    "read_if": "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
    "similar_books": ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"]
  },
  "OL262758W": {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": "1937",
    "genre": "Fantasy",
    "citation": "Tolkien, J.R.R. (1937). The Hobbit. George Allen & Unwin.",
    "summary": "Bilbo Baggins, a comfortable and unambitious hobbit, is launched into a quest to reclaim a lost treasure from a dragon, discovering his own courage along the way.",
    "opening_line": "In a hole in the ground there lived a hobbit.",
    "read_if": "You want to explore the classic starting point of modern fantasy literature with a charming, lighthearted adventure.",
    "similar_books": ["The Lord of the Rings", "The Chronicles of Narnia", "The Silmarillion"]
  },
  "OL45804W": {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "year": "1813",
    "genre": "Classic Romance / Manners",
    "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
    "summary": "Follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.",
    "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    "read_if": "You enjoy sharp social satire, witty banter, and a timeless study of first impressions and pride.",
    "similar_books": ["Sense and Sensibility", "Emma", "Jane Eyre"]
  },
  "OL15183492W": {
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "year": "1967",
    "genre": "Magical Realism",
    "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
    "summary": "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
    "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
    "read_if": "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
    "similar_books": ["The House of the Spirits", "Midnight's Children", "Ficciones"]
  },
  "OL1137452W": {
    "title": "The Metamorphosis",
    "author": "Franz Kafka",
    "year": "1915",
    "genre": "Absurdist Fiction",
    "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
    "summary": "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
    "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
    "read_if": "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
    "similar_books": ["The Trial", "The Stranger", "Nausea"]
  }
};

function generateDeterministicMock(olid: string, tab: string): any {
  if (MOCK_BOOKS[olid]) {
    return MOCK_BOOKS[olid];
  }

  const digits = parseInt(olid.replace(/\D/g, '')) || 54321;
  const authors = ["Munshi Premchand", "Rabindranath Tagore", "Leo Tolstoy", "Fyodor Dostoevsky", "Virginia Woolf", "Haruki Murakami", "Amitav Ghosh"];
  const genres = ["Social Realism", "Historical Fiction", "Philosophical Fiction", "Poetic Realism", "Modernist Classics"];
  
  const year = 1850 + (digits % 170);
  const author = authors[digits % authors.length];
  const genre = genres[digits % genres.length];
  
  return {
    "title": `Literary Masterwork (Tab: ${tab})`,
    "author": author,
    "year": String(year),
    "genre": genre,
    "citation": `${author}. (${year}). Selected Works. Pravah Press.`,
    "summary": "A deep and reflective narrative exploring the conflicts between traditional structures and individual aspirations, detailing the quiet transformations of daily life.",
    "opening_line": "The morning light broke slowly over the quiet hills, bringing a silent promise of change.",
    "read_if": "You appreciate serious, atmospheric literature that challenges conventions and explores the inner landscapes of the soul.",
    "similar_books": ["Selected Essays", "Collected Stories", "Anthology of Modern Wisdom"],
    "olid": olid
  };
}

export async function GET(request: NextRequest) {
  try {
    const db = getAdminDb();
    const tab = request.nextUrl.searchParams.get('tab') || 'english';
    
    // Ensure tab exists in our ol-ids
    if (!OL_IDS[tab]) {
      return NextResponse.json({ error: 'Invalid tab parameter' }, { status: 400 });
    }

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
    // Use composite doc ID: tab_YYYY-MM-DD
    const docId = `${tab}_${todayStr}`;
    const cacheRef = db.collection('kitab_cache').doc(docId);

    // Try reading from cache first
    let cachedDoc = null;
    try {
      const doc = await cacheRef.get();
      if (doc.exists) {
        cachedDoc = doc.data();
      }
    } catch (dbError) {
      console.error('Firestore cache read error:', dbError);
    }

    if (cachedDoc && cachedDoc.book) {
      return NextResponse.json({
        book: cachedDoc.book,
        fetchedAt: cachedDoc.fetchedAt,
        source: 'cache'
      });
    }

    // Select daily OLID for the tab
    const tabIds = OL_IDS[tab];
    const dayIdx = getDayIndex(105, date);
    const olid = tabIds[dayIdx % tabIds.length];

    // Fetch from Open Library API or Fallback
    let bookData = null;
    try {
      const olUrl = `https://openlibrary.org/works/${olid}.json`;
      const res = await fetch(olUrl);
      if (res.ok) {
        const json = await res.json();
        
        let description = '';
        if (json.description) {
          description = typeof json.description === 'string' 
            ? json.description 
            : (json.description.value || '');
        }
        
        // Clean description of markdown if necessary
        description = description.replace(/\[\d+\]/g, '').trim();

        if (json.title) {
          bookData = {
            "title": json.title,
            "author": "OpenLibrary Contributor",
            "year": json.first_publish_date || "Unknown",
            "genre": (json.subjects && json.subjects.slice(0, 3).join(' / ')) || "Literature",
            "citation": `${json.title}. (${json.first_publish_date || 'n.d.'}). OpenLibrary.`,
            "summary": description || "No summary available from OpenLibrary for this edition.",
            "opening_line": "Not available.",
            "read_if": "You are interested in the classical subjects and themes of historical literature.",
            "similar_books": ["Classical Selections", "Recommended Readings"],
            "olid": olid
          };
        }
      }
    } catch (fetchErr) {
      console.error('OpenLibrary fetch error, falling back to mock:', fetchErr);
    }

    if (!bookData) {
      bookData = generateDeterministicMock(olid, tab);
    }

    const fetchedAtStr = new Date().toISOString();

    // Cache the response
    try {
      await cacheRef.set({
        book: bookData,
        fetchedAt: fetchedAtStr,
      });

      // Run cleanup asynchronously
      cleanupOldCache(db).catch(err => console.error('Cache cleanup error:', err));
    } catch (dbError) {
      console.error('Firestore cache write error:', dbError);
    }

    return NextResponse.json({
      book: bookData,
      fetchedAt: fetchedAtStr,
      source: 'live'
    });
  } catch (err: any) {
    console.error('Unexpected error in Kitab API:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}

async function cleanupOldCache(db: any) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const snap = await db.collection('kitab_cache')
    .where('fetchedAt', '<', thirtyDaysAgo.toISOString())
    .get();
    
  if (snap.empty) return;
  
  const batch = db.batch();
  snap.docs.forEach((doc: any) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
  console.log(`Cleaned up ${snap.size} old kitab cache documents.`);
}
