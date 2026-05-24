'use client';
import { useState, useEffect, useCallback } from 'react';
import { Volume2, Pause, Square, Play } from 'lucide-react';
import { speak, stopSpeaking, isSpeaking as checkIsSpeaking } from '@/lib/utils/tts';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'icon' | 'pill';

interface ReadAloudButtonProps {
  text: string;
  lang?: 'en-IN' | 'hi-IN' | 'ur-PK' | 'en' | 'hi' | 'ur';
  size?: Size;
  variant?: Variant;
  className?: string;
  label?: string;
  defaultPreset?: 'slow' | 'normal' | 'fast' | 'swift';
}

const PRESETS = [
  { id: 'slow', label: '🐢 Slow', rate: 0.65, pitch: 0.85 },
  { id: 'normal', label: '📖 Normal', rate: 0.85, pitch: 0.90 },
  { id: 'fast', label: '⚡ Fast', rate: 1.1, pitch: 0.95 },
  { id: 'swift', label: '🚀 Swift', rate: 1.4, pitch: 1.0 },
] as const;

export default function ReadAloudButton({
  text,
  lang = 'en-IN',
  size = 'md',
  variant = 'icon',
  className = '',
  label,
  defaultPreset = 'normal',
}: ReadAloudButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPreset, setCurrentPreset] = useState<typeof PRESETS[number]['id']>(defaultPreset);

  const resolvedLang = lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : lang === 'ur' ? 'ur-PK' : lang;

  // Poll for speaking state to handle automatic completion
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        if (!checkIsSpeaking()) {
          setIsPlaying(false);
        }
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Clean up speaking on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const play = useCallback((presetId = currentPreset) => {
    const preset = PRESETS.find(p => p.id === presetId) || PRESETS[1];
    setIsPlaying(true);
    
    const utterance = speak(text, {
      lang: resolvedLang,
      rate: preset.rate,
      pitch: preset.pitch,
      volume: 1.0
    });

    if (utterance) {
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
    }
  }, [text, resolvedLang, currentPreset]);

  const handleToggle = () => {
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
    } else {
      play(currentPreset);
    }
  };

  const handlePresetSelect = (presetId: typeof PRESETS[number]['id']) => {
    setCurrentPreset(presetId);
    if (isPlaying) {
      play(presetId);
    }
  };

  // Button sizes
  const btnSizeClass = size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-12 h-12';
  const iconSize = size === 'sm' ? 14 : size === 'md' ? 18 : 22;

  return (
    <div className={`relative flex flex-col items-center gap-2 flex-shrink-0 ${className}`}>
      {/* Self-contained keyframes for the pulse ring */}
      <style jsx global>{`
        @keyframes tts-pulse-ring {
          0% {
            box-shadow: 0 0 0 0 var(--pulse-color, var(--room-current, #C4873A));
            opacity: 0.7;
          }
          100% {
            box-shadow: 0 0 0 8px var(--pulse-color, var(--room-current, #C4873A));
            opacity: 0;
          }
        }
        .tts-playing-pulse {
          animation: tts-pulse-ring 1.8s cubic-bezier(0.24, 0, 0.38, 1) infinite;
        }
      `}</style>

      {variant === 'pill' ? (
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-200"
          style={{
            background: isPlaying
              ? 'color-mix(in srgb, var(--room-current) 12%, var(--bg-secondary))'
              : 'var(--bg-secondary)',
            borderColor: isPlaying ? 'var(--room-current)' : 'var(--border-default)',
            color: isPlaying ? 'var(--room-current)' : 'var(--text-secondary)',
          }}
          title={isPlaying ? 'Stop narration' : label || 'Listen to this'}
        >
          {isPlaying ? <Pause size={iconSize} /> : <Play size={iconSize} />}
          <span>{isPlaying ? 'Pause' : label || 'Listen'}</span>
        </button>
      ) : (
        <button
          onClick={handleToggle}
          className={`flex items-center justify-center rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 ${btnSizeClass} ${
            isPlaying ? 'tts-playing-pulse' : ''
          }`}
          style={{
            background: isPlaying
              ? 'color-mix(in srgb, var(--room-current) 12%, var(--bg-secondary))'
              : 'var(--bg-secondary)',
            borderColor: isPlaying ? 'var(--room-current)' : 'var(--border-default)',
            color: isPlaying ? 'var(--room-current)' : 'var(--text-muted)',
            '--pulse-color': 'color-mix(in srgb, var(--room-current) 40%, transparent)',
          } as any}
          title={isPlaying ? 'Stop narration' : 'Listen aloud'}
        >
          {isPlaying ? <Pause size={iconSize} /> : <Volume2 size={iconSize} />}
        </button>
      )}

      {/* Speed Presets display when playing */}
      {isPlaying && (
        <div className="flex gap-1 p-0.5 rounded-lg border bg-secondary shadow-sm transition-all"
             style={{
               background: 'var(--bg-secondary)',
               borderColor: 'var(--border-default)',
             }}>
          {PRESETS.map(p => {
            const isSel = currentPreset === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handlePresetSelect(p.id)}
                className="px-2 py-0.5 rounded text-[10px] font-medium transition-all"
                style={{
                  background: isSel ? 'var(--room-current)' : 'transparent',
                  color: isSel ? '#ffffff' : 'var(--text-secondary)',
                }}
              >
                {p.label.split(' ')[0]} {/* Show icon only to keep it small */}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
