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
import { ITIHAAS_DATA, type ItihaasDayEntry, type ItihaasCard } from './data';

type MainTab = 'history' | 'geography';

const TABS: { id: MainTab; label: string; emoji: string }[] = [
  { id: 'history', label: 'इतिहास · History', emoji: '📜' },
  { id: 'geography', label: 'भूगोल · Geography', emoji: '🌍' },
];

const PARCHMENT_GOLD = '#9A7E4A';

export default function ItihasPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<MainTab>('history');

  const dayIndex = getDayIndex(currentDate);
  const entry: ItihaasDayEntry = ITIHAAS_DATA[(dayIndex - 1) % ITIHAAS_DATA.length];

  const sectionData = entry[activeTab];
  const indian = sectionData.indian;
  const world = sectionData.world;

  const getTtsText = (card: ItihaasCard, contextLabel: string) => {
    return `${contextLabel} exploration: ${card.title}. Period or Location: ${card.period_or_coordinates}. Narrative: ${card.narrative}. Did you know: ${card.did_you_know}. Why it matters: ${card.why_it_matters}`;
  };

  const renderCard = (card: ItihaasCard, subtitle: string, subEmoji: string) => {
    const contextLabel = `${activeTab === 'history' ? 'History' : 'Geography'} (${subtitle})`;
    return (
      <div 
        className="card-base p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full border-l-4 transition-all duration-300 hover:shadow-md hover:translate-y-[-1px]"
        style={{ 
          borderLeftColor: PARCHMENT_GOLD 
        }}
      >
        <div className="space-y-4">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span 
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white"
                style={{ backgroundColor: PARCHMENT_GOLD }}
              >
                {subEmoji} {subtitle}
              </span>
              <h3 className="font-serif text-2xl font-bold mt-3 text-[var(--text-primary)]">{card.title}</h3>
              <p className="text-xs font-mono mt-0.5 text-[var(--text-muted)]">
                {activeTab === 'history' ? '🗓️ Period:' : '📍 Coordinates:'} {card.period_or_coordinates}
              </p>
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              <ReadAloudButton 
                text={getTtsText(card, contextLabel)} 
                lang="en-IN"
                size="sm"
              />
              <SutraNoteButton roomId="itihas" roomName="Itihas-Bhugoal" contentTitle={card.title} />
              <RevisitButton roomId="itihas" roomName="Itihas-Bhugoal" contentTitle={card.title} contentSummary={card.narrative} />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-[var(--border-default)]">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Narrative</p>
              <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{card.narrative}</p>
            </div>

            {card.key_figures && card.key_figures.length > 0 && (
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">
                  {activeTab === 'history' ? 'Key Figures' : 'Key Elements'}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {card.key_figures.map((figure, idx) => (
                    <span 
                      key={idx}
                      className="text-[9px] px-2 py-0.5 rounded border text-[var(--text-secondary)]"
                      style={{ 
                        backgroundColor: 'rgba(154, 126, 74, 0.06)',
                        borderColor: 'rgba(154, 126, 74, 0.15)'
                      }}
                    >
                      {figure}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Did You Know box */}
            <div className="p-4 rounded-xl border text-xs leading-relaxed text-[var(--text-secondary)] bg-[var(--bg-tertiary)]/20" style={{ borderColor: 'var(--border-default)' }}>
              <p className="text-[9px] uppercase font-bold tracking-widest mb-1.5" style={{ color: PARCHMENT_GOLD }}>Did You Know?</p>
              <p className="font-serif leading-relaxed text-[var(--text-secondary)]">{card.did_you_know}</p>
            </div>

            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Why It Matters</p>
              <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{card.why_it_matters}</p>
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
            <p className="section-label" style={{ color: PARCHMENT_GOLD }}>History & Geography Room</p>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>इतिहास-भूगोल - Itihas-Bhugoal</h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Explore the chronicles of human time and the wonders of earthly space.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300"
              style={{
                background: activeTab === tab.id ? PARCHMENT_GOLD : 'var(--bg-tertiary)',
                color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                border: `1px solid ${activeTab === tab.id ? PARCHMENT_GOLD : 'var(--border-default)'}`,
              }}
            >
              <span className="mr-1.5">{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Columns */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${dayIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              {renderCard(indian, 'भारत · India', '🇮🇳')}
            </div>
            <div>
              {renderCard(world, 'विश्व · World', '🌍')}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
