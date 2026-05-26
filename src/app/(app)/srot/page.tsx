'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import FocusMode from '@/components/shared/FocusMode';

const ARTICLES = [
  {
    id: 'slow-reading',
    title: 'The Art of Slow Reading',
    subtitle: 'How reading deeply rewires the brain - and why speed-reading destroys the point',
    readTime: '12 min',
    category: 'Mind & Practice',
    content: `There is a crisis in reading that rarely gets named directly. We read more than any previous generation - headlines, tweets, notifications, articles, newsletters, reports - and understand less. The problem is not quantity. It is depth. We have collectively mistaken information consumption for genuine reading.

Genuine reading is a physical act. Neuroscience has confirmed what literature lovers always suspected: when you read fiction describing someone running, the motor cortex activates. When you read a description of a smell, the olfactory cortex responds. Reading, at its deepest, is not passive reception - it is active simulation. The brain is rehearsing the experiences described, building models of minds and worlds that do not exist, practicing empathy and anticipation and moral reasoning.

This kind of reading requires time. It requires re-reading. It requires sitting with a sentence that you don't fully understand and letting it work on you rather than moving immediately to the next one. It requires what the French call "lecture lente" - slow reading.

The history of reading is instructive here. For most of human history, reading was out loud. Silent reading was unusual enough that when St. Augustine encountered his teacher Ambrose reading silently in 384 CE, he felt compelled to record the fact in his Confessions as a remarkable curiosity. Reading aloud - for yourself or for an audience - enforces slowness. You cannot skip. You cannot skim. You inhabit every word.

The shift to silent reading in the late medieval period is directly related to the explosion of private devotion and interior life in that era. When you read silently, you hear an inner voice - your own voice, but shaped by the author's words. You create an interior performance. The reading is happening inside you, and it changes you from the inside.

Speed reading - developed in the 1950s and turned into an industry by Evelyn Wood - promised to multiply reading rates without loss of comprehension. The research has never supported this promise. Studies consistently show that reading speed above approximately 400-500 words per minute comes at significant cost to comprehension and retention. What speed readers actually do is skim skillfully - they extract the gist. But the gist is not the book. The book is in the texture, the sentence rhythm, the particular choice of one word over another. Proust's sentences are not vehicles for a summary. They are the experience.

What changes when you read slowly? First, attention itself is trained. Slow reading is one of the most demanding forms of sustained attention available in ordinary life - it asks you to hold a fictional world in mind for hours, tracking dozens of characters, themes, and ideas. This trains the attentional circuits that are degraded by the constant interruptions of digital life.

Second, vocabulary deepens. When you encounter a word you don't know and stop to consider it from context rather than skipping it, you are building a richer, more three-dimensional vocabulary. You understand not just what the word means but how it behaves - what company it keeps, what weight it carries, what register it belongs to.

Third, emotional literacy expands. Literary fiction requires you to inhabit minds radically different from your own - the Victorian aristocrat, the enslaved woman, the child soldier, the person dying of cancer. Research by psychologists Keith Oatley and Raymond Mar has shown that reading fiction correlates with superior theory of mind - the ability to model other people's mental states. You become better at understanding people by practicing understanding characters.

Fourth, and perhaps most profoundly, slow reading creates a different relationship with time. In a world of instant everything, sitting with a book for two hours - letting time pass slowly, allowing a story to unfold at its own pace - is a practice of counter-cultural resistance. You are refusing the acceleration. You are insisting that some things cannot be compressed without being destroyed.

The writer Alan Jacobs, in his book "The Pleasures of Reading in an Age of Distraction," argues that we should read "whimsically" - following genuine interest and pleasure rather than obligation and improvement. This is not anti-intellectual; it is the recognition that the reading that changes you is the reading you actually do, not the reading you should do. Start with what delights you. Slowness will follow naturally, because you will not want it to end.

Practical advice for the slow reader: do not read with a device nearby. Notifications are incompatible with deep reading - not because they distract you occasionally, but because their possibility keeps your nervous system in a state of mild alert that is incompatible with the depth of absorption reading requires. Put the phone in another room. It is not a minor adjustment. It is the whole game.

Read at least some books more than once. The second reading of a great book reveals things the first reading could not, because the first reading established the framework that the second reading can now examine. When you re-read Hamlet knowing how it ends, you see the foreshadowing, the tragic irony, the moments of choice that look different when you know their consequences. Re-reading is not inefficiency. It is depth.

Finally, read aloud sometimes. Choose a poem, a passage, a paragraph, and read it aloud slowly, paying attention to the rhythm and the sound. Language, before it was visual, was oral. Much of its power is sonic - it was designed to be heard. When you read aloud, you restore this dimension, and the text opens differently.`,
  },
  {
    id: 'solitude',
    title: 'Why Solitude is Essential',
    subtitle: 'The neuroscience and history of being alone - and what we lose without it',
    readTime: '10 min',
    category: 'Inner Life',
    content: `We are afraid of being alone with ourselves. This fear - and it is a fear - has been confirmed experimentally. In a 2014 study published in Science, researchers at the University of Virginia found that people left alone in a room with nothing to do preferred to give themselves mild electric shocks rather than sit quietly with their thoughts. Some subjects administered over 190 shocks in 15 minutes. They chose physical pain over the discomfort of their own unoccupied minds.

This is remarkable. It suggests that we have become so habituated to external stimulation that the absence of it registers as something close to suffering. The smartphone, in this context, is not a convenience - it is an escape from the self. Every time you reach for your phone out of boredom or discomfort, you are choosing the electric shock over the silence.

And yet, across human history, every tradition that has thought deeply about how to live well has emphasized the necessity of solitude. The Desert Fathers of early Christianity went into the wilderness specifically to encounter themselves stripped of society's mediations. The Buddha's enlightenment came under a tree, alone, after years of practice. Thoreau went to Walden Pond to "live deliberately" - to reduce life to its essential elements and see what he found. Every major philosophical and spiritual tradition has its version of the retreat into solitude as the necessary precondition for wisdom.

What happens in the brain during genuine solitude? Neuroscience has begun to map this. The Default Mode Network (DMN) - sometimes called the "resting state" network - activates when external demands are reduced. This is the network associated with mind-wandering, self-reflection, perspective-taking, future planning, and creative insight. When you are constantly consuming - reading, listening, watching, scrolling - the DMN is suppressed. The constant input prevents the consolidation and integration that the brain naturally performs during idle time.

This is why insights come in the shower, on long walks, or in the moments just before sleep. The DMN has finally been given space to do its work. The "aha moment" is not a bolt from the blue - it is the completion of a process that required unoccupied time to run.

Research on creativity consistently points in the same direction: the most creative people have periods of solitude that they protect fiercely. Charles Darwin walked the "thinking path" at Down House for hours every day. Kafka wrote only at night, alone, when everyone else was asleep. Newton developed calculus during a plague year spent in isolation at his mother's house in Lincolnshire. The creative mind appears to need a kind of fallow period - times of no input - during which the work of integration and connection happens invisibly.

Solitude is also the space where self-knowledge develops. We know ourselves through reflection, and reflection requires distance from the constant performance of identity that social life demands. When you are always with others, you are always playing a role - parent, colleague, friend, expert, beginner. Solitude suspends the performance and allows the question: who am I when I am not performing?

This is uncomfortable precisely because the answer is often uncertain. We discover that the self is not the fixed, coherent thing we present to the world, but something more provisional, more multiple, more in process. Solitude forces this confrontation. Most people avoid it. The ones who do not tend to become more self-aware, more integrated, more genuinely present with others - because they are not confused about who they are when they are with others.

The writer Paul Tillich called solitude "the glory of being alone." He distinguished it from loneliness, which is "the pain of being alone." Solitude is chosen; loneliness is experienced as imposed. In solitude, you are with yourself and that feels sufficient. In loneliness, you are with yourself and that feels insufficient, a lack. The distinction matters enormously. The practice is learning to transform loneliness into solitude - to encounter the absence of others not as deprivation but as presence: full presence to oneself.

In the Indian tradition, the concept of viveka (discrimination, discernment) is cultivated in solitude. The Vedantic path requires periods of intense self-inquiry - "who am I? what is real?" - that cannot be conducted in the midst of social busyness. The ashram tradition - withdrawal from normal social life for a period of deep practice - is built on this recognition. Even in the householder traditions, the daily practice of meditation or prayer is a miniature solitude - a deliberate pause in the social flow.

Practical cultivation of solitude: begin small. Ten minutes a day without input - no music, no podcast, no phone - just walking, or sitting, or doing a simple physical task. Notice the discomfort. Notice what thoughts arise. Do not immediately reach for your phone when you feel bored or uncomfortable. Sit with the discomfort for another minute. Then another. This is not a minor practice. It may be the most important thing you can do for your own mind.`,
  },
  {
    id: 'consciousness',
    title: 'What is Consciousness?',
    subtitle: 'The hardest problem in science - and what Indian philosophy understood long before neuroscience',
    readTime: '14 min',
    category: 'Mind & Philosophy',
    content: `Consciousness is the most intimate fact of your existence and simultaneously the most mysterious. Right now, there is something it is like to be you - a particular, irreducible quality of experience: the redness of the red you see, the slight ache of yesterday's exercise, the faint background hum of your own thoughts. This "something it is like to be" - what philosophers call qualia or phenomenal consciousness - is what makes you a subject rather than a very complicated object.

The mystery is this: we have no idea how it works. We know that consciousness is produced by the brain. We know that damaging specific brain areas eliminates specific conscious experiences. We know that anesthetics that suppress certain neural processes eliminate consciousness. But we have absolutely no idea why or how any physical process - however complex - gives rise to subjective experience. This is what philosopher David Chalmers called the Hard Problem of Consciousness, and it has not advanced significantly in the three decades since he named it.

The Easy Problems (his term, slightly ironically) concern the functions of consciousness: how the brain integrates information, directs attention, controls behavior, distinguishes sleep from waking. These are difficult scientific problems, but they are in principle solvable by building better theories and doing better experiments. We understand them better every decade.

The Hard Problem asks something different: even if we explained every function of consciousness perfectly - even if we understood every neuron and every process - would we have explained why all this processing is accompanied by subjective experience? Why isn't it all happening "in the dark," without any felt quality? This question seems to resist the normal tools of science.

Several answers have been proposed. Physicalism (or materialism) says that consciousness is identical to brain processes - there is no further mystery once you understand the brain fully. The Hard Problem is an illusion produced by our confused use of concepts. Daniel Dennett is the most prominent defender of this view, arguing that qualia as we think of them don't exist - what we call the redness of red is just the brain's representation of red, and the sense that there is "something more" is an error.

Dualism - the view associated with Descartes - says that mind and matter are fundamentally different substances, and consciousness cannot be reduced to physical processes. This is intuitively appealing but creates the "interaction problem": how does a non-physical mind interact with a physical brain? No one has given a satisfying answer.

Panpsychism - the view that consciousness is a fundamental feature of the universe, present in some form in all matter - has been gaining unexpected credibility among philosophers of mind. Philip Goff, Galen Strawson, and others argue that if consciousness is irreducible to physical processes, the only way to explain its presence in complex systems like brains is to posit that the fundamental constituents of those systems have some rudimentary form of experience. This view was standard in Western philosophy until the 17th century (Leibniz held something like it) and is widespread in Indian philosophy.

This is where the Indian philosophical tradition becomes extraordinarily relevant. The Advaita Vedanta school (Adi Shankaracharya, 8th century CE) held that consciousness (Chit) is not a product of the brain but the ground of being - the fundamental nature of reality, of which individual minds are particular expressions. This is not mysticism in the dismissive sense. It is a philosophical position - that what we call consciousness is not generated by matter but is prior to matter, and that matter arises within consciousness rather than consciousness arising from matter.

The Sankhya school distinguished between Purusha (pure consciousness, the witness) and Prakriti (nature, matter). Purusha is not active - it does not do anything. It simply is aware. All activity, including mental activity, belongs to Prakriti. But without Purusha's illumination, Prakriti would not be experienced. Consciousness is not a function of nature; it is the precondition for nature to appear at all.

The Buddhist school of Yogacara (Vasubandhu, 4th century CE) went further: "cittamatra" (mind-only). What we take to be an external world is actually a construction of consciousness. This does not mean the world isn't real - it means that the "world" we access is always the world-as-experienced, which is always a product of consciousness. There is no consciousness-independent access to reality.

These ancient Indian positions are not mystically foreign to modern consciousness research - they are alternative framings of the same problems that Western philosophy of mind has been wrestling with since the 17th century. The difference is that Indian philosophy had 2,500 years to refine these positions before Western philosophy arrived at the same questions. The Indian tradition developed precise technical vocabularies - vritti (mental modifications), chitta (the mind-stuff), pratyaya (cognition), samskara (mental impressions) - for phenomena that Western psychology is still naming in less precise terms.

What might this mean practically? For the Vedantic tradition, understanding consciousness is not an academic exercise - it is liberation. If you can recognize that consciousness is not what you have but what you are - not a product of your brain but the ground from which experience arises - then the constant activity of the mind, the stream of thought and emotion and sensation, is seen differently. It is seen as happening within consciousness rather than as constituting consciousness. This shift of perspective - from being a mind to having a mind, from being the thoughts to being the awareness of thoughts - is what meditation traditions are pointing toward.

The question "what is consciousness?" may be the most important question science and philosophy face. Not because the answer will be practically useful in the ordinary sense. But because how we answer it determines how we understand ourselves: whether we are, fundamentally, matter that mysteriously experiences, or experience that mysteriously appears to be matter. The difference is not trivial. It touches everything.`,
  },
];

export default function SrotPage() {
  const dayOfYear = getDayOfYear();
  const todayArticle = ARTICLES[dayOfYear % ARTICLES.length];
  const [selected, setSelected] = useState(todayArticle);
  const [showFull, setShowFull] = useState(false);
  const [isFocusOpen, setIsFocusOpen] = useState(false);

  const preview = selected.content.split('\n\n').slice(0, 2).join('\n\n');

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Deep Reading</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>स्रोत - Srot</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            One long essay per day. No skimming. Read with your whole attention.
          </p>
        </motion.div>

        {/* Article selector */}
        <div className="flex gap-2 flex-wrap">
          {ARTICLES.map((a, i) => (
            <button
              key={a.id}
              onClick={() => { setSelected(a); setShowFull(false); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === a.id ? 'var(--accent-saffron)' : 'var(--bg-tertiary)',
                color: selected.id === a.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % ARTICLES.length ? '2px solid var(--accent-saffron)' : '1px solid var(--border-default)',
              }}
            >
              {a.title.split(':')[0]}{i === dayOfYear % ARTICLES.length ? ' • Today' : ''}
            </button>
          ))}
        </div>

        {/* Article */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-5"
          >
            {/* Header */}
            <div className="space-y-2 relative">
              <div className="absolute top-0 right-0 flex items-center gap-2">
                <ReadAloudButton
                  text={`${selected.title}. ${selected.subtitle}. ${selected.content}`}
                  lang="en-IN"
                  size="md"
                  variant="pill"
                  label="Listen Article"
                />
                <button
                  onClick={() => setIsFocusOpen(true)}
                  className="px-4 py-1.5 rounded-full text-xs font-medium border transition-all hover:bg-bg-tertiary flex items-center gap-1.5"
                  style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                >
                  Focus
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                  {selected.category}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-faint)' }}>{selected.readTime} read</span>
              </div>
              <h2 className="font-serif text-2xl leading-tight pr-36" style={{ color: 'var(--text-primary)' }}>{selected.title}</h2>
              <p className="text-base font-serif italic pr-36" style={{ color: 'var(--text-muted)' }}>{selected.subtitle}</p>
            </div>

            {/* Content */}
            <div className="card-base p-6">
              <div className="prose-like space-y-4">
                {(showFull ? selected.content : preview).split('\n\n').map((para, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-base"
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.9',
                      textIndent: i === 0 ? '0' : undefined,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {!showFull && (
                <div className="mt-6 pt-4 border-t text-center" style={{ borderColor: 'var(--border-default)' }}>
                  <div className="mb-3 h-8 pointer-events-none" style={{
                    background: 'linear-gradient(to bottom, transparent, var(--bg-secondary))',
                    marginTop: '-3rem',
                  }} />
                  <button
                    onClick={() => setShowFull(true)}
                    className="px-6 py-2.5 rounded-full text-sm font-medium transition-all"
                    style={{ background: 'var(--accent-saffron)', color: 'white' }}
                  >
                    Continue Reading →
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Focus Mode Component */}
        <FocusMode
          isOpen={isFocusOpen}
          onClose={() => setIsFocusOpen(false)}
          title={selected.title}
          author={selected.subtitle}
          textToSpeak={selected.content}
        >
          {selected.content.split('\n\n').map((para, idx) => (
            <p key={idx} className="mb-6">{para}</p>
          ))}
        </FocusMode>
      </div>
    </PageTransition>
  );
}
