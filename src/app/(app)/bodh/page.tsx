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
import { BODH_ENTRIES } from './data';

export default function BodhPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const activeIndex = getDayIndexForArray(currentDate, BODH_ENTRIES.length);
  const activeEntry = BODH_ENTRIES[activeIndex];

  const textToSpeak = `${activeEntry.idea_title}. The Idea: ${activeEntry.the_idea}. Why it matters now: ${activeEntry.why_it_matters_now}. Question: ${activeEntry.open_question}.`;

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6 select-none">
        
        {/* Header with Day Navigator */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Learning Spark</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>बोध - Bodh</h1>
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
            {/* Top row with domain badge and actions */}
            <div className="flex justify-between items-center flex-wrap gap-3">
              <span
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
              >
                {activeEntry.domain} · {activeEntry.domain_hi}
              </span>

              <div className="flex items-center gap-2">
                <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                <RevisitButton roomId="bodh" roomName="Bodh" contentTitle={activeEntry.idea_title} contentSummary={activeEntry.domain} />
                <SutraNoteButton roomId="bodh" roomName="Bodh" contentTitle={activeEntry.idea_title} />
              </div>
            </div>

            {/* Idea Title */}
            <div className="space-y-1">
              <h2 className="font-serif text-3xl font-light" style={{ color: 'var(--text-primary)' }}>
                {activeEntry.idea_title}
              </h2>
              {activeEntry.idea_title_hi && (
                <p className="font-devanagari text-lg" style={{ color: 'var(--text-secondary)' }}>
                  {activeEntry.idea_title_hi}
                </p>
              )}
            </div>

            {/* Summary Box */}
            {activeEntry.summary && (
              <div 
                className="p-5 border-l-4 rounded bg-[var(--bg-secondary)]" 
                style={{ borderColor: 'var(--accent-saffron)' }}
              >
                <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: 'var(--accent-saffron)' }}>
                  संक्षेप · In Brief
                </h4>
                <p className="font-serif italic text-base leading-relaxed text-[var(--text-primary)]">
                  {activeEntry.summary}
                </p>
              </div>
            )}

            {/* The core idea text */}
            <div className="card-base p-6 space-y-4">
              <h3 className="section-label uppercase tracking-widest text-xs" style={{ color: 'var(--accent-saffron)' }}>
                The Idea
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                {activeEntry.the_idea}
              </p>
            </div>

            {/* Why It Matters Now */}
            <div 
              className="card-base p-6" 
              style={{ 
                background: 'color-mix(in srgb, var(--accent-saffron) 4%, var(--bg-secondary))',
                border: '1px solid color-mix(in srgb, var(--accent-saffron) 12%, transparent)'
              }}
            >
              <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: 'var(--accent-saffron)' }}>
                Why It Matters Now
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>
                {activeEntry.why_it_matters_now}
              </p>
            </div>

            {/* Open Question (Centered, Standalone) */}
            <div className="py-8 px-4 text-center">
              <p
                className="font-serif italic text-lg leading-relaxed max-w-xl mx-auto"
                style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}
              >
                &ldquo;{activeEntry.open_question}&rdquo;
              </p>
            </div>

            {/* If You're Curious */}
            <div className="border-t pt-4 text-center" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: 'var(--text-faint)' }}>
                If You're Curious
              </span>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                Explore: <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{activeEntry.further_if_curious}</span>
              </p>
            </div>

          </motion.div>
        </AnimatePresence>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            One spark of knowledge is enough to reshape your worldview.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
