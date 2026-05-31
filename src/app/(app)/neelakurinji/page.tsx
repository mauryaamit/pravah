'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray, toDateString } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { isToday } from 'date-fns';
import { Sparkles } from 'lucide-react';
import { NEELAKURINJI_ENTRIES, NeelakurinjiEntry } from './data';

// Color and label maps based on category
const CATEGORY_META: Record<string, { label: string; labelHi: string; color: string }> = {
  scientific_discovery: { label: 'Scientific Discovery', labelHi: 'वैज्ञानिक खोज', color: '#5B7FA6' },
  geographic_anomaly:   { label: 'Geographic Anomaly', labelHi: 'भौगोलिक विसंगति', color: '#4A6741' },
  human_feat:           { label: 'Human Feat', labelHi: 'मानवीय पराक्रम', color: '#C4873A' },
  natural_phenomenon:   { label: 'Natural Phenomenon', labelHi: 'प्राकृतिक घटना', color: '#3A7A7A' },
  mathematical_truth:   { label: 'Mathematical Truth', labelHi: 'गणितीय सत्य', color: '#6B4A7A' },
  cultural_surprise:    { label: 'Cultural Surprise', labelHi: 'सांस्कृतिक आश्चर्य', color: '#8B5E3C' },
  biological_wonder:    { label: 'Biological Wonder', labelHi: 'जैविक विस्मय', color: '#4A6741' },
};

function getCategoryMeta(category: string) {
  return CATEGORY_META[category] || { label: 'Wonder', labelHi: 'आश्चर्य', color: '#7B6BA6' };
}

export default function NeelakurinjiPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isRevealed, setIsRevealed] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Get index in NEELAKURINJI_ENTRIES (0 to 89)
  const activeIndex = getDayIndexForArray(currentDate, NEELAKURINJI_ENTRIES.length);
  const entry: NeelakurinjiEntry = NEELAKURINJI_ENTRIES[activeIndex];
  const { label: categoryLabel, color: categoryColor } = getCategoryMeta(entry.category);

  // Initialize and check reveal status on mount and date change
  useEffect(() => {
    setIsMounted(true);
    const isDateToday = isToday(currentDate);
    if (!isDateToday) {
      // Past days are automatically revealed
      setIsRevealed(true);
      setPlayAnimation(false);
    } else {
      const dateKey = toDateString(currentDate);
      const savedState = localStorage.getItem(`neelakurinji-revealed-${dateKey}`);
      if (savedState === 'true') {
        setIsRevealed(true);
        setPlayAnimation(false);
      } else {
        setIsRevealed(false);
        setPlayAnimation(false);
      }
    }
  }, [currentDate]);

  const handleReveal = () => {
    setPlayAnimation(true);
    setIsRevealed(true);
    const dateKey = toDateString(currentDate);
    localStorage.setItem(`neelakurinji-revealed-${dateKey}`, 'true');
  };

  if (!isMounted) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: 'var(--border-default)' }} />
      </div>
    );
  }

  // Calculate stagged animation delays
  let delayAccumulator = 0.6;
  if (entry.the_number) {
    delayAccumulator += 0.2;
  }
  const numParas = entry.the_wonder.split('\n\n').length;
  const whyItMattersDelay = delayAccumulator + (numParas * 0.15) + 0.1;
  const connectedWonderDelay = whyItMattersDelay + 0.2;
  const closingDelay = connectedWonderDelay + (entry.connected_wonder ? 0.2 : 0);
  const resonanceDelay = closingDelay + 0.2;
  const actionsDelay = resonanceDelay + 0.2;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-8 select-none">
        {/* Header */}
        <div className="text-center space-y-2 border-b pb-6" style={{ borderColor: 'var(--border-default)' }}>
          <p className="section-label">Wonder Room</p>
          <h1 className="font-serif text-3xl font-light text-[var(--text-primary)]">नीलकुरिंजी - Neelakurinji</h1>
          <p className="text-xs text-[var(--text-muted)] tracking-wider">
            Named after the flower that blooms once every 12 years. Rare, unexpected, and astonishing.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="pre-reveal"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="flex flex-col items-center justify-center py-16 text-center space-y-10"
            >
              {/* Category Hint Badge */}
              <div 
                className="text-xs uppercase tracking-[0.2em] font-semibold"
                style={{ color: categoryColor }}
              >
                {categoryLabel}
              </div>

              {/* Large Cormorant Garamond Teaser with slow pulse */}
              <motion.div
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="max-w-xl mx-auto px-4"
              >
                <p 
                  className="text-2xl sm:text-3xl font-light italic leading-relaxed text-center"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'var(--text-primary)' }}
                >
                  &ldquo;{entry.teaser}&rdquo;
                </p>
              </motion.div>

              {/* Pulsing reveal button container */}
              <div className="relative flex items-center justify-center pt-4">
                {/* Glow ring 1 */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.45, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-24 h-24 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${categoryColor} 0%, transparent 70%)` }}
                />
                {/* Glow ring 2 */}
                <motion.div
                  animate={{ scale: [1.2, 1.6, 1.2], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${categoryColor} 0%, transparent 70%)` }}
                />

                {/* Main Reveal Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReveal}
                  className="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer border text-white font-medium"
                  style={{ 
                    background: `linear-gradient(135deg, ${categoryColor} 0%, var(--bg-tertiary) 100%)`,
                    borderColor: `${categoryColor}55`,
                    boxShadow: `0 0 20px ${categoryColor}40`
                  }}
                >
                  <Sparkles size={20} className="text-white mb-1 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider font-sans">खोलो</span>
                  <span className="text-[10px] opacity-80 uppercase tracking-widest font-sans">Reveal</span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="post-reveal"
              className="relative overflow-visible"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stage 2 Radial bloom animation */}
              {playAnimation && (
                <motion.div
                  className="absolute rounded-full pointer-events-none z-0"
                  style={{
                    width: '320px',
                    height: '320px',
                    background: `radial-gradient(circle, ${categoryColor}aa 0%, transparent 70%)`,
                    left: '50%',
                    top: '25%',
                    x: '-50%',
                    y: '-50%',
                    transformOrigin: 'center',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 2.5], opacity: [0, 0.9, 0] }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              )}

              {/* Main Content Layout */}
              <div className="max-w-2xl mx-auto px-6 relative z-10 space-y-6">
                {/* Category badge */}
                <motion.div 
                  className="text-xs uppercase tracking-widest"
                  style={{ color: categoryColor }}
                  initial={playAnimation ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={playAnimation ? { duration: 0.4, delay: 0.2, ease: 'easeOut' } : { duration: 0 }}
                >
                  {categoryLabel}
                </motion.div>

                {/* Wonder title */}
                <motion.div
                  initial={playAnimation ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={playAnimation ? { duration: 0.4, delay: 0.4, ease: 'easeOut' } : { duration: 0 }}
                >
                  <h1 
                    className="text-4xl font-semibold text-[var(--text-primary)] leading-tight font-serif"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    {entry.wonder_title}
                  </h1>
                  {entry.wonder_title_hi && (
                    <p className="font-devanagari text-base text-[var(--text-muted)] mt-1">
                      {entry.wonder_title_hi}
                    </p>
                  )}
                </motion.div>

                {/* The Number — if present, displayed typographically large */}
                {entry.the_number && (
                  <motion.div 
                    className="text-center py-6"
                    initial={playAnimation ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={playAnimation ? { duration: 0.4, delay: 0.6, ease: 'easeOut' } : { duration: 0 }}
                  >
                    <p 
                      className="text-7xl font-light tracking-tight"
                      style={{ color: categoryColor, fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                    >
                      {entry.the_number}
                    </p>
                  </motion.div>
                )}

                {/* The Wonder — main prose */}
                <div className="space-y-5 text-justify">
                  {entry.the_wonder.split('\n\n').map((p, i) => {
                    const currentDelay = delayAccumulator + (i * 0.15);
                    return (
                      <motion.p 
                        key={i} 
                        className="text-base leading-relaxed text-[var(--text-secondary)] font-serif"
                        style={{ lineHeight: 1.85 }}
                        initial={playAnimation ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={playAnimation ? { duration: 0.4, delay: currentDelay, ease: 'easeOut' } : { duration: 0 }}
                      >
                        {p}
                      </motion.p>
                    );
                  })}
                </div>

                {/* Why It Matters */}
                <motion.div 
                  className="border-l-4 px-5 py-4 my-8 rounded-r-lg bg-[var(--bg-tertiary)]"
                  style={{ borderColor: categoryColor }}
                  initial={playAnimation ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={playAnimation ? { duration: 0.4, delay: whyItMattersDelay, ease: 'easeOut' } : { duration: 0 }}
                >
                  <p 
                    className="text-base italic leading-relaxed text-[var(--text-primary)]"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    {entry.why_it_matters}
                  </p>
                </motion.div>

                {/* Connected Wonder */}
                {entry.connected_wonder && (
                  <motion.div 
                    className="bg-[var(--bg-secondary)] rounded-xl px-6 py-5 border border-[var(--border-subtle)]"
                    initial={playAnimation ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={playAnimation ? { duration: 0.4, delay: connectedWonderDelay, ease: 'easeOut' } : { duration: 0 }}
                  >
                    <div 
                      className="text-xs uppercase tracking-widest mb-2 font-semibold"
                      style={{ color: categoryColor }}
                    >
                      ✦ अगर यह चौंकाया तो — If This Astonished You
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {entry.connected_wonder}
                    </p>
                  </motion.div>
                )}

                {/* Closing */}
                <motion.p 
                  className="text-xl italic text-center text-[var(--text-muted)] py-6"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  initial={playAnimation ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={playAnimation ? { duration: 0.4, delay: closingDelay, ease: 'easeOut' } : { duration: 0 }}
                >
                  {entry.closing}
                </motion.p>

                {/* Resonance prompt */}
                <motion.div 
                  className="text-center py-6 border-t"
                  style={{ borderColor: 'var(--border-subtle)' }}
                  initial={playAnimation ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={playAnimation ? { duration: 0.4, delay: resonanceDelay, ease: 'easeOut' } : { duration: 0 }}
                >
                  <p className="text-base text-[var(--text-muted)] italic font-serif">
                    {entry.resonance_prompt}
                  </p>
                </motion.div>

                {/* DayNavigator + actions */}
                <motion.div
                  initial={playAnimation ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={playAnimation ? { duration: 0.4, delay: actionsDelay, ease: 'easeOut' } : { duration: 0 }}
                  className="space-y-6 pt-4"
                >
                  <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
                  <div className="flex gap-4 justify-center items-center">
                    <ReadAloudButton text={`${entry.wonder_title}. ${entry.the_wonder} ${entry.closing}`} size="md" />
                    <SutraNoteButton roomId="neelakurinji" roomName="Neelakurinji" contentTitle={entry.wonder_title} className="relative top-auto right-auto flex items-center justify-center rounded-full border border-[var(--border-default)] w-10 h-10 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all hover:scale-105 active:scale-95 text-lg font-medium cursor-pointer" />
                    <RevisitButton roomId="neelakurinji" roomName="Neelakurinji" contentTitle={entry.wonder_title} contentSummary={entry.teaser} className="flex items-center justify-center rounded-full border border-[var(--border-default)] w-10 h-10 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all hover:scale-105 active:scale-95 cursor-pointer" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
