// src/app/api/chalchitr/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { IMDB_IDS } from '@/app/(app)/chalchitr/imdb-ids';
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

// Pseudo-random number generator for seeded shuffling
function mulberry32(a: number) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
}

// Shuffle array indices deterministically based on seed
function shuffleIndices(length: number, seed: number): number[] {
  const indices = Array.from({ length }, (_, i) => i);
  const rand = mulberry32(seed);
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const temp = indices[i];
    indices[i] = indices[j];
    indices[j] = temp;
  }
  return indices;
}

// Mocks database for famous films
const MOCK_FILMS: Record<string, any> = {
  "tt0111161": {
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "Rated": "R",
    "Released": "14 Oct 1994",
    "Runtime": "142 min",
    "Genre": "Drama",
    "Director": "Frank Darabont",
    "Writer": "Stephen King, Frank Darabont",
    "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
    "Plot": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 7 Oscars. 21 wins & 43 nominations total.",
    "Poster": "/paintings/shawshank.jpg",
    "imdbRating": "9.3",
    "imdbID": "tt0111161",
    "Type": "movie",
    "Response": "True"
  },
  "tt0068646": {
    "Title": "The Godfather",
    "Year": "1972",
    "Rated": "R",
    "Released": "24 Mar 1972",
    "Runtime": "175 min",
    "Genre": "Crime, Drama",
    "Director": "Francis Ford Coppola",
    "Writer": "Mario Puzo, Francis Ford Coppola",
    "Actors": "Marlon Brando, Al Pacino, James Caan",
    "Plot": "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    "Language": "English, Italian, Spanish",
    "Country": "USA",
    "Awards": "Won 3 Oscars. 32 wins & 31 nominations total.",
    "Poster": "/paintings/godfather.jpg",
    "imdbRating": "9.2",
    "imdbID": "tt0068646",
    "Type": "movie",
    "Response": "True"
  },
  "tt0050861": {
    "Title": "Pyaasa",
    "Year": "1957",
    "Rated": "U",
    "Released": "22 Feb 1957",
    "Runtime": "146 min",
    "Genre": "Drama, Musical, Romance",
    "Director": "Guru Dutt",
    "Writer": "Abrar Alvi",
    "Actors": "Guru Dutt, Waheeda Rehman, Rehman, Mala Sinha",
    "Plot": "A disillusioned poet struggles for recognition in post-independence India, finding solace and understanding only in the company of a warm-hearted prostitute.",
    "Language": "Hindi, Urdu",
    "Country": "India",
    "Awards": "Time Magazine All-Time 100 Movies",
    "Poster": "/paintings/pyaasa.jpg",
    "imdbRating": "8.3",
    "imdbID": "tt0050861",
    "Type": "movie",
    "Response": "True"
  },
  "tt0048473": {
    "Title": "Pather Panchali",
    "Year": "1955",
    "Rated": "U",
    "Released": "26 Aug 1955",
    "Runtime": "125 min",
    "Genre": "Drama",
    "Director": "Satyajit Ray",
    "Writer": "Satyajit Ray, Bibhutibhushan Bandyopadhyay",
    "Actors": "Kanu Bannerjee, Karuna Bannerjee, Subir Bannerjee",
    "Plot": "The childhood of Apu and his sister Durga in a poor village in rural Bengal, showing their family's daily struggles and moments of wonder.",
    "Language": "Bengali",
    "Country": "India",
    "Awards": "Best Human Document (Cannes Film Festival)",
    "Poster": "/paintings/pather-panchali.jpg",
    "imdbRating": "8.2",
    "imdbID": "tt0048473",
    "Type": "movie",
    "Response": "True"
  },
  "tt6751668": {
    "Title": "Parasite",
    "Year": "2019",
    "Rated": "R",
    "Released": "30 May 2019",
    "Runtime": "132 min",
    "Genre": "Drama, Thriller",
    "Director": "Bong Joon Ho",
    "Writer": "Bong Joon Ho, Han Jin-won",
    "Actors": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
    "Plot": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "Language": "Korean",
    "Country": "South Korea",
    "Awards": "Won 4 Oscars. 308 wins & 271 nominations total.",
    "Poster": "/paintings/parasite.jpg",
    "imdbRating": "8.5",
    "imdbID": "tt6751668",
    "Type": "movie",
    "Response": "True"
  }
};

function generateDeterministicMock(imdbID: string, typeLabel: string): any {
  if (MOCK_FILMS[imdbID]) {
    return MOCK_FILMS[imdbID];
  }
  
  // Parse digits from imdbID to seed deterministic values
  const digits = parseInt(imdbID.replace(/\D/g, '')) || 12345;
  const directors = ["Christopher Nolan", "Martin Scorsese", "Stanley Kubrick", "Alfred Hitchcock", "Akira Kurosawa", "Satyajit Ray", "Guru Dutt"];
  const genres = ["Drama", "Crime, Drama", "Sci-Fi, Thriller", "Mystery, Thriller", "Drama, Romance"];
  
  const year = 1940 + (digits % 85);
  const runtime = 90 + (digits % 120);
  const rating = (7.0 + (digits % 25) / 10).toFixed(1);
  const director = directors[digits % directors.length];
  const genre = genres[digits % genres.length];
  
  return {
    "Title": `Cinematic Masterwork (${typeLabel} - ID: ${imdbID})`,
    "Year": String(year),
    "Rated": "PG-13",
    "Released": `15 Oct ${year}`,
    "Runtime": `${runtime} min`,
    "Genre": genre,
    "Director": director,
    "Writer": "Screenplay Writer",
    "Actors": "Lead Actor, Supporting Actor",
    "Plot": "A gripping and evocative exploration of human choices, set against the backdrop of historical transitions, detailing the struggle for authenticity, freedom, and deep connection.",
    "Language": "English",
    "Country": "International",
    "Awards": "Cinephile Choice selection & critical acclaim.",
    "Poster": "/paintings/default-movie.jpg",
    "imdbRating": rating,
    "imdbID": imdbID,
    "Type": "movie",
    "Response": "True"
  };
}

async function fetchSingleMovie(imdbID: string, typeLabel: string): Promise<any> {
  const apiKey = process.env.OMDB_API_KEY;
  if (apiKey) {
    try {
      const omdbUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
      const res = await fetch(omdbUrl);
      if (res.ok) {
        const json = await res.json();
        if (json.Response === "True") {
          return json;
        }
      }
    } catch (fetchErr) {
      console.error('OMDB fetch error, falling back to mock:', fetchErr);
    }
  }
  return generateDeterministicMock(imdbID, typeLabel);
}

export async function GET(request: NextRequest) {
  try {
    const db = getAdminDb();
    
    // Parse requested parameters
    const category = request.nextUrl.searchParams.get('category') || 'choice';
    const language = request.nextUrl.searchParams.get('language') || 'hindi';
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
    const cacheDocId = `${category}_${language}_${todayStr}`;
    const cacheRef = db.collection('chalchitr_cache').doc(cacheDocId);

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

    if (cachedDoc && cachedDoc.contemporary && cachedDoc.classical) {
      return NextResponse.json({
        contemporary: cachedDoc.contemporary,
        classical: cachedDoc.classical,
        fetchedAt: cachedDoc.fetchedAt,
        source: 'cache'
      });
    }

    // Select IMDb IDs of the day using seeded daily permutation
    const dayIdx = getDayIndex(500, date);
    const shuffled = shuffleIndices(IMDB_IDS.length, dayIdx);

    const categories = ['choice', 'academy', 'documentary', 'short'];
    const languages = ['hindi', 'indian_regional', 'english', 'world'];

    const catIdx = Math.max(0, categories.indexOf(category));
    const langIdx = Math.max(0, languages.indexOf(language));

    // Map contemporary and classical to distinct indices in the shuffled array
    const contempIdx = (catIdx * 8) + (langIdx * 2);
    const classicalIdx = (catIdx * 8) + (langIdx * 2) + 1;

    const contempImdbID = IMDB_IDS[shuffled[contempIdx % IMDB_IDS.length]];
    const classicalImdbID = IMDB_IDS[shuffled[classicalIdx % IMDB_IDS.length]];

    // Fetch both movies in parallel
    const [contemporary, classical] = await Promise.all([
      fetchSingleMovie(contempImdbID, 'Contemporary'),
      fetchSingleMovie(classicalImdbID, 'Classical')
    ]);

    const fetchedAtStr = new Date().toISOString();

    // Cache the response pair
    try {
      await cacheRef.set({
        contemporary,
        classical,
        fetchedAt: fetchedAtStr,
      });

      // Run cleanup asynchronously
      cleanupOldCache(db).catch(err => console.error('Cache cleanup error:', err));
    } catch (dbError) {
      console.error('Firestore cache write error:', dbError);
    }

    return NextResponse.json({
      contemporary,
      classical,
      fetchedAt: fetchedAtStr,
      source: 'live'
    });
  } catch (err: any) {
    console.error('Unexpected error in Chalchitr API:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}

async function cleanupOldCache(db: any) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const snap = await db.collection('chalchitr_cache')
    .where('fetchedAt', '<', thirtyDaysAgo.toISOString())
    .get();
    
  if (snap.empty) return;
  
  const batch = db.batch();
  snap.docs.forEach((doc: any) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
  console.log(`Cleaned up ${snap.size} old chalchitr cache documents.`);
}
