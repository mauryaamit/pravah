'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { db } from '@/lib/firebase/client';
import { collection, onSnapshot } from 'firebase/firestore';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { useJournal } from '@/lib/hooks/useJournal';
import { useTodos, TodoTask } from '@/lib/hooks/useTodos';
import { BookOpen, Cloud, Star, ChevronLeft, ChevronRight, Feather, Plus, Trash2, GripVertical, Check, Volume2 } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import MoodPulse from '@/components/shared/MoodPulse';
import { useUser } from '@/components/providers/UserProvider';
import { toDateString, getDayOfYear, formatDisplayDate } from '@/lib/utils/date';
import { cn } from '@/lib/utils/cn';

type Tab = 'write' | 'reflect' | 'calendar';

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
  
  // Track selected date (formatted as YYYY-MM-DD)
  const [selectedDate, setSelectedDate] = useState(() => toDateString(new Date()));

  // Form states
  const [content, setContent] = useState('');
  const [mood, setMood] = useState(3);
  const [gratitude, setGratitude] = useState(['', '', '']);
  const [learned, setLearned] = useState('');
  const [intention, setIntention] = useState('');
  const [wordCount, setWordCount] = useState(0);

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
    } else {
      setContent('');
      setMood(3);
      setGratitude(['', '', '']);
      setLearned('');
      setIntention('');
      setWordCount(0);
    }
    isDirtyRef.current = false;
  }, [entry, selectedDate, loading]);

  // Keep editor innerText in sync with content state when NOT focused
  useEffect(() => {
    if (editorRef.current && document.activeElement !== editorRef.current) {
      editorRef.current.innerText = content;
    }
  }, [content]);

  // Debounced auto-save triggers
  const save = useCallback(async (data: {
    content: string; mood: number; gratitude: string[]; learned: string; intention: string;
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
    setContent(text);
    const wc = text.trim().split(/\s+/).filter(Boolean).length;
    setWordCount(wc);
    isDirtyRef.current = true;
    setSaveStatus('saving');
  };

  // Debounced save effect (runs 10 seconds after typing/changes stop)
  useEffect(() => {
    if (!isDirtyRef.current) return;

    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      save({ content, mood, gratitude, learned, intention });
    }, 3000);

    return () => clearTimeout(saveTimer.current);
  }, [content, mood, gratitude, learned, intention, save]);

  // Force immediate save
  const handleForceSave = () => {
    clearTimeout(saveTimer.current);
    save({ content, mood, gratitude, learned, intention });
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
      if (diffSec < 30) {
        setLastSavedText('Saved ✓');
      } else if (diffSec < 60) {
        setLastSavedText('Last saved: less than a minute ago');
      } else {
        const mins = Math.floor(diffSec / 60);
        setLastSavedText(`Last saved: ${mins} ${mins === 1 ? 'min' : 'mins'} ago`);
      }
    };

    updateText();
    const interval = setInterval(updateText, 30000);
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
              <span className="text-xs text-text-muted" style={{ color: 'var(--text-faint)' }}>
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
          {/* ─── Write Tab (Split Two Columns on Desktop) ─── */}
          {tab === 'write' && (
            <motion.div
              key="write"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* LEFT COLUMN: Journal Editor & Form Inputs (col-span-7) */}
              <div className="lg:col-span-7 space-y-4">
                {/* Mood */}
                <div className="card-base practice-card p-4">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>How are you feeling?</p>
                  </div>
                  <MoodPulse value={mood} onChange={m => handleInputChange(setMood, m)} />
                </div>

                {/* Main editor */}
                <div className="card-base journal-card p-5 space-y-2 relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Feather size={14} style={{ color: 'var(--text-muted)' }} />
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{selectedDate}</span>
                    </div>
                    <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
                      {wordCount} words
                    </span>
                  </div>

                  <div
                    ref={editorRef}
                    className="journal-editor w-full min-h-[220px] outline-none leading-relaxed"
                    contentEditable
                    suppressContentEditableWarning
                    data-placeholder={`Begin writing... (${prompt})`}
                    onInput={e => handleContentChange((e.target as HTMLElement).innerText)}
                    style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}
                  />
                </div>

                {/* Gratitude prompts */}
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

                {/* Today I Learned + Tomorrow Intention */}
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

                {/* Save button */}
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
                        {/* Custom SVG animated checkmark checkbox */}
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

                        {/* Task text */}
                        <span 
                          className="truncate pr-12 text-[15px]"
                          style={{
                            color: todo.completed ? 'var(--text-muted)' : 'var(--text-primary)',
                            textDecoration: todo.completed ? 'line-through' : 'none',
                          }}
                        >
                          {todo.text}
                        </span>

                        {/* Drag Handle (Visible on hover) */}
                        <div className="absolute right-9 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab pr-1">
                          <GripVertical size={14} className="text-text-muted" style={{ color: 'var(--text-faint)' }} />
                        </div>

                        {/* Delete cross button (Visible on hover) */}
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

                {/* Footer buttons */}
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
              className="space-y-4 max-w-2xl mx-auto"
            >
              <div className="card-base p-6 space-y-4 relative">
                <div className="flex items-center gap-2">
                  <Cloud size={16} style={{ color: 'var(--room-antarman)' }} />
                  <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>Today&apos;s Prompt</span>
                </div>
                <p className="font-serif text-lg italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{prompt}&rdquo;
                </p>
                <ReadAloudButton text={prompt} lang="en-IN" variant="pill" label="Listen to Prompt" />
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
              className="space-y-4 max-w-2xl mx-auto"
            >
              <div className="card-base p-5 space-y-4">
                {/* Calendar Header */}
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
                    const journalDates = new Set(allEntries.map((e: any) => e.date));
                    const hasJournal = journalDates.has(dateStr);
                    const hasTodos = datesWithTodos.has(dateStr);
                    
                    return (
                      <button
                        key={dateStr}
                        onClick={() => handleDateClick(dateStr)}
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
                          {hasJournal && (
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );

  function handleDateClick(dateStr: string) {
    setSelectedDate(dateStr);
    setTab('write');
  }
}
