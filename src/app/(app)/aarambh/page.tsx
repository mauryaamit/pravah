'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { db } from '@/lib/firebase/client';
import { doc, onSnapshot, setDoc, serverTimestamp } from 'firebase/firestore';
import { toDateString } from '@/lib/utils/date';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useMoods } from '@/lib/hooks/useMoods';
import { useStreak } from '@/lib/hooks/useStreak';
import { Check, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { speak } from '@/lib/utils/tts';
import Link from 'next/link';
import BreathingOrb from '@/components/shared/BreathingOrb';
import MoodPulse from '@/components/shared/MoodPulse';
import ScriptToggle from '@/components/shared/ScriptToggle';
import PageTransition from '@/components/layout/PageTransition';
import DiscoveryCard from '@/app/(app)/aarambh/components/DiscoveryCard';
import GrowthWhisper, { recordRoomVisit } from '@/components/shared/GrowthWhisper';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import { useUser } from '@/components/providers/UserProvider';
import { useMood } from '@/components/providers/MoodProvider';
import { getTimeGreeting, getDayOfYear, formatHindiDate } from '@/lib/utils/date';
import { ROOMS } from '@/lib/constants/rooms';
import { cn } from '@/lib/utils/cn';
import { STAGGER_CONTAINER, STAGGER_ITEM, SLOW_REVEAL } from '@/lib/utils/motion';

const FALLBACK_MANTRAS = [
  { hi: 'जो बीत गई सो बात गई', en: 'What has passed, let it pass.' },
  { hi: 'हर दिन एक नया अवसर है', en: 'Every day is a new opportunity.' },
  { hi: 'शांत मन सब जान लेता है', en: 'A calm mind knows all.' },
  { hi: 'जिज्ञासा ही जीवन है', en: 'Curiosity is life itself.' },
  { hi: 'धीरे चलो, दूर जाओ', en: 'Walk slowly, go far.' },
];

const FALLBACK_CHALLENGES = [
  'Step outside for 10 minutes. Feel the air, not the screen.',
  'Write three things you noticed today.',
  'Read one poem before you sleep tonight.',
  'Drink a glass of water slowly, like it matters.',
  'Tell someone something you appreciate about them.',
  'Sit in silence for five minutes. Just sit.',
  'Learn one new word. Use it before the day ends.',
  'Watch the sky for three minutes without purpose.',
];

export default function AarambhPage() {
  const { user } = useUser();
  const { mood: moodLevel, profile: moodProfile, setMood: setMoodInProvider } = useMood();
  const [mood, setMood] = useState<number>(moodLevel);
  const [intention, setIntention] = useState('');
  const [intentionSaveStatus, setIntentionSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const intentionRef = useRef<HTMLDivElement>(null);
  const intentionTimer = useRef<ReturnType<typeof setTimeout>>();
  const [challengeDone, setChallengeDone] = useState(false);
  const [showBreathing, setShowBreathing] = useState(false);
  const [script, setScript] = useState<'devanagari' | 'roman'>('devanagari');

  // Breathing overlay states
  const [phase, setPhase] = useState<'idle' | 'inhale' | 'hold' | 'exhale'>('idle');
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [cycleCount, setCycleCount] = useState(1);
  const [isVoiceMuted, setIsVoiceMuted] = useState(false);

  const isOpenRef = useRef(false);
  const isVoiceMutedRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Sync showBreathing with isOpenRef and clear timers on close
  useEffect(() => {
    isOpenRef.current = showBreathing;
    if (!showBreathing) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
      setPhase('idle');
      setElapsedSeconds(0);
      setCycleCount(1);
    }
  }, [showBreathing]);

  // Sync isVoiceMuted with ref
  useEffect(() => {
    isVoiceMutedRef.current = isVoiceMuted;
  }, [isVoiceMuted]);

  // Clean up all voice synthesis and timeouts on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const runBreathingCycle = useCallback(() => {
    if (!isOpenRef.current) return;

    const wait = (ms: number) => new Promise<void>(resolve => {
      const timer = setTimeout(resolve, ms);
      timersRef.current.push(timer);
    });

    const speakGuidance = (phrase: string, pitch: number, rate: number) => {
      if (isVoiceMutedRef.current) return;
      speak(phrase, { rate, pitch, lang: 'en-IN', volume: 0.9 });
    };

    const run = async () => {
      let currentCycle = 1;
      while (isOpenRef.current) {
        setCycleCount(currentCycle);

        // 1. INHALE — 4 seconds
        setPhase('inhale');
        setElapsedSeconds(0);
        speakGuidance("Breathe in...", 0.75, 0.55);

        for (let s = 1; s <= 4; s++) {
          await wait(1000);
          if (!isOpenRef.current) return;
          setElapsedSeconds(s);
        }

        // 2. HOLD — 4 seconds
        setPhase('hold');
        setElapsedSeconds(0);
        speakGuidance("Hold...", 0.70, 0.5);

        for (let s = 1; s <= 4; s++) {
          await wait(1000);
          if (!isOpenRef.current) return;
          setElapsedSeconds(s);
        }

        // 3. EXHALE — 4 seconds
        setPhase('exhale');
        setElapsedSeconds(0);
        speakGuidance("Release...", 0.68, 0.5);

        for (let s = 1; s <= 4; s++) {
          await wait(1000);
          if (!isOpenRef.current) return;
          setElapsedSeconds(s);
        }

        // 4. Brief pause between cycles — 1 second silence
        setPhase('idle');
        setElapsedSeconds(0);
        await wait(1000);
        if (!isOpenRef.current) return;

        currentCycle++;
      }
    };

    run();
  }, []);

  useEffect(() => {
    if (showBreathing) {
      runBreathingCycle();
    }
  }, [showBreathing, runBreathingCycle]);

  const greeting = getTimeGreeting();
  const dayOfYear = getDayOfYear();
  const today = formatHindiDate();

  // Record visit for identity system
  useEffect(() => {
    recordRoomVisit('aarambh');
  }, []);

  // Sync mood with provider
  useEffect(() => {
    setMood(moodLevel);
  }, [moodLevel]);

  // Real-time listener for today's intention
  useEffect(() => {
    if (!user || !db) return;
    const todayStr = toDateString(new Date());
    const docRef = doc(db, `users/${user.id}/intentions`, todayStr);

    const unsub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const val = data.intention || '';
        setIntention(val);
        // Sync text in editor if not currently focused to avoid cursor jumping
        if (intentionRef.current && document.activeElement !== intentionRef.current) {
          intentionRef.current.innerText = val;
        }
      } else {
        setIntention('');
        if (intentionRef.current && document.activeElement !== intentionRef.current) {
          intentionRef.current.innerText = '';
        }
      }
    }, (err) => {
      console.error('Failed to stream daily intention:', err);
    });

    return () => {
      unsub();
      clearTimeout(intentionTimer.current);
    };
  }, [user]);

  const saveIntentionToFirestore = useCallback(async (text: string) => {
    if (!user || !db) return;
    const todayStr = toDateString(new Date());
    const docRef = doc(db, `users/${user.id}/intentions`, todayStr);
    setIntentionSaveStatus('saving');
    try {
      await setDoc(docRef, {
        intention: text,
        date: todayStr,
        updatedAt: serverTimestamp(),
      }, { merge: true });
      setIntentionSaveStatus('saved');
    } catch (err) {
      console.error('Failed to save intention:', err);
      setIntentionSaveStatus('idle');
    }
  }, [user]);

  const handleIntentionChange = (text: string) => {
    setIntention(text);
    setIntentionSaveStatus('saving');
    clearTimeout(intentionTimer.current);
    intentionTimer.current = setTimeout(() => {
      saveIntentionToFirestore(text);
    }, 1500); // 1.5s debounce
  };

  const { data: mantraData } = useQuery({
    queryKey: ['daily', 'aarambh', 'mantra'],
    queryFn: async () => {
      try {
        const r = await fetch('/api/content/aarambh?type=mantra&lang=hi');
        if (!r.ok) throw new Error('not found');
        return r.json();
      } catch {
        return FALLBACK_MANTRAS[dayOfYear % FALLBACK_MANTRAS.length];
      }
    },
  });

  const { moods: moodHistory = [], saveMood: executeSaveMood } = useMoods();
  const { streak: streakData } = useStreak();

  const handleMood = (m: number) => {
    setMood(m);
    setMoodInProvider(m);
    executeSaveMood(m);
  };

  const challengeText = FALLBACK_CHALLENGES[dayOfYear % FALLBACK_CHALLENGES.length];
  const mantra = mantraData || FALLBACK_MANTRAS[dayOfYear % FALLBACK_MANTRAS.length];

  // Use mood-aware room order from moodProfile
  const quickRoomIds = moodProfile.roomEmphasis.slice(0, 6);

  // Mood-driven CSS filter on content
  const moodFilter = moodProfile.cssFilter !== 'none' ? moodProfile.cssFilter : undefined;

  return (
    <PageTransition>
      <div
        className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-7"
        style={moodFilter ? { filter: moodFilter, transition: 'filter 1.2s ease' } : undefined}
      >

        {/* Hero: greeting + orb */}
        <motion.section
          variants={SLOW_REVEAL}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center gap-5 pt-2"
        >
          <BreathingOrb size={130} mood={mood} onClick={() => setShowBreathing(true)} />
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
              {greeting.hi}, {user?.name || 'friend'}.
            </h1>
            <p className="text-sm mt-1.5 font-devanagari" style={{ color: 'var(--text-muted)' }}>
              {today}
            </p>
            {streakData?.current_streak > 0 && (
              <p className="text-xs mt-1" style={{ color: 'var(--text-faint)' }}>
                Day {streakData.current_streak} of your practice
              </p>
            )}
          </div>
        </motion.section>

        {/* Mood pulse */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 0.1, 0.36, 1] }}
          className="card-base p-6 space-y-3"
        >
          <h2 className="section-label">How are you feeling?</h2>
          <MoodPulse value={mood} onChange={handleMood} history={moodHistory} />
          {/* Mood whisper from engine */}
          <AnimatePresence mode="wait">
            <motion.p
              key={mood}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-serif italic"
              style={{ color: 'var(--text-faint)' }}
            >
              {moodProfile.whisper}
            </motion.p>
          </AnimatePresence>
        </motion.section>

        {/* Today's intention */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 0.1, 0.36, 1] }}
          className="card-base p-6 space-y-3"
        >
          <div className="flex justify-between items-center">
            <h2 className="section-label">Today&apos;s Intention</h2>
            {intentionSaveStatus === 'saving' && <span className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">Saving...</span>}
            {intentionSaveStatus === 'saved' && <span className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">Saved ✓</span>}
          </div>
          <div
            ref={intentionRef}
            className="journal-editor w-full min-h-[52px] outline-none"
            contentEditable
            suppressContentEditableWarning
            data-placeholder="What matters most today..."
            onInput={e => handleIntentionChange((e.target as HTMLElement).innerText)}
            style={{ color: 'var(--text-primary)' }}
          />
          {!intention && (
            <p className="text-sm font-serif italic" style={{ color: 'var(--text-faint)' }}>
              Suggested: &ldquo;Today I choose presence over perfection.&rdquo;
            </p>
          )}
        </motion.section>

        {/* Daily Discovery (the soul of the app) */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 0.1, 0.36, 1] }}
          className="space-y-2"
        >
          <h2 className="section-label px-1">Today&apos;s Discovery</h2>
          <DiscoveryCard />
        </motion.section>

        {/* Micro challenge */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 0.1, 0.36, 1] }}
          className="card-base p-6 flex items-start gap-4"
          style={{ borderColor: challengeDone ? 'var(--accent-moss)' : undefined }}
        >
          <button
            onClick={() => setChallengeDone(d => !d)}
            className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all mt-0.5"
            style={{
              borderColor: challengeDone ? 'var(--accent-moss)' : 'var(--border-strong)',
              background: challengeDone ? 'var(--accent-moss)' : 'transparent',
              color: 'white',
            }}
          >
            {challengeDone && <Check size={13} />}
          </button>
          <div>
            <div className="flex items-center justify-between gap-2 mb-1 w-full">
              <p className="section-label">
                {moodProfile.challengeIntensity === 'light' ? 'Gentle Nudge' : 'Today\'s Challenge'}
              </p>
              <ReadAloudButton text={challengeText} lang="en-IN" size="sm" />
            </div>
            <p className="leading-relaxed text-base"
              style={{
                color: challengeDone ? 'var(--text-muted)' : 'var(--text-primary)',
                textDecoration: challengeDone ? 'line-through' : 'none',
                fontFamily: "'Merriweather', Georgia, serif",
                fontWeight: 300,
              }}>
              {challengeText}
            </p>
          </div>
        </motion.section>

        {/* Daily mantra */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65, ease: [0.22, 0.1, 0.36, 1] }}
          className="card-base p-7 text-center space-y-4 relative overflow-hidden"
          style={{ background: 'color-mix(in srgb, var(--accent-saffron) 5%, var(--bg-secondary))' }}
        >
          {/* Water lilies background at 6% opacity */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: 'url(/paintings/water-lilies.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative z-10 flex items-center justify-between mb-1">
            <p className="section-label">Daily Mantra</p>
            <div className="flex items-center gap-2">
              <ReadAloudButton
                text={script === 'devanagari' ? (mantra.hi || mantra.body) : (mantra.en || mantra.body)}
                lang={script === 'devanagari' ? 'hi-IN' : 'en-IN'}
                size="sm"
              />
              <ScriptToggle value={script} onChange={setScript} />
            </div>
          </div>
          <p
            className={cn(
              "relative z-10",
              script === 'devanagari' ? 'mantra-devanagari font-devanagari' : 'mantra-text font-serif italic'
            )}
            style={{ color: 'var(--text-primary)' }}
          >
            {script === 'devanagari' ? (mantra.hi || mantra.body) : (mantra.en || mantra.body)}
          </p>
        </motion.section>

        {/* Mood-aware quick rooms */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.75, ease: [0.22, 0.1, 0.36, 1] }}
          className="space-y-3"
        >
          <div className="relative py-4 px-3 rounded-xl overflow-hidden mb-1">
            {/* Starry night banner background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]"
              style={{
                backgroundImage: 'url(/paintings/starry-night.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%',
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-[var(--bg-secondary)]" />
            <h2 className="section-label relative z-10 px-1">Today in Pravah</h2>
          </div>
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            animate="animate"
            className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar"
          >
            {quickRoomIds.map(roomId => {
              const room = ROOMS.find(r => r.id === roomId);
              if (!room) return null;
              return (
                <motion.div key={roomId} variants={STAGGER_ITEM}>
                  <Link href={room.route}>
                    <motion.div
                      whileHover={{ y: -3, transition: { duration: 0.22 } }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-shrink-0 w-40 p-4 rounded-xl cursor-pointer"
                      style={{
                        background: `color-mix(in srgb, ${room.colorHex} 10%, var(--bg-secondary))`,
                        border: `1px solid color-mix(in srgb, ${room.colorHex} 22%, transparent)`,
                      }}
                    >
                      <div className="text-xl mb-2">{room.emoji}</div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: room.colorHex }}>
                        {room.name}
                      </div>
                      <div className="text-xs leading-snug" style={{ color: 'var(--text-muted)' }}>
                        {room.description}
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Growth Whisper - identity system */}
        <GrowthWhisper />

      </div>

      {/* Breathing modal */}
      <AnimatePresence>
        {showBreathing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 min-h-screen overflow-y-auto"
            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(12px)' }}
            onClick={() => setShowBreathing(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 0.1, 0.36, 1] }}
              className="text-center space-y-6 p-8 relative max-w-sm w-full"
              onClick={e => e.stopPropagation()}
            >
              <BreathingOrb size={210} mood={mood} phase={phase} />
              
              <div className="h-10 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={phase}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="font-serif text-2xl text-white text-center"
                  >
                    {phase === 'inhale' ? 'Breathe in...' :
                     phase === 'hold' ? 'Hold...' :
                     phase === 'exhale' ? 'Release...' :
                     'Breathe with me'}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Progress countdown dots */}
              <div className="flex justify-center gap-2 mt-4" style={{ height: '24px' }}>
                {phase !== 'idle' && [1, 2, 3, 4].map(dotIndex => (
                  <span
                    key={dotIndex}
                    className="text-lg transition-all duration-300 select-none"
                    style={{
                      color: dotIndex <= elapsedSeconds ? 'white' : 'rgba(255,255,255,0.25)',
                    }}
                  >
                    ●
                  </span>
                ))}
              </div>

              <button
                onClick={() => setShowBreathing(false)}
                className="text-white/40 text-xs hover:text-white/70 transition-colors mt-8 select-none"
              >
                Tap anywhere to close
              </button>

              {/* Bottom-left cycle count */}
              <div className="absolute bottom-6 left-6 z-10 text-xs text-white/60 select-none">
                Cycle {cycleCount}
              </div>

              {/* Bottom-right mute toggle */}
              <button
                onClick={() => setIsVoiceMuted(prev => !prev)}
                className="absolute bottom-6 right-6 z-10 w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white/90 hover:bg-white/10 transition-all"
                style={{ background: 'rgba(255,255,255,0.05)' }}
                title={isVoiceMuted ? 'Unmute voice guidance' : 'Mute voice guidance'}
              >
                {isVoiceMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
