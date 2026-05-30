'use client';

import React from 'react';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';

export interface PhilosophyConceptCardProps {
  concept: {
    tradition: 'Indian' | 'Western' | 'Eastern' | 'African' | 'Islamic';
    school: string;
    concept_name: string;
    concept_name_original?: string;
    thinker: string;
    thinker_bio: string;
    summary: string;
    the_idea: string;
    why_it_matters_today: string;
    in_dialogue_with: string;
    critique: string;
    related_thinkers: string[];
    related_texts: string[];
    related_concepts: string[];
    sit_with_this: string;
  };
  roomId: string;
  roomName: string;
}

export default function PhilosophyConceptCard({ concept, roomId, roomName }: PhilosophyConceptCardProps) {
  // Format the idea text by replacing literal "\\n" with newlines
  const formattedIdea = concept.the_idea.replace(/\\n/g, '\n');

  // Combined narrative for speech
  const readAloudText = `
    ${concept.concept_name}. ${concept.concept_name_original ? concept.concept_name_original + '.' : ''}
    Tradition: ${concept.tradition}. School: ${concept.school}.
    Thinker: ${concept.thinker}.
    Summary: ${concept.summary}
    The Idea: ${formattedIdea}
    Why it matters today: ${concept.why_it_matters_today}
    In dialogue with: ${concept.in_dialogue_with}
    Critique: ${concept.critique}
    Sit with this question: ${concept.sit_with_this}
  `;

  return (
    <div className="card-base flex flex-col p-6 sm:p-8 space-y-6 md:space-y-8 max-w-4xl mx-auto shadow-md transition-all duration-300">
      
      {/* Header & Meta */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b pb-4 border-[var(--border-default)]">
        <div>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
              {concept.concept_name}
            </h1>
            {concept.concept_name_original && (
              <span className="font-devanagari text-xl sm:text-2xl text-[var(--text-secondary)] font-medium">
                ({concept.concept_name_original})
              </span>
            )}
          </div>
          <p className="text-sm mt-1 sm:mt-1.5 font-medium tracking-wide text-[var(--text-muted)] font-mono">
            {concept.tradition} &bull; {concept.school} &bull; Proclaimed by {concept.thinker}
          </p>
        </div>

        {/* Tradition indicator badge */}
        <div className="flex gap-2">
          <span className="px-2.5 py-1 text-xs rounded-full bg-[color-mix(in_srgb,var(--room-darshan-bodh)_10%,transparent)] border border-[color-mix(in_srgb,var(--room-darshan-bodh)_30%,transparent)] font-semibold text-[color-mix(in_srgb,var(--room-darshan-bodh)_90%,black)] uppercase tracking-wider">
            {concept.tradition}
          </span>
        </div>
      </div>

      {/* Summary Box */}
      <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] border-l-4 border-l-[var(--room-darshan-bodh)]">
        <p className="italic text-base leading-relaxed text-[var(--text-secondary)]">
          {concept.summary}
        </p>
      </div>

      {/* Thinker Bio Details */}
      <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-paper)] space-y-1">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-mono">
          The Thinker: {concept.thinker}
        </h4>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {concept.thinker_bio}
        </p>
      </div>

      {/* The Idea - Deep Dive Content */}
      <div className="space-y-4">
        <h3 className="section-label uppercase tracking-widest text-[11px] font-semibold text-[color-mix(in_srgb,var(--room-darshan-bodh)_90%,black)]">
          The Idea
        </h3>
        <div className="prose-philosophy text-[var(--text-secondary)] whitespace-pre-wrap leading-relaxed">
          {formattedIdea}
        </div>
      </div>

      {/* Contemporary Relevance */}
      <div className="space-y-3">
        <h3 className="section-label uppercase tracking-widest text-[11px] font-semibold text-[color-mix(in_srgb,var(--room-darshan-bodh)_90%,black)]">
          Why It Matters Today
        </h3>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed font-serif">
          {concept.why_it_matters_today}
        </p>
      </div>

      {/* Cross-Tradition Dialogue & Critiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)]">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-mono">
            In Dialogue With
          </h4>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {concept.in_dialogue_with}
          </p>
        </div>

        <div className="space-y-2 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)]">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-mono">
            The Critique
          </h4>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {concept.critique}
          </p>
        </div>
      </div>

      {/* Related Terms/Thinkers Grid */}
      <div className="border-t border-[var(--border-default)] pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="space-y-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] font-mono">
              Related Thinkers
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {concept.related_thinkers.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded text-xs bg-stone-100 dark:bg-stone-800 border border-[var(--border-default)] text-[var(--text-secondary)] font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] font-mono">
              Key Texts
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {concept.related_texts.map((txt, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded text-xs bg-stone-100 dark:bg-stone-800 border border-[var(--border-default)] text-[var(--text-secondary)] italic font-medium">
                  {txt}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] font-mono">
              Related Concepts
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {concept.related_concepts.map((c, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded text-xs bg-stone-100 dark:bg-stone-800 border border-[var(--border-default)] text-[var(--text-secondary)] font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* "Sit With This" Closing Question */}
      <div 
        className="p-5 rounded-2xl border bg-[var(--bg-paper)] text-center space-y-2"
        style={{ borderColor: 'color-mix(in srgb, var(--room-darshan-bodh) 40%, transparent)' }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] font-mono">
          Sit With This
        </span>
        <p className="font-serif italic text-lg text-[var(--text-primary)] leading-relaxed">
          &ldquo;{concept.sit_with_this}&rdquo;
        </p>
      </div>

      {/* Action Buttons Toolbar */}
      <div className="flex items-center justify-between border-t pt-4 border-[var(--border-default)] mt-2">
        <ReadAloudButton 
          text={readAloudText} 
          lang="en-IN"
          variant="pill" 
          label="Listen to Contemplation" 
        />
        
        <div className="flex items-center gap-2">
          <RevisitButton 
            roomId={roomId}
            roomName={roomName}
            contentTitle={concept.concept_name}
            contentSummary={concept.summary}
          />
          <SutraNoteButton 
            roomId={roomId}
            roomName={roomName}
            contentTitle={concept.concept_name}
          />
        </div>
      </div>

    </div>
  );
}
