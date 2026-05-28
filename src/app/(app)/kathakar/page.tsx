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
import { KATHAKAR_ENTRIES } from './data';

export default function KathakarPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isFocusOpen, setIsFocusOpen] = useState(false);

  const activeIndex = getDayIndexForArray(currentDate, KATHAKAR_ENTRIES.length);
  const activeEntry = KATHAKAR_ENTRIES[activeIndex];

  const textToSpeak = `${activeEntry.story_title}. The Story: ${activeEntry.the_story}. What this story knows: ${activeEntry.what_this_story_knows}`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6 select-none">
        
        {/* Header with Day Navigator */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Story Room</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>कथाकार - Kathakar</h1>
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
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                  {activeEntry.origin} {activeEntry.origin_hi ? `· ${activeEntry.origin_hi}` : ''}
                </span>
                <span 
                  className="text-xs px-2.5 py-1 rounded-full font-medium capitalize"
                  style={{
                    background: activeEntry.tradition === 'indian' ? 'color-mix(in srgb, var(--accent-saffron) 15%, transparent)' : 'color-mix(in srgb, var(--accent-moonblue) 15%, transparent)',
                    color: activeEntry.tradition === 'indian' ? 'var(--accent-saffron)' : 'var(--accent-moonblue)'
                  }}
                >
                  {activeEntry.tradition} Tradition
                </span>
                <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
                  ⏱️ {activeEntry.estimated_read} read
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                <RevisitButton roomId="kathakar" roomName="Kathakar" contentTitle={activeEntry.story_title} contentSummary={activeEntry.origin} />
                <SutraNoteButton roomId="kathakar" roomName="Kathakar" contentTitle={activeEntry.story_title} />
                <button
                  onClick={() => setIsFocusOpen(true)}
                  className="px-3 py-1 rounded-full text-xs font-medium border transition-all hover:bg-bg-tertiary flex items-center gap-1.5 cursor-pointer"
                  style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)', background: 'var(--bg-primary)' }}
                >
                  Focus
                </button>
              </div>
            </div>

            {/* Story Title */}
            <div className="space-y-1 text-center py-4">
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight" style={{ color: 'var(--text-primary)' }}>
                {activeEntry.story_title}
              </h2>
              {activeEntry.story_title_hi && (
                <p className="font-devanagari text-lg text-stone-500">
                  {activeEntry.story_title_hi}
                </p>
              )}
            </div>

            {/* Thin visual separator */}
            <div className="w-12 h-[1px] mx-auto bg-[var(--border-default)]" />

            {/* Story Card Container */}
            <div className="bg-[var(--bg-secondary)] rounded-xl px-8 py-10 md:px-12 md:py-12 max-w-3xl mx-auto shadow-sm w-full space-y-6">
              {/* Story Text */}
              <div className="font-serif text-lg md:text-xl leading-[2.0] text-justify" style={{ color: 'var(--text-secondary)' }}>
                <div className="space-y-6">
                  {activeEntry.the_story.split('\n\n').map((para: string, i: number) => (
                    <p key={i}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <hr className="my-6 border-[var(--text-muted)] opacity-20" />

              {/* What this story knows */}
              <div className="space-y-2">
                <span className="text-xs font-sans uppercase tracking-widest font-semibold block mb-1" style={{ color: 'var(--accent-saffron)' }}>
                  What this story knows:
                </span>
                <p className="text-base font-sans italic" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                  {activeEntry.what_this_story_knows}
                </p>
              </div>

              {/* Emotional Core */}
              <div className="text-center pt-2">
                <p className="font-sans text-xs tracking-wider" style={{ color: 'var(--text-faint)' }}>
                  {activeEntry.emotional_core}
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Focus Mode Component */}
        <FocusMode
          isOpen={isFocusOpen}
          onClose={() => setIsFocusOpen(false)}
          title={activeEntry.story_title}
          author={activeEntry.origin}
          textToSpeak={activeEntry.the_story}
        >
          <div className="max-w-xl mx-auto space-y-6 text-justify text-xl leading-relaxed font-serif">
            {activeEntry.the_story.split('\n\n').map((para: string, idx: number) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </FocusMode>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            A story is a shell that holds a kernel of truth. The shell falls away; the truth remains.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
