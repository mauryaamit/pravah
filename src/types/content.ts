// src/types/content.ts
export interface ContentItem {
  id: number;
  room: string;
  type: string;
  lang: string;
  title?: string | null;
  body: string;
  author?: string | null;
  source?: string | null;
  metadata?: Record<string, unknown> | null;
  date_index: number;
}

export interface Poem extends ContentItem {
  type: 'poem';
  metadata: {
    era?: string;
    city?: string;
    meter?: string;
    translationEn?: string;
    curatorNote?: string;
  };
}

export interface Word extends ContentItem {
  type: 'word';
  metadata: {
    ipa?: string;
    etymology?: string;
    synonyms?: string[];
    example?: string;
    script?: string;
  };
}

export interface Story extends ContentItem {
  type: 'story';
  metadata: {
    genre?: string;
    readingTime?: number;
    nationality?: string;
    era?: string;
  };
}

export interface Article extends ContentItem {
  type: 'article';
  metadata: {
    url?: string;
    publication?: string;
    readingTime?: number;
    topics?: string[];
    excerpt?: string;
  };
}

export interface Personality extends ContentItem {
  type: 'personality';
  metadata: {
    era?: string;
    nationality?: string;
    field?: string;
    books?: string[];
    routine?: string;
    quotes?: string[];
    imageUrl?: string;
    wikiSlug?: string;
  };
}

export interface NatureEntry extends ContentItem {
  type: 'nature';
  metadata: {
    habitat?: string;
    conservationStatus?: string;
    region?: string;
    scientificName?: string;
    imageUrl?: string;
  };
}

export interface Destination extends ContentItem {
  type: 'destination';
  metadata: {
    country?: string;
    isIndia?: boolean;
    bestTime?: string;
    localPhrase?: string;
    localScript?: string;
    hiddenGem?: string;
    food?: string;
    imageUrl?: string;
  };
}

// Static fallback card shape
export interface FallbackCard {
  title: string;
  body: string;
  note?: string;
  isStatic: true;
}
