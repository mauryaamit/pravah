'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHabits } from '@/lib/hooks/useHabits';
import { useStreak } from '@/lib/hooks/useStreak';
import { Check, Flame, Plus, Trash2, GripVertical } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import { useUser } from '@/components/providers/UserProvider';
import { getDayOfYear } from '@/lib/utils/date';
import { cn } from '@/lib/utils/cn';

// Static fallback content
const STATIC_HABIT_TIPS = [
  'Stack your new habit after brushing your teeth.',
  'The 2-minute rule: if it takes less than 2 minutes, do it now.',
  'Identity shapes habit. Who are you becoming?',
  '"You don\'t rise to your goals. You fall to your systems." — James Clear',
];

interface Habit {
  id: string;
  name: string;
  feeling: string;
  completedToday: boolean;
  is_active: boolean;
}

export default function AgniPage() {
  const { user } = useUser();
  const [newHabitName, setNewHabitName] = useState('');
  const [newHabitFeeling, setNewHabitFeeling] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [celebrated, setCelebrated] = useState<string | null>(null);

  const dayOfYear = getDayOfYear();
  const tip = STATIC_HABIT_TIPS[dayOfYear % STATIC_HABIT_TIPS.length];

  const { habits = [], loading: isLoading, addHabit, completeHabit, deleteHabit } = useHabits();
  const { streak: streakData } = useStreak();

  const handleCompleteHabit = async (id: string) => {
    setCelebrated(id);
    setTimeout(() => setCelebrated(null), 1500);
    await completeHabit(id);
  };

  const handleAddHabit = async () => {
    if (!newHabitName.trim()) return;
    await addHabit(newHabitName, newHabitFeeling);
    setNewHabitName('');
    setNewHabitFeeling('');
    setShowAdd(false);
  };

  const handleDeleteHabit = async (id: string) => {
    await deleteHabit(id);
  };

  const completedCount = habits.filter(h => h.completedToday).length;
  const total = habits.length;
  const progress = total > 0 ? completedCount / total : 0;

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

        {/* ─── Habit List ─── */}
        <section className="space-y-3">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="skeleton h-16 rounded-xl" />
            ))
          ) : habits.length === 0 ? (
            <div className="card-base p-8 text-center space-y-2">
              <div className="text-4xl">🌱</div>
              <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>No habits yet.</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Add your first habit below to start the fire.</p>
            </div>
          ) : (
            habits.map((habit, i) => (
              <motion.div
                key={habit.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  'card-base p-4 flex items-center gap-4 transition-all',
                  celebrated === habit.id ? 'animate-check-bounce' : ''
                )}
                style={{
                  background: habit.completedToday
                    ? 'color-mix(in srgb, #4A7C59 8%, var(--bg-secondary))'
                    : undefined,
                  borderColor: habit.completedToday
                    ? 'color-mix(in srgb, #4A7C59 30%, transparent)'
                    : undefined,
                }}
              >
                {/* Complete button */}
                <button
                  onClick={() => !habit.completedToday && handleCompleteHabit(habit.id)}
                  disabled={habit.completedToday}
                  className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all"
                  style={{
                    borderColor: habit.completedToday ? '#4A7C59' : 'var(--border-strong)',
                    background: habit.completedToday ? '#4A7C59' : 'transparent',
                    color: 'white',
                    cursor: habit.completedToday ? 'default' : 'pointer',
                  }}
                >
                  {habit.completedToday && <Check size={14} />}
                </button>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-medium"
                    style={{
                      color: habit.completedToday ? 'var(--text-muted)' : 'var(--text-primary)',
                      textDecoration: habit.completedToday ? 'line-through' : 'none',
                    }}
                  >
                    {habit.name}
                  </div>
                  {habit.feeling && (
                    <div className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>
                      Feeling: {habit.feeling}
                    </div>
                  )}
                </div>
                {/* Delete */}
                <button
                  onClick={() => handleDeleteHabit(habit.id)}
                  className="flex-shrink-0 p-1 rounded opacity-0 group-hover:opacity-100"
                  style={{ color: 'var(--text-faint)' }}
                >
                  <Trash2 size={14} />
                </button>
              </motion.div>
            ))
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
              <div className="flex gap-3">
                <button
                  onClick={() => { setShowAdd(false); setNewHabitName(''); setNewHabitFeeling(''); }}
                  className="flex-1 py-2.5 rounded-xl text-sm"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)' }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleAddHabit()}
                  disabled={!newHabitName.trim()}
                  className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white"
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

        {/* ─── Habit Tip ─── */}
        <div
          className="card-base p-4 flex items-start gap-3"
          style={{ background: 'color-mix(in srgb, #C25B3A 5%, var(--bg-secondary))' }}
        >
          <Flame size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#C25B3A' }} />
          <p className="text-sm italic" style={{ color: 'var(--text-secondary)' }}>{tip}</p>
        </div>
      </div>
    </PageTransition>
  );
}
