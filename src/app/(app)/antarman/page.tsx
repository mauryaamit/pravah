'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useJournal } from '@/lib/hooks/useJournal';
import { BookOpen, Cloud, Star, ChevronLeft, ChevronRight, Feather } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import MoodPulse from '@/components/shared/MoodPulse';
import { useUser } from '@/components/providers/UserProvider';
import { toDateString, getDayOfYear } from '@/lib/utils/date';
import { cn } from '@/lib/utils/cn';

type Tab = 'write' | 'reflect' | 'calendar';

// Gratitude prompts rotation
const GRATITUDE_PROMPTS = [
  'Something that made you smile today',
  'A person who influenced you positively',
  'A simple pleasure you noticed',
  'Something about your body you are grateful for',
  'A challenge that taught you something',
];

export default function AntarmanPage() {
  const { user } = useUser();
  const [tab, setTab] = useState<Tab>('write');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState(3);
  const [gratitude, setGratitude] = useState(['', '', '']);
  const [learned, setLearned] = useState('');
  const [intention, setIntention] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout>>();
  const dayOfYear = getDayOfYear();

  // Fetch journal entries from Firestore hook
  const { todayEntry: entry, allEntries = [], saveEntry } = useJournal();

  useEffect(() => {
    if (entry) {
      setContent(entry.content || '');
      setMood(entry.mood || 3);
      setGratitude(entry.gratitude || ['', '', '']);
      setLearned(entry.learned || '');
      setIntention(entry.intention || '');
      setWordCount(entry.word_count || 0);
    }
  }, [entry]);

  // Auto-save via Firestore hook
  const save = useCallback(async (data: {
    content: string; mood: number; gratitude: string[]; learned: string; intention: string;
  }) => {
    await saveEntry(data);
    setSavedAt(new Date());
  }, [saveEntry]);

  const handleContentChange = (text: string) => {
    setContent(text);
    const wc = text.trim().split(/\s+/).filter(Boolean).length;
    setWordCount(wc);
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => save({ content: text, mood, gratitude, learned, intention }), 1500);
  };

  // Writing prompts
  const PROMPTS = [
    'What is weighing on your mind right now?',
    'What surprised you today?',
    'Describe a moment of beauty you noticed.',
    'What would your wiser future self say to you today?',
    `Gratitude prompt: ${GRATITUDE_PROMPTS[dayOfYear % GRATITUDE_PROMPTS.length]}`,
  ];
  const prompt = PROMPTS[dayOfYear % PROMPTS.length];

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ─── Header ─── */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>Antarman</h1>
            <p className="font-devanagari text-sm" style={{ color: 'var(--text-muted)' }}>अन्तर्मन — आपकी आंतरिक दुनिया</p>
          </div>
          {savedAt && (
            <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
              Saved {savedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
        </div>

        {/* ─── Tabs ─── */}
        <div className="flex gap-1 p-1 rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
          {(['write', 'reflect', 'calendar'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex-1 py-2 text-sm font-medium rounded-lg capitalize transition-all"
              style={{
                background: tab === t ? 'var(--bg-primary)' : 'transparent',
                color: tab === t ? 'var(--text-primary)' : 'var(--text-muted)',
                boxShadow: tab === t ? 'var(--shadow-sm)' : 'none',
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ─── Write Tab ─── */}
          {tab === 'write' && (
            <motion.div
              key="write"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Mood */}
              <div className="card-base p-4">
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>How are you feeling?</p>
                <MoodPulse value={mood} onChange={m => { setMood(m); }} />
              </div>

              {/* Main editor */}
              <div className="card-base p-5 space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Feather size={14} style={{ color: 'var(--text-muted)' }} />
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{toDateString()}</span>
                  </div>
                  <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
                    {wordCount} words
                  </span>
                </div>
                <div
                  className="journal-editor w-full min-h-[200px] outline-none leading-relaxed"
                  contentEditable
                  suppressContentEditableWarning
                  data-placeholder={`Begin writing... (${prompt})`}
                  dangerouslySetInnerHTML={entry ? undefined : { __html: '' }}
                  onInput={e => handleContentChange((e.target as HTMLElement).innerText)}
                  style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}
                />
                <div className="flex justify-end pt-2">
                  <ReadAloudButton text={content} lang="en" />
                </div>
              </div>

              {/* Gratitude prompts */}
              <div className="card-base p-5 space-y-3">
                <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Three Things I&apos;m Grateful For</p>
                {gratitude.map((g, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-sm" style={{ color: 'var(--text-faint)' }}>{i + 1}.</span>
                    <input
                      type="text"
                      value={g}
                      onChange={e => {
                        const next = [...gratitude];
                        next[i] = e.target.value;
                        setGratitude(next);
                      }}
                      placeholder={GRATITUDE_PROMPTS[i % GRATITUDE_PROMPTS.length]}
                      className="flex-1 bg-transparent outline-none text-sm"
                      style={{
                        color: 'var(--text-primary)',
                        borderBottom: '1px solid var(--border-default)',
                        paddingBottom: '4px',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Today I Learned + Tomorrow Intention */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card-base p-4 space-y-2">
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Today I Learned</p>
                  <textarea
                    value={learned}
                    onChange={e => setLearned(e.target.value)}
                    placeholder="Something new I discovered..."
                    rows={3}
                    className="w-full bg-transparent outline-none text-sm resize-none"
                    style={{ color: 'var(--text-primary)' }}
                  />
                </div>
                <div className="card-base p-4 space-y-2">
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Tomorrow&apos;s Intention</p>
                  <textarea
                    value={intention}
                    onChange={e => setIntention(e.target.value)}
                    placeholder="Tomorrow I will..."
                    rows={3}
                    className="w-full bg-transparent outline-none text-sm resize-none"
                    style={{ color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              {/* Save button */}
              <button
                onClick={() => save({ content, mood, gratitude, learned, intention })}
                className="w-full py-3 rounded-xl font-medium text-sm text-white transition-all"
                style={{
                  background: 'var(--room-antarman)',
                  boxShadow: '0 4px 16px rgba(107,139,122,0.3)',
                }}
              >
                Save Entry
              </button>
            </motion.div>
          )}

          {/* ─── Reflect Tab ─── */}
          {tab === 'reflect' && (
            <motion.div
              key="reflect"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="card-base p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Cloud size={16} style={{ color: 'var(--room-antarman)' }} />
                  <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>Today&apos;s Prompt</span>
                </div>
                <p className="font-serif text-lg italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{prompt}&rdquo;
                </p>
                <ReadAloudButton text={prompt} lang="en" />
              </div>

              {/* Streak encouragement */}
              <div className="card-base p-5 text-center space-y-2" style={{ background: 'color-mix(in srgb, var(--room-antarman) 8%, var(--bg-secondary))' }}>
                <div className="text-3xl">📖</div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Every word you write rewires your brain.</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Research shows journaling reduces cortisol and boosts emotional clarity.</p>
              </div>
            </motion.div>
          )}

          {/* ─── Calendar Tab ─── */}
          {tab === 'calendar' && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="card-base p-5">
                <p className="text-xs uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
                  {allEntries.length} entries written
                </p>
                <div className="flex flex-wrap gap-2">
                  {allEntries.map((e: any) => (
                    <div
                      key={e.date}
                      className="w-10 h-10 rounded-lg flex flex-col items-center justify-center text-xs cursor-pointer transition-all hover:scale-110"
                      style={{
                        background: `color-mix(in srgb, var(--room-antarman) ${Math.min(e.word_count / 5, 100)}%, var(--bg-tertiary))`,
                        border: '1px solid var(--border-default)',
                        color: 'var(--text-primary)',
                      }}
                      title={`${e.date} · ${e.word_count} words`}
                    >
                      <span>{new Date(e.date).getDate()}</span>
                    </div>
                  ))}
                </div>
                {allEntries.length === 0 && (
                  <p className="text-sm text-center py-4" style={{ color: 'var(--text-muted)' }}>
                    Start writing to see your journey appear here.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
