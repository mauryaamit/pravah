'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Settings, ChevronDown } from 'lucide-react';
import {
  Sunrise, Flame, PenLine, TreePine,
  CloudRain, Waves, Zap, Music2,
  Lightbulb, Brain, Telescope, Landmark, MessageSquare, Library,
  Globe2, Sparkles, PlaneTakeoff, Leaf, Flag,
  ScrollText, UserRound, BookMarked, Heart, BookOpen,
  Mic2, Type, Puzzle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROOMS, ROOMS_BY_CLUSTER, CLUSTER_LABELS, type RoomCluster } from '@/lib/constants/rooms';
import { useUser } from '@/components/providers/UserProvider';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils/cn';
import { ACCORDION_CONTENT } from '@/lib/utils/motion';
import SettingsModal from '@/components/shared/SettingsModal';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ROOM_ICONS: Record<string, React.ComponentType<any>> = {
  aarambh: Sunrise, agni: Flame, antarman: PenLine, bargad: TreePine,
  sukoon: CloudRain, manthan: Waves, noor: Zap, riyaz: Music2,
  bodh: Lightbulb, neurolab: Brain, cosmos: Telescope, darshan: Landmark,
  samvaad: MessageSquare, srot: Library,
  vani: Mic2, shabda: Type, ulajhan: Puzzle,
  duniya: Globe2, neelakurinji: Sparkles, safar: PlaneTakeoff, aranya: Leaf, bharati: Flag,
  kathakar: ScrollText, vibhav: UserRound, lekhak: BookMarked, anand: Heart,
};

const EXPANDED_W = 260;
const COLLAPSED_W = 56;
const DEFAULT_OPEN: RoomCluster[] = ['daily'];

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useUser();
  const { isDark } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [openClusters, setOpenClusters] = useState<RoomCluster[]>(DEFAULT_OPEN);
  const [pendingRoom, setPendingRoom] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const activeRoomId = ROOMS.find(r => pathname.startsWith(r.route))?.id;
  const activeRoom = ROOMS.find(r => r.id === activeRoomId);

  // Clear pending when route settles
  useEffect(() => { setPendingRoom(null); }, [pathname]);

  // Auto-expand cluster of active room
  useEffect(() => {
    if (!activeRoom) return;
    const cluster = activeRoom.cluster as RoomCluster;
    setOpenClusters(prev => prev.includes(cluster) ? prev : [...prev, cluster]);
  }, [activeRoom]);

  // Persist open clusters
  useEffect(() => {
    try {
      const stored = localStorage.getItem('pravah-sidebar-clusters');
      if (stored) setOpenClusters(JSON.parse(stored));
    } catch {}
  }, []);

  // Inject CSS variable for main content margin - synced with sidebar width
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width',
      `${collapsed ? COLLAPSED_W : EXPANDED_W}px`
    );
  }, [collapsed]);

  const toggleCluster = (cluster: RoomCluster) => {
    setOpenClusters(prev => {
      const next = prev.includes(cluster) ? prev.filter(c => c !== cluster) : [...prev, cluster];
      localStorage.setItem('pravah-sidebar-clusters', JSON.stringify(next));
      return next;
    });
  };

  const sidebarBg = activeRoom
    ? `color-mix(in srgb, ${activeRoom.colorHex} 4%, var(--bg-secondary))`
    : 'var(--bg-secondary)';

  return (
    <>
      {/* Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? COLLAPSED_W : EXPANDED_W }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="fixed left-0 top-0 h-screen z-40 flex-col border-r hidden lg:flex flex-shrink-0"
        style={{ background: sidebarBg, borderColor: 'var(--border-default)', transition: 'background 400ms ease' }}
      >
        <div className="flex flex-col h-full w-full overflow-hidden">
          {/* Logo */}
          <Link
            href="/aarambh"
            className="flex items-center gap-3 px-4 py-4 border-b flex-shrink-0 hover:opacity-85 transition-opacity"
            style={{ borderColor: 'var(--border-default)', minHeight: 64 }}
          >
            <img 
              src="/logo.png" 
              alt="Pravah Logo" 
              className="w-8 h-8 object-contain rounded-lg flex-shrink-0" 
              style={{ boxShadow: '0 2px 12px rgba(196,135,58,0.25)' }}
            />
            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="font-serif text-base leading-tight" style={{ color: 'var(--text-primary)' }}>Pravah</div>
                  <div className="font-devanagari text-xs" style={{ color: 'var(--text-secondary)' }}>प्रवाह</div>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* User */}
          {user && (
            <div
              className="flex items-center gap-3 px-4 py-3 border-b flex-shrink-0"
              style={{ borderColor: 'var(--border-default)' }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ background: 'var(--accent-saffron)', fontSize: '0.75rem', fontWeight: 600 }}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="truncate" 
                    style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 500 }}
                  >
                    {user.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Nav clusters */}
          <nav className="flex-1 overflow-y-auto py-2 no-scrollbar relative">
            {/* Standalone Sutr room */}
            {(() => {
              const sutrRoom = ROOMS.find(r => r.id === 'sutr');
              if (!sutrRoom) return null;
              const isActive = activeRoomId === 'sutr' || pendingRoom === 'sutr';
              return (
                <Link
                  href={sutrRoom.route}
                  prefetch={true}
                  onClick={() => setPendingRoom(sutrRoom.id)}
                  className="block mb-1"
                  title={collapsed ? `${sutrRoom.name} - ${sutrRoom.nameHindi}` : undefined}
                >
                  <div
                    className="relative flex items-center gap-3 transition-all duration-150"
                    style={{
                      margin: collapsed ? '3px 8px' : '1px 8px',
                      width: collapsed ? 40 : undefined,
                      height: collapsed ? 40 : undefined,
                      padding: collapsed ? '0' : '7px 10px',
                      borderRadius: 10,
                      justifyContent: collapsed ? 'center' : undefined,
                      alignItems: collapsed ? 'center' : undefined,
                      background: isActive
                        ? `color-mix(in srgb, ${sutrRoom.colorHex} 14%, var(--bg-tertiary))`
                        : 'transparent',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--bg-tertiary)';
                    }}
                    onMouseLeave={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    {isActive && (
                      <div
                        className="absolute left-0 top-1 bottom-1 w-[3px] rounded-r-full"
                        style={{ background: sutrRoom.colorHex }}
                      />
                    )}
                    <div className="relative flex-shrink-0">
                      <BookOpen
                        size={collapsed ? 16 : 15}
                        strokeWidth={isActive ? 2.2 : 1.7}
                        style={{ color: isActive ? sutrRoom.colorHex : 'var(--text-muted)' }}
                      />
                      {collapsed && isActive && (
                        <div
                          className="absolute bottom-1 right-1 rounded-full"
                          style={{
                            width: '3px',
                            height: '3px',
                            backgroundColor: sutrRoom.colorHex
                          }}
                        />
                      )}
                    </div>
                    <AnimatePresence>
                      {!collapsed && (
                        <motion.div
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          className="flex-1 min-w-0"
                        >
                          <div
                            className="leading-tight truncate"
                            style={{
                              color: 'var(--text-primary)',
                              fontSize: '16px',
                              fontWeight: 500,
                            }}
                          >
                            {sutrRoom.name}
                          </div>
                          <div
                            className="truncate font-devanagari leading-tight"
                            style={{
                              color: 'var(--text-secondary)',
                              fontSize: '12px',
                            }}
                          >
                            {sutrRoom.nameHindi}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Link>
              );
            })()}

            {!collapsed && <div className="border-b mx-4 my-2" style={{ borderColor: 'var(--border-default)' }} />}

            {(Object.keys(CLUSTER_LABELS) as RoomCluster[]).map(cluster => {
              const isOpen = openClusters.includes(cluster) || collapsed;
              const rooms = ROOMS_BY_CLUSTER[cluster];
              const hasActive = rooms.some(r => r.id === activeRoomId || r.id === pendingRoom);

              return (
                <div key={cluster}>
                  {/* Cluster header */}
                  {!collapsed && (
                    <button
                      onClick={() => toggleCluster(cluster)}
                      className="w-full flex items-center justify-between px-4 py-2 transition-colors"
                      style={{ color: isDark ? '#D4B896' : '#5C4A2A' }}
                    >
                      <span className="tracking-widest uppercase" style={{ letterSpacing: '0.14em', fontSize: '13px', fontWeight: 600 }}>
                        {CLUSTER_LABELS[cluster]}
                      </span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={11} />
                      </motion.div>
                    </button>
                  )}

                  {/* Room list - accordion in expanded mode, always visible in collapsed */}
                  <motion.div
                    variants={ACCORDION_CONTENT}
                    initial={isOpen ? 'open' : 'collapsed'}
                    animate={isOpen ? 'open' : 'collapsed'}
                    style={{ overflow: 'hidden' }}
                  >
                    {rooms.map(room => {
                      const isActive = room.id === activeRoomId || room.id === pendingRoom;
                      const Icon = ROOM_ICONS[room.id] || Library;

                      return (
                        <Link
                          key={room.id}
                          href={room.route}
                          prefetch={true}
                          onClick={() => setPendingRoom(room.id)}
                          className="block"
                          title={collapsed ? `${room.name} - ${room.nameHindi}` : undefined}
                        >
                          <div
                            className="relative flex items-center gap-3 transition-all duration-150"
                            style={{
                              margin: collapsed ? '3px 8px' : '1px 8px',
                              width: collapsed ? 40 : undefined,
                              height: collapsed ? 40 : undefined,
                              padding: collapsed ? '0' : '7px 10px',
                              borderRadius: 10,
                              justifyContent: collapsed ? 'center' : undefined,
                              alignItems: collapsed ? 'center' : undefined,
                              background: isActive
                                ? `color-mix(in srgb, ${room.colorHex} 14%, var(--bg-tertiary))`
                                : 'transparent',
                            }}
                            onMouseEnter={e => {
                              if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--bg-tertiary)';
                            }}
                            onMouseLeave={e => {
                              if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent';
                            }}
                          >
                            {/* Active bar - 3px, full height of row */}
                            {isActive && (
                              <div
                                className="absolute left-0 top-1 bottom-1 w-[3px] rounded-r-full"
                                style={{ background: room.colorHex }}
                              />
                            )}

                            {/* Icon */}
                            <div className="relative flex-shrink-0">
                              <Icon
                                size={collapsed ? 16 : 15}
                                strokeWidth={isActive ? 2.2 : 1.7}
                                style={{ color: isActive ? room.colorHex : 'var(--text-muted)' }}
                              />
                              {/* Active dot in collapsed mode */}
                              {collapsed && isActive && (
                                <div
                                  className="absolute bottom-1 right-1 rounded-full"
                                  style={{
                                    width: '3px',
                                    height: '3px',
                                    backgroundColor: room.colorHex
                                  }}
                                />
                              )}
                            </div>

                            {/* Labels - only in expanded mode */}
                            <AnimatePresence>
                              {!collapsed && (
                                <motion.div
                                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                  className="flex-1 min-w-0"
                                >
                                  <div
                                    className="leading-tight truncate"
                                    style={{
                                      color: 'var(--text-primary)',
                                      fontSize: '16px',
                                      fontWeight: 500,
                                    }}
                                  >
                                    {room.name}
                                  </div>
                                  <div
                                    className="truncate font-devanagari leading-tight"
                                    style={{
                                      color: 'var(--text-secondary)',
                                      fontSize: '12px',
                                    }}
                                  >
                                    {room.nameHindi}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                </div>
              );
            })}
          </nav>

          {/* Footer */}
          <div
            className="border-t py-2.5 flex items-center justify-center flex-shrink-0"
            style={{ borderColor: 'var(--border-default)', minHeight: 48 }}
          >
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 rounded-lg transition-colors flex items-center justify-center hover:bg-bg-tertiary text-text-muted hover:text-text-primary"
              style={{ color: 'var(--text-muted)' }}
              title="Settings"
            >
              <Settings size={15} />
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Floating Collapse/Expand Handle on the Right Edge */}
      <motion.button
        onClick={() => setCollapsed(c => !c)}
        className="fixed z-50 hidden lg:flex items-center justify-center cursor-pointer text-text-muted"
        animate={{ left: collapsed ? COLLAPSED_W : EXPANDED_W }}
        whileHover={{ backgroundColor: 'var(--border-hover)' }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          width: '20px',
          height: '48px',
          borderRadius: '0 8px 8px 0',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border-default)',
          borderLeft: 'none',
        }}
        title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </motion.button>

      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

    </>
  );
}
