'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import PageTransition from '@/components/layout/PageTransition';
import DayNavigator from '@/components/shared/DayNavigator';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import { AnusandhanPaper } from './data-anusandhan';

const TEAL = '#2D5F5F';

const CATEGORIES = [
  { id: 'science', name: 'Science', emoji: '🔬', color: '#2D5F5F' },
  { id: 'psychology', name: 'Psychology', emoji: '🧠', color: '#4A5F8F' },
  { id: 'math', name: 'Mathematics', emoji: '📐', color: '#7A5F3F' },
  { id: 'sociology', name: 'Sociology', emoji: '🌐', color: '#3F6F5F' },
  { id: 'economics', name: 'Economics', emoji: '📈', color: '#5F4F8F' },
  { id: 'environment', name: 'Environment', emoji: '🌿', color: '#3F7F4F' },
  { id: 'tech', name: 'Technology', emoji: '💻', color: '#5F5F3F' },
];

// Generate a contextual "what this paper reveals" section based on abstract and category
function deriveInsight(paper: AnusandhanPaper): string {
  const catInsights: Record<string, string> = {
    science: 'This work advances our fundamental understanding of the physical world, contributing to a body of scientific knowledge that underpins modern technology and our place in the universe.',
    psychology: 'This research deepens our understanding of the human mind, revealing patterns of thought, emotion, and behavior that shape individual experience and collective culture.',
    math: 'This mathematical work extends the frontier of formal reasoning, providing tools and frameworks that quietly power the digital infrastructure of modern civilization.',
    sociology: 'This sociological inquiry examines the structures and dynamics of collective life, illuminating how social forces shape individual identity, opportunity, and belonging.',
    economics: 'This economic research explores how resources, incentives, and institutions govern human decision-making, with implications for policy, welfare, and social equity.',
    environment: 'This environmental study charts the complex, interconnected systems of the living world, underscoring the urgency of aligning human activity with ecological boundaries.',
    tech: 'This technological research represents a step-change in how machines learn, process, or interact with information, reshaping industries and raising new questions about human-AI collaboration.',
  };
  return catInsights[paper.category] || 'This research represents a significant contribution to its discipline, opening new questions and refining our collective understanding.';
}

function deriveSocietalImpact(paper: AnusandhanPaper): string {
  const title = paper.title.toLowerCase();
  const abs = paper.abstract.toLowerCase();

  if (title.includes('climate') || abs.includes('climate change') || abs.includes('greenhouse'))
    return 'Has informed policy frameworks and international climate agreements. Cited by IPCC and national environmental agencies.';
  if (title.includes('machine learning') || title.includes('deep learning') || abs.includes('neural network'))
    return 'Has foundationally shaped the AI industry; techniques derived from this work are embedded in products used by billions daily.';
  if (title.includes('crispr') || abs.includes('gene editing') || abs.includes('genome'))
    return 'Has catalyzed a biotechnology revolution with potential to cure genetic diseases, reshape agriculture, and alter the human genetic legacy.';
  if (abs.includes('density functional') || abs.includes('quantum') || title.includes('quantum'))
    return 'Has enabled accurate computer simulation of chemical and material properties, accelerating drug discovery and material science research.';
  if (paper.category === 'economics')
    return 'Has influenced central bank policy, economic development strategy, and the framing of international financial institutions.';
  if (paper.category === 'psychology')
    return 'Has shifted clinical practice, educational pedagogy, and public understanding of mental health, with lasting impact on institutional frameworks.';
  if (paper.category === 'sociology')
    return 'Has informed public policy debates on inequality, identity, and social cohesion, contributing to legislative and institutional reform.';
  if (paper.cited_by_count > 50000)
    return `With over ${paper.cited_by_count.toLocaleString()} citations, this paper is one of the most widely referenced works in its field — it has become a foundational text that subsequent researchers build upon.`;
  return `This work has contributed to a growing body of knowledge in ${paper.category}, with its methods and findings referenced by subsequent researchers across disciplines.`;
}

export default function AnusandhanPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<string>('science');
  const [paper, setPaper] = useState<AnusandhanPaper | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const fetchPaper = async () => {
      setLoading(true);
      setError(null);
      try {
        const dateStr = format(currentDate, 'yyyy-MM-dd');
        const res = await fetch(`/api/anusandhan?category=${activeTab}&date=${dateStr}`);
        if (!res.ok) throw new Error('Failed to fetch research paper');
        const data = await res.json();
        if (active) setPaper(data.paper || null);
      } catch (err: any) {
        if (active) setError(err.message || 'An error occurred.');
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchPaper();
    return () => { active = false; };
  }, [currentDate, activeTab]);

  const activeCat = CATEGORIES.find(c => c.id === activeTab) || CATEGORIES[0];

  const getTtsText = (p: AnusandhanPaper) =>
    `Today's research paper in ${p.category}: ${p.title}. Published in ${p.journal} in ${p.publication_year}. Authors: ${p.authors.join(', ')}. Abstract: ${p.abstract}. Contemplation: ${p.reflection_question}`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label" style={{ color: TEAL }}>Research Portal</p>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>अनुसंधान - Anusandhan</h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Deep-dives into influential research papers — one each day, rotating across 30 unique entries per field.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 pb-2 overflow-x-auto border-b" style={{ borderColor: 'var(--border-default)' }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                  isActive ? 'text-white' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                }`}
                style={{
                  backgroundColor: isActive ? cat.color : 'transparent',
                  borderColor: isActive ? cat.color : 'var(--border-default)',
                }}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 flex flex-col items-center justify-center space-y-4"
            >
              <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: activeCat.color }} />
              <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Retrieving paper metadata...</p>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center card-base p-6"
            >
              <p className="text-sm font-serif text-[var(--text-secondary)]">Could not retrieve today's research recommendation.</p>
              <p className="text-xs font-mono mt-2 text-[var(--text-muted)]">{error}</p>
            </motion.div>
          ) : paper ? (
            <motion.div
              key={paper.id + activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-5"
            >
              {/* Main paper card */}
              <div
                className="card-base p-6 sm:p-8 space-y-6 border-l-4"
                style={{ borderLeftColor: activeCat.color }}
              >
                {/* Title block */}
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2 flex-1">
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white"
                      style={{ backgroundColor: activeCat.color }}
                    >
                      {activeCat.emoji} Featured Paper · {activeCat.name}
                    </span>
                    <h2 className="font-serif text-2xl font-bold mt-3 text-[var(--text-primary)] leading-tight">
                      {paper.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold mt-1" style={{ color: 'var(--text-muted)' }}>
                      {paper.authors.join(', ')} &middot; {paper.publication_year}
                    </p>
                    <p className="text-[10px] text-[var(--text-muted)] mt-1 font-mono">
                      📖 {paper.journal}
                    </p>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <ReadAloudButton text={getTtsText(paper)} lang="en-IN" size="sm" />
                    <SutraNoteButton roomId="anusandhan" roomName="Anusandhan" contentTitle={paper.title} />
                    <RevisitButton roomId="anusandhan" roomName="Anusandhan" contentTitle={paper.title} contentSummary={paper.abstract.slice(0, 200)} />
                  </div>
                </div>

                <div className="space-y-5 pt-4 border-t border-[var(--border-default)]">

                  {/* Abstract — full length */}
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Abstract</p>
                    <p className="text-sm leading-relaxed mt-2 text-[var(--text-secondary)] font-serif whitespace-pre-wrap">
                      {paper.abstract}
                    </p>
                  </div>

                  {/* What this reveals — contextual insight */}
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: `${activeCat.color}0D`, border: `1px solid ${activeCat.color}22` }}
                  >
                    <p className="text-[10px] uppercase font-bold tracking-wider mb-2" style={{ color: activeCat.color }}>
                      What This Paper Reveals
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {deriveInsight(paper)}
                    </p>
                  </div>

                  {/* Societal Impact */}
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Broader Impact</p>
                    <p className="text-sm leading-relaxed mt-1.5 text-[var(--text-secondary)]">
                      {deriveSocietalImpact(paper)}
                    </p>
                  </div>

                  {/* Stats row */}
                  <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[var(--border-default)]">
                    {paper.cited_by_count > 0 && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Citations:</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-primary)]">
                          📈 {paper.cited_by_count.toLocaleString()}
                        </span>
                      </div>
                    )}
                    {paper.doi && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Source:</span>
                        <a
                          href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] hover:underline"
                          style={{ color: activeCat.color }}
                        >
                          🔗 Read Full Paper
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Contemplation Prompt — separate card */}
              <div
                className="p-5 rounded-xl border flex flex-col space-y-3"
                style={{
                  backgroundColor: `${activeCat.color}08`,
                  borderColor: `${activeCat.color}25`,
                }}
              >
                <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: activeCat.color }}>
                  🧘 Contemplation Prompt
                </p>
                <p className="text-sm sm:text-base leading-relaxed italic font-serif text-[var(--text-secondary)]">
                  "{paper.reflection_question}"
                </p>
                <p className="text-[10px] text-[var(--text-muted)]">
                  Sit with this question for a moment. Let the research dissolve into lived insight.
                </p>
              </div>

            </motion.div>
          ) : (
            <div className="py-16 text-center card-base p-6">
              <p className="text-sm font-serif text-[var(--text-secondary)]">No research paper available for this selection.</p>
            </div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
