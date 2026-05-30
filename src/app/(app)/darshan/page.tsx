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
import { PHILOSOPHY_CONCEPTS, type PhilosophyConcept, type Tradition } from './data-philosophy';
import { BODH_ENTRIES, type BodhEntry } from './data-spark';

// Component imports
import PhilosophyConceptCard from '@/components/darshan/PhilosophyConceptCard';

type Tab = 'Indian' | 'Western' | 'Eastern' | 'African' | 'Islamic' | 'spark';

export default function DarshanPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Indian');

  // Independent date states for each of the 6 tabs
  const [indianDate, setIndianDate] = useState<Date>(new Date());
  const [westernDate, setWesternDate] = useState<Date>(new Date());
  const [easternDate, setEasternDate] = useState<Date>(new Date());
  const [africanDate, setAfricanDate] = useState<Date>(new Date());
  const [islamicDate, setIslamicDate] = useState<Date>(new Date());
  const [sparkDate, setSparkDate] = useState<Date>(new Date());

  // 1-5. Tradition concepts resolution
  const resolveConcept = (trad: Tradition, date: Date) => {
    const list = PHILOSOPHY_CONCEPTS.filter((c) => c.tradition === trad);
    if (list.length === 0) return null;
    const idx = getDayIndexForArray(date, list.length);
    return list[idx];
  };

  const indianConcept = resolveConcept('Indian', indianDate);
  const westernConcept = resolveConcept('Western', westernDate);
  const easternConcept = resolveConcept('Eastern', easternDate);
  const africanConcept = resolveConcept('African', africanDate);
  const islamicConcept = resolveConcept('Islamic', islamicDate);

  // 6. Resolve Daily Spark (Bodh Entry)
  const sparkIndex = getDayIndexForArray(sparkDate, BODH_ENTRIES.length);
  const sparkEntry = BODH_ENTRIES[sparkIndex];

  // TTS narration logic for the Daily Spark (Bodh Entry)
  const sparkTTS = sparkEntry
    ? `Daily Spark. Domain: ${sparkEntry.domain}. Title: ${sparkEntry.idea_title}. ${sparkEntry.the_idea}. Why it matters now: ${sparkEntry.why_it_matters_now}. Question: ${sparkEntry.open_question}.`
    : '';

  // Tab definitions with custom dot colors
  const tabs = [
    { id: 'Indian', label: 'Indian', labelHi: 'भारतीय', dotColor: '#C4873A' },
    { id: 'Western', label: 'Western', labelHi: 'पाश्चात्य', dotColor: '#3A5A8A' },
    { id: 'Eastern', label: 'Eastern', labelHi: 'पूर्वी', dotColor: '#4A7C59' },
    { id: 'African', label: 'African', labelHi: 'अफ्रीकी', dotColor: '#8B6355' },
    { id: 'Islamic', label: 'Islamic', labelHi: 'इस्लामी', dotColor: '#D4A853' },
    { id: 'spark', label: 'Daily Spark', labelHi: 'बोध स्पार्क', dotColor: '#7297A6' },
  ] as const;

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label" style={{ color: 'var(--room-darshan-bodh)' }}>Darshan Room</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>दर्शन - Darshan</h1>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Explore the fundamental philosophical traditions of human history and their enduring spark.
            </p>
          </div>

          {/* Date Navigators for each tab */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {activeTab === 'Indian' && (
              <DayNavigator currentDate={indianDate} onDateChange={setIndianDate} />
            )}
            {activeTab === 'Western' && (
              <DayNavigator currentDate={westernDate} onDateChange={setWesternDate} />
            )}
            {activeTab === 'Eastern' && (
              <DayNavigator currentDate={easternDate} onDateChange={setEasternDate} />
            )}
            {activeTab === 'African' && (
              <DayNavigator currentDate={africanDate} onDateChange={setAfricanDate} />
            )}
            {activeTab === 'Islamic' && (
              <DayNavigator currentDate={islamicDate} onDateChange={setIslamicDate} />
            )}
            {activeTab === 'spark' && (
              <>
                <ReadAloudButton text={sparkTTS} lang="en-IN" size="sm" />
                <DayNavigator currentDate={sparkDate} onDateChange={setSparkDate} />
              </>
            )}
          </div>
        </div>

        {/* Tab pill controls */}
        <div className="flex flex-wrap gap-2 justify-center border-b pb-3 border-[var(--border-default)]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className="px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 cursor-pointer text-center flex items-center gap-2 justify-center"
                style={{
                  backgroundColor: isActive
                    ? 'var(--room-darshan-bodh)'
                    : 'transparent',
                  borderColor: isActive ? 'var(--room-darshan-bodh)' : 'var(--border-default)',
                  color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                }}
              >
                {/* Dot with distinct custom color */}
                <span 
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: tab.dotColor }}
                />
                <div>
                  <div>{tab.label}</div>
                  <div className="font-devanagari text-[9px] mt-0.5 opacity-90">{tab.labelHi}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'Indian' && indianConcept && (
            <motion.div key="Indian" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }}>
              <PhilosophyConceptCard concept={indianConcept} roomId="darshan" roomName="Darshan" />
            </motion.div>
          )}

          {activeTab === 'Western' && westernConcept && (
            <motion.div key="Western" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }}>
              <PhilosophyConceptCard concept={westernConcept} roomId="darshan" roomName="Darshan" />
            </motion.div>
          )}

          {activeTab === 'Eastern' && easternConcept && (
            <motion.div key="Eastern" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }}>
              <PhilosophyConceptCard concept={easternConcept} roomId="darshan" roomName="Darshan" />
            </motion.div>
          )}

          {activeTab === 'African' && africanConcept && (
            <motion.div key="African" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }}>
              <PhilosophyConceptCard concept={africanConcept} roomId="darshan" roomName="Darshan" />
            </motion.div>
          )}

          {activeTab === 'Islamic' && islamicConcept && (
            <motion.div key="Islamic" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }}>
              <PhilosophyConceptCard concept={islamicConcept} roomId="darshan" roomName="Darshan" />
            </motion.div>
          )}

          {activeTab === 'spark' && sparkEntry && (
            <motion.div key="spark" variants={FADE_UP} initial="initial" animate="animate" exit={{ opacity: 0, y: -10 }}>
              <div className="card-base p-6 sm:p-8 space-y-6">
                
                {/* Spark Header */}
                <div className="border-b pb-4 border-[var(--border-default)] flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h2 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
                        {sparkEntry.idea_title}
                      </h2>
                      {sparkEntry.idea_title_hi && (
                        <span className="font-devanagari text-lg text-[var(--text-secondary)] font-medium">
                          ({sparkEntry.idea_title_hi})
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mt-1.5 font-mono">
                      {sparkEntry.domain} &bull; {sparkEntry.domain_hi}
                    </p>
                  </div>
                </div>

                {/* Dense core concept idea */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block font-mono">
                    The Spark Idea
                  </span>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed font-serif text-justify">
                    {sparkEntry.the_idea}
                  </p>
                </div>

                {/* Why it matters now */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block font-mono">
                    Why It Matters Now
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed text-justify">
                    {sparkEntry.why_it_matters_now}
                  </p>
                </div>

                {/* Open Question */}
                <div className="p-4 rounded-xl bg-[color-mix(in_srgb,var(--room-darshan-bodh)_6%,var(--bg-secondary))] border border-[color-mix(in_srgb,var(--room-darshan-bodh)_20%,transparent)] text-center space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-muted)] font-mono">
                    Sit With This Question
                  </span>
                  <p className="font-serif italic text-base text-[var(--text-primary)] leading-relaxed">
                    &ldquo;{sparkEntry.open_question}&rdquo;
                  </p>
                </div>

                {/* Further Details if Curious */}
                <div className="text-xs text-[var(--text-muted)] italic">
                  <strong>Further path:</strong> {sparkEntry.further_if_curious}
                </div>

                {/* Bottom Action Bar */}
                <div className="flex items-center justify-between border-t pt-4 border-[var(--border-default)]">
                  <ReadAloudButton 
                    text={sparkTTS} 
                    lang="en-IN"
                    variant="pill" 
                    label="Listen to Spark" 
                  />
                  <div className="flex items-center gap-2">
                    <RevisitButton 
                      roomId="darshan"
                      roomName="Darshan"
                      contentTitle={sparkEntry.idea_title}
                      contentSummary={sparkEntry.summary}
                    />
                    <SutraNoteButton 
                      roomId="darshan"
                      roomName="Darshan"
                      contentTitle={sparkEntry.idea_title}
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer citation */}
        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            The unexamined life is not worth living.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
