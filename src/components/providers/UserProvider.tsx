'use client';
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { User, UserPreferences } from '@/types/user';
import { DEFAULT_PREFERENCES } from '@/types/user';
import { auth, db } from '@/lib/firebase/client';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';

interface UserContextValue {
  user: User | null;
  isLoading: boolean;
  preferences: UserPreferences;
  setUser: (u: User | null) => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    if (!auth || !db) {
      setIsLoading(false);
      return;
    }

    const unsubAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Sync session cookie to server whenever token refreshes
        try {
          const idToken = await firebaseUser.getIdToken();
          await fetch('/api/user/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken }),
          });
        } catch (err) {
          console.error('Failed to sync session cookie:', err);
        }

        // Listen to Firestore user doc
        const userDocRef = doc(db!, 'users', firebaseUser.uid);
        const unsubDoc = onSnapshot(
          userDocRef,
          (docSnap) => {
            if (docSnap.exists()) {
              const data = docSnap.data();
              setUserState({
                id: firebaseUser.uid,
                name: data.name || 'Seeker',
                email: data.email || '',
                createdAt: data.createdAt?.toDate?.() || new Date(),
                preferences: data.preferences || DEFAULT_PREFERENCES,
              });
              if (data.preferences) {
                setPreferences({ ...DEFAULT_PREFERENCES, ...data.preferences });
              }
            }
            setIsLoading(false);
          },
          (err) => {
            console.error('User doc snapshot error:', err);
            setIsLoading(false);
          }
        );

        return () => {
          unsubDoc();
        };
      } else {
        // Logged out
        setUserState(null);
        setPreferences(DEFAULT_PREFERENCES);
        setIsLoading(false);

        // Delete session cookie
        try {
          await fetch('/api/user/session', { method: 'DELETE' });
        } catch {}
      }
    });

    return unsubAuth;
  }, []);

  const setUser = useCallback((u: User | null) => {
    setUserState(u);
    if (u?.preferences) setPreferences({ ...DEFAULT_PREFERENCES, ...u.preferences });
  }, []);

  const updatePreferences = useCallback(async (prefs: Partial<UserPreferences>) => {
    const next = { ...preferences, ...prefs };
    setPreferences(next);
    
    if (user && db) {
      try {
        const userDocRef = doc(db!, 'users', user.id);
        await updateDoc(userDocRef, { preferences: next });
      } catch (err) {
        console.error('Failed to update preferences in Firestore:', err);
      }
    }
  }, [preferences, user]);

  const logout = useCallback(async () => {
    if (auth) {
      try {
        await signOut(auth);
      } catch (err) {
        console.error('Firebase signout error:', err);
      }
    }
    setUserState(null);
    window.location.href = '/login';
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, preferences, setUser, updatePreferences, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
