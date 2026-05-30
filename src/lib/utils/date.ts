// src/lib/utils/date.ts
// Deterministic date utilities for Pravah content selection

import { differenceInDays, format } from 'date-fns';

const EPOCH = new Date('2024-01-01');

/**
 * Deterministic day index for content selection.
 * Same day = same content for all users.
 * dayIndex = differenceInDays(today, epoch) % 90 + 1  →  1..90
 */
export function getDayIndex(date?: Date): number;
export function getDayIndex(arrayLength: number, date: Date): number;
export function getDayIndex(arg1?: Date | number, arg2?: Date): number {
  if (typeof arg1 === 'number') {
    const d = arg2 || new Date();
    const diff = differenceInDays(d, EPOCH);
    return Math.abs(diff % arg1);
  } else {
    const d = arg1 || new Date();
    const diff = differenceInDays(d, EPOCH);
    return (diff % 90) + 1;
  }
}

export function getDayIndexForArray(date: Date, arrayLength: number): number {
  const diff = differenceInDays(date, EPOCH);
  return Math.abs(diff % arrayLength);
}

/**
 * Day of year (1–365/366) for variety across static arrays.
 */
export function getDayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

/** YYYY-MM-DD date string for database keys */
export function toDateString(date: Date = new Date()): string {
  return format(date, 'yyyy-MM-dd');
}

/** Human-readable date string for UI display */
export function formatDisplayDate(dateInput: Date | string = new Date()): string {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  return format(date, 'EEEE, MMMM d');
}

/** Formatted Hindi date for Aarambh header */
export function formatHindiDate(date: Date = new Date()): string {
  const day = date.toLocaleDateString('hi-IN', { weekday: 'long' });
  const num = date.getDate();
  const month = date.toLocaleDateString('hi-IN', { month: 'long' });
  return `${day}, ${num} ${month}`;
}

/** Time-based greeting (Hindi + English pair) */
export function getTimeGreeting(): { hi: string; en: string } {
  const h = new Date().getHours();
  if (h < 5)  return { hi: 'रात का सुकून', en: 'Good night' };
  if (h < 12) return { hi: 'सुप्रभात', en: 'Good morning' };
  if (h < 17) return { hi: 'नमस्ते', en: 'Good afternoon' };
  if (h < 20) return { hi: 'शुभ संध्या', en: 'Good evening' };
  return { hi: 'शुभ रात्रि', en: 'Good night' };
}
