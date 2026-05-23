'use client';
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

interface ReadingModeEntry {
  title: string;
  content: string;
  author?: string;
  room?: string;
  readAt: number;
  wordCount: number;
  timeSpentSeconds: number;
}

interface ReadingModeContextValue {
  isReading: boolean;
  readingTitle: string;
  readingContent: string;
  readingAuthor?: string;
  enterReading: (content: string, title: string, author?: string, room?: string) => void;
  exitReading: () => void;
  history: ReadingModeEntry[];
}

const ReadingModeContext = createContext<ReadingModeContextValue | null>(null);

export function ReadingModeProvider({ children }: { children: ReactNode }) {
  const [isReading, setIsReading] = useState(false);
  const [readingTitle, setReadingTitle] = useState('');
  const [readingContent, setReadingContent] = useState('');
  const [readingAuthor, setReadingAuthor] = useState<string | undefined>();
  const [readingRoom, setReadingRoom] = useState<string | undefined>();
  const [startTime, setStartTime] = useState<number>(0);
  const [history, setHistory] = useState<ReadingModeEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('pravah-reading-history');
    if (stored) {
      try { setHistory(JSON.parse(stored)); } catch {}
    }
  }, []);

  const enterReading = useCallback((content: string, title: string, author?: string, room?: string) => {
    setReadingContent(content);
    setReadingTitle(title);
    setReadingAuthor(author);
    setReadingRoom(room);
    setStartTime(Date.now());
    setIsReading(true);
    // Keyboard shortcut: Esc to exit
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') exitReading();
    };
    document.addEventListener('keydown', handleKey, { once: true });
  }, []);

  const exitReading = useCallback(() => {
    setIsReading(false);
    const timeSpent = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;
    const wordCount = readingContent.split(/\s+/).filter(Boolean).length;
    const entry: ReadingModeEntry = {
      title: readingTitle,
      content: '',   // don't store full content for privacy
      author: readingAuthor,
      room: readingRoom,
      readAt: Date.now(),
      wordCount,
      timeSpentSeconds: timeSpent,
    };
    const next = [entry, ...history].slice(0, 50);
    setHistory(next);
    localStorage.setItem('pravah-reading-history', JSON.stringify(next));
  }, [startTime, readingContent, readingTitle, readingAuthor, readingRoom, history]);

  return (
    <ReadingModeContext.Provider value={{
      isReading, readingTitle, readingContent, readingAuthor,
      enterReading, exitReading, history,
    }}>
      {children}
    </ReadingModeContext.Provider>
  );
}

export function useReadingMode() {
  const ctx = useContext(ReadingModeContext);
  if (!ctx) throw new Error('useReadingMode must be within ReadingModeProvider');
  return ctx;
}
