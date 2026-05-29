'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import FocusMode from '@/components/shared/FocusMode';
import { SROT_ENTRIES } from './data';

export default function SrotPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isFocusOpen, setIsFocusOpen] = useState(false);

  const activeIndex = getDayIndexForArray(currentDate, SROT_ENTRIES.length);
  const activeEntry = SROT_ENTRIES[activeIndex];

  const textToSpeak = `Before you read: ${activeEntry.before_you_read}. The Piece: ${activeEntry.the_piece}. After reading: ${activeEntry.after_you_read}`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6 select-none">
        
        {/* Header with Day Navigator */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Reading Companion</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>स्रोत - Srot</h1>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentDate.toISOString()}
            variants={FADE_UP}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Metadata Row */}
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                  {activeEntry.domain} · {activeEntry.domain_hi}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
                  ⏱️ {activeEntry.reading_time}
                </span>
                {(activeEntry.original_source || activeEntry.original_author) && (
                  <span className="text-xs italic" style={{ color: 'var(--text-faint)' }}>
                    Inspired by {activeEntry.original_author ? `${activeEntry.original_author} in ` : ''}{activeEntry.original_source}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                <RevisitButton roomId="srot" roomName="Srot" contentTitle={activeEntry.title} contentSummary={activeEntry.one_line} />
                <SutraNoteButton roomId="srot" roomName="Srot" contentTitle={activeEntry.title} />
                <button
                  onClick={() => setIsFocusOpen(true)}
                  className="px-3 py-1 rounded-full text-xs font-medium border transition-all hover:bg-bg-tertiary flex items-center gap-1.5 cursor-pointer"
                  style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)', background: 'var(--bg-primary)' }}
                >
                  Focus
                </button>
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2 text-center py-4">
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight" style={{ color: 'var(--text-primary)' }}>
                {activeEntry.title}
              </h2>
              {activeEntry.title_hi && (
                <p className="font-devanagari text-lg text-stone-500">
                  {activeEntry.title_hi}
                </p>
              )}
              <p className="text-base font-serif italic max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                {activeEntry.one_line}
              </p>
            </div>

            {/* Thin visual separator */}
            <div className="w-12 h-[1px] mx-auto bg-[var(--border-default)]" />

            {/* Summary Box */}
            {activeEntry.summary && (
              <div 
                className="p-5 border-l-4 rounded bg-[var(--bg-secondary)]" 
                style={{ borderColor: 'var(--accent-saffron)' }}
              >
                <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: 'var(--accent-saffron)' }}>
                  संक्षेप · In Brief
                </h4>
                <p className="font-serif italic text-lg leading-relaxed text-[var(--text-primary)]">
                  {activeEntry.summary}
                </p>
              </div>
            )}

            {/* Before You Read Prompt */}
            <div 
              className="p-4 rounded-xl max-w-2xl mx-auto border-l-2"
              style={{ 
                borderColor: 'var(--accent-saffron)',
                background: 'color-mix(in srgb, var(--accent-saffron) 3%, var(--bg-secondary))'
              }}
            >
              <span className="text-[10px] uppercase tracking-widest font-semibold block mb-1" style={{ color: 'var(--text-faint)' }}>
                Before you read -
              </span>
              <p className="text-sm italic" style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>
                {activeEntry.before_you_read}
              </p>
            </div>

            {/* Main Article Card (the_piece and after_you_read) */}
            <div className="bg-[var(--bg-secondary)] rounded-xl px-8 py-10 md:px-14 md:py-12 max-w-3xl mx-auto shadow-sm mt-4 space-y-8">
              {/* Main Essay Text */}
              <div className="font-sans text-base leading-relaxed text-justify" style={{ color: 'var(--text-secondary)' }}>
                <div className="space-y-6">
                  {activeEntry.the_piece.split('\n\n').map((para: string, i: number) => (
                    <p key={i} className="text-base leading-[1.9]" style={{ color: 'var(--text-secondary)' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* thin separator */}
              <hr className="my-8 border-[var(--text-muted)] opacity-20" />

              {/* After You Read Reflection */}
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-sans uppercase tracking-widest text-center" style={{ color: 'var(--text-muted)' }}>
                  After reading —
                </span>
                <p
                  className="font-serif italic text-xl leading-relaxed text-center"
                  style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}
                >
                  &ldquo;{activeEntry.after_you_read}&rdquo;
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Focus Mode Component */}
        <FocusMode
          isOpen={isFocusOpen}
          onClose={() => setIsFocusOpen(false)}
          title={activeEntry.title}
          author={activeEntry.one_line}
          textToSpeak={activeEntry.the_piece}
        >
          <div className="max-w-xl mx-auto space-y-6 text-justify text-lg leading-relaxed font-serif">
            {activeEntry.the_piece.split('\n\n').map((para: string, idx: number) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </FocusMode>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            True reading is a dialogue. What did the text say, and what did you answer?
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
