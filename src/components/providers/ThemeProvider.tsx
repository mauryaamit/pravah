'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type PravahTheme = 'cream' | 'vangogh' | 'rainy' | 'forest';

export const THEME_META: Record<PravahTheme, {
  label: string;
  description: string;
  swatch: string;
  swatchAlt: string;
}> = {
  cream: {
    label: 'Cream',
    description: 'Warm parchment, calm and minimal',
    swatch: '#F5F0E8',
    swatchAlt: '#C4873A',
  },
  vangogh: {
    label: 'Van Gogh',
    description: 'Painterly blues and golden yellows',
    swatch: '#F2EDD5',
    swatchAlt: '#3A5A8A',
  },
  rainy: {
    label: 'Library',
    description: 'Candlelight warmth, rainy evenings',
    swatch: '#241A0E',
    swatchAlt: '#D4943A',
  },
  forest: {
    label: 'Forest',
    description: 'Moss greens and mountain silence',
    swatch: '#F0F4EC',
    swatchAlt: '#4A7C59',
  },
};

interface ThemeContextValue {
  theme: PravahTheme;
  setTheme: (t: PravahTheme) => void;
  isDark: boolean;
  resolvedTheme: 'day' | 'night';
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<PravahTheme>('cream');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('pravah-theme') as PravahTheme | null;
    if (stored && stored in THEME_META) {
      setThemeState(stored);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, mounted]);

  const setTheme = (t: PravahTheme) => {
    setThemeState(t);
    localStorage.setItem('pravah-theme', t);
    document.documentElement.setAttribute('data-theme', t);
  };

  const isDark = theme === 'rainy';
  const resolvedTheme: 'day' | 'night' = isDark ? 'night' : 'day';
  const toggle = () => setTheme(theme === 'rainy' ? 'cream' : 'rainy');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, resolvedTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
