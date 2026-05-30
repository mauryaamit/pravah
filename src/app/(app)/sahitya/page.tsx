'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray } from '@/lib/utils/date';
import DayNavigator from '@/components/shared/DayNavigator';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';

// Data imports
import { SROT_ENTRIES, type SrotEntry } from './data';
import { INDIAN_WRITERS, type Language as IndianLanguage, type Era as IndianEra } from './data-indian';
import { ENGLISH_WRITERS, type Era as EnglishEra } from './data-english';
import { WORLD_WRITERS, type Era as WorldEra } from './data-world';

// Component imports
import WriterCard from '@/components/sahitya/WriterCard';

type Tab = 'companion' | 'indian' | 'english' | 'world';

export default function SahityaPage() {
  const [activeTab, setActiveTab] = useState<Tab>('companion');

  // Independent date states for each tab
  const [companionDate, setCompanionDate] = useState<Date>(new Date());
  const [indianDate, setIndianDate] = useState<Date>(new Date());
  const [englishDate, setEnglishDate] = useState<Date>(new Date());
  const [worldDate, setWorldDate] = useState<Date>(new Date());

  // Filters for Indian Writers
  const [indianLang, setIndianLang] = useState<IndianLanguage>('hindi');
  const [indianEra, setIndianEra] = useState<IndianEra>('contemporary');

  // Filters for English & World
  const [englishEra, setEnglishEra] = useState<EnglishEra>('contemporary');
  const [worldEra, setWorldEra] = useState<WorldEra>('contemporary');

  // 1. Resolve Reading Companion (Srot) Entry
  const compIndex = getDayIndexForArray(companionDate, SROT_ENTRIES.length);
  const companionEntry = SROT_ENTRIES[compIndex];

  // 2. Resolve Indian Writer Entry
  const filteredIndian = INDIAN_WRITERS.filter(
    (w) => w.language === indianLang && w.era === indianEra
  );
  const indIndex = filteredIndian.length > 0 
    ? getDayIndexForArray(indianDate, filteredIndian.length) 
    : 0;
  const indianWriter = filteredIndian[indIndex];

  // 3. Resolve English Writer Entry
  const filteredEnglish = ENGLISH_WRITERS.filter((w) => w.era === englishEra);
  const engIndex = filteredEnglish.length > 0 
    ? getDayIndexForArray(englishDate, filteredEnglish.length) 
    : 0;
  const englishWriter = filteredEnglish[engIndex];

  // 4. Resolve World Writer Entry
  const filteredWorld = WORLD_WRITERS.filter((w) => w.era === worldEra);
  const wrldIndex = filteredWorld.length > 0 
    ? getDayIndexForArray(worldDate, filteredWorld.length) 
    : 0;
  const worldWriter = filteredWorld[wrldIndex];

  // TTS Reader logic for Reading Companion
  const companionTTS = companionEntry 
    ? `Reading companion today. Title: ${companionEntry.title}. Original source: ${companionEntry.original_source}. Domain: ${companionEntry.domain}. Before you read: ${companionEntry.before_you_read}. ${companionEntry.the_piece}. Reflection: ${companionEntry.after_you_read}` 
    : '';

  // Tab definitions
  const tabs = [
    { id: 'companion', label: 'Companion', labelHi: 'सहयात्री' },
    { id: 'indian', label: 'Indian Writers', labelHi: 'भारतीय लेखक' },
    { id: 'english', label: 'English Writers', labelHi: 'अंग्रेजी लेखक' },
    { id: 'world', label: 'World Writers', labelHi: 'विश्व लेखक' },
  ] as const;

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label" style={{ color: 'var(--room-sahitya)' }}>Sahitya Room</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>साहित्य - Sahitya</h1>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Enter the workshops of the world&apos;s greatest authors and rediscover the written word.
            </p>
          </div>
          
          {/* Day Navigator mapped based on active tab */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {activeTab === 'companion' && (
              <>
                <ReadAloudButton text={companionTTS} lang="en-IN" size="sm" />
                <DayNavigator currentDate={companionDate} onDateChange={setCompanionDate} />
              </>
            )}
            {activeTab === 'indian' && (
              <DayNavigator currentDate={indianDate} onDateChange={setIndianDate} />
            )}
            {activeTab === 'english' && (
              <DayNavigator currentDate={englishDate} onDateChange={setEnglishDate} />
            )}
            {activeTab === 'world' && (
              <DayNavigator currentDate={worldDate} onDateChange={setWorldDate} />
            )}
          </div>
        </div>

        {/* Pill Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center border-b pb-3 border-[var(--border-default)]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 cursor-pointer text-center"
                style={{
                  backgroundColor: isActive
                    ? 'var(--room-sahitya)'
                    : 'transparent',
                  borderColor: isActive ? 'var(--room-sahitya)' : 'var(--border-default)',
                  color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                }}
              >
                <div>{tab.label}</div>
                <div className="font-devanagari text-[10px] mt-0.5 opacity-90">{tab.labelHi}</div>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === 'companion' && (
            <motion.div
              key="companion"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {companionEntry ? (
                <div className="card-base p-6 sm:p-8 space-y-6">
                  {/* Companion Header */}
                  <div className="border-b pb-4 border-[var(--border-default)] flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]">
                          {companionEntry.title}
                        </h2>
                        {companionEntry.title_hi && (
                          <span className="font-devanagari text-lg sm:text-xl text-[var(--text-secondary)] font-medium">
                            ({companionEntry.title_hi})
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-1.5 font-mono">
                        {companionEntry.domain} &bull; {companionEntry.domain_hi}
                      </p>
                    </div>

                    <div className="flex flex-col items-end text-xs font-mono text-[var(--text-muted)]">
                      <span>{companionEntry.reading_time} read</span>
                      {companionEntry.original_source && (
                        <span className="mt-0.5">
                          Source: {companionEntry.original_source} {companionEntry.original_author ? `by ${companionEntry.original_author}` : ''}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary one-liner */}
                  <p className="text-sm font-semibold italic text-[var(--text-secondary)]">
                    &ldquo;{companionEntry.one_line}&rdquo;
                  </p>

                  {/* Before You Read */}
                  <div className="p-4 rounded-xl bg-[color-mix(in_srgb,var(--room-sahitya)_6%,var(--bg-secondary))] border border-[color-mix(in_srgb,var(--room-sahitya)_20%,transparent)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                      Before You Read
                    </span>
                    <p className="text-xs italic text-[var(--text-secondary)] leading-relaxed">
                      {companionEntry.before_you_read}
                    </p>
                  </div>

                  {/* The Piece Content */}
                  <div className="prose-reading text-[var(--text-primary)] space-y-4">
                    {companionEntry.the_piece.split('\n').map((para, i) => (
                      <p key={i} className="text-justify text-base sm:text-lg leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* After You Read / Reflection */}
                  <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-paper)] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                      Reflect & Sit With This
                    </span>
                    <p className="font-serif italic text-base text-[var(--text-primary)] leading-relaxed">
                      {companionEntry.after_you_read}
                    </p>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="flex items-center justify-between border-t pt-4 border-[var(--border-default)]">
                    <ReadAloudButton 
                      text={companionTTS} 
                      lang="en-IN"
                      variant="pill" 
                      label="Listen to Companion" 
                    />
                    <div className="flex items-center gap-2">
                      <RevisitButton 
                        roomId="sahitya"
                        roomName="Sahitya"
                        contentTitle={companionEntry.title}
                        contentSummary={companionEntry.summary}
                      />
                      <SutraNoteButton 
                        roomId="sahitya"
                        roomName="Sahitya"
                        contentTitle={companionEntry.title}
                      />
                    </div>
                  </div>

                </div>
              ) : (
                <div className="text-center text-sm py-12 text-[var(--text-muted)]">No entry found for this date.</div>
              )}
            </motion.div>
          )}

          {activeTab === 'indian' && (
            <motion.div
              key="indian"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Filters Toolbar */}
              <div className="flex flex-wrap gap-4 items-center justify-between p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)]">
                {/* Language Select */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[var(--text-muted)]">Language</span>
                  <div className="flex gap-1.5">
                    {(['hindi', 'indian_english'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setIndianLang(lang)}
                        className="px-3 py-1 text-xs rounded-lg border transition-all cursor-pointer font-medium"
                        style={{
                          backgroundColor: indianLang === lang ? 'var(--room-sahitya)' : 'transparent',
                          borderColor: indianLang === lang ? 'var(--room-sahitya)' : 'var(--border-default)',
                          color: indianLang === lang ? '#FFFFFF' : 'var(--text-muted)',
                        }}
                      >
                        {lang === 'hindi' ? 'Hindi' : 'Indian English'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Era Select */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[var(--text-muted)]">Era</span>
                  <div className="flex gap-1.5">
                    {(['contemporary', 'classical'] as const).map((era) => (
                      <button
                        key={era}
                        onClick={() => setIndianEra(era)}
                        className="px-3 py-1 text-xs rounded-lg border transition-all cursor-pointer font-medium"
                        style={{
                          backgroundColor: indianEra === era ? 'var(--room-sahitya)' : 'transparent',
                          borderColor: indianEra === era ? 'var(--room-sahitya)' : 'var(--border-default)',
                          color: indianEra === era ? '#FFFFFF' : 'var(--text-muted)',
                        }}
                      >
                        {era === 'contemporary' ? 'Contemporary' : 'Classical'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {indianWriter ? (
                <WriterCard writer={indianWriter} roomId="sahitya" roomName="Sahitya" />
              ) : (
                <div className="text-center text-sm py-12 text-[var(--text-muted)]">
                  No writers match the current language and era combination.
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'english' && (
            <motion.div
              key="english"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Filters Toolbar */}
              <div className="flex flex-wrap gap-4 items-center justify-between p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)]">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[var(--text-muted)]">Era</span>
                  <div className="flex gap-1.5">
                    {(['contemporary', 'classical'] as const).map((era) => (
                      <button
                        key={era}
                        onClick={() => setEnglishEra(era)}
                        className="px-3 py-1 text-xs rounded-lg border transition-all cursor-pointer font-medium"
                        style={{
                          backgroundColor: englishEra === era ? 'var(--room-sahitya)' : 'transparent',
                          borderColor: englishEra === era ? 'var(--room-sahitya)' : 'var(--border-default)',
                          color: englishEra === era ? '#FFFFFF' : 'var(--text-muted)',
                        }}
                      >
                        {era === 'contemporary' ? 'Contemporary' : 'Classical'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {englishWriter ? (
                <WriterCard writer={englishWriter} roomId="sahitya" roomName="Sahitya" />
              ) : (
                <div className="text-center text-sm py-12 text-[var(--text-muted)]">
                  No writers found matching this era.
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'world' && (
            <motion.div
              key="world"
              variants={FADE_UP}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Filters Toolbar */}
              <div className="flex flex-wrap gap-4 items-center justify-between p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)]">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[var(--text-muted)]">Era</span>
                  <div className="flex gap-1.5">
                    {(['contemporary', 'classical'] as const).map((era) => (
                      <button
                        key={era}
                        onClick={() => setWorldEra(era)}
                        className="px-3 py-1 text-xs rounded-lg border transition-all cursor-pointer font-medium"
                        style={{
                          backgroundColor: worldEra === era ? 'var(--room-sahitya)' : 'transparent',
                          borderColor: worldEra === era ? 'var(--room-sahitya)' : 'var(--border-default)',
                          color: worldEra === era ? '#FFFFFF' : 'var(--text-muted)',
                        }}
                      >
                        {era === 'contemporary' ? 'Contemporary' : 'Classical'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {worldWriter ? (
                <WriterCard writer={worldWriter} roomId="sahitya" roomName="Sahitya" />
              ) : (
                <div className="text-center text-sm py-12 text-[var(--text-muted)]">
                  No writers found matching this era.
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer citation */}
        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            Literature is the safe sanctuary where human souls speak across borders and centuries.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
