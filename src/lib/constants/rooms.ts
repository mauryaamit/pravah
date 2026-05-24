// src/lib/constants/rooms.ts
// Master room list for PRAVAH - all 23 rooms

export type RoomCluster = 'daily' | 'inner' | 'knowledge' | 'world' | 'creative';

export interface Room {
  id: string;
  name: string;
  nameHi: string;
  nameHindi: string;
  emoji: string;
  description: string;
  route: string;
  colorVar: string;
  colorHex: string;
  cluster: RoomCluster;
}

export const ROOMS: Room[] = [
  // DAILY
  { id: 'aarambh',     name: 'Aarambh',     nameHi: 'आरंभ',       nameHindi: 'आरंभ',      emoji: '🌅', description: 'Daily start - mood, intention, mantra',       route: '/aarambh',      colorVar: '--room-aarambh',      colorHex: '#C4873A', cluster: 'daily' },
  { id: 'agni',        name: 'Agni',         nameHi: 'अग्नि',      nameHindi: 'अग्नि',     emoji: '🔥', description: 'Habit forge - streak and micro-wins',          route: '/agni',         colorVar: '--room-agni',         colorHex: '#C25B3A', cluster: 'daily' },
  { id: 'antarman',    name: 'Antarman',     nameHi: 'अन्तर्मन',   nameHindi: 'अन्तर्मन',  emoji: '📓', description: 'Journal - write, reflect, grow',               route: '/antarman',     colorVar: '--room-antarman',     colorHex: '#6B8B7A', cluster: 'daily' },
  { id: 'bargad',      name: 'Bargad',       nameHi: 'बरगद',       nameHindi: 'बरगद',      emoji: '🌳', description: 'Your Sankalps - deep long-term goals',         route: '/bargad',       colorVar: '--room-bargad',       colorHex: '#4A7A4A', cluster: 'daily' },

  // INNER
  { id: 'sukoon',      name: 'Sukoon',       nameHi: 'सुकून',      nameHindi: 'सुकून',     emoji: '🌧️', description: 'Poetry - Hindi, Roman Urdu, English',         route: '/sukoon',       colorVar: '--room-sukoon',       colorHex: '#5B6B8A', cluster: 'inner' },
  { id: 'manthan',     name: 'Manthan',      nameHi: 'मन्थन',      nameHindi: 'मन्थन',     emoji: '🌀', description: 'One deep question per day',                   route: '/manthan',      colorVar: '--room-manthan',      colorHex: '#6A3A8A', cluster: 'inner' },
  { id: 'noor',        name: 'Noor',         nameHi: 'नूर',         nameHindi: 'नूर',       emoji: '✨', description: 'Daily fire - transformation, not motivation',   route: '/noor',         colorVar: '--room-noor',         colorHex: '#D4A853', cluster: 'inner' },
  { id: 'riyaz',       name: 'Riyaz',        nameHi: 'रियाज़',     nameHindi: 'रियाज़',    emoji: '🎵', description: 'Music and arts - the practice of beauty',      route: '/riyaz',        colorVar: '--room-riyaz',        colorHex: '#8A4A8A', cluster: 'inner' },

  // KNOWLEDGE
  { id: 'bodh',        name: 'Bodh',         nameHi: 'बोध',        nameHindi: 'बोध',       emoji: '💡', description: 'Mental models and ideas that change you',      route: '/bodh',         colorVar: '--room-bodh',         colorHex: '#A6893A', cluster: 'knowledge' },
  { id: 'neurolab',    name: 'NeuroLab',     nameHi: 'न्यूरोलैब', nameHindi: 'न्यूरोलैब', emoji: '🧠', description: 'Daily brain science',                          route: '/neurolab',     colorVar: '--room-neurolab',     colorHex: '#7A3A8A', cluster: 'knowledge' },
  { id: 'cosmos',      name: 'Cosmos',       nameHi: 'ब्रह्मांड', nameHindi: 'ब्रह्मांड', emoji: '🌌', description: 'Astrophysics and the infinite universe',        route: '/cosmos',       colorVar: '--room-cosmos',       colorHex: '#3A5A8A', cluster: 'knowledge' },
  { id: 'darshan',     name: 'Darshan',      nameHi: 'दर्शन',      nameHindi: 'दर्शन',     emoji: '🏛️', description: 'Philosophy - all schools of thought',          route: '/darshan',      colorVar: '--room-darshan',      colorHex: '#8A6A3A', cluster: 'knowledge' },
  { id: 'samvaad',     name: 'Samvaad',      nameHi: 'संवाद',      nameHindi: 'संवाद',     emoji: '🗣️', description: 'Word of the day - etymology and usage',       route: '/samvaad',      colorVar: '--room-samvaad',      colorHex: '#3A6A8A', cluster: 'knowledge' },
  { id: 'srot',        name: 'Srot',         nameHi: 'स्रोत',      nameHindi: 'स्रोत',     emoji: '📚', description: 'One deep read per day',                        route: '/srot',         colorVar: '--room-srot',         colorHex: '#3A6A8A', cluster: 'knowledge' },

  // WORLD
  { id: 'duniya',      name: 'Duniya',       nameHi: 'दुनिया',     nameHindi: 'दुनिया',    emoji: '🌍', description: '3 world stories, explained deeply',             route: '/duniya',       colorVar: '--room-duniya',       colorHex: '#4A7C59', cluster: 'world' },
  { id: 'neelakurinji',name: 'Neelakurinji', nameHi: 'नीलकुरिंजी',nameHindi: 'नीलकुरिंजी',emoji: '💫', description: 'Wonder room - daily surprise',                route: '/neelakurinji', colorVar: '--room-neelakurinji', colorHex: '#7B6BA6', cluster: 'world' },
  { id: 'safar',       name: 'Safar',        nameHi: 'सफ़र',        nameHindi: 'सफ़र',       emoji: '✈️', description: 'Travel the world from here',                  route: '/safar',        colorVar: '--room-safar',        colorHex: '#3A8A8A', cluster: 'world' },
  { id: 'aranya',      name: 'Aranya',       nameHi: 'अरण्य',      nameHindi: 'अरण्य',     emoji: '🌿', description: 'Nature room - flora, fauna, Earth',            route: '/aranya',       colorVar: '--room-aranya',       colorHex: '#4A7C59', cluster: 'world' },
  { id: 'bharati',     name: 'Bharati',      nameHi: 'भारती',      nameHindi: 'भारती',     emoji: '🇮🇳', description: 'Discover India - history, culture, wonder',   route: '/bharati',      colorVar: '--room-bharati',      colorHex: '#8A3A3A', cluster: 'world' },

  // CREATIVE
  { id: 'kathakar',    name: 'Kathakar',     nameHi: 'कथाकार',     nameHindi: 'कथाकार',    emoji: '📜', description: 'Stories across genres and centuries',          route: '/kathakar',     colorVar: '--room-kathakar',     colorHex: '#8A5A3A', cluster: 'creative' },
  { id: 'vibhav',      name: 'Vibhav',       nameHi: 'विभाव',      nameHindi: 'विभाव',     emoji: '👤', description: 'Person of the day - their life, their way',    route: '/vibhav',       colorVar: '--room-vibhav',       colorHex: '#6A8A4A', cluster: 'creative' },
  { id: 'lekhak',      name: 'Lekhak',       nameHi: 'लेखक',       nameHindi: 'लेखक',      emoji: '✍️', description: 'Writer of the day - literature universe',     route: '/lekhak',       colorVar: '--room-lekhak',       colorHex: '#7A5A8A', cluster: 'creative' },
  { id: 'anand',       name: 'Anand',        nameHi: 'आनंद',       nameHindi: 'आनंद',      emoji: '🎨', description: 'Joy room - humor, illusions, wonder, delight', route: '/anand',        colorVar: '--room-anand',        colorHex: '#C47A3A', cluster: 'creative' },
];

export const CLUSTER_LABELS: Record<RoomCluster, string> = {
  daily:     'Daily Practice',
  inner:     'Inner World',
  knowledge: 'Knowledge',
  world:     'The World',
  creative:  'Stories & People',
};

export const ROOMS_BY_CLUSTER: Record<RoomCluster, Room[]> = {
  daily:     ROOMS.filter(r => r.cluster === 'daily'),
  inner:     ROOMS.filter(r => r.cluster === 'inner'),
  knowledge: ROOMS.filter(r => r.cluster === 'knowledge'),
  world:     ROOMS.filter(r => r.cluster === 'world'),
  creative:  ROOMS.filter(r => r.cluster === 'creative'),
};

export const ROOM_MAP = Object.fromEntries(ROOMS.map(r => [r.id, r]));
