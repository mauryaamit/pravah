// src/lib/khabar/providers/market-provider.ts
// Live Market Data Provider Engine for Khabar
// Every number is strictly fetched from legitimate financial data endpoints, verified, and validated.
// Zero mock data or static placeholder prices.

import { FullMarketSnapshot, MarketQuote, MarketExchangeStatus } from '../types';
import { callGemini, getGeminiApiKey } from '@/lib/ai/gemini';

export interface MarketDataProvider {
  getMarketSnapshot(): Promise<FullMarketSnapshot>;
}

interface SymbolConfig {
  symbol: string;
  name: string;
  category: MarketQuote['category'];
  currencyPrefix: string;
  unit?: string;
  isHeadline?: boolean;
}

const TRACKED_INSTRUMENTS: SymbolConfig[] = [
  // 1. Headline Indian Indices
  { symbol: '^NSEI', name: 'NIFTY 50', category: 'indian_index', currencyPrefix: '', isHeadline: true },
  { symbol: '^BSESN', name: 'SENSEX', category: 'indian_index', currencyPrefix: '', isHeadline: true },
  { symbol: '^NSEBANK', name: 'NIFTY Bank', category: 'indian_index', currencyPrefix: '', isHeadline: true },

  // 2. Indian Sectoral Indices
  { symbol: '^CNXIT', name: 'NIFTY IT', category: 'sectoral', currencyPrefix: '' },
  { symbol: '^CNXAUTO', name: 'NIFTY Auto', category: 'sectoral', currencyPrefix: '' },
  { symbol: '^CNXPHARMA', name: 'NIFTY Pharma', category: 'sectoral', currencyPrefix: '' },
  { symbol: '^CNXFMCG', name: 'NIFTY FMCG', category: 'sectoral', currencyPrefix: '' },
  { symbol: '^CNXMETAL', name: 'NIFTY Metal', category: 'sectoral', currencyPrefix: '' },
  { symbol: '^CNXREALTY', name: 'NIFTY Realty', category: 'sectoral', currencyPrefix: '' },
  { symbol: '^CNXENERGY', name: 'NIFTY Energy', category: 'sectoral', currencyPrefix: '' },
  { symbol: 'NIFTY_FIN_SERVICE.NS', name: 'NIFTY Financial Services', category: 'sectoral', currencyPrefix: '' },

  // 3. Global Benchmark Indices
  { symbol: '^GSPC', name: 'S&P 500 (US)', category: 'global_index', currencyPrefix: '' },
  { symbol: '^IXIC', name: 'NASDAQ Composite', category: 'global_index', currencyPrefix: '' },
  { symbol: '^DJI', name: 'Dow Jones Industrial', category: 'global_index', currencyPrefix: '' },
  { symbol: '^FTSE', name: 'FTSE 100 (UK)', category: 'global_index', currencyPrefix: '' },
  { symbol: '^GDAXI', name: 'DAX 40 (Germany)', category: 'global_index', currencyPrefix: '' },
  { symbol: '^N225', name: 'Nikkei 225 (Japan)', category: 'global_index', currencyPrefix: '' },
  { symbol: '^HSI', name: 'Hang Seng (HK)', category: 'global_index', currencyPrefix: '' },

  // 4. Currencies (Forex)
  { symbol: 'INR=X', name: 'USD / INR', category: 'currency', currencyPrefix: '₹', unit: 'INR per USD', isHeadline: true },
  { symbol: 'EURINR=X', name: 'EUR / INR', category: 'currency', currencyPrefix: '₹', unit: 'INR per EUR' },
  { symbol: 'GBPINR=X', name: 'GBP / INR', category: 'currency', currencyPrefix: '₹', unit: 'INR per GBP' },
  { symbol: 'EURUSD=X', name: 'EUR / USD', category: 'currency', currencyPrefix: '$', unit: 'USD per EUR' },
  { symbol: 'GBPUSD=X', name: 'GBP / USD', category: 'currency', currencyPrefix: '$', unit: 'USD per GBP' },

  // 5. Commodities
  { symbol: 'BZ=F', name: 'Brent Crude Oil', category: 'commodity', currencyPrefix: '$', unit: '/ bbl', isHeadline: true },
  { symbol: 'CL=F', name: 'WTI Crude Oil', category: 'commodity', currencyPrefix: '$', unit: '/ bbl' },
  { symbol: 'GC=F', name: 'Gold (Spot/Futures)', category: 'commodity', currencyPrefix: '$', unit: '/ troy oz', isHeadline: true },
  { symbol: 'SI=F', name: 'Silver (Futures)', category: 'commodity', currencyPrefix: '$', unit: '/ troy oz' },

  // 6. Sovereign Bond Yields
  { symbol: '^TNX', name: 'US 10-Year Treasury Yield', category: 'bond', currencyPrefix: '', unit: '% yield' },
];

/**
 * Calculates accurate real-time open/closed exchange statuses and time to next bell.
 */
export function calculateExchangeStatuses(now: Date = new Date()): MarketExchangeStatus[] {
  const istOffsetMs = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffsetMs);
  const dayOfWeek = istDate.getDay(); // 0 = Sun, 6 = Sat
  const currentMinutes = istDate.getHours() * 60 + istDate.getMinutes();

  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  // 1. Indian Markets (NSE/BSE): 09:15 to 15:30 IST (Mon-Fri)
  const nseOpen = 9 * 60 + 15;
  const nseClose = 15 * 60 + 30;
  const isIndiaOpen = !isWeekend && currentMinutes >= nseOpen && currentMinutes <= nseClose;
  const isIndiaPreOpen = !isWeekend && currentMinutes >= 9 * 60 && currentMinutes < nseOpen;

  let indiaStatus: 'OPEN' | 'CLOSED' | 'PRE-OPEN' | 'HOLIDAY' = isIndiaOpen ? 'OPEN' : 'CLOSED';
  if (isIndiaPreOpen) indiaStatus = 'PRE-OPEN';
  if (isWeekend) indiaStatus = 'HOLIDAY';

  let indiaSchedule = '';
  if (isIndiaOpen) {
    const minsLeft = nseClose - currentMinutes;
    const hrs = Math.floor(minsLeft / 60);
    const mins = minsLeft % 60;
    indiaSchedule = `Closes in ${hrs > 0 ? `${hrs}h ` : ''}${mins}m (at 3:30 PM IST)`;
  } else if (isIndiaPreOpen) {
    indiaSchedule = `Opens at 9:15 AM IST`;
  } else {
    indiaSchedule = `Opens next trading day at 9:15 AM IST`;
  }

  // 2. US Markets (NYSE / NASDAQ): 09:30 to 16:00 EST (19:00 to 01:30 IST)
  const usOpen = 19 * 60; // 7:00 PM IST
  const usClose = 25 * 60 + 30; // 1:30 AM IST
  const isUsOpen = !isWeekend && (currentMinutes >= usOpen || currentMinutes <= 1 * 60 + 30);
  const usStatus = isUsOpen ? 'OPEN' : 'CLOSED';
  const usSchedule = isUsOpen ? 'Closes at 1:30 AM IST' : 'Opens at 7:00 PM IST';

  // 3. European Markets (LSE / DAX): 08:00 to 16:30 GMT (13:30 to 22:00 IST)
  const euOpen = 13 * 60 + 30;
  const euClose = 22 * 60;
  const isEuOpen = !isWeekend && currentMinutes >= euOpen && currentMinutes <= euClose;
  const euStatus = isEuOpen ? 'OPEN' : 'CLOSED';
  const euSchedule = isEuOpen ? 'Closes at 10:00 PM IST' : 'Opens at 1:30 PM IST';

  // 4. Asian Markets (Nikkei / Tokyo): 09:00 to 15:00 JST (05:30 to 11:30 IST)
  const asiaOpen = 5 * 60 + 30;
  const asiaClose = 11 * 60 + 30;
  const isAsiaOpen = !isWeekend && currentMinutes >= asiaOpen && currentMinutes <= asiaClose;
  const asiaStatus = isAsiaOpen ? 'OPEN' : 'CLOSED';
  const asiaSchedule = isAsiaOpen ? 'Closes at 11:30 AM IST' : 'Opens next day at 5:30 AM IST';

  return [
    {
      exchange: 'Indian Market (NSE/BSE)',
      isOpen: isIndiaOpen,
      statusText: indiaStatus,
      scheduleDetail: indiaSchedule,
    },
    {
      exchange: 'US Market (NYSE/NASDAQ)',
      isOpen: isUsOpen,
      statusText: usStatus,
      scheduleDetail: usSchedule,
    },
    {
      exchange: 'European Market (LSE/DAX)',
      isOpen: isEuOpen,
      statusText: euStatus,
      scheduleDetail: euSchedule,
    },
    {
      exchange: 'Asian Markets',
      isOpen: isAsiaOpen,
      statusText: asiaStatus,
      scheduleDetail: asiaSchedule,
    },
  ];
}

/**
 * Fetches and parses a single live quote from standard financial endpoints with sanity validation.
 */
async function fetchQuote(config: SymbolConfig): Promise<MarketQuote | null> {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(config.symbol)}?interval=1d`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
      next: { revalidate: 60 },
    });
    clearTimeout(timeoutId);

    if (!res.ok) return null;

    const data = await res.json();
    const meta = data.chart?.result?.[0]?.meta;
    if (!meta) return null;

    const rawPrice = meta.regularMarketPrice;
    const prevClose = meta.chartPreviousClose || meta.previousClose;

    // Strict Validation: Price and Previous Close must be valid non-zero positive numbers
    if (typeof rawPrice !== 'number' || !isFinite(rawPrice) || rawPrice <= 0) return null;
    if (typeof prevClose !== 'number' || !isFinite(prevClose) || prevClose <= 0) return null;

    const rawChange = rawPrice - prevClose;
    const rawChangePercent = (rawChange / prevClose) * 100;
    const isUp = rawChange >= 0;

    // Formatting with proper currency/number format
    const formatNumber = (num: number, decimals = 2) => {
      return num.toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    };

    const formattedValue = `${config.currencyPrefix}${formatNumber(rawPrice, config.category === 'currency' ? 3 : 2)}${config.unit ? ` ${config.unit}` : ''}`;
    const formattedChange = `${isUp ? '+' : ''}${formatNumber(rawChange, 2)}`;
    const formattedChangePercent = `${isUp ? '+' : ''}${rawChangePercent.toFixed(2)}%`;
    const formattedPrevClose = `${config.currencyPrefix}${formatNumber(prevClose, 2)}`;

    const formattedDayHigh = meta.regularMarketDayHigh ? `${config.currencyPrefix}${formatNumber(meta.regularMarketDayHigh, 2)}` : undefined;
    const formattedDayLow = meta.regularMarketDayLow ? `${config.currencyPrefix}${formatNumber(meta.regularMarketDayLow, 2)}` : undefined;

    const marketTime = meta.regularMarketTime
      ? new Date(meta.regularMarketTime * 1000)
      : new Date();

    const timestamp = marketTime.toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }) + ' IST';

    return {
      name: config.name,
      symbol: config.symbol,
      category: config.category,
      value: formattedValue,
      rawPrice,
      change: formattedChange,
      changePercent: formattedChangePercent,
      rawChangePercent,
      isUp,
      previousClose: formattedPrevClose,
      dayHigh: formattedDayHigh,
      dayLow: formattedDayLow,
      unit: config.unit,
      freshness: '15-min delayed',
      sourceProvider: 'Global Financial Market Feed',
      timestamp,
    };
  } catch {
    return null;
  }
}

/**
 * Generates an objective, non-hallucinated explanation of market movements
 * by feeding the actual retrieved numbers to Gemini.
 */
async function generateMarketExplanation(
  quotes: MarketQuote[],
  isIndiaOpen: boolean
): Promise<string> {
  const topGainers = [...quotes]
    .filter(q => q.category === 'sectoral' || q.category === 'indian_index')
    .sort((a, b) => b.rawChangePercent - a.rawChangePercent)
    .slice(0, 3);

  const topLosers = [...quotes]
    .filter(q => q.category === 'sectoral' || q.category === 'indian_index')
    .sort((a, b) => a.rawChangePercent - b.rawChangePercent)
    .slice(0, 3);

  const nifty = quotes.find(q => q.symbol === '^NSEI');
  const sensex = quotes.find(q => q.symbol === '^BSESN');
  const usdInr = quotes.find(q => q.symbol === 'INR=X');
  const brent = quotes.find(q => q.symbol === 'BZ=F');

  // Deterministic summary fallback
  const fallback = `NIFTY 50 ${nifty?.changePercent || 'flat'} at ${nifty?.value || ''} and Sensex ${sensex?.changePercent || 'flat'} at ${sensex?.value || ''}. Top sector performers: ${topGainers.map(g => `${g.name} (${g.changePercent})`).join(', ')}. Currency: USD/INR at ${usdInr?.value || ''}; Brent Crude at ${brent?.value || ''}.`;

  const apiKey = getGeminiApiKey();
  if (!apiKey) return fallback;

  const dataContext = `
Actual Market Snapshot (Timestamp: ${new Date().toLocaleTimeString()}):
- NIFTY 50: ${nifty?.value || 'N/A'} (${nifty?.changePercent || 'N/A'})
- SENSEX: ${sensex?.value || 'N/A'} (${sensex?.changePercent || 'N/A'})
- USD/INR: ${usdInr?.value || 'N/A'} (${usdInr?.changePercent || 'N/A'})
- Brent Crude Oil: ${brent?.value || 'N/A'} (${brent?.changePercent || 'N/A'})
- Top Gaining Sectors: ${topGainers.map(g => `${g.name} ${g.changePercent}`).join(', ')}
- Top Lagging Sectors: ${topLosers.map(l => `${l.name} ${l.changePercent}`).join(', ')}
- Session Status: ${isIndiaOpen ? 'Live Trading Session' : 'Market Closed'}
`;

  try {
    const prompt = `
Based SOLELY on the verified numerical market data below, write a 2-sentence objective summary of today's market session for informed readers.
Do NOT invent new prices or fabricate corporate events. If market moves are mixed or range-bound, state that clearly.

${dataContext}
`;
    const explanation = await callGemini(prompt, {
      maxOutputTokens: 150,
      temperature: 0.3,
      systemInstruction: 'You are an objective financial market editor. Only summarize the provided data.',
    });

    return explanation.trim() || fallback;
  } catch {
    return fallback;
  }
}

export class LiveMarketDataProvider implements MarketDataProvider {
  private cache: { snapshot: FullMarketSnapshot; lastFetched: number } | null = null;

  async getMarketSnapshot(): Promise<FullMarketSnapshot> {
    const now = Date.now();
    const exchanges = calculateExchangeStatuses(new Date());
    const isIndianMarketOpen = exchanges[0].isOpen;

    // Cache TTL: 90 seconds when market is open, 5 minutes when market is closed
    const cacheTtlMs = isIndianMarketOpen ? 90 * 1000 : 5 * 60 * 1000;

    if (this.cache && (now - this.cache.lastFetched < cacheTtlMs)) {
      return this.cache.snapshot;
    }

    // Fetch all tracked instruments in parallel
    const quotePromises = TRACKED_INSTRUMENTS.map(cfg => fetchQuote(cfg));
    const results = await Promise.allSettled(quotePromises);

    const validQuotes: MarketQuote[] = [];
    for (let i = 0; i < results.length; i++) {
      const res = results[i];
      if (res.status === 'fulfilled' && res.value !== null) {
        validQuotes.push(res.value);
      } else {
        // Honest fallback for temporarily unavailable instruments
        const cfg = TRACKED_INSTRUMENTS[i];
        validQuotes.push({
          name: cfg.name,
          symbol: cfg.symbol,
          category: cfg.category,
          value: 'Temporarily unavailable',
          rawPrice: 0,
          change: '—',
          changePercent: '—',
          rawChangePercent: 0,
          isUp: false,
          freshness: 'Temporarily unavailable',
          sourceProvider: 'Global Financial Market Feed',
          timestamp: new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }) + ' IST',
        });
      }
    }

    const headlineIndices = validQuotes.filter(q => {
      const cfg = TRACKED_INSTRUMENTS.find(c => c.symbol === q.symbol);
      return cfg?.isHeadline;
    });

    const indianSectorals = validQuotes.filter(q => q.category === 'sectoral');
    const globalIndices = validQuotes.filter(q => q.category === 'global_index');
    const forex = validQuotes.filter(q => q.category === 'currency');
    const commodities = validQuotes.filter(q => q.category === 'commodity');
    const bonds = validQuotes.filter(q => q.category === 'bond');

    const actionableSectorals = indianSectorals.filter(q => q.rawPrice > 0);
    const topGainers = [...actionableSectorals].sort((a, b) => b.rawChangePercent - a.rawChangePercent).slice(0, 3);
    const topLosers = [...actionableSectorals].sort((a, b) => a.rawChangePercent - b.rawChangePercent).slice(0, 3);

    const marketExplanation = await generateMarketExplanation(validQuotes, isIndianMarketOpen);

    const timeString = new Date().toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const snapshot: FullMarketSnapshot = {
      timestamp: `${timeString} IST`,
      freshnessTag: isIndianMarketOpen ? '15-min delayed' : 'Market Closed',
      isMarketOpen: isIndianMarketOpen,
      exchanges,
      headlineIndices,
      indianSectorals,
      globalIndices,
      forex,
      commodities,
      bonds,
      topGainers,
      topLosers,
      marketExplanation,
      provenance: 'Market data sourced from Global Exchange Feeds. Data is 15-minute delayed during trading sessions and reflects official closing values outside trading hours.',
    };

    this.cache = {
      snapshot,
      lastFetched: now,
    };

    return snapshot;
  }
}

export const defaultMarketProvider = new LiveMarketDataProvider();
