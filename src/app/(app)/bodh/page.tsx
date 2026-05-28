'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';

const MENTAL_MODELS = [
  {
    id: 'first-principles',
    name: 'First Principles Thinking',
    origin: 'Aristotle → Descartes → Elon Musk',
    tagline: 'Break everything down to its fundamental truths. Then build up from there.',
    core: `First principles thinking is the practice of questioning every assumption until you reach the bedrock - the facts that cannot be reduced further. It is the opposite of reasoning by analogy (doing what others do because it works) and the most powerful intellectual tool for innovation.

Aristotle called them "first principles" - the foundational propositions from which all other knowledge is derived. Descartes arrived at his famous "cogito ergo sum" (I think, therefore I am) by stripping away every assumption he could doubt until he reached something he couldn't: the fact of his own thinking.

Elon Musk famously applied this to rocket manufacturing. When he wanted to build rockets, everyone said it was impossibly expensive. He asked: what are rockets actually made of? Aerospace-grade aluminium, titanium, copper, carbon fibre. What do those materials cost as commodities? He found that the raw materials cost about 2% of typical rocket prices. The remaining 98% was markup, tradition, manufacturing inefficiency, and the fact that no one had questioned the process in decades. SpaceX built its own rockets for a fraction of what NASA paid suppliers.

The difficulty of first principles thinking is psychological, not logical. We are naturally lazy thinkers who rely on analogy because it's fast and usually good enough. "We've always done it this way" is a statement of social coordination, not of truth. Breaking out of it requires genuine intellectual courage: the willingness to be temporarily lost in the space between "the old way doesn't work" and "I've found the new way."

The process: (1) Identify the problem you're trying to solve. (2) List every assumption embedded in current approaches. (3) For each assumption, ask: is this necessarily true, or is it a convention? (4) Strip away the conventions until you're left with constraints that are actually physical, mathematical, or logical - not just traditional. (5) Build up a solution from those remaining constraints.`,
    example: `Richard Feynman used first principles thinking in his approach to physics education. When asked to explain magnetic repulsion to a layperson who asked "But why do magnets repel?" - he gave a now-famous answer: there is no deeper "why." Magnetic repulsion is itself a first principle. We cannot explain it in terms of something more fundamental without using concepts (like energy) that themselves require explanation, in infinite regress.

This is the other side of first principles thinking: knowing when you've reached bedrock. The tool is not just for building - it's for recognizing when you've stopped. Feynman was comfortable saying "I don't know" and "that's where the explanation stops." Most people are not.`,
    dailyApplication: `Today: pick one belief you hold strongly - about your career, your relationships, your capabilities. Ask yourself: is this belief actually true, or is it an assumption I inherited? What would I do differently if I questioned it completely?`,
    misconceptions: `First principles thinking is NOT the same as reinventing the wheel. Most of the time, inherited solutions are correct - the wheel is round because that's the optimal shape for rolling. First principles is the tool you use when something isn't working and you need to understand why. Apply it selectively, not universally.`,
    related: ['Occam\'s Razor', 'Inversion', 'The Map is Not the Territory'],
  },
  {
    id: 'inversion',
    name: 'Inversion',
    origin: 'Stoic Philosophy → Carl Jacobi → Charlie Munger',
    tagline: 'To solve a problem, ask: what would make it worse? Then avoid those things.',
    core: `Inversion is the practice of thinking about problems backwards. Instead of asking "how do I succeed?" ask "how do I ensure failure?" Instead of asking "how do I make customers happy?" ask "what would make customers furious?" Then don't do those things.

The Stoic philosophers practiced a version of this called premeditatio malorum - the premeditation of evils. Marcus Aurelius regularly imagined the worst outcomes of his plans, not to depress himself, but to prepare himself and to clarify what actually mattered. If the worst happened and he could endure it, he could proceed without fear.

Charlie Munger (Warren Buffett's partner) attributed much of his investment success to inversion. "All I want to know is where I'm going to die, so I'll never go there," he said. When evaluating an investment, he would ask not "what makes this succeed?" but "what would make this fail absolutely?" The list of failure modes is often shorter and more actionable than the list of success factors.

The German mathematician Carl Jacobi gave the instruction "man muss immer umkehren" - always invert. He applied it to mathematical problems: if you can't solve a problem directly, reformulate it as its inverse.

Why does inversion work? Because our minds are better at identifying failure than success. Evolution wired us to notice threats more sharply than opportunities. Inversion leverages this asymmetry: we see the pitfalls more clearly when we look for them directly than when we're focused on the destination.`,
    example: `Jeff Bezos used inversion when designing Amazon's culture. Rather than asking "what do customers want?" he asked "what do customers never want?" He identified: they never want to wait long for delivery, never want high prices, never want things to be out of stock, never want complicated returns. Amazon then built systems specifically to eliminate these. The result wasn't a company optimized for what customers wanted - it was a company that removed what customers hated. The difference sounds subtle but drives everything.`,
    dailyApplication: `Today: take a goal you're pursuing. Write down five things that would guarantee you fail at it. Are you doing any of them? Are you avoiding all of them? Often the failure list is more actionable than the success list.`,
    misconceptions: `Inversion is not pessimism. Pessimism says "it will fail anyway." Inversion says "let's identify specifically how it would fail, so we can prevent that." The goal is still success - the method is to approach it through the back door.`,
    related: ['Second-Order Thinking', 'First Principles Thinking', 'Survivorship Bias'],
  },
  {
    id: 'map-territory',
    name: 'The Map is Not the Territory',
    origin: 'Alfred Korzybski (1933) - General Semantics',
    tagline: 'Your model of reality is not reality. No matter how good the map, the terrain will surprise you.',
    core: `In 1933, the Polish-American philosopher Alfred Korzybski wrote "A map is not the territory it represents, but, if correct, it has a similar structure to the territory, which accounts for its usefulness." This deceptively simple sentence has profound implications for how we think about knowledge, models, language, and decisions.

A map is a representation of the territory - a simplified, selective model designed for a particular purpose. A street map shows roads but not contour lines. A topographical map shows elevation but not road names. A political map shows borders but not vegetation. Each map is useful for its purpose and misleading for others. No map shows everything.

The same is true of every mental model, every theory, every worldview. Your understanding of your partner is a map - constructed from observations, assumptions, projections, and stories. It is useful, but it is not them. They will always exceed your map. The moment you stop being curious and start being certain you understand them completely, your map has replaced the territory.

This is why experts are sometimes the worst at seeing what beginners see. Experts have very good maps - which means they also have very good assumptions about where the territory is not. When the territory changes, beginners notice. Experts argue with the change.

George Box, the statistician, put it perfectly: "All models are wrong, but some are useful." The goal is not to find a perfect map - there is none. The goal is to use the best available map while remaining aware of its limitations, and to update it quickly when evidence contradicts it.`,
    example: `In medicine, the model of diseases caused by "bad air" (miasma theory) was a useful map for thousands of years. It explained why diseases clustered in certain places (swamps, crowded cities). But it was wrong. When John Snow mapped cholera cases in London in 1854 and traced them to a contaminated water pump, he was using a better map - and because he was willing to question the miasma map, thousands of lives were saved.`,
    dailyApplication: `Today: identify one situation in your life where you might be confusing your map with the territory. Where are you certain about something that you haven't actually checked recently?`,
    misconceptions: `This principle does not mean "nothing is knowable" or "all models are equally wrong." Some maps are much better than others. The point is not relativism - it is epistemic humility. Hold your models firmly enough to act on them; loosely enough to update them.`,
    related: ['First Principles Thinking', 'Confirmation Bias', 'Occam\'s Razor'],
  },
  {
    id: 'second-order',
    name: 'Second-Order Thinking',
    origin: 'Howard Marks, Nassim Taleb, Systems Thinking',
    tagline: 'Ask not just "what happens?" but "then what happens?"',
    core: `First-order thinking is fast and simple: this action produces this result. Second-order thinking asks what the result of the result is. Third-order thinking follows the chain further still.

Howard Marks, the legendary investor, described second-order thinking as the core of contrarian investing. "First-level thinking says: 'It's a good company; let's buy the stock.' Second-level thinking says: 'It's a good company, but everyone thinks it's a good company, so it's not cheap enough. I'll pass.'" Most people stop at the first order. The second order is where the insight lives.

The difficulty is that second-order effects are often counterintuitive, delayed, and distributed across many actors. The classic example: rent control in cities. First order: rent control makes housing more affordable for current tenants. Second order: landlords, unable to profit from their properties, stop maintaining them or convert them to condos; developers stop building new rental units because returns are capped; the housing supply decreases; long-term housing becomes scarcer and more expensive. The policy that looks like it helps housing affordability makes it worse - in the second order.

This is why the road to hell is paved with good intentions: almost all genuinely harmful policies look good at the first-order level. The harm is in the second and third orders. The skill of thinking through those orders - despite their complexity and delay - is rare, valuable, and learnable.`,
    example: `The introduction of cane toads to Australia in 1935 to control the cane beetle. First-order thinking: cane toads eat beetles, beetles damage sugar cane, fewer beetles means more sugar cane. Second-order: cane toads have no natural predators in Australia, they breed explosively, they are toxic to the predators that would normally control pest populations, they outcompete native species. Today there are an estimated 200 million cane toads in Australia, devastating ecosystems across the continent. The original beetle problem remains largely unsolved.`,
    dailyApplication: `Today: take a decision you're considering. Write down what happens if it succeeds (first order). Then write down what happens as a result of that success (second order). Then a third. Do the second and third orders change your decision?`,
    misconceptions: `Second-order thinking does not mean paralysis. You cannot follow every chain of consequences to infinity. The skill is identifying which second and third-order effects are large enough to matter, and factoring them in - not thinking infinitely.`,
    related: ['Inversion', 'Systems Thinking', 'Unintended Consequences'],
  },
  {
    id: 'lindy',
    name: 'The Lindy Effect',
    origin: 'Nassim Nicholas Taleb - Antifragile (2012)',
    tagline: 'The older a non-perishable idea is, the longer it is likely to survive.',
    core: `The Lindy Effect, formalized by Nassim Taleb, states that for non-perishable things (ideas, books, technologies, institutions, practices), each additional period of survival indicates a longer expected remaining life. A book that has been in print for 100 years will likely remain in print for another 100 years. A book published yesterday might be forgotten by next month.

This is the opposite of how we think about perishable things (organisms, machines): the older a car, the more likely it is to fail. But for ideas and cultural artifacts, longevity is evidence of robustness. The Bible, Euclid's Elements, the Mahabharata, Shakespeare's plays - these have survived because they contain something that speaks to humans across radically different contexts. That cross-contextual resilience is exactly what we call wisdom.

The Lindy Effect has powerful practical implications. If you want to know what knowledge is worth acquiring, prioritize ideas that have survived for centuries over ideas that became popular last year. Greek philosophy, Indian logical systems (Nyaya), Buddhist epistemology, Stoic ethics - these have survived intellectual competition for 2,000+ years. That is strong evidence of their usefulness. The latest management theory, the newest diet trend, the hottest technology - these may be valuable, but they haven't proven their durability yet.

Taleb also uses the Lindy Effect to explain why grandmothers' advice is often better than experts' advice. Grandmothers survived by navigating the real world, with its full complexity and feedback loops, for decades. Their heuristics have been tested against reality. Expert advice is often based on models that have not been tested at scale.`,
    example: `Seneca's Epistulae Morales (Letters to Lucilius), written around 65 CE, contains advice about handling anxiety, mortality, the management of time, the relationship between wealth and happiness, and how to think about death. It is 2,000 years old and reads as if it were written last week for your specific situation. By the Lindy Effect, we should expect it to be readable and useful 2,000 years from now. Meanwhile, most self-help books published in 2010 are already out of print.`,
    dailyApplication: `Ask yourself: has the idea I'm about to act on been around for at least 10 years? 50? 100? The older it is, the more it has been tested against reality. Give it more weight than a newly minted trend.`,
    misconceptions: `The Lindy Effect applies to non-perishable things. It doesn't mean old is always better. It means that age is evidence of robustness, not that new things cannot be good. The newest smartphone is better than a 20-year-old phone. The Lindy Effect doesn't apply to technology - only to ideas, practices, and institutions.`,
    related: ['Via Negativa', 'Skin in the Game', 'Antifragility'],
  },
];

export default function BodhPage() {
  const dayOfYear = getDayOfYear();
  const todayModel = MENTAL_MODELS[dayOfYear % MENTAL_MODELS.length];
  const [expanded, setExpanded] = useState<string | null>(todayModel.id);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Mental Models</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>बोध - Bodh</h1>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Mental models are lenses that sharpen how you see. Each one, once understood, changes how you think forever.
          </p>
        </motion.div>

        {/* Today's model highlight */}
        <div className="card-base p-5 space-y-2 relative" style={{ border: '1px solid var(--accent-saffron)', background: 'color-mix(in srgb, var(--accent-saffron) 5%, var(--bg-secondary))' }}>
          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            <ReadAloudButton
              text={`${todayModel.name}. ${todayModel.tagline}. ${todayModel.core}`}
              lang="en-IN"
              size="sm"
            />
            <RevisitButton
              roomId="bodh"
              roomName="Bodh"
              contentTitle={todayModel.name}
              contentSummary={todayModel.tagline}
            />
            <SutraNoteButton
              roomId="bodh"
              roomName="Bodh"
              contentTitle={todayModel.name}
              className=""
            />
          </div>
          <p className="section-label">Today's Mental Model</p>
          <h2 className="font-serif text-xl pr-8" style={{ color: 'var(--text-primary)' }}>{todayModel.name}</h2>
          <p className="text-sm italic font-serif pr-8" style={{ color: 'var(--accent-saffron)' }}>"{todayModel.tagline}"</p>
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{todayModel.origin}</p>
        </div>

        {/* All models */}
        <motion.div variants={STAGGER_CONTAINER} initial="initial" animate="animate" className="space-y-3">
          {MENTAL_MODELS.map((model) => (
            <motion.div key={model.id} variants={STAGGER_ITEM} className="card-base overflow-hidden">
              <div className="w-full relative">
                <div className="flex items-start justify-between gap-3 p-5">
                  <button
                    className="flex-1 text-left space-y-1"
                    onClick={() => setExpanded(expanded === model.id ? null : model.id)}
                  >
                    <div>
                      <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>{model.name}</h3>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>{model.origin}</p>
                    </div>
                    <p className="text-sm font-serif italic pr-8" style={{ color: 'var(--accent-saffron)' }}>"{model.tagline}"</p>
                  </button>

                  <div className="flex items-center gap-2 flex-shrink-0 mt-1" onClick={e => e.stopPropagation()}>
                    <ReadAloudButton
                      text={`${model.name}. ${model.tagline}. ${model.core}`}
                      lang="en-IN"
                      size="sm"
                    />
                    <RevisitButton
                      roomId="bodh"
                      roomName="Bodh"
                      contentTitle={model.name}
                      contentSummary={model.tagline}
                    />
                    <SutraNoteButton
                      roomId="bodh"
                      roomName="Bodh"
                      contentTitle={model.name}
                      className=""
                    />
                    <button
                      onClick={() => setExpanded(expanded === model.id ? null : model.id)}
                      className="p-1 rounded-full hover:bg-secondary transition-all"
                    >
                      <motion.div animate={{ rotate: expanded === model.id ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </motion.div>
                    </button>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expanded === model.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t" style={{ borderColor: 'var(--border-default)' }}>
                      {[
                        { label: 'The Core Idea', content: model.core },
                        { label: 'Real-World Example', content: model.example },
                        { label: 'Try It Today', content: model.dailyApplication },
                        { label: 'Common Misconception', content: model.misconceptions },
                      ].map(section => (
                        <div key={section.label} className="px-5 py-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
                          <p className="section-label mb-2">{section.label}</p>
                          {section.content.split('\n\n').map((para, i) => (
                            <p key={i} className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                              {para}
                            </p>
                          ))}
                        </div>
                      ))}
                      <div className="px-5 py-4">
                        <p className="section-label mb-2">Related Models</p>
                        <div className="flex gap-2 flex-wrap">
                          {model.related.map(r => (
                            <span key={r} className="px-2.5 py-1 rounded-full text-xs" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center py-4">
          <p className="font-serif italic text-sm" style={{ color: 'var(--text-faint)' }}>
            A good mental model, once internalized, never leaves you. It changes the shape of how you think.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
