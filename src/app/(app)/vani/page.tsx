'use client';

import { useState } from 'react';
import { getDayOfYear } from '@/lib/utils/date';
import { SHLOKAS, DOHAS, CHAUPAIS, LOK_KATHAS } from './data';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import PageTransition from '@/components/layout/PageTransition';
import { BookOpen, HelpCircle, ArrowLeft, ArrowRight, Languages } from 'lucide-react';

export default function VaniPage() {
  const [showIast, setShowIast] = useState(false);
  const dayIndex = getDayOfYear() - 1;

  // Retrieve item for the day deterministically
  const shlokaItem = SHLOKAS[dayIndex % SHLOKAS.length];
  const dohaItem = DOHAS[dayIndex % DOHAS.length];
  const chaupaiItem = CHAUPAIS[dayIndex % CHAUPAIS.length];
  const lokKathaItem = LOK_KATHAS[dayIndex % LOK_KATHAS.length];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>Vani</h1>
          <p className="font-devanagari text-lg" style={{ color: '#8B3A3A' }}>वाणी — सरस्वती का वरदान</p>
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            Daily wisdom from ancient Sanskrit shlokas, Kabir's dohas, Ramcharitmanas verses, and regional folk wisdom.
          </p>
        </div>

        {/* ─── Card 1: Shloka ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #8B3A3A' }}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B3A3A] font-serif">आज का श्लोक · Shloka of the Day</span>
            <button
              onClick={() => setShowIast(!showIast)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border hover:bg-[var(--bg-tertiary)] transition-all"
              style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
            >
              <Languages size={13} />
              {showIast ? 'Show Devanagari' : 'Show Transliteration'}
            </button>
          </div>

          {/* Main Shloka Text */}
          <div className="py-2 text-center">
            <p 
              className={showIast ? "font-serif italic text-lg leading-relaxed" : "font-devanagari text-xl sm:text-2xl leading-loose font-semibold"}
              style={{ color: 'var(--text-primary)', whiteSpace: 'pre-line' }}
            >
              {showIast ? shlokaItem.iast : shlokaItem.shloka}
            </p>
            <p className="text-xs font-serif text-right italic mt-3" style={{ color: 'var(--text-muted)' }}>
              — {shlokaItem.source}
            </p>
          </div>

          <div className="border-t pt-4 space-y-3" style={{ borderColor: 'var(--border-subtle)' }}>
            {/* Hindi Meaning */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">अर्थ (Hindi)</span>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
                {shlokaItem.meaning_hindi}
              </p>
            </div>

            {/* English Meaning */}
            <div className="space-y-1 pt-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">Translation (English)</span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {shlokaItem.meaning_english}
              </p>
            </div>

            {/* Read Aloud */}
            <div className="flex justify-end pt-2">
              <ReadAloudButton 
                text={`${shlokaItem.shloka}. अर्थ: ${shlokaItem.meaning_hindi}`} 
                lang="hi-IN" 
                variant="pill" 
              />
            </div>
          </div>
        </div>

        {/* ─── Card 2: Doha ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #8B3A3A' }}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B3A3A] font-serif">आज का दोहा · Doha of the Day</span>
            <span className="text-xs italic" style={{ color: 'var(--text-faint)' }}>Poet: {dohaItem.poet}</span>
          </div>

          {/* Doha Text */}
          <div className="py-2 text-center">
            <p 
              className="font-devanagari text-xl sm:text-2xl leading-loose font-semibold"
              style={{ color: 'var(--text-primary)', whiteSpace: 'pre-line' }}
            >
              {dohaItem.doha}
            </p>
            <p className="text-xs font-serif text-right italic mt-3" style={{ color: 'var(--text-muted)' }}>
              — {dohaItem.poet}
            </p>
          </div>

          <div className="border-t pt-4 space-y-2" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">अर्थ</span>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
                {dohaItem.meaning_hindi}
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <ReadAloudButton 
                text={`${dohaItem.doha}. अर्थ: ${dohaItem.meaning_hindi}`} 
                lang="hi-IN" 
                variant="pill" 
              />
            </div>
          </div>
        </div>

        {/* ─── Card 3: Chaupai ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #8B3A3A' }}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B3A3A] font-serif">आज की चौपाई · Ramcharitmanas Verse</span>
            <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-800 text-[10px] font-semibold">
              {chaupaiItem.kand}
            </span>
          </div>

          {/* Chaupai Text */}
          <div className="py-2 text-center">
            <p 
              className="font-devanagari text-xl sm:text-2xl leading-loose font-semibold"
              style={{ color: 'var(--text-primary)', whiteSpace: 'pre-line' }}
            >
              {chaupaiItem.chaupai}
            </p>
            <p className="text-xs font-serif text-right italic mt-3" style={{ color: 'var(--text-muted)' }}>
              — श्रीरामचरितमानस ({chaupaiItem.kand})
            </p>
          </div>

          <div className="border-t pt-4 space-y-2" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">अर्थ</span>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
                {chaupaiItem.meaning_hindi}
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <ReadAloudButton 
                text={`${chaupaiItem.chaupai}. अर्थ: ${chaupaiItem.meaning_hindi}`} 
                lang="hi-IN" 
                variant="pill" 
              />
            </div>
          </div>
        </div>

        {/* ─── Card 4: Lok Katha / Folk Wisdom ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #8B3A3A' }}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B3A3A] font-serif">आज की कहावत · Dialect Folk Saying</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(139, 58, 58, 0.1)', color: '#8B3A3A' }}>
              {lokKathaItem.language}
            </span>
          </div>

          {/* Saying Text */}
          <div className="py-2 text-center">
            <p 
              className="font-devanagari text-xl sm:text-2xl leading-loose font-semibold italic"
              style={{ color: 'var(--text-primary)' }}
            >
              &ldquo;{lokKathaItem.saying}&rdquo;
            </p>
          </div>

          <div className="border-t pt-4 space-y-2" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">कहावत का अर्थ</span>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
                {lokKathaItem.meaning_hindi}
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <ReadAloudButton 
                text={`${lokKathaItem.saying}. इसका अर्थ है: ${lokKathaItem.meaning_hindi}`} 
                lang="hi-IN" 
                variant="pill" 
              />
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
