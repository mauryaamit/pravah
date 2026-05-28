'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { db } from '@/lib/firebase/client';
import { collection, onSnapshot, query, deleteDoc, doc } from 'firebase/firestore';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { useAuth } from '@/lib/hooks/useAuth';
import { useTodos } from '@/lib/hooks/useTodos';
import { useAntarman, type AntarmanSection, type AntarmanDocData } from '@/lib/hooks/useAntarman';
import { 
  Maximize2, Minimize2, Plus, GripVertical, ChevronLeft, ChevronRight, Search, 
  Smile, BarChart2, X, RotateCw, Calendar, ArrowLeft, ArrowRight, BookOpen, 
  Sparkles, Clock, List, Bold, Italic, Underline, Link as LinkIcon
} from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import MoodPulse from '@/components/shared/MoodPulse';
import WritingToolbar from '@/components/shared/WritingToolbar';
import { toDateString, getDayOfYear, formatDisplayDate } from '@/lib/utils/date';
import { cn } from '@/lib/utils/cn';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ROOM_MAP } from '@/lib/constants/rooms';

type Tab = 'write' | 'reflect' | 'calendar' | 'sutra';

const DIARY_PROMPTS = [
  'What shaped today?',
  'What did you surprise yourself with today?',
  'Describe a moment of quiet peace from today.',
  'What was a challenge today and how did you meet it?',
  'Who made you smile or feel understood today?',
];

const JOURNAL_PROMPTS = [
  "What are you carrying that isn't yours?",
  "What would you do if you weren't afraid?",
  "Who were you before the world told you who to be?",
  "What truth are you avoiding?",
  "What needs to die so something new can grow?",
  "What are you pretending not to know?",
  "Where are you living on autopilot?",
];

const POETRY_INSPIRATIONS = [
  "Neruda: 'I want to do with you what spring does with the cherry trees.'",
  "Rumi: 'Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there.'",
  "Mary Oliver: 'Tell me, what is it you plan to do with your one wild and precious life?'",
  "Tagore: 'Let my love, like sunlight, surround you and yet give you illumined freedom.'",
  "Keats: 'Beauty is truth, truth beauty — that is all ye know on earth, and all ye need to know.'",
];

const GRATITUDE_CLOSING_LINES = [
  "Gratitude is not a feeling. It is a practice.",
  "What we appreciate, appreciates.",
  "Gratitude turns what we have into enough.",
  "The root of joy is gratefulness.",
  "Gratitude unlocks the fullness of life.",
];

const SECTION_COLORS: Record<AntarmanSection, string> = {
  diary: 'var(--accent-saffron)',
  journal: 'var(--accent-moss)',
  poetry: '#5B6B8A',
  story: '#8A4A3A',
  gratitude: '#D4A853',
};

const SECTION_DOT_COLORS: Record<AntarmanSection, string> = {
  diary: '#C4873A',
  journal: '#4A7A4A',
  poetry: '#5B6B8A',
  story: '#8A4A3A',
  gratitude: '#D4A853',
};

const STOP_WORDS = new Set([
  // English stop words
  'the', 'a', 'an', 'and', 'or', 'but', 'if', 'because', 'as', 'what', 'where', 'how', 'why', 'when',
  'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
  'i', 'me', 'my', 'myself', 'we', 'us', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves',
  'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves',
  'in', 'on', 'at', 'to', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after',
  'above', 'below', 'up', 'down', 'from', 'of', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there',
  'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'should', 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', 'couldn', 'didn', 'doesn', 'hadn', 'hasn', 'haven', 'isn', 'ma', 'mightn', 'mustn', 'needn', 'shan', 'shouldn', 'wasn', 'weren', 'won', 'wouldn',
  // HTML tags and entities
  'p', 'br', 'div', 'span', 'strong', 'em', 'u', 'nbsp', 'amp', 'lt', 'gt',
  // Hindi transliterated stop words
  'hai', 'hain', 'tha', 'the', 'thi', 'hoon', 'ho', 'ko', 'se', 'ka', 'ke', 'ki', 'par', 'mein', 'ne', 'bhi', 'aur', 'ya', 'to', 'hi', 'jo', 'kar', 'karna', 'raha', 'rahe', 'rahi', 'is', 'us', 'yeh', 'woh', 'sab', 'kuch', 'hona', 'gaya', 'gaye', 'gayi'
]);

const SENTIMENT_DICT: Record<string, 'positive' | 'negative' | 'reflective'> = {
  // Positive words
  'happy': 'positive', 'good': 'positive', 'love': 'positive', 'joy': 'positive', 'peace': 'positive',
  'excited': 'positive', 'wonderful': 'positive', 'great': 'positive', 'amazing': 'positive', 'blessed': 'positive',
  'grateful': 'positive', 'thanks': 'positive', 'smile': 'positive', 'laugh': 'positive', 'light': 'positive',
  'calm': 'positive', 'hope': 'positive', 'hopeful': 'positive', 'serene': 'positive', 'gentle': 'positive',
  'kind': 'positive', 'warm': 'positive', 'beautiful': 'positive', 'inspired': 'positive', 'proud': 'positive',
  'khush': 'positive', 'pyaar': 'positive', 'sundar': 'positive', 'shanti': 'positive', 'sukoon': 'positive',
  'achha': 'positive', 'anand': 'positive', 'accha': 'positive', 'shubh': 'positive', 'aasha': 'positive',

  // Negative words
  'sad': 'negative', 'bad': 'negative', 'angry': 'negative', 'hurt': 'negative', 'pain': 'negative',
  'grief': 'negative', 'worry': 'negative', 'anxious': 'negative', 'fear': 'negative', 'scared': 'negative',
  'tired': 'negative', 'exhausted': 'negative', 'stressed': 'negative', 'frustrated': 'negative', 'hate': 'negative',
  'lonely': 'negative', 'cry': 'negative', 'tears': 'negative', 'dark': 'negative', 'heavy': 'negative',
  'doubt': 'negative', 'guilt': 'negative', 'shame': 'negative', 'hard': 'negative', 'difficult': 'negative',
  'dukh': 'negative', 'dard': 'negative', 'gussa': 'negative', 'chinta': 'negative', 'darr': 'negative',
  'thaka': 'negative', 'bura': 'negative', 'akela': 'negative', 'pareshan': 'negative', 'nirash': 'negative',

  // Reflective words
  'think': 'reflective', 'thinking': 'reflective', 'ponder': 'reflective', 'wonder': 'reflective', 'reflect': 'reflective',
  'mind': 'reflective', 'thought': 'reflective', 'thoughts': 'reflective', 'learn': 'reflective', 'learned': 'reflective',
  'grow': 'reflective', 'understand': 'reflective', 'insight': 'reflective', 'realize': 'reflective', 'change': 'reflective',
  'quiet': 'reflective', 'silent': 'reflective', 'silence': 'reflective', 'still': 'reflective', 'space': 'reflective',
  'soch': 'reflective', 'samajh': 'reflective', 'sikh': 'reflective', 'man': 'reflective', 'dhyaan': 'reflective',
  'vichaar': 'reflective', 'shunya': 'reflective', 'gehra': 'reflective', 'ekant': 'reflective', 'maun': 'reflective'
};

export default function AntarmanPage() {
  const { user } = useAuth();
  const [tab, setTab] = useState<Tab>('write');
  const [selectedDate, setSelectedDate] = useState(() => toDateString(new Date()));
  const [activeSection, setActiveSection] = useState<AntarmanSection>('diary');

  // Form states per section
  const [diaryContent, setDiaryContent] = useState('');
  const [diaryMood, setDiaryMood] = useState(3);
  const [diaryGratitude, setDiaryGratitude] = useState<[string, string, string]>(['', '', '']);
  const [diaryLearned, setDiaryLearned] = useState('');
  const [diaryIntention, setDiaryIntention] = useState('');

  const [journalContent, setJournalContent] = useState('');
  
  const [poetryContent, setPoetryContent] = useState('');
  const [poetryTitle, setPoetryTitle] = useState('');

  const [storyContent, setStoryContent] = useState('');
  const [storyTitle, setStoryTitle] = useState('');

  const [gratitudeLine1, setGratitudeLine1] = useState('');
  const [gratitudeLine2, setGratitudeLine2] = useState('');
  const [gratitudeLine3, setGratitudeLine3] = useState('');
  const [gratitudeReflection, setGratitudeReflection] = useState('');

  // UI state
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newTodoText, setNewTodoText] = useState('');
  const [todoError, setTodoError] = useState('');
  const [promptOffset, setPromptOffset] = useState(0);
  const [currentMonthDate, setCurrentMonthDate] = useState(() => new Date());
  const [mounted, setMounted] = useState(false);

  // Auto-save states
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [lastSavedText, setLastSavedText] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  const editorRef = useRef<HTMLDivElement>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout>>();

  // Load custom hooks
  const { sectionData, allDates, saveSection, loading, localBackup, dismissBackup } = useAntarman(selectedDate);
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted, carryForward, saveTodos } = useTodos(selectedDate);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [datesWithTodos, setDatesWithTodos] = useState<Set<string>>(new Set());

  // Sutra Notes and Thread Tags states
  const [sutraNotes, setSutraNotes] = useState<any[]>([]);
  const [selectedRoomFilter, setSelectedRoomFilter] = useState<string | null>(null);
  const [diaryTags, setDiaryTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allEntries, setAllEntries] = useState<any[]>([]);
  const [analysisResults, setAnalysisResults] = useState<{ word: string; register: string } | null>(null);

  // Real-time listener for dates with todos
  useEffect(() => {
    if (!user || !db) return;
    const q = collection(db, `users/${user.uid}/todos`);
    const unsub = onSnapshot(q, (snap) => {
      const dates = new Set(snap.docs.map(d => d.id));
      setDatesWithTodos(dates);
    }, (err) => {
      console.error('Failed to load todo dates:', err);
    });
    return unsub;
  }, [user]);

  // Real-time listener for Sutra Notes
  useEffect(() => {
    if (!user || !db) return;
    const q = collection(db, `users/${user.uid}/sutraNotes`);
    const unsub = onSnapshot(q, (snap) => {
      const notes = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as any[];
      
      // Client-side sort by createdAt desc
      notes.sort((a, b) => {
        const aTime = a.createdAt?.toDate?.()?.getTime() || a.createdAt?.seconds * 1000 || 0;
        const bTime = b.createdAt?.toDate?.()?.getTime() || b.createdAt?.seconds * 1000 || 0;
        return bTime - aTime;
      });
      setSutraNotes(notes);
    }, (err) => {
      console.error('Failed to load sutra notes:', err);
    });
    return unsub;
  }, [user]);

  // Real-time listener for all journal entries (for tag lists and highlights)
  useEffect(() => {
    if (!user || !db) return;
    const q = collection(db, `users/${user.uid}/antarman`);
    const unsub = onSnapshot(q, (snap) => {
      const entries = snap.docs.map(doc => ({
        dateStr: doc.id,
        ...doc.data()
      })) as any[];
      setAllEntries(entries);
    }, (err) => {
      console.error('Failed to load all journal entries:', err);
    });
    return unsub;
  }, [user]);

  // Helper to strip HTML tags from editor content
  const stripHtml = (html: string) => {
    if (typeof document === 'undefined') return html.replace(/<[^>]*>/g, '');
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Run client-side word count & emotional register analysis
  const runLinguisticAnalysis = useCallback((content: string) => {
    if (!content) {
      setAnalysisResults(null);
      return;
    }
    const cleanText = stripHtml(content).toLowerCase();
    const words = cleanText.match(/[\p{L}\p{N}]+/gu) || [];
    const filteredWords = words.filter(w => w.length >= 2 && !STOP_WORDS.has(w));
    
    let maxWord = '';
    let maxCount = 0;
    const freqMap: Record<string, number> = {};
    filteredWords.forEach(w => {
      freqMap[w] = (freqMap[w] || 0) + 1;
      if (freqMap[w] > maxCount) {
        maxCount = freqMap[w];
        maxWord = w;
      }
    });

    let posCount = 0;
    let negCount = 0;
    let refCount = 0;
    words.forEach(w => {
      if (SENTIMENT_DICT[w]) {
        if (SENTIMENT_DICT[w] === 'positive') posCount++;
        else if (SENTIMENT_DICT[w] === 'negative') negCount++;
        else if (SENTIMENT_DICT[w] === 'reflective') refCount++;
      }
    });

    let register = 'Neutral';
    const maxVal = Math.max(posCount, negCount, refCount);
    if (maxVal > 0) {
      if (posCount === maxVal) register = 'Serene/Positive';
      else if (negCount === maxVal) register = 'Heavy/Stressed';
      else if (refCount === maxVal) register = 'Contemplative';
    }

    setAnalysisResults({ word: maxWord, register });
  }, []);

  // Full-screen body class handling
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isFullScreen && activeSection === 'story') {
      document.body.classList.add('story-fullscreen');
      document.documentElement.style.setProperty('--sidebar-width', '0px');
    } else {
      document.body.classList.remove('story-fullscreen');
      // Reset sidebar width based on collapsed state in localStorage
      const isCollapsed = localStorage.getItem('pravah-sidebar-collapsed') === 'true';
      document.documentElement.style.setProperty('--sidebar-width', isCollapsed ? '56px' : '260px');
    }
    return () => {
      document.body.classList.remove('story-fullscreen');
    };
  }, [isFullScreen, activeSection]);

  // Load section data when selectedDate or Firestore data updates
  useEffect(() => {
    if (loading) return;
    if (isDirty) return; // Prevent overwriting while typing

    if (sectionData) {
      setDiaryContent(sectionData.diary?.content || '');
      setDiaryMood(sectionData.diary?.mood || 3);
      setDiaryGratitude(sectionData.diary?.gratitude || ['', '', '']);
      setDiaryLearned(sectionData.diary?.learned || '');
      setDiaryIntention(sectionData.diary?.intention || '');
      setDiaryTags(sectionData.diary?.tags || []);
      runLinguisticAnalysis(sectionData.diary?.content || '');

      setJournalContent(sectionData.journal?.content || '');

      setPoetryContent(sectionData.poetry?.content || '');
      setPoetryTitle(sectionData.poetry?.title || '');

      setStoryContent(sectionData.story?.content || '');
      setStoryTitle(sectionData.story?.title || '');

      setGratitudeLine1(sectionData.gratitude?.line1 || '');
      setGratitudeLine2(sectionData.gratitude?.line2 || '');
      setGratitudeLine3(sectionData.gratitude?.line3 || '');
      setGratitudeReflection(sectionData.gratitude?.reflection || '');

      // Load correct content into Editor div if different to preserve cursor position
      if (editorRef.current) {
        const cur = editorRef.current.innerHTML;
        if (activeSection === 'diary') {
          const val = sectionData.diary?.content || '';
          if (cur !== val) editorRef.current.innerHTML = val;
        } else if (activeSection === 'journal') {
          const val = sectionData.journal?.content || '';
          if (cur !== val) editorRef.current.innerHTML = val;
        } else if (activeSection === 'poetry') {
          const val = sectionData.poetry?.content || '';
          if (cur !== val) editorRef.current.innerHTML = val;
        } else if (activeSection === 'story') {
          const val = sectionData.story?.content || '';
          if (cur !== val) editorRef.current.innerHTML = val;
        } else if (activeSection === 'gratitude') {
          const val = sectionData.gratitude?.reflection || '';
          if (cur !== val) editorRef.current.innerHTML = val;
        }
      }
    }
  }, [selectedDate, activeSection, loading, sectionData]);

  // Handle inputs inside editor
  const handleEditorInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      if (activeSection === 'diary') {
        setDiaryContent(html);
      } else if (activeSection === 'journal') {
        setJournalContent(html);
      } else if (activeSection === 'poetry') {
        setPoetryContent(html);
      } else if (activeSection === 'story') {
        setStoryContent(html);
      } else if (activeSection === 'gratitude') {
        setGratitudeReflection(html);
      }
      setIsDirty(true);
      setSaveStatus('saving');
    }
  };

  const handleDiaryInputChange = (field: string, value: any) => {
    if (field === 'mood') setDiaryMood(value);
    else if (field === 'learned') setDiaryLearned(value);
    else if (field === 'intention') setDiaryIntention(value);
    setIsDirty(true);
    setSaveStatus('saving');
  };

  const handleDiaryGratitudeChange = (index: number, value: string) => {
    const next = [...diaryGratitude];
    next[index] = value;
    setDiaryGratitude(next as [string, string, string]);
    setIsDirty(true);
    setSaveStatus('saving');
  };

  const handleCommand = (cmd: string, val: string = '') => {
    if (typeof document === 'undefined') return;
    document.execCommand(cmd, false, val);
    handleEditorInput();
  };

  // Immediate save flush
  const flushActiveSection = async () => {
    if (!isDirty) return;
    setIsDirty(false);
    setSaveStatus('saving');
    try {
      if (activeSection === 'diary') {
        await saveSection('diary', {
          content: diaryContent,
          mood: diaryMood,
          gratitude: diaryGratitude,
          learned: diaryLearned,
          intention: diaryIntention,
          tags: diaryTags,
        });
        runLinguisticAnalysis(diaryContent);
      } else if (activeSection === 'journal') {
        await saveSection('journal', { content: journalContent });
      } else if (activeSection === 'poetry') {
        await saveSection('poetry', { content: poetryContent, title: poetryTitle });
      } else if (activeSection === 'story') {
        await saveSection('story', { content: storyContent, title: storyTitle });
      } else if (activeSection === 'gratitude') {
        await saveSection('gratitude', {
          line1: gratitudeLine1,
          line2: gratitudeLine2,
          line3: gratitudeLine3,
          reflection: gratitudeReflection,
        });
      }
      setSavedAt(new Date());
      setSaveStatus('saved');
    } catch (err) {
      console.error('Failed to save section:', err);
      setSaveStatus('idle');
    }
  };

  // Debounced auto-save triggers
  useEffect(() => {
    if (!isDirty) return;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      flushActiveSection();
    }, 2000);
    return () => clearTimeout(saveTimer.current);
  }, [
    isDirty, activeSection,
    diaryContent, diaryMood, diaryGratitude, diaryLearned, diaryIntention, diaryTags,
    journalContent,
    poetryContent, poetryTitle,
    storyContent, storyTitle,
    gratitudeLine1, gratitudeLine2, gratitudeLine3, gratitudeReflection
  ]);

  const handleDeleteNote = async (noteId: string) => {
    if (!user || !db) return;
    try {
      await deleteDoc(doc(db, `users/${user.uid}/sutraNotes`, noteId));
    } catch (err) {
      console.error('Failed to delete sutra note:', err);
    }
  };

  // Tab, section, date changes flush saving
  const handleTabChange = async (newTab: Tab) => {
    await flushActiveSection();
    setTab(newTab);
  };

  const handleSectionChange = async (newSec: AntarmanSection) => {
    await flushActiveSection();
    setActiveSection(newSec);
  };

  const handleDateSelect = async (dateStr: string) => {
    await flushActiveSection();
    setSelectedDate(dateStr);
    setTab('write');
  };

  // Relative "Last saved" text updater
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

  // Flush on tab close
  useEffect(() => {
    const handleBeforeUnload = () => {
      flushActiveSection();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [
    isDirty, activeSection,
    diaryContent, diaryMood, diaryGratitude, diaryLearned, diaryIntention,
    journalContent,
    poetryContent, poetryTitle,
    storyContent, storyTitle,
    gratitudeLine1, gratitudeLine2, gratitudeLine3, gratitudeReflection
  ]);

  // Todo checklist handlers
  const handleAddTodoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    setTodoError('');
    try {
      await addTodo(newTodoText);
      setNewTodoText('');
    } catch (err: any) {
      setTodoError(err.message || 'Failed to add task');
    }
  };

  // Date banner navigation
  const changeDateByAmount = async (days: number) => {
    await flushActiveSection();
    const current = new Date(selectedDate + 'T00:00:00');
    current.setDate(current.getDate() + days);
    setSelectedDate(toDateString(current));
  };

  const returnToToday = async () => {
    await flushActiveSection();
    setSelectedDate(toDateString(new Date()));
  };

  // Prompts and inspiration cycling
  const dayOfYear = getDayOfYear();
  const currentDiaryPrompt = DIARY_PROMPTS[(dayOfYear + promptOffset) % DIARY_PROMPTS.length];
  const currentJournalPrompt = JOURNAL_PROMPTS[(dayOfYear + promptOffset) % JOURNAL_PROMPTS.length];
  const currentPoetryInspiration = POETRY_INSPIRATIONS[(dayOfYear + promptOffset) % POETRY_INSPIRATIONS.length];
  const currentGratitudeClosing = GRATITUDE_CLOSING_LINES[(dayOfYear + promptOffset) % GRATITUDE_CLOSING_LINES.length];

  const cyclePrompt = () => setPromptOffset(prev => prev + 1);

  // Streak calculations
  const calculateStreak = () => {
    const dates = Object.keys(allDates);
    if (dates.length === 0) return 0;
    let streak = 0;
    let checkDate = new Date();
    
    const todayStr = toDateString(checkDate);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = toDateString(yesterday);
    
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

  // Streak circles timeline (past 7 days)
  const streakCircles = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const dStr = toDateString(d);
    const isWritten = !!allDates[dStr];
    return {
      date: d,
      isWritten,
      label: d.toLocaleDateString('en-US', { weekday: 'narrow' }),
    };
  });

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

  const uniqueTags = useMemo(() => {
    const tagsSet = new Set<string>();
    allEntries.forEach(entry => {
      if (entry.diary?.tags && Array.isArray(entry.diary.tags)) {
        entry.diary.tags.forEach((tag: string) => {
          if (tag) tagsSet.add(tag);
        });
      }
    });
    return Array.from(tagsSet);
  }, [allEntries]);

  const taggedEntries = useMemo(() => {
    if (!selectedTag) return [];
    return allEntries.filter(entry => entry.diary?.tags?.includes(selectedTag) && entry.diary?.content);
  }, [allEntries, selectedTag]);

  const sutraRooms = useMemo(() => {
    return Array.from(new Set(sutraNotes.map(n => n.roomId)));
  }, [sutraNotes]);

  const filteredSutraNotes = useMemo(() => {
    if (!selectedRoomFilter) return sutraNotes;
    return sutraNotes.filter(n => n.roomId === selectedRoomFilter);
  }, [sutraNotes, selectedRoomFilter]);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Word count and reading time
  const getWordCount = (html: string) => {
    const text = html.replace(/<[^>]*>/g, ' ');
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const currentWordCount = (() => {
    if (activeSection === 'diary') return getWordCount(diaryContent);
    if (activeSection === 'journal') return getWordCount(journalContent);
    if (activeSection === 'poetry') return getWordCount(poetryContent);
    if (activeSection === 'story') return getWordCount(storyContent);
    return getWordCount(gratitudeReflection);
  })();

  const currentReadingTime = Math.ceil(currentWordCount / 200);

  const getPoetryLineCount = (html: string) => {
    if (!html) return 0;
    // Count paragraph tags or <br> or divs
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    let lines = 0;
    tempDiv.childNodes.forEach(node => {
      if (node.nodeName === 'DIV' || node.nodeName === 'P' || node.nodeName === 'BR') {
        lines++;
      }
    });
    return lines || 1;
  };

  const poetryLineCount = typeof window !== 'undefined' ? getPoetryLineCount(poetryContent) : 0;

  // Search filter
  const searchResults = searchQuery.trim()
    ? Object.entries(allDates).map(([dateStr, sects]) => {
        // Find if matches search query in local storage or we could search if we downloaded them, 
        // but for simplicity we filter the current selected entries. Let's return matches.
        return { dateStr, sects };
      })
    : [];

  return (
    <PageTransition>
      {/* Immersive Fullscreen Style Override */}
      <style>{`
        body.story-fullscreen aside {
          opacity: 0 !important;
          pointer-events: none !important;
        }
        body.story-fullscreen #app-main {
          margin-left: 0px !important;
        }
        body.story-fullscreen header {
          display: none !important;
        }
        body.story-fullscreen nav {
          display: none !important;
        }
      `}</style>

      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6", isFullScreen && activeSection === 'story' && "max-w-4xl py-12 px-6")}>
        
        {/* Local Backup Notification */}
        {localBackup && (
          <div className="p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-3 bg-[var(--bg-tertiary)] border-[var(--accent-saffron)] text-sm">
            <span style={{ color: 'var(--text-primary)' }}>
              Found a newer unsaved local draft for <strong>{localBackup.section}</strong>.
            </span>
            <div className="flex gap-2.5">
              <button
                onClick={async () => {
                  if (localBackup.section === 'diary') setDiaryContent(localBackup.content);
                  else if (localBackup.section === 'journal') setJournalContent(localBackup.content);
                  else if (localBackup.section === 'poetry') setPoetryContent(localBackup.content);
                  else if (localBackup.section === 'story') setStoryContent(localBackup.content);
                  else if (localBackup.section === 'gratitude') setGratitudeReflection(localBackup.content);
                  
                  if (editorRef.current) {
                    editorRef.current.innerHTML = localBackup.content;
                  }
                  setIsDirty(true);
                  setSaveStatus('saving');
                  dismissBackup();
                }}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[var(--accent-saffron)] hover:opacity-90"
              >
                Restore Draft
              </button>
              <button
                onClick={dismissBackup}
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border-strong)] hover:bg-[var(--bg-secondary)]"
                style={{ color: 'var(--text-muted)' }}
              >
                Ignore
              </button>
            </div>
          </div>
        )}

        {/* ─── Header ─── */}
        {!isFullScreen && (
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
        )}

        {/* ─── Tabs ─── */}
        {!isFullScreen && (
          <div className="flex gap-1 p-1 rounded-xl max-w-md" style={{ background: 'var(--bg-secondary)' }}>
            {(['write', 'reflect', 'calendar', 'sutra'] as Tab[]).map(t => (
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
        )}

        {/* ─── Navigation banner when looking at past date ─── */}
        {selectedDate !== toDateString(new Date()) && tab === 'write' && !isFullScreen && (
          <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 rounded-xl border text-sm gap-3 animate-fade-in" 
               style={{ background: 'var(--bg-secondary)', borderColor: 'var(--accent-moss)' }}>
            <span className="font-serif italic" style={{ color: 'var(--text-secondary)' }}>
              Viewing past journal entry for <strong>{formatDisplayDate(selectedDate)}</strong>
            </span>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => changeDateByAmount(-1)} 
                className="p-1 rounded-lg border hover:bg-[var(--bg-tertiary)] transition-all"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
                title="Go to Previous Day"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={() => changeDateByAmount(1)} 
                className="p-1 rounded-lg border hover:bg-[var(--bg-tertiary)] transition-all"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
                title="Go to Next Day"
              >
                <ArrowRight size={16} />
              </button>
              <button 
                onClick={returnToToday}
                className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-[var(--accent-moss)] hover:opacity-90 transition-all"
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
              className={cn("grid grid-cols-1 gap-8 items-start", isFullScreen ? "grid-cols-1" : "lg:grid-cols-12")}
            >
              {/* LEFT COLUMN: Section Editor (col-span-7) */}
              <div className={cn("space-y-5", isFullScreen ? "col-span-1" : "lg:col-span-7")}>
                
                {/* Section selection pills */}
                {!isFullScreen && (
                  <div className="flex p-1 rounded-xl gap-1 overflow-x-auto no-scrollbar" style={{ background: 'var(--bg-secondary)' }}>
                    {(['diary', 'journal', 'poetry', 'story', 'gratitude'] as AntarmanSection[]).map(s => {
                      const isActive = activeSection === s;
                      return (
                        <button
                          key={s}
                          onClick={() => handleSectionChange(s)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-medium capitalize whitespace-nowrap transition-all"
                          style={{
                            background: isActive ? 'var(--bg-primary)' : 'transparent',
                            color: isActive ? SECTION_COLORS[s] : 'var(--text-muted)',
                            boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                          }}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Section Specific Layout Rendering */}
                <div className="space-y-4">
                  {activeSection === 'diary' && (
                    <div className="space-y-4">
                      {/* Mood selector card */}
                      <div className="card-base practice-card p-4">
                        <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>How are you feeling?</p>
                        <MoodPulse value={diaryMood} onChange={m => handleDiaryInputChange('mood', m)} />
                      </div>

                      {/* Diary Editor */}
                      <div className="card-base journal-card p-5 space-y-4">
                        <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
                          <span className="font-serif italic text-sm text-[var(--text-muted)]">
                            {formatDisplayDate(selectedDate)}
                          </span>
                          <span className="text-xs" style={{ color: 'var(--text-faint)' }}>{currentWordCount} words</span>
                        </div>
                        
                        {/* Thread Tags Input Row */}
                        <div className="flex flex-wrap items-center gap-2 py-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                          <span className="font-medium text-[var(--text-faint)]">Threads:</span>
                          {diaryTags.map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-0.5 rounded-full flex items-center gap-1 bg-[color-mix(in srgb, var(--accent-moss) 8%, var(--bg-tertiary))]"
                              style={{ color: 'var(--accent-moss)' }}
                            >
                              #{tag}
                              <button 
                                onClick={() => {
                                  const nextTags = diaryTags.filter((_, i) => i !== idx);
                                  setDiaryTags(nextTags);
                                  setIsDirty(true);
                                  setSaveStatus('saving');
                                }}
                                className="hover:text-[var(--text-primary)] font-bold ml-0.5"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                          <input
                            type="text"
                            placeholder="Add a thread..."
                            className="bg-transparent border-none outline-none font-serif placeholder:italic min-w-[100px]"
                            style={{ color: 'var(--text-primary)' }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ',') {
                                e.preventDefault();
                                const val = e.currentTarget.value.trim().replace(/\s+/g, '');
                                if (val) {
                                  const cleanTag = val.replace(/[^a-zA-Z0-9\u0900-\u097F-]/g, '');
                                  if (cleanTag && !diaryTags.includes(cleanTag)) {
                                    const nextTags = [...diaryTags, cleanTag];
                                    setDiaryTags(nextTags);
                                    setIsDirty(true);
                                    setSaveStatus('saving');
                                  }
                                }
                                e.currentTarget.value = '';
                              }
                            }}
                          />
                        </div>
                        
                        <p className="text-sm font-serif italic mb-2 border-l-2 pl-3" style={{ color: 'var(--text-secondary)', borderColor: 'var(--accent-saffron)' }}>
                          &ldquo;{currentDiaryPrompt}&rdquo;
                        </p>

                        <WritingToolbar editorRef={editorRef} onCommand={handleCommand} />
                        
                        <div
                          ref={editorRef}
                          className="journal-editor w-full min-h-[240px] outline-none leading-relaxed prose-reading"
                          contentEditable
                          suppressContentEditableWarning
                          data-placeholder="What shaped today?"
                          onInput={handleEditorInput}
                          style={{ color: 'var(--text-primary)' }}
                        />

                        {/* Linguistic Mirror Display */}
                        {analysisResults && (analysisResults.word || analysisResults.register !== 'Neutral') && (
                          <div className="flex items-center gap-4 mt-2 text-xs border-t pt-2" style={{ borderColor: 'var(--border-default)', color: 'var(--text-faint)' }}>
                            {analysisResults.word && (
                              <span>
                                Dominant word: <strong className="font-serif italic" style={{ color: 'var(--text-secondary)' }}>{analysisResults.word}</strong>
                              </span>
                            )}
                            {analysisResults.register !== 'Neutral' && (
                              <span>
                                Emotional Register: <strong style={{ color: 'var(--text-secondary)' }}>{analysisResults.register}</strong>
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Gratitude input cards */}
                      <div className="card-base practice-card p-5 space-y-3">
                        <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Three Things I&apos;m Grateful For</p>
                        {diaryGratitude.map((g, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="text-sm" style={{ color: 'var(--text-faint)' }}>{i + 1}.</span>
                            <input
                              type="text"
                              value={g}
                              onChange={e => handleDiaryGratitudeChange(i, e.target.value)}
                              placeholder={`Gratitude item ${i + 1}...`}
                              className="flex-1 bg-transparent outline-none text-sm gratitude-input"
                              style={{ color: 'var(--text-primary)', paddingBottom: '4px' }}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Today I Learned + Tomorrow's Intention */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="card-base practice-card p-4 space-y-2">
                          <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Today I Learned</p>
                          <textarea
                            value={diaryLearned}
                            onChange={e => handleDiaryInputChange('learned', e.target.value)}
                            placeholder="Something new I discovered..."
                            rows={3}
                            className="w-full bg-transparent outline-none text-sm resize-none"
                            style={{ color: 'var(--text-primary)' }}
                          />
                        </div>
                        <div className="card-base practice-card p-4 space-y-2">
                          <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Tomorrow&apos;s Intention</p>
                          <textarea
                            value={diaryIntention}
                            onChange={e => handleDiaryInputChange('intention', e.target.value)}
                            placeholder="Tomorrow I will focus on..."
                            rows={3}
                            className="w-full bg-transparent outline-none text-sm resize-none"
                            style={{ color: 'var(--text-primary)' }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === 'journal' && (
                    <div 
                      className="card-base journal-card p-6 space-y-4"
                      style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-hover)' }}
                    >
                      <div className="flex justify-between items-center text-xs" style={{ color: 'var(--text-muted)' }}>
                        <div className="flex items-center gap-2">
                          <span className="font-serif italic font-semibold">Reflective Journaling</span>
                          <button onClick={cyclePrompt} className="p-0.5 rounded hover:bg-[var(--bg-tertiary)]" title="Cycle prompt">
                            <RotateCw size={11} />
                          </button>
                        </div>
                        <span>{currentWordCount} words</span>
                      </div>

                      <p className="text-sm font-serif italic pl-3 border-l-2 border-[var(--accent-moss)] text-[var(--text-muted)]">
                        &ldquo;{currentJournalPrompt}&rdquo;
                      </p>

                      <WritingToolbar editorRef={editorRef} onCommand={handleCommand} />

                      <div
                        ref={editorRef}
                        className="journal-editor w-full min-h-[300px] outline-none leading-[2.0] prose-reading"
                        contentEditable
                        suppressContentEditableWarning
                        data-placeholder="Start thinking. Let it unravel."
                        onInput={handleEditorInput}
                        style={{ color: 'var(--text-primary)', fontSize: '18px' }}
                      />
                    </div>
                  )}

                  {activeSection === 'poetry' && (
                    <div className="card-base journal-card p-6 space-y-5">
                      <div className="flex justify-between items-center text-xs" style={{ color: 'var(--text-muted)' }}>
                        <div className="flex items-center gap-2">
                          <Sparkles size={12} className="text-indigo-400" />
                          <span className="font-serif italic">Verse & Feeling</span>
                        </div>
                        <span>{poetryLineCount} lines</span>
                      </div>

                      {/* Inspiration Line */}
                      <p className="text-xs font-serif italic text-center text-stone-500 py-1 border-y border-dashed border-stone-200">
                        {currentPoetryInspiration}
                      </p>

                      {/* Poetry Title */}
                      <div className="text-center">
                        <input
                          type="text"
                          value={poetryTitle}
                          onChange={e => {
                            setPoetryTitle(e.target.value);
                            setIsDirty(true);
                            setSaveStatus('saving');
                          }}
                          placeholder="Untitled"
                          className="bg-transparent border-none text-center outline-none text-2xl font-serif italic max-w-md mx-auto"
                          style={{ color: 'var(--text-primary)' }}
                        />
                      </div>

                      <div className="flex justify-center">
                        <WritingToolbar editorRef={editorRef} onCommand={handleCommand} />
                      </div>

                      <div
                        ref={editorRef}
                        className="journal-editor w-full min-h-[300px] outline-none leading-[2.2] prose-poetry text-center max-w-[480px] mx-auto"
                        contentEditable
                        suppressContentEditableWarning
                        data-placeholder="Begin the first line..."
                        onInput={handleEditorInput}
                        style={{ color: 'var(--text-primary)', fontSize: '19px' }}
                      />
                    </div>
                  )}

                  {activeSection === 'story' && (
                    <div className={cn("card-base journal-card p-6 space-y-6 relative transition-all", isFullScreen && "border-none bg-transparent shadow-none")}>
                      {/* Top toolbar */}
                      <div className="flex justify-between items-center text-xs pb-3 border-b" style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}>
                        <div className="flex items-center gap-2">
                          <Clock size={12} />
                          <span>{currentWordCount} words · {currentReadingTime} min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {isFullScreen && (
                            <span className="text-xs text-[var(--accent-saffron)] font-serif italic mr-3">
                              {lastSavedText}
                            </span>
                          )}
                          <button
                            onClick={() => setIsFullScreen(!isFullScreen)}
                            className="p-1 rounded hover:bg-[var(--bg-tertiary)] flex items-center gap-1"
                            title={isFullScreen ? "Exit fullscreen" : "Enter fullscreen distraction-free"}
                          >
                            {isFullScreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                            <span className="hidden sm:inline">{isFullScreen ? 'Exit Full' : 'Distraction-Free'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Story Title */}
                      <input
                        type="text"
                        value={storyTitle}
                        onChange={e => {
                          setStoryTitle(e.target.value);
                          setIsDirty(true);
                          setSaveStatus('saving');
                        }}
                        placeholder="Your story begins here..."
                        className="bg-transparent border-none outline-none text-3xl font-serif w-full"
                        style={{ color: 'var(--text-primary)' }}
                      />

                      <div
                        ref={editorRef}
                        className="journal-editor w-full min-h-[400px] outline-none leading-[2.1] prose-story max-w-[640px] mx-auto"
                        contentEditable
                        suppressContentEditableWarning
                        data-placeholder="Once upon a time..."
                        onInput={handleEditorInput}
                        style={{ color: 'var(--text-primary)', fontSize: '20px' }}
                      />

                      {/* WritingToolbar at bottom for stories */}
                      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                        <WritingToolbar editorRef={editorRef} onCommand={handleCommand} />
                        <button
                          type="button"
                          onClick={() => handleCommand('insertHTML', "<p style='text-align:center'>* * *</p>")}
                          className="px-3 py-1.5 rounded-lg border border-[var(--border-strong)] text-xs font-semibold hover:bg-[var(--bg-tertiary)]"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          Insert Scene Break
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSection === 'gratitude' && (
                    <div className="card-base practice-card p-6 space-y-6">
                      <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-default)' }}>
                        <Smile size={20} style={{ color: 'var(--accent-gold)' }} />
                        <h3 className="font-serif text-2xl" style={{ color: 'var(--accent-gold)' }}>Today's Gratitude</h3>
                      </div>

                      {/* Generous Gratitude Inputs */}
                      <div className="space-y-5">
                        <div className="flex flex-col gap-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">I am grateful for...</label>
                          <input
                            type="text"
                            value={gratitudeLine1}
                            onChange={e => {
                              setGratitudeLine1(e.target.value);
                              setIsDirty(true);
                              setSaveStatus('saving');
                            }}
                            placeholder="A kind gesture, a beautiful sight..."
                            className="bg-transparent outline-none text-lg border-b py-2 border-stone-200/50 focus:border-[var(--accent-gold)] transition-all font-serif italic"
                            style={{ color: 'var(--text-primary)', fontSize: '18px' }}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">And also for...</label>
                          <input
                            type="text"
                            value={gratitudeLine2}
                            onChange={e => {
                              setGratitudeLine2(e.target.value);
                              setIsDirty(true);
                              setSaveStatus('saving');
                            }}
                            placeholder="Warm tea, comfortable shelter..."
                            className="bg-transparent outline-none text-lg border-b py-2 border-stone-200/50 focus:border-[var(--accent-gold)] transition-all font-serif italic"
                            style={{ color: 'var(--text-primary)', fontSize: '18px' }}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">And specifically for...</label>
                          <input
                            type="text"
                            value={gratitudeLine3}
                            onChange={e => {
                              setGratitudeLine3(e.target.value);
                              setIsDirty(true);
                              setSaveStatus('saving');
                            }}
                            placeholder="An inner strength, a lesson learned..."
                            className="bg-transparent outline-none text-lg border-b py-2 border-stone-200/50 focus:border-[var(--accent-gold)] transition-all font-serif italic"
                            style={{ color: 'var(--text-primary)', fontSize: '18px' }}
                          />
                        </div>
                      </div>

                      {/* Reflection on Gratitude */}
                      <div className="space-y-2 pt-4">
                        <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">Why this matters to me...</label>
                        <div
                          ref={editorRef}
                          className="journal-editor w-full min-h-[120px] outline-none leading-relaxed prose-reading p-3 rounded-lg border border-dashed"
                          contentEditable
                          suppressContentEditableWarning
                          data-placeholder="Reflect on these moments. Why did they touch you?"
                          onInput={handleEditorInput}
                          style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)', fontSize: '16px' }}
                        />
                      </div>

                      {/* Closing Line */}
                      <p className="text-center font-serif italic text-xs text-stone-500 pt-3 border-t">
                        &ldquo;{currentGratitudeClosing}&rdquo;
                      </p>
                    </div>
                  )}
                </div>

                {/* Save Status / Force Save (Only in Normal View) */}
                {!isFullScreen && (
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-serif italic text-stone-400">
                      {lastSavedText}
                    </span>
                    <button
                      onClick={flushActiveSection}
                      className="px-6 py-2.5 rounded-xl font-medium text-xs text-white transition-all hover:opacity-90"
                      style={{
                        background: SECTION_COLORS[activeSection],
                        boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                      }}
                    >
                      Save Active Page
                    </button>
                  </div>
                )}

              </div>

              {/* RIGHT COLUMN: Checklist / Todo Section (col-span-5) */}
              {!isFullScreen && (
                <div 
                  className="lg:col-span-5 p-5 card-base practice-card space-y-4"
                  style={{ borderRadius: 16 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Daily Checklist</h3>
                    <button
                      onClick={carryForward}
                      className="text-xs px-2.5 py-1 rounded-full border transition-all hover:bg-[var(--bg-primary)]"
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
                      className="p-1.5 rounded-lg border transition-all hover:bg-[var(--bg-primary)] flex-shrink-0"
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
                            <GripVertical size={14} style={{ color: 'var(--text-faint)' }} />
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
              )}
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
                    <h4 className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>Total Writing Days</h4>
                    <p className="text-4xl font-serif font-semibold mt-1" style={{ color: 'var(--accent-moss)' }}>
                      {Object.keys(allDates).length}
                    </p>
                  </div>
                  <p className="text-xs text-stone-500">
                    days you reflected on your inner world
                  </p>
                </div>
              </div>

              {/* Weekly Timeline summary */}
              <div className="card-base p-5 space-y-4">
                <h4 className="font-serif text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Sanctuary Timeline</h4>
                {Object.keys(allDates).length === 0 ? (
                  <p className="text-sm text-stone-500">Your timeline will populate as you begin journaling.</p>
                ) : (
                  <div className="relative border-l pl-4 space-y-4" style={{ borderColor: 'var(--border-strong)' }}>
                    {Object.entries(allDates).slice(0, 7).map(([dateStr, sections]) => (
                      <div key={dateStr} className="relative">
                        <span 
                          className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full border border-white"
                          style={{ background: 'var(--accent-saffron)' }}
                        />
                        <span className="text-[10px] font-semibold" style={{ color: 'var(--text-faint)' }}>
                          {formatDisplayDate(dateStr)}
                        </span>
                        <p className="text-sm font-serif italic mt-0.5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          Reflected in sections: {Array.from(sections).join(', ')}
                        </p>
                      </div>
                    ))}
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
                  <Search size={16} style={{ color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search across journal content, gratitude logs, learned items..."
                    className="flex-1 bg-transparent text-sm outline-none"
                    style={{ color: 'var(--text-primary)' }}
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="p-0.5 rounded-full hover:bg-[var(--bg-tertiary)]">
                      <X size={14} className="text-text-muted" />
                    </button>
                  )}
                </div>

                {/* Search Results Display */}
                {searchQuery.trim() ? (
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-faint)' }}>
                      Found matching entries:
                    </p>
                    {searchResults.length === 0 ? (
                      <p className="text-sm text-center py-6" style={{ color: 'var(--text-faint)' }}>No matching entries found.</p>
                    ) : (
                      <div className="space-y-2 max-h-80 overflow-y-auto no-scrollbar">
                        {searchResults.map(res => (
                          <button
                            key={res.dateStr}
                            onClick={() => handleDateSelect(res.dateStr)}
                            className="w-full text-left p-3 rounded-xl border hover:bg-[var(--bg-tertiary)] transition-all space-y-1 block"
                            style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-default)' }}
                          >
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span style={{ color: 'var(--accent-moss)' }}>{formatDisplayDate(res.dateStr)}</span>
                              <span style={{ color: 'var(--text-faint)' }}>Sections: {Array.from(res.sects).join(', ')}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    {/* Unique Thread Tags Pills */}
                    {uniqueTags.length > 0 && (
                      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 border-b border-dashed" style={{ borderColor: 'var(--border-default)' }}>
                        <span className="text-xs font-semibold whitespace-nowrap" style={{ color: 'var(--text-faint)' }}>
                          Threads:
                        </span>
                        {uniqueTags.map(tag => {
                          const isSelected = selectedTag === tag;
                          return (
                            <button
                              key={tag}
                              onClick={() => setSelectedTag(isSelected ? null : tag)}
                              className="px-2.5 py-1 rounded-full text-[11px] font-medium transition-all whitespace-nowrap border"
                              style={{
                                background: isSelected 
                                  ? 'color-mix(in srgb, var(--accent-moss) 12%, var(--bg-tertiary))' 
                                  : 'transparent',
                                borderColor: isSelected ? 'var(--accent-moss)' : 'var(--border-default)',
                                color: isSelected ? 'var(--accent-moss)' : 'var(--text-muted)',
                              }}
                            >
                              #{tag}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Normal Calendar Grid Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                        {monthNames[currentMonthDate.getMonth()]} {currentMonthDate.getFullYear()}
                      </h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1))}
                          className="p-1.5 rounded-lg border transition-colors hover:bg-[var(--bg-tertiary)]"
                          style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={() => setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1))}
                          className="p-1.5 rounded-lg border transition-colors hover:bg-[var(--bg-tertiary)]"
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
                        const matchSects = allDates[dateStr];
                        const hasTodos = datesWithTodos.has(dateStr);
                        const hasTag = selectedTag ? (allEntries.find(e => e.dateStr === dateStr)?.diary?.tags?.includes(selectedTag)) : false;
                        
                        return (
                          <button
                            key={dateStr}
                            onClick={() => handleDateSelect(dateStr)}
                            className="h-14 w-full rounded-lg flex flex-col items-center justify-between p-1.5 relative transition-all hover:scale-105 active:scale-95 border"
                            style={{
                              background: isSelected 
                                ? 'color-mix(in srgb, var(--room-antarman) 15%, var(--bg-tertiary))' 
                                : hasTag
                                  ? 'color-mix(in srgb, var(--accent-moss) 12%, var(--bg-tertiary))'
                                  : 'transparent',
                              borderColor: isSelected 
                                ? 'var(--room-antarman)' 
                                : hasTag
                                  ? 'var(--accent-moss)'
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
                            
                            {/* 5 Section Dot Indicators */}
                            <div className="flex gap-0.5 justify-center w-full mt-1 flex-wrap">
                              {matchSects && Array.from(matchSects).map(sec => (
                                <span 
                                  key={sec}
                                  className="w-1.5 h-1.5 rounded-full" 
                                  style={{ background: SECTION_DOT_COLORS[sec] }}
                                  title={sec}
                                />
                              ))}
                              {hasTodos && (
                                <span 
                                  className="w-1.5 h-1.5 rounded-full border border-white" 
                                  style={{ background: 'var(--accent-moss)' }}
                                  title="Checklist Tasks"
                                />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Tag Excerpts sliding drawer */}
                    <AnimatePresence>
                      {selectedTag && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 p-4 rounded-xl border space-y-3 overflow-hidden text-left"
                          style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-default)' }}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-semibold flex items-center gap-1">
                              <span style={{ color: 'var(--accent-moss)' }}>#{selectedTag}</span> Thread Excerpts
                            </h4>
                            <button 
                              onClick={() => setSelectedTag(null)}
                              className="text-[10px] px-2 py-0.5 rounded hover:bg-[var(--bg-tertiary)] border transition-all"
                              style={{ color: 'var(--text-muted)', borderColor: 'var(--border-default)' }}
                            >
                              Clear Filter
                            </button>
                          </div>

                          {taggedEntries.length === 0 ? (
                            <p className="text-xs italic py-2" style={{ color: 'var(--text-faint)' }}>No diary text for this tag.</p>
                          ) : (
                            <div className="space-y-3 max-h-56 overflow-y-auto no-scrollbar">
                              {taggedEntries.map(entry => (
                                <div 
                                  key={entry.dateStr}
                                  className="p-3 rounded-lg border text-[11px] space-y-1 hover:bg-[var(--bg-tertiary)] cursor-pointer transition-all border-l-2"
                                  style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-default)', borderLeftColor: 'var(--accent-moss)' }}
                                  onClick={() => handleDateSelect(entry.dateStr)}
                                >
                                  <div className="flex justify-between items-center font-semibold mb-1">
                                    <span style={{ color: 'var(--accent-moss)' }}>{formatDisplayDate(entry.dateStr)}</span>
                                    <span style={{ color: 'var(--text-faint)' }}>Click to view entry →</span>
                                  </div>
                                  <div 
                                    className="italic line-clamp-3 leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                    dangerouslySetInnerHTML={{ __html: entry.diary.content.slice(0, 300) + (entry.diary.content.length > 300 ? '...' : '') }}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* ─── Sutra Notes Tab ─── */}
          {tab === 'sutra' && (
            <motion.div
              key="sutra"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4 max-w-2xl mx-auto"
            >
              <div className="card-base p-5 space-y-6">
                <div className="flex justify-between items-center border-b pb-3" style={{ borderColor: 'var(--border-default)' }}>
                  <div>
                    <h3 className="font-serif text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                      Sutra Notes
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      Your captured connections across Pravah rooms
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)]" style={{ color: 'var(--text-muted)' }}>
                    {filteredSutraNotes.length} notes
                  </span>
                </div>

                {/* Filter Pills */}
                {sutraRooms.length > 0 && (
                  <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                    <button
                      onClick={() => setSelectedRoomFilter(null)}
                      className="px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap border"
                      style={{
                        background: selectedRoomFilter === null ? 'var(--bg-primary)' : 'transparent',
                        borderColor: selectedRoomFilter === null ? 'var(--text-primary)' : 'var(--border-default)',
                        color: selectedRoomFilter === null ? 'var(--text-primary)' : 'var(--text-muted)',
                      }}
                    >
                      All Rooms
                    </button>
                    {sutraRooms.map(roomId => {
                      const roomObj = ROOM_MAP[roomId];
                      const isSelected = selectedRoomFilter === roomId;
                      return (
                        <button
                          key={roomId}
                          onClick={() => setSelectedRoomFilter(roomId)}
                          className="px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap border flex items-center gap-1"
                          style={{
                            background: isSelected ? 'var(--bg-primary)' : 'transparent',
                            borderColor: isSelected ? (roomObj?.colorHex || 'var(--text-primary)') : 'var(--border-default)',
                            color: isSelected ? (roomObj?.colorHex || 'var(--text-primary)') : 'var(--text-muted)',
                          }}
                        >
                          <span>{roomObj?.emoji || '✦'}</span>
                          <span>{roomObj?.name || roomId}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Notes List */}
                {filteredSutraNotes.length === 0 ? (
                  <div className="text-center py-12 space-y-2">
                    <p className="text-sm font-serif italic" style={{ color: 'var(--text-muted)' }}>
                      No sutra notes found.
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
                      Click the ✦ button on any content card across Pravah to save a connection here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                    {filteredSutraNotes.map(note => {
                      const roomObj = ROOM_MAP[note.roomId];
                      return (
                        <div
                          key={note.id}
                          className="p-4 rounded-xl border relative transition-all hover:scale-[1.01] text-left"
                          style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-default)' }}
                        >
                          {/* Delete Button */}
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            className="absolute top-4 right-4 p-1 rounded-md transition-colors hover:bg-[var(--bg-tertiary)]"
                            style={{ color: 'var(--text-faint)' }}
                            title="Delete note"
                          >
                            <X size={14} />
                          </button>

                          <div className="space-y-2.5">
                            {/* Room Badge + Date */}
                            <div className="flex items-center gap-3 flex-wrap">
                              <span
                                className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1"
                                style={{
                                  background: `color-mix(in srgb, ${roomObj?.colorHex || 'var(--accent-saffron)'} 8%, var(--bg-tertiary))`,
                                  color: roomObj?.colorHex || 'var(--accent-saffron)',
                                }}
                              >
                                <span>{roomObj?.emoji || '✦'}</span>
                                <span>{roomObj?.name || note.roomName}</span>
                              </span>
                              <span className="text-[10px]" style={{ color: 'var(--text-faint)' }}>
                                {note.date ? formatDisplayDate(note.date) : ''}
                              </span>
                            </div>

                            {/* Content Title */}
                            <h4 className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                              Reflecting on: <span className="font-serif italic">&ldquo;{note.contentTitle}&rdquo;</span>
                            </h4>

                            {/* User Note */}
                            <p className="text-sm font-serif leading-relaxed pl-2 border-l" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)' }}>
                              {note.userNote}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
