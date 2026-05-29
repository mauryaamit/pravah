import { NextRequest, NextResponse } from 'next/server';

// Cache responses to avoid hammering tetw.org
export const revalidate = 86400; // 24 hours in seconds

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || '';
  
  try {
    // Fetch tetw.org category page or homepage
    const targetUrl = category 
      ? `https://tetw.org/${encodeURIComponent(category)}`
      : 'https://tetw.org';
    
    const response = await fetch(targetUrl, {
      headers: {
        // Realistic browser headers to avoid bot detection
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Cache-Control': 'max-age=0',
      },
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error(`tetw.org returned ${response.status}`);
    }

    const html = await response.text();
    
    // Parse the HTML to extract article links and metadata
    const articles = parseTetwHtml(html);
    
    return NextResponse.json({ 
      articles,
      fetchedAt: new Date().toISOString(),
      source: targetUrl,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
      }
    });
    
  } catch (error) {
    console.error('Typewriter API error:', error);
    
    // Return fallback data if fetch fails
    return NextResponse.json({ 
      articles: FALLBACK_ARTICLES,
      fetchedAt: new Date().toISOString(),
      source: 'fallback',
      error: 'Live fetch failed — showing curated fallback',
    }, { status: 200 }); // Always return 200 to the client
  }
}

// HTML parser — extracts article data from tetw.org's HTML structure
function parseTetwHtml(html: string): TetwArticle[] {
  const articles: TetwArticle[] = [];
  
  // Primary pattern — extract all external links with metadata:
  const linkPattern = /<a\s+href="(https?:\/\/(?!tetw\.org)[^"]+)"[^>]*>([^<]+)<\/a>/gi;
  
  let match;
  let index = 0;
  
  while ((match = linkPattern.exec(html)) !== null && index < 50) {
    const url = match[1];
    const title = match[2].trim();
    
    // Skip navigation links, social media, etc.
    if (title.length < 10 || url.includes('twitter.com') || 
        url.includes('facebook.com') || url.includes('amazon.com') ||
        url.includes('instagram.com') || url.includes('linkedin.com')) {
      continue;
    }
    
    // Determine publication from URL
    const publication = inferPublication(url);
    
    // Attempt to extract author from surrounding text context in the raw HTML
    // tetw.org typically lists articles in paragraphs or list items like:
    // "Title by Author in Publication"
    const startIdx = Math.max(0, match.index - 100);
    const endIdx = Math.min(html.length, match.index + title.length + 150);
    const context = html.substring(startIdx, endIdx);
    
    let author = '';
    const authorMatch = /by\s+([A-Z][A-Za-z'\-\s\.]+?)(?:\s+in\s+|\s+for\s+|\s+at\s+|<|\(|\n)/.exec(context);
    if (authorMatch) {
      author = authorMatch[1].trim();
      // Basic sanitization
      if (author.length > 50 || author.includes('href') || author.toLowerCase().includes('the ')) {
        author = '';
      }
    }
    
    articles.push({
      title,
      url,
      publication,
      author,
      category: inferCategory(title, url),
    });
    
    index++;
  }
  
  return articles.slice(0, 30); // Return max 30 articles
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
  if (url.includes('vox.com')) return 'Vox';
  if (url.includes('wired.com')) return 'Wired';
  if (url.includes('wsj.com')) return 'Wall Street Journal';
  if (url.includes('economist.com')) return 'The Economist';
  if (url.includes('nature.com')) return 'Nature';
  if (url.includes('science.org')) return 'Science';
  if (url.includes('newstatesman.com')) return 'New Statesman';
  if (url.includes('prospectmagazine')) return 'Prospect';
  if (url.includes('foreignpolicy.com')) return 'Foreign Policy';
  if (url.includes('foreignaffairs.com')) return 'Foreign Affairs';
  return extractDomain(url);
}

function extractDomain(url: string): string {
  try {
    const domain = new URL(url).hostname.replace('www.', '');
    return domain.split('.')[0].charAt(0).toUpperCase() + 
           domain.split('.')[0].slice(1);
  } catch {
    return 'Unknown';
  }
}

function inferCategory(title: string, url: string): string {
  const t = title.toLowerCase();
  if (t.includes('science') || t.includes('physics') || t.includes('brain') || 
      t.includes('gene') || t.includes('climate') || url.includes('nautil.us') ||
      url.includes('nature.com') || url.includes('science.org')) return 'Science & Technology';
  if (t.includes('love') || t.includes('death') || t.includes('life') || 
      t.includes('memoir') || t.includes('essay') || t.includes('grief') ||
      t.includes('solitude') || t.includes('experience')) return 'Life & Personal Experience';
  if (t.includes('politic') || t.includes('war') || t.includes('history') || 
      t.includes('race') || t.includes('democracy') || t.includes('empire') ||
      t.includes('state')) return 'Society, Politics & History';
  if (t.includes('art') || t.includes('music') || t.includes('film') || 
      t.includes('language') || t.includes('writing') || t.includes('translation') ||
      t.includes('book') || t.includes('literature')) return 'Arts, Culture & Language';
  if (t.includes('health') || t.includes('medicine') || t.includes('mental') || 
      t.includes('food') || t.includes('drug') || t.includes('diet') ||
      t.includes('doctor')) return 'Health & Medicine';
  if (t.includes('environment') || t.includes('animal') || t.includes('nature') || 
      t.includes('climate') || t.includes('forest') || t.includes('ocean')) return 'Environment & Nature';
  if (t.includes('travel') || t.includes('place') || t.includes('city') || 
      t.includes('country') || t.includes('road')) return 'Travel & Places';
  if (t.includes('psycholog') || t.includes('behavior') || t.includes('memory') || 
      t.includes('mind') || t.includes('cognitive') || t.includes('think')) return 'Psychology & Behavior';
  return 'Special Collections';
}

interface TetwArticle {
  title: string;
  url: string;
  publication: string;
  author: string;
  category: string;
  estimatedRead?: string;
}

// Curated fallbacks in case live fetch fails
const FALLBACK_ARTICLES: TetwArticle[] = [
  {
    title: "Consider the Lobster",
    url: "https://www.columbia.edu/~col8/lobsterarticle.pdf",
    publication: "Gourmet Magazine",
    author: "David Foster Wallace",
    category: "Life & Personal Experience",
  },
  {
    title: "Politics and the English Language",
    url: "https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/",
    publication: "Horizon",
    author: "George Orwell",
    category: "Arts, Culture & Language",
  },
  {
    title: "Letter from Birmingham Jail",
    url: "https://letterfromjail.com/",
    publication: "Various",
    author: "Martin Luther King Jr.",
    category: "Society, Politics & History",
  },
  {
    title: "The Death of the Moth",
    url: "https://www.online-literature.com/virginia-woolf/1397/",
    publication: "The Atlantic",
    author: "Virginia Woolf",
    category: "Life & Personal Experience",
  },
  {
    title: "Shooting an Elephant",
    url: "https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/shooting-an-elephant/",
    publication: "New Writing",
    author: "George Orwell",
    category: "Society, Politics & History",
  },
  {
    title: "Self-Reliance",
    url: "https://emersoncentral.com/texts/essays-first-series/self-reliance/",
    publication: "Essays: First Series",
    author: "Ralph Waldo Emerson",
    category: "Life & Personal Experience",
  },
  {
    title: "Why I Write",
    url: "https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/why-i-write/",
    publication: "Gangrel",
    author: "George Orwell",
    category: "Arts, Culture & Language",
  },
  {
    title: "Notes of a Native Son",
    url: "https://www.pbs.org/wgbh/masterpiece/specialfeatures/baldwin-notes-native-son/",
    publication: "Harper's Magazine",
    author: "James Baldwin",
    category: "Society, Politics & History",
  },
  {
    title: "Thinking About Thinking",
    url: "https://aeon.co/essays/how-cognitive-biases-affect-what-we-think-and-do",
    publication: "Aeon",
    author: "Aeon Editors",
    category: "Psychology & Behavior",
  },
  {
    title: "The Uninhabitable Earth",
    url: "https://nymag.com/intelligencer/2017/07/climate-change-earth-too-hot-for-humans.html",
    publication: "New York Magazine",
    author: "David Wallace-Wells",
    category: "Environment & Nature",
  },
];
