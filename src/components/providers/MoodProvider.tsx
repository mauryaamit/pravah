'use client';
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { getMoodProfile, type MoodProfile, type MoodLevel } from '@/lib/utils/moodEngine';

import { useAuth } from '@/lib/hooks/useAuth';
import { db } from '@/lib/firebase/client';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { toDateString } from '@/lib/utils/date';

interface MoodContextValue {
  mood: MoodLevel;
  profile: MoodProfile;
  setMood: (m: number) => void;
}

const MoodContext = createContext<MoodContextValue | null>(null);

export function MoodProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [mood, setMoodState] = useState<MoodLevel>(3);

  // 1. Sync from Firestore in real-time (with localStorage fallback on load)
  useEffect(() => {
    // Initial sync from localStorage for immediate load
    const stored = localStorage.getItem('pravah-mood-today');
    if (stored) {
      const parsed = JSON.parse(stored);
      const today = toDateString(new Date());
      if (parsed.date === today && parsed.mood >= 1 && parsed.mood <= 5) {
        setMoodState(parsed.mood as MoodLevel);
      }
    }

    if (!user || !db) return;

    const todayStr = toDateString(new Date());
    const docRef = doc(db, `users/${user.uid}/moods`, todayStr);
    const unsub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.mood >= 1 && data.mood <= 5) {
          setMoodState(data.mood as MoodLevel);
        }
      }
    }, (err) => {
      console.error('Failed to stream daily mood:', err);
    });

    return unsub;
  }, [user]);

  // 2. Set mood locally, in localStorage, and in Firestore
  const setMood = useCallback(async (m: number) => {
    const clamped = Math.min(5, Math.max(1, Math.round(m))) as MoodLevel;
    setMoodState(clamped);
    
    const today = toDateString(new Date());
    localStorage.setItem('pravah-mood-today', JSON.stringify({ date: today, mood: clamped }));

    if (user && db) {
      try {
        const docRef = doc(db, `users/${user.uid}/moods`, today);
        await setDoc(docRef, {
          mood: clamped,
          date: today,
        }, { merge: true });
      } catch (err) {
        console.error('Failed to save mood to Firestore:', err);
      }
    }
  }, [user]);

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
