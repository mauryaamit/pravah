'use client';
import { useEffect, useState, useRef, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ROOMS } from '@/lib/constants/rooms';
import { useAudio } from '@/components/providers/AudioProvider';
import { useUser } from '@/components/providers/UserProvider';
import { useTheme } from '@/components/providers/ThemeProvider';
import { BACKGROUND_PAINTINGS } from '@/lib/constants/paintings';
import ShortcutsModal from '@/components/shared/ShortcutsModal';
import QuickSwitcher from '@/components/shared/QuickSwitcher';
import { AnimatePresence } from 'framer-motion';

interface RoomShellProps {
  children: ReactNode;
}

export default function RoomShell({ children }: RoomShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { setRoom } = useAudio();
  const { preferences } = useUser();
  const { toggle: toggleTheme } = useTheme();
  
  const room = ROOMS.find(r => pathname && pathname.startsWith(r.route));

  // Modal states
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const gPressedRef = useRef(false);
  const gTimeoutRef = useRef<any>(null);

  // Switch ambient sound when room changes
  useEffect(() => {
    if (room?.id) setRoom(room.id);
  }, [room?.id, setRoom]);

  // Global hotkeys listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput = activeEl && (
        activeEl.tagName === 'INPUT' || 
        activeEl.tagName === 'TEXTAREA' || 
        activeEl.getAttribute('contenteditable') === 'true'
      );

      // Escape key closes modals regardless of focus
      if (e.key === 'Escape') {
        setIsShortcutsOpen(false);
        setIsSwitcherOpen(false);
        return;
      }

      // Command/Ctrl + K switcher
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSwitcherOpen(prev => !prev);
        return;
      }

      // If user is focused on input, ignore other shortcuts
      if (isInput) return;

      // ? opens shortcuts panel
      if (e.key === '?') {
        e.preventDefault();
        setIsShortcutsOpen(prev => !prev);
        return;
      }

      // Toggle read aloud (R)
      if (e.key.toLowerCase() === 'r') {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('pravah-toggle-read-aloud'));
        return;
      }

      // Toggle theme (N)
      if (e.key.toLowerCase() === 'n') {
        e.preventDefault();
        toggleTheme();
        return;
      }

      // Go to room sequence (G + Key)
      if (e.key.toLowerCase() === 'g') {
        gPressedRef.current = true;
        clearTimeout(gTimeoutRef.current);
        gTimeoutRef.current = setTimeout(() => {
          gPressedRef.current = false;
        }, 1000);
        return;
      }

      if (gPressedRef.current) {
        const key = e.key.toLowerCase();
        let targetRoute = '';
        if (key === 'a') targetRoute = '/aarambh';
        if (key === 's') targetRoute = '/sukoon';
        if (key === 'j') targetRoute = '/antarman';
        if (key === 'h') targetRoute = '/agni';

        if (targetRoute) {
          e.preventDefault();
          gPressedRef.current = false;
          router.push(targetRoute);
        }
      }
    };

    const handleOpenShortcuts = () => {
      setIsShortcutsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pravah-open-shortcuts', handleOpenShortcuts);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pravah-open-shortcuts', handleOpenShortcuts);
      clearTimeout(gTimeoutRef.current);
    };
  }, [router, toggleTheme]);

  const paintingId = preferences?.backgroundPainting || 'starry-night';
  const opacity = preferences?.backgroundOpacity !== undefined ? preferences.backgroundOpacity : 0.07;
  const selectedPainting = BACKGROUND_PAINTINGS.find(p => p.id === paintingId) || BACKGROUND_PAINTINGS[0];

  return (
    <div
      style={{
        ['--room-current' as string]: room?.colorHex || 'var(--accent-saffron)',
      }}
      className="relative min-h-screen"
    >
      {/* Background painting - always rendered, opacity controlled by user */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: opacity }}
      >
        <img
          src={selectedPainting.file}
          alt={selectedPainting.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Room content above painting */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Shortcuts and Switcher Modals */}
      <AnimatePresence>
        {isShortcutsOpen && (
          <ShortcutsModal 
            isOpen={isShortcutsOpen} 
            onClose={() => setIsShortcutsOpen(false)} 
          />
        )}
        {isSwitcherOpen && (
          <QuickSwitcher 
            isOpen={isSwitcherOpen} 
            onClose={() => setIsSwitcherOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
