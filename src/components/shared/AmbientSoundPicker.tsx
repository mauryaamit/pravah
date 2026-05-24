'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, X } from 'lucide-react';
import { useAudio } from '@/components/providers/AudioProvider';
import { SCALE_IN } from '@/lib/utils/motion';
import { cn } from '@/lib/utils/cn';

export interface AmbientMode {
  id: string;
  label: string;
  emoji: string;
  description: string;
  // Free CC0 audio from Pixabay / Freesound (URL or Web Audio generated)
  url: string;
}

export const AMBIENT_MODES: AmbientMode[] = [
  { id: 'rain',      label: 'Soft Rain',       emoji: '🌧',  description: 'Reflective, cozy',    url: 'https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3' },
  { id: 'forest',    label: 'Forest',           emoji: '🌿',  description: 'Alive, gentle',       url: 'https://assets.mixkit.co/active_storage/sfx/2516/2516-preview.mp3' },
  { id: 'vinyl',     label: 'Vinyl Crackle',    emoji: '🎵',  description: 'Nostalgic, warm',     url: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3' },
  { id: 'river',     label: 'Flowing River',    emoji: '💧',  description: 'Meditative, clean',   url: 'https://moodist.app/audio/nature/river.mp3' },
  { id: 'cafe',      label: 'Cafe',             emoji: '☕',  description: 'Alert, social',       url: 'https://moodist.app/audio/places/cafe.mp3' },
  { id: 'library',   label: 'Library',          emoji: '📚',  description: 'Focused, quiet',      url: 'https://moodist.app/audio/places/library.mp3' },
  { id: 'bowls',     label: 'Tibetan Bowls',    emoji: '🔔',  description: 'Sacred, deep',        url: 'https://moodist.app/audio/things/singing-bowl.mp3' },
  { id: 'fireplace', label: 'Fireplace',        emoji: '🔥',  description: 'Intimate, slow',      url: 'https://assets.mixkit.co/active_storage/sfx/2517/2517-preview.mp3' },
];

export default function AmbientSoundPicker() {
  const [open, setOpen] = useState(false);
  const { ambientMode, setAmbientMode, volume, setVolume } = useAudio() as any;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  const active = AMBIENT_MODES.find(m => m.id === ambientMode);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={cn(
          'p-2 rounded-lg transition-colors flex items-center gap-1.5 relative',
        )}
        style={{ color: ambientMode ? 'var(--accent-saffron)' : 'var(--text-muted)' }}
        title="Ambient sounds"
        aria-label="Ambient sounds"
      >
        <Headphones size={17} />
        {ambientMode && (
          <motion.span
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="text-xs"
          >
            {active?.emoji}
          </motion.span>
        )}
        {/* Pulse ring when active */}
        {ambientMode && (
          <motion.div
            className="absolute inset-0 rounded-lg"
            animate={{ opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ border: '1px solid var(--accent-saffron)' }}
          />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={SCALE_IN}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute -right-20 sm:right-0 top-full mt-2 z-50 rounded-2xl overflow-hidden"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-default)',
              boxShadow: 'var(--shadow-lg)',
              width: 260,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                Ambient Sound
              </span>
              {ambientMode && (
                <button
                  onClick={() => setAmbientMode?.(null)}
                  className="text-xs flex items-center gap-1 px-2 py-0.5 rounded-lg"
                  style={{ color: 'var(--text-muted)', background: 'var(--bg-tertiary)' }}
                >
                  <X size={10} /> Off
                </button>
              )}
            </div>

            {/* Sound grid */}
            <div className="p-3 grid grid-cols-4 gap-1.5">
              {AMBIENT_MODES.map(mode => {
                const isActive = ambientMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setAmbientMode?.(isActive ? null : mode.id)}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl transition-all"
                    style={{
                      background: isActive
                        ? 'color-mix(in srgb, var(--accent-saffron) 15%, var(--bg-tertiary))'
                        : 'var(--bg-tertiary)',
                      border: `1px solid ${isActive ? 'var(--accent-saffron)' : 'transparent'}`,
                    }}
                    title={`${mode.label} - ${mode.description}`}
                  >
                    <span className="text-lg leading-none">{mode.emoji}</span>
                    <span className="text-xs leading-tight text-center"
                      style={{ color: isActive ? 'var(--accent-saffron)' : 'var(--text-muted)', fontSize: '0.6rem' }}>
                      {mode.label.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Volume slider */}
            <div className="px-4 pb-4 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--text-faint)' }}>Volume</span>
                <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
                  {Math.round((volume || 0.1) * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="0.3"
                step="0.01"
                value={volume || 0.1}
                onChange={e => setVolume?.(parseFloat(e.target.value))}
                className="w-full accent-[var(--accent-saffron)]"
                style={{ height: 2 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
