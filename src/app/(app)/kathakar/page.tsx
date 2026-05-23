'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const STORIES = [
  {
    id: 'library-of-babel',
    title: 'The Librarian\'s Last Book',
    titleHindi: 'पुस्तकालय की आखिरी किताब',
    genre: 'Philosophical Fiction',
    readTime: '18 min',
    mood: 'contemplative',
    preview: 'In a library that contained every book that had ever been written, the last librarian discovered the one book that explained everything — and decided not to read it.',
    content: `In a library that contained every book that had ever been written, and every book that would ever be written, and every book that could theoretically be written in any language by any mind, there worked a librarian named Ananya.

She had worked there for forty-one years. She had begun in the section of books about birds — a section that was itself the size of a small country — and had gradually moved through mathematics, then theology, then the collected letters of people who had lived and died in the 14th century, then the technical manuals of machines that had not yet been invented. She had a gift for finding, in the vast labyrinthine corridors, exactly the book that needed to be found, though she could not always have said how she found it.

The library was not organized by subject. It was organized by a system that its original architect had described as "sympathetic resonance" — books that shared a certain quality of thought were shelved together, regardless of their apparent subject. A 13th century Persian treatise on optics would be found next to a 20th century novel about a lighthouse keeper, next to an unpublished collection of grocery lists from a small Norwegian town in 1887, next to a philosophical dialogue that had not yet been written. Their connection was not content. It was something rarer: a quality of attention.

Ananya understood this system instinctively, the way a musician understands key changes without consciously calculating. She moved through the library the way water moves through stone — finding the channels that were already there, invisible until the movement itself revealed them.

On the morning of the forty-first year of her work, she found the Book.

She had not been looking for it. She had been looking for a particular text on the acoustics of caves — a manuscript she needed to complete a request from a graduate student whose thesis concerned the way sound had shaped religious architecture across three civilizations. She had followed the scent of the text through seventeen corridors and eleven half-staircases and one room that seemed to exist in a slightly different version of the building than the rest, and there, between the cave acoustics manuscript and a cook's journal from the Mughal court, was the Book.

She knew immediately what it was. Not from the title — the spine was unmarked — but from the weight of it in her hands. It was the weight of completed things, of answered questions, of the end of searching. She had heard of it, of course. Every librarian had. It was the one book that the architect of the library had described in the founding document as "the only book that, once read, makes all other books unnecessary." The book that contained the answer to the question that all other books circled around.

She stood in the narrow corridor, holding it, for a very long time.

What she held was not merely information. She understood that. The library held information in inconceivable quantities — more information than any mind could encounter in ten thousand lifetimes. What she held was something different. This was the book that resolved the information into meaning. The book that said: here, this is what it all adds up to, this is what everything was for, this is the answer that all the questions were trying to reach.

She could read it. She had earned the right, in forty-one years of faithful service. The library would permit it. The book was in her hands.

She thought of the graduate student whose thesis on cave acoustics was still incomplete, waiting for the manuscript she had been fetching when she found this. She thought of the seventeen-year-old who came every Thursday afternoon and always asked for books she hadn't chosen, that Ananya chose for her — books that seemed to land in her hands at exactly the moment she needed them, though she never knew why she needed them until they were open. She thought of the old man who came to read the news from 1962, the year his wife had died, as if by rereading those months he could somehow understand them better now, at eighty, than he had understood them then at thirty-nine.

The library was not the building. The library was the relationship between the books and the people who needed them. Ananya had spent forty-one years being the intelligence that matched one to the other — not a cataloguing system but a mind, alive to the particular hunger of each reader and the particular nourishment of each text.

If she read the book, she would know the answer. She was quite certain of this. But she was also quite certain that knowing the answer would change her relationship with all the other books. They would become, in some sense, less necessary — lesser lights beside the one great light she had encountered. And if they became lesser to her, she would become lesser to the readers who needed her. She would be a librarian who had stopped needing the library. And a librarian who has stopped needing books is simply a keeper of objects in a building.

She placed the Book back on the shelf. She recorded its location in the private catalogue she kept in a notebook in her pocket — a notation that no one else would be able to decipher. Then she picked up the manuscript on cave acoustics and carried it back to the graduate student.

On her way, she passed the seventeen-year-old, who had arrived early and was sitting in the chair she always sat in, her legs over the arm, a book open upside down on her face, not reading, just thinking. Ananya stopped and looked at her for a moment — this young person in the attitude of a mind at work, unaware of being observed, content to be lost inside the question rather than the answer.

"She'll find it herself," Ananya thought, meaning many things at once.

She went on. The library arranged itself quietly around her, shuffling its vast contents in the particular sympathetic way it had, putting the right books slightly closer to where they would be needed, as if it understood what she had decided and approved.

Somewhere in the seventeen-year-old section, a book about the acoustics of the heart moved one shelf to the left.

---

What is the thing that makes a book necessary? Not the information in it — information can be summarized, extracted, encoded in a database. The necessity of a book is the experience of reading it: the particular time and place, the particular state of the reader's mind, the way a sentence lands when you have just had the experience that makes it comprehensible. The same book, read at twenty and read at fifty, is not the same book. The reader has changed, and so the book has changed.

This is why the idea of the Book That Answers Everything is, at some level, a category error. The answer to the deepest questions is not information — it is transformation. And transformation cannot be read about. It can only be lived. The library that contains every book that has ever been written cannot contain the book of your particular life, which is the only book that can answer your particular questions.

Ananya understood this. That is why she put the book back. She was not being noble. She was being accurate.

The graduate student's thesis, when it was finally completed, contained a footnote that her advisor considered tangential but that she insisted on keeping: "The caves were not designed to carry sound outward to the congregation. They were designed to carry sound inward to the singer. The architecture was not about what the people in the nave could hear. It was about what the person singing could hear: their own voice, returned to them transformed, by stone."

The seventeen-year-old grew up to become a mathematician who worked on the problem of how patterns persist through noise — how signal maintains itself through interference. She never knew that a librarian had, for a moment, held in her hands a book that might have told her the answer in advance. She solved it herself, in her own time, in her own way, and the solution was richer for the journey.

The old man came every Thursday until he was ninety-four. He never understood 1962 any better. But he understood something else: that understanding is not the same as acceptance, and acceptance is not the same as forgetting. He accepted what he could not understand. He came to the library because the library had never judged him for not understanding. It only waited, patient and full, for whatever question he might one day be ready to bring.

The Book remained on its shelf, between the cave acoustics and the Mughal cook's journal, waiting. It was not going anywhere. Neither was the library. Neither, for that matter, was the question it answered — which was the same question it had always been, the one that everything else is circling around.

What is the question? That, the library will not tell you directly.

But if you spend enough time in the right corridors, you will begin to hear it in the spaces between the books.`,
  },
  {
    id: 'the-painter',
    title: 'The Painter Who Forgot Color',
    titleHindi: 'रंग भूल जाने वाला चित्रकार',
    genre: 'Magical Realism',
    readTime: '12 min',
    mood: 'wonder',
    preview: 'A painter of extraordinary talent began, one morning, to see the world in only grey. He continued painting. What happened to his work astonished everyone — including him.',
    content: `Manav had been painting with color for thirty years when, one Tuesday morning in October, he woke up to find that he could no longer see it.

He went to the ophthalmologist, who found nothing wrong with his eyes. He went to the neurologist, who found nothing wrong with his brain. He went to the optometrist, the psychiatrist, and finally to a specialist in rare visual disorders at a university hospital three cities away, who told him that he had developed, for reasons that were impossible to explain, complete achromatopsia — total color blindness — overnight. It happened in roughly one in forty thousand people. It almost never happened overnight, and when it did, it almost never resolved. He would see the world in grey for the rest of his life.

The specialist showed him statistical tables and research papers. She spoke about adaptation strategies and support groups. She was kind and thorough and completely useless, in the way that specialists often are when what you need is not a specialist but a reason to continue.

Manav had painted in color for thirty years. He was known for color — his canvases were dense with it, built up in layers so that the red beneath would bleed into the blue above and create purples that trembled, that seemed to breathe. Critics wrote about his "chromatic intelligence," his "color memory." He had once spent eleven hours in the national gallery staring at a Rothko, trying to understand how a man had put two rectangles of color next to each other and made something that made people weep. He understood it, eventually. It was about the edges — the way colors bled into each other at the boundary, the way the boundary was not a line but a zone of becoming, where neither color was quite itself.

He went home from the specialist's office and stood in front of his half-finished canvas. It was a painting of the river at dusk — he had been building it for three weeks, layer by layer, the gold of the last light and the deep blue of the water and the orange of the fishermen's boats. He could not see any of it. He saw a grey canvas with lighter and darker grey areas.

He picked up a brush.

The painting he finished that week was not the painting he had started. He abandoned the dusk river — abandoned it not by painting over it but by turning the canvas upside down and beginning on the back, on the white. He had not painted on white in decades. He always started with a ground of color.

Without color, he found, he was left with only form and light. These had always been there — the architecture beneath the chromatic surface — but they had been, in a sense, decorated by color, enriched by it but also hidden by it. Now they were bare. He could see the bones of the image.

He painted a woman's hands. He had been looking at his mother's hands at the funeral he had attended the month before — she had died peacefully, which is a phrase that means she died without the indignity of struggle, which is not quite the same as peacefully — and he had thought: I have never painted hands properly. He had always been too interested in the color of skin to see the structure beneath it.

The painting of the hands was in grey — in every grey that grey could be. He spent fourteen hours on it. He mixed greys he did not know existed: greys that were barely perceptibly warm, greys with a faint blue undertone that gave them a quality of cold without coldness, greys that held the memory of color inside them like a photographic negative. He painted the light the way light actually behaves, not the way it appears to the eye that is looking for color — the light that builds form from shadow, that describes the shape of a knuckle, that gives the hollow between two tendons its depth.

The painting was unlike anything he had made before. He knew it while making it and could not quite believe what he was making.

His gallerist came to see him three months later, to see if he had "recovered." She stood in front of the hands painting for eleven minutes without speaking. Then she sat down on the floor, which was not something she usually did.

"What happened to you?" she said.

"I stopped being able to see color," he said.

"What do you see now?"

"Everything else."

The show that opened six months later was called "After." The paintings were all in grey — technically in a range of neutral tones — and they were the most intense things he had ever made. Without color to carry the emotional weight, everything else had to. The composition had to do work that color had previously done; the light had to do work that hue had done; the texture of the paint had to communicate what the spectrum had communicated.

Critics called it a transformation. They said he had found a new maturity, a new severity, a new depth. Some said it was the best work of his career. A few said it was the best work being made by any painter working today. One wrote, at length and with considerable intelligence, about what the loss of something we consider essential does to an artist — how constraints can open rather than close, how limitation sometimes reveals.

Manav read all of this and felt that they were right but also that they were missing something. The thing they were missing was this: he had not grown because he had lost something. He had grown because the loss had forced him to look, really look, at what had always been there.

Color was beautiful. He knew this not from seeing it anymore but from remembering it — and remembering it with the particular sharpness of absence. He missed it the way you miss a voice you will not hear again. But the absence had given him something that the presence had, in its richness, concealed: the world's bones. The structure of things, the way light describes form, the way shadow is not darkness but information.

He thought about this often: how much richness conceals. How much pleasure can be a veil. How the thing that makes life beautiful can also prevent you from seeing the structure beneath the beauty.

He did not want to be glad he had lost color. That would be too neat, too instructive, too much like a parable. He was not glad. He missed it. He would have had it back in a moment.

But he thought: every loss shows you something. Not as compensation. Not as silver lining. But as the particular, unchosen lesson that loss delivers, whether you want it or not. You can ignore it, be destroyed by it, or let it teach you, knowing that the teaching does not make the loss acceptable.

He chose to let it teach him.

The woman's hands painting — his mother's hands, painted in seventeen shades of grey, the light on the knuckles built up in twelve thin layers — sold to a collector who said he looked at it every morning because it made him feel that the people he had lost were still somehow present in the world, in the particular way their hands had moved through it.

Manav thought this was the most generous thing anyone had ever said about his work.

He thought about hands for a long time after that. About what hands do: make, hold, release. About what they carry and what they let go. About how a life is written in them — in the particular calluses, the scars, the way the skin loosens over the years, the way the bones become more visible.

He began a series. Hands of a builder. Hands of a surgeon. Hands of a woman who had braided hair for fifty years. Hands of a child who had never yet been afraid.

In the grey that was all the colors simultaneously, he painted until he had made forty-seven paintings of hands. The series was called, simply, "What Remains." The title was not about death. It was about everything else: the part of a person that persists in their traces, in the objects they touched, in the light they cast.

He had been a painter of color. Now he was a painter of everything color had been hiding.

He was not sure, at the end, which he preferred. But he was sure of this: that the painter who lost color was a better painter than the painter who had it, because the painter who lost it had been forced to learn what he had always relied on color to do for him — and in learning it, had stopped relying on anything except attention itself.

Attention, it turned out, was the whole art. Color had been a gift. Its loss had revealed the gift beneath the gift.`,
  },
];

export default function KathakarPage() {
  const dayOfYear = getDayOfYear();
  const todayStory = STORIES[dayOfYear % STORIES.length];
  const [selected, setSelected] = useState(todayStory);
  const [showFull, setShowFull] = useState(false);

  const paragraphs = selected.content.split('\n\n');
  const previewParas = paragraphs.slice(0, 4);
  const restParas = paragraphs.slice(4);

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Story Room</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>कथाकार — Kathakar</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Full stories. Not summaries. Let yourself be taken somewhere.
          </p>
        </motion.div>

        {/* Story selector */}
        <div className="flex gap-2 flex-wrap">
          {STORIES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setSelected(s); setShowFull(false); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === s.id ? 'var(--accent-saffron)' : 'var(--bg-tertiary)',
                color: selected.id === s.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % STORIES.length ? '2px solid var(--accent-saffron)' : '1px solid var(--border-default)',
              }}
            >
              {s.genre}{i === dayOfYear % STORIES.length ? ' • Today' : ''}
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
            {/* Story header */}
            <div className="card-base p-6 space-y-3" style={{ background: 'color-mix(in srgb, var(--accent-saffron) 5%, var(--bg-secondary))' }}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                  {selected.genre}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-faint)' }}>{selected.readTime} read</span>
              </div>
              <div>
                <h2 className="font-serif text-2xl leading-tight" style={{ color: 'var(--text-primary)' }}>{selected.title}</h2>
                <p className="font-devanagari text-base mt-1" style={{ color: 'var(--text-muted)' }}>{selected.titleHindi}</p>
              </div>
              <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {selected.preview}
              </p>
            </div>

            {/* Story content */}
            <div className="card-base p-6">
              <div className="space-y-5">
                {previewParas.map((para, i) => (
                  <p key={i} className="leading-relaxed" style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.95',
                    fontSize: '1.0rem',
                    fontFamily: i === 0 ? 'var(--font-serif)' : undefined,
                  }}>
                    {para.startsWith('---') ? (
                      <span style={{ display: 'block', textAlign: 'center', color: 'var(--text-faint)', letterSpacing: '0.3em' }}>· · ·</span>
                    ) : para}
                  </p>
                ))}

                <AnimatePresence>
                  {showFull && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-5"
                    >
                      {restParas.map((para, i) => (
                        <p key={i} className="leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.95', fontSize: '1.0rem' }}>
                          {para.startsWith('---') ? (
                            <span style={{ display: 'block', textAlign: 'center', color: 'var(--text-faint)', letterSpacing: '0.3em' }}>· · ·</span>
                          ) : para}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {!showFull && (
                  <div className="text-center pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                    <button
                      onClick={() => setShowFull(true)}
                      className="px-6 py-2.5 rounded-full text-sm font-medium"
                      style={{ background: 'var(--accent-saffron)', color: 'white' }}
                    >
                      Continue the Story →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
