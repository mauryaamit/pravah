'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookMarked } from 'lucide-react';
import { db } from '@/lib/firebase/client';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useUser } from '@/components/providers/UserProvider';
import { toDateString } from '@/lib/utils/date';

interface RevisitButtonProps {
  roomId: string;
  roomName: string;
  contentTitle: string;
  contentSummary: string;
  /** Extra className (default: positioned relative to parent) */
  className?: string;
}

/**
 * RevisitButton - BookMarked icon that saves content to the Spaced Revisit
 * system. Revisit dates are set at +3, +7, and +21 days from today.
 * Shows a brief "सहेजा ✓" confirmation text for 1.5 seconds.
 */
export default function RevisitButton({
  roomId,
  roomName,
  contentTitle,
  contentSummary,
  className = '',
}: RevisitButtonProps) {
  const { user } = useUser();
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const handleSave = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user || !db || status !== 'idle') return;
    setStatus('saving');

    const today = new Date();
    const toDateStr = (offset: number) => {
      const d = new Date(today);
      d.setDate(d.getDate() + offset);
      return toDateString(d);
    };

    try {
      await addDoc(collection(db, `users/${user.id}/revisitItems`), {
        roomId,
        roomName,
        contentTitle: contentTitle.slice(0, 160),
        contentSummary: contentSummary.slice(0, 400),
        savedDate: toDateString(today),
        revisitDates: [toDateStr(3), toDateStr(7), toDateStr(21)],
        revisitedAt: [],
        createdAt: serverTimestamp(),
      });
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 1500);
    } catch (err) {
      console.error('RevisitButton save error:', err);
      setStatus('idle');
    }
  };

  return (
    <button
      onClick={handleSave}
      disabled={status === 'saving'}
      title="Save for later revisit (3 / 7 / 21 days)"
      className={`flex items-center gap-1 p-1.5 rounded-full transition-all active:scale-95 ${className}`}
      style={{
        color: status === 'saved' ? 'var(--accent-moss)' : 'var(--text-faint)',
        background: 'transparent',
      }}
      aria-label="Save for revisit"
    >
      <BookMarked
        size={14}
        className={status === 'saved' ? 'fill-current' : ''}
      />
      <AnimatePresence>
        {status === 'saved' && (
          <motion.span
            key="confirm"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="text-[10px] font-semibold"
            style={{ color: 'var(--accent-moss)' }}
          >
            सहेजा ✓
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
