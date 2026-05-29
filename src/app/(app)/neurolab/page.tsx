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
import { NEUROLAB_ENTRIES } from './data';

const THEME_COLORS = {
  memory: '#3A5A8A',
  attention: '#8A6A3A',
  emotion: '#8B3A3A',
  creativity: '#4A7C59'
};

export default function NeuroLabPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const activeIndex = getDayIndexForArray(currentDate, NEUROLAB_ENTRIES.length);
  const activeEntry = NEUROLAB_ENTRIES[activeIndex];

  const themeColor = THEME_COLORS[activeEntry.week_theme] ?? '#7A3A8A';
  const textToSpeak = `${activeEntry.fact_title}. Theme: ${activeEntry.week_theme_display}. The Science: ${activeEntry.core_science}. In Your Life: ${activeEntry.in_your_life}. Try This: ${activeEntry.practice}.`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6 select-none">
        
        {/* Header with Day Navigator */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Brain Science</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>न्यूरोलैब - NeuroLab</h1>
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
            {/* Top row with theme badge, region, and action buttons */}
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                {/* Theme Badge */}
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium text-white shadow-sm"
                  style={{ background: themeColor }}
                >
                  {activeEntry.week_theme_display} · {activeEntry.week_theme_hi}
                </span>

                {/* Brain Region (Anatomical Badge) */}
                {activeEntry.brain_region && (
                  <span
                    className="text-xs px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-tertiary)'
                    }}
                  >
                    🧠 {activeEntry.brain_region} {activeEntry.brain_region_hi ? `(${activeEntry.brain_region_hi})` : ''}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                <RevisitButton roomId="neurolab" roomName="NeuroLab" contentTitle={activeEntry.fact_title} contentSummary={activeEntry.week_theme_display} />
                <SutraNoteButton roomId="neurolab" roomName="NeuroLab" contentTitle={activeEntry.fact_title} />
              </div>
            </div>

            {/* Fact Title Box */}
            <div
              className="card-base p-6 space-y-2 relative overflow-hidden"
              style={{
                borderLeft: `4px solid ${themeColor}`,
                background: 'color-mix(in srgb, var(--bg-secondary) 95%, transparent)'
              }}
            >
              <h2 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>
                {activeEntry.fact_title}
              </h2>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
                {activeEntry.fact_title_hi}
              </p>
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

            {/* 3 Core Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Section 1: The Science */}
              <div className="card-base p-5 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: themeColor }}>
                    The Science
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    {activeEntry.core_science}
                  </p>
                </div>
              </div>

              {/* Section 2: In Your Life (Highlighted/Prominent) */}
              <div
                className="card-base p-5 flex flex-col justify-between space-y-3"
                style={{
                  background: 'color-mix(in srgb, var(--accent-saffron) 4%, var(--bg-secondary))',
                  border: '1px solid color-mix(in srgb, var(--accent-saffron) 15%, transparent)'
                }}
              >
                <div>
                  <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: 'var(--accent-saffron)' }}>
                    In Your Life
                  </h3>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>
                    {activeEntry.in_your_life}
                  </p>
                </div>
              </div>

              {/* Section 3: Try This (Gently Framed) */}
              <div className="card-base p-5 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: 'var(--accent-moss)' }}>
                    Try This
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    {activeEntry.practice}
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Wonder (Centered, Italic) */}
            <div className="text-center py-6 px-4">
              <p
                className="font-serif italic text-base leading-relaxed max-w-xl mx-auto"
                style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}
              >
                &ldquo;{activeEntry.closing_wonder}&rdquo;
              </p>
            </div>

          </motion.div>
        </AnimatePresence>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            Your brain is not fixed. Every repeated pattern redraws the path.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
