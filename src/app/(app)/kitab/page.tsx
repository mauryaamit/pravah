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
import { KITAB_DATA, type KitabDayEntry, type KitabBook } from './data';

type TabKey = 'hindi' | 'english' | 'indian_regional' | 'world' | 'classical_heritage';

const TABS: { id: TabKey; label: string }[] = [
  { id: 'hindi', label: 'हिन्दी · Hindi' },
  { id: 'english', label: 'English' },
  { id: 'indian_regional', label: 'Indian Regional' },
  { id: 'world', label: 'World Literature' },
  { id: 'classical_heritage', label: 'Classical Heritage' },
];

const AGED_GOLD = '#9A7E4A';
const BADGE_GOLD = '#B38B3E';

export default function KitabPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<TabKey>('hindi');

  const dayIndex = getDayIndex(currentDate);
  const entry: KitabDayEntry = KITAB_DATA[(dayIndex - 1) % KITAB_DATA.length];

  const langGroup = entry.tabs[activeTab];
  const contemporary = langGroup.contemporary;
  const classical = langGroup.classical;

  const getTtsText = (book: KitabBook, typeStr: string) => {
    return `${typeStr} book recommendation: ${book.title} by ${book.author}, published in ${book.year}. Citation: ${book.citation}. Summary: ${book.summary}. Opening line: ${book.opening_line}. Recommended if you: ${book.read_if}`;
  };

  const renderBookCard = (book: KitabBook, typeLabel: string) => {
    return (
      <div 
        className="card-base p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full border-l-4 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
        style={{ 
          borderLeftColor: AGED_GOLD 
        }}
      >
        <div className="space-y-4">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span 
                className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white"
                style={{ backgroundColor: BADGE_GOLD }}
              >
                {typeLabel}
              </span>
              <h3 className="font-serif text-2xl font-bold mt-3 text-[var(--text-primary)]">{book.title}</h3>
              <p className="text-sm font-semibold mt-0.5" style={{ color: AGED_GOLD }}>
                By {book.author} &middot; {book.year}
              </p>
              <p className="text-[10px] text-[var(--text-muted)] mt-1 italic font-mono">
                {book.genre}
              </p>
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              <ReadAloudButton 
                text={getTtsText(book, typeLabel)} 
                lang="en-IN"
                size="sm"
              />
              <SutraNoteButton roomId="kitab" roomName="Kitab" contentTitle={book.title} />
              <RevisitButton roomId="kitab" roomName="Kitab" contentTitle={book.title} contentSummary={book.summary} />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-[var(--border-default)]">
            {/* Opening Line Callout */}
            <div className="p-4 rounded-xl border italic text-xs leading-relaxed text-[var(--text-secondary)] relative bg-[var(--bg-tertiary)]/30" style={{ borderColor: 'var(--border-default)' }}>
              <span className="absolute -top-3 left-3 text-3xl font-serif leading-none" style={{ color: 'rgba(154, 126, 74, 0.25)' }}>“</span>
              <p className="pl-4 font-serif">{book.opening_line}</p>
            </div>

            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Summary</p>
              <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{book.summary}</p>
            </div>

            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Read If</p>
              <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{book.read_if}</p>
            </div>

            {book.similar_books && book.similar_books.length > 0 && (
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Similar Masterworks</p>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {book.similar_books.map((s, idx) => (
                    <span 
                      key={idx}
                      className="text-[9px] px-2 py-0.5 rounded bg-[var(--bg-tertiary)] border border-[var(--border-default)] text-[var(--text-primary)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {book.purchase_or_info_link && (
          <div className="pt-4 border-t border-[var(--border-default)] flex justify-between items-center gap-4">
            <span className="text-[10px] text-[var(--text-muted)] font-mono select-all truncate max-w-[200px]">
              {book.citation}
            </span>
            <a 
              href={book.purchase_or_info_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold hover:underline flex items-center gap-1 flex-shrink-0"
              style={{ color: AGED_GOLD }}
            >
              Info / Wiki &rarr;
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label" style={{ color: AGED_GOLD }}>Books Room</p>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>किताब - Kitab</h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Curated daily book recommendations spanning classic lore and modern voices.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
        </div>

        {/* Tab switchers */}
        <div className="flex gap-1.5 flex-wrap border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300"
              style={{
                background: activeTab === tab.id ? BADGE_GOLD : 'var(--bg-tertiary)',
                color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                border: `1px solid ${activeTab === tab.id ? BADGE_GOLD : 'var(--border-default)'}`,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Book recommendations view */}
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
              {renderBookCard(contemporary, 'Contemporary Recommendation')}
            </div>
            <div>
              {renderBookCard(classical, 'Classical Landmark')}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
