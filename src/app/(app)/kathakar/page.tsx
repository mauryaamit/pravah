'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray, toDateString, formatDisplayDate } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import DayNavigator from '@/components/shared/DayNavigator';
import FocusMode from '@/components/shared/FocusMode';
import { useAuth } from '@/lib/hooks/useAuth';
import { db } from '@/lib/firebase/client';
import { doc, getDoc, setDoc, collection, getDocs, onSnapshot } from 'firebase/firestore';
import { KATHAKAR_ENTRIES } from './data';

const WRITING_PROMPTS = [
  "A key was left in a door that had not been opened in thirty years...",
  "The river was flowing backward, and only the child at the edge of the bank noticed...",
  "He had exactly one hour before the train arrived, and a secret he could no longer keep..."
];

export default function KathakarPage() {
  const { user, loading: authLoading } = useAuth();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<'today' | 'my-stories'>('today');
  
  // Tab 1 state
  const [isFocusOpen, setIsFocusOpen] = useState(false);

  // Tab 2 state
  const [selectedWriteDate, setSelectedWriteDate] = useState<string>(() => toDateString(new Date()));
  const [storyTitle, setStoryTitle] = useState('');
  const [storyThread, setStoryThread] = useState('');
  const [storyContent, setStoryContent] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [promptIndex, setPromptIndex] = useState(0);
  const [datesWithStories, setDatesWithStories] = useState<Set<string>>(new Set());
  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(new Date());

  const saveTimer = useRef<ReturnType<typeof setTimeout>>();

  // Active index for Tab 1
  const activeIndex = getDayIndexForArray(currentDate, KATHAKAR_ENTRIES.length);
  const activeEntry = KATHAKAR_ENTRIES[activeIndex];

  const textToSpeak = `${activeEntry.story_title}. ${activeEntry.summary}. ${activeEntry.before_you_read}. ${activeEntry.the_story}. What this story knows: ${activeEntry.what_this_story_knows}.`;

  // Calculate word count
  useEffect(() => {
    const cleanText = storyContent.trim();
    if (!cleanText) {
      setWordCount(0);
    } else {
      const words = cleanText.split(/\s+/);
      setWordCount(words.length);
    }
  }, [storyContent]);

  // Load written stories dates list for calendar dots
  useEffect(() => {
    const localDb = db;
    if (!user || !localDb) return;
    const loadDates = async () => {
      try {
        const querySnapshot = await getDocs(collection(localDb, `users/${user.uid}/kathakar`));
        const dates = new Set<string>();
        querySnapshot.forEach((doc) => {
          dates.add(doc.id);
        });
        setDatesWithStories(dates);
      } catch (e) {
        console.error("Error loading story dates:", e);
      }
    };
    loadDates();
  }, [user, saveStatus]);

  // Load user story content when writing date changes
  useEffect(() => {
    const localDb = db;
    if (!user || !localDb) return;
    const fetchStory = async () => {
      try {
        const docRef = doc(localDb, `users/${user.uid}/kathakar`, selectedWriteDate);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setStoryTitle(data.title || '');
          setStoryThread(data.thread || '');
          setStoryContent(data.content || '');
        } else {
          setStoryTitle('');
          setStoryThread('');
          setStoryContent('');
        }
        setSaveStatus('idle');
      } catch (e) {
        console.error("Error loading user story:", e);
      }
    };
    fetchStory();
  }, [user, selectedWriteDate]);

  // Debounced auto-save for user story
  useEffect(() => {
    const localDb = db;
    if (!user || !localDb) return;
    if (saveStatus === 'saving') return;

    // Trigger save only if there's actual content changes compared to what would be loaded
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      if (!storyTitle.trim() && !storyContent.trim() && !storyThread.trim()) {
        return;
      }
      setSaveStatus('saving');
      try {
        await setDoc(doc(localDb, `users/${user.uid}/kathakar`, selectedWriteDate), {
          title: storyTitle,
          thread: storyThread,
          content: storyContent,
          updatedAt: new Date()
        });
        setSaveStatus('saved');
        setDatesWithStories(prev => {
          const next = new Set(prev);
          next.add(selectedWriteDate);
          return next;
        });
      } catch (e) {
        console.error("Error saving user story:", e);
        setSaveStatus('idle');
      }
    }, 2000);

    return () => clearTimeout(saveTimer.current);
  }, [storyTitle, storyContent, storyThread, user, selectedWriteDate]);

  // Calendar rendering helper
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

  const changeMonth = (val: number) => {
    const d = new Date(currentMonthDate);
    d.setMonth(d.getMonth() + val);
    setCurrentMonthDate(d);
  };

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6 select-none">
        
        {/* Header with Title and Tab Selector */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Creative Sanctuary</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>कथाकार - Kathakar</h1>
          </div>
          
          {/* Tab buttons */}
          <div className="flex gap-1 bg-[var(--bg-tertiary)] p-0.5 rounded-full">
            <button
              onClick={() => setActiveTab('today')}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer"
              style={{
                background: activeTab === 'today' ? 'var(--accent-saffron)' : 'transparent',
                color: activeTab === 'today' ? 'white' : 'var(--text-muted)'
              }}
            >
              आज की कहानी · Today's Story
            </button>
            <button
              onClick={() => setActiveTab('my-stories')}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer"
              style={{
                background: activeTab === 'my-stories' ? 'var(--accent-saffron)' : 'transparent',
                color: activeTab === 'my-stories' ? 'white' : 'var(--text-muted)'
              }}
            >
              मेरी कहानियाँ · My Stories
            </button>
          </div>
        </div>

        {activeTab === 'today' ? (
          /* TODAY'S STORY TAB */
          <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                  {activeEntry.origin} {activeEntry.origin_hi ? `· ${activeEntry.origin_hi}` : ''}
                </span>
                <span 
                  className="text-xs px-2.5 py-1 rounded-full font-medium capitalize"
                  style={{
                    background: activeEntry.tradition === 'indian' ? 'color-mix(in srgb, var(--accent-saffron) 15%, transparent)' : 'color-mix(in srgb, var(--accent-moonblue) 15%, transparent)',
                    color: activeEntry.tradition === 'indian' ? 'var(--accent-saffron)' : 'var(--accent-moonblue)'
                  }}
                >
                  {activeEntry.tradition} Tradition
                </span>
                <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
                  ⏱️ {activeEntry.estimated_read} read
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                <RevisitButton roomId="kathakar" roomName="Kathakar" contentTitle={activeEntry.story_title} contentSummary={activeEntry.origin} />
                <SutraNoteButton roomId="kathakar" roomName="Kathakar" contentTitle={activeEntry.story_title} />
                <button
                  onClick={() => setIsFocusOpen(true)}
                  className="px-3 py-1 rounded-full text-xs font-medium border transition-all hover:bg-bg-tertiary flex items-center gap-1.5 cursor-pointer"
                  style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)', background: 'var(--bg-primary)' }}
                >
                  Focus
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentDate.toISOString()}
                variants={FADE_UP}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {/* Summary box at the top */}
                <div className="p-5 border-l-4 rounded bg-[var(--bg-secondary)]" style={{ borderColor: 'var(--accent-saffron)' }}>
                  <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: 'var(--accent-saffron)' }}>
                    संक्षेप · In Brief
                  </h4>
                  <p className="font-serif italic text-lg leading-relaxed text-[var(--text-primary)]">
                    {activeEntry.summary}
                  </p>
                </div>

                {/* Day Navigator */}
                <div className="flex justify-center">
                  <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
                </div>

                {/* Story Title */}
                <div className="space-y-1 text-center py-4">
                  <h2 className="font-serif text-3xl sm:text-4xl leading-tight" style={{ color: 'var(--text-primary)' }}>
                    {activeEntry.story_title}
                  </h2>
                  {activeEntry.story_title_hi && (
                    <p className="font-devanagari text-lg text-stone-500">
                      {activeEntry.story_title_hi}
                    </p>
                  )}
                </div>

                {/* Before You Read */}
                <div className="p-4 border border-dashed rounded text-center" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1 font-semibold">Before You Read</p>
                  <p className="text-sm italic" style={{ color: 'var(--text-secondary)' }}>
                    {activeEntry.before_you_read}
                  </p>
                </div>

                {/* Story Card Container */}
                <div className="bg-[var(--bg-secondary)] rounded-xl px-8 py-10 md:px-12 md:py-12 max-w-3xl mx-auto shadow-sm w-full space-y-6">
                  {/* Story Text */}
                  <div className="font-serif text-lg md:text-xl leading-[2.0] text-justify" style={{ color: 'var(--text-secondary)' }}>
                    <div className="space-y-6">
                      {activeEntry.the_story.split('\n\n').map((para: string, i: number) => (
                        <p key={i}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  <hr className="my-6 border-[var(--text-muted)] opacity-20" />

                  {/* What this story knows */}
                  <div className="space-y-2">
                    <span className="text-xs font-sans uppercase tracking-widest font-semibold block mb-1" style={{ color: 'var(--accent-saffron)' }}>
                      What this story knows:
                    </span>
                    <p className="text-base font-sans italic" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                      {activeEntry.what_this_story_knows}
                    </p>
                  </div>

                  {/* Emotional Core */}
                  <div className="text-center pt-2">
                    <p className="font-sans text-xs tracking-wider" style={{ color: 'var(--text-faint)' }}>
                      {activeEntry.emotional_core}
                    </p>
                  </div>
                </div>

                {/* After You Read */}
                <div className="text-center py-6 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2 font-semibold">After You Read</p>
                  <p className="font-serif italic text-lg leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--text-primary)' }}>
                    &ldquo;{activeEntry.after_you_read}&rdquo;
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Focus Mode Component */}
            <FocusMode
              isOpen={isFocusOpen}
              onClose={() => setIsFocusOpen(false)}
              title={activeEntry.story_title}
              author={activeEntry.origin}
              textToSpeak={activeEntry.the_story}
            >
              <div className="max-w-xl mx-auto space-y-6 text-justify text-xl leading-relaxed font-serif">
                {activeEntry.the_story.split('\n\n').map((para: string, idx: number) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </FocusMode>
          </div>
        ) : (
          /* MY STORIES WRITING SPACE TAB */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Side: Editor Area */}
            <div className="md:col-span-2 space-y-4">
              
              {/* Date display & Word count banner */}
              <div className="flex justify-between items-center text-xs text-[var(--text-muted)] border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
                <span>Writing for: <strong style={{ color: 'var(--text-primary)' }}>{selectedWriteDate}</strong></span>
                <span>{wordCount} words</span>
              </div>

              {/* Title input */}
              <input
                type="text"
                placeholder="Give your story a name..."
                value={storyTitle}
                onChange={(e) => { setStoryTitle(e.target.value); setSaveStatus('idle'); }}
                className="w-full text-2xl font-serif font-light bg-transparent border-none outline-none focus:ring-0 p-0"
                style={{ color: 'var(--text-primary)' }}
              />

              {/* Thread/Tag input */}
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <span>Thread:</span>
                <input
                  type="text"
                  placeholder="e.g. Memory, Journey, Fear"
                  value={storyThread}
                  onChange={(e) => { setStoryThread(e.target.value); setSaveStatus('idle'); }}
                  className="bg-transparent border-none outline-none focus:ring-0 p-0 text-xs font-semibold text-[var(--text-secondary)]"
                />
              </div>

              {/* Main textarea */}
              <textarea
                value={storyContent}
                onChange={(e) => { setStoryContent(e.target.value); setSaveStatus('idle'); }}
                placeholder="Write your story here..."
                rows={15}
                className="w-full bg-transparent border-none outline-none focus:ring-0 resize-none font-serif text-lg leading-relaxed p-0"
                style={{ color: 'var(--text-secondary)' }}
              />

              {/* Bottom save indicator and Prompts */}
              <div className="flex justify-between items-center text-xs">
                <span className="text-[var(--text-faint)] italic">
                  {saveStatus === 'saving' && 'Saving...'}
                  {saveStatus === 'saved' && 'Saved to Cloud'}
                </span>

                {/* Need a start? Prompts generator */}
                {!storyContent.trim() && (
                  <button
                    onClick={() => {
                      setStoryContent(WRITING_PROMPTS[promptIndex]);
                      setPromptIndex((prev) => (prev + 1) % WRITING_PROMPTS.length);
                      setSaveStatus('idle');
                    }}
                    className="text-[var(--accent-saffron)] font-medium hover:underline cursor-pointer"
                  >
                    Need a start? Try a prompt
                  </button>
                )}
              </div>
            </div>

            {/* Right Side: Calendar & Selection */}
            <div className="space-y-4">
              <div className="bg-[var(--bg-secondary)] rounded-xl p-4 border" style={{ borderColor: 'var(--border-default)' }}>
                <div className="flex justify-between items-center mb-4">
                  <button onClick={() => changeMonth(-1)} className="text-xs cursor-pointer hover:text-[var(--text-primary)]">◀</button>
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {currentMonthDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <button onClick={() => changeMonth(1)} className="text-xs cursor-pointer hover:text-[var(--text-primary)]">▶</button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-[var(--text-muted)] mb-2">
                  <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day) => {
                    const isSelected = selectedWriteDate === day.dateStr;
                    const hasStory = datesWithStories.has(day.dateStr);
                    
                    return (
                      <button
                        key={day.dateStr}
                        onClick={() => setSelectedWriteDate(day.dateStr)}
                        disabled={!day.isCurrentMonth}
                        className={`h-8 flex flex-col justify-center items-center rounded transition-all cursor-pointer relative ${
                          !day.isCurrentMonth ? 'opacity-20 cursor-default' : 'hover:bg-[var(--bg-tertiary)]'
                        }`}
                        style={{
                          backgroundColor: isSelected ? 'var(--accent-saffron)' : 'transparent',
                          color: isSelected ? 'white' : 'var(--text-primary)'
                        }}
                      >
                        <span className="text-xs">{day.dayNumber}</span>
                        {/* Dot indicating content */}
                        {hasStory && (
                          <span 
                            className="absolute bottom-1 w-1 h-1 rounded-full"
                            style={{ backgroundColor: isSelected ? 'white' : 'var(--accent-saffron)' }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 border rounded bg-[var(--bg-secondary)] space-y-2" style={{ borderColor: 'var(--border-default)' }}>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold text-[var(--text-muted)]">Writing Instruction</h4>
                <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
                  Pick any date on the calendar to log or edit your stories. All stories are stored securely in Firestore and auto-saved every two seconds while typing.
                </p>
              </div>
            </div>

          </div>
        )}

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-[11px]" style={{ color: 'var(--text-faint)' }}>
            A story is a shell that holds a kernel of truth. The shell falls away; the truth remains.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
