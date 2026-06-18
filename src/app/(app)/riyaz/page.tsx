'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import DayNavigator from '@/components/shared/DayNavigator';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import { getDayIndex, getWeeklyIndex, getDayIndexForArray } from '@/lib/utils/date';
import { RIYAZ_DATA, type RiyazDayEntry } from './data';
import {
  BHARAT_SONGS,
  ENGLISH_SONGS,
  WORLD_SONGS,
  RAGAS_POOL,
  INSTRUMENT_SPOTLIGHTS,
  LYRIC_DEEP_DIVES,
  type RiyazSongCard,
  type RagaEntry,
  type InstrumentEntry,
  type LyricEntry
} from './data-riyaz';

type RiyazTab = 'songs' | 'raga' | 'featured';
type SongsSubTab = 'bharat' | 'english' | 'world';

const SAFFRON = '#C4873A';

export default function RiyazPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<RiyazTab>('songs');
  const [activeSubTab, setActiveSubTab] = useState<SongsSubTab>('bharat');

  // Use full dataset — covers all 365+ entries without repeating every 90 days
  const dayIndex = getDayIndexForArray(currentDate, RIYAZ_DATA.length);
  const entry: RiyazDayEntry = RIYAZ_DATA[dayIndex];
  const featured = entry.featured;

  // Use unique songs from the pool to strictly avoid repetitions in 365 days
  const songIndex = getDayIndex(365, currentDate);
  
  const bharatSongs: RiyazSongCard[] = [
    BHARAT_SONGS.hindi[songIndex],
    BHARAT_SONGS.folk[songIndex],
    BHARAT_SONGS.ghazal[songIndex],
    BHARAT_SONGS.qawwali[songIndex],
    BHARAT_SONGS.regional[songIndex]
  ];

  const englishSongs: RiyazSongCard[] = [
    ENGLISH_SONGS.pop[songIndex],
    ENGLISH_SONGS.hiphop[songIndex],
    ENGLISH_SONGS.rock[songIndex],
    ENGLISH_SONGS.jazz[songIndex],
    ENGLISH_SONGS.classical[songIndex]
  ];

  const worldSongs: RiyazSongCard[] = [
    WORLD_SONGS.latin[songIndex],
    WORLD_SONGS.africanMiddleEast[songIndex],
    WORLD_SONGS.asian[songIndex],
    WORLD_SONGS.europeanRest[songIndex]
  ];

  // Fetch daily Raga profile — rotate independently through 90 ragas
  const ragaIndex = getDayIndex(90, currentDate);
  const raga: RagaEntry = RAGAS_POOL[ragaIndex];

  // Fetch weekly Instrument Spotlight (changes on Monday)
  const weeklyInstrumentIndex = Math.abs(getWeeklyIndex(currentDate) % INSTRUMENT_SPOTLIGHTS.length);
  const instrument: InstrumentEntry = INSTRUMENT_SPOTLIGHTS[weeklyInstrumentIndex];

  // Fetch weekly Lyric Deep Dive (changes on Monday)
  const weeklyLyricIndex = Math.abs(getWeeklyIndex(currentDate) % LYRIC_DEEP_DIVES.length);
  const lyric: LyricEntry = LYRIC_DEEP_DIVES[weeklyLyricIndex];

  const getRagaTtsText = (r: RagaEntry) => {
    return `${r.name}, or ${r.nameHi}, belonging to the ${r.thaat} thaat. Best performed during ${r.time}. Rasa is ${r.rasa}. Ascending scale: ${r.aaroh}. Descending scale: ${r.avroh}. Catch phrase is ${r.pakad}. Description: ${r.description}. Recommended recordings: ${r.recordings.join(', ')}`;
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
            onClick={() => setActiveTab('songs')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
              activeTab === 'songs' ? 'bg-[#C4873A] text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            style={{ border: `1px solid ${activeTab === 'songs' ? SAFFRON : 'transparent'}` }}
          >
            गाने · Songs
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
            onClick={() => setActiveTab('featured')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
              activeTab === 'featured' ? 'bg-[#C4873A] text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            style={{ border: `1px solid ${activeTab === 'featured' ? SAFFRON : 'transparent'}` }}
          >
            संगीत · Music & Art
          </button>
        </div>

        {/* Tab Panels */}
        <AnimatePresence mode="wait">
          {activeTab === 'songs' && (
            <motion.div
              key="songs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Songs Sub-Tab Switcher */}
              <div className="flex gap-2 border-b pb-2" style={{ borderColor: 'var(--border-default)' }}>
                {(['bharat', 'english', 'world'] as SongsSubTab[]).map((subTab) => (
                  <button
                    key={subTab}
                    onClick={() => setActiveSubTab(subTab)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                      activeSubTab === subTab ? 'bg-[#C4873A] text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                    style={{ border: `1px solid ${activeSubTab === subTab ? SAFFRON : 'transparent'}` }}
                  >
                    {subTab === 'bharat' ? 'भारत · Bharat' : subTab === 'english' ? 'English' : 'World'}
                  </button>
                ))}
              </div>

              {/* Sub-Tab Panels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(activeSubTab === 'bharat' ? bharatSongs : activeSubTab === 'english' ? englishSongs : worldSongs).map((song, idx) => {
                  const songId = `song_${activeSubTab}_${idx}`;
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
                              {song.genre}
                            </span>
                            <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded text-white bg-[#C4873A]">
                              {song.language}
                            </span>
                          </div>
                          <div className="flex gap-1.5 flex-shrink-0">
                            <ReadAloudButton 
                              text={`${song.title} by ${song.artist}. Why listen today: ${song.whyListen}`}
                              lang={song.language.toLowerCase().includes('hindi') || song.language.toLowerCase().includes('folk') || song.language.toLowerCase().includes('ghazal') || song.language.toLowerCase().includes('qawwali') ? 'hi-IN' : 'en-IN'}
                              size="sm"
                            />
                            <SutraNoteButton roomId="riyaz" roomName="Riyaz" contentTitle={song.title} />
                            <RevisitButton roomId="riyaz" roomName="Riyaz" contentTitle={song.title} contentSummary={song.whyListen} />
                          </div>
                        </div>
                        
                        <div>
                          {activeSubTab === 'bharat' && song.titleRoman ? (
                            <div className="mb-1">
                              <h3 className="font-serif text-lg font-bold text-[var(--text-primary)]">{song.title}</h3>
                              <p className="text-xs text-[var(--text-muted)] opacity-70">{song.titleRoman}</p>
                            </div>
                          ) : (
                            <h3 className="font-serif text-lg font-bold text-[var(--text-primary)]">{song.title}</h3>
                          )}
                          <p className="text-xs" style={{ color: SAFFRON }}>{song.artist}</p>
                          {song.album && (
                            <p className="text-[10px] text-[var(--text-muted)] mt-1 font-mono">
                              Album/Film: {song.album} {song.year ? `(${song.year})` : ''}
                            </p>
                          )}
                        </div>

                        <div className="mt-2 pt-2 border-t border-[var(--border-default)]">
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed italic">
                            &ldquo;{song.whyListen}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
              {/* Spotlights & Deep Dives Section (Sadhna Ki Gehrai) */}
              <div className="text-left">
                <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)]">साधना और गहराई · Spotlights & Deep Dives</h2>
                <p className="text-xs text-[var(--text-muted)]">Daily raga reflection and weekly musical exploration.</p>
              </div>

              <div className="space-y-6">
                {/* Raga of the Day */}
                <div className="card-base p-6 sm:p-8 space-y-6 border-l-4" style={{ borderLeftColor: SAFFRON }}>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#C4873A]">
                        Raga of the Day &middot; आज का राग
                      </span>
                      <h2 className="font-serif text-2xl font-bold mt-2 text-[var(--text-primary)]">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Performance Time (Prahar)</p>
                        <p className="text-xs font-semibold text-[var(--text-primary)] mt-0.5">{raga.time}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Catchphrase (Pakad)</p>
                        <p className="text-xs font-mono font-semibold text-[var(--text-primary)] mt-0.5">{raga.pakad}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Description & Mood</p>
                      <p className="text-xs sm:text-sm leading-relaxed mt-1 text-[var(--text-secondary)]">{raga.description}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Recommended Recordings</p>
                      <ul className="mt-2 space-y-1">
                        {raga.recordings.map((rec, idx) => (
                          <li key={idx} className="text-xs text-[var(--text-primary)] font-mono flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C4873A]"></span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Grid for Instrument Spotlight & Lyric Deep Dive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Instrument Spotlight */}
                  <div className="card-base p-6 space-y-4 border-l-4" style={{ borderLeftColor: '#4A7C59' }}>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#4A7C59]">
                          Instrument Spotlight &middot; वाद्य यंत्र
                        </span>
                        <h3 className="font-serif text-xl font-bold mt-2 text-[var(--text-primary)]">
                          {instrument.name}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                          Type: {instrument.type} &middot; Origin: {instrument.origin}
                        </p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <ReadAloudButton 
                          text={`${instrument.name}, a ${instrument.type} originating in ${instrument.origin}. How to play: ${instrument.howToPlay}. Description: ${instrument.description}`} 
                          lang="en-IN"
                          size="sm"
                        />
                        <SutraNoteButton roomId="riyaz" roomName="Riyaz" contentTitle={instrument.name} />
                        <RevisitButton roomId="riyaz" roomName="Riyaz" contentTitle={instrument.name} contentSummary={instrument.description} />
                      </div>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-[var(--border-default)]">
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">How to Play</p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-0.5">{instrument.howToPlay}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">About the Instrument</p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-0.5">{instrument.description}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Recommended Listening</p>
                        <ul className="mt-1 space-y-1">
                          {instrument.recommendations.map((rec, idx) => (
                            <li key={idx} className="text-[11px] text-[var(--text-primary)] font-mono flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#4A7C59]"></span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Lyric Deep Dive */}
                  <div className="card-base p-6 space-y-4 border-l-4" style={{ borderLeftColor: '#7A6BA6' }}>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white bg-[#7A6BA6]">
                          Lyric Deep Dive &middot; काव्य विश्लेषण
                        </span>
                        <h3 className="font-serif text-xl font-bold mt-2 text-[var(--text-primary)]">
                          {lyric.title}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                          By {lyric.artist} &middot; {lyric.category}
                        </p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <ReadAloudButton 
                          text={`Lyric deep dive on the song ${lyric.title} by ${lyric.artist}. Lyrics snippet: ${lyric.lyrics}. Analysis: ${lyric.analysis}`} 
                          lang="en-IN"
                          size="sm"
                        />
                        <SutraNoteButton roomId="riyaz" roomName="Riyaz" contentTitle={lyric.title} />
                        <RevisitButton roomId="riyaz" roomName="Riyaz" contentTitle={lyric.title} contentSummary={lyric.analysis} />
                      </div>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-[var(--border-default)]">
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Featured Lyrics</p>
                        <p className="text-sm font-devanagari text-[var(--text-primary)] leading-relaxed mt-1 p-3 rounded-lg bg-[var(--bg-tertiary)]/50 border border-[var(--border-default)] italic font-medium">
                          &ldquo;{lyric.lyrics}&rdquo;
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Poetic Analysis</p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-0.5">{lyric.analysis}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

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
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
