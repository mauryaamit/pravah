'use client';
import { usePathname } from 'next/navigation';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROOMS } from '@/lib/constants/rooms';
import { useAudio } from '@/components/providers/AudioProvider';
import { formatHindiDate } from '@/lib/utils/date';
import ThemeToggle from '@/components/shared/ThemeToggle';
import AmbientSoundPicker from '@/components/shared/AmbientSoundPicker';

export default function Topbar() {
  const pathname = usePathname();
  const { isMuted, toggleMute, enableAudio } = useAudio();
  const room = ROOMS.find(r => pathname.startsWith(r.route));

  return (
    <header
      className="fixed top-0 right-0 z-30 flex items-center justify-between px-4 lg:px-6 left-0 lg:left-[var(--sidebar-width)] transition-[left] duration-200 ease-in-out"
      style={{
        height: 'var(--topbar-height)',
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      {/* Left: Room identity */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Pravah logo on mobile only */}
        <div className="lg:hidden flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold font-devanagari"
            style={{ background: 'var(--accent-saffron)', fontSize: '0.75rem' }}
          >
            प्र
          </div>
        </div>

        <AnimatePresence mode="wait">
          {room && (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="hidden sm:block min-w-0"
            >
              <div className="flex items-center gap-2">
                <div>
                  <div className="font-semibold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>
                    {room.name}
                  </div>
                  <div className="text-xs leading-tight font-devanagari" style={{ color: 'var(--text-muted)' }}>
                    {room.nameHindi}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-1">
        {/* Hindi date */}
        <div className="hidden md:block text-sm font-devanagari px-3"
          style={{ color: 'var(--text-muted)' }}>
          {formatHindiDate()}
        </div>

        {/* Ambient sound picker */}
        <AmbientSoundPicker />

        {/* Audio mute toggle */}
        <button
          onClick={() => isMuted ? enableAudio() : toggleMute()}
          className="p-2 rounded-lg transition-colors"
          style={{ color: 'var(--text-muted)' }}
          title={isMuted ? 'Enable audio' : 'Mute audio'}
        >
          {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </button>

        {/* Theme toggle - opens downward since we're at the top of screen */}
        <ThemeToggle direction="down" />
      </div>
    </header>
  );
}
