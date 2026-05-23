// src/types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'day' | 'night' | 'system';
  script: 'devanagari' | 'roman';
  defaultLang: 'en' | 'hi' | 'ur';
  soundEnabled: boolean;
  volume: number; // 0–1
  ttsSpeed: number; // 0.7 | 1.0 | 1.25 | 1.5
}

export const DEFAULT_PREFERENCES: UserPreferences = {
  theme: 'system',
  script: 'devanagari',
  defaultLang: 'en',
  soundEnabled: false,
  volume: 0.15,
  ttsSpeed: 1.0,
};
