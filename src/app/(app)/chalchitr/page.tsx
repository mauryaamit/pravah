'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import DayNavigator from '@/components/shared/DayNavigator';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import { getDayIndex } from '@/lib/utils/date';
import { CHALCHITR_DATA, type ChalchitrDayEntry, type ChalchitrFilm } from './data';

type CategoryKey = 'choice' | 'academy' | 'documentary' | 'short';
type LanguageKey = 'hindi' | 'indian_regional' | 'english' | 'world';

const CATEGORIES: { id: CategoryKey; label: string; emoji: string }[] = [
  { id: 'choice', label: 'Cinephile Choice', emoji: '🎬' },
  { id: 'academy', label: 'Academy Awarded', emoji: '🏆' },
  { id: 'documentary', label: 'Documentary', emoji: '🎥' },
  { id: 'short', label: 'Short Film', emoji: '⏱' },
];

const LANGUAGES: { id: LanguageKey; label: string }[] = [
  { id: 'hindi', label: 'Hindi' },
  { id: 'indian_regional', label: 'Indian Regional' },
  { id: 'english', label: 'English' },
  { id: 'world', label: 'World Cinema' },
];

const GOLD = '#D4A853';

export default function ChalchitrPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('choice');
  const [activeLanguage, setActiveLanguage] = useState<LanguageKey>('hindi');

  const dayIndex = getDayIndex(currentDate);
  const entry: ChalchitrDayEntry = CHALCHITR_DATA[(dayIndex - 1) % CHALCHITR_DATA.length];

  const categoryGroup = entry.categories[activeCategory];
  const langGroup = categoryGroup[activeLanguage];
  const contemporary = langGroup.contemporary;
  const classical = langGroup.classical;

  const getTtsText = (film: ChalchitrFilm, typeStr: string) => {
    return `${typeStr} film recommendation: ${film.title}, directed by ${film.director} in ${film.year}. Duration: ${film.duration}. Synopsis: ${film.synopsis}. Why it matters: ${film.why_it_matters}`;
  };

  const renderFilmCard = (film: ChalchitrFilm, typeLabel: string) => {
    return (
      <div 
        className="card-base p-6 space-y-6 flex flex-col justify-between h-full border-l-4"
        style={{ borderLeftColor: GOLD }}
      >
        <div className="space-y-4">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span 
                className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white"
                style={{ backgroundColor: GOLD }}
              >
                {typeLabel}
              </span>
              <h3 className="font-serif text-2xl font-bold mt-3 text-[var(--text-primary)]">{film.title}</h3>
              <p className="text-xs font-semibold mt-0.5" style={{ color: 'var(--text-muted)' }}>
                Dir. {film.director} &middot; {film.year} &middot; {film.duration}
              </p>
              {film.awards && film.awards.length > 0 && (
                <p className="text-[10px] italic text-[var(--text-muted)] mt-1.5 font-mono">
                  🏅 {film.awards.join(', ')}
                </p>
              )}
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              <ReadAloudButton 
                text={getTtsText(film, typeLabel)} 
                lang="en-IN"
                size="sm"
              />
              <SutraNoteButton roomId="chalchitr" roomName="Chalchitr" contentTitle={film.title} />
              <RevisitButton roomId="chalchitr" roomName="Chalchitr" contentTitle={film.title} contentSummary={film.synopsis} />
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-[var(--border-default)]">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Synopsis</p>
              <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{film.synopsis}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Why It Matters</p>
              <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{film.why_it_matters}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label" style={{ color: GOLD }}>Cinephile Room</p>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>चलचित्र - Chalchitr</h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Curated masterworks of celluloid history - contemporary landmarks and timeless classics.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
        </div>

        {/* Category switcher */}
        <div className="flex gap-2 flex-wrap border-b pb-3" style={{ borderColor: 'var(--border-default)' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                activeCategory === cat.id ? 'bg-[#D4A853] text-black font-bold shadow-md' : 'text-[var(--text-muted)] bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
              }`}
              style={{ border: `1px solid ${activeCategory === cat.id ? GOLD : 'transparent'}` }}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Language selector */}
        <div className="flex gap-2 border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
          {LANGUAGES.map(lang => (
            <button
              key={lang.id}
              onClick={() => setActiveLanguage(lang.id)}
              className={`px-3 py-1.5 text-xs font-medium relative transition-colors ${
                activeLanguage === lang.id ? 'text-[#D4A853] font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {lang.label}
              {activeLanguage === lang.id && (
                <motion.div
                  layoutId="activeLanguageLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: GOLD }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Display Side-by-Side Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeLanguage}-${dayIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              {renderFilmCard(contemporary, 'Contemporary Masterpiece')}
            </div>
            <div>
              {renderFilmCard(classical, 'Classical Heritage')}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
