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
import { NEUROLAB_ENTRIES } from './data';
import { MANAS_ENTRIES } from '../manas/data';

const THEME_COLORS: Record<string, string> = {
  memory: '#3A5A8A',
  attention: '#8A6A3A',
  emotion: '#8B3A3A',
  creativity: '#4A7C59'
};

const DOMAIN_COLORS: Record<string, string> = {
  bias: '#B8860B',
  social: '#3A5A8A',
  emotion: '#8B3A3A',
  learning: '#4A7C59',
  decision: '#7A3A8A'
};

export default function NeuroLabPage() {
  const [activeTab, setActiveTab] = useState<'neurolab' | 'manas'>('neurolab');
  const [neuroDate, setNeuroDate] = useState<Date>(new Date());
  const [manasDate, setManasDate] = useState<Date>(new Date());

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6 select-none">
        
        {/* Tab Switcher */}
        <div className="flex gap-0 mb-8 border border-[var(--border-default)] bg-[var(--bg-secondary)] rounded-xl overflow-hidden w-fit">
          <button
            onClick={() => setActiveTab('neurolab')}
            className={`px-6 py-3 text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'neurolab'
                ? 'bg-[var(--accent-saffron)] text-white font-semibold'
                : 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            🧠 न्यूरोलैब · NeuroLab
          </button>
          <div className="w-px bg-[var(--border-default)]" />
          <button
            onClick={() => setActiveTab('manas')}
            className={`px-6 py-3 text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'manas'
                ? 'bg-[var(--accent-saffron)] text-white font-semibold'
                : 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            🧘 मानस · Mind & Psychology
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'neurolab' ? (
            <motion.div
              key="neurolab"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <NeuroLabContent currentDate={neuroDate} onDateChange={setNeuroDate} />
            </motion.div>
          ) : (
            <motion.div
              key="manas"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <ManasContent currentDate={manasDate} onDateChange={setManasDate} />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}

function NeuroLabContent({ currentDate, onDateChange }: { currentDate: Date; onDateChange: (d: Date) => void }) {
  const activeIndex = getDayIndexForArray(currentDate, NEUROLAB_ENTRIES.length);
  const activeEntry = NEUROLAB_ENTRIES[activeIndex];

  const themeColor = THEME_COLORS[activeEntry.week_theme] ?? '#7A3A8A';
  const textToSpeak = `${activeEntry.fact_title}. Theme: ${activeEntry.week_theme_display}. The Science: ${activeEntry.core_science}. In Your Life: ${activeEntry.in_your_life}. Try This: ${activeEntry.practice}.`;

  return (
    <div className="space-y-6">
      {/* Header with Day Navigator */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
        <div className="text-left w-full sm:w-auto">
          <p className="section-label">Brain Science</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>न्यूरोलैब - NeuroLab</h1>
        </div>
        <DayNavigator currentDate={currentDate} onDateChange={onDateChange} />
      </div>

      {/* Top row with theme badge, region, and action buttons */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Theme Badge */}
          <span
            className="text-xs px-3 py-1 rounded-full font-medium text-white shadow-sm"
            style={{ background: themeColor }}
          >
            {activeEntry.week_theme_display} · {activeEntry.week_theme_hi}
          </span>

          {/* Brain Region (Anatomical Badge) */}
          {activeEntry.brain_region && (
            <span
              className="text-xs px-2.5 py-1 rounded-full border"
              style={{
                borderColor: 'var(--border-default)',
                color: 'var(--text-muted)',
                background: 'var(--bg-tertiary)'
              }}
            >
              🧠 {activeEntry.brain_region} {activeEntry.brain_region_hi ? `(${activeEntry.brain_region_hi})` : ''}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
          <RevisitButton roomId="neurolab" roomName="NeuroLab" contentTitle={activeEntry.fact_title} contentSummary={activeEntry.week_theme_display} />
          <SutraNoteButton roomId="neurolab" roomName="NeuroLab" contentTitle={activeEntry.fact_title} />
        </div>
      </div>

      {/* Fact Title Box */}
      <div
        className="card-base p-6 space-y-2 relative overflow-hidden"
        style={{
          borderLeft: `4px solid ${themeColor}`,
          background: 'color-mix(in srgb, var(--bg-secondary) 95%, transparent)'
        }}
      >
        <h2 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>
          {activeEntry.fact_title}
        </h2>
        <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
          {activeEntry.fact_title_hi}
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

      {/* 3 Core Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 1: The Science */}
        <div className="card-base p-5 flex flex-col justify-between space-y-3">
          <div>
            <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: themeColor }}>
              The Science
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {activeEntry.core_science}
            </p>
          </div>
        </div>

        {/* Section 2: In Your Life (Highlighted/Prominent) */}
        <div
          className="card-base p-5 flex flex-col justify-between space-y-3"
          style={{
            background: 'color-mix(in srgb, var(--accent-saffron) 4%, var(--bg-secondary))',
            border: '1px solid color-mix(in srgb, var(--accent-saffron) 15%, transparent)'
          }}
        >
          <div>
            <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: 'var(--accent-saffron)' }}>
              In Your Life
            </h3>
            <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>
              {activeEntry.in_your_life}
            </p>
          </div>
        </div>

        {/* Section 3: Try This (Gently Framed) */}
        <div className="card-base p-5 flex flex-col justify-between space-y-3">
          <div>
            <h3 className="section-label uppercase tracking-widest text-xs mb-2" style={{ color: 'var(--accent-moss)' }}>
              Try This
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {activeEntry.practice}
            </p>
          </div>
        </div>
      </div>

      {/* Closing Wonder (Centered, Italic) */}
      <div className="text-center py-6 px-4">
        <p
          className="font-serif italic text-base leading-relaxed max-w-xl mx-auto"
          style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}
        >
          &ldquo;{activeEntry.closing_wonder}&rdquo;
        </p>
      </div>

      <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
        <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
          Your brain is not fixed. Every repeated pattern redraws the path.
        </p>
      </div>
    </div>
  );
}

function ManasContent({ currentDate, onDateChange }: { currentDate: Date; onDateChange: (d: Date) => void }) {
  const activeIndex = getDayIndexForArray(currentDate, MANAS_ENTRIES.length);
  const activeEntry = MANAS_ENTRIES[activeIndex];

  const domainColor = DOMAIN_COLORS[activeEntry.domain] ?? '#6A4A7A';
  const textToSpeak = `${activeEntry.concept_name}. What it is: ${activeEntry.what_it_is}. A Moment You Know: ${activeEntry.real_scenario}. Why it evolved: ${activeEntry.why_it_evolved}. What to notice: ${activeEntry.what_to_notice}.`;

  return (
    <div className="space-y-6">
      {/* Header with Day Navigator */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
        <div className="text-left w-full sm:w-auto">
          <p className="section-label">Mind Room</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>मानस - Manas</h1>
        </div>
        <DayNavigator currentDate={currentDate} onDateChange={onDateChange} />
      </div>

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

      <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
        <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
          To observe the mind is to begin to be free of it.
        </p>
      </div>
    </div>
  );
}
