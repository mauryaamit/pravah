'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SUTR_ROOMS } from '@/lib/constants/sutr-rooms';
import PageTransition from '@/components/layout/PageTransition';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function SutrPage() {
  const router = useRouter();
  const { addToReveal } = useScrollReveal();

  // Set the pravah-visited-sutr cookie on land to whitelist client and prevent redirect loop
  useEffect(() => {
    document.cookie = 'pravah-visited-sutr=true; path=/; max-age=31536000; SameSite=Lax';
  }, []);

  const handleEnter = () => {
    router.push('/aarambh');
  };

  return (
    <PageTransition>
      <div 
        className="min-h-screen text-stone-800 dark:text-stone-200 py-16 px-4 sm:px-6 relative overflow-hidden font-serif"
        style={{ background: 'var(--bg-primary)', '--accent-sutr': '#3D3560' } as any}
      >
        <div className="max-w-3xl mx-auto space-y-32 relative z-10">
          
          {/* ─── SECTION 1: THE THRESHOLD ─── */}
          <section 
            ref={addToReveal} 
            className="min-h-[80vh] flex flex-col justify-center items-center text-center relative py-12"
          >
            {/* Opening Painting Background (9% opacity) */}
            <div 
              className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.09]"
              style={{
                backgroundImage: 'url("/paintings/wanderer-fog.png")',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
              }}
            />
            
            <div className="relative z-10 space-y-6">
              <span className="text-sm tracking-[0.25em] uppercase text-stone-500 block">Sutr · सूत्र</span>
              <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-wide text-[#3D3560] dark:text-[#8D82C4]">
                Pravah
              </h1>
              <p className="text-lg sm:text-xl font-light italic max-w-xl mx-auto text-stone-600 dark:text-stone-400 leading-relaxed">
                "Life is not a series of problems to solve, but a stream to walk. Slow down, align, and allow yourself to flow."
              </p>
              <div className="w-12 h-[1px] bg-stone-400 mx-auto my-8" />
              <p className="text-xs uppercase tracking-[0.15em] text-stone-400 animate-pulse">
                Scroll to begin your passage
              </p>
            </div>
          </section>

          {/* ─── SECTION 2: THE PHILOSOPHY ─── */}
          <section ref={addToReveal} className="space-y-8 py-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#3D3560] dark:text-[#8D82C4] border-b pb-3 border-stone-200 dark:border-stone-800">
              The Philosophy
            </h2>
            <div className="space-y-6 text-base sm:text-lg leading-[2.1] text-stone-700 dark:text-stone-300 font-light">
              <p>
                In a world that demands constant acceleration, we have forgotten the art of moving slowly. We collect notifications instead of insights; we measure productivity instead of peace. 
              </p>
              <p>
                <strong>Pravah</strong> (प्रवाह) is an intentional sanctuary. It is designed not to distract you, but to anchor you. It does not seek to capture your attention, but to help you return it to where it matters most: your inner landscape, the timeless wonders of nature, the depth of literature, and the focus of deep craft.
              </p>
            </div>
          </section>

          {/* ─── SECTION 3: THE STRUCTURE ─── */}
          <section ref={addToReveal} className="space-y-8 py-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#3D3560] dark:text-[#8D82C4] border-b pb-3 border-stone-200 dark:border-stone-800">
              The Dimensions
            </h2>
            <p className="text-base sm:text-lg leading-[2.1] text-stone-700 dark:text-stone-300 font-light">
              The sanctuary is organized around five core dimensions of becoming:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-base uppercase tracking-wider text-[#3D3560] dark:text-[#8D82C4]">1. Daily Practice (दैनिक अभ्यास)</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">Habits, journaling, intention alignment, and streaking. The active forge of everyday consciousness.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base uppercase tracking-wider text-[#3D3560] dark:text-[#8D82C4]">2. Inner World (अन्तर्जगत)</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">Music practice, poetry collections, deep daily questioning, and philosophical triggers.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base uppercase tracking-wider text-[#3D3560] dark:text-[#8D82C4]">3. Knowledge (ज्ञान)</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">Mental models, astrophysics, world philosophies, etymology, and deep-reading long-form articles.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base uppercase tracking-wider text-[#3D3560] dark:text-[#8D82C4]">4. The World & Stories (सृष्टि)</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">Natural history, geography, classical literature, and the stories of inspiring people.</p>
              </div>
            </div>
          </section>

          {/* ─── SECTION 4: THE ROOMS ─── */}
          <section ref={addToReveal} className="space-y-12 py-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#3D3560] dark:text-[#8D82C4]">
                The Twenty-Two Rooms
              </h2>
              <p className="text-sm text-stone-500 uppercase tracking-widest">
                Walk through the portals of the sanctuary
              </p>
            </div>
            
            <div className="space-y-8 font-serif">
              {SUTR_ROOMS.map((room) => (
                <div 
                  key={room.id}
                  className="py-6 border-b border-stone-100 dark:border-stone-900 flex flex-col md:flex-row md:items-start gap-4 transition-all hover:bg-stone-50/50 dark:hover:bg-stone-950/20 px-4 rounded-xl"
                >
                  <div className="md:w-1/3 flex-shrink-0">
                    <span className="text-[#3D3560] dark:text-[#8D82C4] font-semibold text-lg">{room.name}</span>
                    <span className="font-devanagari text-xs text-stone-400 block mt-0.5">{room.nameHindi}</span>
                  </div>
                  <div className="md:w-2/3 space-y-2">
                    <span className="text-xs uppercase tracking-wider text-stone-400 block">{room.oneLiner}</span>
                    <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400 italic">
                      "{room.contemplativeText}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── SECTION 5: THE DAILY CYCLE ─── */}
          <section ref={addToReveal} className="space-y-8 py-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#3D3560] dark:text-[#8D82C4] border-b pb-3 border-stone-200 dark:border-stone-800">
              The Daily Rhythm
            </h2>
            <div className="space-y-6 text-base sm:text-lg leading-[2.1] text-stone-700 dark:text-stone-300 font-light">
              <p>
                We suggest visiting Pravah in three quiet checkpoints.
              </p>
              <ul className="list-disc pl-6 space-y-4 text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-400">
                <li><strong>The Morning Threshold:</strong> Visit <em>Aarambh</em>. Set your mood, state your intention, and step mindfully into the day.</li>
                <li><strong>The Afternoon Sanctuary:</strong> Read a singular long read in <em>Srot</em>, explore a mental model in <em>Bodh</em>, or spend 5 minutes with the breathing orb.</li>
                <li><strong>The Evening Closing:</strong> Open <em>Antarman</em>. Write down what stayed with you, complete your habit checklist in <em>Agni</em>, and rest.</li>
              </ul>
            </div>
          </section>

          {/* ─── SECTION 6: THE PROMISE ─── */}
          <section ref={addToReveal} className="space-y-8 py-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#3D3560] dark:text-[#8D82C4] border-b pb-3 border-stone-200 dark:border-stone-800">
              The Promise of Slow Growth
            </h2>
            <div className="space-y-6 text-base sm:text-lg leading-[2.1] text-stone-700 dark:text-stone-300 font-light">
              <p>
                Pravah offers no speed runs, quick results, or gamified tricks. Real growth is organic, quiet, and slow. Like the ancient roots of the Banyan tree, it takes time to solidify. Committing to yourself requires patience.
              </p>
              <p>
                If you show up, breathe, write, and read day after day, the neural pathways of your brain will reshape. Your focus will deepen. Your presence will broaden. Welcome to the flow.
              </p>
            </div>
          </section>

          {/* ─── SECTION 7: THE DEPARTURE ─── */}
          <section 
            ref={addToReveal} 
            className="min-h-[70vh] flex flex-col justify-center items-center text-center relative py-12"
          >
            {/* Closing Painting Background (6% opacity) */}
            <div 
              className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.06]"
              style={{
                backgroundImage: 'url("/paintings/tree-of-life.png")',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
              }}
            />

            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light text-[#3D3560] dark:text-[#8D82C4]">
                Ready to Enter?
              </h2>
              <p className="text-stone-600 dark:text-stone-400 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
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

        {/* Global Styles for Scroll Reveal */}
        <style jsx global>{`
          .reveal-item {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1), transform 1200ms cubic-bezier(0.16, 1, 0.3, 1);
          }
          .reveal-active {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </div>
    </PageTransition>
  );
}
