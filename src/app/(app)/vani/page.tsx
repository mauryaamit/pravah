'use client';

import { useState } from 'react';
import { getDayIndexForArray } from '@/lib/utils/date';
import { SHLOKAS, DOHAS, CHAUPAIS, LOK_KATHAS, HINDI_WORDS } from './data';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import PageTransition from '@/components/layout/PageTransition';
import { Languages } from 'lucide-react';

interface EtymologyNote {
  word: string;
  root: string;
  meaning: string;
  explanation: string;
}

const ETYMO_NOTES: Record<string, EtymologyNote> = {
  "karma": {
    word: "कर्म (Karma)",
    root: "कृ (kṛ)",
    meaning: "to do, to act",
    explanation: "Derived from the root 'kṛ', karma represents any action, deed, or work. In Sanskrit philosophy, it refers to the physical or mental actions that shape our destiny and bind our consciousness."
  },
  "dharma": {
    word: "धर्म (Dharma)",
    root: "धृ (dhṛ)",
    meaning: "to uphold, to sustain",
    explanation: "From the root 'dhṛ', dharma is that which holds together, sustains, or upholds the cosmic order, righteousness, duty, and the essential nature of existence."
  },
  "yoga": {
    word: "योग (Yoga)",
    root: "युज् (yuj)",
    meaning: "to yoke, to unite",
    explanation: "From the root 'yuj', yoga means union, harmony, or integration. It is the steady control of the senses and the mind, leading to union with the ultimate reality."
  },
  "jnana": {
    word: "ज्ञान (Jnana)",
    root: "ज्ञा (jñā)",
    meaning: "to know, to cognize",
    explanation: "Derived from the root 'jñā', jnana refers to sacred knowledge, wisdom, or cognitive understanding. It is the realization of the true self and the ultimate truth."
  },
  "satya": {
    word: "सत्य (Satya)",
    root: "अस् (as)",
    meaning: "to be, to exist",
    explanation: "From the root 'as' (to exist), satya means truth, reality, or that which is unchangeable. It denotes truthfulness in thought, word, and deed."
  },
  "chitta": {
    word: "चित्त (Chitta)",
    root: "चित् (cit)",
    meaning: "to perceive, to consciousness",
    explanation: "From the root 'cit', chitta is the mind-stuff, memory bank, or individual consciousness. It is the canvas upon which our thoughts and impressions are painted."
  },
  "moha": {
    word: "मोह (Moha)",
    root: "मुह् (muh)",
    meaning: "to become bewildered, to lose sense",
    explanation: "From the root 'muh', moha signifies delusion, infatuation, or attachment. It is the mental cloudiness that prevents one from seeing things as they truly are."
  },
  "sukha": {
    word: "सुख (Sukha)",
    root: "सु-ख (su-kha)",
    meaning: "good space, happiness",
    explanation: "Combining 'su' (good, pleasant) and 'kha' (axle-hole, space), sukha originally meant a smooth-running chariot, representing ease, happiness, and comfort."
  },
  "dukkha": {
    word: "दुःख (Duhkha)",
    root: "दुष्-ख (duṣ-kha)",
    meaning: "bad space, suffering",
    explanation: "Combining 'duṣ' (bad, difficult) and 'kha' (space), duhkha originally referred to a stuck axle-hole, representing friction, discomfort, or suffering."
  },
  "prasada": {
    word: "प्रसाद (Prasada)",
    root: "सद् (sad) with prefix 'pra'",
    meaning: "to sit down, to settle, to become clear",
    explanation: "From the root 'sad' (to sit) with 'pra' (forward), prasada means to settle down, clarify, or become tranquil. It refers to a state of grace or mental clarity."
  },
  "manas": {
    word: "मनस् (Manas)",
    root: "मन् (man)",
    meaning: "to think, to contemplate",
    explanation: "Derived from the root 'man', manas is the coordinating faculty of the mind, the repository of thoughts, desires, and sensory coordination."
  }
};

function getEtymologyNote(shloka: string, iast: string): EtymologyNote {
  const shlokaLower = shloka.toLowerCase();
  const iastLower = iast.toLowerCase();
  
  if (shlokaLower.includes("कर्म") || iastLower.includes("karma")) {
    return ETYMO_NOTES.karma;
  }
  if (shlokaLower.includes("धर्म") || iastLower.includes("dharma")) {
    return ETYMO_NOTES.dharma;
  }
  if (shlokaLower.includes("योग") || iastLower.includes("yoga")) {
    return ETYMO_NOTES.yoga;
  }
  if (shlokaLower.includes("ज्ञान") || iastLower.includes("jñāna") || iastLower.includes("jnana")) {
    return ETYMO_NOTES.jnana;
  }
  if (shlokaLower.includes("सत्य") || iastLower.includes("satya")) {
    return ETYMO_NOTES.satya;
  }
  if (shlokaLower.includes("चित्त") || iastLower.includes("citta")) {
    return ETYMO_NOTES.chitta;
  }
  if (shlokaLower.includes("मोह") || iastLower.includes("moha")) {
    return ETYMO_NOTES.moha;
  }
  if (shlokaLower.includes("सुख") || iastLower.includes("sukha")) {
    return ETYMO_NOTES.sukha;
  }
  if (shlokaLower.includes("दुःख") || iastLower.includes("duḥkha") || iastLower.includes("duhkha")) {
    return ETYMO_NOTES.dukkha;
  }
  if (shlokaLower.includes("प्रसाद") || iastLower.includes("prasāda") || iastLower.includes("prasada")) {
    return ETYMO_NOTES.prasada;
  }
  if (shlokaLower.includes("मन") || iastLower.includes("manas")) {
    return ETYMO_NOTES.manas;
  }
  
  return ETYMO_NOTES.dharma;
}

export default function VaniPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [showIast, setShowIast] = useState(false);
  
  const dayIndex = getDayIndexForArray(currentDate, 1000); // generic high ceiling

  // Retrieve item for the day deterministically
  const shlokaItem = SHLOKAS[getDayIndexForArray(currentDate, SHLOKAS.length)];
  const dohaItem = DOHAS[getDayIndexForArray(currentDate, DOHAS.length)];
  const chaupaiItem = CHAUPAIS[getDayIndexForArray(currentDate, CHAUPAIS.length)];
  const lokKathaItem = LOK_KATHAS[getDayIndexForArray(currentDate, LOK_KATHAS.length)];
  const hindiWordItem = HINDI_WORDS[getDayIndexForArray(currentDate, HINDI_WORDS.length)];

  const etymon = getEtymologyNote(shlokaItem.shloka, shlokaItem.iast);

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>Vani</h1>
          <p className="font-devanagari text-lg" style={{ color: '#8B3A3A' }}>वाणी - सरस्वती का वरदान</p>
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            Daily wisdom from ancient Sanskrit shlokas, Kabir's dohas, Ramcharitmanas verses, and regional folk wisdom.
          </p>
        </div>

        {/* Date Navigator */}
        <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />

        {/* ─── Card 1: Shloka ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #8B3A3A' }}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B3A3A] font-serif">आज का श्लोक · Shloka of the Day</span>
            <button
              onClick={() => setShowIast(!showIast)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border hover:bg-[var(--bg-tertiary)] transition-all"
              style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
            >
              <Languages size={13} />
              {showIast ? 'Show Devanagari' : 'Show Transliteration'}
            </button>
          </div>

          {/* Main Shloka Text */}
          <div className="py-2 text-center">
            <p 
              className={showIast ? "font-serif italic text-lg leading-relaxed" : "font-devanagari text-xl sm:text-2xl leading-loose font-semibold"}
              style={{ color: 'var(--text-primary)', whiteSpace: 'pre-line' }}
            >
              {showIast ? shlokaItem.iast : shlokaItem.shloka}
            </p>
            <p className="text-xs font-serif text-right italic mt-3" style={{ color: 'var(--text-muted)' }}>
              - {shlokaItem.source}
            </p>
          </div>

          <div className="border-t pt-4 space-y-3" style={{ borderColor: 'var(--border-subtle)' }}>
            {/* Hindi Meaning */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">अर्थ (Hindi)</span>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
                {shlokaItem.meaning_hindi}
              </p>
            </div>

            {/* English Meaning */}
            <div className="space-y-1 pt-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">Translation (English)</span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {shlokaItem.meaning_english}
              </p>
            </div>

            {/* Root Etymology display */}
            {etymon && (
              <div className="mt-4 p-4 rounded-xl border border-dashed text-xs space-y-1.5" style={{ borderColor: 'var(--border-default)', backgroundColor: 'color-mix(in srgb, #8B3A3A 4%, var(--bg-tertiary))' }}>
                <span className="text-[10px] uppercase font-bold text-[#8B3A3A] block">शब्द व्युत्पत्ति · Root Etymology</span>
                <p style={{ color: 'var(--text-primary)' }}>
                  <strong className="font-semibold text-sm">{etymon.word}</strong> from the Sanskrit root <strong className="italic text-[#8B3A3A] font-serif text-sm">{etymon.root}</strong> (meaning &ldquo;{etymon.meaning}&rdquo;).
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {etymon.explanation}
                </p>
              </div>
            )}

            {/* Read Aloud */}
            <div className="flex justify-end items-center gap-1 pt-2">
              <ReadAloudButton 
                text={`${shlokaItem.shloka}. अर्थ: ${shlokaItem.meaning_hindi}`} 
                lang="hi-IN" 
                variant="pill" 
              />
              <RevisitButton
                roomId="vani"
                roomName="Vani"
                contentTitle="Shloka of the Day"
                contentSummary={shlokaItem.meaning_hindi}
              />
              <SutraNoteButton
                roomId="vani"
                roomName="Vani"
                contentTitle="Shloka of the Day"
                className=""
              />
            </div>
          </div>
        </div>

        {/* ─── Card 2: Doha ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #8B3A3A' }}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B3A3A] font-serif">आज का दोहा · Doha of the Day</span>
            <span className="text-xs italic" style={{ color: 'var(--text-faint)' }}>Poet: {dohaItem.poet}</span>
          </div>

          {/* Doha Text */}
          <div className="py-2 text-center">
            <p 
              className="font-devanagari text-xl sm:text-2xl leading-loose font-semibold"
              style={{ color: 'var(--text-primary)', whiteSpace: 'pre-line' }}
            >
              {dohaItem.doha}
            </p>
            <p className="text-xs font-serif text-right italic mt-3" style={{ color: 'var(--text-muted)' }}>
              - {dohaItem.poet}
            </p>
          </div>

          <div className="border-t pt-4 space-y-2" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">अर्थ</span>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
                {dohaItem.meaning_hindi}
              </p>
            </div>

            <div className="flex justify-end items-center gap-1 pt-2">
              <ReadAloudButton 
                text={`${dohaItem.doha}. अर्थ: ${dohaItem.meaning_hindi}`} 
                lang="hi-IN" 
                variant="pill" 
              />
              <RevisitButton
                roomId="vani"
                roomName="Vani"
                contentTitle={`Doha by ${dohaItem.poet}`}
                contentSummary={dohaItem.meaning_hindi}
              />
              <SutraNoteButton
                roomId="vani"
                roomName="Vani"
                contentTitle={`Doha by ${dohaItem.poet}`}
                className=""
              />
            </div>
          </div>
        </div>

        {/* ─── Card 3: Chaupai ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #8B3A3A' }}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B3A3A] font-serif">आज की चौपाई · Ramcharitmanas Verse</span>
            <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-800 text-[10px] font-semibold">
              {chaupaiItem.kand}
            </span>
          </div>

          {/* Chaupai Text */}
          <div className="py-2 text-center">
            <p 
              className="font-devanagari text-xl sm:text-2xl leading-loose font-semibold"
              style={{ color: 'var(--text-primary)', whiteSpace: 'pre-line' }}
            >
              {chaupaiItem.chaupai}
            </p>
            <p className="text-xs font-serif text-right italic mt-3" style={{ color: 'var(--text-muted)' }}>
              - श्रीरामचरितमानस ({chaupaiItem.kand})
            </p>
          </div>

          <div className="border-t pt-4 space-y-2" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">अर्थ</span>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
                {chaupaiItem.meaning_hindi}
              </p>
            </div>

            <div className="flex justify-end items-center gap-1 pt-2">
              <ReadAloudButton 
                text={`${chaupaiItem.chaupai}. अर्थ: ${chaupaiItem.meaning_hindi}`} 
                lang="hi-IN" 
                variant="pill" 
              />
              <RevisitButton
                roomId="vani"
                roomName="Vani"
                contentTitle={`Chaupai (${chaupaiItem.kand})`}
                contentSummary={chaupaiItem.meaning_hindi}
              />
              <SutraNoteButton
                roomId="vani"
                roomName="Vani"
                contentTitle={`Chaupai (${chaupaiItem.kand})`}
                className=""
              />
            </div>
          </div>
        </div>

        {/* ─── Card 4: Lok Katha / Folk Wisdom ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #8B3A3A' }}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B3A3A] font-serif">आज की कहावत · Dialect Folk Saying</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(139, 58, 58, 0.1)', color: '#8B3A3A' }}>
              {lokKathaItem.language}
            </span>
          </div>

          {/* Saying Text */}
          <div className="py-2 text-center">
            <p 
              className="font-devanagari text-xl sm:text-2xl leading-loose font-semibold italic"
              style={{ color: 'var(--text-primary)' }}
            >
              &ldquo;{lokKathaItem.saying}&rdquo;
            </p>
          </div>

          <div className="border-t pt-4 space-y-2" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">कहावत का अर्थ</span>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
                {lokKathaItem.meaning_hindi}
              </p>
            </div>

            <div className="flex justify-end items-center gap-1 pt-2">
              <ReadAloudButton 
                text={`${lokKathaItem.saying}. इसका अर्थ है: ${lokKathaItem.meaning_hindi}`} 
                lang="hi-IN" 
                variant="pill" 
              />
              <RevisitButton
                roomId="vani"
                roomName="Vani"
                contentTitle="Folk Saying"
                contentSummary={lokKathaItem.meaning_hindi}
              />
              <SutraNoteButton
                roomId="vani"
                roomName="Vani"
                contentTitle="Folk Saying"
                className=""
              />
            </div>
          </div>
        </div>

        {/* ─── Card 5: Hindi Word of the Day ─── */}
        <div className="card-base p-6 space-y-4" style={{ borderLeft: '4px solid #8B3A3A' }}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B3A3A] font-serif">आज का शब्द · Hindi Word of the Day</span>
          </div>

          {/* Word Text */}
          <div className="py-2 text-center">
            <p 
              className="font-devanagari text-3xl leading-loose font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {hindiWordItem.word}
            </p>
          </div>

          <div className="border-t pt-4 space-y-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">अर्थ (Meaning)</span>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-secondary)' }}>
                {hindiWordItem.meaning}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">प्रयोग (Usage)</span>
              <p className="font-devanagari text-base italic" style={{ color: 'var(--text-muted)' }}>
                &ldquo;{hindiWordItem.usage}&rdquo;
              </p>
            </div>

            <div className="flex justify-end items-center gap-1 pt-2">
              <ReadAloudButton 
                text={`${hindiWordItem.word}. इसका अर्थ है ${hindiWordItem.meaning}. उदाहरण वाक्य: ${hindiWordItem.usage}`} 
                lang="hi-IN" 
                variant="pill" 
              />
              <RevisitButton
                roomId="vani"
                roomName="Vani"
                contentTitle={`Word of the Day - ${hindiWordItem.word}`}
                contentSummary={hindiWordItem.meaning}
              />
              <SutraNoteButton
                roomId="vani"
                roomName="Vani"
                contentTitle={`Word of the Day - ${hindiWordItem.word}`}
                className=""
              />
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
