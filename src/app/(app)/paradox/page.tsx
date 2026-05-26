'use client';

import { useState } from 'react';
import { getDayOfYear } from '@/lib/utils/date';
import { PARADOXES } from './data';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import PageTransition from '@/components/layout/PageTransition';
import { ArrowLeft, ArrowRight, BookOpen, Clock, HelpCircle } from 'lucide-react';

export default function ParadoxPage() {
  const defaultDayIndex = (getDayOfYear() - 1) % PARADOXES.length;
  const [currentIndex, setCurrentIndex] = useState(defaultDayIndex);

  const paradox = PARADOXES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PARADOXES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PARADOXES.length) % PARADOXES.length);
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        
        {/* Header */}
        <div className="border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>Paradox</h1>
          <p className="font-devanagari text-lg" style={{ color: '#4A3570' }}>विरोधाभास — जो मन को उलझाए</p>
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            Sit with the greatest logical, philosophical, and scientific paradoxes in human history. Explore their origins, implications, and modern parallels.
          </p>
        </div>

        {/* Navigation bar */}
        <div className="flex items-center justify-between p-3 rounded-xl border bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--border-default)' }}>
          <button 
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold hover:bg-[var(--bg-tertiary)] transition-all"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-secondary)' }}
          >
            <ArrowLeft size={14} />
            Previous
          </button>
          
          <span className="text-xs font-semibold tracking-wider uppercase text-stone-500">
            Day {currentIndex + 1} of {PARADOXES.length}
          </span>

          <button 
            onClick={handleNext}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold hover:bg-[var(--bg-tertiary)] transition-all"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-secondary)' }}
          >
            Next
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Paradox Card */}
        <div className="card-base p-6 sm:p-8 space-y-6" style={{ borderLeft: '4px solid #4A3570' }}>
          
          {/* Header metadata */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4A3570] font-serif block">
              आज का विरोधाभास · Paradox of the Day
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[var(--text-primary)] leading-tight">
              {paradox.name}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-devanagari text-lg font-medium text-[#4A3570]">{paradox.hindi_name}</span>
              <span className="text-xs text-stone-400 font-mono">|</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">{paradox.period}</span>
            </div>
          </div>

          {/* Origin story */}
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Origin History</span>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {paradox.origin}
            </p>
          </div>

          {/* Core Paradox Statement Box */}
          <div 
            className="p-5 rounded-xl border-l-4 italic text-lg leading-relaxed font-serif"
            style={{ 
              borderColor: '#4A3570', 
              background: 'rgba(74, 53, 112, 0.05)',
              color: 'var(--text-primary)'
            }}
          >
            &ldquo;{paradox.statement}&rdquo;
          </div>

          {/* Full Explanation */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Deep Explanation</span>
            <p className="text-base leading-relaxed prose-philosophy" style={{ color: 'var(--text-secondary)' }}>
              {paradox.explanation}
            </p>
          </div>

          {/* Modern Parallels */}
          <div className="space-y-2.5 pt-2">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Modern Parallels & Analogs</span>
            <div className="flex flex-col gap-2">
              {paradox.modern_examples.map((example, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="text-[#4A3570] font-semibold flex-shrink-0 mt-0.5">→</span>
                  <p>{example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Thinkers */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Associated Thinkers</span>
            <div className="flex flex-wrap gap-1.5">
              {paradox.related_thinkers.map(thinker => (
                <span 
                  key={thinker} 
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[rgba(74, 53, 112, 0.08)] text-[#4A3570]"
                >
                  {thinker}
                </span>
              ))}
            </div>
          </div>

          {/* Thought Experiment Closing Card */}
          <div className="p-4 rounded-xl border-l-2 bg-[var(--bg-tertiary)]" style={{ borderColor: '#4A3570' }}>
            <span className="text-[10px] uppercase font-bold text-stone-500 block mb-1">Sit with this...</span>
            <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              {paradox.thought_experiment}
            </p>
          </div>

          {/* Read Aloud */}
          <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
            <span className="text-xs text-stone-400 flex items-center gap-1">
              <Clock size={12} />
              Read time: ~2 mins
            </span>
            <ReadAloudButton 
              text={`${paradox.name}. Paradox: ${paradox.statement}. Explanation: ${paradox.explanation}`} 
              lang="en" 
              variant="pill" 
            />
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
