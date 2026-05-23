import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase/client';
import { doc, onSnapshot, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from './useAuth';
import { toDateString } from '@/lib/utils/date';

export function useStreak() {
  const { user } = useAuth();
  const [streak, setStreak] = useState({
    current_streak: 0,
    longest_streak: 0,
    rewire_score: 0,
    last_active_date: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }

    const docRef = doc(db, `users/${user.uid}/streak/status`);
    const unsub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setStreak({
          current_streak: data.current_streak || 0,
          longest_streak: data.longest_streak || 0,
          rewire_score: data.rewire_score || 0,
          last_active_date: data.last_active_date || '',
        });
      } else {
        // Initialize if not exists
        setDoc(docRef, {
          current_streak: 0,
          longest_streak: 0,
          rewire_score: 0,
          last_active_date: '',
        });
      }
      setLoading(false);
    }, (err) => {
      console.error('Stream streak error:', err);
      setLoading(false);
    });

    return unsub;
  }, [user]);

  const addRewireScore = async (points: number) => {
    if (!user || !db) return;
    const docRef = doc(db, `users/${user.uid}/streak/status`);
    const snap = await getDoc(docRef);
    const data = snap.exists() ? snap.data() : { rewire_score: 0 };
    const newScore = (data.rewire_score || 0) + points;
    await updateDoc(docRef, { rewire_score: newScore });
  };

  const updateStreak = async () => {
    if (!user || !db) return;
    const docRef = doc(db, `users/${user.uid}/streak/status`);
    const snap = await getDoc(docRef);
    if (!snap.exists()) return;
    const data = snap.data();
    
    const todayStr = toDateString(new Date());
    if (data.last_active_date === todayStr) return; // already active today

    // Calculate new streak
    let current = data.current_streak || 0;
    const longest = data.longest_streak || 0;
    const lastActive = data.last_active_date;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = toDateString(yesterday);

    if (lastActive === yesterdayStr) {
      current += 1;
    } else if (lastActive !== todayStr) {
      current = 1;
    }

    const newLongest = Math.max(current, longest);
    await updateDoc(docRef, {
      current_streak: current,
      longest_streak: newLongest,
      last_active_date: todayStr,
    });
  };

  return { streak, loading, addRewireScore, updateStreak };
}
