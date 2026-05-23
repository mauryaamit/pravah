import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase/client';
import { collection, query, onSnapshot, doc, setDoc, addDoc, deleteDoc, where, serverTimestamp } from 'firebase/firestore';
import { useAuth } from './useAuth';
import { useStreak } from './useStreak';
import { toDateString } from '@/lib/utils/date';

export interface Habit {
  id: string;
  name: string;
  feeling: string;
  completedToday: boolean;
  is_active: boolean;
}

export function useHabits() {
  const { user } = useAuth();
  const { addRewireScore, updateStreak } = useStreak();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }

    const todayStr = toDateString(new Date());

    // Listen to habits
    const habitsQuery = query(collection(db, `users/${user.uid}/habits`));
    const completionsQuery = query(
      collection(db, `users/${user.uid}/habitCompletions`),
      where('date', '==', todayStr)
    );

    let rawHabits: any[] = [];
    let todayCompletions: Set<string> = new Set();

    const updateState = () => {
      const combined = rawHabits.map(h => ({
        id: h.id,
        name: h.name,
        feeling: h.feeling,
        is_active: h.is_active !== false,
        completedToday: todayCompletions.has(h.id),
      }));
      setHabits(combined);
    };

    const unsubHabits = onSnapshot(habitsQuery, (snap) => {
      rawHabits = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      updateState();
      setLoading(false);
    }, (err) => {
      console.error('Stream habits error:', err);
      setLoading(false);
    });

    const unsubCompletions = onSnapshot(completionsQuery, (snap) => {
      todayCompletions = new Set(snap.docs.map(d => d.data().habitId));
      updateState();
    }, (err) => {
      console.error('Stream completions error:', err);
    });

    return () => {
      unsubHabits();
      unsubCompletions();
    };
  }, [user]);

  const addHabit = async (name: string, feeling: string, frequency: string = 'daily') => {
    if (!user || !db) return;
    const colRef = collection(db, `users/${user.uid}/habits`);
    await addDoc(colRef, {
      name,
      feeling,
      frequency,
      is_active: true,
      createdAt: serverTimestamp(),
    });
  };

  const completeHabit = async (habitId: string) => {
    if (!user || !db) return;
    const todayStr = toDateString(new Date());
    const docId = `${todayStr}_${habitId}`;
    const docRef = doc(db, `users/${user.uid}/habitCompletions`, docId);
    
    // Save completion
    await setDoc(docRef, {
      habitId,
      date: todayStr,
      completedAt: serverTimestamp(),
    });

    // Award +3 rewire score and update active streak
    await addRewireScore(3);
    await updateStreak();
  };

  const deleteHabit = async (habitId: string) => {
    if (!user || !db) return;
    const docRef = doc(db, `users/${user.uid}/habits`, habitId);
    await deleteDoc(docRef);
  };

  return { habits, loading, addHabit, completeHabit, deleteHabit };
}
