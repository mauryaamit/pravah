'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type PravahTheme = 'cream' | 'vangogh' | 'forest';

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
    let stored = localStorage.getItem('pravah-theme');
    if (stored === 'rainy' || stored === 'library' || stored === 'dark') {
      stored = 'cream';
      localStorage.setItem('pravah-theme', 'cream');
    }
    if (stored && stored in THEME_META) {
      setThemeState(stored as PravahTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, mounted]);

  const setTheme = (t: PravahTheme) => {
    let target = t;
    if (t as string === 'rainy' || t as string === 'library') {
      target = 'cream';
    }
    setThemeState(target);
    localStorage.setItem('pravah-theme', target);
    document.documentElement.setAttribute('data-theme', target);
  };

  const isDark = false;
  const resolvedTheme = 'day';
  const toggle = () => {
    const themes: PravahTheme[] = ['cream', 'vangogh', 'forest'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };


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
