'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

interface CosmicObject {
  id: string;
  name: string;
  nameHindi: string;
  imageUrl: string;
  category: string;
  intro: string;
  deepDive: string;
  scale: string;
  discovery: string;
  mindBend: string;
}

const COSMIC_OBJECTS: CosmicObject[] = [
  {
    id: 'pillars',
    name: 'The Pillars of Creation',
    nameHindi: 'सृष्टि के स्तंभ',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/600px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg',
    category: 'Stellar Nursery',
    intro: 'In the Eagle Nebula, 6,500 light-years away, columns of interstellar gas and dust tower seven light-years tall — and inside them, new stars are being born this very moment.',
    deepDive: `The Pillars of Creation are perhaps the most iconic astronomical image ever captured. First photographed by the Hubble Space Telescope in 1995, then re-imaged in stunning detail in 2014 with Hubble's upgraded cameras, and again in 2022 with the James Webb Space Telescope in infrared light, they have appeared in textbooks, posters, and collective human imagination for three decades.

The pillars are located within the Eagle Nebula (Messier 16), a young open cluster of stars about 6,500 to 7,000 light-years from Earth in the constellation Serpens. They are made of interstellar hydrogen gas and dust — the raw material of stars. The tallest pillar is approximately seven light-years tall, or about twice the distance between our Sun and the nearest star system, Alpha Centauri.

What makes the pillars extraordinary is what they are doing: they are stellar nurseries. Inside the dense tips and along the outer edges of the columns, new stars are in the process of formation. The gas and dust gradually collapse under gravity, heating as they compress, until the core of the collapsing cloud reaches 10 million degrees Celsius — and ignites nuclear fusion. A star is born.

The pillars themselves are being slowly destroyed by the intense ultraviolet radiation from the young, hot stars of the Eagle Nebula cluster. This radiation is gradually evaporating the outer layers of the pillars in a process called photoevaporation. The dark, finger-like protrusions you see along the edges are dense clumps of material that resist the evaporation slightly longer than the surrounding gas — they are called EGGs (Evaporating Gaseous Globules) and many of them likely contain protostars at their cores.

Here is the mind-bending part: astronomers believe the pillars may no longer exist. A supernova explosion approximately 8,000 to 9,000 years ago may have already obliterated them. But because the nebula is 6,500 light-years away, the light from that destruction has not yet reached us. We are seeing the pillars as they existed 6,500 years ago — at the time when human civilization was just beginning to emerge in Mesopotamia and the Indus Valley. The destruction we cannot yet see may have happened thousands of years before we began writing language.

The James Webb Space Telescope's 2022 infrared image of the pillars revealed something Hubble could not: because infrared light penetrates dust that blocks visible light, Webb could see through the pillars and count the young stars embedded within them. Hundreds of previously invisible protostars were revealed, glowing in the near-infrared like embers inside a dark cloud. The universe was visibly, actively making stars — right now, in this moment, 6,500 years ago.`,
    scale: 'The tallest pillar is 7 light-years tall. Light takes 7 years to travel its length. Our Sun is 93 million miles away; a light-year is 5.88 trillion miles. The pillar is 41 trillion miles tall.',
    discovery: 'First imaged by Hubble in April 1995 by astronomers Jeff Hester and Paul Scowen of Arizona State University. The image became one of the most downloaded and printed astronomical photographs in history.',
    mindBend: 'The light you see in any photograph of the Pillars left the nebula 6,500 years ago. You are not seeing the present. You are seeing the ancient past of the universe. All astronomy is time travel.',
  },
  {
    id: 'blackhole',
    name: 'Black Holes',
    nameHindi: 'कृष्ण विवर',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/600px-Black_hole_-_Messier_87_crop_max_res.jpg',
    category: 'Spacetime Phenomenon',
    intro: 'A region of spacetime where gravity is so extreme that nothing — not even light — can escape. At the center lies a singularity where our known physics breaks down completely.',
    deepDive: `A black hole is not a hole. It is an object — an extraordinarily dense object — whose gravity is so intense that its escape velocity exceeds the speed of light. Since nothing can travel faster than light, nothing can escape. Not matter. Not radiation. Not information. Not time.

They form when massive stars — typically eight or more times the mass of our Sun — exhaust their nuclear fuel and collapse. Without the outward pressure of fusion to balance gravity, the core collapses catastrophically. In milliseconds, a star's core that was billions of kilometers across can collapse to a point smaller than an atom. The outer layers rebound in a supernova explosion, scattering heavy elements across space. What remains is a black hole.

The boundary of a black hole is called the event horizon — the point of no return. Cross it and the laws of physics as we understand them dictate that you cannot escape. From the outside, an observer watching you fall toward a black hole would see you slow down and redden (as light from you becomes increasingly stretched) and eventually freeze at the event horizon, never quite crossing it. From your own perspective, you'd cross the horizon without noticing anything unusual — and then, depending on the size of the black hole, be stretched into a thin strand of particles in a process physicists call "spaghettification."

The first direct image of a black hole's event horizon was captured in 2019 by the Event Horizon Telescope — a global array of radio telescopes acting as a single Earth-sized instrument. The image showed the supermassive black hole at the center of Messier 87, a galaxy 53 million light-years away. The black hole has a mass 6.5 billion times that of our Sun. The glowing ring around the dark center is hot gas being swallowed. The dark center is the shadow of the event horizon.

At the center of our own Milky Way galaxy sits Sagittarius A*, a supermassive black hole 4 million times the mass of our Sun. In 2022, the Event Horizon Telescope released the first image of it — a blurry orange ring in the dark, 26,000 light-years away. Our entire galactic home orbits this object once every 225 million years.

Stephen Hawking discovered in 1974 that black holes are not entirely black — they very slowly emit thermal radiation due to quantum effects near the event horizon. This "Hawking radiation" means that, given enough time (an almost incomprehensibly long time), a black hole will evaporate completely. Where does the information about what fell in go? This "information paradox" remains one of the deepest unsolved problems in physics.`,
    scale: 'Sagittarius A*, our galaxy\'s central black hole, has an event horizon of about 12 million kilometers across. Our Sun is 1.4 million kilometers across. The black hole is 8 times wider than the Sun, but 4 million times more massive.',
    discovery: 'Karl Schwarzschild derived the mathematical description of black holes in 1916, one month after Einstein published General Relativity, while serving on the Russian front in World War I. He died months later of a disease contracted at the front.',
    mindBend: 'Inside a black hole, the singularity is not in space — it is in the future. Time and space swap roles inside the event horizon. Just as you cannot avoid the future outside, you cannot avoid the singularity inside. It is ahead of you in time, not in space.',
  },
  {
    id: 'milkyway',
    name: 'Our Milky Way Galaxy',
    nameHindi: 'आकाशगंगा',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ESO-_The_Milky_Way_panorama.jpg/800px-ESO-_The_Milky_Way_panorama.jpg',
    category: 'Galaxy',
    intro: 'A barred spiral galaxy containing 100-400 billion stars, 100,000 light-years across. We live in one of its minor spiral arms, 26,000 light-years from the center.',
    deepDive: `The Milky Way is our home galaxy — the gravitationally bound collection of stars, gas, dust, and dark matter within which our Solar System resides. It contains between 100 billion and 400 billion stars. Recent estimates suggest it may contain over a trillion, depending on how you count the dim, small red dwarfs that are difficult to detect from Earth.

The galaxy is a barred spiral — it has a central bar structure of stars, with spiral arms extending outward. The diameter of the stellar disk is approximately 100,000 light-years, though the dark matter halo that surrounds it extends much farther — perhaps 2 million light-years. Our Solar System sits in the Orion Arm, a minor spur between two major spiral arms, about 26,000 light-years from the galactic center.

What you see as the Milky Way on a dark night — that faint band of light arching overhead — is the combined light of billions of stars, viewed edge-on from our position inside the disk. We cannot photograph our own galaxy from the outside. Every image you have seen of a face-on spiral galaxy that is labeled "the Milky Way" is actually an artist's impression or an image of a similar galaxy used for illustration. The actual structure of our own galaxy has been mapped over decades using radio telescopes and infrared detectors that can see through the dust clouds that block visible light.

The Milky Way is ancient — it formed approximately 13.6 billion years ago, about 180 million years after the Big Bang. The oldest stars in our galaxy are nearly as old as the universe itself. They contain almost no elements heavier than hydrogen and helium because those heavier elements had not yet been forged in stellar explosions. Over billions of years, successive generations of stars have lived, died, and scattered their heavier elements into the interstellar medium. Our Sun is a third-generation star — it contains elements like iron and carbon and oxygen that were created in the hearts of stars that died billions of years before our Solar System formed. We are, as Carl Sagan famously said, made of star stuff.

Every second, approximately seven new stars form somewhere in the Milky Way. Our galaxy is also merging — very, very slowly — with the Andromeda Galaxy. In approximately 4.5 billion years, the two galaxies will collide and eventually merge into a single elliptical galaxy that astronomers have nicknamed "Milkomeda." The stars themselves are so far apart that virtually none will actually collide, but the gravitational interaction will reshape both galaxies completely.

The Indian astronomical tradition had a deep relationship with the sky. The ancient text Vedanga Jyotisha (approximately 1400 BCE) discusses the positions of stars and the lunar calendar. Aryabhata, writing in 499 CE, correctly stated that the Earth rotates on its own axis — over a millennium before Copernicus. He calculated the length of the year as 365.3586805 days — accurate to within 3 minutes and 20 seconds of the modern value.`,
    scale: '100,000 light-years across. If the Milky Way were the size of a dinner plate (30cm), our Solar System would be a dot smaller than a bacterium, 10cm from the center.',
    discovery: 'Galileo first resolved the Milky Way into individual stars in 1610 with his telescope, disproving the ancient belief that it was a cloud or atmospheric phenomenon.',
    mindBend: 'The light from stars at the far edge of the Milky Way that we see tonight left those stars 100,000 years ago — when Homo sapiens had barely begun leaving Africa. Stargazing is not just beautiful. It is archaeology.',
  },
];

const SPACE_FACTS = [
  {
    title: 'Time Dilation is Real — and Measurable',
    content: 'Einstein\'s General Relativity predicts that clocks run slower in stronger gravitational fields. This is not theoretical — it is measured and corrected for in GPS satellites every day. A clock on a GPS satellite runs 38 microseconds faster per day than a clock on Earth\'s surface (because the satellite is in weaker gravity, higher up). Without correcting for this, GPS would accumulate an error of about 10 kilometers per day. Your phone\'s GPS navigation is working because someone applied Einstein\'s equations to keep the satellite clocks synchronized with Earth clocks. General Relativity is not abstract physics. It is why your navigation works.',
  },
  {
    title: 'The Cosmic Microwave Background — Light from the Beginning',
    content: 'About 380,000 years after the Big Bang, the universe cooled enough for electrons to combine with protons to form neutral hydrogen atoms. Before this moment, the universe was opaque — photons could not travel freely because they kept colliding with free electrons. The moment neutral atoms formed, the universe became transparent for the first time, and light could travel unimpeded. That ancient light — stretched and cooled over 13.8 billion years of expansion — is the Cosmic Microwave Background Radiation. It pervades the universe in every direction, at a temperature of just 2.725 Kelvin (-270°C). When you tune an old analog television between channels and see "snow" (static), about 1% of that static is the CMB — the literal light of the Big Bang, landing on your television antenna.',
  },
  {
    title: 'There Are More Stars Than Grains of Sand',
    content: 'The observable universe contains approximately 2 trillion galaxies. Each galaxy contains on average 100 billion stars. That gives a total of roughly 2 × 10²³ stars — 200 sextillion stars. Astronomers estimate the total number of grains of sand on all of Earth\'s beaches and deserts at about 7.5 × 10¹⁸. So there are approximately 10,000 stars for every grain of sand on Earth. And the observable universe is only the part we can see — the universe extends far beyond, perhaps infinitely. The unobservable universe contains incomprehensibly more.',
  },
  {
    title: 'Indian Mathematics and Astronomy',
    content: `The contribution of ancient India to astronomy and mathematics is profound and insufficiently celebrated in mainstream science education.

Aryabhata (476–550 CE) stated in his Aryabhatiya that the Earth spins on its own axis — a millennium before Copernicus (1543 CE) made the same claim in Europe. He calculated the Earth's circumference as 24,835 miles; the modern measurement is 24,902 miles. He explained lunar and solar eclipses correctly as shadows, not demons, at a time when most cultures attributed them to supernatural causes.

Brahmagupta (598–668 CE) gave the first complete systematic rules for computing with zero — including the rules for zero multiplied by any number (zero) and zero divided into any number. He also gave formulas for the area of cyclic quadrilaterals and stated (without proof) the formula for diagonals that Ptolemy had derived only for specific cases.

Bhaskara II (1114–1185 CE) anticipated differential calculus in his Siddhanta Shiromani, calculating the instantaneous rate of change of planetary motion — 500 years before Newton and Leibniz.

The Kerala School of Astronomy and Mathematics (14th–16th century CE) — centered around Madhava of Sangamagrama — derived infinite series for trigonometric functions (sin, cos, arctan) and discovered what we now call the Gregory-Leibniz series for pi. These discoveries preceded the same discoveries in Europe by approximately 200 years.`,
  },
];

const SAGAN_QUOTES = [
  {
    quote: 'The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.',
    context: 'From Cosmos: A Personal Voyage (1980). The carbon in our bodies was forged in stellar nucleosynthesis — in the cores of stars that died billions of years before our Sun formed. We literally are made of material that was once inside other stars.',
  },
  {
    quote: 'Somewhere, something incredible is waiting to be known.',
    context: 'Attributed to Sagan (though the exact source is disputed). The sentiment is pure Sagan: the universe is not a closed system of already-discovered facts. It is an open frontier. The most important discoveries have not yet been made.',
  },
  {
    quote: 'Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.',
    context: 'From Pale Blue Dot (1994), written after the famous photograph of Earth from 6 billion kilometers away. The argument for human dignity and nonviolence from the perspective of astronomical scale.',
  },
];

export default function CosmosPage() {
  const dayOfYear = getDayOfYear();
  const todayObject = COSMIC_OBJECTS[dayOfYear % COSMIC_OBJECTS.length];
  const [selectedObject, setSelectedObject] = useState(todayObject);
  const [expandedFact, setExpandedFact] = useState<number | null>(0);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-7">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Space & Astrophysics</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>ब्रह्मांड — Cosmos</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            The universe is under no obligation to make sense to you. That it largely does is the miracle.
          </p>
        </motion.div>

        {/* Object selector */}
        <div className="flex gap-2 flex-wrap">
          {COSMIC_OBJECTS.map((obj, i) => (
            <button
              key={obj.id}
              onClick={() => setSelectedObject(obj)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selectedObject.id === obj.id ? 'var(--accent-saffron)' : 'var(--bg-tertiary)',
                color: selectedObject.id === obj.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % COSMIC_OBJECTS.length ? '2px solid var(--accent-saffron)' : '1px solid var(--border-default)',
              }}
            >
              {obj.name}{i === dayOfYear % COSMIC_OBJECTS.length ? ' • Today' : ''}
            </button>
          ))}
        </div>

        {/* Featured object */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedObject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-4"
          >
            {/* Image */}
            <div className="card-base overflow-hidden">
              <div className="relative" style={{ paddingBottom: '56.25%', background: 'var(--bg-tertiary)' }}>
                <img
                  src={selectedObject.imageUrl}
                  alt={selectedObject.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={e => {
                    const el = e.target as HTMLImageElement;
                    el.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/600px-Hubble_ultra_deep_field.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-saffron)' }}>
                    {selectedObject.category}
                  </span>
                  <h2 className="font-serif text-2xl text-white mt-1">{selectedObject.name}</h2>
                  <p className="font-devanagari text-sm text-white/60">{selectedObject.nameHindi}</p>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <p className="text-base leading-relaxed font-serif italic" style={{ color: 'var(--text-secondary)' }}>
                  {selectedObject.intro}
                </p>
                <div className="border-t pt-4" style={{ borderColor: 'var(--border-default)' }}>
                  {selectedObject.deepDive.split('\n\n').map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Scale, Discovery, Mind-Bend */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Scale', content: selectedObject.scale, color: '#3A5A8A' },
                { label: 'Discovery', content: selectedObject.discovery, color: '#6A3A8A' },
                { label: 'Mind-Bender', content: selectedObject.mindBend, color: '#3A8A6A' },
              ].map(card => (
                <div key={card.label} className="card-base p-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: card.color }}>
                    {card.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Deep Space Facts */}
        <div className="space-y-3">
          <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>Deep Knowledge</h2>
          {SPACE_FACTS.map((fact, i) => (
            <div key={i} className="card-base overflow-hidden">
              <button
                className="w-full text-left p-5 flex items-center justify-between gap-3"
                onClick={() => setExpandedFact(expandedFact === i ? null : i)}
              >
                <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{fact.title}</span>
                <motion.div animate={{ rotate: expandedFact === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedFact === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t pt-4" style={{ borderColor: 'var(--border-default)' }}>
                      {fact.content.split('\n\n').map((para, j) => (
                        <p key={j} className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Carl Sagan */}
        <div className="space-y-3">
          <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>Carl Sagan</h2>
          {SAGAN_QUOTES.map((q, i) => (
            <div key={i} className="card-base p-5 space-y-3" style={{ background: 'color-mix(in srgb, #3A5A8A 6%, var(--bg-secondary))' }}>
              <p className="font-serif italic text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                "{q.quote}"
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{q.context}</p>
            </div>
          ))}
        </div>

        <div className="text-center py-4">
          <p className="font-serif italic text-sm" style={{ color: 'var(--text-faint)' }}>
            We are made of the same atoms that formed in the first stars. Look up.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
