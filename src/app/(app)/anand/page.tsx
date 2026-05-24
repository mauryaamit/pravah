'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';

type JoyCategory = 'art' | 'humor' | 'games' | 'play';

const ART_PIECES = [
  {
    id: 'starry-night',
    title: 'The Starry Night',
    artist: 'Vincent van Gogh',
    year: '1889',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    story: `Vincent van Gogh painted The Starry Night in June 1889, while he was voluntarily committed to the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, a year before his death. He painted it from memory and imagination — the village in the painting is not Saint-Rémy but an idealized version of his childhood village in the Netherlands. The church spire is characteristically Dutch, not French. He was painting home while confined far from it.

The painting was not considered his masterpiece during his lifetime. Van Gogh preferred other works. He wrote to his brother Theo that the starry night canvas was a "failure." He died believing his work had value but not knowing the extent of its impact. The Starry Night was sold after his death, passed through several collections, and arrived at the Museum of Modern Art in New York in 1941, where it has been since.

The painting's extraordinary quality comes from several sources. The night sky is not representational — van Gogh took liberties that are essentially expressionist: the stars have corona-like halos, the Milky Way swirls in waves like the sea, a crescent moon glows like a sun. The visual rhythm is relentless and alive. Every part of the sky is moving — not chaotically but in vast, organized flows.

What van Gogh painted was not the appearance of the night sky but the feeling of it: the sense that the sky is not a static backdrop but a dynamic, living, breathing presence. Astronomical researchers have noted that the swirling patterns in The Starry Night correspond to turbulent fluid dynamics — the same mathematical patterns that describe atmospheric turbulence in physics. Whether van Gogh consciously understood this mathematics is irrelevant. He felt it accurately enough to paint it.

There is something deeply poignant about The Starry Night's history: made by a man in an asylum, depicting a village from memory, dismissed by its own creator, now perhaps the most recognized painting in history. Van Gogh sold one painting in his lifetime. He wrote 800 letters to his brother documenting his psychology, his technique, and his persistent hope that the work mattered. He was right. He just didn't live to know it.`,
  },
  {
    id: 'hokusai',
    title: 'The Great Wave off Kanagawa',
    artist: 'Katsushika Hokusai',
    year: 'c. 1831',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/800px-The_Great_Wave_off_Kanagawa.jpg',
    story: `Katsushika Hokusai was 70 years old when he published The Great Wave off Kanagawa as part of his series "Thirty-six Views of Mount Fuji." He had been a printmaker for over 50 years by that point — he had spent his entire adult life making images. And yet the works for which he is remembered worldwide were made in his seventies and eighties.

He wrote, at age 75: "Since the age of six, I have had a mania for drawing the forms of things. By the time I was fifty, I had published an infinity of designs, but all I produced before the age of seventy is not worth taking into account. At the age of seventy-three I partly understood the structure of animals, plants, birds, fishes, and insects. Consequently when I am eighty I shall have made still more progress; at ninety I shall have penetrated to the essence of things; at one hundred I shall have reached a magnificent stage; and when I am one hundred and ten, everything I do, be it a dot or a line, will be alive." He died at 88.

The Great Wave is deceptive in its apparent simplicity. It is a woodblock print — made from carved wooden blocks inked separately and applied to paper in multiple passes. The blue comes from Prussian Blue, a synthetic pigment that had recently arrived in Japan from Europe and which Hokusai used with extraordinary skill. The color range in ukiyo-e printing was limited; working within those constraints, Hokusai created a composition that feels vast.

Look at the structure: The great wave in the foreground is poised at the precise moment before it crashes — a frozen instant of maximum tension. Mount Fuji, serene and distant, appears in the valley between the wave's claws. The boats are tiny, nearly swallowed. The whole composition is about scale — the immensity of nature against the fragility of human endeavor — but it is not pessimistic. The boats are still afloat. Fuji is still serene. The wave is enormous, but it is also temporary. It will break and recede.

The image has been referenced, parodied, reinterpreted, and reproduced more than almost any other work of art. It appears in Debussy's score for La Mer. It appears in countless album covers, advertisements, tattoos, and cultural references across every medium. What makes it so universally legible is what makes all great art universally legible: it captures something true about a human experience — in this case, the experience of being small in the presence of something immense — with perfect visual economy.`,
  },
];

const HUMOR_PIECES = [
  {
    title: 'The Absurdity of Job Interviews',
    content: `A job interview is a ritual in which two parties simultaneously pretend to be what they are not, hoping to be chosen by the other for reasons neither can fully articulate.

The interviewer, who probably spent ten minutes glancing at your resume, asks: "Tell me about yourself." This is a request for you to summarize your entire human existence in two minutes in a way that makes you sound both competent and humble, ambitious and grounded, a team player and an independent thinker. No answer is correct. Any answer can be wrong.

You are asked where you see yourself in five years. If you say "in this role, having grown significantly," you sound ambitious. If you say "in your role," you sound threatening. If you say "I don't know, I believe in living in the present," you will not get the job.

You are asked about your greatest weakness. This is a question designed to see if you will answer honestly (disqualifying) or give a disguised strength ("I work too hard," "I care too much") that everyone in the room knows is a disguised strength. The correct answer is to give a real weakness that you have been meaningfully working on improving. Almost no one gives this answer.

You leave the interview not knowing if you performed well because the criteria for "performing well" are not disclosed. You will wait for an email that says "we have decided to move forward with other candidates" or (rarely) "we'd like to invite you to the next round," at which point you will do the whole thing again.

The entire process was designed to be more efficient than random selection. Research consistently suggests it is not much more efficient than random selection. And yet we continue, ritualistically, because the ritual feels like rigor.`,
  },
  {
    title: 'The Optimism of Recipes',
    content: `Every recipe is written by an optimist. "This takes 30 minutes," says the recipe. The person who wrote this has never made this dish in a real kitchen, on a weeknight, while also responding to a text message, without the specific spice the recipe calls for, after discovering that one of their burners doesn't work properly.

"Finely dice the onion." The onion is round, slippery, tear-inducing, and entirely opposed to being finely diced. The recipe assumes you have a sharp knife, a proper cutting board, and the spatial reasoning of a surgeon. You have a knife you received as a gift in 2018 and a cutting board that has developed a suspicious wobble.

"Sauté until golden brown." For how long? What does golden brown look like when you're also reading the next step? How golden? The answer is always "a bit longer than you think, then suddenly too long."

"Season to taste." This instruction, appearing at the end of every recipe, is the culinary equivalent of a professor's comment "good, but could be developed further." It means: you should know by now what this is supposed to taste like, and whether it does, and what to do if it doesn't. You don't. The recipe has prepared you for everything except this.

"Rest for 10 minutes before serving." This is the recipe's way of testing your commitment. You have been cooking for 45 minutes and you are hungry and the food smells ready. The recipe wants you to wait. The recipe is right. You will not wait. The meat will be dry. The recipe will feel vindicated.

And yet: the dish is edible. Sometimes it is good. Occasionally it is excellent. The recipe's optimism, it turns out, is not misplaced — it is aspirational. It describes what the dish could be, in the hands of the version of you who has the time, the equipment, and the patience. You're getting there.`,
  },
];

const MICRO_GAMES = [
  { title: 'Two Truths and a Lie — About the Universe', items: ['The Great Wall of China is not visible from space with the naked eye.', 'Honey never expires — archaeologists have found 3,000-year-old honey in Egyptian tombs that is still edible.', 'Bananas are technically berries, but strawberries are not.', '(All three are true — this was a trick. All three are genuinely true facts that most people don\'t believe.)'] },
  { title: 'The 60-Second Story Game', items: ['Write a complete story in exactly 6 words. Hemingway was once challenged to write a six-word story and produced: "For sale: baby shoes, never worn." That\'s an entire tragedy in six words. Try to write your own. Right now. Give yourself 60 seconds.'] },
  { title: 'The Unfair Comparison', items: ['What if dogs were in charge of something specific — and cats were in charge of something else? Dogs: public transport timetables (enthusiastic but chaotic). Cats: international diplomacy (precise, unpredictable, mostly ignores everyone). What would work? What wouldn\'t? This is actually a useful management exercise disguised as a joke.'] },
];

export default function AnandPage() {
  const dayOfYear = getDayOfYear();
  const [activeCategory, setActiveCategory] = useState<JoyCategory>('art');
  const [selectedArt, setSelectedArt] = useState(ART_PIECES[dayOfYear % ART_PIECES.length]);
  const [showArtFull, setShowArtFull] = useState(false);
  const [expandedHumor, setExpandedHumor] = useState<number | null>(0);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Joy Room</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>आनंद — Anand</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Joy is not frivolous. It is essential. Art, humor, games, and play — the brain needs all of them.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap">
          {([
            { id: 'art', label: '🎨 Art Stories' },
            { id: 'humor', label: '😄 Humor' },
            { id: 'games', label: '🎮 Play' },
          ] as const).map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeCategory === cat.id ? '#E8A87C' : 'var(--bg-tertiary)',
                color: activeCategory === cat.id ? 'white' : 'var(--text-muted)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Art section */}
        <AnimatePresence mode="wait">
          {activeCategory === 'art' && (
            <motion.div
              key="art"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-5"
            >
              <div className="flex gap-2">
                {ART_PIECES.map((a, i) => (
                  <button
                    key={a.id}
                    onClick={() => { setSelectedArt(a); setShowArtFull(false); }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                    style={{
                      background: selectedArt.id === a.id ? '#E8A87C' : 'var(--bg-tertiary)',
                      color: selectedArt.id === a.id ? 'white' : 'var(--text-muted)',
                      border: i === dayOfYear % ART_PIECES.length ? '2px solid #E8A87C' : '1px solid var(--border-default)',
                    }}
                  >
                    {a.artist.split(' ').slice(-1)[0]}{i === dayOfYear % ART_PIECES.length ? ' • Today' : ''}
                  </button>
                ))}
              </div>

              <div className="card-base overflow-hidden">
                <div className="relative" style={{ paddingBottom: '55%', background: 'var(--bg-tertiary)' }}>
                  <img
                    src={selectedArt.imageUrl}
                    alt={selectedArt.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                    <div>
                      <h2 className="font-serif text-xl text-white">{selectedArt.title}</h2>
                      <p className="text-sm text-white/70">{selectedArt.artist}, {selectedArt.year}</p>
                    </div>
                    <div onClick={e => e.stopPropagation()} className="relative z-20">
                      <ReadAloudButton
                        text={`${selectedArt.title}. By ${selectedArt.artist}. ${selectedArt.story}`}
                        lang="en-IN"
                        size="sm"
                        variant="pill"
                        label="Listen Story"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {(showArtFull ? selectedArt.story : selectedArt.story.split('\n\n').slice(0, 2).join('\n\n')).split('\n\n').map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>{para}</p>
                  ))}
                  {!showArtFull && (
                    <button onClick={() => setShowArtFull(true)} className="px-5 py-2 rounded-full text-sm font-medium" style={{ background: '#E8A87C', color: 'white' }}>
                      Read the Full Story →
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeCategory === 'humor' && (
            <motion.div
              key="humor"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Wit is intelligence with warmth. These are essays in lightness — about the small absurdities that make up a life.</p>
              {HUMOR_PIECES.map((piece, i) => (
                <div key={i} className="card-base overflow-hidden">
                  <div className="w-full relative">
                    <div className="flex items-center justify-between p-5">
                      <button
                        className="flex-1 text-left font-serif text-base"
                        style={{ color: 'var(--text-primary)' }}
                        onClick={() => setExpandedHumor(expandedHumor === i ? null : i)}
                      >
                        {piece.title}
                      </button>
                      
                      <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
                        <ReadAloudButton
                          text={`${piece.title}. ${piece.content}`}
                          lang="en-IN"
                          size="sm"
                        />
                        <button
                          onClick={() => setExpandedHumor(expandedHumor === i ? null : i)}
                          className="p-1 rounded-full hover:bg-secondary transition-all"
                        >
                          <motion.div animate={{ rotate: expandedHumor === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </motion.div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedHumor === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-5 pb-5 border-t pt-4 space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                          {piece.content.split('\n\n').map((para, j) => (
                            <p key={j} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>{para}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}

          {activeCategory === 'games' && (
            <motion.div
              key="games"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Play is not the opposite of seriousness. It is its purest form — engagement without anxiety about outcome.</p>
              {MICRO_GAMES.map((game, i) => (
                <div key={i} className="card-base p-5 space-y-3">
                  <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{game.title}</h3>
                  {game.items.map((item, j) => (
                    <div key={j} className="p-3 rounded-xl text-sm leading-relaxed" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                      {item}
                    </div>
                  ))}
                </div>
              ))}

              {/* Daily delight */}
              <div className="card-base p-5 text-center space-y-3" style={{ background: 'color-mix(in srgb, #E8A87C 6%, var(--bg-secondary))' }}>
                <p className="section-label" style={{ color: '#E8A87C' }}>Today's Micro-Challenge</p>
                <p className="font-serif text-base" style={{ color: 'var(--text-primary)' }}>
                  Write a haiku about your commute, your lunch, or your office chair. Haiku: 5 syllables / 7 syllables / 5 syllables. Timer: 3 minutes. Go.
                </p>
                <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
                  No one will read it. That's why it works.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
