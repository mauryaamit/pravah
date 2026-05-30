// src/app/api/typewriter/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { FETCHABLE_SOURCES } from '@/app/(app)/typewriter/sources';

export const revalidate = 86400; // 24 hours

// Fetch from all fetchable sources in parallel:
export async function GET(request: NextRequest) {
  try {
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

    // If live fetch produced nothing, return structured error for fallback:
    if (allArticles.length === 0) {
      return NextResponse.json({
        articles: [],
        source: 'failed',
        error: 'All live fetches failed',
      }, { status: 200 });
    }

    return NextResponse.json({
      articles: allArticles,
      fetchedAt: new Date().toISOString(),
      source: 'live',
      sourceCount: FETCHABLE_SOURCES.length,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
      }
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
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Cache-Control': 'max-age=0',
    },
    next: { revalidate: 86400 },
  });

  if (!response.ok) throw new Error(`${source.name}: ${response.status}`);

  const html = await response.text();
  return parseHtml(html, source);
}

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

function parseHtml(html: string, source: typeof FETCHABLE_SOURCES[0]): ParsedArticle[] {
  const articles: ParsedArticle[] = [];

  // Source-specific parsers — each site has its own HTML structure:
  switch (source.id) {

    case 'tetw': {
      // tetw.org: external links in <a href="https://..."> format
      const pattern = /<a\s+href="(https?:\/\/(?!tetw\.org)[^"]+)"[^>]*>([^<]{15,})<\/a>/gi;
      let match;
      while ((match = pattern.exec(html)) !== null && articles.length < 40) {
        const url = match[1];
        const title = match[2].trim();
        if (isValidArticleUrl(url) && title.length > 15) {
          articles.push({
            title,
            url,
            publication: inferPublication(url),
            publicationId: inferPublicationId(url),
            author: extractAuthorNear(html, match.index),
            genre: inferGenre(title, url),
            type: inferType(title, url, source),
            paywalled: inferPaywalled(url),
          });
        }
      }
      break;
    }

    case 'aeon': {
      // Aeon: <a href="/essays/..."> or <a href="/videos/...">
      const pattern = /<a\s+href="(\/essays\/[^"]+)"[^>]*>\s*<[^>]+>\s*([^<]{15,})/gi;
      let match;
      while ((match = pattern.exec(html)) !== null && articles.length < 20) {
        const path = match[1];
        const title = match[2].trim();
        if (title.length > 15) {
          articles.push({
            title: cleanTitle(title),
            url: `https://aeon.co${path}`,
            publication: 'Aeon',
            publicationId: 'aeon',
            author: extractAuthorNear(html, match.index),
            genre: inferGenre(title, path),
            type: 'essay',
            paywalled: false,
          });
        }
      }
      break;
    }

    case 'psyche': {
      const pattern = /<a\s+href="(\/ideas\/[^"]+)"[^>]*>([^<]{15,})<\/a>/gi;
      let match;
      while ((match = pattern.exec(html)) !== null && articles.length < 20) {
        const path = match[1];
        const title = match[2].trim();
        articles.push({
          title: cleanTitle(title),
          url: `https://psyche.co${path}`,
          publication: 'Psyche',
          publicationId: 'psyche',
          author: extractAuthorNear(html, match.index),
          genre: inferGenre(title, path),
          type: inferType(title, path, source),
          paywalled: false,
        });
      }
      break;
    }

    case 'nautilus': {
      const pattern = /<a\s+href="(\/[^"]*article[^"]*|\/[^"]*essay[^"]*)"[^>]*>([^<]{15,})<\/a>/gi;
      let match;
      while ((match = pattern.exec(html)) !== null && articles.length < 20) {
        const path = match[1];
        const title = match[2].trim();
        articles.push({
          title: cleanTitle(title),
          url: `https://nautil.us${path}`,
          publication: 'Nautilus',
          publicationId: 'nautilus',
          author: extractAuthorNear(html, match.index),
          genre: inferGenre(title, path),
          type: inferType(title, path, source),
          paywalled: false,
        });
      }
      break;
    }

    case 'longreads': {
      const pattern = /<a\s+href="(https?:\/\/longreads\.com\/\d{4}\/[^"]+)"[^>]*>([^<]{15,})<\/a>/gi;
      let match;
      while ((match = pattern.exec(html)) !== null && articles.length < 20) {
        articles.push({
          title: cleanTitle(match[2].trim()),
          url: match[1],
          publication: 'Longreads',
          publicationId: 'longreads',
          author: extractAuthorNear(html, match.index),
          genre: inferGenre(match[2], match[1]),
          type: inferType(match[2], match[1], source),
          paywalled: false,
        });
      }
      break;
    }

    case 'guardian': {
      const pattern = /<a\s+href="(https?:\/\/www\.theguardian\.com\/[^"]+\/\d{4}\/[^"]+)"[^>]*>([^<]{15,})<\/a>/gi;
      let match;
      while ((match = pattern.exec(html)) !== null && articles.length < 20) {
        articles.push({
          title: cleanTitle(match[2].trim()),
          url: match[1],
          publication: 'The Guardian',
          publicationId: 'guardian',
          author: extractAuthorNear(html, match.index),
          genre: inferGenre(match[2], match[1]),
          type: 'article',
          paywalled: false,
        });
      }
      break;
    }

    case 'jstor': {
      const pattern = /<a\s+href="(https?:\/\/daily\.jstor\.org\/[^"]+)"[^>]*>([^<]{15,})<\/a>/gi;
      let match;
      while ((match = pattern.exec(html)) !== null && articles.length < 20) {
        if (!match[1].includes('/category/') && !match[1].includes('/tag/')) {
          articles.push({
            title: cleanTitle(match[2].trim()),
            url: match[1],
            publication: 'JSTOR Daily',
            publicationId: 'jstor',
            author: extractAuthorNear(html, match.index),
            genre: inferGenre(match[2], match[1]),
            type: 'article',
            paywalled: false,
          });
        }
      }
      break;
    }

    case 'works_in_progress': {
      const pattern = /<a\s+href="(\/issues\/[^"]+|\/articles\/[^"]+)"[^>]*>([^<]{15,})<\/a>/gi;
      let match;
      while ((match = pattern.exec(html)) !== null && articles.length < 20) {
        articles.push({
          title: cleanTitle(match[2].trim()),
          url: `https://worksinprogress.co${match[1]}`,
          publication: 'Works in Progress',
          publicationId: 'works_in_progress',
          author: extractAuthorNear(html, match.index),
          genre: inferGenre(match[2], match[1]),
          type: 'article',
          paywalled: false,
        });
      }
      break;
    }

    case 'caravan': {
      const pattern = /<a\s+href="(https?:\/\/caravanmagazine\.in\/[^"]+)"[^>]*>([^<]{15,})<\/a>/gi;
      let match;
      while ((match = pattern.exec(html)) !== null && articles.length < 20) {
        if (!match[1].includes('/tag/') && !match[1].includes('/category/')) {
          articles.push({
            title: cleanTitle(match[2].trim()),
            url: match[1],
            publication: 'The Caravan',
            publicationId: 'caravan',
            author: extractAuthorNear(html, match.index),
            genre: inferGenre(match[2], match[1]),
            type: inferType(match[2], match[1], source),
            paywalled: false,
          });
        }
      }
      break;
    }
  }

  return articles.filter(a => a.title.length > 10);
}

// ── HELPER FUNCTIONS ──

function isValidArticleUrl(url: string): boolean {
  const blocked = ['twitter.com', 'facebook.com', 'instagram.com', 'youtube.com',
    'amazon.com', 'reddit.com', 'linkedin.com', 'pinterest.com', 'mailto:',
    'javascript:', '#', '.pdf', '.jpg', '.png'];
  return !blocked.some(b => url.includes(b));
}

function inferPublication(url: string): string {
  if (url.includes('newyorker.com')) return 'The New Yorker';
  if (url.includes('theatlantic.com')) return 'The Atlantic';
  if (url.includes('nytimes.com')) return 'New York Times';
  if (url.includes('aeon.co')) return 'Aeon';
  if (url.includes('nautil.us')) return 'Nautilus';
  if (url.includes('theguardian.com')) return 'The Guardian';
  if (url.includes('longreads.com')) return 'Longreads';
  if (url.includes('harpers.org')) return "Harper's Magazine";
  if (url.includes('lrb.co.uk')) return 'London Review of Books';
  if (url.includes('nybooks.com')) return 'New York Review of Books';
  if (url.includes('smithsonianmag.com')) return 'Smithsonian Magazine';
  if (url.includes('jstor.org')) return 'JSTOR Daily';
  if (url.includes('wired.com')) return 'Wired';
  if (url.includes('vox.com')) return 'Vox';
  if (url.includes('quantamagazine.org')) return 'Quanta Magazine';
  if (url.includes('caravanmagazine.in')) return 'The Caravan';
  if (url.includes('thewire.in')) return 'The Wire';
  if (url.includes('foreignaffairs.com')) return 'Foreign Affairs';
  if (url.includes('foreignpolicy.com')) return 'Foreign Policy';
  if (url.includes('orionmagazine.org')) return 'Orion Magazine';
  if (url.includes('worksinprogress.co')) return 'Works in Progress';
  if (url.includes('prospect')) return 'Prospect';
  if (url.includes('newstatesman.com')) return 'New Statesman';
  if (url.includes('psyche.co')) return 'Psyche';
  if (url.includes('bloomberg.com')) return 'Bloomberg';
  if (url.includes('wsj.com')) return 'Wall Street Journal';
  if (url.includes('economist.com')) return 'The Economist';
  try {
    const domain = new URL(url).hostname.replace('www.', '');
    return domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1);
  } catch { return 'Unknown'; }
}

function inferPublicationId(url: string): string {
  if (url.includes('newyorker.com')) return 'new_yorker';
  if (url.includes('theatlantic.com')) return 'atlantic';
  if (url.includes('aeon.co')) return 'aeon';
  if (url.includes('nautil.us')) return 'nautilus';
  if (url.includes('theguardian.com')) return 'guardian';
  if (url.includes('longreads.com')) return 'longreads';
  if (url.includes('jstor.org')) return 'jstor';
  if (url.includes('caravanmagazine.in')) return 'caravan';
  if (url.includes('thewire.in')) return 'the_wire';
  if (url.includes('wired.com')) return 'wired';
  if (url.includes('quantamagazine.org')) return 'quanta';
  if (url.includes('foreignaffairs.com')) return 'foreign_affairs';
  if (url.includes('orionmagazine.org')) return 'orion';
  if (url.includes('psyche.co')) return 'psyche';
  if (url.includes('worksinprogress.co')) return 'works_in_progress';
  return 'other';
}

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
  // For 'both' sources, infer from content signals:
  if (t.match(/essay|memoir|personal|reflection|meditation|notebook/)) return 'essay';
  return 'article';
}

function inferPaywalled(url: string): boolean {
  return url.includes('newyorker.com') || url.includes('theatlantic.com') ||
    url.includes('harpers.org') || url.includes('lrb.co.uk') ||
    url.includes('nybooks.com') || url.includes('wsj.com') ||
    url.includes('economist.com') || url.includes('bloomberg.com') ||
    url.includes('foreignaffairs.com');
}

function extractAuthorNear(html: string, position: number): string {
  // Look for "by [Author Name]" pattern in 500 chars surrounding the link:
  const surrounding = html.slice(Math.max(0, position - 200), position + 300);
  const byMatch = surrounding.match(/by\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,3})/);
  return byMatch ? byMatch[1] : '';
}

function cleanTitle(title: string): string {
  return title
    .replace(/\s+/g, ' ')
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .trim();
}
