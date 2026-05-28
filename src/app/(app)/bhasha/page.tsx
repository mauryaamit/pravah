'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import { getDayOfYear } from '@/lib/utils/date';
import {
  ENGLISH_WORDS,
  HINDI_WORDS,
  ENGLISH_PHRASES,
  RARE_WORDS,
  LANGUAGE_STORIES,
  MODERN_TERMS,
} from './data';

type BhashaTab = 'english' | 'hindi' | 'phrase' | 'story' | 'modern';

const TABS: { id: BhashaTab; label: string; labelHindi: string }[] = [
  { id: 'english', label: 'English Word', labelHindi: 'अंग्रेजी शब्द' },
  { id: 'hindi', label: 'Hindi Word', labelHindi: 'हिंदी शब्द' },
  { id: 'phrase', label: 'Phrase & Idiom', labelHindi: 'मुहावरा' },
  { id: 'story', label: 'Language Story', labelHindi: 'भाषा की कहानी' },
  { id: 'modern', label: 'Modern Language', labelHindi: 'आधुनिक भाषा' },
];

const ACCENT = '#B8860B';
const ACCENT_LIGHT = 'color-mix(in srgb, #B8860B 8%, var(--bg-secondary))';

export default function BhashaPage() {
  const dayIndex = getDayOfYear() - 1;
  const [activeTab, setActiveTab] = useState<BhashaTab>('english');

  const englishWord = ENGLISH_WORDS[dayIndex % ENGLISH_WORDS.length];
  const hindiWord = HINDI_WORDS[dayIndex % HINDI_WORDS.length];
  const phrase = ENGLISH_PHRASES[dayIndex % ENGLISH_PHRASES.length];
  const rareWord = RARE_WORDS[dayIndex % RARE_WORDS.length];
  const story = LANGUAGE_STORIES[dayIndex % LANGUAGE_STORIES.length];
  const modernTerm = MODERN_TERMS[dayIndex % MODERN_TERMS.length];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <p className="section-label">Language Room</p>
          <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>भाषा - Bhasha</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Language is not just how we communicate. It is how we think. Every word is a civilization compressed into sound.
          </p>
        </motion.div>

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

        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
