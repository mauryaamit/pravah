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
    id: 'sukoon',
    name: 'Sukoon',
    nameHindi: 'सुकून',
    oneLiner: 'A quiet shelter in the rhythm of verses',
    contemplativeText: 'Timeless poems in Hindi, Roman Hindustani, and English. Sukoon is not for scanning or speed-reading. It is a room to sit in for ten minutes, letting the resonance of Ghalib, Faiz, or Mahadevi Varma slow your breathing and restore your vocabulary of feeling.'
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
    id: 'manas',
    name: 'Manas',
    nameHindi: 'मानस',
    oneLiner: 'The architecture of your mind',
    contemplativeText: 'Every decision you made today was shaped by forces you did not notice. Manas names them - the bias that made you overconfident, the social pressure you mistook for your own opinion, the memory that was not quite accurate. Not to shame you, but to show you how your mind actually works.'
  },
  {
    id: 'bodh',
    name: 'Bodh',
    nameHindi: 'बोध',
    oneLiner: 'Ideas that shift how you interact with reality',
    contemplativeText: 'Some ideas do not just add to your knowledge; they change the person who knows. Bodh explores deep concepts in science, economics, and history that shift your perspective, offering new lenses through which to view your daily choices.'
  },
  {
    id: 'neurolab',
    name: 'NeuroLab',
    nameHindi: 'न्यूरोलैब',
    oneLiner: 'The biology of focus, rest, and growth',
    contemplativeText: 'Your brain is a physical organ governed by biological laws. NeuroLab translates the latest neuroscience into actionable insights, showing you how light, sleep, attention, and chemical pathways dictate your mood and capability.'
  },
  {
    id: 'cosmos',
    name: 'Cosmos',
    nameHindi: 'ब्रह्मांड',
    oneLiner: 'A view of the infinite',
    contemplativeText: 'A daily look at cosmic structures, space history, and the physics of the universe. In the face of nebulae and light-years, your daily anxieties shrink to their proper, tiny size, leaving you with a sense of quiet wonder and cosmic perspective.'
  },
  {
    id: 'darshan',
    name: 'Darshan',
    nameHindi: 'दर्शन',
    oneLiner: 'The human struggle for meaning',
    contemplativeText: 'From ancient Vedic debates to Stoic reflections and existential questions. Darshan is not an academic lecture; it is an invitation to engage with the oldest human questions about duty, suffering, consciousness, and the art of living well.'
  },
  {
    id: 'angrezi',
    name: 'Angrezi',
    nameHindi: 'अंग्रेज़ी',
    oneLiner: 'English as a living language - its words, its structures, its craft',
    contemplativeText: 'A word you did not know this morning. An idiom with a 300-year history. A grammar structure that separates good English from fluent English. And daily drills that train you to think in English rather than translate from Hindi. Language is not just communication - it is the shape of thought.'
  },
  {
    id: 'lekh',
    name: 'Lekh',
    nameHindi: 'लेख',
    oneLiner: 'The finest longform writing across every domain of human thought',
    contemplativeText: 'Ten essays. Ten articles. Every day. From the science of dying to the politics of language, from the ecology of cities to the philosophy of love - Lekh is where you read the kind of writing that changes how you think about something you thought you already understood. A Pravah Companion walks you through each piece before you read it and leaves you with a question after.'
  },
  {
    id: 'srot',
    name: 'Srot',
    nameHindi: 'स्रोत',
    oneLiner: 'One long-form article to build deep focus',
    contemplativeText: 'In a world that fragments your attention into seconds, Srot offers depth. One long-form essay per day, designed to be read slowly, without distraction. Reclaim your capacity for sustained, deep thought and explore ideas that require time to settle.'
  },
  {
    id: 'duniya',
    name: 'Duniya',
    nameHindi: 'दुनिया',
    oneLiner: 'The historical currents behind today’s headlines',
    contemplativeText: 'Three key stories from around the globe, explained through the lens of history, geography, and culture. Duniya helps you see past the daily outrage of the news to understand the slow, structural shifts that shape our shared planet.'
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
    id: 'bharati',
    name: 'Bharati',
    nameHindi: 'भारती',
    oneLiner: 'The intellectual and scientific legacy of India',
    contemplativeText: 'From the engineering of Harappan cities to the grammar of Panini and the history of Indian mathematics. Bharati explores the deep, foundational ideas that emerged from the subcontinent, connecting the past to our modern lives.'
  },
  {
    id: 'kathakar',
    name: 'Kathakar',
    nameHindi: 'कथाकार',
    oneLiner: 'Timeless narratives that teach us how to live',
    contemplativeText: 'Fables, Zen koans, Sufi parables, and classic short stories. Kathakar presents the tales that have survived for centuries because they carry the distilled emotional truth of human experience. Read them to remember who we are.'
  },
  {
    id: 'vibhav',
    name: 'Vibhav',
    nameHindi: 'विभाव',
    oneLiner: 'The daily routines and struggles of historical icons',
    contemplativeText: 'Not dry biographies, but intimate portraits of how great writers, scientists, and leaders structured their days, faced failure, and kept their fire alive. Vibhav shows you that greatness is a daily practice, not an accident.'
  },
  {
    id: 'lekhak',
    name: 'Lekhak',
    nameHindi: 'लेखक',
    oneLiner: 'The craft and vision of the written word',
    contemplativeText: 'Enter the workshops of history’s most profound writers. Discover how they drafted their masterpieces, what they believed about the purpose of literature, and how they refined their voice to speak across generations.'
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
    oneLiner: 'The internet\'s finest longform essays, fetched fresh every day',
    contemplativeText: 'The Electric Typewriter is a curated archive of the greatest essays, articles, and longform journalism ever published on the web. Every day, Typewriter surfaces a fresh selection from its vast library — essays that change how you think, articles that challenge what you assume, prose that rewards unhurried reading. No algorithm. No clickbait. Just the finest writing, accompanied by a Pravah Companion that prepares you for the text and stays with you after.'
  },
  {
    id: 'pratha',
    name: 'Pratha',
    nameHindi: 'प्रथा',
    oneLiner: 'The beautiful, the bewildering, the troubling, and the human — one of each, every day',
    contemplativeText: 'Every culture has developed practices that make complete sense from inside and look incomprehensible from outside. Pratha does not judge — it witnesses. Each day: one festival so beautiful it makes you wish you were there, one so bewildering it makes you question what you know about human nature, one troubling enough to sit with honestly. And one tribe — a human community that has found a completely different answer to the question of how to live. Pratha is not about exotic curiosity. It is about the radical act of understanding the world as it actually is — all of it.'
  }
];

