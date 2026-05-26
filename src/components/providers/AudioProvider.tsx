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
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const fadeOutAudioRef = useRef<HTMLAudioElement | null>(null);
  const fadeInIntervalRef = useRef<any>(null);
  const fadeOutIntervalRef = useRef<any>(null);
  const targetVolumeRef = useRef(0.1);

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
    if (vol) {
      const parsed = parseFloat(vol);
      setVolumeState(parsed);
      targetVolumeRef.current = parsed;
    }
    const ambient = localStorage.getItem('pravah-ambient-mode');
    if (ambient && ambient !== 'null') setAmbientModeState(ambient);
  }, []);

  // Sync target volume ref
  useEffect(() => {
    targetVolumeRef.current = volume;
  }, [volume]);

  const clearFadeIntervals = () => {
    if (fadeInIntervalRef.current) {
      clearInterval(fadeInIntervalRef.current);
      fadeInIntervalRef.current = null;
    }
    if (fadeOutIntervalRef.current) {
      clearInterval(fadeOutIntervalRef.current);
      fadeOutIntervalRef.current = null;
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      clearFadeIntervals();
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
      }
      if (fadeOutAudioRef.current) {
        fadeOutAudioRef.current.pause();
      }
    };
  }, []);

  // When ambient mode, audioEnabled or isMuted changes, update audio with overlapping cross-fade
  useEffect(() => {
    if (!audioEnabled || isMuted || !ambientMode) {
      clearFadeIntervals();
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current = null;
      }
      if (fadeOutAudioRef.current) {
        fadeOutAudioRef.current.pause();
        fadeOutAudioRef.current = null;
      }
      setIsPlaying(false);
      return;
    }

    const mode = AMBIENT_MODES.find(m => m.id === ambientMode);
    if (!mode) return;

    const current = currentAudioRef.current;
    if (current && current.src.includes(encodeURIComponent(mode.url.split('/').pop() || ''))) {
      // Same track - just update volume immediately if not fading
      if (!fadeInIntervalRef.current) {
        current.volume = volume;
      }
      return;
    }

    // New track - crossfade!
    clearFadeIntervals();

    // 1. Fade out current track
    if (current) {
      if (fadeOutAudioRef.current) {
        fadeOutAudioRef.current.pause();
      }
      fadeOutAudioRef.current = current;
      
      let fadeOutVolume = current.volume;
      const step = fadeOutVolume / 10;
      fadeOutIntervalRef.current = setInterval(() => {
        if (fadeOutAudioRef.current) {
          fadeOutVolume = Math.max(0, fadeOutVolume - step);
          fadeOutAudioRef.current.volume = fadeOutVolume;
          if (fadeOutVolume <= 0) {
            fadeOutAudioRef.current.pause();
            fadeOutAudioRef.current = null;
            if (fadeOutIntervalRef.current) {
              clearInterval(fadeOutIntervalRef.current);
              fadeOutIntervalRef.current = null;
            }
          }
        } else {
          if (fadeOutIntervalRef.current) {
            clearInterval(fadeOutIntervalRef.current);
            fadeOutIntervalRef.current = null;
          }
        }
      }, 30);
    }

    // 2. Play and fade in new track
    const audio = new Audio(mode.url);
    audio.loop = true;
    audio.volume = 0;
    currentAudioRef.current = audio;

    audio.play()
      .then(() => {
        setIsPlaying(true);
        let currentVol = 0;
        const target = targetVolumeRef.current;
        const step = target / 10;
        fadeInIntervalRef.current = setInterval(() => {
          if (currentAudioRef.current === audio) {
            currentVol = Math.min(targetVolumeRef.current, currentVol + step);
            audio.volume = currentVol;
            if (currentVol >= targetVolumeRef.current) {
              audio.volume = targetVolumeRef.current;
              if (fadeInIntervalRef.current) {
                clearInterval(fadeInIntervalRef.current);
                fadeInIntervalRef.current = null;
              }
            }
          } else {
            if (fadeInIntervalRef.current) {
              clearInterval(fadeInIntervalRef.current);
              fadeInIntervalRef.current = null;
            }
          }
        }, 30);
      })
      .catch((err) => {
        console.error('Ambient audio play failed:', err);
      });

  }, [ambientMode, audioEnabled, isMuted]);

  const setAmbientMode = useCallback((mode: string | null) => {
    setAmbientModeState(mode);
    localStorage.setItem('pravah-ambient-mode', String(mode));
    if (!mode) {
      clearFadeIntervals();
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current = null;
      }
      if (fadeOutAudioRef.current) {
        fadeOutAudioRef.current.pause();
        fadeOutAudioRef.current = null;
      }
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
    if (next) {
      clearFadeIntervals();
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
      }
      if (fadeOutAudioRef.current) {
        fadeOutAudioRef.current.pause();
      }
      setIsPlaying(false);
    } else if (audioEnabled) {
      if (currentAudioRef.current) {
        currentAudioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  }, [isMuted, audioEnabled]);

  const setVolume = useCallback((v: number) => {
    setVolumeState(v);
    localStorage.setItem('pravah-audio-volume', String(v));
    if (currentAudioRef.current && !fadeInIntervalRef.current) {
      currentAudioRef.current.volume = v;
    }
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
