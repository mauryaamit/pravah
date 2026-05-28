'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear, toDateString, getDayIndexForArray } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { writeCleanupMarker } from '@/lib/firebase/cleanup';
import { Copy, Check, Heart, BookOpen, Share2 } from 'lucide-react';
import { db } from '@/lib/firebase/client';
import { doc, setDoc, deleteDoc, collection, onSnapshot, getDoc } from 'firebase/firestore';
import { useAuth } from '@/lib/hooks/useAuth';
import FocusMode from '@/components/shared/FocusMode';
import { POEMS } from '@/lib/constants/poems';

type Script = 'hi' | 'roman' | 'en';
type ResonanceWord = 'moved' | 'puzzling' | 'timeless' | 'tender' | 'searching' | 
                     'quiet' | 'vast' | 'aching' | 'clarifying' | 'unsettling';

export interface Poem {
  id: string;
  title: string;
  titleHi: string;
  author: string;
  authorHi: string;
  period: string;
  tradition: string;
  hi: string[];
  roman: string[];
  en: string[];
  authorBio: string;
}

const POEM_RESONANCES: Record<string, ResonanceWord[]> = {
  'ghalib-khwahish': ['searching', 'aching', 'timeless'],
  'faiz-mohabbat': ['moved', 'aching', 'quiet'],
  'kabir-maya': ['puzzling', 'clarifying', 'unsettling'],
  'bachhan-madhushala': ['tender', 'quiet', 'vast'],
  'wordsworth-daffodils': ['tender', 'quiet', 'vast'],
  'dickinson-hope': ['tender', 'moved', 'timeless'],
  'frost-woods': ['quiet', 'vast', 'aching'],
  'gibran-love': ['moved', 'tender', 'timeless'],
};

function getResonanceWords(poemId: string): ResonanceWord[] {
  return POEM_RESONANCES[poemId] ?? ['moved', 'timeless', 'quiet'];
}

export default function SukoonPage() {
  const { user } = useAuth();
  const [script, setScript] = useState<Script>('hi');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  
  const activePoemIndex = getDayIndexForArray(currentDate, POEMS.length);
  const activePoem = POEMS[activePoemIndex];
  
  const [expandedPoem, setExpandedPoem] = useState<string | null>(activePoem.id);
  const [openTranslations, setOpenTranslations] = useState<Record<string, boolean>>({});
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  // Anthology & Focus Mode states
  const [anthologyData, setAnthologyData] = useState<Record<string, { saved: boolean, resonance?: string }>>({});
  const [anthologyIds, setAnthologyIds] = useState<Set<string>>(new Set());
  const [onlyAnthology, setOnlyAnthology] = useState(false);
  const [focusPoem, setFocusPoem] = useState<Poem | null>(null);
  const [selectedResonance, setSelectedResonance] = useState<string | null>(null);

  // Sync expanded state when poem changes
  useEffect(() => {
    setExpandedPoem(activePoem.id);
  }, [activePoem.id]);

  // Load selected resonance for the current date and script language
  useEffect(() => {
    if (!user || !db) return;
    const dateStr = toDateString(currentDate);
    const poemLang = script;
    const docRef = doc(db, 'users', user.uid, 'sukoon', 'resonances', dateStr, poemLang);
    const getRes = async () => {
      try {
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setSelectedResonance(snap.data().word);
        } else {
          setSelectedResonance(null);
        }
      } catch (e) {
        setSelectedResonance(null);
      }
    };
    getRes();
  }, [user, currentDate, script]);

  // Sync anthology
  useEffect(() => {
    if (!user || !db) return;
    const q = collection(db, `users/${user.uid}/anthology`);
    const unsub = onSnapshot(q, (snap) => {
      const data: Record<string, { saved: boolean, resonance?: string }> = {};
      snap.docs.forEach(d => {
        data[d.id] = { saved: true, resonance: d.data().resonance };
      });
      setAnthologyData(data);
      setAnthologyIds(new Set(Object.keys(data)));
    }, (err) => {
      console.error('Failed to load anthology:', err);
    });
    return unsub;
  }, [user]);

  const toggleAnthology = async (poemId: string) => {
    if (!user || !db) return;
    const docRef = doc(db, `users/${user.uid}/anthology`, poemId);
    if (anthologyIds.has(poemId)) {
      await deleteDoc(docRef);
    } else {
      const payload: any = { saved: true, savedAt: new Date() };
      if (selectedResonance && poemId === activePoem.id) {
        payload.resonance = selectedResonance;
      }
      await setDoc(docRef, payload);
    }
  };

  const handleSelectResonance = async (word: string) => {
    setSelectedResonance(word);
    if (!user || !db) return;
    const dateStr = toDateString(currentDate);
    const poemLang = script;

    const docPath = `users/${user.uid}/sukoon/resonances/${dateStr}/${poemLang}`;
    const resRef = doc(db, 'users', user.uid, 'sukoon', 'resonances', dateStr, poemLang);
    await setDoc(resRef, {
      word,
      poemTitle: activePoem.title,
      date: dateStr
    });

    await writeCleanupMarker(user.uid, docPath, dateStr);

    // If active poem is already saved in the anthology, attach the resonance tag permanently
    if (anthologyIds.has(activePoem.id)) {
      const authRef = doc(db, `users/${user.uid}/anthology`, activePoem.id);
      await setDoc(authRef, { resonance: word }, { merge: true });
    }
  };

  const groupLinesIntoCouplets = (linesList: string[]) => {
    const result: string[][] = [];
    let current: string[] = [];
    for (const line of linesList) {
      if (line.trim() === '') {
        if (current.length > 0) {
          result.push(current);
          current = [];
        }
      } else {
        current.push(line);
      }
    }
    if (current.length > 0) {
      result.push(current);
    }
    return result;
  };

  const handleCopySher = (key: string, text: string, author: string) => {
    navigator.clipboard.writeText(`${text}\n- ${author}`);
    setCopiedIndex(key);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleTranslation = (key: string) => {
    setOpenTranslations(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const linesForActive = script === 'hi' ? activePoem.hi : script === 'roman' ? activePoem.roman : activePoem.en;
  const visiblePoems = onlyAnthology ? POEMS.filter(p => anthologyIds.has(p.id)) : POEMS;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="section-label">Poetry Room</p>
              <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>सुकून - Sukoon</h1>
            </div>
            <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Poetry that does not merely rhyme, but lives. Full poems. Deep commentary. 
            Let the words land slowly.
          </p>

          {/* Toggles */}
          <div className="flex flex-wrap gap-4 items-center justify-between pt-2 border-t border-b py-2" style={{ borderColor: 'var(--border-default)' }}>
            {/* Script toggle */}
            <div className="flex gap-2">
              {(['hi', 'roman', 'en'] as Script[]).map(s => (
                <button
                  key={s}
                  onClick={() => setScript(s)}
                  className="px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer"
                  style={{
                    background: script === s ? 'var(--accent-saffron)' : 'var(--bg-tertiary)',
                    color: script === s ? 'white' : 'var(--text-muted)',
                  }}
                >
                  {s === 'hi' ? 'हिन्दी' : s === 'roman' ? 'Roman' : 'English'}
                </button>
              ))}
            </div>

            {/* Anthology filter */}
            <button
              onClick={() => setOnlyAnthology(!onlyAnthology)}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 border cursor-pointer"
              style={{
                borderColor: onlyAnthology ? 'var(--accent-saffron)' : 'var(--border-default)',
                background: onlyAnthology ? 'color-mix(in srgb, var(--accent-saffron) 10%, var(--bg-tertiary))' : 'var(--bg-tertiary)',
                color: onlyAnthology ? 'var(--accent-saffron)' : 'var(--text-muted)',
              }}
            >
              <Heart size={12} className={onlyAnthology ? 'fill-current' : ''} />
              My Anthology ({anthologyIds.size})
            </button>
          </div>
        </motion.div>

        {/* Poem of the Day - highlighted */}
        {!onlyAnthology && (
          <motion.div
            variants={FADE_UP}
            initial="initial"
            animate="animate"
            className="card-base p-1 relative overflow-hidden"
            style={{ border: '1px solid var(--accent-saffron)', background: 'color-mix(in srgb, var(--accent-saffron) 4%, var(--bg-secondary))' }}
          >
            {activePoem.id === 'ghalib-khwahish' && (
              <div 
                className="absolute inset-0 bg-cover bg-center pointer-events-none z-0" 
                style={{ backgroundImage: "url('/paintings/starry-night.jpg')", opacity: 0.08 }} 
              />
            )}
            <div className="p-4 relative z-10">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold" style={{ color: 'var(--accent-saffron)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Poem of the Day
                </span>
                <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                  <ReadAloudButton
                    text={linesForActive.filter(l => l.trim()).join('\n')}
                    lang={script === 'en' ? 'en-IN' : 'hi-IN'}
                    size="sm"
                  />
                  <RevisitButton
                    roomId="sukoon"
                    roomName="Sukoon"
                    contentTitle={activePoem.title}
                    contentSummary={activePoem.author + ' - ' + activePoem.period}
                  />
                  <SutraNoteButton
                    roomId="sukoon"
                    roomName="Sukoon"
                    contentTitle={activePoem.title}
                    className=""
                  />
                  <button
                    onClick={() => setFocusPoem(activePoem)}
                    className="px-2.5 py-1 rounded-full text-xs font-medium border transition-all hover:bg-bg-tertiary flex items-center gap-1 cursor-pointer"
                    style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)', background: 'var(--bg-primary)' }}
                  >
                    Focus
                  </button>
                  <button
                    onClick={() => toggleAnthology(activePoem.id)}
                    className="p-1 rounded-full border transition-all hover:bg-bg-tertiary flex items-center justify-center w-7 h-7 cursor-pointer"
                    style={{ borderColor: 'var(--border-default)', color: anthologyIds.has(activePoem.id) ? 'var(--accent-saffron)' : 'var(--text-muted)', background: 'var(--bg-primary)' }}
                    title={anthologyIds.has(activePoem.id) ? "Remove from Anthology" : "Save to Anthology"}
                  >
                    <Heart size={14} className={anthologyIds.has(activePoem.id) ? 'fill-current' : ''} />
                  </button>
                  <span className="text-xs pl-2" style={{ color: 'var(--text-faint)' }}>{activePoem.tradition}</span>
                </div>
              </div>
              <h2 className="font-serif text-xl cursor-pointer" style={{ color: 'var(--text-primary)' }} onClick={() => setExpandedPoem(expandedPoem === activePoem.id ? null : activePoem.id)}>
                {script === 'hi' ? activePoem.titleHi : activePoem.title}
              </h2>
              <p className="text-sm mt-0.5" style={{ color: activePoem.id === 'ghalib-khwahish' ? 'var(--accent-saffron)' : 'var(--text-muted)' }}>
                {script === 'hi' ? activePoem.authorHi : activePoem.author} · {activePoem.period}
              </p>

              {/* Resonance Word Tagging */}
              <div className="flex gap-2 items-center mt-4 border-t pt-3" style={{ borderColor: 'var(--border-default)' }}>
                <span className="text-[11px]" style={{ color: 'var(--text-faint)' }}>Resonance:</span>
                {getResonanceWords(activePoem.id).map(word => {
                  const isSelected = selectedResonance === word;
                  return (
                    <button
                      key={word}
                      onClick={() => handleSelectResonance(word)}
                      className="px-3 py-0.5 rounded-full text-[11px] transition-all border font-serif italic cursor-pointer"
                      style={{
                        borderColor: isSelected ? 'var(--accent-saffron)' : 'var(--border-default)',
                        background: isSelected ? 'color-mix(in srgb, var(--accent-saffron) 15%, var(--bg-secondary))' : 'transparent',
                        color: isSelected ? 'var(--accent-saffron)' : 'var(--text-muted)',
                        opacity: selectedResonance && !isSelected ? 0.4 : 1
                      }}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* All poems / Anthology view */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          animate="animate"
          className="space-y-4"
        >
          {visiblePoems.map(poem => {
            const lines = script === 'hi' ? poem.hi : script === 'roman' ? poem.roman : poem.en;
            const isExpanded = expandedPoem === poem.id;
            const poemResonance = anthologyData[poem.id]?.resonance;

            return (
              <motion.div
                key={poem.id}
                variants={STAGGER_ITEM}
                className="card-base overflow-hidden relative"
                style={poem.id === 'ghalib-khwahish' ? {
                  borderColor: 'var(--accent-saffron)',
                } : undefined}
              >
                {/* Custom backgrounds for Ghalib */}
                {poem.id === 'ghalib-khwahish' && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center pointer-events-none z-0" 
                    style={{ backgroundImage: "url('/paintings/starry-night.jpg')", opacity: 0.08 }} 
                  />
                )}

                {/* Poem header */}
                <div className="w-full relative z-10">
                  <div className="flex items-start justify-between gap-3 p-5">
                    <button
                      onClick={() => setExpandedPoem(isExpanded ? null : poem.id)}
                      className="flex-1 text-left space-y-2 cursor-pointer"
                    >
                      <div>
                        <h3 className="font-serif text-lg flex items-center flex-wrap gap-2" style={{ color: 'var(--text-primary)' }}>
                          {script === 'hi' ? poem.titleHi : poem.title}
                          {poemResonance && (
                            <span className="inline-block text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border"
                                  style={{ 
                                    color: 'var(--accent-saffron)', 
                                    borderColor: 'color-mix(in srgb, var(--accent-saffron) 30%, transparent)',
                                    background: 'color-mix(in srgb, var(--accent-saffron) 8%, transparent)' 
                                  }}>
                              {poemResonance}
                            </span>
                          )}
                        </h3>
                        <p className="text-sm mt-0.5" style={{ 
                          color: poem.id === 'ghalib-khwahish' ? 'var(--accent-saffron)' : 'var(--text-muted)',
                          fontSize: poem.id === 'ghalib-khwahish' ? '16px' : '14px',
                          fontWeight: poem.id === 'ghalib-khwahish' ? '600' : 'normal'
                        }}>
                          {script === 'hi' ? poem.authorHi : poem.author} · {poem.period}
                        </p>
                        {poem.id === 'ghalib-khwahish' ? (
                          <span className="inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border mt-1"
                                style={{ 
                                  color: 'var(--accent-saffron)', 
                                  borderColor: 'color-mix(in srgb, var(--accent-saffron) 30%, transparent)',
                                  background: 'color-mix(in srgb, var(--accent-saffron) 8%, transparent)' 
                                }}>
                            {poem.tradition}
                          </span>
                        ) : (
                          <p className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>{poem.tradition}</p>
                        )}
                      </div>

                      {/* Preview - first 2 non-empty lines */}
                      {!isExpanded && (
                        <p className={`text-sm leading-relaxed ${script === 'hi' ? 'font-devanagari font-medium' : 'font-serif italic'}`}
                          style={{ color: 'var(--text-muted)' }}>
                          {lines.filter(l => l.trim()).slice(0, 2).join(' / ')}…
                        </p>
                      )}
                    </button>

                    <div className="flex items-center gap-2 flex-shrink-0 mt-1" onClick={e => e.stopPropagation()}>
                      <ReadAloudButton
                        text={lines.filter(l => l.trim()).join('\n')}
                        lang={script === 'en' ? 'en-IN' : 'hi-IN'}
                        size="sm"
                      />
                      <RevisitButton
                        roomId="sukoon"
                        roomName="Sukoon"
                        contentTitle={poem.title}
                        contentSummary={poem.author + ' - ' + poem.period}
                      />
                      <SutraNoteButton
                        roomId="sukoon"
                        roomName="Sukoon"
                        contentTitle={poem.title}
                        className=""
                      />
                      <button
                        onClick={() => setFocusPoem(poem)}
                        className="px-2.5 py-1 rounded-full text-xs font-medium border transition-all hover:bg-bg-tertiary flex items-center gap-1 cursor-pointer"
                        style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                      >
                        Focus
                      </button>
                      <button
                        onClick={() => toggleAnthology(poem.id)}
                        className="p-1.5 rounded-full border transition-all hover:bg-bg-tertiary flex items-center justify-center w-7 h-7 cursor-pointer"
                        style={{ borderColor: 'var(--border-default)', color: anthologyIds.has(poem.id) ? 'var(--accent-saffron)' : 'var(--text-muted)' }}
                        title={anthologyIds.has(poem.id) ? "Remove from Anthology" : "Save to Anthology"}
                      >
                        <Heart size={14} className={anthologyIds.has(poem.id) ? 'fill-current' : ''} />
                      </button>
                      <button
                        onClick={() => setExpandedPoem(isExpanded ? null : poem.id)}
                        className="p-1 rounded-full hover:bg-secondary transition-all cursor-pointer"
                      >
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </motion.div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Full poem + commentary */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="border-t" style={{ borderColor: 'var(--border-default)' }}>
                        {/* Full poem text */}
                        <div className="p-6 space-y-1">
                          {poem.id === 'ghalib-khwahish' ? (
                            <div className="space-y-6">
                              {groupLinesIntoCouplets(lines).map((sher, idx) => {
                                const key = `${poem.id}-${idx}`;
                                const showTranslation = openTranslations[key] || false;
                                const isCopied = copiedIndex === key;
                                
                                const enCouplet = groupLinesIntoCouplets(poem.en)[idx] || [];
                                const enText = enCouplet.join('\n');
                                const sherText = sher.join('\n');
                                
                                return (
                                  <div key={idx} className="space-y-2 pb-4 last:pb-0 border-b last:border-0 border-dashed" style={{ borderColor: 'var(--border-default)' }}>
                                    <div className="flex justify-between items-start gap-4">
                                      <div className="space-y-1 flex-1">
                                        {sher.map((line, lIdx) => (
                                          <p
                                            key={lIdx}
                                            className={`leading-relaxed text-base md:text-lg ${script === 'hi' ? 'font-devanagari font-medium' : 'font-serif italic'}`}
                                            style={{ color: 'var(--text-primary)' }}
                                          >
                                            {line}
                                          </p>
                                        ))}
                                      </div>
                                      
                                      <button
                                        onClick={() => handleCopySher(key, sherText, poem.author)}
                                        className="p-1.5 rounded-lg border text-muted hover:text-primary hover:border-strong transition-all flex-shrink-0 cursor-pointer"
                                        title="Copy this couplet"
                                        style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-default)' }}
                                      >
                                        {isCopied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                                      </button>
                                    </div>
                                    
                                    {script !== 'en' && (
                                      <div className="pt-1">
                                        <button
                                          onClick={() => toggleTranslation(key)}
                                          className="text-xs font-semibold uppercase tracking-wider transition-all hover:opacity-80 cursor-pointer"
                                          style={{ color: 'var(--accent-saffron)' }}
                                        >
                                          {showTranslation ? 'Hide Translation' : 'View Translation'}
                                        </button>
                                        <AnimatePresence>
                                          {showTranslation && (
                                            <motion.div
                                              initial={{ height: 0, opacity: 0 }}
                                              animate={{ height: 'auto', opacity: 1 }}
                                              exit={{ height: 0, opacity: 0 }}
                                              className="mt-2 pl-3 border-l-2 overflow-hidden"
                                              style={{ borderColor: 'var(--accent-saffron)' }}
                                            >
                                              {enCouplet.map((line, lIdx) => (
                                                <p
                                                  key={lIdx}
                                                  className="font-serif italic text-sm text-secondary"
                                                  style={{ color: 'var(--text-secondary)' }}
                                                >
                                                  {line}
                                                </p>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    )}

                                    {idx < groupLinesIntoCouplets(lines).length - 1 && (
                                      <div className="text-center py-2 text-faint select-none" style={{ color: 'var(--text-faint)', letterSpacing: '0.2em' }}>
                                        -✦-
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            lines.map((line, i) => (
                              line === '' ? (
                                <div key={i} className="h-3" />
                              ) : (
                                <p key={i}
                                  className={`leading-relaxed ${script === 'hi' ? 'font-devanagari text-base' : 'font-serif italic text-base'}`}
                                  style={{ color: 'var(--text-primary)' }}>
                                  {line}
                                </p>
                              )
                            ))
                          )}
                        </div>

                        {/* Author biography */}
                        <div className="px-6 pb-4 border-t pt-4" style={{ borderColor: 'var(--border-default)' }}>
                          <p className="section-label mb-3">About the Poet</p>
                          <div className="space-y-2">
                            {poem.authorBio.split('\n\n').map((para, i) => (
                              <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Commentary */}
                        <div className="px-6 pb-6 border-t pt-4" style={{ borderColor: 'var(--border-default)' }}>
                          <p className="section-label mb-3">Reading the Poem</p>
                          <div className="space-y-2">
                            {poem.commentary.split('\n\n').map((para, i) => (
                              <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing whisper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center py-6"
        >
          <p className="font-serif italic text-sm" style={{ color: 'var(--text-faint)' }}>
            Poetry is not decoration. It is a different form of thinking.
          </p>
        </motion.div>

        {/* Focus Mode Component */}
        <FocusMode
          isOpen={focusPoem !== null}
          onClose={() => setFocusPoem(null)}
          title={focusPoem ? (script === 'hi' ? focusPoem.titleHi : focusPoem.title) : ''}
          author={focusPoem ? (script === 'hi' ? focusPoem.authorHi : focusPoem.author) : ''}
          textToSpeak={focusPoem ? (script === 'hi' ? focusPoem.hi : script === 'roman' ? focusPoem.roman : focusPoem.en).filter(l => l.trim()).join('\n') : ''}
        >
          {focusPoem && (
            <div className="space-y-6 text-center">
              {focusPoem.id === 'ghalib-khwahish' ? (
                groupLinesIntoCouplets(script === 'hi' ? focusPoem.hi : script === 'roman' ? focusPoem.roman : focusPoem.en).map((sher, idx) => (
                  <div key={idx} className="space-y-2">
                    {sher.map((line, lIdx) => (
                      <p key={lIdx} className="text-xl sm:text-2xl font-serif leading-relaxed italic">{line}</p>
                    ))}
                    {idx < groupLinesIntoCouplets(focusPoem.hi).length - 1 && (
                      <div className="py-4 text-stone-400 select-none">· · ·</div>
                    )}
                  </div>
                ))
              ) : (
                (script === 'hi' ? focusPoem.hi : script === 'roman' ? focusPoem.roman : focusPoem.en).map((line, idx) => (
                  line === '' ? (
                    <div key={idx} className="h-6" />
                  ) : (
                    <p key={idx} className="text-xl sm:text-2xl font-serif leading-relaxed italic">{line}</p>
                  )
                ))
              )}
            </div>
          )}
        </FocusMode>
      </div>
    </PageTransition>
  );
}
