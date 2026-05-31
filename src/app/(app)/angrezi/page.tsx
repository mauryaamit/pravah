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
  RARE_WORDS,
  LANGUAGE_STORIES,
  MODERN_TERMS,
  ENGLISH_MASTERY_ENTRIES,
} from './data';

type AngreziTab = 'vocabulary' | 'phrase' | 'writing' | 'pronunciation' | 'mastery';

const TABS: { id: AngreziTab; label: string }[] = [
  { id: 'vocabulary', label: 'Vocabulary Builder' },
  { id: 'phrase', label: 'Phrases & Idioms' },
  { id: 'writing', label: 'Writing Clinic' },
  { id: 'pronunciation', label: 'Pronunciation' },
  { id: 'mastery', label: 'Grammar & Mastery' },
];

const ACCENT = '#5B7FA6'; // Soft steel blue matching Angrezi room theme
const ACCENT_LIGHT = 'color-mix(in srgb, #5B7FA6 8%, var(--bg-secondary))';

export default function AngreziPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<AngreziTab>('vocabulary');

  // Mastery sub-states
  const [drillAnswers, setDrillAnswers] = useState<Record<number, string>>({});
  const [revealThink, setRevealThink] = useState(false);
  const [userPractice, setUserPractice] = useState('');

  // Reset mastery states on date change
  useEffect(() => {
    setDrillAnswers({});
    setRevealThink(false);
    setUserPractice('');
  }, [currentDate]);

  const dayIndex = getDayIndex(currentDate) - 1;

  const englishWord = ENGLISH_WORDS[dayIndex % ENGLISH_WORDS.length];
  const phrase = ENGLISH_PHRASES[dayIndex % ENGLISH_PHRASES.length];
  const rareWord = RARE_WORDS[dayIndex % RARE_WORDS.length];
  const story = LANGUAGE_STORIES[dayIndex % LANGUAGE_STORIES.length];
  const modernTerm = MODERN_TERMS[dayIndex % MODERN_TERMS.length];
  const masteryEntry = ENGLISH_MASTERY_ENTRIES[((dayIndex % 90) + 90) % 90];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header with Day Navigator */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label" style={{ color: ACCENT }}>Language Room</p>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>अंग्रेज़ी - Angrezi</h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              English as a living language - words, craft, and mastery.
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
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300"
              style={{
                background: activeTab === tab.id ? ACCENT : 'var(--bg-tertiary)',
                color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                border: `1px solid ${activeTab === tab.id ? ACCENT : 'var(--border-default)'}`,
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">

          {/* ─── TAB 1: Vocabulary Builder ─── */}
          {activeTab === 'vocabulary' && (
            <motion.div
              key="vocabulary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Word of the Day */}
              <div className="card-base p-6 space-y-4 relative" style={{ borderLeft: `4px solid ${ACCENT}` }}>
                <div className="absolute top-4 right-4 flex gap-2">
                  <ReadAloudButton
                    text={`${englishWord.word}. Pronounced as ${englishWord.pronunciation}. Part of speech: ${englishWord.part_of_speech}. Meaning: ${englishWord.meaning}. Hindi translation: ${englishWord.hindi_meaning}`}
                    lang="en-IN"
                    size="sm"
                  />
                  <SutraNoteButton roomId="angrezi" roomName="Angrezi" contentTitle={englishWord.word} />
                  <RevisitButton roomId="angrezi" roomName="Angrezi" contentTitle={englishWord.word} contentSummary={englishWord.meaning} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Word of the Day</span>
                  <h2 className="font-serif font-bold text-3xl mt-1" style={{ color: 'var(--text-primary)' }}>{englishWord.word}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono text-[var(--text-muted)]">{englishWord.pronunciation}</span>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-bold text-white" style={{ background: ACCENT }}>{englishWord.part_of_speech}</span>
                  </div>
                </div>
                <p className="font-serif italic text-base leading-relaxed text-[var(--text-secondary)]">
                  &ldquo;{englishWord.meaning}&rdquo;
                </p>
                <div className="pt-2 border-t border-[var(--border-default)]">
                  <p className="font-devanagari text-sm font-semibold" style={{ color: ACCENT }}>
                    हिंदी अर्थ: {englishWord.hindi_meaning}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)]">Etymology & Context</p>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{englishWord.etymology}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)]">Usage in Context</p>
                  <p className="font-serif italic text-sm text-[var(--text-primary)]">&ldquo;{englishWord.usage_sentence}&rdquo;</p>
                </div>
              </div>

              {/* Rare & Beautiful Word */}
              <div className="card-base p-6 space-y-4 relative" style={{ borderLeft: `4px solid ${ACCENT}` }}>
                <div className="absolute top-4 right-4 flex gap-2">
                  <ReadAloudButton
                    text={`${rareWord.word}. Pronounced as ${rareWord.pronunciation}. Meaning: ${rareWord.meaning}.`}
                    lang="en-IN"
                    size="sm"
                  />
                  <SutraNoteButton roomId="angrezi" roomName="Angrezi" contentTitle={rareWord.word} />
                  <RevisitButton roomId="angrezi" roomName="Angrezi" contentTitle={rareWord.word} contentSummary={rareWord.meaning} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Rare & Beautiful Word</span>
                  <h2 className="font-serif font-bold text-3xl mt-1" style={{ color: 'var(--text-primary)' }}>{rareWord.word}</h2>
                  <span className="text-xs font-mono text-[var(--text-muted)]">{rareWord.pronunciation}</span>
                </div>
                <p className="font-serif italic text-base leading-relaxed text-[var(--text-secondary)]">
                  &ldquo;{rareWord.meaning}&rdquo;
                </p>
                <div className="pt-2 border-t border-[var(--border-default)]">
                  <p className="font-devanagari text-sm font-semibold" style={{ color: ACCENT }}>
                    हिंदी समकक्ष: {rareWord.hindi_equivalent}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)]">Why it Exists</p>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{rareWord.why_it_exists}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)]">Example Usage</p>
                  <p className="font-serif italic text-sm text-[var(--text-primary)]">&ldquo;{rareWord.usage}&rdquo;</p>
                </div>
              </div>

              {/* Related Word Families */}
              <div className="card-base p-5 space-y-3">
                <p className="section-label">Word Family & Synonyms</p>
                <p className="text-xs text-[var(--text-muted)]">Expand your vocabulary landscape by connecting related concepts:</p>
                <div className="flex flex-wrap gap-2">
                  {englishWord.synonyms.map(syn => (
                    <span key={syn} className="px-3 py-1 rounded-full text-xs" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)' }}>
                      {syn}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── TAB 2: Phrases & Idioms ─── */}
          {activeTab === 'phrase' && (
            <motion.div
              key="phrase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="card-base p-6 space-y-4 relative" style={{ borderLeft: `4px solid ${ACCENT}` }}>
                <div className="absolute top-4 right-4 flex gap-2">
                  <ReadAloudButton
                    text={`${phrase.phrase}. Meaning: ${phrase.meaning}. Origin: ${phrase.origin}`}
                    lang="en-IN"
                    size="sm"
                  />
                  <SutraNoteButton roomId="angrezi" roomName="Angrezi" contentTitle={phrase.phrase} />
                  <RevisitButton roomId="angrezi" roomName="Angrezi" contentTitle={phrase.phrase} contentSummary={phrase.meaning} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Daily Phrase & Idiom</span>
                  <h2 className="font-serif text-2xl font-bold mt-1 pr-8" style={{ color: 'var(--text-primary)' }}>{phrase.phrase}</h2>
                </div>
                <p className="font-serif italic text-base leading-relaxed text-[var(--text-secondary)]">
                  &ldquo;{phrase.meaning}&rdquo;
                </p>
                <div className="pt-2 border-t border-[var(--border-default)]">
                  <p className="font-devanagari text-sm font-semibold" style={{ color: ACCENT }}>
                    हिंदी समकक्ष: {phrase.hindi_equivalent}
                  </p>
                  <p className="text-xs italic text-[var(--text-muted)]">{phrase.hindi_equivalent_roman}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)]">Historical Origin</p>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{phrase.origin}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)]">In Practice</p>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-default)]">
                    <span className="text-xs font-bold mt-0.5" style={{ color: ACCENT }}>&ldquo;</span>
                    <p className="text-sm leading-relaxed font-serif italic text-[var(--text-primary)]">{phrase.usage}&rdquo;</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── TAB 3: Writing Clinic ─── */}
          {activeTab === 'writing' && (
            <motion.div
              key="writing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Think in English Drill */}
              <div className="card-base p-6 space-y-4">
                <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
                  <h3 className="font-serif text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Think in English / अनुवाद से बचें
                  </h3>
                  <ReadAloudButton
                    text={masteryEntry.thinkInEnglish.prompt}
                    lang="en-IN"
                    size="sm"
                  />
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {masteryEntry.thinkInEnglish.prompt}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/[0.03] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-red-500">Literal Translation (Avoid)</span>
                    <p className="text-sm font-serif italic text-[var(--text-primary)]">
                      &ldquo;{masteryEntry.thinkInEnglish.incorrectDesiLiteral}&rdquo;
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-emerald-500">Natural English (Say This)</span>
                    <p className="text-sm font-serif font-medium text-[var(--text-primary)]">
                      &ldquo;{masteryEntry.thinkInEnglish.correctNatural}&rdquo;
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-default)] text-xs leading-relaxed text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text-secondary)] block mb-1">Stylistic Rule:</span>
                  {masteryEntry.thinkInEnglish.explanation}
                </div>
              </div>

              {/* Common Indianism Correction */}
              <div className="card-base p-6 space-y-4">
                <h3 className="font-serif text-lg font-semibold border-b pb-2" style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}>
                  Common Indianism Correction / शुद्ध प्रयोग
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/[0.03] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-red-500">Incorrect Indianism</span>
                    <p className="text-sm font-serif italic text-[var(--text-primary)]">
                      &ldquo;{masteryEntry.desiCorrection.incorrect}&rdquo;
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-emerald-500">Standard English</span>
                    <p className="text-sm font-serif font-medium text-[var(--text-primary)]">
                      &ldquo;{masteryEntry.desiCorrection.correct}&rdquo;
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-default)] text-xs leading-relaxed text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text-secondary)] block mb-1">Grammar Rule:</span>
                  {masteryEntry.desiCorrection.why}
                </div>
              </div>

              {/* Interactive Practice Prompt */}
              <div className="card-base p-5 space-y-3">
                <p className="section-label" style={{ color: ACCENT }}>Writing Practice</p>
                <p className="text-xs text-[var(--text-secondary)]">
                  Try writing your own natural sentence based on the standard phrasing above. Write with focus and clarity.
                </p>
                <textarea
                  value={userPractice}
                  onChange={(e) => setUserPractice(e.target.value)}
                  placeholder="Type your practice sentence here..."
                  className="w-full min-h-[80px] p-3 text-sm rounded-xl border border-[var(--border-default)] bg-[var(--bg-tertiary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-saffron)] text-[var(--text-primary)]"
                />
                {userPractice && (
                  <p className="text-[10px] text-emerald-500 font-semibold animate-pulse">Saved to local practice notebook.</p>
                )}
              </div>
            </motion.div>
          )}

          {/* ─── TAB 4: Pronunciation ─── */}
          {activeTab === 'pronunciation' && (
            <motion.div
              key="pronunciation"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Daily Phonetic Drills */}
              <div className="card-base p-6 space-y-4">
                <h3 className="font-serif text-lg font-semibold border-b pb-2" style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}>
                  Phonetics & Syllable Stress
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">Practice pronouncing today's key words aloud, paying attention to the phonetic guides and stress symbols:</p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-default)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <p className="font-serif text-xl font-bold text-[var(--text-primary)]">{englishWord.word}</p>
                      <p className="text-xs font-mono mt-0.5 text-stone-500">Phonetic IPA: {englishWord.pronunciation}</p>
                      <p className="text-xs italic text-[var(--text-muted)] mt-1">Syllable stress falls on the capitalized/apostrophe syllable.</p>
                    </div>
                    <ReadAloudButton text={englishWord.word} lang="en-IN" size="sm" />
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-default)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <p className="font-serif text-xl font-bold text-[var(--text-primary)]">{rareWord.word}</p>
                      <p className="text-xs font-mono mt-0.5 text-stone-500">Phonetic IPA: {rareWord.pronunciation}</p>
                      <p className="text-xs italic text-[var(--text-muted)] mt-1">Syllable stress falls on the capitalized/apostrophe syllable.</p>
                    </div>
                    <ReadAloudButton text={rareWord.word} lang="en-IN" size="sm" />
                  </div>
                </div>
              </div>

              {/* Pronunciation Practice Tips */}
              <div className="card-base p-6 space-y-4">
                <h3 className="font-serif text-lg font-semibold border-b pb-2" style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}>
                  Daily Accent & Vocalization Tip
                </h3>
                <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    <strong style={{ color: ACCENT }}>The &quot;V&quot; vs. &quot;W&quot; Sound:</strong> In standard English, there is a clear distinction between the v (created by pressing the top teeth onto the bottom lip) and the w (created by rounding the lips into a circle, without any teeth contact).
                  </p>
                  <p>
                    Try reciting: <code className="px-1.5 py-0.5 rounded bg-[var(--bg-tertiary)] font-mono text-xs">&quot;Very well, we will verify the wind.&quot;</code> Focus on biting the lip for &quot;Very&quot; and &quot;verify&quot;, and rounding the lips for &quot;well&quot;, &quot;we&quot;, &quot;will&quot;, &quot;wind&quot;.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── TAB 5: Grammar & Mastery ─── */}
          {activeTab === 'mastery' && (
            <motion.div
              key="mastery"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 text-left"
            >
              {masteryEntry && (
                <>
                  {/* Concept Card */}
                  <div className="card-base p-6 space-y-4 relative" style={{ borderLeft: `4px solid ${ACCENT}` }}>
                    <div className="absolute top-4 right-4">
                      <ReadAloudButton
                        text={`${masteryEntry.concept}. ${masteryEntry.conceptExplanation}`}
                        lang="en-IN"
                        size="sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white" style={{ background: ACCENT }}>
                        {masteryEntry.theme}
                      </span>
                      <h2 className="font-serif text-2xl font-bold pt-1" style={{ color: 'var(--text-primary)' }}>{masteryEntry.concept}</h2>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {masteryEntry.conceptExplanation}
                    </p>
                  </div>

                  {/* Grammar Drills */}
                  <div className="card-base p-6 space-y-4">
                    <h3 className="font-serif text-lg font-semibold border-b pb-2" style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}>
                      Grammar Drills / अभ्यास
                    </h3>
                    <div className="space-y-6">
                      {masteryEntry.drills.map((drill, dIdx) => {
                        const selectedOption = drillAnswers[dIdx];
                        const isAnswered = selectedOption !== undefined;
                        return (
                          <div key={dIdx} className="space-y-2.5">
                            <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                              <span className="font-bold text-stone-500 mr-1.5">{dIdx + 1}.</span>
                              {drill.sentence}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {drill.options.map((opt) => {
                                const isOptSelected = selectedOption === opt;
                                const isCorrect = opt === drill.correctAnswer;
                                let btnStyle = {};

                                if (isOptSelected) {
                                  if (isCorrect) {
                                    btnStyle = { background: 'rgba(74, 124, 89, 0.15)', borderColor: '#4A7C59', color: '#4A7C59' };
                                  } else {
                                    btnStyle = { background: 'rgba(139, 58, 58, 0.15)', borderColor: '#8B3A3A', color: '#8B3A3A' };
                                  }
                                } else if (isAnswered && isCorrect) {
                                  btnStyle = { background: 'rgba(74, 124, 89, 0.08)', borderColor: '#4A7C59', color: '#4A7C59' };
                                }

                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    disabled={isAnswered}
                                    onClick={() => setDrillAnswers(prev => ({ ...prev, [dIdx]: opt }))}
                                    className="px-3.5 py-2 rounded-xl text-xs text-left border hover:bg-[var(--bg-tertiary)] transition-all font-medium disabled:pointer-events-none"
                                    style={btnStyle}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                            {isAnswered && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="p-3 rounded-lg text-xs space-y-1"
                                style={{
                                  background: 'var(--bg-tertiary)',
                                  borderLeft: `3px solid ${selectedOption === drill.correctAnswer ? '#4A7C59' : '#8B3A3A'}`
                                }}
                              >
                                <div className="flex items-center gap-1.5 font-bold mb-1">
                                  {selectedOption === drill.correctAnswer ? (
                                    <span style={{ color: '#4A7C59' }}>✓ Correct</span>
                                  ) : (
                                    <span style={{ color: '#8B3A3A' }}>✗ Incorrect (Correct: {drill.correctAnswer})</span>
                                  )}
                                </div>
                                <p style={{ color: 'var(--text-muted)' }}>{drill.explanation}</p>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dialogue Practice */}
                  <div className="card-base p-6 space-y-4">
                    <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
                      <h3 className="font-serif text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Dialogue Practice / संवाद अभ्यास
                      </h3>
                      <ReadAloudButton
                        text={`Context: ${masteryEntry.dialogue.context}. Speaker A: ${masteryEntry.dialogue.speakerA}. Speaker B: ${masteryEntry.dialogue.speakerB}.`}
                        lang="en-IN"
                        size="sm"
                      />
                    </div>
                    <p className="text-xs italic" style={{ color: 'var(--text-faint)' }}>
                      Context: {masteryEntry.dialogue.context}
                    </p>
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-col gap-1 items-start max-w-[85%] text-left">
                        <div className="bg-[var(--bg-tertiary)] p-3 rounded-2xl rounded-tl-none border border-[var(--border-default)]">
                          <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                            <span className="font-bold text-[var(--accent-saffron)] mr-1.5">A:</span>
                            {masteryEntry.dialogue.speakerA}
                          </p>
                          <p className="font-devanagari text-[11px] mt-1 pt-1 border-t border-dashed border-[var(--border-default)]" style={{ color: 'var(--text-muted)' }}>
                            {masteryEntry.dialogue.speakerA_trans}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 items-end max-w-[85%] ml-auto text-right">
                        <div className="bg-[color-mix(in srgb, var(--accent-moss) 8%, var(--bg-tertiary))] p-3 rounded-2xl rounded-tr-none border border-transparent" style={{ borderLeft: '2px solid var(--accent-moss)' }}>
                          <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                            <span className="font-bold text-emerald-500 mr-1.5">B:</span>
                            {masteryEntry.dialogue.speakerB}
                          </p>
                          <p className="font-devanagari text-[11px] mt-1 pt-1 border-t border-dashed border-[var(--border-default)]/40" style={{ color: 'var(--text-muted)' }}>
                            {masteryEntry.dialogue.speakerB_trans}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
