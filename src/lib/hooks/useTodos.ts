import { useState, useEffect, useMemo, useCallback } from 'react';
import { db } from '@/lib/firebase/client';
import { 
  collection, 
  doc, 
  onSnapshot, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  getDocs
} from 'firebase/firestore';
import { useAuth } from './useAuth';
import { toDateString } from '@/lib/utils/date';

export interface TodoTask {
  id: string;
  text: string;
  completed: boolean;
  order: number;
  createdDate: string; // YYYY-MM-DD
  createdAt?: any;
  completedDate?: string | null; // YYYY-MM-DD
  completedAt?: any;
  removed?: boolean;
  removedDate?: string | null; // YYYY-MM-DD
  removedAt?: any;
}

export function useTodos(selectedDate: string) {
  const { user } = useAuth();
  const [allTasks, setAllTasks] = useState<TodoTask[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. Real-time subscription to user's persistent tasks collection
  useEffect(() => {
    if (!user || !db) {
      setAllTasks([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const tasksColRef = collection(db, `users/${user.uid}/tasks`);
    const unsub = onSnapshot(
      tasksColRef,
      async (snapshot) => {
        if (!snapshot.empty) {
          const loaded: TodoTask[] = [];
          snapshot.forEach((d) => {
            const data = d.data();
            loaded.push({
              id: d.id,
              text: data.text || '',
              completed: !!data.completed,
              order: typeof data.order === 'number' ? data.order : 0,
              createdDate: data.createdDate || toDateString(new Date()),
              createdAt: data.createdAt,
              completedDate: data.completedDate || null,
              completedAt: data.completedAt || null,
              removed: !!data.removed,
              removedDate: data.removedDate || null,
              removedAt: data.removedAt || null,
            });
          });
          setAllTasks(loaded);
          setLoading(false);
          // If persistent tasks collection is empty, check and migrate legacy date-based doc if any
          try {
            if (db) {
              const legacySnap = await getDocs(collection(db, `users/${user.uid}/todos`));
              if (!legacySnap.empty) {
                const migrated: TodoTask[] = [];
                for (const legDoc of legacySnap.docs) {
                  const legDate = legDoc.id;
                  const legTasks = legDoc.data().tasks || [];
                  for (let i = 0; i < legTasks.length; i++) {
                    const t = legTasks[i];
                    const taskId = t.id || crypto.randomUUID();
                    const taskObj: TodoTask = {
                      id: taskId,
                      text: t.text,
                      completed: !!t.completed,
                      order: typeof t.order === 'number' ? t.order : i,
                      createdDate: legDate,
                      completedDate: t.completed ? legDate : null,
                      removed: false,
                    };
                    await setDoc(doc(db, `users/${user.uid}/tasks`, taskId), {
                      ...taskObj,
                      createdAt: serverTimestamp(),
                    });
                    migrated.push(taskObj);
                  }
                }
                setAllTasks(migrated);
              } else {
                setAllTasks([]);
              }
            } else {
              setAllTasks([]);
            }
          } catch (e) {
            console.error('Legacy todos migration error:', e);
            setAllTasks([]);
          }
          setLoading(false);
        }
      },
      (err) => {
        console.error('Stream tasks error:', err);
        setLoading(false);
      }
    );

    return unsub;
  }, [user, selectedDate]);

  // 2. Filter and compute visible todos for the currently selected date
  const todos = useMemo(() => {
    return allTasks
      .filter((task) => {
        // Must not be explicitly marked as removed on or before selectedDate
        if (task.removed) {
          if (!task.removedDate || selectedDate >= task.removedDate) {
            return false;
          }
        }

        // Must have been created on or before the selected date
        if (task.createdDate > selectedDate) {
          return false;
        }

        // If completed:
        if (task.completed && task.completedDate) {
          // On the date it was completed, show it as completed
          if (task.completedDate === selectedDate) {
            return true;
          }
          // On dates after completion date, it does NOT appear as an active unfinished task
          if (selectedDate > task.completedDate) {
            return false;
          }
          // On dates before completion date, it was still active/unfinished
          if (selectedDate < task.completedDate) {
            return true;
          }
        }

        return true;
      })
      .map((task) => {
        // On historical dates before completion date, render it as not completed on that day
        const isCompletedOnSelectedDate = 
          task.completed && 
          task.completedDate !== null && 
          task.completedDate !== undefined &&
          task.completedDate <= selectedDate;

        return {
          ...task,
          completed: isCompletedOnSelectedDate,
        };
      })
      .sort((a, b) => {
        // Active tasks first, completed tasks pushed to bottom
        if (a.completed !== b.completed) {
          return a.completed ? 1 : -1;
        }
        return a.order - b.order;
      });
  }, [allTasks, selectedDate]);

  // 3. Add task: created on selectedDate, carries forward to all future days
  const addTodo = async (text: string) => {
    if (!user || !db) return;
    const trimmed = text.trim();
    if (!trimmed) return;

    if (todos.length >= 30) {
      throw new Error('Maximum 30 tasks per day.');
    }

    const taskId = crypto.randomUUID();
    const maxOrder = allTasks.reduce((max, t) => Math.max(max, t.order || 0), 0);

    const newTaskData = {
      id: taskId,
      text: trimmed,
      completed: false,
      order: maxOrder + 1,
      createdDate: selectedDate,
      createdAt: serverTimestamp(),
      completedDate: null,
      completedAt: null,
      removed: false,
      removedDate: null,
      removedAt: null,
    };

    const taskRef = doc(db, `users/${user.uid}/tasks`, taskId);
    await setDoc(taskRef, newTaskData);
  };

  // 4. Toggle completion state
  const toggleTodo = async (taskId: string) => {
    if (!user || !db) return;
    const task = allTasks.find((t) => t.id === taskId);
    if (!task) return;

    const taskRef = doc(db, `users/${user.uid}/tasks`, taskId);

    if (!task.completed) {
      // Mark as completed on selectedDate
      await updateDoc(taskRef, {
        completed: true,
        completedDate: selectedDate,
        completedAt: serverTimestamp(),
      });
    } else {
      // Unmark completed -> become active again
      await updateDoc(taskRef, {
        completed: false,
        completedDate: null,
        completedAt: null,
      });
    }
  };

  // 5. Delete task
  const deleteTodo = async (taskId: string) => {
    if (!user || !db) return;
    const taskRef = doc(db, `users/${user.uid}/tasks`, taskId);
    // Mark as removed from selectedDate onward (and delete from active Firestore)
    await deleteDoc(taskRef);
  };

  // 6. Clear completed tasks
  const clearCompleted = async () => {
    if (!user || !db) return;
    const completedOnSelectedDate = todos.filter((t) => t.completed);
    for (const t of completedOnSelectedDate) {
      const taskRef = doc(db, `users/${user.uid}/tasks`, t.id);
      await deleteDoc(taskRef);
    }
  };

  // 7. Reorder tasks
  const saveTodos = async (reorderedTodos: TodoTask[]) => {
    if (!user || !db) return;
    for (let i = 0; i < reorderedTodos.length; i++) {
      const t = reorderedTodos[i];
      const taskRef = doc(db, `users/${user.uid}/tasks`, t.id);
      await updateDoc(taskRef, {
        order: i,
      });
    }
  };

  // 8. Carry Forward (Idempotent: does not create duplicates)
  const carryForward = useCallback(async () => {
    if (!user || !db) return;
    // With persistent lifecycle, all uncompleted tasks with createdDate <= selectedDate
    // are already automatically carried forward.
    // If there are any tasks with createdDate > selectedDate that the user wants to pull to today:
    const futureTasks = allTasks.filter(
      (t) => !t.completed && !t.removed && t.createdDate > selectedDate
    );
    for (const t of futureTasks) {
      const taskRef = doc(db, `users/${user.uid}/tasks`, t.id);
      await updateDoc(taskRef, {
        createdDate: selectedDate,
      });
    }
  }, [user, allTasks, selectedDate]);

  return {
    todos,
    loading,
    saveTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    carryForward,
  };
}
