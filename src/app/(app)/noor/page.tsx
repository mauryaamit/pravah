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
import { useSankalps } from '@/lib/hooks/useSankalps';
import { NOOR_ENTRIES } from './data';

export default function NoorPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [script, setScript] = useState<'en' | 'hi'>('en');

  const { sankalps = [] } = useSankalps();
  const activeSankalp = sankalps.find(s => !s.is_complete);

  const activeIndex = getDayIndexForArray(currentDate, NOOR_ENTRIES.length);
  const activeEntry = NOOR_ENTRIES[activeIndex];

  const currentIgnition = (script === 'hi' && activeEntry.ignition_hi) 
    ? activeEntry.ignition_hi 
    : activeEntry.ignition;

  const textToSpeak = `${currentIgnition}. A Moment: ${activeEntry.the_moment}. ${activeEntry.spark}. ${activeEntry.invitation}`;

  return (
    <PageTransition>
      <div className="min-h-[85vh] flex flex-col justify-between max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-8 select-none">
        
        {/* Top bar with day nav and script selection */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Ignite Room</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>प्रेरणा - Prerna</h1>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
            
            {/* Script Toggle */}
            <div className="flex gap-1 bg-[var(--bg-tertiary)] p-0.5 rounded-full">
              <button
                onClick={() => setScript('en')}
                className="px-3 py-1 rounded-full text-[10px] font-medium transition-all cursor-pointer"
                style={{
                  background: script === 'en' ? 'var(--accent-saffron)' : 'transparent',
                  color: script === 'en' ? 'white' : 'var(--text-muted)'
                }}
              >
                English
              </button>
              <button
                onClick={() => setScript('hi')}
                className="px-3 py-1 rounded-full text-[10px] font-medium transition-all cursor-pointer"
                style={{
                  background: script === 'hi' ? 'var(--accent-saffron)' : 'transparent',
                  color: script === 'hi' ? 'white' : 'var(--text-muted)'
                }}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>

        {/* Main Ignition Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDate.toISOString() + script}
            variants={FADE_UP}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: -10 }}
            className="flex-1 flex flex-col justify-center py-8"
          >
            <div className="bg-[var(--bg-secondary)] rounded-xl px-8 py-10 md:px-12 md:py-14 max-w-2xl mx-auto shadow-sm w-full space-y-8 relative overflow-hidden">
              
              {/* Floating Action Buttons */}
              <div className="flex justify-end items-center gap-2 relative z-10">
                <ReadAloudButton text={textToSpeak} lang={script === 'hi' ? 'hi-IN' : 'en-IN'} size="sm" />
                <RevisitButton roomId="noor" roomName="Noor" contentTitle={activeEntry.ignition.slice(0, 30) + '...'} contentSummary={activeEntry.attribution} />
                <SutraNoteButton roomId="noor" roomName="Noor" contentTitle={activeEntry.ignition.slice(0, 30) + '...'} />
              </div>

              {/* Decorative Quote Mark and Quote */}
              <div className="relative text-center px-4">
                <span 
                  className="absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-8xl pointer-events-none select-none opacity-30" 
                  style={{ color: 'var(--accent-saffron)', fontFamily: 'Cormorant Garamond, serif' }}
                >
                  “
                </span>
                
                <p 
                  className={`font-serif text-3xl md:text-4xl text-center mx-auto max-w-xl relative z-10 ${script === 'hi' ? 'font-devanagari not-italic' : 'italic'}`}
                  style={{ color: 'var(--text-primary)', lineHeight: 1.6 }}
                >
                  {currentIgnition}
                </p>
                
                <div className="space-y-1 mt-6">
                  <p className="text-sm font-sans uppercase tracking-widest text-center" style={{ color: 'var(--text-primary)' }}>
                    — {activeEntry.attribution}
                  </p>
                  <p className="text-xs font-sans italic text-center" style={{ color: 'var(--text-muted)' }}>
                    {activeEntry.attribution_context}
                  </p>
                </div>
              </div>

              {/* A Moment Section */}
              {activeEntry.the_moment && (
                <div className="space-y-3 max-w-lg mx-auto border-t pt-6" style={{ borderColor: 'var(--border-default)' }}>
                  <h4 className="text-[10px] uppercase tracking-widest font-semibold text-center" style={{ color: 'var(--accent-saffron)' }}>
                    एक पल · A Moment
                  </h4>
                  <p className="text-sm font-serif italic text-center leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {activeEntry.the_moment}
                  </p>
                </div>
              )}

              {/* Spark & Invitation block */}
              <div className="space-y-6 max-w-lg mx-auto border-t pt-6" style={{ borderColor: 'var(--border-default)' }}>
                <p className="text-base font-sans text-center" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {activeEntry.spark}
                </p>
                
                <p className="font-serif italic text-xl text-center font-semibold" style={{ color: 'var(--accent-saffron)' }}>
                  {activeEntry.invitation}
                </p>
              </div>

              {/* Bargad Sankalp Integration */}
              {activeSankalp && (
                <div className="border-t pt-4 max-w-md mx-auto w-full" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-xs font-sans text-center" style={{ color: 'var(--text-muted)' }}>
                    तुम्हारा संकल्प: {activeSankalp.identity || activeSankalp.title}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Muted Footer */}
        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            True ignition is quiet. It does not shout; it burns.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
