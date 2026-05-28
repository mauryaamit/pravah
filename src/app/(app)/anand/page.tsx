'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { ANAND_ENTRIES, AnandEntry } from './data';
import { HelpCircle, RefreshCw, Smile, Sparkles, Quote } from 'lucide-react';

export default function AnandPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [jokeRevealed, setJokeRevealed] = useState(false);
  const [riddleRevealed, setRiddleRevealed] = useState(false);

  // Reset reveal states when date changes
  useEffect(() => {
    setJokeRevealed(false);
    setRiddleRevealed(false);
  }, [currentDate]);

  const activeIndex = getDayIndexForArray(currentDate, ANAND_ENTRIES.length);
  const entry = ANAND_ENTRIES[activeIndex];

  const textToSpeak = `Joy Room. Today's Joke: ${entry.joke.setup}. Riddle: ${entry.riddle.question}. Fact: ${entry.fun_fact.fact}. Daily Wit: ${entry.sarcasm_or_wit.observation}.`;

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Joy Room</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>आनंद - Anand</h1>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Laughter and curiosity are fuel for the brain. Cultivate joy through jokes, riddles, facts, and wit.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
            <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentDate.toISOString()}
            variants={FADE_UP}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Card 1: Joke of the Day */}
            <div
              className="card-base p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-md border-l-4"
              style={{ borderLeftColor: 'var(--accent-saffron)', background: 'color-mix(in srgb, var(--accent-saffron) 3%, var(--bg-secondary))' }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-muted)] flex items-center gap-1.5">
                    <Smile size={14} className="text-amber-500" />
                    <span>आज का परिहास · Joke ({entry.joke.type})</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="font-serif text-base leading-relaxed text-[var(--text-primary)]">
                    {entry.joke.setup}
                  </p>
                  {entry.joke.setup_hi && (
                    <p className="font-devanagari text-sm text-[var(--text-secondary)] leading-relaxed">
                      {entry.joke.setup_hi}
                    </p>
                  )}
                </div>
              </div>

              {/* Joke Reveal Box */}
              <div className="relative min-h-[90px] rounded-xl border p-4 flex flex-col items-center justify-center text-center overflow-hidden" 
                   style={{ 
                     borderColor: 'var(--border-default)', 
                     background: 'var(--bg-tertiary)' 
                   }}>
                <AnimatePresence mode="wait">
                  {!jokeRevealed ? (
                    <motion.div
                      key="joke-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2 z-10"
                    >
                      <button
                        onClick={() => setJokeRevealed(true)}
                        className="px-4 py-1.5 rounded-full text-[10px] font-semibold shadow-sm hover:scale-105 transition-all cursor-pointer"
                        style={{ background: 'var(--accent-saffron)', color: 'white' }}
                      >
                        Reveal Punchline
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="joke-revealed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3 w-full"
                    >
                      <div className="space-y-1">
                        <p className="font-serif text-sm font-semibold text-[var(--text-primary)]">
                          {entry.joke.punchline}
                        </p>
                        {entry.joke.punchline_hi && (
                          <p className="font-devanagari text-xs text-[var(--text-secondary)]">
                            {entry.joke.punchline_hi}
                          </p>
                        )}
                      </div>
                      
                      <button
                        onClick={() => setJokeRevealed(false)}
                        className="flex items-center gap-1 mx-auto text-[9px] uppercase font-bold text-[var(--text-faint)] hover:text-[var(--text-muted)] transition-colors cursor-pointer"
                      >
                        <RefreshCw size={8} />
                        Hide
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Card 2: Riddle of the Day */}
            <div
              className="card-base p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-md border-l-4"
              style={{ borderLeftColor: 'var(--accent-saffron)', background: 'color-mix(in srgb, var(--accent-saffron) 3%, var(--bg-secondary))' }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-muted)] flex items-center gap-1.5">
                    <HelpCircle size={14} className="text-blue-500" />
                    <span>आज की पहेली · Riddle: {entry.riddle.title} · {entry.riddle.title_hi}</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="font-serif text-base leading-relaxed text-[var(--text-primary)]">
                    {entry.riddle.question}
                  </p>
                  <p className="font-devanagari text-sm text-[var(--text-secondary)] leading-relaxed">
                    {entry.riddle.question_hi}
                  </p>
                </div>
              </div>

              {/* Riddle Reveal Box */}
              <div className="relative min-h-[90px] rounded-xl border p-4 flex flex-col items-center justify-center text-center overflow-hidden" 
                   style={{ 
                     borderColor: 'var(--border-default)', 
                     background: 'var(--bg-tertiary)' 
                   }}>
                <AnimatePresence mode="wait">
                  {!riddleRevealed ? (
                    <motion.div
                      key="riddle-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2 z-10"
                    >
                      <button
                        onClick={() => setRiddleRevealed(true)}
                        className="px-4 py-1.5 rounded-full text-[10px] font-semibold shadow-sm hover:scale-105 transition-all cursor-pointer"
                        style={{ background: 'var(--accent-saffron)', color: 'white' }}
                      >
                        Reveal Answer
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="riddle-revealed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3 w-full"
                    >
                      <div className="space-y-1">
                        <p className="font-serif text-sm font-semibold text-[var(--text-primary)]">
                          {entry.riddle.reveal}
                        </p>
                        <p className="font-devanagari text-xs text-[var(--text-secondary)]">
                          {entry.riddle.reveal_hi}
                        </p>
                      </div>
                      
                      <button
                        onClick={() => setRiddleRevealed(false)}
                        className="flex items-center gap-1 mx-auto text-[9px] uppercase font-bold text-[var(--text-faint)] hover:text-[var(--text-muted)] transition-colors cursor-pointer"
                      >
                        <RefreshCw size={8} />
                        Hide
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Card 3: Delightful Fact */}
            <div
              className="card-base p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-md border-l-4"
              style={{ borderLeftColor: 'var(--accent-saffron)', background: 'color-mix(in srgb, var(--accent-saffron) 3%, var(--bg-secondary))' }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-muted)] flex items-center gap-1.5">
                    <Sparkles size={14} className="text-purple-500" />
                    <span>आज का तथ्य · Delightful Fact</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs leading-relaxed text-[var(--text-primary)]">
                    {entry.fun_fact.fact}
                  </p>
                  {entry.fun_fact.fact_hi && (
                    <p className="font-devanagari text-xs text-[var(--text-secondary)] leading-relaxed">
                      {entry.fun_fact.fact_hi}
                    </p>
                  )}
                </div>
              </div>

              {/* Delightful Note */}
              <div className="p-3 rounded-xl border border-stone-200/60 bg-white/40 backdrop-blur-sm space-y-1">
                <span className="text-[9px] uppercase tracking-wider font-bold text-purple-600 flex items-center gap-1">
                  <Sparkles size={10} />
                  <span>Why it is delightful</span>
                </span>
                <p className="text-xs font-serif italic text-stone-700">
                  {entry.fun_fact.why_delightful}
                </p>
              </div>
            </div>

            {/* Card 4: Sarcasm or Wit */}
            <div
              className="card-base p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-md border-l-4"
              style={{ borderLeftColor: 'var(--accent-saffron)', background: 'color-mix(in srgb, var(--accent-saffron) 3%, var(--bg-secondary))' }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-muted)] flex items-center gap-1.5">
                    <Quote size={14} className="text-rose-500" />
                    <span>दैनिक व्यंग्य · Wit & Sarcasm</span>
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="border-l-2 border-stone-300 pl-3 py-1 space-y-1">
                    <p className="font-serif italic text-sm text-[var(--text-primary)]">
                      &ldquo;{entry.sarcasm_or_wit.observation}&rdquo;
                    </p>
                    {entry.sarcasm_or_wit.observation_hi && (
                      <p className="font-devanagari text-xs text-[var(--text-secondary)] italic">
                        &ldquo;{entry.sarcasm_or_wit.observation_hi}&rdquo;
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] italic font-semibold text-[var(--text-muted)]">
                  — {entry.sarcasm_or_wit.attribution || 'Anonymous'}
                </span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-xs" style={{ color: 'var(--text-faint)' }}>
            Joy is not in things; it is in us. Keep playing and learning.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
