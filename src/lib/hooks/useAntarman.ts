import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase/client';
import { doc, onSnapshot, setDoc, serverTimestamp, collection, query, getDoc } from 'firebase/firestore';
import { useAuth } from './useAuth';
import { useStreak } from './useStreak';

export type AntarmanSection = 'diary' | 'journal' | 'poetry' | 'story' | 'gratitude';

export interface DiaryData {
  content: string; // HTML (from contentEditable)
  mood: number; // 1-5
  gratitude: [string, string, string];
  learned: string;
  intention: string;
  updatedAt?: any;
}
export interface JournalData { content: string; updatedAt?: any; }
export interface PoetryData { content: string; title: string; updatedAt?: any; }
export interface StoryData { content: string; title: string; updatedAt?: any; }
export interface GratitudeData { line1: string; line2: string; line3: string; reflection: string; updatedAt?: any; }

export type SectionData = DiaryData | JournalData | PoetryData | StoryData | GratitudeData;

export interface AntarmanDocData {
  diary?: DiaryData;
  journal?: JournalData;
  poetry?: PoetryData;
  story?: StoryData;
  gratitude?: GratitudeData;
}

const DEFAULT_DIARY: DiaryData = { content: '', mood: 3, gratitude: ['', '', ''], learned: '', intention: '' };
const DEFAULT_JOURNAL: JournalData = { content: '' };
const DEFAULT_POETRY: PoetryData = { content: '', title: '' };
const DEFAULT_STORY: StoryData = { content: '', title: '' };
const DEFAULT_GRATITUDE: GratitudeData = { line1: '', line2: '', line3: '', reflection: '' };

export function useAntarman(selectedDate: string) {
  const { user } = useAuth();
  const { addRewireScore, updateStreak } = useStreak();
  
  const [sectionData, setSectionData] = useState<AntarmanDocData>({
    diary: DEFAULT_DIARY,
    journal: DEFAULT_JOURNAL,
    poetry: DEFAULT_POETRY,
    story: DEFAULT_STORY,
    gratitude: DEFAULT_GRATITUDE,
  });
  
  const [allDates, setAllDates] = useState<Record<string, Set<AntarmanSection>>>({});
  const [loading, setLoading] = useState(true);
  const [localBackup, setLocalBackup] = useState<{ section: AntarmanSection; content: string; title?: string } | null>(null);

  // Legacy migration and initial loading
  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const migrateAndLoad = async () => {
      try {
        const uid = user.uid;
        const legacyRef = doc(db!, `users/${uid}/journalEntries/${selectedDate}`);
        const legacySnap = await getDoc(legacyRef);

        const antarmanRef = doc(db!, `users/${uid}/antarman/${selectedDate}`);
        const antarmanSnap = await getDoc(antarmanRef);
        const antarmanExists = antarmanSnap.exists();
        const antarmanData = antarmanExists ? antarmanSnap.data() as AntarmanDocData : {};

        // Run legacy migration if needed
        if (legacySnap.exists() && (!antarmanExists || !antarmanData.diary)) {
          const legacy = legacySnap.data();
          const migratedDiary: DiaryData = {
            content: legacy.content || '',
            mood: legacy.mood || 3,
            gratitude: legacy.gratitude || ['', '', ''],
            learned: legacy.todayILearned || legacy.learned || '',
            intention: legacy.tomorrowsIntention || legacy.intention || '',
            updatedAt: serverTimestamp(),
          };

          await setDoc(antarmanRef, {
            diary: migratedDiary
          }, { merge: true });
        }
      } catch (err) {
        console.error('Migration or initial check failed:', err);
      }
    };

    migrateAndLoad();

    // Listen to selected date's document
    const docRef = doc(db!, `users/${user.uid}/antarman/${selectedDate}`);
    const unsubDoc = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as AntarmanDocData;
        
        // Merge with defaults to prevent UI errors
        const mergedData: AntarmanDocData = {
          diary: { ...DEFAULT_DIARY, ...data.diary },
          journal: { ...DEFAULT_JOURNAL, ...data.journal },
          poetry: { ...DEFAULT_POETRY, ...data.poetry },
          story: { ...DEFAULT_STORY, ...data.story },
          gratitude: { ...DEFAULT_GRATITUDE, ...data.gratitude },
        };
        
        setSectionData(mergedData);

        // Check for local backups that are newer
        checkLocalBackups(user.uid, selectedDate, data);
      } else {
        setSectionData({
          diary: DEFAULT_DIARY,
          journal: DEFAULT_JOURNAL,
          poetry: DEFAULT_POETRY,
          story: DEFAULT_STORY,
          gratitude: DEFAULT_GRATITUDE,
        });
        checkLocalBackups(user.uid, selectedDate, {});
      }
      setLoading(false);
    }, (err) => {
      console.error('Listen to Antarman doc failed:', err);
      setLoading(false);
    });

    // Listen to all dates for calendar view
    const colRef = collection(db!, `users/${user.uid}/antarman`);
    const unsubCol = onSnapshot(colRef, (snap) => {
      const datesMap: Record<string, Set<AntarmanSection>> = {};
      snap.docs.forEach((d) => {
        const dateStr = d.id;
        const data = d.data() as AntarmanDocData;
        const sectionsSet = new Set<AntarmanSection>();

        if (data.diary?.content || data.diary?.learned || data.diary?.intention || data.diary?.gratitude?.some(g => g)) {
          sectionsSet.add('diary');
        }
        if (data.journal?.content) {
          sectionsSet.add('journal');
        }
        if (data.poetry?.content || data.poetry?.title) {
          sectionsSet.add('poetry');
        }
        if (data.story?.content || data.story?.title) {
          sectionsSet.add('story');
        }
        if (data.gratitude?.reflection || data.gratitude?.line1 || data.gratitude?.line2 || data.gratitude?.line3) {
          sectionsSet.add('gratitude');
        }

        if (sectionsSet.size > 0) {
          datesMap[dateStr] = sectionsSet;
        }
      });
      setAllDates(datesMap);
    }, (err) => {
      console.error('Listen to all Antarman docs failed:', err);
    });

    return () => {
      unsubDoc();
      unsubCol();
    };
  }, [user, selectedDate]);

  const checkLocalBackups = (uid: string, date: string, firestoreData: AntarmanDocData) => {
    const sections: AntarmanSection[] = ['diary', 'journal', 'poetry', 'story', 'gratitude'];
    
    for (const section of sections) {
      const backupKey = `pravah-backup-${uid}-${date}-${section}`;
      const localRaw = localStorage.getItem(backupKey);
      if (localRaw) {
        try {
          const localParsed = JSON.parse(localRaw);
          if (localParsed && localParsed.localUpdatedAt) {
            const firestoreSection = firestoreData[section];
            const fsUpdatedAt = firestoreSection?.updatedAt;
            const fsTime = fsUpdatedAt 
              ? (typeof fsUpdatedAt.toDate === 'function' ? fsUpdatedAt.toDate().getTime() : new Date(fsUpdatedAt).getTime()) 
              : 0;

            // Check if local content exists, is different, and is newer
            const localContent = localParsed.content || '';
            const fsContent = (firestoreSection as any)?.content || (firestoreSection as any)?.reflection || '';

            if (localContent && localContent !== fsContent && localParsed.localUpdatedAt > fsTime) {
              // Found a newer local backup
              setLocalBackup({
                section,
                content: localContent,
                title: localParsed.title || undefined
              });
              return; // Only show one backup notification at a time
            }
          }
        } catch (e) {
          console.error('Failed to parse local backup:', e);
        }
      }
    }
    setLocalBackup(null);
  };

  const saveSection = async (section: AntarmanSection, data: any) => {
    if (!user || !db) return;
    const date = selectedDate;
    const uid = user.uid;

    // 1. Save to local storage immediately
    const backupKey = `pravah-backup-${uid}-${date}-${section}`;
    localStorage.setItem(backupKey, JSON.stringify({
      ...data,
      localUpdatedAt: Date.now()
    }));

    // 2. Save to Firestore
    const docRef = doc(db!, `users/${uid}/antarman/${date}`);
    
    // Check if we should award streak/rewire points
    // Award points if this is the very first time writing *any* content today
    // We check if the document already has some content
    const hadContentBefore = 
      (sectionData.diary?.content || '') ||
      (sectionData.journal?.content || '') ||
      (sectionData.poetry?.content || '') ||
      (sectionData.story?.content || '') ||
      (sectionData.gratitude?.reflection || '');

    const hasNewContent = data.content?.trim().length > 5 || 
      (section === 'gratitude' && (data.line1?.trim() || data.line2?.trim() || data.line3?.trim()));

    await setDoc(docRef, {
      [section]: {
        ...data,
        updatedAt: serverTimestamp()
      }
    }, { merge: true });

    if (!hadContentBefore && hasNewContent) {
      await addRewireScore(5);
      await updateStreak();
    }
  };

  const dismissBackup = () => {
    if (user) {
      const sections: AntarmanSection[] = ['diary', 'journal', 'poetry', 'story', 'gratitude'];
      sections.forEach(section => {
        localStorage.removeItem(`pravah-backup-${user.uid}-${selectedDate}-${section}`);
      });
    }
    setLocalBackup(null);
  };

  return {
    sectionData,
    allDates,
    saveSection,
    loading,
    localBackup,
    dismissBackup,
  };
}
