'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const WORDS = [
  {
    word: 'Saudade',
    language: 'Portuguese',
    pronunciation: '/saw-DAH-djeh/',
    script: 'Saudade',
    origin: 'Latin: solitatem (solitude) → Old Galician-Portuguese: soedade → Portuguese: saudade',
    meaning: 'A melancholic longing or nostalgia for something loved and lost — or perhaps never had. The awareness that happiness has passed, combined with the knowledge that it may not return.',
    etymology: `Saudade derives from the Latin "solitatem" (solitude), entering Old Galician-Portuguese as "soedade" before evolving into its modern form. But etymology only gets you to the container — the content of the word comes from seven centuries of Portuguese and Brazilian emotional life.

The concept appears first in medieval Galician-Portuguese poetry of the 13th century, in the troubadour tradition called "saudade das cruzadas" — the longing felt by crusaders far from home. But it became most fully developed in Fado — the traditional Portuguese music form that is, above all, the music of saudade. Fado singers describe themselves as "doing saudade," as if it were an active practice rather than a passive state.

Saudade is considered untranslatable because it contains an emotional specificity that other languages approach only through combinations: "sweet sorrow" (English) + "nostalgia" + "longing" + "melancholy" + the particular Portuguese relationship with the sea, exile, and the distance that empire created between people and home.

The concept became central to Portuguese national identity. Fernando Pessoa — the greatest Portuguese poet — described it as "the presence of absence." Luís de Camões embedded it in Os Lusíadas, the national epic. The Brazilian philosopher Benedito Nunes wrote an entire book-length essay on it.

What makes saudade philosophically interesting is that it can be felt for things that never existed. You can feel saudade for a version of yourself you never became, for a love affair that never happened, for a childhood that was happier in memory than in fact. It is not simply nostalgia (which is the past) — it is the imagination's relationship with absence across all time dimensions.

The writer Manuel de Melo defined it in 1660: "A pleasure you suffer, an ailment you enjoy." This paradox — the sweet suffering, the pleasurable pain — is at the heart of it. Saudade does not want resolution. It wants to be sat with. It is grief that has accepted itself.`,
    usageInSentence: [
      'She looked at the old photographs with saudade, not quite grieving, not quite happy.',
      'There is a saudade in autumn light — the year remembering its own summer.',
      'He carried a permanent saudade for the city he had left, even when he returned to it.',
    ],
    culturalReflection: 'Saudade appears in every culture but most cultures lack a single word for it. The Portuguese gave this universal human experience a home in language. That a nation which lost so many sailors to the sea developed such a precise word for longing is not a coincidence.',
  },
  {
    word: 'Jugaad',
    language: 'Hindi / Punjabi',
    pronunciation: '/joo-GAAD/',
    script: 'जुगाड़',
    origin: 'Hindi/Punjabi: jugaad — a flexible approach to frugal innovation, combining available resources in unexpected ways',
    meaning: 'A frugal, flexible innovation — a creative improvisation that finds a simple, cheap solution to a problem using whatever materials are available. Also: a mindset of making do, of finding a way through.',
    etymology: `Jugaad comes from the Hindi/Punjabi verb "jugaadna" — to improvise, to find a way, to cobble together. The word entered English vocabulary in business contexts around 2010, when management consultants from McKinsey and others began writing about "jugaad innovation" as a distinctively Indian approach to product development.

The word has two lives: its colloquial Hindi life and its global management-theory life. In everyday Hindi, jugaad is the motorcycle converted into a transport vehicle by attaching a wooden platform; it is the fan made from an old electric motor; it is the water pipe repaired with duct tape and optimism. Jugaad is what you do when the "right" solution is unavailable or unaffordable.

In management theory, jugaad became a framework for reverse innovation — developing products in resource-constrained environments that are so efficient and affordable that they succeed in developed markets too. The Jaipur Foot prosthetic, designed for Indian conditions, is more functional for many users than $10,000 American prosthetics. Tata's original Nano, though commercially unsuccessful, was a thought experiment in first-principles cost reduction. The cheap, durable, repairable refrigerators used by rural Indian small businesses embody a philosophy that Silicon Valley has spent decades trying to learn.

The Western equivalent might be "hack" in its original, positive sense — a clever improvisation that solves the problem differently than the "official" method. But jugaad carries a different cultural weight. In India's history of material scarcity and institutional unreliability, jugaad was not a backup plan. It was often the only plan. The philosophy of jugaad is inseparable from centuries of managing with less than you need.

Navi Radjou, Jaideep Prabhu, and Simone Ahuja wrote "Jugaad Innovation" in 2012, bringing the concept to global business audiences. They identified jugaad as one of six principles: seek opportunity in adversity, do more with less, think and act flexibly, keep it simple, include the margin, follow your heart. The book was widely read but somewhat missed the spirit of jugaad — which is not a strategy you adopt consciously, but a habit of mind that develops when necessity demands it.`,
    usageInSentence: [
      'The entire irrigation system was a masterpiece of jugaad — bicycle pumps, plastic pipes, and gravity.',
      'He got into the exam hall with some classic jugaad — befriending the security guard with chai.',
      'Silicon Valley calls it "minimum viable product." We\'ve been doing jugaad for centuries.',
    ],
    culturalReflection: 'Jugaad is sometimes dismissed as a sign of underdevelopment — a workaround necessitated by poverty. But it may actually encode a form of wisdom that over-resourced environments lose: the ability to look at what you have and ask "what can this become?" That is not poverty thinking. That is creative thinking.',
  },
  {
    word: 'Wabi-Sabi',
    language: 'Japanese',
    pronunciation: '/WAH-bee SAH-bee/',
    script: '侘び寂び',
    origin: 'Japanese: wabi (transience, simplicity, imperfection) + sabi (the beauty of age and wear)',
    meaning: 'The acceptance and celebration of imperfection, impermanence, and incompleteness as the essence of beauty. The aesthetic and philosophical recognition that the aged, worn, asymmetric, and incomplete is more beautiful than the perfect.',
    etymology: `Wabi and sabi were originally separate concepts in Japanese aesthetics. Wabi referred to the loneliness and simplicity of rustic life — the impoverished aesthetic of someone who has withdrawn from the world. In the 16th century, under the influence of Zen Buddhism and the tea ceremony (chado), wabi came to mean something more positive: the beauty of simple, natural, irregular things. The tea master Sen no Rikyu (1522–1591) is credited with developing the wabi-cha ("wabi tea") aesthetic — deliberately using rough, asymmetric, imperfect tea bowls rather than smooth, perfect Chinese porcelain.

Sabi originally meant loneliness or desolation — related to the verb "sabiru" (to rust, to become desolate). It evolved to mean the beauty that comes with age and use: the patina of an old wooden floor, the moss on a stone lantern, the crack in a teacup repaired with gold (kintsugi). Sabi is the beauty of things that have been shaped by time and use.

Together, wabi-sabi describes an entire philosophical-aesthetic worldview: that all things are impermanent, imperfect, and incomplete — and that this is not a problem to be solved but the very condition of beauty.

The concept entered Western consciousness primarily through Leonard Koren's 1994 book "Wabi-Sabi for Artists, Designers, Poets & Philosophers." It has since influenced interior design (the preference for raw wood over polished veneer), product design (the "handmade" aesthetic), and mindfulness culture (the acceptance of imperfection).

Wabi-sabi is the aesthetic philosophy behind kintsugi — the practice of repairing broken pottery with gold-laced lacquer, making the break visible and beautiful rather than hiding it. The philosophy: what has been broken and repaired carries more history, more character, more beauty than the unbroken. Applied to humans: the life that has suffered and healed is richer, not lesser.`,
    usageInSentence: [
      'The old wooden table, with its scratches and watermarks, embodied wabi-sabi — it had lived.',
      'She finally stopped trying to make the garden symmetrical. The asymmetry was the point.',
      'Kintsugi is wabi-sabi made literal: the broken places, repaired in gold, become the most beautiful parts.',
    ],
    culturalReflection: 'Modern consumer culture is built on the opposite of wabi-sabi: the new, the perfect, the unblemished. We throw away things when they show wear. We edit out the imperfections in photographs. Wabi-sabi is a counter-philosophy — it asks what we lose when we insist on perfection, and what we gain when we learn to love the imperfect.',
  },
  {
    word: 'Moksha',
    language: 'Sanskrit',
    pronunciation: '/MOHK-sha/',
    script: 'मोक्ष',
    origin: 'Sanskrit: moksha — from the root "muc" (to release, to free)',
    meaning: 'Liberation from the cycle of birth, death, and rebirth (samsara). The ultimate spiritual goal in Hindu, Buddhist, and Jain traditions — freedom from all karma, all attachment, all conditioned existence.',
    etymology: `Moksha derives from the Sanskrit root "muc" (to release, to free) — related to the Latin "mucus" (what the body releases) and the English "mucous." The verbal form "mokshayati" means "he liberates." The noun moksha, then, is liberation — the ultimate release.

The concept appears as early as the Upanishads (900-600 BCE), where it is described as the direct knowledge of the identity between Atman (the individual self) and Brahman (the universal self). In Advaita Vedanta (the non-dual school of Adi Shankaracharya, 8th century CE), moksha is the realization that the apparent duality between self and world, between individual and cosmic consciousness, is a conceptual overlay — an error of perception (maya). Moksha is not attaining something new but recognizing what was always already the case.

Different Indian philosophical schools define moksha differently. In Advaita Vedanta: moksha is the recognition of non-duality (Brahman alone exists). In Vishishtadvaita (Ramanuja): moksha is eternal communion with the personal God while retaining individual identity. In Dvaita (Madhva): moksha is eternal service to God while remaining distinct. In Buddhism: liberation (nirvana) is the cessation of craving and the recognition of anatta (no-self). In Jainism: moksha is the complete removal of karma from the soul, resulting in its ascent to the apex of the universe.

What all these traditions share: moksha is not heaven (a post-death reward state) but a fundamental shift in perception — a seeing through of the illusion that binds us. It is available in life, not only after death. The Jivanmukta — the "liberated while living" — is a recognized figure in Hindu tradition: someone who has realized moksha while still in a body.

The four classical aims of human life in Hinduism (purusharthas) are: dharma (righteousness), artha (wealth and success), kama (desire and love), and moksha (liberation). The first three are goals within samsara; the fourth is release from it. The entire system acknowledges that human beings have multiple legitimate needs — but that ultimate fulfillment lies in a freedom that transcends all need.`,
    usageInSentence: [
      'For the renunciant, moksha was not a distant goal but a present possibility — available in the next breath if the mind could be quieted.',
      'She had been chasing moksha in the wrong direction — outward, instead of inward.',
      'Moksha is not the opposite of life. It is life without the filters of fear and craving.',
    ],
    culturalReflection: 'Every culture has a concept of ultimate liberation: moksha, nirvana, salvation, enlightenment. The specific contours differ enormously. But the underlying intuition — that ordinary human consciousness operates under a constraint, and that removing that constraint is possible — is universal. This convergence across cultures is itself worth contemplating.',
  },
];

export default function SamvaadPage() {
  const dayOfYear = getDayOfYear();
  const todayWord = WORDS[dayOfYear % WORDS.length];
  const [selected, setSelected] = useState(todayWord);

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Word of the Day</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>संवाद — Samvaad</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Words are not just containers for meaning. They are civilizations of thought compressed into sound.
          </p>
        </motion.div>

        {/* Word selector */}
        <div className="flex gap-2 flex-wrap">
          {WORDS.map((w, i) => (
            <button
              key={w.word}
              onClick={() => setSelected(w)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.word === w.word ? 'var(--accent-saffron)' : 'var(--bg-tertiary)',
                color: selected.word === w.word ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % WORDS.length ? '2px solid var(--accent-saffron)' : '1px solid var(--border-default)',
              }}
            >
              {w.word}{i === dayOfYear % WORDS.length ? ' • Today' : ''}
            </button>
          ))}
        </div>

        {/* Main word display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.word}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-4"
          >
            {/* Word hero */}
            <div className="card-base p-7 text-center space-y-3" style={{ background: 'color-mix(in srgb, var(--accent-saffron) 5%, var(--bg-secondary))' }}>
              <div className="space-y-1">
                <h2 className="font-serif" style={{ fontSize: '3rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>{selected.word}</h2>
                {selected.script !== selected.word && (
                  <p className="font-devanagari text-2xl" style={{ color: 'var(--text-muted)' }}>{selected.script}</p>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium" style={{ color: 'var(--accent-saffron)' }}>{selected.pronunciation}</p>
                <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{selected.language}</p>
              </div>
              <div className="pt-3 border-t" style={{ borderColor: 'var(--border-default)' }}>
                <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {selected.meaning}
                </p>
              </div>
            </div>

            {/* Etymology */}
            <div className="card-base p-5 space-y-3">
              <p className="section-label">Etymology — The Life of the Word</p>
              <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{selected.origin}</p>
              <div className="space-y-2">
                {selected.etymology.split('\n\n').map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Usage */}
            <div className="card-base p-5 space-y-3">
              <p className="section-label">The Word in Use</p>
              {selected.usageInSentence.map((sentence, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
                  <span className="text-xs font-bold mt-0.5" style={{ color: 'var(--accent-saffron)' }}>{i + 1}</span>
                  <p className="text-sm leading-relaxed font-serif italic" style={{ color: 'var(--text-primary)' }}>"{sentence}"</p>
                </div>
              ))}
            </div>

            {/* Cultural reflection */}
            <div className="card-base p-5 space-y-2" style={{ background: 'color-mix(in srgb, #6A3A8A 6%, var(--bg-secondary))' }}>
              <p className="section-label" style={{ color: '#6A3A8A' }}>Why This Word Matters</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                {selected.culturalReflection}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
