'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';
import { INDIAN_DESTINATIONS, GLOBAL_DESTINATIONS, SafarDestination } from './data';
import { ChevronDown, MapPin, Calendar, Compass } from 'lucide-react';

interface DestinationCardProps {
  destination: SafarDestination;
  accentColor: string;
  fallbackImage: string;
  titlePrefix: string;
  titlePrefixHindi: string;
}

function DestinationCard({
  destination,
  accentColor,
  fallbackImage,
  titlePrefix,
  titlePrefixHindi,
}: DestinationCardProps) {
  const [imgSrc, setImgSrc] = useState(destination.imageUrl);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Keep state in sync if destination changes
  useEffect(() => {
    setImgSrc(destination.imageUrl);
    setActiveSection(null);
  }, [destination]);

  const sections = [
    { id: 'history', label: 'History & Heritage', content: destination.history },
    { id: 'cuisine', label: 'Local Flavors & Cuisine', content: destination.cuisine },
    { id: 'culture_craft', label: 'Culture & Crafts', content: destination.culture_craft },
    { id: 'architecture', label: 'Architectural Marvels', content: destination.architecture },
    { id: 'hidden_gem', label: 'The Hidden Gem', content: destination.hidden_gem },
    { id: 'amazing_facts', label: 'Surprising Facts', content: destination.amazing_facts },
  ];

  const toggleSection = (sectionId: string) => {
    setActiveSection(prev => (prev === sectionId ? null : sectionId));
  };

  const ttsText = `${destination.name} in ${destination.country}. ${destination.tagline}. Why visit: ${destination.why_visit} Emotional resonance: ${destination.emotional_vibe}`;

  return (
    <motion.div
      variants={STAGGER_ITEM}
      className="card-base overflow-hidden flex flex-col h-full group"
      style={{
        border: `1px solid color-mix(in srgb, ${accentColor} 18%, var(--border-default))`,
        background: 'var(--bg-secondary)',
      }}
    >
      {/* Destination Image Banner */}
      <div className="h-60 relative w-full overflow-hidden bg-bg-tertiary">
        <img
          src={imgSrc}
          alt={destination.name}
          onError={() => setImgSrc(fallbackImage)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
        
        {/* Text over Image */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col">
          <div className="flex items-center gap-1.5 text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">
            <span style={{ color: accentColor }}>{titlePrefixHindi}</span>
            <span>/</span>
            <span>{titlePrefix}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium flex items-baseline gap-2">
            {destination.name}
            <span className="font-devanagari text-base font-normal text-white/80">
              {destination.nameHindi}
            </span>
          </h2>
          <p className="text-white/90 text-sm italic font-serif mt-1">
            &ldquo;{destination.tagline}&rdquo;
          </p>
        </div>

        {/* Location Badge */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1 text-[10px] text-white/90 tracking-wide font-semibold">
          <MapPin size={10} style={{ color: accentColor }} />
          {destination.country}
        </div>

        {/* Traveler Type Badge */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] text-white/90 font-medium tracking-wide">
          {destination.travelerType}
        </div>
      </div>

      {/* Main Info Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Header row with ReadAloud */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="section-label">Why Visit</p>
            </div>
            <div className="flex items-center gap-1">
              <ReadAloudButton text={ttsText} lang="en-IN" size="sm" />
              <RevisitButton
                roomId="safar"
                roomName="Safar"
                contentTitle={`${destination.name} - Why Visit`}
                contentSummary={destination.why_visit.slice(0, 150) + '...'}
              />
              <SutraNoteButton
                roomId="safar"
                roomName="Safar"
                contentTitle={`${destination.name} - Why Visit`}
                className=""
              />
            </div>
          </div>

          {/* Description paragraphs */}
          <div className="space-y-3">
            {destination.why_visit.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-text-secondary" style={{ lineHeight: 1.8 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Accordion list */}
          <div className="border-t border-border-default mt-6 pt-4 space-y-2">
            {sections.map(section => {
              const isOpen = activeSection === section.id;
              return (
                <div
                  key={section.id}
                  className="rounded-xl overflow-hidden transition-colors border"
                  style={{
                    borderColor: isOpen
                      ? `color-mix(in srgb, ${accentColor} 20%, var(--border-default))`
                      : 'var(--border-default)',
                    background: isOpen
                      ? `color-mix(in srgb, ${accentColor} 3%, var(--bg-tertiary))`
                      : 'transparent',
                  }}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full text-left px-4 py-3 flex justify-between items-center text-xs font-semibold uppercase tracking-wider select-none"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <span>{section.label}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: accentColor }}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-4 pb-4 pt-1 space-y-3 border-t border-dashed border-border-default/40">
                          {Array.isArray(section.content) ? (
                            <ul className="list-disc pl-4 space-y-2">
                              {section.content.map((fact, idx) => (
                                <li key={idx} className="text-xs leading-relaxed text-text-secondary">
                                  {fact}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            section.content.split('\n\n').map((para, idx) => (
                              <p key={idx} className="text-xs leading-relaxed text-text-secondary" style={{ lineHeight: 1.75 }}>
                                {para}
                              </p>
                            ))
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card Footer: Best Time & Vibe */}
        <div className="border-t border-border-default/50 pt-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
            <Calendar size={12} style={{ color: accentColor }} />
            <span>Best Time: <strong>{destination.bestTime}</strong></span>
          </div>

          <div
            className="p-3 rounded-lg text-xs italic text-center font-serif"
            style={{
              background: `color-mix(in srgb, ${accentColor} 5%, var(--bg-tertiary))`,
              color: 'var(--text-secondary)',
            }}
          >
            &ldquo;{destination.emotional_vibe}&rdquo;
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SafarPage() {
  const [offset, setOffset] = useState(0);

  const dayOfYear = getDayOfYear();
  const effectiveDay = dayOfYear + offset;
  
  // Calculate index securely using modulo on arrays
  const indianIndex = (effectiveDay - 1 + INDIAN_DESTINATIONS.length * 100) % INDIAN_DESTINATIONS.length;
  const globalIndex = (effectiveDay - 1 + GLOBAL_DESTINATIONS.length * 100) % GLOBAL_DESTINATIONS.length;

  const indianDest = INDIAN_DESTINATIONS[indianIndex];
  const globalDest = GLOBAL_DESTINATIONS[globalIndex];

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1.5">
            <span className="section-label">Travel Room</span>
            <h1 className="font-serif text-3xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
              सफ़र - Safar
            </h1>
            <p className="text-sm max-w-xl text-text-muted" style={{ color: 'var(--text-muted)' }}>
              Travel is not tourism. It is the discovery that the world is larger than your map of it.
            </p>
          </motion.div>

          {/* Date Navigation */}
          <motion.div
            variants={FADE_UP}
            initial="initial"
            animate="animate"
            className="flex items-center gap-1.5 self-start md:self-end"
          >
            <button
              onClick={() => setOffset(o => o - 1)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all hover:scale-105 active:scale-95 bg-bg-secondary text-text-secondary border-border-default"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Yesterday
            </button>

            <button
              onClick={() => setOffset(0)}
              className="px-3.5 py-1.5 rounded-full border text-xs font-medium transition-all bg-bg-secondary border-border-default"
              style={{
                borderColor: offset === 0 ? 'var(--accent-saffron)' : 'var(--border-default)',
                color: offset === 0 ? 'var(--accent-saffron)' : 'var(--text-muted)',
              }}
            >
              {offset === 0 ? 'Today' : offset > 0 ? `+${offset} days` : `${offset} days`}
            </button>

            <button
              onClick={() => setOffset(o => o + 1)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all hover:scale-105 active:scale-95 bg-bg-secondary text-text-secondary border-border-default"
            >
              Tomorrow
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Dual Cards Grid */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 gap-6 items-stretch"
        >
          {/* India Today Card */}
          <DestinationCard
            destination={indianDest}
            accentColor="#C4873A"
            fallbackImage="/images/safar/varanasi.png"
            titlePrefix="India Today"
            titlePrefixHindi="आज का भारत"
          />

          {/* World Today Card */}
          <DestinationCard
            destination={globalDest}
            accentColor="#3A8A8A"
            fallbackImage="/images/safar/kyoto.png"
            titlePrefix="World Today"
            titlePrefixHindi="आज की दुनिया"
          />
        </motion.div>

        {/* Footer info */}
        <div className="text-center pt-4">
          <p className="font-serif italic text-xs flex items-center justify-center gap-1.5" style={{ color: 'var(--text-faint)' }}>
            <Compass size={12} className="animate-spin" style={{ animationDuration: '20s' }} />
            Two journeys daily. One home, one horizon.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
