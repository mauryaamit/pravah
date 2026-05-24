// src/lib/utils/motion.ts
// Shared Framer Motion animation presets for Pravah.
// Import these everywhere - never use inline variants.
// Design rule: slow, contemplative, cinematic. Nothing faster than 200ms for visible UI.

import type { Variants } from 'framer-motion';

// ── Easing curves ────────────────────────────────────────────────────────────
export const EASE_OUT      = [0.25, 0.1, 0.25, 1] as const;
export const EASE_IN_OUT   = [0.4,  0.0, 0.2,  1] as const;
export const EASE_GENTLE   = [0.22, 0.1, 0.36, 1] as const;

// ── Page-level transition ─────────────────────────────────────────────────────
export const PAGE_TRANSITION: Variants = {
  initial: { opacity: 0, y: 18, filter: 'blur(3px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: EASE_GENTLE },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: 'blur(2px)',
    transition: { duration: 0.3, ease: EASE_IN_OUT },
  },
};

// ── Fade up (cards, sections) ─────────────────────────────────────────────────
export const FADE_UP: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_GENTLE },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: EASE_IN_OUT },
  },
};

// ── Fade in (overlays, tooltips) ──────────────────────────────────────────────
export const FADE_IN: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: EASE_OUT } },
  exit:    { opacity: 0, transition: { duration: 0.25, ease: EASE_IN_OUT } },
};

// ── Stagger container (list of cards) ────────────────────────────────────────
// Usage: wrap a list in <motion.div variants={STAGGER_CONTAINER} initial="initial" animate="animate">
//        give each child <motion.div variants={STAGGER_ITEM}>
export const STAGGER_CONTAINER: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const STAGGER_ITEM: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_GENTLE },
  },
};

// ── Slow reveal (hero sections, big text) ─────────────────────────────────────
export const SLOW_REVEAL: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_GENTLE },
  },
};

// ── Scale in (modals, drawers) ────────────────────────────────────────────────
export const SCALE_IN: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 8 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 28, stiffness: 280, mass: 0.8 },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 4,
    transition: { duration: 0.2, ease: EASE_IN_OUT },
  },
};

// ── Slide up from bottom (mobile drawers) ─────────────────────────────────────
export const SLIDE_UP: Variants = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', damping: 30, stiffness: 280 },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: { duration: 0.28, ease: EASE_IN_OUT },
  },
};

// ── Tab cross-fade ────────────────────────────────────────────────────────────
export const TAB_FADE: Variants = {
  initial: { opacity: 0, x: 6 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: EASE_GENTLE },
  },
  exit: {
    opacity: 0,
    x: -6,
    transition: { duration: 0.18, ease: EASE_IN_OUT },
  },
};

// ── Collapse/expand (accordion) ───────────────────────────────────────────────
export const ACCORDION_CONTENT: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.28, ease: EASE_IN_OUT },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease: EASE_GENTLE },
  },
};

// ── Breathing pulse (orbs, living elements) ───────────────────────────────────
export const breatheAnimation = {
  scale: [1, 1.06, 1],
  opacity: [0.85, 1, 0.85],
  transition: {
    duration: 4.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// ── Soft hover (non-interactive feel) ────────────────────────────────────────
export const softHover = {
  whileHover: {
    y: -2,
    transition: { duration: 0.25, ease: EASE_GENTLE },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.12 },
  },
};
