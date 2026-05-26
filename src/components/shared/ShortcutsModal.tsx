'use client';
import { motion } from 'framer-motion';
import { SCALE_IN } from '@/lib/utils/motion';
import { X, Keyboard } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShortcutsModal({ isOpen, onClose }: ShortcutsModalProps) {
  if (!isOpen) return null;

  const shortcutGroups = [
    {
      title: 'Navigation',
      items: [
        { keys: ['G', 'A'], desc: 'Go to Aarambh (Home)' },
        { keys: ['G', 'S'], desc: 'Go to Sukoon (Poetry)' },
        { keys: ['G', 'J'], desc: 'Go to Antarman (Journal)' },
        { keys: ['G', 'H'], desc: 'Go to Agni (Habits)' },
        { keys: ['Ctrl/Cmd', 'K'], desc: 'Open Room Search / Switcher' },
      ],
    },
    {
      title: 'System controls',
      items: [
        { keys: ['?'], desc: 'Open shortcuts panel' },
        { keys: ['R'], desc: 'Toggle read-aloud on current page' },
        { keys: ['N'], desc: 'Toggle Night / Day mode' },
        { keys: ['ESC'], desc: 'Close any open modal or panel' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/45 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <motion.div
        variants={SCALE_IN}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl p-6 relative z-10"
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-default)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-accent-saffron/10 text-accent-saffron">
            <Keyboard size={20} className="text-accent-saffron" />
          </div>
          <div>
            <h3 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>
              Keyboard Shortcuts
            </h3>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Navigate Pravah like a pro
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {shortcutGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h4 
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--text-muted)' }}
              >
                {group.title}
              </h4>
              <div className="space-y-2.5">
                {group.items.map((item) => (
                  <div key={item.desc} className="flex justify-between items-center text-sm">
                    <span style={{ color: 'var(--text-secondary)' }}>{item.desc}</span>
                    <div className="flex gap-1">
                      {item.keys.map((k) => (
                        <kbd
                          key={k}
                          className="px-2 py-0.5 text-xs font-sans rounded-md border font-semibold shadow-sm"
                          style={{
                            background: 'var(--bg-tertiary)',
                            borderColor: 'var(--border-strong)',
                            color: 'var(--text-primary)',
                          }}
                        >
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
