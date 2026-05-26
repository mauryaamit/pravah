'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SUTR_ROOMS } from '@/lib/constants/sutr-rooms';
import PageTransition from '@/components/layout/PageTransition';
import { ArrowRight } from 'lucide-react';

export default function SutrPage() {
  const router = useRouter();
  const { addToReveal } = useScrollReveal();

  useEffect(() => {
    document.cookie = 'pravah-visited-sutr=true; path=/; max-age=31536000; SameSite=Lax';
  }, []);

  const handleEnter = () => {
    router.push('/aarambh');
  };

  return (
    <PageTransition>
      <div className="sutr-page min-h-screen py-16 px-4 sm:px-6 relative overflow-hidden font-serif"
        style={{ background: 'var(--bg-primary)' }}
      >
        <div className="max-w-3xl mx-auto relative z-10" style={{ gap: 0 }}>

          {/* ══════════ SECTION 1: THE THRESHOLD ══════════ */}
          <section
            ref={addToReveal}
            className="sutr-opening flex flex-col justify-center items-center text-center relative"
          >
            {/* Background painting - 8% opacity so text wins */}
            <div
              className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
              style={{
                opacity: 0.08,
                backgroundImage: 'url("/paintings/wanderer-fog.png")',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
              }}
            />

            <div className="relative z-10 space-y-5">
              <span className="sutr-section-label text-sm tracking-[0.25em] uppercase block">
                Sutr · सूत्र
              </span>
              <h1 className="sutr-heading text-4xl sm:text-6xl font-light tracking-wide" style={{ color: '#3D3560' }}>
                Pravah
              </h1>
              <p className="sutr-pullquote text-lg sm:text-xl font-light italic max-w-md mx-auto leading-relaxed">
                &ldquo;Life is not a series of problems to solve, but a stream to walk. Slow down, align, and allow yourself to flow.&rdquo;
              </p>
              <div className="sutr-divider w-12 h-[1px] mx-auto" style={{ background: 'var(--border-strong)' }} />
              <p className="sutr-section-label text-xs uppercase tracking-[0.15em] animate-pulse">
                Scroll to begin your passage
              </p>
            </div>
          </section>

          {/* ══════════ SECTION 2: THE PHILOSOPHY ══════════ */}
          <section ref={addToReveal} className="sutr-section space-y-6">
            <h2 className="sutr-heading text-2xl sm:text-3xl font-serif border-b pb-3"
              style={{ borderColor: 'var(--border-default)' }}>
              The Philosophy
            </h2>
            <div className="space-y-5">
              <p className="sutr-body">
                In a world that demands constant acceleration, we have forgotten the art of moving slowly. We collect notifications instead of insights; we measure productivity instead of peace.
              </p>
              <p className="sutr-body">
                <strong>Pravah</strong> (प्रवाह) is an intentional sanctuary. It is designed not to distract you, but to anchor you. It does not seek to capture your attention, but to help you return it to where it matters most: your inner landscape, the timeless wonders of nature, the depth of literature, and the focus of deep craft.
              </p>
            </div>
          </section>

          <div className="sutr-divider mx-auto" style={{ background: 'var(--border-default)', height: '1px' }} />

          {/* ══════════ SECTION 3: THE STRUCTURE ══════════ */}
          <section ref={addToReveal} className="sutr-section space-y-6">
            <h2 className="sutr-heading text-2xl sm:text-3xl font-serif border-b pb-3"
              style={{ borderColor: 'var(--border-default)' }}>
              The Structure
            </h2>
            <p className="sutr-body">
              The sanctuary is organized around five core dimensions of becoming:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {[
                { num: '1', label: 'Daily Practice (दैनिक अभ्यास)', desc: 'Habits, journaling, intention alignment, and streaking. The active forge of everyday consciousness.' },
                { num: '2', label: 'Inner World (अन्तर्मन)', desc: 'Music practice, poetry collections, deep daily questioning, and philosophical triggers.' },
                { num: '3', label: 'Knowledge (बोध)', desc: 'Mental models, astrophysics, world philosophies, etymology, and deep-reading long-form articles.' },
                { num: '4', label: 'The World & Stories (दुनिया)', desc: 'Natural history, geography, classical literature, and the stories of inspiring people.' },
              ].map(d => (
                <div key={d.num} className="space-y-1.5">
                  <h3 className="sutr-principle-title font-semibold text-sm uppercase tracking-wider" style={{ color: '#3D3560' }}>
                    {d.num}. {d.label}
                  </h3>
                  <p className="sutr-room-description text-sm leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="sutr-divider mx-auto" style={{ background: 'var(--border-default)', height: '1px' }} />

          {/* ══════════ SECTION 4: THE ROOMS ══════════ */}
          <section ref={addToReveal} className="sutr-section space-y-8">
            <div className="text-center space-y-3">
              <h2 className="sutr-heading text-2xl sm:text-3xl font-serif" style={{ color: '#3D3560' }}>
                The Twenty-Six Rooms
              </h2>
              <p className="sutr-section-label text-xs uppercase tracking-widest">
                Walk through the portals of the sanctuary
              </p>
            </div>

            <div className="font-serif">
              {SUTR_ROOMS.map((room) => (
                <div
                  key={room.id}
                  className="sutr-room-entry flex flex-col md:flex-row md:items-start gap-4 border-b transition-colors hover:bg-stone-50/30 dark:hover:bg-stone-950/10 px-3 rounded-xl"
                  style={{ borderColor: 'var(--border-default)' }}
                >
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <span className="sutr-room-name font-semibold text-base block" style={{ color: '#3D3560' }}>
                      {room.name}
                    </span>
                    <span className="font-devanagari text-xs block mt-0.5 sutr-section-label">
                      {room.nameHindi}
                    </span>
                  </div>
                  <div className="w-full md:w-2/3 space-y-1">
                    <span className="sutr-room-dimension text-xs uppercase tracking-wider block">
                      {room.oneLiner}
                    </span>
                    <p className="sutr-room-description text-sm leading-relaxed italic">
                      &ldquo;{room.contemplativeText}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="sutr-divider mx-auto" style={{ background: 'var(--border-default)', height: '1px' }} />

          {/* ══════════ SECTION 5: THE DAILY CYCLE ══════════ */}
          <section ref={addToReveal} className="sutr-section space-y-6">
            <h2 className="sutr-heading text-2xl sm:text-3xl font-serif border-b pb-3"
              style={{ borderColor: 'var(--border-default)' }}>
              The Daily Rhythm
            </h2>
            <div className="space-y-5">
              <p className="sutr-body">
                We suggest visiting Pravah in three quiet checkpoints.
              </p>
              <ul className="space-y-4 pl-4">
                <li className="sutr-body" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginLeft: '1.2em' }}>
                  <strong>The Morning Threshold:</strong> Visit <em>Aarambh</em>. Set your mood, state your intention, and step mindfully into the day.
                </li>
                <li className="sutr-body" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginLeft: '1.2em' }}>
                  <strong>The Afternoon Sanctuary:</strong> Read a singular long read in <em>Srot</em>, explore a mental model in <em>Bodh</em>, or spend 5 minutes with the breathing orb.
                </li>
                <li className="sutr-body" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginLeft: '1.2em' }}>
                  <strong>The Evening Closing:</strong> Open <em>Antarman</em>. Write down what stayed with you, complete your habit checklist in <em>Agni</em>, and rest.
                </li>
              </ul>
            </div>
          </section>

          <div className="sutr-divider mx-auto" style={{ background: 'var(--border-default)', height: '1px' }} />

          {/* ══════════ SECTION 6: THE PROMISE ══════════ */}
          <section ref={addToReveal} className="sutr-section space-y-6">
            <h2 className="sutr-heading text-2xl sm:text-3xl font-serif border-b pb-3"
              style={{ borderColor: 'var(--border-default)' }}>
              The Promise of Slow Growth
            </h2>
            <div className="space-y-5">
              <p className="sutr-body">
                Pravah offers no speed runs, quick results, or gamified tricks. Real growth is organic, quiet, and slow. Like the ancient roots of the Banyan tree, it takes time to solidify. Committing to yourself requires patience.
              </p>
              <p className="sutr-body">
                If you show up, breathe, write, and read day after day, the neural pathways of your brain will reshape. Your focus will deepen. Your presence will broaden. Welcome to the flow.
              </p>
            </div>
          </section>

          {/* ══════════ SECTION 7: THE DEPARTURE ══════════ */}
          <section
            ref={addToReveal}
            className="sutr-closing flex flex-col justify-center items-center text-center relative"
          >
            {/* Closing Painting - 8% */}
            <div
              className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
              style={{
                opacity: 0.08,
                backgroundImage: 'url("/paintings/tree-of-life.png")',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
              }}
            />
            <div className="relative z-10 space-y-6">
              <h2 className="sutr-heading text-3xl sm:text-4xl font-light" style={{ color: '#3D3560' }}>
                Ready to Enter?
              </h2>
              <p className="sutr-closing-text max-w-sm mx-auto leading-relaxed text-sm sm:text-base">
                Your sanctuary is waiting. Step across the threshold and begin.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEnter}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-base font-medium shadow-lg hover:shadow-xl transition-all"
                style={{
                  background: '#3D3560',
                  boxShadow: '0 8px 30px rgba(61,53,96,0.3)'
                }}
              >
                Enter Pravah <ArrowRight size={18} />
              </motion.button>
            </div>
          </section>

        </div>

        {/* Scroll Reveal + Sutr-Specific Styles */}
        <style jsx global>{`
          /* ── Scroll reveal ── */
          .reveal-item {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 0.75s cubic-bezier(0.22, 0.1, 0.36, 1),
                        transform 0.75s cubic-bezier(0.22, 0.1, 0.36, 1);
          }
          .reveal-item.reveal-active {
            opacity: 1;
            transform: translateY(0);
          }

          /* ── Sutr Page Layout ── */
          .sutr-opening {
            min-height: 70vh;
            padding: 80px 32px 64px;
          }
          .sutr-section {
            padding-top: 56px;
            padding-bottom: 0;
            margin-bottom: 0;
          }
          .sutr-divider {
            margin: 48px auto;
            width: 100%;
            max-width: 80%;
          }
          .sutr-room-entry {
            padding: 22px 12px;
          }
          .sutr-closing {
            padding: 64px 32px 80px;
            min-height: 50vh;
          }

          /* ── Sutr Text: Dynamic / Adaptive Colors ── */
          .sutr-body {
            color: var(--text-secondary) !important;
            font-size: clamp(1.125rem, 2vw, 1.25rem);
            line-height: 1.95;
            opacity: 1 !important;
            margin-bottom: 0;
          }
          .sutr-heading {
            color: var(--text-primary) !important;
            opacity: 1 !important;
          }
          .sutr-section-label {
            color: var(--accent-saffron) !important;
            opacity: 1 !important;
          }
          .sutr-pullquote {
            color: var(--text-primary) !important;
            font-size: clamp(1.1875rem, 2vw, 1.3125rem) !important;
            opacity: 1 !important;
          }
          .sutr-room-name {
            color: var(--text-primary) !important;
            font-size: 1.125rem !important;
            opacity: 1 !important;
          }
          .sutr-room-description {
            color: var(--text-secondary) !important;
            font-size: clamp(1.05rem, 1.6vw, 1.125rem) !important; /* Increased font size for readability */
            line-height: 1.85;
            opacity: 1 !important;
          }
          .sutr-room-dimension {
            color: var(--accent-saffron) !important;
            opacity: 1 !important;
          }
          .sutr-principle-title {
            color: var(--text-primary) !important;
            font-size: 0.9375rem !important;
            opacity: 1 !important;
          }
          .sutr-closing-text {
            color: var(--text-secondary) !important;
            font-size: clamp(1.0rem, 2vw, 1.0625rem) !important;
            opacity: 1 !important;
          }

          /* ── Mobile Spacing Refinements ── */
          @media (max-width: 768px) {
            .sutr-page {
              padding-top: 24px !important;
              padding-bottom: 24px !important;
            }
            .sutr-opening {
              min-height: 50vh !important;
              padding: 40px 20px 88px !important; /* Increased bottom padding so the card breathes and background is not cut off */
            }
            .sutr-closing {
              min-height: 35vh !important;
              padding: 32px 20px 40px !important;
            }
            .sutr-section {
              padding-top: 32px !important;
              padding-bottom: 0 !important;
            }
            .sutr-divider {
              margin: 32px auto !important;
            }
            .sutr-room-entry {
              padding: 14px 8px !important;
            }
          }

          /* ── System Dark Mode Override ── */
          @media (prefers-color-scheme: dark) {
            /* Only apply when the active theme is not one of the explicit light themes */
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-page {
              background: #1A1208 !important;
            }
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-body,
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-pullquote,
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-room-description,
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-closing-text {
              color: #E8DDD0 !important;
            }
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-heading,
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-room-name,
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-principle-title {
              color: #F5EFE6 !important;
            }
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-room-dimension,
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-section-label {
              color: #D4943A !important;
            }
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-room-entry {
              border-color: rgba(232, 217, 184, 0.15) !important;
            }
            html:not([data-theme="cream"]):not([data-theme="vangogh"]):not([data-theme="forest"]) .sutr-divider {
              background: rgba(232, 217, 184, 0.15) !important;
            }
          }
        `}</style>
      </div>
    </PageTransition>
  );
}
