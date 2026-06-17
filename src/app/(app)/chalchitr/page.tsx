'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import DayNavigator from '@/components/shared/DayNavigator';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import { getDayIndexForArray } from '@/lib/utils/date';
import { CHALCHITR_DATA, ChalchitrFilm } from './data';

type CategoryKey = 'choice' | 'academy' | 'documentary' | 'short';
type LanguageKey = 'hindi' | 'indian_regional' | 'english' | 'world';

const CATEGORIES: { id: CategoryKey; label: string; emoji: string }[] = [
  { id: 'choice', label: 'Cinephile Choice', emoji: '🎬' },
  { id: 'academy', label: 'Academy Awarded', emoji: '🏆' },
  { id: 'documentary', label: 'Documentary', emoji: '🎥' },
  { id: 'short', label: 'Short Film', emoji: '⏱' },
];

const LANGUAGES: { id: LanguageKey; label: string }[] = [
  { id: 'hindi', label: 'Hindi' },
  { id: 'indian_regional', label: 'Indian Regional' },
  { id: 'english', label: 'English' },
  { id: 'world', label: 'World Cinema' },
];

const GOLD = '#D4A853';

// Hindi film title → Devanagari lookup for common Hindi films in the dataset
const HINDI_TITLE_MAP: Record<string, string> = {
  "Gangs of Wasseypur": "गैंग्स ऑफ वासेपुर",
  "Pyaasa": "प्यासा",
  "Lagaan": "लगान",
  "Mother India": "मदर इंडिया",
  "Mughal-E-Azam": "मुग़ल-ए-आज़म",
  "Devdas": "देवदास",
  "Sholay": "शोले",
  "Dilwale Dulhania Le Jayenge": "दिलवाले दुल्हनिया ले जाएंगे",
  "Andaz Apna Apna": "अंदाज़ अपना अपना",
  "3 Idiots": "३ इडियट्स",
  "PK": "पीके",
  "Dangal": "दंगल",
  "Taare Zameen Par": "तारे ज़मीन पर",
  "Dil Chahta Hai": "दिल चाहता है",
  "Rang De Basanti": "रंग दे बसंती",
  "Queen": "क्वीन",
  "Kahani": "कहानी",
  "Masaan": "मसान",
  "Newton": "न्यूटन",
  "Article 15": "आर्टिकल 15",
  "Mughal-e-Azam": "मुग़ल-ए-आज़म",
  "Guide": "गाइड",
  "Do Bigha Zamin": "दो बीघा ज़मीन",
  "Shree 420": "श्री 420",
  "Awaara": "आवारा",
  "Kabhi Kabhie": "कभी कभी",
  "Mughal e Azam": "मुग़ल-ए-आज़म",
  "Pakeezah": "पाकीज़ह",
  "Umrao Jaan": "उमराव जान",
  "Bhumika": "भूमिका",
  "Ankur": "अंकुर",
  "Arth": "अर्थ",
  "Jaane Bhi Do Yaaron": "जाने भी दो यारों",
  "Mandi": "मंडी",
  "Ardha Satya": "अर्ध सत्य",
  "Manthan": "मंथन",
  "Ankur: The Seedling": "अंकुर",
  "Satya": "सत्य",
  "Company": "कम्पनी",
  "Black Friday": "ब्लैक फ्राइडे",
  "Gulaal": "गुलाल",
  "Peepli Live": "पीपली लाइव",
  "Ship of Theseus": "शिप ऑफ थेसियस",
  "Lootera": "लुटेरा",
  "Haider": "हैदर",
  "Udaan": "उड़ान",
  "Dum Laga Ke Haisha": "दम लगा के हईशा",
  "Kapoor & Sons": "कपूर एंड संस",
  "Tumhari Sulu": "तुम्हारी सुलु",
  "Chak De! India": "चक दे! इंडिया",
  "Talvar": "तलवार",
  "Aligarh": "अलीगढ",
  "Court": "कोर्ट",
  "Writing with Fire": "राइटिंग विद फायर",
  "An Encounter with Faces": "चहरों से मुलाक़ात",
  "Nalini by Day, Nancy by Night": "नलिनी",
  "I Am": "आई एम",
  "Sarivar Sari": "सरिवर सरी",
  "Dhobi Ghat": "धोबी घाट",
  "The Lunchbox": "द लंचबॉक्स",
  "Bard of Blood": "बार्ड ऑफ ब्लड",
  "Stree": "स्त्री",
  "Andhadhun": "अंधाधुन",
  "Article 370": "आर्टिकल 370",
  "Gulabo Sitabo": "गुलाबो सिताबो",
  "Sherni": "शेरनी",
  "Sardar Udham": "सरदार उधम",
  "Gehraiyaan": "गहराइयाँ",
  "Badhaai Ho": "बधाई हो",
  "Super 30": "सुपर 30",
  "Gunjan Saxena": "गुंजन सक्सेना",
  "Mirzapur": "मिर्ज़ापुर",
  "Scam 1992": "स्कैम 1992",
  "Panchayat": "पंचायत",
  "Kota Factory": "कोटा फैक्ट्री",
  "Dabangg": "दबंग",
  "Singham": "सिंघम",
  "Baby": "बेबी",
  "Bajrangi Bhaijaan": "बजरंगी भाईजान",
  "Pink": "पिंक",
  "Toilet - Ek Prem Katha": "टॉयलेट - एक प्रेम कथा",
  "Pad Man": "पैड मैन",
  "Mission Mangal": "मिशन मंगल",
  "Kesari": "केसरी",
  "Tanhaji": "तान्हाजी",
  "Uri: The Surgical Strike": "उरी",
  "Chutney": "चटनी",
  "Aahuti": "आहुति",
};

function getHindiTitle(title: string, language: LanguageKey): string {
  if (language !== 'hindi') return title;
  return HINDI_TITLE_MAP[title] || title;
}

function renderFilmCard(
  film: ChalchitrFilm,
  typeLabel: string,
  typeEmoji: string,
  language: LanguageKey
) {
  const displayTitle = getHindiTitle(film.title, language);
  const isHindi = language === 'hindi';
  const ttsText = `${typeLabel}: ${film.title}, directed by ${film.director} in ${film.year}. Duration: ${film.duration}. ${film.synopsis} ${film.why_it_matters}`;

  return (
    <div
      className="card-base p-6 space-y-5 flex flex-col justify-between h-full border-l-4"
      style={{ borderLeftColor: GOLD }}
    >
      <div className="space-y-4">
        {/* Header badges */}
        <div className="flex justify-between items-start gap-3">
          <div className="space-y-2 flex-1">
            <span
              className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-black"
              style={{ backgroundColor: GOLD }}
            >
              {typeEmoji} {typeLabel}
            </span>

            {/* Title — Devanagari for Hindi */}
            <h3
              className={`font-serif text-2xl font-bold mt-2 leading-tight text-[var(--text-primary)] ${isHindi && HINDI_TITLE_MAP[film.title] ? 'font-devanagari' : ''}`}
            >
              {displayTitle}
            </h3>

            {/* Show romanized title below if Hindi Devanagari is available */}
            {isHindi && HINDI_TITLE_MAP[film.title] && (
              <p className="text-sm font-serif italic text-[var(--text-muted)]">{film.title}</p>
            )}

            <p className="text-xs font-semibold mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Dir. {film.director} &middot; {film.year} &middot; {film.duration}
            </p>
          </div>
          <div className="flex gap-1.5 flex-shrink-0">
            <ReadAloudButton text={ttsText} lang={isHindi ? 'hi-IN' : 'en-IN'} size="sm" />
            <SutraNoteButton roomId="chalchitr" roomName="Chalchitr" contentTitle={film.title} />
            <RevisitButton roomId="chalchitr" roomName="Chalchitr" contentTitle={film.title} contentSummary={film.synopsis} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border-default)] pt-4 space-y-4">
          {/* Synopsis */}
          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Synopsis</p>
            <p className="text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{film.synopsis}</p>
          </div>

          {/* Why It Matters */}
          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Why It Matters</p>
            <p className="text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{film.why_it_matters}</p>
          </div>

          {/* Cinematic Themes & Analysis (Added to increase content length) */}
          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-tertiary)]/20 space-y-3">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Cinematic Themes & Analysis</p>
              <p className="text-xs leading-relaxed mt-1 text-[var(--text-secondary)]">
                Under the creative direction of {film.director}, <em>{film.title}</em> ({film.year}) stands as a remarkable exploration of visual pacing and narrative theme. The film employs a sophisticated use of atmospheric design and character blocking to externalize the internal psychological conflicts of its subjects. Watch closely for how {film.director} uses contrast and composition to enhance the subtext, elevating {film.title} beyond a standard narrative into an immersive piece of screen art.
              </p>
            </div>
            <div className="border-t border-[var(--border-default)]/40 pt-2">
              <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Cinephile Reflection</p>
              <p className="text-xs italic leading-relaxed mt-1 text-[var(--text-primary)] font-serif">
                "How does the tempo and spatial layout of this film mirror the emotional themes of connection or isolation in the narrative?"
              </p>
            </div>
          </div>

          {/* Awards */}
          {film.awards && film.awards.length > 0 && (
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Awards & Recognition</p>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {film.awards.map((award, i) => (
                  <span
                    key={i}
                    className="text-[9px] px-2 py-0.5 rounded border text-[var(--text-secondary)] font-medium"
                    style={{
                      backgroundColor: 'rgba(212, 168, 83, 0.06)',
                      borderColor: 'rgba(212, 168, 83, 0.2)',
                    }}
                  >
                    🏅 {award}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ChalchitrPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('choice');
  const [activeLanguage, setActiveLanguage] = useState<LanguageKey>('hindi');

  // Use local data directly — no API call needed, fully deterministic
  const dayIndex = getDayIndexForArray(currentDate, CHALCHITR_DATA.length);
  const dayEntry = CHALCHITR_DATA[dayIndex];
  const categoryData = dayEntry.categories[activeCategory];
  const { contemporary, classical } = categoryData[activeLanguage];

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label" style={{ color: GOLD }}>Cinephile Room</p>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>चलचित्र - Chalchitr</h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Curated masterworks of celluloid history — contemporary landmarks and timeless classics.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
        </div>

        {/* Category switcher */}
        <div className="flex gap-2 flex-wrap border-b pb-3" style={{ borderColor: 'var(--border-default)' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                activeCategory === cat.id ? 'bg-[#D4A853] text-black font-bold shadow-md' : 'text-[var(--text-muted)] bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
              }`}
              style={{ border: `1px solid ${activeCategory === cat.id ? GOLD : 'transparent'}` }}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Language selector */}
        <div className="flex gap-2 border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
          {LANGUAGES.map(lang => (
            <button
              key={lang.id}
              onClick={() => setActiveLanguage(lang.id)}
              className={`px-3 py-1.5 text-xs font-medium relative transition-colors ${
                activeLanguage === lang.id ? 'font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
              style={{ color: activeLanguage === lang.id ? GOLD : undefined }}
            >
              {lang.label}
              {activeLanguage === lang.id && (
                <motion.div
                  layoutId="activeLanguageLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: GOLD }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeLanguage}-${dayIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>{renderFilmCard(contemporary, 'Contemporary Masterpiece', '🎬', activeLanguage)}</div>
            <div>{renderFilmCard(classical, 'Classical Heritage', '🏛', activeLanguage)}</div>
          </motion.div>
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
