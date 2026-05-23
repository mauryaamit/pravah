'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const QUESTIONS = [
  {
    id: 'consciousness',
    question: 'Is consciousness something the brain produces, or something the brain receives?',
    hindi: 'क्या चेतना मस्तिष्क द्वारा उत्पन्न होती है, या मस्तिष्क इसे ग्रहण करता है?',
    depth: `This question has occupied philosophers and scientists for centuries without resolution, and may be the most important open question in all of human knowledge.

The conventional scientific view: consciousness is produced by the brain — it is what complex neural information processing feels like from the inside. When neurons fire in specific patterns, experience arises. Damage the brain, damage the experience. Anesthetize the brain, extinguish consciousness. The evidence for this seems overwhelming.

But the evidence has an interpretation problem. It shows correlation — brain damage correlates with changes in consciousness. It does not prove causation in the direction assumed. Consider: if you damage the receiver of a radio, the music stops. This doesn't prove the radio produces the music. It proves the radio is necessary for the music to be received.

The physicist Bernardo Kastrup and philosopher David Chalmers (from different directions) have argued that the evidence is equally consistent with the view that consciousness is fundamental — prior to matter rather than produced by it — and that brains are mechanisms by which a cosmic consciousness becomes individuated into the particular, local experience of being you.

This is not new thinking. The Advaita Vedanta tradition has held this view for 2,500 years: Brahman — pure consciousness — is the ultimate reality, and individual minds are like whirlpools in the ocean: real, but not separate from the water. The materialist model says the whirlpool produces the water. Advaita says the water produces the whirlpool.

The implications diverge enormously. If the brain produces consciousness, then death is the complete ending of your experience. If consciousness is fundamental and the brain is a receiver, then something continues.

Neither side can prove its claim, because the Hard Problem of Consciousness — why any physical process gives rise to subjective experience — has not been solved and may be unsolvable by the methods of physical science alone.

What does your intuition say? And how much should you trust it?`,
    perspectives: [
      { source: 'Neuroscience', view: 'Consciousness is a product of neural computation. The "hard problem" is an illusion created by confused use of concepts. (Dennett)' },
      { source: 'Advaita Vedanta', view: 'Consciousness (Brahman) is the sole reality. Individual minds are modifications within it, not separate generators of it.' },
      { source: 'Quantum Mind Theory', view: 'Penrose and Hameroff propose that quantum processes in neural microtubules give rise to consciousness — a view controversial but not dismissed.' },
      { source: 'Panpsychism', view: 'Consciousness is a fundamental feature of reality, present in some form in all matter. Complex systems concentrate it. (Goff, Strawson)' },
    ],
    reflection: 'If you found definitive proof that consciousness ends with death — or definitive proof that it doesn\'t — would it change how you live? And if it would: why aren\'t you already living that way?',
  },
  {
    id: 'free-will',
    question: 'Do you actually have free will?',
    hindi: 'क्या आपके पास वास्तव में स्वतंत्र इच्छा है?',
    depth: `Before you had the thought you just had, neurons in your brain fired. Before you made the choice you call "your" choice, a deterministic (or probabilistic) physical process was already underway. The experience of choosing feels absolutely real. The question is whether it reflects anything that is genuinely "free."

Determinism holds that every event — including every mental event, every decision, every moment of apparent choice — is the inevitable outcome of prior causes. If you knew the complete state of the universe at any moment, you could in principle predict every future state, including every "choice" every human will ever make. In this view, free will is an illusion: what you experience as choosing was determined by your genetics, your history, your neurochemistry, and the laws of physics.

Libertarian free will (not the political variety) holds that there is genuine undetermined agency in human decision-making — that you could, in exactly the same circumstances, have done otherwise. Quantum indeterminacy might provide the physical opening for this — but random quantum noise is not the same as meaningful agency. Randomness is not freedom.

Compatibilism — the position held by most contemporary philosophers who think about this — argues that "free will" and "determinism" are not contradictions, because what we mean by "free will" is not libertarian undetermined agency but something like: acting in accordance with your own desires, values, and deliberation without external coercion. A person acting from their own character, without being compelled by force or threat, is acting freely — even if their character was itself caused by prior events.

But here is the deeper challenge: if your desires, values, and character were all caused by things outside your control (genetics, childhood, culture), in what sense are they really "yours"? You didn't choose your initial desires. You chose from among desires you already had, using values you already had, according to reasoning processes you already had. At what point does the self that chooses enter the picture?

Neuroscientist Benjamin Libet's experiments in the 1980s showed that the neural activity that produces a voluntary hand movement begins about half a second before the subject reports being consciously aware of intending to move. The brain started before the "you" that decided. This finding has been disputed, refined, and complicated — but never quite overturned.

Sam Harris argues: free will is not just an illusion, it is a harmful one, because it grounds our entire system of moral praise and blame on the idea that people could have done otherwise. If they couldn't — if the criminal's crime was the inevitable output of their genetics and history — then blame is merely a social technology, not a moral reality.

Daniel Dennett responds: it's all social technology all the way down, and that's fine. The question is which social technologies produce better human outcomes. Free will as a concept — the practice of holding people responsible — produces better outcomes than determinism as a lived creed.

What would you do differently if you genuinely believed you had no free will? And what would you do differently if you genuinely believed you did?`,
    perspectives: [
      { source: 'Hard Determinism', view: 'Every event is causally determined. Free will is an illusion. What we call "choice" is what deterministic causation feels like from the inside.' },
      { source: 'Compatibilism', view: 'Free will is acting according to your own desires without external coercion. This is compatible with determinism and is what we mean by "free." (Dennett)' },
      { source: 'Buddhism', view: 'The question is misconceived: there is no fixed self to be free or unfree. Freedom consists in acting from wisdom rather than from craving and aversion.' },
      { source: 'Advaita', view: 'At the ultimate level, there is only one actor — Brahman — and apparent individual agency is part of the play (lila) of consciousness.' },
    ],
    reflection: 'Think of a time you made a choice you later regretted. Given everything you now know about free will — do you feel differently about the blame or credit you assign to yourself for that choice?',
  },
  {
    id: 'beauty',
    question: 'Is beauty real, or is it only in the eye of the beholder?',
    hindi: 'क्या सौंदर्य वास्तविक है, या केवल देखने वाले की आँख में है?',
    depth: `Beauty might seem like a soft question — a matter of taste, culture, individual preference. But it is one of the oldest and deepest questions in philosophy, touching aesthetics, metaphysics, evolution, and what it means to say anything is real.

The extreme subjectivist position: beauty is entirely in the eye of the beholder. There is no fact of the matter about whether anything is beautiful. Beauty is a psychological response — a feeling — that different people in different cultures have toward different things. There is no more objectivity to it than there is to liking chocolate or preferring blue to red.

The evidence for this: aesthetic preferences vary enormously across cultures and history. The Rubensian ideal of female beauty (full, rounded, ivory) differs from contemporary Western ideals, which differ from Mughal miniature ideals, which differ from ancient Greek ideals. What counts as beautiful music in one culture is noise in another. What counts as an attractive face changes over centuries.

The evidence against pure subjectivism: there are also significant cross-cultural universals. Mathematical proportions appear in beautiful faces across all cultures — symmetry, specific ratios. Certain landscape types (savanna-like: open, with trees, water visible, elevated vantage) are preferred across cultures in ways that may reflect evolutionary memory. The Platonic and Pythagorean traditions identified mathematical ratios as beautiful across contexts: the golden ratio appears in beautiful compositions across centuries and cultures in ways that are not culturally determined.

The philosopher Elaine Scarry argues in "On Beauty and Being Just" that beauty is real — not in the sense that there is an objective beauty independent of any perceiving mind, but in the sense that it is not arbitrary. Beautiful things have features that make them likely to be perceived as beautiful across perceivers. Beauty calls attention. It asks for more looking. It is not just a preference but a recognition.

The evolutionary perspective adds another layer: beauty perception is not random but shaped by selection. We find symmetry beautiful because symmetry signals genetic health. We find certain landscapes beautiful because they were good places to live. We find music beautiful because rhythm and melody engage circuits involved in social coordination and prediction. Beauty is real in the sense that it represents information — reliable signals about fitness, health, and competence.

The Hindu aesthetic tradition's concept of rasa — the theory of aesthetic experience developed by Bharata in the Natya Shastra — takes a different approach: aesthetic experience (rasanubhava) is not subjective in the sense of arbitrary, but it is also not objective in the sense of being in the object. It arises in the relationship between a prepared perceiver and a work that evokes a specific emotional register. The rasa exists neither in the work nor in the viewer but in the experience itself.

Perhaps the deepest question is: what is the significance of beauty? Why does encountering beauty feel like encountering something important? If beauty were purely subjective — purely a personal preference with no broader significance — why does it feel like recognition rather than preference? Why does it feel like something is true, rather than just something that pleases you?`,
    perspectives: [
      { source: 'Subjectivism', view: 'Beauty is a psychological response with no objective correlate. De gustibus non est disputandum: there is no disputing about taste.' },
      { source: 'Plato', view: 'Beauty is a Form — an objective, eternal reality of which beautiful things are imperfect reflections. Recognizing beauty is recognizing the eternal.' },
      { source: 'Evolutionary Aesthetics', view: 'Beauty perception is shaped by natural selection. We find beautiful what reliably indicates fitness, health, and genetic quality.' },
      { source: 'Rasa Theory (Bharata)', view: 'Aesthetic experience arises in the interaction between prepared perceiver and evocative work. It is neither purely subjective nor objective.' },
    ],
    reflection: 'Think of the last time you encountered something genuinely beautiful — a piece of music, a view, a poem, a face. Did you feel like you were having a subjective reaction, or like you were recognizing something real? What is the difference?',
  },
];

export default function ManthanPage() {
  const dayOfYear = getDayOfYear();
  const todayQ = QUESTIONS[dayOfYear % QUESTIONS.length];
  const [selected, setSelected] = useState(todayQ);
  const [showFull, setShowFull] = useState(false);
  const [userReflection, setUserReflection] = useState('');

  const previewText = selected.depth.split('\n\n').slice(0, 3).join('\n\n');

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-7">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Deep Questions</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>मंथन — Manthan</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            One question, explored without hurry. Not to be answered — to be inhabited.
          </p>
        </motion.div>

        {/* Question selector */}
        <div className="flex gap-2 flex-wrap">
          {QUESTIONS.map((q, i) => (
            <button
              key={q.id}
              onClick={() => { setSelected(q); setShowFull(false); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === q.id ? '#6A3A8A' : 'var(--bg-tertiary)',
                color: selected.id === q.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % QUESTIONS.length ? '2px solid #6A3A8A' : '1px solid var(--border-default)',
              }}
            >
              Q{i + 1}{i === dayOfYear % QUESTIONS.length ? ' • Today' : ''}
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
            {/* The Question */}
            <div className="card-base p-7 text-center space-y-3" style={{ background: 'color-mix(in srgb, #6A3A8A 6%, var(--bg-secondary))', border: '1px solid #6A3A8A' }}>
              <p className="section-label" style={{ color: '#6A3A8A' }}>Today's Question</p>
              <h2 className="font-serif text-xl leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {selected.question}
              </h2>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-muted)' }}>
                {selected.hindi}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-faint)' }}>Sit with this for a moment before reading further.</p>
            </div>

            {/* Deep exploration */}
            <div className="card-base p-6 space-y-4">
              <p className="section-label">The Depth</p>
              {(showFull ? selected.depth : previewText).split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>{para}</p>
              ))}
              {!showFull && (
                <button onClick={() => setShowFull(true)} className="px-5 py-2 rounded-full text-sm font-medium" style={{ background: '#6A3A8A', color: 'white' }}>
                  Go Deeper →
                </button>
              )}
            </div>

            {/* Perspectives */}
            <div className="card-base p-5 space-y-4">
              <p className="section-label">Four Perspectives</p>
              {selected.perspectives.map((p, i) => (
                <div key={i} className="p-4 rounded-xl space-y-1" style={{ background: 'var(--bg-tertiary)' }}>
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6A3A8A' }}>{p.source}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.view}</p>
                </div>
              ))}
            </div>

            {/* Reflection prompt */}
            <div className="card-base overflow-hidden" style={{ border: '1px solid #6A3A8A' }}>
              <div className="p-5 border-b" style={{ borderColor: 'var(--border-default)', background: 'color-mix(in srgb, #6A3A8A 5%, var(--bg-secondary))' }}>
                <p className="section-label mb-1" style={{ color: '#6A3A8A' }}>Your Reflection</p>
                <p className="font-serif italic text-base" style={{ color: 'var(--text-primary)' }}>{selected.reflection}</p>
              </div>
              <textarea
                value={userReflection}
                onChange={e => setUserReflection(e.target.value)}
                placeholder="Write your thoughts here. No one else will read this."
                className="w-full p-5 resize-none outline-none font-serif text-sm leading-relaxed"
                style={{
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  minHeight: '120px',
                  border: 'none',
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="text-center py-4">
          <p className="font-serif italic text-sm" style={{ color: 'var(--text-faint)' }}>
            The quality of your life is determined by the quality of the questions you live with.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
