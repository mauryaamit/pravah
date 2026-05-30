'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { toDateString, getDayIndexForArray } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { writeCleanupMarker } from '@/lib/firebase/cleanup';
import { Copy, Check, Heart, BookOpen, ChevronDown } from 'lucide-react';
import { db } from '@/lib/firebase/client';
import { doc, setDoc, deleteDoc, collection, onSnapshot, getDoc } from 'firebase/firestore';
import { useAuth } from '@/lib/hooks/useAuth';
import FocusMode from '@/components/shared/FocusMode';
import { KAVITALAY_DATA, Poem } from './data';

type Script = 'hi' | 'roman' | 'en';
type EraFilter = 'all' | 'modern' | 'classical';

export default function KavitalayPage() {
  const { user } = useAuth();
  
  // Persistent states per session (localStorage)
  const [script, setScript] = useState<Script>('hi');
  const [eraFilter, setEraFilter] = useState<EraFilter>('all');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  
  // Script / Era persistence
  useEffect(() => {
    const savedScript = localStorage.getItem('kavitalay_script') as Script;
    if (savedScript && ['hi', 'roman', 'en'].includes(savedScript)) {
      setScript(savedScript);
    }
    const savedEra = localStorage.getItem('kavitalay_era_filter') as EraFilter;
    if (savedEra && ['all', 'modern', 'classical'].includes(savedEra)) {
      setEraFilter(savedEra);
    }
  }, []);

  const handleScriptChange = (s: Script) => {
    setScript(s);
    localStorage.setItem('kavitalay_script', s);
  };

  const handleEraChange = (e: EraFilter) => {
    setEraFilter(e);
    localStorage.setItem('kavitalay_era_filter', e);
  };

  const activeDayIndex = getDayIndexForArray(currentDate, KAVITALAY_DATA.length);
  const dayEntry = KAVITALAY_DATA[activeDayIndex];

  const [expandedPoems, setExpandedPoems] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Anthology & Focus Mode states
  const [anthologyData, setAnthologyData] = useState<Record<string, { saved: boolean, resonance?: string }>>({});
  const [anthologyIds, setAnthologyIds] = useState<Set<string>>(new Set());
  const [onlyAnthology, setOnlyAnthology] = useState(false);
  const [focusPoem, setFocusPoem] = useState<Poem | null>(null);
  const [selectedResonances, setSelectedResonances] = useState<Record<string, string>>({});

  // Sync expanded state when date changes
  useEffect(() => {
    setExpandedPoems({});
  }, [currentDate]);

  // Load resonances for the day
  useEffect(() => {
    if (!user || !db) return;
    const dateStr = toDateString(currentDate);
    const getResonances = async () => {
      try {
        const docRef = doc(db!, 'users', user.uid, 'kavitalay', 'resonances', dateStr, script);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setSelectedResonances(prev => ({ ...prev, [dateStr]: snap.data().word }));
        }
      } catch (e) {
        console.error('Failed to load resonances:', e);
      }
    };
    getResonances();
  }, [user, currentDate, script]);

  // Sync anthology
  useEffect(() => {
    if (!user || !db) return;
    const q = collection(db!, `users/${user.uid}/anthology`);
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

  const toggleAnthology = async (poem: Poem) => {
    if (!user || !db) return;
    const docRef = doc(db!, `users/${user.uid}/anthology`, poem.id);
    if (anthologyIds.has(poem.id)) {
      await deleteDoc(docRef);
    } else {
      const dateStr = toDateString(currentDate);
      const payload: any = { saved: true, savedAt: new Date(), poemTitle: poem.title };
      if (selectedResonances[dateStr]) {
        payload.resonance = selectedResonances[dateStr];
      }
      await setDoc(docRef, payload);
    }
  };

  const handleSelectResonance = async (poem: Poem, word: string) => {
    const dateStr = toDateString(currentDate);
    setSelectedResonances(prev => ({ ...prev, [dateStr]: word }));
    if (!user || !db) return;

    const docPath = `users/${user.uid}/kavitalay/resonances/${dateStr}/${script}`;
    const resRef = doc(db!, 'users', user.uid, 'kavitalay', 'resonances', dateStr, script);
    await setDoc(resRef, {
      word,
      poemTitle: poem.title,
      date: dateStr
    });

    await writeCleanupMarker(user.uid, docPath, dateStr);

    if (anthologyIds.has(poem.id)) {
      const authRef = doc(db!, `users/${user.uid}/anthology`, poem.id);
      await setDoc(authRef, { resonance: word }, { merge: true });
    }
  };

  const handleCopyPoem = (poem: Poem, text: string) => {
    const poetDisplay = getPoetDisplay(poem);
    navigator.clipboard.writeText(`${poem.title}\nBy ${poetDisplay}\n\n${text}`);
    setCopiedId(poem.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const togglePoemExpand = (id: string) => {
    setExpandedPoems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper to resolve poet display name by script selection
  const getPoetDisplay = (poem: Poem) => {
    const parts = poem.poet.split('/');
    const devanagariName = parts[0]?.trim();
    const romanName = parts[1]?.trim() || devanagariName;

    if (poem.language === 'other') {
      return romanName;
    }
    if (poem.language === 'urdu') {
      // Urdu is ALWAYS displayed in Devanagari
      return devanagariName;
    }
    if (script === 'hi') {
      return devanagariName;
    }
    return romanName;
  };

  // Helper to extract lines by language & script rules
  const getPoemLines = (poem: Poem) => {
    if (poem.language === 'english') {
      return poem.text_roman ? poem.text_roman.split('\n') : [];
    }
    if (poem.language === 'other') {
      return poem.text_english ? poem.text_english.split('\n') : [];
    }
    // Hindi & Urdu
    if (script === 'hi') {
      return poem.text_devanagari ? poem.text_devanagari.split('\n') : [];
    } else {
      return poem.text_roman ? poem.text_roman.split('\n') : [];
    }
  };

  // Dynamic layout sorting based on script toggle
  const getLanguagesOrder = (selectedScript: Script) => {
    if (selectedScript === 'en') {
      return ['english', 'other', 'hindi', 'urdu'] as const;
    }
    return ['hindi', 'urdu', 'english', 'other'] as const;
  };

  const getSectionLabel = (lang: 'hindi' | 'urdu' | 'english' | 'other') => {
    if (script === 'en') {
      switch (lang) {
        case 'hindi': return 'Hindi Poetry';
        case 'urdu': return 'Urdu Poetry (Devanagari)';
        case 'english': return 'English Poetry';
        case 'other': return 'World Poetry';
      }
    }
    switch (lang) {
      case 'hindi': return 'हिंदी कविता';
      case 'urdu': return 'उर्दू कविता';
      case 'english': return 'English Poetry';
      case 'other': return 'विश्व कविता';
    }
  };

  const sectionsOrder = getLanguagesOrder(script);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="section-label">Poetry Room</p>
              <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>कवितालय - Kavitalay</h1>
            </div>
            <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Four languages. Modern or classical. Seeded daily with the world's most resonant verses. 
            Select scripts, filter eras, and let the poetry rest in your mind.
          </p>

          {/* Era Filter (At very top) */}
          <div className="flex gap-2 mb-4 pt-2">
            {(['all', 'modern', 'classical'] as const).map(e => (
              <button
                key={e}
                onClick={() => handleEraChange(e)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ease-in-out cursor-pointer hover:opacity-90"
                style={{
                  background: eraFilter === e ? 'var(--accent-saffron)' : 'var(--bg-secondary)',
                  color: eraFilter === e ? 'white' : 'var(--text-secondary)',
                  border: '1px solid var(--border-default)'
                }}
              >
                {e === 'all' && 'सब · Show All'}
                {e === 'modern' && 'आधुनिक · Modern'}
                {e === 'classical' && 'शास्त्रीय · Classical'}
              </button>
            ))}
          </div>

          {/* Script Toggles & Anthology */}
          <div className="flex flex-wrap gap-4 items-center justify-between pt-2 border-t border-b py-2" style={{ borderColor: 'var(--border-default)' }}>
            <div className="flex gap-2">
              {(['hi', 'roman', 'en'] as Script[]).map(s => {
                const isActive = script === s;
                return (
                  <button
                    key={s}
                    onClick={() => handleScriptChange(s)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 ease-in-out ${isActive ? 'shadow-sm scale-[1.02]' : ''}`}
                    style={{
                      background: isActive ? 'var(--accent-saffron)' : 'var(--bg-tertiary)',
                      color: isActive ? 'white' : 'var(--text-muted)',
                    }}
                  >
                    {s === 'hi' ? 'हिन्दी' : s === 'roman' ? 'Roman' : 'English'}
                  </button>
                );
              })}
            </div>

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

        {/* Scrollable Language Sections */}
        <div className="space-y-8">
          {sectionsOrder.map(lang => {
            const sectionLabel = getSectionLabel(lang);
            const sectionData = dayEntry[lang];

            // Reconstruct the 3 poems for this section
            const sectionPoems = [sectionData.poem_of_day, ...sectionData.others];

            // Apply era and anthology filters
            const filteredPoems = sectionPoems.filter(p => {
              if (eraFilter !== 'all' && p.era !== eraFilter) return false;
              if (onlyAnthology && !anthologyIds.has(p.id)) return false;
              return true;
            });

            if (filteredPoems.length === 0) return null;

            return (
              <div key={lang} className="space-y-4">
                {/* Thin Divider & Section Label */}
                <div className="flex items-center gap-4 my-8">
                  <div className="h-px flex-1 bg-[var(--bg-tertiary)]" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold">
                    {sectionLabel}
                  </span>
                  <div className="h-px flex-1 bg-[var(--bg-tertiary)]" />
                </div>

                {/* Poem Cards */}
                <motion.div
                  variants={STAGGER_CONTAINER}
                  initial="initial"
                  animate="animate"
                  className="space-y-4"
                >
                  {filteredPoems.map(poem => {
                    const lines = getPoemLines(poem);
                    const isExpanded = expandedPoems[poem.id] || false;
                    const isPoemOfDay = poem.id === sectionData.poem_of_day.id;
                    const hasSaved = anthologyIds.has(poem.id);
                    const resonance = anthologyData[poem.id]?.resonance;

                    const textToSpeak = lines.filter(l => l.trim()).join('\n');
                    const isCopied = copiedId === poem.id;

                    return (
                      <motion.div
                        key={poem.id}
                        variants={STAGGER_ITEM}
                        className={`card-base overflow-hidden relative rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md ${isPoemOfDay ? 'border-l-4' : ''}`}
                        style={{
                          borderColor: isPoemOfDay ? 'var(--accent-saffron)' : 'var(--border-default)',
                          background: isPoemOfDay ? 'color-mix(in srgb, var(--accent-saffron) 3%, var(--bg-secondary))' : 'var(--bg-secondary)'
                        }}
                      >
                        <div className="p-5 relative z-10 space-y-3">
                          {isPoemOfDay && (
                            <div className="text-xs text-[var(--accent-saffron)] uppercase tracking-widest font-bold mb-1">
                              ✦ आज की कविता · Poem of the Day
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-3">
                            <button
                              onClick={() => togglePoemExpand(poem.id)}
                              className="text-left space-y-1 cursor-pointer flex-1"
                            >
                              <h3 className={`font-serif text-lg flex items-center flex-wrap gap-2 ${poem.language === 'urdu' ? 'font-devanagari font-semibold' : ''}`} style={{ color: 'var(--text-primary)' }}>
                                {poem.language === 'urdu' || script === 'hi' ? poem.title_hi || poem.title : poem.title}
                                {resonance && (
                                  <span className="inline-block text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border"
                                        style={{ 
                                          color: 'var(--accent-saffron)', 
                                          borderColor: 'color-mix(in srgb, var(--accent-saffron) 30%, transparent)',
                                          background: 'color-mix(in srgb, var(--accent-saffron) 8%, transparent)' 
                                        }}>
                                    {resonance}
                                  </span>
                                )}
                              </h3>
                              <p className="text-xs text-[var(--text-muted)]">
                                {getPoetDisplay(poem)} {poem.poet_dates ? `· ${poem.poet_dates}` : ''} 
                                {poem.other_language ? ` (${poem.other_language})` : ''}
                              </p>
                              <div className="text-[10px] text-[var(--text-faint)] uppercase tracking-wider font-semibold">
                                {poem.era === 'modern' ? 'Modern Era' : 'Classical Era'}
                              </div>
                            </button>

                            {/* Toolbar Buttons */}
                            <div className="flex items-center gap-1.5 flex-shrink-0 transition-opacity duration-200" onClick={e => e.stopPropagation()}>
                              <ReadAloudButton
                                text={textToSpeak}
                                lang={poem.language === 'english' || poem.language === 'other' ? 'en-IN' : 'hi-IN'}
                                size="sm"
                              />
                              <RevisitButton
                                roomId="kavitalay"
                                roomName="Kavitalay"
                                contentTitle={poem.title}
                                contentSummary={getPoetDisplay(poem)}
                              />
                              <SutraNoteButton
                                roomId="kavitalay"
                                roomName="Kavitalay"
                                contentTitle={poem.title}
                              />
                              <button
                                onClick={() => setFocusPoem(poem)}
                                className="px-2 py-1 rounded border text-[10px] transition-all hover:bg-[var(--bg-tertiary)] cursor-pointer"
                                style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)', background: 'var(--bg-primary)' }}
                              >
                                Focus
                              </button>
                              <button
                                onClick={() => toggleAnthology(poem)}
                                className="p-1 rounded border transition-all hover:bg-[var(--bg-tertiary)] flex items-center justify-center w-7 h-7 cursor-pointer"
                                style={{ borderColor: 'var(--border-default)', color: hasSaved ? 'var(--accent-saffron)' : 'var(--text-muted)', background: 'var(--bg-primary)' }}
                                title={hasSaved ? "Remove from Anthology" : "Save to Anthology"}
                              >
                                <Heart size={13} className={hasSaved ? 'fill-current' : ''} />
                              </button>
                              <button
                                onClick={() => togglePoemExpand(poem.id)}
                                className="p-1 rounded hover:bg-[var(--bg-tertiary)] transition-all cursor-pointer"
                              >
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
                                </motion.div>
                              </button>
                            </div>
                          </div>

                          {/* Preview Line (when collapsed) */}
                          {!isExpanded && (
                            <p className={`text-sm leading-relaxed ${poem.language === 'urdu' || script === 'hi' ? 'font-devanagari font-medium' : 'font-serif italic'}`}
                               style={{ color: 'var(--text-secondary)' }}>
                              {lines.slice(0, 2).join(' / ')}…
                            </p>
                          )}
                        </div>

                        {/* Collapsible Poet Details */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden relative z-10"
                            >
                              <div className="border-t p-5 space-y-4" style={{ borderColor: 'var(--border-default)' }}>
                                {/* Poem body */}
                                <div className="space-y-2">
                                  {lines.map((line, i) => (
                                    line.trim() === '' ? (
                                      <div key={i} className="h-2" />
                                    ) : (
                                      <p key={i}
                                         className={`leading-relaxed text-base ${poem.language === 'urdu' || script === 'hi' ? 'font-devanagari font-medium' : 'font-serif italic'}`}
                                         style={{ color: 'var(--text-primary)' }}>
                                        {line}
                                      </p>
                                    )
                                  ))}
                                </div>

                                {/* Copy Box Button */}
                                <div className="flex justify-end">
                                  <button
                                    onClick={() => handleCopyPoem(poem, textToSpeak)}
                                    className="px-3 py-1 rounded text-xs border flex items-center gap-1.5 hover:bg-[var(--bg-tertiary)] cursor-pointer"
                                    style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                                  >
                                    {isCopied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                                    <span>{isCopied ? 'Copied' : 'Copy Poem'}</span>
                                  </button>
                                </div>

                                {/* Resonance Word Selector */}
                                <div className="flex flex-wrap gap-2 items-center border-t pt-3" style={{ borderColor: 'var(--border-default)' }}>
                                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-faint)]">Resonance:</span>
                                  {poem.resonance_words.map(word => {
                                    const dateStr = toDateString(currentDate);
                                    const isSelected = selectedResonances[dateStr] === word;
                                    return (
                                      <button
                                        key={word}
                                        onClick={() => handleSelectResonance(poem, word)}
                                        className="px-2.5 py-0.5 rounded-full text-[11px] border font-serif italic cursor-pointer transition-all duration-150"
                                        style={{
                                          borderColor: isSelected ? 'var(--accent-saffron)' : 'var(--border-default)',
                                          background: isSelected ? 'color-mix(in srgb, var(--accent-saffron) 15%, var(--bg-secondary))' : 'transparent',
                                          color: isSelected ? 'var(--accent-saffron)' : 'var(--text-muted)',
                                          opacity: selectedResonances[dateStr] && !isSelected ? 0.5 : 1
                                        }}
                                      >
                                        {word}
                                      </button>
                                    );
                                  })}
                                </div>

                                {/* Biography */}
                                <div className="border-t pt-3 space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-faint)]">About the Poet</h4>
                                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                                    {poem.poet_bio}
                                  </p>
                                </div>

                                {/* Meaning */}
                                {poem.meaning && (
                                  <div className="border-t pt-3 space-y-1" style={{ borderColor: 'var(--border-default)' }}>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-faint)]">Meaning & Context</h4>
                                    <p className="text-xs leading-relaxed text-[var(--text-secondary)] italic">
                                      {poem.meaning}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Focus Mode Component */}
        <FocusMode
          isOpen={focusPoem !== null}
          onClose={() => setFocusPoem(null)}
          title={focusPoem ? focusPoem.title : ''}
          author={focusPoem ? getPoetDisplay(focusPoem) : ''}
          textToSpeak={focusPoem ? getPoemLines(focusPoem).filter(l => l.trim()).join('\n') : ''}
        >
          {focusPoem && (
            <div className="space-y-4 text-center max-w-xl mx-auto">
              {getPoemLines(focusPoem).map((line, idx) => (
                line.trim() === '' ? (
                  <div key={idx} className="h-4" />
                ) : (
                  <p key={idx} className={`text-lg sm:text-xl font-serif leading-relaxed ${focusPoem.language === 'urdu' || script === 'hi' ? 'font-devanagari font-medium' : 'italic'}`}>
                    {line}
                  </p>
                )
              ))}
            </div>
          )}
        </FocusMode>

        {/* Footer */}
        <div className="text-center py-8 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-xs text-[var(--text-faint)]">
            Poetry is the language in which man explores his own limits.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
