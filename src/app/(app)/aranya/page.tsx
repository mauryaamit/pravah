'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const NATURE_FEATURES = [
  {
    id: 'mycorrhizal',
    title: 'The Wood Wide Web',
    titleHindi: 'जंगल का इंटरनेट',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mycorrhizal_network.jpg/600px-Mycorrhizal_network.jpg',
    category: 'Forest Intelligence',
    intro: 'Beneath every forest floor lies a vast network of fungal threads connecting trees, allowing them to share nutrients, send chemical warnings, and care for their seedlings. Trees, it turns out, are not solitary competitors. They are communities.',
    fullContent: `In 1997, the forest ecologist Suzanne Simard published a paper in Nature that changed how biologists think about forests. She demonstrated, using radioactive carbon tracers, that trees in a forest were exchanging carbon through the fungal networks in the soil — and that the exchange was not random. Old, large trees (which she called "mother trees" or "hub trees") were sending significantly more carbon to the seedlings growing near them than to random plants. The forest was not competing. It was cooperating.

The mechanism is mycorrhizal networks — networks of fungal threads (hyphae) that form symbiotic relationships with plant roots. The plant provides the fungus with sugars (produced through photosynthesis); the fungus provides the plant with water and minerals (particularly phosphorus) from a much larger volume of soil than the plant's roots could access alone. This relationship is ancient — mycorrhizal associations are found in plant fossils over 400 million years old, and most land plants form them. They are the rule, not the exception.

But Simard's research went further. The fungal networks connect not just one plant to one fungus but multiple plants to a shared network. Through this network, carbon, nitrogen, phosphorus, water, and chemical signals can travel between plants. When a tree is stressed by drought or pest attack, it sends chemical signals through the network that cause neighboring trees to upregulate their own defenses — before the attack has reached them.

When a tree is dying, it increases its carbon transfer to neighbors, particularly to its own offspring (Simard's research showed that trees can recognize their kin). It is, in a meaningful sense, giving its resources to the next generation before it dies.

The "Wood Wide Web" is not metaphorical. It functions analogously to information networks: hub nodes (large, well-connected trees) that manage information flow, distributed redundancy (the network persists when individual threads die), and targeted resource allocation (more going to nodes that need it).

Peter Wohlleben, a German forester, brought this research to popular audiences in his book "The Hidden Life of Trees" (2015), which was translated into over 30 languages. He described seeing, during a forest walk, a collection of ancient moss-covered stones that turned out, upon examination, to be the remains of a stump from a tree felled 400-500 years ago. The stump's cells were still alive — still green with chlorophyll, still conducting photosynthesis at a microscopic level. It had no leaves to gather light. It was surviving entirely on sugar being fed to it through the mycorrhizal network by the surrounding trees. The forest was keeping a stump alive for centuries.

Wohlleben's interpretation is that trees in the same forest are, effectively, a community that maintains its members. Whether you want to call this altruism, mutualism, or simply emergent complexity, the fact is that the forest, as a collective, behaves in ways that no individual tree's behavior explains. It is a superorganism.

The implications for ecology are profound. Logging practices that remove old trees — particularly the hub trees — destroy not just individual trees but the information and resource networks that make the forest function. A forest of young trees without hub nodes is not just a younger version of an old forest. It is a structurally different entity, with less resilience, less resource-sharing capacity, and less ability to respond to stress. This is partly why clear-cut areas, when replanted, often fail to develop into functioning forests: the underground infrastructure is gone.

The implications for how we think about individuality are equally interesting. We typically model the biological world on competition — Darwin's "survival of the fittest" read as every organism for itself. But the mycorrhizal research suggests that cooperation is at least as fundamental as competition in living systems, and that what we take to be "individuals" (trees, plants, perhaps ultimately animals) are always embedded in networks of relationship that shape their behavior in ways we are only beginning to understand.

The Jain concept of parasparopagraho jivanam — "all life is interdependent" — which dates back 2,500 years, looks very different in light of mycorrhizal research. What seemed like religious instruction is now looking like an early intuition of systems ecology.`,
    wonder: 'A single teaspoon of healthy forest soil contains several miles of fungal threads. The mycorrhizal network under a single hectare of old-growth forest may contain enough threads to circle the Earth many times.',
  },
  {
    id: 'migration',
    title: 'The Mystery of Migration',
    titleHindi: 'प्रवास का रहस्य',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Monarch_Butterfly_Danaus_plexippus_Feeding_Down.jpg/600px-Monarch_Butterfly_Danaus_plexippus_Feeding_Down.jpg',
    category: 'Animal Navigation',
    intro: 'Every year, hundreds of millions of animals navigate across continents with precision that embarrasses our best technology. How? The answers involve quantum mechanics, magnetic fields, star maps, smell, and biological clocks.',
    fullContent: `Every autumn, millions of Monarch butterflies across North America — insects with brains the size of a pinhead — fly up to 4,500 kilometers from Canada and the northeastern United States to a cluster of oyamel fir trees in the mountains of central Mexico. They have never made this journey before. Their parents and grandparents made it, but each individual Monarch lives only six to eight months, and the migration generation (which lives longer, up to eight months, specifically to complete the journey) is typically four generations removed from the last migration generation.

How do they know where to go?

The answer, as far as we currently understand it, involves a time-compensated sun compass — an internal clock that adjusts the navigation angle based on the time of day (since the sun changes position), combined with a magnetic sense that allows backup navigation on cloudy days, combined with genetic encoding of the general destination that is expressed in response to environmental cues (shortening day length, dropping temperatures). The navigation system is partly inherited, partly learned, partly quantum mechanical (there is evidence that Monarchs use quantum coherence in their eyes to detect magnetic fields).

The Bar-tailed Godwit makes a non-stop flight of 12,000 kilometers from Alaska to New Zealand — the longest non-stop flight of any bird, taking eight to nine days without eating, drinking, or sleeping (in the conventional sense). To prepare, it enters a state of hyperphagia — eating continuously for weeks until its body weight nearly doubles, mostly from fat. Then it shrinks its own organs — digestive system, liver, kidney — to reduce weight before departure. It will re-grow these organs after landing. The bird is performing scheduled surgery on itself before takeoff.

Humpback whales navigate thousands of miles across featureless ocean to within kilometers of specific breeding and feeding grounds. Studies suggest they use Earth's magnetic field as a map, supplemented by infrasound (very low frequency sound waves that travel vast distances through water) and possibly olfactory cues (the ocean has distinct chemical signatures in different regions).

The Arctic Tern completes a round trip of approximately 90,000 kilometers each year — from the Arctic to the Antarctic and back. Over its 30-year life, a single Arctic Tern travels the equivalent of three round trips to the Moon. It uses a combination of star navigation, magnetic navigation, and wind patterns.

What is most astonishing about all of this is that these navigation systems evolved independently in multiple lineages — they are convergent solutions to the same problem of "how do you go somewhere you've never been?" The quantum magnetic sense appears to have evolved independently in insects, birds, and possibly fish and marine mammals. Evolution found quantum mechanics useful for navigation long before human physicists discovered quantum mechanics.

The Indian migration tradition is also rich. The Amur Falcon migrates from Siberia to southern Africa via India — a journey of over 22,000 kilometers. Every year, millions of them stop over in Nagaland, India, during October. Until a decade ago, local tribes hunted them in enormous numbers (hundreds of thousands per season). Then a conservation movement, led by local communities, transformed the bird from prey into a celebrated visitor. The Nagaland people now call it "the world's longest traveller" and celebrate its arrival.

Migration is one of the most powerful arguments against the idea that consciousness and intelligence are uniquely human. A Monarch butterfly, with a milligram of neural tissue, performs feats of navigation that no human-built autonomous vehicle can reliably replicate in the wild. The intelligence is not in the individual neuron. It is in the architecture — the integration of quantum physics, biochemistry, evolutionary genetics, and environmental sensing that natural selection has spent millions of years optimizing.`,
    wonder: 'The Arctic Tern lives 30 years and migrates 90,000km annually. Over its lifetime, it travels 2.7 million kilometers — more than three return trips to the Moon. It does this with a brain smaller than a walnut.',
  },
  {
    id: 'bioluminescence',
    title: 'The Ocean\'s Living Light',
    titleHindi: 'समुद्र का जीवित प्रकाश',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bioluminescent_dinoflagellate_-_bioluminescence.jpg/600px-Bioluminescent_dinoflagellate_-_bioluminescence.jpg',
    category: 'Marine Biology',
    intro: 'Deep in the ocean, where no sunlight reaches, 90% of creatures make their own light. The dark ocean is not dark at all — it glitters, pulses, flashes, and glows with a living luminescence that has been evolving for 500 million years.',
    fullContent: `Bioluminescence — the production and emission of light by living organisms — is among the most widespread phenomena in nature. It has evolved independently over 40 separate times in different lineages. It is found in fireflies, fungi, earthworms, jellyfish, squid, fish, bacteria, plankton, and hundreds of other species. In the ocean, below 200 meters where sunlight cannot penetrate, an estimated 90% of creatures are capable of producing light.

The chemistry is elegant: an enzyme called luciferase catalyzes a reaction between a molecule called luciferin and oxygen, releasing energy as light rather than heat. ("Lucifer" means "light-bringer" in Latin — Lucifer was originally the name for Venus, the morning star.) The reaction is extraordinarily efficient: nearly 100% of the energy is converted to light, with almost no heat. By comparison, an incandescent lightbulb converts only about 5% of its energy to light; the rest is heat. Life solved the efficient light-production problem 500 million years before Edison.

Bioluminescence serves different functions in different species. In anglerfish, it is a lure — the female hangs a bioluminescent appendage in front of her mouth to attract prey in the dark. In fireflies, it is sexual signaling — each species has a species-specific flash pattern that allows mates to find each other in the dark. In many squid and fish, it is counterillumination — they produce ventral (downward-facing) light that matches the faint surface light filtering down from above, making them invisible to predators looking up from below (as if they had no shadow). In dinoflagellates (single-celled marine plankton), it appears to be alarm signaling — when disturbed by a predator, they flash, which attracts larger predators that eat the first predator, thereby protecting the dinoflagellate through what ecologists call a "burglar alarm" effect.

The bioluminescent dinoflagellates are responsible for one of the most astonishing natural spectacles visible to the naked eye: bioluminescent bays. In Mosquito Bay in Puerto Rico, Vaadhoo Island in the Maldives, and a few other locations worldwide, the concentration of dinoflagellates is high enough that any movement in the water — a wave, a fish, a swimmer — causes a flash of blue-green light. The breaking waves glow. A hand drawn through the water leaves a trail of light. Children who swim in these bays often say they feel like they are swimming in the universe. They are not wrong — the same chemistry that lights the ocean also blinks in the firefly field in your grandfather's village.

The deepest bioluminescence has been recorded at depths of over 4,000 meters — in the hadal zone, where pressures are over 400 times atmospheric pressure and temperatures are just above freezing. Life not only survives there — it lights itself. It makes its own stars in the deepest dark.

In India, the phenomenon has a cultural dimension. The beaches of certain Andaman and Nicobar islands light up blue-green at night when the waves disturb the dinoflagellates. These were known to indigenous communities for centuries, woven into stories about the sea's living nature. Scientific documentation of these sites is still incomplete — the ocean's bioluminescent ecology in Indian waters is a relatively unexplored frontier.

What bioluminescence ultimately shows us is that the darkness we call darkness is our limitation, not nature's. The ocean at night is full of light — just light in frequencies and patterns that our evolved eyes weren't built to see continuously. The universe is stranger and richer than the portion of it we happen to be able to perceive.`,
    wonder: 'The "Milky Sea" phenomenon — vast patches of ocean glowing a steady blue-white at night — was considered sailors\' legend until confirmed by satellite imagery in 1995. A single Milky Sea event can cover 15,000 square kilometers and be visible from space.',
  },
];

export default function AranyaPage() {
  const dayOfYear = getDayOfYear();
  const featured = NATURE_FEATURES[dayOfYear % NATURE_FEATURES.length];
  const [selected, setSelected] = useState(featured);
  const [showFull, setShowFull] = useState(false);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Nature Room</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>अरण्य — Aranya</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            The natural world is not a backdrop to human life. It is the text. We are the footnotes.
          </p>
        </motion.div>

        {/* Feature selector */}
        <div className="flex gap-2 flex-wrap">
          {NATURE_FEATURES.map((f, i) => (
            <button
              key={f.id}
              onClick={() => { setSelected(f); setShowFull(false); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === f.id ? '#4A7C59' : 'var(--bg-tertiary)',
                color: selected.id === f.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % NATURE_FEATURES.length ? '2px solid #4A7C59' : '1px solid var(--border-default)',
              }}
            >
              {f.category}{i === dayOfYear % NATURE_FEATURES.length ? ' • Today' : ''}
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
            {/* Image + intro */}
            <div className="card-base overflow-hidden">
              <div className="relative" style={{ paddingBottom: '52%', background: 'var(--bg-tertiary)' }}>
                <img
                  src={selected.imageUrl}
                  alt={selected.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7BC87B' }}>{selected.category}</span>
                  <h2 className="font-serif text-2xl text-white mt-1">{selected.title}</h2>
                  <p className="font-devanagari text-sm text-white/60">{selected.titleHindi}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {selected.intro}
                </p>
              </div>
            </div>

            {/* Full content */}
            <div className="card-base p-6">
              <div className="space-y-4">
                {(showFull ? selected.fullContent : selected.fullContent.split('\n\n').slice(0, 3).join('\n\n')).split('\n\n').map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                    {para}
                  </p>
                ))}
              </div>
              {!showFull && (
                <div className="text-center pt-5 border-t mt-4" style={{ borderColor: 'var(--border-default)' }}>
                  <button onClick={() => setShowFull(true)} className="px-6 py-2.5 rounded-full text-sm font-medium" style={{ background: '#4A7C59', color: 'white' }}>
                    Read Full Story →
                  </button>
                </div>
              )}
            </div>

            {/* Wonder fact */}
            <div className="card-base p-5" style={{ background: 'color-mix(in srgb, #4A7C59 8%, var(--bg-secondary))', borderColor: '#4A7C59', border: '1px solid' }}>
              <p className="section-label mb-2" style={{ color: '#4A7C59' }}>The Wonder</p>
              <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {selected.wonder}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
