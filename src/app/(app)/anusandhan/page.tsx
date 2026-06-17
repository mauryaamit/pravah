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
  { id: 'science', name: 'Science', emoji: '🔬' },
  { id: 'psychology', name: 'Psychology', emoji: '🧠' },
  { id: 'math', name: 'Mathematics', emoji: '📐' },
  { id: 'sociology', name: 'Sociology', emoji: '🌐' },
  { id: 'economics', name: 'Economics', emoji: '📈' },
  { id: 'environment', name: 'Environment', emoji: '🌿' },
  { id: 'tech', name: 'Technology', emoji: '💻' }
];

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
        if (!res.ok) {
          throw new Error('Failed to fetch research paper recommendation');
        }
        const data = await res.json();
        if (active) {
          setPaper(data.paper || null);
        }
      } catch (err: any) {
        if (active) {
          setError(err.message || 'An error occurred while loading data.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchPaper();
    return () => {
      active = false;
    };
  }, [currentDate, activeTab]);

  const getTtsText = (paper: AnusandhanPaper) => {
    return `Daily research paper in ${paper.category}: ${paper.title}. Published in ${paper.journal} in ${paper.publication_year}. Abstract: ${paper.abstract}. Contemplative prompt: ${paper.reflection_question}`;
  };

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label" style={{ color: TEAL }}>Research Portal</p>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>अनुसंधान - Anusandhan</h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Daily deep-dives into influential research papers across major scientific and social disciplines.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 pb-2 overflow-x-auto border-b" style={{ borderColor: 'var(--border-default)' }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                }`}
                style={{
                  backgroundColor: isActive ? TEAL : 'transparent',
                  borderColor: isActive ? TEAL : 'var(--border-default)',
                }}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
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
              <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: TEAL }} />
              <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Analyzing paper metadata...</p>
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
                Could not retrieve today's research recommendation.
              </p>
              <p className="text-xs font-mono mt-2" style={{ color: 'var(--text-muted)' }}>
                {error}
              </p>
            </motion.div>
          ) : paper ? (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="card-base p-6 sm:p-8 space-y-6 flex flex-col border-l-4"
              style={{ borderLeftColor: TEAL }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span 
                      className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white"
                      style={{ backgroundColor: TEAL }}
                    >
                      Featured Paper
                    </span>
                    <h3 className="font-serif text-2xl font-bold mt-3 text-[var(--text-primary)] leading-tight">{paper.title}</h3>
                    <p className="text-xs sm:text-sm font-semibold mt-1" style={{ color: 'var(--text-muted)' }}>
                      {paper.authors.join(', ')} &middot; {paper.publication_year}
                    </p>
                    <p className="text-[10px] text-[var(--text-muted)] mt-1.5 font-mono">
                      📖 {paper.journal}
                    </p>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <ReadAloudButton 
                      text={getTtsText(paper)} 
                      lang="en-IN"
                      size="sm"
                    />
                    <SutraNoteButton roomId="anusandhan" roomName="Anusandhan" contentTitle={paper.title} />
                    <RevisitButton roomId="anusandhan" roomName="Anusandhan" contentTitle={paper.title} contentSummary={paper.abstract} />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[var(--border-default)]">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Abstract</p>
                    <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)] font-serif whitespace-pre-wrap">{paper.abstract}</p>
                  </div>

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
                          style={{ color: TEAL }}
                        >
                          🔗 Read Full Paper
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contemplation prompt */}
                <div 
                  className="p-4 rounded-lg border flex flex-col space-y-2 mt-4" 
                  style={{ 
                    backgroundColor: 'rgba(45, 95, 95, 0.05)', 
                    borderColor: 'rgba(45, 95, 95, 0.15)' 
                  }}
                >
                  <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: TEAL }}>
                    Contemplation Prompt
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed italic text-[var(--text-secondary)]">
                    "{paper.reflection_question}"
                  </p>
                </div>
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
