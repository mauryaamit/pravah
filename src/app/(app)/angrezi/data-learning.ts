// src/app/(app)/angrezi/data-learning.ts
// Structured data for Angrezi's new learning pillars:
// 1. Listening Lab
// 2. Speak & Think
// 3. Natural English
// 4. Reading Room

// ─────────────── 1. LISTENING LAB ───────────────
export interface ListeningQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ListeningEntry {
  id: string;
  title: string;
  type: 'dialogue' | 'interview' | 'speech' | 'story' | 'podcast';
  accent: 'British' | 'American' | 'Indian' | 'Australian' | 'International';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  durationEstimate: string; // e.g. "90 sec"
  audioText: string; // Full spoken script to be read aloud via TTS
  speakers?: { name: string; role: string }[];
  context: string;
  comprehensionQuestions: ListeningQuestion[];
  keyVocabulary: { word: string; meaning: string; phonetic: string }[];
  naturalExpressions: { expression: string; meaning: string; example: string }[];
}

export const LISTENING_ENTRIES: ListeningEntry[] = [
  {
    id: 'listen-1',
    title: 'The Art of Constructive Disagreement',
    type: 'podcast',
    accent: 'British',
    difficulty: 'Intermediate',
    durationEstimate: '90 sec',
    context: 'A workplace leadership podcast exploring how high-performing teams debate ideas without hurting interpersonal relationships.',
    audioText: `Welcome back to The Mindful Workplace. Today, we are exploring a fundamental friction point in modern collaboration: constructive disagreement. Most people dread confrontation. They either swallow their objections or turn a simple difference of opinion into an ideological battle. 

However, psychological research shows that the most resilient teams do not avoid conflict; they master the etiquette of cognitive friction. When you challenge someone's idea, the secret is to separate the proposal from their identity. Instead of saying, "Your strategy is completely flawed," try framing it through inquiry: "Could you walk me through how this approach accounts for our third-quarter delivery bottleneck?"

Notice the shift in tonality. You are not attacking their competence; you are inviting them into a shared puzzle. Next time tension rises in your meeting, pause, acknowledge the shared objective, and pose an open question rather than a definitive verdict.`,
    comprehensionQuestions: [
      {
        question: 'According to the speaker, what do resilient teams do regarding conflict?',
        options: [
          'They strictly avoid confrontation at all costs.',
          'They master the etiquette of cognitive friction.',
          'They assign a mediator to every discussion.',
          'They always defer decisions to the team leader.'
        ],
        correctIndex: 1,
        explanation: 'The speaker explicitly states that resilient teams do not avoid conflict; they master the etiquette of cognitive friction.'
      },
      {
        question: 'What is the recommended alternative to saying "Your strategy is completely flawed"?',
        options: [
          'Remaining silent until the project concludes.',
          'Framing the objection as a curious inquiry about specific bottlenecks.',
          'Writing an anonymous complaint to management.',
          'Demanding a complete rewrite of the strategy.'
        ],
        correctIndex: 1,
        explanation: 'The speaker recommends framing objections through collaborative inquiry rather than personal verdicts.'
      }
    ],
    keyVocabulary: [
      { word: 'Friction point', meaning: 'A specific area where conflict or difficulty arises', phonetic: '/ˈfrɪk.ʃən pɔɪnt/' },
      { word: 'Etiquette', meaning: 'Customary code of polite behavior in society or profession', phonetic: '/ˈet.ɪ.ket/' },
      { word: 'Bottleneck', meaning: 'A point of congestion that slows down an entire process', phonetic: '/ˈbɒt.əl.nek/' }
    ],
    naturalExpressions: [
      { expression: 'Walk me through...', meaning: 'Explain step-by-step in detail', example: 'Could you walk me through your thought process on this budget proposal?' },
      { expression: 'Friction point', meaning: 'A place of tension or resistance', example: 'Communication between design and engineering was our biggest friction point.' }
    ]
  },
  {
    id: 'listen-2',
    title: 'The Architecture of Daily Habits',
    type: 'interview',
    accent: 'American',
    difficulty: 'Intermediate',
    durationEstimate: '75 sec',
    context: 'A behavioral scientist discusses why willpower alone fails and how environment design builds lasting habits.',
    audioText: `Host: Dr. Harris, why do ninety percent of New Year resolutions disintegrate before February?
Dr. Harris: Because people rely almost exclusively on sheer willpower. But willpower is like a smartphone battery—it drains rapidly with every decision you make throughout the day. 

If you want to read twenty pages every evening, don't leave your book inside a closed drawer while keeping your tablet on your pillow. Place the open book on your nightstand, and charge your phone in the hallway. We are creatures of least resistance. When you redesign your immediate physical space to make the desired behavior effortless, consistency becomes the default path rather than an uphill struggle.`,
    comprehensionQuestions: [
      {
        question: 'Why does the scientist compare willpower to a smartphone battery?',
        options: [
          'Because it needs electricity to function.',
          'Because it depletes steadily with every decision made.',
          'Because it can be recharged in ten minutes.',
          'Because only modern people possess it.'
        ],
        correctIndex: 1,
        explanation: 'Dr. Harris explains that willpower drains rapidly as you make choices across the day.'
      },
      {
        question: 'What is the core principle behind placing the book on the nightstand?',
        options: [
          'Aesthetic bedroom decor.',
          'Designing the environment for least resistance.',
          'Showing guests that you love literature.',
          'Following an ancient superstition.'
        ],
        correctIndex: 1,
        explanation: 'Making desired behaviors effortless transforms consistency into the default setting.'
      }
    ],
    keyVocabulary: [
      { word: 'Disintegrate', meaning: 'Break up into small parts or fail completely', phonetic: '/dɪsˈɪn.tɪ.ɡreɪt/' },
      { word: 'Sheer', meaning: 'Pure, absolute, or unmitigated', phonetic: '/ʃɪər/' },
      { word: 'Default', meaning: 'A pre-selected option adopted when no alternative is specified', phonetic: '/dɪˈfɒlt/' }
    ],
    naturalExpressions: [
      { expression: 'Creatures of least resistance', meaning: 'People who naturally take the easiest available option', example: 'Humans are creatures of least resistance; keep healthy snacks on the counter.' },
      { expression: 'An uphill struggle', meaning: 'A very difficult task requiring continuous effort', example: 'Getting consensus without clear data was an uphill struggle.' }
    ]
  },
  {
    id: 'listen-3',
    title: 'The Silent Symphony of Indian Classical Ragas',
    type: 'speech',
    accent: 'Indian',
    difficulty: 'Advanced',
    durationEstimate: '100 sec',
    context: 'A master musician explains how Indian classical ragas correspond to time, emotion, and natural rhythms.',
    audioText: `Good evening, ladies and gentlemen. In the Western tradition, music is predominantly architectural—it builds harmony vertically through chords and orchestrations. In our Hindustani and Carnatic traditions, music is deeply temporal and atmospheric. 

A raga is neither a mere scale nor a static melody. It is a living sonic entity with its own personality, ascending notes, and emotional center called the 'Vadi svara'. When an artist renders Raga Bhairav at dawn, the resonant, oscillating Rishabh mirrors the stillness of awakening prana. You do not just listen to the music; you step into a meditative continuum where sound dissolves the restless turbulence of the modern mind.`,
    comprehensionQuestions: [
      {
        question: 'How does the speaker contrast Western music with Indian classical music?',
        options: [
          'Western music is faster, while Indian music has no rhythm.',
          'Western music is architectural and harmonic; Indian music is temporal and atmospheric.',
          'Indian music uses electronic synthesizers exclusively.',
          'There is no difference between them.'
        ],
        correctIndex: 1,
        explanation: 'The speaker contrasts the vertical chordal harmony of Western music with the temporal, atmospheric nature of Indian classical ragas.'
      }
    ],
    keyVocabulary: [
      { word: 'Predominantly', meaning: 'Mainly, for the most part', phonetic: '/prɪˈdɒm.ɪ.nənt.li/' },
      { word: 'Oscillating', meaning: 'Moving continually back and forth at a regular speed', phonetic: '/ˈɒs.ɪ.leɪ.tɪŋ/' },
      { word: 'Continuum', meaning: 'A continuous sequence in which adjacent elements are not distinctly different', phonetic: '/kənˈtɪn.ju.əm/' }
    ],
    naturalExpressions: [
      { expression: 'For the most part', meaning: 'In general; predominantly', example: 'The presentation went smoothly for the most part.' },
      { expression: 'Dissolve the turbulence', meaning: 'Calm or eliminate agitation and chaos', example: 'A morning walk helps dissolve the turbulence of daily stress.' }
    ]
  }
];

// ─────────────── 2. SPEAK & THINK ───────────────
export interface SpeakThinkEntry {
  id: string;
  theme: string;
  challengeType: '60_second_fluency' | 'spontaneous_opinion' | 'storytelling' | 'describe_concept' | 'what_would_you_say';
  title: string;
  prompt: string;
  hindiTranslationTrap: {
    literalHindiThought: string;
    clunkyEnglish: string;
    naturalEnglishAlternative: string;
    why: string;
  };
  mindsetBooster: string;
  frameworkSteps: string[];
  suggestedPhrases: string[];
  sampleModelAnswer: string;
}

export const SPEAK_THINK_ENTRIES: SpeakThinkEntry[] = [
  {
    id: 'speak-1',
    theme: 'Expressing Opinions Gracefully in Meetings',
    challengeType: 'spontaneous_opinion',
    title: 'Polite Pushback on an Unrealistic Deadline',
    prompt: 'Your manager proposes delivering a complex client project in 5 business days instead of the usual 3 weeks. How would you verbally push back respectfully while offering a realistic alternative?',
    hindiTranslationTrap: {
      literalHindiThought: 'यह बिल्कुल नहीं हो सकता, आप बहुत गलत सोच रहे हैं।',
      clunkyEnglish: 'This cannot happen at all, you are thinking very wrong.',
      naturalEnglishAlternative: 'I have some concerns about the proposed timeline. Given our quality standards, delivering in five days could risk critical errors. Could we explore a phased rollout instead?',
      why: 'Literal translation attacks the person ("you are thinking wrong"), whereas natural English diplomatically highlights the risk to quality and proposes an alternative.'
    },
    mindsetBooster: 'Stop translating word-by-word from Hindi. Think in terms of business impact, quality, and mutual goals.',
    frameworkSteps: [
      'Step 1: Acknowledge the ambition (e.g. "I understand the urgency to launch quickly...")',
      'Step 2: State the objective risk (e.g. "...however, compressing 3 weeks into 5 days creates significant quality risks.")',
      'Step 3: Propose a constructive alternative (e.g. "What if we ship the core module by Friday and the rest next week?")'
    ],
    suggestedPhrases: [
      'I share your enthusiasm to move fast, but...',
      "To ensure we don't compromise on quality...",
      'Would it make sense to prioritize the MVP first?',
      'My primary concern is around bandwidth and testing.'
    ],
    sampleModelAnswer: 'I completely understand why securing this deadline is important for the client. However, looking at the technical requirements, delivering the entire scope in five days would leave zero buffer for QA testing. To keep our quality uncompromised, I would recommend delivering the core dashboard first by Friday, and releasing the secondary reports early the following week.'
  },
  {
    id: 'speak-2',
    theme: 'Storytelling & Incident Narration',
    challengeType: 'storytelling',
    title: 'The Time a Mistake Taught You an Invaluable Lesson',
    prompt: 'Speak for 60 seconds describing a mistake you made in the past (work, studies, or personal life), how you handled it, and the lasting insight you gained from it.',
    hindiTranslationTrap: {
      literalHindiThought: 'मुझसे एक बार बहुत बड़ी गलती हो गया था और मैं बहुत डर गया था।',
      clunkyEnglish: 'From me one time very big mistake happened and I was very afraid.',
      naturalEnglishAlternative: 'A few years ago, I made a critical oversight that taught me the importance of double-checking assumptions.',
      why: 'In Hindi, passive constructs like "मुझसे हो गया" are common. In English, active voice with clear agency ("I made an oversight") sounds far more confident and professional.'
    },
    mindsetBooster: 'Narrate past events using simple past tense for action and present perfect for the ongoing takeaway.',
    frameworkSteps: [
      'Setting the scene: "Early in my career / A few years ago..."',
      'The turning point: "What went wrong was..."',
      'The resolution: "Instead of panicking, I took ownership by..."',
      'The lasting takeaway: "That experience fundamentally shaped how I..."'
    ],
    suggestedPhrases: [
      'It was a classic case of miscommunication...',
      'I immediately took ownership of the situation.',
      'In hindsight, it was the best learning experience I could have asked for.',
      'Moving forward, I implemented a checklist system.'
    ],
    sampleModelAnswer: 'Early in my career, I once sent an unreviewed data sheet to a client, which contained two conflicting numbers. As soon as I spotted the error, instead of hoping nobody would notice, I proactively reached out to the client, apologized for the confusion, and shared the verified document within the hour. The client actually appreciated the transparency, and that incident cemented my habit of never rushing final deliverables.'
  },
  {
    id: 'speak-3',
    theme: 'Explaining a Complex Concept Simply',
    challengeType: 'describe_concept',
    title: 'Explain "Compound Interest" or "Consistency" to a 10-Year-Old',
    prompt: 'Explain the power of small daily efforts (or compound interest) in 45-60 seconds using a simple analogy (snowballs, trees, or drops of water).',
    hindiTranslationTrap: {
      literalHindiThought: 'रोज-रोज थोड़ा काम करने से बहुत बड़ा फायदा होता है बाद में।',
      clunkyEnglish: 'Doing daily daily little work makes very big benefit afterwards.',
      naturalEnglishAlternative: 'Small daily actions compound over time into extraordinary results.',
      why: 'Repeating adverbs like "daily daily" is a direct Hindi calque. English uses verbs like "compound" or phrases like "day after day".'
    },
    mindsetBooster: 'Use vivid analogies to anchor abstract ideas. Picture a small snowball rolling down a hill.',
    frameworkSteps: [
      'Hook with an image: "Imagine rolling a tiny snowball down a hill..."',
      'Explain the mechanism: "At first, it barely looks bigger, but each roll adds more snow..."',
      'Connect to real life: "Reading 5 pages every day works the exact same way..."'
    ],
    suggestedPhrases: [
      'Think of it like...',
      'It might feel negligible in the moment, but...',
      'Over the span of a year, this adds up to...',
      'The magic happens in the compounding effect.'
    ],
    sampleModelAnswer: 'Imagine planting a tiny mango sapling in your courtyard. If you water it today, you won’t see fruit tomorrow or even next week. But each watering quietly adds roots beneath the soil. Reading ten pages a day or learning two new words works the exact same way. In thirty days, it looks modest; in three years, you have built an entire library inside your mind.'
  }
];

// ─────────────── 3. NATURAL ENGLISH ───────────────
export interface NaturalEnglishItem {
  id: string;
  category: 'Collocation' | 'Phrasal Verb' | 'Conversational Filler' | 'Instead of X Say Y' | 'Corporate vs Natural' | 'Indianism vs Global';
  headline: string;
  clunkyOrWrong: string;
  naturalAlternative: string;
  contextExplanation: string;
  realWorldExamples: string[];
  quickQuiz: {
    prompt: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const NATURAL_ENGLISH_ENTRIES: NaturalEnglishItem[] = [
  {
    id: 'nat-1',
    category: 'Collocation',
    headline: 'Make a Decision vs. Do a Decision',
    clunkyOrWrong: 'We need to do a decision quickly.',
    naturalAlternative: 'We need to make a decision / reach a decision quickly.',
    contextExplanation: 'In English, the noun "decision" pairs with "make", "reach", or "arrive at"—never with "do" or "take" (though "take a decision" is occasionally used in British legal contexts, "make a decision" is the universal standard).',
    realWorldExamples: [
      'The leadership team needs to make a decision by Friday.',
      'After hours of deliberation, they finally reached a decision.',
      'Try not to make hasty decisions when you are emotionally exhausted.'
    ],
    quickQuiz: {
      prompt: 'Choose the most natural sentence:',
      options: [
        'She did a very good decision to pursue higher studies.',
        'She made a wise decision to pursue higher studies.',
        'She took a decision for higher studies.',
        'She created a decision to study more.'
      ],
      correctIndex: 1,
      explanation: '"Make a decision" is the universally accepted natural collocation.'
    }
  },
  {
    id: 'nat-2',
    category: 'Indianism vs Global',
    headline: 'Revert Back vs. Get Back to You / Reply',
    clunkyOrWrong: 'Please revert back at the earliest.',
    naturalAlternative: 'Please get back to me / Let me know when you have a moment / I look forward to hearing from you.',
    contextExplanation: '"Revert" literally means to return to a previous state (e.g. "the software reverted to the old version"). In Indian English, it is often misused to mean "reply". Furthermore, adding "back" makes it redundant ("revert back" = return return).',
    realWorldExamples: [
      'Thanks for reaching out. I will get back to you with the draft by noon.',
      'Could you let me know if these numbers align with your expectations?',
      'I will circle back with the team and reply by tomorrow morning.'
    ],
    quickQuiz: {
      prompt: 'Which phrase is the most natural in an email to a global client?',
      options: [
        'Please revert back as soon as possible.',
        'I kindly request you to revert.',
        'I look forward to hearing your thoughts on this proposal.',
        'Revert with the updates immediately.'
      ],
      correctIndex: 2,
      explanation: '"I look forward to hearing your thoughts" is professional, warm, and globally understood.'
    }
  },
  {
    id: 'nat-3',
    category: 'Instead of X Say Y',
    headline: 'Saying "I Understand" Naturally in High-Stakes Conversations',
    clunkyOrWrong: 'Yes, I am understanding what you are saying.',
    naturalAlternative: 'I see your point / That makes complete sense / I hear what you are saying.',
    contextExplanation: 'Stative verbs like "understand", "know", "believe", and "prefer" are rarely used in continuous (-ing) forms. Furthermore, using nuanced phrases like "I see where you are coming from" validates the speaker much better than a flat "I understand".',
    realWorldExamples: [
      'I see your point regarding budget constraints; let’s prioritize phase one.',
      'That makes total sense given our current timeline.',
      'I completely hear what you are saying about user fatigue.'
    ],
    quickQuiz: {
      prompt: 'Which response sounds most collaborative during a disagreement?',
      options: [
        'I am not understanding your point.',
        'I see where you are coming from, though I wonder if we might test both approaches.',
        'You are telling wrong thing.',
        'I understanded everything.'
      ],
      correctIndex: 1,
      explanation: '"I see where you are coming from..." acknowledges the other person\'s perspective with grace.'
    }
  },
  {
    id: 'nat-4',
    category: 'Phrasal Verb',
    headline: 'Call Off vs. Put Off (Cancel vs. Postpone)',
    clunkyOrWrong: 'Due to heavy rain, the match has been put off completely forever.',
    naturalAlternative: 'The meeting was put off until next Tuesday, but the annual picnic was called off.',
    contextExplanation: '"Put off" means to delay or postpone to a later date. "Call off" means to cancel entirely.',
    realWorldExamples: [
      'We had to put off the launch by two weeks to fix a critical bug.',
      'The organizers decided to call off the outdoor festival due to severe storms.',
      'Don’t put off difficult conversations; they only become harder with time.'
    ],
    quickQuiz: {
      prompt: 'Fill in the blank: "Because the speaker fell ill, the workshop was _______ until next month."',
      options: ['called off', 'put off', 'taken off', 'set off'],
      correctIndex: 1,
      explanation: '"Put off" means postponed to a later date (next month).'
    }
  }
];

// ─────────────── 4. READING ROOM ───────────────
export interface ReadingRoomQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  type: 'literal' | 'inference' | 'vocabulary_in_context';
}

export interface ReadingRoomEntry {
  id: string;
  title: string;
  authorOrSource: string;
  genre: 'Philosophy' | 'Psychology' | 'Science & Tech' | 'Literature' | 'History & Culture';
  readingTimeMinutes: number;
  passage: string;
  summaryNote: string;
  comprehensionQuestions: ReadingRoomQuestion[];
  vocabularySpotlight: { word: string; contextualMeaning: string; example: string }[];
  grammaticalStructure: { pattern: string; explanation: string; example: string };
  deeperDiscussionPrompt: string;
  whatToRemember: string;
}

export const READING_ROOM_ENTRIES: ReadingRoomEntry[] = [
  {
    id: 'read-1',
    title: 'The Architecture of Solitude',
    authorOrSource: 'Adapted from Philosophical Reflections on Modern Life',
    genre: 'Philosophy',
    readingTimeMinutes: 3,
    passage: `In our hyper-connected contemporary landscape, solitude is frequently conflated with loneliness. Yet the two states are separated by an immense psychological gulf. Loneliness is marked by a painful sense of deprivation—an acute yearning for a presence that is absent. Solitude, by contrast, is a state of rich self-communion, wherein one's own consciousness becomes an hospitable sanctuary.

When we deprive our minds of silence, we surrender the cognitive space necessary to synthesize experience. Every incoming notification and algorithmic feed creates a micro-fracture in our attention span. We become adept at reacting, but impoverished at contemplating. Great literature, scientific breakthroughs, and profound ethical insights have almost invariably germinated in the fertile soil of unhurried solitude. To cultivate solitude is not to retreat from the world in misanthropic isolation, but rather to return to the world with renewed clarity, deeper empathy, and an anchored sense of purpose.`,
    summaryNote: 'A meditation on the crucial distinction between loneliness and constructive solitude in an era of non-stop digital stimulation.',
    comprehensionQuestions: [
      {
        question: 'According to the passage, how does solitude fundamentally differ from loneliness?',
        options: [
          'Solitude is practiced only by monks, while loneliness affects everyone.',
          'Loneliness is characterized by deprivation, whereas solitude is characterized by fertile self-communion.',
          'Solitude lasts longer than loneliness.',
          'There is no actual difference between the two terms.'
        ],
        correctIndex: 1,
        explanation: 'The passage explicitly contrasts the deprivation of loneliness with the hospitable self-communion of solitude.',
        type: 'literal'
      },
      {
        question: 'What does the author imply by the phrase "impoverished at contemplating"?',
        options: [
          'People cannot afford books due to economic hardship.',
          'Constant digital distractions weaken our capacity for deep, deliberate reflection.',
          'Modern science has proven that thinking is unnecessary.',
          'Contemplation requires paying a monthly subscription.'
        ],
        correctIndex: 1,
        explanation: 'The text suggests that reacting to frequent notifications leaves our capacity for contemplation diminished.',
        type: 'inference'
      }
    ],
    vocabularySpotlight: [
      { word: 'Conflated', contextualMeaning: 'Merged or confused two distinct concepts together', example: 'Wealth is often conflated with genuine well-being.' },
      { word: 'Sanctuary', contextualMeaning: 'A place of safety, quiet refuge, or retreat', example: 'Her morning tea routine was a quiet sanctuary before the chaos of the day.' },
      { word: 'Germinated', contextualMeaning: 'Began to grow, develop, or come into existence', example: 'The idea for the novel germinated during his travels across the mountains.' }
    ],
    grammaticalStructure: {
      pattern: 'Not to [Action A], but rather to [Action B]',
      explanation: 'Used to correct a misconception and present the true, noble intention of an action.',
      example: 'To practice mindfulness is not to suppress your emotions, but rather to observe them without immediate judgment.'
    },
    deeperDiscussionPrompt: 'How often in your typical week do you experience intentional, device-free solitude? What creative or emotional changes happen when you carve out this space?',
    whatToRemember: 'Loneliness is an absence of others; solitude is the rich, restful presence of oneself.'
  },
  {
    id: 'read-2',
    title: 'The Unseen Wonders of Slime Mold Intelligence',
    authorOrSource: 'Nature & Biological Sciences Essay',
    genre: 'Science & Tech',
    readingTimeMinutes: 4,
    passage: `For centuries, human beings operated under the steadfast assumption that intelligence requires a centralized nervous system—specifically, a brain. However, recent discoveries in biological sciences have radically challenged this anthropocentric bias. Consider Physarum polycephalum, commonly known as the yellow slime mold. It is a single-celled organism with neither neurons nor synapses, yet it exhibits problem-solving capabilities that baffle computational engineers.

When researchers placed oat flakes over a map of Tokyo to represent major railway stations and introduced the slime mold, the organism grew a network of nutrient-transporting tubes that almost identically matched the layout of the Tokyo subway system—an infrastructure perfected by human engineers over decades of complex mathematical modeling. The slime mold achieved this optimal balance of efficiency, resilience, and minimal cost purely through decentralized feedback loops. As our own artificial intelligence systems grapple with energy efficiency and decentralized architecture, nature quietly reminds us that problem-solving is woven into the very fabric of life itself.`,
    summaryNote: 'How single-celled organisms without brains solve complex spatial and optimization puzzles, expanding our understanding of biological intelligence.',
    comprehensionQuestions: [
      {
        question: 'What remarkable feat did Physarum polycephalum perform on the map of Tokyo?',
        options: [
          'It consumed all the paper within ten seconds.',
          'It generated electricity to power miniature train tracks.',
          'It replicated the efficient network topology of the Tokyo subway system.',
          'It communicated with engineers using chemical Morse code.'
        ],
        correctIndex: 2,
        explanation: 'The slime mold created nutrient tubes that mirrored the optimal layout of the Tokyo subway system.'
        , type: 'literal'
      }
    ],
    vocabularySpotlight: [
      { word: 'Anthropocentric', contextualMeaning: 'Interpreting the world exclusively in terms of human values and experience', example: 'Assuming all communication must resemble human speech is an anthropocentric assumption.' },
      { word: 'Topology', contextualMeaning: 'The way in which constituent parts are interrelated or arranged', example: 'The network topology ensured high redundancy in case of server failure.' }
    ],
    grammaticalStructure: {
      pattern: 'Yet it exhibits [Attribute], that baffles [Observer]',
      explanation: 'Used to introduce an astonishing contrast where an underdog or simple system outperforms expectations.',
      example: 'The ancient sundial had no moving parts, yet it exhibited an accuracy that baffled contemporary horologists.'
    },
    deeperDiscussionPrompt: 'If a brainless single-celled organism can optimize complex logistical networks, how might we rethink our definition of intelligence in the age of AI?',
    whatToRemember: 'True intelligence is not confined to human brains; problem-solving is distributed throughout the living world.'
  }
];
