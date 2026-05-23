'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const BRAIN_TOPICS = [
  {
    id: 'neuroplasticity',
    title: 'Neuroplasticity: Your Brain is Rewriting Itself Right Now',
    titleHindi: 'न्यूरोप्लास्टिसिटी',
    category: 'Brain Science',
    teaser: 'The brain is not a fixed organ. Every experience, every thought, every repeated behavior physically changes the structure and connectivity of neural networks. The brain you have today is not the brain you had yesterday.',
    content: `For most of the 20th century, neuroscientists believed that the adult brain was essentially fixed — that by the time you reached adulthood, the neural structure was set, and from then it was a slow process of loss. Neurons die; new ones don't form; damage doesn't repair. This view, known as the "no new neurons" doctrine, was so firmly held that scientists who published evidence against it found their work dismissed or ignored.

That doctrine is now known to be wrong in multiple important ways, and the science that replaced it — neuroplasticity — is one of the most important discoveries in the history of neuroscience with direct implications for how we think about learning, habit formation, recovery from injury, meditation, and what we call "intelligence."

Neuroplasticity refers to the brain's ability to reorganize itself by forming new neural connections throughout life. It operates at multiple scales:

**Synaptic plasticity** — the strengthening or weakening of connections between individual neurons based on use. The rule, formulated by Hebb in 1949 as "neurons that fire together, wire together," means that every time two neurons activate simultaneously, the connection between them becomes slightly stronger. Every time you practice a skill, the neural circuits involved become more efficient. Every time you avoid a thought or behavior, the associated circuits weaken.

**Structural plasticity** — actual changes in the physical structure of the brain: the formation of new synapses, the growth of dendritic spines, the myelination of axons (which speeds signal transmission). Learning a new skill, practicing meditation, acquiring a second language — all of these produce measurable structural changes in specific brain regions.

**Neurogenesis** — the formation of new neurons. This was the most contested finding: adult neurogenesis, the birth of new neurons in the adult brain, was denied for decades and has now been demonstrated in at least two brain regions: the hippocampus (involved in memory formation and spatial navigation) and the olfactory bulb. Exercise has been shown to be one of the most powerful stimulants of hippocampal neurogenesis.

The London taxi driver study (Maguire et al., 2000) is one of the most cited demonstrations of structural plasticity. Taxi drivers in London must memorize the entire city — thousands of streets, landmarks, and routes — in a process called "The Knowledge" that takes 2-4 years. MRI scans showed that experienced taxi drivers had significantly larger hippocampi (specifically the posterior hippocampus, associated with spatial memory) than non-taxi drivers. And the size increased with years of experience. The brain literally grew to accommodate the skill.

In musicians, research has consistently shown enlarged motor cortex (for musicians generally) and enlarged left planum temporale (in those who have perfect pitch, and particularly in those who began training before age 7). String players show enlargement of the cortical area representing the fingers of their left hand (which do the complex fingering work). These changes happen within weeks of beginning practice.

Stroke rehabilitation has been transformed by neuroplasticity research. Where the earlier model held that damage to the brain was permanent, plasticity research has shown that neighboring areas can be recruited to take over functions lost to stroke, and that intensive, repetitive rehabilitation exercises drive this re-organization. The earlier a patient begins rehabilitation and the more intensive it is, the more complete the recovery can be.

What does this mean practically? Several things.

First: what you practice, you become. Not metaphorically, but physically. The neural circuits you use strengthen; those you don't use weaken. If you practice worrying, you build better worry circuits. If you practice focused attention, you build better attention circuits. If you practice gratitude, you build circuits that make gratitude more available. The brain is not passively shaped by experience — it is actively shaped by practice. You are, in a real sense, training your brain with every repeated thought and action.

Second: it's never too late. While plasticity is greatest in early childhood and adolescence, it continues throughout life. Older people learn new skills, recover from strokes, meditate their way to measurably thicker prefrontal cortices. The plastic period doesn't close. It slows.

Third: sleep and exercise are non-negotiable for brain health. Sleep is when synaptic consolidation happens — the brain reviews the day's learning and consolidates what to keep. Exercise stimulates neurogenesis in the hippocampus. These are not lifestyle suggestions. They are neuroplasticity infrastructure.

Fourth: the brain is not the same brain from moment to moment. The self you think of as fixed — your personality, your preferences, your habitual responses — is implemented in neural circuits that are constantly, if slowly, changing. Who you are is not fixed. Who you are is the current shape of circuits that experience is continuously remodeling.`,
    wonder: 'London taxi drivers have measurably larger hippocampi than non-taxi drivers, and the size increases with years of experience. Learning a skill physically grows the relevant part of the brain.',
  },
  {
    id: 'sleep',
    title: 'What Happens When You Sleep',
    titleHindi: 'नींद का विज्ञान',
    category: 'Neuroscience',
    teaser: 'Sleep is not passive rest. It is when the brain does its most active work: consolidating memories, flushing toxins, replaying the day, processing emotions, running simulations of the future.',
    content: `Sleep is one of the most paradoxical behaviors in biology. Every large animal sleeps — a state of vulnerability, immobility, and unconsciousness that exposes them to predation and removes them from feeding and reproduction for a third of their lives. If sleep weren't doing something absolutely essential, evolution would have eliminated it in the 700 million years it's been going on. Something is happening in sleep that is worth the enormous cost of unconsciousness.

We now know quite a lot about what that something is.

**Memory Consolidation** happens during sleep. The hippocampus — the brain's short-term memory buffer — replays the day's experiences during non-REM sleep, transmitting them to the cortex for long-term storage. This is not metaphorical: specific sequences of neural activity that occurred during daytime learning are replayed during sleep at approximately 20x speed. The "sleep on it" folk wisdom is neuroscience. Information learned before sleep is retained significantly better than information learned without subsequent sleep.

**Synaptic Homeostasis** — the brain's version of defragmentation. During waking hours, synapses strengthen as you learn. If this continued without limit, the brain would become saturated — too much signal, not enough noise, no way to distinguish new learning from established learning. During sleep, the brain systematically downscales synaptic strength — pruning the connections that weren't important enough to retain and allowing the most important ones to stand out. Sleep doesn't just consolidate learning; it also clears away the debris of the day's unimportant experiences.

**The Glymphatic System** — discovered by Maiken Nedergaard's lab at the University of Rochester in 2013 — is a waste-clearance system unique to the brain that is primarily active during sleep. Cerebrospinal fluid is pumped through the spaces around neurons, flushing out metabolic waste products. One of the most important things it flushes is beta-amyloid — the protein that accumulates in Alzheimer's disease. Chronic sleep deprivation prevents this clearance, allowing beta-amyloid to accumulate. The glymphatic system may explain why chronic poor sleep is one of the strongest risk factors for Alzheimer's disease.

**REM Sleep and Emotional Processing**: REM (Rapid Eye Movement) sleep — the phase when dreaming occurs — appears to serve a unique function in emotional processing. During REM, stress-related neurochemicals (particularly norepinephrine) are absent, while the emotional content of memories is replayed. This creates a kind of "therapy session" — emotional memories are processed without the physiological stress response, allowing their emotional charge to decrease. Matthew Walker, neuroscientist at UC Berkeley, describes REM sleep as "overnight therapy." Studies show that memories of emotionally negative events are experienced as less distressing after a night of good REM sleep than immediately after the event.

**The Default Mode Network** during sleep is active in specific ways during REM that are associated with insight, creative problem-solving, and the formation of unexpected connections between distant concepts. The famous stories of creative breakthroughs happening during dreams — August Kekulé's dream of a snake eating its tail that led to the discovery of benzene's ring structure, Paul McCartney hearing "Yesterday" in a dream, Dmitri Mendeleev seeing the periodic table in a dream — may reflect this. The sleeping brain makes connections that the waking brain's focused attention prevents.

**Sleep Architecture** — the structure of the night — matters. Sleep cycles through stages: N1 (light sleep), N2 (consolidation), N3 (deep slow-wave sleep), REM. A complete cycle takes approximately 90 minutes. A full night's sleep (7-9 hours) allows approximately 5 full cycles. The first half of the night is dominated by slow-wave sleep (critical for memory consolidation and physical restoration). The second half is dominated by REM (critical for emotional processing and creativity). Cutting sleep short — even by 90 minutes — disproportionately cuts the REM-rich second half. This is why people who chronically sleep 6 hours feel functional but show deficits in creativity and emotional regulation.

The public health implications of widespread sleep deprivation are significant. Matthew Walker's research suggests that industrialized societies are in the midst of a "sleep loss epidemic" — that the combination of artificial light, screen exposure, work culture that stigmatizes sleep, and caffeine dependency has produced a population that is chronically undersleeping. The correlates: increased rates of Alzheimer's, depression, obesity, cardiovascular disease, and Type 2 diabetes. Sleep is not a lifestyle choice. It is physiological infrastructure.

The most important practical insight from sleep neuroscience: consistent sleep and wake times matter as much as duration. The circadian rhythm — the internal 24-hour clock synchronized by light exposure — governs when specific sleep stages occur. Disrupting it by sleeping different hours on different days (social jet lag) prevents the brain from completing its maintenance routines at the right times. Going to bed and waking at the same time every day — including weekends — is probably the single most impactful sleep hygiene behavior.`,
    wonder: 'The brain clears beta-amyloid (the protein that accumulates in Alzheimer\'s disease) primarily during sleep via the glymphatic system. One bad night of sleep measurably increases beta-amyloid levels. Chronic poor sleep is one of the strongest risk factors for Alzheimer\'s.',
  },
  {
    id: 'attention',
    title: 'The Economy of Attention',
    titleHindi: 'ध्यान का अर्थशास्त्र',
    category: 'Cognitive Science',
    teaser: 'Attention is a finite resource. Every major technology company on Earth is in the business of extracting it from you. Understanding how attention works — and how it is harvested — may be the most important cognitive literacy skill of the 21st century.',
    content: `The economist Herbert Simon wrote in 1971: "A wealth of information creates a poverty of attention and a need to allocate that attention efficiently among the overabundance of information sources that might consume it." He wrote this before the internet, before smartphones, before social media. He was right, and the problem he described has become exponentially more severe.

Attention is a limited resource — a biological fact. The prefrontal cortex, which governs sustained focused attention, fatigues. It cannot maintain high-quality focus indefinitely. Research suggests that the capacity for deep, focused work in most people is approximately 4 hours per day of genuinely high-quality attention, beyond which the quality drops significantly even if the effort continues. This is not weakness. It is the architecture of the biological system.

The "attention economy" is the term used to describe the economic system that has built itself around the monetization of human attention. Social media platforms, news websites, streaming services, and apps are businesses whose revenue depends on how much of your attention they can capture and sell to advertisers. Their products are optimized, through A/B testing and machine learning, to be maximally attention-capturing — not maximally beneficial to the user.

The mechanisms are well-documented. Variable reward schedules — the same mechanism that makes slot machines addictive — are used by social media: most content is unrewarding, but some is unexpectedly rewarding (a viral post, an interesting reply, a piece of news that matters). The unpredictability of the reward creates a dopamine-driven compulsive checking behavior. The infinite scroll eliminates the natural stopping point that pagination or physical media provides. Notifications interrupt the attention to recapture it. The goal is not to give you a satisfying experience — it is to keep you on the platform as long as possible.

The cost is cognitive. Studies consistently show that the presence of a smartphone — even face-down, even turned off, even in another room — reduces cognitive performance on tasks requiring sustained attention. The mere awareness of potential interruption depletes attention. Every notification is not just the two seconds it takes to check and dismiss — it is the 23 minutes (the average cited by research on interruption and refocusing) required to restore full depth of attention.

The deeper cost is structural. Extended periods of attention fragmentation — the "continuous partial attention" that characterizes smartphone use — may literally change the brain's default mode of processing. Research on "deep reading" — the kind of slow, linear, absorptive reading that builds empathy, comprehension, and complex thought — suggests that years of attention fragmentation may impair the capacity for it. Maryanne Wolf, a cognitive neuroscientist and literacy expert, describes this in "Reader, Come Home": that the neural circuits for deep reading are not automatic — they are built by practice — and that they can be weakened by disuse.

The Stoic philosopher Epictetus wrote: "Seek not that the things which happen should happen as you wish; but wish the things which happen to be as they are, and you will have a tranquil flow of life." But the attention economy doesn't want your tranquil flow. It wants your agitation, your outrage, your anxiety, your envy — all of which are more engaging than contentment.

What can be done? The research on attention suggests several high-impact practices. Single-tasking — deliberate attention to one thing at a time — produces better outcomes than multitasking (which research shows is mostly rapid attention-switching, not parallel processing, and comes at cognitive cost). Long periods without notifications — scheduled focus blocks — allow deep work that fragmented attention prevents. Reading books (physical or digital, without internet access) trains and maintains the neural circuits for sustained attention. Exercise has a well-documented positive effect on attentional control.

The structural fix is harder: a world in which the most powerful algorithmic systems on Earth are optimized to exploit human cognitive vulnerabilities for profit is a world that requires individual resistance and collective regulation. Individual resistance includes the practices above. Collective regulation is a longer-term project. But understanding the system you are operating within — understanding that your attention is being harvested, by design, by extremely sophisticated technology — is the prerequisite for any effective response.

Attention is not just a cognitive resource. It is what your life is made of. Your life is, at every moment, whatever your attention is resting on. This is why attention is sacred. This is why its commodification is a serious harm. And this is why the first act of cognitive sovereignty — of living deliberately rather than being lived — is to decide, consciously, what you pay attention to.`,
    wonder: 'The presence of a smartphone — even face-down on the table, even turned off — measurably reduces cognitive performance on tasks requiring sustained attention. The brain allocates resources to monitoring it even when you\'re not using it.',
  },
];

export default function NeuroLabPage() {
  const dayOfYear = getDayOfYear();
  const today = BRAIN_TOPICS[dayOfYear % BRAIN_TOPICS.length];
  const [selected, setSelected] = useState(today);
  const [showFull, setShowFull] = useState(false);

  const paragraphs = selected.content.split('\n\n');
  const preview = paragraphs.slice(0, 4).join('\n\n');

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Brain Science</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>NeuroLab — न्यूरोलैब</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Understanding your brain is the foundation of everything. Not as a self-help hack — as genuine, life-changing knowledge.
          </p>
        </motion.div>

        <div className="flex gap-2 flex-wrap">
          {BRAIN_TOPICS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => { setSelected(t); setShowFull(false); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === t.id ? '#7A3A8A' : 'var(--bg-tertiary)',
                color: selected.id === t.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % BRAIN_TOPICS.length ? '2px solid #7A3A8A' : '1px solid var(--border-default)',
              }}
            >
              {t.category}{i === dayOfYear % BRAIN_TOPICS.length ? ' • Today' : ''}
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
            <div className="card-base p-6 space-y-3" style={{ background: 'color-mix(in srgb, #7A3A8A 5%, var(--bg-secondary))', border: '1px solid #7A3A8A' }}>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A3A8A' }}>{selected.category}</span>
              <h2 className="font-serif text-xl leading-tight" style={{ color: 'var(--text-primary)' }}>{selected.title}</h2>
              <p className="font-devanagari text-base" style={{ color: 'var(--text-muted)' }}>{selected.titleHindi}</p>
              <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{selected.teaser}</p>
            </div>

            <div className="card-base p-6 space-y-4">
              {(showFull ? selected.content : preview).split('\n\n').map((para, i) => (
                <p key={i}
                  className="text-sm leading-relaxed"
                  style={{
                    lineHeight: 1.9,
                    fontWeight: para.startsWith('**') ? 600 : 'normal',
                    color: para.startsWith('**') ? 'var(--text-primary)' : 'var(--text-secondary)',
                  }}
                >
                  {para.replace(/\*\*/g, '')}
                </p>
              ))}
              {!showFull && (
                <div className="text-center pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  <button onClick={() => setShowFull(true)} className="px-6 py-2.5 rounded-full text-sm font-medium" style={{ background: '#7A3A8A', color: 'white' }}>
                    Continue Reading →
                  </button>
                </div>
              )}
            </div>

            <div className="card-base p-5" style={{ background: 'color-mix(in srgb, #7A3A8A 8%, var(--bg-secondary))' }}>
              <p className="section-label mb-2" style={{ color: '#7A3A8A' }}>The Key Insight</p>
              <p className="font-serif italic text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{selected.wonder}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
