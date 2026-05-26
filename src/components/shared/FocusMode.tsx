'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Volume2 } from 'lucide-react';
import ReadAloudButton from '@/components/shared/ReadAloudButton';

interface FocusModeProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  author?: string | null;
  textToSpeak: string;
  // Children is the content (can be array of paragraphs or strings)
  children: React.ReactNode;
}

export default function FocusMode({ isOpen, onClose, title, author, textToSpeak, children }: FocusModeProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progress
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const total = container.scrollHeight - container.clientHeight;
    if (total <= 0) {
      setScrollProgress(0);
      return;
    }
    const progress = (container.scrollTop / total) * 100;
    setScrollProgress(progress);
  };

  // Bind Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col font-serif"
      style={{ background: '#F5F0E8', color: '#1C1917' }}
    >
      {/* Top scroll progress indicator */}
      <div className="w-full h-1 bg-stone-200/50 flex-shrink-0">
        <div 
          className="h-full bg-amber-700 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header toolbar */}
      <div className="flex justify-between items-center px-6 py-4 flex-shrink-0 border-b border-stone-200/50">
        <span className="text-xs uppercase tracking-[0.2em] font-sans text-stone-500">
          Focus Reading Mode
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-stone-200/40 transition-colors"
          style={{ color: '#3D3530' }}
          title="Exit Focus Mode (ESC)"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main content scroll container */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-6 py-12 sm:py-20 no-scrollbar"
      >
        <div className="max-w-[640px] mx-auto space-y-8">
          {/* Header titles */}
          <div className="space-y-3 text-center mb-12 border-b border-stone-200/40 pb-8">
            <h1 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 leading-tight">
              {title}
            </h1>
            {author && (
              <p className="text-base text-stone-600 italic">
                {author}
              </p>
            )}
          </div>

          {/* Body content */}
          <div className="text-lg sm:text-[20px] leading-[2.1] text-stone-800 space-y-6 font-light">
            {children}
          </div>
        </div>
      </div>

      {/* Floating Read-Aloud button at bottom-right */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="shadow-lg rounded-full bg-amber-700 text-white hover:bg-amber-800 transition-colors p-1">
          <ReadAloudButton text={textToSpeak} lang="hi-IN" size="md" variant="pill" />
        </div>
      </div>
    </div>
  );
}
