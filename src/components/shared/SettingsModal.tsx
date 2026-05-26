'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogOut, Settings, Languages, MessageSquare, Volume2, User as UserIcon, Palette, VolumeX, Bell, Download, ShieldAlert } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';
import { BACKGROUND_PAINTINGS } from '@/lib/constants/paintings';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useAudio } from '@/components/providers/AudioProvider';
import { db } from '@/lib/firebase/client';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { jsPDF } from 'jspdf';

const STEPS = ['xs', 's', 'm', 'l', 'xl'] as const;
const STEP_LABELS = { xs: 'XS', s: 'S', m: 'M', l: 'L', xl: 'XL' } as const;
const STEP_MULTIPLIERS = { xs: 0.85, s: 0.92, m: 1.0, l: 1.12, xl: 1.25 } as const;

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { user, preferences, updatePreferences, logout } = useUser();
  const { theme, setTheme } = useTheme();
  const { isMuted, toggleMute, enableAudio } = useAudio();

  const [exportingJournal, setExportingJournal] = useState(false);
  const [exportingHabits, setExportingHabits] = useState(false);
  const [exportingAnthology, setExportingAnthology] = useState(false);

  if (!user) return null;

  const headingSize = preferences.fontSizeHeading || 'm';
  const bodySize = preferences.fontSizeBody || 'm';

  const exportJournalPDF = async () => {
    if (exportingJournal) return;
    setExportingJournal(true);
    try {
      const colRef = collection(db!, `users/${user.id}/journalEntries`);
      const q = query(colRef, orderBy('updatedAt', 'desc'));
      const snap = await getDocs(q);
      if (snap.empty) {
        alert('No journal entries found to export.');
        return;
      }
      
      const doc = new jsPDF();
      doc.setFont("Helvetica", "normal");
      
      doc.setFontSize(22);
      doc.text("Pravah - Journal Archive", 20, 20);
      doc.setFontSize(10);
      doc.text(`Exported on ${new Date().toLocaleDateString()} for ${user.name}`, 20, 28);
      doc.line(20, 32, 190, 32);
      
      let y = 45;
      
      snap.docs.forEach((entryDoc) => {
        const data = entryDoc.data();
        const date = entryDoc.id;
        const content = data.content || '';
        const mood = data.mood || 3;
        const gratitude = data.gratitude || [];
        const learned = data.todayILearned || data.learned || '';
        const intention = data.tomorrowsIntention || data.intention || '';
        const tags = data.tags || [];
        const mode = data.mode || 'daily';
        
        if (y > 240) {
          doc.addPage();
          y = 20;
        }
        
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(13);
        doc.text(`${date} (${mode.toUpperCase()})`, 20, y);
        
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(10);
        doc.text(`Mood: ${mood}/5`, 140, y);
        
        y += 8;
        
        if (tags.length > 0) {
          doc.setFont("Helvetica", "italic");
          doc.text(`Tags: ${tags.join(', ')}`, 20, y);
          y += 6;
        }
        
        if (content) {
          doc.setFont("Helvetica", "normal");
          doc.setFontSize(10.5);
          const splitContent = doc.splitTextToSize(content, 170);
          doc.text(splitContent, 20, y);
          y += splitContent.length * 5 + 4;
        }
        
        const gratitudeItems = gratitude.filter(Boolean);
        if (gratitudeItems.length > 0) {
          if (y > 250) { doc.addPage(); y = 20; }
          doc.setFont("Helvetica", "bold");
          doc.setFontSize(10);
          doc.text("Gratitude:", 20, y);
          y += 5;
          doc.setFont("Helvetica", "normal");
          gratitudeItems.forEach((item: string) => {
            doc.text(`- ${item}`, 25, y);
            y += 5;
          });
          y += 2;
        }
        
        if (learned) {
          if (y > 250) { doc.addPage(); y = 20; }
          doc.setFont("Helvetica", "bold");
          doc.text("Today I Learned:", 20, y);
          y += 5;
          doc.setFont("Helvetica", "normal");
          const splitLearned = doc.splitTextToSize(learned, 170);
          doc.text(splitLearned, 20, y);
          y += splitLearned.length * 5 + 4;
        }
        
        if (intention) {
          if (y > 250) { doc.addPage(); y = 20; }
          doc.setFont("Helvetica", "bold");
          doc.text("Tomorrow's Intention:", 20, y);
          y += 5;
          doc.setFont("Helvetica", "normal");
          const splitIntention = doc.splitTextToSize(intention, 170);
          doc.text(splitIntention, 20, y);
          y += splitIntention.length * 5 + 4;
        }
        
        y += 10;
        doc.line(20, y - 5, 190, y - 5);
        y += 5;
      });
      
      doc.save(`pravah_journal_${user.name.toLowerCase().replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error('Failed to export journal:', err);
      alert('Failed to generate PDF export.');
    } finally {
      setExportingJournal(false);
    }
  };

  const exportHabitsCSV = async () => {
    if (exportingHabits) return;
    setExportingHabits(true);
    try {
      const habitsRef = collection(db!, `users/${user.id}/habits`);
      const habitsSnap = await getDocs(habitsRef);
      if (habitsSnap.empty) {
        alert('No habits found to export.');
        return;
      }
      
      const completionsRef = collection(db!, `users/${user.id}/habitCompletions`);
      const completionsSnap = await getDocs(completionsRef);
      
      const completionsList = completionsSnap.docs.map(doc => {
        const data = doc.data();
        return {
          date: doc.id,
          completedHabits: data.completedHabits || [],
          notes: data.notes || {},
        };
      });
      
      let csvContent = "Habit ID,Name,Feeling,Category,Current Streak,Best Streak,Is Active,Completion Date,Completion Note\n";
      
      habitsSnap.docs.forEach(habitDoc => {
        const hData = habitDoc.data();
        const habitId = habitDoc.id;
        const name = hData.name || '';
        const feeling = hData.feeling || '';
        const category = hData.category || '';
        const currentStreak = hData.currentStreak || 0;
        const bestStreak = hData.bestStreak || 0;
        const isActive = hData.is_active !== false;
        
        let hasCompletions = false;
        completionsList.forEach(comp => {
          if (comp.completedHabits.includes(habitId)) {
            hasCompletions = true;
            const note = comp.notes[habitId] || '';
            const escapedName = `"${name.replace(/"/g, '""')}"`;
            const escapedFeeling = `"${feeling.replace(/"/g, '""')}"`;
            const escapedNote = `"${note.replace(/"/g, '""')}"`;
            csvContent += `${habitId},${escapedName},${escapedFeeling},${category},${currentStreak},${bestStreak},${isActive},${comp.date},${escapedNote}\n`;
          }
        });
        
        if (!hasCompletions) {
          const escapedName = `"${name.replace(/"/g, '""')}"`;
          const escapedFeeling = `"${feeling.replace(/"/g, '""')}"`;
          csvContent += `${habitId},${escapedName},${escapedFeeling},${category},${currentStreak},${bestStreak},${isActive},N/A,N/A\n`;
        }
      });
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `pravah_habits_${user.name.toLowerCase().replace(/\s+/g, '_')}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Failed to export habits CSV:', err);
      alert('Failed to generate CSV export.');
    } finally {
      setExportingHabits(false);
    }
  };

  const exportAnthologyPDF = async () => {
    if (exportingAnthology) return;
    setExportingAnthology(true);
    try {
      const colRef = collection(db!, `users/${user.id}/anthology`);
      const snap = await getDocs(colRef);
      if (snap.empty) {
        alert('No saved poems in your anthology to export.');
        return;
      }
      
      const { POEMS } = await import('@/lib/constants/poems');
      
      const doc = new jsPDF();
      doc.setFont("Helvetica", "normal");
      
      doc.setFontSize(22);
      doc.text("Pravah - Poetry Anthology", 20, 20);
      doc.setFontSize(10);
      doc.text(`Exported on ${new Date().toLocaleDateString()} for ${user.name}`, 20, 28);
      doc.line(20, 32, 190, 32);
      
      let y = 45;
      
      snap.docs.forEach((aDoc) => {
        const poemId = aDoc.id;
        const poem = POEMS.find((p: { id: string }) => p.id === poemId);
        if (!poem) return;
        
        if (y > 230) {
          doc.addPage();
          y = 20;
        }
        
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(13);
        doc.text(poem.title, 20, y);
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(10.5);
        doc.text(`by ${poem.author} (${poem.period})`, 20, y + 6);
        
        doc.setFontSize(9.5);
        doc.text(poem.tradition, 140, y);
        
        y += 14;
        
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(10);
        
        const romanLines = poem.roman || [];
        if (y + romanLines.length * 5.5 > 270) {
          doc.addPage();
          y = 20;
        }
        
        romanLines.forEach((line: string) => {
          doc.text(line, 20, y);
          y += 5.5;
        });
        
        y += 6;
        
        const enLines = poem.en || [];
        if (enLines.length > 0) {
          if (y + enLines.length * 5.5 > 270) {
            doc.addPage();
            y = 20;
          }
          doc.setFont("Helvetica", "italic");
          doc.text("English Translation:", 20, y);
          y += 6;
          doc.setFont("Helvetica", "normal");
          enLines.forEach((line: string) => {
            doc.text(line, 20, y);
            y += 5.5;
          });
        }
        
        if (poem.commentary) {
          if (y > 230) { doc.addPage(); y = 20; }
          y += 4;
          doc.setFont("Helvetica", "bold");
          doc.text("Commentary:", 20, y);
          y += 5;
          doc.setFont("Helvetica", "normal");
          const splitComm = doc.splitTextToSize(poem.commentary, 170);
          
          if (y + splitComm.length * 5 > 270) {
            doc.addPage();
            y = 20;
          }
          
          doc.text(splitComm, 20, y);
          y += splitComm.length * 5 + 4;
        }
        
        y += 10;
        doc.line(20, y - 5, 190, y - 5);
        y += 5;
      });
      
      doc.save(`pravah_anthology_${user.name.toLowerCase().replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error('Failed to export anthology:', err);
      alert('Failed to generate PDF export.');
    } finally {
      setExportingAnthology(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-md sm:max-w-xl overflow-hidden rounded-2xl border flex flex-col z-10 max-h-[85vh]"
            style={{
              background: 'var(--bg-secondary)',
              borderColor: 'var(--border-default)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0"
              style={{ borderColor: 'var(--border-default)' }}
            >
              <div className="flex items-center gap-2">
                <Settings size={18} className="text-saffron" style={{ color: 'var(--accent-saffron)' }} />
                <h2 className="text-base font-medium font-serif" style={{ color: 'var(--text-primary)' }}>
                  Sanctuary Settings
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg transition-colors hover:bg-bg-tertiary"
                style={{ color: 'var(--text-muted)' }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {/* Account Section */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                  User Sanctuary
                </h3>
                <div
                  className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-default)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-semibold flex-shrink-0"
                    style={{ background: 'var(--accent-saffron)' }}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-serif text-sm truncate" style={{ color: 'var(--text-primary)' }}>
                      {user.name}
                    </div>
                    <div className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>
                      {user.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences Section */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                  Reading & Script
                </h3>

                {/* Script Selector */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text-secondary)' }}>Preferred Script</span>
                    <span style={{ color: 'var(--text-muted)' }}>For poetry & translations</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => updatePreferences({ script: 'devanagari' })}
                      className="px-3 py-2 rounded-xl text-xs font-devanagari transition-all border text-center"
                      style={{
                        backgroundColor: preferences.script === 'devanagari' ? 'var(--bg-tertiary)' : 'transparent',
                        borderColor: preferences.script === 'devanagari' ? 'var(--accent-saffron)' : 'var(--border-default)',
                        color: preferences.script === 'devanagari' ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontWeight: preferences.script === 'devanagari' ? 600 : 400,
                      }}
                    >
                      देवनागरी (Hindi)
                    </button>
                    <button
                      onClick={() => updatePreferences({ script: 'roman' })}
                      className="px-3 py-2 rounded-xl text-xs transition-all border text-center"
                      style={{
                        backgroundColor: preferences.script === 'roman' ? 'var(--bg-tertiary)' : 'transparent',
                        borderColor: preferences.script === 'roman' ? 'var(--accent-saffron)' : 'var(--border-default)',
                        color: preferences.script === 'roman' ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontWeight: preferences.script === 'roman' ? 600 : 400,
                      }}
                    >
                      Roman Script
                    </button>
                  </div>
                </div>

                {/* Language Selector */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text-secondary)' }}>Default Translation Language</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {(['en', 'hi', 'ur'] as const).map(lang => {
                      const labels = { en: 'English', hi: 'Hindi', ur: 'Urdu' };
                      const isActive = preferences.defaultLang === lang;
                      return (
                        <button
                          key={lang}
                          onClick={() => updatePreferences({ defaultLang: lang })}
                          className="px-3 py-2 rounded-xl text-xs transition-all border text-center"
                          style={{
                            backgroundColor: isActive ? 'var(--bg-tertiary)' : 'transparent',
                            borderColor: isActive ? 'var(--accent-saffron)' : 'var(--border-default)',
                            color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                            fontWeight: isActive ? 600 : 400,
                          }}
                        >
                          {labels[lang]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Theme Selector */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text-secondary)' }}>Sanctuary Theme</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setTheme('cream')}
                      className="px-3 py-2.5 rounded-xl text-xs transition-all border text-center font-medium min-h-[44px]"
                      style={{
                        backgroundColor: theme === 'cream' ? 'var(--bg-tertiary)' : 'transparent',
                        borderColor: theme === 'cream' ? 'var(--accent-saffron)' : 'var(--border-default)',
                        color: theme === 'cream' ? 'var(--text-primary)' : 'var(--text-muted)',
                      }}
                    >
                      ☀️ Day (Cream)
                    </button>
                    <button
                      onClick={() => setTheme('rainy')}
                      className="px-3 py-2.5 rounded-xl text-xs transition-all border text-center font-medium min-h-[44px]"
                      style={{
                        backgroundColor: theme === 'rainy' ? 'var(--bg-tertiary)' : 'transparent',
                        borderColor: theme === 'rainy' ? 'var(--accent-saffron)' : 'var(--border-default)',
                        color: theme === 'rainy' ? 'var(--text-primary)' : 'var(--text-muted)',
                      }}
                    >
                      🌙 Night (Library)
                    </button>
                    <button
                      onClick={() => setTheme('vangogh')}
                      className="px-3 py-2.5 rounded-xl text-xs transition-all border text-center font-medium min-h-[44px]"
                      style={{
                        backgroundColor: theme === 'vangogh' ? 'var(--bg-tertiary)' : 'transparent',
                        borderColor: theme === 'vangogh' ? 'var(--accent-saffron)' : 'var(--border-default)',
                        color: theme === 'vangogh' ? 'var(--text-primary)' : 'var(--text-muted)',
                      }}
                    >
                      🎨 Painterly (Van Gogh)
                    </button>
                    <button
                      onClick={() => setTheme('forest')}
                      className="px-3 py-2.5 rounded-xl text-xs transition-all border text-center font-medium min-h-[44px]"
                      style={{
                        backgroundColor: theme === 'forest' ? 'var(--bg-tertiary)' : 'transparent',
                        borderColor: theme === 'forest' ? 'var(--accent-saffron)' : 'var(--border-default)',
                        color: theme === 'forest' ? 'var(--text-primary)' : 'var(--text-muted)',
                      }}
                    >
                      🌲 Nature (Forest)
                    </button>
                  </div>
                </div>
              </div>

              {/* Reading Size Settings */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                  Reading Size
                </h3>

                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Control 1 — Heading Size */}
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>Headings</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-between">
                      <button
                        onClick={() => {
                          const idx = STEPS.indexOf(headingSize);
                          if (idx > 0) updatePreferences({ fontSizeHeading: STEPS[idx - 1] });
                        }}
                        disabled={headingSize === 'xs'}
                        className="w-11 h-11 rounded-xl flex items-center justify-center border font-semibold text-lg transition-all flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed select-none min-h-[44px] min-w-[44px]"
                        style={{
                          borderColor: 'var(--border-default)',
                          color: 'var(--text-secondary)',
                          backgroundColor: 'var(--bg-primary)',
                        }}
                      >
                        −
                      </button>

                      <div className="flex items-center gap-1 flex-1 justify-center">
                        {STEPS.map(step => {
                          const isSelected = headingSize === step;
                          return (
                            <button
                              key={step}
                              onClick={() => updatePreferences({ fontSizeHeading: step })}
                              className="w-7 h-7 rounded-lg text-[10px] font-bold transition-all border flex items-center justify-center select-none font-medium"
                              style={{
                                backgroundColor: isSelected ? 'var(--accent-saffron)' : 'transparent',
                                borderColor: isSelected ? 'var(--accent-saffron)' : 'var(--border-default)',
                                color: isSelected ? 'white' : 'var(--text-muted)',
                              }}
                            >
                              {STEP_LABELS[step]}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => {
                          const idx = STEPS.indexOf(headingSize);
                          if (idx < STEPS.length - 1) updatePreferences({ fontSizeHeading: STEPS[idx + 1] });
                        }}
                        disabled={headingSize === 'xl'}
                        className="w-11 h-11 rounded-xl flex items-center justify-center border font-semibold text-lg transition-all flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed select-none min-h-[44px] min-w-[44px]"
                        style={{
                          borderColor: 'var(--border-default)',
                          color: 'var(--text-secondary)',
                          backgroundColor: 'var(--bg-primary)',
                        }}
                      >
                        +
                      </button>
                    </div>

                    {/* Preview heading */}
                    <div
                      className="h-14 rounded-xl flex items-center justify-center border overflow-hidden p-2 text-center"
                      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-default)' }}
                    >
                      <span
                        className="font-serif leading-none"
                        style={{
                          fontSize: `${1.5 * STEP_MULTIPLIERS[headingSize]}rem`,
                          transition: 'font-size 200ms ease',
                          color: 'var(--text-primary)',
                        }}
                      >
                        Pravah
                      </span>
                    </div>
                  </div>

                  {/* Control 2 — Body Text Size */}
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>Body Text</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-between">
                      <button
                        onClick={() => {
                          const idx = STEPS.indexOf(bodySize);
                          if (idx > 0) updatePreferences({ fontSizeBody: STEPS[idx - 1] });
                        }}
                        disabled={bodySize === 'xs'}
                        className="w-11 h-11 rounded-xl flex items-center justify-center border font-semibold text-lg transition-all flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed select-none min-h-[44px] min-w-[44px]"
                        style={{
                          borderColor: 'var(--border-default)',
                          color: 'var(--text-secondary)',
                          backgroundColor: 'var(--bg-primary)',
                        }}
                      >
                        −
                      </button>

                      <div className="flex items-center gap-1 flex-1 justify-center">
                        {STEPS.map(step => {
                          const isSelected = bodySize === step;
                          return (
                            <button
                              key={step}
                              onClick={() => updatePreferences({ fontSizeBody: step })}
                              className="w-7 h-7 rounded-lg text-[10px] font-bold transition-all border flex items-center justify-center select-none font-medium"
                              style={{
                                backgroundColor: isSelected ? 'var(--accent-saffron)' : 'transparent',
                                borderColor: isSelected ? 'var(--accent-saffron)' : 'var(--border-default)',
                                color: isSelected ? 'white' : 'var(--text-muted)',
                              }}
                            >
                              {STEP_LABELS[step]}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => {
                          const idx = STEPS.indexOf(bodySize);
                          if (idx < STEPS.length - 1) updatePreferences({ fontSizeBody: STEPS[idx + 1] });
                        }}
                        disabled={bodySize === 'xl'}
                        className="w-11 h-11 rounded-xl flex items-center justify-center border font-semibold text-lg transition-all flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed select-none min-h-[44px] min-w-[44px]"
                        style={{
                          borderColor: 'var(--border-default)',
                          color: 'var(--text-secondary)',
                          backgroundColor: 'var(--bg-primary)',
                        }}
                      >
                        +
                      </button>
                    </div>

                    {/* Preview body */}
                    <div
                      className="h-14 rounded-xl flex items-center justify-center border overflow-hidden p-2 text-center"
                      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-default)' }}
                    >
                      <span
                        className="leading-tight text-center"
                        style={{
                          fontSize: `${0.9 * STEP_MULTIPLIERS[bodySize]}rem`,
                          transition: 'font-size 200ms ease',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        A curious mind is a free mind.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Ambience Settings */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                  Background Ambience
                </h3>

                {/* Painting Selector */}
                <div className="space-y-2">
                  <span className="text-xs block" style={{ color: 'var(--text-secondary)' }}>Select Painting</span>
                  <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
                    {BACKGROUND_PAINTINGS.map(p => {
                      const isActive = (preferences.backgroundPainting || 'starry-night') === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => updatePreferences({ backgroundPainting: p.id })}
                          className="flex flex-col items-center gap-1.5 flex-shrink-0 focus:outline-none"
                        >
                          <div
                            className="w-16 h-16 rounded-lg overflow-hidden border-2 transition-all"
                            style={{
                              borderColor: isActive ? 'var(--accent-saffron)' : 'var(--border-default)',
                              boxShadow: isActive ? '0 0 8px rgba(196,135,58,0.4)' : 'none',
                            }}
                          >
                            <img src={p.file} alt={p.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[10px] text-center w-16 truncate" style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                            {p.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Opacity Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span style={{ color: 'var(--text-secondary)' }}>Painting Intensity</span>
                    <span style={{ color: 'var(--accent-saffron)' }}>
                      {Math.round((preferences.backgroundOpacity !== undefined ? preferences.backgroundOpacity : 0.07) * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.25"
                    step="0.01"
                    value={preferences.backgroundOpacity !== undefined ? preferences.backgroundOpacity : 0.07}
                    onChange={e => updatePreferences({ backgroundOpacity: parseFloat(e.target.value) })}
                    className="w-full h-1 bg-tertiary rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: 'var(--bg-tertiary)',
                    }}
                  />
                </div>
              </div>

              {/* Audio Settings */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                  Acoustic & Voice
                </h3>

                {/* TTS Speed Selector */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text-secondary)' }}>Read-Aloud Voice Speed</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {([0.7, 1.0, 1.25, 1.5] as const).map(speed => {
                      const isActive = preferences.ttsSpeed === speed;
                      return (
                        <button
                          key={speed}
                          onClick={() => updatePreferences({ ttsSpeed: speed })}
                          className="px-2 py-2 rounded-xl text-xs transition-all border text-center min-h-[44px]"
                          style={{
                            backgroundColor: isActive ? 'var(--bg-tertiary)' : 'transparent',
                            borderColor: isActive ? 'var(--accent-saffron)' : 'var(--border-default)',
                            color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                            fontWeight: isActive ? 600 : 400,
                          }}
                        >
                          {speed === 1.0 ? 'Normal' : `${speed}x`}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sound Toggle */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text-secondary)' }}>Ambient Sounds</span>
                  </div>
                  <button
                    onClick={() => isMuted ? enableAudio() : toggleMute()}
                    className="w-full px-4 py-2.5 rounded-xl text-xs transition-all border text-center font-semibold uppercase tracking-wider min-h-[44px]"
                    style={{
                      backgroundColor: !isMuted ? 'color-mix(in srgb, var(--accent-saffron) 12%, var(--bg-tertiary))' : 'transparent',
                      borderColor: !isMuted ? 'var(--accent-saffron)' : 'var(--border-default)',
                      color: !isMuted ? 'var(--accent-saffron)' : 'var(--text-muted)',
                    }}
                  >
                    {!isMuted ? '🔈 Sound On (Unmuted)' : '🔇 Sound Off (Muted)'}
                  </button>
                </div>
              </div>

              {/* Reminders & Notifications Section */}
              <div className="space-y-4 pt-2 border-t" style={{ borderColor: 'var(--border-default)' }}>
                <div className="flex items-center gap-2">
                  <Bell size={16} className="text-text-muted" style={{ color: 'var(--accent-saffron)' }} />
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                    Daily Practice Reminders
                  </h3>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium block" style={{ color: 'var(--text-secondary)' }}>Reflection Reminders</span>
                    <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Receive daily nudges to complete practices</span>
                  </div>
                  <button
                    onClick={() => updatePreferences({ remindersEnabled: !preferences.remindersEnabled })}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border min-h-[36px]"
                    style={{
                      backgroundColor: preferences.remindersEnabled ? 'color-mix(in srgb, var(--accent-saffron) 12%, var(--bg-tertiary))' : 'transparent',
                      borderColor: preferences.remindersEnabled ? 'var(--accent-saffron)' : 'var(--border-default)',
                      color: preferences.remindersEnabled ? 'var(--accent-saffron)' : 'var(--text-muted)',
                    }}
                  >
                    {preferences.remindersEnabled ? 'Enabled' : 'Disabled'}
                  </button>
                </div>
                
                {preferences.remindersEnabled && (
                  <div className="flex items-center justify-between gap-4 pl-4 border-l-2" style={{ borderColor: 'var(--accent-saffron)' }}>
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Daily Reminder Time</span>
                    <input
                      type="time"
                      value={preferences.reminderTime || '21:00'}
                      onChange={e => updatePreferences({ reminderTime: e.target.value })}
                      className="px-3 py-1.5 rounded-xl text-xs bg-bg-tertiary border border-border-default outline-none text-text-primary focus:border-accent-saffron"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: 'var(--border-default)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Data Export Section */}
              <div className="space-y-4 pt-2 border-t" style={{ borderColor: 'var(--border-default)' }}>
                <div className="flex items-center gap-2">
                  <Download size={16} className="text-text-muted" style={{ color: 'var(--accent-saffron)' }} />
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-text-faint" style={{ color: 'var(--text-faint)' }}>
                    Export Sanctuary Data
                  </h3>
                </div>
                
                <p className="text-[10px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Download a local archive of your journals, habits and poetry anthology. Hindi text renders in transliterated Roman script in PDF formats.
                </p>
                
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={exportJournalPDF}
                    disabled={exportingJournal}
                    className="px-2.5 py-2.5 rounded-xl text-[10px] font-semibold uppercase tracking-wider transition-all border text-center hover:bg-bg-tertiary disabled:opacity-50"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--bg-tertiary)',
                    }}
                  >
                    {exportingJournal ? '📓 Exporting...' : '📓 Journal (PDF)'}
                  </button>
                  <button
                    onClick={exportHabitsCSV}
                    disabled={exportingHabits}
                    className="px-2.5 py-2.5 rounded-xl text-[10px] font-semibold uppercase tracking-wider transition-all border text-center hover:bg-bg-tertiary disabled:opacity-50"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--bg-tertiary)',
                    }}
                  >
                    {exportingHabits ? '🔥 Exporting...' : '🔥 Habits (CSV)'}
                  </button>
                  <button
                    onClick={exportAnthologyPDF}
                    disabled={exportingAnthology}
                    className="px-2.5 py-2.5 rounded-xl text-[10px] font-semibold uppercase tracking-wider transition-all border text-center hover:bg-bg-tertiary disabled:opacity-50"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--bg-tertiary)',
                    }}
                  >
                    {exportingAnthology ? '🌧️ Exporting...' : '🌧️ Anthology (PDF)'}
                  </button>
                </div>
              </div>
            </div>

            {/* Footer / Action */}
            <div
              className="px-6 py-4 border-t flex items-center justify-between flex-shrink-0"
              style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-primary)' }}
            >
              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs text-red-500 hover:bg-red-500/10 transition-colors min-h-[44px]"
                title="Sign out of sanctuary"
              >
                <LogOut size={14} />
                <span>Leave Sanctuary</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-medium transition-all min-h-[44px]"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-default)',
                  color: 'var(--text-primary)',
                }}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
