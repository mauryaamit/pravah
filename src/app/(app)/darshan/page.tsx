'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const PHILOSOPHIES = [
  {
    id: 'advaita',
    name: 'Advaita Vedanta',
    hindi: 'अद्वैत वेदान्त',
    founder: 'Adi Shankaracharya (8th century CE)',
    origin: 'India',
    symbol: '∞',
    color: '#C4873A',
    tagline: 'There is only one reality. You are it.',
    core: `Advaita means "non-dual" — the philosophical position that there is ultimately only one reality, which the tradition calls Brahman. What appears as the multiplicity of the world — the separate objects, separate persons, separate minds — is Brahman appearing through the lens of maya (cosmic illusion). The fundamental ignorance (avidya) that drives all human suffering is the belief in a separate self.

Adi Shankaracharya (788–820 CE) systematized Advaita in a series of commentaries on the Upanishads, the Brahma Sutras, and the Bhagavad Gita that remain among the most intellectually rigorous philosophical texts in any tradition. His central argument: the self that you believe yourself to be — the "I" that thinks, desires, suffers, seeks — is not your fundamental nature. Your fundamental nature is pure awareness (chit), which is identical with the awareness that underlies all experience everywhere. The localized, individual self is a construction within that awareness, not a separate entity looking out at the world.

This has a precise practical implication: the "seeker" who wants liberation is part of the problem. There is no self that needs liberation, because the self that seems to need it is the illusion that liberation is liberation from. What you actually are — Brahman, pure consciousness — has never been bound. Liberation is not acquiring something. It is recognizing what was always already the case.

The experience of this recognition is described in the tradition as sahaja samadhi — spontaneous, natural meditation. Not a special state different from ordinary waking consciousness, but the ordinary waking consciousness recognized as it always was: vast, open, undivided, without edges.

Ramana Maharshi (1879–1950) brought Advaita into the 20th century with the practice of self-inquiry: "Who am I?" Not a philosophical question to be answered conceptually, but a practice: when you have a thought or emotion, instead of engaging with its content, ask "to whom is this thought arising?" Follow the "I" back to its source. What do you find at the base of all experience? Ramana said: awareness. Not your awareness — simply awareness. Undivided. Already free.`,
    practice: 'Self-inquiry (atma-vichara): Throughout the day, when you notice a strong emotion or thought, pause and ask: "Who is experiencing this?" Not to answer conceptually, but to feel the questioner itself. Notice what you find at the source of the question.',
    keyTexts: ['Vivekachudamani (Shankaracharya)', 'Mandukya Upanishad', 'Who Am I? (Ramana Maharshi)', 'I Am That (Nisargadatta Maharaj)'],
    question: 'If awareness is your fundamental nature, what happens to the search for happiness?',
  },
  {
    id: 'stoicism',
    name: 'Stoicism',
    hindi: 'स्टोइसिज़्म',
    founder: 'Zeno of Citium (300 BCE) → Epictetus, Marcus Aurelius, Seneca',
    origin: 'Ancient Greece / Rome',
    symbol: '⚖',
    color: '#6B8B7A',
    tagline: 'You cannot control what happens. You can control how you respond.',
    core: `Stoicism was founded by Zeno of Citium around 300 BCE in Athens, named after the Stoa Poikile (Painted Porch) where Zeno taught. It became the dominant philosophy of the Roman world, practiced by emperors (Marcus Aurelius), enslaved persons (Epictetus), and senators (Seneca). It survived the Roman Empire in the writings of these three, and is currently experiencing a profound revival.

The central Stoic distinction is between what is "up to us" and what is "not up to us." Up to us: our judgments, desires, impulses, in short our inner life. Not up to us: our bodies, reputations, property, health, other people's actions, external events. Epictetus, who had been a slave, understood this distinction viscerally. His master could control his body. He could not control Epictetus's mind.

The practical implication: suffering comes from applying desire or aversion to things outside our control. When you are miserable because it is raining, you are confusing what is up to you (your response to rain) with what is not up to you (whether it rains). The Stoic practice is to gradually disentangle these, learning to want only what is within your sphere of control — and to meet everything outside that sphere with equanimity rather than resistance.

This is not passivity. Marcus Aurelius, writing his Meditations while commanding armies on the Danube frontier, was not passive. He was ferociously active — but his actions were not driven by desire for outcomes he could not control. They were driven by the recognition of what was right to do, independent of whether it would succeed.

The Stoics practiced a technique called premeditatio malorum — the premeditation of evils. Each morning, Marcus Aurelius would consider what might go wrong that day, and rehearse his response. Not to invite pessimism, but to remove the element of shock. A person who has thought through loss can face loss without being destroyed by surprise. The worst outcomes, anticipated and accepted in advance, lose their power to devastate.

Seneca wrote: "Omnia aliena sunt, tempus tantum nostrum est." Everything is alien to us, only time is ours. The Stoic relationship with time is perhaps its most modern contribution: the radical focus on the present moment as the only place where you actually exist, and the recognition that concern about the past (which cannot be changed) and the future (which cannot be controlled) is, strictly speaking, a waste of the only time you have.`,
    practice: 'Evening review (Stoic journaling): At day\'s end, ask three questions: What did I do well? What could I have done better? What was outside my control that I treated as if it were inside it? Write honestly. Do not judge yourself harshly — observe with the eye of an interested witness.',
    keyTexts: ['Meditations (Marcus Aurelius)', 'Discourses (Epictetus)', 'Letters to Lucilius (Seneca)', 'The Obstacle is the Way (Ryan Holiday)'],
    question: 'What are you suffering about today that is, strictly speaking, outside your control?',
  },
  {
    id: 'buddhism',
    name: 'Buddhist Philosophy',
    hindi: 'बौद्ध दर्शन',
    founder: 'Siddhartha Gautama (563–483 BCE)',
    origin: 'India (Bihar)',
    symbol: '☸',
    color: '#8A6A3A',
    tagline: 'All suffering arises from craving. The path is the middle way.',
    core: `The Buddha — Siddhartha Gautama — was born a prince in Lumbini (in present-day Nepal) around 563 BCE. He lived until 29 in sheltered luxury, then encountered, on a series of chariot rides, old age, sickness, and death — the three marks of ordinary existence he had been shielded from. This encounter shattered the illusion of his comfortable life. He renounced his position, wife, child, and wealth to seek liberation from suffering.

After years of extreme asceticism with other renunciants, he abandoned that path too — recognizing that starving the body was not the answer. He sat under the Bodhi tree in Bodhgaya and resolved not to rise until he had understood. In the night that followed, he confronted all the temptations and fears of the mind (personified as Mara) and at dawn, he realized enlightenment.

The teaching he gave for the next 45 years is summarized in the Four Noble Truths: (1) Dukkha — life involves suffering, unsatisfactoriness. (2) Samudaya — the origin of suffering is craving (tanha). (3) Nirodha — there is a cessation of suffering. (4) Magga — the Eightfold Path is the way to that cessation.

The philosophical heart of Buddhism is the Three Marks of Existence: Anicca (impermanence — all conditioned things change), Dukkha (unsatisfactoriness — all conditioned things are ultimately unsatisfying), and Anatta (non-self — there is no fixed, permanent self). The last is the most radical and the most misunderstood.

Anatta does not mean you do not exist. It means that what you call "you" — the sense of being a fixed, continuous self — is a construction, a story the mind tells about a process. There is experience. There is awareness. But there is no separate self that has the experience and awareness. This is similar to Advaita's conclusion but arrived at through different argumentation: instead of saying "the self is Brahman," Buddhism says "the self, as ordinarily understood, is a conceptual overlay, not an entity."

The Madhyamaka school (Nagarjuna, 2nd century CE) pushed this further with the doctrine of Shunyata (emptiness): all phenomena are empty of inherent, independent existence. Nothing exists in isolation — everything exists in dependence on everything else. The flower exists because of rain, soil, sun, seed, the farmer who planted it, the tradition that valued it. Remove any of these and the flower is not the same flower. It is "empty" of a self-sufficient, independent essence.

This is not nihilism — Nagarjuna was careful to distinguish emptiness from nothingness. Things exist conventionally — the flower is real, you can smell it, you can pick it. But it does not exist ultimately — as something with an essence separate from its conditions. This Middle Way between the extremes of "things truly exist as fixed entities" and "things do not exist at all" is the Madhyamaka's extraordinary contribution to philosophy.`,
    practice: 'Mindfulness of breathing (Anapanasati): Sit comfortably, close your eyes. Bring attention to the sensation of breathing — the feeling at the nostrils, the rise and fall of the chest or belly. When attention wanders (it will), gently return it without self-judgment. Five minutes daily, consistently, is more valuable than an hour occasionally.',
    keyTexts: ['Dhammapada', 'Heart Sutra', 'Mulamadhyamakakarika (Nagarjuna)', 'In the Buddha\'s Words (Bhikkhu Bodhi)'],
    question: 'What fixed idea about yourself are you defending right now? What would happen if you held it more lightly?',
  },
  {
    id: 'existentialism',
    name: 'Existentialism',
    hindi: 'अस्तित्ववाद',
    founder: 'Kierkegaard (19th c.) → Sartre, Camus, Heidegger (20th c.)',
    origin: 'Europe',
    symbol: '⬡',
    color: '#3A5A8A',
    tagline: 'Existence precedes essence. You are what you choose.',
    core: `Existentialism holds that there is no pre-given human nature, no divinely decreed purpose, no essence that determines what you are before you exist. You exist first — thrown into a world you did not choose, in a body you did not choose, in a historical moment you did not choose — and then you create yourself through your choices. "Existence precedes essence" is Jean-Paul Sartre's famous formulation.

This is simultaneously terrifying and liberating. Terrifying because it means you cannot hide behind nature, nurture, destiny, God, or circumstances. You are responsible for what you make of your situation. Liberating because it means you are not fixed — whatever you have been, you can choose differently, and in choosing, become different.

Sartre's analysis of bad faith (mauvaise foi) is one of the most important contributions to self-understanding in modern philosophy. Bad faith is the denial of freedom — the pretense that you had no choice, that your situation determined you, that you are what you are and nothing else is possible. The waiter who performs "waiter-ness" so completely that he seems to have ceased to be a human being who happens to be working as a waiter — he is in bad faith. He has identified completely with his role. But he always could have quit. He has forgotten his freedom.

Albert Camus brought a different inflection: the Absurd. The Absurd is the collision between the human desire for meaning, clarity, and purpose, and the universe's total silence on these matters. The universe does not care. There is no cosmic answer to the question "what is the meaning of my life?" The question is real; the answer is absent. This collision is the Absurd.

Camus's response was not despair — it was rebellion. "One must imagine Sisyphus happy," he wrote at the end of The Myth of Sisyphus. Sisyphus, condemned to roll his boulder up a hill forever only to watch it roll back down, can be imagined happy at the moment he descends to retrieve it — in the moment of clear-eyed acknowledgment of his situation, without illusion, without resignation. This is not optimism. It is the refusal to be defeated by what cannot be changed.

Martin Heidegger's contribution was the concept of Dasein (Being-there) — the human being as always already situated in a world, in a time, in a context. We are not isolated subjects looking out at an objective world. We are always already involved — tools for working, roles to play, traditions to inherit, death to anticipate. The most fundamental structure of human existence, for Heidegger, is Being-toward-death: the awareness of finitude that makes every choice significant. You are going to die. This is not morbid information. It is the condition that makes meaning possible.`,
    practice: 'The deathbed perspective: Imagine yourself at the end of your life, looking back at today. What would that future self wish you had done or not done today? Use this not to induce anxiety but to clarify what actually matters to you beneath the noise of obligation and habit.',
    keyTexts: ['Being and Nothingness (Sartre)', 'The Myth of Sisyphus (Camus)', 'Being and Time (Heidegger)', 'The Stranger (Camus, fiction)'],
    question: 'In what area of your life are you in "bad faith" — pretending you have no choice?',
  },
];

const PHILOSOPHER_OF_DAY = [
  {
    name: 'Adi Shankaracharya',
    period: '788–820 CE',
    nationality: 'Indian (Kerala)',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Adi_Shankara.jpg/440px-Adi_Shankara.jpg',
    bio: `Adi Shankaracharya was born in Kaladi, Kerala, around 788 CE. According to tradition, he was a child prodigy who had memorized the Vedas by eight, taken sannyasa (renunciation) by the same age, and composed his first commentary on the Brahma Sutras by sixteen. He died at thirty-two. In those thirty-two years, he wrote some of the most intellectually demanding philosophical texts in human history, traveled the entire Indian subcontinent on foot establishing monasteries (mathas) in all four directions, and debated scholars of every tradition into recognition of Advaita's coherence.

His commentaries — on the Upanishads, the Bhagavad Gita, and the Brahma Sutras — synthesized centuries of Indian philosophical thought into a rigorous, internally consistent system. His method of debate, called Mimamsa, is still studied in Indian philosophy departments. His poems — the Vivekachudamani (Crest Jewel of Discrimination), the Soundarya Lahari, the Nirvana Shatakam — are still sung in temples across India.

"Brahma satyam jagat mithya, jivo brahmaiva na aparah" — Brahman is real, the world is appearance, the individual self is not other than Brahman. This is his philosophical position in one sentence. The implications of taking this seriously occupy a lifetime.`
  },
  {
    name: 'Marcus Aurelius',
    period: '121–180 CE',
    nationality: 'Roman',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Marcus_Aurelius_Metropolitan_Museum.jpg/440px-Marcus_Aurelius_Metropolitan_Museum.jpg',
    bio: `Marcus Aurelius was, for nineteen years, the most powerful person on Earth — emperor of Rome. He was also a committed Stoic philosopher who wrote his Meditations not for publication but as a private journal, a series of reminders to himself about how to live and think. The book was published after his death and has never been out of print since.

What is extraordinary about the Meditations is their honesty. Marcus was emperor — he could have written anything. He wrote: "Begin the morning by saying to thyself, I shall meet with the busy-body, the ungrateful, arrogant, deceitful, envious, unsocial." He wrote reminders to stop being petty, to focus on what matters, to be patient with difficult people, to remember his own mortality. This is a man who had armies and provinces at his disposal, and his private notebook is a series of admonishments to himself to be more patient and less self-important.

He faced the Antonine Plague (which killed millions, including his predecessor Lucius Verus), wars on multiple frontiers, the betrayal of friends, and the knowledge that his son Commodus — who would inherit the empire — was unstable and cruel. He met all of this without losing either his commitment to duty or his philosophical clarity. He is the closest historical equivalent to the Stoic ideal of the sage.`
  }
];

export default function DarshanPage() {
  const dayOfYear = getDayOfYear();
  const [expanded, setExpanded] = useState<string | null>(PHILOSOPHIES[dayOfYear % PHILOSOPHIES.length].id);
  const philosopher = PHILOSOPHER_OF_DAY[dayOfYear % PHILOSOPHER_OF_DAY.length];

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-7">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Philosophy Room</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>दर्शन — Darshan</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            The examined life. Ideas that have survived millennia because they keep answering real questions.
          </p>
        </motion.div>

        {/* Philosopher of the Day */}
        <div className="card-base overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-32 flex-shrink-0 bg-gray-100" style={{ background: 'var(--bg-tertiary)', minHeight: 140 }}>
              <img
                src={philosopher.imageUrl}
                alt={philosopher.name}
                className="w-full h-full object-cover"
                style={{ minHeight: 140 }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <div className="p-5 space-y-2">
              <p className="section-label">Philosopher of the Day</p>
              <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>{philosopher.name}</h2>
              <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{philosopher.period} · {philosopher.nationality}</p>
              <div className="space-y-2 pt-1">
                {philosopher.bio.split('\n\n').map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Schools of Thought */}
        <div className="space-y-3">
          <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>Schools of Thought</h2>
          <motion.div variants={STAGGER_CONTAINER} initial="initial" animate="animate" className="space-y-3">
            {PHILOSOPHIES.map(phil => (
              <motion.div key={phil.id} variants={STAGGER_ITEM} className="card-base overflow-hidden">
                <button
                  className="w-full text-left p-5"
                  onClick={() => setExpanded(expanded === phil.id ? null : phil.id)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{phil.symbol}</span>
                      <div>
                        <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>{phil.name}</h3>
                        <p className="font-devanagari text-sm" style={{ color: 'var(--text-muted)' }}>{phil.hindi}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>{phil.founder}</p>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: expanded === phil.id ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="mt-2 font-serif italic text-sm" style={{ color: phil.color }}>"{phil.tagline}"</p>
                </button>

                <AnimatePresence>
                  {expanded === phil.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t" style={{ borderColor: 'var(--border-default)' }}>
                        <div className="p-5 space-y-4">
                          <div>
                            <p className="section-label mb-2">The Core Teaching</p>
                            {phil.core.split('\n\n').map((para, i) => (
                              <p key={i} className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                                {para}
                              </p>
                            ))}
                          </div>
                          <div className="p-4 rounded-xl" style={{ background: `color-mix(in srgb, ${phil.color} 8%, var(--bg-tertiary))` }}>
                            <p className="section-label mb-1" style={{ color: phil.color }}>Today's Practice</p>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{phil.practice}</p>
                          </div>
                          <div>
                            <p className="section-label mb-2">Key Texts</p>
                            <div className="flex gap-2 flex-wrap">
                              {phil.keyTexts.map(t => (
                                <span key={t} className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="p-4 rounded-xl border-l-2" style={{ borderColor: phil.color, background: 'var(--bg-tertiary)' }}>
                            <p className="section-label mb-1">Question for Today</p>
                            <p className="font-serif italic text-base" style={{ color: 'var(--text-primary)' }}>{phil.question}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center py-4">
          <p className="font-serif italic text-sm" style={{ color: 'var(--text-faint)' }}>
            Philosophy is not about having answers. It is about having better questions.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
