import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase/client';
import { collection, query, onSnapshot, doc, addDoc, deleteDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from './useAuth';

export interface Sankalp {
  id: string;
  title: string;
  identity: string;
  start_date: string;
  cycle_length: number;
  is_complete: boolean;
}

export function useSankalps() {
  const { user } = useAuth();
  const [sankalps, setSankalps] = useState<Sankalp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }

    const q = query(collection(db, `users/${user.uid}/sankalps`));
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map(d => {
        const data = d.data();
        return {
          id: d.id,
          title: data.title || '',
          identity: data.identity || '',
          start_date: data.start_date || '',
          cycle_length: data.cycle_length || 30,
          is_complete: !!data.is_complete,
        };
      });
      setSankalps(list);
      setLoading(false);
    }, (err) => {
      console.error('Stream sankalps error:', err);
      setLoading(false);
    });

    return unsub;
  }, [user]);

  const addSankalp = async (title: string, identity: string, startDate: string, cycleLength: number) => {
    if (!user || !db) return;
    const colRef = collection(db, `users/${user.uid}/sankalps`);
    await addDoc(colRef, {
      title,
      identity,
      start_date: startDate,
      cycle_length: cycleLength,
      is_complete: false,
      createdAt: serverTimestamp(),
    });
  };

  const completeSankalp = async (sankalpId: string, isComplete: boolean) => {
    if (!user || !db) return;
    const docRef = doc(db, `users/${user.uid}/sankalps`, sankalpId);
    await updateDoc(docRef, {
      is_complete: isComplete,
    });
  };

  const deleteSankalp = async (sankalpId: string) => {
    if (!user || !db) return;
    const docRef = doc(db, `users/${user.uid}/sankalps`, sankalpId);
    await deleteDoc(docRef);
  };

  return { sankalps, loading, addSankalp, completeSankalp, deleteSankalp };
}
