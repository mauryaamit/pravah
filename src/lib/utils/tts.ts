// src/lib/utils/tts.ts
// Browser Web Speech API TTS wrapper

const LANG_MAP: Record<string, string> = {
  en: 'en-US',
  hi: 'hi-IN',
  ur: 'ur-PK',
};

let currentUtterance: SpeechSynthesisUtterance | null = null;

export function speak(text: string, lang: string = 'en', rate: number = 1.0): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  stopSpeaking();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = LANG_MAP[lang] || 'en-US';
  utter.rate = rate;
  utter.pitch = 1.0;
  utter.volume = 1.0;

  // Try to find a suitable voice
  const voices = window.speechSynthesis.getVoices();
  const targetLang = LANG_MAP[lang] || 'en-US';
  const voice = voices.find(v => v.lang === targetLang) ||
                voices.find(v => v.lang.startsWith(targetLang.split('-')[0])) ||
                voices[0];
  if (voice) utter.voice = voice;

  currentUtterance = utter;
  window.speechSynthesis.speak(utter);
}

export function stopSpeaking(): void {
  if (typeof window === 'undefined') return;
  window.speechSynthesis.cancel();
  currentUtterance = null;
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
