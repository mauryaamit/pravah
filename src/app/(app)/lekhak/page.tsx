'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const WRITING_PROMPTS = [
  {
    id: 'morning-before',
    type: 'Memory',
    prompt: 'Write about a morning before something changed. Not the big day itself - the morning before. What did ordinary life feel like when it was still intact?',
    hint: 'Focus on sensory details: what you ate, what the light looked like, what sounds were in the background. The ordinary is what becomes precious in retrospect.',
    example: 'A morning before a departure, before a death, before a decision, before a relationship began or ended.',
  },
  {
    id: 'stranger',
    type: 'Observation',
    prompt: 'Write the life story of someone you saw briefly - on a bus, in a queue, across a restaurant - based only on what you observed. Invent the rest.',
    hint: 'What did their hands look like? How did they hold themselves? What were they looking at? The details you notice reveal what you think about human beings.',
    example: 'The woman reading a physical newspaper at the airport. The man who sat down, looked at his phone, put it away, and just looked out the window.',
  },
  {
    id: 'thing-you-carry',
    type: 'Metaphor',
    prompt: 'What is the thing you carry everywhere - not physically, but in your mind? Write about it as if it were an object: describe its weight, its shape, its age, whether it belongs to you or you to it.',
    hint: 'This might be grief, or guilt, or a particular version of yourself that hasn\'t resolved into the present one yet. Give it texture.',
    example: '"I carry my father\'s silence the way you carry an umbrella you don\'t need but can\'t leave behind."',
  },
  {
    id: 'letter',
    type: 'Letter',
    prompt: 'Write a letter to the version of yourself from five years ago. Not advice - don\'t give advice. Just describe what you know now that they couldn\'t have known then.',
    hint: 'The constraint "no advice" is important. Advice implies the past could have been different. Description accepts it as it was, while offering the witness of having come through.',
    example: '"You don\'t know yet that the job you\'re nervous about will be exactly right for two years and then exactly wrong."',
  },
];

const CRAFT_NOTES = [
  {
    title: 'On the First Sentence',
    content: `The first sentence of a piece of writing has two jobs: to make the reader want to read the second sentence, and to establish the register of everything that follows.

The register is the tonal instruction: this will be funny, or meditative, or urgent, or lyrical. The first sentence sets the table. If the first sentence is formal and the second is casual, the reader experiences a small jolt of disorientation. If the first sentence promises profundity and the second delivers a grocery list (as a joke), the reader laughs - because the contrast is itself the point. But the first sentence always makes a promise.

What makes a good first sentence? The shortest answer: surprise. Something that wasn't quite what you expected from a piece with this title, in this context. Surprise creates forward momentum. The reader's natural response to the unexpected is to seek the explanation - and seeking the explanation means reading the next sentence.

The writer George Saunders, in his teaching, asks students to identify "what is interesting" in a given sentence - meaning, what creates an energy that makes you want to move forward. His observation is that interesting sentences almost always involve some form of pressure: something being asserted against something else, some tension between what is expected and what is delivered, some energy that needs resolution. A sentence like "The sky was blue" has no pressure. A sentence like "The sky was the wrong color" has pressure. It creates a question. Questions pull the reader forward.

Joan Didion's first sentence of "The White Album" is: "We tell ourselves stories in order to live." Six words. It is a complete philosophical claim. It tells you immediately that you are in the presence of someone who thinks, who generalizes, who will not give you simply scenes and characters but will be reflecting on what scenes and characters mean. It is not just the first sentence of an essay - it is a thesis about human psychology that the rest of the essay will interrogate. Six words do all of that.

For the beginning writer: don't try to write a great first sentence first. Write the piece. Then ask: what is this actually about? What am I trying to say? Then write a first sentence that says that thing in the most interesting way you can find. The first sentence is usually the last thing you write.`,
  },
  {
    title: 'On Writing What You Don\'t Know',
    content: `The common advice "write what you know" is good advice badly understood. It is often taken to mean: only write about your own experience, your own community, the world you literally inhabit. This interpretation produces some of the narrowest, most airless writing imaginable.

What "write what you know" actually means is: write from genuine knowledge, not from assumption. If you write about a surgeon, know how surgery feels from the inside - not just the procedure but the particular relationship between concentration and fear during a procedure, the way hands feel after three hours under gloves, the sound the instruments make. You don't need to be a surgeon. You need to do the research, the interviews, the reading, until you know it the way a surgeon knows it.

The more interesting advice, perhaps, is "write what you don't know but need to understand." Writing is a form of investigation. You write toward something you can't yet see clearly. The novelist E.L. Doctorow said: "Writing is like driving at night in the fog. You can only see as far as your headlights, but you can make the whole trip that way." You don't need to know the destination before you start. You need to keep going until you arrive somewhere, and then understand where you've arrived.

This means that the act of writing is also the act of discovery. The writer who knows exactly what they're going to say before they write it is not really writing - they're transcribing. The interesting things happen at the edges of what you know, in the gaps between what you intended and what came out. These gaps are where the writing becomes literature rather than craft.

The practical implication: when you feel stuck because you "don't know enough," consider that the stuckness might be productive rather than a problem. It might be telling you that you are at the edge of what you currently know, and that the next step is to go find out - through research, through imagination, through writing directly into the unknown and seeing what emerges.

Chekhov's stories contain characters from every layer of Russian society - peasants, aristocrats, provincial doctors, monks, students, desperate women, dying old men. Chekhov was himself a provincial doctor who had escaped poverty through medicine and writing. He knew some of these lives directly. Others he researched and imagined. The reader cannot tell which is which. That is the point.`,
  },
  {
    title: 'On Revision',
    content: `Revision is not fixing mistakes. It is seeing the draft you have written clearly enough to understand what it is actually doing - as opposed to what you intended it to do - and then making it do the actual thing more fully.

The first draft is the conversation you have with yourself about what you're writing. The second draft is where you figure out what you were actually saying. The third draft is where you start saying it well. Most people stop at the first draft and wonder why the writing doesn't feel right.

The writer Richard Russo, in his essay "The Whole Wide World," describes revision as "the writer's one and only chance to re-enter the story as a reader." You are the only person who can do this for your own work, but you must do it - must become, temporarily, a reader who doesn't know what was intended, who only knows what is there.

This requires time and distance. The piece you finished at 2am, in the grip of what felt like inspiration, will look different at 2pm three days later. The sentence that felt exactly right will reveal its awkwardness. The transition that seemed obvious will show itself as a gap. The metaphor you were so pleased with will sit there, slightly embarrassing you. This is not failure. This is your editorial faculty working correctly - and it works better when it has had some sleep.

What do you look for in revision? Several things, at different scales:

At the largest scale: Is this doing what I thought it was doing? Does the structure serve the material? Is there a better order?

At the middle scale: Does each paragraph have one clear thing it's doing? Does each sentence in the paragraph serve that thing? Where is the momentum lost? Where does the reader stop being pulled forward?

At the smallest scale: Is each word the right word? Are there words that are doing nothing? Are there sentences that are trying to do two things and doing neither well?

The impulse to cut is one of the most important impulses in revision. Almost every first draft is too long. Not because the writer is a bad judge of length but because the first draft necessarily contains more exploration than the reader needs to see. The exploration was necessary for the writer. It is not necessary for the reader. Cut the parts that were necessary for you. Leave the parts that are necessary for the reader.`,
  },
];

export default function LekhakPage() {
  const dayOfYear = getDayOfYear();
  const todayPrompt = WRITING_PROMPTS[dayOfYear % WRITING_PROMPTS.length];
  const [selectedPrompt, setSelectedPrompt] = useState(todayPrompt);
  const [expandedCraft, setExpandedCraft] = useState<number | null>(0);
  const [userText, setUserText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setUserText(text);
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-7">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Writing Room</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>लेखक - Lekhak</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Writing is thinking made visible. The page is not where you record what you think - it is where you find out what you think.
          </p>
        </motion.div>

        {/* Today's prompt */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg" style={{ color: 'var(--text-primary)' }}>Writing Prompt</h2>
            <div className="flex gap-1">
              {WRITING_PROMPTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPrompt(p)}
                  className="w-7 h-7 rounded-full text-xs font-medium transition-all"
                  style={{
                    background: selectedPrompt.id === p.id ? 'var(--accent-saffron)' : 'var(--bg-tertiary)',
                    color: selectedPrompt.id === p.id ? 'white' : 'var(--text-muted)',
                    border: i === dayOfYear % WRITING_PROMPTS.length ? '2px solid var(--accent-saffron)' : 'none',
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPrompt.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="card-base p-5 space-y-4"
              style={{ border: '1px solid var(--accent-saffron)', background: 'color-mix(in srgb, var(--accent-saffron) 5%, var(--bg-secondary))' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: 'var(--accent-saffron)', color: 'white' }}>
                  {selectedPrompt.type}
                </span>
                {dayOfYear % WRITING_PROMPTS.length === WRITING_PROMPTS.indexOf(selectedPrompt) && (
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-faint)' }}>Today</span>
                )}
              </div>
              <p className="font-serif text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {selectedPrompt.prompt}
              </p>
              <div className="space-y-2 pt-1 border-t" style={{ borderColor: 'var(--border-default)' }}>
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-faint)' }}>Craft Note</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{selectedPrompt.hint}</p>
                <p className="text-xs italic" style={{ color: 'var(--text-faint)' }}>Example: {selectedPrompt.example}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Writing area */}
          <div className="card-base overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border-default)' }}>
              <span className="text-xs font-medium" style={{ color: 'var(--text-faint)' }}>Your response (not saved, just for thinking)</span>
              <span className="text-xs" style={{ color: wordCount > 50 ? 'var(--accent-saffron)' : 'var(--text-faint)' }}>
                {wordCount} {wordCount === 1 ? 'word' : 'words'}
              </span>
            </div>
            <textarea
              value={userText}
              onChange={handleTextChange}
              placeholder="Begin here. There is no wrong start."
              className="w-full p-5 resize-none outline-none font-serif text-base leading-relaxed"
              style={{
                background: 'transparent',
                color: 'var(--text-primary)',
                minHeight: '200px',
                lineHeight: '1.9',
                border: 'none',
              }}
            />
          </div>
        </div>

        {/* Craft Notes */}
        <div className="space-y-3">
          <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>On the Craft</h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Long essays on the practice of writing - not rules, but observations from close attention to how good writing works.
          </p>
          {CRAFT_NOTES.map((note, i) => (
            <div key={i} className="card-base overflow-hidden">
              <button
                className="w-full text-left p-5 flex items-center justify-between gap-3"
                onClick={() => setExpandedCraft(expandedCraft === i ? null : i)}
              >
                <span className="font-serif text-base" style={{ color: 'var(--text-primary)' }}>{note.title}</span>
                <motion.div animate={{ rotate: expandedCraft === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedCraft === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t px-5 py-5 space-y-3" style={{ borderColor: 'var(--border-default)' }}>
                      {note.content.split('\n\n').map((para, j) => (
                        <p key={j} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
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

        <div className="text-center py-4">
          <p className="font-serif italic text-sm" style={{ color: 'var(--text-faint)' }}>
            Write badly. Write often. Write until the bad words run out and the true ones begin.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
