'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const WONDERS = [
  {
    id: 'mpemba',
    title: 'Hot Water Freezes Faster Than Cold',
    titleHindi: 'गर्म पानी, ठंडे पानी से पहले जम जाता है',
    category: 'Mysterious Science',
    teaser: 'It makes no sense. It has been observed for centuries. It was dismissed by scientists for decades. And we still don\'t fully understand it.',
    content: `In 1963, a Tanzanian secondary school student named Erasto Mpemba was making ice cream with his class. The students were supposed to boil a milk-sugar mixture and let it cool before placing it in the freezer. Mpemba, running late, put his hot mixture directly in the freezer. It froze before the mixtures of students who had waited. He brought this observation to his physics teacher, who told him he was "confused." He brought it to a visiting physicist, Dr. Denis Osborne, who was initially skeptical but agreed to test it. The tests confirmed what Mpemba had observed. In 1969, Mpemba and Osborne published the first systematic study of what became known as the Mpemba Effect.

The Mpemba Effect — the observation that hot water can freeze faster than cold water under certain conditions — had actually been noted long before Mpemba. Aristotle wrote about it in the 4th century BCE. Francis Bacon noted it in the 17th century. But for most of modern science's history, it was considered an error or an artifact of experimental conditions. The conventional intuition — that cooler water has less distance to travel to reach freezing point — seemed to make the Mpemba Effect impossible.

Why does it happen? This is where it gets genuinely strange: we still don't know for certain. Multiple mechanisms have been proposed, and experiments have supported different mechanisms in different conditions, suggesting the Mpemba Effect may not have a single cause.

Proposed mechanisms include: (1) Evaporation — hot water loses mass through evaporation while cooling, leaving less water to freeze. But calculations show this cannot account for the full effect. (2) Dissolved gases — hot water has fewer dissolved gases (which escape during heating). Water with fewer dissolved gases freezes more efficiently. (3) Convection currents — hot water develops convection currents as it cools that distribute the cold water from the surface through the bulk more efficiently than cold water, which stratifies. (4) Hydrogen bond effects — there is a disputed hypothesis that the structure of hydrogen bonds in hot water creates conditions that allow faster freezing. (5) Supercooling — cold water is more prone to supercooling (staying liquid below 0°C without freezing), while hot water, when it reaches 0°C, freezes more readily.

In 2016, researchers at the Nanyang Technological University in Singapore published a theoretical model suggesting that the hydrogen bond hypothesis was correct — that hot water stores more energy in its stretched hydrogen bonds, and releases it faster on cooling. But subsequent experimental tests have not uniformly confirmed this.

The Mpemba Effect is now considered one of the most interesting open questions in classical thermodynamics — a field that one might have thought fully understood. It is a reminder that the everyday world contains surprises, that common experience and scientific theory can still be in productive tension, and that a curious Tanzanian schoolboy asking "but why?" can reopen questions that scientists thought were closed.

The deeper lesson of the Mpemba Effect is about how scientific knowledge works. A student's observation was dismissed as confusion by a teacher. It was almost dismissed by a scientist. It took persistence, institutional support (Osborne testing it), and willingness to publish a potentially embarrassing result (the observation seemed to violate basic physics) for it to enter the scientific literature. How many similar observations have been lost because the person who made them was told they were confused? How many are lost right now?

Mpemba himself went on to be a wildlife conservation officer in Tanzania. The effect that bears his name is taught in universities, still studied, still unexplained. He did not need a PhD or a laboratory to notice something true.`,
    wonder: 'Aristotle noticed the Mpemba Effect in the 4th century BCE. It took 2,300 years for a Tanzanian schoolboy and a British physicist to publish the first systematic study of it. Science does not always move in a straight line.',
  },
  {
    id: 'tardigrade',
    title: 'The Animal That Can\'t Die',
    titleHindi: 'जो मर नहीं सकता',
    category: 'Extreme Biology',
    teaser: 'Tardigrades have survived all five mass extinctions. They can live in boiling water, liquid nitrogen, the vacuum of space, and intense radiation. They are 0.5mm long. They look like tiny bears. They are impossible.',
    content: `There is an animal — a real animal, not a science fiction invention — that can survive boiling water, liquid nitrogen, pressure six times the deepest ocean trench, more radiation than any other known animal, the vacuum of space, and complete desiccation (losing 97% of its body's water). It can be revived after 30 years in a frozen state. It has survived all five of Earth's mass extinction events. It would likely survive a nuclear war.

It is called a tardigrade. It is half a millimeter long. It looks, when viewed under a microscope, like a tiny eight-legged bear. It is found on every continent, in every ecosystem — from the Himalayas to the deep ocean to Antarctic ice to city parks. If you have a garden, you have tardigrades. They are in the moss on your walls, the lichen on your roof, the soil of every potted plant you own.

Tardigrades enter a state called cryptobiosis when conditions become extreme — a kind of suspended animation so complete that they cannot be easily distinguished from non-living matter. Their metabolism drops to 0.01% of normal. They lose almost all their water, replacing it with a glass-like sugar called trehalose that protects their cells from damage. Their cells effectively become suspended in an amorphous solid, protecting DNA and proteins from the mechanical and chemical damage that normally occurs when cells dry out or freeze.

In this state, they can survive:
- Temperatures from -272°C (one degree above absolute zero) to +150°C
- Pressure from the vacuum of space to 6 times the pressure at the bottom of the Mariana Trench
- Radiation doses 1,000 times the lethal dose for humans
- Exposure to organic solvents like ethanol
- 30+ years of complete desiccation, then full revival when rehydrated

In 2007, the European Space Agency sent tardigrades to space on the FOTON-M3 mission, exposing them to the vacuum, cosmic radiation, and UV radiation of Earth orbit for 10 days. A significant proportion survived. Some even laid viable eggs in space. Tardigrades have been to space.

The reason tardigrades can tolerate radiation is particularly interesting. They have a protein called Dsup (Damage Suppressor) that literally shields their DNA from radiation damage by physically covering it. This protein has been artificially expressed in human cells in the laboratory — and it reduces radiation-induced DNA damage by 40%. Tardigrade proteins may eventually contribute to radiation therapy and protective medicine for astronauts.

The philosophical implications of tardigrades are quietly astonishing. They have existed for 530 million years — longer than complex animals have been on Earth. They have watched dinosaurs come and go. They were there before the first fish left the sea. They will almost certainly outlive humanity. Life, at its most basic level, is extraordinarily stubborn. The universe has thrown everything at it — ice ages, meteor impacts, ultraviolet bombardment, mass extinctions — and something small and nearly invisible has always held on, waiting for the world to become livable again.

When scientists want to understand the upper limits of life — its "extremophile" edges — tardigrades are often the reference point. What tardigrades do naturally, we cannot do at all. The distance between the most durable human and the most fragile tardigrade is vast. It is a reminder that "life" is not a single thing with fixed properties, but a range of solutions to the problem of persisting in a changing world, and some of those solutions are extraordinary beyond anything our intuitions would suggest.`,
    wonder: 'Tardigrades have been found on the summit of the Himalayas (6,000m), in the Mariana Trench (11,000m below sea level), in hot springs, in Antarctic ice, and in space. No other animal occupies this range.',
  },
  {
    id: 'blue-whale',
    title: 'The Largest Heart on Earth',
    titleHindi: 'पृथ्वी का सबसे बड़ा दिल',
    category: 'Animal Wonders',
    teaser: 'A blue whale\'s heart is the size of a small car. It beats once every two seconds. Its arteries are wide enough to swim through. And we have heard it.',
    content: `The blue whale (Balaenoptera musculus) is the largest animal that has ever existed on Earth — including all dinosaurs. An adult blue whale can be 30 meters long and weigh 180 metric tonnes. Its tongue alone weighs as much as an elephant. It consumes up to 16 tonnes of krill per day during feeding season. Its heartbeat can be felt from two body lengths away.

The blue whale's heart deserves its own paragraph. It weighs approximately 180 kilograms — more than the average adult human. It is roughly the size of a golf cart. When removed and dissected (from stranded whales), it has been found to have arteries 23 centimeters in diameter — wide enough for a human to crawl through. This is not metaphor. The main arteries of the blue whale's heart are physiologically large enough for a child to swim through.

The heart beats at approximately 30 beats per minute at the surface and slows to as few as 2 beats per minute during deep dives — a range of cardiac rate (2-30 bpm) achieved by the same heart, physiologically, in real time. When a blue whale dives, it undergoes what physiologists call the diving reflex — peripheral circulation shuts down, heart rate plummets, blood is redistributed to brain and essential organs, oxygen stored in muscle myoglobin is released. The whale's body becomes a different physiological system when submerged, optimized for oxygen conservation.

In 2019, researchers at Stanford University attached a tag to a wild blue whale that included, for the first time, an electrocardiograph sensor accurate enough to detect individual heartbeats. They recorded the heart beating 2 times per minute at depth — the lowest heart rate ever recorded for any animal. Then, as the whale surfaced and breathed, the heart accelerated to 37 beats per minute — nearly 20 times faster — in the time it took to take a few breaths. The heart was doing in real time what cardiac researchers use machines to study in laboratories.

Blue whales communicate across ocean basins with infrasound — sound at frequencies too low for humans to hear without equipment, in the 10-40 Hz range. These calls can travel thousands of kilometers through the deep sound channel (SOFAR channel), a layer of ocean water at a specific depth where sound travels with unusual efficiency because of the relationship between temperature and pressure. Blue whales can hear each other from across the Pacific Ocean. They are talking to each other across distances of 5,000 kilometers.

The blue whale was nearly extinct by the mid-20th century. Commercial whaling — which industrialized in the late 19th century with the invention of explosive harpoons and steam-powered factory ships — killed approximately 360,000 blue whales between 1900 and 1970. The population fell from an estimated 250,000-350,000 to around 1,000-3,000. International whaling restrictions began in 1966, and the International Whaling Commission granted blue whales protected status. The global population is now estimated at 10,000-25,000 — still approximately 10% of pre-whaling levels.

The near-extinction and partial recovery of the blue whale is one of conservation biology's most important stories. It demonstrates that large-scale commercial exploitation of a species can drive it to the edge of extinction within decades. It also demonstrates — more cautiously, more provisionally — that legal protection can allow partial recovery. The blue whale is not recovered. It may never reach pre-whaling numbers. But it exists. That is not nothing. It is the result of a specific human decision to stop.

Hearing a blue whale's heart — which researchers have now accomplished — is hearing the largest heart that has ever existed on Earth. The rhythm is slow, vast, unhurried. Each beat moves 200 liters of blood. Between the beats is a silence that is also a kind of immensity. The blue whale exists at a scale that most of us will never directly encounter, in an ocean that covers 70% of our planet's surface, singing in frequencies we cannot hear without technology, with a heart we cannot see. Its existence is a form of information about what this planet contains.`,
    wonder: 'The blue whale\'s call, at 188 decibels, is the loudest sound produced by any animal. A jet engine produces 150 decibels. The blue whale is louder than a jet engine. Yet its call is in frequencies humans cannot hear without equipment.',
  },
];

const OPTICAL_ILLUSIONS = [
  { title: 'The Café Wall Illusion', description: 'Parallel horizontal lines appear to be slanting toward or away from each other. They are perfectly parallel. The brain uses local contrast information to infer global orientation — and gets it wrong because the staggered offset of the dark and light squares creates conflicting local cues that the visual system resolves by tilting the lines.', year: '1979, Richard Gregory' },
  { title: 'The Missing Fundamental', description: 'If you remove the fundamental frequency from a complex musical tone, you still hear the same pitch — because the brain reconstructs the missing fundamental from the harmonics. This is not just an auditory curiosity: it is the basis of the telephone\'s intelligibility (early phones couldn\'t transmit below 300Hz), and of why music sounds good through tiny laptop speakers.', year: '1st described by Rameau, 1722' },
  { title: 'The Silhouette Spinning Dancer', description: 'A rotating silhouette of a dancer can be perceived as spinning either clockwise or counterclockwise. The ambiguity arises because the 2D silhouette provides no depth cues, and the brain must make an assumption about which direction is "in front." Neither assumption is more correct. The spin direction you see first reflects your brain\'s default assumption about depth — and you can learn to switch it.', year: '2003, Nobuyuki Kayahara' },
];

const UNTRANSLATABLE = [
  { word: 'Mamihlapinatapai', language: 'Yaghan (Tierra del Fuego)', meaning: 'The look shared between two people when both want something to happen but neither is willing to initiate. The Yaghan people of southern Chile and Argentina — one of the world\'s smallest language communities — gave a name to this exact moment of mutual longing and mutual hesitation. The word is considered one of the most beautiful and concise expressions of a universal human experience.' },
  { word: 'Mono no aware', language: 'Japanese', meaning: 'The bittersweet awareness of impermanence — the pathos of things. It is the feeling of watching cherry blossoms fall: the beauty intensified by knowing it is transient. It is the feeling at the end of a perfect day, knowing it will not return. Murasaki Shikibu built the world\'s first novel, The Tale of Genji (c. 1000 CE), almost entirely from this single emotional register.' },
  { word: 'Toska', language: 'Russian', meaning: 'Vladimir Nabokov described toska as "a longing with nothing to long for, an ache without a reason." It is spiritual anguish — not depression (which is clinical and cold), not nostalgia (which has an object), but a kind of sourceless longing that saturates Russian literature, Russian music, and, many would argue, the Russian soul. Dostoevsky\'s characters are permanently in toska. So, often, is Chekhov\'s.' },
];

export default function NeelakurinjiPage() {
  const dayOfYear = getDayOfYear();
  const todayWonder = WONDERS[dayOfYear % WONDERS.length];
  const [selected, setSelected] = useState(todayWonder);
  const [showFull, setShowFull] = useState(false);
  const [expandedIllusion, setExpandedIllusion] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-7">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Wonder Room</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>नीलकुरिंजी — Neelakurinji</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Named for the flower that blooms once every 12 years in the Kerala hills and turns the mountains blue. Rare, unexpected, and astonishing — every day.
          </p>
        </motion.div>

        {/* Wonder selector */}
        <div className="flex gap-2 flex-wrap">
          {WONDERS.map((w, i) => (
            <button
              key={w.id}
              onClick={() => { setSelected(w); setShowFull(false); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === w.id ? '#7B6BA6' : 'var(--bg-tertiary)',
                color: selected.id === w.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % WONDERS.length ? '2px solid #7B6BA6' : '1px solid var(--border-default)',
              }}
            >
              {w.category}{i === dayOfYear % WONDERS.length ? ' • Today' : ''}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-5"
          >
            <div className="card-base p-6 space-y-3" style={{ background: 'color-mix(in srgb, #7B6BA6 6%, var(--bg-secondary))', border: '1px solid #7B6BA6' }}>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7B6BA6' }}>{selected.category}</span>
              <h2 className="font-serif text-xl leading-tight" style={{ color: 'var(--text-primary)' }}>{selected.title}</h2>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-muted)' }}>{selected.titleHindi}</p>
              <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{selected.teaser}</p>
            </div>

            <div className="card-base p-6 space-y-4">
              {(showFull ? selected.content : selected.content.split('\n\n').slice(0, 3).join('\n\n')).split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>{para}</p>
              ))}
              {!showFull && (
                <div className="text-center pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  <button onClick={() => setShowFull(true)} className="px-6 py-2.5 rounded-full text-sm font-medium" style={{ background: '#7B6BA6', color: 'white' }}>
                    Keep Reading →
                  </button>
                </div>
              )}
            </div>

            <div className="card-base p-5" style={{ background: 'color-mix(in srgb, #7B6BA6 8%, var(--bg-secondary))' }}>
              <p className="section-label mb-2" style={{ color: '#7B6BA6' }}>The Impossible Fact</p>
              <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>{selected.wonder}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Optical Illusions */}
        <div className="space-y-3">
          <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>When the Brain Gets It Wrong</h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Illusions are not failures of perception. They are demonstrations of how perception works — by making confident guesses from incomplete information.</p>
          {OPTICAL_ILLUSIONS.map((ill, i) => (
            <div key={i} className="card-base overflow-hidden">
              <button className="w-full text-left p-4 flex items-center justify-between gap-3" onClick={() => setExpandedIllusion(expandedIllusion === i ? null : i)}>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{ill.title}</p>
                  <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{ill.year}</p>
                </div>
                <motion.div animate={{ rotate: expandedIllusion === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedIllusion === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{ill.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Untranslatable words */}
        <div className="space-y-3">
          <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>Words That Don't Exist in English</h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Every untranslatable word is a window into what a culture found important enough to name precisely.</p>
          {UNTRANSLATABLE.map((w, i) => (
            <div key={i} className="card-base p-5 space-y-2">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>{w.word}</p>
                  <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{w.language}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{w.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
