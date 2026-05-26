'use client';

import { getDayOfYear } from '@/lib/utils/date';
import { WORDS_OF_DAY, PHRASES_OF_DAY, FANCY_WORDS, GENZ_TERMS } from './data';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import PageTransition from '@/components/layout/PageTransition';
import { BookOpen, HelpCircle } from 'lucide-react';

export default function ShabdaPage() {
  const dayIndex = getDayOfYear() - 1;

  // Retrieve item for the day deterministically
  const wordItem = WORDS_OF_DAY[dayIndex % WORDS_OF_DAY.length];
  const phraseItem = PHRASES_OF_DAY[dayIndex % PHRASES_OF_DAY.length];
  const fancyItem = FANCY_WORDS[dayIndex % FANCY_WORDS.length];
  const genZItem = GENZ_TERMS[dayIndex % GENZ_TERMS.length];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>Shabda</h1>
          <p className="font-devanagari text-lg" style={{ color: '#2D6B6B' }}>शब्द — भाषा की खोज</p>
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            Expand your vocabulary with today's featured word, historical phrase origins, rare & beautiful untranslatables, and contemporary GenZ slang.
          </p>
        </div>

        {/* ─── Card 1: Word of the Day ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #2D6B6B' }}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2D6B6B] font-serif">Word of the Day</span>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
                {wordItem.word}
              </h2>
              <span className="text-sm font-mono text-[var(--text-muted)]">{wordItem.pronunciation}</span>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-teal-100 text-teal-800">
                {wordItem.part_of_speech}
              </span>
            </div>

            <p className="text-base italic leading-relaxed pt-1" style={{ color: 'var(--text-secondary)' }}>
              &ldquo;{wordItem.meaning}&rdquo;
            </p>
          </div>

          {/* Etymology box */}
          <div className="p-4 rounded-xl border-l-2 bg-[var(--bg-tertiary)]" style={{ borderColor: 'var(--border-strong)' }}>
            <span className="text-[10px] uppercase font-bold text-stone-500 block mb-1">Origin & Etymology</span>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {wordItem.etymology}
            </p>
          </div>

          {/* Usage sentence */}
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Usage</span>
            <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              &ldquo;{wordItem.usage_sentence}&rdquo;
            </p>
          </div>

          {/* Synonyms */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Synonyms & Related</span>
            <div className="flex flex-wrap gap-1.5">
              {wordItem.synonyms.map(syn => (
                <span 
                  key={syn} 
                  className="px-2.5 py-0.5 rounded-full text-xs bg-[var(--bg-tertiary)] border text-[var(--text-muted)]"
                  style={{ borderColor: 'var(--border-default)' }}
                >
                  {syn}
                </span>
              ))}
            </div>
          </div>

          {/* Read Aloud */}
          <div className="flex justify-end pt-2">
            <ReadAloudButton 
              text={`${wordItem.word}. Meaning: ${wordItem.meaning}. Example: ${wordItem.usage_sentence}`} 
              lang="en" 
              variant="pill" 
            />
          </div>
        </div>

        {/* ─── Card 2: Phrase of the Day ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #2D6B6B' }}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2D6B6B] font-serif">Phrase & Idiom Origin</span>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
              {phraseItem.phrase}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {phraseItem.meaning}
            </p>
          </div>

          {/* History Origin */}
          <div className="p-4 rounded-xl border-l-2 bg-[var(--bg-tertiary)]" style={{ borderColor: 'var(--border-strong)' }}>
            <span className="text-[10px] uppercase font-bold text-stone-500 block mb-1">How it originated</span>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {phraseItem.origin}
            </p>
          </div>

          {/* Phrase Usage */}
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Example</span>
            <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              &ldquo;{phraseItem.usage}&rdquo;
            </p>
          </div>

          {/* Read Aloud */}
          <div className="flex justify-end pt-2">
            <ReadAloudButton 
              text={`${phraseItem.phrase}. Meaning: ${phraseItem.meaning}. Origin: ${phraseItem.origin}`} 
              lang="en" 
              variant="pill" 
            />
          </div>
        </div>

        {/* ─── Card 3: Rare & Beautiful Word ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #2D6B6B' }}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2D6B6B] font-serif">Rare & Beautiful Word</span>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-serif font-bold text-3xl text-[var(--text-primary)]">
                {fancyItem.word}
              </h2>
              <span className="text-sm font-mono text-[var(--text-muted)]">{fancyItem.pronunciation}</span>
            </div>
            <p className="text-base italic leading-relaxed pt-1" style={{ color: 'var(--text-secondary)' }}>
              &ldquo;{fancyItem.meaning}&rdquo;
            </p>
          </div>

          {/* Why it exists */}
          <div className="p-4 rounded-xl border-l-2 bg-[var(--bg-tertiary)]" style={{ borderColor: 'var(--border-strong)' }}>
            <span className="text-[10px] uppercase font-bold text-stone-500 block mb-1">Why this word exists</span>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {fancyItem.why_it_exists}
            </p>
          </div>

          {/* Usage */}
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Example</span>
            <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              &ldquo;{fancyItem.usage}&rdquo;
            </p>
          </div>

          {/* Read Aloud */}
          <div className="flex justify-end pt-2">
            <ReadAloudButton 
              text={`${fancyItem.word}. Meaning: ${fancyItem.meaning}. Context: ${fancyItem.why_it_exists}`} 
              lang="en" 
              variant="pill" 
            />
          </div>
        </div>

        {/* ─── Card 4: GenZ Term ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #2D6B6B' }}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2D6B6B] font-serif">Contemporary Slang (GenZ)</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)', fontFamily: 'system-ui, sans-serif' }}>
              &ldquo;{genZItem.term}&rdquo;
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>Meaning:</strong> {genZItem.meaning}
            </p>
          </div>

          {/* Slang Origin */}
          <div className="p-4 rounded-xl border-l-2 bg-[var(--bg-tertiary)]" style={{ borderColor: 'var(--border-strong)' }}>
            <span className="text-[10px] uppercase font-bold text-stone-500 block mb-1">Cultural Origin</span>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {genZItem.origin}
            </p>
          </div>

          {/* Example */}
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Typical Example</span>
            <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              &ldquo;{genZItem.example}&rdquo;
            </p>
          </div>

          {/* Linguist note */}
          <div className="text-[11px] pt-2 border-t border-dashed border-stone-200/50" style={{ color: 'var(--text-faint)' }}>
            <strong>Linguist's Note:</strong> {genZItem.note}
          </div>

          {/* Read Aloud */}
          <div className="flex justify-end pt-2">
            <ReadAloudButton 
              text={`${genZItem.term}. Meaning: ${genZItem.meaning}. Example: ${genZItem.example}`} 
              lang="en" 
              variant="pill" 
            />
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
