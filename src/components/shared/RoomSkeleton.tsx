import React from 'react';

export function CardSkeleton() {
  return (
    <div className="animate-pulse w-full max-w-3xl mx-auto p-6 sm:p-8 card-base space-y-4" style={{ borderColor: 'var(--border-default)' }}>
      <div className="h-6 bg-[color-mix(in_srgb,var(--accent-saffron)_10%,var(--bg-tertiary))] rounded w-3/4 mb-3" />
      <div className="h-4 bg-[var(--bg-tertiary)] rounded w-full mb-2" />
      <div className="h-4 bg-[var(--bg-tertiary)] rounded w-5/6 mb-2" />
      <div className="h-4 bg-[var(--bg-tertiary)] rounded w-4/6" />
    </div>
  );
}

export default function RoomSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Header skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4 animate-pulse" style={{ borderColor: 'var(--border-default)' }}>
        <div className="space-y-2 text-left w-full sm:w-auto">
          <div className="h-3 bg-[var(--bg-tertiary)] rounded w-24" />
          <div className="h-8 bg-[var(--bg-tertiary)] rounded w-48" />
          <div className="h-3 bg-[var(--bg-tertiary)] rounded w-64" />
        </div>
        <div className="h-10 bg-[var(--bg-tertiary)] rounded w-32" />
      </div>

      {/* Main card skeleton */}
      <CardSkeleton />
    </div>
  );
}
