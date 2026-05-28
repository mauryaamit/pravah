'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { ARANYA_ENTRIES, AranyaEntry } from './data';
import { Leaf, PawPrint, Microscope, Wind, HelpCircle } from 'lucide-react';

export default function AranyaPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const activeIndex = getDayIndexForArray(currentDate, ARANYA_ENTRIES.length);
  const entry = ARANYA_ENTRIES[activeIndex];

  const textToSpeak = `Nature today. Plant: ${entry.plant.title}. Animal: ${entry.animal.title}. Organism: ${entry.organism.title}. Phenomenon: ${entry.phenomenon.title}.`;

  const cards = [
    { key: 'plant', data: entry.plant, label: 'Plant', labelHi: 'वनस्पति', icon: <Leaf size={18} className="text-emerald-700" />, bg: 'color-mix(in srgb, #4A7C59 4%, var(--bg-secondary))' },
    { key: 'animal', data: entry.animal, label: 'Animal', labelHi: 'प्राणी', icon: <PawPrint size={18} className="text-amber-700" />, bg: 'color-mix(in srgb, #8A6A3A 4%, var(--bg-secondary))' },
    { key: 'organism', data: entry.organism, label: 'Organism', labelHi: 'सूक्ष्मजीव', icon: <Microscope size={18} className="text-purple-700" />, bg: 'color-mix(in srgb, #6A3A8A 4%, var(--bg-secondary))' },
    { key: 'phenomenon', data: entry.phenomenon, label: 'Phenomenon', labelHi: 'प्राकृतिक घटना', icon: <Wind size={18} className="text-blue-700" />, bg: 'color-mix(in srgb, #3A5A8A 4%, var(--bg-secondary))' },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Nature Room</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>अरण्य - Aranya</h1>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              The natural world is not a backdrop to human life. It is the text. We are the footnotes.
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
            {cards.map((card) => {
              const isOrganism = card.key === 'organism';
              return (
                <div
                  key={card.key}
                  className="card-base p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-md"
                  style={{ background: card.bg }}
                >
                  <div className="space-y-3">
                    {/* Card Header */}
                    <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: 'var(--border-subtle)' }}>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-muted)] flex items-center gap-1.5">
                        {card.icon}
                        <span>{card.label} · {card.labelHi}</span>
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="space-y-1">
                      <h2 className="font-serif text-xl font-semibold text-[var(--text-primary)]">
                        {card.data.title}
                      </h2>
                      {card.data.titleHindi && (
                        <p className="font-devanagari text-sm text-[var(--text-muted)]">
                          {card.data.titleHindi}
                        </p>
                      )}
                    </div>

                    <p className="text-xs leading-relaxed italic text-[var(--text-secondary)]">
                      {card.data.intro}
                    </p>

                    <p className="text-xs leading-relaxed text-stone-600 text-justify">
                      {card.data.details}
                    </p>
                  </div>

                  {/* Wonder Box - Organism gets custom pullquote style */}
                  {isOrganism ? (
                    <div className="border-l-4 border-purple-500 pl-4 py-2 my-2 italic font-serif text-sm text-[var(--text-primary)]">
                      <p>&ldquo;{card.data.wonder}&rdquo;</p>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-xl border border-stone-200/60 bg-white/40 backdrop-blur-sm space-y-1">
                      <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400 flex items-center gap-1">
                        <HelpCircle size={10} />
                        <span>The Wonder</span>
                      </span>
                      <p className="text-xs font-serif italic text-stone-700">
                        {card.data.wonder}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            Look deep into nature, and then you will understand everything better.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
