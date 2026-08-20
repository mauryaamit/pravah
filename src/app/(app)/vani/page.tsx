'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
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
} from 'lucide-react';

type VaniTab = 'doha' | 'geeta' | 'ramayan' | 'mahabharat' | 'upanishad' | 'veda' | 'purana' | 'bhasha' | 'vyakaran';

const TABS: { id: VaniTab; label: string; labelHi: string; icon: any; section: string }[] = [
  { id: 'doha', label: 'Doha', labelHi: 'à¤¦à¥‹à¤¹à¤¾', icon: Feather, section: 'doha' },
  { id: 'geeta', label: 'Bhagavad Gita', labelHi: 'à¤¶à¥à¤°à¥€à¤®à¤¦à¥à¤­à¤—à¤µà¤¦à¥à¤—à¥€à¤¤à¤¾', icon: Compass, section: 'gita' },
  { id: 'ramayan', label: 'Ramayan', labelHi: 'à¤¶à¥à¤°à¥€à¤°à¤¾à¤®à¤šà¤°à¤¿à¤¤à¤®à¤¾à¤¨à¤¸', icon: Scroll, section: 'ramayan' },
  { id: 'mahabharat', label: 'Mahabharat', labelHi: 'à¤®à¤¹à¤¾à¤­à¤¾à¤°à¤¤', icon: Flame, section: 'mahabharat' },
  { id: 'upanishad', label: 'Upanishad', labelHi: 'à¤‰à¤ªà¤¨à¤¿à¤·à¤¦à¥', icon: BookOpen, section: 'upanishad' },
  { id: 'veda', label: 'Veda', labelHi: 'à¤µà¥‡à¤¦ (à¤šà¤¤à¥à¤°à¥à¤µà¥‡à¤¦)', icon: Sparkles, section: 'veda' },
  { id: 'purana', label: 'Purana', labelHi: 'à¤ªà¥à¤°à¤¾à¤£', icon: Layers, section: 'purana' },
  { id: 'bhasha', label: 'Bharatiya Bhasha', labelHi: 'à¤­à¤¾à¤°à¤¤à¥€à¤¯ à¤­à¤¾à¤·à¤¾', icon: Languages, section: 'bhasha' },
  { id: 'vyakaran', label: 'Hindi Vyakaran', labelHi: 'à¤¹à¤¿à¤‚à¤¦à¥€ à¤µà¥à¤¯à¤¾à¤•à¤°à¤£', icon: GraduationCap, section: 'vyakaran' },
];

const HERITAGE_THEME = {
  primary: '#8B3A3A',
  gold: '#9A7E4A',
  parchmentBorder: '#E8E1D5',
};

// â”€â”€â”€ Shared sub-components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function LoadingState({ section }: { section: string }) {
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
      <p className="text-sm text-[var(--text-secondary)]">âš ï¸ {error}</p>
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

function ExhaustedState({ section, sectionLabel, progress, onBeginCycle }: {
  section: string;
  sectionLabel: string;
  progress: any;
  onBeginCycle: () => void;
}) {
  return (
    <div className="card-base p-10 text-center space-y-5 border-l-4" style={{ borderLeftColor: HERITAGE_THEME.gold }}>
      <Award size={36} style={{ color: HERITAGE_THEME.gold }} className="mx-auto" />
      <div className="space-y-2">
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
          {sectionLabel} â€” à¤ªà¥‚à¤°à¥à¤£ à¤¯à¤¾à¤¤à¥à¤°à¤¾ à¤¸à¤‚à¤ªà¤¨à¥à¤¨ ðŸ™
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
        Begin Cycle {(progress?.cycleNumber || 1) + 1} â€” Start Again â†º
      </button>
      <p className="text-[10px] text-[var(--text-muted)]">
        Your previous cycle's journey will be archived. This is a fresh beginning.
      </p>
    </div>
  );
}

function ProgressBar({ progress }: { progress: any }) {
  if (!progress) return null;
  const { consumed, total, cycleNumber } = progress;
  const pct = total ? Math.round((consumed / total) * 100) : 0;

  return (
    <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
      <span className="font-medium whitespace-nowrap">
        {total ? `${consumed} / ${total} explored` : `${consumed} explored`}
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
        Explored today
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

// â”€â”€â”€ Main Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function VaniPage() {
  const [activeTab, setActiveTab] = useState<VaniTab>('doha');
  const [showIast, setShowIast] = useState(false);
  const [vyakaranQuizSelected, setVyakaranQuizSelected] = useState<number | null>(null);
  const [expandedDohaStages, setExpandedDohaStages] = useState<Record<string, 'understand' | 'deeper' | 'closed'>>({});
  const [selectedPoetProfile, setSelectedPoetProfile] = useState<PoetProfile | null>(null);

  const activeTabData = TABS.find(t => t.id === activeTab)!;
  const sectionKey = activeTabData.section as any;

  useEffect(() => {
    setVyakaranQuizSelected(null);
    setExpandedDohaStages({});
  }, [activeTab]);

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

        {/* â”€â”€â”€ Header â”€â”€â”€ */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: HERITAGE_THEME.parchmentBorder }}>
          <div className="text-left w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white" style={{ background: HERITAGE_THEME.primary }}>
                à¤­à¤¾à¤°à¤¤à¥€à¤¯ à¤œà¥à¤žà¤¾à¤¨ à¤à¤µà¤‚ à¤­à¤¾à¤·à¤¾ à¤ªà¤°à¤‚à¤ªà¤°à¤¾
              </span>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Zero-Repetition Engine Active
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold mt-2" style={{ color: 'var(--text-primary)' }}>
              à¤µà¤¾à¤£à¥€ Â· Vani
            </h1>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              Sequential daily journey through India's complete knowledge corpus. Every day: new content.
            </p>
          </div>
        </div>

        {/* â”€â”€â”€ Tab Bar â”€â”€â”€ */}
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

        {/* â”€â”€â”€ Global Transliteration Toggle â”€â”€â”€ */}
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

        {/* â”€â”€â”€ Content Sections (API-driven) â”€â”€â”€ */}
        <AnimatePresence mode="wait">

          {/* â”€â”€â”€ 1. DOHA â”€â”€â”€ */}
          {activeTab === 'doha' && <DohaSection showIast={showIast} expandedDohaStages={expandedDohaStages} toggleDohaStage={toggleDohaStage} setSelectedPoetProfile={setSelectedPoetProfile} />}

          {/* â”€â”€â”€ 2. BHAGAVAD GITA â”€â”€â”€ */}
          {activeTab === 'geeta' && <GitaSection showIast={showIast} />}

          {/* â”€â”€â”€ 3. RAMAYAN â”€â”€â”€ */}
          {activeTab === 'ramayan' && <RamayanSection showIast={showIast} />}

          {/* â”€â”€â”€ 4. MAHABHARAT â”€â”€â”€ */}
          {activeTab === 'mahabharat' && <MahabharatSection showIast={showIast} />}

          {/* â”€â”€â”€ 5. UPANISHAD â”€â”€â”€ */}
          {activeTab === 'upanishad' && <UpanishadSection showIast={showIast} />}

          {/* â”€â”€â”€ 6. VEDA â”€â”€â”€ */}
          {activeTab === 'veda' && <VedaSection showIast={showIast} />}

          {/* â”€â”€â”€ 7. PURANA â”€â”€â”€ */}
          {activeTab === 'purana' && <PuranaSection showIast={showIast} />}

          {/* â”€â”€â”€ 8. BHARATIYA BHASHA â”€â”€â”€ */}
          {activeTab === 'bhasha' && <BhashaSection />}

          {/* â”€â”€â”€ 9. HINDI VYAKARAN â”€â”€â”€ */}
          {activeTab === 'vyakaran' && <VyakaranSection vyakaranQuizSelected={vyakaranQuizSelected} setVyakaranQuizSelected={setVyakaranQuizSelected} />}

        </AnimatePresence>

        {/* â”€â”€â”€ Poet Profile Modal â”€â”€â”€ */}
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
                      à¤•à¤µà¤¿ à¤ªà¤°à¤¿à¤šà¤¯
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
                    { label: 'à¤•à¤¾à¤² (Period)', value: selectedPoetProfile.period },
                    { label: 'à¤•à¥à¤·à¥‡à¤¤à¥à¤° (Region)', value: selectedPoetProfile.region },
                    { label: 'à¤ªà¤°à¤‚à¤ªà¤°à¤¾ (Tradition)', value: selectedPoetProfile.tradition },
                    { label: 'à¤­à¤¾à¤·à¤¾ (Dialect)', value: selectedPoetProfile.dialect },
                  ].map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg border bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
                      <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">{item.label}</p>
                      <p className="text-[var(--text-secondary)] mt-0.5 leading-snug">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">à¤œà¥€à¤µà¤¨ à¤ªà¤°à¤¿à¤šà¤¯ (Biography)</p>
                  <p className="text-xs sm:text-sm font-devanagari leading-relaxed text-[var(--text-secondary)]">
                    {selectedPoetProfile.biography}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">à¤ªà¥à¤°à¤®à¥à¤– à¤°à¤šà¤¨à¤¾à¤à¤ (Major Works)</p>
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

// â”€â”€â”€ Section Components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function DohaSection({ showIast, expandedDohaStages, toggleDohaStage, setSelectedPoetProfile }: any) {
  const state = useVaniSection('doha');

  return (
    <motion.div key="doha" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ borderColor: 'var(--border-default)' }}>
        <div>
          <h2 className="font-devanagari text-lg font-bold text-[var(--text-primary)]">à¤¦à¥ˆà¤¨à¤¿à¤• à¤¦à¥‹à¤¹à¤¾ à¤…à¤®à¥ƒà¤¤ Â· 3 Daily Couplets</h2>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">Unique dohas every day. Each item is shown once until you complete the full corpus.</p>
          {state.progress && (
            <div className="mt-1.5">
              <ProgressBar progress={state.progress} />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <MarkExploredButton state={state} label="Mark All Explored" />
          <SutraNoteButton roomId="vani" roomName="Vani" contentTitle="Daily Doha Collection" />
        </div>
      </div>

      {state.loading && <LoadingState section="doha" />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.isExhausted && (
        <ExhaustedState section="doha" sectionLabel="à¤¦à¥‹à¤¹à¤¾ à¤•à¥‹à¤¶" progress={state.progress} onBeginCycle={state.beginNextCycle} />
      )}

      {!state.loading && !state.error && !state.isExhausted && (
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
                        <span className="text-[9px] bg-white/20 px-1.5 rounded ml-1 group-hover:bg-white/30">à¤•à¤µà¤¿ à¤ªà¤°à¤¿à¤šà¤¯ â†’</span>
                      </button>
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-default)]">
                        {doha.themeHindi}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] italic font-serif mt-1.5">
                      à¤¸à¥à¤°à¥‹à¤¤: {doha.source} Â· <span className="text-emerald-600 dark:text-emerald-400 font-medium">âœ“ {doha.attributionConfidence}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ReadAloudButton text={`${doha.dohaDevanagari?.join(' ')}. à¤…à¤°à¥à¤¥: ${doha.hindiMeaning}`} lang="hi" size="md" />
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
                    <BookOpen size={13} /><span>à¤¸à¤®à¤à¥‡à¤‚ Â· Understand</span>{currentStage === 'understand' ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>
                  <button onClick={() => toggleDohaStage(doha.id, 'deeper')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${currentStage === 'deeper' ? 'text-white shadow-sm' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-default)]'}`} style={currentStage === 'deeper' ? { background: HERITAGE_THEME.gold } : {}}>
                    <Sparkles size={13} /><span>à¤—à¤¹à¤¨ à¤µà¤¿à¤šà¤¾à¤° Â· Go Deeper</span>{currentStage === 'deeper' ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>
                </div>

                {currentStage === 'understand' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                      <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: HERITAGE_THEME.primary }}>à¤¸à¤°à¤² à¤¹à¤¿à¤‚à¤¦à¥€ à¤­à¤¾à¤µà¤¾à¤°à¥à¤¥</span>
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
                      <p className="text-[11px] uppercase font-bold tracking-wider" style={{ color: HERITAGE_THEME.primary }}>à¤¦à¤¾à¤°à¥à¤¶à¤¨à¤¿à¤• à¤à¤µà¤‚ à¤®à¤¨à¥‹à¤µà¥ˆà¤œà¥à¤žà¤¾à¤¨à¤¿à¤• à¤¦à¥ƒà¤·à¥à¤Ÿà¤¿</p>
                      <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] font-serif">{doha.deeperInterpretation}</p>
                      {doha.contextBackground && (
                        <p className="text-xs text-[var(--text-muted)] italic pt-1 border-t border-[var(--border-default)]">ðŸ“œ {doha.contextBackground}</p>
                      )}
                    </div>
                    {doha.importantVocabulary?.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">à¤®à¤¹à¤¤à¥à¤µà¤ªà¥‚à¤°à¥à¤£ à¤¶à¤¬à¥à¤¦à¤¾à¤°à¥à¤¥</p>
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
                    <p className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-300">à¤¸à¥à¤®à¤°à¤£ à¤°à¤–à¥‡à¤‚ Â· Daily Takeaway</p>
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

function GitaSection({ showIast }: { showIast: boolean }) {
  const state = useVaniSection('gita');
  const c = state.item?.content;

  return (
    <motion.div key="geeta" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState section="gita" />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.isExhausted && <ExhaustedState section="gita" sectionLabel="à¤¶à¥à¤°à¥€à¤®à¤¦à¥à¤­à¤—à¤µà¤¦à¥à¤—à¥€à¤¤à¤¾" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: HERITAGE_THEME.primary }}>
          <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white" style={{ background: HERITAGE_THEME.primary }}>
                  à¤¶à¥à¤°à¥€à¤®à¤¦à¥à¤­à¤—à¤µà¤¦à¥à¤—à¥€à¤¤à¤¾ Â· à¤¦à¥ˆà¤¨à¤¿à¤• à¤¶à¥à¤²à¥‹à¤•
                </span>
                <span className="text-[11px] font-semibold font-mono px-2 py-0.5 rounded border border-[var(--border-default)] text-[var(--text-secondary)]">
                  à¤…à¤§à¥à¤¯à¤¾à¤¯ {c.chapter}, à¤¶à¥à¤²à¥‹à¤• {c.verse}
                </span>
              </div>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.chapterNameSanskrit}
              </h2>
              <p className="text-xs text-[var(--text-muted)] font-serif italic mt-0.5">
                {c.chapterNameEnglish} Â· {c.chapterNameHindi}
              </p>
              <div className="mt-2"><ProgressBar progress={state.progress} /></div>
            </div>
            <div className="flex items-center gap-2">
              <MarkExploredButton state={state} />
              <ReadAloudButton text={`${c.shlokaSanskrit}. à¤…à¤°à¥à¤¥: ${c.hindiTranslation}`} lang="hi" size="md" />
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
              <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">à¤ªà¤¦à¤šà¥à¤›à¥‡à¤¦ à¤à¤µà¤‚ à¤¶à¤¬à¥à¤¦à¤¾à¤°à¥à¤¥</p>
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
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: HERITAGE_THEME.primary }}>à¤¸à¤°à¤² à¤­à¤¾à¤µà¤¾à¤°à¥à¤¥ (Hindi)</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.hindiTranslation}</p>
            </div>
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: HERITAGE_THEME.gold }}>English Translation</span>
              <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{c.englishTranslation}</p>
            </div>
          </div>

          {c.philosophicalCommentary && (
            <div className="p-5 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <p className="text-[11px] uppercase font-bold tracking-wider" style={{ color: HERITAGE_THEME.primary }}>à¤—à¤¹à¤¨ à¤¦à¤¾à¤°à¥à¤¶à¤¨à¤¿à¤• à¤®à¥€à¤®à¤¾à¤‚à¤¸à¤¾</p>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{c.philosophicalCommentary}</p>
            </div>
          )}

          {c.modernPracticalApplication && (
            <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
              <p className="text-[11px] uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-300">à¤†à¤§à¥à¤¨à¤¿à¤• à¤œà¥€à¤µà¤¨ à¤®à¥‡à¤‚ à¤µà¥à¤¯à¤¾à¤µà¤¹à¤¾à¤°à¤¿à¤• à¤…à¤¨à¥à¤ªà¥à¤°à¤¯à¥‹à¤—</p>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-primary)]">{c.modernPracticalApplication}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function RamayanSection({ showIast }: { showIast: boolean }) {
  const state = useVaniSection('ramayan');
  const c = state.item?.content;

  return (
    <motion.div key="ramayan" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState section="ramayan" />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.isExhausted && <ExhaustedState section="ramayan" sectionLabel="à¤¶à¥à¤°à¥€à¤°à¤¾à¤®à¤šà¤°à¤¿à¤¤à¤®à¤¾à¤¨à¤¸" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#C4623F' }}>
          <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#C4623F]">à¤¶à¥à¤°à¥€à¤°à¤¾à¤®à¤šà¤°à¤¿à¤¤à¤®à¤¾à¤¨à¤¸ Â· à¤¸à¤®à¥à¤ªà¥‚à¤°à¥à¤£ à¤šà¥Œà¤ªà¤¾à¤ˆ</span>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.kand} <span className="text-xs font-serif opacity-75 font-normal">({c.kandEnglish})</span>
              </h2>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{c.dohaNumber} Â· à¤ªà¤¾à¤¤à¥à¤°: {c.charactersInvolved?.join(', ')}</p>
              <div className="mt-2"><ProgressBar progress={state.progress} /></div>
            </div>
            <div className="flex items-center gap-2">
              <MarkExploredButton state={state} />
              <ReadAloudButton text={`${c.chaupaiLines?.join(' ')}. à¤…à¤°à¥à¤¥: ${c.hindiMeaning}`} lang="hi" size="md" />
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
                à¤¦à¥à¤†: {c.dohaLine}
              </p>
            )}
          </div>

          <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">à¤ªà¥à¤°à¤¸à¤‚à¤— (Narrative Setting)</span>
            <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{c.context}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: '#C4623F' }}>à¤­à¤¾à¤µà¤¾à¤°à¥à¤¥ (Hindi)</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.hindiMeaning}</p>
            </div>
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">English Translation</span>
              <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{c.englishMeaning}</p>
            </div>
          </div>

          {c.spiritualSignificance && (
            <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: '#C4623F' }}>à¤¯à¤¹ à¤ªà¥à¤°à¤¸à¤‚à¤— à¤•à¥à¤¯à¥‹à¤‚ à¤®à¤¹à¤¤à¥à¤µà¤ªà¥‚à¤°à¥à¤£ à¤¹à¥ˆ?</span>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{c.spiritualSignificance}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function MahabharatSection({ showIast }: { showIast: boolean }) {
  const state = useVaniSection('mahabharat');
  const c = state.item?.content;

  return (
    <motion.div key="mahabharat" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState section="mahabharat" />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.isExhausted && <ExhaustedState section="mahabharat" sectionLabel="à¤®à¤¹à¤¾à¤­à¤¾à¤°à¤¤" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#7A4A8B' }}>
          <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#7A4A8B]">à¤®à¤¹à¤¾à¤­à¤¾à¤°à¤¤ Â· à¤§à¤°à¥à¤® à¤µà¤¿à¤®à¤°à¥à¤¶</span>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.parva} {c.parvaEnglish ? `(${c.parvaEnglish})` : ''}
              </h2>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                {c.chapterReference} Â· à¤¸à¤‚à¤µà¤¾à¤¦: {c.charactersInvolved?.join(' à¤µ ')}
              </p>
              <div className="mt-2"><ProgressBar progress={state.progress} /></div>
            </div>
            <div className="flex items-center gap-2">
              <MarkExploredButton state={state} />
              <ReadAloudButton text={`${c.sanskritText}. à¤…à¤°à¥à¤¥: ${c.hindiMeaning}`} lang="hi" size="md" />
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
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: '#7A4A8B' }}>à¤¹à¤¿à¤‚à¤¦à¥€ à¤­à¤¾à¤µà¤¾à¤°à¥à¤¥</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.hindiMeaning}</p>
            </div>
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">English Translation</span>
              <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{c.englishMeaning}</p>
            </div>
          </div>

          {c.philosophicalSignificance && (
            <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: '#7A4A8B' }}>à¤¦à¤¾à¤°à¥à¤¶à¤¨à¤¿à¤• à¤®à¤¹à¤¤à¥à¤µ</span>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{c.philosophicalSignificance}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function UpanishadSection({ showIast }: { showIast: boolean }) {
  const state = useVaniSection('upanishad');
  const c = state.item?.content;

  return (
    <motion.div key="upanishad" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState section="upanishad" />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.isExhausted && <ExhaustedState section="upanishad" sectionLabel="à¤‰à¤ªà¤¨à¤¿à¤·à¤¦à¥" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#3A7A6B' }}>
          <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#3A7A6B]">
                {c.upanishadName || 'à¤‰à¤ªà¤¨à¤¿à¤·à¤¦à¥'} Â· {c.sectionReference || ''}
              </span>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.upanishadName || 'à¤‰à¤ªà¤¨à¤¿à¤·à¤¦à¥'} â€” à¤®à¤‚à¤¤à¥à¤° {c.mantraNumber || state.item?.sequence}
              </h2>
              <div className="mt-2"><ProgressBar progress={state.progress} /></div>
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
              <span className="text-[10px] uppercase font-bold tracking-wider block text-[#3A7A6B]">à¤¹à¤¿à¤‚à¤¦à¥€ à¤­à¤¾à¤µà¤¾à¤°à¥à¤¥</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.hindiMeaning}</p>
            </div>
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">English Translation</span>
              <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{c.englishMeaning}</p>
            </div>
          </div>

          {(c.philosophicalExplanation || c.deeperExplanation || c.significance) && (
            <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold tracking-wider block text-[#3A7A6B]">à¤¦à¤¾à¤°à¥à¤¶à¤¨à¤¿à¤• à¤—à¤¹à¤°à¤¾à¤ˆ</span>
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

function VedaSection({ showIast }: { showIast: boolean }) {
  const state = useVaniSection('veda');

  const vedaColors: Record<string, string> = {
    rigveda: '#8B4513',
    samaveda: '#2E7D5B',
    yajurveda: '#4A3F8B',
    atharvaveda: '#8B5A2B',
  };
  const vedaNames: Record<string, string> = {
    rigveda: 'à¤‹à¤—à¥à¤µà¥‡à¤¦',
    samaveda: 'à¤¸à¤¾à¤®à¤µà¥‡à¤¦',
    yajurveda: 'à¤¯à¤œà¥à¤°à¥à¤µà¥‡à¤¦',
    atharvaveda: 'à¤…à¤¥à¤°à¥à¤µà¤µà¥‡à¤¦',
  };

  return (
    <motion.div key="veda" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 flex items-center justify-between" style={{ borderColor: 'var(--border-default)' }}>
        <div>
          <h2 className="font-devanagari text-lg font-bold text-[var(--text-primary)]">à¤šà¤¤à¥à¤°à¥à¤µà¥‡à¤¦ Â· Daily Selections from All 4 Vedas</h2>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">One mantra from each Veda, sequentially. Never repeated until the corpus is complete.</p>
          <div className="mt-1.5"><ProgressBar progress={state.progress} /></div>
        </div>
        <div className="flex items-center gap-2">
          <MarkExploredButton state={state} label="Mark All Explored" />
          <SutraNoteButton roomId="vani" roomName="Vani" contentTitle="Daily Veda Selections" />
        </div>
      </div>

      {state.loading && <LoadingState section="veda" />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.isExhausted && <ExhaustedState section="veda" sectionLabel="à¤µà¥‡à¤¦" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.isExhausted && (
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
                      <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]">à¤¹à¤¿à¤‚à¤¦à¥€ à¤…à¤°à¥à¤¥</span>
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

function PuranaSection({ showIast }: { showIast: boolean }) {
  const state = useVaniSection('purana');
  const c = state.item?.content;

  return (
    <motion.div key="purana" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState section="purana" />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.isExhausted && <ExhaustedState section="purana" sectionLabel="à¤ªà¥à¤°à¤¾à¤£" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#8B6914' }}>
          <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#8B6914]">
                {c.purana || 'à¤ªà¥à¤°à¤¾à¤£'} Â· {c.skandha || c.section || ''}
              </span>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.title || `${c.purana || 'à¤ªà¥à¤°à¤¾à¤£'} â€” ${c.sectionReference || ''}`}
              </h2>
              <div className="mt-2"><ProgressBar progress={state.progress} /></div>
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
              <span className="text-[10px] uppercase font-bold block mb-1 text-[#8B6914]">à¤¹à¤¿à¤‚à¤¦à¥€ à¤­à¤¾à¤µà¤¾à¤°à¥à¤¥</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.hindiMeaning}</p>
            </div>
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block mb-1">English Translation</span>
              <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{c.englishMeaning}</p>
            </div>
          </div>

          {(c.philosophicalSignificance || c.significance) && (
            <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold block text-[#8B6914]">à¤®à¤¹à¤¤à¥à¤µ</span>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{c.philosophicalSignificance || c.significance}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function BhashaSection() {
  const state = useVaniSection('bhasha');

  return (
    <motion.div key="bhasha" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 flex items-center justify-between" style={{ borderColor: 'var(--border-default)' }}>
        <div>
          <h2 className="font-devanagari text-lg font-bold text-[var(--text-primary)]">à¤­à¤¾à¤°à¤¤à¥€à¤¯ à¤­à¤¾à¤·à¤¾ Â· Daily Word Discovery</h2>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">Sanskrit + Awadhi + regional language word, new every day.</p>
          <div className="mt-1.5"><ProgressBar progress={state.progress} /></div>
        </div>
        <div className="flex items-center gap-2">
          <MarkExploredButton state={state} label="Mark Explored" />
        </div>
      </div>

      {state.loading && <LoadingState section="bhasha" />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.isExhausted && <ExhaustedState section="bhasha" sectionLabel="à¤­à¤¾à¤°à¤¤à¥€à¤¯ à¤­à¤¾à¤·à¤¾" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.isExhausted && state.item && (() => {
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
                    {word.hindiMeaning && <div><span className="font-bold text-[10px] text-[var(--text-muted)]">à¤¹à¤¿à¤‚à¤¦à¥€:</span><p className="font-devanagari text-[var(--text-primary)] mt-0.5">{word.hindiMeaning}</p></div>}
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

function VyakaranSection({ vyakaranQuizSelected, setVyakaranQuizSelected }: { vyakaranQuizSelected: number | null; setVyakaranQuizSelected: (v: number | null) => void }) {
  const state = useVaniSection('vyakaran');
  const c = state.item?.content;

  return (
    <motion.div key="vyakaran" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }} className="space-y-6">
      {state.loading && <LoadingState section="vyakaran" />}
      {state.error && <ErrorState error={state.error} reload={state.reload} />}
      {state.isExhausted && <ExhaustedState section="vyakaran" sectionLabel="à¤¹à¤¿à¤‚à¤¦à¥€ à¤µà¥à¤¯à¤¾à¤•à¤°à¤£" progress={state.progress} onBeginCycle={state.beginNextCycle} />}

      {!state.loading && !state.error && !state.isExhausted && c && (
        <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#3A5A8B' }}>
          <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#3A5A8B]">
                à¤¹à¤¿à¤‚à¤¦à¥€ à¤µà¥à¤¯à¤¾à¤•à¤°à¤£ Â· {c.topic || 'à¤µà¥à¤¯à¤¾à¤•à¤°à¤£'}
              </span>
              <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                {c.title || c.topic}
              </h2>
              {c.subtopic && <p className="text-xs text-[var(--text-muted)] mt-0.5">{c.subtopic}</p>}
              <div className="mt-2"><ProgressBar progress={state.progress} /></div>
            </div>
            <div className="flex items-center gap-2">
              <MarkExploredButton state={state} />
              <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Vyakaran: ${c.topic}`} />
            </div>
          </div>

          {c.explanation && (
            <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-2" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase font-bold text-[#3A5A8B] block">à¤µà¥à¤¯à¤¾à¤–à¥à¤¯à¤¾ (Explanation)</span>
              <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{c.explanation}</p>
            </div>
          )}

          {c.rules?.length > 0 && (
            <div className="space-y-2">
              <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">à¤¨à¤¿à¤¯à¤® (Rules)</p>
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
              <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">à¤‰à¤¦à¤¾à¤¹à¤°à¤£ (Examples)</p>
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
              <p className="text-[11px] uppercase font-bold tracking-wider text-sky-700 dark:text-sky-300">ðŸ§  à¤²à¤˜à¥ à¤ªà¤°à¥€à¤•à¥à¤·à¤¾ â€” Mini Quiz</p>
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
                  ðŸ’¡ {c.interactiveMiniQuiz.explanation}
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

