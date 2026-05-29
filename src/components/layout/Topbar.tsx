'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Volume2, VolumeX, Settings, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROOMS } from '@/lib/constants/rooms';
import { useAudio } from '@/components/providers/AudioProvider';
import { formatHindiDate } from '@/lib/utils/date';
import ThemeToggle from '@/components/shared/ThemeToggle';
import AmbientSoundPicker from '@/components/shared/AmbientSoundPicker';
import SettingsModal from '@/components/shared/SettingsModal';

export default function Topbar() {
  const pathname = usePathname();
  const { isMuted, toggleMute, enableAudio } = useAudio();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const room = ROOMS.find(r => pathname && pathname.startsWith(r.route));

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
        <Link href="/aarambh" className="lg:hidden flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src="/logo.png" 
            alt="Pravah Logo" 
            className="w-9 h-9 object-contain rounded-xl flex-shrink-0" 
            style={{ boxShadow: '0 2px 12px rgba(196,135,58,0.25)' }}
          />
        </Link>

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
                  <div className="leading-tight" style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: 500 }}>
                    {room.name}
                  </div>
                  <div className="leading-tight font-devanagari" style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
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
        <div className="hidden md:block font-devanagari px-3"
          style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
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

        {/* Shortcuts trigger */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('pravah-open-shortcuts'))}
          className="p-2 rounded-lg transition-colors"
          style={{ color: 'var(--text-muted)' }}
          title="Keyboard Shortcuts (?)"
        >
          <HelpCircle size={17} />
        </button>

        {/* Settings gear toggle */}
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="p-2 rounded-lg transition-colors"
          style={{ color: 'var(--text-muted)' }}
          title="Settings"
        >
          <Settings size={17} />
        </button>
      </div>

      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </header>
  );
}
