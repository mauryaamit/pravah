// src/lib/utils/tts.ts
// Contemplative Indian TTS Voice Customization Engine

export interface TTSOptions {
  lang: 'hi-IN' | 'en-IN' | 'ur-PK' | 'en' | 'hi' | 'ur';
  rate: number;    // default 0.75 (slow, contemplative)
  pitch: number;   // default 0.85 (more bass)
  volume: number;  // 1.0
}

const LANG_MAP: Record<string, string> = {
  en: 'en-IN',
  hi: 'hi-IN',
  ur: 'ur-PK',
  'en-IN': 'en-IN',
  'hi-IN': 'hi-IN',
  'ur-PK': 'ur-PK',
};

export function speak(text: string, options: Partial<TTSOptions> = {}): SpeechSynthesisUtterance | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  window.speechSynthesis.cancel();

  const config = {
    lang: 'hi-IN' as const,
    rate: 0.75,    // Slower than default — contemplative pace
    pitch: 0.85,   // Lower pitch = more bass, authoritative
    volume: 1.0,
    ...options,
  };

  const utterance = new SpeechSynthesisUtterance(text);
  const resolvedLang = LANG_MAP[config.lang] || 'hi-IN';
  utterance.lang = resolvedLang;
  utterance.rate = config.rate;
  utterance.pitch = config.pitch;
  utterance.volume = config.volume;

  // Prefer Indian voices — search available voices
  const voices = window.speechSynthesis.getVoices();

  // Priority order for Indian voices:
  const preferredVoice =
    voices.find(v => v.lang === 'hi-IN' && v.name.includes('Google')) ||
    voices.find(v => v.lang === 'hi-IN') ||
    voices.find(v => v.lang === 'en-IN' && v.name.includes('Google')) ||
    voices.find(v => v.lang === 'en-IN') ||
    voices.find(v => v.name.includes('Google')) ||
    voices[0] ||
    null;

  if (preferredVoice) utterance.voice = preferredVoice;

  window.speechSynthesis.speak(utterance);
  return utterance;
}

export function stopSpeaking(): void {
  if (typeof window === 'undefined') return;
  window.speechSynthesis.cancel();
}

export function pauseSpeaking(): void {
  if (typeof window === 'undefined') return;
  window.speechSynthesis.pause();
}

export function resumeSpeaking(): void {
  if (typeof window === 'undefined') return;
  window.speechSynthesis.resume();
}

export function isSpeaking(): boolean {
  if (typeof window === 'undefined') return false;
  return window.speechSynthesis.speaking;
}

export function isPaused(): boolean {
  if (typeof window === 'undefined') return false;
  return window.speechSynthesis.paused;
}
