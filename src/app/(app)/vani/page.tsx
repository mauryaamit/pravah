'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { useVaniSection } from '@/lib/hooks/useVaniSection';
import { POET_PROFILES, PoetProfile } from './data-doha';
import {
  Scroll,
  BookOpen,
  Sparkles,
  Compass,
  Languages,
  Layers,
  GraduationCap,
  Flame,
  Feather,
  ChevronDown,
  ChevronUp,
  X,
  User,
  Lightbulb,
  CheckCircle2,
  RefreshCw,
  Award,
  BookMarked,
  History,
} from 'lucide-react';

type VaniTab = 'doha' | 'geeta' | 'ramayan' | 'mahabharat' | 'upanishad' | 'veda' | 'purana' | 'bhasha' | 'vyakaran';

const TABS: { id: VaniTab; label: string; labelHi: string; icon: any; section: string }[] = [
  { id: 'doha', label: 'Doha', labelHi: 'दोहा', icon: Feather, section: 'doha' },
  { id: 'geeta', label: 'Bhagavad Gita', labelHi: 'श्रीमद्भगवद्गीता', icon: Compass, section: 'gita' },
  { id: 'ramayan', label: 'Ramayan', labelHi: 'श्रीरामचरितमानस', icon: Scroll, section: 'ramayan' },
  { id: 'mahabharat', label: 'Mahabharat', labelHi: 'महाभारत', icon: Flame, section: 'mahabharat' },
  { id: 'upanishad', label: 'Upanishad', labelHi: 'उपनिषद्', icon: BookOpen, section: 'upanishad' },
  { id: 'veda', label: 'Veda', labelHi: 'वेद (चतुर्वेद)', icon: Sparkles, section: 'veda' },
  { id: 'purana', label: 'Purana', labelHi: 'पुराण', icon: Layers, section: 'purana' },
  { id: 'bhasha', label: 'Bharatiya Bhasha', labelHi: 'भारतीय भाषा', icon: Languages, section: 'bhasha' },
  { id: 'vyakaran', label: 'Hindi Vyakaran', labelHi: 'हिंदी व्याकरण', icon: GraduationCap, section: 'vyakaran' },
];

const HERITAGE_THEME = {
  primary: '#8B3A3A',
  gold: '#9A7E4A',
  parchmentBorder: '#E8E1D5',
};

// ─── Shared sub-components ───────────────────────────────────────────────────

function LoadingState() {
  return (
    <div className="card-base p-12 text-center space-y-3">
      <RefreshCw size={22} className="animate-spin mx-auto" style={{ color: HERITAGE_THEME.primary }} />
      <p className="text-xs text-[var(--text-muted)] font-medium">Opening the ancient library...</p>
    </div>
  );
}

function ErrorState({ error, reload }: { error: string; reload: () => void }) {
  return (
    <div className="card-base p-8 text-center space-y-3">
      <p className="text-sm text-[var(--text-secondary)]">⚠️ {error}</p>
      <button
        onClick={reload}
        className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white transition-all"
        style={{ background: HERITAGE_THEME.primary }}
      >
        Try Again
      </button>
    </div>
  );
}

function NoRecordState() {
  return (
    <div className="card-base p-12 text-center space-y-3 border-dashed">
      <BookOpen size={36} className="mx-auto text-[var(--text-muted)] opacity-50" />
      <h3 className="font-serif text-lg font-bold text-[var(--text-primary)]">
        No Vaani edition was recorded for this day.
      </h3>
      <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto">
        No edition was stored for this day. Use the date navigator above to view other dates or return to today.
      </p>
    </div>
  );
}

function ExhaustedState({ sectionLabel, progress, onBeginCycle }: {
  sectionLabel: string;
  progress: any;
  onBeginCycle: () => void;
}) {
  return (
    <div className="card-base p-10 text-center space-y-5 border-l-4" style={{ borderLeftColor: HERITAGE_THEME.gold }}>
      <Award size={36} style={{ color: HERITAGE_THEME.gold }} className="mx-auto" />
      <div className="space-y-2">
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
          {sectionLabel} — पूर्ण यात्रा संपन्न 🙏
        </h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
          You have explored all <strong>{progress?.consumed || progress?.total || ''}</strong> available entries in this section. Your knowledge journey is complete for Cycle {progress?.cycleNumber || 1}.
        </p>
      </div>
      <button
        onClick={onBeginCycle}
        className="px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
        style={{ background: HERITAGE_THEME.primary }}
      >
        Begin Cycle {(progress?.cycleNumber || 1) + 1} — Start Again ↺
      </button>
      <p className="text-[10px] text-[var(--text-muted)]">
        Your previous cycle&apos;s journey will be archived. This is a fresh beginning.
      </p>
    </div>
  );
}

function ProgressBar({ progress, unit = 'entries' }: { progress: any; unit?: string }) {
  if (!progress) return null;
  const { consumed, total, cycleNumber } = progress;
  const pct = total ? Math.round((consumed / total) * 100) : 0;

  return (
    <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
      <span className="font-medium whitespace-nowrap">
        {total ? `${consumed} / ${total} ${unit} explored` : `${consumed} ${unit} explored`}
        {cycleNumber > 1 ? ` (Cycle ${cycleNumber})` : ''}
      </span>
      {total && (
        <div className="flex-1 h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden max-w-[120px]">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, background: HERITAGE_THEME.primary }}
          />
        </div>
      )}
    </div>
  );
}

function MarkExploredButton({ state, label = 'Mark as Explored' }: { state: any; label?: string }) {
  if (state.isConsumed) {
    return (
      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
        <CheckCircle2 size={14} />
        {state.isHistorical ? 'Explored' : 'Explored today'}
      </span>
    );
  }
  if (state.isHistorical) {
    return (
      <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)]">
        <History size={13} />
        Historical Edition
      </span>
    );
  }
  return (
    <button
      onClick={state.markAsExplored}
      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white transition-all hover:opacity-90 shadow-sm"
      style={{ background: HERITAGE_THEME.gold }}
    >
      <BookMarked size={13} />
      {label}
    </button>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function VaniPage() {
  const [activeTab, setActiveTab] = useState<VaniTab>('doha');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [showIast, setShowIast] = useState(false);
  const [vyakaranQuizSelected, setVyakaranQuizSelected] = useState<number | null>(null);
  const [expandedDohaStages, setExpandedDohaStages] = useState<Record<string, 'understand' | 'deeper' | 'closed'>>({});
  const [selectedPoetProfile, setSelectedPoetProfile] = useState<PoetProfile | null>(null);

  useEffect(() => {
    setVyakaranQuizSelected(null);
    setExpandedDohaStages({});
  }, [activeTab, currentDate]);

  const toggleDohaStage = (dohaId: string, stage: 'understand' | 'deeper') => {
    setExpandedDohaStages(prev => {
      const current = prev[dohaId];
      if (current === stage) return { ...prev, [dohaId]: 'closed' };
      return { ...prev, [dohaId]: stage };
    });
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ─── Header ─── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: HERITAGE_THEME.parchmentBorder }}>
          <div className="text-left w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white" style={{ background: HERITAGE_THEME.primary }}>
                भारतीय ज्ञान एवं भाषा परंपरा
              </span>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Zero-Repetition Engine Active
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold mt-2" style={{ color: 'var(--text-primary)' }}>
              वाणी · Vani
            </h1>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              Sequential daily journey through India&apos;s complete knowledge corpus. Every day: new content.
            </p>
          </div>
        </div>

        {/* ─── Date Navigator (Historical 30-Day Support) ─── */}
        <div className="border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
          <DayNavigator
            currentDate={currentDate}
            onDateChange={setCurrentDate}
            maxPastDays={30}
          />
        </div>

        {/* ─── Tab Bar ─── */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="flex gap-2 flex-wrap">
          {TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm"
                style={{
                  background: isActive ? HERITAGE_THEME.primary : 'var(--bg-tertiary)',
                  color: isActive ? 'white' : 'var(--text-muted)',
                  border: `1px solid ${isActive ? HERITAGE_THEME.primary : 'var(--border-default)'}`,
                }}
              >
                <Icon size={13} />
                <span>{tab.label}</span>
                <span className="opacity-70 text-[10px] font-devanagari">({tab.labelHi})</span>
              </button>
            );
          })}
        </motion.div>

        {/* ─── Global Transliteration Toggle ─── */}
        <div className="flex justify-end items-center">
          <button
            onClick={() => setShowIast(!showIast)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all hover:bg-[var(--bg-tertiary)]"
            style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
          >
            <Languages size={13} style={{ color: HERITAGE_THEME.gold }} />
            {showIast ? 'Show Devanagari Script' : 'Show Roman Transliteration (IAST)'}
          </button>
        </div>

        {/* ─── Content Sections (API-driven with historical date support) ─── */}
        <AnimatePresence mode="wait">

          {/* ─── 1. DOHA ─── */}
          {activeTab === 'doha' && (
            <DohaSection
              currentDate={currentDate}
              showIast={showIast}
              expandedDohaStages={expandedDohaStages}
              toggleDohaStage={toggleDohaStage}
              setSelectedPoetProfile={setSelectedPoetProfile}
            />
          )}

          {/* ─── 2. BHAGAVAD GITA ─── */}
          {activeTab === 'geeta' && <GitaSection currentDate={currentDate} showIast={showIast} />}

          {/* ─── 3. RAMAYAN ─── */}
          {activeTab === 'ramayan' && <RamayanSection currentDate={currentDate} showIast={showIast} />}

          {/* ─── 4. MAHABHARAT ─── */}
          {activeTab === 'mahabharat' && <MahabharatSection currentDate={currentDate} showIast={showIast} />}

          {/* ─── 5. UPANISHAD ─── */}
          {activeTab === 'upanishad' && <UpanishadSection currentDate={currentDate} showIast={showIast} />}

          {/* ─── 6. VEDA ─── */}
          {activeTab === 'veda' && <VedaSection currentDate={currentDate} showIast={showIast} />}

          {/* ─── 7. PURANA ─── */}
          {activeTab === 'purana' && <PuranaSection currentDate={currentDate} showIast={showIast} />}

          {/* ─── 8. BHARATIYA BHASHA ─── */}
          {activeTab === 'bhasha' && <BhashaSection currentDate={currentDate} />}

          {/* ─── 9. HINDI VYAKARAN ─── */}
          {activeTab === 'vyakaran' && (
            <VyakaranSection
              currentDate={currentDate}
              vyakaranQuizSelected={vyakaranQuizSelected}
              setVyakaranQuizSelected={setVyakaranQuizSelected}
            />
          )}

        </AnimatePresence>

        {/* ─── Poet Profile Modal ─── */}
        <AnimatePresence>
          {selectedPoetProfile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedPoetProfile(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="card-base p-6 sm:p-8 max-w-2xl w-full space-y-4 overflow-y-auto max-h-[85vh]"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded text-white" style={{ background: HERITAGE_THEME.primary }}>
                      कवि परिचय
                    </span>
                    <h3 className="font-devanagari text-2xl font-bold mt-2 text-[var(--text-primary)]">
                      {selectedPoetProfile.nameDevanagari}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] font-serif italic">{selectedPoetProfile.nameEnglish}</p>
                  </div>
                  <button onClick={() => setSelectedPoetProfile(null)} className="p-1 rounded-full hover:bg-[var(--bg-tertiary)] transition-all">
                    <X size={18} style={{ color: 'var(--text-muted)' }} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  {[
                    { label: 'काल (Period)', value: selectedPoetProfile.period },
                    { label: 'क्षेत्र (Region)', value: selectedPoetProfile.region },
                    { label: 'परंपरा (Tradition)', value: selectedPoetProfile.tradition },
                    { label: 'भाषा (Dialect)', value: selectedPoetProfile.dialect },
                  ].map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg border bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
                      <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">{item.label}</p>
                      <p className="text-[var(--text-secondary)] mt-0.5 leading-snug">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">जीवन परिचय (Biography)</p>
                  <p className="text-xs sm:text-sm font-devanagari leading-relaxed text-[var(--text-secondary)]">
                    {selectedPoetProfile.biography}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">प्रमुख रचनाएं (Major Works)</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPoetProfile.majorWorks.map((work, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full text-xs border font-medium" style={{ borderColor: HERITAGE_THEME.parchmentBorder, color: 'var(--text-secondary)' }}>
                        {work}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}

// ─── Section Components ───────────────────────────────────────────────────────

function DohaSection({ currentDate, showIast, expandedDohaStages, toggleDohaStage, setSelectedPoetProfile }: any) {
  const state = useVaniSection('doha', currentDate);

  return (
    <motion.div key="doha" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ borderColor: 'var(--border-default)' }}>
        <div>
          <h2 className="font-devanagari text-lg font-bold text-[var(--text-primary)]">
            दैनिक दोहा अमृत · 3 Daily Couplets
          </h2>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Unique dohas every day. Each item is shown once until you complete the full corpus.
          </p>
          {state.progress && (
            <div className="mt-1.5">
              <ProgressBar progress={state.progress} unit="dohas" />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <MarkExploredButton state={state} label="Mark All Explored" />
          <SutraNoteButton roomId="vani" roomName="Vani" contentTitle="Daily Doha Collection" />
        </div>
      </div>

      {state.loading && <LoadingState />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.noRecord && <NoRecordState />}
      {state.isExhausted && (
        <ExhaustedState sectionLabel="दोहा कोश" progress={state.progress} onBeginCycle={state.beginNextCycle} />
      )}

      {!state.loading && !state.error && !state.noRecord && !state.isExhausted && (
        <div className="space-y-6">
          {state.items.map((item: any) => {
            const doha = item.content;
            const currentStage = expandedDohaStages[doha.id] || 'understand';
            const poetProfile = POET_PROFILES[doha.poetId];

            return (
              <div key={doha.id} className="card-base p-6 sm:p-8 space-y-6 border-l-4 shadow-sm" style={{ borderLeftColor: HERITAGE_THEME.primary }}>
                <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        onClick={() => { if (poetProfile) setSelectedPoetProfile(poetProfile); }}
                        className="group flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full text-white transition-transform hover:scale-105 shadow-sm"
                        style={{ background: HERITAGE_THEME.primary }}
                      >
                        <User size={12} />
                        <span>{doha.poetNameDevanagari}</span>
                        <span className="text-[10px] opacity-75 font-serif">({doha.poetNameEnglish})</span>
                        <span className="text-[9px] bg-white/20 px-1.5 rounded ml-1 group-hover:bg-white/30">कवि परिचय →</span>
                      </button>
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-default)]">
                        {doha.themeHindi}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] italic font-serif mt-1.5">
                      स्रोत: {doha.source} · <span className="text-emerald-600 dark:text-emerald-400 font-medium">✓ {doha.attributionConfidence}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ReadAloudButton text={`${doha.dohaDevanagari?.join(' ')}. अर्थ: ${doha.hindiMeaning}`} lang="hi" size="md" />
                    <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Doha: ${doha.poetNameDevanagari}`} />
                  </div>
                </div>

                <div className="py-4 text-center space-y-2 bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
                  <div className="font-devanagari text-xl sm:text-2xl font-bold leading-loose text-[var(--text-primary)] space-y-1">
                    {(doha.dohaDevanagari || []).map((line: string, lIdx: number) => <p key={lIdx}>{line}</p>)}
                  </div>
                  {showIast && (
                    <div className="font-serif italic text-sm sm:text-base text-[var(--text-muted)] pt-2 border-t mt-3 space-y-0.5" style={{ borderColor: 'var(--border-default)' }}>
                      {(doha.transliteration || []).map((line: string, lIdx: number) => <p key={lIdx}>{line}</p>)}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  <button onClick={() => toggleDohaStage(doha.id, 'understand')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${currentStage === 'understand' ? 'text-white shadow-sm' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-default)]'}`} style={currentStage === 'understand' ? { background: HERITAGE_THEME.primary } : {}}>
                    <BookOpen size={13} /><span>समझें · Understand</span>{currentStage === 'understand' ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>
                  <button onClick={() => toggleDohaStage(doha.id, 'deeper')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${currentStage === 'deeper' ? 'text-white shadow-sm' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-default)]'}`} style={currentStage === 'deeper' ? { background: HERITAGE_THEME.gold } : {}}>
                    <Sparkles size={13} /><span>गहन विचार · Go Deeper</span>{currentStage === 'deeper' ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>
                </div>

                {currentStage === 'understand' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                      <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: HERITAGE_THEME.primary }}>सरल हिंदी भावार्थ</span>
                      <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{doha.hindiMeaning}</p>
                    </div>
                    <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                      <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: HERITAGE_THEME.gold }}>English Translation</span>
                      <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{doha.englishMeaning}</p>
                    </div>
                  </motion.div>
                )}

                {currentStage === 'deeper' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-4">
                    <div className="p-5 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                      <p className="text-[11px] uppercase font-bold tracking-wider" style={{ color: HERITAGE_THEME.primary }}>दार्शनिक एवं मनोवैज्ञानिक दृष्टि</p>
                      <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] font-serif">{doha.deeperInterpretation}</p>
                      {doha.contextBackground && (
                        <p className="text-xs text-[var(--text-muted)] italic pt-1 border-t border-[var(--border-default)]">📜 {doha.contextBackground}</p>
                      )}
                    </div>
                    {doha.importantVocabulary?.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">महत्वपूर्ण शब्दार्थ</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {doha.importantVocabulary.map((v: any, vIdx: number) => (
                            <div key={vIdx} className="p-2.5 rounded-lg border bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
                              <p className="font-devanagari font-bold text-[var(--text-primary)]">{v.word}</p>
                              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{v.meaning}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                <div className="p-3.5 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-2.5">
                  <Lightbulb size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-300">स्मरण रखें · Daily Takeaway</p>
                    <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-0.5">{doha.lifeLesson}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

function GitaSection({ currentDate, showIast }: { currentDate?: Date; showIast: boolean }) {
  const state = useVaniSection('gita', currentDate);
  const c = state.item?.content;

  return (
    <motion.div key="geeta" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.noRecord && <NoRecordState />}
      {state.isExhausted && <ExhaustedState sectionLabel="श्रीमद्भगवद्गीता" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.noRecord && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: HERITAGE_THEME.primary }}>
          <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white" style={{ background: HERITAGE_THEME.primary }}>
                  श्रीमद्भगवद्गीता · दैनिक श्लोक
                </span>
                <span className="text-[11px] font-semibold font-mono px-2 py-0.5 rounded border border-[var(--border-default)] text-[var(--text-secondary)]">
                  अध्याय {c.chapter}, श्लोक {c.verse}
                </span>
              </div>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.chapterNameSanskrit}
              </h2>
              <p className="text-xs text-[var(--text-muted)] font-serif italic mt-0.5">
                {c.chapterNameEnglish} · {c.chapterNameHindi}
              </p>
              <div className="mt-2"><ProgressBar progress={state.progress} unit="verses" /></div>
            </div>
            <div className="flex items-center gap-2">
              <MarkExploredButton state={state} />
              <ReadAloudButton text={`${c.shlokaSanskrit}. अर्थ: ${c.hindiTranslation}`} lang="hi" size="md" />
              <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Gita ${c.chapter}.${c.verse}`} />
              <RevisitButton roomId="vani" roomName="Vani" contentTitle={`Gita ${c.chapter}.${c.verse}`} contentSummary={c.englishTranslation} />
            </div>
          </div>

          <div className="py-4 text-center space-y-3 bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
            <p className={showIast ? "font-serif italic text-lg sm:text-xl leading-relaxed text-[var(--text-primary)] whitespace-pre-line" : "font-devanagari text-xl sm:text-2xl font-bold leading-loose text-[var(--text-primary)] whitespace-pre-line"}>
              {showIast ? c.transliterationIAST : c.shlokaSanskrit}
            </p>
          </div>

          {c.wordByWordMeaning?.length > 0 && (
            <div className="space-y-2">
              <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">पदच्छेद एवं शब्दार्थ</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {c.wordByWordMeaning.map((w: any, idx: number) => (
                  <div key={idx} className="p-2 rounded border bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
                    <p className="font-semibold text-[var(--text-primary)]">{w.sanskrit}</p>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{w.english}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: HERITAGE_THEME.primary }}>सरल भावार्थ (Hindi)</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.hindiTranslation}</p>
            </div>
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: HERITAGE_THEME.gold }}>English Translation</span>
              <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{c.englishTranslation}</p>
            </div>
          </div>

          {c.philosophicalCommentary && (
            <div className="p-5 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <p className="text-[11px] uppercase font-bold tracking-wider" style={{ color: HERITAGE_THEME.primary }}>गहन दार्शनिक मीमांसा</p>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{c.philosophicalCommentary}</p>
            </div>
          )}

          {c.modernPracticalApplication && (
            <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
              <p className="text-[11px] uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-300">आधुनिक जीवन में व्यावहारिक अनुप्रयोग</p>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-primary)]">{c.modernPracticalApplication}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function RamayanSection({ currentDate, showIast }: { currentDate?: Date; showIast: boolean }) {
  const state = useVaniSection('ramayan', currentDate);
  const c = state.item?.content;

  return (
    <motion.div key="ramayan" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.noRecord && <NoRecordState />}
      {state.isExhausted && <ExhaustedState sectionLabel="श्रीरामचरितमानस" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.noRecord && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#C4623F' }}>
          <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#C4623F]">श्रीरामचरितमानस · सम्पूर्ण चौपाई</span>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.kand} <span className="text-xs font-serif opacity-75 font-normal">({c.kandEnglish})</span>
              </h2>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{c.dohaNumber} · पात्र: {c.charactersInvolved?.join(', ')}</p>
              <div className="mt-2"><ProgressBar progress={state.progress} unit="chaupais" /></div>
            </div>
            <div className="flex items-center gap-2">
              <MarkExploredButton state={state} />
              <ReadAloudButton text={`${c.chaupaiLines?.join(' ')}. अर्थ: ${c.hindiMeaning}`} lang="hi" size="md" />
              <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Ramayan: ${c.kand}`} />
            </div>
          </div>

          <div className="py-4 text-center space-y-2 bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
            {showIast ? (
              <div className="font-serif italic text-base sm:text-lg leading-relaxed text-[var(--text-primary)] space-y-1">
                {(c.transliteration || []).map((line: string, idx: number) => <p key={idx}>{line}</p>)}
              </div>
            ) : (
              <div className="font-devanagari text-xl sm:text-2xl font-bold leading-loose text-[var(--text-primary)] space-y-1">
                {(c.chaupaiLines || []).map((line: string, idx: number) => <p key={idx}>{line}</p>)}
              </div>
            )}
            {c.dohaLine && (
              <p className="font-devanagari text-lg font-semibold pt-2 border-t mt-3" style={{ color: '#C4623F', borderColor: 'var(--border-default)' }}>
                दुआ: {c.dohaLine}
              </p>
            )}
          </div>

          <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">प्रसंग (Narrative Setting)</span>
            <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{c.context}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: '#C4623F' }}>भावार्थ (Hindi)</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.hindiMeaning}</p>
            </div>
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">English Translation</span>
              <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{c.englishMeaning}</p>
            </div>
          </div>

          {c.spiritualSignificance && (
            <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: '#C4623F' }}>यह प्रसंग क्यों महत्वपूर्ण है?</span>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{c.spiritualSignificance}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function MahabharatSection({ currentDate, showIast }: { currentDate?: Date; showIast: boolean }) {
  const state = useVaniSection('mahabharat', currentDate);
  const c = state.item?.content;

  return (
    <motion.div key="mahabharat" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.noRecord && <NoRecordState />}
      {state.isExhausted && <ExhaustedState sectionLabel="महाभारत" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.noRecord && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#7A4A8B' }}>
          <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#7A4A8B]">महाभारत · धर्म विमर्श</span>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.parva} {c.parvaEnglish ? `(${c.parvaEnglish})` : ''}
              </h2>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                {c.chapterReference} · संवाद: {c.charactersInvolved?.join(' व ')}
              </p>
              <div className="mt-2"><ProgressBar progress={state.progress} unit="passages" /></div>
            </div>
            <div className="flex items-center gap-2">
              <MarkExploredButton state={state} />
              <ReadAloudButton text={`${c.sanskritText}. अर्थ: ${c.hindiMeaning}`} lang="hi" size="md" />
              <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Mahabharat: ${c.parva}`} />
            </div>
          </div>

          <div className="py-4 text-center space-y-3 bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
            <p className={showIast ? "font-serif italic text-lg sm:text-xl leading-relaxed text-[var(--text-primary)] whitespace-pre-line" : "font-devanagari text-xl sm:text-2xl font-bold leading-loose text-[var(--text-primary)] whitespace-pre-line"}>
              {showIast ? c.transliteration : c.sanskritText}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: '#7A4A8B' }}>हिंदी भावार्थ</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.hindiMeaning}</p>
            </div>
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">English Translation</span>
              <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{c.englishMeaning}</p>
            </div>
          </div>

          {c.philosophicalSignificance && (
            <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: '#7A4A8B' }}>दार्शनिक महत्व</span>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{c.philosophicalSignificance}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function UpanishadSection({ currentDate, showIast }: { currentDate?: Date; showIast: boolean }) {
  const state = useVaniSection('upanishad', currentDate);
  const c = state.item?.content;

  return (
    <motion.div key="upanishad" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.noRecord && <NoRecordState />}
      {state.isExhausted && <ExhaustedState sectionLabel="उपनिषद्" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.noRecord && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#3A7A6B' }}>
          <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#3A7A6B]">
                {c.upanishadName || 'उपनिषद्'} · {c.sectionReference || ''}
              </span>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.upanishadName || 'उपनिषद्'} — मंत्र {c.mantraNumber || state.item?.sequence}
              </h2>
              <div className="mt-2"><ProgressBar progress={state.progress} unit="mantras" /></div>
            </div>
            <div className="flex items-center gap-2">
              <MarkExploredButton state={state} />
              <ReadAloudButton text={c.sanskritMantra || ''} lang="hi" size="md" />
              <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Upanishad: ${c.upanishadName}`} />
            </div>
          </div>

          <div className="py-4 text-center bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
            <p className={showIast ? "font-serif italic text-lg leading-relaxed text-[var(--text-primary)] whitespace-pre-line" : "font-devanagari text-xl font-bold leading-loose text-[var(--text-primary)] whitespace-pre-line"}>
              {showIast ? (c.transliteration || c.sanskritMantra) : (c.sanskritMantra || c.mantraText)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block text-[#3A7A6B]">हिंदी भावार्थ</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.hindiMeaning}</p>
            </div>
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">English Translation</span>
              <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{c.englishMeaning}</p>
            </div>
          </div>

          {(c.philosophicalExplanation || c.deeperExplanation || c.significance) && (
            <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block text-[#3A7A6B]">दार्शनिक गहराई</span>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                {c.philosophicalExplanation || c.deeperExplanation || c.significance}
              </p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function VedaSection({ currentDate, showIast }: { currentDate?: Date; showIast: boolean }) {
  const state = useVaniSection('veda', currentDate);

  const vedaColors: Record<string, string> = {
    rigveda: '#8B4513',
    samaveda: '#2E7D5B',
    yajurveda: '#4A3F8B',
    atharvaveda: '#8B5A2B',
  };
  const vedaNames: Record<string, string> = {
    rigveda: 'ऋग्वेद',
    samaveda: 'सामवेद',
    yajurveda: 'यजुर्वेद',
    atharvaveda: 'अथर्ववेद',
  };

  return (
    <motion.div key="veda" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 flex items-center justify-between" style={{ borderColor: 'var(--border-default)' }}>
        <div>
          <h2 className="font-devanagari text-lg font-bold text-[var(--text-primary)]">चतुर्वेद · Daily Selections from All 4 Vedas</h2>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">One mantra from each Veda, sequentially. Never repeated until the corpus is complete.</p>
          <div className="mt-1.5"><ProgressBar progress={state.progress} unit="mantras" /></div>
        </div>
        <div className="flex items-center gap-2">
          <MarkExploredButton state={state} label="Mark All Explored" />
          <SutraNoteButton roomId="vani" roomName="Vani" contentTitle="Daily Veda Selections" />
        </div>
      </div>

      {state.loading && <LoadingState />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.noRecord && <NoRecordState />}
      {state.isExhausted && <ExhaustedState sectionLabel="वेद" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.noRecord && !state.isExhausted && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {state.items.map((item: any) => {
            const c = item.content;
            const vedaType = item.subsection || c.vedaType || 'rigveda';
            const color = vedaColors[vedaType] || HERITAGE_THEME.primary;

            return (
              <div key={item.contentId} className="card-base p-5 space-y-3 border-t-4" style={{ borderTopColor: color }}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded text-white" style={{ background: color }}>
                    {vedaNames[vedaType] || vedaType}
                  </span>
                  <ReadAloudButton text={c.mantraText || c.rikText || ''} lang="hi" size="sm" />
                </div>

                <div className="py-3 text-center bg-[var(--bg-tertiary)]/20 p-4 rounded-lg border" style={{ borderColor: 'var(--border-default)' }}>
                  <p className={showIast ? "font-serif italic text-base leading-relaxed text-[var(--text-primary)] whitespace-pre-line" : "font-devanagari text-lg font-bold leading-loose text-[var(--text-primary)] whitespace-pre-line"}>
                    {showIast ? (c.transliteration || c.mantraText) : (c.mantraText || c.rikText || c.mantra)}
                  </p>
                </div>

                <div className="text-xs space-y-1.5">
                  {c.hindiMeaning && (
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]">हिंदी अर्थ</span>
                      <p className="font-devanagari text-[var(--text-primary)] leading-relaxed mt-0.5">{c.hindiMeaning}</p>
                    </div>
                  )}
                  {c.englishMeaning && (
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]">English</span>
                      <p className="font-serif text-[var(--text-secondary)] leading-relaxed mt-0.5">{c.englishMeaning}</p>
                    </div>
                  )}
                  {(c.reference || c.sukta) && (
                    <p className="text-[10px] text-[var(--text-muted)] font-mono italic">Ref: {c.reference || c.sukta}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

function PuranaSection({ currentDate, showIast }: { currentDate?: Date; showIast: boolean }) {
  const state = useVaniSection('purana', currentDate);
  const c = state.item?.content;

  return (
    <motion.div key="purana" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.noRecord && <NoRecordState />}
      {state.isExhausted && <ExhaustedState sectionLabel="पुराण" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.noRecord && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#8B6914' }}>
          <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#8B6914]">
                {c.purana || 'पुराण'} · {c.skandha || c.section || ''}
              </span>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.title || `${c.purana || 'पुराण'} — ${c.sectionReference || ''}`}
              </h2>
              <div className="mt-2"><ProgressBar progress={state.progress} unit="passages" /></div>
            </div>
            <div className="flex items-center gap-2">
              <MarkExploredButton state={state} />
              <ReadAloudButton text={c.sanskritText || c.originalText || ''} lang="hi" size="md" />
              <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Purana: ${c.purana}`} />
            </div>
          </div>

          {(c.sanskritText || c.originalText) && (
            <div className="py-4 text-center bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
              <p className={showIast ? "font-serif italic text-lg leading-relaxed text-[var(--text-primary)] whitespace-pre-line" : "font-devanagari text-xl font-bold leading-loose text-[var(--text-primary)] whitespace-pre-line"}>
                {showIast ? (c.transliteration || c.sanskritText) : (c.sanskritText || c.originalText)}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold block mb-1 text-[#8B6914]">हिंदी भावार्थ</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.hindiMeaning}</p>
            </div>
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block mb-1">English Translation</span>
              <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{c.englishMeaning}</p>
            </div>
          </div>

          {(c.philosophicalSignificance || c.significance) && (
            <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold block text-[#8B6914]">महत्व</span>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{c.philosophicalSignificance || c.significance}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function BhashaSection({ currentDate }: { currentDate?: Date }) {
  const state = useVaniSection('bhasha', currentDate);

  return (
    <motion.div key="bhasha" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 flex items-center justify-between" style={{ borderColor: 'var(--border-default)' }}>
        <div>
          <h2 className="font-devanagari text-lg font-bold text-[var(--text-primary)]">भारतीय भाषा · Daily Word Discovery</h2>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">Sanskrit + Awadhi + regional language word, new every day.</p>
          <div className="mt-1.5"><ProgressBar progress={state.progress} unit="word sets" /></div>
        </div>
        <div className="flex items-center gap-2">
          <MarkExploredButton state={state} label="Mark Explored" />
        </div>
      </div>

      {state.loading && <LoadingState />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.noRecord && <NoRecordState />}
      {state.isExhausted && <ExhaustedState sectionLabel="भारतीय भाषा" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.noRecord && !state.isExhausted && state.item && (() => {
        const c = state.item!.content;
        const words = c.words || (c.sanskritWord ? [
          { language: 'Sanskrit', script: 'Devanagari', word: c.sanskritWord, transliteration: c.sanskritTranslit, hindiMeaning: c.sanskritMeaning, englishMeaning: c.sanskritEnglish, exampleSentence: c.sanskritExample, culturalContext: c.sanskritContext },
          { language: 'Awadhi', script: 'Devanagari', word: c.awadhiWord, transliteration: c.awadhiTranslit, hindiMeaning: c.awadhiMeaning, englishMeaning: c.awadhiEnglish, exampleSentence: c.awadhiExample, culturalContext: c.awadhiContext },
          { language: c.regionalLanguage || 'Regional', script: 'Regional', word: c.regionalWord, transliteration: c.regionalTranslit, hindiMeaning: c.regionalMeaning, englishMeaning: c.regionalEnglish, exampleSentence: c.regionalExample, culturalContext: c.regionalContext },
        ].filter(w => w.word) : []);

        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {words.map((word: any, idx: number) => {
              const colors = ['#5C4A1E', '#2A5C3F', '#3A4A7A'];
              const color = colors[idx % colors.length];
              return (
                <div key={idx} className="card-base p-5 space-y-3 border-t-4" style={{ borderTopColor: color }}>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white px-2 py-0.5 rounded" style={{ background: color }}>
                    {word.language}
                  </span>
                  <div className="text-center py-3">
                    <p className="font-devanagari text-3xl font-bold" style={{ color }}>{word.word}</p>
                    <p className="font-serif italic text-xs text-[var(--text-muted)] mt-1">{word.transliteration}</p>
                  </div>
                  <div className="text-xs space-y-1.5">
                    {word.hindiMeaning && <div><span className="font-bold text-[10px] text-[var(--text-muted)]">हिंदी:</span><p className="font-devanagari text-[var(--text-primary)] mt-0.5">{word.hindiMeaning}</p></div>}
                    {word.englishMeaning && <div><span className="font-bold text-[10px] text-[var(--text-muted)]">English:</span><p className="text-[var(--text-secondary)] mt-0.5">{word.englishMeaning}</p></div>}
                    {word.exampleSentence && <div className="p-2 rounded bg-[var(--bg-tertiary)]/40 border border-[var(--border-default)]"><span className="font-bold text-[10px] text-[var(--text-muted)]">Example:</span><p className="font-devanagari text-[var(--text-secondary)] mt-0.5 italic">{word.exampleSentence}</p></div>}
                    {word.culturalContext && <p className="text-[10px] text-[var(--text-muted)] italic">{word.culturalContext}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })()}
    </motion.div>
  );
}

function VyakaranSection({ currentDate, vyakaranQuizSelected, setVyakaranQuizSelected }: { currentDate?: Date; vyakaranQuizSelected: number | null; setVyakaranQuizSelected: (v: number | null) => void }) {
  const state = useVaniSection('vyakaran', currentDate);
  const c = state.item?.content;

  return (
    <motion.div key="vyakaran" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.noRecord && <NoRecordState />}
      {state.isExhausted && <ExhaustedState sectionLabel="हिंदी व्याकरण" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.noRecord && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#3A5A8B' }}>
          <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#3A5A8B]">
                हिंदी व्याकरण · {c.topic || 'व्याकरण'}
              </span>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.title || c.topic}
              </h2>
              {c.subtopic && <p className="text-xs text-[var(--text-muted)] mt-0.5">{c.subtopic}</p>}
              <div className="mt-2"><ProgressBar progress={state.progress} unit="concepts" /></div>
            </div>
            <div className="flex items-center gap-2">
              <MarkExploredButton state={state} />
              <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Vyakaran: ${c.topic}`} />
            </div>
          </div>

          {c.explanation && (
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold text-[#3A5A8B] block">व्याख्या (Explanation)</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.explanation}</p>
            </div>
          )}

          {c.rules?.length > 0 && (
            <div className="space-y-2">
              <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">नियम (Rules)</p>
              <div className="space-y-1.5">
                {c.rules.map((rule: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[var(--bg-tertiary)]/30 border border-[var(--border-default)] text-xs">
                    <span className="text-[#3A5A8B] font-bold font-mono">{idx + 1}.</span>
                    <span className="font-devanagari text-[var(--text-primary)]">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {c.examples?.length > 0 && (
            <div className="space-y-2">
              <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">उदाहरण (Examples)</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {c.examples.map((ex: any, idx: number) => (
                  <div key={idx} className="p-2.5 rounded-lg border bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
                    <p className="font-devanagari font-bold text-[var(--text-primary)]">{ex.original}</p>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{ex.breakdown}</p>
                    {ex.meaning && <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 italic">{ex.meaning}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {c.interactiveMiniQuiz && (
            <div className="p-5 rounded-xl border border-sky-500/20 bg-sky-500/5 space-y-3">
              <p className="text-[11px] uppercase font-bold tracking-wider text-sky-700 dark:text-sky-300">🧠 लघु परीक्षा — Mini Quiz</p>
              <p className="font-devanagari text-sm font-medium text-[var(--text-primary)]">{c.interactiveMiniQuiz.question}</p>
              <div className="space-y-1.5">
                {c.interactiveMiniQuiz.options.map((opt: string, optIdx: number) => {
                  const isSelected = vyakaranQuizSelected === optIdx;
                  const isAnswered = vyakaranQuizSelected !== null;
                  const isCorrect = optIdx === c.interactiveMiniQuiz.correctIndex;
                  let btnClass = 'bg-[var(--bg-tertiary)]/50 text-[var(--text-secondary)] border-[var(--border-default)]';
                  if (isAnswered) {
                    if (isCorrect) btnClass = 'bg-emerald-500/10 border-emerald-500 text-emerald-700 font-semibold';
                    else if (isSelected) btnClass = 'bg-rose-500/10 border-rose-500 text-rose-700';
                  }
                  return (
                    <button key={optIdx} disabled={isAnswered} onClick={() => setVyakaranQuizSelected(optIdx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs border transition-all font-devanagari ${btnClass}`}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {vyakaranQuizSelected !== null && (
                <p className="text-[11px] text-[var(--text-muted)] italic font-devanagari pt-1">
                  💡 {c.interactiveMiniQuiz.explanation}
                </p>
              )}
            </div>
          )}

          {c.linguisticFact && (
            <div className="p-3.5 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-2.5">
              <Lightbulb size={15} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="font-devanagari text-xs leading-relaxed text-[var(--text-secondary)]">{c.linguisticFact}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
