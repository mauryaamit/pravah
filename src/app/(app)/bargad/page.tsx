'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSankalps } from '@/lib/hooks/useSankalps';
import { useStreak } from '@/lib/hooks/useStreak';
import { differenceInDays, format } from 'date-fns';
import { Plus, Target, ChevronDown, ChevronUp, Flame, Trash2, Calendar, BookOpen, Send } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear, toDateString } from '@/lib/utils/date';
import { cn } from '@/lib/utils/cn';
import { db } from '@/lib/firebase/client';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function BargadPage() {
  const [showAdd, setShowAdd] = useState(false);
  const [title, setTitle] = useState('');
  const [identity, setIdentity] = useState('');
  const [cycleLength, setCycleLength] = useState(30);

  // Firestore hooks
  const { user, sankalps = [], loading: isLoading, addSankalp, completeSankalp, deleteSankalp, addSankalpLog } = useSankalps();
  const { addRewireScore } = useStreak();

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [logs, setLogs] = useState<any[]>([]);
  const [newLogNote, setNewLogNote] = useState('');
  const [savingLog, setSavingLog] = useState(false);

  // Stream logs on demand for the currently expanded Sankalp card
  useEffect(() => {
    if (!user || !db || !expandedId) {
      setLogs([]);
      return;
    }
    const q = query(
      collection(db, `users/${user.uid}/sankalps/${expandedId}/logs`),
      orderBy('createdAt', 'desc')
    );
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map(d => {
        const data = d.data();
        return {
          id: d.id,
          note: data.note || '',
          date: data.date || '',
          createdAt: data.createdAt,
        };
      });
      setLogs(list);
    }, (err) => {
      console.error('Failed to stream sankalp logs:', err);
    });
    return unsub;
  }, [user, expandedId]);

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
    await addRewireScore(50); // award 50 rewire points on milestone completion!
    setExpandedId(null);
  };

  const handleDeleteSankalp = async (id: string) => {
    if (confirm('Are you sure you want to prune this Sankalp?')) {
      await deleteSankalp(id);
      if (expandedId === id) setExpandedId(null);
    }
  };

  const handleAddLog = async (sankalpId: string) => {
    if (!newLogNote.trim()) return;
    setSavingLog(true);
    try {
      await addSankalpLog(sankalpId, newLogNote);
      setNewLogNote('');
    } catch (err) {
      console.error('Failed to add sankalp log:', err);
    } finally {
      setSavingLog(false);
    }
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
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            Your Sankalps represent deep commitments to who you are becoming. Grow them day by day.
          </p>
        </div>

        {/* Sankalps list */}
        <div className="space-y-4">
          {isLoading ? (
            [1, 2].map(i => <div key={i} className="skeleton h-32 rounded-xl" />)
          ) : enrichedSankalps.length === 0 ? (
            <div className="card-base p-8 text-center space-y-3">
              <div className="text-4xl">🌱</div>
              <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>No Sankalps planted yet.</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                A Sankalp is more than a target — it is a daily vote for a new identity. Plant one below.
              </p>
            </div>
          ) : (
            enrichedSankalps.map((s, i) => {
              const isExpanded = expandedId === s.id;
              const formattedStartDate = s.start_date ? format(new Date(s.start_date), 'MMMM d, yyyy') : '';
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={cn(
                    "card-base p-5 space-y-4 border-l-4 transition-all relative",
                    s.is_complete ? 'opacity-65' : ''
                  )}
                  style={{
                    borderLeftColor: 'var(--room-bargad)',
                  }}
                >
                  {/* Top Info section */}
                  <div
                    className="flex justify-between items-start cursor-pointer select-none"
                    onClick={() => setExpandedId(isExpanded ? null : s.id)}
                  >
                    <div className="space-y-1 pr-4">
                      <h3 className="font-serif text-lg font-semibold leading-snug" style={{ color: 'var(--text-primary)', textDecoration: s.is_complete ? 'line-through' : 'none' }}>
                        {s.title}
                      </h3>
                      <p className="text-sm italic font-serif" style={{ color: 'var(--room-bargad)' }}>
                        I am becoming: &ldquo;{s.identity}&rdquo;
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" style={{ color: 'var(--text-faint)' }}>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          Planted {formattedStartDate}
                        </span>
                        <span>•</span>
                        <span>Day {s.daysPassed} of {s.cycle_length}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full font-semibold tracking-wider"
                        style={{ background: 'color-mix(in srgb, var(--room-bargad) 12%, var(--bg-tertiary))', color: 'var(--room-bargad)' }}>
                        {s.cycle_length}d
                      </span>
                      <div className="text-text-faint p-1 hover:text-text-primary transition-all">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </div>

                  {/* Linear progress bar */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span>Growth Progress</span>
                      <span className="font-bold">{s.progress}%</span>
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

                  {/* Vine / Leaf growth visualization */}
                  <div className="flex flex-wrap items-center gap-1.5 py-1 select-none">
                    {Array.from({ length: Math.ceil(s.cycle_length / 5) }).map((_, idx) => {
                      const filled = (idx * 5) < (s.daysPassed || 0);
                      const isLast = idx === Math.ceil(s.cycle_length / 5) - 1;
                      return (
                        <div
                          key={idx}
                          className="transition-all duration-300"
                          style={{
                            opacity: filled ? 1 : 0.2,
                            transform: filled ? 'scale(1.15)' : 'scale(1.0)',
                          }}
                          title={`Milestone ${idx * 5} days`}
                        >
                          {isLast ? '🌳' : '🌿'}
                        </div>
                      );
                    })}
                  </div>

                  {/* Expandable progress logs & options panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-4 pt-3 border-t border-dashed"
                        style={{ borderColor: 'var(--border-default)' }}
                      >
                        {/* Completion / Rewards actions */}
                        {!s.is_complete && (
                          <div className="flex flex-wrap gap-2.5">
                            {s.progress >= 100 ? (
                              <button
                                onClick={() => handleCompleteSankalp(s.id)}
                                className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-white animate-pulse text-center"
                                style={{ background: 'var(--room-bargad)' }}
                              >
                                🎉 Complete Sankalp & Claim +50 pts
                              </button>
                            ) : (
                              <button
                                onClick={() => handleCompleteSankalp(s.id)}
                                className="flex-1 py-2 rounded-xl text-xs font-semibold border text-center transition-all hover:bg-bg-tertiary"
                                style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
                              >
                                Complete Early (Claim points)
                              </button>
                            )}
                          </div>
                        )}

                        {/* Progress Log Timeline input */}
                        {!s.is_complete && (
                          <div className="space-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: 'var(--text-muted)' }}>
                              Log Today&apos;s Reflections
                            </span>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={newLogNote}
                                onChange={e => setNewLogNote(e.target.value)}
                                placeholder="What action or thought did you commit to today?"
                                className="flex-1 text-xs px-3.5 py-2 rounded-xl bg-bg-tertiary border border-border-default outline-none text-text-primary focus:border-accent-saffron/40"
                                style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-default)' }}
                                onKeyDown={e => e.key === 'Enter' && handleAddLog(s.id)}
                              />
                              <button
                                onClick={() => handleAddLog(s.id)}
                                disabled={savingLog || !newLogNote.trim()}
                                className="p-2 rounded-xl flex items-center justify-center text-white transition-all disabled:opacity-40"
                                style={{ background: 'var(--room-bargad)' }}
                              >
                                <Send size={12} />
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Logs Timeline display */}
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: 'var(--text-muted)' }}>
                            Progress Journal Timeline
                          </span>
                          
                          {logs.length === 0 ? (
                            <p className="text-xs italic" style={{ color: 'var(--text-faint)' }}>
                              No logs recorded yet. Add a log to start writing your timeline.
                            </p>
                          ) : (
                            <div className="relative pl-4 space-y-3.5 border-l" style={{ borderColor: 'var(--border-default)' }}>
                              {logs.map(log => (
                                <div key={log.id} className="relative space-y-0.5">
                                  {/* Timeline dot */}
                                  <div
                                    className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full border bg-bg-primary"
                                    style={{ borderColor: 'var(--room-bargad)' }}
                                  />
                                  <div className="text-[10px] font-semibold flex items-center gap-1.5" style={{ color: 'var(--room-bargad)' }}>
                                    <Calendar size={8} />
                                    {log.date}
                                  </div>
                                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    {log.note}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Pruning option */}
                        <div className="flex justify-end pt-2">
                          <button
                            onClick={() => handleDeleteSankalp(s.id)}
                            className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-red-500 hover:text-red-700 transition-colors p-1.5 hover:bg-red-500/10 rounded-xl"
                          >
                            <Trash2 size={12} /> Prune Sankalp
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Add Sankalp Form */}
        {showAdd ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="card-base p-5 space-y-4"
          >
            <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>New Sankalp</h3>
            
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="What are you committing to?"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }}
            />

            <input
              type="text"
              value={identity}
              onChange={e => setIdentity(e.target.value)}
              placeholder="I am becoming... (e.g. 'a person who reads daily')"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }}
            />

            <div className="flex items-center gap-3">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Cycle length:</span>
              {[21, 30, 66, 90].map(d => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setCycleLength(d)}
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background: cycleLength === d ? 'var(--room-bargad)' : 'var(--bg-tertiary)',
                    color: cycleLength === d ? 'white' : 'var(--text-muted)',
                  }}
                >
                  {d}d
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => { setShowAdd(false); setTitle(''); setIdentity(''); }}
                className="flex-1 py-2.5 rounded-xl text-sm"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)' }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddSankalp}
                disabled={!title.trim() || !identity.trim()}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white"
                style={{ background: 'var(--room-bargad)' }}
              >
                Plant Sankalp 🌱
              </button>
            </div>
          </motion.div>
        ) : (
          <button
            onClick={() => setShowAdd(true)}
            className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium"
            style={{ border: '1.5px dashed var(--border-strong)', color: 'var(--text-muted)' }}
          >
            <Plus size={16} /> Plant a new Sankalp
          </button>
        )}
      </div>
    </PageTransition>
  );
}
