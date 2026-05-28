'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import MoodPulse from '@/components/shared/MoodPulse';
import ScriptToggle from '@/components/shared/ScriptToggle';
import { useUser } from '@/components/providers/UserProvider';
import { useTheme } from '@/components/providers/ThemeProvider';

const TOTAL_STEPS = 4;

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState<number>(3);
  const [script, setScript] = useState<'devanagari' | 'roman'>('devanagari');
  const [welcomed, setWelcomed] = useState(false);
  const { user, updatePreferences } = useUser();
  const { setTheme } = useTheme();
  const router = useRouter();

  const name = user?.name || 'friend';

  const finish = async () => {
    await updatePreferences({ script, theme: 'day' });
    setWelcomed(true);
    setTimeout(() => router.push('/aarambh'), 2800);
  };

  if (welcomed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <motion.div
          className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-4xl font-bold"
          style={{ background: 'var(--accent-saffron)', boxShadow: '0 12px 40px rgba(196,135,58,0.4)' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          प्र
        </motion.div>
        <motion.h1
          className="font-serif text-4xl"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: 'normal' }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Pravah
        </motion.h1>
        <motion.p
          className="font-devanagari text-lg"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          प्रवाह शुरू होता है
        </motion.p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md px-6 py-12">
      {/* Progress bar */}
      <div className="flex gap-1 mb-10">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full transition-all duration-500"
            style={{ background: i < step ? 'var(--accent-saffron)' : 'var(--border-default)' }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="space-y-6"
        >
          {/* Step 1: Welcome */}
          {step === 1 && (
            <div className="text-center space-y-4">
              <div className="text-5xl">🌅</div>
              <h2 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>
                Welcome, {name}.
              </h2>
              <p style={{ color: 'var(--text-secondary)' }} className="text-lg leading-relaxed">
                Pravah is your daily sanctuary. A space to learn, feel, and grow - beautifully.
              </p>
              <p className="font-devanagari text-sm" style={{ color: 'var(--text-muted)' }}>
                यह आपका एक नया अध्याय है।
              </p>
            </div>
          )}

          {/* Step 2: Mood */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>
                  How do you feel right now?
                </h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  No judgment. Just honesty.
                </p>
              </div>
              <MoodPulse value={mood} onChange={setMood} />
            </div>
          )}

          {/* Step 3: Script preference */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>
                  Choose your script
                </h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Hindi content will appear in your preferred form.
                </p>
              </div>
              <ScriptToggle value={script} onChange={setScript} />
              {/* Live preview */}
              <div
                className="p-4 rounded-xl"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-default)' }}
              >
                {script === 'devanagari' ? (
                  <p className="font-devanagari text-lg text-center" style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>
                    जो बीत गई सो बात गई
                  </p>
                ) : (
                  <p className="font-serif italic text-lg text-center" style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>
                    Jo beet gayi so baat gayi
                  </p>
                )}
                <p className="text-xs text-center mt-1" style={{ color: 'var(--text-muted)' }}>- Harivansh Rai Bachchan</p>
              </div>
            </div>
          )}

          {/* Step 4: Ready */}
          {step === 4 && (
            <div className="text-center space-y-4">
              <div className="text-5xl">🌿</div>
              <h2 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>
                You&apos;re ready, {name}.
              </h2>
              <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
                Every day, Pravah will bring you beauty, depth, and a little bit of wonder.
              </p>
              <p className="font-devanagari text-sm" style={{ color: 'var(--text-muted)' }}>
                हर दिन एक नई शुरुआत।
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10">
        <button
          onClick={() => setStep(s => Math.max(1, s - 1))}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all"
          style={{
            color: step === 1 ? 'var(--text-faint)' : 'var(--text-secondary)',
            background: step === 1 ? 'transparent' : 'var(--bg-secondary)',
            border: `1px solid ${step === 1 ? 'transparent' : 'var(--border-default)'}`,
            pointerEvents: step === 1 ? 'none' : 'auto',
          }}
        >
          <ArrowLeft size={14} /> Back
        </button>
        <button
          onClick={() => step === TOTAL_STEPS ? finish() : setStep(s => s + 1)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm text-white transition-all"
          style={{
            background: 'var(--accent-saffron)',
            boxShadow: '0 4px 16px rgba(196,135,58,0.3)',
          }}
        >
          {step === TOTAL_STEPS ? 'Begin Pravah' : 'Continue'}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
