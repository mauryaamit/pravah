'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface BreathingOrbProps {
  onClick?: () => void;
  size?: number;
  mood?: number; // 1-5, affects color
  className?: string;
}

const MOOD_COLORS: Record<number, string> = {
  1: '#7A6BA6', // low - mauve
  2: '#5B7FA6', // calm - blue
  3: '#C4873A', // neutral - saffron
  4: '#4A7C59', // good - moss
  5: '#D4A853', // great - gold
};

export default function BreathingOrb({ onClick, size = 120, mood = 3, className }: BreathingOrbProps) {
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
      {/* Main orb */}
      <motion.div
        className="rounded-full flex items-center justify-center"
        style={{
          width: size * 0.65,
          height: size * 0.65,
          background: `radial-gradient(circle at 35% 35%, ${color}DD, ${color}88)`,
          boxShadow: `0 0 ${size * 0.3}px ${color}44`,
        }}
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            `0 0 ${size * 0.3}px ${color}44`,
            `0 0 ${size * 0.5}px ${color}66`,
            `0 0 ${size * 0.3}px ${color}44`,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span className="text-white text-opacity-80 text-sm font-light tracking-wider">breathe</span>
      </motion.div>
    </div>
  );
}
