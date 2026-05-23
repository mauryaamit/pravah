'use client';
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { getMoodProfile, type MoodProfile, type MoodLevel } from '@/lib/utils/moodEngine';

interface MoodContextValue {
  mood: MoodLevel;
  profile: MoodProfile;
  setMood: (m: number) => void;
}

const MoodContext = createContext<MoodContextValue | null>(null);

export function MoodProvider({ children }: { children: ReactNode }) {
  const [mood, setMoodState] = useState<MoodLevel>(3);

  useEffect(() => {
    // Load from localStorage (last saved mood today)
    const stored = localStorage.getItem('pravah-mood-today');
    if (stored) {
      const parsed = JSON.parse(stored);
      const today = new Date().toISOString().split('T')[0];
      if (parsed.date === today && parsed.mood >= 1 && parsed.mood <= 5) {
        setMoodState(parsed.mood as MoodLevel);
      }
    }
  }, []);

  const setMood = useCallback((m: number) => {
    const clamped = Math.min(5, Math.max(1, Math.round(m))) as MoodLevel;
    setMoodState(clamped);
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('pravah-mood-today', JSON.stringify({ date: today, mood: clamped }));
  }, []);

  const profile = getMoodProfile(mood);

  return (
    <MoodContext.Provider value={{ mood, profile, setMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  const ctx = useContext(MoodContext);
  if (!ctx) throw new Error('useMood must be used within MoodProvider');
  return ctx;
}
