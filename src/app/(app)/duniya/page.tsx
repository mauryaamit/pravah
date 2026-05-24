'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const WORLD_STORIES = [
  {
    id: 'bhutan-gnp',
    headline: 'The Country That Measures Happiness Instead of GDP',
    region: 'South Asia · Bhutan',
    depth: 'deep',
    summary: 'Since 1972, Bhutan has used Gross National Happiness instead of GDP as its primary development metric. What has this meant in practice - and what can the world learn from it?',
    content: `In 1972, the newly crowned 16-year-old King Jigme Singye Wangchuck of Bhutan made an offhand remark to a journalist that would reshape how a generation of development economists thought about national progress. Asked about Bhutan's GDP, the young king said: "Gross National Happiness is more important than Gross National Product."

What began as an aphorism became, over the following decades, a serious governance philosophy. Bhutan developed a Gross National Happiness (GNH) index with nine domains: living standards, health, education, governance, ecological diversity, time use, psychological wellbeing, cultural resilience, and community vitality. Every few years, the government surveys tens of thousands of Bhutanese citizens across all these dimensions. Policies are evaluated not just by their economic efficiency but by their GNH impact.

The results are genuinely interesting. Bhutan has maintained one of the highest forest cover percentages in Asia (over 70%) while achieving significant economic development. It is the world's only carbon-negative country - its forests absorb more carbon than the country emits. It has a functioning constitutional monarchy with high citizen satisfaction ratings. It graduates more university students per capita than many of its neighbors.

But Bhutan is not paradise. Rural poverty remains significant. Access to healthcare and education in remote mountainous regions is limited. The Lhotshampa crisis of the late 1980s - in which tens of thousands of ethnic Nepali Bhutanese were expelled from the country in a process that the UN and human rights organizations criticized as ethnic cleansing - is a dark chapter that GNH rhetoric has sometimes obscured. A happiness metric that doesn't measure the happiness of expelled citizens is incomplete.

What Bhutan demonstrates, more than any simple lesson, is that the metrics a society uses to measure progress determine what it optimizes for. If you measure GDP, you get more GDP - often at significant cost to forests, mental health, social cohesion, and time. If you measure a broader conception of wellbeing, you at least create the space for different choices.

The World Happiness Report, published annually by the UN, uses a methodology influenced partly by Bhutan's GNH approach. Its findings consistently show that the happiest countries are not the richest, but the ones with high social trust, low corruption, strong safety nets, and freedom. Nordic countries dominate. The United States, despite its wealth, ranks in the mid-teens. India ranks around 126. These rankings are imperfect but they point to something real: beyond a threshold of material sufficiency, more money does not buy more happiness. What does is community, meaning, and agency.

The deeper question Bhutan's experiment raises is philosophical: what is an economy for? The conventional answer is growth - more production, more consumption, higher GDP. The Bhutanese answer is different: the economy is an instrument for human flourishing, and flourishing is not the same as consumption. This is not a new idea - Aristotle's eudaimonia (flourishing, the good life) is precisely not about pleasure or wealth but about the full exercise of human capacities in a community. Bhutan has tried to build a state around something like this ancient insight.`,
  },
  {
    id: 'ocean-cleanup',
    headline: 'The 18-Year-Old Who Decided to Clean the Ocean',
    region: 'Netherlands / Pacific',
    depth: 'story',
    summary: 'In 2011, Boyan Slat was 16 and on a diving holiday in Greece when he noticed more plastic bags than fish. At 18, he gave a TED talk. At 20, he founded The Ocean Cleanup. Today, it has removed thousands of tons of plastic.',
    content: `In 2011, during a diving holiday in Greece, 16-year-old Boyan Slat noticed that he was swimming through more plastic bags than fish. He came back to the surface and had a question that most divers have and most leave behind: why can't we just clean it up?

He took that question seriously. He spent his high school months researching ocean plastic - where it came from, how it concentrated, why previous cleanup attempts had failed (they were all too slow, too expensive, or physically impossible to scale). By 18, he had developed a concept: instead of using ships and nets to chase plastic through the ocean (which would take 79,000 years and cost an impossible amount), use the ocean's own currents to concentrate and deliver the plastic to a fixed structure. Passively. For free.

He presented this at a TEDx conference in Delft when he was 18. The talk went viral. He dropped out of his aerospace engineering degree to pursue it. At 20, he founded The Ocean Cleanup, a nonprofit based in Rotterdam.

The technical challenges were extraordinary. The Great Pacific Garbage Patch - a concentration of marine plastic roughly twice the size of France - is not a solid mass of floating bottles. It is a diffuse soup of micro and macro plastic fragments, distributed through tens of thousands of square kilometers at varying depths. Any cleanup device had to be able to collect efficiently at scale, survive storms, not harm marine life, and be retrievable for processing.

The first design failed. It was a fixed boom system that turned out to concentrate the wrong things and lose the plastic it caught. Slat and his team redesigned, tested, and redesigned again. By 2021, the system called System 002 ("Jenny") was working: a U-shaped barrier nearly 800 meters long, towed slowly by two ships, with a "catch" system at the bottom that accumulates plastic without a seabed anchor, allowing it to be deployed in the open ocean.

In 2022 and 2023, The Ocean Cleanup extracted thousands of tonnes of plastic from the Pacific Garbage Patch. The plastic is processed, verified as recyclable, and used to make consumer goods (sunglasses, skateboards, car parts) that are sold to fund further operations - a circular economy model.

In parallel, The Ocean Cleanup deployed Interceptor systems on the world's most polluted rivers - the Mekong, the Cuyahua, the Solo, others - to capture plastic before it reaches the ocean. An estimated 80% of ocean plastic arrives via rivers. Stopping the flow at source is as important as cleaning the accumulation.

Slat's story raises a question that is more important than the technical achievement: what happens when someone takes a problem seriously that everyone else treats as too big? The ocean plastic problem existed before Slat noticed it. Scientists were studying it. Governments were acknowledging it. But the shared assumption was that it was too large to address directly. Slat treated that assumption as a hypothesis to test, not a fact to accept.

The lesson is not that one person can always change the world alone. It is that the question "why can't we just...?" - followed by serious, sustained work rather than the usual dismissal - can open possibilities that apparent scale makes invisible.`,
  },
  {
    id: 'dark-sky',
    headline: 'The Quiet War for the Night Sky',
    region: 'Global',
    depth: 'environmental',
    summary: 'Light pollution has erased the Milky Way from view for more than a third of humanity. A growing movement of "dark sky" communities is fighting to reclaim the night - not just for stargazing, but for the health of all living things.',
    content: `In the pre-industrial world, everyone could see the Milky Way. On a clear night far from any settlement, you would see a river of light - 100 billion stars forming a band across the entire sky, so bright it cast faint shadows. This was the sky of Galileo, of Copernicus, of every astronomer who identified constellations and told stories by them for ten thousand years. It is still visible from a few places on Earth. Most humans will never see it.

Light pollution - the brightening of the night sky by artificial light - has erased the Milky Way for more than a third of humanity, including 80% of North Americans, 60% of Europeans, and large proportions of people in densely populated South and East Asia. Many children growing up in cities today have never seen a star-filled sky. The night sky as a cultural and experiential resource - something that shaped human imagination, navigation, agriculture, and spiritual life for all of recorded history - has been effectively destroyed for most of the human population in two generations.

The ecological consequences are severe. An estimated 450 species of birds migrate at night, using stars for navigation. Artificial light disorients them - millions die each year from flying into illuminated glass buildings. Sea turtle hatchlings, which instinctively move toward the brightest light (historically: the moon reflected on the ocean), now move toward streetlights and die on roads. Insects, which constitute a large fraction of Earth's biomass and perform essential ecological functions (pollination, decomposition, food for other species), are disrupted and killed in vast numbers by artificial light. The insect population decline in illuminated areas is one of the drivers of what ecologists call the "insect apocalypse."

Human health is also affected. Human circadian rhythms evolved in a world of stark contrast between day darkness and night brightness. Artificial light at night - particularly the blue-wavelength LED light now dominant - suppresses melatonin production and disrupts sleep cycles. Studies link chronic exposure to light at night with increased risks of cancer, obesity, depression, and cardiovascular disease. The night, for most human history, was genuinely dark. Our bodies miss it.

The dark sky movement is working to reclaim this. The International Dark-Sky Association (IDA) certifies "Dark Sky Places" - parks, reserves, and communities that commit to lighting standards that minimize sky glow. There are now over 200 certified Dark Sky Places across 22 countries. The first in South Asia is the Pench Tiger Reserve in Madhya Pradesh, India, certified in 2021.

The physics of light pollution is actually hopeful: it is entirely reversible. Unlike carbon dioxide in the atmosphere or plastic in the ocean, artificial light pollution disappears immediately when the lights are turned off or shielded. Communities that have adopted dark-sky-compliant lighting - fully shielded fixtures that direct light downward, warm-wavelength LEDs rather than blue, and motion sensors to reduce unnecessary illumination - have dramatically reduced their sky glow within months.

What the dark sky movement ultimately argues is that darkness is not the absence of something. It is a resource - for ecological health, for human wellbeing, for the experience of our place in the cosmos. The starry sky that inspired Copernicus and Galileo and every astronomer before them, that told sailors where they were and farmers when to plant, that gave every culture its mythology of the heavens - this is still there, above the light dome of every city, waiting. We just need to be quiet enough to see it.`,
  },
];

export default function DuniyaPage() {
  const dayOfYear = getDayOfYear();
  const [selected, setSelected] = useState(WORLD_STORIES[dayOfYear % WORLD_STORIES.length]);
  const [showFull, setShowFull] = useState(false);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">World Stories</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>दुनिया - Duniya</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Three world stories. Explained deeply. Not headlines - understanding.
          </p>
        </motion.div>

        <div className="flex gap-2 flex-wrap">
          {WORLD_STORIES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setSelected(s); setShowFull(false); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === s.id ? '#4A7C59' : 'var(--bg-tertiary)',
                color: selected.id === s.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % WORLD_STORIES.length ? '2px solid #4A7C59' : '1px solid var(--border-default)',
              }}
            >
              Story {i + 1}{i === dayOfYear % WORLD_STORIES.length ? ' • Today' : ''}
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
            <div className="card-base p-6 space-y-3" style={{ background: 'color-mix(in srgb, #4A7C59 5%, var(--bg-secondary))' }}>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>{selected.region}</span>
              </div>
              <h2 className="font-serif text-xl leading-tight" style={{ color: 'var(--text-primary)' }}>{selected.headline}</h2>
              <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{selected.summary}</p>
            </div>

            <div className="card-base p-6 space-y-4">
              {(showFull ? selected.content : selected.content.split('\n\n').slice(0, 3).join('\n\n')).split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>{para}</p>
              ))}
              {!showFull && (
                <div className="text-center pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  <button onClick={() => setShowFull(true)} className="px-6 py-2.5 rounded-full text-sm font-medium" style={{ background: '#4A7C59', color: 'white' }}>
                    Read the Full Story →
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
