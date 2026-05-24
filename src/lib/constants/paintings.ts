// src/lib/constants/paintings.ts

export const BACKGROUND_PAINTINGS = [
  {
    id: 'starry-night',
    name: 'Starry Night',
    artist: 'Van Gogh',
    file: '/paintings/starry-night.jpg',
    defaultOpacity: 0.07,
  },
  {
    id: 'water-lilies',
    name: 'Water Lilies',
    artist: 'Monet',
    file: '/paintings/water-lilies.jpg',
    defaultOpacity: 0.08,
  },
  {
    id: 'wanderer-fog',
    name: 'Wanderer Above the Sea of Fog',
    artist: 'Friedrich',
    file: '/paintings/wanderer-fog.png',
    defaultOpacity: 0.07,
  },
  {
    id: 'great-wave',
    name: 'The Great Wave',
    artist: 'Hokusai',
    file: '/paintings/great-wave.jpg',
    defaultOpacity: 0.06,
  },
  {
    id: 'tree-of-life',
    name: 'The Tree of Life',
    artist: 'Klimt',
    file: '/paintings/tree-of-life.png',
    defaultOpacity: 0.07,
  },
] as const;

export type BackgroundPaintingId = typeof BACKGROUND_PAINTINGS[number]['id'];
