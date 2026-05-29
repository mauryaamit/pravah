'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { getDayOfYear } from '@/lib/utils/date';
import {
  ENGLISH_WORDS,
  HINDI_WORDS,
  ENGLISH_PHRASES,
  RARE_WORDS,
  LANGUAGE_STORIES,
  MODERN_TERMS,
  ENGLISH_MASTERY_ENTRIES,
} from './data';

type BhashaTab = 'english' | 'hindi' | 'phrase' | 'story' | 'modern' | 'mastery';

const TABS: { id: BhashaTab; label: string; labelHindi: string }[] = [
  { id: 'english', label: 'English Word', labelHindi: 'अंग्रेजी शब्द' },
  { id: 'hindi', label: 'Hindi Word', labelHindi: 'हिंदी शब्द' },
  { id: 'phrase', label: 'Phrase & Idiom', labelHindi: 'मुहावरा' },
  { id: 'story', label: 'Language Story', labelHindi: 'भाषा की कहानी' },
  { id: 'modern', label: 'Modern Language', labelHindi: 'आधुनिक भाषा' },
  { id: 'mastery', label: 'Mastery', labelHindi: 'निपुणता' },
];

const ACCENT = '#B8860B';
const ACCENT_LIGHT = 'color-mix(in srgb, #B8860B 8%, var(--bg-secondary))';

export default function AngrezePage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<BhashaTab>('english');

  // Mastery sub-states
  const [drillAnswers, setDrillAnswers] = useState<Record<number, string>>({});
  const [revealThink, setRevealThink] = useState(false);

  // Reset mastery states on date change
  useEffect(() => {
    setDrillAnswers({});
    setRevealThink(false);
  }, [currentDate]);

  const dayIndex = getDayOfYear(currentDate) - 1;

  const englishWord = ENGLISH_WORDS[dayIndex % ENGLISH_WORDS.length];
  const hindiWord = HINDI_WORDS[dayIndex % HINDI_WORDS.length];
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
            <p className="section-label">Language Room</p>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>अंग्रेज़ी - Angrezi</h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              English as a living language - its words, structures, and the craft of using it well.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
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
              className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: activeTab === tab.id ? ACCENT : 'var(--bg-tertiary)',
                color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                border: `1px solid ${activeTab === tab.id ? ACCENT : 'var(--border-default)'}`,
              }}
            >
              <span className="font-devanagari">{tab.labelHindi}</span>
              <span className="hidden sm:inline"> / {tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">

          {/* ─── TAB 1: English Word ─── */}
          {activeTab === 'english' && (
            <motion.div
              key="english"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Word card */}
              <div className="card-base p-7 text-center space-y-3 relative" style={{ background: ACCENT_LIGHT, borderLeft: `4px solid ${ACCENT}` }}>
                <div className="absolute top-4 right-4">
                  <ReadAloudButton
                    text={`${englishWord.word}. ${englishWord.meaning}. ${englishWord.usage_sentence}`}
                    lang="en-IN"
                    size="sm"
                    variant="icon"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="font-serif font-bold text-4xl" style={{ color: 'var(--text-primary)' }}>{englishWord.word}</h2>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
                    <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>{englishWord.pronunciation}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold" style={{ background: ACCENT, color: 'white' }}>{englishWord.part_of_speech}</span>
                  </div>
                </div>
                <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{englishWord.meaning}&rdquo;
                </p>
                {/* Hindi meaning */}
                <p className="font-devanagari text-sm pt-1" style={{ color: ACCENT }}>
                  अर्थ: {englishWord.hindi_meaning}
                </p>
              </div>

              {/* Etymology */}
              <div className="card-base p-5 space-y-2">
                <p className="section-label">Etymology - Where This Word Came From</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.85' }}>{englishWord.etymology}</p>
              </div>

              {/* Usage */}
              <div className="card-base p-5 space-y-2">
                <p className="section-label">In a Sentence</p>
                <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  &ldquo;{englishWord.usage_sentence}&rdquo;
                </p>
              </div>

              {/* Synonyms */}
              <div className="card-base p-4 space-y-2">
                <p className="section-label">Related Words</p>
                <div className="flex flex-wrap gap-2">
                  {englishWord.synonyms.map(s => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)', border: '1px solid var(--border-default)' }}>{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── TAB 2: Hindi Word ─── */}
          {activeTab === 'hindi' && (
            <motion.div
              key="hindi"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Word card */}
              <div className="card-base p-7 text-center space-y-3 relative" style={{ background: ACCENT_LIGHT, borderLeft: `4px solid ${ACCENT}` }}>
                <div className="absolute top-4 right-4">
                  <ReadAloudButton
                    text={`${hindiWord.word}. ${hindiWord.hindi_meaning}. ${hindiWord.example}`}
                    lang="hi-IN"
                    size="sm"
                    variant="icon"
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="font-devanagari font-bold" style={{ fontSize: '3.5rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>{hindiWord.word}</h2>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="font-serif italic text-xl" style={{ color: 'var(--text-secondary)' }}>{hindiWord.roman}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold" style={{ background: ACCENT, color: 'white' }}>{hindiWord.part_of_speech}</span>
                  </div>
                </div>
                <div className="border-t pt-3" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {hindiWord.meaning}
                  </p>
                </div>
              </div>

              {/* Hindi meaning */}
              <div className="card-base p-5 space-y-2" style={{ borderLeft: `4px solid ${ACCENT}` }}>
                <p className="section-label">अर्थ - Arth</p>
                <p className="font-devanagari text-base leading-relaxed" style={{ color: 'var(--text-primary)', lineHeight: '1.9' }}>
                  {hindiWord.hindi_meaning}
                </p>
              </div>

              {/* Example */}
              <div className="card-base p-5 space-y-2">
                <p className="section-label">उदाहरण - Example</p>
                <p className="font-devanagari text-base italic leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                  &ldquo;{hindiWord.example}&rdquo;
                </p>
              </div>

              {/* Etymology */}
              <div className="card-base p-5 space-y-2">
                <p className="section-label">Where This Word Comes From</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.85' }}>{hindiWord.etymology}</p>
              </div>
            </motion.div>
          )}

          {/* ─── TAB 3: Phrase & Idiom ─── */}
          {activeTab === 'phrase' && (
            <motion.div
              key="phrase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Phrase hero */}
              <div className="card-base p-6 space-y-3 relative" style={{ background: ACCENT_LIGHT, borderLeft: `4px solid ${ACCENT}` }}>
                <div className="absolute top-4 right-4">
                  <ReadAloudButton
                    text={`${phrase.phrase}. ${phrase.meaning}. ${phrase.usage}`}
                    lang="en-IN"
                    size="sm"
                    variant="icon"
                  />
                </div>
                <p className="section-label">Phrase & Idiom of the Day</p>
                <h2 className="font-serif text-2xl font-bold pr-8" style={{ color: 'var(--text-primary)' }}>{phrase.phrase}</h2>
                <p className="font-serif italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{phrase.meaning}&rdquo;
                </p>
              </div>

              {/* Hindi equivalent */}
              <div className="card-base p-5 space-y-2" style={{ borderLeft: `4px solid ${ACCENT}` }}>
                <p className="section-label">Hindi Equivalent - हिंदी समकक्ष</p>
                <p className="font-devanagari text-lg font-medium" style={{ color: ACCENT }}>{phrase.hindi_equivalent}</p>
                <p className="text-sm italic" style={{ color: 'var(--text-muted)' }}>{phrase.hindi_equivalent_roman}</p>
              </div>

              {/* Origin */}
              <div className="card-base p-5 space-y-2">
                <p className="section-label">Origin - इसकी कहानी</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.85' }}>{phrase.origin}</p>
              </div>

              {/* Usage */}
              <div className="card-base p-5 space-y-2">
                <p className="section-label">In Context</p>
                <div className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
                  <span className="text-xs font-bold mt-0.5" style={{ color: ACCENT }}>&ldquo;</span>
                  <p className="text-sm leading-relaxed font-serif italic" style={{ color: 'var(--text-primary)' }}>{phrase.usage}&rdquo;</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── TAB 4: Language Story ─── */}
          {activeTab === 'story' && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Story header */}
              <div className="card-base p-6 space-y-3 relative" style={{ background: ACCENT_LIGHT, borderLeft: `4px solid ${ACCENT}` }}>
                <div className="absolute top-4 right-4">
                  <ReadAloudButton
                    text={`${story.word}. ${story.story}`}
                    lang={story.language === 'Hindi / Punjabi' || story.language === 'Sanskrit' ? 'hi-IN' : 'en-IN'}
                    size="sm"
                    variant="icon"
                  />
                </div>
                <p className="section-label">Language Story - भाषा की कहानी</p>
                <div className="space-y-1">
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{story.language}</p>
                  <h2 className="font-serif text-2xl font-bold pr-8" style={{ color: 'var(--text-primary)' }}>{story.title}</h2>
                  {story.script && story.script !== story.word && (
                    <p className="font-devanagari text-3xl" style={{ color: ACCENT }}>{story.script}</p>
                  )}
                  <p className="font-serif text-xl italic" style={{ color: 'var(--text-secondary)' }}>{story.word}</p>
                </div>
              </div>

              {/* Story text */}
              <div className="card-base p-6 space-y-3">
                <p className="section-label">The Story</p>
                <div className="space-y-4">
                  {story.story.split('\n\n').map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Usage examples */}
              <div className="card-base p-5 space-y-3">
                <p className="section-label">The Word in Use</p>
                {story.usage_examples.map((sentence, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
                    <span className="text-xs font-bold mt-0.5" style={{ color: ACCENT }}>{i + 1}</span>
                    <p className="text-sm leading-relaxed font-serif italic" style={{ color: 'var(--text-primary)' }}>&ldquo;{sentence}&rdquo;</p>
                  </div>
                ))}
              </div>

              {/* Cultural note */}
              <div className="card-base p-5 space-y-2" style={{ background: 'color-mix(in srgb, #6A3A8A 6%, var(--bg-secondary))' }}>
                <p className="section-label" style={{ color: '#6A3A8A' }}>Why This Word Matters</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.85' }}>{story.cultural_note}</p>
              </div>
            </motion.div>
          )}

          {/* ─── TAB 5: Modern Language ─── */}
          {activeTab === 'modern' && (
            <motion.div
              key="modern"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Term card */}
              <div className="card-base p-6 space-y-3 relative" style={{ background: ACCENT_LIGHT, borderLeft: `4px solid ${ACCENT}` }}>
                <div className="absolute top-4 right-4">
                  <ReadAloudButton
                    text={`${modernTerm.term}. ${modernTerm.meaning}. ${modernTerm.example}`}
                    lang="en-IN"
                    size="sm"
                    variant="icon"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="section-label">Modern Language - आधुनिक भाषा</p>
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-zinc-800 text-zinc-100">Gen Z / Internet</span>
                </div>
                <h2 className="font-serif text-3xl font-bold pr-8" style={{ color: 'var(--text-primary)' }}>{modernTerm.term}</h2>
                <p className="font-serif italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {modernTerm.meaning}
                </p>
                {/* Hindi meaning */}
                <p className="font-devanagari text-sm" style={{ color: ACCENT }}>
                  हिंदी में: {modernTerm.hindi_meaning}
                </p>
                {modernTerm.desi_equivalent && (
                  <p className="text-xs italic" style={{ color: 'var(--text-muted)' }}>
                    Desi equivalent: "{modernTerm.desi_equivalent}"
                  </p>
                )}
              </div>

              {/* Origin */}
              <div className="card-base p-5 space-y-2">
                <p className="section-label">Where It Came From</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.85' }}>{modernTerm.origin}</p>
              </div>

              {/* Example */}
              <div className="card-base p-5 space-y-2">
                <p className="section-label">Heard It Used Like This</p>
                <div className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
                  <span className="text-xs font-bold mt-0.5" style={{ color: ACCENT }}>&ldquo;</span>
                  <p className="text-sm leading-relaxed font-serif italic" style={{ color: 'var(--text-primary)' }}>{modernTerm.example}&rdquo;</p>
                </div>
              </div>

              {/* Linguist's note */}
              <div className="card-base p-5 space-y-2" style={{ background: 'color-mix(in srgb, #3A5A8A 6%, var(--bg-secondary))' }}>
                <p className="section-label" style={{ color: '#3A5A8A' }}>The Linguist's Note</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.85' }}>{modernTerm.note}</p>
              </div>
            </motion.div>
          )}

          {/* ─── TAB 6: Mastery ─── */}
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
                  <div className="card-base p-6 space-y-4 relative" style={{ background: ACCENT_LIGHT, borderLeft: `4px solid ${ACCENT}` }}>
                    <div className="absolute top-4 right-4">
                      <ReadAloudButton
                        text={`${masteryEntry.concept}. ${masteryEntry.conceptExplanation}`}
                        lang="en-IN"
                        size="sm"
                        variant="icon"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#B8860B]" style={{ background: ACCENT }}>
                        {masteryEntry.theme}
                      </span>
                      <h2 className="font-serif text-2xl font-bold pt-1" style={{ color: 'var(--text-primary)' }}>{masteryEntry.concept}</h2>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {masteryEntry.conceptExplanation}
                    </p>
                  </div>

                  {/* 4 Progressive Drills */}
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

                  {/* Dialogue Conversation */}
                  <div className="card-base p-6 space-y-4">
                    <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
                      <h3 className="font-serif text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Dialogue Practice / संवाद अभ्यास
                      </h3>
                      <ReadAloudButton
                        text={`Context: ${masteryEntry.dialogue.context}. Speaker A: ${masteryEntry.dialogue.speakerA}. Speaker B: ${masteryEntry.dialogue.speakerB}.`}
                        lang="en-IN"
                        size="sm"
                        variant="icon"
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

                  {/* Think in English Card */}
                  <div className="card-base p-6 space-y-4">
                    <h3 className="font-serif text-lg font-semibold border-b pb-2" style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}>
                      Think in English / अनुवाद से बचें
                    </h3>
                    <div className="space-y-3">
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {masteryEntry.thinkInEnglish.prompt}
                      </p>
                      <button
                        type="button"
                        onClick={() => setRevealThink(prev => !prev)}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all font-medium hover:opacity-90"
                        style={{ background: ACCENT }}
                      >
                        {revealThink ? 'Hide Analysis' : 'Reveal Phrasing'}
                      </button>

                      <AnimatePresence>
                        {revealThink && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-2 overflow-hidden space-y-3"
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                              <div className="p-3.5 rounded-xl border border-red-500/20 bg-red-500/[0.04] space-y-1 text-left">
                                <span className="text-[10px] uppercase font-bold text-red-500">Incorrect Desi Literal</span>
                                <p className="text-sm font-serif italic" style={{ color: 'var(--text-primary)' }}>
                                  &ldquo;{masteryEntry.thinkInEnglish.incorrectDesiLiteral}&rdquo;
                                </p>
                              </div>
                              <div className="p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] space-y-1 text-left">
                                <span className="text-[10px] uppercase font-bold text-emerald-500">Natural English</span>
                                <p className="text-sm font-serif font-medium" style={{ color: 'var(--text-primary)' }}>
                                  &ldquo;{masteryEntry.thinkInEnglish.correctNatural}&rdquo;
                                </p>
                              </div>
                            </div>
                            <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-default)] text-xs leading-relaxed text-left animate-fade-in" style={{ color: 'var(--text-muted)' }}>
                              <p className="font-semibold text-[var(--text-secondary)] mb-1">Why this matters:</p>
                              {masteryEntry.thinkInEnglish.explanation}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Desi English Corrections */}
                  <div className="card-base p-6 space-y-4">
                    <h3 className="font-serif text-lg font-semibold border-b pb-2" style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}>
                      Common Indianism Correction / शुद्ध प्रयोग
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/[0.04] space-y-1 text-left">
                        <span className="text-[10px] uppercase font-bold text-red-500">Avoid (Indianism)</span>
                        <p className="text-sm font-serif italic" style={{ color: 'var(--text-primary)' }}>
                          &ldquo;{masteryEntry.desiCorrection.incorrect}&rdquo;
                        </p>
                      </div>
                      <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] space-y-1 text-left">
                        <span className="text-[10px] uppercase font-bold text-emerald-500">Say Instead (Standard)</span>
                        <p className="text-sm font-serif font-medium" style={{ color: 'var(--text-primary)' }}>
                          &ldquo;{masteryEntry.desiCorrection.correct}&rdquo;
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-default)] text-xs leading-relaxed text-left" style={{ color: 'var(--text-muted)' }}>
                      <span className="font-semibold text-[var(--text-secondary)] block mb-1">Grammar Rule:</span>
                      {masteryEntry.desiCorrection.why}
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
