'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { computeIdentityScores, getDailyWhisper, type IdentityScore } from '@/lib/utils/identity';
import { FADE_UP } from '@/lib/utils/motion';

// Read visit counts from localStorage
function loadVisitCounts(): Record<string, number> {
  try {
    const stored = localStorage.getItem('pravah-visit-counts');
    return stored ? JSON.parse(stored) : {};
  } catch { return {}; }
}

function loadTotalDays(): number {
  try {
    const stored = localStorage.getItem('pravah-first-visit');
    if (!stored) {
      localStorage.setItem('pravah-first-visit', new Date().toISOString());
      return 1;
    }
    const first = new Date(stored);
    const now = new Date();
    return Math.max(1, Math.round((now.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)));
  } catch { return 1; }
}

export function recordRoomVisit(roomId: string) {
  try {
    const stored = localStorage.getItem('pravah-visit-counts');
    const counts = stored ? JSON.parse(stored) : {};
    counts[roomId] = (counts[roomId] || 0) + 1;
    localStorage.setItem('pravah-visit-counts', JSON.stringify(counts));
  } catch {}
}

export default function GrowthWhisper() {
  const [whisper, setWhisper] = useState('');
  const [scores, setScores] = useState<IdentityScore[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const counts = loadVisitCounts();
    const days = loadTotalDays();
    const computed = computeIdentityScores(counts);
    setScores(computed);
    setWhisper(getDailyWhisper(computed, days));
  }, []);

  if (!mounted || !whisper) return null;

  return (
    <motion.div
      variants={FADE_UP}
      initial="initial"
      animate="animate"
      className="text-center py-6 px-4"
    >
      {/* Whisper text */}
      <p
        className="font-serif italic text-base leading-relaxed"
        style={{ color: 'var(--text-muted)', maxWidth: '52ch', margin: '0 auto' }}
      >
        {whisper}
      </p>

      {/* Identity constellation - tiny dots */}
      {scores.some(s => s.score > 0) && (
        <div className="flex items-center justify-center gap-3 mt-4">
          {scores.filter(s => s.score > 0).slice(0, 5).map((s, i) => (
            <motion.div
              key={s.dimension}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
              title={s.label}
              className="flex flex-col items-center gap-1"
            >
              <div
                className="rounded-full"
                style={{
                  width: Math.max(4, Math.min(12, s.score / 10)),
                  height: Math.max(4, Math.min(12, s.score / 10)),
                  background: 'var(--accent-saffron)',
                  opacity: 0.3 + (s.score / 100) * 0.7,
                }}
              />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
