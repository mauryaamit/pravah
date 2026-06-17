'use client';
import { MENTAL_MODELS, ManthanModel } from './data';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';

// ── Discipline colour map ────────────────────────────────────────────────────
const DISCIPLINE_COLORS: Record<string, string> = {
  Philosophy:        '#6A3A8A',
  Psychology:        '#3A5A8A',
  Economics:         '#4A7C59',
  Mathematics:       '#8A6A3A',
  'Systems Theory':  '#5A7A6A',
  Epistemology:      '#7A4A6A',
  Logic:             '#6A5A3A',
  Investing:         '#3A6A5A',
  'Political Science': '#4A5A7A',
  Engineering:       '#6A4A3A',
  'Decision Theory': '#5A4A8A',
  Statistics:        '#3A7A6A',
  Biology:           '#4A7A4A',
  Chemistry:         '#7A5A3A',
  'Game Theory':     '#5A3A7A',
  'Military Strategy': '#6A5A4A',
  'Machine Learning':'#3A5A6A',
  'Information Theory': '#6A3A5A',
  Medicine:          '#5A6A3A',
};

function getDisciplineColor(discipline: string): string {
  return DISCIPLINE_COLORS[discipline] ?? '#6A4A7A';
}

// ── Data model ───────────────────────────────────────────────────────────────


// ── The 30 Mental Models ─────────────────────────────────────────────────────


// ── Discipline color badge ────────────────────────────────────────────────────
function DisciplineBadge({ discipline }: { discipline: string }) {
  const color = getDisciplineColor(discipline);
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{
        background: `color-mix(in srgb, ${color} 15%, var(--bg-tertiary))`,
        color: color,
        border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`,
      }}
    >
      {discipline}
    </span>
  );
}

// ── Content card ─────────────────────────────────────────────────────────────
function ContentCard({
  label,
  text,
  isBulletList = false,
  accentColor,
  modelName,
}: {
  label: string;
  text: string;
  isBulletList?: boolean;
  accentColor: string;
  modelName: string;
}) {
  const readText = text.replace(/^-\s+/gm, '').replace(/\n/g, ' ');
  const contentTitle = `${modelName} - ${label}`;
  return (
    <div className="card-base p-6 space-y-3 relative">
      <div className="absolute top-4 right-4 flex items-center gap-1">
        <ReadAloudButton text={`${label}. ${readText}`} lang="en-IN" size="sm" />
        <RevisitButton
          roomId="manthan"
          roomName="Manthan"
          contentTitle={contentTitle}
          contentSummary={text.slice(0, 150) + '...'}
        />
        <SutraNoteButton
          roomId="manthan"
          roomName="Manthan"
          contentTitle={contentTitle}
          className=""
        />
      </div>
      <p className="section-label" style={{ color: accentColor }}>
        {label}
      </p>
      {isBulletList ? (
        <ul className="space-y-1.5 pr-8">
          {text
            .split('\n')
            .filter(l => l.trim().startsWith('-'))
            .map((line, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}
              >
                <span style={{ color: accentColor, flexShrink: 0 }}>-</span>
                <span>{line.replace(/^-\s+/, '')}</span>
              </li>
            ))}
        </ul>
      ) : (
        <div className="pr-8 space-y-3">
          {text.split('\n\n').map((para, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}
            >
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ManthanPage() {
  const dayIndex = getDayOfYear() - 1;
  const todayModelIndex = dayIndex % MENTAL_MODELS.length;
  const todayModel = MENTAL_MODELS[todayModelIndex];
  const [selectedModel, setSelectedModel] = useState<ManthanModel>(todayModel);
  const [selectedIndex, setSelectedIndex] = useState<number>(todayModelIndex);

  const accentColor = getDisciplineColor(selectedModel.discipline);

  function selectModel(model: ManthanModel, index: number) {
    setSelectedModel(model);
    setSelectedIndex(index);
  }

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-7">

        {/* Header */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Mental Models Room</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>
            मंथन - Manthan
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            आज का मानसिक मॉडल / Today's Mental Model
          </p>
        </motion.div>

        {/* Model selector pills */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="flex gap-2 flex-wrap">
          {MENTAL_MODELS.map((m, i) => {
            const isSelected = selectedIndex === i;
            const isToday = i === todayModelIndex;
            const color = getDisciplineColor(m.discipline);
            return (
              <button
                key={m.id}
                onClick={() => selectModel(m, i)}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                style={{
                  background: isSelected
                    ? color
                    : 'var(--bg-tertiary)',
                  color: isSelected ? 'white' : 'var(--text-muted)',
                  border: isToday
                    ? `2px solid ${color}`
                    : '1px solid var(--border-default)',
                }}
              >
                M{i + 1}{isToday ? ' · Today' : ''}
              </button>
            );
          })}
        </motion.div>

        {/* Main content - animated on model change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedModel.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="space-y-5"
          >
            {/* Model identity header */}
            <div
              className="card-base p-6 space-y-3"
              style={{
                background: `color-mix(in srgb, ${accentColor} 6%, var(--bg-secondary))`,
                border: `1px solid color-mix(in srgb, ${accentColor} 25%, var(--border-default))`,
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1 flex-1">
                  <DisciplineBadge discipline={selectedModel.discipline} />
                  <h2 className="font-serif text-3xl mt-2" style={{ color: 'var(--text-primary)' }}>
                    {selectedModel.model_name}
                  </h2>
                  <p className="font-devanagari text-lg" style={{ color: 'var(--text-muted)' }}>
                    {selectedModel.model_name_hindi}
                  </p>
                  <p className="text-xs italic" style={{ color: 'var(--text-faint)' }}>
                    {selectedModel.origin}
                  </p>
                </div>
                <ReadAloudButton
                  text={`${selectedModel.model_name}. ${selectedModel.model_name_hindi}. ${selectedModel.core_idea}`}
                  lang="en-IN"
                  size="sm"
                />
              </div>
            </div>

            {/* The Idea */}
            <ContentCard
              label="The Idea"
              text={selectedModel.core_idea}
              accentColor={accentColor}
              modelName={selectedModel.model_name}
            />

            {/* In Practice */}
            <ContentCard
              label="In Practice"
              text={selectedModel.real_example}
              accentColor={accentColor}
              modelName={selectedModel.model_name}
            />

            {/* When to Use This */}
            <ContentCard
              label="When to Use This"
              text={selectedModel.when_to_use}
              isBulletList={true}
              accentColor={accentColor}
              modelName={selectedModel.model_name}
            />

            {/* Where It Breaks */}
            <ContentCard
              label="Where It Breaks"
              text={selectedModel.when_it_fails}
              accentColor={accentColor}
              modelName={selectedModel.model_name}
            />

            {/* Closing question */}
            <div
              className="card-base p-7 text-center space-y-3"
              style={{
                border: `1px solid color-mix(in srgb, ${accentColor} 30%, var(--border-default))`,
                background: `color-mix(in srgb, ${accentColor} 4%, var(--bg-secondary))`,
              }}
            >
              <div className="flex justify-end">
                <ReadAloudButton
                  text={selectedModel.closing_question}
                  lang="en-IN"
                  size="sm"
                />
              </div>
              <p className="section-label" style={{ color: accentColor }}>
                Sit with This
              </p>
              <p
                className="font-serif italic text-lg leading-relaxed"
                style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}
              >
                {selectedModel.closing_question}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <div className="text-center py-4">
          <p className="font-serif italic text-sm" style={{ color: 'var(--text-faint)' }}>
            A mental model is not a truth - it is a lens. Use it until a sharper one appears.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
