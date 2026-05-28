'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '@/lib/firebase/client';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useUser } from '@/components/providers/UserProvider';
import { toDateString } from '@/lib/utils/date';

interface SutraNoteButtonProps {
  roomId: string;
  roomName: string;
  contentTitle: string;
  /** Optional positioning class (default: 'absolute top-3 right-3') */
  className?: string;
}

/**
 * SutraNoteButton - ✦ button that lets the user save a note attached to any
 * content card across Pravah rooms. Opens a slide-up modal with a single-line
 * input, saves to Firestore users/{uid}/sutraNotes collection.
 */
export default function SutraNoteButton({
  roomId,
  roomName,
  contentTitle,
  className = 'absolute top-3 right-10',
}: SutraNoteButtonProps) {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
    setNote('');
    setStatus('idle');
    setTimeout(() => inputRef.current?.focus(), 120);
  };

  const handleSave = async () => {
    if (!user || !db || !note.trim()) return;
    setStatus('saving');
    try {
      await addDoc(collection(db, `users/${user.id}/sutraNotes`), {
        roomId,
        roomName,
        contentTitle: contentTitle.slice(0, 160),
        userNote: note.trim().slice(0, 400),
        date: toDateString(new Date()),
        createdAt: serverTimestamp(),
      });
      setStatus('saved');
      setTimeout(() => {
        setOpen(false);
        setStatus('idle');
        setNote('');
      }, 1200);
    } catch (err) {
      console.error('SutraNote save error:', err);
      setStatus('idle');
    }
  };

  return (
    <>
      {/* ✦ Trigger button */}
      <button
        onClick={handleOpen}
        title="Save a Sutra Note"
        className={`${className} z-10 p-1.5 rounded-full transition-all hover:opacity-80 active:scale-95`}
        style={{
          color: 'var(--text-faint)',
          background: 'transparent',
          fontSize: '14px',
          lineHeight: 1,
        }}
        aria-label="Save Sutra Note"
      >
        ✦
      </button>

      {/* Modal backdrop + slide-up panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="sutra-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)' }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="sutra-panel"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 0.1, 0.36, 1] }}
              className="fixed bottom-0 left-0 right-0 z-50 p-5 pb-8 rounded-t-2xl shadow-xl"
              style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-default)' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Label row */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p
                    className="font-serif text-lg italic"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    सूत्र नोट
                  </p>
                  <p
                    className="text-xs mt-0.5 truncate max-w-xs"
                    style={{ color: 'var(--text-faint)' }}
                  >
                    {roomName} - {contentTitle.slice(0, 50)}{contentTitle.length > 50 ? '...' : ''}
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-full"
                  style={{ color: 'var(--text-muted)', background: 'var(--bg-tertiary)' }}
                >
                  ✕
                </button>
              </div>

              {/* Input */}
              <input
                ref={inputRef}
                type="text"
                value={note}
                onChange={e => setNote(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSave()}
                placeholder="Your note or connection..."
                maxLength={400}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none font-serif"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-default)',
                  color: 'var(--text-primary)',
                }}
              />

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm"
                  style={{
                    background: 'var(--bg-tertiary)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-default)',
                  }}
                >
                  रहने दो
                </button>
                <button
                  onClick={handleSave}
                  disabled={!note.trim() || status === 'saving' || status === 'saved'}
                  className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background:
                      status === 'saved'
                        ? 'var(--accent-moss)'
                        : 'var(--accent-saffron)',
                    color: 'white',
                    opacity: !note.trim() ? 0.5 : 1,
                  }}
                >
                  {status === 'saving' ? 'सहेज रहे हैं...' : status === 'saved' ? 'सहेजा ✓' : 'सहेजें'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
