'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface BreathingOrbProps {
  onClick?: () => void;
  size?: number;
  mood?: number; // 1-5, affects color
  className?: string;
  phase?: 'idle' | 'inhale' | 'hold' | 'exhale';
}

const MOOD_COLORS: Record<number, string> = {
  1: '#7A6BA6', // low - mauve
  2: '#5B7FA6', // calm - blue
  3: '#C4873A', // neutral - saffron
  4: '#4A7C59', // good - moss
  5: '#D4A853', // great - gold
};

export default function BreathingOrb({
  onClick,
  size = 120,
  mood = 3,
  className,
  phase = 'idle',
}: BreathingOrbProps) {
  const color = MOOD_COLORS[mood] || MOOD_COLORS[3];

  return (
    <div
      className={cn('relative flex items-center justify-center cursor-pointer select-none', className)}
      onClick={onClick}
      style={{ width: size, height: size }}
      title="Click to begin a breathing exercise"
    >
      {/* Outer pulse ring */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ background: color, opacity: 0.15 }}
      />
      {/* Middle glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.85,
          height: size * 0.85,
          background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
        }}
      />
      
      {/* Self-contained keyframes for synchronized breathing phases */}
      <style jsx>{`
        /* INHALE — orb expands over 4 seconds */
        @keyframes orb-inhale {
          from { transform: scale(1.0);   opacity: 0.7; }
          to   { transform: scale(1.35);  opacity: 1.0; }
        }

        /* HOLD — gentle slow pulse for 4 seconds */
        @keyframes orb-hold {
          0%, 100% { transform: scale(1.35); opacity: 1.0; }
          50%       { transform: scale(1.38); opacity: 0.95; }
        }

        /* EXHALE — orb contracts over 4 seconds */
        @keyframes orb-exhale {
          from { transform: scale(1.35); opacity: 1.0; }
          to   { transform: scale(1.0);  opacity: 0.7; }
        }

        .orb-inhale { animation: orb-inhale 4s ease-in-out forwards; }
        .orb-hold   { animation: orb-hold   4s ease-in-out infinite; }
        .orb-exhale { animation: orb-exhale 4s ease-in-out forwards; }
      `}</style>

      {/* Main orb */}
      <motion.div
        className={cn(
          "rounded-full flex items-center justify-center relative overflow-hidden",
          phase === 'inhale' && 'orb-inhale',
          phase === 'hold' && 'orb-hold',
          phase === 'exhale' && 'orb-exhale'
        )}
        style={{
          width: size * 0.65,
          height: size * 0.65,
          background: `radial-gradient(circle at 35% 35%, ${color}DD, ${color}88)`,
          boxShadow: `0 0 ${size * 0.3}px ${color}44`,
        }}
        // Only run standard Framer Motion animation if phase is idle/none
        animate={(!phase || phase === 'idle') ? {
          scale: [1, 1.08, 1],
          boxShadow: [
            `0 0 ${size * 0.3}px ${color}44`,
            `0 0 ${size * 0.5}px ${color}66`,
            `0 0 ${size * 0.3}px ${color}44`,
          ],
        } : undefined}
        transition={(!phase || phase === 'idle') ? {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        } : undefined}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={phase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white font-serif text-sm font-light tracking-wider lowercase absolute"
          >
            {phase === 'inhale' ? 'breathe in' : 
             phase === 'hold' ? 'hold' : 
             phase === 'exhale' ? 'release' : 
             'breathe'}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
