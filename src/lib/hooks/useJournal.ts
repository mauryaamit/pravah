import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase/client';
import { doc, onSnapshot, setDoc, serverTimestamp, collection, query, orderBy } from 'firebase/firestore';
import { useAuth } from './useAuth';
import { useStreak } from './useStreak';
import { toDateString } from '@/lib/utils/date';

export interface JournalEntry {
  date: string;
  content: string;
  mood: number;
  gratitude: string[];
  learned: string;
  intention: string;
  word_count: number;
}

export function useJournal(selectedDate: string) {
  const { user } = useAuth();
  const { addRewireScore, updateStreak } = useStreak();
  const [todayEntry, setTodayEntry] = useState<JournalEntry | null>(null);
  const [allEntries, setAllEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }

    setLoading(true);

    // 1. Listen to selected date's entry
    const todayDocRef = doc(db, `users/${user.uid}/journalEntries`, selectedDate);
    const unsubToday = onSnapshot(todayDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTodayEntry({
          date: selectedDate,
          content: data.content || '',
          mood: data.mood || 3,
          gratitude: data.gratitude || ['', '', ''],
          learned: data.todayILearned || data.learned || '',
          intention: data.tomorrowsIntention || data.intention || '',
          word_count: data.word_count || 0,
        });
      } else {
        setTodayEntry(null);
      }
      setLoading(false);
    }, (err) => {
      console.error('Stream journal entry error:', err);
      setLoading(false);
    });

    // 2. Listen to all entries (calendar view)
    const allQuery = query(
      collection(db, `users/${user.uid}/journalEntries`),
      orderBy('updatedAt', 'desc')
    );
    const unsubAll = onSnapshot(allQuery, (snap) => {
      const list = snap.docs.map(d => {
        const data = d.data();
        return {
          date: d.id,
          content: data.content || '',
          mood: data.mood || 3,
          gratitude: data.gratitude || ['', '', ''],
          learned: data.todayILearned || data.learned || '',
          intention: data.tomorrowsIntention || data.intention || '',
          word_count: data.word_count || 0,
        };
      });
      setAllEntries(list);
    }, (err) => {
      console.error('Stream all journal entries error:', err);
    });

    return () => {
      unsubToday();
      unsubAll();
    };
  }, [user, selectedDate]);

  const saveEntry = async (data: {
    content: string;
    mood: number;
    gratitude: string[];
    learned: string;
    intention: string;
  }) => {
    if (!user || !db) return;
    const docRef = doc(db, `users/${user.uid}/journalEntries`, selectedDate);

    const wordCount = data.content.trim().split(/\s+/).filter(Boolean).length;

    // Check if entry already existed today to see if we should award streak/rewire points
    let existed = false;
    if (todayEntry) existed = true;

    await setDoc(docRef, {
      content: data.content,
      mood: data.mood,
      gratitude: data.gratitude,
      todayILearned: data.learned,
      tomorrowsIntention: data.intention,
      word_count: wordCount,
      updatedAt: serverTimestamp(),
    }, { merge: true });

    // Award +5 rewire score for the first journal entry of the day
    if (!existed && data.content.trim().length > 5) {
      await addRewireScore(5);
      await updateStreak();
    }
  };

  return { todayEntry, allEntries, loading, saveEntry };
}
