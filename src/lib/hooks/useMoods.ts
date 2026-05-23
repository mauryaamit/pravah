import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase/client';
import { collection, query, orderBy, limit, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { useAuth } from './useAuth';
import { toDateString } from '@/lib/utils/date';

export function useMoods() {
  const { user } = useAuth();
  const [moods, setMoods] = useState<{ date: string; mood: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, `users/${user.uid}/moods`),
      orderBy('date', 'desc'),
      limit(7)
    );

    const unsub = onSnapshot(q, (snap) => {
      const history = snap.docs.map(d => {
        const data = d.data();
        return {
          date: data.date || d.id,
          mood: data.mood,
        };
      });
      // Return chronological order
      setMoods(history.reverse());
      setLoading(false);
    }, (err) => {
      console.error('Failed to stream moods:', err);
      setLoading(false);
    });

    return unsub;
  }, [user]);

  const saveMood = async (mood: number) => {
    if (!user || !db) return;
    const dateStr = toDateString(new Date());
    const docRef = doc(db, `users/${user.uid}/moods`, dateStr);
    await setDoc(docRef, {
      mood,
      date: dateStr,
    });
  };

  return { moods, loading, saveMood };
}
