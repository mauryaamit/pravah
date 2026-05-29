'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import DayNavigator from '@/components/shared/DayNavigator';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import { getDayIndexForArray } from '@/lib/utils/date';
import { LEKH_ENTRIES, UMBRELLA_GENRES, type LekhPiece } from './data';

export default function LekhPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [section, setSection] = useState<'essay' | 'article'>('essay');
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [readingPiece, setReadingPiece] = useState<LekhPiece | null>(null);
  const [focusMode, setFocusMode] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const readingContainerRef = useRef<HTMLDivElement>(null);

  // Active day index from seed data (0-19)
  const activeIndex = getDayIndexForArray(currentDate, LEKH_ENTRIES.length);
  const activeDayEntry = LEKH_ENTRIES[activeIndex];

  // Selected pieces based on active day and section switcher
  const piecesList = section === 'essay' ? activeDayEntry.essays : activeDayEntry.articles;

  // Filter pieces by selected genre
  const filteredPieces = selectedGenre === 'All'
    ? piecesList
    : piecesList.filter(p => p.genre === selectedGenre);

  // Handle scroll progress within reading overlay
  const handleScroll = () => {
    if (readingContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = readingContainerRef.current;
      const totalScroll = scrollHeight - clientHeight;
      if (totalScroll > 0) {
        setScrollProgress((scrollTop / totalScroll) * 100);
      }
    }
  };

  // Reset progress and body overflow lock when reading piece changes
  useEffect(() => {
    if (readingPiece) {
      setScrollProgress(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setFocusMode(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [readingPiece]);

  // Construct text for Speech synthesis
  const getSpeakText = (piece: LekhPiece) => {
    return `${piece.title} by ${piece.author}. Why this piece: ${piece.companion.why_this_piece}. Context: ${piece.companion.context}. Main Ideas: ${piece.companion.main_ideas}.`;
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 select-none relative">
        
        {/* Header with Title and DayNavigator */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b pb-6" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full md:w-auto">
            <p className="section-label" style={{ color: '#8B4A4A' }}>Knowledge & Essays</p>
            <h1 className="font-serif text-3xl font-light" style={{ color: 'var(--text-primary)' }}>
              लेख <span className="text-xl font-normal opacity-60">· Lekh</span>
            </h1>
            <p className="text-xs text-[var(--text-muted)] mt-1">Curated essays, articles, and companions</p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
        </div>

        {/* Section Switcher (Burgundy Theme) */}
        <div className="flex gap-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
          <button
            onClick={() => { setSection('essay'); setSelectedGenre('All'); }}
            className="pb-3 text-sm font-medium relative transition-colors cursor-pointer"
            style={{ color: section === 'essay' ? '#8B4A4A' : 'var(--text-muted)' }}
          >
            निबंध · Essays
            {section === 'essay' && (
              <motion.div
                layoutId="activeSectionLine"
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: '#8B4A4A' }}
              />
            )}
          </button>
          <button
            onClick={() => { setSection('article'); setSelectedGenre('All'); }}
            className="pb-3 text-sm font-medium relative transition-colors cursor-pointer"
            style={{ color: section === 'article' ? '#8B4A4A' : 'var(--text-muted)' }}
          >
            लेख · Articles
            {section === 'article' && (
              <motion.div
                layoutId="activeSectionLine"
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: '#8B4A4A' }}
              />
            )}
          </button>
        </div>

        {/* Horizontal Genre Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6">
          <button
            onClick={() => setSelectedGenre('All')}
            className="px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer border"
            style={{
              backgroundColor: selectedGenre === 'All' ? '#8B4A4A' : 'transparent',
              color: selectedGenre === 'All' ? 'white' : 'var(--text-muted)',
              borderColor: selectedGenre === 'All' ? '#8B4A4A' : 'var(--border-default)',
            }}
          >
            All
          </button>
          {UMBRELLA_GENRES.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGenre(g)}
              className="px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer border"
              style={{
                backgroundColor: selectedGenre === g ? '#8B4A4A' : 'transparent',
                color: selectedGenre === g ? 'white' : 'var(--text-muted)',
                borderColor: selectedGenre === g ? '#8B4A4A' : 'var(--border-default)',
              }}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Card List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={section + selectedGenre + activeIndex}
            variants={FADE_UP}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredPieces.map((piece, idx) => (
              <div
                key={piece.title + idx}
                className="card-base p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow relative overflow-hidden"
                style={{ borderTop: '4px solid #8B4A4A' }}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                    <span className="text-[#8B4A4A]">{piece.genre}</span>
                    <span>{piece.estimated_read}</span>
                  </div>
                  <h3 className="font-serif text-xl font-light text-[var(--text-primary)] leading-tight">
                    {piece.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    By <span className="font-medium text-[var(--text-secondary)]">{piece.author}</span> · <span className="italic">{piece.publication}</span> {piece.year && `(${piece.year})`}
                  </p>
                  <p className="text-sm italic leading-relaxed text-[var(--text-secondary)] pt-2 border-t border-[var(--border-default)]">
                    &ldquo;{piece.introduction}&rdquo;
                  </p>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <span className="text-[10px] text-[var(--text-faint)] italic">
                    {piece.sub_area}
                  </span>
                  <button
                    onClick={() => setReadingPiece(piece)}
                    className="text-xs font-semibold py-1.5 px-4 rounded transition-colors cursor-pointer text-white hover:opacity-90"
                    style={{ backgroundColor: '#8B4A4A' }}
                  >
                    पढ़ना शुरू करें → Begin Reading
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Reading View Full Screen Overlay */}
        <AnimatePresence>
          {readingPiece && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[var(--bg-primary)] flex flex-col"
            >
              {/* Scroll Progress Bar */}
              <div className="h-[3px] w-full bg-[var(--bg-tertiary)] absolute top-0 left-0">
                <div
                  className="h-full transition-all duration-75"
                  style={{ backgroundColor: '#8B4A4A', width: `${scrollProgress}%` }}
                />
              </div>

              {/* Header inside overlay */}
              {!focusMode && (
                <div className="flex items-center justify-between px-6 py-4 border-b select-none" style={{ borderColor: 'var(--border-default)' }}>
                  <button
                    onClick={() => setReadingPiece(null)}
                    className="flex items-center gap-2 text-xs font-medium cursor-pointer text-[var(--text-secondary)] hover:text-[#8B4A4A] transition-colors"
                  >
                    ← Back to Room
                  </button>
                  <div className="flex items-center gap-3">
                    <ReadAloudButton text={getSpeakText(readingPiece)} lang="en-IN" size="sm" />
                    <RevisitButton roomId="lekh" roomName="Lekh" contentTitle={readingPiece.title} contentSummary={readingPiece.author} />
                    <SutraNoteButton roomId="lekh" roomName="Lekh" contentTitle={readingPiece.title} />
                    <button
                      onClick={() => setFocusMode(true)}
                      className="px-3 py-1 text-xs border rounded hover:bg-[var(--bg-secondary)] cursor-pointer text-[var(--text-secondary)]"
                    >
                      Focus Mode
                    </button>
                  </div>
                </div>
              )}

              {/* Exit Focus Mode floating button */}
              {focusMode && (
                <div className="absolute top-4 right-4 z-50">
                  <button
                    onClick={() => setFocusMode(false)}
                    className="px-3 py-1 text-xs bg-[var(--bg-secondary)] border rounded shadow opacity-60 hover:opacity-100 cursor-pointer text-[var(--text-secondary)]"
                  >
                    Exit Focus Mode
                  </button>
                </div>
              )}

              {/* Scrollable Container */}
              <div
                ref={readingContainerRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto px-6 py-12 md:px-12 max-w-2xl mx-auto w-full space-y-10 scrollbar-none"
              >
                {/* Meta details */}
                <div className="text-center space-y-4">
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-[#8B4A4A]">
                    {readingPiece.genre} · {readingPiece.sub_area}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--text-primary)] leading-tight">
                    {readingPiece.title}
                  </h2>
                  <div className="text-xs text-[var(--text-muted)]">
                    Companion to the essay by <span className="font-medium text-[var(--text-secondary)]">{readingPiece.author}</span> · <span className="italic">{readingPiece.publication}</span> {readingPiece.year && `(${readingPiece.year})`}
                  </div>
                </div>

                {/* Before You Read */}
                <div className="p-5 border-l-4 rounded bg-[var(--bg-secondary)]" style={{ borderColor: '#8B4A4A' }}>
                  <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: '#8B4A4A' }}>
                    पढ़ने से पहले · Before You Read
                  </h4>
                  <p className="text-sm italic leading-relaxed text-[var(--text-primary)]">
                    {readingPiece.before_you_read}
                  </p>
                </div>

                {/* Companion Text */}
                <div className="space-y-8 leading-relaxed text-[var(--text-secondary)] text-base">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)]">क्यों पढ़ें · Why This Piece</h3>
                    <p style={{ lineHeight: 1.8 }}>{readingPiece.companion.why_this_piece}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)]">संदर्भ · Context</h3>
                    <p style={{ lineHeight: 1.8 }}>{readingPiece.companion.context}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)]">मुख्य विचार · Main Ideas</h3>
                    <p style={{ lineHeight: 1.8 }}>{readingPiece.companion.main_ideas}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)]">बौद्धिक परंपरा · Intellectual Lineage</h3>
                    <p style={{ lineHeight: 1.8 }}>{readingPiece.companion.intellectual_lineage}</p>
                  </div>
                </div>

                {/* Read Original Article Button */}
                <div className="text-center pt-4">
                  <a
                    href={readingPiece.original_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold py-2.5 px-6 rounded transition-colors text-white hover:opacity-90"
                    style={{ backgroundColor: '#8B4A4A' }}
                  >
                    मूल लेख पढ़ें · Read Original Article ↗
                  </a>
                </div>

                <div className="w-12 h-[1px] mx-auto bg-[var(--border-default)]" />

                {/* After You Read Section */}
                <div className="text-center py-6 px-4 space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: '#8B4A4A' }}>
                    पढ़ने के बाद · After You Read
                  </h4>
                  <p className="font-serif italic text-xl leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--text-primary)' }}>
                    &ldquo;{readingPiece.after_you_read}&rdquo;
                  </p>
                </div>

                {/* Tags / Pills section */}
                <div className="pt-4 space-y-4 border-t border-[var(--border-default)]">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {readingPiece.companion.related_thinkers.map(t => (
                      <span key={t} className="text-[10px] px-2.5 py-1 bg-[var(--bg-tertiary)] rounded-full text-[var(--text-muted)]">
                        👤 {t}
                      </span>
                    ))}
                    {readingPiece.companion.related_books.map(b => (
                      <span key={b} className="text-[10px] px-2.5 py-1 bg-[var(--bg-tertiary)] rounded-full text-[var(--text-muted)]">
                        📖 {b}
                      </span>
                    ))}
                    {readingPiece.companion.related_concepts.map(c => (
                      <span key={c} className="text-[10px] px-2.5 py-1 bg-[var(--bg-tertiary)] rounded-full text-[var(--text-muted)]">
                        💡 {c}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
