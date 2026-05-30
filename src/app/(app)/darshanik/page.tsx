'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';
import SutraNoteButton from '@/components/shared/SutraNoteButton';
import RevisitButton from '@/components/shared/RevisitButton';

// ─── Data Types ───────────────────────────────────────────────────────────────

interface DarshanThinker {
  name: string;
  nameHindi: string;
  dates: string;
  origin: string;
  school: string;
  tagline: string;
  bio: string;
  core_idea_title: string;
  core_idea: string;
  why_it_matters: string;
  practice: string;
  closing_question: string;
}

interface DarshanTradition {
  id: string;
  name: string;
  nameHindi: string;
  color: string;
  emoji: string;
  thinkers: DarshanThinker[];
}

// ─── Tradition 0: Indian Philosophy ──────────────────────────────────────────

const INDIAN_PHILOSOPHY: DarshanTradition = {
  id: 'indian',
  name: 'Indian Philosophy',
  nameHindi: 'भारतीय दर्शन',
  color: '#C4873A',
  emoji: '🪷',
  thinkers: [
    {
      name: 'Adi Shankaracharya',
      nameHindi: 'आदि शंकराचार्य',
      dates: '788-820 CE',
      origin: 'Kaladi, Kerala, India',
      school: 'Advaita Vedanta',
      tagline: 'Brahman is real; the world is appearance; the individual self is not other than Brahman.',
      bio: `Adi Shankaracharya was born in Kaladi, Kerala, around 788 CE. By every account - both hagiographic and scholarly - he was a child of extraordinary ability. He had memorized the Vedas by age eight and, according to tradition, took sannyasa (formal renunciation) before adolescence. He died at thirty-two, leaving behind a body of philosophical work that still shapes the intellectual and spiritual life of India. In those short decades he wrote commentaries on the ten principal Upanishads, the Brahma Sutras, and the Bhagavad Gita that remain among the most rigorously argued philosophical texts in any language. He also traveled the entire Indian subcontinent on foot, debating scholars of every tradition - Mimamsakas, Buddhists, Jainas, Vaishnavas - establishing his non-dual position against each, and founded four monastic centers (mathas) at Sringeri, Dwarka, Puri, and Joshimath, which continue to function today.

What is remarkable about Shankara is the combination of intellectual precision and poetic power. His philosophical prose is tight, exacting, full of logical move and counter-move; his poetry - the Vivekachudamani, the Soundarya Lahari, the Nirvana Shatakam - is luminous, charged, and deeply personal. He synthesized the disparate insights of the Upanishadic tradition into a single, internally coherent system: Advaita Vedanta. The core claim: Brahman - pure, undivided consciousness - is the only ultimate reality. The multiplicity of the world, the separateness of individual selves, the very distinction between knower and known - these arise through maya, cosmic appearance, and are dissolved upon correct understanding. Liberation (moksha) is not an achievement but a recognition: the recognition that what you already are has never been bound.`,
      core_idea_title: 'Non-Duality: Brahman Alone Is',
      core_idea: `The philosophical heart of Shankara's system is the identity of Atman (individual self) and Brahman (ultimate reality). This is not a metaphor or a spiritual aspiration - it is, for Shankara, the literal truth, obscured by avidya (ignorance). We experience ourselves as separate, bounded individuals looking out at a world of separate objects. This experience is real at a conventional level - Shankara is not an illusionist who denies the practical reality of tables and persons. But at the ultimate level, the separateness is a superimposition: like seeing a rope in dim light and taking it for a snake. The snake is not there. The fear it generates is real. The correction is light - knowledge - that reveals the rope was always only a rope.

The concept of maya in Shankara is subtle and frequently misunderstood. Maya does not mean the world is an hallucination or does not exist. It means the world exists as appearance within Brahman, much as waves exist within the ocean - the waves are not separate from the ocean, and the ocean does not become less itself by waving. Individual consciousness (jiva) is Brahman appearing through the limiting condition of a particular body-mind complex. Remove the limitation - the ignorance that generates the sense of separateness - and what remains is not a liberated individual self, but Brahman recognizing itself. The seeker dissolves into the sought.

Shankara's method of teaching is viveka - discrimination. The student is asked to repeatedly discriminate between the Real and the unreal, between what persists through all experience (consciousness itself) and what changes (objects, states, emotions, thoughts, the body). What cannot be negated, what is present in deep sleep as well as waking, what illuminates all experience without itself being an object of experience - that is the Self. That is Brahman. And that is, says Shankara, what you are - not what you will become, not what you can achieve through practice, but what you already are at the deepest level, right now, as you read these words.`,
      why_it_matters: `Shankara's non-dualism is perhaps the most sophisticated response to the problem of human suffering in any philosophical tradition. The problem, as he diagnoses it, is not that bad things happen - it is that we misidentify ourselves with what changes and perishes. When the body ages, I suffer because I think I am the body. When my reputation is damaged, I suffer because I think I am my reputation. The cure is not consolation but recognition: the thing you ultimately are cannot age, cannot be damaged, cannot die. It was never born.

This is not escapism. Shankara himself was ferociously engaged in the world - debating, building institutions, traveling. His non-dualism did not produce passivity but a particular quality of engagement: action without the contraction of fear, without the grasping of ambition, without the brittleness of someone whose identity is constantly at stake. To know yourself as Brahman is not to become indifferent - it is to act from fullness rather than from the anxiety of incompleteness.`,
      practice: 'Neti Neti (Not this, not this): Sit quietly and examine your experience. Notice a thought - "I am anxious." Ask: am I this anxiety, or am I the one aware of the anxiety? Notice the body sensation - ask the same. Work through emotions, memories, and physical sensations. Each time, locate yourself as the witness. Rest in that witnessing quality. Notice that it was never anxious, never absent, never damaged by any of it.',
      closing_question: 'If the awareness in which all your experiences arise and dissolve is unchanged by any of them - what are you actually protecting?',
    },
    {
      name: 'Ramana Maharshi',
      nameHindi: 'रमण महर्षि',
      dates: '1879-1950 CE',
      origin: 'Tiruchuli, Tamil Nadu, India',
      school: 'Advaita / Self-Inquiry',
      tagline: 'The thought "I" is the root of all thoughts. Find the source of the "I" and the mind dissolves.',
      bio: `Ramana Maharshi was born Venkataraman Iyer in 1879 in a small Tamil Brahmin family in southern India. At sixteen - while sitting alone at his uncle's house in Madurai - he was seized without warning by an intense fear of death. He lay down on the floor and deliberately enacted death: holding his body rigid, stopping his breath, remaining completely still. In the stillness that followed, something happened. The fear of death completely dissolved. What remained was a vivid, luminous awareness that had not been caused by anything and could not be threatened by anything, including the death of the body. This event - spontaneous, unbidden, lasting perhaps thirty minutes - was Ramana's permanent realization of the Self. He had not sought it, not practiced for it, not been taught it. It simply occurred.

He spent the rest of his life - over fifty years - at the foot of Arunachala, a sacred hill in Tamil Nadu that he believed to be a manifestation of Shiva himself. He barely moved from the hill. People came from all over the world to sit in his presence: Paul Brunton, Somerset Maugham, Arthur Osborne, Carl Jung (who never went but was profoundly affected by accounts). His teaching method was largely silence. He sat with visitors for hours, day after day, radiating what his devotees described as palpable stillness. When pressed to teach, he gave one instruction: inquire into the nature of the "I." Not the psychological "I" with its history and preferences - but the bare, primal sense of existence that underlies all thought. Find the source of that "I" and rest there.`,
      core_idea_title: 'Atma Vichara: The Direct Path to the Self',
      core_idea: `Ramana Maharshi's contribution to spiritual philosophy is a single, elegant, devastating question: "Who am I?" Not as a conceptual puzzle to be solved intellectually, but as a living inquiry - a pointing of attention back toward its own source. Every spiritual tradition offers a path to liberation. Most involve effort: study the scriptures, practice austerities, perform rituals, accumulate merit, meditate for years, cultivate virtues. Ramana's path is different. He called it the direct path (vichara marga). The Self is not something to be acquired through effort. It is what you already are. The effort required is simply to stop identifying with what you are not - and this requires not more doing but a very specific kind of undoing: tracing the sense of "I" back to its source.

The practical procedure is this: when a thought arises - any thought, but especially a distressing one - instead of following its content, turn attention toward the one to whom the thought is arising. Ask: "Who is having this thought?" You will find another thought ("I am") - but don't stop there. Ask: "Who is this I?" Follow the sense of I back, back, back. What do you find at the very base? Not another thought. Not a mental object. But a kind of open, aware, presence - not pointed at anything, not characterized by anything, not defined by its contents. This is what Ramana calls the Self. And it is, he says, not something you discover - it is what you already are, what you have always been, what you will be after the body dies.

The radical simplicity of this teaching should not obscure its profundity. Ramana is not merely proposing a meditation technique. He is pointing at the most fundamental fact of experience: there is awareness. This awareness is not yours - you do not own it or produce it. You arise within it. Every object of experience - including the thought "I am so-and-so" - arises within this awareness and dissolves back into it. The awareness itself is never absent, never disturbed, never suffering. To know yourself as this awareness - not conceptually but experientially - is what Ramana calls liberation. And it requires, he insists, only honest attention, not years of practice.`,
      why_it_matters: `In an age of relentless outward motion - notifications, obligations, performance, consumption - Ramana's pointing is a radical counter-movement. Stop. Before you reach for the phone, before you check the next task, before you continue the narrative of your life: who is here? What is aware of this moment? Not your name, not your role, not your history - those are stories. Beneath the stories, there is something that was present before you learned any of it. Can you touch that?

Ramana's teaching matters not because it offers another technique to add to your self-improvement practice, but because it questions the very "self" that is trying to improve. The one who is dissatisfied, who seeks, who strives - who is that? If you can find the inquirer, Ramana says, you will find that what you were looking for was looking with your eyes all along.`,
      practice: 'Atma Vichara (Self-Inquiry): Set a timer for 10 minutes. Sit quietly and close your eyes. When any thought arises - pleasant or unpleasant - do not engage with its content. Instead, gently ask: "To whom is this thought arising?" Or simply: "Who am I?" Do not answer conceptually. Let the question dissolve into silence. If another thought arises, repeat the inquiry. At the end, notice the quality of the awareness that was present throughout. Rest there for one minute before opening your eyes.',
      closing_question: 'The one who is looking for peace - is that one at peace?',
    },
    {
      name: 'Nagarjuna',
      nameHindi: 'नागार्जुन',
      dates: '150-250 CE (approx.)',
      origin: 'Andhra Pradesh, India',
      school: 'Madhyamaka Buddhism',
      tagline: 'All phenomena are empty of inherent existence. This emptiness is itself empty.',
      bio: `Nagarjuna is widely regarded as the most important philosopher in the Buddhist tradition after the Buddha himself. He lived in South India, probably in the Andhra region, around the second century CE. Biographical details are sparse and mixed with legend - accounts of him producing gold for a king, living for six hundred years, and achieving tantric powers cluster around his name. What is certain is that he founded the Madhyamaka (Middle Way) school of Buddhist philosophy and wrote a series of texts that represent some of the most technically demanding philosophical argumentation in history. His principal work, the Mulamadhyamakakarika (Root Verses on the Middle Way), contains twenty-seven chapters systematically demonstrating that nothing - no object, no concept, no person, no moment - possesses svabhava: own-nature, independent, inherent existence.

The scope of Nagarjuna's philosophical project is extraordinary. He takes the central Buddhist insight - that all things are dependently originated (pratitya-samutpada) - and presses it to its logical limit. If everything arises in dependence on causes and conditions, nothing exists independently. And if nothing exists independently, nothing has an inherent, fixed essence. This is the doctrine of Shunyata - emptiness. Applied not just to physical objects but to concepts, mental states, the self, space, time, causation, and even to emptiness itself. The last point - that emptiness is empty of inherent existence - prevents Nagarjuna's philosophy from collapsing into nihilism and is one of the most sophisticated philosophical moves in the history of thought.`,
      core_idea_title: 'Shunyata: The Emptiness That Liberates',
      core_idea: `Shunyata - emptiness - is perhaps the most misunderstood concept in Indian philosophy. It does not mean nothingness. It does not mean that the world is an illusion. It does not mean that nothing matters. Nagarjuna is exquisitely careful about what he does and does not claim. Emptiness means this: all phenomena are empty of svabhava - of independent, self-sufficient, inherent existence. Nothing exists in isolation. Everything exists only in relation to everything else, arising from causes and conditions, defined through contrast and context. The flower does not exist as a self-contained, essence-bearing thing. It exists because of the seed, the soil, the rain, the sun, the gardener, the tradition of flowering - remove any of these dependencies and the flower is not the same flower. It has no essence that persists independently of its conditions.

This insight applies without exception - to physical objects, to mental states, to persons, to concepts, and even to the doctrine of emptiness itself. Here is where Nagarjuna performs his most dizzying philosophical move: emptiness is also empty. If emptiness itself had inherent existence - if it were a fixed, ultimate, self-subsisting reality - it would merely be a different kind of absolute. Instead, emptiness is a therapeutic concept: it describes reality from a certain angle, it dissolves the reification that generates suffering, but it should not itself be reified into a new absolute. The Madhyamaka is not saying "the ultimate reality is emptiness" the way Advaita says "the ultimate reality is Brahman." It is saying: release the grasping toward any fixed view, including emptiness.

The relationship between emptiness and conventional reality is one of the most important clarifications in Nagarjuna's work. He explicitly affirms the two-truths doctrine: at the conventional level (samvrti-satya), things exist, persons exist, causes and effects operate, ethical distinctions matter. At the ultimate level (paramartha-satya), nothing exists with inherent essence. These two levels do not contradict each other - they describe the same reality from different angles. The practical implication: you can act fully in the conventional world (building relationships, pursuing projects, caring for others) while understanding at the ultimate level that no thing has a fixed, imprisoning essence. This combination of full engagement and philosophical lightness is the Madhyamaka's practical gift.`,
      why_it_matters: `Nagarjuna's emptiness philosophy has direct psychological consequences. Much of human suffering is generated by what he would call reification - treating provisional, constructed, dependent phenomena as if they were fixed, essential, and permanent. "I am a failure" - this reifies a process of events into an essential attribute. "This relationship is over" - this treats something fundamentally processual as if it were a fixed object that can be declared complete. "My life has no meaning" - this treats meaning as a self-subsisting thing that either exists or doesn't, rather than as something that arises in dependent relationships between persons, projects, and commitments.

Emptiness does not dissolve the reality of these experiences - it dissolves the unnecessary rigidity we impose on them. If nothing has fixed essence, nothing is permanently, essentially, unredeemably a certain way. The person who hurt you is not essentially a bad person - they are a complex, changing, conditionally arising process who did a harmful thing in particular conditions. Holding that lightly, without removing accountability, is the middle way between naive excuse-making and hardened resentment.`,
      practice: 'Dependent Origination Meditation: Choose one object you feel strongly about - a person you love, a situation that worries you, or a belief you hold firmly. Spend five minutes tracing all the conditions that gave rise to it: what preceded it, what surrounds it, what it depends upon. Notice how it dissolves into a web of interdependence rather than remaining a solid, isolated thing. Then ask: if it has no fixed essence independent of these conditions, what does that change about how you hold it?',
      closing_question: 'What are you treating as fixed and essential that, if you looked closely, is actually a web of conditions and relationships?',
    },
    {
      name: 'Sri Aurobindo',
      nameHindi: 'श्री अरविंद',
      dates: '1872-1950 CE',
      origin: 'Calcutta, India',
      school: 'Integral Yoga / Integral Philosophy',
      tagline: 'Evolution does not end with mind. Spirit seeks to transform matter from within.',
      bio: `Sri Aurobindo Ghose was born in Calcutta in 1872, the son of a Westernized Bengali physician who was determined to raise his children as Englishmen. He was sent to England at seven and spent fourteen years there, mastering Greek, Latin, French, Italian, German, and reading widely in European philosophy and literature before becoming a scholar at King's College, Cambridge. He returned to India in 1893 as a colonial administrator and almost immediately was swept up in the nationalist movement, becoming one of its most incendiary voices. He wrote for revolutionary newspapers, organized secret societies, and in 1908 was arrested on charges of sedition and held for a year in Alipore Jail. During that year of imprisonment, his interior life was transformed. He underwent what he later described as profound spiritual experiences - including an encounter with what he called "the Overmind" - that redirected the entire trajectory of his existence.

On his release in 1910, Aurobindo traveled to Pondicherry in French India, then beyond British jurisdiction, and never returned to the nationalist struggle. He spent the remaining forty years of his life in intensive spiritual practice and writing, producing a vast philosophical corpus: The Life Divine, The Synthesis of Yoga, Savitri (a massive epic poem), Essays on the Gita, and thousands of letters to disciples. Alongside him worked Mirra Alfassa, a French spiritual seeker who came to be known simply as "the Mother," who after 1926 took over the outer running of the ashram while Aurobindo withdrew into seclusion to work on what he called "the transformation of the physical mind" - an attempt to bring spiritual force into the densest levels of matter itself.`,
      core_idea_title: 'Integral Philosophy: Matter Ascending Toward Spirit',
      core_idea: `Aurobindo's philosophy begins with a question that most spiritual traditions leave unanswered: if ultimate reality is pure consciousness - Brahman, the Absolute, Sat-Chit-Ananda - why does matter exist at all? The traditional Advaita answer (maya - cosmic appearance) seemed to Aurobindo philosophically unsatisfying. It explains the world away rather than explaining it. Aurobindo proposed instead an evolutionary vision: consciousness did not produce the world by mistake or illusion. It voluntarily "descended" into matter, "involving" itself in dense, unconscious form, and is now in the process of "evolving" back toward itself - not by escaping matter but by transforming it from within.

This gives evolution a direction and a destination. Physical evolution (atoms to molecules to cells to organisms to brains) is the first movement - matter awakening to life. Biological evolution leads to mind - life awakening to conscious thought. But for Aurobindo, mental consciousness is not the endpoint. Above mind is what he calls Supermind: a level of consciousness where the apparent contradiction between unity and multiplicity, between spirit and matter, is resolved - not by negating one side but by including both in a higher integration. The goal of Integral Yoga, as he conceived it, is to bring Supramental consciousness down into the entire system - physical, vital, and mental - transforming not just the inner life but the very substance of the body.

This vision has radical implications for how we understand spiritual practice. Most traditions treat the body as either irrelevant (some forms of Buddhism) or an obstacle (much of Jainism and certain strands of Vedanta). Aurobindo sees the body as the very site of transformation. The descent of the Supermind is not an interior event that leaves the physical unchanged - it is a transmutation of matter itself. This is what he worked toward in his last decades, and what the Mother continued after his death: an attempt to participate consciously in the next phase of evolution, not by transcending the human form but by allowing a higher consciousness to reconfigure it from within. Whether or not one accepts the metaphysical framework, the vision - of spirit not fleeing matter but fulfilling it - is one of the most original and hopeful in modern philosophy.`,
      why_it_matters: `In a world increasingly tempted toward two bad options - materialist reductionism (consciousness is nothing but neurons firing) and escapist spirituality (the world is illusion, transcend it) - Aurobindo offers a third way: consciousness is real and primary, matter is real and sacred, and the relationship between them is a story still being written. This matters not only philosophically but practically. It means that your engagement with the world - your work, your relationships, your body, your daily life - is not a distraction from spiritual development but potentially its most important arena.

Aurobindo also modeled something rare: a person who was fully capable of worldly achievement (Cambridge scholar, political revolutionary, brilliant orator) who chose interior depth over external fame. He is evidence that the choice is not between effectiveness and wisdom but that at the highest levels, they converge.`,
      practice: 'Witness Consciousness Practice: Choose one activity today - a meal, a conversation, a task at work - and perform it with a doubled awareness. One part of you engages normally with the activity. Another part remains a calm, uninvolved witness, observing the activity without being absorbed in it. This cultivation of the witness is, for Aurobindo, the beginning of the movement toward Supermind - the first step in learning to act from a consciousness larger than the habitual ego.',
      closing_question: 'If evolution has a direction and you are part of it - what in you is being called to emerge right now?',
    },
    {
      name: 'Chanakya',
      nameHindi: 'चाणक्य',
      dates: '350-275 BCE (approx.)',
      origin: 'Takshashila (ancient India)',
      school: 'Arthashastra / Political Philosophy',
      tagline: 'Power is not evil. Power without wisdom is.',
      bio: `Chanakya - also known as Kautilya or Vishnugupta - was the chief minister and political strategist to Chandragupta Maurya, the founder of the Maurya Empire, the first large-scale political unification of the Indian subcontinent. Born around 350 BCE, possibly in Takshashila (in present-day Pakistan), which was then the intellectual capital of the known world, Chanakya was educated in a tradition that took seriously the full range of knowledge: economics, military strategy, diplomacy, agriculture, law, medicine, and ethics. His masterwork, the Arthashastra (literally "the science of material gain" or "the science of statecraft"), is a systematic treatise on governance, economic policy, foreign policy, military strategy, espionage, and political philosophy that was lost for nearly two millennia before being rediscovered in 1904 by a Sanskrit librarian in Mysore.

What makes Chanakya remarkable is not merely his intellectual range but his willingness to deal with power as it actually functions, rather than as idealists wish it did. He was the architect of Chandragupta's rise from obscurity to empire - tutoring the young king, organizing the political and military strategy that overthrew the Nanda dynasty, and then serving as the empire's chief administrator. He is credited with defeating the generals of Alexander's eastern campaign and building the administration that would eventually govern the largest empire in Indian history. His methods were often ruthless - he discusses espionage, covert operations, and strategic deception without flinching. But his underlying conviction was that a strong, stable, well-governed state is the foundation of human welfare, and that achieving it requires seeing reality as it is, not as one might wish it to be.`,
      core_idea_title: 'The Science of Statecraft: Power, Wisdom, and Human Nature',
      core_idea: `The Arthashastra opens with a declaration of purpose: the welfare of subjects is the welfare of the king. This is not naive idealism - it is strategic realism. A king who impoverishes his subjects destroys the tax base that funds the army that protects the kingdom. A king who allows injustice breeds resentment that generates internal rebellion. The alignment of ruler's self-interest with subjects' welfare is not an ethical aspiration for Chanakya - it is a structural necessity. This alignment is the central organizing principle of his entire system of governance.

Chanakya's political psychology is built on a clear-eyed reading of human motivation. People are driven by self-interest, desire for status, fear of loss, and love of family. He does not moralize about this - he works with it. A good administrator designs institutions that align individual self-interest with collective welfare, rather than relying on individual virtue (which is unreliable) or fear alone (which breeds resentment and ultimately rebellion). He describes in detail how to structure reward systems, how to detect corruption, how to use informants, how to conduct foreign policy through the seven elements of state (svami - king; amatya - ministers; janapada - people; durga - fortified capital; kosha - treasury; danda - army; mitra - allies). Every element must be cultivated, maintained, and coordinated.

His foreign policy is built on the Mandala theory - a concentric circle model of international relations. Your immediate neighbors are natural rivals (since you border each other). Their neighbors are potential allies (since they are threatened by the same neighbor). This insight - that "the enemy of my enemy is my friend" is not a cynical aphorism but a structural feature of geopolitics - was formalized by Chanakya twenty-three centuries before Western international relations theory. His four tools of diplomacy - sama (conciliation), dana (gifts), bheda (division), danda (force) - remain a remarkably comprehensive taxonomy of political influence. What is striking is the ordering: force is the last resort, not the first instinct.`,
      why_it_matters: `Chanakya matters in the modern world because he refuses the split between ethics and effectiveness that much of our culture enforces. He does not say "be good and success will follow." He also does not say "do whatever it takes to win." He says: understand reality, including its harshest features, and design your actions so that they actually produce the outcomes you are trying to achieve. This is harder than both moralism and cynicism.

His realism about power is not an endorsement of power's misuse. It is a demand that people who are responsible for outcomes - leaders, parents, teachers, managers - take that responsibility seriously enough to understand the actual dynamics of the systems they inhabit. Ignorance of how power works, how human motivation functions, how institutions succeed or fail - this ignorance does not make you more ethical. It makes you less effective at actually helping the people you care about.`,
      practice: 'Strategic Clarity Exercise: Choose one situation in your life where you want a specific outcome but things are not moving. Map it using Chanakya\'s framework: Who are the stakeholders? What motivates each of them (not what you wish motivated them, but what actually does)? What resources do you have? What alliances could you build? What obstacles are structural versus what are personal? Write this out concretely. Notice the difference between thinking you understand a situation and actually mapping it.',
      closing_question: 'Where are you relying on good intentions rather than clear strategy - and what are the real consequences of that gap?',
    },
    {
      name: 'Kabir',
      nameHindi: 'कबीर',
      dates: '1440-1518 CE (approx.)',
      origin: 'Varanasi, India',
      school: 'Bhakti / Nirguna Sant Tradition',
      tagline: 'God has no temple, no mosque. God lives in the breath between your words.',
      bio: `Kabir was born around 1440 CE in Varanasi - the holiest city in India - into a family of Muslim weavers who had recently converted from Hinduism. This double marginality - low caste and Muslim in a city defined by Brahminical Hinduism - shaped everything about his voice. He is among the most beloved poets in the history of the Indian subcontinent, revered simultaneously by Hindus, Muslims, and Sikhs, claimed by all three and fully owned by none. His dohe (rhyming couplets) are still recited across north India by people who may not know their author's name. He wrote in a demotic Hindi that everyone could understand - deliberately avoiding the Sanskrit of Brahmin authority and the Persian of Mughal courts - and his words have survived as oral tradition for six centuries before any of them were written down.

Kabir's spiritual life centered on the figure of Guru Ramananda, a Vaishnava saint who - in an act of deliberate transgression - accepted Kabir as a disciple despite his Muslim birth and weaver caste. The teaching Kabir received and then transformed was the nirguna bhakti tradition: devotion to God beyond all names, forms, and attributes. Ram for Kabir is not the avatar of Vishnu from Valmiki's epic - it is a word pointing beyond itself to the formless, nameless, attribute-free divine reality that animates all existence. He wrote against pilgrimage, temple rituals, the caste hierarchy, the authority of both the Quran and the Vedas, the pretensions of religious scholars, and the self-satisfaction of the outwardly pious. What he advocated was the interior encounter with the divine - the direct, personal, unmediated experience of the Beloved who was never actually absent.`,
      core_idea_title: 'Nirguna Bhakti: The Formless Beloved Within',
      core_idea: `Kabir's spiritual philosophy rests on the concept of the nirguna (without-qualities) divine. Every religious tradition attempts to describe God - to give God a name, a form, an attribute, a location. Vishnu is blue, four-armed, bearing conch and lotus. Allah is All-Merciful, All-Knowing. Shiva has the crescent moon in his matted hair. These images are not evil for Kabir - they are doorways. But they are not the room. The ultimate reality - Ram, Hari, Allah, Sahib, he uses many names interchangeably - transcends every description. It cannot be contained in any temple or mosque, cannot be found in the Vedas or the Quran by mere recitation, cannot be purchased through ritual or pilgrimage. It can only be encountered within: in the silent stillness of a mind that has stopped performing its religion and started living it.

The practical consequence of this insight is a thoroughgoing iconoclasm. Kabir dismantles religious institution after institution - not out of nihilism but out of love. Every external form of religion can become a substitute for the interior encounter it was meant to facilitate. The Brahmin who knows all the scriptures but has not felt the presence of the divine is worse off than a simple person who has. The Muslim who makes the pilgrimage to Mecca but carries hatred in his heart has wasted the journey. Kabir reserves his sharpest language for what he calls pakhand - pretense, performance, going through the religious motions for the sake of social respectability or merit-accumulation. "Sadhu, you don't know the way to God. You look for God outside yourself - God is inside you." This is not new theology. It is the perennial tradition stripped of every protective layer.

The way Kabir describes the interior encounter is through the idiom of love - specifically, the love between lover and Beloved. This is the universal language of mysticism across traditions: Rumi's longing for the Friend, John of the Cross's dark night of the soul, the Song of Songs. The Beloved is always already here, always already closer than breath. The lover's task is not to travel to the Beloved but to become aware of the Beloved who has been present all along. The instruments for this awareness are the body (the sant tradition is deeply embodied - it involves breath practices, sound, the cultivation of interior silence), and the company of other seekers (the sangat, the satsang). The community of truth-seekers is the environment in which the interior life is nurtured.`,
      why_it_matters: `Kabir is one of the clearest voices in world culture for what we might call religious authenticity - the demand that practice produce genuine interior transformation rather than social conformity. In any religious culture, the temptation is to conflate outer performance with inner reality. You pray five times a day, you keep the Sabbath, you fast during Ramadan or Navratri - and gradually the form becomes a substitute for the substance it was meant to carry. Kabir insists: the substance is the point. The forms are useful only to the extent that they open you to the substance. When they close you instead - when they make you proud, sectarian, contemptuous of those who use different forms - they have become obstacles.

His voice across communal lines remains urgently relevant. He was Muslim by birth, Hindu by guru lineage, revered by Sikhs - and he pointed past all three. Not to abolish them, but to call each tradition's practitioners to the thing their tradition was originally about: the direct encounter with the divine reality that language and ritual can only gesture toward.`,
      practice: 'Kabir\'s Simran (Remembrance): Throughout the day, whenever you transition from one activity to another - leaving a room, finishing a task, beginning a meal - pause for a full breath and silently repeat one word or name that points to the sacred for you. Not as superstition or magic, but as a moment of remembrance: I am in the presence of something much larger than this task. Notice, after a week of this practice, whether the quality of your attention to ordinary life begins to shift.',
      closing_question: 'What would your spiritual practice look like if no one else could see it - and would you still do it?',
    },
  ],
};

// ─── Tradition 1: Western Philosophy ─────────────────────────────────────────

const WESTERN_PHILOSOPHY: DarshanTradition = {
  id: 'western',
  name: 'Western Philosophy',
  nameHindi: 'पाश्चात्य दर्शन',
  color: '#3A5A8A',
  emoji: '🏛️',
  thinkers: [
    {
      name: 'Socrates',
      nameHindi: 'सुकरात',
      dates: '470-399 BCE',
      origin: 'Athens, Greece',
      school: 'Dialectics / Moral Philosophy',
      tagline: 'The unexamined life is not worth living.',
      bio: `Socrates wrote nothing. Everything we know about him comes from those who knew him - primarily Plato, who was his student, and Xenophon, who was his contemporary. This creates a permanent interpretive puzzle: which Socrates is the real one? The mystic who heard a divine inner voice (daimon)? The ironic sophisticate who claimed to know only that he knew nothing? The committed democrat who nonetheless refused to flee his death sentence? All of these seem to be genuinely Socratic - which suggests a character of remarkable depth and apparent contradiction. Born in Athens around 470 BCE, the son of a stonemason and a midwife, Socrates spent his life in the marketplace and gymnasia of Athens engaging in philosophical conversation. He was famous, famous enough to be caricatured in Aristophanes' comedy The Clouds. He was ugly (by Athenian standards), poor, barefoot in winter, utterly indifferent to the wealth and comfort that Athenian culture prized.

In 399 BCE, he was charged with impiety and corrupting the youth of Athens, tried by a jury of 501 citizens, found guilty by a narrow majority, and sentenced to death by drinking hemlock. He refused to go into exile, refused to stop philosophizing (his counter-proposal was that Athens should pay him a pension for his public service), and refused to escape when his friends arranged it. He died at seventy, having spent his entire life doing the one thing he believed was most important: encouraging people to examine their beliefs and their lives with honest scrutiny. The sentence and his response to it gave Western civilization one of its founding images of integrity.`,
      core_idea_title: 'The Examined Life: Wisdom Through Ignorance',
      core_idea: `The Socratic method - elenchus - is a form of inquiry through dialogue that begins not with answers but with claimed knowledge. Socrates approaches a person who is reputed to be wise about some important matter - piety, justice, courage, beauty - and asks them to define it. The person gives a definition. Socrates asks a question. The definition proves inadequate. A revised definition is offered. Further questions reveal further inadequacies. The dialogue often ends in aporia - a state of genuine puzzlement, having established that what seemed like knowledge was not. What has been accomplished? Apparently nothing. Actually, everything that philosophical progress requires: the recognition that genuine knowledge in the domain of ethics and value is much rarer and harder than we suppose.

The "Socratic irony" - his claim to know nothing - is not false modesty or rhetorical trick. He seems to have genuinely believed that his wisdom, such as it was, consisted in recognizing his own ignorance, while those who were reputed to be wise failed to recognize theirs. The Oracle at Delphi had said no one was wiser than Socrates, and he spent years trying to refute this by finding genuinely wise people. He could not. This led him to conclude that the oracle's statement was true but ironic: he was wisest only in that he alone knew the limits of his knowledge.

The practical and political dimension of this is what got Socrates killed. His questioning was not gentle or welcome. It made the powerful look foolish. It pulled apart confident beliefs. It made young men watch their elders being intellectually dismantled and lose their respect for authority they had been taught was wisdom. Athens was traumatized after its defeat in the Peloponnesian War, deeply anxious about its identity and values. Socrates' ceaseless questioning felt like undermining the city's foundations at its most vulnerable moment. The trial of Socrates is the trial of free inquiry by a frightened society - and it is not the last such trial.`,
      why_it_matters: `Socrates gave Western civilization a permanent intellectual conscience. The question he embodied - do you actually know what you think you know? - is one that each generation has to answer again for itself. Every field of inquiry, every moral certainty, every social convention benefits from being subjected to genuine Socratic questioning. The alternative is not stability but stagnation: the confident maintenance of inherited beliefs that have never been examined and may not survive examination.

His death matters too. He died for the principle that thinking honestly about how to live is more important than living comfortably without thinking about it. Whatever one believes about the afterlife, this decision - to die for the practice of philosophy rather than to survive by abandoning it - has inspired and humbled reflective people for twenty-five centuries.`,
      practice: 'Socratic Self-Examination: Choose one belief you hold strongly - about yourself, your relationships, or how the world works. Write the belief as a clear statement. Now write three genuine objections to it, as if you were a skilled adversary trying to disprove it. Then write your best response to each objection. Notice where your responses are strong and where they struggle. The beliefs that survive genuine questioning become your actual convictions, not just your inherited assumptions.',
      closing_question: 'What is the belief you are least willing to examine - and what does that reluctance tell you?',
    },
    {
      name: 'Marcus Aurelius',
      nameHindi: 'मार्कस ऑरेलियस',
      dates: '121-180 CE',
      origin: 'Rome, Roman Empire',
      school: 'Stoicism',
      tagline: 'You have power over your mind, not outside events. Realize this, and you will find strength.',
      bio: `Marcus Aurelius was, for nearly two decades, the most powerful person on Earth - emperor of Rome from 161 to 180 CE. He was also a committed Stoic philosopher who wrote his Meditations not as a book for others to read, but as a private journal - a running self-examination and self-reminder about how to live, how to think, and how to govern his own mind in the face of every external pressure. The book was published after his death, almost certainly without his permission, and has never been out of print in the centuries since. It is one of the most intimate philosophical documents in history: a powerful man's private conversation with himself about his failures, his irritations, his persistent need to do better.

What is extraordinary is what the Meditations reveal about the gap between his circumstance and his preoccupations. He commanded legions on the Danube frontier, administered an empire of sixty million people, survived the Antonine Plague that killed his co-emperor and millions of subjects, and dealt with the constant political intrigues of the imperial court. His private notebook is filled with reminders to be patient with difficult people, not to be distracted by praise, to remember that everything passes, to do his duty without complaint, to treat even his worst enemies with equanimity. This is a man who could have had anything, who had everything, writing reminders to himself that he needed to be more virtuous and less self-important. He is both an ideal and a rebuke.`,
      core_idea_title: 'The Dichotomy of Control: Inner Freedom in an Outer World',
      core_idea: `Stoicism's central philosophical distinction is between what is "up to us" (eph' hemin) and what is "not up to us." Epictetus, the enslaved philosopher who was Marcus's most important Stoic influence, articulated this with particular clarity: up to us are our judgments, desires, impulses - in short, our inner life. Not up to us: our bodies, reputations, property, the actions of others, the events of the world. Most human suffering, the Stoics argued, comes from confusing these categories - wanting the body to be different than it is, wanting others to behave differently, wanting circumstances to have been otherwise. Every wish that reality were other than it is produces suffering. Every acceptance of reality as it is - not resignation, but clear-eyed acknowledgment - produces equanimity.

Marcus applies this framework continuously in the Meditations. "You have power over your mind, not outside events." "The impediment to action advances action. What stands in the way becomes the way." "Loss is nothing else but change, and change is Nature's delight." These are not aphorisms to be memorized and repeated at difficult moments - they are conclusions to be understood deeply enough that they become reflexive. The Stoic practice is not the repression of emotion but the accurate attribution of its cause. When you are disturbed by something, the disturbance is not caused by the thing - it is caused by your judgment about the thing. Change the judgment, and the disturbance changes.

Marcus was acutely aware of how difficult this practice is. The Meditations repeatedly return to the same themes - patience with difficult people, resistance to the pull of distraction, the importance of focusing on what is genuinely important rather than what is merely urgent. He clearly struggled with anger, with impatience, with the desire for appreciation. What is moving is that he never pretended otherwise. The Meditations is not the performance of a Stoic sage. It is the arduous, honest, daily practice of someone trying to become one.`,
      why_it_matters: `Marcus Aurelius matters because he demonstrates that philosophical depth and practical engagement are not opposed. He did not retreat to a monastery to pursue wisdom. He commanded armies, administered an empire, dealt with epidemic disease and constant military threat - and used philosophy as the instrument by which he maintained inner coherence through all of it. This is the most powerful possible answer to the objection that philosophy is impractical: here is a person with the full weight of the world's largest empire on his shoulders, and he considered Stoic practice indispensable to performing his duties well.

He also matters as an image of honest self-examination. He did not write the Meditations to show posterity what a good Stoic he was. He wrote them because he needed to. The gap between his ideals and his daily behavior was a genuine source of concern to him. This honesty is the starting point for actual growth - not the performance of virtue for an audience, but the frank acknowledgment of where you fall short, for yourself, and the daily recommitment to doing better.`,
      practice: 'The Evening Stoic Review: Before sleep tonight, ask yourself three questions Marcus implicitly asks in the Meditations. First: What did I do well today that expressed my values? Second: What did I do that I am not proud of, and what was the judgment that led to it? Third: What disturbed me today that was, strictly speaking, not "up to me" - and what would it have looked like to meet that with equanimity? Write briefly. Do not moralize. Observe.',
      closing_question: 'What is outside your control that you are spending the most energy trying to control - and what would change if you stopped?',
    },
    {
      name: 'Immanuel Kant',
      nameHindi: 'इम्मानुएल कान्ट',
      dates: '1724-1804 CE',
      origin: 'Konigsberg, Prussia (Germany)',
      school: 'Critical Philosophy / Transcendental Idealism',
      tagline: 'Act only according to that maxim by which you can at the same time will that it should become a universal law.',
      bio: `Immanuel Kant lived his entire life within a few miles of Konigsberg, the Prussian city of his birth, and the legend is that his neighbors could set their clocks by his daily afternoon walk. He was punctual, methodical, frugal, and physically unimposing - barely five feet tall, physically frail, plagued by health anxieties. He was also the most important philosopher in European history since Plato and Aristotle, and his three Critiques - the Critique of Pure Reason (1781), the Critique of Practical Reason (1788), and the Critique of Judgment (1790) - fundamentally restructured the questions that philosophy asks and the terms in which it asks them. Reading Hume, he said, woke him from his "dogmatic slumber" - the comfortable assumption that reason could simply read off the structure of reality. Instead, he proposed that the mind actively constitutes experience, imposing its own structures (space, time, causality) on the raw data of sensation. We never experience "reality in itself" (das Ding an sich) - only reality as organized by the apparatus of human cognition.

This was not merely an academic point. It meant that the traditional proofs of God's existence (the cosmological, ontological, and teleological arguments) were illegitimate: they tried to extend concepts that apply only within possible experience beyond the limits of possible experience. God, freedom, and the immortality of the soul are what Kant called "ideas of pure reason" - they cannot be known theoretically, but they are, he argued, necessary postulates of practical reason: we must act as if freedom exists, as if God exists, as if moral action has ultimate significance - not because we can prove these things but because morality requires them.`,
      core_idea_title: 'The Categorical Imperative: Morality From Reason Alone',
      core_idea: `Kant's moral philosophy begins with a question: what makes an action morally right or wrong? Not its consequences (which are uncertain and often beyond our control). Not whether it makes us or others feel good (which varies with circumstance). Not whether it is commanded by authority (which raises the question of why that authority should be obeyed). For Kant, the source of moral obligation is reason itself - specifically, the rational nature that we share as human beings. An action is right if it can be universalized: if the maxim behind it could consistently be willed to be a universal law without contradiction.

This is the Categorical Imperative, and Kant gives it several formulations. The first: "Act only according to that maxim by which you can at the same time will that it should become a universal law." If I am considering lying to get what I want, I ask: what if everyone lied whenever it served them? The practice of making promises would collapse, because no one could trust any promise. Lying undermines the very institution it tries to exploit. Therefore, lying violates the categorical imperative - not because it has bad consequences in this case, but because it is structurally self-defeating when universalized. The second formulation: "Act so that you treat humanity, whether in your own person or in that of another, always as an end and never as a means only." This is the dignity principle: every human being has a moral worth that cannot be reduced to their usefulness for your purposes.

What is philosophically radical about this is the location of moral authority. Kant places it entirely within the rational agent. You do not need God to tell you murder is wrong - you can work it out from reason alone. You do not need social convention to tell you that exploitation is wrong - you can derive it from the categorical imperative. This is simultaneously liberating (the moral law is accessible to everyone who reasons) and demanding (you cannot excuse bad behavior by pointing to social norms, divine commands, or emotional impulses - if you can reason, you can know what you ought to do).`,
      why_it_matters: `Kant's ethics are the foundation of modern human rights discourse. The principle that every human being has dignity that cannot be violated regardless of their utility - regardless of their race, gender, social class, nationality, or any other contingent feature - is a Kantian insight. When we say that certain things must not be done to people even if the consequences would be beneficial (no torture, even of terrorists who might have useful information; no sacrifice of one person to save five), we are reasoning in a Kantian framework whether we know it or not.

He also gave us a powerful diagnostic tool for ethical failures: ask of any action, "Could I will that everyone in my situation do this?" The person who cheats on their taxes while relying on public services, the person who lies when it is convenient but expects honesty from others, the person who breaks promises when keeping them becomes difficult - all of these fail the universalizability test. They are, in Kantian terms, making themselves exceptions to rules they require others to follow.`,
      practice: 'Kantian Moral Mirror: Think of one action you are considering that feels ethically ambiguous. Write out the maxim behind it ("I will do X when Y"). Then ask: What would happen if everyone acted on this maxim in similar circumstances? Would the practice the maxim depends on survive universal adoption? Then ask the dignity formulation: am I treating anyone - including myself - merely as a means to an end, rather than as an end in themselves? Notice what the exercise reveals.',
      closing_question: 'Is there a way you are treating yourself or someone else merely as a means to an end - and what would it cost you to stop?',
    },
    {
      name: 'Friedrich Nietzsche',
      nameHindi: 'फ्रेडरिक नीत्शे',
      dates: '1844-1900 CE',
      origin: 'Rocken, Prussia (Germany)',
      school: 'Existential Philosophy / Will to Power',
      tagline: 'Become who you are. There is no fact of who you are to discover - only a self to create.',
      bio: `Friedrich Nietzsche was born in 1844 in Saxony, the son of a Lutheran minister who died when Friedrich was four. He was precociously brilliant, appointed professor of classical philology at Basel at twenty-four - before he had even completed his doctorate - and wrote his first major work, The Birth of Tragedy, at twenty-seven. His friendship with Richard Wagner was among the most formative relationships of his intellectual life, and his subsequent estrangement from Wagner - whom he came to see as an artist who had surrendered his integrity to German nationalism and Christian ressentiment - produced some of his most scorching prose. By thirty-five he had resigned his professorship due to deteriorating health (severe migraines, near-blindness, digestive disorders) and spent the next decade as a nomad, living on a small pension in cheap boarding houses in Switzerland and Italy, writing with extraordinary productivity and intensity.

In 1889, in Turin, he collapsed in the street, apparently throwing his arms around a horse that was being beaten by its driver. He never recovered his sanity. He lived his final eleven years in complete mental incapacity, cared for first by his mother and then by his sister Elisabeth, who managed his literary estate with an ideological agenda that Nietzsche would have despised. She famously prepared his unpublished notebooks - especially The Will to Power - in a selective and distorted way that made him appear proto-fascist. He was, in fact, a fierce critic of German nationalism and anti-Semitism - but Elisabeth's editorial control meant that his work was weaponized by the very ideology he had opposed. Recovering the real Nietzsche from this history is still in progress.`,
      core_idea_title: 'The Will to Power and the Creation of Value',
      core_idea: `Nietzsche's declaration that "God is dead" is perhaps the most famous philosophical statement of the modern era, and also perhaps the most misunderstood. He is not making a theological argument for atheism. He is describing a cultural-psychological event: the modern Western world has lost the metaphysical foundation - the belief in a transcendent source of absolute value and meaning - that organized its culture for two thousand years. This is not a cause for celebration for Nietzsche. It is a crisis. If God is dead, the values that were founded on God are also without foundation. Good and evil, truth and falsehood, beauty and ugliness - all of these require renegotiation. The question is whether the culture will have the courage to do this renegotiation consciously, or whether it will collapse into nihilism.

The concept of the will to power is Nietzsche's answer to the question of what drives life in the absence of transcendent purpose. It is badly named - he does not mean the desire to dominate others. He means something closer to the drive toward self-overcoming, self-creation, the expansion of one's capacities. Life, for Nietzsche, is not essentially driven by the desire for pleasure or the avoidance of pain (as Schopenhauer and the utilitarians thought). It is driven by the desire to grow, to create, to become more of what one is. This drive is not selfishness but vitality - the energy that is expressed both in the artist who creates a masterwork and the thinker who destroys their own previous position in order to think more clearly.

The Ubermensch (Overman, or Superman) is Nietzsche's image of the person who creates their own values rather than inheriting them - who takes full responsibility for the meanings by which they live, rather than borrowing them from tradition, convention, or peer pressure. This is not a genetic or social elite - it is a type of selfhood, available in principle to anyone who has the courage to be genuinely honest about what they value, to say yes to their own life in all its particularity, and to take responsibility for creating a life that expresses that yes. The test is the "eternal recurrence": could you affirm your life so completely that you would willingly live it again, exactly as it has been, an infinite number of times?`,
      why_it_matters: `Nietzsche is essential for the modern world because he is the clearest diagnostician of a problem we are still living with: the collapse of inherited meaning systems without the development of the capacity to create meaning from within. Nihilism - the feeling that nothing ultimately matters, that all values are arbitrary, that existence is pointless - is one of the defining pathologies of contemporary life. Nietzsche does not solve this problem. He insists that it cannot be solved by returning to the old foundations (religious or otherwise) but only by going through it: by developing the capacity to create meaning, to affirm life, to will one's values into existence through honest commitment.

He also provides the most rigorous analysis of what he calls ressentiment - the psychological mechanism by which those who feel powerless or inferior secretly invert the values of those they envy, calling weakness "humility," failure "purity," aggression "justice." This mechanism is still at work everywhere in political and social life, and naming it (even if Nietzsche's examples are often unfair) is genuinely useful.`,
      practice: 'Nietzsche\'s Eternal Recurrence Test: Imagine that you will live your exact current life an infinite number of times - every joy, every regret, every ordinary Tuesday, exactly as it is. Ask yourself: which aspects of your life do you find you can affirm with that intensity? Which aspects does this test reveal as things you are tolerating rather than choosing? Notice the difference between the parts of your life you are genuinely saying yes to and the parts you are simply enduring.',
      closing_question: 'What values do you actually live by - not the ones you claim to hold, but the ones visible in your daily choices?',
    },
    {
      name: 'Simone de Beauvoir',
      nameHindi: 'सीमोन द बोवुआर',
      dates: '1908-1986 CE',
      origin: 'Paris, France',
      school: 'Existential Feminism',
      tagline: 'One is not born a woman, but becomes one. And one can become otherwise.',
      bio: `Simone de Beauvoir was born in Paris in 1908 into a conventional bourgeois family that became less conventional as the First World War depleted the family's resources. She was a brilliant student and at twenty-one, sat the highly competitive aggregation in philosophy at the Ecole Normale Superieure, coming second in France - after Jean-Paul Sartre, who was sitting it for the second time. The jury reportedly could not agree on whether she or Sartre should be first. She was the youngest person to pass the aggregation that year, and one of only a handful of women to have done so. She and Sartre began their famous, unconventional relationship that year and maintained it - through other lovers, political conflicts, enormous intellectual collaboration, and bitter personal episodes - until his death in 1980.

The Second Sex, published in 1949, is one of the most important books of the twentieth century. It introduced to feminist thought the foundational insight that "woman" is not a biological given but a social construction - that women have historically been positioned as Other relative to the male as norm, and that this positioning is not natural or inevitable but the product of specific historical, economic, and cultural arrangements. De Beauvoir documented this with extraordinary range: mythology, psychoanalysis, history, biology, literature - all brought to bear on the question of why women have historically been denied the status of full human subjects. The book had an immediate and massive impact, was immediately condemned by the Catholic Church and the French Communist Party, and is still generating feminist theory and argument.`,
      core_idea_title: 'The Other: Existentialism and the Construction of Gender',
      core_idea: `De Beauvoir's fundamental philosophical move is the application of Sartrean existentialism to the situation of women. Sartre's existentialism holds that human beings have no fixed essence - we are radically free, and what we make of our freedom defines what we are. But Sartre, de Beauvoir observed, had worked this out from the perspective of a male subject who was never systematically treated as Other. Women had been systematically denied the status of free subject - defined not by their own projects and choices but by their relation to men: as wife, mother, daughter, lover. They were, in Hegelian terms, the Other against which the Self (male) defined itself.

The distinction de Beauvoir draws between "situation" and "essence" is crucial. She does not claim that women are ontologically different from men - both are free, both are subjects, both are capable of authentic existence. But the historical, social, and economic situation of women has been organized to suppress this freedom, to encourage women to embrace their status as Other, to find their identity in their relationships with and service to men rather than in their own projects and values. This is what she calls "immanence" - living for the maintenance of life, for reproduction and care, rather than for the transcendence that characterizes fully free human existence. The question is not whether women can transcend - they can - but whether the conditions of their social existence allow and encourage them to.

Her prescription is not simply to demand the same rights as men - though she supports this. It is to transform the entire social arrangement that produces the situation of women's immanence in the first place: economic dependence, restrictions on contraception and abortion, exclusion from public life, the allocation of domestic labor. Until these structural conditions change, formal legal equality will produce only a small expansion of freedom for privileged women, while leaving the majority in their structurally subordinate situation. This is the insight that distinguishes her feminism from liberalism and aligns it with socialist feminism, though she is more careful than either category allows.`,
      why_it_matters: `De Beauvoir matters because she revealed that what we experience as natural is often the sedimented result of historical arrangements that could have been otherwise - and could be otherwise still. The insight that "one is not born a woman" has proven far more generative than even she anticipated: it applies not just to gender but to race, class, disability, sexuality - any social identity that is experienced as fixed and essential but is actually produced through specific social practices and power relations.

Her personal life - the choice not to marry, not to have children, to maintain an intellectual and erotic partnership on unconventional terms, to support other women financially and emotionally while pursuing her own writing - was itself a philosophical experiment. She was trying to live the kind of life she was theorizing: a life of genuine transcendence, of authentic self-creation, in the face of every social pressure to subsume her identity into the roles that the culture made available.`,
      practice: 'Situatedness Examination: Choose one aspect of your life that feels fixed, natural, or inevitable - a role you play, a limitation you accept, a choice you never question. Ask: is this essential to who I am, or is it a product of my specific historical, social, and economic situation? Who benefits from my accepting this as natural? What would change if I held it more loosely? Notice the resistance that this questioning generates - that resistance is itself important information.',
      closing_question: 'What do you experience as your nature that might actually be your situation - and what would become possible if you told that story differently?',
    },
    {
      name: 'Ludwig Wittgenstein',
      nameHindi: 'लुडविग विटगेंस्टाइन',
      dates: '1889-1951 CE',
      origin: 'Vienna, Austria',
      school: 'Philosophy of Language / Language Games',
      tagline: 'The limits of my language mean the limits of my world.',
      bio: `Ludwig Wittgenstein was born in 1889 into the wealthiest family in the Austro-Hungarian Empire - his father was an industrialist whose salon was attended by Brahms, Mahler, and Klimt. One of eight children in a family of extraordinary talent and equally extraordinary tragedy (three of his brothers committed suicide), Ludwig was sent to study engineering in Berlin and Manchester before being drawn to the philosophy of mathematics, which led him to Cambridge and Bertrand Russell. His Tractatus Logico-Philosophicus, completed during his service in the Austrian Army in World War One (he spent time in an Italian prisoner-of-war camp), was published in 1921 and immediately hailed as a masterwork of logical positivism - an attempt to specify the logical limits of language and thereby solve or dissolve all philosophical problems at once.

Believing he had solved all philosophical problems, Wittgenstein gave away his enormous inheritance, trained as an elementary school teacher in remote Austrian villages (where he was reportedly terrifying to the children), worked as a monastery gardener, and designed a house for his sister with architectural perfection and no concessions to comfort. He returned to philosophy in the late 1920s, convinced he had been wrong in the Tractatus, and spent the rest of his life developing a radically different account of language - one that culminated in the Philosophical Investigations, published posthumously in 1953. He died of cancer in 1951 at his doctor's house in Cambridge, reportedly saying "Tell them it's been wonderful." It is one of the very few moments in which Wittgenstein seems to have been unambiguous.`,
      core_idea_title: 'Language Games: Meaning Is Use',
      core_idea: `The early Wittgenstein of the Tractatus held that language's primary function is to picture facts about the world - that meaningful sentences mirror atomic states of affairs, and that anything which cannot be pictured in this way (ethics, aesthetics, the meaning of life) cannot be said, only "shown," and must be passed over in silence. This was a powerful and influential picture of language. The later Wittgenstein of the Investigations believed it was completely wrong, and that it was the source of most philosophical confusion.

The later view: language is not primarily a picture of reality. It is a collection of practices embedded in forms of life - activities, institutions, relationships, customs that give words their meaning. He calls these practices "language games." The word "game" is deliberate: it acknowledges that language use follows rules, but that the rules are not external, fixed, pre-given - they emerge from practice. The meaning of a word is not a mental image attached to it, not the object it names, not an abstract logical relation. It is its use - the way it functions within the language game. "The meaning of a word is its use in the language" is perhaps the most compact summary of the later Wittgenstein.

This has an important consequence: many traditional philosophical problems arise from taking a word that functions in one language game and using it in another, producing nonsense that looks like deep questions. "What is time?" is not a question about a hidden entity called time that philosophy can illuminate. It is a result of taking "time" out of the language games where it functions perfectly well ("What time is it?" "We haven't much time." "Time flies") and asking it to function in a context where it has no clear use. The proper philosophical response is not to answer the question but to trace the source of the confusion - to return words "from their metaphysical to their everyday use." Philosophy's task is therapeutic, not constructive.`,
      why_it_matters: `Wittgenstein teaches us to be suspicious of the way language seduces us into pseudo-problems. We ask "What is justice?" as if justice were a thing to be found, like a mineral deposit. We ask "What is consciousness?" as if there were a fact of the matter waiting to be discovered, rather than a contested field of language games from which no single "answer" can emerge without choosing sides about which game to play. This is not relativism - Wittgenstein is not saying that all views about justice are equally valid. He is saying that the question needs to be broken down into more specific questions whose answers matter practically.

His later work also points to the deeply social character of meaning. Private language is impossible for Wittgenstein - you cannot have a language that only you understand, because language requires a practice, and practices require community. This has profound implications for individualism: the inner life that feels most private and personal - our emotions, our sense of self, our most intimate beliefs - are constituted in and through shared practices of language. We are more communal, more interpersonal, more deeply constituted by our relationships than the Western tradition's privileging of the individual subject suggests.`,
      practice: 'Language Mapping Exercise: Choose a word that causes you regular confusion or distress - perhaps "success," "failure," "love," or "enough." Spend ten minutes writing down all the different contexts in which you use this word, and notice how its meaning shifts between them. "Success" in a business context, in a relationship, as a parent, as an artist - are these the same game? Notice whether some of your suffering about this word comes from importing its meaning from one game into another.',
      closing_question: 'What philosophical question troubles you most - and is it a genuine question, or a language game played in the wrong context?',
    },
  ],
};

// ─── Tradition 2: Eastern & Chinese Philosophy ────────────────────────────────

const EASTERN_PHILOSOPHY: DarshanTradition = {
  id: 'eastern',
  name: 'Eastern & Chinese Philosophy',
  nameHindi: 'पूर्वी दर्शन',
  color: '#4A7C59',
  emoji: '☯️',
  thinkers: [
    {
      name: 'Laozi',
      nameHindi: 'लाओज़ी',
      dates: '6th century BCE (traditional)',
      origin: 'Chu State, China',
      school: 'Taoism',
      tagline: 'The Tao that can be spoken is not the eternal Tao. The way that yields is the way that endures.',
      bio: `Laozi (or Lao Tzu) is a figure wrapped so completely in legend that scholars debate whether he existed at all as a single individual. According to tradition, he was a keeper of the imperial archives in the Zhou dynasty court who, in old age, disillusioned with the moral decline of civilization, set out for the western frontier on a water buffalo. A border guard recognized him and begged him to leave some record of his wisdom before disappearing. He sat down and wrote the Tao Te Ching - eighty-one short chapters, five thousand Chinese characters, one of the most translated and commented-upon texts in human history - and then continued into the unknown. Whether this story is literally true is philosophically irrelevant: the Tao Te Ching exists, and it contains some of the most compressed and powerful wisdom about power, leadership, nature, and the limits of language that any tradition has produced.

The Tao Te Ching is almost certainly a composite text, compiled over centuries and reflecting multiple voices, unified by a coherent set of concerns: the nature of the Tao (the Way), the cultivation of te (virtue or power), the paradox of wu wei (non-action or effortless action), and the critique of aggressive, willful, self-assertive approaches to governance, knowledge, and life. It addresses rulers, sages, warriors, and individual practitioners simultaneously. Its language is deliberately paradoxical, elusive, and image-based - pointing at something that cannot be directly stated, like a finger pointing at the moon. "The Tao that can be named is not the eternal Tao" is its opening statement: a warning against taking any conceptual formulation of its content as the thing itself.`,
      core_idea_title: 'The Tao and Wu Wei: The Power of Non-Striving',
      core_idea: `The Tao - usually translated as "the Way" - is the foundational concept of Taoist philosophy, and it immediately resists definition. It is not God in the Western sense - it has no personality, no intentions, no moral demands, no relationship with humanity. It is not an abstract principle like causality. It is something closer to the underlying order and flow of reality itself - the way things naturally tend, the source from which all things arise and to which they return. Water illustrates it best for Laozi: water is soft, yielding, non-assertive - it does not force its way over or through obstacles but finds the path of least resistance. And yet water carves canyons, fills every low place, is indispensable to all life. The apparent weakness of water is its actual power. This is Tao in action.

Wu wei - non-action or effortless action - is the practical principle that flows from understanding the Tao. It does not mean passivity or inaction. It means action that is perfectly aligned with the natural flow of situations, that does not force or strain, that does not exceed what the situation requires. The skilled archer in wu wei does not think about archery - the arrow simply flies. The skilled ruler in wu wei does not impose order through legislation and enforcement - the people order themselves, because the conditions for natural flourishing have been created. The contrast Laozi draws is with wei (deliberate striving): the ruler who issues constant edicts, the person who obsessively plans and controls, the one who forces outcomes through will and effort. This striving is not only exhausting - it is counterproductive. It stiffens what should be fluid, complicates what should be simple, generates the very resistance it tries to overcome.

The concept of yin and yang - though associated more with later Taoist and Chinese cosmological thought - is implicit throughout Laozi's text. Reality moves in cycles: the full empties, the empty fills. High and low define each other. Strength and weakness are not fixed attributes but positions in a continuous flow. The sage, understanding this, does not fight the rhythm of things. When circumstances call for yielding, the sage yields - knowing that this is not weakness but wisdom. When circumstances call for action, the sage acts - but action arising from the depth of non-striving rather than from the anxiety of ego-assertion. This is the highest leadership, the highest wisdom, the highest art: to act from the Tao's own impulse rather than from the smaller, contracted, frightened perspective of the individual will.`,
      why_it_matters: `The Tao Te Ching offers a profound critique of the cult of effort, striving, productivity, and willful control that dominates modern life. There is a kind of mental health in the Taoist teaching that has rarely been surpassed: the recognition that not everything can or should be forced, that some things require patience and allowing rather than effort and control, that the deepest effectiveness often looks, from the outside, like doing nothing.

Leadership theory has been particularly influenced by Taoist ideas - the insight that the best leaders create conditions for others to flourish rather than controlling every outcome, that inspiring trust is more powerful than imposing authority, that simplicity and clarity are more effective than complex systems of management. These are not management clichés. They are insights that, when genuinely practiced, transform the quality of human organization.`,
      practice: 'Wu Wei Practice: Today, choose one area of your life where you have been straining, forcing, or effortfully trying to make something happen. Instead of adding more effort, pause. Ask: what would happen if I stopped pushing and started listening? What does the situation actually call for, if I stop imposing my agenda on it? Spend fifteen minutes in this listening mode before deciding on any action. Notice what naturally arises.',
      closing_question: 'What in your life are you forcing that, if you released your grip, might find its own way?',
    },
    {
      name: 'Confucius',
      nameHindi: 'कन्फ्यूशियस',
      dates: '551-479 BCE',
      origin: 'Lu State, China (present-day Shandong)',
      school: 'Confucianism / Social Ethics',
      tagline: 'It is not the failure of others to recognize your abilities that should trouble you, but rather your failure to recognize theirs.',
      bio: `Kong Qiu - known in the West as Confucius, a Latinization of "Kongfuzi" (Master Kong) - was born in 551 BCE in the state of Lu in what is now Shandong province. His family was of minor aristocratic descent but reduced circumstances, and he grew up without the wealth and connections that ease upward mobility in aristocratic society. He educated himself broadly, became a teacher of the ritual arts (music, archery, calligraphy, history, and the rites that organized Zhou society), and eventually attracted a group of dedicated disciples whose conversations with him are preserved in the Analects - a loosely organized collection of sayings, dialogues, and anecdotes compiled after his death.

Confucius spent years traveling from state to state seeking a ruler who would implement his vision of good governance - based on ritual propriety, humaneness, and the cultivation of virtue in both rulers and subjects. He never found such a ruler, and the wandering period of his life, which he undertook in his fifties, was marked by poverty, disappointment, and occasional physical danger. He returned to Lu in his late sixties and spent his final years teaching. He died in 479 BCE, disappointed by his practical failure but having established an intellectual tradition that would become the dominant organizing framework of Chinese civilization for the next two thousand years. Confucianism shaped Chinese government, education, family organization, and social ethics so thoroughly that even today, in a China officially committed to Marxism, the Analects are quoted in policy speeches and Confucian temples are government-maintained tourist attractions.`,
      core_idea_title: 'Ren and Li: Humaneness and the Cultivation of Character',
      core_idea: `The two central concepts in Confucius's philosophy are ren (often translated as humaneness, benevolence, or love) and li (ritual propriety, the ceremonial forms that organize social life). These two concepts are deeply related: ren is the inner quality, li is its outer expression. A person of ren embodies genuine care for others, expressed through the meticulous performance of the social rituals that structure human relationships - the ceremonies of birth, death, and marriage; the rituals of greeting and farewell; the elaborate formal protocols of court and family. This might seem backward - why should genuine inner virtue express itself through formal external ceremony? Confucius's answer: the rituals are not empty forms but the accumulated wisdom of civilization, the distilled expression of right relationship that many generations have worked out. To perform them correctly, and with sincerity, is to participate in that wisdom. To perform them cynically or to abandon them is to cut oneself off from the resources of communal moral life.

The concept of zhengming - the rectification of names - is one of Confucius's most important practical ideas. When a disciple asks what he would do first if given political power, Confucius says he would rectify names: make sure that words mean what they should mean, that roles are filled by people who genuinely embody what those roles require. A father who does not act as a father should, a ruler who does not govern as a ruler should - these are corruptions of the social fabric that begin with the corruption of language. The general principle: when the categories by which we organize social life lose their integrity - when institutions stop meaning what they claim to mean - the social order deteriorates. The restoration begins with honesty about what things actually are.

The junzi - the "gentleman" or "exemplary person" - is Confucius's image of the fully cultivated human being. Originally an aristocratic term referring to social class, Confucius transforms it into a moral category: the junzi is defined not by birth or wealth but by the quality of their character, their commitment to self-cultivation through learning and practice, their capacity for genuine ren, and their ability to inspire others through the example of their own virtue. This democratization of moral excellence - the insistence that character, not class, is what matters - was radical in its context.`,
      why_it_matters: `Confucius's social philosophy remains deeply relevant because it takes seriously something that individualist Western philosophy tends to undervalue: the constitutive role of relationships and social roles in human identity and flourishing. We are not isolated atomic individuals who then choose to enter relationships. We are from the beginning constituted by relationships - as children, as siblings, as members of families and communities. Confucius's ethics begins with these relationships and asks how each of them can be enacted with integrity and genuine care.

His emphasis on self-cultivation is also deeply practical. The Confucian tradition insists that character is not fixed but cultivable - that through deliberate practice, attention, and the study of exemplary models, a person can develop more integrity, more humaneness, more wisdom. This is not naive optimism. It is a commitment to the idea that the most important project of a human life is becoming a better human being, and that this project is never finished.`,
      practice: 'Relationship Inventory: Confucius organized moral life around five relationships (ruler-subject, parent-child, husband-wife, elder-younger sibling, friend-friend). Choose one relationship in your life that you want to strengthen. Ask: what does the role I occupy in this relationship actually require of me? Not what I feel like doing, not what is convenient, but what genuine care and integrity in this role would look like. Take one concrete action today in that direction.',
      closing_question: 'In which relationship in your life are you performing the role without living it - and what would living it actually require?',
    },
    {
      name: 'Zhuangzi',
      nameHindi: 'ज़ुआंगज़ी',
      dates: '369-286 BCE (approx.)',
      origin: 'Meng, China (present-day Henan)',
      school: 'Taoism / Philosophical Relativism',
      tagline: 'Once I dreamed I was a butterfly. Now I wonder: am I a man who dreamed of being a butterfly, or a butterfly dreaming I am a man?',
      bio: `Zhuang Zhou - known as Zhuangzi (Master Zhuang) - is one of the most delightful and philosophically radical thinkers in any tradition. A near-contemporary of Mencius and a generation after Confucius, he developed the Taoist philosophy of Laozi in a radically different direction: away from laconic aphorism toward elaborate narrative, parable, comedy, and the deliberate destabilization of the reader's most basic assumptions. The Zhuangzi text (attributed to him but compiled by later editors) contains some of the most imaginative philosophical writing in world literature: a cook who carves an ox with such perfect skill that his knife never touches bone, a man whose legs are being devoured by disease who is perfectly content because he understands the transformation of things, a giant fish who becomes a bird and flies ninety thousand li, a conversation between a skull and a philosopher about whether death is really worse than life.

Almost nothing is known about Zhuangzi's life with certainty. He apparently held a minor government post at some point and consistently refused more prestigious positions. When the King of Chu sent ambassadors offering him the position of prime minister, he compared himself to a sacred tortoise used in divination: better to be alive dragging its tail in the mud than dead and enshrined in a temple. This preference for vitality and freedom over prestige and honor runs through all his work. He was poor, unconventional, and apparently found everything - death, social convention, philosophical debate, his own ideas - inexhaustibly funny.`,
      core_idea_title: 'Perspectives, Transformation, and the Great Leveling',
      core_idea: `Zhuangzi's philosophy is built on a radical relativism about perspectives. Every view is a view from somewhere - every judgment, every preference, every evaluation is conditioned by the standpoint from which it is made. What is large to a flea is small to an elephant. What is short-lived to a human is long-lived to a mayfly, and the mayfly's perspective on the human's is no less valid than the human's perspective on the mayfly's. This is not a claim that all perspectives are equally true in any absolute sense - it is a demonstration that the concepts of "large/small," "long-lived/short-lived," "better/worse" are relative to a framework of comparison, and that different beings inhabit different frameworks. The sage understands this and therefore holds their own framework - their own standards of judgment - more lightly.

The concept of qi hua - the transformation of things - is one of Zhuangzi's most important ideas. Nothing is permanent. Everything flows into everything else. The boundary between life and death, between dreaming and waking, between human and animal, between self and world - these are real but provisional, useful for navigating conventional life but not ultimately fixed. His most famous passage - the butterfly dream - makes this visceral: if I am dreaming I am a butterfly, and I cannot be sure whether I am now a man dreaming of being a butterfly or a butterfly dreaming of being a man, what is the "real" me? The question doesn't necessarily have an answer - and Zhuangzi's point is not to induce anxiety but to loosen the grip of the fixed self-concept that generates so much unnecessary suffering.

The "great leveling" (qi wu lun) - the title of one of the most important chapters - is the recognition that all things, seen from the perspective of the Tao, are equivalent. This does not mean we should stop making distinctions in practice (we should not treat food and poison as equivalent). It means that the absolute value judgments we make - this tradition is correct, that one is wrong; this life is worth living, that one is not - these judgments arise from particular, limited perspectives that the Tao contains without privileging any. The sage who achieves this perspective does not become passive or indifferent - they become spontaneously responsive, free from the rigidity of fixed preference, able to flow with situations like water flows with terrain.`,
      why_it_matters: `Zhuangzi's philosophy is one of the great resources for psychological flexibility. The capacity to hold your own perspective without being imprisoned by it - to know that your framework is one among many, that what seems large from here is small from there, that the thing you are sure matters most might appear differently from a vantage point you haven't occupied yet - this is a kind of cognitive freedom that most people rarely attain.

His attitude toward death is particularly valuable. Rather than denying death, transcending it through afterlife belief, or facing it with grim Stoic fortitude, Zhuangzi recommends transformation: death is the Tao transforming this particular form into another. When his wife died, he was found drumming on a bowl and singing. When challenged, he said: at first he wept, but then he reflected - before she was born, there was no form. When she was born, there was form. Now her form has transformed again. Why should he weep at the Tao's transformation of things?`,
      practice: 'Perspective Rotation: Choose one situation that is causing you distress. Write a description of it from your current perspective. Then write the same situation from three radically different perspectives - a wise elder, a child, someone who will live in this place a hundred years from now, or even a non-human observer. Notice how the situation transforms as the perspective changes. Notice which elements remain constant and which are artifacts of your particular standpoint.',
      closing_question: 'What would you lose if you held your most firmly fixed belief about yourself or your situation a little more lightly?',
    },
    {
      name: 'Sun Tzu',
      nameHindi: 'सन त्सू',
      dates: '544-496 BCE (approx.)',
      origin: 'Qi State, China',
      school: 'Strategic Philosophy',
      tagline: 'The supreme art of war is to subdue the enemy without fighting.',
      bio: `Sun Tzu - Sun Wu, to give his personal name - was a military general and strategist in the late Spring and Autumn period of Chinese history, traditionally dated to around 544-496 BCE. The historical record is sparse and mixed with legend: he is said to have served King Helü of Wu, demonstrating his military discipline by ordering the execution of the king's two favorite concubines when they failed to follow his commands during a demonstration exercise. The Art of War (Bing Fa, literally "military rules"), attributed to him, was composed around the 5th century BCE and is the oldest known work of military strategy in the world. It is also among the most widely read books in history - a text that has been continuously studied and applied not only in military contexts but in business strategy, sports coaching, political negotiation, and personal life management.

The Art of War is a short text - thirteen chapters, perhaps six thousand Chinese characters - but it is extraordinarily dense. Every statement is a principle applicable across multiple domains, stated with a brevity that rewards extended reflection. The text was rediscovered in the West in the eighteenth century through a French Jesuit translation, and its influence on Napoleonic strategy is documented. In the twentieth century it was required reading for Mao Zedong and the Viet Cong, and since the 1980s it has been a staple of business school curricula worldwide. Its longevity is not accident: the principles of strategy - knowing yourself and your opponent, conserving strength, turning the enemy's power against itself, acting decisively when opportunity presents - are applicable wherever there is conflict or competition.`,
      core_idea_title: 'The Art of Strategy: Victory Without Destruction',
      core_idea: `The most important principle in The Art of War is one that contradicts the common understanding of military strategy: the supreme victory is winning without fighting. Sun Tzu consistently argues that the optimal outcome in any conflict is to render conflict unnecessary - to so thoroughly understand the situation, so perfectly position your forces, and so completely demoralize or outmaneuver your opponent that they capitulate or withdraw without a battle being fought. Battle is expensive, unpredictable, and destructive to both sides. The general who wins through strategy rather than force is not only more effective but preserves the resources - troops, supplies, morale - needed for subsequent challenges.

This principle rests on two foundational requirements: self-knowledge and knowledge of the opponent. "Know yourself and know your enemy; in a hundred battles you will never be in peril." Self-knowledge means an honest assessment of your own strengths and weaknesses, your resources, your vulnerabilities, your temperament under pressure. Knowledge of the opponent means the same - their strengths, weaknesses, intentions, morale, and decision-making patterns. Most failures in conflict, Sun Tzu suggests, arise from self-deception in one of these domains: overestimating your own strength, underestimating the opponent's, or misreading the opponent's intentions. The solution is not more force but better intelligence - better understanding of the actual situation.

The concept of shi (strategic positioning or advantage) is central to Sun Tzu's system. Before any engagement, the wise strategist works to achieve a position of inherent advantage - a position from which, if circumstances are right, victory is natural rather than forced. This might mean controlling the high ground, securing supply lines, establishing alliances, creating division among the opponent's forces. Once the position of advantage is established, the actual engagement (if it happens at all) is a formality. The battle is won before it is fought. This principle applies far beyond military contexts: in negotiations, the position you occupy before the negotiation begins largely determines its outcome. In business, market position established before the competitive battle determines survival. In relationships, the quality of trust built before the conflict determines whether the conflict strengthens or destroys the relationship.`,
      why_it_matters: `Sun Tzu's strategic philosophy teaches something that goes against much conventional wisdom about success: that force - whether physical, financial, or social - is usually an inefficient tool for achieving your actual goals, and that intelligence, positioning, and patience are typically more effective than brute effort. The application of this insight to modern life is extensive.

In any competitive domain, the person who wins by exhausting their opponent through attrition is not nearly as masterful as the person who wins by understanding the situation so well that they act at exactly the right moment with exactly the right force. This requires the discipline of restraint - of not acting before the moment is right, of conserving strength rather than dissipating it in premature engagement. This discipline is rare and valuable.`,
      practice: 'Strategic Situation Assessment: Choose one challenge or conflict in your life. Write answers to Sun Tzu\'s diagnostic questions: What are my actual strengths here? What are my weaknesses (be honest)? What does my opponent or obstacle actually want? What are their vulnerabilities? What position of advantage could I work toward before engaging directly? What am I misreading about this situation? Notice where honest self-assessment differs from your habitual self-story.',
      closing_question: 'Where in your life are you fighting battles you could win by positioning rather than by force?',
    },
    {
      name: 'Wang Yangming',
      nameHindi: 'वांग यांगमिंग',
      dates: '1472-1529 CE',
      origin: 'Yuyao, Zhejiang, China',
      school: 'Neo-Confucianism / Unity of Knowledge and Action',
      tagline: 'To know and not to act is not yet to know.',
      bio: `Wang Yangming (Wang Shouren) was born in 1472 in Zhejiang province into a prominent official family. His life was a sequence of extraordinary contradictions: he was a scholar and a general, a bureaucrat and a mystic, a loyal servant of the imperial state and a radical critic of its dominant intellectual tradition. He excelled in the official examinations that were the gateway to public life in Ming dynasty China, but his unorthodox views repeatedly got him into trouble. At thirty-seven, he was exiled by a powerful court eunuch to a remote military outpost in Guizhou - one of the most backward regions of China, far from the intellectual circles he had known. It was during this exile, in conditions of physical hardship and isolation, that he achieved the breakthrough insight for which he is remembered: the unity of knowledge and action, the recognition that genuine knowledge is inseparable from lived practice.

Wang's philosophical position was developed in explicit opposition to the dominant Neo-Confucian orthodoxy of Zhu Xi, which held that moral knowledge is acquired by "investigating things" - the systematic accumulation of principles through the study of texts and the external world. Wang rejected this: moral knowledge is not acquired from outside but from within. The innate moral knowledge (liang zhi) that every human being possesses - the immediate, intuitive sense of right and wrong that does not require scholarly derivation - is the foundation of all genuine ethics. The task is not to accumulate knowledge but to act from this innate knowing: to clear away the obscurations (selfish desires, social conditioning, distorted habits) that prevent it from expressing itself naturally.`,
      core_idea_title: 'Liang Zhi: Innate Moral Knowledge and Its Expression',
      core_idea: `Wang Yangming's most famous and most compressed claim is: "To know and not to act is not yet to know." This is not an exhortation to be more productive or decisive. It is a philosophical claim about the nature of genuine knowledge. If you truly know that lying is wrong - not as an abstract proposition but as a living reality - you do not need to add motivation or willpower to act honestly. The knowledge itself is the motivation. If you are acting dishonestly, you do not truly know, at a deep level, that dishonesty is wrong - you know it at a surface level, as an inherited proposition, but this surface knowledge is not genuine knowledge in Wang's sense.

This insight dissolves one of the most persistent puzzles in ethics: why do people act badly when they know better? Aristotle called this "akrasia" - weakness of will. Wang's answer is that what looks like knowing better is not genuine knowing. The person who eats the cake while "knowing" they shouldn't is not genuinely knowing the full reality of what the cake means in the context of their health and values - they are oscillating between different layers of awareness, and the cake-wanting layer is currently dominant. Genuine knowledge, fully integrated into the body and the will, would simply not eat the cake - not through heroic self-denial but because the choice that conflicts with one's values has become as impossible as choosing to put one's hand into fire.

The practical implication is a radical shift in the focus of moral cultivation. Instead of studying more, reading more, accumulating more principles - which can always remain at the surface level of the mind without transforming behavior - the practice must go deeper: to the layer where knowing and doing are not yet separated. This is meditation practice, it is embodied virtue practice, it is the cultivation of what Wang calls the "original mind" - the mind in its natural state, before the layers of selfish desire and social conditioning have been added. When this original mind is clear and active, right action flows naturally from right knowing. The sage does not have to try to be virtuous - virtue is simply how they move through the world.`,
      why_it_matters: `Wang Yangming's insight cuts through the modern epidemic of knowing what one should do and consistently not doing it. We know we should exercise, eat well, spend time with people we love, do meaningful work, be honest - and yet most people's actual lives diverge significantly from their stated values. Wang would say: the divergence reveals that we do not yet truly know. The response is not more information, not more willpower, not more discipline - it is deeper knowing. The integration of knowing and doing is a practice of embodiment: bringing the abstract knowledge down into the level of the body, the habits, the automatic responses, until right action becomes natural.

This has implications for education, for therapy, for personal development: the goal is not knowledge accumulation but transformation of character. And character is transformed not by learning about virtue but by practicing it - repeatedly, incrementally, in the actual conditions of one's life.`,
      practice: 'Knowledge-Action Gap Exercise: Write down one thing you "know" you should do but consistently don\'t. Instead of adding more motivation or planning, ask: do I truly, deeply know this? At what level do I know it - as an abstract proposition, or as a lived reality in my body? Spend five minutes with your eyes closed, vividly imagining the full reality of what this knowledge means: its consequences, its meaning, what it would feel like to live it fully. Notice whether this deepening of knowing changes your relationship to the action.',
      closing_question: 'Between your stated values and your actual daily behavior - where is the gap, and what would it mean to truly know what you claim to know?',
    },
    {
      name: 'Dogen',
      nameHindi: 'दोगेन',
      dates: '1200-1253 CE',
      origin: 'Kyoto, Japan',
      school: 'Soto Zen Buddhism',
      tagline: 'To study the self is to forget the self. To forget the self is to be enlightened by all things.',
      bio: `Dogen Zenji was born in Kyoto in 1200 to an aristocratic family - his father was a high court official, and both parents died in his childhood, an experience that shaped his urgent preoccupation with impermanence and death. He entered the monastery at thirteen and was ordained as a Buddhist monk, becoming a serious student of Rinzai Zen. Dissatisfied with the answers he found in Japan, he traveled to China in 1223, at risk of his life - the crossing of the Japan Sea in small medieval vessels was genuinely dangerous - to seek deeper teaching. In China, under the master Rujing at Tiantong monastery, he had the realization he had been seeking. He returned to Japan in 1227 and spent the rest of his life establishing Soto Zen as a distinct school, writing with extraordinary poetic and philosophical power, and insisting on the practice of zazen (seated meditation) not as a means to enlightenment but as its direct expression.

Dogen's written work is among the most philosophically sophisticated in the entire Buddhist tradition. His masterwork, the Shobogenzo (Treasury of the True Dharma Eye), consists of ninety-five fascicles written over twenty-five years, addressing topics ranging from the nature of Buddha-nature to the correct procedure for washing your face in the morning. His prose style is famous for its deliberate difficulty: he plays with language, reverses received formulations, uses classical Chinese idioms in contexts that violate their expected meaning, and constructs sentences whose grammar seems to defeat comprehension until it suddenly opens into a paradox that illuminates the thing language cannot simply say. He is the philosopher of the irreducibility of practice, of the present moment, of the body.`,
      core_idea_title: 'Shikantaza: Just Sitting and the Identity of Practice and Realization',
      core_idea: `Dogen's most important philosophical contribution is his radical reconceptualization of the relationship between practice and enlightenment. The dominant view in Chinese and Japanese Buddhism of his time was that zazen (seated meditation) is a means to enlightenment - a technique for achieving a goal that lies beyond the technique itself. This is a perfectly natural way of understanding practice: you meditate in order to become enlightened, just as you eat in order to become full. Dogen rejected this completely and insisted on what he called the identity of practice and realization (shusho itto). Zazen is not a path to enlightenment - zazen, practiced correctly, is enlightenment's direct expression. You do not sit in order to become a Buddha. You sit as a Buddha. The sitting is the thing itself, not its instrument.

This has several important implications. First: if zazen is the direct expression of enlightened nature rather than a path toward it, then every moment of genuine practice is complete in itself - not a step toward a future goal but a full manifestation of what is being sought. This dissolves the practitioner's habitual relationship to the future: the constant measuring of present practice against some hoped-for future state of enlightenment that will make the practice worthwhile. For Dogen, this future-orientation is itself the obstacle. The gate is this moment of sitting, fully inhabited.

Second: Dogen extends this logic beyond the meditation hall. All activities, done with full presence and attention, are practice. The Tenzo Kyokun (Instructions for the Cook) treats the preparation of temple meals as fully equivalent to formal meditation practice - if done with the right quality of attention. This is not a metaphor. Dogen means it literally: the way you handle the rice, the care with which you wash the vegetables, the attention you bring to the fire - these are the practice of Zen, not its lesser approximation. The distinction between sacred and mundane dissolves in genuine attention. Every moment of ordinary life is an opportunity for the realization that Dogen calls "being enlightened by all things" - the dropping away of the boundary between self and world that makes experience feel thin and separate.`,
      why_it_matters: `Dogen's insistence on the present moment as the only real arena of practice is perhaps his most widely applicable teaching. The modern person's relationship to time is defined by the future - by the planning, the achievement, the arrival at some better state that will make present discomfort worthwhile. Dogen says: this way of inhabiting time is the obstacle. Not because the future doesn't matter, but because the future is always approached from the present, and a person who is never fully in the present never actually arrives anywhere.

His teaching also dismantles the common assumption that spiritual practice is separate from ordinary life - that you meditate so that you can handle ordinary life better. For Dogen, ordinary life, fully inhabited, is the practice. The question is not "how do I bring my meditation practice into daily life?" but "am I actually here, in this moment, with this activity, with this person?" The answer to that question is the whole of practice.`,
      practice: 'Shikantaza in Daily Life: Choose one ordinary activity today - washing dishes, making tea, walking from one room to another - and perform it as Dogen performed zazen: completely, without reference to past or future, without doing it in order to get to the next thing. Give it your full body, your full attention, your full presence. Notice what changes in the quality of the activity when it is no longer a step toward something else but complete in itself.',
      closing_question: 'What activity are you doing right now primarily in order to get to the next activity - and what would change if you stopped?',
    },
  ],
};

// ─── Tradition 3: Islamic & Sufi Philosophy ───────────────────────────────────

const ISLAMIC_PHILOSOPHY: DarshanTradition = {
  id: 'islamic',
  name: 'Islamic & Sufi Philosophy',
  nameHindi: 'इस्लामी दर्शन',
  color: '#8A4A3A',
  emoji: '🌙',
  thinkers: [
    {
      name: 'Rumi',
      nameHindi: 'रूमी',
      dates: '1207-1273 CE',
      origin: 'Balkh (present-day Afghanistan)',
      school: 'Sufi Poetry / Mysticism',
      tagline: 'Out beyond ideas of wrongdoing and rightdoing, there is a field. I will meet you there.',
      bio: `Jalal ad-Din Muhammad Rumi was born in 1207 in Balkh, in the Khorasan region of the Persian Empire (present-day Afghanistan), the son of a theologian and mystic. His family fled the Mongol invasions when he was a child, traveling across Persia and the Arab world before settling in Konya (in present-day Turkey), which was then part of the Seljuk Sultanate of Rum - giving Rumi his posthumous name. He was educated in the Islamic sciences and became a successful religious teacher and scholar in Konya. And then, in 1244, he met Shams-i-Tabrizi - an itinerant Sufi dervish of wild, unconventional intensity - and his life was transformed. In Shams, Rumi found his spiritual mirror and the catalyst of his creative explosion. Their friendship scandalized Konya (it was intense, exclusive, and Rumi seemed to care for nothing else), and Shams disappeared twice, the second time probably murdered. Rumi never recovered from the loss, and it was this loss that became the engine of his greatest poetry.

Rumi composed the Masnavi - his masterwork - in his later years, at the urging of his disciple Husam Chalabi who literally carried a notebook and wrote as Rumi dictated. The Masnavi is a six-volume epic poem of approximately fifty thousand lines containing stories, parables, philosophical arguments, prayers, and lyrical outbursts of extraordinary beauty. He also wrote the Divan-e-Shams - a collection of odes and lyrics written in the persona of or addressed to Shams. Rumi died in Konya in 1273 and was buried there. His tomb is still a major pilgrimage site, visited by hundreds of thousands of people each year from every religious background.`,
      core_idea_title: 'Divine Love: The Reed\'s Longing and the Soul\'s Journey',
      core_idea: `The Masnavi opens with an image that Rumi uses as a metaphor for the human soul: a reed flute, cut from the reed bed, crying with longing for its origin. "Listen to the reed, how it tells a tale, lamenting separations." The reed's music - its beauty, its poignancy, its power to move listeners to tears - arises entirely from its longing for the reed bed from which it was cut. Without the separation, there is no music. Without the wound of incompleteness, there is no cry. And without the cry, there is no beauty, no teaching, no connection to other souls who recognize their own longing in the sound. This is Rumi's central paradox: the very separation from the Divine that causes suffering is also the source of all beauty, all seeking, all love, all spiritual art.

For Rumi, divine love (ishq) is not merely a feeling but the fundamental metaphysical force that underlies all reality. Love is what makes the moth circle the flame despite knowing it will burn. Love is what makes the lover abandon self-concern and live entirely for the Beloved. Love is the force that drives spiritual seeking even when (especially when) the seeker does not know what they are seeking - the restlessness, the dissatisfaction with the ordinary, the sense that something is missing that ordinary life cannot provide. All of this, for Rumi, is the soul's innate orientation toward its Source - the pull of the reed toward the reed bed - expressing itself through the available language of human longing.

The spiritual journey Rumi describes is not one of learning or accumulation but of subtraction - the gradual dropping away of the false self, the ego's armor, the identifications and defenses that block the natural experience of the Divine presence that was never actually absent. This is why love is the method: love breaks down defenses. Genuine love - especially the love between human beings - is a training ground for the soul's movement toward the divine. The pain of love, the vulnerability of love, the loss that love makes inevitable - these are not failures of love but its most powerful teachings.`,
      why_it_matters: `Rumi matters in the modern world because he gives a language for the experience that contemporary secular culture has difficulty naming: the sense that ordinary satisfactions - achievement, comfort, pleasure, belonging - are real but ultimately insufficient; that there is a dimension of experience pointing beyond the ordinary that is not satisfactorily addressed by therapy, by religion in its institutional forms, or by spiritual bypassing. His poetry names this insufficiency not as pathology but as orientation - the reed's cry is not its disorder but its deepest truth.

His crossing of cultural boundaries - a Persian-language poet, trained in Islamic jurisprudence, teaching a universalist mysticism that was criticized by orthodox religious authorities - is also a model for our moment. Rumi is revered in Iran and Turkey, beloved across South Asia, widely read in the secular West. His insistence that the Beloved is not contained in any particular name or form - that love itself is the path, whatever tradition it travels through - speaks across every boundary that human beings draw between themselves.`,
      practice: 'Longing as Compass: Sit quietly and turn your attention to what you most deeply long for - not the surface desires (comfort, approval, pleasure) but the deepest current beneath them. Don\'t try to name it immediately. Let the longing be felt as a physical sensation in the body. Ask: what does this longing, in its purest form, point toward? What is it oriented toward beneath all its specific objects? Spend ten minutes with this. Let it move you if it wants to.',
      closing_question: 'What are you most deeply longing for - and are you confusing the vessel of that longing with its actual source?',
    },
    {
      name: 'Al-Ghazali',
      nameHindi: 'अल-गज़ाली',
      dates: '1058-1111 CE',
      origin: 'Tus, Khorasan (present-day Iran)',
      school: 'Islamic Philosophy / Spiritual Revival',
      tagline: 'Knowledge without action is vanity. Action without knowledge is futility.',
      bio: `Abu Hamid Muhammad al-Ghazali is one of the most important religious thinkers in Islamic history - called by some the "Proof of Islam" (Hujjat al-Islam). Born in 1058 in Tus (in present-day northeastern Iran), he was orphaned young and educated in Islamic jurisprudence and theology before coming to the attention of the powerful Nizami educational system. By thirty-three he was appointed to the prestigious chair of jurisprudence at the Nizamiyya in Baghdad - the most eminent academic position in the Islamic world - with hundreds of students and an enviable social position. And then, at the height of his success, he had a crisis so severe that he lost the ability to speak, and after months of torment, he resigned his position, gave his wealth to charity, and walked out of Baghdad as a wandering dervish. He would not return to a public position for eleven years.

The crisis was both intellectual and existential. He had become convinced, through his systematic application of philosophical skepticism, that he could not be certain of anything - that the certainty he had enjoyed as a scholar was dogmatic rather than genuine. More personally, he had recognized that his own religious life was entirely external: he knew the law, he taught the theology, but he had never actually experienced the God he was teaching about. The works he produced after his eleven years of wandering, study, and Sufi practice - especially the Ihya Ulum al-Din (The Revival of the Religious Sciences) - are attempts to answer the questions his crisis raised: What does genuine religious knowledge look like? How does it differ from mere scholarship? How can ordinary religious practice become genuine interior transformation?`,
      core_idea_title: 'The Inner Life: Knowledge, Sincerity, and Spiritual States',
      core_idea: `Al-Ghazali's great achievement is the systematic integration of Islamic law and theology with the interior spiritual science of Sufism. The Ihya Ulum al-Din is organized around this integration: it begins with the outer dimensions of Islamic practice (prayer, fasting, pilgrimage, social conduct) but for each, it analyzes the interior conditions - the qualities of heart and intention - that make the outer practice genuine rather than merely formal. Prayer performed without awareness of God's presence is, for al-Ghazali, only the physical postures. Pilgrimage undertaken for the social prestige it confers, rather than as genuine seeking, is a long journey without arrival. The outer form without the inner reality is, at best, incomplete and, at worst, a form of self-deception.

His epistemology - the theory of how we know things - distinguishes between three kinds of knowledge: ilm al-yaqin (knowledge by information, the most ordinary kind), ayn al-yaqin (knowledge by direct observation, more certain), and haqq al-yaqin (knowledge by becoming what you know - the most direct and most certain). His illustration: if someone tells you there is fire in the next room, that is ilm al-yaqin. If you open the door and see the fire, that is ayn al-yaqin. If you are on fire, that is haqq al-yaqin. Most religious knowledge, he observes, is of the first kind - received information about God, heaven, hell, moral law. The Sufi spiritual path is the movement from the first kind to the third: from information about God to direct experience of God, from knowing about love to being in love.

He also developed a systematic psychology of the heart (qalb in Arabic) - a map of the interior life that identifies the diseases of the soul (pride, envy, greed, anger, attachment to worldly prestige) and their remedies. This is not merely an ethical catalog but a genuine psychology: each disease has a specific diagnosis (what it feels like, what generates it, how it manifests in behavior) and a specific remedy (which practice addresses it, which spiritual quality counters it, which contemplative insight dissolves it). This psychological precision makes the Ihya one of the most practical spiritual texts in the Islamic tradition.`,
      why_it_matters: `Al-Ghazali's crisis and recovery model the arc of genuine intellectual and spiritual development. He demonstrates what it looks like to take inherited certainties seriously enough to actually examine them, to be honest enough to admit when they fail the examination, and to persevere through the resulting uncertainty toward something genuinely founded rather than merely assumed. This is an arc that every serious thinker, in any tradition, must travel at some point.

His distinction between outer form and inner reality in religious practice is universally applicable. In any tradition, in any culture, in any institution, the outer forms can become substitutes for the realities they were designed to carry. The person who follows the rules while abandoning their spirit, the organization that has the structure without the function, the practitioner who knows the vocabulary without the experience - these are the phenomena al-Ghazali diagnoses. His remedy is always the same: return to interiority, return to sincerity, return to genuine intention and genuine practice.`,
      practice: 'Sincerity Examination (Muhasaba): Al-Ghazali recommended the daily practice of muhsaba - self-accounting. At the end of the day, review your actions with one question: what was my actual motivation? Not the stated reason, not the socially acceptable reason, but the real motivation driving each significant action. Notice without judgment where your actions arose from genuine values and where they arose from desire for approval, fear, pride, or habit. This honest inventory, practiced regularly, is the beginning of genuine interior development.',
      closing_question: 'If no one would ever know - if you could act from pure interior motivation with no social consequences - what would you do differently?',
    },
    {
      name: 'Ibn Rushd (Averroes)',
      nameHindi: 'इब्न रुश्द (एवेरोज़)',
      dates: '1126-1198 CE',
      origin: 'Cordoba, Al-Andalus (present-day Spain)',
      school: 'Islamic Aristotelianism / Reason and Faith',
      tagline: 'The law commands the study of philosophy. Whoever forbids it commits a wrong.',
      bio: `Abu al-Walid Muhammad ibn Ahmad ibn Rushd - known in the West as Averroes - was born in 1126 in Cordoba, the intellectual capital of Islamic Spain (Al-Andalus), into a family of distinguished jurists. He studied medicine, jurisprudence, theology, mathematics, and philosophy with equal seriousness, eventually becoming the chief judge (qadi) of Seville and later Cordoba, while simultaneously serving as the personal physician to the Almohad caliph Abu Yaqub Yusuf. He is the most important Islamic philosopher to write commentaries on Aristotle - commentaries so thorough, so accurate, and so influential that European scholasticism knew Aristotle almost entirely through Ibn Rushd's interpretations, and Latin scholars simply called him "The Commentator," as if there were no other.

Late in his life, Ibn Rushd fell victim to a political and religious backlash against philosophy under the Almohad caliph al-Mansur. His books were burned, he was exiled to a small town near Cordoba (where he was effectively under house arrest), and the public teaching of philosophy was banned. He was rehabilitated toward the end of his life but died in 1198 before seeing any sustained recovery of philosophical culture in Al-Andalus. His works traveled east and west - influencing Jewish philosophy through Maimonides and Christian Scholasticism through Thomas Aquinas - and his influence on the European Renaissance, while indirect, was profound.`,
      core_idea_title: 'The Harmony of Reason and Revelation: Philosophy\'s Rightful Place',
      core_idea: `Ibn Rushd's most important philosophical contribution is his argument, developed most fully in the Decisive Treatise (Fasl al-Maqal), that philosophy is not only compatible with Islamic religion but is actually required by it. The Quran, he argues, explicitly commands the study of the created world through reason: "Have they not reflected upon the kingdoms of heaven and earth?" (7:185). If God commands reason's use, then the use of reason - including the study of philosophy - is a religious obligation, not a religious danger. The person who prohibits philosophy is therefore not protecting religion but violating a divine command.

His theory of the relationship between reason and revelation is subtle. He distinguishes three classes of people: the demonstrative (philosophers, who require logical proof), the dialectical (theologians, who reason from probable premises), and the rhetorical (the majority of people, who are moved by images, stories, and metaphors). The Quran, he argues, addresses all three simultaneously through its different registers of language. The plain meanings suffice for the majority. The allegorical and metaphorical readings available to theologians go deeper. The philosophical interpretation available to the demonstrative class goes deepest. These interpretations do not contradict each other - they illuminate the same truth from different angles, appropriate to different intellectual capacities. Philosophers should not broadcast their interpretations to those who cannot understand them (which would cause confusion and harm), but the interpretations exist and are valid.

His commentaries on Aristotle represent a distinct philosophical achievement: the recovery of the authentic Aristotle from the Neoplatonic distortions that had accumulated in the Islamic philosophical tradition. Where his predecessors (especially Avicenna/Ibn Sina) had Platonized Aristotle - reading him through a Neoplatonic lens that created a mystical, contemplative Aristotle very different from the empiricist, naturalist Aristotle of the actual texts - Ibn Rushd performed a meticulous philological and philosophical recovery, restoring Aristotle's actual positions and demonstrating why they could be reconciled with, rather than opposed to, religious faith.`,
      why_it_matters: `Ibn Rushd's defense of the legitimacy of reason within religious culture remains urgently relevant. In any religious community, the temptation to shield faith from philosophical scrutiny - to declare certain questions off-limits, to treat intellectual inquiry as spiritually dangerous - is perennial and perennially counterproductive. Faith that cannot withstand examination is, as Ibn Rushd might say, not yet genuine faith but dogmatic assumption. The tradition that engages honestly with the best arguments against it, and responds with genuine thinking rather than authority, is the tradition that grows and deepens.

His fate - exile, book-burning, the suppression of philosophical culture - is a warning about what happens when intellectual communities turn against their own most searching minds. The Europe that was influenced by his commentaries and built universities on the Aristotelian model he helped transmit eventually produced the Scientific Revolution and the Enlightenment. The Islamic world that burned his books experienced a different trajectory.`,
      practice: 'Reason and Belief Audit: Choose one belief you hold that feels important to your identity - religious, political, or personal. Write the strongest argument you know against it: the most rigorous, most intellectually honest objection to this belief. Then write your best response. Notice whether your response depends on evidence and argument, or on authority and social belonging. If the latter, ask: what would it look like to hold this belief more thoughtfully?',
      closing_question: 'Which of your important beliefs have you never genuinely subjected to examination - and what are you protecting by keeping it unexamined?',
    },
    {
      name: 'Ibn Khaldun',
      nameHindi: 'इब्न खल्दून',
      dates: '1332-1406 CE',
      origin: 'Tunis, North Africa (present-day Tunisia)',
      school: 'Philosophy of History / Social Science',
      tagline: 'Human society has its laws just as the physical world does. Ignore them at your peril.',
      bio: `Abu Zayd Abd ar-Rahman Ibn Khaldun was born in Tunis in 1332 into an Andalusian family of scholars and officials who had migrated to North Africa after the Christian reconquest of Spain. He was educated in the classical Islamic disciplines, worked as a political secretary and administrator for various North African and Spanish rulers, was imprisoned, went into hiding, negotiated with Timur (Tamerlane) on behalf of the besieged city of Damascus, and eventually ended his life as a judge in Mamluk Cairo. His political career was turbulent, marked by the same instabilities and reversals that he spent his intellectual life trying to understand.

The Muqaddimah (Introduction) - the prolegomena to his universal history - was written in a burst of concentrated creativity during a period of rural retreat in 1377-78. It represents one of the most extraordinary intellectual achievements in medieval history: a systematic, empirically grounded theory of how human societies arise, develop, achieve power, and decline - written before the European social sciences by three centuries. Ibn Khaldun draws on his extensive political experience, his wide reading in history, geography, and philosophy, and his sharp observation of the actual dynamics of power to construct a theory that is recognizably social-scientific in its method: he looks for patterns across many cases, he proposes causal mechanisms, he tests his hypotheses against historical evidence, and he acknowledges when the evidence complicates or contradicts his theory.`,
      core_idea_title: 'Asabiyyah: Social Solidarity and the Cycle of Civilizations',
      core_idea: `Ibn Khaldun's central concept is asabiyyah - social solidarity, group feeling, the bond that ties members of a group together and enables coordinated action. He observes that groups with strong asabiyyah - nomadic tribes, recent migrants, religious movements - consistently defeat groups with weak asabiyyah, regardless of the latter's material superiority. A small, cohesive, highly motivated group routinely defeats a large but internally divided or demoralized one. This is not merely a military observation: it is a theory of political power. Asabiyyah is what enables a group to impose its will on others, to establish dynasties, to build empires.

The mechanism of decline is equally systematic. When a group achieves power through strong asabiyyah, it begins to enjoy the fruits of that power: wealth, luxury, urban life, the division of labor, and all the refinements of civilization. These goods are genuinely good - Ibn Khaldun is not a romantic who valorizes the harsh life of the nomad. But they have a political cost: they gradually dissolve asabiyyah. The second and third generation of a ruling dynasty has been raised in comfort rather than hardship, has not shared the struggles that forged the group's solidarity, and has developed habits and values at odds with the martial and communal virtues that produced the dynasty's power. Meanwhile, on the periphery, new groups are developing the asabiyyah that the rulers have lost. The pattern is inexorable: the new group, with its strong solidarity, displaces the old group, whose solidarity has dissolved in prosperity - and the cycle begins again.

What makes this remarkable is its refusal of moralizing. Ibn Khaldun is not saying that prosperity is bad or that civilizations fall because they become wicked. He is saying that certain social-structural processes have predictable consequences, independent of the moral quality of the people involved. This structural, deterministic approach to historical causation - a century and a half before Machiavelli, three centuries before Montesquieu - makes Ibn Khaldun the arguable founder of sociology, historiography, and political science.`,
      why_it_matters: `Ibn Khaldun's framework is startlingly applicable to the contemporary world. Every organization, every political movement, every institution that achieves power through the energy of a tight, committed group faces the same challenge he describes: how to maintain the solidarity that produced success once success has brought the comforts that erode it. The startup that loses its founding culture once it scales, the political party that loses its vitality once it enters government, the religious movement that loses its prophetic edge once it gains institutional power - these are Ibn Khaldun's cycles playing out in miniature.

His methodology also models something rare in medieval thought: the commitment to empirical rather than moralistic explanation. Instead of asking "why did this civilization deserve to fall?" he asks "what structural processes caused it to fall?" The shift from moralism to structural analysis is one of the great intellectual achievements of any era.`,
      practice: 'Asabiyyah Audit: Choose a group you belong to - a team, a family, a community, an organization. Assess its asabiyyah honestly: How strong is the sense of shared purpose? How much do members trust and rely on each other? Is that solidarity increasing or decreasing? What are the forces that are building it or eroding it? Then ask: what specifically could be done - by you - to strengthen it? Ibn Khaldun would say this is not a soft organizational question but the most strategic one you can ask.',
      closing_question: 'In the communities and teams you belong to - where is solidarity being built, and where is it silently dissolving?',
    },
    {
      name: 'Al-Kindi',
      nameHindi: 'अल-किंदी',
      dates: '801-873 CE (approx.)',
      origin: 'Kufa, Iraq (present-day)',
      school: 'Islamic Neoplatonism / First Islamic Philosopher',
      tagline: 'We must not be ashamed to find truth wherever it comes from, even if it comes from distant races and nations different from us.',
      bio: `Abu Yusuf Yaqub ibn Ishaq al-Kindi is known as "the Philosopher of the Arabs" - the first philosopher in the Islamic tradition to write systematic philosophical works in Arabic, and the architect of the project of integrating Greek philosophy with Islamic thought. Born around 801 CE in Kufa (in present-day Iraq) into an aristocratic Arab family descended from the Kinda tribe of Yemen, he was educated in Basra and Baghdad and became part of the remarkable intellectual circle assembled around the Abbasid caliph al-Mamun's House of Wisdom in Baghdad - the institution that systematically translated the entire philosophical and scientific inheritance of ancient Greece into Arabic, making it available to the Islamic world and eventually, through Arabic-Latin translations, to medieval Europe.

Al-Kindi wrote on an almost incomprehensible range of subjects: logic, metaphysics, ethics, psychology, mathematics, music theory, astronomy, meteorology, pharmacology, and cryptography (he wrote what may be the earliest treatise on frequency analysis in cryptology). His philosophical output alone comprises over three hundred works, of which fewer than fifty survive. His most important philosophical contributions are his arguments for the compatibility of Greek rationalism with Islamic theology, his theory of the intellect (drawing on Aristotle's De Anima but developing it in a distinctively Islamic direction), his defense of the monotheistic God as the ultimate cause and highest intellect, and his ethical writings on how to cope with sorrow and loss.`,
      core_idea_title: 'On the Intellect and the Universal Call to Truth',
      core_idea: `Al-Kindi's most distinctive intellectual contribution is his passionate universalism about truth. In a culture that could easily have restricted knowledge to what was revealed in the Quran, al-Kindi insisted that truth is truth wherever it is found - that the findings of Greek philosophy, the mathematics of India, the astronomy of Persia, are not foreign impositions but contributions to the single universal project of understanding reality. His statement - "We must not be ashamed to find truth wherever it comes from, even if it comes from distant races and nations different from us" - is one of the great statements of intellectual openness in any civilization, made in the ninth century, in a context where cultural insularity could easily have prevailed.

His theory of the intellect draws on and develops Aristotle's difficult account of nous (mind/intellect). Al-Kindi distinguishes four kinds of intellect: the "first intellect" (al-aql al-awwal) - the divine intellect that is always in actuality, always thinking; the intellect potentially in the human soul; the intellect that actualizes itself through learning and reflection; and the intellect that has been completely actualized in a soul that has achieved full rational development. This hierarchy has implications for his ethics: the goal of the good human life, for al-Kindi, is the development of the rational soul toward its highest actualization - the cultivation of the intellect as the most distinctively human capacity, the one most aligned with the divine nature.

His ethical treatise On the Art of Dispelling Sorrows is remarkable for its rational, non-dogmatic approach to the management of grief and loss. Rather than invoking religious consolation, he offers a Stoic-flavored argument: sorrow arises from attachment to things that are not genuinely "ours" - external goods, relationships, reputation, the body itself. All of these are transient, borrowed from existence for a time and inevitably returned. The person who attaches their happiness to these necessarily suffers when (not if) they are lost. The remedy is not the suppression of feeling but a reorientation of what one loves: toward the things of the mind and soul, which are more durably our own.`,
      why_it_matters: `Al-Kindi matters as a model of what intellectual culture at its best looks like: rigorous, curious, genuinely open to learning from any source, committed to truth rather than to the prestige of any particular tradition. The House of Wisdom project he was part of was the most ambitious cultural translation enterprise in history - the systematic appropriation of the Greek intellectual inheritance into a new linguistic and cultural context. Europe would not exist as the civilization it became without this translation project and the philosophers who made it possible.

His defense of reason as the highest human capacity - and his insistence that its exercise is not opposed to but aligned with genuine religious sensibility - is a permanent contribution to the dialogue between faith and reason that no tradition has finally resolved.`,
      practice: 'Truth Across Boundaries: This week, deliberately seek out one book, podcast, or conversation from a tradition, culture, or discipline genuinely different from your own - one you would not normally consult. Approach it with al-Kindi\'s spirit: the assumption that truth is where you find it, and that unfamiliar sources may contain what familiar ones have missed. After engaging, ask: what was genuinely valuable? What challenged an assumption I held? What do I want to explore further?',
      closing_question: 'What truth from an unfamiliar source have you been avoiding because of its origin - and what might you be missing because of that avoidance?',
    },
    {
      name: 'Mansur Al-Hallaj',
      nameHindi: 'मंसूर अल-हल्लाज',
      dates: '858-922 CE',
      origin: 'Al-Baida, Fars (present-day Iran)',
      school: 'Sufism / Divine Love',
      tagline: 'I am the Truth. And what is more wonderful: I am still here.',
      bio: `Husayn ibn Mansur al-Hallaj is one of the most controversial and compelling figures in Islamic mysticism - a Sufi master who was executed by the Abbasid government in Baghdad in 922 CE for the utterance "Ana al-Haqq" - "I am the Truth" (or "I am the Real," since "al-Haqq" is one of the ninety-nine names of God in Islam). He was flogged a thousand strokes, had his hands and feet cut off, was crucified, beheaded, and finally burned - an execution of exceptional severity that reflected the threat his teachings were perceived to pose to religious and political authority. He reportedly bore the torment with equanimity and even joy, reportedly saying prayers for his executioners.

Al-Hallaj was born around 858 CE in the Fars province of Persia and studied under several of the leading Sufi masters of his time, including Junayd of Baghdad - who considered his teachings dangerous and eventually distanced himself from his former student. Al-Hallaj was an unusual Sufi in many respects: he refused to restrict his mystical teaching to elite circles, instead preaching publicly in the streets and markets of Baghdad and other cities, claiming miraculous powers, speaking in the intoxicated language of divine union that Sufi tradition normally reserved for inner circles, and engaging in political activism that made him enemies in the government. His teaching was that the human being who has dissolved the ego in divine love is no longer separate from God - and this non-separateness, which Sufi tradition typically describes in carefully qualified language, al-Hallaj stated with the naked directness that made his contemporaries call it heresy.`,
      core_idea_title: 'Fana: Annihilation in the Divine and the Paradox of Union',
      core_idea: `Al-Hallaj's philosophical contribution centers on the concept of fana - annihilation. In the Sufi understanding of spiritual development, the ordinary ego - the separate, self-defining, self-protecting individual self - is an obstacle to genuine union with the Divine. The spiritual path is the gradual dissolution of this ego, not by destroying the person but by dissolving the false identification with the bounded, separate self. When this dissolution is complete - when there is no "al-Hallaj" left who is separate from the Divine reality - what remains? For al-Hallaj, the answer is: the Divine, expressing itself through the form that was formerly "al-Hallaj." Hence "Ana al-Haqq" is not a claim by the ego to be God. It is the statement of the Truth (Haqq) that there is nothing else.

The paradox that al-Hallaj articulates - and that made him so threatening - is the paradox at the heart of mystical experience in every tradition: if genuine union with the Divine is achieved, who is experiencing it? The ordinary self that had the experience has been dissolved in the union. What speaks from within the experience is no longer the individual but the Divine itself. And yet - as al-Hallaj's most extraordinary saying reflects ("And what is more wonderful: I am still here") - the individual is not obliterated. There is still a person named Mansur al-Hallaj, still capable of speech, still able to suffer in the body. The unity does not cancel the apparent multiplicity. The two are somehow simultaneous. This is the mystery - the same mystery that Advaita points at with "Brahman alone is," that Zen points at with "before thinking," that Christian mysticism points at with "I live, but not I; Christ lives in me."

His poetry explores this mystery with extraordinary intensity. The image of the moth and the flame - which Rumi and later poets take up and elaborate - appears centrally in al-Hallaj's work: the moth, drawn irresistibly to the light, is consumed in it and becomes light. This is not tragedy but completion. The moth's entire nature was oriented toward the flame, and the flame was its destination. The consumption is the fulfillment. What looks from outside like destruction is, from inside the experience, the resolution of all longing.`,
      why_it_matters: `Al-Hallaj matters because he took the mystical claim to its logical extreme and paid for it with his life. Every tradition that has the concept of union with the Divine - and most do, in some form - also has the question of what this means: is it union between a self that persists and a God that persists, or is it the dissolution of the self into something that cannot be named as separate? Al-Hallaj chose the more radical answer and was executed for it. The tradition that burned him also preserved his memory, and today he is revered by the very Islamic culture that killed him.

His execution also raises permanently relevant questions about the relationship between mystical truth and social convention. The utterance "Ana al-Haqq" was theologically sophisticated. It was also socially dangerous - it sounded, to ordinary ears, like a man claiming to be God, which was blasphemy. The gap between the inner experience and the outer expression is a problem for every mystic. Al-Hallaj's refusal to moderate his expression - to speak in the careful, qualified language that his tradition had developed for precisely this situation - was either recklessness or prophetic integrity, depending on where you stand.`,
      practice: 'Dissolution Practice: Sit quietly for ten minutes in a posture that allows you to be fully present without falling asleep. Rather than focusing on breath or a mantra, simply allow the sense of being a separate, bounded self to soften. Not by forcing it away, but by releasing your active maintenance of it. Notice what happens at the edges of self-definition: where do you end and the space of awareness begin? Let that boundary become porous for ten minutes. Notice what quality of presence remains when the tight sense of "I" relaxes.',
      closing_question: 'Who are you when the story of who you are goes quiet?',
    },
  ],
};

// ─── Tradition 4: African & Indigenous Thought ────────────────────────────────

const AFRICAN_PHILOSOPHY: DarshanTradition = {
  id: 'african',
  name: 'African & Indigenous Thought',
  nameHindi: 'अफ्रीकी दर्शन',
  color: '#5A8A4A',
  emoji: '🌍',
  thinkers: [
    {
      name: 'Ubuntu Philosophy',
      nameHindi: 'उबुन्टु दर्शन',
      dates: 'Pre-colonial - present (Southern and East Africa)',
      origin: 'Bantu-speaking peoples, Sub-Saharan Africa',
      school: 'African Communitarian Ethics',
      tagline: 'Umuntu ngumuntu ngabantu - A person is a person through other persons.',
      bio: `Ubuntu is not the philosophy of a single individual but the foundational worldview of the Bantu-speaking peoples of Sub-Saharan Africa - one of the largest linguistic and cultural groupings on Earth, spanning from present-day Cameroon through East and Southern Africa. The word "ubuntu" (in Nguni languages: Zulu, Xhosa, Ndebele) and its equivalents in other Bantu languages (unhu in Shona, utu in Swahili) describe the quality of humaneness, of moral excellence in community - the recognition that being fully human is inseparable from being in right relationship with other human beings. The phrase "umuntu ngumuntu ngabantu" - "a person is a person through other persons" - is its most compact expression. You do not become a person alone. You become a person in relationship, through the community that recognizes, supports, and challenges you.

Ubuntu as a formal philosophical concept was articulated and developed for academic audiences in the post-apartheid period, particularly by South African philosophers like Mogobe Ramose, Thaddeus Metz, and Desmond Tutu - who used it as the ethical foundation for the Truth and Reconciliation Commission process. But the living wisdom it names is centuries older than its academic articulation: it is embedded in the social practices, the dispute resolution processes, the governance structures, and the everyday relational ethics of communities across Sub-Saharan Africa. Nelson Mandela cited it as the foundation of his political ethics. Desmond Tutu used it to explain why the TRC chose restorative rather than retributive justice. Archbishop Tutu famously described it: "My humanity is bound up in yours, for we can only be human together."`,
      core_idea_title: 'Collective Being: The Relational Constitution of the Person',
      core_idea: `Ubuntu's most philosophically radical contribution is its account of personal identity. Western philosophy, from Descartes onward, has taken the individual self as its starting point - the isolated, self-sufficient mind that discovers the world and then enters into relationships with other such minds. Ubuntu reverses this: the person is constituted through relationships, not prior to them. You are not a pre-formed individual who then chooses community. You are shaped, formed, made possible by the web of relationships that preceded your birth and that continue to constitute you throughout your life. This is not merely a sociological observation. It is a metaphysical claim about the nature of personhood.

The practical implications are extensive. In Ubuntu ethics, the individual good is not separable from the communal good - not as an external constraint ("you must consider others") but as an internal reality ("your own flourishing is partly constituted by the flourishing of those around you"). This is why, in Ubuntu-informed cultures, responses to harm and wrongdoing are primarily restorative rather than punitive: the goal is not to punish the wrongdoer and isolate them further from community, but to restore the relationships that were broken by the wrong - including the wrongdoer's relationship to the community. A person who does wrong has demonstrated a deficiency in their ubuntu - they have acted as if they were separate from others, as if their interests were independent of others'. The response is to heal this deficiency by reconnecting them to community, not to sever the connection further through punishment.

The concept also has direct implications for how we understand achievement, success, and excellence. In Ubuntu ethics, an achievement that is accomplished at the expense of the community - that requires the diminishment or exploitation of others - is not genuine excellence. Genuine excellence is excellence-in-community: achievement that lifts the collective, that is shared and celebrated by those whose relationships made it possible. This is not the suppression of individual excellence but its contextualization: the best person is not the most individually accomplished but the most genuinely connected, the most skilled at living well-in-relationship.`,
      why_it_matters: `Ubuntu's philosophical significance for the contemporary world is immense. The individualism of modern Western culture - which identifies freedom with independence, success with individual achievement, and the good life with personal fulfillment - has produced extraordinary material prosperity and political liberty, and also epidemic loneliness, disconnection, and the kind of atomized social life that Ubuntu would identify as a poverty of being.

The research is clear that human beings are profoundly social animals whose wellbeing depends on genuine, long-term, committed community. Ubuntu names what the research describes: you cannot be well alone. Your flourishing is bound up with the flourishing of those you are in relationship with, and no amount of individual achievement substitutes for genuine communal belonging.`,
      practice: 'Ubuntu Reflection: Think of one significant achievement or positive quality in your life. Now trace honestly all the people - named and unnamed - who made it possible. Your parents, teachers, friends, colleagues, the ancestors whose labor created the conditions of your birth. Let yourself feel the full weight of this interdependence. Then ask: in what way am I honoring that web of relationship today? In what way am I acting as if I achieved this alone?',
      closing_question: 'Whose support and love have you been benefiting from without fully acknowledging - and what would change if you did?',
    },
    {
      name: 'Cheikh Anta Diop',
      nameHindi: 'शेख अन्ता दिओप',
      dates: '1923-1986 CE',
      origin: 'Diourbel, Senegal',
      school: 'Afrocentric Philosophy / Historical Reclamation',
      tagline: 'The African must return to their roots to understand themselves. And those roots are ancient.',
      bio: `Cheikh Anta Diop was born in 1923 in Diourbel, Senegal, and became one of the most important and controversial African intellectuals of the twentieth century. Educated in Dakar and then Paris, where he encountered and challenged the European academic establishment on the most fundamental questions of African history, he was refused his doctorate five times by French academic institutions before finally receiving it in 1960 - the institutions were uncomfortable with his thesis, which argued that ancient Egypt was an African civilization created by Black Africans, and that Greek philosophy and science were substantially derived from Egyptian originals. He was not a fringe figure: he was a trained physicist and linguist who applied scholarly methods to historical questions that European scholarship had systematically avoided or distorted.

Diop founded the radiocarbon dating laboratory at IFAN (Institut Fondamental d'Afrique Noire) in Dakar - using cutting-edge science to date African archaeological artifacts - and contributed significantly to the documentation of African languages and their historical relationships. He is best understood as a scholar-activist: his scholarly project was inseparable from a political one. If Africans had been taught that their history began with colonialism - that before European contact they had no civilization, no philosophy, no science worth the name - then reclaiming their psychological integrity and political dignity required recovering that history. His scholarship was the instrument of this recovery.`,
      core_idea_title: 'African Origins: Reclaiming the Deep Past',
      core_idea: `Diop's central scholarly argument is that ancient Egypt - Kemet - was an African civilization in the fullest sense: that its founders and dominant population were people we would today recognize as Black Africans, related by culture and language to the Bantu, Wolof, and other Sub-Saharan peoples. This argument, developed in Nations Negres et Culture (1955) and The African Origin of Civilization (1974), rests on multiple lines of evidence: linguistic (Diop found systematic correspondences between ancient Egyptian and Wolof vocabulary), anthropological (skeletal remains from early dynastic Egypt show African physical characteristics), and textual (ancient Greek writers, including Herodotus, describe Egyptians as dark-skinned and woolly-haired).

The philosophical implications are as important as the historical ones. European historiography from the eighteenth century onward had systematically positioned ancient Egypt as a "special case" - as distinct from Africa, as Mediterranean, as influenced by the Near East - in order to claim the Greek inheritance of Egyptian knowledge as a purely European lineage. This historiographical move had the effect of stripping Africa of its most documented ancient civilization and positioning African peoples as historical latecomers with nothing to contribute to the world's intellectual heritage. Diop's counter-argument was not merely a historical correction but a philosophical one: identity, dignity, and self-understanding are partly constituted by historical memory, and a people whose historical memory has been systematically distorted by colonialism cannot achieve full psychological liberation until that memory is recovered.

His concept of "Two Cradle Theory" proposes that different civilizational traditions emerged from different geographical and climatic conditions - that the social values of southern (African) civilization (communalism, matriarchy, peace, agriculture) and northern (Eurasian) civilization (individualism, patriarchy, war, pastoralism) reflect the different environments that shaped them, and that understanding this difference is essential to understanding the clash of civilizational values that colonialism produced. This is an overschematic model that his critics have rightly challenged - but the underlying point, that civilizational values are historically and environmentally produced rather than naturally hierarchical, is important.`,
      why_it_matters: `Diop matters because he demonstrated, with scholarly tools, that the story told about Africa and Africans by European colonialism was not history but ideology - a construction designed to justify domination by denying the dominated their historical depth and intellectual dignity. This matters not only for Africans but for everyone: any person or community whose history has been systematically distorted or erased needs the tools to recover it, and Diop's example shows what that recovery looks like when done with scholarly rigor rather than merely rhetorical assertion.

His broader contribution - that ideas belong to their origin cultures, that intellectual lineages matter, that the recovery of historical truth is both a scholarly and a political task - remains urgently relevant in a world still shaped by the civilizational hierarchies that colonialism established.`,
      practice: 'Genealogy of Your Knowledge: Choose one field of knowledge or practice that matters to you - medicine, mathematics, philosophy, music, agriculture. Spend an hour researching its non-Western origins: what did African, Asian, or Indigenous peoples contribute to this field before European dominance? Notice what you did not know, and ask: why didn\'t I know it? What does this ignorance cost, and what would fuller knowledge make possible?',
      closing_question: 'Whose contributions to human knowledge have been invisible to you - and what would you understand differently if they were visible?',
    },
    {
      name: 'Wangari Maathai',
      nameHindi: 'वंगारी मुथाई',
      dates: '1940-2011 CE',
      origin: 'Nyeri, Kenya',
      school: 'Environmental Philosophy / Ecofeminism',
      tagline: 'It\'s the little things citizens do. That\'s what will make the difference. My little thing is planting trees.',
      bio: `Wangari Muta Maathai was born in 1940 in Nyeri, in the central highlands of Kenya, in the foothills of Mount Kenya. She was educated by Catholic missionaries, studied biology in Kansas and Pittsburgh on a Kennedy scholarship, and became the first woman in East and Central Africa to earn a PhD (from the University of Nairobi in 1971). She was also the first woman to become a department chair at the University of Nairobi, the first African woman to win the Nobel Peace Prize (2004), and one of the founders of the global environmental movement. She was imprisoned, beaten, and her marriage was destroyed by her political activism. She persisted.

The Green Belt Movement, which she founded in 1977, began as a simple idea: women in rural Kenya, organized by the National Council of Women, would plant trees. The need was urgent - deforestation was causing soil erosion, rivers were silting up, fuel wood was becoming scarce, and the women who walked miles daily to collect firewood and water were acutely aware of the ecological crisis. By the time Maathai died in 2011, the Green Belt Movement had planted more than fifty million trees across Kenya and had spread to dozens of other countries. More importantly, it had transformed the women who planted them: from passive recipients of aid to active agents of ecological and political change, from people who accepted their circumstances to people who understood that they had the power to change them.`,
      core_idea_title: 'The Three-Legged Stool: Ecology, Community, and Democracy',
      core_idea: `Maathai's philosophy, articulated most fully in her memoir Unbowed and her book The Challenge for Africa, rests on a central metaphor: a three-legged stool, which can stand only if all three legs are sound. The three legs are ecological sustainability, good governance (including democracy and human rights), and cultures of peace. These are not separate issues to be addressed by different advocacy organizations. They are deeply interdependent: ecological destruction produces poverty, which produces political instability, which produces violence, which prevents both ecological restoration and democratic development. Conversely, democratic governance creates the conditions for communities to protect their environments; ecological health creates the conditions for stable and peaceful societies; cultures of peace create the conditions for both democratic institutions and ecological stewardship.

This integrated vision was radical in the 1970s and remains important today. Environmental advocacy, human rights advocacy, and peace advocacy tend to operate in separate siloes, each with its own NGOs, its own conferences, its own advocacy strategies. Maathai's experience in Kenya taught her that this separation is artificial: when you try to plant trees in a country governed by dictatorship, the dictatorship suppresses you. When you try to build democratic governance in a country whose soil is eroding and whose rivers are drying up, the ecological crisis generates the poverty and desperation that demagogues exploit. You cannot solve any of these problems without addressing the others.

Her use of tree-planting as the central activity of a movement for social change is itself philosophically significant. Trees are an accessible, concrete, visible action - something that any person, regardless of education or resources, can do. They are also deeply symbolic in many African cultures: trees as ancestors, as community gathering points, as sources of medicine and food, as living markers of historical memory. To plant a tree is to act in time beyond your own lifetime - to make a commitment to a future you may not live to see. This orientation toward the long term, toward future generations rather than present convenience, is the philosophical heart of environmental ethics.`,
      why_it_matters: `Maathai matters as a demonstration that philosophy can be lived. She did not write academic papers about environmental ethics - she organized women to plant trees in the face of government opposition, imprisonment, and physical violence. The ideas embedded in the Green Belt Movement - the interdependence of ecology and democracy, the empowerment of local communities, the capacity of ordinary people to restore damaged landscapes and societies - are as philosophically sophisticated as anything produced in a university, and they are tested against the hardest possible conditions: actual political reality in an actual country with an actual dictatorship.

She also matters as a model of moral courage. She was beaten by riot police outside Nairobi's Uhuru Park while trying to prevent the destruction of a forest for a skyscraper. She got up and went back.`,
      practice: 'Long-Term Action: Identify one action you could take today - small, concrete, and achievable - that would have positive consequences not just for you but for your community and for people who come after you. It could be as literal as planting something, or as relational as teaching a skill, or as civic as joining a local environmental or governance group. Do not plan it. Do it today. Notice how it feels to act on behalf of a time beyond your own.',
      closing_question: 'What will you leave behind - in the soil, in people, in institutions - that will matter after you are gone?',
    },
    {
      name: 'Steve Biko',
      nameHindi: 'स्टीव बीको',
      dates: '1946-1977 CE',
      origin: 'King William\'s Town, Eastern Cape, South Africa',
      school: 'Black Consciousness Philosophy',
      tagline: 'The most potent weapon in the hands of the oppressor is the mind of the oppressed.',
      bio: `Stephen Bantu Biko was born in 1946 in King William's Town in the Eastern Cape of South Africa - the heart of the Xhosa-speaking region, and also the heart of African resistance to colonialism and apartheid since the eighteenth century. His father died when he was four. He was expelled from his first school for reasons connected to his older brother's political activities. He became a medical student at the University of Natal's non-European section - one of the racially segregated universities that apartheid created for Black students - and there became involved in student politics, eventually splitting from the multiracial National Union of South African Students (NUSAS) to found the South African Students Organisation (SASO) in 1969, which became the vehicle for Black Consciousness philosophy.

Biko was placed under a banning order in 1973, which restricted him to the King William's Town area and prohibited him from speaking to more than one person at a time, from being published, and from attending any gathering. He continued his intellectual and organizational work, including establishing health clinics and community centers in his hometown. In August 1977, he was arrested at a roadblock and taken into security police custody. He was tortured, suffered severe brain injuries, and was transported naked and unconscious in the back of a police van to Pretoria, where he died on September 12, 1977, at the age of thirty. He was the forty-sixth person to die in security police detention since 1963. The security police initially claimed he died from a hunger strike. The post-mortem revealed extensive brain injuries. The inquest magistrate found that no one was responsible.`,
      core_idea_title: 'Black Consciousness: The Psychological Dimension of Liberation',
      core_idea: `Steve Biko's philosophical contribution is the analysis of colonialism and apartheid at the level of psychology and identity, rather than only at the level of political and economic structure. Political liberation - the transfer of formal power from a white minority government to a Black majority - is necessary but not sufficient if the colonized population has internalized the colonizer's values, perspectives, and self-assessments. A colonized mind that has learned to see itself through the colonizer's eyes, to measure itself by the colonizer's standards, to aspire to the colonizer's lifestyle, is not liberated by a change of government - it remains colonized at the level that matters most: its own self-understanding.

The concept of Black Consciousness is the deliberate, systematic reversal of this internalized inferiority. It begins not with political demands but with the affirmation of the colonized person's own humanity, dignity, culture, and worth - not in relation to European standards but in their own terms. "Black man, you are on your own" is Biko's most provocative slogan: not an expression of separatism but of self-sufficiency at the psychological level. Black South Africans do not need to borrow their self-respect from the assessment of white liberals, who may be well-intentioned but whose very benevolence can reinforce the paternalism of the colonial relationship. Self-liberation begins with the refusal to seek validation from the dominant culture.

His critique of white liberalism is one of the most uncomfortable and important elements of Black Consciousness. White liberals who oppose apartheid but who set the terms of anti-apartheid struggle, who speak for Black South Africans, who determine what counts as acceptable resistance, and who expect gratitude for their support - these liberals, however well-intentioned, reproduce the colonial structure of a relationship in which white people define and Black people respond. Genuine solidarity, for Biko, requires white people to step back and allow Black people to define their own liberation on their own terms, while addressing the white racism in their own communities that sustains the system.`,
      why_it_matters: `Biko's philosophical framework - the insight that oppression works primarily through the mind of the oppressed, and that liberation therefore requires psychological as well as political work - has proven extraordinarily generative. It influenced the development of critical race theory, postcolonial studies, and liberation theology. It is directly applicable to any situation in which structural power is sustained by the cooperation, even the internalized belief, of the dominated.

His life and death also matter as an image of integrity under extreme pressure. He knew he was at risk. He continued. He was thirty years old when he died, and the body of philosophical and organizational work he had produced in those thirty years is a standard that few people match in a full lifetime.`,
      practice: 'Internalized Narrative Audit: Choose one area of your life where you regularly feel inadequate, not-enough, or defined by others\' standards. Ask: whose standards are these? Did I choose them, or were they imposed on me by the culture I was born into? Do they serve my actual flourishing? What would my standards look like if I defined them from my own experience and values? Write this out. Notice the resistance - and notice what becomes possible when the resistance is named.',
      closing_question: 'Whose definition of success, beauty, intelligence, or worth have you been living by without realizing you had the choice to live by your own?',
    },
    {
      name: 'Frantz Fanon',
      nameHindi: 'फ्रांत्ज़ फैनन',
      dates: '1925-1961 CE',
      origin: 'Martinique, French Caribbean',
      school: 'Postcolonial Philosophy / Liberation Theory',
      tagline: 'Colonialism is not a thinking machine, nor a body endowed with reasoning faculties. It is violence in its natural state.',
      bio: `Frantz Fanon was born in 1925 in Fort-de-France, Martinique, then a French Caribbean colony. He grew up as a French colonial subject - educated in French schools, speaking French as his first language, shaped by French culture - and volunteered for the Free French Army in World War Two, serving in North Africa and Europe. After the war he studied medicine and psychiatry in Lyon, where he also encountered Sartrean existentialism and the Negritude movement of Aime Cesaire (a fellow Martinican) and Leopold Senghor. His first book, Black Skin, White Masks (1952), written at twenty-seven, was an analysis of the psychological experience of Black people under French colonialism - specifically the experience of being seen, defined, and diminished by the "white gaze" of the colonizer.

In 1953 he was appointed head of psychiatry at Blida-Joinville Hospital in Algeria, then a French colony in the midst of its struggle for independence. His experience there - treating both French soldiers who had tortured Algerian prisoners and Algerian prisoners who had been tortured - radicalized him completely. He resigned from the hospital, joined the Algerian liberation movement (FLN), and began working as an ambassador and publicist for the Algerian cause across Africa. He was diagnosed with leukemia in 1960, flew to the United States for treatment, and died in Bethesda, Maryland, in December 1961, at thirty-six. The Wretched of the Earth, completed in the last weeks of his life, was published posthumously and immediately became one of the canonical texts of anticolonial liberation.`,
      core_idea_title: 'Colonial Violence and the Possibility of Liberation',
      core_idea: `Fanon's analysis of colonialism is comprehensive and unflinching. Colonialism is not simply an economic or political arrangement - it is a total system of violence that operates simultaneously at the material level (land seizure, forced labor, legal discrimination) and at the psychological level (the imposition of the colonizer's language, culture, and self-image on the colonized, the systematic destruction of pre-colonial cultures and identities, the training of the colonized to see themselves through the colonizer's eyes). This psychological dimension is, for Fanon, at least as damaging as the material dimension - it is what makes colonialism so difficult to uproot even after formal political independence is achieved.

Black Skin, White Masks is a phenomenological analysis of what it feels like to be Black in a white-dominated world. Drawing on his own experience in Martinique and France, as well as his clinical work with patients, Fanon describes the specific psychological damage of being seen primarily as a race rather than as a person - of having one's self-understanding disrupted by the "white gaze" that simultaneously projects inferiority and demands assimilation. The colonized person who assimilates fully - who speaks the colonizer's language perfectly, dresses in the colonizer's manner, adopts the colonizer's values - is still never fully accepted as equal. They have given up their own cultural identity and received in return not equality but a more refined form of rejection. This double bind is the colonial trap.

The Wretched of the Earth, written in the heat of the Algerian revolution, is more politically urgent and more controversial. Fanon argues that violence is not merely a tool of the oppressor - it is also the means by which the colonized can reclaim their humanity. Colonial violence has dehumanized the colonized; the violence of liberation is the assertion of their humanity in the only language the colonial system understands. This argument has been deeply contested - it is misused as justification for terrorism, and Fanon himself is more ambivalent about violence than the polemical passages suggest. His broader point - that liberation requires not just political independence but the genuine decolonization of the mind, the reclamation of culture, and the construction of new social institutions - is less controversial and more prescient.`,
      why_it_matters: `Fanon matters because he described the psychological experience of living under structural domination with a precision that still has not been surpassed. His analysis of the "colonized mind" - the mind that has internalized the colonizer's assessment of itself, that seeks validation from the dominant culture, that experiences its own culture as backward and the colonizer's as superior - is applicable far beyond the formal colonial relationship. It describes the experience of any person who has been systematically told, by institutions, culture, and social practice, that they are less.

His insistence that genuine liberation is psychological as well as political - that changing the government while leaving the internalized structures of colonial psychology in place is insufficient - is a permanent contribution to how we understand social transformation.`,
      practice: 'Phenomenology of the Gaze: Recall a moment when you were acutely aware of being seen - judged, categorized, defined by others. What did that feel like in your body? How did it affect your behavior, your self-expression, your sense of what was possible? Now ask: whose gaze are you still carrying inside you - whose judgment are you still performing for, even when they are not present? Notice whether that internalized gaze serves you or constrains you.',
      closing_question: 'Whose judgment are you still performing for - and what would you do, say, or become if you stopped?',
    },
    {
      name: 'Kwame Nkrumah',
      nameHindi: 'क्वामे नक्रूमाह',
      dates: '1909-1972 CE',
      origin: 'Nkroful, Gold Coast (present-day Ghana)',
      school: 'Pan-Africanism / Consciencism',
      tagline: 'Africa must unite - or perish in subjugation.',
      bio: `Kwame Nkrumah was born in 1909 in Nkroful, in the British colony of the Gold Coast (present-day Ghana). He was educated by Catholic missionaries, studied at Achimota College, worked as a teacher, and then traveled to the United States in 1935 for further education - studying at Lincoln University (the historically Black university in Pennsylvania), then at the University of Pennsylvania, then in London. In the United States, he was deeply influenced by Marcus Garvey's Pan-Africanism and the writings of W.E.B. Du Bois, who became a personal mentor. He organized among African students in London, attended the historic Fifth Pan-African Congress in Manchester in 1945, and returned to the Gold Coast in 1947 to join the independence movement.

His political organization, mass mobilization, and willingness to go to prison for the cause of independence led to the Gold Coast's independence in 1957 as Ghana - the first Sub-Saharan African nation to achieve independence from colonial rule, with Nkrumah as its first prime minister and later president. Ghana under Nkrumah became the symbol and the practical center of Pan-African aspirations: Nkrumah hosted liberation movements from across the continent, established the Organization of African Unity (now the African Union), and wrote extensively on the political philosophy of African unity and the philosophy he called Consciencism. He was overthrown in a coup in 1966, widely believed to have been supported by the CIA, while he was on a peace mission to Hanoi. He lived in exile in Guinea until his death in 1972.`,
      core_idea_title: 'Consciencism: Philosophy for African Liberation and Unity',
      core_idea: `Nkrumah's philosophical magnum opus, Consciencism: Philosophy and Ideology for De-Colonization (1964), is an attempt to develop an African philosophy adequate to the political and cultural situation of post-independence Africa. He argues that the African intellectual and political situation is defined by the collision of three traditions: African communalist philosophy (the indigenous ethical and social philosophy of pre-colonial Africa, centered on community, solidarity, and the harmony of the individual with the collective); Islamic philosophy (introduced across much of the continent through trade and conquest, providing a monotheistic universalism that modified but did not displace indigenous traditions); and Western philosophy (introduced through colonialism, bringing the individualism, the scientific method, and the political philosophy of Europe into collision with both earlier traditions).

Consciencism is Nkrumah's attempt to synthesize these three traditions in a way that preserves the communalist core of African philosophy while assimilating what is genuinely valuable in the Islamic and Western contributions. The communalist core - the priority of community over individual, the ethic of solidarity, the vision of society as a network of mutual obligations rather than a marketplace of competing interests - is, for Nkrumah, what Africa must bring to the construction of a new world order. This is not nostalgia for a pre-colonial past. It is the claim that African philosophical traditions contain insights about human sociality, about the relationship between individual and community, that the dominant Western tradition has suppressed and that humanity desperately needs.

His Pan-African project - the political unification of Africa into a federal state - was both a geopolitical strategy and a philosophical argument. Geopolitically: a unified Africa of eight hundred million people (in his time) would have the economic and political weight to resist neocolonial exploitation. Philosophically: the boundaries drawn by European colonizers across the continent were arbitrary, violating the actual cultural, linguistic, and historical connections of African peoples. Pan-African unity would not create an artificial unity but recover a genuine one - the shared African heritage that colonialism had interrupted.`,
      why_it_matters: `Nkrumah matters as the most important political philosopher of African liberation - the person who most seriously attempted to develop a philosophical foundation for African political independence that was not merely the adoption of Western democratic or socialist theory but the articulation of distinctively African political values. Whether or not his specific positions are convincing, the project he undertook - to think through what politics looks like from within the African philosophical tradition rather than in imitation of European models - is permanently important.

His analysis of neocolonialism - the argument that formal political independence without economic independence is not genuine liberation, that the colonial structures of economic dependence are perpetuated by multinational corporations and international financial institutions after the formal end of empire - was prescient and remains relevant in a world where many African nations are still shaped by the economic arrangements inherited from colonialism.`,
      practice: 'Community Philosophy Application: Nkrumah argued that the deepest African philosophical tradition prioritizes community over individual. Identify one decision you are currently making - about your career, your time, your resources, your relationships. Apply the communalist lens: not "what is best for me?" but "what is best for the community I belong to, and how does my best align with that?" Notice whether this changes the decision, or the way you feel about it.',
      closing_question: 'What would your decisions look like if you consistently chose from the question "what serves the community?" rather than "what serves me?"',
    },
  ],
};

// ─── Master Traditions Array ──────────────────────────────────────────────────

const TRADITIONS: DarshanTradition[] = [
  INDIAN_PHILOSOPHY,
  WESTERN_PHILOSOPHY,
  EASTERN_PHILOSOPHY,
  ISLAMIC_PHILOSOPHY,
  AFRICAN_PHILOSOPHY,
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function DarshanPage() {
  const [offset, setOffset] = useState(0);

  const effectiveIndex = getDayOfYear() - 1 + offset;
  const tradition = TRADITIONS[effectiveIndex % 5];
  const thinker = tradition.thinkers[effectiveIndex % 6];

  // Build the full text for ReadAloud
  const bioText = `${thinker.name}. ${thinker.dates}. ${thinker.origin}. ${thinker.bio}`;
  const coreText = `${thinker.core_idea_title}. ${thinker.core_idea}. Why it matters: ${thinker.why_it_matters}`;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Philosophy Room</p>
          <h1 className="font-serif text-3xl" style={{ color: 'var(--text-primary)' }}>
            दर्शन - Darshan
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Five traditions. Thirty thinkers. Ideas that have survived millennia by answering real questions.
          </p>
        </motion.div>

        {/* ── Date Navigation ───────────────────────────────────────────────── */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate"
          className="flex items-center justify-between gap-3">
          <button
            onClick={() => setOffset(o => o - 1)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-sm font-medium transition-all hover:scale-105 active:scale-95"
            style={{
              borderColor: 'var(--border-default)',
              color: 'var(--text-secondary)',
              background: 'var(--bg-secondary)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Yesterday
          </button>

          <button
            onClick={() => setOffset(0)}
            className="flex-1 text-center px-3.5 py-2 rounded-full border text-sm font-medium transition-all"
            style={{
              borderColor: offset === 0 ? tradition.color : 'var(--border-default)',
              color: offset === 0 ? tradition.color : 'var(--text-muted)',
              background: offset === 0
                ? `color-mix(in srgb, ${tradition.color} 8%, var(--bg-secondary))`
                : 'var(--bg-secondary)',
            }}
          >
            {offset === 0 ? 'Today' : offset > 0 ? `+${offset} days` : `${offset} days`}
          </button>

          <button
            onClick={() => setOffset(o => o + 1)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-sm font-medium transition-all hover:scale-105 active:scale-95"
            style={{
              borderColor: 'var(--border-default)',
              color: 'var(--text-secondary)',
              background: 'var(--bg-secondary)',
            }}
          >
            Tomorrow
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </motion.div>

        {/* ── Tradition Badge ───────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tradition-${tradition.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
              style={{
                background: `color-mix(in srgb, ${tradition.color} 12%, var(--bg-tertiary))`,
                color: tradition.color,
                border: `1px solid color-mix(in srgb, ${tradition.color} 30%, transparent)`,
              }}
            >
              <span>{tradition.emoji}</span>
              <span className="font-medium">{tradition.name}</span>
              <span className="font-devanagari text-xs opacity-80">{tradition.nameHindi}</span>
            </span>
          </motion.div>
        </AnimatePresence>

        {/* ── Thinker Card ──────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`thinker-${tradition.id}-${effectiveIndex % 6}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="card-base p-6 space-y-4"
          >
            {/* Name + Meta */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <h2 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>
                  {thinker.name}
                </h2>
                <p className="font-devanagari text-base" style={{ color: tradition.color }}>
                  {thinker.nameHindi}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
                  {thinker.dates} &middot; {thinker.origin}
                </p>
                <span
                  className="inline-block text-xs px-2.5 py-0.5 rounded-full font-medium mt-1"
                  style={{
                    background: `color-mix(in srgb, ${tradition.color} 10%, var(--bg-tertiary))`,
                    color: tradition.color,
                  }}
                >
                  {thinker.school}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <ReadAloudButton text={bioText} lang="en-IN" size="sm" />
                <RevisitButton
                  roomId="darshan"
                  roomName="Darshan"
                  contentTitle={`${thinker.name} - Bio`}
                  contentSummary={thinker.bio.slice(0, 150) + '...'}
                />
                <SutraNoteButton
                  roomId="darshan"
                  roomName="Darshan"
                  contentTitle={`${thinker.name} - Bio`}
                  className=""
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="font-serif italic text-base leading-relaxed"
              style={{ color: tradition.color, lineHeight: 1.7 }}>
              &ldquo;{thinker.tagline}&rdquo;
            </p>

            {/* Bio */}
            <div className="space-y-1">
              <p className="section-label">Who They Were</p>
            </div>
            <div className="space-y-3">
              {thinker.bio.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Core Idea Card ────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`core-${tradition.id}-${effectiveIndex % 6}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, delay: 0.07 }}
            className="card-base p-6 space-y-5"
          >
            {/* Core Idea Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-label mb-1">Core Teaching</p>
                <h3 className="font-serif text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {thinker.core_idea_title}
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <ReadAloudButton text={coreText} lang="en-IN" size="sm" />
                <RevisitButton
                  roomId="darshan"
                  roomName="Darshan"
                  contentTitle={`${thinker.name} - ${thinker.core_idea_title}`}
                  contentSummary={thinker.core_idea.slice(0, 150) + '...'}
                />
                <SutraNoteButton
                  roomId="darshan"
                  roomName="Darshan"
                  contentTitle={`${thinker.name} - ${thinker.core_idea_title}`}
                  className=""
                />
              </div>
            </div>

            {/* Core Idea Paragraphs */}
            <div className="space-y-3">
              {thinker.core_idea.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Why It Matters */}
            <div
              className="rounded-xl p-4 space-y-2"
              style={{
                background: `color-mix(in srgb, ${tradition.color} 7%, var(--bg-tertiary))`,
                border: `1px solid color-mix(in srgb, ${tradition.color} 20%, transparent)`,
              }}
            >
              <p className="section-label" style={{ color: tradition.color }}>Why It Matters</p>
              {thinker.why_it_matters.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Practice Box ──────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`practice-${tradition.id}-${effectiveIndex % 6}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="card-base p-5 border-l-4 space-y-2"
            style={{ borderLeftColor: tradition.color }}
          >
            <p className="section-label">Aaj Ka Abhyas / आज का अभ्यास</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {thinker.practice}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── Closing Question ──────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`question-${tradition.id}-${effectiveIndex % 6}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-center py-6 space-y-2"
          >
            <p className="section-label">Question for Today</p>
            <p className="font-serif italic text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: tradition.color, lineHeight: 1.75 }}>
              &ldquo;{thinker.closing_question}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── Footer ────────────────────────────────────────────────────────── */}
        <div className="text-center pb-4">
          <p className="font-serif italic text-xs" style={{ color: 'var(--text-faint)' }}>
            Five traditions. One question. Your examined life.
          </p>
        </div>

      </div>
    </PageTransition>
  );
}
