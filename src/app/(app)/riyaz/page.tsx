'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import DayNavigator from '@/components/shared/DayNavigator';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import { getDayIndex } from '@/lib/utils/date';
import { RIYAZ_DATA, type RiyazDayEntry } from './data';

type RiyazTab = 'featured' | 'raga' | 'songs';

interface RagaProfile {
  name: string;
  nameHi: string;
  thaat: string;
  time: string;
  rasa: string;
  aaroh: string;
  avroh: string;
  pakad: string;
  description: string;
  contemplation: string;
}

const RAGAS: RagaProfile[] = [
  {
    name: "Raga Yaman",
    nameHi: "राग यमन",
    thaat: "Kalyan",
    time: "First Prahar of Night (6 PM - 9 PM)",
    rasa: "Shanti (Peace) & Bhakti (Devotion)",
    aaroh: "S R G M(t) D N S'",
    avroh: "S' N D P M(t) G R S",
    pakad: "N' R G R S, P M(t) G R S",
    description: "The archetype of evening calm. Raga Yaman is a night raga that uses all natural notes except for the raised Madhyam (sharp fourth/Tivra Ma), creating a spacious and highly lyrical mood. It is traditionally the first raga taught to beginners, representing structure, discipline, and emotional gravity.",
    contemplation: "Does the sharp fourth note (Tivra Ma) evoke a sense of deep, focused questioning or peaceful resolution?"
  },
  {
    name: "Raga Bhairav",
    nameHi: "राग भैरव",
    thaat: "Bhairav",
    time: "Dawn / Early Morning (3 AM - 6 AM)",
    rasa: "Bhakti (Devotion) & Solemnity",
    aaroh: "S r G M P d N S'",
    avroh: "S' N d P M G r S",
    pakad: "G M d P, G M r S",
    description: "Performer of the early morning hours, Raga Bhairav is named after Shiva's fierce form but carries a deeply peaceful, spiritual, and solemn atmosphere. It uses komal (flat) Rishabh (re) and Dhaivat (dha). The slow oscillation (andolan) on these notes simulates a meditative state of awakening.",
    contemplation: "As you hear the flat notes oscillate, do you feel the quiet, expanding space of a fresh dawn?"
  },
  {
    name: "Raga Bhairavi",
    nameHi: "राग भैरवी",
    thaat: "Bhairavi",
    time: "Morning (Traditionally used to conclude concerts at any time)",
    rasa: "Karuna (Compassion), Shanti & Bhakti",
    aaroh: "S r g M P d n S'",
    avroh: "S' n d P M g r S",
    pakad: "d n S' d P, g M r S",
    description: "Known as the queen of morning ragas, Bhairavi uses all flat (komal) notes: r, g, d, n. It evokes compassion, surrender, and deep peace. In classical performances, it is traditionally sung at the end of the concert as a blessing of cosmic return, regardless of the physical time of day.",
    contemplation: "How does the final resolution of Bhairavi help you find a sense of completion in your day?"
  },
  {
    name: "Raga Darbari Kanada",
    nameHi: "राग दरबारी कानड़ा",
    thaat: "Asavari",
    time: "Late Night (12 AM - 3 AM)",
    rasa: "Veera (Majesty) & Grave Peace",
    aaroh: "S R g M P d n S'",
    avroh: "S' d n P M P g R S",
    pakad: "g R S, d' n' S R",
    description: "Legend says Raga Darbari Kanada was brought into Emperor Akbar's royal court by Mian Tansen. It is performed in the quiet stillness of late night, and its heavy, somber character creates a majestic atmosphere. It requires slow, heavy slides (meend) to express its deep emotional weight.",
    contemplation: "Does the deep gravity of Darbari Kanada make you feel the weight of history and royal stillness?"
  },
  {
    name: "Raga Malkauns",
    nameHi: "राग मालकौंस",
    thaat: "Bhairavi",
    time: "Late Night (12 AM - 3 AM)",
    rasa: "Bhakti (Devotion) & Veera (Heroic / Meditative)",
    aaroh: "S g M d n S'",
    avroh: "S' n d M g S",
    pakad: "d M g S, d' n' S",
    description: "A pentatonic (Audav) raga of immense antiquity and spiritual weight. By omitting Rishabh (R) and Pancham (P), Malkauns creates a highly focused, inward-looking, and mystical experience. It is performed in the dark hours of midnight, inducing a trance-like state of renunciation.",
    contemplation: "In the absence of a dominant fifth note (Pa), how does your mind find its balance in the quiet intervals?"
  },
  {
    name: "Raga Bageshri",
    nameHi: "राग बागेश्री",
    thaat: "Kafi",
    time: "Late Night (9 PM - 12 AM)",
    rasa: "Shringar (Love & Sweet Longing)",
    aaroh: "S R g M D n S'",
    avroh: "S' n D M g R S",
    pakad: "D' n' S, M' G M",
    description: "Raga Bageshri represents the emotion of a lover waiting in sweet, melancholic expectation for a reunion. It is a late-night melody that balances the emotional duality of loneliness and passionate anticipation, utilizing soft, flowing passages to soothe the listener.",
    contemplation: "Can you feel the silent anticipation in Bageshri, like a night breeze passing through an open window?"
  },
  {
    name: "Raga Bhimpalasi",
    nameHi: "राग भीमपलासी",
    thaat: "Kafi",
    time: "Late Afternoon (3 PM - 6 PM)",
    rasa: "Karuna (Compassion) & Shanti",
    aaroh: "n' S g M P n S'",
    avroh: "S' n D P M g R S",
    pakad: "S g M P, g R S",
    description: "Evokes the quiet transition of late afternoon when the bright heat of the day fades into sunset. Bhimpalasi uses komal (flat) ga and ni, creating a mood of tender devotion, gentle sadness, and emotional rest.",
    contemplation: "Does the late afternoon cooling find its resonance in the quiet, landing notes of Bhimpalasi?"
  },
  {
    name: "Raga Todi",
    nameHi: "राग तोड़ी",
    thaat: "Todi",
    time: "Late Morning (9 AM - 12 PM)",
    rasa: "Karuna (Pathos) & Intense Devotion",
    aaroh: "S r g M(t) d N S'",
    avroh: "S' N d P M(t) g r S",
    pakad: "d' N' S r g r S",
    description: "A raga of profound emotional weight and technical complexity. Performed in the late morning, Todi uses flat (komal) r, g, d and sharp (tivra) Ma. The juxtaposition of these notes creates a prayer-like tension, expressing deep yearning and spiritual search.",
    contemplation: "How does the tension between the komal notes and tivra Ma help you sit with your own inner search?"
  },
  {
    name: "Raga Jaunpuri",
    nameHi: "राग जौनपुरी",
    thaat: "Asavari",
    time: "Late Morning (9 AM - 12 PM)",
    rasa: "Bhakti (Devotion) & Morning Hope",
    aaroh: "S R M P d n S'",
    avroh: "S' n d P M g R S",
    pakad: "M P d' P, M g R S",
    description: "Created by Sultan Hussain Sharqi, the ruler of Jaunpur, this morning raga is bright, hopeful, and full of devotional movement. It builds on the Asavari scale, using komal ga, dha, and ni, but avoids Rishabh in the ascending pattern to create a distinct rising energy.",
    contemplation: "Does the ascending skip of the second note (Re) create a feeling of rising above morning obstacles?"
  },
  {
    name: "Raga Kafi",
    nameHi: "राग काफी",
    thaat: "Kafi",
    time: "Night (Any time / Spring season)",
    rasa: "Shringar (Joy & Playfulness)",
    aaroh: "S R g M P D n S'",
    avroh: "S' n D P M g R S",
    pakad: "R g M P, M g R S",
    description: "Associated with the spring season, Holi festivals, and the mythological play of Krishna and Radha, Raga Kafi is a lively, rhythmic, and highly expressive raga. It is the natural home for semi-classical thumris and horis, expressing love and light-hearted celebration.",
    contemplation: "How does Kafi's light-hearted, spring-like movement refresh your emotional landscape?"
  },
  {
    name: "Raga Desh",
    nameHi: "राग देश",
    thaat: "Khamaj",
    time: "Second Prahar of Night (9 PM - 12 AM / Monsoon season)",
    rasa: "Shringar (Romantic Longing) & Patriotism",
    aaroh: "S R M P N S'",
    avroh: "S' n D P M G R G S",
    pakad: "R M P N D P, D M G R S",
    description: "Associated with the monsoon season and heavy rains, Raga Desh evokes the security of the soil and the romance of the rain. It has also served as the basis for national songs (like Vande Mataram), representing land, belonging, and emotional warmth.",
    contemplation: "Does the sweet, descending glide of Raga Desh evoke a sense of home and seasonal rain for you?"
  },
  {
    name: "Raga Khamaj",
    nameHi: "राग खमाज",
    thaat: "Khamaj",
    time: "Second Prahar of Night (9 PM - 12 AM)",
    rasa: "Shringar (Playful Love & Romance)",
    aaroh: "S G M P D N S'",
    avroh: "S' n D P M G R S",
    pakad: "G M P D, n D P",
    description: "A highly lyrical evening raga, Khamaj uses a natural Ni in ascent and flat ni in descent. It is highly popular in light classical and semi-classical music, providing the perfect canvas for songs of romantic play, separation, and devotion.",
    contemplation: "How does the shifting between the natural and flat seventh note (Ni) mirror the emotional transitions of love?"
  },
  {
    name: "Raga Bilawal",
    nameHi: "राग बिलावल",
    thaat: "Bilawal",
    time: "Morning (6 AM - 9 AM)",
    rasa: "Joy, Purity & Awakening",
    aaroh: "S R G M P D N S'",
    avroh: "S' N D P M G R S",
    pakad: "G R, G P, D N S'",
    description: "Raga Bilawal represents the pure major scale of Indian music. Performed in the early morning, it uses all natural (shuddha) notes. It mimics the crisp, clear quality of early morning sunlight, bringing a feeling of optimism, clean focus, and joy.",
    contemplation: "In the clarity of all natural notes, do you find a simple, uncomplicated starting point for your thoughts?"
  },
  {
    name: "Raga Marwa",
    nameHi: "राग मारवा",
    thaat: "Marwa",
    time: "Twilight / Sunset (4 PM - 7 PM)",
    rasa: "Mysticism, Restlessness & Detachment",
    aaroh: "S r G M(t) D N S'",
    avroh: "S' N D M(t) G r S",
    pakad: "D M(t) G r, r S",
    description: "A sandhiprakash raga performed exactly at the threshold of sunset. Marwa uses a flat r and a sharp Ma, leaving the tonic (Sa) largely untouched. This creates a haunting, restless, and deeply mystical mood, representing transition, renunciation, and twilight.",
    contemplation: "By keeping the home note (Sa) silent, how does Marwa challenge your sense of stability and rest?"
  },
  {
    name: "Raga Vrindavani Sarang",
    nameHi: "राग वृन्दावनी सारंग",
    thaat: "Kafi",
    time: "Midday (12 PM - 3 PM)",
    rasa: "Shanti (Coolness in midday heat)",
    aaroh: "S R M P N S'",
    avroh: "S' n P M R S",
    pakad: "R M P N' P M R, S",
    description: "Associated with the bright heat of the midday sun, Vrindavani Sarang uses only five notes (omitting Ga and Dha) and alternates between shuddha and komal Ni. It creates a refreshing, cool, and peaceful aura, like a breeze passing through forest trees.",
    contemplation: "Does the pentatonic simplicity of Vrindavani Sarang offer you a cool shelter during a busy afternoon?"
  }
];

const SAFFRON = '#C4873A';

export default function RiyazPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<RiyazTab>('featured');

  const dayIndex = getDayIndex(currentDate);
  const entry: RiyazDayEntry = RIYAZ_DATA[(dayIndex - 1) % RIYAZ_DATA.length];
  const featured = entry.featured;

  // Fetch daily Raga profile
  const raga: RagaProfile = RAGAS[(dayIndex - 1) % RAGAS.length];

  const getRagaTtsText = (r: RagaProfile) => {
    return `${r.name}, or ${r.nameHi}, belonging to the ${r.thaat} thaat. Best performed during ${r.time}. Rasa is ${r.rasa}. Ascending scale: ${r.aaroh}. Descending scale: ${r.avroh}. Catch phrase is ${r.pakad}. Description: ${r.description}`;
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label" style={{ color: SAFFRON }}>Riyaz Room</p>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>रियाज़ - Riyaz</h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Classic jazz, ragas, art, and songs. The practice of focus, scale, and beauty.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} maxPastDays={30} />
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
              activeTab === 'featured' ? 'bg-[#C4873A] text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            style={{ border: `1px solid ${activeTab === 'featured' ? SAFFRON : 'transparent'}` }}
          >
            संगीत · Music & Art
          </button>
          <button
            onClick={() => setActiveTab('raga')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
              activeTab === 'raga' ? 'bg-[#C4873A] text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            style={{ border: `1px solid ${activeTab === 'raga' ? SAFFRON : 'transparent'}` }}
          >
            राग · Raga
          </button>
          <button
            onClick={() => setActiveTab('songs')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
              activeTab === 'songs' ? 'bg-[#C4873A] text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            style={{ border: `1px solid ${activeTab === 'songs' ? SAFFRON : 'transparent'}` }}
          >
            गाने · Songs
          </button>
        </div>

        {/* Tab Panels */}
        <AnimatePresence mode="wait">
          {activeTab === 'featured' && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {featured.type === 'music' ? (
                // Music Piece
                <div 
                  className="card-base p-6 sm:p-8 space-y-6 border-l-4"
                  style={{ borderLeftColor: SAFFRON }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#C4873A]">
                        Featured Music
                      </span>
                      <h2 className="font-serif text-3xl font-bold mt-2" style={{ color: 'var(--text-primary)' }}>{featured.piece_title}</h2>
                      <p className="text-sm" style={{ color: SAFFRON }}>{featured.composer_or_artist} &middot; {featured.tradition}</p>
                      <p className="text-xs text-stone-500 mt-1">{featured.period} &middot; {featured.duration}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <ReadAloudButton 
                        text={`${featured.piece_title} by ${featured.composer_or_artist}. Tradition: ${featured.tradition}. About: ${featured.about_the_piece}. What to listen for: ${featured.what_to_listen_for}`} 
                        lang="en-IN"
                        size="sm"
                      />
                      <SutraNoteButton roomId="riyaz" roomName="Riyaz" contentTitle={featured.piece_title} />
                      <RevisitButton roomId="riyaz" roomName="Riyaz" contentTitle={featured.piece_title} contentSummary={featured.about_the_piece} />
                    </div>
                  </div>

                  {/* Text descriptions */}
                  <div className="space-y-4 pt-4 border-t border-[var(--border-default)]">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">About the Piece</p>
                      <p className="text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{featured.about_the_piece}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">What to Listen For</p>
                      <p className="text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{featured.what_to_listen_for}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-default)]">
                      <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: SAFFRON }}>Contemplative Reflection</p>
                      <p className="text-sm italic leading-relaxed mt-1 text-[var(--text-primary)]">{featured.after_listening}</p>
                    </div>
                  </div>
                </div>
              ) : (
                // Art Piece
                <div 
                  className="card-base p-6 sm:p-8 space-y-6 border-l-4"
                  style={{ borderLeftColor: SAFFRON }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#C4873A]">
                        Featured Art
                      </span>
                      <h2 className="font-serif text-3xl font-bold mt-2" style={{ color: 'var(--text-primary)' }}>{featured.work_title}</h2>
                      <p className="text-sm" style={{ color: SAFFRON }}>{featured.artist} &middot; {featured.tradition}</p>
                      <p className="text-xs text-stone-500 mt-1">{featured.period}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <ReadAloudButton 
                        text={`${featured.work_title} by ${featured.artist}. Tradition: ${featured.tradition}. About: ${featured.about_the_work}. What to look for: ${featured.what_to_look_for}`} 
                        lang="en-IN"
                        size="sm"
                      />
                      <SutraNoteButton roomId="riyaz" roomName="Riyaz" contentTitle={featured.work_title} />
                      <RevisitButton roomId="riyaz" roomName="Riyaz" contentTitle={featured.work_title} contentSummary={featured.about_the_work} />
                    </div>
                  </div>

                  {/* Text descriptions */}
                  <div className="space-y-4 pt-4 border-t border-[var(--border-default)]">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">About the Artwork</p>
                      <p className="text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{featured.about_the_work}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">What to Look For</p>
                      <p className="text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{featured.what_to_look_for}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-default)]">
                      <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: SAFFRON }}>Contemplative Reflection</p>
                      <p className="text-sm italic leading-relaxed mt-1 text-[var(--text-primary)]">{featured.after_looking}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'raga' && (
            <motion.div
              key="raga"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Daily Raga Profile Card */}
              <div 
                className="card-base p-6 sm:p-8 space-y-6 border-l-4"
                style={{ borderLeftColor: SAFFRON }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#C4873A]">
                      Daily Raga
                    </span>
                    <h2 className="font-serif text-3xl font-bold mt-2 text-[var(--text-primary)]">
                      {raga.name} &middot; <span className="font-devanagari">{raga.nameHi}</span>
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                      Thaat: {raga.thaat} &middot; Rasa: {raga.rasa}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <ReadAloudButton 
                      text={getRagaTtsText(raga)} 
                      lang="en-IN"
                      size="sm"
                    />
                    <SutraNoteButton roomId="riyaz" roomName="Riyaz" contentTitle={raga.name} />
                    <RevisitButton roomId="riyaz" roomName="Riyaz" contentTitle={raga.name} contentSummary={raga.description} />
                  </div>
                </div>

                {/* Aesthetic parameters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[var(--bg-tertiary)]/40 border border-[var(--border-default)]">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Time of Performance (Prahar)</p>
                    <p className="text-xs font-semibold text-[var(--text-primary)] mt-0.5">{raga.time}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Signature Phrase (Pakad)</p>
                    <p className="text-xs font-mono font-semibold text-[var(--text-primary)] mt-0.5">{raga.pakad}</p>
                  </div>
                </div>

                {/* Scales */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-paper)]">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Ascending (Aaroh)</p>
                    <p className="text-base font-serif font-bold tracking-widest text-[var(--text-primary)] mt-1">{raga.aaroh}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-paper)]">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Descending (Avroh)</p>
                    <p className="text-base font-serif font-bold tracking-widest text-[var(--text-primary)] mt-1">{raga.avroh}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 pt-4 border-t border-[var(--border-default)]">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Description & Mood</p>
                    <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{raga.description}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-default)]">
                    <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: SAFFRON }}>Contemplative Reflection</p>
                    <p className="text-sm italic leading-relaxed mt-1 text-[var(--text-primary)]">{raga.contemplation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'songs' && (
            <motion.div
              key="songs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {entry.songs.map((song, idx) => {
                const songId = `song_${idx}`;
                return (
                  <div 
                    key={songId}
                    className="card-base p-5 flex flex-col justify-between space-y-4 border-l-4"
                    style={{ borderLeftColor: 'rgba(196,135,58,0.4)' }}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex gap-1.5 flex-wrap">
                          <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded text-[var(--text-muted)] bg-[var(--bg-tertiary)]">
                            {song.era}
                          </span>
                          <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded text-white bg-[#C4873A]">
                            {song.language === 'indian_other' ? (song.indian_language || 'Regional') : song.language === 'world' ? (song.world_language || 'World') : song.language}
                          </span>
                        </div>
                        <div className="flex gap-1.5 flex-shrink-0">
                          <ReadAloudButton 
                            text={`${song.song_title} by ${song.artist}`}
                            lang={song.language === 'hindi' ? 'hi-IN' : 'en-IN'}
                            size="sm"
                          />
                          <SutraNoteButton roomId="riyaz" roomName="Riyaz" contentTitle={song.song_title} />
                          <RevisitButton roomId="riyaz" roomName="Riyaz" contentTitle={song.song_title} contentSummary={`Song by ${song.artist}`} />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[var(--text-primary)]">{song.song_title}</h3>
                        <p className="text-xs" style={{ color: SAFFRON }}>{song.artist}</p>
                        {song.film_or_album && (
                          <p className="text-[10px] text-[var(--text-muted)] mt-1 font-mono">
                            Album/Film: {song.film_or_album} {song.year ? `(${song.year})` : ''}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
