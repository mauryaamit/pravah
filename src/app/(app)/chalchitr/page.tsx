'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import PageTransition from '@/components/layout/PageTransition';
import DayNavigator from '@/components/shared/DayNavigator';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';

type CategoryKey = 'choice' | 'academy' | 'documentary' | 'short';
type LanguageKey = 'hindi' | 'indian_regional' | 'english' | 'world';

interface FilmMetadata {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  Type: string;
}

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
  const [contemporary, setContemporary] = useState<FilmMetadata | null>(null);
  const [classical, setClassical] = useState<FilmMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const fetchFilms = async () => {
      setLoading(true);
      setError(null);
      try {
        const dateStr = format(currentDate, 'yyyy-MM-dd');
        const res = await fetch(
          `/api/chalchitr?category=${activeCategory}&language=${activeLanguage}&date=${dateStr}`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch film recommendations');
        }
        const data = await res.json();
        if (active) {
          setContemporary(data.contemporary || null);
          setClassical(data.classical || null);
        }
      } catch (err: any) {
        if (active) {
          setError(err.message || 'An error occurred');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchFilms();
    return () => { active = false; };
  }, [currentDate, activeCategory, activeLanguage]);

  const getTtsText = (film: FilmMetadata, typeStr: string) => {
    return `${typeStr} film recommendation: ${film.Title}, directed by ${film.Director} in ${film.Year}. Genre: ${film.Genre}. Runtime: ${film.Runtime}. Plot: ${film.Plot}. Awards: ${film.Awards}.`;
  };

  const renderFilmCard = (film: FilmMetadata | null, typeLabel: string) => {
    if (!film) return null;
    return (
      <div
        className="card-base p-6 space-y-4 flex flex-col justify-between h-full border-l-4"
        style={{ borderLeftColor: GOLD }}
      >
        <div className="space-y-4">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1">
              <span
                className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white"
                style={{ backgroundColor: GOLD }}
              >
                {typeLabel}
              </span>
              <h3 className="font-serif text-2xl font-bold mt-3 text-[var(--text-primary)]">{film.Title}</h3>
              <p className="text-xs font-semibold mt-0.5" style={{ color: 'var(--text-muted)' }}>
                Dir. {film.Director} &middot; {film.Year} &middot; {film.Runtime}
              </p>
              {film.Genre && (
                <p className="text-[10px] text-[var(--text-muted)] mt-1.5 font-mono">
                  🎭 {film.Genre}
                </p>
              )}
              {film.Awards && film.Awards !== 'N/A' && (
                <p className="text-[10px] italic text-[var(--text-muted)] mt-1.5 font-mono">
                  🏅 {film.Awards}
                </p>
              )}
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              <ReadAloudButton
                text={getTtsText(film, typeLabel)}
                lang="en-IN"
                size="sm"
              />
              <SutraNoteButton roomId="chalchitr" roomName="Chalchitr" contentTitle={film.Title} />
              <RevisitButton roomId="chalchitr" roomName="Chalchitr" contentTitle={film.Title} contentSummary={film.Plot} />
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-[var(--border-default)]">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Synopsis</p>
              <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{film.Plot}</p>
            </div>

            {film.Actors && film.Actors !== 'N/A' && (
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Cast</p>
                <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{film.Actors}</p>
              </div>
            )}

            <div className="flex items-center gap-4 pt-1">
              {film.imdbRating && film.imdbRating !== 'N/A' && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">IMDb:</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-primary)]">
                    ⭐ {film.imdbRating}/10
                  </span>
                </div>
              )}
              {film.Rated && film.Rated !== 'N/A' && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Rated:</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-primary)]">
                    {film.Rated}
                  </span>
                </div>
              )}
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

        {/* Content View */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 flex flex-col items-center justify-center space-y-4"
            >
              <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: GOLD }} />
              <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Fetching today's films...</p>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center card-base p-6"
            >
              <p className="text-sm font-serif" style={{ color: 'var(--text-secondary)' }}>
                Could not retrieve today's recommendation.
              </p>
              <p className="text-xs font-mono mt-2" style={{ color: 'var(--text-muted)' }}>
                {error}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`${activeCategory}-${activeLanguage}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>{renderFilmCard(contemporary, 'Contemporary Masterpiece')}</div>
              <div>{renderFilmCard(classical, 'Classical Heritage')}</div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
