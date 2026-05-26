'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
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

// ── Devanagari name transliteration (Latin → Devanagari approximation)
const DEVANAGARI_MAP: Record<string, string> = {
  a: 'अ', A: 'आ', aa: 'आ', i: 'इ', I: 'ई', ii: 'ई',
  u: 'उ', U: 'ऊ', uu: 'ऊ', e: 'ए', ai: 'ऐ', o: 'ओ', au: 'औ',
  b: 'ब', c: 'क', ch: 'च', d: 'द', f: 'फ', g: 'ग', h: 'ह',
  j: 'ज', k: 'क', l: 'ल', m: 'म', n: 'न', p: 'प', q: 'क',
  r: 'र', s: 'स', sh: 'श', t: 'त', th: 'थ', v: 'व', w: 'व',
  x: 'क्ष', y: 'य', z: 'ज़',
};

// Common name mappings for accurate transliteration
const NAME_MAP: Record<string, string> = {
  amit: 'अमित', amita: 'अमिता', anita: 'अनिता', arun: 'अरुण',
  aryan: 'आर्यन', arjun: 'अर्जुन', asha: 'आशा', ayaan: 'अयान',
  deepak: 'दीपक', dev: 'देव', divya: 'दिव्या', gaurav: 'गौरव',
  ishaan: 'ईशान', kavya: 'काव्या', kiran: 'किरण', krishna: 'कृष्ण',
  manav: 'मानव', meera: 'मीरा', mohan: 'मोहन', naina: 'नैना',
  naveen: 'नवीन', neha: 'नेहा', nikhil: 'निखिल', nina: 'नीना',
  pooja: 'पूजा', puja: 'पूजा', priya: 'प्रिया', rahul: 'राहुल',
  raj: 'राज', rajesh: 'राजेश', ravi: 'रवि', riya: 'रिया',
  rohit: 'रोहित', sachin: 'सचिन', sahil: 'साहिल', samir: 'समीर',
  sanjay: 'संजय', sara: 'सारा', sarah: 'सारा', shiv: 'शिव',
  shreya: 'श्रेया', shruti: 'श्रुति', siddharth: 'सिद्धार्थ',
  simran: 'सिमरन', sneha: 'स्नेहा', soham: 'सोहम', suresh: 'सुरेश',
  tanvi: 'तन्वी', tarun: 'तरुण', tanya: 'तान्या', uday: 'उदय',
  vikas: 'विकास', vikram: 'विक्रम', vinay: 'विलय', vishal: 'विशाल',
  yash: 'यश', zara: 'ज़ारा',
};

function getDevanagariName(name?: string): React.ReactNode {
  if (!name || typeof name !== 'string') return 'मित्र';
  const lower = name.trim().toLowerCase();
  const devName = NAME_MAP[lower];
  if (devName) {
    return (
      <span>
        <span className="font-devanagari">{devName}</span>
        <span className="text-[0.8em] opacity-70 ml-1.5 not-italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>({name})</span>
      </span>
    );
  }
  // Fallback: just show name as-is (no Devanagari for unknown names)
  return name;
}

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
      speak(phrase, { rate, pitch, lang: 'en-IN', volume: 0.9, preferWarm: true });
    };

    const run = async () => {
      let currentCycle = 1;
      while (isOpenRef.current) {
        setCycleCount(currentCycle);

        // 1. INHALE — 4 seconds
        setPhase('inhale');
        setElapsedSeconds(0);
        speakGuidance("Breathe in...", 0.72, 0.52);

        for (let s = 1; s <= 4; s++) {
          await wait(1000);
          if (!isOpenRef.current) return;
          setElapsedSeconds(s);
        }

        // 2. HOLD — 4 seconds
        setPhase('hold');
        setElapsedSeconds(0);
        speakGuidance("Hold...", 0.72, 0.52);

        for (let s = 1; s <= 4; s++) {
          await wait(1000);
          if (!isOpenRef.current) return;
          setElapsedSeconds(s);
        }

        // 3. EXHALE — 4 seconds
        setPhase('exhale');
        setElapsedSeconds(0);
        speakGuidance("Let go...", 0.72, 0.52);

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

  // Moon phase calculation
  const getMoonPhase = () => {
    const refNewMoon = new Date('2024-01-11T11:57:00Z').getTime();
    const now = new Date().getTime();
    const diffMs = now - refNewMoon;
    const synodicPeriod = 29.530588853 * 24 * 60 * 60 * 1000;
    const cyclePosition = (diffMs % synodicPeriod) / synodicPeriod; // 0 to 1
    
    if (cyclePosition < 0.03 || cyclePosition > 0.97) return { emoji: '🌑', name: 'New Moon (Amavasya)' };
    if (cyclePosition < 0.22) return { emoji: '🌒', name: 'Waxing Crescent' };
    if (cyclePosition < 0.28) return { emoji: '🌓', name: 'First Quarter' };
    if (cyclePosition < 0.47) return { emoji: '🌔', name: 'Waxing Gibbous' };
    if (cyclePosition < 0.53) return { emoji: '🌕', name: 'Full Moon (Purnima)' };
    if (cyclePosition < 0.72) return { emoji: '🌖', name: 'Waning Gibbous' };
    if (cyclePosition < 0.78) return { emoji: '🌗', name: 'Last Quarter' };
    return { emoji: '🌘', name: 'Waning Crescent' };
  };

  const getIndianSeason = () => {
    const date = new Date();
    const m = date.getMonth();
    const d = date.getDate();
    const dayOfYearApprox = m * 30 + d;
    
    if (dayOfYearApprox >= 45 && dayOfYearApprox < 105) {
      return { name: 'Vasanta', hindi: 'वसन्त', description: 'Spring & Renewal' };
    } else if (dayOfYearApprox >= 105 && dayOfYearApprox < 165) {
      return { name: 'Grishma', hindi: 'ग्रीष्म', description: 'Summer & Intensity' };
    } else if (dayOfYearApprox >= 165 && dayOfYearApprox < 225) {
      return { name: 'Varsha', hindi: 'वर्षा', description: 'Monsoon & Rebirth' };
    } else if (dayOfYearApprox >= 225 && dayOfYearApprox < 285) {
      return { name: 'Sharad', hindi: 'शरद', description: 'Autumn & Clarity' };
    } else if (dayOfYearApprox >= 285 && dayOfYearApprox < 345) {
      return { name: 'Hemanta', hindi: 'हेमन्त', description: 'Pre-Winter & Harvest' };
    } else {
      return { name: 'Shishira', hindi: 'शिशिर', description: 'Winter & Reflection' };
    }
  };

  const getPoeticGreeting = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 1 = Mon, etc.
    const hour = now.getHours();
    const month = now.getMonth(); // 0 = Jan, 5 = June, 8 = Sept
    
    if (month >= 5 && month <= 8) {
      return "The monsoon is generous with second chances.";
    }
    if (day === 1 && hour >= 5 && hour < 12) {
      return "A new week is an unwritten page. Begin gently.";
    }
    if (day === 5 && hour >= 17) {
      return "The week has shaped you. Rest in what you've learned.";
    }
    
    const fallbacks = [
      "Find your center in the stillness between thoughts.",
      "Walk slowly. The destination is already here.",
      "Every breath is an invitation to begin again.",
      "Look closely; the ordinary is full of wonders.",
      "What you seek is also seeking you.",
      "Let the mind settle, like silt in quiet water.",
      "You are a guest in this moment. Receive it well."
    ];
    return fallbacks[dayOfYear % fallbacks.length];
  };

  const moonPhase = getMoonPhase();
  const season = getIndianSeason();
  const poeticGreeting = getPoeticGreeting();

  const SPARKS = [
    { room: 'Sukoon (Poetry)', route: '/sukoon', text: '\u201CHazaron khwahishen aisi ke har khwahish pe dam nikle...\u201D \u2014 Mirza Ghalib' },
    { room: 'Bodh (Mental Models)', route: '/bodh', text: '\u201CFirst Principles: Boil things down to their fundamental truths and reason up from there.\u201D' },
    { room: 'Darshan (Philosophy)', route: '/darshan', text: '\u201CWe suffer more often in imagination than in reality.\u201D \u2014 Seneca' },
    { room: 'Srot (Deep Reads)', route: '/srot', text: '\u201CIn a world of constant speed, slow reading is the ultimate act of cognitive rebellion.\u201D' },
    { room: 'Samvaad (Word of the Day)', route: '/samvaad', text: '\u201CSaudade: The bittersweet feeling of longing for someone or something that is absent.\u201D' },
    { room: 'Riyaz (Music)', route: '/riyaz', text: '\u201CRaga Yaman is sung at dusk, painting a landscape of peaceful devotion and quiet grace.\u201D' },
    { room: 'Cosmos (Universe)', route: '/cosmos', text: '\u201CWe are a way for the cosmos to know itself. The nitrogen in our DNA was made in the hearts of collapsing stars.\u201D \u2014 Carl Sagan' },
    { room: 'Neelakurinji (Wonders)', route: '/neelakurinji', text: '\u201CThe Mpemba Effect: Under certain conditions, warm water freezes faster than cold water.\u201D' },
    { room: 'Kathakar (Stories)', route: '/kathakar', text: '\u201CA story is a container for truth. It allows us to experience another life without leaving our own.\u201D' },
    { room: 'Vibhav (People)', route: '/vibhav', text: '\u201CPandit Ravi Shankar did not just play music; he built a bridge of sound between East and West.\u201D' },
  ];

  // Quick Entry States
  const [quickEntry, setQuickEntry] = useState('');
  const [quickEntryStatus, setQuickEntryStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const quickEntryTimer = useRef<ReturnType<typeof setTimeout>>();

  // Load today's quick entry (Free Write content)
  useEffect(() => {
    if (!user || !db) return;
    const todayStr = toDateString(new Date());
    const docRef = doc(db, `users/${user.id}/journalEntries`, todayStr);
    const unsub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.mode === 'freewrite' || !data.mode) {
          if (document.activeElement?.id !== 'quick-entry-input') {
            setQuickEntry(data.content || '');
          }
        }
      }
    }, (err) => {
      console.error("Failed to load quick entry:", err);
    });
    return () => {
      unsub();
      clearTimeout(quickEntryTimer.current);
    };
  }, [user]);

  const saveQuickEntry = async (text: string) => {
    if (!user || !db) return;
    const todayStr = toDateString(new Date());
    const docRef = doc(db, `users/${user.id}/journalEntries`, todayStr);
    setQuickEntryStatus('saving');
    const wc = text.trim().split(/\s+/).filter(Boolean).length;
    try {
      await setDoc(docRef, {
        content: text,
        word_count: wc,
        mode: 'freewrite',
        updatedAt: serverTimestamp(),
      }, { merge: true });
      setQuickEntryStatus('saved');
    } catch (err) {
      console.error('Failed to save quick entry:', err);
      setQuickEntryStatus('idle');
    }
  };

  const handleQuickEntryChange = (text: string) => {
    setQuickEntry(text);
    setQuickEntryStatus('saving');
    clearTimeout(quickEntryTimer.current);
    quickEntryTimer.current = setTimeout(() => {
      saveQuickEntry(text);
    }, 1500);
  };

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
              {greeting.hi}, {getDevanagariName(user?.name)}.
            </h1>
            <p className="text-sm font-serif italic max-w-md mx-auto mt-2 text-text-secondary" style={{ color: 'var(--text-secondary)' }}>
              &ldquo;{poeticGreeting}&rdquo;
            </p>
            <p className="text-sm mt-2.5 font-devanagari flex flex-wrap items-center justify-center gap-2" style={{ color: 'var(--text-muted)' }}>
              <span>{today}</span>
              <span>•</span>
              <span title="Current Moon Phase" className="flex items-center gap-0.5">{moonPhase.emoji} {moonPhase.name}</span>
              <span>•</span>
              <span className="font-semibold text-amber-700/80 dark:text-amber-500/80" title="Indian Season (Ritu)">
                {season.hindi} ({season.name} - {season.description})
              </span>
            </p>
            {streakData?.current_streak > 0 && (
              <p className="text-xs mt-1.5" style={{ color: 'var(--text-faint)' }}>
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

        {/* Quick Entry */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.40, ease: [0.22, 0.1, 0.36, 1] }}
          className="card-base p-6 space-y-3"
        >
          <div className="flex justify-between items-center">
            <h2 className="section-label">Quick Entry (Free Write)</h2>
            {quickEntryStatus === 'saving' && <span className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">Saving...</span>}
            {quickEntryStatus === 'saved' && <span className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">Saved to Journal ✓</span>}
          </div>
          <textarea
            id="quick-entry-input"
            value={quickEntry}
            onChange={e => handleQuickEntryChange(e.target.value)}
            placeholder="One thought before you begin..."
            rows={2}
            className="w-full text-sm p-3 rounded-xl bg-bg-tertiary border border-border-default outline-none resize-none font-serif leading-relaxed text-text-primary focus:border-accent-saffron/40"
            style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', borderColor: 'var(--border-default)' }}
          />
        </motion.section>

        {/* Today's Spark */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42, ease: [0.22, 0.1, 0.36, 1] }}
        >
          <Link href={SPARKS[dayOfYear % SPARKS.length].route}>
            <div
              className="card-base p-5 border-l-4 transition-all hover:-translate-y-0.5 cursor-pointer relative overflow-hidden group"
              style={{
                borderColor: 'var(--accent-saffron)',
                background: 'color-mix(in srgb, var(--accent-saffron) 3%, var(--bg-secondary))'
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <span 
                  className="text-[10px] font-semibold tracking-wider uppercase text-amber-700/80 dark:text-amber-500/80"
                  style={{ fontFamily: 'var(--font-devanagari)' }}
                >
                  आज • TODAY&apos;S SPARK: {SPARKS[dayOfYear % SPARKS.length].room}
                </span>
                <span className="text-xs transition-transform group-hover:translate-x-1" style={{ color: 'var(--accent-saffron)' }}>
                  Enter Room {'\u2192'}
                </span>
              </div>
              <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                <span style={{ fontFamily: 'var(--font-serif)', quotes: 'auto' }}>
                  {SPARKS[dayOfYear % SPARKS.length].text}
                </span>
              </p>
            </div>
          </Link>
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
              script === 'devanagari' ? 'mantra-devanagari' : 'mantra-text font-serif italic'
            )}
            style={{ 
              color: 'var(--text-primary)',
              fontFamily: script === 'devanagari' ? 'var(--font-devanagari)' : undefined
            }}
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
              <BreathingOrb size={210} mood={mood} phase={phase} className="mx-auto" />
              
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
                     phase === 'exhale' ? 'Let go...' :
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
