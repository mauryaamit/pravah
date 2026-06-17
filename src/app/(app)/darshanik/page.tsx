'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';

// ─── Data Types ───────────────────────────────────────────────────────────────

interface DarshanThinker {
  name: string;
  nameHindi: string;
  dates: string;
  origin: string;
  school: string;
  tagline: string;
  bio: string;
  core_idea_title: string;
  core_idea: string;
  why_it_matters: string;
  practice: string;
  closing_question: string;
}

interface DarshanTradition {
  id: string;
  name: string;
  nameHindi: string;
  color: string;
  emoji: string;
  thinkers: DarshanThinker[];
}

import { TRADITIONS } from './data';


// ─── Component ────────────────────────────────────────────────────────────────

export default function DarshanPage() {
  const [offset, setOffset] = useState(0);

  const effectiveIndex = getDayOfYear() - 1 + offset;
  const tradition = TRADITIONS[effectiveIndex % 5];
  const thinker = tradition.thinkers[effectiveIndex % tradition.thinkers.length];

  // Build the full text for ReadAloud
  const bioText = `${thinker.name}. ${thinker.dates}. ${thinker.origin}. ${thinker.bio}`;
  const coreText = `${thinker.core_idea_title}. ${thinker.core_idea}. Why it matters: ${thinker.why_it_matters}`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Philosophy Room</p>
          <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>
            दर्शन - Darshan
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Five traditions. Thirty thinkers. Ideas that have survived millennia by answering real questions.
          </p>
        </motion.div>

        {/* ── Date Navigation ───────────────────────────────────────────────── */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate"
          className="flex items-center justify-between gap-3">
          <button
            onClick={() => setOffset(o => o - 1)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-sm font-medium transition-all hover:scale-105 active:scale-95"
            style={{
              borderColor: 'var(--border-default)',
              color: 'var(--text-secondary)',
              background: 'var(--bg-secondary)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Yesterday
          </button>

          <button
            onClick={() => setOffset(0)}
            className="flex-1 text-center px-3.5 py-2 rounded-full border text-sm font-medium transition-all"
            style={{
              borderColor: offset === 0 ? tradition.color : 'var(--border-default)',
              color: offset === 0 ? tradition.color : 'var(--text-muted)',
              background: offset === 0
                ? `color-mix(in srgb, ${tradition.color} 8%, var(--bg-secondary))`
                : 'var(--bg-secondary)',
            }}
          >
            {offset === 0 ? 'Today' : offset > 0 ? `+${offset} days` : `${offset} days`}
          </button>

          <button
            onClick={() => setOffset(o => o + 1)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-sm font-medium transition-all hover:scale-105 active:scale-95"
            style={{
              borderColor: 'var(--border-default)',
              color: 'var(--text-secondary)',
              background: 'var(--bg-secondary)',
            }}
          >
            Tomorrow
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </motion.div>

        {/* ── Tradition Badge ───────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tradition-${tradition.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
              style={{
                background: `color-mix(in srgb, ${tradition.color} 12%, var(--bg-tertiary))`,
                color: tradition.color,
                border: `1px solid color-mix(in srgb, ${tradition.color} 30%, transparent)`,
              }}
            >
              <span>{tradition.emoji}</span>
              <span className="font-medium">{tradition.name}</span>
              <span className="font-devanagari text-xs opacity-80">{tradition.nameHindi}</span>
            </span>
          </motion.div>
        </AnimatePresence>

        {/* ── Thinker Card ──────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`thinker-${tradition.id}-${effectiveIndex % tradition.thinkers.length}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="card-base p-6 space-y-4"
          >
            {/* Name + Meta */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <h2 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>
                  {thinker.name}
                </h2>
                <p className="font-devanagari text-base" style={{ color: tradition.color }}>
                  {thinker.nameHindi}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
                  {thinker.dates} &middot; {thinker.origin}
                </p>
                <span
                  className="inline-block text-xs px-2.5 py-0.5 rounded-full font-medium mt-1"
                  style={{
                    background: `color-mix(in srgb, ${tradition.color} 10%, var(--bg-tertiary))`,
                    color: tradition.color,
                  }}
                >
                  {thinker.school}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <ReadAloudButton text={bioText} lang="en-IN" size="sm" />
                <RevisitButton
                  roomId="darshan"
                  roomName="Darshan"
                  contentTitle={`${thinker.name} - Bio`}
                  contentSummary={thinker.bio.slice(0, 150) + '...'}
                />
                <SutraNoteButton
                  roomId="darshan"
                  roomName="Darshan"
                  contentTitle={`${thinker.name} - Bio`}
                  className=""
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="font-serif italic text-base leading-relaxed"
              style={{ color: tradition.color, lineHeight: 1.7 }}>
              &ldquo;{thinker.tagline}&rdquo;
            </p>

            {/* Bio */}
            <div className="space-y-1">
              <p className="section-label">Who They Were</p>
            </div>
            <div className="space-y-3">
              {thinker.bio.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Core Idea Card ────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`core-${tradition.id}-${effectiveIndex % tradition.thinkers.length}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, delay: 0.07 }}
            className="card-base p-6 space-y-5"
          >
            {/* Core Idea Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-label mb-1">Core Teaching</p>
                <h3 className="font-serif text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {thinker.core_idea_title}
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <ReadAloudButton text={coreText} lang="en-IN" size="sm" />
                <RevisitButton
                  roomId="darshan"
                  roomName="Darshan"
                  contentTitle={`${thinker.name} - ${thinker.core_idea_title}`}
                  contentSummary={thinker.core_idea.slice(0, 150) + '...'}
                />
                <SutraNoteButton
                  roomId="darshan"
                  roomName="Darshan"
                  contentTitle={`${thinker.name} - ${thinker.core_idea_title}`}
                  className=""
                />
              </div>
            </div>

            {/* Core Idea Paragraphs */}
            <div className="space-y-3">
              {thinker.core_idea.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Why It Matters */}
            <div
              className="rounded-xl p-4 space-y-2"
              style={{
                background: `color-mix(in srgb, ${tradition.color} 7%, var(--bg-tertiary))`,
                border: `1px solid color-mix(in srgb, ${tradition.color} 20%, transparent)`,
              }}
            >
              <p className="section-label" style={{ color: tradition.color }}>Why It Matters</p>
              {thinker.why_it_matters.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Practice Box ──────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`practice-${tradition.id}-${effectiveIndex % tradition.thinkers.length}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="card-base p-5 border-l-4 space-y-2"
            style={{ borderLeftColor: tradition.color }}
          >
            <p className="section-label">Aaj Ka Abhyas / आज का अभ्यास</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {thinker.practice}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── Closing Question ──────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`question-${tradition.id}-${effectiveIndex % tradition.thinkers.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-center py-6 space-y-2"
          >
            <p className="section-label">Question for Today</p>
            <p className="font-serif italic text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: tradition.color, lineHeight: 1.75 }}>
              &ldquo;{thinker.closing_question}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── Footer ────────────────────────────────────────────────────────── */}
        <div className="text-center pb-4">
          <p className="font-serif italic text-xs" style={{ color: 'var(--text-faint)' }}>
            Five traditions. One question. Your examined life.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
