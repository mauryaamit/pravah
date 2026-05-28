'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray, toDateString } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { isToday } from 'date-fns';
import { NEELAKURINJI_ENTRIES } from './data';
import { Sparkles } from 'lucide-react';

export default function NeelakurinjiPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isBloomed, setIsBloomed] = useState(true); // default to true, set correctly in useEffect

  const isDateToday = isToday(currentDate);
  const activeIndex = getDayIndexForArray(currentDate, NEELAKURINJI_ENTRIES.length);
  const selected = NEELAKURINJI_ENTRIES[activeIndex];

  // Resolve bloom state based on date and localStorage
  useEffect(() => {
    if (!isDateToday) {
      setIsBloomed(true);
    } else {
      const dateKey = toDateString(currentDate);
      const savedState = localStorage.getItem(`neelakurinji_bloomed_${dateKey}`);
      setIsBloomed(savedState === 'true');
    }
  }, [currentDate, isDateToday]);

  const handleBloom = () => {
    setIsBloomed(true);
    if (isDateToday) {
      const dateKey = toDateString(currentDate);
      localStorage.setItem(`neelakurinji_bloomed_${dateKey}`, 'true');
    }
  };

  const textToSpeak = `${selected.title}. ${selected.teaser}. ${selected.content}`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6 select-none">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Wonder Room</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>नीलकुरिंजी - Neelakurinji</h1>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Named for the flower that blooms once in 12 years. Rare, unexpected, and astonishing.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
        </div>

        <AnimatePresence mode="wait">
          {!isBloomed ? (
            <motion.div
              key="closed-bud"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-20 text-center space-y-8"
            >
              {/* Pulsing Bud Animation Container */}
              <div className="relative flex items-center justify-center">
                {/* Glow ring 1 */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.4, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-28 h-28 rounded-full"
                  style={{ background: 'radial-gradient(circle, var(--accent-moonblue) 0%, transparent 70%)' }}
                />
                {/* Glow ring 2 */}
                <motion.div
                  animate={{ scale: [1.2, 1.6, 1.2], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute w-36 h-36 rounded-full"
                  style={{ background: 'radial-gradient(circle, #7B6BA6 0%, transparent 70%)' }}
                />

                {/* Main Bud Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBloom}
                  className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  style={{ 
                    background: 'linear-gradient(135deg, #7B6BA6 0%, var(--accent-moonblue) 100%)',
                    boxShadow: '0 0 20px rgba(123, 107, 166, 0.3)'
                  }}
                >
                  <Sparkles size={28} className="text-white animate-pulse" />
                </motion.button>
              </div>

              <div className="space-y-2 max-w-sm">
                <h2 className="font-serif text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                  The flower blooms once in a cycle.
                </h2>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Tap the pulsing bud to unveil today's hidden wonder of the universe.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="bloomed-wonder"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Content metadata card */}
              <div className="card-base p-6 space-y-3 relative" style={{ borderLeft: '4px solid #7B6BA6', background: 'color-mix(in srgb, #7B6BA6 5%, var(--bg-secondary))' }}>
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider" style={{ color: '#7B6BA6' }}>
                      {selected.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] leading-tight">
                      {selected.title}
                    </h2>
                    <p className="font-devanagari text-base text-[var(--text-muted)]">
                      {selected.titleHindi}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                    <RevisitButton roomId="neelakurinji" roomName="Neelakurinji" contentTitle={selected.title} contentSummary={selected.teaser} />
                    <SutraNoteButton roomId="neelakurinji" roomName="Neelakurinji" contentTitle={selected.title} />
                  </div>
                </div>

                <div className="border-t pt-3 mt-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <p className="font-serif italic text-base leading-relaxed text-[var(--text-secondary)]">
                    {selected.teaser}
                  </p>
                </div>
              </div>

              {/* Story/Content Card */}
              <div className="card-base p-6 sm:p-8">
                <div className="space-y-5 text-justify" style={{ color: 'var(--text-secondary)' }}>
                  {selected.content.split('\n\n').map((para: string, i: number) => (
                    <p key={i} className="text-sm leading-relaxed" style={{ lineHeight: 1.85 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Impossible Fact Panel */}
              <div className="card-base p-5" style={{ background: 'color-mix(in srgb, #7B6BA6 8%, var(--bg-secondary))', borderColor: '#7B6BA6', border: '1px solid' }}>
                <p className="section-label mb-2" style={{ color: '#7B6BA6' }}>The Impossible Fact</p>
                <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {selected.wonder}
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            Wonder is the beginning of wisdom. What surprises you changes you.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
