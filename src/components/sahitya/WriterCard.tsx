'use client';

import React from 'react';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';

export interface WriterCardProps {
  writer: {
    name: string;
    name_devanagari?: string;
    born: string;
    died?: string;
    origin?: string;
    nationality?: string;
    period: string;
    summary: string;
    portrait: string;
    language?: string;
    translation_note?: string;
    signature_work: {
      title: string;
      title_devanagari?: string;
      year?: string;
      what_it_is: string;
      why_it_matters: string;
      one_passage?: string;
    };
    what_they_knew: string;
    must_read: string[];
    read_if_curious: string;
    why_they_matter_globally?: string;
  };
  roomId: string;
  roomName: string;
}

export default function WriterCard({ writer, roomId, roomName }: WriterCardProps) {
  const lifespan = writer.died ? `${writer.born} - ${writer.died}` : `${writer.born} - present`;

  // Combine full text content for ReadAloudButton
  const readAloudText = `
    ${writer.name}. ${writer.name_devanagari ? writer.name_devanagari + '.' : ''}
    Born ${writer.born}. ${writer.died ? 'Died ' + writer.died : 'Living writer'}.
    From ${writer.origin || writer.nationality || ''}.
    Period: ${writer.period}.
    ${writer.summary}
    About the writer: ${writer.portrait}
    What they knew: ${writer.what_they_knew}
    Signature work: ${writer.signature_work.title}. ${writer.signature_work.title_devanagari ? writer.signature_work.title_devanagari + '.' : ''}
    ${writer.signature_work.what_it_is}.
    Why it matters: ${writer.signature_work.why_it_matters}.
    ${writer.signature_work.one_passage ? `Passage: ${writer.signature_work.one_passage}` : ''}
  `;

  return (
    <div className="card-base flex flex-col p-6 sm:p-8 space-y-6 md:space-y-8 max-w-4xl mx-auto shadow-md transition-all duration-300">
      
      {/* Header and Metas */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b pb-4 border-[var(--border-default)]">
        <div>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
              {writer.name}
            </h1>
            {writer.name_devanagari && (
              <span className="font-devanagari text-xl sm:text-2xl text-[var(--text-secondary)] font-medium">
                ({writer.name_devanagari})
              </span>
            )}
          </div>
          <p className="text-sm mt-1 sm:mt-1.5 font-medium tracking-wide text-[var(--text-muted)] font-mono">
            {lifespan} &bull; {writer.origin || writer.nationality}
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 md:self-start">
          <span className="px-2.5 py-1 text-xs rounded-full bg-[color-mix(in_srgb,var(--room-sahitya)_10%,transparent)] border border-[color-mix(in_srgb,var(--room-sahitya)_30%,transparent)] font-semibold text-[color-mix(in_srgb,var(--room-sahitya)_90%,black)] uppercase tracking-wider">
            {writer.period}
          </span>
          {writer.language && (
            <span className="px-2.5 py-1 text-xs rounded-full bg-stone-100 dark:bg-stone-800 border border-[var(--border-default)] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              {writer.language}
            </span>
          )}
        </div>
      </div>

      {/* Summary Box with Left Accent */}
      <div 
        className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] border-l-4"
        style={{ borderLeftColor: 'var(--room-sahitya)' }}
      >
        <p className="italic text-base leading-relaxed text-[var(--text-secondary)]">
          &ldquo;{writer.summary}&rdquo;
        </p>
      </div>

      {/* Main Portrait / Biography */}
      <div className="space-y-4">
        <h3 className="section-label uppercase tracking-widest text-[11px] font-semibold text-[color-mix(in_srgb,var(--room-sahitya)_90%,black)]">
          The Portrait
        </h3>
        <div className="prose-biography text-[var(--text-secondary)] whitespace-pre-wrap leading-relaxed">
          {writer.portrait}
        </div>
      </div>

      {/* What they knew */}
      <div className="space-y-3">
        <h3 className="section-label uppercase tracking-widest text-[11px] font-semibold text-[color-mix(in_srgb,var(--room-sahitya)_90%,black)]">
          What They Knew
        </h3>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed font-serif">
          {writer.what_they_knew}
        </p>
      </div>

      {/* Signature Work Section */}
      <div className="space-y-4 p-5 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-paper)]">
        <h3 className="section-label uppercase tracking-widest text-[11px] font-semibold text-[color-mix(in_srgb,var(--room-sahitya)_90%,black)]">
          Signature Work
        </h3>
        <div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <h4 className="font-serif text-lg font-bold text-[var(--text-primary)]">
              {writer.signature_work.title}
            </h4>
            {writer.signature_work.title_devanagari && (
              <span className="font-devanagari text-base font-semibold text-[var(--text-secondary)]">
                ({writer.signature_work.title_devanagari})
              </span>
            )}
            {writer.signature_work.year && (
              <span className="text-xs text-[var(--text-muted)] font-mono ml-1">
                ({writer.signature_work.year})
              </span>
            )}
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            <strong>The Concept:</strong> {writer.signature_work.what_it_is}
          </p>
          <p className="text-xs text-[var(--text-secondary)] mt-1 font-medium">
            <strong>Why It Matters:</strong> {writer.signature_work.why_it_matters}
          </p>
        </div>

        {/* Highlighted Passage */}
        {writer.signature_work.one_passage && (
          <div className="border-t border-[var(--border-default)] pt-4 mt-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2 font-mono">
              Significant Passage
            </p>
            <div className="font-serif italic text-lg text-[var(--text-primary)] pl-4 border-l-2 border-[var(--border-strong)] leading-relaxed py-1">
              &ldquo;{writer.signature_work.one_passage}&rdquo;
            </div>
          </div>
        )}

        {writer.translation_note && (
          <p className="text-[10px] text-[var(--text-faint)] italic border-t border-[var(--border-default)] pt-2 mt-2 font-sans">
            * {writer.translation_note}
          </p>
        )}
      </div>

      {/* Must Reads & Global Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h3 className="section-label uppercase tracking-widest text-[11px] font-semibold text-[color-mix(in_srgb,var(--room-sahitya)_90%,black)]">
            Suggested Reading
          </h3>
          <ul className="list-disc pl-5 text-sm text-[var(--text-secondary)] space-y-1">
            {writer.must_read.map((work, idx) => (
              <li key={idx} className="font-serif font-medium">{work}</li>
            ))}
          </ul>
          <p className="text-xs text-[var(--text-muted)] mt-2 italic">
            <strong>Path:</strong> {writer.read_if_curious}
          </p>
        </div>

        {writer.why_they_matter_globally && (
          <div className="space-y-2">
            <h3 className="section-label uppercase tracking-widest text-[11px] font-semibold text-[color-mix(in_srgb,var(--room-sahitya)_90%,black)]">
              Global Influence
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
              {writer.why_they_matter_globally}
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons Toolbar */}
      <div className="flex items-center justify-between border-t pt-4 border-[var(--border-default)] mt-2">
        <ReadAloudButton 
          text={readAloudText} 
          lang={writer.name_devanagari ? 'hi-IN' : 'en-IN'}
          variant="pill" 
          label="Listen to Portrait" 
        />
        
        <div className="flex items-center gap-2">
          <RevisitButton 
            roomId={roomId}
            roomName={roomName}
            contentTitle={writer.name}
            contentSummary={writer.summary}
          />
          <SutraNoteButton 
            roomId={roomId}
            roomName={roomName}
            contentTitle={writer.name}
          />
        </div>
      </div>

    </div>
  );
}
