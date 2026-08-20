// src/lib/khabar/types.ts
// Core Type Definitions for Khabar - Dynamic Daily News & Intelligence Engine

export type KhabarCategory =
  | 'brief'
  | 'hot'
  | 'india'
  | 'economy'
  | 'business'
  | 'finance'
  | 'world'
  | 'science'
  | 'tech'
  | 'society'
  | 'environment'
  | 'sports'
  | 'culture'
  | 'bharat_ias';

export type UserLensMode =
  | 'all'
  | 'mba'
  | 'ias'
  | 'finance'
  | 'tech';

export type StoryBadge =
  | 'BREAKING'
  | 'DEVELOPING'
  | 'IMPORTANT'
  | 'MARKETS'
  | 'EXPLAINER';

export interface RawSourceItem {
  id: string;
  sourceName: string;
  sourceType: 'Primary Government / Reg' | 'International Agency' | 'Journalistic / Wire' | 'Scientific Journal' | 'Corporate Filing';
  sourceUrl: string;
  title: string;
  snippet: string;
  category?: KhabarCategory;
  publishedAt: string; // ISO 8601
  author?: string;
  imageUrl?: string;
  imageCredit?: string;
}

export interface SourceCitation {
  name: string;
  type: 'Primary Government / Reg' | 'International Agency' | 'Journalistic / Wire' | 'Scientific Journal' | 'Corporate Filing';
  url: string;
  title?: string;
  publishedAt?: string;
}

export interface KnowTheConcept {
  conceptName: string;
  definition: string;
  howItWorks: string;
  practicalImpact: string;
}

export interface MBALens {
  company: string;
  industry: string;
  strategicMove: string;
  financialImpact: string;
  competitiveImplications: string;
}

export interface IASLens {
  paper: 'GS 1' | 'GS 2' | 'GS 3' | 'GS 4' | 'Essay';
  prelimsPointers: string[];
  mainsDimensions: {
    coreIssue: string;
    challenges: string;
    wayForward: string;
  };
  essayInterviewHook: string;
}

export interface WhyShouldICare {
  personalFinance?: string;
  consumerImpact?: string;
  jobsAndCareers?: string;
  dailyLife?: string;
}

export interface TimelineItem {
  timeOrDate: string;
  event: string;
}

export interface KhabarStory {
  id: string;
  headline: string;
  category: KhabarCategory;
  subcategory: string;
  date: string; // YYYY-MM-DD
  publishedAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
  badge?: StoryBadge;
  hotScore: number; // Internal ranking score
  whatHappened: string; // 1-3 sentence core fact summary
  whyItMatters: string; // Strategic / economic / societal significance
  whatToWatch: string; // Future milestones & upcoming signals
  pravahContext: string; // Big-picture systemic anchor
  whyShouldICare?: WhyShouldICare;
  knowTheConcept?: KnowTheConcept;
  mbaLens?: MBALens;
  iasLens?: IASLens;
  timeline?: TimelineItem[];
  explainLikeImIntelligent?: string; // High-clarity conceptual breakdown
  sources: SourceCitation[];
  keyEntities: string[];
  tags: string[];
  imageUrl?: string;
  imageCredit?: string;
}

export interface MarketQuote {
  name: string;
  symbol: string;
  value: string;
  change: string;
  changePercent: string;
  isUp: boolean;
  previousClose?: string;
  dayHigh?: string;
  dayLow?: string;
  freshness: 'Real-time' | '15-min delayed' | 'End-of-day';
  timestamp: string;
}

export interface MarketExchangeStatus {
  exchange: 'Indian Market (NSE/BSE)' | 'US Market (NYSE/NASDAQ)' | 'European Market (LSE/DAX)' | 'Asian Markets';
  isOpen: boolean;
  statusText: 'OPEN' | 'CLOSED' | 'PRE-OPEN' | 'HOLIDAY';
  nextEvent: string; // e.g. "Closes at 3:30 PM IST" or "Opens at 9:15 AM IST"
}

export interface FullMarketSnapshot {
  timestamp: string;
  freshnessTag: 'Live' | '15-min delayed' | 'Market Closed';
  exchanges: MarketExchangeStatus[];
  indianIndices: MarketQuote[];
  globalIndices: MarketQuote[];
  forex: MarketQuote[];
  commodities: MarketQuote[];
  bonds: MarketQuote[];
  marketExplanation: string; // Explains what moved and why based on verified data
}

export interface DailyQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  domain: string;
}

export interface KhabarDailyEdition {
  date: string; // YYYY-MM-DD
  dateDisplay: string;
  dayOfWeek: string;
  editionNumber: number;
  lastUpdated: string; // ISO 8601
  statusText: 'Live' | 'Updating' | 'Market Closed';
  topSummaryBullets: { category: string; headline: string; takeaway: string }[];
  hotNowStories: KhabarStory[];
  stories: KhabarStory[];
  marketSnapshot: FullMarketSnapshot;
  fiveSutras: {
    economicConcept: string;
    geopoliticalDevelopment: string;
    indiaGovernance: string;
    techScienceIdea: string;
    unusualFact: string;
  };
  quiz: DailyQuizQuestion[];
}
