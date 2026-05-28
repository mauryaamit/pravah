'use client';

import React from 'react';
import { differenceInDays, subDays, addDays, format, isToday } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DayNavigatorProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  maxPastDays?: number;
}

export default function DayNavigator({
  currentDate,
  onDateChange,
  maxPastDays = 30
}: DayNavigatorProps) {
  const today = new Date();
  
  // Normalize dates to midnight to compare days accurately
  const d1 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const d2 = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  const daysDiff = differenceInDays(d1, d2);
  
  const canGoBack = daysDiff < maxPastDays;
  const canGoForward = !isToday(currentDate) && d2 < d1;

  const handlePrev = () => {
    if (canGoBack) {
      onDateChange(subDays(currentDate, 1));
    }
  };

  const handleNext = () => {
    if (canGoForward) {
      onDateChange(addDays(currentDate, 1));
    }
  };

  const formattedDate = isToday(currentDate)
    ? `Today, ${format(currentDate, 'd MMMM')}`
    : format(currentDate, 'EEEE, d MMMM');

  return (
    <div className="flex items-center justify-center gap-4 text-xs select-none py-2" style={{ color: 'var(--text-muted)' }}>
      <button
        onClick={handlePrev}
        disabled={!canGoBack}
        className="flex items-center gap-1 hover:text-[var(--text-primary)] disabled:opacity-30 disabled:hover:text-[var(--text-muted)] transition-colors py-1 px-2 rounded cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronLeft size={14} />
        <span>Yesterday</span>
      </button>

      <span className="font-medium min-w-[140px] text-center" style={{ color: 'var(--text-secondary)' }}>
        {formattedDate}
      </span>

      <button
        onClick={handleNext}
        disabled={!canGoForward}
        className="flex items-center gap-1 hover:text-[var(--text-primary)] disabled:opacity-30 disabled:hover:text-[var(--text-muted)] transition-colors py-1 px-2 rounded cursor-pointer disabled:cursor-not-allowed"
      >
        <span>Tomorrow</span>
        <ChevronRight size={14} />
      </button>
    </div>
  );
}
