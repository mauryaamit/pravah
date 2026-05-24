'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSankalps } from '@/lib/hooks/useSankalps';
import { useStreak } from '@/lib/hooks/useStreak';
import { differenceInDays } from 'date-fns';
import { Plus, Target, ChevronRight, Flame } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';
import { cn } from '@/lib/utils/cn';

interface Sankalp {
  id: string;
  title: string;
  identity: string;
  start_date: string;
  cycle_length: number;
  is_complete: boolean;
}

export default function BargadPage() {
  const [showAdd, setShowAdd] = useState(false);
  const [title, setTitle] = useState('');
  const [identity, setIdentity] = useState('');
  const [cycleLength, setCycleLength] = useState(30);

  // Firestore hooks
  const { sankalps = [], loading: isLoading, addSankalp, completeSankalp } = useSankalps();
  const { addRewireScore } = useStreak();

  const handleAddSankalp = async () => {
    if (!title.trim() || !identity.trim()) return;
    const todayStr = new Date().toISOString().slice(0, 10);
    await addSankalp(title, identity, todayStr, cycleLength);
    setShowAdd(false);
    setTitle('');
    setIdentity('');
  };

  const handleCompleteSankalp = async (id: string) => {
    await completeSankalp(id, true);
    await addRewireScore(50);
  };

  const today = new Date();
  const enrichedSankalps = sankalps.map(s => {
    const startDate = new Date(s.start_date);
    const daysPassed = Math.max(0, differenceInDays(today, startDate));
    const progress = Math.min(100, Math.round((daysPassed / (s.cycle_length || 30)) * 100));
    return { ...s, daysPassed, progress };
  });

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <div>
          <h1 className="font-serif text-3xl flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            🌳 Bargad <span className="font-devanagari text-xl ml-1" style={{ color: 'var(--room-bargad)' }}>बरगद</span>
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Your Sankalps - deep goals. Set. Commit. Watch them grow.</p>
        </div>

        {/* Sankalps list */}
        <div className="space-y-4">
          {isLoading ? (
            [1, 2].map(i => <div key={i} className="skeleton h-32 rounded-xl" />)
          ) : enrichedSankalps.length === 0 ? (
            <div className="card-base p-8 text-center space-y-3">
              <div className="text-4xl">🌱</div>
              <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>No Sankalps yet.</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>A Sankalp is not a goal - it is who you are becoming.</p>
            </div>
          ) : (
            enrichedSankalps.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="card-base p-5 space-y-4"
                style={{
                  opacity: s.is_complete ? 0.6 : 1,
                  border: s.is_complete ? '1px solid var(--border-default)' : undefined,
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-base" style={{ color: 'var(--text-primary)', textDecoration: s.is_complete ? 'line-through' : 'none' }}>
                      {s.title}
                    </h3>
                    <p className="text-sm italic mt-0.5" style={{ color: 'var(--room-bargad)' }}>{s.identity}</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'color-mix(in srgb, var(--room-bargad) 12%, transparent)', color: 'var(--room-bargad)' }}>
                    {s.cycle_length}d
                  </span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                    <span>Day {s.daysPassed} of {s.cycle_length}</span>
                    <span>{s.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'var(--room-bargad)' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${s.progress}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                    />
                  </div>
                </div>

                {/* Tree growth visualization */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.ceil(s.cycle_length / 5) }).map((_, idx) => {
                    const filled = (idx * 5) < (s.daysPassed || 0);
                    return (
                      <div
                        key={idx}
                        className="text-xs"
                        style={{ opacity: filled ? 1 : 0.2, fontSize: 14 }}
                      >
                        🌿
                      </div>
                    );
                  })}
                </div>

                {!s.is_complete && s.progress >= 100 && (
                  <button
                    onClick={() => handleCompleteSankalp(s.id)}
                    className="w-full py-2 rounded-xl text-sm font-medium text-white"
                    style={{ background: 'var(--room-bargad)' }}
                  >
                    🎉 Complete Sankalp
                  </button>
                )}
              </motion.div>
            ))
          )}
        </div>

        {/* Add Sankalp */}
        {showAdd ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="card-base p-5 space-y-4"
          >
            <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>New Sankalp</h3>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}
              placeholder="What are you committing to?"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }} />
            <input type="text" value={identity} onChange={e => setIdentity(e.target.value)}
              placeholder="I am becoming... (e.g. 'a person who reads daily')"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }} />
            <div className="flex items-center gap-3">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Cycle length:</span>
              {[21, 30, 66, 90].map(d => (
                <button key={d} onClick={() => setCycleLength(d)}
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background: cycleLength === d ? 'var(--room-bargad)' : 'var(--bg-tertiary)',
                    color: cycleLength === d ? 'white' : 'var(--text-muted)',
                  }}>{d}d</button>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => { setShowAdd(false); setTitle(''); setIdentity(''); }}
                className="flex-1 py-2.5 rounded-xl text-sm"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)' }}>
                Cancel
              </button>
              <button onClick={handleAddSankalp}
                disabled={!title.trim() || !identity.trim()}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white"
                style={{ background: 'var(--room-bargad)' }}>
                Plant Sankalp 🌱
              </button>
            </div>
          </motion.div>
        ) : (
          <button onClick={() => setShowAdd(true)}
            className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium"
            style={{ border: '1.5px dashed var(--border-strong)', color: 'var(--text-muted)' }}>
            <Plus size={16} /> Plant a new Sankalp
          </button>
        )}
      </div>
    </PageTransition>
  );
}
