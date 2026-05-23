'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Pravah Global Error Boundary caught:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full p-8 rounded-2xl border backdrop-blur-md shadow-lg"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-default)',
        }}
      >
        <div className="flex justify-center mb-6">
          <div 
            className="p-4 rounded-full border"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderColor: 'var(--border-default)',
            }}
          >
            <AlertCircle className="w-12 h-12 text-amber-500 animate-pulse" />
          </div>
        </div>

        <h1 
          className="text-2xl font-semibold mb-3 tracking-wide"
          style={{ color: 'var(--text-primary)' }}
        >
          क्षितिज पर धुंध है
        </h1>
        <p 
          className="text-sm italic mb-6 opacity-75 font-serif"
          style={{ color: 'var(--text-secondary)' }}
        >
          "There is mist on the horizon. The connection is resting."
        </p>

        <div 
          className="text-sm rounded-lg p-4 mb-8 text-left font-mono break-all max-h-40 overflow-y-auto border"
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border-default)',
            color: 'var(--text-secondary)',
          }}
        >
          {error.message || 'An unexpected database or connection issue occurred.'}
          {error.digest && (
            <div className="mt-2 text-xs opacity-60">
              ID: {error.digest}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderColor: 'var(--border-default)',
              color: 'var(--text-primary)',
            }}
          >
            <RefreshCw className="w-4 h-4" />
            पुनः प्रयास करें (Retry)
          </button>
          
          <Link
            href="/aarambh"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border-default)',
              color: 'var(--text-primary)',
            }}
          >
            <Home className="w-4 h-4" />
            आरंभ (Home)
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
