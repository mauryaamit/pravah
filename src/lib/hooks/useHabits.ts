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
  const [weeklyCompletions, setWeeklyCompletions] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }

    const todayStr = toDateString(new Date());

    // Calculate start and end of current week (Monday to Sunday)
    const today = new Date();
    const day = today.getDay(); // 0 is Sun, 1 is Mon...
    const diffToMon = day === 0 ? -6 : 1 - day;
    
    const monday = new Date(today);
    monday.setDate(today.getDate() + diffToMon);
    
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const startOfWeekStr = toDateString(monday);
    const endOfWeekStr = toDateString(sunday);

    // Listen to habits
    const habitsQuery = query(collection(db, `users/${user.uid}/habits`));
    
    // Listen to weekly completions (covers Mon-Sun)
    const completionsQuery = query(
      collection(db, `users/${user.uid}/habitCompletions`),
      where('date', '>=', startOfWeekStr),
      where('date', '<=', endOfWeekStr)
    );

    let rawHabits: any[] = [];
    let completionsMap: Record<string, string[]> = {};

    const updateState = () => {
      const todayCompletions = new Set(completionsMap[todayStr] || []);
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
      const map: Record<string, string[]> = {};
      snap.docs.forEach(d => {
        const data = d.data();
        const date = data.date;
        const habitId = data.habitId;
        if (date && habitId) {
          if (!map[date]) map[date] = [];
          map[date].push(habitId);
        }
      });
      completionsMap = map;
      setWeeklyCompletions(map);
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

  return { habits, weeklyCompletions, loading, addHabit, completeHabit, deleteHabit };
}
