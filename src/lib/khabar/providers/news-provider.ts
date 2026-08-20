// src/lib/khabar/providers/news-provider.ts
// Ingestion Provider Abstraction & RSS / Public Feed Reader for Khabar

import { RawSourceItem, KhabarCategory } from '../types';

export interface NewsFeedConfig {
  id: string;
  sourceName: string;
  sourceType: 'Primary Government / Reg' | 'International Agency' | 'Journalistic / Wire' | 'Scientific Journal' | 'Corporate Filing';
  category: KhabarCategory;
  feedUrl: string;
  weight: number; // Reliability weight for Hot Score
}

export const RELIABLE_FEEDS: NewsFeedConfig[] = [
  // Primary / Government
  {
    id: 'pib-india',
    sourceName: 'Press Information Bureau (PIB India)',
    sourceType: 'Primary Government / Reg',
    category: 'india',
    feedUrl: 'https://pib.gov.in/RssMain.aspx?ModId=6',
    weight: 1.0,
  },
  {
    id: 'isro-updates',
    sourceName: 'ISRO Press Releases',
    sourceType: 'Primary Government / Reg',
    category: 'science',
    feedUrl: 'https://www.isro.gov.in/rss_press_release.xml',
    weight: 1.0,
  },
  // Indian Journalism
  {
    id: 'indian-express-india',
    sourceName: 'The Indian Express',
    sourceType: 'Journalistic / Wire',
    category: 'india',
    feedUrl: 'https://indianexpress.com/section/india/feed/',
    weight: 0.9,
  },
  {
    id: 'the-hindu-national',
    sourceName: 'The Hindu',
    sourceType: 'Journalistic / Wire',
    category: 'india',
    feedUrl: 'https://www.thehindu.com/news/national/feeder/default.rss',
    weight: 0.9,
  },
  {
    id: 'mint-economy',
    sourceName: 'Mint (Livemint)',
    sourceType: 'Journalistic / Wire',
    category: 'economy',
    feedUrl: 'https://www.livemint.com/rss/economy',
    weight: 0.9,
  },
  {
    id: 'economic-times-markets',
    sourceName: 'The Economic Times',
    sourceType: 'Journalistic / Wire',
    category: 'finance',
    feedUrl: 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms',
    weight: 0.85,
  },
  // International & Geopolitics
  {
    id: 'reuters-world',
    sourceName: 'Reuters World News',
    sourceType: 'Journalistic / Wire',
    category: 'world',
    feedUrl: 'https://feeds.reuters.com/Reuters/worldNews',
    weight: 0.95,
  },
  {
    id: 'bbc-world',
    sourceName: 'BBC News',
    sourceType: 'Journalistic / Wire',
    category: 'world',
    feedUrl: 'https://feeds.bbci.co.uk/news/world/rss.xml',
    weight: 0.9,
  },
  // Science & Tech
  {
    id: 'mit-tech-review',
    sourceName: 'MIT Technology Review',
    sourceType: 'Scientific Journal',
    category: 'tech',
    feedUrl: 'https://www.technologyreview.com/feed/',
    weight: 0.95,
  },
  {
    id: 'nature-news',
    sourceName: 'Nature',
    sourceType: 'Scientific Journal',
    category: 'science',
    feedUrl: 'https://www.nature.com/nature.rss',
    weight: 1.0,
  },
];

/**
 * Parses basic RSS/Atom XML text into structured items using fast string and regex parsing
 * (zero external dependency for highest runtime stability).
 */
export function parseRssXml(xmlText: string, config: NewsFeedConfig): RawSourceItem[] {
  const items: RawSourceItem[] = [];
  
  // Match either <item> or <entry> blocks
  const itemMatches = xmlText.match(/<(?:item|entry)[\s\S]*?<\/(?:item|entry)>/gi) || [];

  for (const itemBlock of itemMatches.slice(0, 10)) { // limit per feed for efficiency
    try {
      const titleMatch = itemBlock.match(/<title(?:\s+[^>]*)?>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/title>/i);
      const title = (titleMatch ? (titleMatch[1] || titleMatch[2] || '') : '').trim();

      const linkMatch = itemBlock.match(/<link(?:\s+[^>]*href=["']([^"']+)["']|\s*>([^<]+)<\/link>)/i);
      const link = (linkMatch ? (linkMatch[1] || linkMatch[2] || '') : '').trim();

      const descMatch = itemBlock.match(/<(?:description|summary|content)(?:\s+[^>]*)?>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/(?:description|summary|content)>/i);
      let snippet = (descMatch ? (descMatch[1] || descMatch[2] || '') : '').trim();
      // Strip HTML tags from description
      snippet = snippet.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

      const dateMatch = itemBlock.match(/<(?:pubDate|published|updated|dc:date)>([\s\S]*?)<\/(?:pubDate|published|updated|dc:date)>/i);
      const rawDate = dateMatch ? dateMatch[1].trim() : '';
      let publishedAt = new Date().toISOString();
      if (rawDate) {
        const parsed = new Date(rawDate);
        if (!isNaN(parsed.getTime())) {
          publishedAt = parsed.toISOString();
        }
      }

      if (title && link) {
        items.push({
          id: `${config.id}-${Buffer.from(link).toString('base64').substring(0, 16)}`,
          sourceName: config.sourceName,
          sourceType: config.sourceType,
          sourceUrl: link,
          title: title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"'),
          snippet: snippet.substring(0, 300),
          category: config.category,
          publishedAt,
        });
      }
    } catch {
      // Continue parsing remaining items
    }
  }

  return items;
}

export interface NewsProvider {
  fetchLatest(limit?: number): Promise<RawSourceItem[]>;
  fetchByCategory(category: KhabarCategory): Promise<RawSourceItem[]>;
}

export class MultiSourceNewsProvider implements NewsProvider {
  private cache: { items: RawSourceItem[]; lastFetched: number } | null = null;
  private cacheTtlMs = 15 * 60 * 1000; // 15 mins cache

  async fetchLatest(limit = 40): Promise<RawSourceItem[]> {
    const now = Date.now();
    if (this.cache && (now - this.cache.lastFetched < this.cacheTtlMs)) {
      return this.cache.items.slice(0, limit);
    }

    const allItems: RawSourceItem[] = [];

    // Fetch all feeds in parallel with strict 5-second per-feed timeout
    const fetchPromises = RELIABLE_FEEDS.map(async (config) => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const res = await fetch(config.feedUrl, {
          signal: controller.signal,
          headers: {
            'User-Agent': 'Pravah-Khabar-Intelligence-Bot/1.0 (+https://pravah.app)',
            'Accept': 'application/rss+xml, application/xml, text/xml, application/atom+xml, */*',
          },
          next: { revalidate: 900 },
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const xml = await res.text();
          const parsed = parseRssXml(xml, config);
          return parsed;
        }
      } catch {
        // Feed failed or timed out; continue gracefully
      }
      return [];
    });

    const results = await Promise.allSettled(fetchPromises);
    for (const res of results) {
      if (res.status === 'fulfilled' && res.value.length > 0) {
        allItems.push(...res.value);
      }
    }

    // Sort by publication time (newest first)
    allItems.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    this.cache = {
      items: allItems,
      lastFetched: now,
    };

    return allItems.slice(0, limit);
  }

  async fetchByCategory(category: KhabarCategory): Promise<RawSourceItem[]> {
    const all = await this.fetchLatest(100);
    return all.filter(item => item.category === category);
  }
}

export const defaultNewsProvider = new MultiSourceNewsProvider();
