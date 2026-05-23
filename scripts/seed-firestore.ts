// scripts/seed-firestore.ts
// Seeds the Firebase Firestore database with content items across all rooms.
// Run: pnpm seed

import fs from 'fs';
import path from 'path';
import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';

// 1. Load environment variables from .env.local if present
const envLocalPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const firstEquals = trimmed.indexOf('=');
    if (firstEquals === -1) return;
    const key = trimmed.substring(0, firstEquals).trim();
    let val = trimmed.substring(firstEquals + 1).trim();
    // Remove surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.substring(1, val.length - 1);
    }
    process.env[key] = val;
  });
}

const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;

if (!projectId || !clientEmail || !privateKey) {
  console.error('❌ Error: Firebase Admin environment variables are missing in process.env and .env.local.');
  console.error('Please ensure the following are defined:');
  console.error('- FIREBASE_ADMIN_PROJECT_ID');
  console.error('- FIREBASE_ADMIN_CLIENT_EMAIL');
  console.error('- FIREBASE_ADMIN_PRIVATE_KEY');
  process.exit(1);
}

// 2. Initialize Firebase Admin SDK
let adminApp: App;
try {
  adminApp = getApps().find(a => a.name === 'admin-seed') ?? initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey: privateKey.replace(/\\n/g, '\n'),
    }),
  }, 'admin-seed');
} catch (err) {
  console.error('❌ Error initializing Firebase Admin SDK:', err);
  process.exit(1);
}

const db = getFirestore(adminApp);
db.settings({ ignoreUndefinedProperties: true });

// 3. Define Seed Data
interface ContentItem {
  room: string;
  type: string;
  lang: string;
  title: string | null;
  body: string;
  author: string | null;
  source: string;
  metadata: object | null;
  date_index: number;
}

const itemsToSeed: Omit<ContentItem, 'source'>[] = [];

// ── SUKOON — Hindi poems ──
const HINDI_POEMS = [
  { title: 'जो बीत गई', author: 'हरिवंशराय बच्चन', body: 'जो बीत गई सो बात गई,\nजीवन में एक सितारा था,\nमाना वो बेहद प्यारा था,\nवो डूब गया तो डूब गया।' },
  { title: 'कोशिश करने वालों की', author: 'सोहनलाल द्विवेदी', body: 'लहरों से डर कर नौका पार नहीं होती,\nकोशिश करने वालों की कभी हार नहीं होती।' },
  { title: 'अग्निपथ', author: 'हरिवंशराय बच्चन', body: 'वृक्ष हों भले खड़े,\nहों घने हों बड़े,\nएक पत्र छाँह भी,\nमांग मत, मांग मत, मांग मत,\nअग्निपथ अग्निपथ अग्निपथ।' },
];

const URDU_POEMS = [
  { title: 'ہزاروں خواہشیں', author: 'مرزا غالب', body: 'ہزاروں خواہشیں ایسی کہ हर ख़्वाहिश पे दम निकले\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले' },
  { title: 'दिल से', author: 'مرزا غالب', body: 'दिल ढूंढता है फिर वही फुर्सत-ए-शब-ओ-रोज\nबैठे रहें तसव्वुर-ए-जानां किए हुए' },
];

const EN_POEMS = [
  { title: 'The Road Not Taken', author: 'Robert Frost', body: 'Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth.' },
  { title: 'Still I Rise', author: 'Maya Angelou', body: 'You may write me down in history\nWith your bitter, twisted lies,\nYou may trod me in the very dirt\nBut still, like dust, I\'ll rise.' },
  { title: 'If', author: 'Rudyard Kipling', body: 'If you can keep your head when all about you\nAre losing theirs and blaming it on you,\nIf you can trust yourself when all men doubt you,\nBut make allowance for their doubting too' },
];

HINDI_POEMS.forEach((p, i) => {
  itemsToSeed.push({ room: 'sukoon', type: 'poem', lang: 'hi', title: p.title, body: p.body, author: p.author, metadata: null, date_index: i + 1 });
});
URDU_POEMS.forEach((p, i) => {
  itemsToSeed.push({ room: 'sukoon', type: 'poem', lang: 'ur', title: p.title, body: p.body, author: p.author, metadata: null, date_index: i + 1 });
});
EN_POEMS.forEach((p, i) => {
  itemsToSeed.push({ room: 'sukoon', type: 'poem', lang: 'en', title: p.title, body: p.body, author: p.author, metadata: null, date_index: i + 1 });
});

// ── AARAMBH — Mantras ──
const MANTRAS = [
  { hi: 'जो बीत गई सो बात गई', en: 'What has passed, let it pass.' },
  { hi: 'हर दिन एक नया अवसर है', en: 'Every day is a new opportunity.' },
  { hi: 'शांत मन सब जान लेता है', en: 'A calm mind knows all.' },
  { hi: 'सत्यमेव जयते', en: 'Truth alone triumphs.' },
  { hi: 'आत्मनो मोक्षार्थम् जगद्धिताय च', en: 'For the liberation of the self and the welfare of the world.' },
];
MANTRAS.forEach((m, i) => {
  itemsToSeed.push({ room: 'aarambh', type: 'mantra', lang: 'hi', title: null, body: m.hi, author: null, metadata: { en: m.en }, date_index: i + 1 });
});

// ── BODH — Learning Sparks ──
const BODH_SPARKS = [
  { title: 'The Map is Not the Territory', body: 'Alfred Korzybski\'s maxim: our mental models are simplifications. The word "dog" is not a dog. Great thinkers hold their mental models loosely.', domain: 'Epistemology' },
  { title: 'Compounding Works Everywhere', body: 'A daily 1% improvement compounds into 37× improvement in a year (1.01^365 = 37.8). Compounding is not just financial — it applies to every daily practice.', domain: 'Mental Model' },
  { title: 'Inversion: Think Backwards', body: 'Charlie Munger\'s most powerful mental model: invert the problem. "What would guarantee failure, and how do I avoid that?" Most problems become clearer when you think backwards.', domain: 'Mental Model' },
  { title: 'First Principles Thinking', body: 'Elon Musk: "I think it\'s important to reason from first principles rather than by analogy." Break problems to fundamental truths and reason up from there.', domain: 'Reasoning' },
  { title: 'Hanlon\'s Razor', body: 'Never attribute to malice what can be adequately explained by incompetence. Most frustrating behavior is thoughtlessness, not intentional harm.', domain: 'Mental Model' },
];
BODH_SPARKS.forEach((s, i) => {
  itemsToSeed.push({ room: 'bodh', type: 'spark', lang: 'en', title: s.title, body: s.body, author: null, metadata: { domain: s.domain }, date_index: i + 1 });
});

// ── NEUROLAB — Brain Facts ──
const NEURO_FACTS = [
  { title: 'Your brain predicts the future', body: 'Neuroscience now understands the brain as a prediction machine. Rather than reacting to the world, your brain constantly generates predictions. Incoming sensory information is only used to correct those predictions.', domain: 'Predictive Processing' },
  { title: 'Neuroplasticity has no off switch', body: 'Adult neurogenesis — the birth of new neurons — has been confirmed in the hippocampus. Every experience slightly rewires your neural connections. You are literally a different person, structurally, than you were a year ago.', domain: 'Neuroplasticity' },
  { title: 'Sleep is your brain\'s dishwasher', body: 'During sleep, the glymphatic system flushes out neurotoxic proteins including beta-amyloid. The brain actually shrinks slightly during sleep to create space for this cleaning.', domain: 'Sleep Science' },
];
NEURO_FACTS.forEach((f, i) => {
  itemsToSeed.push({ room: 'neurolab', type: 'brain_fact', lang: 'en', title: f.title, body: f.body, author: null, metadata: { domain: f.domain }, date_index: i + 1 });
});

// ── COSMOS ──
const COSMOS_FACTS = [
  { title: 'The Observable Universe Has An Edge', body: 'The universe is approximately 93 billion light-years in diameter. Light from beyond that edge hasn\'t reached us yet.', fact: 'More stars exist in the universe than grains of sand on all of Earth\'s beaches.' },
  { title: 'You Are Made of Dead Stars', body: 'Every atom heavier than hydrogen in your body was forged inside a star and scattered by supernova explosions billions of years ago.', fact: 'A teaspoon of neutron star material weighs 6 billion tons.' },
];
COSMOS_FACTS.forEach((f, i) => {
  itemsToSeed.push({ room: 'cosmos', type: 'space_fact', lang: 'en', title: f.title, body: f.body, author: null, metadata: { fact: f.fact, source: 'NASA / ESA' }, date_index: i + 1 });
});

// ── NEELAKURINJI — Wonders ──
const WONDERS = [
  { title: 'The Neelakurinji Paradox', body: 'The Neelakurinji flower blooms only once every 12 years, turning the Nilgiri hills a spectacular violet-blue. Beauty, timed perfectly.', type: 'fact', emoji: '💫' },
  { title: 'Trees Talk at Night', body: 'Forest trees share sugars through an underground fungal network — the Wood Wide Web. When a tree is dying, it floods the network with resources. Forests are not competing — they are a community.', type: 'fact', emoji: '🌳' },
  { title: 'Your Comfort Zone Has No Safety', body: 'The longer you avoid discomfort, the more you prove to yourself that you can\'t handle it. Every day you choose comfort, you train yourself to fear challenge.', type: 'question', emoji: '🧠' },
];
WONDERS.forEach((w, i) => {
  itemsToSeed.push({ room: 'neelakurinji', type: 'wonder', lang: 'en', title: w.title, body: w.body, author: null, metadata: { type: w.type, emoji: w.emoji }, date_index: i + 1 });
});

// ── MANTHAN ──
const DEEP_THOUGHTS = [
  { title: 'What Is the Self?', body: 'The Buddha said the self is a river — not a fixed thing, but a continuous flow. David Hume reached the same conclusion independently: when he looked inward, he found only a bundle of perceptions, never a stable self.', school: 'Buddhist Philosophy & Empiricism', thinker: 'Buddha / Hume', question: 'If the self is always changing, what exactly are you protecting when you say "I"?' },
];
DEEP_THOUGHTS.forEach((t, i) => {
  itemsToSeed.push({ room: 'manthan', type: 'deep_thought', lang: 'en', title: t.title, body: t.body, author: t.thinker, metadata: { school: t.school, question: t.question }, date_index: i + 1 });
});

// ── DARSHAN ──
const PHILOSOPHY = [
  { title: 'Stoicism: The Art of Endurance', body: 'Stoicism\'s central claim: you cannot control what happens to you, but you can always control how you respond. Epictetus was a slave who became one of history\'s most influential philosophers. His life was the argument.', school: 'Stoicism', region: 'Greek & Roman', thinkers: 'Zeno, Seneca, Epictetus, Marcus Aurelius', keyIdea: 'Dichotomy of Control', practiceToday: 'Write one thing that disturbed you today. Was it within your control?', emoji: '🏛️' },
  { title: 'Advaita Vedanta: All is One', body: 'Adi Shankaracharya synthesized the Upanishads into radical non-dualism: Brahman and Atman are identical. The apparent multiplicity of the world is Maya — a cosmic illusion.', school: 'Advaita Vedanta', region: 'Indian Philosophy', thinkers: 'Adi Shankaracharya', keyIdea: 'Aham Brahmasmi — I am Brahman', practiceToday: 'Sit for 5 minutes. Notice the awareness that is aware of your thoughts.', emoji: '🕉️' },
];
PHILOSOPHY.forEach((p, i) => {
  itemsToSeed.push({ room: 'darshan', type: 'deep_thought', lang: 'en', title: p.title, body: p.body, author: p.thinkers, metadata: { school: p.school, region: p.region, keyThinkers: p.thinkers, keyIdea: p.keyIdea, practiceToday: p.practiceToday }, date_index: i + 1 });
});

// ── NOOR — Ignite ──
const IGNITE = [
  { title: 'You Are Not Behind', body: 'Vera Wang didn\'t design her first dress until 40. Stan Lee created his first major superhero at 39. Toni Morrison published her first novel at 39. Julia Child published her first cookbook at 49.\n\nYou are not behind. You are exactly where you need to be for what comes next.' },
  { title: 'Your Comfort Zone Is Not Safe', body: 'The most dangerous place to live is inside your comfort zone. Not because it\'s boring — but because it atrophies your capacity for growth.\n\nEvery day you choose challenge, you train yourself to embrace life.' },
];
IGNITE.forEach((n, i) => {
  itemsToSeed.push({ room: 'noor', type: 'ignite', lang: 'en', title: n.title, body: n.body, author: null, metadata: { emoji: '🔥' }, date_index: i + 1 });
});

// ── VIBHAV — Personalities ──
const PERSONALITIES = [
  { title: 'Nikola Tesla', body: 'Tesla worked 20-hour days, slept 2 hours, and visualized machines completely in his mind before building them. He gave the world AC electricity and died penniless. What kills innovators is not lack of ideas, but lack of business sense.', era: '1856–1943', field: 'Electrical Engineering', nationality: 'Serbian-American', routine: 'Worked 20-hour days. Never married. Obsessively fed pigeons in Central Park.', quotes: ['If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.'], emoji: '⚡' },
  { title: 'Simone Weil', body: 'A philosopher and mystic who deliberately worked in factories to understand suffering firsthand. She wrote that "attention is the rarest and purest form of generosity." She died at 34, having given everything.', era: '1909–1943', field: 'Philosophy & Mysticism', nationality: 'French', routine: 'Worked factory shifts, farmed, and wrote philosophy at night.', quotes: ['Attention is the rarest and purest form of generosity.'], emoji: '📖' },
];
PERSONALITIES.forEach((p, i) => {
  itemsToSeed.push({ room: 'vibhav', type: 'personality', lang: 'en', title: p.title, body: p.body, author: null, metadata: { era: p.era, field: p.field, nationality: p.nationality, routine: p.routine, quotes: p.quotes }, date_index: i + 1 });
});

// ── SAMVAAD — Words ──
const WORDS = [
  { title: 'Sonder', body: 'The realization that each passerby has a life as vivid and complex as your own — complete with its own ambitions, routines, joys, and private sorrows.', ipa: '/ˈsɒn.dər/', etymology: 'Coined by John Koenig in The Dictionary of Obscure Sorrows (2012).', example: 'Walking through the market, she felt a sudden, overwhelming sonder.' },
  { title: 'Wabi-Sabi', body: 'The Japanese philosophy of finding beauty in imperfection, impermanence, and incompleteness. A cracked tea bowl repaired with gold. Moss on an old stone.', ipa: '/wɑːbi sɑːbi/', etymology: 'From Japanese: wabi (rustic simplicity) + sabi (the beauty of aging).', example: 'She collected objects with wabi-sabi — the older and more worn, the more beautiful.', script: 'わびさび' },
  { title: 'Hiraeth', body: 'A Welsh word with no direct English translation — a homesickness for a home you cannot return to, or that never was. A deep longing for something lost or imagined.', ipa: '/ˈhɪr.aɪθ/', etymology: 'Welsh: hir (long) + aeth (gone, grief). Found only in Welsh.', example: 'Listening to her grandmother\'s old songs, she felt an unexpected hiraeth.' },
];
WORDS.forEach((w, i) => {
  itemsToSeed.push({ room: 'samvaad', type: 'word', lang: 'en', title: w.title, body: w.body, author: null, metadata: { ipa: w.ipa ?? null, etymology: w.etymology ?? null, example: w.example ?? null, script: (w as any).script ?? null }, date_index: i + 1 });
});

// ── SAFAR — Destinations ──
const DESTINATIONS = [
  { title: 'Faroe Islands, Denmark', body: 'A volcanic archipelago between Norway and Iceland — waterfalls that fall into the ocean, roads that vanish into clouds, puffins nesting inches from your feet. Population: 53,000. They have their own language, their own time zone, their own soul.', country: 'Denmark (autonomous)', bestTime: 'June–August', localPhrase: 'Takk fyri', hiddenGem: 'Sørvágsvatn Lake — appears to float above the ocean.', food: 'Skerpikjøt (wind-dried mutton) and Faroese lamb.', emoji: '🌊' },
  { title: 'Zanskar Valley, Ladakh, India', body: 'Cut off for eight months each year by snow. In winter, locals walk the frozen Zanskar River — the Chadar Trek — to reach civilization. Buddhist monasteries cling to cliffs 4000m high. The silence here is complete.', country: 'India', isIndia: true, bestTime: 'July–September', localPhrase: 'Julley', hiddenGem: 'Phuktal Monastery — built into a cave, accessible only by foot.', food: 'Tsampa (roasted barley flour) and butter tea.', emoji: '🏔️' },
];
DESTINATIONS.forEach((d, i) => {
  itemsToSeed.push({ room: 'safar', type: 'destination', lang: 'en', title: d.title, body: d.body, author: null, metadata: { country: d.country, isIndia: (d as any).isIndia || false, bestTime: d.bestTime, localPhrase: d.localPhrase, hiddenGem: d.hiddenGem, food: d.food }, date_index: i + 1 });
});

// ── ARANYA — Nature ──
const NATURE = [
  { title: 'The Himalayan Snow Leopard', body: 'The snow leopard is so perfectly adapted to the high Himalayas that its smoke-grey fur makes it nearly invisible against rock. It cannot roar — instead, it makes a haunting yowl. Fewer than 4,000 remain in the wild.', scientificName: 'Panthera uncia', habitat: 'Himalayan mountain ranges, 3,000–5,500m altitude', conservationStatus: 'Vulnerable', region: 'Central Asia, India, Nepal, Tibet', emoji: '🐆' },
  { title: 'The Great Banyan of Kolkata', body: 'With 3,500 aerial roots reaching the ground, this tree covers 1.5 hectares. The original trunk rotted away in 1925, yet the tree lives on through its roots alone. It is a forest that is a single organism.', scientificName: 'Ficus benghalensis', habitat: 'Tropical forests of South Asia', conservationStatus: 'Least Concern', region: 'India, Bangladesh, Pakistan', emoji: '🌳' },
];
NATURE.forEach((n, i) => {
  itemsToSeed.push({ room: 'aranya', type: 'nature', lang: 'en', title: n.title, body: n.body, author: null, metadata: { scientificName: n.scientificName, habitat: n.habitat, conservationStatus: n.conservationStatus, region: n.region }, date_index: i + 1 });
});

// ── BHARATI — India ──
const INDIA = [
  { title: 'The Stepwells of Gujarat', body: 'Across Gujarat and Rajasthan lie hundreds of stepwells — vav or baoli — some over 1000 years old. Rani ki Vav in Patan, a UNESCO World Heritage site, descends 7 stories underground with 800 sculpted figures.', category: 'Architecture & Engineering', region: 'Gujarat, Rajasthan, India', period: '11th century', hindiTerm: 'वाव / बावली', funFact: 'The sculptures inside Rani ki Vav depict Vishnu in 10 avatars — each carved to draw the eye downward.', emoji: '🏺' },
];
INDIA.forEach((n, i) => {
  itemsToSeed.push({ room: 'bharati', type: 'india_entry', lang: 'en', title: n.title, body: n.body, author: null, metadata: { category: n.category, region: n.region, period: n.period, hindiTerm: n.hindiTerm, funFact: n.funFact }, date_index: i + 1 });
});

// ── KATHAKAR — Stories ──
itemsToSeed.push({
  room: 'kathakar',
  type: 'story',
  lang: 'en',
  title: 'The Gift of the Magi',
  body: `One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Della counted it three times.\n\nThere was clearly nothing to do but flop down on the shabby little couch and howl. So Della did it.\n\nWhile the mistress of the home is subsiding from the first stage to the second, take a look at the home. A furnished flat at $8 per week.`,
  author: 'O. Henry',
  metadata: { genre: 'Literary Fiction', readingTime: 8, nationality: 'American', era: '1905' },
  date_index: 1
});

// ── RANGEEN — Fun ──
const FUN = [
  { title: 'The Umbrella Problem', body: 'If you have a 50% chance of rain on Saturday and 50% on Sunday, what\'s the probability it rains at least once over the weekend?\n\nMost people say 50%. The answer is 75%.\n\n(1 - 0.5 × 0.5 = 0.75)\n\nOur brains are terrible at probabilities. This is why insurance companies exist.', type: 'fun', emoji: '☂️' },
  { title: 'Cleopatra Was Closer to the Moon Landing', body: 'Cleopatra lived around 30 BC. The Great Pyramid was built around 2560 BC — that\'s 2,500 years before Cleopatra. The Moon landing was 1969 — only 2,000 years after Cleopatra.\n\nThe ancient world was ancient even to the ancients.', type: 'weird-science', emoji: '🌕' },
];
FUN.forEach((f, i) => {
  itemsToSeed.push({ room: 'rangeen', type: 'fun', lang: 'en', title: f.title, body: f.body, author: null, metadata: { type: f.type, emoji: f.emoji }, date_index: i + 1 });
});

// ── RIYAZ ──
itemsToSeed.push({
  room: 'riyaz',
  type: 'spark',
  lang: 'en',
  title: 'The Raga of the Monsoon: Miyan Ki Malhar',
  body: 'Legend says that Tansen could make it rain by singing Miyan Ki Malhar. Classical Indian music was never entertainment. It was a technology for altering states of consciousness.',
  author: null,
  metadata: { artForm: 'Hindustani Classical Music', practicePrompt: 'Listen to Pandit Bhimsen Joshi sing Malhar today. Listen for the pattern of the rain in the notes.' },
  date_index: 1
});

// ── SROT ──
itemsToSeed.push({
  room: 'srot',
  type: 'article',
  lang: 'en',
  title: 'The Case for Slow Reading',
  body: 'We live in the age of skimming. Twitter trained us to extract meaning from 280 characters. Neuroscientist Maryanne Wolf calls deep reading a mode of cognitive engagement that requires slowing down, rereading, and letting words echo.\n\nSlow reading is not inefficiency. It is the only reading that actually works.',
  author: 'Maryanne Wolf',
  metadata: { publication: 'The Atlantic', readingTime: 12, topics: ['Learning', 'Neuroscience'] },
  date_index: 1
});

// ── DUNIYA ──
const WORLD = [
  { title: 'Why the Sahel is Greening', body: 'In a surprising reversal, satellite data shows that parts of the Sahel are becoming greener. Local communities have revived an ancient technique called Farmer Managed Natural Regeneration (FMNR), allowing trees to grow back at scale.', topic: 'Environment' },
  { title: 'The Country Paying People to Move In', body: 'Several rural towns in Japan, Italy, and Portugal are offering cash grants and free houses to families willing to relocate. Some families have transformed entire villages.', topic: 'Society' },
];
WORLD.forEach((w, i) => {
  itemsToSeed.push({ room: 'duniya', type: 'world_story', lang: 'en', title: w.title, body: w.body, author: null, metadata: { topics: [w.topic] }, date_index: i + 1 });
});


// 4. Seeding Execution
function sanitizeUndefined(obj: any): any {
  if (obj === undefined) return null;
  if (obj === null) return null;
  if (Array.isArray(obj)) {
    return obj.map(sanitizeUndefined);
  }
  if (typeof obj === 'object') {
    const res: any = {};
    for (const key of Object.keys(obj)) {
      res[key] = sanitizeUndefined(obj[key]);
    }
    return res;
  }
  return obj;
}

async function main() {
  console.log(`Starting Firestore seeding. Total items to write: ${itemsToSeed.length}`);
  
  // To protect write limits and perform batching, we chunk our writes in batches of max 500
  const BATCH_LIMIT = 500;
  let batch = db.batch();
  let counter = 0;
  let totalBatches = 0;

  for (const item of itemsToSeed) {
    const { room, ...data } = item;
    // Path: /content/{room}/items/{auto-id}
    const docRef = db.collection('content').doc(room).collection('items').doc();
    
    const sanitizedData = sanitizeUndefined(data);

    batch.set(docRef, {
      ...sanitizedData,
      source: 'seed',
    });
    
    counter++;

    if (counter === BATCH_LIMIT) {
      console.log(`Committing batch of ${counter} items...`);
      await batch.commit();
      totalBatches++;
      batch = db.batch();
      counter = 0;
    }
  }

  // Commit remaining items in the active batch
  if (counter > 0) {
    console.log(`Committing final batch of ${counter} items...`);
    await batch.commit();
    totalBatches++;
  }

  console.log(`✅ Seeding complete! Total of ${itemsToSeed.length} items seeded across ${totalBatches} batches.`);
}

main().catch(err => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
