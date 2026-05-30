// src/lib/constants/sutr-rooms.ts

export interface SutrRoomDescription {
  id: string;
  name: string;
  nameHindi: string;
  oneLiner: string;
  contemplativeText: string;
}

export const SUTR_ROOMS: SutrRoomDescription[] = [
  {
    id: 'aarambh',
    name: 'Aarambh',
    nameHindi: 'आरंभ',
    oneLiner: 'How you begin the day determines how you move through it',
    contemplativeText: 'A mood check, an intention, a mantra, and a question - four things, five minutes, at the start of each day. Aarambh is not about making you optimistic. It is about making you intentional. There is a difference.'
  },
  {
    id: 'agni',
    name: 'Agni',
    nameHindi: 'अग्नि',
    oneLiner: 'The daily forge - small habits, large lives',
    contemplativeText: 'You do not become someone different in a moment of decision. You become someone different through the unremarkable accumulation of small, repeated actions. Agni tracks those actions - not to shame you when you miss, but to remind you of what you are building.'
  },
  {
    id: 'antarman',
    name: 'Antarman',
    nameHindi: 'अन्तर्मन',
    oneLiner: 'The private room - journal, reflect, remember',
    contemplativeText: 'This room belongs only to you. No feeds, no audience, no performance. Just the page and what you actually think. Research consistently shows that the simple act of writing about your life - what happened, what you felt, what you want - reduces stress and increases clarity. Antarman is where that happens.'
  },
  {
    id: 'bargad',
    name: 'Bargad',
    nameHindi: 'बरगद',
    oneLiner: 'Your long-term intentions - the things you are becoming',
    contemplativeText: 'Not a task list of things to do, but a forest of the things you want to grow into. Under the shade of Bargad, you set intentions that span months and years, and return to them when the noise of the day gets too loud.'
  },
  {
    id: 'kavitalay',
    name: 'Kavitalay',
    nameHindi: 'कवितालय',
    oneLiner: 'Poetry in four languages — Hindi, Urdu, English, and the world — three poems each, daily',
    contemplativeText: `कवितालय is the house of poetry. Every day: three Hindi poems, three Urdu poems (in Devanagari), three English poems, and three from the world's other languages — Neruda, Rilke, Akhmatova, Rumi, Basho. Choose modern or classical. Choose your script. The order rearranges itself accordingly. Each poem opens fully; the poet's life folds beneath it, available when you want it. Twelve poems a day. The whole human range of feeling, held in language.`,
  },
  {
    id: 'manthan',
    name: 'Manthan',
    nameHindi: 'मन्थन',
    oneLiner: 'Frameworks to see the world with absolute clarity',
    contemplativeText: 'Every problem you face has been solved conceptually before. Manthan collects the mental models - from inversion to first principles - that help you cut through noise, make better decisions, and see the hidden structure of complex situations.'
  },
  {
    id: 'noor',
    name: 'Prerna',
    nameHindi: 'प्रेरणा',
    oneLiner: 'One person. One moment. One ignition.',
    contemplativeText: 'Not a quote for your Instagram. A person who faced something real and chose a specific way through it. Prerna gives you one such person each day - their words, their defining moment, and the question their life leaves open for yours.'
  },
  {
    id: 'riyaz',
    name: 'Riyaz',
    nameHindi: 'रियाज़',
    oneLiner: 'The practice of focus, scale, and beauty',
    contemplativeText: 'Indian classical ragas, western classical movements, and the stories of the artists who practiced them. Riyaz is a guide to the discipline of daily attention, teaching you how to listen to silence and appreciate the craft of sound.'
  },
  {
    id: 'darshan',
    name: 'Darshan',
    nameHindi: 'दर्शन',
    oneLiner: 'The major philosophical traditions of human thought',
    contemplativeText: 'An immersive journey through the core traditions of philosophy - Indian, Western, Eastern, African, and Islamic - alongside a Daily Spark of wisdom. Explore the concepts, thinkers, and debates that have shaped human existence and continue to offer clarity in the modern world.'
  },
  {
    id: 'neurolab',
    name: 'NeuroLab',
    nameHindi: 'न्यूरोलैब',
    oneLiner: 'Brain science and mind psychology — two rooms, one destination',
    contemplativeText: `NeuroLab is the science of what is happening inside you right now. The NeuroLab tab covers the physical brain — neuroplasticity, memory formation, attention, sleep, creativity — the biology of thought itself. The Manas tab covers the psychology of being human — cognitive biases, social behavior, emotion, decision-making, the forces that shape your choices without your knowing. Two disciplines. One room. Because the brain and the mind are not the same thing, and understanding both changes how you see yourself.`,
  },
  {
    id: 'cosmos',
    name: 'Cosmos',
    nameHindi: 'ब्रह्मांड',
    oneLiner: 'A view of the infinite',
    contemplativeText: 'A daily look at cosmic structures, space history, and the physics of the universe. In the face of nebulae and light-years, your daily anxieties shrink to their proper, tiny size, leaving you with a sense of quiet wonder and cosmic perspective.'
  },
  {
    id: 'darshanik',
    name: 'Darshanik',
    nameHindi: 'दार्शनिक',
    oneLiner: 'The thinkers who mapped the paths of meaning',
    contemplativeText: 'Meet the architects of human thought. From ancient sages to modern critics, Darshanik traces the lives, struggles, and core ideas of the philosophers who challenged their eras and left us maps to navigate the complexities of our own minds and society.'
  },
  {
    id: 'angrezi',
    name: 'Angrezi',
    nameHindi: 'अंग्रेज़ी',
    oneLiner: 'English as a living language - its words, its structures, its craft',
    contemplativeText: 'A word you did not know this morning. An idiom with a 300-year history. A grammar structure that separates good English from fluent English. And daily drills that train you to think in English rather than translate from Hindi. Language is not just communication - it is the shape of thought.'
  },
  {
    id: 'sahitya',
    name: 'Sahitya',
    nameHindi: 'साहित्य',
    oneLiner: 'Literature — Indian writers, English writers, world writers, and a daily reading companion',
    contemplativeText: `Sahitya opens with the writers closest to home. The Indian Writer tab: one voice from Indian literature daily — Hindi or English, classical or contemporary, from Kabir and Mirabai through Premchand and Nirala to Arundhati Roy and Amitav Ghosh. The English Writer tab: one voice from the great tradition of English-language literature, Shakespeare to Toni Morrison, Austen to Zadie Smith. The World Writer tab: one voice from every other language — Dostoevsky, Rumi, García Márquez, Clarice Lispector, Murasaki Shikibu — always with the note on which translation to read. And last: the Reading Companion, a long-form essay or article each day with full context, intellectual lineage, and the question it leaves open. Four tabs. The whole of literature, from here to everywhere.`,
  },
  {
    id: 'vaishwik',
    name: 'Vaishwik',
    nameHindi: 'वैश्विक',
    oneLiner: 'World intelligence — global situations and systems explained without telling you what to think',
    contemplativeText: `Vaishwik does one thing: explains what is actually happening in the world, and why, without telling you what to think about it. On alternating days, either a situation — why Pakistan's military has political power, why Sri Lanka's economy collapsed, what the South China Sea dispute is actually about — or a system — how the IMF works, what currency pegs are, why the UN Security Council veto exists. Each situation comes with the key players, the timeline, and the single most important thing to understand. Each system comes with how it was created, who benefits, and what the reform debate looks like. On Sundays: the Vaishwik Lens — a one-paragraph structural observation about the global order. Not news. Context. The difference between knowing what happened and understanding why.`,
  },
  {
    id: 'neelakurinji',
    name: 'Neelakurinji',
    nameHindi: 'नीलकुरिंजी',
    oneLiner: 'Daily curiosities and natural anomalies',
    contemplativeText: 'A bloom of pure curiosity. Neelakurinji brings you the unexpected - why hot water can freeze faster than cold, how trees communicate, or the psychology of optical illusions. A reminder that the world is far more mysterious than we assume.'
  },
  {
    id: 'safar',
    name: 'Safar',
    nameHindi: 'सफ़र',
    oneLiner: 'Journey to the remote corners of human curiosity',
    contemplativeText: 'Travel across historic cities, remote landscapes, and ancient libraries from your desk. Safar is not about tourism; it is about pilgrimage - understanding how places shape human culture, memory, and spirit.'
  },
  {
    id: 'aranya',
    name: 'Aranya',
    nameHindi: 'अरण्य',
    oneLiner: 'Reconnecting with the living earth',
    contemplativeText: 'Stories of soil, forests, migratory birds, and mycelial networks. Aranya is a digital window into the natural world, reminding us of the ancient, non-human rhythms that continue to support and shape all human endeavor.'
  },
  {
    id: 'bharat',
    name: 'Bharat',
    nameHindi: 'भारत',
    oneLiner: 'India — known deeply, one theme each day across history, ecology, science, art, society, and people',
    contemplativeText: `Bharat is not a patriotism exercise. It is a daily encounter with the actual depth and strangeness of this country. Monday is history — not the textbook version but the version with the complications left in. Tuesday is ecology — the rivers, the forests, the species that exist nowhere else. Wednesday is art and culture — the traditions that encoded an entire worldview in a weave pattern or a raga. Thursday is science — from Aryabhata's 5th-century heliocentric model to the Mars Orbiter Mission's impossible budget. Friday is society — caste, reform, the constitution, the ongoing arguments about who India is for. Saturday is the people who shaped it, especially the ones the textbooks missed. Sunday is पता था — the fact that changes what you thought you knew. A different India, every day.`,
  },
  {
    id: 'kahani',
    name: 'Kahani',
    nameHindi: 'कहानी',
    oneLiner: 'Stories — one daily tale from every tradition, and your own writing space',
    contemplativeText: `Kahani holds two things: the world's stories and yours. Every day, one story from the oldest traditions of human narrative — Panchatantra, Jataka tales, Zen koans, West African Anansi stories, Norse myths, Sufi teaching tales, Greek myths retold without the sanitization. Each story comes with what it knows about human nature — not the moral, which you can find yourself, but the observation the story is built around. And in the second tab: your own space to write. A title, a thread, a blank page. A calendar with dots for the days you wrote. The story of the day and the story you are writing are not separate things.`,
  },
  {
    id: 'vyakti',
    name: 'Vyakti',
    nameHindi: 'व्यक्ति',
    oneLiner: 'One person every day — the human beneath the achievement',
    contemplativeText: `Vyakti is not a biography room. It does not give you birth dates and award lists. It gives you one person per day — the specific thing they knew about being alive, the moment that defined them, the idea their life embodied. Scientists, poets, revolutionaries, philosophers, rulers, reformers, artists — from every culture and era, with deliberate attention to the overlooked: women who changed their fields and weren't credited, thinkers from traditions outside Europe, Indians who should be household names but aren't. One person. One portrait. One question their life leaves open for yours.`,
  },
  {
    id: 'write',
    name: 'Write',
    nameHindi: 'लिखो',
    oneLiner: 'Your writing space — stories, thoughts, anything',
    contemplativeText: `लिखो is simply a space to write. No prompts unless you want them. No word counts unless you want them. Just a page, a cursor, and whatever needs to come out today.`,
  },
  {
    id: 'anand',
    name: 'Anand',
    nameHindi: 'आनंद',
    oneLiner: 'A light heart and quiet delight',
    contemplativeText: 'A space for gentle humor, optical play, and joyful curiosities. Anand is here to remind you that a contemplative life does not need to be heavy. Cleanse your mental palate with something light and delightful.'
  },
  {
    id: 'vani',
    name: 'Vani',
    nameHindi: 'वाणी',
    oneLiner: 'Sanskrit shlokas, dohas, and oral heritage',
    contemplativeText: 'The concise, rhythmic wisdom of Kabir, Rahim, and ancient shlokas. Vani presents short verses that are easy to memorize but take a lifetime to fully understand. Listen to the resonance of words designed to guide daily life.'
  },
  {
    id: 'paradox',
    name: 'Paradox',
    nameHindi: 'विरोधाभास',
    oneLiner: 'Puzzles that stretch the boundaries of logic',
    contemplativeText: 'One mind-bending paradox per day, fully unpacked. Sit with the ultimate contradictions of physics, logic, and philosophy. Paradox is designed to dismantle your assumptions and remind you of the limits of certainty.'
  },
  {
    id: 'typewriter',
    name: 'Typewriter',
    nameHindi: 'टाइपराइटर',
    oneLiner: 'The finest longform essays and articles across every domain of human thought',
    contemplativeText: 'Typewriter draws from a merged registry of 27 of the world\'s leading intellectual publications and archives, combining live parallel scraping with a deep, pre-curated seed library. Every day, it selects a guaranteed array of pieces covering all ten umbrella genres — from the science of dying to the politics of language, from the ecology of cities to the philosophy of love. Each piece is accompanied by a custom Pravah Companion that sets the context before you read, highlights main ideas, and leaves you with reflection questions after.'
  },
  {
    id: 'pratha',
    name: 'Pratha',
    nameHindi: 'प्रथा',
    oneLiner: 'The beautiful, the bewildering, the troubling, and the human — one of each, every day',
    contemplativeText: 'Every culture has developed practices that make complete sense from inside and look incomprehensible from outside. Pratha does not judge — it witnesses. Each day: one festival so beautiful it makes you wish you were there, one so bewildering it makes you question what you know about human nature, one troubling enough to sit with honestly. And one tribe — a human community that has found a completely different answer to the question of how to live. Pratha is not about exotic curiosity. It is about the radical act of understanding the world as it actually is — all of it.'
  }
];

