'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AMBIENT_MODES } from '@/components/shared/AmbientSoundPicker';
import { ROOM_MAP } from '@/lib/constants/rooms';

interface AudioContextValue {
  currentRoom: string;
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  ambientMode: string | null;
  setRoom: (roomId: string) => void;
  toggleMute: () => void;
  setVolume: (v: number) => void;
  enableAudio: () => void;
  setAmbientMode: (mode: string | null) => void;
}

import { createContext, useContext, useCallback, type ReactNode } from 'react';
const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const [currentRoom, setCurrentRoom] = useState('aarambh');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolumeState] = useState(0.1);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [ambientMode, setAmbientModeState] = useState<string | null>(null);

  // Load preferences
  useEffect(() => {
    const muted = localStorage.getItem('pravah-audio-muted');
    if (muted === 'false') { setIsMuted(false); setAudioEnabled(true); }
    const vol = localStorage.getItem('pravah-audio-volume');
    if (vol) setVolumeState(parseFloat(vol));
    const ambient = localStorage.getItem('pravah-ambient-mode');
    if (ambient && ambient !== 'null') setAmbientModeState(ambient);
  }, []);

  // When ambient mode or volume changes, update audio
  useEffect(() => {
    if (!audioEnabled || isMuted) {
      ambientRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    if (!ambientMode) {
      ambientRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    const mode = AMBIENT_MODES.find(m => m.id === ambientMode);
    if (!mode) return;

    const current = ambientRef.current;
    if (current && current.src.includes(encodeURIComponent(mode.url.split('/').pop() || ''))) {
      // Same track — just update volume
      current.volume = volume;
      return;
    }

    // New track — crossfade
    if (current) {
      current.pause();
    }
    const audio = new Audio(mode.url);
    audio.loop = true;
    audio.volume = 0;
    audio.play()
      .then(() => {
        setIsPlaying(true);
        ambientRef.current = audio;
        // Fade in
        let v = 0;
        const fadeIn = setInterval(() => {
          v = Math.min(v + 0.005, volume);
          audio.volume = v;
          if (v >= volume) clearInterval(fadeIn);
        }, 80);
      })
      .catch(() => {});
  }, [ambientMode, audioEnabled, isMuted, volume]);

  const setAmbientMode = useCallback((mode: string | null) => {
    setAmbientModeState(mode);
    localStorage.setItem('pravah-ambient-mode', String(mode));
    if (!mode) {
      ambientRef.current?.pause();
      setIsPlaying(false);
    }
  }, []);

  const setRoom = useCallback((roomId: string) => {
    if (roomId === currentRoom) return;
    setCurrentRoom(roomId);
  }, [currentRoom]);

  const enableAudio = useCallback(() => {
    setAudioEnabled(true);
    setIsMuted(false);
    localStorage.setItem('pravah-audio-muted', 'false');
  }, []);

  const toggleMute = useCallback(() => {
    const next = !isMuted;
    setIsMuted(next);
    localStorage.setItem('pravah-audio-muted', String(next));
    if (ambientRef.current) {
      if (next) {
        ambientRef.current.pause();
        setIsPlaying(false);
      } else if (audioEnabled) {
        ambientRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  }, [isMuted, audioEnabled]);

  const setVolume = useCallback((v: number) => {
    setVolumeState(v);
    localStorage.setItem('pravah-audio-volume', String(v));
    if (ambientRef.current) ambientRef.current.volume = v;
  }, []);

  return (
    <AudioContext.Provider value={{
      currentRoom, isPlaying, isMuted, volume, ambientMode,
      setRoom, toggleMute, setVolume, enableAudio, setAmbientMode,
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
}
