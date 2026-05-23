'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const INDIA_FEATURES = [
  {
    id: 'indus-valley',
    title: 'The First Cities',
    titleHindi: 'प्रथम नगर',
    subtitle: 'How the Indus Valley Civilization built the world\'s most advanced urban culture — and then vanished',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mohenjo-daro_Sindh.jpg/600px-Mohenjo-daro_Sindh.jpg',
    category: 'Ancient History',
    content: `In 1921, archaeologists began excavating a mound on the banks of the Ravi River in Punjab. What they found beneath the earth upended everything the world believed about the ancient history of South Asia, and revealed a civilization of extraordinary sophistication that had been completely forgotten for 4,000 years.

The Indus Valley Civilization — also called the Harappan Civilization, after one of its principal sites — flourished between approximately 3300 BCE and 1300 BCE, at its peak covering an area larger than ancient Egypt and Mesopotamia combined. Its territory extended from modern-day Pakistan and Afghanistan into northwestern India, encompassing hundreds of settlements. At its height, around 2600–1900 BCE, the Indus cities may have housed over 5 million people — making it one of the largest civilizations of the ancient world.

The cities were marvels of urban planning. Mohenjo-daro and Harappa — the two largest excavated sites — were laid out on a precise grid, with streets oriented to the cardinal directions. Houses were built of standardized baked bricks, which are remarkably consistent in size (approximately 7 x 14 x 28 cm) across sites hundreds of kilometers apart. This standardization implies either a centralized production system or a widely shared standard — either way, extraordinary coordination.

The sanitation system was centuries ahead of its time. Houses had bathrooms connected to covered sewage drains that ran beneath the streets — the world's first urban sanitation system. The Great Bath of Mohenjo-daro — a precisely waterproofed pool 12 meters long, 7 meters wide, and 2.4 meters deep — appears to have had a ritual or civic function, and was fed by wells. The engineering is impressive enough that the waterproofing layer has held for 4,500 years.

What is most astonishing about the Indus Valley Civilization is what we don't find: no palaces, no temples identified with certainty, no royal tombs with enormous grave goods, no monumental art glorifying rulers. The site evidence suggests a remarkably egalitarian society — at least in material terms. House sizes varied, but not dramatically. There is no Indus equivalent of the Egyptian pyramids, Mesopotamian ziggurats, or Chinese imperial tombs. Either power was diffuse in a way unique to this civilization, or the things that mattered most to the Indus people were not the things that leave large archaeological footprints.

The Indus script remains undeciphered — one of the great intellectual challenges of our time. Over 400 distinct signs have been catalogued, appearing on seals (small carved stones used, presumably, for trade and administration), pottery, and copper tablets. The script is brief — rarely more than five signs in a row — which makes decipherment extraordinarily difficult. Without being able to read it, we cannot know the names of Indus rulers (if they had them in the modern sense), the nature of their religion, or the content of their administrative records. The civilization is extraordinary but largely mute.

Between approximately 1900 and 1300 BCE, the Indus cities were abandoned. The population dispersed. Why? The current scientific consensus points to climate change: a gradual weakening of the monsoon, combined with tectonic activity that altered river courses, made the agricultural basis of the civilization increasingly precarious. People migrated — eastward into the Gangetic plain, southward into the Deccan. The knowledge, the planning traditions, the agricultural techniques — these didn't disappear with the cities. They adapted and continued.

The Indus Valley Civilization challenges some deeply held assumptions about what civilization requires. It did not require monumental architecture. It did not require a god-king. It did not require military dominance — there is almost no evidence of organized warfare in the Indus remains. What it required was apparently: sophisticated urban planning, standardized weights and measures (the Indus had standardized weights accurate to within 0.1%), agricultural surplus, long-distance trade (Indus seals have been found in Mesopotamia), and what appears to have been a stable, administered civic life.

It is, in some ways, the most mysterious major civilization in history. We know it was there. We know it was extraordinary. We cannot read its writing, identify its rulers, or be certain about its religion. It is India's deepest secret.`,
    wonder: 'Indus weights are so precisely standardized — accurate to 0.1% — that modern archaeologists initially thought they were using modern equipment. They were using stones, carved 4,500 years ago.',
  },
  {
    id: 'mathematics',
    title: 'India\'s Gift to Mathematics',
    titleHindi: 'गणित को भारत की देन',
    subtitle: 'From zero to infinity: how Indian mathematicians built the foundation of modern science',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Aryabhata-portrait.jpg/440px-Aryabhata-portrait.jpg',
    category: 'History of Science',
    content: `The number you use to count, calculate, and make sense of the world — the base-10 positional number system, with zero as a placeholder — is Indian. This is not a minor contribution. Without positional notation, mathematics as we know it is impossible. Try doing long multiplication in Roman numerals. It is not just difficult. It is practically impossible for numbers beyond a few hundred. The Roman Empire built aqueducts and roads without being able to calculate efficiently. The Indian system made modern science possible.

The concept of zero as a number — not just a placeholder but an actual quantity with its own mathematical properties — was first fully articulated by Brahmagupta (598–668 CE) in his Brahmasphutasiddhanta (628 CE). He gave the rules: any number minus itself equals zero; zero times any number equals zero; any number plus zero equals that number. These seem obvious now. They were revolutionary then. No Greek, Egyptian, Babylonian, or Chinese mathematician had treated zero as a number with these properties before.

The Indian contribution to mathematics goes far beyond zero. Aryabhata (476–550 CE), writing in his Aryabhatiya at age 23, calculated pi to 3.1416 (accurate to four decimal places), gave rules for computing square and cube roots, and described a method for solving linear and quadratic equations. He stated — in 499 CE — that the Earth rotates on its own axis, creating the appearance of the sun's movement. He calculated the Earth's circumference as 24,835 miles (the actual value is 24,902 miles — an error of 0.27%). This was 1,044 years before Copernicus published his heliocentric model.

Bhaskara II (1114–1185 CE) composed the Siddhanta Shiromani, which contains, in the Bijaganita (Algebra) section, a treatment of permutations and combinations, a discussion of the concept of infinity (he states that infinity divided by any number is still infinity), and what is recognizably an early form of differential calculus — calculating the instantaneous rate of change of planetary positions. He reached this without limits or infinitesimals as formal concepts, using an ingenious approach that anticipated Newton by over 500 years.

The Kerala School of Astronomy and Mathematics (14th–16th century CE) is perhaps the most remarkable chapter. Madhava of Sangamagrama (c. 1340–1425 CE), working in a small village in Kerala, derived infinite series for trigonometric functions — sin, cos, arctan — that in Europe are attributed to Gregory (1671) and Leibniz (1676). The Madhava-Leibniz series for pi (pi/4 = 1 - 1/3 + 1/5 - 1/7 + ...) is called the Gregory-Leibniz series in Western textbooks, though Madhava derived it approximately 250 years earlier. This remains a significant and underacknowledged episode in the history of mathematics.

The Kerala mathematicians also developed methods for computing accurate approximations to pi using series — work that, had it been transmitted to Europe, might have accelerated the development of calculus by a century. Why wasn't it? Partly because of the lack of direct intellectual exchange between Kerala and Europe in the 14th–16th centuries. The Portuguese arrived in Kerala (Calicut) in 1498 — Vasco da Gama landed just as the Kerala School was at its peak. But the exchange was commercial, not intellectual.

Srinivasa Ramanujan (1887–1920) is perhaps the most astonishing mathematical mind of the 20th century. Born in Erode, Tamil Nadu, almost entirely self-taught (he had a copy of Carr's "Synopsis of Pure Mathematics" and little else), he derived thousands of formulas and theorems independently — many of which are still being proved today. His formula for modular forms and mock theta functions are central to modern string theory. He said that he received formulas in dreams from his family goddess Namagiri — and whether or not you find that theologically interesting, the mathematics was genuine. G.H. Hardy, who invited Ramanujan to Cambridge, said he was in the same class as Euler and Gauss. He died at 32.

India's contribution to mathematics is not a historical curiosity. The algorithms running on the device you're reading this on trace their logical ancestry to Indian algebraic and numerical thinking. The word "algorithm" comes from Al-Khwarizmi, the 9th century Muslim mathematician who transmitted Indian arithmetic to the Arab world, from where it reached Europe. Al-Khwarizmi's name in turn gives us "algebra." The chain runs: Indian mathematics → Arabic transmission → European Renaissance → modern computation.`,
    wonder: 'Ramanujan\'s formula for 1/pi, discovered in 1914, is so efficient that it forms the basis of some of the most rapid pi-computation algorithms used today. Each term of the series adds about 8 correct decimal places.',
  },
];

const INDIA_SNIPPETS = [
  { title: 'First University', content: 'Nalanda University, established in the 5th century CE in Bihar, was the world\'s first residential university. At its peak, it housed 10,000 students and 2,000 teachers from across Asia. Its library — the Dharmaganja — contained millions of manuscripts. When the Bhaktiyar Khilji destroyed it in 1193 CE, the library reportedly burned for three months.' },
  { title: 'Language Family', content: 'India is home to languages from four completely unrelated language families: Indo-European (Hindi, Bengali, Marathi, Gujarati...), Dravidian (Tamil, Telugu, Kannada, Malayalam), Austroasiatic (Munda, Santali), and Sino-Tibetan (Bodo, Manipuri). This linguistic diversity is unmatched by any comparable land area on Earth.' },
  { title: 'Musical Heritage', content: 'Classical Indian music is one of the oldest musical traditions in the world, with a continuous documented history of over 2,000 years. The Natya Shastra (200 BCE – 200 CE), attributed to Bharata Muni, systematically describes musical scales (swaras), rhythms (talas), and emotional modes (rasas) with a theoretical sophistication that rivals any musical tradition in any culture.' },
  { title: 'Biodiversity Hotspot', content: 'India contains four of the world\'s 36 biodiversity hotspots: the Himalayas, the Western Ghats, the Eastern Himalayas (including Assam and Meghalaya), and the Sundaland (Andaman and Nicobar). The Western Ghats alone — 1,600 km of mountains along India\'s western coast — contain more plant diversity per square kilometer than most of the planet.' },
];

export default function BharatiPage() {
  const dayOfYear = getDayOfYear();
  const featured = INDIA_FEATURES[dayOfYear % INDIA_FEATURES.length];
  const [selected, setSelected] = useState(featured);
  const [showFull, setShowFull] = useState(false);
  const [expandedSnippet, setExpandedSnippet] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Discover India</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>भारती — Bharati</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            5,000 years of history, 4 language families, 1.4 billion stories. India is not a country. It is a civilization.
          </p>
        </motion.div>

        {/* Feature selector */}
        <div className="flex gap-2 flex-wrap">
          {INDIA_FEATURES.map((f, i) => (
            <button
              key={f.id}
              onClick={() => { setSelected(f); setShowFull(false); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === f.id ? '#8A3A3A' : 'var(--bg-tertiary)',
                color: selected.id === f.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % INDIA_FEATURES.length ? '2px solid #8A3A3A' : '1px solid var(--border-default)',
              }}
            >
              {f.category}{i === dayOfYear % INDIA_FEATURES.length ? ' • Today' : ''}
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
            <div className="card-base overflow-hidden">
              <div className="relative" style={{ paddingBottom: '50%', background: 'var(--bg-tertiary)' }}>
                <img
                  src={selected.imageUrl}
                  alt={selected.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E8A87C' }}>{selected.category}</span>
                  <h2 className="font-serif text-2xl text-white mt-1">{selected.title}</h2>
                  <p className="font-devanagari text-sm text-white/60">{selected.titleHindi}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="font-serif italic text-base" style={{ color: 'var(--text-secondary)' }}>{selected.subtitle}</p>
              </div>
            </div>

            <div className="card-base p-6 space-y-4">
              {(showFull ? selected.content : selected.content.split('\n\n').slice(0, 3).join('\n\n')).split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>{para}</p>
              ))}
              {!showFull && (
                <div className="text-center pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  <button onClick={() => setShowFull(true)} className="px-6 py-2.5 rounded-full text-sm font-medium" style={{ background: '#8A3A3A', color: 'white' }}>
                    Continue Reading →
                  </button>
                </div>
              )}
            </div>

            <div className="card-base p-5" style={{ background: 'color-mix(in srgb, #8A3A3A 8%, var(--bg-secondary))', border: '1px solid #8A3A3A' }}>
              <p className="section-label mb-2" style={{ color: '#8A3A3A' }}>Remarkable Fact</p>
              <p className="font-serif italic text-base" style={{ color: 'var(--text-primary)' }}>{selected.wonder}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick facts */}
        <div className="space-y-3">
          <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>India at a Glance</h2>
          {INDIA_SNIPPETS.map((s, i) => (
            <div key={i} className="card-base overflow-hidden">
              <button className="w-full text-left p-4 flex items-center justify-between gap-3" onClick={() => setExpandedSnippet(expandedSnippet === i ? null : i)}>
                <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{s.title}</span>
                <motion.div animate={{ rotate: expandedSnippet === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedSnippet === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{s.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
