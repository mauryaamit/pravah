'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import DayNavigator from '@/components/shared/DayNavigator';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import { selectDailyPieces, type TetwArticle } from './utils';
import { getCompanion } from './companions';

// ─── Constants ────────────────────────────────────────────────────────────────

const FOREST_GREEN = '#2C3E2D';
const FOREST_LIGHT = '#4A6741';
const FOREST_PALE  = '#E8F0E9';

const CATEGORIES = [
  'All',
  'Life & Personal Experience',
  'Arts, Culture & Language',
  'Psychology & Behavior',
  'Science & Technology',
  'Society, Politics & History',
  'Health & Medicine',
  'Environment & Nature',
  'Travel & Places',
  'Special Collections',
] as const;

// ─── Types ────────────────────────────────────────────────────────────────────

interface FetchState {
  status: 'idle' | 'loading' | 'live' | 'fallback' | 'error';
  articles: TetwArticle[];
  error?: string;
}

// ─── Typewriter Cursor ────────────────────────────────────────────────────────

function BlinkingCursor() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setVisible(v => !v), 530);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      className="inline-block w-[10px] h-[1.1em] ml-0.5 align-middle"
      style={{
        backgroundColor: FOREST_GREEN,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.05s',
        verticalAlign: 'text-bottom',
      }}
    />
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TypewriterPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [section, setSection] = useState<'essays' | 'articles'>('essays');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [fetchState, setFetchState] = useState<FetchState>({
    status: 'idle',
    articles: [],
  });
  const [readingPiece, setReadingPiece] = useState<TetwArticle | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [focusMode, setFocusMode] = useState(false);

  const readingRef = useRef<HTMLDivElement>(null);
  const hasFetched = useRef(false);

  // ── Fetch articles from /api/typewriter ──────────────────────────────────
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    setFetchState(s => ({ ...s, status: 'loading' }));

    fetch('/api/typewriter')
      .then(res => res.json())
      .then(data => {
        const articles: TetwArticle[] = data.articles ?? [];
        setFetchState({
          status: data.source === 'fallback' ? 'fallback' : 'live',
          articles,
        });
      })
      .catch((err: unknown) => {
        console.error('Typewriter fetch error:', err);
        setFetchState({ status: 'error', articles: [] });
      });
  }, []);

  // ── Daily selection ──────────────────────────────────────────────────────
  const selection = selectDailyPieces(fetchState.articles, currentDate);
  const displayPieces = section === 'essays' ? selection.essays : selection.articles;

  const filteredPieces = selectedCategory === 'All'
    ? displayPieces
    : displayPieces.filter(p => p.category === selectedCategory);

  // ── Reading overlay scroll progress ─────────────────────────────────────
  const handleScroll = useCallback(() => {
    if (readingRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = readingRef.current;
      const total = scrollHeight - clientHeight;
      if (total > 0) setScrollProgress((scrollTop / total) * 100);
    }
  }, []);

  useEffect(() => {
    if (readingPiece) {
      setScrollProgress(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setFocusMode(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [readingPiece]);

  // ── Speak text ───────────────────────────────────────────────────────────
  const getSpeakText = (piece: TetwArticle) => {
    const companion = getCompanion(piece);
    return `${piece.title} — ${piece.author ? `by ${piece.author}. ` : ''}Why this piece: ${companion.why_this_piece.slice(0, 400)}`;
  };

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <PageTransition>
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 select-none"
        style={{ fontFamily: "'Courier New', 'Courier', monospace" }}
      >

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6"
          style={{ borderColor: 'var(--border-default)' }}
        >
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1"
              style={{ color: FOREST_GREEN }}
            >
              The Electric Typewriter
            </p>
            <h1
              className="text-3xl font-normal leading-tight"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.01em' }}
            >
              टाइपराइटर <span className="text-xl opacity-60">· Typewriter</span>
              <BlinkingCursor />
            </h1>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              {fetchState.status === 'loading'
                ? 'Connecting to the archive...'
                : fetchState.status === 'live'
                  ? `${fetchState.articles.length} pieces from the live archive`
                  : fetchState.status === 'fallback' || fetchState.status === 'error'
                    ? 'Curated selection — offline archive'
                    : 'The finest longform writing on the web'}
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
        </div>

        {/* ── Status Badge ────────────────────────────────────────────── */}
        {fetchState.status !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <span
              className="text-[9px] px-2 py-0.5 border font-mono uppercase tracking-widest"
              style={{
                borderColor: fetchState.status === 'live' ? FOREST_GREEN : 'var(--border-default)',
                color: fetchState.status === 'live' ? FOREST_GREEN : 'var(--text-muted)',
                backgroundColor: fetchState.status === 'live' ? FOREST_PALE : 'transparent',
              }}
            >
              {fetchState.status === 'loading' && '◌ FETCHING'}
              {fetchState.status === 'live' && '● LIVE'}
              {fetchState.status === 'fallback' && '○ CURATED'}
              {fetchState.status === 'error' && '○ OFFLINE'}
            </span>
            {(fetchState.status === 'fallback' || fetchState.status === 'error') && (
              <span className="text-[10px]" style={{ color: 'var(--text-faint)' }}>
                Showing pre-curated collection
              </span>
            )}
          </motion.div>
        )}

        {/* ── Section Tabs ─────────────────────────────────────────────── */}
        <div
          className="flex gap-6 border-b"
          style={{ borderColor: 'var(--border-default)' }}
        >
          {(['essays', 'articles'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => { setSection(tab); setSelectedCategory('All'); }}
              className="pb-3 text-sm font-medium relative transition-colors cursor-pointer"
              style={{
                color: section === tab ? FOREST_GREEN : 'var(--text-muted)',
                fontFamily: "'Courier New', monospace",
              }}
            >
              {tab === 'essays' ? 'निबंध · Essays' : 'लेख · Articles'}
              {section === tab && (
                <motion.div
                  layoutId="typewriterActiveLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: FOREST_GREEN }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Category Filter ───────────────────────────────────────────── */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-3 py-1 text-[10px] font-mono whitespace-nowrap transition-all cursor-pointer border"
              style={{
                backgroundColor: selectedCategory === cat ? FOREST_GREEN : 'transparent',
                color: selectedCategory === cat ? 'white' : 'var(--text-muted)',
                borderColor: selectedCategory === cat ? FOREST_GREEN : 'var(--border-default)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Article Cards ─────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {fetchState.status === 'loading' ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 gap-4"
            >
              <div
                className="text-2xl font-mono"
                style={{ color: FOREST_GREEN }}
              >
                _ _ _ _ _
              </div>
              <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                Pulling from the archive...
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={section + selectedCategory + currentDate.toDateString()}
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {filteredPieces.length === 0 ? (
                <div
                  className="col-span-2 py-16 text-center text-sm font-mono"
                  style={{ color: 'var(--text-muted)' }}
                >
                  [ No pieces in this category today. Try another. ]
                </div>
              ) : (
                filteredPieces.map((piece, idx) => (
                  <TypewriterCard
                    key={piece.url + idx}
                    piece={piece}
                    onOpen={() => setReadingPiece(piece)}
                  />
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Reading Overlay ───────────────────────────────────────────── */}
        <AnimatePresence>
          {readingPiece && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex flex-col"
              style={{ backgroundColor: 'var(--bg-primary)', fontFamily: "'Courier New', monospace" }}
            >
              {/* Progress bar */}
              <div className="h-[3px] w-full absolute top-0 left-0" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div
                  className="h-full transition-all duration-75"
                  style={{ backgroundColor: FOREST_GREEN, width: `${scrollProgress}%` }}
                />
              </div>

              {/* Overlay header */}
              {!focusMode && (
                <div
                  className="flex items-center justify-between px-6 py-4 border-b select-none"
                  style={{ borderColor: 'var(--border-default)' }}
                >
                  <button
                    onClick={() => setReadingPiece(null)}
                    className="text-xs font-mono cursor-pointer transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = FOREST_GREEN)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    ← Back
                  </button>
                  <div className="flex items-center gap-3">
                    <ReadAloudButton text={getSpeakText(readingPiece)} lang="en-IN" size="sm" />
                    <RevisitButton
                      roomId="typewriter"
                      roomName="Typewriter"
                      contentTitle={readingPiece.title}
                      contentSummary={readingPiece.author}
                    />
                    <SutraNoteButton roomId="typewriter" roomName="Typewriter" contentTitle={readingPiece.title} />
                    <button
                      onClick={() => setFocusMode(true)}
                      className="px-3 py-1 text-[10px] border font-mono cursor-pointer transition-colors"
                      style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                    >
                      Focus
                    </button>
                  </div>
                </div>
              )}

              {focusMode && (
                <div className="absolute top-4 right-4 z-50">
                  <button
                    onClick={() => setFocusMode(false)}
                    className="px-3 py-1 text-[10px] font-mono border cursor-pointer opacity-50 hover:opacity-100"
                    style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                  >
                    Exit Focus
                  </button>
                </div>
              )}

              {/* Scrollable content */}
              <div
                ref={readingRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto px-6 py-12 md:px-12 max-w-2xl mx-auto w-full space-y-10 scrollbar-none"
              >
                <ReadingContent piece={readingPiece} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}

// ─── Card Component ───────────────────────────────────────────────────────────

function TypewriterCard({
  piece,
  onOpen,
}: {
  piece: TetwArticle;
  onOpen: () => void;
}) {
  const companion = getCompanion(piece);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex flex-col justify-between space-y-4 p-6 border cursor-default transition-shadow hover:shadow-lg"
      style={{
        borderColor: 'var(--border-default)',
        borderTop: `3px solid ${FOREST_GREEN}`,
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="space-y-3">
        {/* Category + read time */}
        <div
          className="flex justify-between items-center text-[9px] uppercase tracking-[0.15em] font-mono"
          style={{ color: 'var(--text-muted)' }}
        >
          <span style={{ color: FOREST_LIGHT }}>{piece.category}</span>
          <span style={{ color: 'var(--text-faint)' }}>{piece.estimatedRead ?? '~15 min'}</span>
        </div>

        {/* Title */}
        <h3
          className="text-xl leading-snug font-normal"
          style={{ color: 'var(--text-primary)', letterSpacing: '-0.01em' }}
        >
          {piece.title}
        </h3>

        {/* Author / publication */}
        <p className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
          {piece.author && <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{piece.author} — </span>}
          <span className="italic">{piece.publication}</span>
        </p>

        {/* Introduction snippet */}
        <p
          className="text-sm leading-relaxed italic pt-3 border-t"
          style={{
            color: 'var(--text-secondary)',
            borderColor: 'var(--border-default)',
          }}
        >
          &ldquo;{companion.introduction.slice(0, 160)}…&rdquo;
        </p>
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="text-[9px] font-mono" style={{ color: 'var(--text-faint)' }}>
          {piece.publication}
        </span>
        <button
          onClick={onOpen}
          className="text-[10px] font-mono px-4 py-1.5 transition-colors cursor-pointer text-white"
          style={{ backgroundColor: FOREST_GREEN }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = FOREST_LIGHT)}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = FOREST_GREEN)}
        >
          Open Companion →
        </button>
      </div>
    </motion.div>
  );
}

// ─── Reading Overlay Content ──────────────────────────────────────────────────

function ReadingContent({ piece }: { piece: TetwArticle }) {
  const companion = getCompanion(piece);

  return (
    <>
      {/* Meta */}
      <div className="text-center space-y-4">
        <p
          className="text-[9px] uppercase tracking-[0.2em] font-mono"
          style={{ color: FOREST_GREEN }}
        >
          {piece.category}
        </p>
        <h2
          className="text-3xl md:text-4xl leading-tight font-normal"
          style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
        >
          {piece.title}
        </h2>
        <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
          {piece.author && (
            <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>
              {piece.author} &mdash;{' '}
            </span>
          )}
          <span className="italic">{piece.publication}</span>
        </p>
      </div>

      {/* Introduction */}
      <div
        className="p-5 border-l-4"
        style={{
          borderColor: FOREST_GREEN,
          backgroundColor: 'var(--bg-secondary)',
        }}
      >
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
          {companion.introduction}
        </p>
      </div>

      {/* Companion sections */}
      <div className="space-y-10 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>

        <CompanionSection
          label="क्यों पढ़ें · Why This Piece"
          text={companion.why_this_piece}
        />
        <CompanionSection
          label="संदर्भ · Context"
          text={companion.context}
        />
        <CompanionSection
          label="मुख्य विचार · Main Ideas"
          text={companion.main_ideas}
        />
        <CompanionSection
          label="बौद्धिक परंपरा · Intellectual Lineage"
          text={companion.intellectual_lineage}
        />
        <CompanionSection
          label="प्रभाव · Why Influential"
          text={companion.why_influential}
        />

      </div>

      {/* Read Original CTA */}
      <div className="text-center pt-4">
        <a
          href={piece.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono px-6 py-2.5 text-white transition-colors"
          style={{ backgroundColor: FOREST_GREEN }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = FOREST_LIGHT)}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = FOREST_GREEN)}
        >
          मूल लेख पढ़ें · Read Original ↗
        </a>
        <p className="text-[9px] italic mt-2 font-mono" style={{ color: 'var(--text-faint)' }}>
          via The Electric Typewriter
        </p>
      </div>

      <div className="w-12 h-[1px] mx-auto" style={{ backgroundColor: 'var(--border-default)' }} />

      {/* Tags */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {companion.related_thinkers.map(t => (
            <span
              key={t}
              className="text-[9px] font-mono px-2.5 py-1 border"
              style={{
                borderColor: FOREST_GREEN + '60',
                color: FOREST_GREEN,
                backgroundColor: FOREST_PALE + '40',
              }}
            >
              👤 {t}
            </span>
          ))}
          {companion.related_books.map(b => (
            <span
              key={b}
              className="text-[9px] font-mono px-2.5 py-1"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-muted)',
              }}
            >
              📖 {b}
            </span>
          ))}
          {companion.related_concepts.map(c => (
            <span
              key={c}
              className="text-[9px] font-mono px-2.5 py-1"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-muted)',
              }}
            >
              💡 {c}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

// ─── Helper: Companion Section ────────────────────────────────────────────────

function CompanionSection({ label, text }: { label: string; text: string }) {
  if (!text) return null;
  return (
    <div className="space-y-3">
      <h3
        className="text-sm font-mono uppercase tracking-[0.1em]"
        style={{ color: 'var(--text-primary)' }}
      >
        {label}
      </h3>
      <p style={{ lineHeight: 1.85, fontFamily: 'var(--font-body, serif)', fontSize: '0.95rem' }}>
        {text}
      </p>
    </div>
  );
}
