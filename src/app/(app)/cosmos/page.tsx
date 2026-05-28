'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayIndexForArray } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import DayNavigator from '@/components/shared/DayNavigator';
import { COSMIC_ENTRIES, CosmicEntry } from './data';
import { Sparkles, HelpCircle, Compass, Scale, Info } from 'lucide-react';
import { format } from 'date-fns';

interface ApodData {
  title: string;
  url: string;
  explanation: string;
  media_type: string;
}

export default function CosmosPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [apod, setApod] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dayIndex = getDayIndexForArray(currentDate, COSMIC_ENTRIES.length);
  const fallback = COSMIC_ENTRIES[dayIndex];

  useEffect(() => {
    let active = true;
    const fetchApod = async () => {
      setLoading(true);
      setError(null);
      const dateStr = format(currentDate, 'yyyy-MM-dd');
      const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY || 'DEMO_KEY';
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateStr}`;
      
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch APOD');
        }
        const data = await res.json();
        if (active) {
          if (data && data.media_type === 'image') {
            setApod(data);
          } else {
            setApod(null); // non-image APODs fallback to local content
          }
        }
      } catch (err) {
        if (active) {
          setApod(null);
          setError('Could not connect to NASA APOD. Showing offline cosmic archive.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchApod();
    return () => {
      active = false;
    };
  }, [currentDate]);

  const displayTitle = apod ? apod.title : fallback.name;
  const displayImage = apod ? apod.url : fallback.imageUrl;
  const displayExplanation = apod ? apod.explanation : fallback.deepDive;
  
  const textToSpeak = `${displayTitle}. ${fallback.intro}. ${displayExplanation.substring(0, 300)}`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-7">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-default)' }}>
          <div className="text-left w-full sm:w-auto">
            <p className="section-label">Space & Astrophysics</p>
            <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>ब्रह्मांड - Cosmos</h1>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              The universe is under no obligation to make sense to you. That it largely does is the miracle.
            </p>
          </div>
          <DayNavigator currentDate={currentDate} onDateChange={setCurrentDate} />
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
            {/* Featured Object Card */}
            <div className="card-base overflow-hidden">
              <div className="relative" style={{ paddingBottom: '56.25%', background: 'var(--bg-tertiary)' }}>
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-t-transparent border-[var(--accent-saffron)] rounded-full animate-spin" />
                  </div>
                ) : (
                  <img
                    src={displayImage}
                    alt={displayTitle}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = '/images/cosmos/milkyway.png';
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-saffron)' }}>
                      {apod ? 'NASA Picture of the Day' : fallback.category}
                    </span>
                    <h2 className="font-serif text-2xl text-white mt-1 leading-tight">{displayTitle}</h2>
                    {!apod && <p className="font-devanagari text-sm text-white/60 mt-0.5">{fallback.nameHindi}</p>}
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 p-1.5 rounded-lg backdrop-blur-sm">
                    <ReadAloudButton text={textToSpeak} lang="en-IN" size="sm" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-base leading-relaxed font-serif italic" style={{ color: 'var(--text-secondary)' }}>
                  {fallback.intro}
                </p>

                <div className="border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
                  {displayExplanation.split('\n\n').map((para: string, i: number) => (
                    <p key={i} className="text-sm leading-relaxed mb-3 text-justify animate-fade-in" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                      {para}
                    </p>
                  ))}
                </div>

                {error && (
                  <div className="text-[10px] text-amber-600 flex items-center gap-1 mt-2">
                    <Info size={12} />
                    <span>{error}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Scale, Discovery, Mind-Bend */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Scale', content: fallback.scale, color: '#3A5A8A', icon: <Scale size={14} /> },
                { label: 'Discovery', content: fallback.discovery, color: '#6A3A8A', icon: <Compass size={14} /> },
                { label: 'Mind-Bender', content: fallback.mindBend, color: '#3A8A6A', icon: <HelpCircle size={14} /> },
              ].map((card) => (
                <div key={card.label} className="card-base p-5 space-y-2 flex flex-col justify-between" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5" style={{ color: card.color }}>
                      {card.icon}
                      <span>{card.label}</span>
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      {card.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

        <div className="text-center py-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <p className="font-serif italic text-xs" style={{ color: 'var(--text-faint)' }}>
            We are made of the same atoms that formed in the first stars. Look up.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
