'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useTheme, THEME_META, type PravahTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils/cn';

interface ThemeToggleProps {
  compact?: boolean;
  direction?: 'up' | 'down';
}

export default function ThemeToggle({ compact = false, direction = 'up' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  // Position: down = below button (topbar, right-anchored), up = above button (sidebar footer, left-anchored)
  const dropdownPos = direction === 'down'
    ? { top: 'calc(100% + 8px)', right: 0, left: 'auto' }
    : { bottom: 'calc(100% + 8px)', left: 0, right: 'auto' };

  const animY = direction === 'down' ? { initial: -6, exit: -6 } : { initial: 6, exit: 6 };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={cn(
          'relative rounded-lg transition-colors flex items-center justify-center',
          compact ? 'p-2 w-8 h-8' : 'p-2 w-9 h-9'
        )}
        style={{ color: open ? 'var(--accent-saffron)' : 'var(--text-muted)' }}
        title="Change theme"
        aria-label="Change theme"
      >
        <Palette size={compact ? 14 : 16} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: animY.initial, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: animY.exit, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute z-[200] rounded-2xl"
            style={{
              ...dropdownPos,
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-default)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)',
              width: 280,
              minWidth: 280,
              maxWidth: 'calc(100vw - 1rem)',
              overflow: 'hidden',
            }}
          >
            <div className="p-2 space-y-0.5">
              {(Object.keys(THEME_META) as PravahTheme[]).map(t => {
                const meta = THEME_META[t];
                const isActive = theme === t;
                return (
                  <button
                    key={t}
                    onClick={() => { setTheme(t); setOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left"
                    style={{ background: isActive ? 'var(--bg-tertiary)' : 'transparent' }}
                    onMouseEnter={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--bg-tertiary)';
                    }}
                    onMouseLeave={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    <div className="relative w-6 h-6 rounded-full flex-shrink-0 overflow-hidden"
                      style={{ border: '1.5px solid var(--border-strong)' }}>
                      <div className="absolute inset-0 w-3" style={{ background: meta.swatch }} />
                      <div className="absolute inset-0 left-3" style={{ background: meta.swatchAlt }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium leading-tight" style={{ color: 'var(--text-primary)' }}>
                        {meta.label}
                      </div>
                      <div className="text-xs mt-1 leading-normal" style={{ color: 'var(--text-muted)' }}>
                        {meta.description}
                      </div>
                    </div>
                    {isActive && <Check size={14} style={{ color: 'var(--accent-saffron)', flexShrink: 0 }} />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
