'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { BHARATI_ENTRIES, BharatiEntry } from './data';
import { Sparkles, HelpCircle } from 'lucide-react';

const INDIA_SNIPPETS = [
  { title: 'First University', content: 'Nalanda University, established in the 5th century CE in Bihar, was the world\'s first residential university. At its peak, it housed 10,000 students and 2,000 teachers from across Asia. Its library - the Dharmaganja - contained millions of manuscripts.' },
  { title: 'Language Family', content: 'India is home to languages from four completely unrelated language families: Indo-European, Dravidian, Austroasiatic, and Sino-Tibetan. This linguistic diversity is unmatched by any comparable land area on Earth.' },
  { title: 'Musical Heritage', content: 'Classical Indian music is one of the oldest musical traditions in the world, with a continuous documented history of over 2,000 years, theory-guided by the Natya Shastra.' },
  { title: 'Biodiversity Hotspot', content: 'India contains four of the world\'s 36 biodiversity hotspots: the Himalayas, the Western Ghats, the Eastern Himalayas, and Sundaland (Andaman and Nicobar).' },
];

export default function BharatiPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [expandedSnippet, setExpandedSnippet] = useState<number | null>(null);

  const activeIndex = getDayIndexForArray(currentDate, BHARATI_ENTRIES.length);
  const selected = BHARATI_ENTRIES[activeIndex];

  const textToSpeak = `${selected.title}. ${selected.subtitle}. ${selected.content}`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Discover India</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>भारती - Bharati</h1>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              5,000 years of history, 4 language families, 1.4 billion stories. India is a civilization.
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
            className="space-y-5"
          >
            {/* Main Featured Item */}
            <div className="card-base overflow-hidden">
              <div className="relative" style={{ paddingBottom: '50%', background: 'var(--bg-tertiary)' }}>
                <img
                  src={selected.imageUrl}
                  alt={selected.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.src = '/images/bharati/indus-valley.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#E8A87C]">{selected.category}</span>
                    <h2 className="font-serif text-2xl text-white mt-1 leading-tight">{selected.title}</h2>
                    <p className="font-devanagari text-sm text-white/60 mt-0.5">{selected.titleHindi}</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 p-1.5 rounded-lg backdrop-blur-sm">
                    <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {selected.subtitle}
                </p>
              </div>
            </div>

            {/* Summary Box */}
            {selected.summary && (
              <div 
                className="p-5 border-l-4 rounded bg-[var(--bg-secondary)]" 
                style={{ borderColor: 'var(--accent-saffron)' }}
              >
                <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: 'var(--accent-saffron)' }}>
                  संक्षेप · In Brief
                </h4>
                <p className="font-serif italic text-base leading-relaxed text-[var(--text-primary)]">
                  {selected.summary}
                </p>
              </div>
            )}

            {/* Detailed Content */}
            <div className="card-base p-6 space-y-4">
              {selected.content.split('\n\n').map((para: string, i: number) => (
                <p key={i} className="text-sm leading-relaxed text-justify" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Remarkable Fact / Did you know */}
            <div className="card-base p-5" style={{ background: 'color-mix(in srgb, #8A3A3A 6%, var(--bg-secondary))', borderLeft: '4px solid #8A3A3A' }}>
              <p className="text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 mb-1.5" style={{ color: '#8A3A3A' }}>
                <Sparkles size={14} />
                <span>पता था? / Did You Know?</span>
              </p>
              <p className="font-serif italic text-base leading-relaxed text-[var(--text-primary)]">
                {selected.wonder}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Facts Accordion */}
        <div className="space-y-3">
          <h2 className="font-serif text-lg flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
            <HelpCircle size={18} className="text-[var(--text-muted)]" />
            <span>Civilization Glimpses</span>
          </h2>
          {INDIA_SNIPPETS.map((s, i) => (
            <div key={i} className="card-base overflow-hidden">
              <button
                className="w-full text-left p-4 flex items-center justify-between gap-3"
                onClick={() => setExpandedSnippet(expandedSnippet === i ? null : i)}
              >
                <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{s.title}</span>
                <motion.div animate={{ rotate: expandedSnippet === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedSnippet === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-xs leading-relaxed text-justify" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                      {s.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
}
