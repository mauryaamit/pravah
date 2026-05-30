// src/app/(app)/typewriter/selection.ts

import { SEED_DATA } from './data';
import { ALL_SOURCES } from './sources';

export const UMBRELLA_GENRES = [
  'Life & Personal Experience',
  'Family & Relationships',
  'Psychology & Behavior',
  'Science & Technology',
  'Environment & Nature',
  'Health & Medicine',
  'Travel & Places',
  'Society, Politics & History',
  'Arts, Culture & Language',
  'Special Collections',
] as const;

export type UmbrellaGenre = typeof UMBRELLA_GENRES[number];

export interface TypewriterPiece {
  title: string;
  url: string;
  publication: string;
  publicationId: string;
  author: string;
  genre: UmbrellaGenre;
  type: 'essay' | 'article';
  paywalled: boolean;
  source: 'live' | 'seed';

  // Companion — from seed data if available, generated from metadata if not:
  introduction: string;
  companion: {
    why_this_piece: string;
    context: string;
    main_ideas: string;
    intellectual_lineage: string;
    related_thinkers: string[];
    related_books: string[];
    related_concepts: string[];
    why_influential: string;
  };
  before_you_read: string;
  after_you_read: string;
  verified_date?: string;
}

export interface ParsedArticle {
  title: string;
  url: string;
  publication: string;
  publicationId: string;
  author: string;
  genre: string;
  type: 'essay' | 'article';
  paywalled: boolean;
}

export interface DailySelection {
  essays: TypewriterPiece[];    // exactly 10, one per genre guaranteed
  articles: TypewriterPiece[];  // exactly 10, one per genre guaranteed
  date: string;
  source: 'live' | 'mixed' | 'seed';
}

// Main selection function — guarantees one piece per genre:
export function buildDailySelection(
  livePieces: ParsedArticle[],
  date: Date = new Date()
): DailySelection {
  const dateStr = date.toISOString().split('T')[0];
  const dateSeed = computeDateSeed(dateStr);

  const essays: TypewriterPiece[] = [];
  const articles: TypewriterPiece[] = [];

  for (const genre of UMBRELLA_GENRES) {
    // ── ESSAYS ──
    // 1. Try to find a live essay for this genre:
    const liveEssays = livePieces.filter(
      p => p.genre === genre && p.type === 'essay'
    );
    // 2. Fall back to seed essays for this genre:
    const seedEssays = SEED_DATA.filter(
      p => p.genre === genre && p.type === 'essay'
    );

    const essayPool = [
      ...liveEssays.map(p => enrichWithCompanion(p, 'live')),
      ...seedEssays,
    ];

    if (essayPool.length > 0) {
      // Deterministic selection based on date:
      const idx = (dateSeed + genre.length) % essayPool.length;
      essays.push(essayPool[idx]);
    } else {
      // Nuclear fallback — use any seed piece for this genre regardless of type:
      const anyForGenre = SEED_DATA.find(p => p.genre === genre);
      if (anyForGenre) {
        essays.push({ ...anyForGenre, type: 'essay' });
      }
    }

    // ── ARTICLES ──
    // 1. Try to find a live article for this genre:
    const liveArticles = livePieces.filter(
      p => p.genre === genre && p.type === 'article'
    );
    // 2. Fall back to seed articles for this genre:
    const seedArticles = SEED_DATA.filter(
      p => p.genre === genre && p.type === 'article'
    );

    const articlePool = [
      ...liveArticles.map(p => enrichWithCompanion(p, 'live')),
      ...seedArticles,
    ];

    if (articlePool.length > 0) {
      const idx = (dateSeed + genre.length + 7) % articlePool.length;
      articles.push(articlePool[idx]);
    } else {
      const anyForGenre = SEED_DATA.find(p => p.genre === genre);
      if (anyForGenre) {
        articles.push({ ...anyForGenre, type: 'article' });
      }
    }
  }

  const hasLive = essays.some(e => e.source === 'live') ||
                  articles.some(a => a.source === 'live');

  return {
    essays,
    articles,
    date: dateStr,
    source: hasLive ? 'mixed' : 'seed',
  };
}

function computeDateSeed(dateStr: string): number {
  return dateStr.split('-').reduce((acc, n) => acc + parseInt(n) * 31, 0);
}

// Generate a metadata companion for live-fetched articles without pre-authored companions:
function enrichWithCompanion(article: ParsedArticle, source: 'live'): TypewriterPiece {
  const sourceInfo = ALL_SOURCES.find(s => s.id === article.publicationId);

  return {
    ...article,
    genre: article.genre as UmbrellaGenre,
    source,
    introduction: `A ${article.type} from ${article.publication}${article.author ? ` by ${article.author}` : ''}, selected for its contribution to ${article.genre} writing. ${sourceInfo?.character || ''}`,
    companion: {
      why_this_piece: `${article.publication} is among the world's leading publications in ${article.genre} writing. ${sourceInfo?.character || ''} This piece was selected through Pravah's multi-source curation system as representative of the best available writing in the ${article.genre} category today.`,
      context: `${article.publication} has established itself as a significant voice in longform ${article.type} writing. ${sourceInfo?.character || ''} Understanding the publication's editorial philosophy helps frame why this piece appears here: ${article.publication} consistently prioritizes depth, nuance, and writing that rewards careful attention over pieces optimized for quick consumption.`,
      main_ideas: `This ${article.type} from ${article.publication} addresses the ${article.genre} domain. To fully appreciate its argument, structure, and significance, read the full piece using the link below. Pravah's Curation selected it for its relevance, quality of writing, and the intellectual value it offers to readers seeking depth in ${article.genre}.`,
      intellectual_lineage: `${article.publication} belongs to a tradition of serious longform ${article.type} writing that prioritizes ideas over immediacy. ${sourceInfo?.character || ''} Pieces selected from this publication typically engage with questions that have engaged serious thinkers across generations.`,
      related_thinkers: [],
      related_books: [],
      related_concepts: [article.genre, 'Longform Journalism', article.publication],
      why_influential: `Selected by Pravah's multi-source curation system drawing from ${ALL_SOURCES.length} of the world's leading intellectual publications. The selection criteria prioritize writing that changes how you think about something, introduces a perspective you haven't encountered, and rewards unhurried reading.`,
    },
    before_you_read: `Notice what you already believe about ${article.genre.toLowerCase()} before you begin reading.`,
    after_you_read: `What did this piece change or challenge in how you think about ${article.genre.toLowerCase()}?`,
  };
}
