'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { getDayIndexForArray } from '@/lib/utils/date';
import {
  RAMAYAN_CHAUPAIS,
  GITA_SHLOKAS,
  MAHABHARAT_ENTRIES,
  UPANISHAD_ENTRIES,
  VEDA_DAILY_SETS,
  PURANA_ENTRIES,
  BHASHA_DISCOVERY_SETS,
  HINDI_VYAKARAN_ENTRIES,
} from './data-heritage';
import {
  Scroll,
  BookOpen,
  Sparkles,
  Compass,
  Languages,
  Layers,
  GraduationCap,
  Flame,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

type VaniTab = 'geeta' | 'ramayan' | 'mahabharat' | 'upanishad' | 'veda' | 'purana' | 'bhasha' | 'vyakaran';

const TABS: { id: VaniTab; label: string; labelHi: string; icon: any }[] = [
  { id: 'geeta', label: 'Bhagavad Gita', labelHi: 'श्रीमद्भगवद्गीता', icon: Compass },
  { id: 'ramayan', label: 'Ramayan', labelHi: 'श्रीरामचरितमानस', icon: Scroll },
  { id: 'mahabharat', label: 'Mahabharat', labelHi: 'महाभारत', icon: Flame },
  { id: 'upanishad', label: 'Upanishad', labelHi: 'उपनिषद्', icon: BookOpen },
  { id: 'veda', label: 'Veda', labelHi: 'वेद (चतुर्वेद)', icon: Sparkles },
  { id: 'purana', label: 'Purana', labelHi: 'पुराण', icon: Layers },
  { id: 'bhasha', label: 'Bharatiya Bhasha', labelHi: 'भारतीय भाषा', icon: Languages },
  { id: 'vyakaran', label: 'Hindi Vyakaran', labelHi: 'हिंदी व्याकरण', icon: GraduationCap },
];

const HERITAGE_THEME = {
  primary: '#8B3A3A', // Deep traditional terracotta / madder red
  gold: '#9A7E4A',    // Antique manuscript brass gold
  parchment: '#FDFBF7',
  parchmentBorder: '#E8E1D5',
  cardBg: 'var(--bg-secondary)',
};

export default function VaniPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<VaniTab>('geeta');
  const [showIast, setShowIast] = useState(false);
  const [expandedSection, setExpandedSection] = useState<Record<string, boolean>>({});
  const [vyakaranQuizSelected, setVyakaranQuizSelected] = useState<number | null>(null);

  // Reset interactive states on date or tab change
  useEffect(() => {
    setVyakaranQuizSelected(null);
  }, [currentDate, activeTab]);

  const toggleExpand = (id: string) => {
    setExpandedSection(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Day index calculations
  const dayIdx = getDayIndexForArray(currentDate, 10000);

  // Deterministic daily items
  const ramayanItem = RAMAYAN_CHAUPAIS[dayIdx % RAMAYAN_CHAUPAIS.length];
  // Bhagavad Gita: Sequential journey through 700 verses
  const gitaItem = GITA_SHLOKAS[dayIdx % GITA_SHLOKAS.length];
  const mahabharatItem = MAHABHARAT_ENTRIES[dayIdx % MAHABHARAT_ENTRIES.length];
  const upanishadItem = UPANISHAD_ENTRIES[dayIdx % UPANISHAD_ENTRIES.length];
  const vedaItem = VEDA_DAILY_SETS[dayIdx % VEDA_DAILY_SETS.length];
  const puranaItem = PURANA_ENTRIES[dayIdx % PURANA_ENTRIES.length];
  const bhashaItem = BHASHA_DISCOVERY_SETS[dayIdx % BHASHA_DISCOVERY_SETS.length];
  const vyakaranItem = HINDI_VYAKARAN_ENTRIES[dayIdx % HINDI_VYAKARAN_ENTRIES.length];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ─── Header: Old Indian Library Aesthetic ─── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: HERITAGE_THEME.parchmentBorder }}>
          <div className="text-left w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white" style={{ background: HERITAGE_THEME.primary }}>
                भारतीय ज्ञान एवं भाषा परंपरा
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold mt-2" style={{ color: 'var(--text-primary)' }}>
              वाणी · Vani
            </h1>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              A sanctuary of India's linguistic, scriptural, and literary heritage.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
        </div>

        {/* ─── Tab Bar: Scholarly Navigation ─── */}
        <motion.div
          variants={FADE_UP}
          initial="initial"
          animate="animate"
          className="flex gap-2 flex-wrap"
        >
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

        {/* ─── Main Content Views ─── */}
        <AnimatePresence mode="wait">

          {/* ─────────────── 1. BHAGAVAD GITA (SEQUENTIAL JOURNEY) ─────────────── */}
          {activeTab === 'geeta' && (
            <motion.div
              key="geeta"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: HERITAGE_THEME.primary }}>
                
                {/* Header info */}
                <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white" style={{ background: HERITAGE_THEME.primary }}>
                        श्रीमद्भगवद्गीता · दैनिक श्लोक
                      </span>
                      <span className="text-[11px] font-semibold font-mono px-2 py-0.5 rounded border border-[var(--border-default)] text-[var(--text-secondary)]">
                        अध्याय {gitaItem.chapter}, श्लोक {gitaItem.verse} (प्रगति: {gitaItem.sequenceNumber}/700)
                      </span>
                    </div>
                    <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {gitaItem.chapterNameSanskrit}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] font-serif italic mt-0.5">
                      {gitaItem.chapterNameEnglish} &middot; {gitaItem.chapterNameHindi}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <ReadAloudButton text={`${gitaItem.shlokaSanskrit}. अर्थ: ${gitaItem.hindiTranslation}`} lang="hi-IN" size="md" />
                    <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Gita ${gitaItem.chapter}.${gitaItem.verse}`} />
                    <RevisitButton roomId="vani" roomName="Vani" contentTitle={`Gita ${gitaItem.chapter}.${gitaItem.verse}`} contentSummary={gitaItem.englishTranslation} />
                  </div>
                </div>

                {/* Shloka Presentation */}
                <div className="py-4 text-center space-y-3 bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
                  <p className={showIast ? "font-serif italic text-lg sm:text-xl leading-relaxed text-[var(--text-primary)] whitespace-pre-line" : "font-devanagari text-xl sm:text-2xl font-bold leading-loose text-[var(--text-primary)] whitespace-pre-line"}>
                    {showIast ? gitaItem.transliterationIAST : gitaItem.shlokaSanskrit}
                  </p>
                </div>

                {/* Word by Word Sanskrit Breakdown */}
                <div className="space-y-2">
                  <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">पदच्छेद एवं शब्दार्थ (Word-by-Word Sanskrit Breakdown)</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    {gitaItem.wordByWordMeaning.map((w, idx) => (
                      <div key={idx} className="p-2 rounded border bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
                        <p className="font-semibold text-[var(--text-primary)]">{w.sanskrit}</p>
                        <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{w.english}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Translations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8B3A3A] block">सरल भावार्थ (Hindi)</span>
                    <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">
                      {gitaItem.hindiTranslation}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#9A7E4A] block">English Translation</span>
                    <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">
                      {gitaItem.englishTranslation}
                    </p>
                  </div>
                </div>

                {/* Deep Philosophical Commentary */}
                <div className="p-5 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-[11px] uppercase font-bold tracking-wider text-[#8B3A3A]">गहन दार्शनिक मीमांसा (Philosophical Commentary)</p>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                    {gitaItem.philosophicalCommentary}
                  </p>
                </div>

                {/* Modern Practical Application */}
                <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
                  <p className="text-[11px] uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-300">आधुनिक जीवन में व्यावहारिक अनुप्रयोग (Practical Application)</p>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-primary)]">
                    {gitaItem.modernPracticalApplication}
                  </p>
                </div>

              </div>
            </motion.div>
          )}

          {/* ─────────────── 2. RAMAYAN (COMPLETE CHAUPAI) ─────────────── */}
          {activeTab === 'ramayan' && (
            <motion.div
              key="ramayan"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#C4623F' }}>
                
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#C4623F]">
                      श्रीरामचरितमानस · सम्पूर्ण चौपाई
                    </span>
                    <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {ramayanItem.kand} <span className="text-xs font-serif opacity-75 font-normal">({ramayanItem.kandEnglish})</span>
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      {ramayanItem.dohaNumber} &middot; पात्र: {ramayanItem.charactersInvolved.join(', ')}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <ReadAloudButton text={`${ramayanItem.chaupaiLines.join(' ')}. अर्थ: ${ramayanItem.hindiMeaning}`} lang="hi-IN" size="md" />
                    <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Ramayan: ${ramayanItem.kand}`} />
                  </div>
                </div>

                {/* Complete Chaupai Text */}
                <div className="py-4 text-center space-y-2 bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
                  {showIast ? (
                    <div className="font-serif italic text-base sm:text-lg leading-relaxed text-[var(--text-primary)] space-y-1">
                      {ramayanItem.transliteration.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  ) : (
                    <div className="font-devanagari text-xl sm:text-2xl font-bold leading-loose text-[var(--text-primary)] space-y-1">
                      {ramayanItem.chaupaiLines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  )}

                  {ramayanItem.dohaLine && (
                    <p className="font-devanagari text-lg text-[#C4623F] font-semibold pt-2 border-t mt-3" style={{ borderColor: 'var(--border-default)' }}>
                      दुआ: {ramayanItem.dohaLine}
                    </p>
                  )}
                </div>

                {/* Narrative Context */}
                <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">प्रसंग (Narrative Setting)</span>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                    {ramayanItem.context}
                  </p>
                </div>

                {/* Hindi & English Meanings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C4623F] block">भावार्थ (Hindi)</span>
                    <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">
                      {ramayanItem.hindiMeaning}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">English Translation</span>
                    <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">
                      {ramayanItem.englishMeaning}
                    </p>
                  </div>
                </div>

                {/* Spiritual Significance & Key Vocabulary */}
                <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C4623F] block">यह प्रसंग क्यों महत्वपूर्ण है? (Why This Passage Matters)</span>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                    {ramayanItem.spiritualSignificance}
                  </p>
                </div>

              </div>
            </motion.div>
          )}

          {/* ─────────────── 3. MAHABHARAT ─────────────── */}
          {activeTab === 'mahabharat' && (
            <motion.div
              key="mahabharat"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#7A4A8B' }}>
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#7A4A8B]">
                      महाभारत · धर्म विमर्श
                    </span>
                    <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {mahabharatItem.parva} ({mahabharatItem.parvaEnglish})
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      {mahabharatItem.chapterReference} &middot; संवाद: {mahabharatItem.charactersInvolved.join(' व ')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ReadAloudButton text={`${mahabharatItem.sanskritText}. अर्थ: ${mahabharatItem.hindiMeaning}`} lang="hi-IN" size="md" />
                    <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Mahabharat: ${mahabharatItem.parva}`} />
                  </div>
                </div>

                <div className="py-4 text-center space-y-3 bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
                  <p className={showIast ? "font-serif italic text-lg sm:text-xl leading-relaxed text-[var(--text-primary)] whitespace-pre-line" : "font-devanagari text-xl sm:text-2xl font-bold leading-loose text-[var(--text-primary)] whitespace-pre-line"}>
                    {showIast ? mahabharatItem.transliteration : mahabharatItem.sanskritText}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold text-[#7A4A8B]">हिंदी अर्थ</span>
                    <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{mahabharatItem.hindiMeaning}</p>
                  </div>
                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]">English Translation</span>
                    <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{mahabharatItem.englishMeaning}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border bg-amber-500/5 border-amber-500/20 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-300">धर्म संकट एवं नैतिक मीमांसा (Ethical Dilemma)</span>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{mahabharatItem.ethicalDilemma}</p>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-primary)] pt-1 border-t border-amber-500/10 italic">
                    💡 आधुनिक दृष्टि: {mahabharatItem.modernReflection}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─────────────── 4. UPANISHADS ─────────────── */}
          {activeTab === 'upanishad' && (
            <motion.div
              key="upanishad"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#4A7A8B' }}>
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#4A7A8B]">
                      उपनिषद् · वेदान्त सार
                    </span>
                    <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {upanishadItem.upanishadName} ({upanishadItem.upanishadNameEnglish})
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{upanishadItem.mantraReference}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ReadAloudButton text={`${upanishadItem.sanskritMantra}. अर्थ: ${upanishadItem.hindiMeaning}`} lang="hi-IN" size="md" />
                    <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={upanishadItem.upanishadName} />
                  </div>
                </div>

                <div className="py-4 text-center space-y-3 bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
                  <p className={showIast ? "font-serif italic text-lg sm:text-xl leading-relaxed text-[var(--text-primary)] whitespace-pre-line" : "font-devanagari text-xl sm:text-2xl font-bold leading-loose text-[var(--text-primary)] whitespace-pre-line"}>
                    {showIast ? upanishadItem.transliterationIAST : upanishadItem.sanskritMantra}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold text-[#4A7A8B]">हिंदी अर्थ</span>
                    <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{upanishadItem.hindiMeaning}</p>
                  </div>
                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]">English Meaning</span>
                    <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{upanishadItem.englishMeaning}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <span className="text-[10px] uppercase font-bold text-[#4A7A8B]">वेदान्त दर्शन सम्बंध (Vedantic Significance)</span>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{upanishadItem.vedanticSignificance}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─────────────── 5. VEDAS (DAILY 4 SELECTIONS) ─────────────── */}
          {activeTab === 'veda' && (
            <motion.div
              key="veda"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: HERITAGE_THEME.gold }}>
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white" style={{ background: HERITAGE_THEME.gold }}>
                      चतुर्वेद · दैनिक चतुष्टय (Daily 4 Selections)
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      The Four Vedas
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Daily representative selections from Rigveda, Yajurveda, Samaveda, and Atharvaveda.
                    </p>
                  </div>
                  <SutraNoteButton roomId="vani" roomName="Vani" contentTitle="Chaturveda Selections" />
                </div>

                {/* 4 Selections Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { data: vedaItem.rigveda, badge: 'ऋग्वेद (Rigveda)', color: '#8B3A3A' },
                    { data: vedaItem.yajurveda, badge: 'यजुर्वेद (Yajurveda)', color: '#4A7A8B' },
                    { data: vedaItem.samaveda, badge: 'सामवेद (Samaveda)', color: '#7A4A8B' },
                    { data: vedaItem.atharvaveda, badge: 'अथर्ववेद (Atharvaveda)', color: '#4A8C7A' },
                  ].map((v, idx) => (
                    <div key={idx} className="p-5 rounded-xl border bg-[var(--bg-secondary)] space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded text-white" style={{ background: v.color }}>
                          {v.badge}
                        </span>
                        <span className="text-[10px] text-[var(--text-muted)] font-mono">{v.data.referenceNumber}</span>
                      </div>
                      <p className={showIast ? "font-serif italic text-sm text-[var(--text-primary)] leading-relaxed" : "font-devanagari text-base font-bold text-[var(--text-primary)] leading-relaxed"}>
                        {showIast ? v.data.transliterationIAST : v.data.sanskritText}
                      </p>
                      <p className="font-devanagari text-xs text-[var(--text-secondary)] leading-relaxed border-t pt-2" style={{ borderColor: 'var(--border-default)' }}>
                        <span className="font-bold text-[10px] text-[var(--text-muted)] block">अर्थ:</span>
                        {v.data.hindiMeaning}
                      </p>
                      <p className="text-[11px] text-[var(--text-muted)] italic font-serif">
                        {v.data.significance}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ─────────────── 6. PURANAS ─────────────── */}
          {activeTab === 'purana' && (
            <motion.div
              key="purana"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#8B5A3A' }}>
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#8B5A3A]">
                      पुराण कथा एवं तत्व ज्ञान
                    </span>
                    <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {puranaItem.puranaName} ({puranaItem.puranaNameEnglish})
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{puranaItem.chapterSection}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ReadAloudButton text={`${puranaItem.sanskritPassage}. अर्थ: ${puranaItem.hindiMeaning}`} lang="hi-IN" size="md" />
                    <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={puranaItem.puranaName} />
                  </div>
                </div>

                <div className="py-4 text-center space-y-3 bg-[var(--bg-tertiary)]/20 p-6 rounded-xl border" style={{ borderColor: 'var(--border-default)' }}>
                  <p className={showIast ? "font-serif italic text-lg sm:text-xl leading-relaxed text-[var(--text-primary)] whitespace-pre-line" : "font-devanagari text-xl sm:text-2xl font-bold leading-loose text-[var(--text-primary)] whitespace-pre-line"}>
                    {showIast ? puranaItem.transliteration : puranaItem.sanskritPassage}
                  </p>
                </div>

                <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                  <span className="text-[10px] uppercase font-bold text-[#8B5A3A]">पौराणिक आख्यान (Story & Context)</span>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{puranaItem.storyNarrative}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold text-[#8B5A3A]">भावार्थ (Hindi)</span>
                    <p className="font-devanagari text-sm leading-relaxed text-[var(--text-primary)]">{puranaItem.hindiMeaning}</p>
                  </div>
                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1.5" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]">English Translation</span>
                    <p className="font-serif text-sm leading-relaxed text-[var(--text-primary)]">{puranaItem.englishMeaning}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <span className="text-[10px] uppercase font-bold text-[#8B5A3A]">प्रतीक एवं सांस्कृतिक सन्देश (Symbolism & Significance)</span>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{puranaItem.symbolismAndSignificance}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─────────────── 7. BHARATIYA BHASHA (DAILY 3 WORDS) ─────────────── */}
          {activeTab === 'bhasha' && (
            <motion.div
              key="bhasha"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#3A7A6B' }}>
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#3A7A6B]">
                      दैनिक भाषा संगम · 3 Daily Words
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      Linguistic Discovery
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      1 Sanskrit Root Word &middot; 1 Awadhi Word &middot; 1 Regional Indian Language Word
                    </p>
                  </div>
                  <SutraNoteButton roomId="vani" roomName="Vani" contentTitle="Bharatiya Bhasha Discovery" />
                </div>

                {/* 3 Words Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Sanskrit Word */}
                  <div className="p-5 rounded-xl border bg-[var(--bg-secondary)] space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded text-white bg-[#8B3A3A]">
                      1. संस्कृत शब्द
                    </span>
                    <h3 className="font-devanagari text-xl font-bold text-[var(--text-primary)]">
                      {bhashaItem.sanskritWord.word}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono">{bhashaItem.sanskritWord.root}</p>
                    <p className="font-devanagari text-xs text-[var(--text-secondary)] leading-relaxed">
                      {bhashaItem.sanskritWord.meaningHindi}
                    </p>
                    <p className="text-[11px] text-[var(--text-muted)] font-serif italic border-t pt-2" style={{ borderColor: 'var(--border-default)' }}>
                      💡 {bhashaItem.sanskritWord.etymologicalInsight}
                    </p>
                  </div>

                  {/* Awadhi Word */}
                  <div className="p-5 rounded-xl border bg-[var(--bg-secondary)] space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded text-white bg-[#C4623F]">
                      2. अवधी शब्द
                    </span>
                    <h3 className="font-devanagari text-xl font-bold text-[var(--text-primary)]">
                      {bhashaItem.awadhiWord.word}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono">{bhashaItem.awadhiWord.transliteration}</p>
                    <p className="font-devanagari text-xs text-[var(--text-secondary)] leading-relaxed">
                      {bhashaItem.awadhiWord.meaningHindi}
                    </p>
                    <p className="text-[11px] text-[var(--text-muted)] font-serif italic border-t pt-2" style={{ borderColor: 'var(--border-default)' }}>
                      🌸 {bhashaItem.awadhiWord.folkContext}
                    </p>
                  </div>

                  {/* Regional Word */}
                  <div className="p-5 rounded-xl border bg-[var(--bg-secondary)] space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded text-white bg-[#3A7A6B]">
                      3. {bhashaItem.regionalWord.language}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {bhashaItem.regionalWord.originalScriptWord}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono">{bhashaItem.regionalWord.transliteration}</p>
                    <p className="font-devanagari text-xs text-[var(--text-secondary)] leading-relaxed">
                      {bhashaItem.regionalWord.meaningHindi}
                    </p>
                    <p className="text-[11px] text-[var(--text-muted)] font-serif italic border-t pt-2" style={{ borderColor: 'var(--border-default)' }}>
                      🏛️ {bhashaItem.regionalWord.culturalContext}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─────────────── 8. HINDI VYAKARAN (DAILY PROGRESSIVE GRAMMAR) ─────────────── */}
          {activeTab === 'vyakaran' && (
            <motion.div
              key="vyakaran"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#3F6AC4' }}>
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded text-white bg-[#3F6AC4]">
                        हिंदी व्याकरण वाटिका · Daily Grammar
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                        श्रेणी: {vyakaranItem.category} &middot; स्तर: {vyakaranItem.difficulty}
                      </span>
                    </div>
                    <h2 className="font-devanagari text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {vyakaranItem.conceptTitle}
                    </h2>
                  </div>
                  <SutraNoteButton roomId="vani" roomName="Vani" contentTitle={`Vyakaran: ${vyakaranItem.conceptTitle}`} />
                </div>

                {/* Concept Explanation */}
                <div className="p-5 rounded-xl border bg-[var(--bg-secondary)] space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">संकल्पना एवं परिभाषा (Concept Definition)</p>
                  <p className="font-devanagari text-sm sm:text-base leading-relaxed text-[var(--text-primary)]">
                    {vyakaranItem.simpleExplanation}
                  </p>
                </div>

                {/* Rules & Formulas */}
                <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#3F6AC4]">व्याकरणिक नियम एवं सूत्र (Rules & Formulas)</p>
                  <ul className="space-y-1 text-xs sm:text-sm font-devanagari text-[var(--text-secondary)]">
                    {vyakaranItem.rulesAndFormulas.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#3F6AC4] font-bold">▪</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examples Breakdown */}
                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">प्रमुख उदाहरण (Examples Breakdown)</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {vyakaranItem.examples.map((ex, idx) => (
                      <div key={idx} className="p-3 rounded-lg border bg-[var(--bg-secondary)] space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                        <p className="font-devanagari font-bold text-sm text-[var(--text-primary)]">{ex.original}</p>
                        <p className="font-mono text-xs text-[#3F6AC4]">{ex.breakdown}</p>
                        <p className="text-[11px] text-[var(--text-muted)]">{ex.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Mistakes to Avoid */}
                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-2">
                  <p className="text-[10px] uppercase font-bold text-rose-700 dark:text-rose-300">सामान्य अशुद्धियाँ (Common Mistakes to Avoid)</p>
                  {vyakaranItem.commonMistakes.map((m, idx) => (
                    <div key={idx} className="text-xs space-y-0.5">
                      <p><span className="font-bold text-rose-600">❌ अशुद्ध:</span> {m.incorrect}</p>
                      <p><span className="font-bold text-emerald-600">✅ शुद्ध:</span> {m.correct}</p>
                      <p className="text-[11px] text-[var(--text-muted)] italic font-devanagari">कारण: {m.reason}</p>
                    </div>
                  ))}
                </div>

                {/* Interactive Mini-Quiz */}
                <div className="p-5 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-xs font-bold font-devanagari text-[var(--text-primary)]">
                    🎯 अभ्यास प्रश्न: {vyakaranItem.interactiveMiniQuiz.question}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {vyakaranItem.interactiveMiniQuiz.options.map((opt, optIdx) => {
                      const isSelected = vyakaranQuizSelected === optIdx;
                      const isCorrect = optIdx === vyakaranItem.interactiveMiniQuiz.correctIndex;
                      let style = 'border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]';
                      if (vyakaranQuizSelected !== null) {
                        if (isCorrect) style = 'border-emerald-500 bg-emerald-500/10 text-emerald-700 font-semibold';
                        else if (isSelected) style = 'border-rose-500 bg-rose-500/10 text-rose-700';
                      }
                      return (
                        <button
                          key={optIdx}
                          disabled={vyakaranQuizSelected !== null}
                          onClick={() => setVyakaranQuizSelected(optIdx)}
                          className={`text-left px-3.5 py-2 rounded-lg text-xs font-devanagari border transition-all ${style}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {vyakaranQuizSelected !== null && (
                    <p className="text-[11px] font-devanagari text-[var(--text-muted)] italic pt-1">
                      💡 {vyakaranItem.interactiveMiniQuiz.explanation}
                    </p>
                  )}
                </div>

                {/* Linguistic Fact */}
                <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#3F6AC4]">भाषा वैज्ञानिक तथ्य (Linguistic Fact)</p>
                  <p className="font-devanagari text-xs leading-relaxed text-[var(--text-muted)] italic">
                    {vyakaranItem.linguisticFact}
                  </p>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
