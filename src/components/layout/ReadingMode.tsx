'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Clock } from 'lucide-react';
import { useReadingMode } from '@/lib/contexts/ReadingModeContext';
import { FADE_IN } from '@/lib/utils/motion';

function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}

function estimateReadingMinutes(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default function ReadingMode() {
  const { isReading, readingTitle, readingContent, readingAuthor, exitReading } = useReadingMode();
  const [elapsed, setElapsed] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const startRef = useRef<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Timer
  useEffect(() => {
    if (!isReading) { setElapsed(0); return; }
    startRef.current = Date.now();
    const interval = setInterval(() => {
      setElapsed(Math.round((Date.now() - startRef.current) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [isReading]);

  // Scroll progress
  const handleScroll = () => {
    const el = contentRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const total = scrollHeight - clientHeight;
    setScrollProgress(total > 0 ? scrollTop / total : 0);
  };

  // Lock body scroll
  useEffect(() => {
    if (isReading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isReading]);

  const paragraphs = readingContent.split('\n\n').filter(Boolean);
  const estimatedMinutes = estimateReadingMinutes(readingContent);

  return (
    <AnimatePresence>
      {isReading && (
        <motion.div
          variants={FADE_IN}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ background: 'var(--bg-paper, var(--bg-primary))' }}
        >
          {/* Progress bar at top */}
          <div className="fixed top-0 left-0 right-0 h-0.5 z-[101]"
            style={{ background: 'var(--border-default)' }}>
            <motion.div
              className="h-full"
              style={{
                width: `${scrollProgress * 100}%`,
                background: 'var(--accent-saffron)',
                transition: 'width 0.1s ease',
              }}
            />
          </div>

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 flex-shrink-0"
            style={{ borderBottom: '1px solid var(--border-default)' }}>
            <div className="flex items-center gap-3">
              <BookOpen size={15} style={{ color: 'var(--text-faint)' }} />
              <span className="text-sm font-medium truncate max-w-xs"
                style={{ color: 'var(--text-muted)' }}>
                {readingTitle}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-faint)' }}>
                <Clock size={12} />
                <span>{formatTime(elapsed)}</span>
                <span>/</span>
                <span>~{estimatedMinutes} min</span>
              </div>
              <button
                onClick={exitReading}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'var(--text-muted)' }}
                aria-label="Exit reading mode"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto"
          >
            <div className="max-w-[62ch] mx-auto px-6 py-12 pb-24">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 0.1, 0.36, 1] }}
                className="font-serif text-3xl sm:text-4xl leading-tight mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {readingTitle}
              </motion.h1>
              {readingAuthor && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-sm mb-10"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
                >
                  {readingAuthor}
                </motion.p>
              )}

              {/* Body paragraphs with staggered reveal */}
              <div className="prose-story space-y-0" style={{ maxWidth: '100%' }}>
                {paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.2 + i * 0.04,
                      ease: [0.22, 0.1, 0.36, 1],
                    }}
                    className={i === 0 ? 'drop-cap' : ''}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* End of content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 text-center space-y-4"
              >
                <div className="w-8 h-px mx-auto" style={{ background: 'var(--border-strong)' }} />
                <p className="text-sm font-serif italic" style={{ color: 'var(--text-faint)' }}>
                  {readingAuthor ? `- ${readingAuthor}` : 'End'}
                </p>
                <button
                  onClick={exitReading}
                  className="text-xs px-4 py-2 rounded-xl transition-colors"
                  style={{
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-default)',
                  }}
                >
                  Close reading mode
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
