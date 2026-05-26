'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHabits } from '@/lib/hooks/useHabits';
import { useStreak } from '@/lib/hooks/useStreak';
import { Check, Flame, Plus, Trash2 } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import { useUser } from '@/components/providers/UserProvider';
import { getDayOfYear, toDateString } from '@/lib/utils/date';
import { cn } from '@/lib/utils/cn';
import ReadAloudButton from '@/components/shared/ReadAloudButton';

// Curated neuroscience tips
const NEUROSCIENCE_TIPS = [
  'After 21 days, habits move from prefrontal cortex to basal ganglia - becoming automatic.',
  'Stacking your new habit after an existing anchor routine creates strong synaptic connections.',
  'The 2-minute rule makes starting so easy that resistance vanishes. Just begin.',
  'Your brain craves immediate rewards. Celebrate every micro-win to release dopamine.',
  'Consistency is a cellular vote for the identity you want to adopt. Who are you becoming?',
  'Repetition changes the physical highway of the brain. What you practice, you literally become.',
];

const CATEGORIES = [
  { id: 'Mind', label: 'Mind', emoji: '🧠', color: '#3A5A8A' },
  { id: 'Body', label: 'Body', emoji: '🏃', color: '#4A7C59' },
  { id: 'Spirit', label: 'Spirit', emoji: '✨', color: '#8B4A7C' },
  { id: 'Craft', label: 'Craft', emoji: '🛠️', color: '#A67C52' },
  { id: 'Rest', label: 'Rest', emoji: '🛌', color: '#3A8A8A' },
] as const;

export default function AgniPage() {
  const [selectedDate, setSelectedDate] = useState(() => toDateString(new Date()));
  const [showPastHistory, setShowPastHistory] = useState(false);
  const [newHabitName, setNewHabitName] = useState('');
  const [newHabitFeeling, setNewHabitFeeling] = useState('');
  const [newHabitCategory, setNewHabitCategory] = useState<'Mind' | 'Body' | 'Spirit' | 'Craft' | 'Rest'>('Mind');
  const [showAdd, setShowAdd] = useState(false);
  const [celebrated, setCelebrated] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const dayOfYear = getDayOfYear();
  const tip = NEUROSCIENCE_TIPS[dayOfYear % NEUROSCIENCE_TIPS.length];

  const { habits = [], weeklyCompletions = {}, completionNotes = {}, loading: isLoading, addHabit, completeHabit, deleteHabit } = useHabits();
  const { streak: streakData } = useStreak();

  const noteTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const [localNotes, setLocalNotes] = useState<Record<string, string>>({});

  // Sync localNotes state when selection date or loaded database notes change
  useEffect(() => {
    if (completionNotes[selectedDate]) {
      setLocalNotes(completionNotes[selectedDate]);
    } else {
      setLocalNotes({});
    }
  }, [completionNotes, selectedDate]);

  useEffect(() => {
    return () => {
      Object.values(noteTimers.current).forEach(clearTimeout);
    };
  }, []);

  const isCompleted = (habitId: string) => {
    return (weeklyCompletions[selectedDate] || []).includes(habitId);
  };

  const handleCompleteHabit = async (id: string) => {
    setCelebrated(id);
    setTimeout(() => setCelebrated(null), 1500);
    await completeHabit(id, selectedDate, localNotes[id] || '');
  };

  const handleNoteChange = (habitId: string, noteText: string) => {
    setLocalNotes(prev => ({ ...prev, [habitId]: noteText }));
    clearTimeout(noteTimers.current[habitId]);
    noteTimers.current[habitId] = setTimeout(() => {
      completeHabit(habitId, selectedDate, noteText);
    }, 1500);
  };

  const handleAddHabit = async () => {
    if (!newHabitName.trim()) return;
    await addHabit(newHabitName, newHabitFeeling, newHabitCategory);
    setNewHabitName('');
    setNewHabitFeeling('');
    setNewHabitCategory('Mind');
    setShowAdd(false);
  };

  const handleDeleteHabit = async (id: string) => {
    await deleteHabit(id);
  };

  const filteredHabits = habits.filter(h => activeFilter === 'All' || h.category === activeFilter);
  const completedCount = habits.filter(h => isCompleted(h.id)).length;
  const total = habits.length;
  const progress = total > 0 ? completedCount / total : 0;

  // Calculate Mon-Sun dates for the current week
  const getWeekDates = () => {
    const today = new Date();
    const day = today.getDay();
    const diffToMon = day === 0 ? -6 : 1 - day;
    const monday = new Date(today);
    monday.setDate(today.getDate() + diffToMon);
    
    const dates: { dateStr: string; label: string; isToday: boolean }[] = [];
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const todayStr = toDateString(today);
    
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const ds = toDateString(d);
      dates.push({
        dateStr: ds,
        label: labels[i],
        isToday: ds === todayStr,
      });
    }
    return dates;
  };

  const weekDates = getWeekDates();

  const getRollingPastDates = () => {
    const dates: { dateStr: string; label: string; isToday: boolean }[] = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const todayStr = toDateString(today);
    
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const ds = toDateString(d);
      dates.push({
        dateStr: ds,
        label: weekdays[d.getDay()],
        isToday: ds === todayStr,
      });
    }
    return dates;
  };

  const rollingPastDates = getRollingPastDates();
  const displayDates = showPastHistory ? rollingPastDates : weekDates;

  const getDayProgress = (dateStr: string) => {
    if (habits.length === 0) return 0;
    const completedIds = weeklyCompletions[dateStr] || [];
    const activeHabitIds = new Set(habits.map(h => h.id));
    const validCompletions = completedIds.filter(id => activeHabitIds.has(id)).length;
    return validCompletions / habits.length;
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ─── Header ─── */}
        <section className="space-y-1">
          <h1 className="font-serif text-3xl flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
            <span className="animate-flicker text-2xl">🔥</span> Agni
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Forge your habits. Feed the fire daily.</p>
        </section>

        {/* ─── Streak Banner ─── */}
        {streakData && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl p-4 flex items-center justify-between"
            style={{ background: 'color-mix(in srgb, #C25B3A 10%, var(--bg-secondary))', border: '1px solid color-mix(in srgb, #C25B3A 25%, transparent)' }}
          >
            <div className="flex items-center gap-3">
              <div className="text-3xl animate-flicker">🔥</div>
              <div>
                <div className="font-bold text-2xl" style={{ color: '#C25B3A' }}>
                  {streakData.current_streak} days
                </div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Longest: {streakData.longest_streak} · Score: {streakData.rewire_score}
                </div>
              </div>
            </div>
            {streakData.current_streak > 0 && (
              <div className="text-sm font-medium" style={{ color: '#C25B3A' }}>
                Keep it alive! 💪
              </div>
            )}
          </motion.div>
        )}

        {/* ─── Progress Ring ─── */}
        {total > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card-base p-4 flex items-center gap-4"
          >
            <svg width={60} height={60} className="-rotate-90">
              <circle cx={30} cy={30} r={24} fill="none" stroke="var(--bg-tertiary)" strokeWidth={4} />
              <motion.circle
                cx={30} cy={30} r={24}
                fill="none"
                stroke="#C25B3A"
                strokeWidth={4}
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 24}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
                animate={{ strokeDashoffset: (1 - progress) * 2 * Math.PI * 24 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </svg>
            <div>
              <div className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                {completedCount}/{total} habits done
              </div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {progress === 1 ? '🎉 Perfect day!' : `${Math.round(progress * 100)}% complete`}
              </div>
            </div>
          </motion.div>
        )}

        {/* ─── Category Filter Header ─── */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar pt-2">
          <button
            onClick={() => setActiveFilter('All')}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border flex-shrink-0"
            style={{
              backgroundColor: activeFilter === 'All' ? 'var(--room-current)' : 'var(--bg-tertiary)',
              borderColor: activeFilter === 'All' ? 'var(--room-current)' : 'var(--border-default)',
              color: activeFilter === 'All' ? 'white' : 'var(--text-muted)',
            }}
          >
            All
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 flex-shrink-0"
              style={{
                backgroundColor: activeFilter === cat.id ? 'var(--room-current)' : 'var(--bg-tertiary)',
                borderColor: activeFilter === cat.id ? 'var(--room-current)' : 'var(--border-default)',
                color: activeFilter === cat.id ? 'white' : 'var(--text-muted)',
              }}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* ─── Habit List ─── */}
        <section className="space-y-3">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="skeleton h-16 rounded-xl" />
            ))
          ) : filteredHabits.length === 0 ? (
            <div className="card-base p-8 text-center space-y-2">
              <div className="text-4xl">🌱</div>
              <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>No habits under this category.</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Add your first habit below to start the fire.</p>
            </div>
          ) : (
            filteredHabits.map((habit, i) => {
              const catInfo = CATEGORIES.find(c => c.id === habit.category) || CATEGORIES[0];
              return (
                <motion.div
                  key={habit.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    'card-base p-4 flex flex-col justify-between transition-all group border-l-4',
                    celebrated === habit.id ? 'animate-check-bounce' : ''
                  )}
                  style={{
                    borderLeftColor: catInfo.color,
                    background: isCompleted(habit.id)
                      ? 'color-mix(in srgb, #4A7C59 8%, var(--bg-secondary))'
                      : undefined,
                    borderColor: isCompleted(habit.id)
                      ? 'color-mix(in srgb, #4A7C59 30%, transparent)'
                      : undefined,
                  }}
                >
                  <div className="flex items-center gap-4 w-full">
                    {/* Complete button */}
                    <button
                      onClick={() => !isCompleted(habit.id) && handleCompleteHabit(habit.id)}
                      disabled={isCompleted(habit.id)}
                      className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all"
                      style={{
                        borderColor: isCompleted(habit.id) ? '#4A7C59' : 'var(--border-strong)',
                        background: isCompleted(habit.id) ? '#4A7C59' : 'transparent',
                        color: 'white',
                        cursor: isCompleted(habit.id) ? 'default' : 'pointer',
                      }}
                    >
                      {isCompleted(habit.id) && <Check size={14} />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="font-medium text-base truncate"
                          style={{
                            color: isCompleted(habit.id) ? 'var(--text-muted)' : 'var(--text-primary)',
                            textDecoration: isCompleted(habit.id) ? 'line-through' : 'none',
                          }}
                        >
                          {habit.name}
                        </span>
                        <span
                          className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border"
                          style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            borderColor: catInfo.color,
                            color: catInfo.color,
                          }}
                        >
                          {catInfo.emoji} {catInfo.label}
                        </span>
                      </div>
                      
                      {habit.feeling && (
                        <div className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>
                          Feeling: {habit.feeling}
                        </div>
                      )}

                      {/* Streak counters */}
                      {(habit.currentStreak > 0 || habit.bestStreak > 0) && (
                        <div className="flex items-center gap-1 text-[10px] font-semibold text-amber-700/80 dark:text-amber-500/80 mt-1">
                          <Flame size={10} className="fill-current animate-flicker" />
                          <span>{habit.currentStreak} day streak (best {habit.bestStreak})</span>
                        </div>
                      )}
                    </div>
                    {/* Delete */}
                    <button
                      onClick={() => handleDeleteHabit(habit.id)}
                      className="flex-shrink-0 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--text-faint)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  {/* Completion Note Logging */}
                  {isCompleted(habit.id) && (
                    <div className="mt-2.5 pl-12 flex items-center gap-2 w-full">
                      <span className="text-[10px] text-text-faint italic font-semibold">Note:</span>
                      <input
                        type="text"
                        value={localNotes[habit.id] || ''}
                        onChange={(e) => handleNoteChange(habit.id, e.target.value)}
                        placeholder="Add a log note (e.g., Felt energized, did 15 min)..."
                        className="text-xs px-3 py-1.5 rounded-xl bg-bg-tertiary outline-none border border-border-default text-text-secondary focus:border-accent-saffron/40 flex-1 max-w-md"
                        style={{
                          backgroundColor: 'var(--bg-tertiary)',
                          borderColor: 'var(--border-default)',
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })
          )}
        </section>

        {/* ─── Add Habit Form ─── */}
        <AnimatePresence>
          {showAdd ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="card-base p-5 space-y-4 overflow-hidden"
            >
              <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>New Habit</h3>
              
              <input
                type="text"
                value={newHabitName}
                onChange={e => setNewHabitName(e.target.value)}
                placeholder="What habit will you build?"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }}
              />

              <input
                type="text"
                value={newHabitFeeling}
                onChange={e => setNewHabitFeeling(e.target.value)}
                placeholder="How will it make you feel?"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }}
              />

              {/* Category picker */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Category</span>
                <div className="grid grid-cols-5 gap-1.5">
                  {CATEGORIES.map(cat => {
                    const isSelected = newHabitCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setNewHabitCategory(cat.id)}
                        className="p-2 rounded-xl text-center border transition-all text-xs flex flex-col items-center gap-1"
                        style={{
                          backgroundColor: isSelected ? 'color-mix(in srgb, var(--room-current) 12%, var(--bg-tertiary))' : 'var(--bg-tertiary)',
                          borderColor: isSelected ? 'var(--room-current)' : 'var(--border-default)',
                          color: isSelected ? 'var(--text-primary)' : 'var(--text-muted)',
                        }}
                      >
                        <span className="text-base">{cat.emoji}</span>
                        <span className="text-[9px] font-semibold">{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => { setShowAdd(false); setNewHabitName(''); setNewHabitFeeling(''); setNewHabitCategory('Mind'); }}
                  className="flex-1 py-2.5 rounded-xl text-sm"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)' }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleAddHabit()}
                  disabled={!newHabitName.trim()}
                  className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white animate-pulse"
                  style={{ background: '#C25B3A' }}
                >
                  Add Habit
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setShowAdd(true)}
              className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all"
              style={{
                border: '1.5px dashed var(--border-strong)',
                color: 'var(--text-muted)',
              }}
            >
              <Plus size={16} /> Add a new habit
            </motion.button>
          )}
        </AnimatePresence>

        {/* ─── This Week Completion Progress Circles ─── */}
        <div className="card-base p-5 space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--text-secondary)' }}>
              {showPastHistory ? 'Past 7 Days History' : 'This Week'}
            </h3>
            <button
              onClick={() => setShowPastHistory(p => !p)}
              className="text-xs font-semibold uppercase tracking-wider transition-all hover:opacity-85"
              style={{ color: 'var(--accent-saffron)' }}
            >
              {showPastHistory ? 'Show Mon-Sun' : 'Show Past 7 Days'}
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {displayDates.map(wd => {
              const progressVal = getDayProgress(wd.dateStr);
              const isDone = progressVal === 1 && total > 0;
              const percent = Math.round(progressVal * 100);
              const isSel = selectedDate === wd.dateStr;
              return (
                <div key={wd.dateStr} className="flex flex-col items-center gap-1.5">
                  <button
                    onClick={() => setSelectedDate(wd.dateStr)}
                    className={cn(
                      "w-9 h-9 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all hover:scale-105 active:scale-95"
                    )}
                    style={{
                      borderColor: isSel
                        ? 'var(--accent-saffron)'
                        : wd.isToday
                        ? 'var(--room-current)'
                        : 'var(--border-default)',
                      background: isDone
                        ? 'var(--accent-moss)'
                        : progressVal > 0 && total > 0
                        ? `color-mix(in srgb, var(--room-current) ${percent}%, var(--bg-tertiary))`
                        : 'transparent',
                      color: isDone ? 'white' : 'var(--text-primary)',
                      boxShadow: isSel
                        ? '0 0 8px rgba(194,91,58,0.45)'
                        : wd.isToday
                        ? '0 0 8px rgba(194,91,58,0.25)'
                        : 'none',
                    }}
                    title={`${wd.label}: ${percent}%`}
                  >
                    {isDone ? '✓' : `${percent}%`}
                  </button>
                  <span 
                    className="text-[10px] font-medium" 
                    style={{ color: isSel ? 'var(--accent-saffron)' : wd.isToday ? 'var(--room-current)' : 'var(--text-muted)' }}
                  >
                    {wd.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Rewire Score Milestone Tracker ─── */}
        {streakData && (
          <div className="card-base p-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                Your Rewire Score
              </h3>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold font-serif" style={{ color: 'var(--accent-saffron)' }}>
                  {streakData.rewire_score}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>points earned</span>
              </div>
            </div>
            
            <div className="flex-1 max-w-xs space-y-1">
              <div className="flex justify-between text-[10px]" style={{ color: 'var(--text-muted)' }}>
                <span>Next Milestone</span>
                <span>{streakData.rewire_score % 50}/50 pts</span>
              </div>
              <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${((streakData.rewire_score % 50) / 50) * 100}%`,
                    background: 'var(--accent-saffron)',
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ─── Neuroscience Tip (Habit Wisdom) ─── */}
        <div
          className="card-base p-5 space-y-3 relative overflow-hidden"
          style={{ background: 'color-mix(in srgb, var(--room-current) 6%, var(--bg-secondary))' }}
        >
          <div className="flex items-center justify-between relative z-10">
            <h3 className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--text-secondary)' }}>
              Habit Wisdom
            </h3>
            <ReadAloudButton text={tip} lang="en-IN" size="sm" />
          </div>
          <p className="text-base font-serif italic leading-relaxed relative z-10" style={{ color: 'var(--text-primary)' }}>
            "{tip}"
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
