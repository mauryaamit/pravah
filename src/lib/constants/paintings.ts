// Auto-generated painting constants — all local files in /public/paintings/
export const PAINTINGS = [
  { filename: 'starry-night.jpg',          title: 'The Starry Night',             artist: 'Vincent van Gogh',     year: '1889' },
  { filename: 'great-wave.jpg',            title: 'The Great Wave off Kanagawa',  artist: 'Katsushika Hokusai',   year: '1831' },
  { filename: 'girl-pearl-earring.png',    title: 'Girl with a Pearl Earring',    artist: 'Johannes Vermeer',     year: '1665' },
  { filename: 'water-lilies.jpg',          title: 'Water Lilies',                 artist: 'Claude Monet',         year: '1906' },
  { filename: 'mona-lisa.png',             title: 'Portrait (after Mona Lisa)',   artist: 'Leonardo da Vinci',    year: '1503' },
  { filename: 'wanderer-fog.png',          title: 'Wanderer Above the Sea of Fog',artist: 'Caspar David Friedrich','year': '1818' },
  { filename: 'persistence-memory.png',    title: 'The Persistence of Memory',    artist: 'Salvador Dalí',        year: '1931' },
  { filename: 'tree-of-life.png',          title: 'The Tree of Life',             artist: 'Gustav Klimt',         year: '1909' },
  { filename: 'ravi-varma-shakuntala.png', title: 'Shakuntala',                   artist: 'Raja Ravi Varma',      year: '1870' },
  { filename: 'creation-of-adam.jpg',      title: 'The Creation of Adam',         artist: 'Michelangelo',         year: '1512' },
] as const;

export type Painting = typeof PAINTINGS[number];

export function getPaintingForDay(dayIndex: number): Painting {
  return PAINTINGS[((dayIndex % PAINTINGS.length) + PAINTINGS.length) % PAINTINGS.length];
}

export function getPaintingPath(filename: string): string {
  return `/paintings/${filename}`;
}

// Each room maps to a painting for visual identity
export const ROOM_PAINTING_MAP: Record<string, string> = {
  aarambh:      'starry-night.jpg',
  agni:         'wanderer-fog.png',
  antarman:     'wanderer-fog.png',
  bargad:       'tree-of-life.png',
  sukoon:       'water-lilies.jpg',
  manthan:      'persistence-memory.png',
  noor:         'starry-night.jpg',
  riyaz:        'great-wave.jpg',
  bodh:         'tree-of-life.png',
  neurolab:     'mona-lisa.png',
  cosmos:       'starry-night.jpg',
  darshan:      'tree-of-life.png',
  samvaad:      'girl-pearl-earring.png',
  srot:         'wanderer-fog.png',
  duniya:       'great-wave.jpg',
  neelakurinji: 'starry-night.jpg',
  safar:        'great-wave.jpg',
  aranya:       'water-lilies.jpg',
  bharati:      'ravi-varma-shakuntala.png',
  kathakar:     'great-wave.jpg',
  vibhav:       'ravi-varma-shakuntala.png',
  lekhak:       'wanderer-fog.png',
  anand:        'water-lilies.jpg',
};

export function getPaintingForRoom(roomId: string): Painting {
  const filename = ROOM_PAINTING_MAP[roomId] ?? 'starry-night.jpg';
  return PAINTINGS.find(p => p.filename === filename) ?? PAINTINGS[0];
}
