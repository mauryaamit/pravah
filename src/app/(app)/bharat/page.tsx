'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndex } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { BHARAT_DATA, BharatEntry } from './data';
import { Sparkles, HelpCircle } from 'lucide-react';

const INDIA_SNIPPETS = [
  { title: 'First University', content: 'Nalanda University, established in the 5th century CE in Bihar, was the world\'s first residential university. At its peak, it housed 10,000 students and 2,000 teachers from across Asia. Its library - the Dharmaganja - contained millions of manuscripts.' },
  { title: 'Language Family', content: 'India is home to languages from four completely unrelated language families: Indo-European, Dravidian, Austroasiatic, and Sino-Tibetan. This linguistic diversity is unmatched by any comparable land area on Earth.' },
  { title: 'Musical Heritage', content: 'Classical Indian music is one of the oldest musical traditions in the world, with a continuous documented history of over 2,000 years, theory-guided by the Natya Shastra.' },
  { title: 'Biodiversity Hotspot', content: 'India contains four of the world\'s 36 biodiversity hotspots: the Himalayas, the Western Ghats, the Eastern Himalayas, and Sundaland (Andaman and Nicobar).' },
];

export default function BharatPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [expandedSnippet, setExpandedSnippet] = useState<number | null>(null);

  const activeIndex = getDayIndex(BHARAT_DATA.length, currentDate);
  const selected = BHARAT_DATA[activeIndex];

  const textToSpeak = `${selected.title}. ${selected.summary}. ${selected.the_content}`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Discover India</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>भारत — Bharat</h1>
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
                  src={selected.imageUrl || "/images/bharati/indus-valley.png"}
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
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#E8A87C]">
                      {selected.theme} · {selected.theme_hi}
                    </span>
                    <h2 className="font-serif text-2xl text-white mt-1 leading-tight">{selected.title}</h2>
                    {selected.title_hi && (
                      <p className="font-devanagari text-sm text-white/60 mt-0.5">{selected.title_hi}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 p-1.5 rounded-lg backdrop-blur-sm">
                    <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {selected.summary}
                </p>
              </div>
            </div>

            {/* Region / Period Badge Row */}
            {(selected.region || selected.period) && (
              <div className="flex gap-2 flex-wrap text-xs">
                {selected.region && (
                  <span className="px-2.5 py-1 rounded-full border border-[var(--border-default)] text-[var(--text-muted)] bg-[var(--bg-secondary)]">
                    📍 {selected.region}
                  </span>
                )}
                {selected.period && (
                  <span className="px-2.5 py-1 rounded-full border border-[var(--border-default)] text-[var(--text-muted)] bg-[var(--bg-secondary)]">
                    ⏳ {selected.period}
                  </span>
                )}
              </div>
            )}

            {/* Detailed Content */}
            <div className="card-base p-6 space-y-4">
              {selected.the_content.split('\n\n').map((para: string, i: number) => (
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
                {selected.pata_tha}
              </p>
            </div>

            {/* Explore More Box */}
            {selected.explore_more && (
              <div className="card-base p-4 text-xs font-mono text-[var(--text-muted)] flex items-center justify-between">
                <span>📚 Explore More:</span>
                <span className="font-semibold text-[var(--text-primary)]">{selected.explore_more}</span>
              </div>
            )}
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
