'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface BreathingOrbProps {
  onClick?: () => void;
  size?: number;
  mood?: number; // 1-5
  className?: string;
  phase?: 'idle' | 'inhale' | 'hold' | 'exhale';
}

const MOOD_COLORS: Record<number, string> = {
  1: '#7A6BA6',
  2: '#5B7FA6',
  3: '#C4873A',
  4: '#4A7C59',
  5: '#D4A853',
};

// Quadratic ease-in-out for natural water movement
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export default function BreathingOrb({
  onClick,
  size = 120,
  mood = 3,
  className,
  phase,
}: BreathingOrbProps) {
  const color = MOOD_COLORS[mood] || MOOD_COLORS[3];

  // 1. Idle Pre-Click State (when phase is undefined)
  if (phase === undefined) {
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
        {/* Main pulsing orb */}
        <motion.div
          className="rounded-full flex items-center justify-center relative overflow-hidden"
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
          <span
            className="text-white text-opacity-80 text-sm font-light tracking-wider lowercase absolute"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            breathe
          </span>
        </motion.div>
      </div>
    );
  }

  // 2. Active Breathing Overlay State (when phase is provided)
  const [fillY, setFillY] = useState(100);
  const [isHoldShimmer, setIsHoldShimmer] = useState(false);
  const rafRef = useRef<number | null>(null);
  const prevPhaseRef = useRef<string>('idle');

  useEffect(() => {
    // Cancel any running animation
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsHoldShimmer(false);

    if (phase === 'idle') {
      // Gently reset to empty over 600ms if coming from exhale
      const start = performance.now();
      const startY = fillY;
      const targetY = 100;
      const duration = 600;
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setFillY(startY + (targetY - startY) * easeInOut(progress));
        if (progress < 1) rafRef.current = requestAnimationFrame(animate);
      };
      rafRef.current = requestAnimationFrame(animate);
      prevPhaseRef.current = 'idle';
      return;
    }

    if (phase === 'inhale') {
      // Fill rises: y goes from 100 → 4 over 4000ms
      const start = performance.now();
      const duration = 4000;
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setFillY(100 - 96 * easeInOut(progress));
        if (progress < 1) rafRef.current = requestAnimationFrame(animate);
      };
      rafRef.current = requestAnimationFrame(animate);
      prevPhaseRef.current = 'inhale';
    } else if (phase === 'hold') {
      // Stay at top (y=4) with shimmer
      setFillY(4);
      setIsHoldShimmer(true);
      prevPhaseRef.current = 'hold';
    } else if (phase === 'exhale') {
      // Drain: y goes from 4 → 100 over 4000ms
      const start = performance.now();
      const duration = 4000;
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setFillY(4 + 96 * easeInOut(progress));
        if (progress < 1) rafRef.current = requestAnimationFrame(animate);
      };
      rafRef.current = requestAnimationFrame(animate);
      prevPhaseRef.current = 'exhale';
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const phaseLabel =
    phase === 'inhale' ? 'breathe in' :
    phase === 'hold'   ? 'hold' :
    phase === 'exhale' ? 'let go' :
    'breathe';

  const isActive = phase !== 'idle';
  const orbSize = size;

  return (
    <div
      className={cn('relative flex items-center justify-center cursor-pointer select-none', className)}
      onClick={onClick}
      style={{ width: orbSize, height: orbSize }}
      title="Click to begin a breathing exercise"
    >
      {/* Soft ambient glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: color,
          opacity: isActive ? 0.10 : 0.08,
          transition: 'opacity 800ms ease',
          filter: `blur(${size * 0.15}px)`,
          transform: 'scale(1.25)',
        }}
      />

      {/* Main SVG orb */}
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="relative z-10"
        style={{ overflow: 'visible' }}
      >
        {/* Outer vessel ring */}
        <circle
          cx="50" cy="50" r="46"
          fill="none"
          stroke={color}
          strokeWidth={isActive ? "1.5" : "1"}
          opacity={isActive ? 0.5 : 0.3}
          style={{ transition: 'opacity 600ms ease, stroke-width 600ms ease' }}
        />

        {/* Secondary decorative ring */}
        <circle
          cx="50" cy="50" r="43"
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          opacity={isActive ? 0.2 : 0.1}
        />

        {/* Clip path for water fill */}
        <defs>
          <clipPath id={`fill-clip-${size}`}>
            <rect x="0" y={fillY} width="100" height="100" />
          </clipPath>
          <radialGradient id={`orb-grad-${size}`} cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor={color} stopOpacity="0.45" />
            <stop offset="100%" stopColor={color} stopOpacity="0.18" />
          </radialGradient>
        </defs>

        {/* Background fill (very faint base) */}
        <circle
          cx="50" cy="50" r="44"
          fill={color}
          opacity="0.06"
        />

        {/* Water fill — animates up/down */}
        <circle
          cx="50" cy="50" r="44"
          fill={`url(#orb-grad-${size})`}
          clipPath={`url(#fill-clip-${size})`}
          style={{
            animation: isHoldShimmer ? 'water-shimmer 2s ease-in-out infinite' : 'none',
          }}
        />

        {/* Water surface shimmer line — only visible during fill */}
        {isActive && (
          <ellipse
            cx="50"
            cy={fillY}
            rx="44"
            ry="2"
            fill={color}
            opacity="0.25"
          />
        )}

        {/* Phase label text */}
        <text
          x="50"
          y={isActive ? "52" : "54"}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: size < 150 ? '9' : '10',
            fill: isActive ? color : 'var(--text-muted)',
            letterSpacing: '0.08em',
            fontStyle: 'italic',
            opacity: 0.9,
            transition: 'opacity 300ms ease',
          }}
        >
          {phaseLabel}
        </text>
      </svg>

      {/* Hold shimmer keyframes */}
      <style jsx>{`
        @keyframes water-shimmer {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.50; }
        }
      `}</style>
    </div>
  );
}
