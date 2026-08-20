'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import {
  KhabarCategory,
  UserLensMode,
  KhabarDailyEdition,
  StoryBadge,
  MarketQuote,
} from '@/lib/khabar/types';
import {
  Newspaper,
  TrendingUp,
  TrendingDown,
  Globe2,
  Building2,
  Scale,
  Atom,
  Cpu,
  Leaf,
  Trophy,
  Landmark,
  Lightbulb,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
  Award,
  Layers,
  GraduationCap,
  Briefcase,
  DollarSign,
  Compass,
  RefreshCw,
  Flame,
  Check,
  Activity,
  ShieldCheck,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

const CATEGORIES: { id: KhabarCategory | 'all'; label: string; labelHi: string; icon: any }[] = [
  { id: 'all', label: 'All Stories', labelHi: 'सभी समाचार', icon: Layers },
  { id: 'hot', label: 'Hot Now', labelHi: 'प्रमुख हलचल', icon: Flame },
  { id: 'brief', label: "Aaj Kya Hua?", labelHi: 'आज क्या हुआ?', icon: Sparkles },
  { id: 'finance', label: 'Markets & Finance', labelHi: 'बाज़ार व वित्त', icon: DollarSign },
  { id: 'economy', label: 'Economy & Concepts', labelHi: 'अर्थव्यवस्था', icon: Scale },
  { id: 'business', label: 'Business & MBA', labelHi: 'उद्योग व व्यापार', icon: Building2 },
  { id: 'india', label: 'Politics & Governance', labelHi: 'राजनीति एवं शासन', icon: Landmark },
  { id: 'world', label: 'World Geopolitics', labelHi: 'विश्व परिदृश्य', icon: Globe2 },
  { id: 'tech', label: 'Technology & AI', labelHi: 'तकनीक व एआई', icon: Cpu },
  { id: 'science', label: 'Science & Space', labelHi: 'विज्ञान व अंतरिक्ष', icon: Atom },
  { id: 'environment', label: 'Climate & Energy', labelHi: 'पर्यावरण व ऊर्जा', icon: Leaf },
  { id: 'sports', label: 'Sports & Culture', labelHi: 'खेल व संस्कृति', icon: Trophy },
  { id: 'bharat_ias', label: 'Khabar for Bharat', labelHi: 'सिविल सेवा दृष्टि', icon: GraduationCap },
];

const LENS_MODES: { id: UserLensMode; label: string; icon: any }[] = [
  { id: 'all', label: 'All-Rounder', icon: Compass },
  { id: 'mba', label: 'MBA / Corporate', icon: Briefcase },
  { id: 'ias', label: 'UPSC / Bharat', icon: GraduationCap },
  { id: 'finance', label: 'Markets & Macro', icon: DollarSign },
  { id: 'tech', label: 'Tech & Science', icon: Cpu },
];

const KHABAR_ACCENT = '#1E3A5F';
const KHABAR_GOLD = '#9A7E4A';

export default function KhabarPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [edition, setEdition] = useState<KhabarDailyEdition | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<KhabarCategory | 'all'>('all');
  const [userLens, setUserLens] = useState<UserLensMode>('all');
  const [expandedStoryDetails, setExpandedStoryDetails] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [readStories, setReadStories] = useState<Set<string>>(new Set());
  const [newSinceLastVisit, setNewSinceLastVisit] = useState<number>(0);
  const [showFullMarketView, setShowFullMarketView] = useState<boolean>(false);

  // Format date helper YYYY-MM-DD
  const formatDateKey = (d: Date) => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  // Fetch edition for selected date
  const fetchEdition = useCallback(async (date: Date, isSilent = false) => {
    if (!isSilent) setLoading(true);
    const dateKey = formatDateKey(date);
    try {
      const res = await fetch(`/api/khabar/edition?date=${dateKey}`);
      if (res.ok) {
        const data: KhabarDailyEdition = await res.json();
        setEdition(data);

        // Check new stories since last visit
        const lastVisit = localStorage.getItem('khabar-last-visited');
        if (lastVisit) {
          const lastVisitTime = new Date(lastVisit).getTime();
          const newCount = data.stories.filter(s => new Date(s.publishedAt).getTime() > lastVisitTime).length;
          setNewSinceLastVisit(newCount);
        }
        localStorage.setItem('khabar-last-visited', new Date().toISOString());
      }
    } catch (e) {
      console.error('Failed to load Khabar edition:', e);
    } finally {
      if (!isSilent) setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEdition(currentDate);
    setQuizAnswers({});
    setExpandedStoryDetails({});
  }, [currentDate, fetchEdition]);

  // Periodic background refresh for live market data (every 90s)
  useEffect(() => {
    const interval = setInterval(() => {
      const isToday = formatDateKey(currentDate) === formatDateKey(new Date());
      if (isToday) {
        fetchEdition(currentDate, true);
      }
    }, 90000);
    return () => clearInterval(interval);
  }, [currentDate, fetchEdition]);

  // Load read state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('khabar-read-stories');
      if (stored) {
        setReadStories(new Set(JSON.parse(stored)));
      }
    } catch {}
  }, []);

  const markStoryAsRead = (storyId: string) => {
    setReadStories(prev => {
      const next = new Set(prev);
      next.add(storyId);
      localStorage.setItem('khabar-read-stories', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  // Manual Refresh Handler
  const handleManualRefresh = async () => {
    setRefreshing(true);
    try {
      const res = await fetch('/api/khabar/refresh', { method: 'POST' });
      if (res.ok) {
        const result = await res.json();
        if (result.edition) {
          setEdition(result.edition);
        }
      }
    } catch (e) {
      console.error('Refresh error:', e);
    } finally {
      setRefreshing(false);
    }
  };

  const toggleStoryDetail = (storyId: string) => {
    markStoryAsRead(storyId);
    setExpandedStoryDetails(prev => ({ ...prev, [storyId]: !prev[storyId] }));
  };

  // Filter stories based on active category & user lens
  const storiesToDisplay = (edition?.stories || []).filter(story => {
    if (activeCategory === 'hot') return story.hotScore >= 75 || story.badge === 'BREAKING' || story.badge === 'DEVELOPING';
    if (activeCategory === 'all') return true;
    if (activeCategory === 'brief') return true;
    if (activeCategory === 'bharat_ias') return !!story.iasLens;
    if (activeCategory === 'sports') return story.category === 'sports' || story.category === 'culture';
    return story.category === activeCategory;
  });

  const getBadgeColor = (badge?: StoryBadge) => {
    switch (badge) {
      case 'BREAKING': return 'bg-rose-600 text-white animate-pulse';
      case 'DEVELOPING': return 'bg-amber-600 text-white';
      case 'MARKETS': return 'bg-emerald-600 text-white';
      case 'IMPORTANT': return 'bg-sky-700 text-white';
      case 'EXPLAINER': return 'bg-purple-700 text-white';
      default: return 'bg-[#1E3A5F] text-white';
    }
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* ─── Top Editorial Header & Live Freshness Indicator ─── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-5" style={{ borderColor: 'var(--border-default)' }}>
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded text-white" style={{ background: KHABAR_ACCENT }}>
                Daily Intelligence Journal
              </span>
              
              {/* Dynamic Live / Delayed / Closed Badge */}
              <span className={`text-[10px] font-semibold flex items-center gap-1.5 px-2 py-0.5 rounded ${
                edition?.marketSnapshot?.isMarketOpen
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                  : 'bg-stone-500/10 text-stone-600 dark:text-stone-400 border border-stone-500/30'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${edition?.marketSnapshot?.isMarketOpen ? 'bg-emerald-500 animate-ping' : 'bg-stone-400'}`} />
                {edition?.marketSnapshot?.freshnessTag || '15-min delayed'} &middot; {edition?.marketSnapshot?.timestamp || 'Updated recently'}
              </span>

              {edition && (
                <span className="text-[10px] text-[var(--text-muted)] font-mono">
                  Edition #{edition.editionNumber} &middot; {edition.dayOfWeek}
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              खबर · Khabar
            </h1>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Living, data-driven intelligence room. Sourced directly from verified wire feeds and live financial market data.
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
            <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={90} />
            
            {/* Manual Refresh Button */}
            <button
              onClick={handleManualRefresh}
              disabled={refreshing || loading}
              className="p-2 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all shadow-sm flex items-center gap-1.5 text-xs"
              title="Refresh today's Khabar & Market Data"
            >
              <RefreshCw size={14} className={refreshing ? 'animate-spin text-[#1E3A5F]' : ''} />
              <span className="hidden sm:inline font-medium">{refreshing ? 'Updating...' : 'Refresh'}</span>
            </button>
          </div>
        </div>

        {/* ─── "New Since Your Last Visit" Banner ─── */}
        {newSinceLastVisit > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-3 rounded-xl border border-sky-500/30 bg-sky-500/10 text-xs text-sky-800 dark:text-sky-200"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-sky-500" />
              <span><strong>{newSinceLastVisit} new developments</strong> reported since your last visit.</span>
            </div>
            <button
              onClick={() => setActiveCategory('hot')}
              className="px-2.5 py-1 rounded-md bg-sky-600 text-white text-[11px] font-semibold hover:bg-sky-700 transition-colors"
            >
              View Hot Now &rarr;
            </button>
          </motion.div>
        )}

        {/* ─── AUTHORITATIVE LIVE MARKET DASHBOARD ─── */}
        {edition && edition.marketSnapshot && (
          <div className="p-5 rounded-xl border bg-[var(--bg-secondary)] space-y-4" style={{ borderColor: 'var(--border-default)' }}>
            {/* Header & Global Operating Hours */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3" style={{ borderColor: 'var(--border-default)' }}>
              <div className="flex items-center gap-2">
                <Activity size={15} style={{ color: KHABAR_GOLD }} />
                <span className="text-xs uppercase font-bold tracking-wider text-[var(--text-primary)]">
                  Live Market & Macro Intelligence
                </span>
                <span className="text-[10px] text-[var(--text-muted)]">
                  ({edition.marketSnapshot.freshnessTag})
                </span>
              </div>

              {/* Dynamic Global Exchange Badges */}
              <div className="flex items-center gap-1.5 flex-wrap text-[10px]">
                {edition.marketSnapshot.exchanges.map((ex, idx) => (
                  <span
                    key={idx}
                    title={ex.scheduleDetail}
                    className={`px-2 py-0.5 rounded font-mono font-semibold transition-colors cursor-help ${
                      ex.isOpen
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                        : 'bg-stone-500/10 text-[var(--text-muted)] border border-stone-500/20'
                    }`}
                  >
                    {ex.exchange.split(' ')[0]}: {ex.statusText}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Ticker Cards (Real verified values) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {(edition.marketSnapshot.headlineIndices || []).map((m, idx) => {
                const isUnavailable = m.freshness === 'Temporarily unavailable';
                return (
                  <div key={idx} className="p-3 rounded-lg border bg-[var(--bg-tertiary)]/40 space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                    <div className="flex justify-between items-start">
                      <p className="text-[10px] text-[var(--text-muted)] uppercase font-semibold truncate">{m.name}</p>
                      {m.rawPrice > 0 && (
                        m.isUp ? <ArrowUpRight size={12} className="text-emerald-600" /> : <ArrowDownRight size={12} className="text-rose-600" />
                      )}
                    </div>
                    <p className="font-bold text-[var(--text-primary)] font-mono text-sm tracking-tight">
                      {isUnavailable ? '—' : m.value}
                    </p>
                    <p className={`text-[10px] font-semibold font-mono ${
                      isUnavailable ? 'text-[var(--text-muted)]' : m.isUp ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                    }`}>
                      {isUnavailable ? 'Unavailable' : `${m.change} (${m.changePercent})`}
                    </p>
                    <p className="text-[9px] text-[var(--text-muted)] font-mono pt-0.5 truncate">{m.timestamp}</p>
                  </div>
                );
              })}
            </div>

            {/* Sector Pulse Heatmap */}
            {edition.marketSnapshot.indianSectorals && edition.marketSnapshot.indianSectorals.length > 0 && (
              <div className="space-y-2 pt-1">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-[var(--text-muted)]">
                  <span>Sector Pulse (NSE Sectoral Indices)</span>
                  <span className="font-normal font-mono lowercase">15-min delayed</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
                  {edition.marketSnapshot.indianSectorals.map((sec, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-lg border text-center transition-all ${
                        sec.rawPrice <= 0
                          ? 'bg-[var(--bg-tertiary)]/20 border-[var(--border-default)]'
                          : sec.isUp
                          ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-800 dark:text-emerald-300'
                          : 'bg-rose-500/10 border-rose-500/25 text-rose-800 dark:text-rose-300'
                      }`}
                    >
                      <p className="text-[10px] font-bold truncate">{sec.name.replace('NIFTY ', '')}</p>
                      <p className="text-[11px] font-mono font-bold mt-0.5">
                        {sec.rawPrice > 0 ? sec.changePercent : '—'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* "Markets Today" Analytical Summary */}
            <div className="p-3 rounded-lg bg-[var(--bg-tertiary)]/30 border border-[var(--border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <p className="text-[var(--text-primary)] font-serif italic leading-relaxed">
                  <strong>Markets Today:</strong> {edition.marketSnapshot.marketExplanation}
                </p>
                <p className="text-[9px] text-[var(--text-muted)] flex items-center gap-1 font-mono">
                  <ShieldCheck size={11} className="text-emerald-600" />
                  {edition.marketSnapshot.provenance}
                </p>
              </div>
              <button
                onClick={() => setShowFullMarketView(!showFullMarketView)}
                className="text-[11px] font-semibold text-[#1E3A5F] dark:text-sky-300 hover:underline flex-shrink-0"
              >
                {showFullMarketView ? 'Hide Global & FX Details' : 'View Global Indices, FX & Commodities →'}
              </button>
            </div>

            {/* Expandable Global & Commodity Dashboard */}
            {showFullMarketView && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="pt-3 border-t space-y-4"
                style={{ borderColor: 'var(--border-default)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  {/* Global Indices */}
                  <div className="space-y-2 p-3 rounded-lg border bg-[var(--bg-tertiary)]/20" style={{ borderColor: 'var(--border-default)' }}>
                    <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">Global Benchmark Indices</p>
                    {edition.marketSnapshot.globalIndices.map((q, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 border-b border-[var(--border-default)]/40 last:border-none">
                        <span className="text-[var(--text-secondary)]">{q.name}</span>
                        <div className="text-right font-mono">
                          <span className="font-semibold text-[var(--text-primary)] block">{q.value}</span>
                          <span className={`text-[10px] ${q.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>{q.changePercent}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Currencies (Forex) */}
                  <div className="space-y-2 p-3 rounded-lg border bg-[var(--bg-tertiary)]/20" style={{ borderColor: 'var(--border-default)' }}>
                    <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">Currencies (Forex)</p>
                    {edition.marketSnapshot.forex.map((q, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 border-b border-[var(--border-default)]/40 last:border-none">
                        <span className="text-[var(--text-secondary)]">{q.name}</span>
                        <div className="text-right font-mono">
                          <span className="font-semibold text-[var(--text-primary)] block">{q.value}</span>
                          <span className={`text-[10px] ${q.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>{q.changePercent}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Commodities & Sovereign Yields */}
                  <div className="space-y-2 p-3 rounded-lg border bg-[var(--bg-tertiary)]/20" style={{ borderColor: 'var(--border-default)' }}>
                    <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">Commodities & Sovereign Yields</p>
                    {edition.marketSnapshot.commodities.concat(edition.marketSnapshot.bonds).map((q, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 border-b border-[var(--border-default)]/40 last:border-none">
                        <span className="text-[var(--text-secondary)]">{q.name}</span>
                        <div className="text-right font-mono">
                          <span className="font-semibold text-[var(--text-primary)] block">{q.value}</span>
                          <span className={`text-[10px] ${q.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>{q.changePercent}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* ─── Lens Mode Switcher ─── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl border bg-[var(--bg-tertiary)]/20" style={{ borderColor: 'var(--border-default)' }}>
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-medium">
            <Sparkles size={13} style={{ color: KHABAR_GOLD }} />
            <span>Select Focus Perspective:</span>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {LENS_MODES.map(lens => {
              const Icon = lens.icon;
              const isSelected = userLens === lens.id;
              return (
                <button
                  key={lens.id}
                  onClick={() => setUserLens(lens.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#1E3A5F] text-white shadow-sm'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-default)]'
                  }`}
                >
                  <Icon size={12} />
                  <span>{lens.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Category Navigation Bar ─── */}
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map(cat => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm"
                style={{
                  background: isActive ? KHABAR_ACCENT : 'var(--bg-tertiary)',
                  color: isActive ? 'white' : 'var(--text-muted)',
                  border: `1px solid ${isActive ? KHABAR_ACCENT : 'var(--border-default)'}`,
                }}
              >
                <Icon size={13} />
                <span>{cat.label}</span>
                <span className="opacity-70 text-[10px] font-devanagari">({cat.labelHi})</span>
              </button>
            );
          })}
        </div>

        {/* ─── TOP BRIEF: "Aaj Kya Hua?" ─── */}
        {edition && (activeCategory === 'all' || activeCategory === 'brief') && (
          <div className="card-base p-6 sm:p-8 space-y-5 border-l-4" style={{ borderLeftColor: KHABAR_GOLD }}>
            <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: 'var(--border-default)' }}>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded text-white" style={{ background: KHABAR_GOLD }}>
                  Executive Daily Brief
                </span>
                <h2 className="font-serif text-2xl font-bold mt-1 text-[var(--text-primary)]">
                  आज क्या हुआ? · Today at a Glance
                </h2>
              </div>
              <ReadAloudButton
                text={edition.topSummaryBullets.map(b => `${b.headline}. ${b.takeaway}`).join(' ')}
                lang="en"
                size="md"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {edition.topSummaryBullets.map((bullet, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border bg-[var(--bg-secondary)] space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#1E3A5F] dark:text-sky-300 block">
                    {bullet.category}
                  </span>
                  <p className="font-serif font-bold text-sm text-[var(--text-primary)] leading-snug">
                    {bullet.headline}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed pt-0.5">
                    {bullet.takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── MAIN DYNAMIC STORIES STREAM ─── */}
        <div className="space-y-6">
          {loading ? (
            <div className="card-base p-12 text-center space-y-3">
              <RefreshCw size={24} className="animate-spin text-[#1E3A5F] mx-auto" />
              <p className="text-xs text-[var(--text-muted)] font-medium">Ingesting verified sources & structuring intelligence...</p>
            </div>
          ) : storiesToDisplay.length === 0 ? (
            <div className="card-base p-10 text-center text-xs text-[var(--text-muted)]">
              No specific stories found in this category for {edition?.dateDisplay}.
            </div>
          ) : (
            storiesToDisplay.map((story) => {
              const isExpanded = !!expandedStoryDetails[story.id];
              const isRead = readStories.has(story.id);

              return (
                <motion.article
                  key={story.id}
                  variants={FADE_UP}
                  initial="initial"
                  animate="animate"
                  className={`card-base p-6 sm:p-8 space-y-6 border-l-4 transition-all duration-300 shadow-sm ${
                    isRead ? 'opacity-90' : 'opacity-100'
                  }`}
                  style={{ borderLeftColor: KHABAR_ACCENT }}
                >
                  {/* Story Header */}
                  <div className="flex flex-wrap justify-between items-start gap-3 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        {story.badge && (
                          <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded ${getBadgeColor(story.badge)}`}>
                            {story.badge}
                          </span>
                        )}
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
                          {story.subcategory}
                        </span>
                        <span className="text-[10px] text-[var(--text-muted)] font-mono flex items-center gap-1">
                          <Clock size={11} />
                          {new Date(story.publishedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}
                        </span>
                        {isRead && (
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 font-medium">
                            <Check size={11} /> Read
                          </span>
                        )}
                      </div>

                      <h2 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-[var(--text-primary)]">
                        {story.headline}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <ReadAloudButton
                        text={`${story.headline}. What happened: ${story.whatHappened}. Why it matters: ${story.whyItMatters}`}
                        lang="en"
                        size="md"
                      />
                      <SutraNoteButton roomId="khabar" roomName="Khabar" contentTitle={story.headline} />
                      <RevisitButton roomId="khabar" roomName="Khabar" contentTitle={story.headline} contentSummary={story.whatHappened} />
                    </div>
                  </div>

                  {/* ─── 4-Layer Pravah Analysis Grid ─── */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Layer 1: What Happened */}
                    <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#1E3A5F] dark:text-sky-300 flex items-center gap-1">
                        <Newspaper size={12} />
                        1. What Happened? (The Fact)
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-primary)]">
                        {story.whatHappened}
                      </p>
                    </div>

                    {/* Layer 2: Why It Matters */}
                    <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#9A7E4A] flex items-center gap-1">
                        <Scale size={12} />
                        2. Why It Matters (The Significance)
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                        {story.whyItMatters}
                      </p>
                    </div>
                  </div>

                  {/* Layer 3 & 4: What to Watch & Pravah Context */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">
                        3. What to Watch (Next Signals)
                      </span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {story.whatToWatch}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">
                        4. Pravah Systemic Context
                      </span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {story.pravahContext}
                      </p>
                    </div>
                  </div>

                  {/* ─── Expandable Deep Learning Modules ─── */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => toggleStoryDetail(story.id)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#1E3A5F] dark:text-sky-300 hover:underline"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={14} />
                          Hide Deep Analysis Modules
                        </>
                      ) : (
                        <>
                          <ChevronDown size={14} />
                          Explore Deep Analysis (Concept · MBA · IAS · Timeline · Sources)
                        </>
                      )}
                    </button>

                    {story.sources.length > 0 && story.sources[0].url && (
                      <a
                        href={story.sources[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[var(--text-muted)] hover:text-[#1E3A5F] dark:hover:text-sky-300 flex items-center gap-1 font-medium transition-colors"
                      >
                        <span>Read original ({story.sources[0].name})</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4 pt-2 border-t"
                      style={{ borderColor: 'var(--border-default)' }}
                    >
                      {/* Why Should I Care Module */}
                      {story.whyShouldICare && (
                        <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-2">
                          <p className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                            <Lightbulb size={13} />
                            Why Should I Care? (Everyday Relevance)
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                            {story.whyShouldICare.personalFinance && (
                              <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)]">
                                <p className="font-bold text-[10px] uppercase text-[var(--text-muted)]">Personal Finance / EMIs</p>
                                <p className="mt-0.5 text-[var(--text-primary)]">{story.whyShouldICare.personalFinance}</p>
                              </div>
                            )}
                            {story.whyShouldICare.dailyLife && (
                              <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)]">
                                <p className="font-bold text-[10px] uppercase text-[var(--text-muted)]">Daily Life & Consumer</p>
                                <p className="mt-0.5 text-[var(--text-primary)]">{story.whyShouldICare.dailyLife}</p>
                              </div>
                            )}
                            {story.whyShouldICare.jobsAndCareers && (
                              <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)]">
                                <p className="font-bold text-[10px] uppercase text-[var(--text-muted)]">Jobs & Industry</p>
                                <p className="mt-0.5 text-[var(--text-primary)]">{story.whyShouldICare.jobsAndCareers}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Know the Concept Box */}
                      {story.knowTheConcept && (
                        <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                          <p className="text-[10px] uppercase font-bold tracking-wider text-[#1E3A5F] dark:text-sky-300">
                            🎓 Know the Concept: {story.knowTheConcept.conceptName}
                          </p>
                          <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                            <strong>Definition:</strong> {story.knowTheConcept.definition}
                          </p>
                          <div className="p-3 rounded-lg bg-[var(--bg-tertiary)]/40 text-xs space-y-1 text-[var(--text-secondary)]">
                            <p><strong>Mechanism:</strong> {story.knowTheConcept.howItWorks}</p>
                            <p><strong>Real-World Impact:</strong> {story.knowTheConcept.practicalImpact}</p>
                          </div>
                        </div>
                      )}

                      {/* MBA Strategy Lens */}
                      {story.mbaLens && (
                        <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                          <p className="text-[10px] uppercase font-bold tracking-wider text-[#9A7E4A] flex items-center gap-1.5">
                            <Briefcase size={13} />
                            MBA / Consulting Strategic Breakdown
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div className="p-2.5 rounded-lg bg-[var(--bg-tertiary)]/20 border border-[var(--border-default)]">
                              <p className="text-[10px] text-[var(--text-muted)] uppercase font-bold">Strategic Play</p>
                              <p className="text-[var(--text-primary)] mt-0.5">{story.mbaLens.strategicMove}</p>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[var(--bg-tertiary)]/20 border border-[var(--border-default)]">
                              <p className="text-[10px] text-[var(--text-muted)] uppercase font-bold">Financial & Competitive Impact</p>
                              <p className="text-[var(--text-secondary)] mt-0.5">{story.mbaLens.financialImpact} &middot; {story.mbaLens.competitiveImplications}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* IAS / Khabar for Bharat Lens */}
                      {story.iasLens && (
                        <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 space-y-2">
                          <p className="text-[10px] uppercase font-bold tracking-wider text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                            <GraduationCap size={14} />
                            Khabar for Bharat · {story.iasLens.paper} Dimensions
                          </p>
                          <div className="space-y-2 text-xs">
                            <div>
                              <p className="font-bold text-[10px] uppercase text-[var(--text-muted)]">Prelims Pointers:</p>
                              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-0.5 mt-0.5">
                                {story.iasLens.prelimsPointers.map((p, pIdx) => (
                                  <li key={pIdx}>{p}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] space-y-1">
                              <p className="font-bold text-[10px] uppercase text-[var(--text-muted)]">Mains Analytical Angle:</p>
                              <p className="text-[var(--text-primary)]"><strong>Issue:</strong> {story.iasLens.mainsDimensions.coreIssue}</p>
                              <p className="text-[var(--text-secondary)]"><strong>Way Forward:</strong> {story.iasLens.mainsDimensions.wayForward}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Historical Timeline */}
                      {story.timeline && story.timeline.length > 0 && (
                        <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 space-y-2">
                          <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] flex items-center gap-1">
                            <Clock size={12} />
                            The Bigger Picture Timeline
                          </p>
                          <div className="space-y-1.5 text-xs">
                            {story.timeline.map((item, tIdx) => (
                              <div key={tIdx} className="flex items-start gap-2">
                                <span className="font-mono font-bold text-[#1E3A5F] dark:text-sky-300 min-w-[75px]">{item.timeOrDate}</span>
                                <span className="text-[var(--text-secondary)]">{item.event}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Sources & Transparency */}
                      <div className="p-3 rounded-lg border bg-[var(--bg-secondary)] flex flex-wrap items-center justify-between gap-2 text-xs" style={{ borderColor: 'var(--border-default)' }}>
                        <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]">Verified Sources:</span>
                        <div className="flex flex-wrap gap-2">
                          {story.sources.map((src, sIdx) => (
                            <a
                              key={sIdx}
                              href={src.url || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-0.5 rounded bg-[var(--bg-tertiary)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[#1E3A5F] text-[11px] flex items-center gap-1 transition-colors"
                            >
                              <span>{src.name}</span>
                              <span className="text-[9px] text-[var(--text-muted)]">({src.type})</span>
                              {src.url && <ExternalLink size={9} />}
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.article>
              );
            })
          )}
        </div>

        {/* ─── "AAJ KE 5 SUTRA" (DAILY TAKEAWAYS) ─── */}
        {edition && (
          <div className="card-base p-6 sm:p-8 space-y-5 border-l-4" style={{ borderLeftColor: KHABAR_ACCENT }}>
            <div className="flex justify-between items-start gap-4 pb-3 border-b" style={{ borderColor: 'var(--border-default)' }}>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white" style={{ background: KHABAR_ACCENT }}>
                  Mental Snapshot of the Day
                </span>
                <h2 className="font-serif text-2xl font-bold mt-1 text-[var(--text-primary)]">
                  आज के 5 सूत्र · 5 Things to Remember ({edition.dateDisplay})
                </h2>
              </div>
              <SutraNoteButton roomId="khabar" roomName="Khabar" contentTitle={`Aaj Ke 5 Sutra - ${edition.dateDisplay}`} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="p-3.5 rounded-xl border bg-[var(--bg-secondary)] space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                <span className="text-[10px] uppercase font-bold text-[#9A7E4A] block">1. Economic Concept</span>
                <p className="text-[var(--text-primary)] font-medium leading-relaxed">{edition.fiveSutras.economicConcept}</p>
              </div>

              <div className="p-3.5 rounded-xl border bg-[var(--bg-secondary)] space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                <span className="text-[10px] uppercase font-bold text-[#1E3A5F] dark:text-sky-300 block">2. Geopolitical Reality</span>
                <p className="text-[var(--text-primary)] font-medium leading-relaxed">{edition.fiveSutras.geopoliticalDevelopment}</p>
              </div>

              <div className="p-3.5 rounded-xl border bg-[var(--bg-secondary)] space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-300 block">3. India Governance</span>
                <p className="text-[var(--text-primary)] font-medium leading-relaxed">{edition.fiveSutras.indiaGovernance}</p>
              </div>

              <div className="p-3.5 rounded-xl border bg-[var(--bg-secondary)] space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                <span className="text-[10px] uppercase font-bold text-blue-700 dark:text-blue-300 block">4. Science & Tech Idea</span>
                <p className="text-[var(--text-primary)] font-medium leading-relaxed">{edition.fiveSutras.techScienceIdea}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border bg-[var(--bg-tertiary)]/40 text-xs" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block">5. Meaningful Insight of the Day</span>
              <p className="text-[var(--text-primary)] italic font-serif mt-0.5">{edition.fiveSutras.unusualFact}</p>
            </div>
          </div>
        )}

        {/* ─── "YAAD RAHA?" (ACTIVE RECALL QUIZ) ─── */}
        {edition && edition.quiz.length > 0 && (
          <div className="card-base p-6 sm:p-8 space-y-5 border-l-4" style={{ borderLeftColor: '#4A8C7A' }}>
            <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: 'var(--border-default)' }}>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#4A8C7A]">
                  Active Daily Recall
                </span>
                <h2 className="font-serif text-2xl font-bold mt-1 text-[var(--text-primary)]">
                  याद रहा? · Daily Recall Quiz
                </h2>
              </div>
              <Award size={22} className="text-[#4A8C7A]" />
            </div>

            <div className="space-y-4">
              {edition.quiz.map((q, qIdx) => {
                const selected = quizAnswers[qIdx];
                const isAnswered = selected !== undefined;
                return (
                  <div key={q.id} className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        {qIdx + 1}. {q.question}
                      </p>
                      <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                        {q.domain}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = selected === optIdx;
                        const isCorrect = optIdx === q.correctIndex;
                        let btnStyle = 'border-[var(--border-default)] bg-[var(--bg-tertiary)]/50 text-[var(--text-secondary)]';
                        if (isAnswered) {
                          if (isCorrect) btnStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-700 font-semibold';
                          else if (isSelected) btnStyle = 'border-rose-500 bg-rose-500/10 text-rose-700';
                        }
                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }))}
                            className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs border transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswered && isCorrect && <CheckCircle2 size={14} className="text-emerald-600" />}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <p className="text-[11px] pt-1 text-[var(--text-muted)] italic">
                        💡 {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
}
