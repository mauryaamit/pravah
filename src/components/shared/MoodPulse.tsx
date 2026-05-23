'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface MoodPulseProps {
  value?: number;
  onChange?: (mood: number) => void;
  history?: { date: string; mood: number }[];
  compact?: boolean;
}

const MOODS = [
  { value: 1, emoji: '😔', label: 'Low',        color: '#7A6BA6' },
  { value: 2, emoji: '😐', label: 'Meh',        color: '#5B7FA6' },
  { value: 3, emoji: '🙂', label: 'Okay',       color: '#C4873A' },
  { value: 4, emoji: '😊', label: 'Good',       color: '#4A7C59' },
  { value: 5, emoji: '✨', label: 'Wonderful',  color: '#D4A853' },
];

export default function MoodPulse({ value, onChange, history = [], compact = false }: MoodPulseProps) {
  const [ripple, setRipple] = useState<number | null>(null);

  const handleSelect = (mood: number) => {
    setRipple(mood);
    onChange?.(mood);
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <div>
      {/* Mood buttons */}
      <div className="flex items-center gap-2">
        {MOODS.map(m => {
          const isSelected = value === m.value;
          return (
            <div key={m.value} className="relative">
              {/* Ripple */}
              <AnimatePresence>
                {ripple === m.value && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0.6 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: m.color }}
                  />
                )}
              </AnimatePresence>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSelect(m.value)}
                className={cn(
                  'rounded-full flex items-center justify-center transition-all',
                  compact ? 'w-8 h-8 text-base' : 'w-10 h-10 text-xl'
                )}
                style={{
                  background: isSelected
                    ? `color-mix(in srgb, ${m.color} 20%, transparent)`
                    : 'var(--bg-tertiary)',
                  border: `2px solid ${isSelected ? m.color : 'transparent'}`,
                  boxShadow: isSelected ? `0 0 12px ${m.color}44` : 'none',
                }}
                title={m.label}
              >
                {m.emoji}
              </motion.button>
            </div>
          );
        })}
      </div>

      {/* 7-day history dots */}
      {history.length > 0 && (
        <div className="flex items-center gap-1 mt-2">
          {history.map((h, i) => {
            const m = MOODS.find(m => m.value === h.mood);
            return (
              <div
                key={h.date}
                className="w-2 h-2 rounded-full"
                style={{
                  background: m?.color || 'var(--border-default)',
                  opacity: 0.4 + (i / history.length) * 0.6,
                }}
                title={`${h.date}: ${m?.label}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
