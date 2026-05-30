'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { VAISHWIK_ENTRIES, VAISHWIK_LENS, VaishwikSituation, VaishwikSystem } from './data';
import { Globe, AlertCircle, Cpu, Shield, UserCheck, HelpCircle, Info, Landmark, History, MessageSquare, Compass } from 'lucide-react';

export default function VaishwikPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const activeIndex = getDayIndexForArray(currentDate, VAISHWIK_ENTRIES.length);
  const selected = VAISHWIK_ENTRIES[activeIndex];

  const textToSpeak = selected.type === 'situation'
    ? `${selected.title}. Situation: ${selected.the_situation}. Why it matters: ${selected.why_it_matters}.`
    : `${selected.system_name}. What it is: ${selected.what_it_is}. How it works: ${selected.how_it_works}.`;

  const isDayIndexSunday = selected.dayIndex % 7 === 0;
  const weekIndex = Math.floor(selected.dayIndex / 7);
  const lens = VAISHWIK_LENS[weekIndex % VAISHWIK_LENS.length];

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">World Intelligence</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>वैश्विक - Vaishwik</h1>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Global situations & systems explained plainly without telling you what to think.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
        </div>

        {/* Vaishwik Lens — shown only on Sunday (dayIndex % 7 === 0) */}
        {isDayIndexSunday && lens && (
          <div className="bg-[var(--bg-secondary)] rounded-xl px-6 py-6 mb-6 border-l-4 border-[var(--room-darshan)]" style={{ borderColor: 'var(--accent-saffron)' }}>
            <div className="text-xs uppercase tracking-widest text-[var(--accent-saffron)] font-semibold mb-2">
              🌐 वैश्विक दृष्टि · Vaishwik Lens — Weekly Perspective
            </div>
            <h3 className="text-xl font-serif text-[var(--text-primary)] mb-3">
              {lens.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-4">
              {lens.one_paragraph}
            </p>
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2">
              तीन चीज़ें जो देखें · Three Things to Watch
            </div>
            {lens.three_things_to_watch.map((item, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <span className="text-[var(--accent-saffron)] font-bold text-sm">{i + 1}.</span>
                <p className="text-sm text-[var(--text-secondary)]">{item}</p>
              </div>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentDate.toISOString()}
            variants={FADE_UP}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Title Card */}
            <div className="card-base p-6 space-y-3" style={{ background: 'color-mix(in srgb, var(--accent-saffron) 4%, var(--bg-secondary))' }}>
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--accent-saffron)] flex items-center gap-1">
                    <Globe size={12} />
                    {selected.type === 'situation' ? selected.region : selected.system_domain}
                  </span>
                  <h2 className="font-serif text-2xl text-[var(--text-primary)] leading-tight">
                    {selected.type === 'situation' ? selected.title : selected.system_name}
                  </h2>
                  {selected.type === 'situation' ? (
                    selected.title_hi && (
                      <p className="font-devanagari text-stone-500 text-base mt-0.5">
                        {selected.title_hi}
                      </p>
                    )
                  ) : (
                    selected.system_name_hi && (
                      <p className="font-devanagari text-stone-500 text-base mt-0.5">
                        {selected.system_name_hi}
                      </p>
                    )
                  )}
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                </div>
              </div>

              <div className="border-t pt-3 flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Mode: {selected.type === 'situation' ? 'Global Situation' : 'System Breakdown'}
                </span>
                {selected.type === 'situation' && (
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    Period: {selected.context_period}
                  </span>
                )}
              </div>
            </div>

            {/* Summary Box */}
            {selected.summary && (
              <div 
                className="p-5 border-l-4 rounded bg-[var(--bg-secondary)]" 
                style={{ borderColor: 'var(--accent-saffron)' }}
              >
                <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: 'var(--accent-saffron)' }}>
                  संक्षेप · In Brief
                </h4>
                <p className="font-serif italic text-base leading-relaxed text-[var(--text-primary)]">
                  {selected.summary}
                </p>
              </div>
            )}

            {/* Content Cards based on Type */}
            {selected.type === 'situation' ? (
              <div className="space-y-4">
                {/* Situation Block */}
                <div className="card-base p-5 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                    <AlertCircle size={14} />
                    <span>The Situation</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]" style={{ lineHeight: 1.85 }}>
                    {selected.the_situation}
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="card-base p-5 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                    <Cpu size={14} />
                    <span>Why It Matters</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]" style={{ lineHeight: 1.8 }}>
                    {selected.why_it_matters}
                  </p>
                </div>

                {/* Key Players */}
                {selected.key_players && selected.key_players.length > 0 && (
                  <div className="card-base p-5 space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                      <UserCheck size={14} />
                      <span>Key Players</span>
                    </h3>
                    <div className="space-y-2.5">
                      {selected.key_players.map((player, idx) => (
                        <div key={idx} className="border-l-2 pl-3 border-[var(--border-default)]">
                          <span className="block text-sm font-semibold text-[var(--text-primary)]">{player.name}</span>
                          <span className="block text-xs text-[var(--text-muted)] mt-0.5">{player.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timeline */}
                {selected.timeline && selected.timeline.length > 0 && (
                  <div className="card-base p-5 space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-1.5">
                      <History size={14} />
                      <span>Timeline of Events</span>
                    </h3>
                    <div className="space-y-3">
                      {selected.timeline.map((event, idx) => (
                        <div key={idx} className="flex gap-4 text-sm">
                          <span className="font-mono text-xs font-bold text-[var(--accent-saffron)] w-12 flex-shrink-0">{event.year}</span>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{event.event}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* One Thing to Understand */}
                <div className="card-base p-5 space-y-2" style={{ borderLeft: '4px solid var(--accent-saffron)' }}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-saffron)]">
                    One Thing to Understand
                  </h3>
                  <p className="text-sm font-serif italic text-[var(--text-primary)] leading-relaxed">
                    {selected.one_thing_to_understand}
                  </p>
                </div>

                {/* India Angle */}
                {selected.india_angle && (
                  <div className="card-base p-5 space-y-2" style={{ borderLeft: '4px solid #1a365d' }}>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1a365d] dark:text-blue-300">
                      India's Perspective
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {selected.india_angle}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {/* What It Is */}
                <div className="card-base p-5 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                    <Info size={14} />
                    <span>What It Is</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]" style={{ lineHeight: 1.85 }}>
                    {selected.what_it_is}
                  </p>
                </div>

                {/* How It Works */}
                <div className="card-base p-5 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                    <Cpu size={14} />
                    <span>How It Works</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]" style={{ lineHeight: 1.85 }}>
                    {selected.how_it_works}
                  </p>
                </div>

                {/* Creation Details */}
                {selected.how_it_was_created && (
                  <div className="card-base p-5 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                      <Landmark size={14} />
                      <span>How It Was Created</span>
                    </h3>
                    <div className="text-xs text-[var(--text-secondary)] space-y-1">
                      <p><strong>Designers:</strong> {selected.how_it_was_created.who_designed_it}</p>
                      <p><strong>Year established:</strong> {selected.how_it_was_created.year}</p>
                      <p className="mt-1 leading-relaxed"><strong>Context:</strong> {selected.how_it_was_created.context}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Who Benefits */}
                  <div className="card-base p-5 space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                      <UserCheck size={14} />
                      <span>Who Benefits</span>
                    </h4>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]" style={{ lineHeight: 1.7 }}>
                      {selected.who_benefits}
                    </p>
                  </div>

                  {/* Limits */}
                  <div className="card-base p-5 space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-orange-700 flex items-center gap-1.5">
                      <Shield size={14} />
                      <span>Limits & Challenges</span>
                    </h4>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]" style={{ lineHeight: 1.7 }}>
                      {selected.its_limits}
                    </p>
                  </div>
                </div>

                {/* Reform Debates */}
                {selected.reform_debates && (
                  <div className="card-base p-5 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                      <MessageSquare size={14} />
                      <span>Reform Debates</span>
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]" style={{ lineHeight: 1.75 }}>
                      {selected.reform_debates}
                    </p>
                  </div>
                )}

                {/* India Angle */}
                {selected.india_angle && (
                  <div className="card-base p-5 space-y-2" style={{ borderLeft: '4px solid #1a365d' }}>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1a365d] dark:text-blue-300">
                      India's Perspective
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {selected.india_angle}
                    </p>
                  </div>
                )}

                {/* Closing Question */}
                {selected.closing_question && (
                  <div className="card-base p-5 text-center space-y-2" style={{ background: 'var(--bg-tertiary)' }}>
                    <p className="text-xs uppercase tracking-widest font-semibold text-[var(--text-faint)] flex items-center justify-center gap-1.5">
                      <HelpCircle size={12} />
                      <span>Reflective Question</span>
                    </p>
                    <p className="font-serif italic text-base text-[var(--text-primary)] leading-relaxed">
                      "{selected.closing_question}"
                    </p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-xs" style={{ color: 'var(--text-faint)' }}>
            To change the world, you must first understand the lines it is drawn on.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
