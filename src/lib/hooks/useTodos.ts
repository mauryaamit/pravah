import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase/client';
import { doc, onSnapshot, setDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from './useAuth';
import { toDateString } from '@/lib/utils/date';

export interface TodoTask {
  id: string;
  text: string;
  completed: boolean;
  order: number;
}

export function useTodos(selectedDate: string) {
  const { user } = useAuth();
  const [todos, setTodos] = useState<TodoTask[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const docRef = doc(db, `users/${user.uid}/todos`, selectedDate);
    const unsub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTodos(data.tasks || []);
      } else {
        setTodos([]);
      }
      setLoading(false);
    }, (err) => {
      console.error('Stream todos error:', err);
      setLoading(false);
    });

    return unsub;
  }, [user, selectedDate]);

  const saveTodos = async (updatedTasks: TodoTask[]) => {
    if (!user || !db) return;
    const docRef = doc(db, `users/${user.uid}/todos`, selectedDate);
    const tasksWithOrder = updatedTasks.map((t, idx) => ({
      id: t.id,
      text: t.text,
      completed: t.completed,
      order: t.order !== undefined ? t.order : idx,
    }));
    await setDoc(docRef, {
      tasks: tasksWithOrder,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  };

  const addTodo = async (text: string) => {
    if (todos.length >= 20) {
      throw new Error('Maximum 20 tasks per day.');
    }
    const newTask: TodoTask = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      order: todos.length,
    };
    const next = [...todos, newTask];
    await saveTodos(next);
  };

  const toggleTodo = async (taskId: string) => {
    const updated = todos.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t);
    // Collapse completed tasks to bottom
    const active = updated.filter(t => !t.completed);
    const completed = updated.filter(t => t.completed);
    const sorted = [...active, ...completed];
    await saveTodos(sorted);
  };

  const deleteTodo = async (taskId: string) => {
    const next = todos.filter(t => t.id !== taskId);
    await saveTodos(next);
  };

  const clearCompleted = async () => {
    const next = todos.filter(t => !t.completed);
    await saveTodos(next);
  };

  const carryForward = async () => {
    if (!user || !db) return;
    
    // Get yesterday's date
    const d = new Date(selectedDate);
    d.setDate(d.getDate() - 1);
    
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const yesterdayStr = `${yyyy}-${mm}-${dd}`;

    // Read yesterday's doc
    const res = await fetch(`/api/todos/get?uid=${user.uid}&date=${yesterdayStr}`);
    // Wait, let's query direct from firestore instead of an API route since we are on the client side!
    // That is way easier and faster:
    const { getDoc } = await import('firebase/firestore');
    const yesterdayDocRef = doc(db, `users/${user.uid}/todos`, yesterdayStr);
    const yesterdaySnap = await getDoc(yesterdayDocRef);
    
    if (yesterdaySnap.exists()) {
      const yesterdayData = yesterdaySnap.data();
      const yesterdayTasks: TodoTask[] = yesterdayData.tasks || [];
      const incomplete = yesterdayTasks.filter(t => !t.completed);
      
      // Append incomplete to today's list, ensuring unique IDs and max 20 limit
      const existingIds = new Set(todos.map(t => t.text)); // avoid duplicating identical text tasks
      const toAdd = incomplete.filter(t => !existingIds.has(t.text));
      
      const combined = [...todos];
      for (const t of toAdd) {
        if (combined.length >= 20) break;
        combined.push({
          id: crypto.randomUUID(), // assign fresh ID for today
          text: t.text,
          completed: false,
          order: combined.length,
        });
      }
      
      await saveTodos(combined);
    }
  };

  return { todos, loading, saveTodos, addTodo, toggleTodo, deleteTodo, clearCompleted, carryForward };
}
