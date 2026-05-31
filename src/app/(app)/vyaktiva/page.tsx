'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { PEOPLE, Person } from './data';

export default function VyaktivaPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [expandedSection, setExpandedSection] = useState<string | null>('biography');

  const featuredIndex = getDayIndexForArray(currentDate, PEOPLE.length);
  const selected = PEOPLE[featuredIndex];

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <div className="border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <p className="section-label">Person of the Day</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>व्यक्तित्व - Vyaktiva</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            One extraordinary life, explored deeply. A different person each day.
          </p>
        </div>

        {/* Date Navigator */}
        <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />

        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="space-y-5"
          >
            {/* Hero */}
            <div className="card-base overflow-hidden">
              <div className="relative h-56 sm:h-72 bg-gray-100" style={{ background: 'var(--bg-tertiary)' }}>
                <img
                  src={selected.imageUrl}
                  alt={selected.name}
                  className="w-full h-full object-cover object-top"
                  onError={e => { const el = e.target as HTMLImageElement; el.src = '/images/vibhav/tesla.png'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white leading-tight">{selected.name}</h2>
                  <p className="font-devanagari text-sm text-white/70 mt-0.5">{selected.nameHindi}</p>
                  <p className="text-sm text-white/60 mt-1">{selected.born} - {selected.died || 'Present'}</p>
                  <p className="text-xs text-white/50">{selected.nationality} · {selected.domain}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="font-serif italic text-lg" style={{ color: 'var(--text-primary)' }}>
                  "{selected.tagline}"
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

            {/* Famous Quote */}
            <div className="card-base p-6 relative" style={{ background: 'color-mix(in srgb, var(--accent-saffron) 6%, var(--bg-secondary))' }}>
              <div className="absolute top-6 right-6">
                <ReadAloudButton
                  text={selected.famousQuote}
                  lang="en-IN"
                  size="sm"
                />
              </div>
              <p className="section-label mb-3">In Their Own Words</p>
              <blockquote className="font-serif text-xl leading-relaxed pr-8" style={{ color: 'var(--text-primary)' }}>
                "{selected.famousQuote}"
              </blockquote>
              <p className="text-sm mt-3" style={{ color: 'var(--text-muted)' }}>- {selected.name}</p>
            </div>

            {/* Expandable sections */}
            {[
              { key: 'biography', title: 'Life Story', content: selected.biography },
              { key: 'philosophy', title: 'Philosophy & Worldview', content: selected.philosophy },
              { key: 'legacy', title: 'Legacy', content: selected.legacy },
              { key: 'connection', title: 'Connection to Now', content: selected.connection },
            ].map(section => (
              <div key={section.key} className="card-base overflow-hidden">
                <div className="w-full relative">
                  <div className="flex items-center justify-between p-5">
                    <button
                      onClick={() => setExpandedSection(expandedSection === section.key ? null : section.key)}
                      className="flex-1 text-left font-semibold text-sm"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {section.title}
                    </button>
                    
                    <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
                      <ReadAloudButton
                        text={`${section.title}. ${section.content}`}
                        lang="en-IN"
                        size="sm"
                      />
                      <button
                        onClick={() => setExpandedSection(expandedSection === section.key ? null : section.key)}
                        className="p-1 rounded-full hover:bg-secondary transition-all"
                      >
                        <motion.div animate={{ rotate: expandedSection === section.key ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
                        </motion.div>
                      </button>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {expandedSection === section.key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t" style={{ borderColor: 'var(--border-default)' }}>
                        <div className="pt-4 space-y-3">
                          {section.content.split('\n\n').map((para: string, i: number) => (
                            <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Key Works */}
            <div className="card-base p-5 space-y-3">
              <p className="section-label">Key Works & Contributions</p>
              <ul className="space-y-2">
                {selected.keyWorks.map((work: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--accent-saffron)' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{work}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lessons */}
            <div className="card-base p-5 space-y-3">
              <p className="section-label">What Their Life Teaches Us</p>
              <div className="space-y-3">
                {selected.lessonsForToday.map((lesson: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
                    <span className="text-xs font-bold mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-saffron)' }}>{i + 1}</span>
                    <p className="text-sm leading-relaxed font-serif italic" style={{ color: 'var(--text-primary)' }}>{lesson}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
