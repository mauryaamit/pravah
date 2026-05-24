'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogOut, Settings, Languages, MessageSquare, Volume2, User as UserIcon } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';
import { BACKGROUND_PAINTINGS } from '@/lib/constants/paintings';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { user, preferences, updatePreferences, logout } = useUser();

  if (!user) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border flex flex-col z-10 max-h-[85vh]"
            style={{
              background: 'var(--bg-secondary)',
              borderColor: 'var(--border-default)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0"
              style={{ borderColor: 'var(--border-default)' }}
            >
              <div className="flex items-center gap-2">
                <Settings size={18} className="text-saffron" style={{ color: 'var(--accent-saffron)' }} />
                <h2 className="text-base font-medium font-serif" style={{ color: 'var(--text-primary)' }}>
                  Sanctuary Settings
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg transition-colors hover:bg-bg-tertiary"
                style={{ color: 'var(--text-muted)' }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {/* Account Section */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                  User Sanctuary
                </h3>
                <div
                  className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-default)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-semibold flex-shrink-0"
                    style={{ background: 'var(--accent-saffron)' }}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-serif text-sm truncate" style={{ color: 'var(--text-primary)' }}>
                      {user.name}
                    </div>
                    <div className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>
                      {user.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences Section */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                  Reading & Script
                </h3>

                {/* Script Selector */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text-secondary)' }}>Preferred Script</span>
                    <span style={{ color: 'var(--text-muted)' }}>For poetry & translations</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => updatePreferences({ script: 'devanagari' })}
                      className="px-3 py-2 rounded-xl text-xs font-devanagari transition-all border text-center"
                      style={{
                        backgroundColor: preferences.script === 'devanagari' ? 'var(--bg-tertiary)' : 'transparent',
                        borderColor: preferences.script === 'devanagari' ? 'var(--accent-saffron)' : 'var(--border-default)',
                        color: preferences.script === 'devanagari' ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontWeight: preferences.script === 'devanagari' ? 600 : 400,
                      }}
                    >
                      देवनागरी (Hindi)
                    </button>
                    <button
                      onClick={() => updatePreferences({ script: 'roman' })}
                      className="px-3 py-2 rounded-xl text-xs transition-all border text-center"
                      style={{
                        backgroundColor: preferences.script === 'roman' ? 'var(--bg-tertiary)' : 'transparent',
                        borderColor: preferences.script === 'roman' ? 'var(--accent-saffron)' : 'var(--border-default)',
                        color: preferences.script === 'roman' ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontWeight: preferences.script === 'roman' ? 600 : 400,
                      }}
                    >
                      Roman Script
                    </button>
                  </div>
                </div>

                {/* Language Selector */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text-secondary)' }}>Default Translation Language</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {(['en', 'hi', 'ur'] as const).map(lang => {
                      const labels = { en: 'English', hi: 'Hindi', ur: 'Urdu' };
                      const isActive = preferences.defaultLang === lang;
                      return (
                        <button
                          key={lang}
                          onClick={() => updatePreferences({ defaultLang: lang })}
                          className="px-3 py-2 rounded-xl text-xs transition-all border text-center"
                          style={{
                            backgroundColor: isActive ? 'var(--bg-tertiary)' : 'transparent',
                            borderColor: isActive ? 'var(--accent-saffron)' : 'var(--border-default)',
                            color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                            fontWeight: isActive ? 600 : 400,
                          }}
                        >
                          {labels[lang]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Background Ambience Settings */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                  Background Ambience
                </h3>

                {/* Painting Selector */}
                <div className="space-y-2">
                  <span className="text-xs block" style={{ color: 'var(--text-secondary)' }}>Select Painting</span>
                  <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
                    {BACKGROUND_PAINTINGS.map(p => {
                      const isActive = (preferences.backgroundPainting || 'starry-night') === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => updatePreferences({ backgroundPainting: p.id })}
                          className="flex flex-col items-center gap-1.5 flex-shrink-0 focus:outline-none"
                        >
                          <div
                            className="w-16 h-16 rounded-lg overflow-hidden border-2 transition-all"
                            style={{
                              borderColor: isActive ? 'var(--accent-saffron)' : 'var(--border-default)',
                              boxShadow: isActive ? '0 0 8px rgba(196,135,58,0.4)' : 'none',
                            }}
                          >
                            <img src={p.file} alt={p.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[10px] text-center w-16 truncate" style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                            {p.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Opacity Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span style={{ color: 'var(--text-secondary)' }}>Painting Intensity</span>
                    <span style={{ color: 'var(--accent-saffron)' }}>
                      {Math.round((preferences.backgroundOpacity !== undefined ? preferences.backgroundOpacity : 0.07) * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.25"
                    step="0.01"
                    value={preferences.backgroundOpacity !== undefined ? preferences.backgroundOpacity : 0.07}
                    onChange={e => updatePreferences({ backgroundOpacity: parseFloat(e.target.value) })}
                    className="w-full h-1 bg-tertiary rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: 'var(--bg-tertiary)',
                    }}
                  />
                </div>
              </div>

              {/* Audio Settings */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                  Acoustic & Voice
                </h3>

                {/* TTS Speed Selector */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text-secondary)' }}>Read-Aloud Voice Speed</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {([0.7, 1.0, 1.25, 1.5] as const).map(speed => {
                      const isActive = preferences.ttsSpeed === speed;
                      return (
                        <button
                          key={speed}
                          onClick={() => updatePreferences({ ttsSpeed: speed })}
                          className="px-2 py-2 rounded-xl text-xs transition-all border text-center"
                          style={{
                            backgroundColor: isActive ? 'var(--bg-tertiary)' : 'transparent',
                            borderColor: isActive ? 'var(--accent-saffron)' : 'var(--border-default)',
                            color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                            fontWeight: isActive ? 600 : 400,
                          }}
                        >
                          {speed === 1.0 ? 'Normal' : `${speed}x`}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Action */}
            <div
              className="px-6 py-4 border-t flex items-center justify-between flex-shrink-0"
              style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-primary)' }}
            >
              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-red-500 hover:bg-red-500/10 transition-colors"
                title="Sign out of sanctuary"
              >
                <LogOut size={14} />
                <span>Leave Sanctuary</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium transition-all"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-default)',
                  color: 'var(--text-primary)',
                }}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
