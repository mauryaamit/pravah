'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { Volume2, Pause, Square, Play } from 'lucide-react';

type ReadState = 'idle' | 'playing' | 'paused';
type Size = 'sm' | 'md' | 'lg';
type Variant = 'icon' | 'pill';

interface Props {
  text: string;
  lang?: 'en-IN' | 'hi-IN' | 'ur-PK' | 'en' | 'hi' | 'ur';
  size?: Size;
  variant?: Variant;
  className?: string;
  label?: string;
}

const iconSize: Record<Size, number> = { sm: 13, md: 15, lg: 18 };
const btnSize: Record<Size, string> = {
  sm: 'w-7 h-7',
  md: 'w-9 h-9',
  lg: 'w-11 h-11',
};

export default function ReadAloudButton({ text, lang = 'en-IN', size = 'md', variant = 'icon', className = '', label }: Props) {
  const [state, setState] = useState<ReadState>('idle');
  const [speed, setSpeed] = useState(1.0);
  const [showSpeed, setShowSpeed] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  const speedRef = useRef(speed);
  speedRef.current = speed;

  const resolvedLang = lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : lang === 'ur' ? 'ur-PK' : lang;

  useEffect(() => () => { window.speechSynthesis?.cancel(); }, []);

  // If text changes mid-read, stop
  useEffect(() => {
    if (state !== 'idle') { window.speechSynthesis?.cancel(); setState('idle'); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const play = useCallback(() => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = resolvedLang;
    u.rate = speedRef.current;
    u.pitch = 1;
    u.onstart  = () => setState('playing');
    u.onpause  = () => setState('paused');
    u.onresume = () => setState('playing');
    u.onend    = () => setState('idle');
    u.onerror  = () => setState('idle');
    utterRef.current = u;
    window.speechSynthesis.speak(u);
    setState('playing');
  }, [text, resolvedLang]);

  const toggle = () => {
    if (state === 'idle')    play();
    else if (state === 'playing') { window.speechSynthesis?.pause(); setState('paused'); }
    else { window.speechSynthesis?.resume(); setState('playing'); }
  };
  const stop = () => { window.speechSynthesis?.cancel(); setState('idle'); };

  const Icon = state === 'playing' ? Pause : state === 'paused' ? Play : Volume2;
  const isz = iconSize[size];
  const isSpeaking = state !== 'idle';

  if (variant === 'pill') {
    return (
      <div className={`relative flex items-center gap-1.5 ${className}`}>
        <button
          onClick={toggle}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-150"
          style={{
            background: isSpeaking ? 'color-mix(in srgb, var(--accent-saffron) 10%, var(--bg-secondary))' : 'var(--bg-secondary)',
            border: `1px solid ${isSpeaking ? 'var(--accent-saffron)' : 'var(--border-default)'}`,
            color: isSpeaking ? 'var(--accent-saffron)' : 'var(--text-muted)',
          }}
          title={state === 'idle' ? 'Read aloud' : state === 'playing' ? 'Pause' : 'Resume'}
        >
          <Icon size={isz} />
          <span>{label ?? (state === 'idle' ? 'Read aloud' : state === 'playing' ? 'Pause' : 'Resume')}</span>
        </button>
        {isSpeaking && (
          <button
            onClick={stop}
            className="flex items-center justify-center w-7 h-7 rounded-full border transition-all"
            style={{ border: '1px solid var(--border-default)', color: 'var(--text-muted)' }}
            title="Stop"
          >
            <Square size={11} />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <button
        onClick={toggle}
        onContextMenu={e => { e.preventDefault(); setShowSpeed(v => !v); }}
        className={`flex items-center justify-center rounded-full border transition-all duration-150 hover:scale-105 active:scale-95 ${btnSize[size]}`}
        style={{
          background: isSpeaking ? 'color-mix(in srgb, var(--accent-saffron) 10%, var(--bg-secondary))' : 'var(--bg-secondary)',
          border: `1px solid ${isSpeaking ? 'var(--accent-saffron)' : 'var(--border-default)'}`,
          color: isSpeaking ? 'var(--accent-saffron)' : 'var(--text-muted)',
        }}
        title={state === 'idle' ? 'Read aloud (right-click for speed)' : state === 'playing' ? 'Pause' : 'Resume'}
      >
        <Icon size={isz} />
      </button>

      {showSpeed && (
        <div
          className="absolute top-full right-0 mt-1 z-50 rounded-xl p-1.5 shadow-lg"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-default)', minWidth: 70 }}
        >
          {[0.75, 0.9, 1.0, 1.25, 1.5].map(s => (
            <button
              key={s}
              onClick={() => { setSpeed(s); setShowSpeed(false); }}
              className="w-full px-3 py-1 rounded-lg text-xs text-left transition-colors"
              style={{
                background: speed === s ? 'var(--bg-tertiary)' : 'transparent',
                color: speed === s ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: speed === s ? 600 : 400,
              }}
            >
              {s}×
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
