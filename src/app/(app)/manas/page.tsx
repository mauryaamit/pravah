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
import { MANAS_ENTRIES } from './data';

const DOMAIN_COLORS = {
  bias: '#B8860B',
  social: '#3A5A8A',
  emotion: '#8B3A3A',
  learning: '#4A7C59',
  decision: '#7A3A8A'
};

export default function ManasPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const activeIndex = getDayIndexForArray(currentDate, MANAS_ENTRIES.length);
  const activeEntry = MANAS_ENTRIES[activeIndex];

  const domainColor = DOMAIN_COLORS[activeEntry.domain] ?? '#6A4A7A';
  const textToSpeak = `${activeEntry.concept_name}. What it is: ${activeEntry.what_it_is}. A Moment You Know: ${activeEntry.real_scenario}. Why it evolved: ${activeEntry.why_it_evolved}. What to notice: ${activeEntry.what_to_notice}.`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6 select-none">
        
        {/* Header with Day Navigator */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Mind Room</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>मानस - Manas</h1>
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
            {/* Top row with domain badge, researcher and action buttons */}
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-2">
                {/* Domain Badge */}
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium text-white shadow-sm"
                  style={{ background: domainColor }}
                >
                  {activeEntry.domain_display} · {activeEntry.domain_hi}
                </span>

                {/* Researcher Attribution */}
                {activeEntry.researcher && (
                  <span className="text-xs italic" style={{ color: 'var(--text-muted)' }}>
                    {activeEntry.researcher}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                <RevisitButton roomId="manas" roomName="Manas" contentTitle={activeEntry.concept_name} contentSummary={activeEntry.domain_display} />
                <SutraNoteButton roomId="manas" roomName="Manas" contentTitle={activeEntry.concept_name} />
              </div>
            </div>

            {/* Concept Title Box */}
            <div className="space-y-1">
              <h2 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>
                {activeEntry.concept_name}
              </h2>
              <p className="font-devanagari text-lg" style={{ color: 'var(--text-secondary)' }}>
                {activeEntry.concept_name_hi}
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

            {/* Content Sections Grid */}
            <div className="space-y-6">
              
              {/* Section 1: What It Is */}
              <div className="card-base p-6 border-l-2" style={{ borderColor: domainColor }}>
                <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: domainColor }}>
                  What It Is
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  {activeEntry.what_it_is}
                </p>
              </div>

              {/* Section 2: A Moment You Know (Storytelling layout - indented, subtle bg shift) */}
              <div 
                className="card-base p-6 ml-4 md:ml-8 relative overflow-hidden" 
                style={{ 
                  background: 'color-mix(in srgb, var(--accent-saffron) 3%, var(--bg-paper))',
                  border: '1px dashed color-mix(in srgb, var(--accent-saffron) 15%, transparent)'
                }}
              >
                <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: 'var(--accent-saffron)' }}>
                  A Moment You Know
                </h3>
                <p className="text-sm font-serif italic leading-relaxed" style={{ color: 'var(--text-primary)', lineHeight: 1.9 }}>
                  &ldquo;{activeEntry.real_scenario}&rdquo;
                </p>
              </div>

              {/* Section 3 & 4 Grid: Why It Exists & What to Notice */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="card-base p-5">
                  <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                    Why It Exists
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    {activeEntry.why_it_evolved}
                  </p>
                </div>

                <div className="card-base p-5 border" style={{ borderColor: 'var(--border-default)' }}>
                  <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: 'var(--accent-moss)' }}>
                    What to Notice
                  </h3>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>
                    {activeEntry.what_to_notice}
                  </p>
                </div>

              </div>

            </div>

            {/* Closing Thought */}
            <div className="text-center py-6 px-4">
              <p
                className="font-serif italic text-base leading-relaxed max-w-xl mx-auto"
                style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}
              >
                &ldquo;{activeEntry.closing_thought}&rdquo;
              </p>
            </div>

          </motion.div>
        </AnimatePresence>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            To observe the mind is to begin to be free of it.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
