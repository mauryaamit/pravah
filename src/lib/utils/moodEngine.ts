// src/lib/utils/moodEngine.ts
// Pure functions that derive a MoodProfile from a mood integer (1-5).
// No side effects. Import anywhere.

export type MoodLevel = 1 | 2 | 3 | 4 | 5;

export type ContentTone = 'gentle' | 'balanced' | 'energetic' | 'deep';
export type ChallengeIntensity = 'light' | 'medium' | 'strong';
export type ColorWarmth = 'warm' | 'neutral' | 'cool';
export type PoetryMood = 'solace' | 'reflection' | 'hope' | 'love' | 'nature' | 'fire';

export interface MoodProfile {
  level: MoodLevel;
  colorWarmth: ColorWarmth;
  cssFilter: string;            // applied as CSS filter to the main content area
  roomEmphasis: string[];       // rooms to surface first in Aarambh quick grid
  contentTone: ContentTone;
  challengeIntensity: ChallengeIntensity;
  poetryMood: PoetryMood;
  ambientSuggestion: string;   // suggested ambient sound id
  whisper: string;              // gentle text shown in Aarambh
  ttsSpeed: number;             // slower when reflective
}

const PROFILES: Record<MoodLevel, MoodProfile> = {
  1: {
    level: 1,
    colorWarmth: 'warm',
    cssFilter: 'sepia(10%) brightness(0.96) saturate(0.9)',
    roomEmphasis: ['sukoon', 'antarman', 'darshan', 'bargad', 'noor'],
    contentTone: 'gentle',
    challengeIntensity: 'light',
    poetryMood: 'solace',
    ambientSuggestion: 'rain',
    whisper: 'Even the heaviest rain ends. You are here, and that is enough.',
    ttsSpeed: 0.85,
  },
  2: {
    level: 2,
    colorWarmth: 'warm',
    cssFilter: 'sepia(5%) brightness(0.98)',
    roomEmphasis: ['sukoon', 'manthan', 'darshan', 'antarman', 'bodh'],
    contentTone: 'gentle',
    challengeIntensity: 'light',
    poetryMood: 'reflection',
    ambientSuggestion: 'vinyl',
    whisper: 'Rest is not the absence of doing. It is the presence of being.',
    ttsSpeed: 0.9,
  },
  3: {
    level: 3,
    colorWarmth: 'neutral',
    cssFilter: 'none',
    roomEmphasis: ['neelakurinji', 'bodh', 'cosmos', 'sukoon', 'lekhak'],
    contentTone: 'balanced',
    challengeIntensity: 'medium',
    poetryMood: 'nature',
    ambientSuggestion: 'forest',
    whisper: 'A curious mind is a free mind. What will you discover today?',
    ttsSpeed: 1.0,
  },
  4: {
    level: 4,
    colorWarmth: 'neutral',
    cssFilter: 'brightness(1.01) saturate(1.04)',
    roomEmphasis: ['cosmos', 'bodh', 'neurolab', 'lekhak', 'vibhav'],
    contentTone: 'energetic',
    challengeIntensity: 'medium',
    poetryMood: 'hope',
    ambientSuggestion: 'river',
    whisper: 'Good energy is rare. Use it well. Learn something you cannot unlearn.',
    ttsSpeed: 1.0,
  },
  5: {
    level: 5,
    colorWarmth: 'cool',
    cssFilter: 'brightness(1.02) saturate(1.06)',
    roomEmphasis: ['noor', 'neelakurinji', 'cosmos', 'bodh', 'vibhav'],
    contentTone: 'energetic',
    challengeIntensity: 'strong',
    poetryMood: 'fire',
    ambientSuggestion: 'cafe',
    whisper: 'On days like this, do the thing you have been postponing for weeks.',
    ttsSpeed: 1.1,
  },
};

export function getMoodProfile(mood: number): MoodProfile {
  const clamped = Math.min(5, Math.max(1, Math.round(mood))) as MoodLevel;
  return PROFILES[clamped];
}

export function getMoodEmoji(mood: number): string {
  const emojis = ['', '😔', '😕', '😐', '🙂', '😊'];
  return emojis[Math.min(5, Math.max(1, Math.round(mood)))] || '😐';
}

export function getMoodLabel(mood: number): string {
  const labels = ['', 'Low', 'Quiet', 'Steady', 'Good', 'Bright'];
  return labels[Math.min(5, Math.max(1, Math.round(mood)))] || 'Steady';
}
