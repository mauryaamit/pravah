'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ROOMS } from '@/lib/constants/rooms';
import { Search, Compass, Sparkles, X } from 'lucide-react';
import { SCALE_IN } from '@/lib/utils/motion';
import { cn } from '@/lib/utils/cn';

interface QuickSwitcherProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickSwitcher({ isOpen, onClose }: QuickSwitcherProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentRoomIds, setRecentRoomIds] = useState<string[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('pravah-recent-rooms');
      if (stored) {
        setRecentRoomIds(JSON.parse(stored));
      }
    } catch {}
  }, [isOpen]);

  // Log room visit to recents when a room is selected
  const logRecentVisit = (roomId: string) => {
    const next = [roomId, ...recentRoomIds.filter(id => id !== roomId)].slice(0, 4);
    setRecentRoomIds(next);
    localStorage.setItem('pravah-recent-rooms', JSON.stringify(next));
  };

  const selectRoom = (room: typeof ROOMS[0]) => {
    logRecentVisit(room.id);
    router.push(room.route);
    onClose();
  };

  // Filter rooms
  const filtered = ROOMS.filter(r => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      r.name.toLowerCase().includes(q) ||
      r.nameHindi.includes(q) ||
      r.nameHi.includes(q) ||
      r.description.toLowerCase().includes(q)
    );
  });

  // Highlight matches when query is present, otherwise show recent items at the top
  const showRecent = !query.trim() && recentRoomIds.length > 0;
  const recentRooms = ROOMS.filter(r => recentRoomIds.includes(r.id));
  const listItems = showRecent ? [...recentRooms, ...ROOMS.filter(r => !recentRoomIds.includes(r.id))] : filtered;

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle arrow key and Enter navigation
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % listItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + listItems.length) % listItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (listItems[selectedIndex]) {
          selectRoom(listItems[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [isOpen, listItems, selectedIndex]);

  // Scroll active item into view
  useEffect(() => {
    const activeEl = listRef.current?.querySelector('.active-switcher-item');
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:pt-32">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Switcher dialog */}
      <motion.div
        variants={SCALE_IN}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col z-10"
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-default)',
          maxHeight: '420px',
        }}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: 'var(--border-default)' }}>
          <Search size={18} className="text-text-muted" style={{ color: 'var(--text-muted)' }} />
          <input
            autoFocus
            type="text"
            placeholder="Type a room name (e.g. Sukoon, Aarambh)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none text-base"
            style={{ color: 'var(--text-primary)' }}
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            <X size={15} />
          </button>
        </div>

        {/* Room list */}
        <div 
          ref={listRef}
          className="flex-1 overflow-y-auto p-2 no-scrollbar"
        >
          {listItems.length === 0 ? (
            <div className="text-center py-10" style={{ color: 'var(--text-faint)' }}>
              No rooms found for "{query}"
            </div>
          ) : (
            <div className="space-y-1">
              {showRecent && (
                <div 
                  className="px-3 py-1.5 text-[10px] uppercase font-semibold tracking-wider"
                  style={{ color: 'var(--text-faint)' }}
                >
                  Recently Visited
                </div>
              )}
              {listItems.map((room, idx) => {
                const isActive = idx === selectedIndex;
                const isRecent = showRecent && idx < recentRooms.length;

                return (
                  <button
                    key={room.id}
                    onClick={() => selectRoom(room)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-left",
                      isActive ? 'active-switcher-item' : ''
                    )}
                    style={{
                      background: isActive
                        ? `color-mix(in srgb, ${room.colorHex} 12%, var(--bg-tertiary))`
                        : 'transparent',
                    }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Room accent dot */}
                      <div 
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: room.colorHex }}
                      />
                      <span className="text-lg leading-none flex-shrink-0">{room.emoji}</span>
                      <div className="min-w-0">
                        <span 
                          className="font-medium text-[15px]"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {room.name}
                        </span>
                        <span 
                          className="font-devanagari text-xs ml-2"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {room.nameHindi}
                        </span>
                        <span 
                          className="block text-xs truncate mt-0.5"
                          style={{ color: 'var(--text-faint)' }}
                        >
                          {room.description}
                        </span>
                      </div>
                    </div>

                    {isRecent && (
                      <span 
                        className="text-[10px] px-2 py-0.5 rounded-full bg-bg-tertiary"
                        style={{ color: 'var(--text-faint)' }}
                      >
                        Recent
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 border-t flex justify-between items-center text-[10px]" style={{ borderColor: 'var(--border-default)', color: 'var(--text-faint)' }}>
          <span>Use ↑↓ keys to navigate, Enter to open</span>
          <span>ESC to close</span>
        </div>
      </motion.div>
    </div>
  );
}
