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
    oneLiner: 'Daily start - mood, intention, mantra',
    contemplativeText: 'Begin each morning by aligning your breath, setting your focus, and stepping mindfully into the flow of the day.'
  },
  {
    id: 'agni',
    name: 'Agni',
    nameHindi: 'अग्नि',
    oneLiner: 'Habit forge - streak and micro-wins',
    contemplativeText: 'Feed the fire of action. Track small, deliberate actions that gather heat and transform into lifelong character.'
  },
  {
    id: 'antarman',
    name: 'Antarman',
    nameHindi: 'अन्तर्मन',
    oneLiner: 'Journal - write, reflect, grow',
    contemplativeText: 'A quiet mirror for your inner thoughts. Empty your mind, trace your feelings, and record your evolution.'
  },
  {
    id: 'bargad',
    name: 'Bargad',
    nameHindi: 'बरगद',
    oneLiner: 'Your Sankalps - deep long-term goals',
    contemplativeText: 'Plant your deepest commitments under the shade of the banyan tree. Watch your silent vows take root and grow.'
  },
  {
    id: 'sukoon',
    name: 'Sukoon',
    nameHindi: 'सुकून',
    oneLiner: 'Poetry - Hindi, Roman Urdu, English',
    contemplativeText: 'Lose yourself in the cadence of timeless verses. Let the rhythm of words soothe your spirit.'
  },
  {
    id: 'manthan',
    name: 'Manthan',
    nameHindi: 'मन्थन',
    oneLiner: 'One deep question per day',
    contemplativeText: 'Churn the depths of your mind. Answer the singular inquiry that cuts through the noise of daily distractions.'
  },
  {
    id: 'noor',
    name: 'Noor',
    nameHindi: 'नूर',
    oneLiner: 'Daily fire - transformation, not motivation',
    contemplativeText: 'A spark of quiet light to illuminate your path. Seek the wisdom that demands internal shift over superficial action.'
  },
  {
    id: 'riyaz',
    name: 'Riyaz',
    nameHindi: 'रियाज़',
    oneLiner: 'Music and arts - the practice of beauty',
    contemplativeText: 'Immerse yourself in ragas, scales, and the deep practice of harmony. Dedicate your attention to crafting pure aesthetic grace.'
  },
  {
    id: 'bodh',
    name: 'Bodh',
    nameHindi: 'बोध',
    oneLiner: 'Mental models and ideas that change you',
    contemplativeText: 'Equip your consciousness with frameworks of clarity. View the world through the lenses of history’s greatest thinkers.'
  },
  {
    id: 'neurolab',
    name: 'NeuroLab',
    nameHindi: 'न्यूरोलैब',
    oneLiner: 'Daily brain science',
    contemplativeText: 'Understand the biological clockwork inside you. Uncover how habits, focus, and quiet change the pathways of your mind.'
  },
  {
    id: 'cosmos',
    name: 'Cosmos',
    nameHindi: 'ब्रह्मांड',
    oneLiner: 'Astrophysics and the infinite universe',
    contemplativeText: 'Look up at the silent stars. Contemplate the vast, dark scale of space and find your small, precious place.'
  },
  {
    id: 'darshan',
    name: 'Darshan',
    nameHindi: 'दर्शन',
    oneLiner: 'Philosophy - all schools of thought',
    contemplativeText: 'From ancient Vedic seers to modern existentialists, trace the human struggle to answer: What is the good life?'
  },
  {
    id: 'samvaad',
    name: 'Samvaad',
    nameHindi: 'संवाद',
    oneLiner: 'Word of the day - etymology and usage',
    contemplativeText: 'Discover the secret lineage of words. Dive into the origins of language and unlock deep cultural meaning.'
  },
  {
    id: 'srot',
    name: 'Srot',
    nameHindi: 'स्रोत',
    oneLiner: 'One deep read per day',
    contemplativeText: 'Escape the surface-level scroll. Sit with long-form ideas that expand your mind and command your full presence.'
  },
  {
    id: 'duniya',
    name: 'Duniya',
    nameHindi: 'दुनिया',
    oneLiner: '3 world stories, explained deeply',
    contemplativeText: 'Unpack the forces shaping our modern earth. Read three key geopolitical and human stories with deep history.'
  },
  {
    id: 'neelakurinji',
    name: 'Neelakurinji',
    nameHindi: 'नीलकुरिंजी',
    oneLiner: 'Wonder room - daily surprise',
    contemplativeText: 'A bloom of pure curiosity. Encounter the Mpemba effect, Fibonacci sequences, or strange optical coincidences in nature.'
  },
  {
    id: 'safar',
    name: 'Safar',
    nameHindi: 'सफ़र',
    oneLiner: 'Travel the world from here',
    contemplativeText: 'Wander across remote corners, historic libraries, and sacred ghats of the earth without leaving your seat.'
  },
  {
    id: 'aranya',
    name: 'Aranya',
    nameHindi: 'अरण्य',
    oneLiner: 'Nature room - flora, fauna, Earth',
    contemplativeText: 'Rekindle your connection with the soil. Listen to the silent communications of trees and the whispers of wild forests.'
  },
  {
    id: 'bharati',
    name: 'Bharati',
    nameHindi: 'भारती',
    oneLiner: 'Discover India - history, culture, wonder',
    contemplativeText: 'Journey through the ancient Indus engineering, standard metrics, and philosophical arts of the subcontinent.'
  },
  {
    id: 'kathakar',
    name: 'Kathakar',
    nameHindi: 'कथाकार',
    oneLiner: 'Stories across genres and centuries',
    contemplativeText: 'Revisit classic fables, folklore, and narratives that have lived across generations to teach us how to survive.'
  },
  {
    id: 'vibhav',
    name: 'Vibhav',
    nameHindi: 'विभाव',
    oneLiner: 'Person of the day - their life, their way',
    contemplativeText: 'Deconstruct the struggles, routines, and characters of historical icons who forged unique ways of living.'
  },
  {
    id: 'lekhak',
    name: 'Lekhak',
    nameHindi: 'लेखक',
    oneLiner: 'Writer of the day - literature universe',
    contemplativeText: 'Unveil the inner processes, draft histories, and stylistic visions of the world’s most profound authors.'
  },
  {
    id: 'anand',
    name: 'Anand',
    nameHindi: 'आनंद',
    oneLiner: 'Joy room - humor, illusions, wonder, delight',
    contemplativeText: 'Celebrate the simple pleasure of lighthearted delight. Relax with gentle humor, paradoxes, and optical play.'
  },
  {
    id: 'vani',
    name: 'Vani',
    nameHindi: 'वाणी',
    oneLiner: 'Sanskrit shlokas, dohas, and living folk wisdom',
    contemplativeText: 'Connect with the resonance of our ancestors. Listen to the wisdom of Sanskrit shlokas, Kabir’s verses, and regional sayings.'
  },
  {
    id: 'shabda',
    name: 'Shabda',
    nameHindi: 'शब्द',
    oneLiner: 'Word of the day - English, rare, idioms, GenZ',
    contemplativeText: 'Expand the boundaries of your world through language. Explore etymology, beautiful untranslatable words, and contemporary slang.'
  },
  {
    id: 'paradox',
    name: 'Paradox',
    nameHindi: 'विरोधाभास',
    oneLiner: 'One paradox per day - fully explained',
    contemplativeText: 'Sit with the ultimate contradictions of human thought. Challenge your logic, unravel cognitive puzzles, and expand your perspective.'
  }
];
