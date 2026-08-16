'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { getDayIndex } from '@/lib/utils/date';
import {
  ENGLISH_WORDS,
  ENGLISH_PHRASES,
  ENGLISH_MASTERY_ENTRIES,
} from './data';
import {
  LISTENING_ENTRIES,
  SPEAK_THINK_ENTRIES,
  NATURAL_ENGLISH_ENTRIES,
  READING_ROOM_ENTRIES,
} from './data-learning';
import { Headphones, Mic, Sparkles, BookOpen, Layers, MessageSquare, Check, X, HelpCircle } from 'lucide-react';

type AngreziTab = 'vocabulary' | 'phrase' | 'listening' | 'speak_think' | 'natural' | 'reading' | 'mastery';

const TABS: { id: AngreziTab; label: string; icon: any }[] = [
  { id: 'listening', label: 'Listening Lab', icon: Headphones },
  { id: 'speak_think', label: 'Speak & Think', icon: Mic },
  { id: 'natural', label: 'Natural English', icon: Sparkles },
  { id: 'reading', label: 'Reading Room', icon: BookOpen },
  { id: 'vocabulary', label: 'Vocabulary Builder', icon: Layers },
  { id: 'phrase', label: 'Phrases & Idioms', icon: MessageSquare },
  { id: 'mastery', label: 'Grammar & Mastery', icon: Sparkles },
];

const ACCENT = '#5B7FA6'; // Soft steel blue matching Angrezi room theme
const ACCENT_LIGHT = 'color-mix(in srgb, #5B7FA6 8%, var(--bg-secondary))';

export default function AngreziPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<AngreziTab>('listening');

  // Interactive Quiz States
  const [listeningAnswers, setListeningAnswers] = useState<Record<number, number>>({});
  const [showTranscript, setShowTranscript] = useState(false);
  const [speakTimerActive, setSpeakTimerActive] = useState(false);
  const [speakSeconds, setSpeakSeconds] = useState(60);
  const [naturalQuizSelected, setNaturalQuizSelected] = useState<number | null>(null);
  const [readingAnswers, setReadingAnswers] = useState<Record<number, number>>({});
  const [drillAnswers, setDrillAnswers] = useState<Record<number, string>>({});
  const [revealThink, setRevealThink] = useState(false);
  const [userPractice, setUserPractice] = useState('');

  // Reset interactive states on date change
  useEffect(() => {
    setListeningAnswers({});
    setShowTranscript(false);
    setSpeakTimerActive(false);
    setSpeakSeconds(60);
    setNaturalQuizSelected(null);
    setReadingAnswers({});
    setDrillAnswers({});
    setRevealThink(false);
    setUserPractice('');
  }, [currentDate]);

  // Speaking challenge timer
  useEffect(() => {
    let interval: any = null;
    if (speakTimerActive && speakSeconds > 0) {
      interval = setInterval(() => setSpeakSeconds(s => s - 1), 1000);
    } else if (speakSeconds === 0) {
      setSpeakTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [speakTimerActive, speakSeconds]);

  const dayIndex = getDayIndex(currentDate) - 1;

  // Curated items based on dayIndex
  const listeningItem = LISTENING_ENTRIES[Math.abs(dayIndex) % LISTENING_ENTRIES.length];
  const speakThinkItem = SPEAK_THINK_ENTRIES[Math.abs(dayIndex) % SPEAK_THINK_ENTRIES.length];
  const naturalItem = NATURAL_ENGLISH_ENTRIES[Math.abs(dayIndex) % NATURAL_ENGLISH_ENTRIES.length];
  const readingItem = READING_ROOM_ENTRIES[Math.abs(dayIndex) % READING_ROOM_ENTRIES.length];
  const englishWord = ENGLISH_WORDS[Math.abs(dayIndex) % ENGLISH_WORDS.length];
  const phrase = ENGLISH_PHRASES[Math.abs(dayIndex) % ENGLISH_PHRASES.length];
  const masteryEntry = ENGLISH_MASTERY_ENTRIES[((dayIndex % 90) + 90) % 90];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header with Day Navigator */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label font-medium tracking-wider uppercase text-xs" style={{ color: ACCENT }}>Communication & Language Academy</p>
            <h1 className="font-serif text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>अंग्रेज़ी · Angrezi</h1>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              A complete daily loop: Listen → Think → Speak → Read → Express → Master.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
        </div>

        {/* Tab Bar */}
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
                  background: isActive ? ACCENT : 'var(--bg-tertiary)',
                  color: isActive ? 'white' : 'var(--text-muted)',
                  border: `1px solid ${isActive ? ACCENT : 'var(--border-default)'}`,
                }}
              >
                <Icon size={13} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">

          {/* ─────────────── 1. LISTENING LAB ─────────────── */}
          {activeTab === 'listening' && (
            <motion.div
              key="listening"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: ACCENT }}>
                
                {/* Header info */}
                <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded text-white" style={{ background: ACCENT }}>
                        {listeningItem.type}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border border-[var(--border-default)] text-[var(--text-secondary)]">
                        {listeningItem.accent} Accent
                      </span>
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                        Level: {listeningItem.difficulty} · ~{listeningItem.durationEstimate}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-3 text-[var(--text-primary)]">
                      {listeningItem.title}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                      {listeningItem.context}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <ReadAloudButton text={listeningItem.audioText} lang="en" size="md" />
                    <SutraNoteButton roomId="angrezi" roomName="Angrezi" contentTitle={`Listening: ${listeningItem.title}`} />
                    <RevisitButton roomId="angrezi" roomName="Angrezi" contentTitle={listeningItem.title} contentSummary={listeningItem.context} />
                  </div>
                </div>

                {/* Audio Listening Player Simulation */}
                <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/40 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border-default)' }}>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm" style={{ background: ACCENT }}>
                      <Headphones size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)]">Click Listen button to hear the audio</p>
                      <p className="text-[11px] text-[var(--text-muted)]">Listen carefully once or twice before answering questions below.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="px-3 py-1.5 rounded-lg border text-xs font-medium transition-all hover:bg-[var(--bg-secondary)]"
                    style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
                  >
                    {showTranscript ? 'Hide Transcript' : 'Reveal Transcript'}
                  </button>
                </div>

                {/* Optional Transcript */}
                {showTranscript && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-5 rounded-xl border bg-[var(--bg-secondary)] space-y-2 text-xs leading-relaxed text-[var(--text-secondary)] font-serif"
                    style={{ borderColor: 'var(--border-default)' }}
                  >
                    <p className="text-[10px] uppercase font-bold font-sans tracking-wider text-[var(--text-muted)]">Audio Transcript</p>
                    <p className="whitespace-pre-line text-sm leading-relaxed">{listeningItem.audioText}</p>
                  </motion.div>
                )}

                {/* Comprehension Questions */}
                <div className="space-y-4 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-1.5">
                    <HelpCircle size={14} style={{ color: ACCENT }} />
                    Comprehension Check
                  </p>
                  
                  {listeningItem.comprehensionQuestions.map((q, qIdx) => {
                    const selected = listeningAnswers[qIdx];
                    const isAnswered = selected !== undefined;
                    return (
                      <div key={qIdx} className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                        <p className="text-sm font-medium text-[var(--text-primary)]">
                          {qIdx + 1}. {q.question}
                        </p>
                        <div className="space-y-1.5">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selected === optIdx;
                            const isCorrect = optIdx === q.correctIndex;
                            let btnStyle = 'border-[var(--border-default)] bg-[var(--bg-tertiary)]/50 text-[var(--text-secondary)]';
                            if (isAnswered) {
                              if (isCorrect) btnStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold';
                              else if (isSelected) btnStyle = 'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300';
                            }
                            return (
                              <button
                                key={optIdx}
                                disabled={isAnswered}
                                onClick={() => setListeningAnswers(prev => ({ ...prev, [qIdx]: optIdx }))}
                                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs border transition-all flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {isAnswered && isCorrect && <Check size={14} className="text-emerald-600" />}
                                {isAnswered && isSelected && !isCorrect && <X size={14} className="text-rose-600" />}
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

                {/* Key Vocabulary & Natural Expressions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Key Spoken Vocabulary</p>
                    <div className="space-y-2">
                      {listeningItem.keyVocabulary.map((v, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg border bg-[var(--bg-tertiary)]/20 text-xs space-y-0.5" style={{ borderColor: 'var(--border-default)' }}>
                          <p className="font-semibold text-[var(--text-primary)]">{v.word} <span className="text-[10px] font-mono text-[var(--text-muted)]">{v.phonetic}</span></p>
                          <p className="text-[11px] text-[var(--text-secondary)]">{v.meaning}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Conversational Expressions</p>
                    <div className="space-y-2">
                      {listeningItem.naturalExpressions.map((e, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg border bg-[var(--bg-tertiary)]/20 text-xs space-y-0.5" style={{ borderColor: 'var(--border-default)' }}>
                          <p className="font-semibold" style={{ color: ACCENT }}>"{e.expression}"</p>
                          <p className="text-[11px] text-[var(--text-secondary)]">{e.meaning}</p>
                          <p className="text-[10px] text-[var(--text-muted)] italic font-serif mt-1">Ex: {e.example}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ─────────────── 2. SPEAK & THINK ─────────────── */}
          {activeTab === 'speak_think' && (
            <motion.div
              key="speak_think"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#4A8C7A' }}>
                
                {/* Header */}
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#4A8C7A]">
                      Thinking In English Drill
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {speakThinkItem.title}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-1">
                      Theme: {speakThinkItem.theme}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ReadAloudButton text={`${speakThinkItem.prompt}. Sample Answer: ${speakThinkItem.sampleModelAnswer}`} lang="en" size="md" />
                    <SutraNoteButton roomId="angrezi" roomName="Angrezi" contentTitle={`Speaking: ${speakThinkItem.title}`} />
                  </div>
                </div>

                {/* Prompt Box */}
                <div className="p-5 rounded-xl border bg-[var(--bg-tertiary)]/40 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Today's Speaking Challenge</p>
                  <p className="font-serif text-base sm:text-lg leading-relaxed font-semibold text-[var(--text-primary)]">
                    "{speakThinkItem.prompt}"
                  </p>
                </div>

                {/* 60-Second Challenge Timer */}
                <div className="p-4 rounded-xl border flex items-center justify-between gap-4 bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-mono text-sm ${speakTimerActive ? 'bg-amber-500 text-white animate-pulse' : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]'}`}>
                      {speakSeconds}s
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)]">60-Second Fluency Drill</p>
                      <p className="text-[11px] text-[var(--text-muted)]">Speak out loud without pausing or switching to Hindi.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSpeakSeconds(60);
                        setSpeakTimerActive(!speakTimerActive);
                      }}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white shadow-sm transition-all"
                      style={{ background: speakTimerActive ? '#C85A5A' : '#4A8C7A' }}
                    >
                      {speakTimerActive ? 'Stop' : 'Start Timer'}
                    </button>
                  </div>
                </div>

                {/* Hindi Mental Translation Trap Warning */}
                <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 space-y-2">
                  <p className="text-[11px] uppercase font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                    ⚠️ The Translation Trap (Avoid This!)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300">
                      <p className="font-bold text-[10px] uppercase">Literal Hindi Translation (Clunky):</p>
                      <p className="italic mt-0.5">"{speakThinkItem.hindiTranslationTrap.clunkyEnglish}"</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300">
                      <p className="font-bold text-[10px] uppercase">Natural English Alternative:</p>
                      <p className="font-semibold mt-0.5">"{speakThinkItem.hindiTranslationTrap.naturalEnglishAlternative}"</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] italic pt-1">
                    {speakThinkItem.hindiTranslationTrap.why}
                  </p>
                </div>

                {/* Answering Framework & Useful Phrases */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                    <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">3-Step Speech Framework</p>
                    <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                      {speakThinkItem.frameworkSteps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#4A8C7A] font-bold">✓</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                    <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Power Phrases To Use</p>
                    <div className="space-y-1 text-xs">
                      {speakThinkItem.suggestedPhrases.map((phrase, idx) => (
                        <div key={idx} className="p-1.5 rounded bg-[var(--bg-tertiary)]/40 border border-[var(--border-default)] font-mono text-[11px] text-[var(--text-primary)]">
                          "{phrase}"
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Model Answer Toggle */}
                <div className="border-t pt-4 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <button
                    onClick={() => setRevealThink(!revealThink)}
                    className="text-xs font-semibold text-[#4A8C7A] hover:underline flex items-center gap-1"
                  >
                    {revealThink ? 'Hide Model Answer' : 'See How a Fluent Speaker Answered →'}
                  </button>
                  {revealThink && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 font-serif text-sm leading-relaxed text-[var(--text-primary)] italic"
                      style={{ borderColor: 'var(--border-default)' }}
                    >
                      "{speakThinkItem.sampleModelAnswer}"
                    </motion.div>
                  )}
                </div>

              </div>
            </motion.div>
          )}

          {/* ─────────────── 3. NATURAL ENGLISH ─────────────── */}
          {activeTab === 'natural' && (
            <motion.div
              key="natural"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#9A7E4A' }}>
                
                {/* Header */}
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#9A7E4A]">
                      {naturalItem.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {naturalItem.headline}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <ReadAloudButton text={`Instead of saying: ${naturalItem.clunkyOrWrong}. Say: ${naturalItem.naturalAlternative}`} lang="en" size="md" />
                    <SutraNoteButton roomId="angrezi" roomName="Angrezi" contentTitle={naturalItem.headline} />
                  </div>
                </div>

                {/* Side-by-Side Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 block">❌ Unnatural / Translated</span>
                    <p className="font-serif text-base font-semibold text-rose-700 dark:text-rose-300">
                      "{naturalItem.clunkyOrWrong}"
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 block">✅ Natural / Effortless</span>
                    <p className="font-serif text-base font-bold text-emerald-800 dark:text-emerald-200">
                      "{naturalItem.naturalAlternative}"
                    </p>
                  </div>
                </div>

                {/* Context & Linguistic Nuance */}
                <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Why Native Speakers Say It This Way</p>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                    {naturalItem.contextExplanation}
                  </p>
                </div>

                {/* Real-World Examples */}
                <div className="space-y-2">
                  <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Real-Life Usage In Context</p>
                  <div className="space-y-2">
                    {naturalItem.realWorldExamples.map((ex, idx) => (
                      <div key={idx} className="p-3 rounded-lg border bg-[var(--bg-tertiary)]/30 text-xs flex items-start gap-2" style={{ borderColor: 'var(--border-default)' }}>
                        <span className="text-[#9A7E4A] font-bold">💬</span>
                        <span className="text-[var(--text-primary)] font-serif italic">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Check Quiz */}
                <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                    🎯 Quick Instinct Check: {naturalItem.quickQuiz.prompt}
                  </p>
                  <div className="space-y-1.5">
                    {naturalItem.quickQuiz.options.map((opt, optIdx) => {
                      const isSelected = naturalQuizSelected === optIdx;
                      const isCorrect = optIdx === naturalItem.quickQuiz.correctIndex;
                      let style = 'border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]';
                      if (naturalQuizSelected !== null) {
                        if (isCorrect) style = 'border-emerald-500 bg-emerald-500/10 text-emerald-700 font-semibold';
                        else if (isSelected) style = 'border-rose-500 bg-rose-500/10 text-rose-700';
                      }
                      return (
                        <button
                          key={optIdx}
                          disabled={naturalQuizSelected !== null}
                          onClick={() => setNaturalQuizSelected(optIdx)}
                          className={`w-full text-left px-3.5 py-2 rounded-lg text-xs border transition-all ${style}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {naturalQuizSelected !== null && (
                    <p className="text-[11px] text-[var(--text-muted)] italic pt-1">
                      💡 {naturalItem.quickQuiz.explanation}
                    </p>
                  )}
                </div>

              </div>
            </motion.div>
          )}

          {/* ─────────────── 4. READING ROOM ─────────────── */}
          {activeTab === 'reading' && (
            <motion.div
              key="reading"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#7E6B8F' }}>
                
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#7E6B8F]">
                        {readingItem.genre}
                      </span>
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                        ~{readingItem.readingTimeMinutes} min read
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {readingItem.title}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-1">
                      {readingItem.authorOrSource}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ReadAloudButton text={readingItem.passage} lang="en" size="md" />
                    <SutraNoteButton roomId="angrezi" roomName="Angrezi" contentTitle={`Reading: ${readingItem.title}`} />
                  </div>
                </div>

                {/* Passage Text */}
                <div className="p-6 rounded-xl border bg-[var(--bg-secondary)] font-serif text-sm sm:text-base leading-relaxed text-[var(--text-primary)] space-y-4 shadow-sm" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="whitespace-pre-line leading-loose">{readingItem.passage}</p>
                </div>

                {/* Vocabulary in Context */}
                <div className="space-y-2">
                  <p className="text-[11px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Vocabulary in Context</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {readingItem.vocabularySpotlight.map((v, idx) => (
                      <div key={idx} className="p-3 rounded-lg border bg-[var(--bg-tertiary)]/30 text-xs space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                        <p className="font-bold text-[var(--text-primary)]">{v.word}</p>
                        <p className="text-[11px] text-[var(--text-secondary)]">{v.contextualMeaning}</p>
                        <p className="text-[10px] text-[var(--text-muted)] italic font-serif">"{v.example}"</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grammatical Structure Spotlight */}
                <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Sentence Pattern Spotlight</p>
                  <p className="text-xs font-mono font-bold" style={{ color: '#7E6B8F' }}>
                    {readingItem.grammaticalStructure.pattern}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {readingItem.grammaticalStructure.explanation}
                  </p>
                  <p className="text-xs font-serif italic text-[var(--text-primary)]">
                    Ex: "{readingItem.grammaticalStructure.example}"
                  </p>
                </div>

                {/* Comprehension Questions */}
                <div className="space-y-4 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                    Passage Comprehension & Inference
                  </p>
                  {readingItem.comprehensionQuestions.map((q, qIdx) => {
                    const selected = readingAnswers[qIdx];
                    const isAnswered = selected !== undefined;
                    return (
                      <div key={qIdx} className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                        <p className="text-sm font-medium text-[var(--text-primary)]">
                          {qIdx + 1}. {q.question}
                        </p>
                        <div className="space-y-1.5">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selected === optIdx;
                            const isCorrect = optIdx === q.correctIndex;
                            let style = 'border-[var(--border-default)] bg-[var(--bg-tertiary)]/50 text-[var(--text-secondary)]';
                            if (isAnswered) {
                              if (isCorrect) style = 'border-emerald-500 bg-emerald-500/10 text-emerald-700 font-semibold';
                              else if (isSelected) style = 'border-rose-500 bg-rose-500/10 text-rose-700';
                            }
                            return (
                              <button
                                key={optIdx}
                                disabled={isAnswered}
                                onClick={() => setReadingAnswers(prev => ({ ...prev, [qIdx]: optIdx }))}
                                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs border transition-all flex items-center justify-between ${style}`}
                              >
                                <span>{opt}</span>
                                {isAnswered && isCorrect && <Check size={14} className="text-emerald-600" />}
                              </button>
                            );
                          })}
                        </div>
                        {isAnswered && (
                          <p className="text-[11px] text-[var(--text-muted)] italic pt-1">
                            💡 {q.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Deeper Discussion & Takeaway */}
                <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Reflective Discussion Question</p>
                    <p className="text-xs font-serif italic leading-relaxed text-[var(--text-primary)] mt-1">
                      "{readingItem.deeperDiscussionPrompt}"
                    </p>
                  </div>
                  <div className="border-t pt-2" style={{ borderColor: 'var(--border-default)' }}>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#7E6B8F]">What To Remember</p>
                    <p className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">
                      {readingItem.whatToRemember}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ─────────────── 5. VOCABULARY BUILDER ─────────────── */}
          {activeTab === 'vocabulary' && (
            <motion.div
              key="vocabulary"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: ACCENT }}>
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white" style={{ backgroundColor: ACCENT }}>
                      Word of the Day
                    </span>
                    <h2 className="font-serif text-3xl font-bold mt-3" style={{ color: 'var(--text-primary)' }}>
                      {englishWord.word}
                    </h2>
                    <p className="text-xs font-mono mt-1" style={{ color: ACCENT }}>
                      {englishWord.pronunciation} &middot; <span className="italic">{englishWord.part_of_speech}</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <ReadAloudButton text={`${englishWord.word}. ${englishWord.meaning}. Example: ${englishWord.usage_sentence}`} lang="en" size="md" />
                    <SutraNoteButton roomId="angrezi" roomName="Angrezi" contentTitle={englishWord.word} />
                    <RevisitButton roomId="angrezi" roomName="Angrezi" contentTitle={englishWord.word} contentSummary={englishWord.meaning} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>Meaning</p>
                    <p className="text-base sm:text-lg font-serif mt-1 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                      {englishWord.meaning}
                    </p>
                    <p className="font-devanagari text-sm mt-1" style={{ color: ACCENT }}>
                      {englishWord.hindi_meaning}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>In a Sentence</p>
                    <p className="text-sm font-serif italic mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      "{englishWord.usage_sentence}"
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>Etymology & Origins</p>
                    <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {englishWord.etymology}
                    </p>
                  </div>

                  {englishWord.synonyms && (
                    <div className="pt-2">
                      <p className="text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>Synonyms</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {englishWord.synonyms.map((s, idx) => (
                          <span key={idx} className="text-xs px-2.5 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-default)] font-serif" style={{ color: 'var(--text-primary)' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* ─────────────── 6. PHRASES & IDIOMS ─────────────── */}
          {activeTab === 'phrase' && (
            <motion.div
              key="phrase"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#7A6B8A' }}>
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#7A6B8A]">
                      Idiom & Phrase
                    </span>
                    <h2 className="font-serif text-3xl font-bold mt-3" style={{ color: 'var(--text-primary)' }}>
                      {phrase.phrase}
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <ReadAloudButton text={`${phrase.phrase}. Meaning: ${phrase.meaning}. Example: ${phrase.usage}`} lang="en" size="md" />
                    <SutraNoteButton roomId="angrezi" roomName="Angrezi" contentTitle={phrase.phrase} />
                    <RevisitButton roomId="angrezi" roomName="Angrezi" contentTitle={phrase.phrase} contentSummary={phrase.meaning} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>Meaning</p>
                    <p className="text-base sm:text-lg font-serif mt-1 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                      {phrase.meaning}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>How to Use</p>
                    <p className="text-sm font-serif italic mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      "{phrase.usage}"
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>Origin Story</p>
                    <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {phrase.origin}
                    </p>
                  </div>

                  {phrase.hindi_equivalent && (
                    <div className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/30 mt-4" style={{ borderColor: 'var(--border-default)' }}>
                      <p className="text-xs uppercase font-bold tracking-wider text-[#7A6B8A]">Hindi Cultural Equivalent</p>
                      <p className="font-devanagari text-base font-semibold mt-1 text-[var(--text-primary)]">
                        {phrase.hindi_equivalent}
                      </p>
                      {phrase.hindi_equivalent_roman && (
                        <p className="text-xs text-[var(--text-muted)] italic font-mono mt-0.5">
                          {phrase.hindi_equivalent_roman}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* ─────────────── 7. GRAMMAR & MASTERY ─────────────── */}
          {activeTab === 'mastery' && (
            <motion.div
              key="mastery"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: '#C4823F' }}>
                <div className="flex justify-between items-start gap-4 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#C4823F]">
                      Grammar & Nuance Mastery
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {masteryEntry.concept}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-1">Theme: {masteryEntry.theme}</p>
                  </div>
                  <div className="flex gap-2">
                    <ReadAloudButton text={`${masteryEntry.concept}. ${masteryEntry.conceptExplanation}`} lang="en" size="md" />
                    <SutraNoteButton roomId="angrezi" roomName="Angrezi" contentTitle={masteryEntry.concept} />
                  </div>
                </div>

                <div className="p-4 rounded-xl border bg-[var(--bg-secondary)] space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)]">Concept Deep Dive</p>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {masteryEntry.conceptExplanation}
                  </p>
                </div>

                {/* Interactive Grammar Drills */}
                <div className="space-y-4">
                  <p className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)]">Instant Practice Drills</p>
                  {masteryEntry.drills.map((drill, idx) => {
                    const answered = drillAnswers[idx];
                    const isCorrect = answered === drill.correctAnswer;
                    return (
                      <div key={idx} className="p-4 rounded-xl border bg-[var(--bg-tertiary)]/20 space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                        <p className="text-sm font-medium text-[var(--text-primary)]">{idx + 1}. {drill.sentence}</p>
                        <div className="flex flex-wrap gap-2">
                          {drill.options.map((opt, optIdx) => (
                            <button
                              key={optIdx}
                              disabled={!!answered}
                              onClick={() => setDrillAnswers(prev => ({ ...prev, [idx]: opt }))}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                                answered === opt
                                  ? isCorrect ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-rose-500 text-white border-rose-500'
                                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-default)] hover:bg-[var(--bg-tertiary)]'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                        {answered && (
                          <p className="text-xs text-[var(--text-muted)] italic pt-1">
                            {isCorrect ? '✓ Correct! ' : '✗ Incorrect. '} {drill.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
