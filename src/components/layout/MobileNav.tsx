'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Flame, Star, BookOpen, Grid3x3 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROOMS } from '@/lib/constants/rooms';
import { cn } from '@/lib/utils/cn';

const MOBILE_TABS = [
  { id: 'aarambh',      label: 'Home',    Icon: Home,    route: '/aarambh' },
  { id: 'agni',         label: 'Agni',    Icon: Flame,   route: '/agni' },
  { id: 'neelakurinji', label: 'Wonder',  Icon: Star,    route: '/neelakurinji' },
  { id: 'antarman',     label: 'Journal', Icon: BookOpen, route: '/antarman' },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeRoomId = ROOMS.find(r => pathname.startsWith(r.route))?.id;

  return (
    <>
      {/* Bottom nav bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex items-center justify-around glass"
        style={{ height: 64, borderTop: '1px solid var(--border-default)' }}
      >
        {MOBILE_TABS.map(tab => {
          const isActive = activeRoomId === tab.id;
          const room = ROOMS.find(r => r.id === tab.id);
          return (
            <Link key={tab.id} href={tab.route} className="flex flex-col items-center gap-1 py-2 px-3 min-w-0">
              <tab.Icon
                size={22}
                style={{ color: isActive ? room?.colorHex : 'var(--text-muted)' }}
              />
              <span
                className="text-xs"
                style={{ color: isActive ? room?.colorHex : 'var(--text-muted)' }}
              >
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="mobile-active-dot"
                  className="absolute bottom-1 w-1 h-1 rounded-full"
                  style={{ background: room?.colorHex }}
                />
              )}
            </Link>
          );
        })}
        {/* All Rooms button */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex flex-col items-center gap-1 py-2 px-3"
        >
          <Grid3x3 size={22} style={{ color: 'var(--text-muted)' }} />
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>All</span>
        </button>
      </nav>

      {/* All Rooms Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl overflow-y-auto lg:hidden"
              style={{
                background: 'var(--bg-secondary)',
                maxHeight: '80vh',
                borderTop: '1px solid var(--border-default)',
              }}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>All Rooms</h2>
                <button onClick={() => setDrawerOpen(false)} style={{ color: 'var(--text-muted)' }}>✕</button>
              </div>
              <div className="grid grid-cols-3 gap-3 px-4 pb-24">
                {ROOMS.map(room => {
                  const isActive = room.id === activeRoomId;
                  return (
                    <Link
                      key={room.id}
                      href={room.route}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <div
                        className="flex flex-col items-center gap-2 p-3 rounded-xl text-center transition-all"
                        style={{
                          background: isActive
                            ? `color-mix(in srgb, ${room.colorHex} 15%, transparent)`
                            : 'var(--bg-tertiary)',
                          border: `1px solid ${isActive ? room.colorHex : 'var(--border-default)'}`,
                        }}
                      >
                        <span className="text-2xl">{room.emoji}</span>
                        <span className="text-xs font-medium" style={{ color: isActive ? room.colorHex : 'var(--text-primary)' }}>
                          {room.name}
                        </span>
                        <span
                          className="text-xs font-devanagari"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {room.nameHindi}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
