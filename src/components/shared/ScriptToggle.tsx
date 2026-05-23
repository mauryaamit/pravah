'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface ScriptToggleProps {
  value: 'devanagari' | 'roman';
  onChange: (v: 'devanagari' | 'roman') => void;
  className?: string;
}

export default function ScriptToggle({ value, onChange, className }: ScriptToggleProps) {
  return (
    <div
      className={cn('flex items-center rounded-lg p-0.5 text-xs font-medium', className)}
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-default)' }}
    >
      {(['devanagari', 'roman'] as const).map(script => (
        <button
          key={script}
          onClick={() => onChange(script)}
          className="px-3 py-1 rounded-md transition-all"
          style={{
            background: value === script ? 'var(--room-current)' : 'transparent',
            color: value === script ? 'white' : 'var(--text-muted)',
          }}
        >
          {script === 'devanagari' ? 'देव' : 'ROM'}
        </button>
      ))}
    </div>
  );
}
