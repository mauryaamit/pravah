'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MemoryHintProps {
  room: string;
  roomName: string;
}

interface Memory {
  type: string;
  readAt: number;
}

function getDaysSinceLastVisit(room: string): number | null {
  try {
    const visits = localStorage.getItem('pravah-room-visits');
    const visitsMap = visits ? JSON.parse(visits) : {};
    const lastVisitStr = visitsMap[room];
    
    // Record current visit for the next time they visit
    const nowStr = new Date().toISOString();
    visitsMap[room] = nowStr;
    localStorage.setItem('pravah-room-visits', JSON.stringify(visitsMap));

    if (!lastVisitStr) {
      return null; // first visit
    }
    
    const lastVisit = new Date(lastVisitStr);
    const diffTime = Math.abs(Date.now() - lastVisit.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  } catch {
    return null;
  }
}

function getMemoriesForRoom(room: string): Memory[] {
  try {
    const memories = localStorage.getItem('pravah-room-memories');
    const memoriesMap = memories ? JSON.parse(memories) : {};
    let list = memoriesMap[room] || [];
    
    // Record a reading memory for today
    const now = Date.now();
    // Only record once an hour to prevent bloat
    if (list.length === 0 || now - list[list.length - 1].readAt > 1000 * 60 * 60) {
      list.push({ type: 'read', readAt: now });
      memoriesMap[room] = list;
      localStorage.setItem('pravah-room-memories', JSON.stringify(memoriesMap));
    }
    
    return list;
  } catch {
    return [];
  }
}

export default function MemoryHint({ room, roomName }: MemoryHintProps) {
  const [hint, setHint] = useState<string | null>(null);

  useEffect(() => {
    const days = getDaysSinceLastVisit(room);
    const reads = getMemoriesForRoom(room).filter(e => e.type === 'read');

    if (days === null) {
      setHint(null); // first visit, say nothing
      return;
    }
    if (days === 0) {
      // Visited today already
      if (reads.length > 0) {
        setHint(`You've been here today. Good.`);
      }
      return;
    }
    if (days === 1) {
      setHint(`You were last here yesterday.`);
      return;
    }
    if (days <= 7) {
      setHint(`You visited ${roomName} ${days} days ago.`);
      return;
    }
    if (days <= 30) {
      setHint(`It's been a while. ${days} days since you visited ${roomName}.`);
      return;
    }
    if (reads.length > 0) {
      const lastRead = reads[0];
      const daysAgo = Math.floor((Date.now() - lastRead.readAt) / (1000 * 60 * 60 * 24));
      setHint(`You last read something here ${daysAgo} days ago.`);
      return;
    }
    setHint(`You haven't been here in ${days} days.`);
  }, [room, roomName]);

  if (!hint) return null;

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-xs font-serif italic text-center"
      style={{ color: 'var(--text-faint)' }}
    >
      {hint}
    </motion.p>
  );
}
