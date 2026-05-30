'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import DayNavigator from '@/components/shared/DayNavigator';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import { getDayIndexForArray } from '@/lib/utils/date';
import { PRATHA_DATA, type Festival, type Tribe, type PrathaEntry } from './data';

// ─── Colors per section ───────────────────────────────────────────────────────
const SECTION_META = [
  {
    key: 'utsav',
    label: 'उत्सव',
    sublabel: 'The Beautiful',
    emoji: '✨',
    color: '#C4873A',
    description: 'A festival that will make you wish you were there',
  },
  {
    key: 'achamba',
    label: 'अचंभा',
    sublabel: 'The Bewildering',
    emoji: '🤯',
    color: '#5B7FA6',
    description: 'A festival that will make you say: wait, what?',
  },
  {
    key: 'prashna',
    label: 'प्रश्न',
    sublabel: 'The Questionable',
    emoji: '⚠',
    color: '#8B4A4A',
    description: 'A festival that raises difficult questions',
  },
  {
    key: 'janjaati',
    label: 'जनजाति',
    sublabel: 'The Tribe',
    emoji: '🌍',
    color: '#4A6741',
    description: 'A human community unlike any other',
  },
] as const;

type SectionKey = (typeof SECTION_META)[number]['key'];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function PrathaPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeSection, setActiveSection] = useState<SectionKey>('utsav');

  const idx = getDayIndexForArray(currentDate, PRATHA_DATA.length);
  const entry: PrathaEntry = PRATHA_DATA[idx];

  const activeMeta = SECTION_META.find(s => s.key === activeSection)!;
  const color = activeMeta.color;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-8 select-none">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div>
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-2"
            style={{ color: 'var(--text-muted)' }}
          >
            Customs · Festivals · Tribes
          </p>
          <h1
            className="font-serif text-5xl font-light leading-none"
            style={{ color: 'var(--text-primary)' }}
          >
            प्रथा
          </h1>
          <p className="font-serif text-lg italic mt-1" style={{ color: 'var(--text-muted)' }}>
            Pratha — Taboo
          </p>
          <p
            className="text-sm mt-3 max-w-xl leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Every culture has practices that make complete sense from inside and look bewildering
            from outside. Pratha witnesses all of them — the beautiful, the astonishing,
            the troubling, and the human.
          </p>
        </div>

        <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />

        {/* ── Section Tabs ─────────────────────────────────────────────── */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6">
          {SECTION_META.map(s => {
            const isActive = activeSection === s.key;
            return (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className="flex-shrink-0 px-5 py-4 rounded-xl text-left transition-all duration-200 cursor-pointer"
                style={isActive
                  ? { backgroundColor: s.color + '18', borderLeft: `3px solid ${s.color}` }
                  : { backgroundColor: 'var(--bg-secondary)' }
                }
              >
                <div className="text-xl mb-0.5">{s.emoji}</div>
                <div
                  className="text-base font-serif"
                  style={{ color: isActive ? s.color : 'var(--text-primary)' }}
                >
                  {s.label}
                </div>
                <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {s.sublabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active section description */}
        <p className="text-sm italic" style={{ color: 'var(--text-muted)' }}>
          {activeMeta.description}
        </p>

        {/* ── Prashna warning ──────────────────────────────────────────── */}
        <AnimatePresence>
          {activeSection === 'prashna' && (
            <motion.div
              key="prashna-warning"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-start gap-3 px-4 py-3 rounded-lg overflow-hidden"
              style={{
                backgroundColor: '#8B4A4A18',
                border: '1px solid #8B4A4A40',
              }}
            >
              <span className="text-[#8B4A4A] text-base flex-shrink-0 mt-0.5">⚠</span>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                This section presents festivals and practices that are harmful, contested, or ethically
                troubling — shown with full context and without simplification. Understanding does not
                mean approval.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Content card ────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection + idx}
            variants={FADE_UP}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
          >
            {activeSection === 'janjaati'
              ? <TribeCard tribe={entry.janjaati} color={color} />
              : <FestivalCard
                  festival={entry[activeSection as 'utsav' | 'achamba' | 'prashna']}
                  color={color}
                />
            }
          </motion.div>
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}

// ─── Festival Card ────────────────────────────────────────────────────────────

function FestivalCard({ festival, color }: { festival: Festival; color: string }) {
  const speakText = `${festival.name}. ${festival.summary} ${festival.the_story} ${festival.what_they_believe}`;

  return (
    <div
      className="rounded-xl overflow-hidden shadow-sm"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Top accent bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: color }} />

      {/* Header metadata */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <Pill>📍 {festival.location}</Pill>
          <Pill>👥 {festival.community}</Pill>
          <Pill>📅 {festival.when}</Pill>
        </div>

        <h2 className="font-serif text-3xl font-light leading-tight" style={{ color: 'var(--text-primary)' }}>
          {festival.name}
        </h2>
        {festival.name_local && (
          <p className="text-sm italic mt-1" style={{ color: 'var(--text-muted)' }}>
            &ldquo;{festival.name_local}&rdquo;
          </p>
        )}

        <div className="flex flex-wrap gap-4 mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span>⏱ {festival.duration}</span>
          <span>🏛 Since {festival.origin_period}</span>
          <span>👤 {festival.participants}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mx-6 mb-6 px-5 py-4 rounded-lg" style={{ backgroundColor: color + '12' }}>
        <p className="font-serif text-base italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {festival.summary}
        </p>
      </div>

      {/* The Story */}
      <div className="px-6 pb-6">
        <SectionLabel color={color}>कहानी · The Story</SectionLabel>
        {festival.the_story.split('\n\n').map((para, i) => (
          <p key={i} className="text-base leading-loose mb-4" style={{ color: 'var(--text-primary)', lineHeight: 1.85 }}>
            {para.trim()}
          </p>
        ))}
      </div>

      {/* What They Believe */}
      <div
        className="mx-6 mb-6 border-l-4 px-5 py-4"
        style={{ borderColor: color }}
      >
        <SectionLabel color={color}>विश्वास · What They Believe</SectionLabel>
        <p className="font-serif text-base italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {festival.what_they_believe}
        </p>
      </div>

      {/* Did You Know */}
      <div
        className="mx-6 mb-6 rounded-lg px-5 py-5"
        style={{ backgroundColor: 'var(--bg-tertiary)' }}
      >
        <SectionLabel color={color}>✦ क्या आप जानते हैं · Did You Know</SectionLabel>
        <div className="space-y-3">
          {festival.did_you_know.map((fact, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-sm font-bold flex-shrink-0 mt-0.5" style={{ color }}>
                {i + 1}.
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feel after reading */}
      <div className="px-6 pb-4 text-center">
        <p className="text-sm italic" style={{ color: 'var(--text-muted)' }}>
          {festival.feel_after_reading}
        </p>
      </div>

      {/* Actions */}
      <div
        className="px-6 pb-6 pt-4 flex gap-3 border-t"
        style={{ borderColor: 'var(--bg-tertiary)' }}
      >
        <ReadAloudButton text={speakText} lang="en-IN" size="sm" />
        <SutraNoteButton roomId="pratha" roomName="Pratha" contentTitle={festival.name} />
        <RevisitButton
          roomId="pratha"
          roomName="Pratha"
          contentTitle={festival.name}
          contentSummary={festival.summary}
        />
      </div>
    </div>
  );
}

// ─── Tribe Card ───────────────────────────────────────────────────────────────

function TribeCard({ tribe, color }: { tribe: Tribe; color: string }) {
  const speakText = `${tribe.name}. ${tribe.summary} ${tribe.who_they_are} ${tribe.what_makes_them_unique}`;
  const isIsolated = tribe.contact_status.toLowerCase().includes('isolation')
    || tribe.contact_status.toLowerCase().includes('uncontacted');

  return (
    <div
      className="rounded-xl overflow-hidden shadow-sm"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Top accent bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: color }} />

      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <Pill>📍 {tribe.location}</Pill>
          <span
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={isIsolated
              ? { backgroundColor: '#C4873A20', color: '#C4873A' }
              : { backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-muted)' }
            }
          >
            {tribe.contact_status}
          </span>
        </div>

        <h2 className="font-serif text-3xl font-light leading-tight" style={{ color: 'var(--text-primary)' }}>
          {tribe.name}
        </h2>
        {tribe.name_local && (
          <p className="text-sm italic mt-1" style={{ color: 'var(--text-muted)' }}>
            Called themselves: &ldquo;{tribe.name_local}&rdquo;
          </p>
        )}

        <div className="flex flex-wrap gap-4 mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span>👥 {tribe.population}</span>
          <span>🏛 {tribe.how_old}</span>
          {tribe.language_family && <span>🗣 {tribe.language_family}</span>}
        </div>
      </div>

      {/* Summary */}
      <div className="mx-6 mb-6 px-5 py-4 rounded-lg" style={{ backgroundColor: color + '12' }}>
        <p className="font-serif text-base italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {tribe.summary}
        </p>
      </div>

      {/* Who They Are */}
      <div className="px-6 pb-6">
        <SectionLabel color={color}>परिचय · Who They Are</SectionLabel>
        {tribe.who_they_are.split('\n\n').map((para, i) => (
          <p key={i} className="text-base leading-loose mb-4" style={{ color: 'var(--text-primary)', lineHeight: 1.85 }}>
            {para.trim()}
          </p>
        ))}
      </div>

      {/* What Makes Them Unique */}
      <div className="mx-6 mb-6 border-l-4 px-5 py-4" style={{ borderColor: color }}>
        <SectionLabel color={color}>विशेषता · What Makes Them Unique</SectionLabel>
        <p className="font-serif text-base italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {tribe.what_makes_them_unique}
        </p>
      </div>

      {/* What We Can Learn */}
      <div className="px-6 pb-6">
        <SectionLabel color={color}>सीख · What We Can Learn</SectionLabel>
        <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)', lineHeight: 1.85 }}>
          {tribe.what_we_can_learn}
        </p>
      </div>

      {/* Conservation status */}
      <div
        className="mx-6 mb-6 px-5 py-4 rounded-lg border"
        style={{ borderColor: color + '50', backgroundColor: color + '08' }}
      >
        <div
          className="text-[10px] uppercase tracking-widest mb-2 font-semibold"
          style={{ color }}
        >
          🌿 Current Situation
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
          {tribe.conservation_status}
        </p>
      </div>

      {/* Did You Know */}
      <div
        className="mx-6 mb-6 rounded-lg px-5 py-5"
        style={{ backgroundColor: 'var(--bg-tertiary)' }}
      >
        <SectionLabel color={color}>✦ क्या आप जानते हैं · Did You Know</SectionLabel>
        <div className="space-y-3">
          {tribe.did_you_know.map((fact, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-sm font-bold flex-shrink-0 mt-0.5" style={{ color }}>
                {i + 1}.
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feel after reading */}
      <div className="px-6 pb-4 text-center">
        <p className="text-sm italic" style={{ color: 'var(--text-muted)' }}>
          {tribe.feel_after_reading}
        </p>
      </div>

      {/* Actions */}
      <div
        className="px-6 pb-6 pt-4 flex gap-3 border-t"
        style={{ borderColor: 'var(--bg-tertiary)' }}
      >
        <ReadAloudButton text={speakText} lang="en-IN" size="sm" />
        <SutraNoteButton roomId="pratha" roomName="Pratha" contentTitle={tribe.name} />
        <RevisitButton
          roomId="pratha"
          roomName="Pratha"
          contentTitle={tribe.name}
          contentSummary={tribe.summary}
        />
      </div>
    </div>
  );
}

// ─── Small helpers ────────────────────────────────────────────────────────────

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-xs px-3 py-1 rounded-full"
      style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      className="text-[10px] uppercase tracking-widest mb-3 font-semibold"
      style={{ color }}
    >
      {children}
    </div>
  );
}
