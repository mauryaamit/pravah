'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';

const FLAMES = [
  {
    id: 'enough',
    title: 'You Are Enough, Right Now',
    titleHindi: 'आप अभी, इसी क्षण, पर्याप्त हैं',
    category: 'Identity',
    intro: 'This is not affirmation. This is a philosophical argument.',
    fullText: `There is a productivity industry built on the premise that you are not enough — that with the right system, the right habits, the right morning routine, you could become the version of yourself that finally deserves to rest. This premise is the problem, not the solution.

The idea that you need to be improved before you are acceptable — to yourself, to others, to the world — is one of the most quietly destructive ideas in modern culture. It converts ordinary human life into a constant audition for a role you are never quite ready for. Every present moment becomes a means to the future moment when you will have earned the right to simply be.

But here is what the great contemplative traditions converge on: the present moment is not a means to anything. It is the only place where experience actually occurs. The future self you are trying to become will also have a future self to improve toward. The arrival never arrives. The improvement never completes. The anxiety doesn't stop when you achieve the goal — it migrates to the next one.

This is not an argument against growth. Growth is real, possible, and valuable. The argument is against growth as a precondition for self-acceptance. You can grow AND already be enough. You can work toward something AND not experience your current self as inadequate. These are not opposites.

The Stoic philosopher Marcus Aurelius — emperor of Rome, person of enormous responsibility and sustained effort — wrote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking." He was not saying: stop working. He was saying: the adequacy is already here. It is in how you relate to your circumstances, not in what your circumstances are.

The Buddhist concept of tathaagata — "thus come, thus gone," the description of the Buddha — points to the same thing differently: existence itself, in its bare actuality, is already what it is. The practice is not to become something else. It is to see clearly what is already here.

What would change if you genuinely believed you were enough — not despite your imperfections but including them? Not as a permanent conclusion that stops growth, but as a starting place from which growth is chosen rather than compelled?

You would still work. You might work harder. But from a different place — from abundance rather than lack, from love rather than fear, from genuine interest rather than anxiety. The quality of the work would be different. The quality of the rest would be different. The quality of your relationships would be different, because you would stop needing them to confirm an adequacy you had learned to supply yourself.

You are enough. This is the starting place. Everything else is additional.`,
  },
  {
    id: 'beginning',
    title: 'Begin Before You\'re Ready',
    titleHindi: 'तैयार होने से पहले शुरू करो',
    category: 'Action',
    intro: 'Readiness is a feeling. It is not a qualification.',
    fullText: `The moment of complete readiness almost never comes. The project you will start when you have more time. The conversation you will have when you know what to say. The life you will begin living when you have sorted out the circumstances that prevent you from living it. These are not plans. They are deferrals.

The writer Rainer Maria Rilke wrote: "Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage. Perhaps everything that frightens us is, in its deepest essence, something helpless that wants our love." The frightening thing — the blank page, the conversation you've been avoiding, the first day of the new practice — is not guarding a treasure. It is the treasure, disguised.

What is "ready"? It is a feeling of sufficiency — the sense that you have enough knowledge, enough skill, enough preparation, enough assurance of success to begin. But this feeling is not a measurement of readiness. It is a measurement of anxiety. The most experienced people in any field will tell you that the feeling of readiness rarely precedes beginning — it follows it. You do not feel ready and then begin. You begin and then gradually become ready.

The concept of vikrama in Sanskrit — bold action, decisive stepping-forward — is paired with udyama (effort) and nishchaya (resolve). Together they constitute the qualities that lead to success, according to the Hatha Yoga Pradipika and numerous other texts. But vikrama is first: the bold action in the absence of certainty. Certainty is not the precondition. Action is.

There is a particular trap for intelligent, thoughtful people: analysis paralysis. The ability to think through scenarios, anticipate problems, identify risks, is a genuine cognitive strength — and it becomes a liability when it is used to generate reasons not to begin rather than reasons to begin carefully. Every plan has gaps. Every beginning is imperfect. The difference between people who accomplish things and people who think about accomplishing things is not intelligence or talent — it is the willingness to begin imperfectly and correct as they go.

The writer Anne Lamott, in "Bird by Bird," gives the essential permission: write a shitty first draft. Not because the shitty draft is the goal, but because only through the shitty draft do you discover what you actually have to say. The same principle applies to every project, every practice, every relationship, every life change. The shitty beginning is not failure. It is the only possible start.

What are you waiting to be ready for? And what would it mean to begin today — imperfectly, insufficiently, without certainty of success — simply to have begun?

Begin. The readiness will follow.`,
  },
  {
    id: 'attention-to-life',
    title: 'Pay Attention to Your Life',
    titleHindi: 'अपने जीवन पर ध्यान दो',
    category: 'Presence',
    intro: 'Your life is happening right now, whether you\'re watching it or not.',
    fullText: `There is a question worth asking about any moment of your life: are you in it? Not physically present — you are always physically present — but genuinely attending. Aware of what you are experiencing, what you are thinking, what you are feeling. Not lost in the past or the future. Here, now, paying attention to what is actually happening.

The writer Mary Oliver, who spent her life paying close attention to the natural world, asked at the end of "The Summer Day": "Tell me, what is it you plan to do with your one wild and precious life?" The question is famous. Less famous is the poem that precedes it — a poem that is entirely about the quality of attention given to a single grasshopper in a single afternoon. Oliver demonstrates that paying attention to a grasshopper is not a small thing. It is the practice of being alive.

Henry David Thoreau went to Walden Pond, he said, "to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived." The fear he named — coming to the end and discovering that he hadn't been present for it — is one of the most universal human fears, and one of the least frequently addressed.

The Buddhist concept of mindfulness (sati) — awareness of present-moment experience without judgment — has been extensively studied in clinical and cognitive science settings for the past four decades, since Jon Kabat-Zinn introduced Mindfulness-Based Stress Reduction (MBSR) in 1979. The research is clear: sustained mindfulness practice reduces anxiety, improves attention, strengthens immune function, and changes the physical structure of the brain — thickening the prefrontal cortex (associated with attention and executive function) and reducing the amygdala (associated with fear and stress reactivity). But the purpose of mindfulness practice in the Buddhist tradition is not these health benefits. It is wakefulness. The recognition that your life is happening, and that you are capable of being present for it.

The philosopher Simone Weil wrote: "Attention is the rarest and purest form of generosity." She meant this about the attention given to another person — the quality of listening that genuinely hears rather than waiting for its turn to speak. But it applies equally to the attention given to your own life: the recognition that what is happening in this moment is happening, is real, is worthy of your full presence.

The great grief at the end of many lives — the "I should have..." grief — is almost never about specific failures or missed opportunities. It is about presence. "I should have paid more attention." "I was there but I wasn't really there." "I was always somewhere else." The specific content of the regret varies. The structure is always the same: absence.

What would your life look like if you attended to it more carefully? Not by changing anything dramatic — not by quitting your job or moving to a monastery. But by being more often genuinely here, in whatever is actually happening, rather than mentally somewhere else?

One practical entry point: the one-minute pause. Three times per day — morning, afternoon, evening — pause for 60 seconds and ask: what am I experiencing right now? Not what am I thinking about, or what should I be doing, but what am I actually experiencing in this moment? The question, asked regularly, begins to train a quality of attention to your own life that changes it — not by changing its content but by changing your relationship to it.

Your life is extraordinarily precious. It is happening right now. Pay attention.`,
  },
];

export default function NoorPage() {
  const dayOfYear = getDayOfYear();
  const todayFlame = FLAMES[dayOfYear % FLAMES.length];
  const [selected, setSelected] = useState(todayFlame);
  const [showFull, setShowFull] = useState(false);

  const paragraphs = selected.fullText.split('\n\n');
  const preview = paragraphs.slice(0, 3).join('\n\n');

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Daily Fire</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>नूर — Noor</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Not motivation. Transformation. The difference: motivation fades when the feeling does. This goes deeper.
          </p>
        </motion.div>

        {/* Flame selector */}
        <div className="flex gap-2 flex-wrap">
          {FLAMES.map((f, i) => (
            <button
              key={f.id}
              onClick={() => { setSelected(f); setShowFull(false); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === f.id ? '#D4A853' : 'var(--bg-tertiary)',
                color: selected.id === f.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % FLAMES.length ? '2px solid #D4A853' : '1px solid var(--border-default)',
              }}
            >
              {f.category}{i === dayOfYear % FLAMES.length ? ' • Today' : ''}
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
            {/* Header */}
            <div className="card-base p-7 text-center space-y-4 relative" style={{ background: 'color-mix(in srgb, #D4A853 6%, var(--bg-secondary))', border: '1px solid #D4A853' }}>
              <div className="absolute top-6 right-6">
                <ReadAloudButton
                  text={`${selected.title}. ${selected.titleHindi}. ${selected.intro}. ${selected.fullText}`}
                  lang="en-IN"
                  size="sm"
                  variant="pill"
                  label="Listen slow"
                  defaultPreset="slow"
                />
              </div>
              <span className="text-3xl">🌟</span>
              <div className="pr-32 pl-32">
                <h2 className="font-serif text-2xl leading-tight" style={{ color: 'var(--text-primary)' }}>{selected.title}</h2>
                <p className="font-devanagari text-base mt-1" style={{ color: 'var(--text-muted)' }}>{selected.titleHindi}</p>
              </div>
              <p className="font-serif italic text-base pr-32 pl-32" style={{ color: '#D4A853' }}>{selected.intro}</p>
            </div>

            {/* Content */}
            <div className="card-base p-6 space-y-4">
              {(showFull ? selected.fullText : preview).split('\n\n').map((para, i) => (
                <p key={i} className="text-base leading-relaxed font-serif" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                  {para}
                </p>
              ))}
              {!showFull && (
                <div className="text-center pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  <button onClick={() => setShowFull(true)} className="px-6 py-2.5 rounded-full text-sm font-medium" style={{ background: '#D4A853', color: 'white' }}>
                    Read the Full Piece →
                  </button>
                </div>
              )}
            </div>

            {/* Today's practice */}
            <div className="card-base p-5 space-y-2" style={{ background: 'color-mix(in srgb, #D4A853 8%, var(--bg-secondary))' }}>
              <p className="section-label" style={{ color: '#D4A853' }}>Today's Invitation</p>
              <p className="font-serif italic text-base" style={{ color: 'var(--text-primary)' }}>
                {selected.id === 'enough' && 'Name one thing about your current self — not what you\'re working toward, but who you are right now — that is good enough.'}
                {selected.id === 'beginning' && 'What have you been waiting to begin? Begin it today. Imperfectly. Incompletely. Just begin.'}
                {selected.id === 'attention-to-life' && 'Set three reminders today — morning, afternoon, evening. Each reminder: pause for 60 seconds and ask: what am I actually experiencing right now?'}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="text-center py-4">
          <p className="font-serif italic text-sm" style={{ color: 'var(--text-faint)' }}>
            Noor — نور — is Arabic for light. Not the blinding kind. The kind that reveals.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
