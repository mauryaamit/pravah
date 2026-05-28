'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { DUNIYA_ENTRIES, DuniyaEntry } from './data';
import { Globe, AlertCircle, Cpu, Shield, ArrowRight, UserCheck, HelpCircle, Info } from 'lucide-react';

export default function DuniyaPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const activeIndex = getDayIndexForArray(currentDate, DUNIYA_ENTRIES.length);
  const selected = DUNIYA_ENTRIES[activeIndex];

  const textToSpeak = selected.type === 'situation'
    ? `${selected.title}. Situation: ${selected.situation}. Why it matters: ${selected.why_it_matters}.`
    : `${selected.title}. What it is: ${selected.what_it_is}. How it works: ${selected.how_it_works}.`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">World Intelligence</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>दुनिया - Duniya</h1>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Deconstruct world systems and current global situations with clarity and depth.
            </p>
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
            {/* Title & Metadata */}
            <div className="card-base p-6 space-y-3" style={{ background: 'color-mix(in srgb, var(--accent-saffron) 4%, var(--bg-secondary))' }}>
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--accent-saffron)] flex items-center gap-1">
                    <Globe size={12} />
                    {selected.region} {selected.region_hi ? `· ${selected.region_hi}` : ''}
                  </span>
                  <h2 className="font-serif text-2xl text-[var(--text-primary)] leading-tight">
                    {selected.title}
                  </h2>
                  {selected.title_hi && (
                    <p className="font-devanagari text-stone-500 text-base mt-0.5">
                      {selected.title_hi}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                </div>
              </div>

              <div className="border-t pt-3 flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Mode: {selected.type === 'situation' ? 'Global Situation' : 'System Breakdown'}
                </span>
              </div>
            </div>

            {/* Content Cards based on Type */}
            {selected.type === 'situation' ? (
              <div className="space-y-4">
                {/* Situation Block */}
                <div className="card-base p-5 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                    <AlertCircle size={14} />
                    <span>The Situation</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {selected.situation}
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="card-base p-5 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                    <Cpu size={14} />
                    <span>Why It Matters</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {selected.why_it_matters}
                  </p>
                </div>

                {/* One Thing to Understand */}
                <div className="card-base p-5 space-y-2" style={{ borderLeft: '4px solid var(--accent-saffron)' }}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-saffron)]">
                    One Thing to Understand
                  </h3>
                  <p className="text-sm font-serif italic text-[var(--text-primary)] leading-relaxed">
                    {selected.one_thing_to_understand}
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* What It Is */}
                <div className="card-base p-5 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                    <Info size={14} />
                    <span>What It Is</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {selected.what_it_is}
                  </p>
                </div>

                {/* How It Works */}
                <div className="card-base p-5 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                    <Cpu size={14} />
                    <span>How It Works</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {selected.how_it_works}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Who Benefits */}
                  <div className="card-base p-5 space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                      <UserCheck size={14} />
                      <span>Who Benefits</span>
                    </h4>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {selected.who_benefits}
                    </p>
                  </div>

                  {/* Limits */}
                  <div className="card-base p-5 space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-orange-700 flex items-center gap-1.5">
                      <Shield size={14} />
                      <span>Limits & Challenges</span>
                    </h4>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {selected.limits}
                    </p>
                  </div>
                </div>

                {/* India Angle */}
                {selected.india_angle && (
                  <div className="card-base p-5 space-y-2" style={{ borderLeft: '4px solid var(--accent-saffron)' }}>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-saffron)]">
                      India's Perspective
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {selected.india_angle}
                    </p>
                  </div>
                )}

                {/* Closing Question */}
                {selected.question && (
                  <div className="card-base p-5 text-center space-y-2" style={{ background: 'var(--bg-tertiary)' }}>
                    <p className="text-xs uppercase tracking-widest font-semibold text-[var(--text-faint)] flex items-center justify-center gap-1.5">
                      <HelpCircle size={12} />
                      <span>Reflective Question</span>
                    </p>
                    <p className="font-serif italic text-base text-[var(--text-primary)] leading-relaxed">
                      "{selected.question}"
                    </p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-xs" style={{ color: 'var(--text-faint)' }}>
            To change the world, you must first understand the lines it is drawn on.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
