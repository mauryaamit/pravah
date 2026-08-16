'use client';

import { useState, useEffect } from 'react';
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
  KhabarStory,
  getKhabarEditionForDate,
} from './data';
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
  HelpCircle,
  Clock,
  Sparkles,
  Award,
  Layers,
  GraduationCap,
  Briefcase,
  DollarSign,
  Compass,
} from 'lucide-react';

const CATEGORIES: { id: KhabarCategory | 'all'; label: string; labelHi: string; icon: any }[] = [
  { id: 'all', label: 'All Stories', labelHi: 'सभी समाचार', icon: Layers },
  { id: 'brief', label: "Aaj Kya Hua?", labelHi: 'आज क्या हुआ?', icon: Sparkles },
  { id: 'india', label: 'Politics & Governance', labelHi: 'राजनीति एवं शासन', icon: Landmark },
  { id: 'economy', label: 'Economy & Concepts', labelHi: 'अर्थव्यवस्था', icon: Scale },
  { id: 'business', label: 'Business & MBA', labelHi: 'उद्योग व व्यापार', icon: Building2 },
  { id: 'finance', label: 'Markets & Finance', labelHi: 'बाज़ार व वित्त', icon: DollarSign },
  { id: 'world', label: 'World Geopolitics', labelHi: 'विश्व परिदृश्य', icon: Globe2 },
  { id: 'tech', label: 'Technology & AI', labelHi: 'तकनीक व एआई', icon: Cpu },
  { id: 'science', label: 'Science & Space', labelHi: 'विज्ञान व अंतरिक्ष', icon: Atom },
  { id: 'environment', label: 'Climate & Green Energy', labelHi: 'पर्यावरण व ऊर्जा', icon: Leaf },
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

const KHABAR_ACCENT = '#1E3A5F'; // Deep navy blue editorial theme
const KHABAR_GOLD = '#9A7E4A';

export default function KhabarPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeCategory, setActiveCategory] = useState<KhabarCategory | 'all'>('all');
  const [userLens, setUserLens] = useState<UserLensMode>('all');
  
  // Expandable story states
  const [expandedStoryDetails, setExpandedStoryDetails] = useState<Record<string, boolean>>({});
  
  // Interactive Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  // Reset interactive quiz when date changes
  useEffect(() => {
    setQuizAnswers({});
    setExpandedStoryDetails({});
  }, [currentDate]);

  const edition = getKhabarEditionForDate(currentDate);

  const toggleStoryDetail = (storyId: string) => {
    setExpandedStoryDetails(prev => ({ ...prev, [storyId]: !prev[storyId] }));
  };

  // Filter stories based on active category and user lens
  const filteredStories = edition.stories.filter(story => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'brief') return true;
    if (activeCategory === 'bharat_ias') return !!story.iasLens;
    if (activeCategory === 'sports') return story.category === 'sports' || story.category === 'culture';
    return story.category === activeCategory;
  });

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* ─── Top Editorial Header ─── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-5" style={{ borderColor: 'var(--border-default)' }}>
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded text-white" style={{ background: KHABAR_ACCENT }}>
                Daily Intelligence & Current Affairs
              </span>
              <span className="text-[10px] text-[var(--text-muted)] font-mono">
                Edition #{edition.editionNumber} &middot; {edition.dayOfWeek}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              खबर · Khabar
            </h1>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Spend 15 minutes to master today's developments in India and the world across politics, economy, business, technology, and science.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
          </div>
        </div>

        {/* ─── Market & Macro Snapshot Ticker ─── */}
        <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-3" style={{ borderColor: 'var(--border-default)' }}>
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
              <TrendingUp size={13} style={{ color: KHABAR_GOLD }} />
              Market & Macro Pulse
            </p>
            <p className="text-[11px] text-[var(--text-muted)] italic font-serif hidden sm:block">
              {edition.marketSnapshot.marketMoodSummary}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 text-xs">
            {[
              { label: 'NIFTY 50', data: edition.marketSnapshot.nifty },
              { label: 'SENSEX', data: edition.marketSnapshot.sensex },
              { label: 'USD / INR', data: edition.marketSnapshot.rupeeUsd },
              { label: 'Brent Crude', data: edition.marketSnapshot.brentCrude },
              { label: 'Gold (10g)', data: edition.marketSnapshot.gold10g },
              { label: 'US 10Y Yield', data: edition.marketSnapshot.us10yYield },
            ].map((m, idx) => (
              <div key={idx} className="p-2.5 rounded-lg border bg-[var(--bg-tertiary)]/40 space-y-0.5" style={{ borderColor: 'var(--border-default)' }}>
                <p className="text-[10px] text-[var(--text-muted)] uppercase font-semibold">{m.label}</p>
                <p className="font-bold text-[var(--text-primary)] font-mono">{m.data.value}</p>
                <p className={`text-[10px] font-semibold ${m.data.isUp ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                  {m.data.change}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Lens Mode Switcher (Personalization) ─── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl border bg-[var(--bg-tertiary)]/20" style={{ borderColor: 'var(--border-default)' }}>
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-medium">
            <Sparkles size={13} style={{ color: KHABAR_GOLD }} />
            <span>Curate Perspective:</span>
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
        <motion.div
          variants={FADE_UP}
          initial="initial"
          animate="animate"
          className="flex gap-2 flex-wrap"
        >
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
        </motion.div>

        {/* ─── TOP BRIEF: "Aaj Kya Hua?" ─── */}
        {(activeCategory === 'all' || activeCategory === 'brief') && (
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

        {/* ─── MAIN STORIES FEED ─── */}
        <div className="space-y-6">
          {filteredStories.map((story) => {
            const isExpanded = !!expandedStoryDetails[story.id];

            return (
              <motion.article
                key={story.id}
                variants={FADE_UP}
                initial="initial"
                animate="animate"
                className="card-base p-6 sm:p-8 space-y-6 border-l-4 transition-all duration-300 shadow-sm"
                style={{ borderLeftColor: KHABAR_ACCENT }}
              >
                {/* Story Header */}
                <div className="flex flex-wrap justify-between items-start gap-3 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white" style={{ background: KHABAR_ACCENT }}>
                        {story.subcategory}
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] font-mono">
                        {edition.dateDisplay}
                      </span>
                      {story.sources.length > 0 && (
                        <span className="text-[10px] px-2 py-0.5 rounded border border-[var(--border-default)] text-[var(--text-secondary)] font-medium">
                          Source: {story.sources[0].name}
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
                <div className="pt-2">
                  <button
                    onClick={() => toggleStoryDetail(story.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#1E3A5F] dark:text-sky-300 hover:underline"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp size={14} />
                        Hide Deep Analysis & Pedagogical Modules
                      </>
                    ) : (
                      <>
                        <ChevronDown size={14} />
                        Explore Deep Analysis (Concept · MBA · IAS · Timeline · Sources)
                      </>
                    )}
                  </button>
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
                              <span className="font-mono font-bold text-[#1E3A5F] dark:text-sky-300 min-w-[75px]">{item.date}</span>
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
                          <span key={sIdx} className="px-2 py-0.5 rounded bg-[var(--bg-tertiary)] border border-[var(--border-default)] text-[var(--text-secondary)] text-[11px]">
                            {src.name} <span className="text-[9px] text-[var(--text-muted)]">({src.type})</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* ─── "AAJ KE 5 SUTRA" (DAILY TAKEAWAYS) ─── */}
        <div className="card-base p-6 sm:p-8 space-y-5 border-l-4" style={{ borderLeftColor: KHABAR_ACCENT }}>
          <div className="flex justify-between items-start gap-4 pb-3 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white" style={{ background: KHABAR_ACCENT }}>
                Mental Snapshot of the Day
              </span>
              <h2 className="font-serif text-2xl font-bold mt-1 text-[var(--text-primary)]">
                आज के 5 सूत्र · 5 Things to Remember
              </h2>
            </div>
            <SutraNoteButton roomId="khabar" roomName="Khabar" contentTitle="Aaj Ke 5 Sutra" />
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

        {/* ─── "YAAD RAHA?" (ACTIVE RECALL QUIZ) ─── */}
        <div className="card-base p-6 sm:p-8 space-y-5 border-l-4" style={{ borderLeftColor: '#4A8C7A' }}>
          <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#4A8C7A]">
                Active Daily Recall
              </span>
              <h2 className="font-serif text-2xl font-bold mt-1 text-[var(--text-primary)]">
                याद रहा? · 5-Minute Recall Quiz
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

      </div>
    </PageTransition>
  );
}
