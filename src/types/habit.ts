// src/types/habit.ts
export interface Habit {
  id: number;
  userId: string;
  name: string;
  feeling: string;
  frequency: HabitFrequency;
  stackBefore?: number | null;
  stackAfter?: number | null;
  createdAt: Date;
  isActive: boolean;
}

export type HabitFrequency = 'daily' | 'weekdays' | { days: number[] }; // days: 0=Sun..6=Sat

export interface HabitCompletion {
  id: number;
  habitId: number;
  date: string; // YYYY-MM-DD
  userId: string;
}

export interface HabitWithStreak extends Habit {
  currentStreak: number;
  completedToday: boolean;
  completions: HabitCompletion[];
}

export interface StreakData {
  userId: string;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string | null;
  rewireScore: number;
}
