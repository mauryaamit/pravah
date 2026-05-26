'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { db } from '@/lib/firebase/client';
import { collection, onSnapshot, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { useJournal, JournalEntry } from '@/lib/hooks/useJournal';
import { useTodos, TodoTask } from '@/lib/hooks/useTodos';
import { 
  BookOpen, Cloud, Star, ChevronLeft, ChevronRight, Feather, 
  Plus, Trash2, GripVertical, Check, Volume2, Search, RotateCw, 
  Tag, Calendar, ArrowLeft, ArrowRight, Maximize2, FileText, 
  CheckSquare, Smile, BarChart2, X, RefreshCw
} from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import MoodPulse from '@/components/shared/MoodPulse';
import { useUser } from '@/components/providers/UserProvider';
import { toDateString, getDayOfYear, formatDisplayDate } from '@/lib/utils/date';
import { cn } from '@/lib/utils/cn';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from 'recharts';

type Tab = 'write' | 'reflect' | 'calendar';

const GRATITUDE_PROMPTS = [
  'Something that made you smile today',
  'A person who influenced you positively',
  'A simple pleasure you noticed',
  'Something about your body you are grateful for',
  'A challenge that taught you something',
];

const DAILY_PROMPTS = [
  'What is weighing on your mind right now?',
  'What surprised you today?',
  'Describe a moment of beauty you noticed.',
  'What would your wiser future self say to you today?',
  'What is a lesson you learned from a recent mistake?',
  'What are you looking forward to tomorrow?',
  'How did you show kindness to yourself or someone else today?',
];

const MOOD_TAGS_SUGGESTIONS: Record<number, string[]> = {
  5: ['joy', 'peace', 'celebration', 'growth', 'inspired'],
  4: ['grateful', 'mindful', 'quiet', 'focus', 'happy'],
  3: ['reflect', 'routine', 'daily', 'progress', 'calm'],
  2: ['tired', 'slow', 'heal', 'gentle', 'anxious'],
  1: ['release', 'vent', 'accept', 'patience', 'heavy'],
};

export default function AntarmanPage() {
  const { user } = useUser();
  const [tab, setTab] = useState<Tab>('write');
  
  // Track selected date (formatted as YYYY-MM-DD)
  const [selectedDate, setSelectedDate] = useState(() => toDateString(new Date()));

  // Form states
  const [content, setContent] = useState('');
  const [mood, setMood] = useState(3);
  const [gratitude, setGratitude] = useState(['', '', '']);
  const [learned, setLearned] = useState('');
  const [intention, setIntention] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [mode, setMode] = useState<string>('daily');
  const [tags, setTags] = useState<string[]>([]);
  const [newTagInput, setNewTagInput] = useState('');
  const [promptOffset, setPromptOffset] = useState(0);
  
  // Story full-screen overlay state
  const [isStoryOverlayOpen, setIsStoryOverlayOpen] = useState(false);
  const [storyTitle, setStoryTitle] = useState('');

  // Calendar search state
  const [searchQuery, setSearchQuery] = useState('');
  const [calendarFilterTag, setCalendarFilterTag] = useState<string | null>(null);

  // Todo input state
  const [newTodoText, setNewTodoText] = useState('');
  const [todoError, setTodoError] = useState('');

  // Auto-save states
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [lastSavedText, setLastSavedText] = useState('');
  const isDirtyRef = useRef(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout>>();
  const editorRef = useRef<HTMLDivElement>(null);
  const [datesWithTodos, setDatesWithTodos] = useState<Set<string>>(new Set());
  const [currentMonthDate, setCurrentMonthDate] = useState(() => new Date());
  
  // Mounted check for Recharts hydration
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Real-time listener for dates with todos
  useEffect(() => {
    if (!user || !db) return;
    const q = collection(db, `users/${user.id}/todos`);
    const unsub = onSnapshot(q, (snap) => {
      const dates = new Set(snap.docs.map(d => d.id));
      setDatesWithTodos(dates);
    }, (err) => {
      console.error('Failed to load todo dates:', err);
    });
    return unsub;
  }, [user]);

  const getCalendarDays = () => {
    const year = currentMonthDate.getFullYear();
    const month = currentMonthDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const startDayOfWeek = firstDay.getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    const days: { dateStr: string; dayNumber: number; isCurrentMonth: boolean }[] = [];
    
    const prevMonthTotalDays = new Date(year, month, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      const d = prevMonthTotalDays - i;
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevYear = month === 0 ? year - 1 : year;
      const dateStr = `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      days.push({ dateStr, dayNumber: d, isCurrentMonth: false });
    }
    
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      days.push({ dateStr, dayNumber: d, isCurrentMonth: true });
    }
    
    return days;
  };

  const calendarDays = getCalendarDays();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayOfYear = getDayOfYear();

  // Fetch journal entries & todos from custom hooks
  const { todayEntry: entry, allEntries = [], saveEntry, loading } = useJournal(selectedDate);
  const { 
    todos, 
    addTodo, 
    toggleTodo, 
    deleteTodo, 
    clearCompleted, 
    carryForward, 
    saveTodos 
  } = useTodos(selectedDate);

  // Load entry content when it changes or when selectedDate changes, but only if not currently dirty and not loading
  useEffect(() => {
    if (loading) return;
    if (isDirtyRef.current) return;
    
    if (entry) {
      setContent(entry.content || '');
      setMood(entry.mood || 3);
      setGratitude(entry.gratitude || ['', '', '']);
      setLearned(entry.learned || '');
      setIntention(entry.intention || '');
      setWordCount(entry.word_count || 0);
      setMode(entry.mode || 'daily');
      setTags(entry.tags || []);
      
      // If story mode, parse title from first line if saved, or use date
      if (entry.mode === 'story') {
        const lines = (entry.content || '').split('\n');
        if (lines[0] && lines[0].startsWith('# ')) {
          setStoryTitle(lines[0].replace('# ', ''));
        } else {
          setStoryTitle('');
        }
      }
    } else {
      setContent('');
      setMood(3);
      setGratitude(['', '', '']);
      setLearned('');
      setIntention('');
      setWordCount(0);
      setMode('daily');
      setTags([]);
      setStoryTitle('');
    }
    isDirtyRef.current = false;
  }, [entry, selectedDate, loading]);

  // Keep editor innerText in sync with content state when NOT focused
  useEffect(() => {
    if (editorRef.current && document.activeElement !== editorRef.current) {
      // In story mode, strip title header markdown to display raw content in editor
      if (mode === 'story' && content.startsWith('# ')) {
        const lines = content.split('\n');
        editorRef.current.innerText = lines.slice(1).join('\n').trim();
      } else {
        editorRef.current.innerText = content;
      }
    }
  }, [content, mode]);

  // Debounced auto-save triggers
  const save = useCallback(async (data: {
    content: string; mood: number; gratitude: string[]; learned: string; intention: string; mode?: string; tags?: string[];
  }) => {
    setSaveStatus('saving');
    try {
      await saveEntry(data);
      setSavedAt(new Date());
      setSaveStatus('saved');
      isDirtyRef.current = false;
    } catch (err) {
      console.error('Failed to auto-save:', err);
      setSaveStatus('idle');
    }
  }, [saveEntry]);

  // Centralized input changes that flag the form as dirty
  const handleInputChange = (fieldSetter: any, value: any) => {
    fieldSetter(value);
    isDirtyRef.current = true;
    setSaveStatus('saving');
  };

  const handleContentChange = (text: string) => {
    let finalContent = text;
    if (mode === 'story' && storyTitle) {
      finalContent = `# ${storyTitle}\n\n${text}`;
    }
    setContent(finalContent);
    const wc = finalContent.trim().split(/\s+/).filter(Boolean).length;
    setWordCount(wc);
    isDirtyRef.current = true;
    setSaveStatus('saving');
  };

  // Debounced save effect (runs 2 seconds after changes stop)
  useEffect(() => {
    if (!isDirtyRef.current) return;

    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      save({ content, mood, gratitude, learned, intention, mode, tags });
    }, 2000);

    return () => clearTimeout(saveTimer.current);
  }, [content, mood, gratitude, learned, intention, mode, tags, save]);

  // Force immediate save (flush)
  const handleForceSave = async () => {
    clearTimeout(saveTimer.current);
    await save({ content, mood, gratitude, learned, intention, mode, tags });
  };

  // Flushes autosave immediately when switching tabs or date
  const flushSave = async () => {
    if (isDirtyRef.current) {
      clearTimeout(saveTimer.current);
      await save({ content, mood, gratitude, learned, intention, mode, tags });
    }
  };

  const handleTabChange = async (newTab: Tab) => {
    await flushSave();
    setTab(newTab);
  };

  const handleDateSelect = async (dateStr: string) => {
    await flushSave();
    setSelectedDate(dateStr);
    setTab('write');
  };

  // Relative "Last saved" timestamp update
  useEffect(() => {
    if (saveStatus === 'saving') {
      setLastSavedText('Saving...');
      return;
    }
    if (!savedAt) {
      setLastSavedText('');
      return;
    }

    const updateText = () => {
      const diffMs = new Date().getTime() - savedAt.getTime();
      const diffSec = Math.floor(diffMs / 1000);
      if (diffSec < 15) {
        setLastSavedText('Saved ✓');
      } else if (diffSec < 60) {
        setLastSavedText('Last saved: less than a minute ago');
      } else {
        const mins = Math.floor(diffSec / 60);
        setLastSavedText(`Last saved: ${mins} ${mins === 1 ? 'min' : 'mins'} ago`);
      }
    };

    updateText();
    const interval = setInterval(updateText, 15000);
    return () => clearInterval(interval);
  }, [savedAt, saveStatus]);

  // Add todo task handler
  const handleAddTodoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    setTodoError('');
    try {
      await addTodo(newTodoText);
      setNewTodoText('');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setTodoError(err.message);
      }
    }
  };

  // Navigation Banner helpers
  const changeDateByAmount = async (days: number) => {
    await flushSave();
    const current = new Date(selectedDate + 'T00:00:00');
    current.setDate(current.getDate() + days);
    setSelectedDate(toDateString(current));
  };

  const returnToToday = async () => {
    await flushSave();
    setSelectedDate(toDateString(new Date()));
  };

  // Writing prompts cycle
  const currentPrompt = DAILY_PROMPTS[(dayOfYear + promptOffset) % DAILY_PROMPTS.length];
  const handleCyclePrompt = () => {
    setPromptOffset(prev => prev + 1);
  };

  // Tags handlers
  const handleAddTag = () => {
    const trimmed = newTagInput.trim().toLowerCase().replace(/#/g, '');
    if (trimmed && !tags.includes(trimmed)) {
      const nextTags = [...tags, trimmed];
      handleInputChange(setTags, nextTags);
    }
    setNewTagInput('');
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const nextTags = tags.filter(t => t !== tagToRemove);
    handleInputChange(setTags, nextTags);
  };

  // On This Day Check (Exactly 1 year ago)
  const oneYearAgoStr = (() => {
    const d = new Date(selectedDate + 'T00:00:00');
    d.setFullYear(d.getFullYear() - 1);
    return toDateString(d);
  })();
  const oneYearAgoEntry = allEntries.find(e => e.date === oneYearAgoStr);

  // Filtered entries for search in Calendar Tab
  const searchResults = searchQuery.trim()
    ? allEntries.filter(e => 
        e.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.learned.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.intention.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.gratitude.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  // Streak calculations
  const calculateStreak = () => {
    if (!allEntries || allEntries.length === 0) return 0;
    const dates = allEntries.map(e => e.date);
    let streak = 0;
    let checkDate = new Date();
    
    const todayStr = toDateString(checkDate);
    const yesterdayStr = toDateString(new Date(Date.now() - 86400000));
    
    if (!dates.includes(todayStr) && !dates.includes(yesterdayStr)) {
      return 0;
    }
    
    if (!dates.includes(todayStr)) {
      checkDate.setDate(checkDate.getDate() - 1);
    }
    
    while (dates.includes(toDateString(checkDate))) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    }
    return streak;
  };

  const streak = calculateStreak();

  // Streak circles grid
  const streakCircles = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const dStr = toDateString(d);
    const isWritten = allEntries.some(e => e.date === dStr);
    return {
      date: d,
      isWritten,
      label: d.toLocaleDateString('en-US', { weekday: 'narrow' }),
    };
  });

  // Story Full-Screen trigger
  const enterStoryMode = () => {
    // Sync story title
    const lines = content.split('\n');
    if (lines[0] && lines[0].startsWith('# ')) {
      setStoryTitle(lines[0].replace('# ', ''));
    }
    setIsStoryOverlayOpen(true);
  };

  const exitStoryMode = async () => {
    setIsStoryOverlayOpen(false);
    let finalContent = content;
    if (storyTitle.trim()) {
      // Find editor text without previous # title
      let editorText = content;
      if (content.startsWith('# ')) {
        const lines = content.split('\n');
        editorText = lines.slice(2).join('\n').trim();
      }
      finalContent = `# ${storyTitle.trim()}\n\n${editorText}`;
      setContent(finalContent);
    }
    await save({ content: finalContent, mood, gratitude, learned, intention, mode: 'story', tags });
  };

  useEffect(() => {
    if (!isStoryOverlayOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        exitStoryMode();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isStoryOverlayOpen, storyTitle, content, mood, gratitude, learned, intention, tags]);

  // Tags suggestions matching current mood
  const suggestions = MOOD_TAGS_SUGGESTIONS[mood] || [];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        
        {/* ─── Header ─── */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>Antarman</h1>
            <p className="font-devanagari text-sm" style={{ color: 'var(--text-muted)' }}>अन्तर्मन - आपकी आंतरिक दुनिया</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-semibold" style={{ color: 'var(--accent-moss)' }}>
              {formatDisplayDate(selectedDate)}
            </span>
            {lastSavedText && (
              <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
                {lastSavedText}
              </span>
            )}
          </div>
        </div>

        {/* ─── Tabs ─── */}
        <div className="flex gap-1 p-1 rounded-xl max-w-md" style={{ background: 'var(--bg-secondary)' }}>
          {(['write', 'reflect', 'calendar'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => handleTabChange(t)}
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

        {/* ─── Navigation banner when looking at past date ─── */}
        {selectedDate !== toDateString(new Date()) && tab === 'write' && (
          <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 rounded-xl border text-sm gap-3" 
               style={{ background: 'var(--bg-secondary)', borderColor: 'var(--accent-moss)' }}>
            <span className="font-serif italic" style={{ color: 'var(--text-secondary)' }}>
              Viewing past journal entry for <strong>{formatDisplayDate(selectedDate)}</strong>
            </span>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => changeDateByAmount(-1)} 
                className="p-1 rounded-lg border hover:bg-bg-tertiary transition-all"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
                title="Go to Previous Day"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={() => changeDateByAmount(1)} 
                className="p-1 rounded-lg border hover:bg-bg-tertiary transition-all"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
                title="Go to Next Day"
              >
                <ArrowRight size={16} />
              </button>
              <button 
                onClick={returnToToday}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-moss text-white hover:opacity-90 transition-all"
              >
                Return to Today
              </button>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* ─── Write Tab ─── */}
          {tab === 'write' && (
            <motion.div
              key="write"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* LEFT COLUMN: Journal Editor & Form Inputs (col-span-7) */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Journal Mode Picker */}
                <div className="flex p-1 rounded-xl gap-1 overflow-x-auto no-scrollbar" style={{ background: 'var(--bg-secondary)' }}>
                  {['daily', 'freewrite', 'thought', 'story', 'gratitude'].map(m => (
                    <button
                      key={m}
                      onClick={() => handleInputChange(setMode, m)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all"
                      style={{
                        background: mode === m ? 'var(--bg-primary)' : 'transparent',
                        color: mode === m ? 'var(--text-primary)' : 'var(--text-muted)',
                        boxShadow: mode === m ? 'var(--shadow-sm)' : 'none',
                      }}
                    >
                      {m === 'daily' ? 'Daily' : m === 'freewrite' ? 'Free Write' : m === 'thought' ? 'Thought' : m === 'story' ? 'Story' : 'Gratitude'}
                    </button>
                  ))}
                </div>

                {/* Mood Select - Hidden in Freewrite & Story (Full Screen) */}
                {mode !== 'freewrite' && mode !== 'story' && (
                  <div className="card-base practice-card p-4">
                    <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>How are you feeling?</p>
                    <MoodPulse value={mood} onChange={m => handleInputChange(setMood, m)} />
                  </div>
                )}

                {/* Main Editor Body: daily, freewrite, thought, gratitude */}
                {mode === 'daily' && (
                  <div className="card-base journal-card p-5 space-y-2 relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Feather size={14} style={{ color: 'var(--text-muted)' }} />
                        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Daily Writing Prompt:</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs" style={{ color: 'var(--text-faint)' }}>{wordCount} words</span>
                        <button 
                          onClick={handleCyclePrompt} 
                          className="p-1 rounded hover:bg-bg-tertiary transition-all" 
                          title="Cycle Prompt"
                        >
                          <RefreshCw size={12} className="text-text-muted" style={{ color: 'var(--text-muted)' }} />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-sm font-serif italic mb-3 border-l-2 pl-3" style={{ color: 'var(--text-secondary)', borderColor: 'var(--accent-saffron)' }}>
                      &ldquo;{currentPrompt}&rdquo;
                    </p>

                    <div
                      ref={editorRef}
                      className="journal-editor w-full min-h-[220px] outline-none leading-relaxed"
                      contentEditable
                      suppressContentEditableWarning
                      data-placeholder="Begin writing your daily entry..."
                      onInput={e => handleContentChange((e.target as HTMLElement).innerText)}
                      style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}
                    />
                  </div>
                )}

                {mode === 'freewrite' && (
                  <div className="card-base journal-card p-6 space-y-4">
                    <div className="flex justify-between items-center text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span className="font-serif italic font-semibold">Free Write Mode — Flow without constraints</span>
                      <span>{wordCount} words</span>
                    </div>
                    <div
                      ref={editorRef}
                      className="journal-editor w-full min-h-[300px] outline-none leading-loose font-serif text-[18px]"
                      contentEditable
                      suppressContentEditableWarning
                      data-placeholder="Start typing. Let it flow without editing..."
                      onInput={e => handleContentChange((e.target as HTMLElement).innerText)}
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </div>
                )}

                {mode === 'thought' && (
                  <div className="card-base journal-card p-5 space-y-3">
                    <div className="flex justify-between items-center text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span className="font-medium">One Thought — Keep it dense</span>
                      <span className={content.length > 450 ? 'text-red-500 font-semibold' : ''}>
                        {content.length} / 500 chars
                      </span>
                    </div>
                    <div
                      ref={editorRef}
                      className="journal-editor w-full min-h-[140px] outline-none leading-relaxed text-lg italic font-serif"
                      contentEditable
                      suppressContentEditableWarning
                      data-placeholder="Capture a single clear thought or micro-realization here..."
                      onInput={e => {
                        const target = e.target as HTMLElement;
                        if (target.innerText.length > 500) {
                          target.innerText = target.innerText.slice(0, 500);
                          // Restore cursor at the end
                          const range = document.createRange();
                          const sel = window.getSelection();
                          range.selectNodeContents(target);
                          range.collapse(false);
                          sel?.removeAllRanges();
                          sel?.addRange(range);
                        }
                        handleContentChange(target.innerText);
                      }}
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </div>
                )}

                {mode === 'story' && (
                  <div className="card-base p-6 text-center space-y-4">
                    <div className="max-w-md mx-auto space-y-3 py-6">
                      <div className="text-3xl">🎬</div>
                      <h3 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>Story Mode</h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        Write in a completely distraction-free full-screen takeover environment. Perfect for longer reflection or creative writing.
                      </p>
                      <button
                        onClick={enterStoryMode}
                        className="px-6 py-2.5 rounded-full font-medium text-sm text-white bg-accent-saffron shadow-lg transition-all hover:scale-105"
                      >
                        Enter Full Screen Takeover
                      </button>
                    </div>
                  </div>
                )}

                {mode === 'gratitude' && (
                  <div className="card-base practice-card p-6 space-y-6">
                    <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-default)' }}>
                      <Smile size={18} className="text-accent-saffron" />
                      <h3 className="font-serif text-lg" style={{ color: 'var(--text-primary)' }}>Gratitude Focus</h3>
                    </div>
                    <div className="space-y-4">
                      {gratitude.map((g, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-accent-saffron">{i + 1}.</span>
                          <input
                            type="text"
                            value={g}
                            onChange={e => {
                              const next = [...gratitude];
                              next[i] = e.target.value;
                              handleInputChange(setGratitude, next);
                            }}
                            placeholder={GRATITUDE_PROMPTS[i % GRATITUDE_PROMPTS.length]}
                            className="flex-1 bg-transparent outline-none text-sm border-b py-1 border-stone-200/50 focus:border-accent-saffron transition-all"
                            style={{ color: 'var(--text-primary)' }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2 pt-2">
                      <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Reflection notes on today's gratitude</p>
                      <div
                        ref={editorRef}
                        className="journal-editor w-full min-h-[120px] outline-none leading-relaxed"
                        contentEditable
                        suppressContentEditableWarning
                        data-placeholder="Why are you grateful for these things today? Detail the feeling..."
                        onInput={e => handleContentChange((e.target as HTMLElement).innerText)}
                        style={{ color: 'var(--text-primary)', fontSize: '1rem' }}
                      />
                    </div>
                  </div>
                )}

                {/* Gratitude & TIL inputs — only shown in standard 'daily' mode */}
                {mode === 'daily' && (
                  <>
                    {/* Gratitude block */}
                    <div className="card-base practice-card p-5 space-y-3">
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
                              handleInputChange(setGratitude, next);
                            }}
                            placeholder={GRATITUDE_PROMPTS[i % GRATITUDE_PROMPTS.length]}
                            className="flex-1 bg-transparent outline-none text-sm gratitude-input"
                            style={{
                              color: 'var(--text-primary)',
                              paddingBottom: '4px',
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* TIL + Intention */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="card-base practice-card p-4 space-y-2">
                        <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Today I Learned</p>
                        <textarea
                          value={learned}
                          onChange={e => handleInputChange(setLearned, e.target.value)}
                          placeholder="Something new I discovered..."
                          rows={3}
                          className="w-full bg-transparent outline-none text-sm resize-none"
                          style={{ color: 'var(--text-primary)' }}
                        />
                      </div>
                      <div className="card-base practice-card p-4 space-y-2">
                        <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Tomorrow&apos;s Intention</p>
                        <textarea
                          value={intention}
                          onChange={e => handleInputChange(setIntention, e.target.value)}
                          placeholder="Tomorrow I will..."
                          rows={3}
                          className="w-full bg-transparent outline-none text-sm resize-none"
                          style={{ color: 'var(--text-primary)' }}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Entry Tags Section (Shown in all except Story mode) */}
                {mode !== 'story' && (
                  <div className="card-base practice-card p-4 space-y-3">
                    <div className="flex items-center gap-1.5">
                      <Tag size={13} className="text-text-muted" style={{ color: 'var(--text-muted)' }} />
                      <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Tags on this entry</p>
                    </div>
                    {/* Render active tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map(t => (
                        <span 
                          key={t} 
                          className="px-2 py-0.5 rounded-md text-xs font-semibold bg-stone-200/40 text-stone-700 flex items-center gap-1"
                        >
                          #{t}
                          <button 
                            onClick={() => handleRemoveTag(t)}
                            className="hover:text-red-500 font-light"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    {/* Render suggestions */}
                    {suggestions.length > 0 && (
                      <div className="space-y-1">
                        <p className="text-[10px] text-text-faint" style={{ color: 'var(--text-faint)' }}>Suggested tags for your mood:</p>
                        <div className="flex flex-wrap gap-1">
                          {suggestions.filter(s => !tags.includes(s)).map(s => (
                            <button
                              key={s}
                              onClick={() => {
                                const nextTags = [...tags, s];
                                handleInputChange(setTags, nextTags);
                              }}
                              className="px-2 py-0.5 rounded-full border border-dashed border-stone-300 text-[10px] text-text-muted hover:bg-bg-tertiary transition-all"
                              style={{ color: 'var(--text-muted)' }}
                            >
                              +{s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* Add tag input */}
                    <div className="flex gap-2 max-w-xs">
                      <input
                        type="text"
                        value={newTagInput}
                        onChange={e => setNewTagInput(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddTag();
                          }
                        }}
                        placeholder="Add tag (press Enter)..."
                        className="flex-1 bg-transparent border-b py-0.5 text-xs outline-none focus:border-accent-moss"
                        style={{ color: 'var(--text-primary)', borderColor: 'var(--border-strong)' }}
                      />
                      <button 
                        onClick={handleAddTag}
                        className="px-3 py-1 rounded-md text-[10px] border font-medium hover:bg-bg-tertiary transition-all"
                        style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                )}

                {/* Force Save Button */}
                {mode !== 'story' && (
                  <button
                    onClick={handleForceSave}
                    className="w-full py-3 rounded-xl font-medium text-sm text-white transition-all hover:opacity-95"
                    style={{
                      background: 'var(--room-antarman)',
                      boxShadow: '0 4px 16px rgba(107,139,122,0.3)',
                    }}
                  >
                    Save Sanctuary Entry
                  </button>
                )}

                {/* On This Day Memories Section */}
                {oneYearAgoEntry && (
                  <div className="card-base p-4 border border-dashed space-y-2" style={{ borderColor: 'var(--accent-saffron)' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-accent-saffron">On This Day Last Year</span>
                      <span className="text-xs" style={{ color: 'var(--text-faint)' }}>{formatDisplayDate(oneYearAgoStr)}</span>
                    </div>
                    <p className="text-sm font-serif italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      &ldquo;{oneYearAgoEntry.content.replace(/^#\s+.+\n+/, '').slice(0, 160)}...&rdquo;
                    </p>
                    <button 
                      onClick={() => handleDateSelect(oneYearAgoStr)}
                      className="text-xs font-semibold text-accent-saffron hover:underline"
                    >
                      Read full entry from last year →
                    </button>
                  </div>
                )}

              </div>

              {/* RIGHT COLUMN: Checklist / Todo Section (col-span-5) */}
              <div 
                className="lg:col-span-5 p-5 card-base practice-card space-y-4"
                style={{ borderRadius: 16 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Daily Checklist</h3>
                  <button
                    onClick={carryForward}
                    className="text-xs px-2.5 py-1 rounded-full border transition-all hover:bg-bg-primary"
                    style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
                    title="Carry forward incomplete tasks from yesterday"
                  >
                    Carry Forward
                  </button>
                </div>

                {/* Add task form */}
                <form onSubmit={handleAddTodoSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={newTodoText}
                    onChange={e => setNewTodoText(e.target.value)}
                    placeholder="Add a task..."
                    className="flex-1 bg-transparent outline-none text-sm py-1.5 border-b focus:border-accent-moss transition-colors"
                    style={{
                      borderColor: 'var(--border-strong)',
                      color: 'var(--text-primary)'
                    }}
                  />
                  <button
                    type="submit"
                    className="p-1.5 rounded-lg border transition-all hover:bg-bg-primary flex-shrink-0"
                    style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                  >
                    <Plus size={16} />
                  </button>
                </form>

                {todoError && (
                  <p className="text-xs text-red-500">{todoError}</p>
                )}

                {/* Todo List */}
                {todos.length === 0 ? (
                  <p className="text-sm text-center py-8" style={{ color: 'var(--text-faint)' }}>
                    No tasks for today. Start fresh!
                  </p>
                ) : (
                  <Reorder.Group axis="y" values={todos} onReorder={saveTodos} className="space-y-2">
                    {todos.map(todo => (
                      <Reorder.Item
                        key={todo.id}
                        value={todo}
                        className="group flex items-center gap-3 p-3 rounded-xl transition-all relative border"
                        style={{
                          background: todo.completed 
                            ? 'color-mix(in srgb, var(--accent-moss) 4%, var(--bg-primary))' 
                            : 'var(--bg-primary)',
                          borderColor: todo.completed
                            ? 'color-mix(in srgb, var(--accent-moss) 20%, var(--border-default))'
                            : 'var(--border-default)',
                          opacity: todo.completed ? 0.6 : 1,
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => toggleTodo(todo.id)}
                          className="flex-shrink-0 focus:outline-none"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                            <circle 
                              cx="12" 
                              cy="12" 
                              r="10" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              style={{ color: todo.completed ? 'var(--accent-moss)' : 'var(--border-strong)' }}
                            />
                            {todo.completed && (
                              <motion.path
                                d="M6 12l4 4 8-8"
                                stroke="var(--accent-moss)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.25 }}
                              />
                            )}
                          </svg>
                        </button>

                        <span 
                          className="truncate pr-12 text-[15px]"
                          style={{
                            color: todo.completed ? 'var(--text-muted)' : 'var(--text-primary)',
                            textDecoration: todo.completed ? 'line-through' : 'none',
                          }}
                        >
                          {todo.text}
                        </span>

                        <div className="absolute right-9 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab pr-1">
                          <GripVertical size={14} className="text-text-muted" style={{ color: 'var(--text-faint)' }} />
                        </div>

                        <button
                          type="button"
                          onClick={() => deleteTodo(todo.id)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-lg font-light leading-none focus:outline-none"
                          style={{ color: 'var(--text-faint)' }}
                        >
                          ×
                        </button>
                      </Reorder.Item>
                    ))}
                  </Reorder.Group>
                )}

                {todos.some(t => t.completed) && (
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={clearCompleted}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Clear Completed
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ─── Reflect Tab ─── */}
          {tab === 'reflect' && (
            <motion.div
              key="reflect"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              
              {/* Daily Prompts Banner */}
              <div className="card-base p-6 space-y-4 relative">
                <div className="flex items-center gap-2">
                  <Cloud size={16} style={{ color: 'var(--room-antarman)' }} />
                  <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>Today&apos;s Prompt</span>
                </div>
                <p className="font-serif text-lg italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{currentPrompt}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <ReadAloudButton text={currentPrompt} lang="en-IN" variant="pill" label="Listen to Prompt" />
                  <button 
                    onClick={handleCyclePrompt}
                    className="px-3 py-1 rounded-full text-xs border transition-all hover:bg-bg-tertiary flex items-center gap-1"
                    style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                  >
                    <RotateCw size={12} />
                    Next Prompt
                  </button>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Streak card */}
                <div className="card-base p-5 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="text-3xl">🔥</div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>Writing Streak</h4>
                    <p className="text-4xl font-serif font-semibold mt-1" style={{ color: 'var(--accent-saffron)' }}>
                      {streak} {streak === 1 ? 'day' : 'days'}
                    </p>
                  </div>
                  <div className="flex gap-1.5 justify-center pt-2">
                    {streakCircles.map((c, i) => (
                      <div key={i} className="flex flex-col items-center gap-1" title={toDateString(c.date)}>
                        <div 
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all"
                          style={{
                            background: c.isWritten 
                              ? 'var(--accent-saffron)' 
                              : 'transparent',
                            borderColor: c.isWritten 
                              ? 'var(--accent-saffron)' 
                              : 'var(--border-strong)',
                            color: c.isWritten ? 'white' : 'var(--text-muted)',
                          }}
                        >
                          {c.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Science insight */}
                <div className="card-base p-5 text-center flex flex-col items-center justify-center space-y-3" 
                     style={{ background: 'color-mix(in srgb, var(--room-antarman) 8%, var(--bg-secondary))' }}>
                  <div className="text-3xl">📖</div>
                  <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Rewiring Your Mind</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    Journaling is confirmed by cognitive neuroscience to reduce cortisol, improve working memory, and boost neural integration by translating emotions into language structures.
                  </p>
                </div>

                {/* Word count summary */}
                <div className="card-base p-5 flex flex-col items-center justify-center text-center space-y-2">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>Total Words Logged</h4>
                    <p className="text-4xl font-serif font-semibold mt-1" style={{ color: 'var(--accent-moss)' }}>
                      {allEntries.reduce((acc, curr) => acc + (curr.word_count || 0), 0)}
                    </p>
                  </div>
                  <p className="text-xs text-text-muted" style={{ color: 'var(--text-muted)' }}>
                    across {allEntries.length} historical entries
                  </p>
                </div>
              </div>

              {/* Hydration-friendly Recharts Containers */}
              {mounted && allEntries.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Mood Graph */}
                  <div className="card-base p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <Smile size={16} className="text-accent-saffron" />
                      <h4 className="font-serif text-base font-semibold" style={{ color: 'var(--text-primary)' }}>30-Day Mood Flow</h4>
                    </div>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart 
                          data={allEntries
                            .slice(0, 30)
                            .reverse()
                            .map(e => ({
                              date: e.date.slice(5),
                              mood: e.mood,
                              excerpt: e.content.replace(/^#\s+.+\n+/, '').slice(0, 40) + '...'
                            }))}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-default)" />
                          <XAxis dataKey="date" stroke="var(--text-faint)" fontSize={11} />
                          <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} stroke="var(--text-faint)" fontSize={11} />
                          <Tooltip 
                            contentStyle={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                            formatter={(value) => [`Score: ${value}`, 'Mood']}
                            labelFormatter={(label) => `Date: ${label}`}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="mood" 
                            stroke="var(--accent-saffron)" 
                            strokeWidth={3}
                            dot={{ fill: 'var(--accent-saffron)', strokeWidth: 1 }}
                            activeDot={{ r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Word Count Bar Chart */}
                  <div className="card-base p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <BarChart2 size={16} className="text-accent-moss" />
                      <h4 className="font-serif text-base font-semibold" style={{ color: 'var(--text-primary)' }}>14-Day Word Counts</h4>
                    </div>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                          data={allEntries
                            .slice(0, 14)
                            .reverse()
                            .map(e => ({
                              date: e.date.slice(5),
                              words: e.word_count || 0
                            }))}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-default)" />
                          <XAxis dataKey="date" stroke="var(--text-faint)" fontSize={11} />
                          <YAxis stroke="var(--text-faint)" fontSize={11} />
                          <Tooltip 
                            contentStyle={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                            formatter={(value) => [`${value} words`, 'Count']}
                          />
                          <Bar dataKey="words" fill="var(--accent-moss)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                </div>
              )}

              {/* This Week in Words Timeline */}
              <div className="card-base p-5 space-y-4">
                <h4 className="font-serif text-base font-semibold" style={{ color: 'var(--text-primary)' }}>This Week in Words</h4>
                {allEntries.length === 0 ? (
                  <p className="text-sm text-text-faint" style={{ color: 'var(--text-faint)' }}>Your timeline will populate as you begin journaling.</p>
                ) : (
                  <div className="relative border-l pl-4 space-y-4" style={{ borderColor: 'var(--border-strong)' }}>
                    {allEntries.slice(0, 7).map(e => {
                      const firstSentence = e.content
                        .replace(/^#\s+.+\n+/, '') // strip title markdown
                        .split(/[.!?]/)[0] || 'Empty reflection';
                      return (
                        <div key={e.date} className="relative">
                          {/* Timeline node dot */}
                          <span 
                            className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full border border-white"
                            style={{ background: 'var(--accent-saffron)' }}
                          />
                          <span className="text-[10px] font-semibold" style={{ color: 'var(--text-faint)' }}>
                            {formatDisplayDate(e.date)} (Mood Score: {e.mood})
                          </span>
                          <p className="text-sm font-serif italic mt-0.5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            &ldquo;{firstSentence.trim()}...&rdquo;
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
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
              className="space-y-4 max-w-2xl mx-auto"
            >
              <div className="card-base p-5 space-y-4">
                {/* Search Bar */}
                <div className="flex gap-2 items-center p-2.5 rounded-xl border" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-default)' }}>
                  <Search size={16} className="text-text-muted" style={{ color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search across journal content, gratitude logs, learned items..."
                    className="flex-1 bg-transparent text-sm outline-none"
                    style={{ color: 'var(--text-primary)' }}
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="p-0.5 rounded-full hover:bg-bg-tertiary">
                      <X size={14} className="text-text-muted" />
                    </button>
                  )}
                </div>

                {/* Calendar Filter Tag Selector */}
                {allEntries.some(e => e.tags && e.tags.length > 0) && (
                  <div className="flex flex-wrap gap-1.5 items-center pb-2 border-b border-dashed border-stone-200/50">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-text-faint" style={{ color: 'var(--text-faint)' }}>
                      Filter by Tag:
                    </span>
                    {Array.from(new Set(allEntries.flatMap(e => e.tags || []))).map(t => (
                      <button
                        key={t}
                        onClick={() => setCalendarFilterTag(calendarFilterTag === t ? null : t)}
                        className={cn(
                          "px-2.5 py-0.5 rounded-full text-[10px] font-semibold border transition-all",
                          calendarFilterTag === t 
                            ? 'bg-accent-moss border-accent-moss text-white'
                            : 'border-stone-300 text-text-muted hover:bg-bg-tertiary'
                        )}
                        style={calendarFilterTag === t ? undefined : { color: 'var(--text-muted)' }}
                      >
                        #{t}
                      </button>
                    ))}
                  </div>
                )}

                {/* Search Results Display */}
                {searchQuery.trim() ? (
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-faint)' }}>
                      Found {searchResults.length} matches:
                    </p>
                    {searchResults.length === 0 ? (
                      <p className="text-sm text-center py-6" style={{ color: 'var(--text-faint)' }}>No matching entries found.</p>
                    ) : (
                      <div className="space-y-2 max-h-80 overflow-y-auto no-scrollbar">
                        {searchResults.map(e => (
                          <button
                            key={e.date}
                            onClick={() => handleDateSelect(e.date)}
                            className="w-full text-left p-3 rounded-xl border hover:bg-bg-tertiary transition-all space-y-1 block"
                            style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-default)' }}
                          >
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span style={{ color: 'var(--accent-moss)' }}>{formatDisplayDate(e.date)}</span>
                              <span style={{ color: 'var(--text-faint)' }}>Mood: {e.mood}</span>
                            </div>
                            <p className="text-sm truncate font-serif" style={{ color: 'var(--text-primary)' }}>
                              {e.content.replace(/^#\s+.+\n+/, '').slice(0, 100)}...
                            </p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    {/* Normal Calendar Grid Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                        {monthNames[currentMonthDate.getMonth()]} {currentMonthDate.getFullYear()}
                      </h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1))}
                          className="p-1.5 rounded-lg border transition-colors hover:bg-bg-tertiary"
                          style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={() => setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1))}
                          className="p-1.5 rounded-lg border transition-colors hover:bg-bg-tertiary"
                          style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Weekdays Labels */}
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase tracking-wider py-1 border-b" style={{ color: 'var(--text-faint)', borderColor: 'var(--border-default)' }}>
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(w => (
                        <div key={w}>{w}</div>
                      ))}
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {calendarDays.map(({ dateStr, dayNumber, isCurrentMonth }) => {
                        const isSelected = selectedDate === dateStr;
                        const matchEntry = allEntries.find(e => e.date === dateStr);
                        const hasJournal = !!matchEntry;
                        const hasTodos = datesWithTodos.has(dateStr);
                        
                        // Tag filter highlight logic
                        const matchesTagFilter = !calendarFilterTag || (matchEntry && matchEntry.tags && matchEntry.tags.includes(calendarFilterTag));
                        
                        return (
                          <button
                            key={dateStr}
                            onClick={() => handleDateSelect(dateStr)}
                            className="h-12 w-full rounded-lg flex flex-col items-center justify-between p-1.5 relative transition-all hover:scale-105 active:scale-95 border"
                            style={{
                              background: isSelected 
                                ? 'color-mix(in srgb, var(--room-antarman) 15%, var(--bg-tertiary))' 
                                : 'transparent',
                              borderColor: isSelected 
                                ? 'var(--room-antarman)' 
                                : 'transparent',
                              opacity: isCurrentMonth ? 1 : 0.35,
                            }}
                          >
                            <span 
                              className="text-xs font-medium"
                              style={{ color: isSelected ? 'var(--room-antarman)' : 'var(--text-primary)' }}
                            >
                              {dayNumber}
                            </span>
                            
                            {/* Indicators Dots */}
                            <div className="flex gap-1 justify-center w-full h-1.5">
                              {hasJournal && matchesTagFilter && (
                                <span 
                                  className="w-1.5 h-1.5 rounded-full" 
                                  style={{ background: 'var(--accent-saffron)' }}
                                  title="Journal Entry"
                                />
                              )}
                              {hasTodos && (
                                <span 
                                  className="w-1.5 h-1.5 rounded-full" 
                                  style={{ background: 'var(--accent-moss)' }}
                                  title="Checklist Tasks"
                                />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Story Mode Distraction-Free Full Screen Overlay ─── */}
        <AnimatePresence>
          {isStoryOverlayOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex flex-col p-6 sm:p-12 overflow-y-auto"
              style={{ background: '#F5F0E8', color: '#1C1917', fontFamily: 'var(--font-serif)' }}
            >
              {/* Header toolbar */}
              <div className="max-w-[700px] w-full mx-auto flex justify-between items-center pb-6 border-b border-stone-200/50 mb-8 font-sans text-xs uppercase tracking-widest text-stone-500">
                <span>Story Mode (Distraction-Free)</span>
                <div className="flex items-center gap-3">
                  <span>{wordCount} words</span>
                  <button 
                    onClick={exitStoryMode} 
                    className="p-1.5 rounded-full hover:bg-stone-200/50 transition-all text-stone-700"
                    title="Exit and Save (ESC)"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Writing pad container */}
              <div className="max-w-[700px] w-full mx-auto flex-1 flex flex-col space-y-6">
                {/* Title field */}
                <input
                  type="text"
                  value={storyTitle}
                  onChange={e => handleInputChange(setStoryTitle, e.target.value)}
                  placeholder="Title of your story..."
                  className="w-full bg-transparent outline-none text-2xl sm:text-3xl font-light text-stone-900 border-none placeholder-stone-400"
                />

                {/* Main body editor */}
                <div
                  ref={editorRef}
                  className="w-full flex-1 outline-none text-lg sm:text-[20px] leading-[2.1] text-stone-800 font-light"
                  contentEditable
                  suppressContentEditableWarning
                  data-placeholder="Begin your narrative flow here. Let distractions fade..."
                  onInput={e => handleContentChange((e.target as HTMLElement).innerText)}
                />
              </div>

              {/* Tiny bottom helper */}
              <div className="max-w-[700px] w-full mx-auto pt-6 border-t border-stone-200/50 text-center font-sans text-[10px] text-stone-400">
                Press ESC or click × to exit. Your entry is saved automatically.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
