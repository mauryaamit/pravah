// src/app/api/typewriter/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { FETCHABLE_SOURCES } from '@/app/(app)/typewriter/sources';
import { getAdminDb } from '@/lib/firebase/admin';

export const dynamic = 'force-dynamic';

interface ParsedArticle {
  title: string;
  url: string;
  publication: string;
  publicationId: string;
  author: string;
  genre: string;
  type: 'essay' | 'article';
  paywalled: boolean;
}

// Format date as YYYY-MM-DD
function getTodayString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export async function GET(request: NextRequest) {
  try {
    const db = getAdminDb();
    const todayStr = getTodayString();
    const cacheRef = db.collection('typewriter_cache').doc(todayStr);
    
    // Try to get from Firestore cache first
    let cachedData = null;
    try {
      const doc = await cacheRef.get();
      if (doc.exists) {
        cachedData = doc.data();
      }
    } catch (dbError) {
      console.error('Firestore cache read error:', dbError);
    }

    if (cachedData && cachedData.articles && cachedData.articles.length > 0) {
      return NextResponse.json({
        articles: cachedData.articles,
        fetchedAt: cachedData.fetchedAt,
        source: 'cache',
        sourceCount: FETCHABLE_SOURCES.length,
      });
    }

    // Cache miss or empty: fetch from live feeds in parallel
    const results = await Promise.allSettled(
      FETCHABLE_SOURCES.map(source => fetchSource(source))
    );

    const allArticles: ParsedArticle[] = [];

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        allArticles.push(...result.value);
      } else {
        console.warn(`Failed to fetch ${FETCHABLE_SOURCES[index].name}:`, result.reason);
      }
    });

    // If live fetch produced nothing, return empty
    if (allArticles.length === 0) {
      return NextResponse.json({
        articles: [],
        source: 'failed',
        error: 'All live fetches failed',
      }, { status: 200 });
    }

    const fetchedAtStr = new Date().toISOString();

    // Save to Firestore cache
    try {
      await cacheRef.set({
        articles: allArticles,
        fetchedAt: fetchedAtStr,
      });
      
      // Perform 30-day cleanup asynchronously
      cleanupOldCache(db).catch(err => console.error('Cache cleanup error:', err));
    } catch (dbError) {
      console.error('Firestore cache write error:', dbError);
    }

    return NextResponse.json({
      articles: allArticles,
      fetchedAt: fetchedAtStr,
      source: 'live',
      sourceCount: FETCHABLE_SOURCES.length,
    });
  } catch (error) {
    console.error('Unexpected error in Typewriter API route:', error);
    return NextResponse.json({
      articles: [],
      source: 'failed',
      error: 'Unexpected server error',
    }, { status: 200 });
  }
}

async function fetchSource(source: typeof FETCHABLE_SOURCES[0]): Promise<ParsedArticle[]> {
  const response = await fetch(source.fetchUrl!, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'application/xml,text/xml,application/xhtml+xml,text/html;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Cache-Control': 'max-age=0',
    },
    next: { revalidate: 86400 },
  });

  if (!response.ok) throw new Error(`${source.name}: ${response.status}`);

  const xml = await response.text();
  return parseRss(xml, source);
}

function parseRss(xml: string, source: typeof FETCHABLE_SOURCES[0]): ParsedArticle[] {
  const articles: ParsedArticle[] = [];
  
  const isAtom = xml.includes('<entry>');
  const itemPattern = isAtom ? /<entry>([\s\S]*?)<\/entry>/gi : /<item>([\s\S]*?)<\/item>/gi;
  
  let match;
  while ((match = itemPattern.exec(xml)) !== null && articles.length < 20) {
    const itemXml = match[1];
    
    // Extract Link
    let url = '';
    if (isAtom) {
      const linkMatch = itemXml.match(/<link\s+[^>]*href="([^"]+)"/i) || itemXml.match(/<link>([\s\S]*?)<\/link>/i);
      url = linkMatch ? linkMatch[1].trim() : '';
    } else {
      const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/i);
      url = linkMatch ? linkMatch[1].trim() : '';
    }
    
    if (url.includes('<![CDATA[')) {
      url = url.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/i, '$1').trim();
    }
    
    if (!url) continue;
    
    // Extract Title
    const titleMatch = itemXml.match(/<title>([\s\S]*?)<\/title>/i) || itemXml.match(/<title\s+[^>]*>([\s\S]*?)<\/title>/i);
    let title = titleMatch ? titleMatch[1].trim() : '';
    if (title.includes('<![CDATA[')) {
      title = title.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/i, '$1').trim();
    }
    title = cleanTitle(title);
    
    if (!title || title.length < 5) continue;
    
    // Extract Author
    let author = '';
    const creatorMatch = itemXml.match(/<dc:creator>([\s\S]*?)<\/dc:creator>/i) || 
                         itemXml.match(/<author>([\s\S]*?)<\/author>/i);
    if (creatorMatch) {
      author = creatorMatch[1].trim();
      if (author.includes('<name>')) {
        const nameMatch = author.match(/<name>([\s\S]*?)<\/name>/i);
        author = nameMatch ? nameMatch[1].trim() : author;
      }
      if (author.includes('<![CDATA[')) {
        author = author.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/i, '$1').trim();
      }
      author = author.replace(/<\/?[^>]+(>|$)/g, "").trim();
    }
    
    if (author.includes('(') && author.includes(')')) {
      const nameInParen = author.match(/\(([^)]+)\)/);
      if (nameInParen) author = nameInParen[1].trim();
    }
    
    articles.push({
      title,
      url,
      publication: source.name,
      publicationId: source.id,
      author: author || 'Staff Writer',
      genre: inferGenre(title, url),
      type: inferType(title, url, source),
      paywalled: source.paywalled,
    });
  }
  
  return articles;
}

async function cleanupOldCache(db: any) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const snap = await db.collection('typewriter_cache')
    .where('fetchedAt', '<', thirtyDaysAgo.toISOString())
    .get();
    
  if (snap.empty) return;
  
  const batch = db.batch();
  snap.docs.forEach((doc: any) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
  console.log(`Cleaned up ${snap.size} old typewriter cache documents.`);
}

// ── HELPER FUNCTIONS ──

function inferGenre(title: string, url: string): string {
  const t = (title + ' ' + url).toLowerCase();
  if (t.match(/science|physics|biology|genetics|evolution|quantum|brain|neuro|computer|ai|tech|internet|digital|code|software/))
    return 'Science & Technology';
  if (t.match(/psycholog|behavior|memory|cognitive|mental|mind|bias|emotion|personality|social|addiction/))
    return 'Psychology & Behavior';
  if (t.match(/life|death|love|sex|happiness|memoir|personal|growing|childhood|aging|grief/))
    return 'Life & Personal Experience';
  if (t.match(/family|parenting|child|marriage|gender|women|feminism|relationship|sex/))
    return 'Family & Relationships';
  if (t.match(/environment|climate|nature|ecology|animal|species|forest|ocean|energy|planet/))
    return 'Environment & Nature';
  if (t.match(/health|medicine|disease|virus|cancer|drug|food|nutrition|body|hospital|doctor/))
    return 'Health & Medicine';
  if (t.match(/travel|place|city|country|india|africa|europe|america|asia|geography|journey/))
    return 'Travel & Places';
  if (t.match(/politic|history|war|race|society|economy|money|crime|justice|government|democracy/))
    return 'Society, Politics & History';
  if (t.match(/art|music|film|movie|book|literature|writing|language|culture|poetry|cinema/))
    return 'Arts, Culture & Language';
  return 'Special Collections';
}

function inferType(title: string, url: string, source: typeof FETCHABLE_SOURCES[0]): 'essay' | 'article' {
  const t = (title + ' ' + url).toLowerCase();
  if (source.type === 'essay') return 'essay';
  if (source.type === 'article') return 'article';
  if (t.match(/essay|memoir|personal|reflection|meditation|notebook/)) return 'essay';
  return 'article';
}

function cleanTitle(title: string): string {
  return title
    .replace(/\s+/g, ' ')
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .trim();
}
