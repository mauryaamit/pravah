// src/app/(app)/riyaz/data.ts
// Programmatically generated daily classical jazz & songs seed data

export interface RiyazMusicEntry {
  type: 'music';
  dayIndex: number;
  piece_title: string;
  composer_or_artist: string;
  tradition: string;
  period: string;
  youtube_id: string;
  duration: string;
  what_to_listen_for: string;
  about_the_piece: string;
  after_listening: string;
}

export interface RiyazArtEntry {
  type: 'art';
  dayIndex: number;
  work_title: string;
  artist: string;
  tradition: string;
  period: string;
  local_image_path: string;
  what_to_look_for: string;
  about_the_work: string;
  after_looking: string;
}

export interface RiyazSong {
  era: 'contemporary' | 'classical';
  language: 'hindi' | 'indian_other' | 'english' | 'world';
  indian_language?: string;
  world_language?: string;
  song_title: string;
  artist: string;
  film_or_album?: string;
  year?: string;
  youtube_id: string;
}

export interface RiyazDayEntry {
  dayIndex: number;
  featured: RiyazMusicEntry | RiyazArtEntry;
  songs: RiyazSong[];
}

export const RIYAZ_DATA: RiyazDayEntry[] = [
  {
    dayIndex: 1,
    featured: {
      type: "music",
      dayIndex: 1,
      piece_title: "Kind of Blue (So What)",
      composer_or_artist: "Miles Davis",
      tradition: "Modern Jazz",
      period: "1959",
      youtube_id: "ylXk1BYqObk",
      duration: "9:22",
      what_to_listen_for: "Listen to the modal improvisation. Instead of moving through a complex series of chord changes, Davis and his band improvise on simple scales. Notice the contrast between Davis's sparse, lyrical trumpet and John Coltrane's rapid, cascading saxophone solo.",
      about_the_piece: "So What is the opening track of Miles Davis's seminal 1959 album Kind of Blue, the best-selling jazz album of all time. It represents the birth of modal jazz, shifting the focus from chord changes to melodic exploration. The track opens with a famous bass figure that asks the musical question, answered by the horns in unison.",
      after_listening: "Does the simplicity of the underlying structure make you feel more grounded or more speculative?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 2,
    featured: {
      type: "art",
      dayIndex: 2,
      work_title: "The Starry Night",
      artist: "Vincent van Gogh",
      tradition: "Post-Impressionism",
      period: "1889",
      local_image_path: "/paintings/starry-night.jpg",
      what_to_look_for: "Observe the swirling brushstrokes in the sky. Van Gogh uses thick, rhythmic lines of cobalt blue and saffron yellow that create a sense of motion. Notice the stark contrast of the dark, flame-like cypress tree in the foreground.",
      about_the_work: "Painted from Vincent's window at the asylum in Saint-Rémy-de-Provence, The Starry Night represents his turbulent inner state and deep spiritual connection to nature. The cypress represents the link between the earth and the infinite cosmos above.",
      after_looking: "How does the painting convert silent stars into a visual chorus of motion?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 3,
    featured: {
      type: "music",
      dayIndex: 3,
      piece_title: "Raga Darbari Kanada - Alap",
      composer_or_artist: "Ustad Amir Khan",
      tradition: "Hindustani Classical",
      period: "Mid-20th Century",
      youtube_id: "4jJpQ4W9h6k",
      duration: "14:15",
      what_to_listen_for: "Listen for the deep, resonant slides (meend) between notes. Notice the heavy oscillation (andolan) on the flat Gandhar (Ga) and flat Dhaivat (Dha). The rendering is slow, majestic, and deeply introspective.",
      about_the_piece: "Raga Darbari Kanada is a late-night raga said to have been brought into Akbar's royal court by Tansen. It belongs to the Asavari thaat and is known for its heavy, somber atmosphere, representing deep emotional gravity and spiritual focus.",
      after_listening: "Does the slow gravity of Darbari bring a sense of quiet closure to your day?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 4,
    featured: {
      type: "art",
      dayIndex: 4,
      work_title: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      tradition: "Ukiyo-e (Woodblock Print)",
      period: "1831",
      local_image_path: "/paintings/great-wave.jpg",
      what_to_look_for: "Look at the claws of foam on the towering wave, ready to engulf the rowers below. In the distance, Mount Fuji stands small and tranquil, a symbol of eternal stability amidst the transient violence of the sea.",
      about_the_work: "This woodblock print is Hokusai's masterpiece. It captures the concept of mono no aware - the beautiful, tragic transience of all things. The Prussian blue ink was a rare import, adding a vivid depth to the visual narrative.",
      after_looking: "Does Mount Fuji represent a quiet observer within your own busy life?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 5,
    featured: {
      type: "music",
      dayIndex: 5,
      piece_title: "Take Five",
      composer_or_artist: "The Dave Brubeck Quartet",
      tradition: "Cool Jazz / West Coast Jazz",
      period: "1959",
      youtube_id: "ryA6eHZNnXY",
      duration: "5:24",
      what_to_listen_for: "Listen to the unusual 5/4 time signature. Drummer Joe Morello plays a steady, syncopated beat while Paul Desmond improvises a cool, lyrical alto saxophone melody that flows effortlessly over the complex rhythm.",
      about_the_piece: "Take Five became the best-selling jazz single of all time. Composed by Paul Desmond, it was a breakthrough in the use of irregular meters in popular jazz, showing that complex rhythms could feel accessible and cool.",
      after_listening: "How does your body naturally adjust to a five-beat rhythm compared to a standard four-beat?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 6,
    featured: {
      type: "art",
      dayIndex: 6,
      work_title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      tradition: "Dutch Golden Age",
      period: "1665",
      local_image_path: "/paintings/girl-pearl-earring.jpg",
      what_to_look_for: "Notice the play of light on the girl's lips and the single white highlight on the pearl earring. The dark, empty background makes her gaze feel direct, intimate, and eternally suspended.",
      about_the_work: "This is a tronie - a study of a head and expression rather than a portrait. Vermeer's mastery of light is visible in the soft shadows and the reflection on the earring, showcasing Dutch realism at its height.",
      after_looking: "What story does the girl's parted lips seem to hold for you?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 7,
    featured: {
      type: "music",
      dayIndex: 7,
      piece_title: "Raga Bhairavi - Thumri",
      composer_or_artist: "Girija Devi",
      tradition: "Hindustani Classical (Semi-Classical)",
      period: "Late 20th Century",
      youtube_id: "aC7JpA4xKik",
      duration: "8:35",
      what_to_listen_for: "Listen for the emotional transitions (pukaar) in Devi's voice. Notice how she uses all twelve notes of the octave (shrutis) to paint a picture of longing and devotional resolution.",
      about_the_piece: "Raga Bhairavi is traditionally performed to conclude a classical concert. It is associated with the morning but can be sung at any time as a closing piece. It represents peace, devotion, and a sense of cosmic return.",
      after_listening: "How does Bhairavi's resolution of all notes make you feel about endings?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 8,
    featured: {
      type: "art",
      dayIndex: 8,
      work_title: "Wanderer Above the Sea of Fog",
      artist: "Caspar David Friedrich",
      tradition: "Romanticism",
      period: "1818",
      local_image_path: "/paintings/wanderer-fog.jpg",
      what_to_look_for: "Observe the figure standing on the rocky precipice with his back to us (Rückenfigur). This technique allows you to step into the figure's shoes and gaze out at the vast, mysterious ocean of mountain fog.",
      about_the_work: "A hallmark of Romantic landscape painting, this piece represents the sublime - the mixture of awe, terror, and insignificance felt when confronting the vastness of nature and the mysteries of existence.",
      after_looking: "Does the fog represent clarity waiting to emerge, or the beauty of what is hidden?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 9,
    featured: {
      type: "music",
      dayIndex: 9,
      piece_title: "Gymnopédie No. 1",
      composer_or_artist: "Erik Satie",
      tradition: "French Impressionism / Avant-Garde",
      period: "1888",
      youtube_id: "S-Xm7s9e9QI",
      duration: "3:10",
      what_to_listen_for: "Listen to the slow, repeating bass chords that alternate between major and minor. The melody is sparse, walking slowly and haltingly, like a solitary dancer in an empty room.",
      about_the_piece: "Satie wrote the Gymnopédies as atmospheric, non-intrusive music - what he called 'furniture music.' It stands as an ancestor to ambient music, designed to exist in the background and alter the mood of the room.",
      after_listening: "How does the repetitive pace of Satie's chords slow down your thoughts?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 10,
    featured: {
      type: "art",
      dayIndex: 10,
      work_title: "Water Lilies",
      artist: "Claude Monet",
      tradition: "Impressionism",
      period: "1906",
      local_image_path: "/paintings/water-lilies.jpg",
      what_to_look_for: "Look at the absence of a horizon or shoreline. Monet focuses entirely on the surface of the pond, where reflections of clouds merge with floating lilies, dissolving the boundary between water and sky.",
      about_the_work: " Monet spent the last thirty years of his life painting the water lily pond in his garden at Giverny. He wanted to capture the fleeting changes of light and atmospheric reflection on the water's surface.",
      after_looking: "Does the lack of structure in the painting bring a sense of mental freedom?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 11,
    featured: {
      type: "music",
      dayIndex: 11,
      piece_title: "A Love Supreme (Acknowledgement)",
      composer_or_artist: "John Coltrane",
      tradition: "Avant-Garde Jazz",
      period: "1965",
      youtube_id: "5S5f73U-jQ0",
      duration: "7:40",
      what_to_listen_for: "Listen to the famous four-note bass motif that mirrors the syllables of the album's title. Notice how Coltrane's saxophone repeats this motif in all keys, building a spiritual, ecstatic crescendo.",
      about_the_piece: "A Love Supreme is Coltrane's spiritual declaration, recorded after overcoming addiction. It is structured as a four-part suite representing his path of recognition, resolution, and pursuit of divine connection through music.",
      after_listening: "Can you feel the intention of devotion in the intense energy of Coltrane's horn?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 12,
    featured: {
      type: "art",
      dayIndex: 12,
      work_title: "The Tree of Life",
      artist: "Gustav Klimt",
      tradition: "Symbolism / Art Nouveau",
      period: "1909",
      local_image_path: "/paintings/tree-of-life.jpg",
      what_to_look_for: "Observe the spiraling branches that represent the complexity of life's paths. Look closely at the golden patterns, the small black bird of death on one branch, and the figures of lovers embraced.",
      about_the_work: "Part of the Stoclet Frieze mosaic in Brussels, Klimt uses gold leaf to elevate the tree into a sacred symbol. The spirals show that life constantly loops, grows, and returns to its roots.",
      after_looking: "Do you see your life's paths as a series of straight lines or golden spirals?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 13,
    featured: {
      type: "music",
      dayIndex: 13,
      piece_title: "Raga Yaman - Vilambit Khayal",
      composer_or_artist: "Pandit Bhimsen Joshi",
      tradition: "Hindustani Classical",
      period: "Late 20th Century",
      youtube_id: "ylV_x64j048",
      duration: "18:20",
      what_to_listen_for: "Notice how Joshi builds the raga note by note in the slow tempo (vilambit). Listen to the sudden, powerful vocal sweeps (taans) that contrast with the quiet contemplative opening.",
      about_the_piece: "Raga Yaman is the archetype of evening calm, belonging to the Kalyan thaat. It uses all natural notes except for the raised Madhyam (sharp fourth), creating a spacious and lyrical mood.",
      after_listening: "How does Yaman's sharp fourth note alter the emotional temperature of the scale?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 14,
    featured: {
      type: "art",
      dayIndex: 14,
      work_title: "Shakuntala",
      artist: "Raja Ravi Varma",
      tradition: "Indian Realism / Academic Art",
      period: "1898",
      local_image_path: "/paintings/ravi-varma-shakuntala.jpg",
      what_to_look_for: "Observe Shakuntala looking back under the pretense of removing a thorn from her foot, while her friends tease her. The painting blends European oil techniques with classical Indian themes.",
      about_the_work: "Ravi Varma's depictions of classical Indian epics redefined visual culture in India, making mythological figures accessible through lithographs. This painting captures a moment of romantic longing from Kalidasa's play.",
      after_looking: "How does the posture of looking back capture the weight of longing?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 15,
    featured: {
      type: "music",
      dayIndex: 15,
      piece_title: "The Goldberg Variations (Aria)",
      composer_or_artist: "Johann Sebastian Bach (Glenn Gould)",
      tradition: "Baroque",
      period: "1741 (Recorded 1981)",
      youtube_id: "r_1c6v_hP3g",
      duration: "3:05",
      what_to_listen_for: "Listen to the quiet, contrapuntal movement of voices in the left and right hands. Notice Glenn Gould's light, detached touch and his soft humming in the background, a sign of his deep concentration.",
      about_the_piece: "Written for Harpsichord, the Goldberg Variations consist of an Aria followed by 30 variations. They represent Bach's mastery of keyboard architecture. The 1981 recording by Gould is slower and more introspective than his 1955 debut.",
      after_listening: "Does the geometric precision of Bach's counterpoint feel like a form of mental architecture?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 16,
    featured: {
      type: "music",
      dayIndex: 16,
      piece_title: "Kind of Blue (So What)",
      composer_or_artist: "Miles Davis",
      tradition: "Modern Jazz",
      period: "1959",
      youtube_id: "ylXk1BYqObk",
      duration: "9:22",
      what_to_listen_for: "Listen to the modal improvisation. Instead of moving through a complex series of chord changes, Davis and his band improvise on simple scales. Notice the contrast between Davis's sparse, lyrical trumpet and John Coltrane's rapid, cascading saxophone solo.",
      about_the_piece: "So What is the opening track of Miles Davis's seminal 1959 album Kind of Blue, the best-selling jazz album of all time. It represents the birth of modal jazz, shifting the focus from chord changes to melodic exploration. The track opens with a famous bass figure that asks the musical question, answered by the horns in unison.",
      after_listening: "Does the simplicity of the underlying structure make you feel more grounded or more speculative?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 17,
    featured: {
      type: "art",
      dayIndex: 17,
      work_title: "The Starry Night",
      artist: "Vincent van Gogh",
      tradition: "Post-Impressionism",
      period: "1889",
      local_image_path: "/paintings/starry-night.jpg",
      what_to_look_for: "Observe the swirling brushstrokes in the sky. Van Gogh uses thick, rhythmic lines of cobalt blue and saffron yellow that create a sense of motion. Notice the stark contrast of the dark, flame-like cypress tree in the foreground.",
      about_the_work: "Painted from Vincent's window at the asylum in Saint-Rémy-de-Provence, The Starry Night represents his turbulent inner state and deep spiritual connection to nature. The cypress represents the link between the earth and the infinite cosmos above.",
      after_looking: "How does the painting convert silent stars into a visual chorus of motion?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 18,
    featured: {
      type: "music",
      dayIndex: 18,
      piece_title: "Raga Darbari Kanada - Alap",
      composer_or_artist: "Ustad Amir Khan",
      tradition: "Hindustani Classical",
      period: "Mid-20th Century",
      youtube_id: "4jJpQ4W9h6k",
      duration: "14:15",
      what_to_listen_for: "Listen for the deep, resonant slides (meend) between notes. Notice the heavy oscillation (andolan) on the flat Gandhar (Ga) and flat Dhaivat (Dha). The rendering is slow, majestic, and deeply introspective.",
      about_the_piece: "Raga Darbari Kanada is a late-night raga said to have been brought into Akbar's royal court by Tansen. It belongs to the Asavari thaat and is known for its heavy, somber atmosphere, representing deep emotional gravity and spiritual focus.",
      after_listening: "Does the slow gravity of Darbari bring a sense of quiet closure to your day?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 19,
    featured: {
      type: "art",
      dayIndex: 19,
      work_title: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      tradition: "Ukiyo-e (Woodblock Print)",
      period: "1831",
      local_image_path: "/paintings/great-wave.jpg",
      what_to_look_for: "Look at the claws of foam on the towering wave, ready to engulf the rowers below. In the distance, Mount Fuji stands small and tranquil, a symbol of eternal stability amidst the transient violence of the sea.",
      about_the_work: "This woodblock print is Hokusai's masterpiece. It captures the concept of mono no aware - the beautiful, tragic transience of all things. The Prussian blue ink was a rare import, adding a vivid depth to the visual narrative.",
      after_looking: "Does Mount Fuji represent a quiet observer within your own busy life?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 20,
    featured: {
      type: "music",
      dayIndex: 20,
      piece_title: "Take Five",
      composer_or_artist: "The Dave Brubeck Quartet",
      tradition: "Cool Jazz / West Coast Jazz",
      period: "1959",
      youtube_id: "ryA6eHZNnXY",
      duration: "5:24",
      what_to_listen_for: "Listen to the unusual 5/4 time signature. Drummer Joe Morello plays a steady, syncopated beat while Paul Desmond improvises a cool, lyrical alto saxophone melody that flows effortlessly over the complex rhythm.",
      about_the_piece: "Take Five became the best-selling jazz single of all time. Composed by Paul Desmond, it was a breakthrough in the use of irregular meters in popular jazz, showing that complex rhythms could feel accessible and cool.",
      after_listening: "How does your body naturally adjust to a five-beat rhythm compared to a standard four-beat?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 21,
    featured: {
      type: "art",
      dayIndex: 21,
      work_title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      tradition: "Dutch Golden Age",
      period: "1665",
      local_image_path: "/paintings/girl-pearl-earring.jpg",
      what_to_look_for: "Notice the play of light on the girl's lips and the single white highlight on the pearl earring. The dark, empty background makes her gaze feel direct, intimate, and eternally suspended.",
      about_the_work: "This is a tronie - a study of a head and expression rather than a portrait. Vermeer's mastery of light is visible in the soft shadows and the reflection on the earring, showcasing Dutch realism at its height.",
      after_looking: "What story does the girl's parted lips seem to hold for you?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 22,
    featured: {
      type: "music",
      dayIndex: 22,
      piece_title: "Raga Bhairavi - Thumri",
      composer_or_artist: "Girija Devi",
      tradition: "Hindustani Classical (Semi-Classical)",
      period: "Late 20th Century",
      youtube_id: "aC7JpA4xKik",
      duration: "8:35",
      what_to_listen_for: "Listen for the emotional transitions (pukaar) in Devi's voice. Notice how she uses all twelve notes of the octave (shrutis) to paint a picture of longing and devotional resolution.",
      about_the_piece: "Raga Bhairavi is traditionally performed to conclude a classical concert. It is associated with the morning but can be sung at any time as a closing piece. It represents peace, devotion, and a sense of cosmic return.",
      after_listening: "How does Bhairavi's resolution of all notes make you feel about endings?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 23,
    featured: {
      type: "art",
      dayIndex: 23,
      work_title: "Wanderer Above the Sea of Fog",
      artist: "Caspar David Friedrich",
      tradition: "Romanticism",
      period: "1818",
      local_image_path: "/paintings/wanderer-fog.jpg",
      what_to_look_for: "Observe the figure standing on the rocky precipice with his back to us (Rückenfigur). This technique allows you to step into the figure's shoes and gaze out at the vast, mysterious ocean of mountain fog.",
      about_the_work: "A hallmark of Romantic landscape painting, this piece represents the sublime - the mixture of awe, terror, and insignificance felt when confronting the vastness of nature and the mysteries of existence.",
      after_looking: "Does the fog represent clarity waiting to emerge, or the beauty of what is hidden?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 24,
    featured: {
      type: "music",
      dayIndex: 24,
      piece_title: "Gymnopédie No. 1",
      composer_or_artist: "Erik Satie",
      tradition: "French Impressionism / Avant-Garde",
      period: "1888",
      youtube_id: "S-Xm7s9e9QI",
      duration: "3:10",
      what_to_listen_for: "Listen to the slow, repeating bass chords that alternate between major and minor. The melody is sparse, walking slowly and haltingly, like a solitary dancer in an empty room.",
      about_the_piece: "Satie wrote the Gymnopédies as atmospheric, non-intrusive music - what he called 'furniture music.' It stands as an ancestor to ambient music, designed to exist in the background and alter the mood of the room.",
      after_listening: "How does the repetitive pace of Satie's chords slow down your thoughts?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 25,
    featured: {
      type: "art",
      dayIndex: 25,
      work_title: "Water Lilies",
      artist: "Claude Monet",
      tradition: "Impressionism",
      period: "1906",
      local_image_path: "/paintings/water-lilies.jpg",
      what_to_look_for: "Look at the absence of a horizon or shoreline. Monet focuses entirely on the surface of the pond, where reflections of clouds merge with floating lilies, dissolving the boundary between water and sky.",
      about_the_work: " Monet spent the last thirty years of his life painting the water lily pond in his garden at Giverny. He wanted to capture the fleeting changes of light and atmospheric reflection on the water's surface.",
      after_looking: "Does the lack of structure in the painting bring a sense of mental freedom?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 26,
    featured: {
      type: "music",
      dayIndex: 26,
      piece_title: "A Love Supreme (Acknowledgement)",
      composer_or_artist: "John Coltrane",
      tradition: "Avant-Garde Jazz",
      period: "1965",
      youtube_id: "5S5f73U-jQ0",
      duration: "7:40",
      what_to_listen_for: "Listen to the famous four-note bass motif that mirrors the syllables of the album's title. Notice how Coltrane's saxophone repeats this motif in all keys, building a spiritual, ecstatic crescendo.",
      about_the_piece: "A Love Supreme is Coltrane's spiritual declaration, recorded after overcoming addiction. It is structured as a four-part suite representing his path of recognition, resolution, and pursuit of divine connection through music.",
      after_listening: "Can you feel the intention of devotion in the intense energy of Coltrane's horn?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 27,
    featured: {
      type: "art",
      dayIndex: 27,
      work_title: "The Tree of Life",
      artist: "Gustav Klimt",
      tradition: "Symbolism / Art Nouveau",
      period: "1909",
      local_image_path: "/paintings/tree-of-life.jpg",
      what_to_look_for: "Observe the spiraling branches that represent the complexity of life's paths. Look closely at the golden patterns, the small black bird of death on one branch, and the figures of lovers embraced.",
      about_the_work: "Part of the Stoclet Frieze mosaic in Brussels, Klimt uses gold leaf to elevate the tree into a sacred symbol. The spirals show that life constantly loops, grows, and returns to its roots.",
      after_looking: "Do you see your life's paths as a series of straight lines or golden spirals?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 28,
    featured: {
      type: "music",
      dayIndex: 28,
      piece_title: "Raga Yaman - Vilambit Khayal",
      composer_or_artist: "Pandit Bhimsen Joshi",
      tradition: "Hindustani Classical",
      period: "Late 20th Century",
      youtube_id: "ylV_x64j048",
      duration: "18:20",
      what_to_listen_for: "Notice how Joshi builds the raga note by note in the slow tempo (vilambit). Listen to the sudden, powerful vocal sweeps (taans) that contrast with the quiet contemplative opening.",
      about_the_piece: "Raga Yaman is the archetype of evening calm, belonging to the Kalyan thaat. It uses all natural notes except for the raised Madhyam (sharp fourth), creating a spacious and lyrical mood.",
      after_listening: "How does Yaman's sharp fourth note alter the emotional temperature of the scale?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 29,
    featured: {
      type: "art",
      dayIndex: 29,
      work_title: "Shakuntala",
      artist: "Raja Ravi Varma",
      tradition: "Indian Realism / Academic Art",
      period: "1898",
      local_image_path: "/paintings/ravi-varma-shakuntala.jpg",
      what_to_look_for: "Observe Shakuntala looking back under the pretense of removing a thorn from her foot, while her friends tease her. The painting blends European oil techniques with classical Indian themes.",
      about_the_work: "Ravi Varma's depictions of classical Indian epics redefined visual culture in India, making mythological figures accessible through lithographs. This painting captures a moment of romantic longing from Kalidasa's play.",
      after_looking: "How does the posture of looking back capture the weight of longing?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 30,
    featured: {
      type: "music",
      dayIndex: 30,
      piece_title: "The Goldberg Variations (Aria)",
      composer_or_artist: "Johann Sebastian Bach (Glenn Gould)",
      tradition: "Baroque",
      period: "1741 (Recorded 1981)",
      youtube_id: "r_1c6v_hP3g",
      duration: "3:05",
      what_to_listen_for: "Listen to the quiet, contrapuntal movement of voices in the left and right hands. Notice Glenn Gould's light, detached touch and his soft humming in the background, a sign of his deep concentration.",
      about_the_piece: "Written for Harpsichord, the Goldberg Variations consist of an Aria followed by 30 variations. They represent Bach's mastery of keyboard architecture. The 1981 recording by Gould is slower and more introspective than his 1955 debut.",
      after_listening: "Does the geometric precision of Bach's counterpoint feel like a form of mental architecture?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 31,
    featured: {
      type: "music",
      dayIndex: 31,
      piece_title: "Kind of Blue (So What)",
      composer_or_artist: "Miles Davis",
      tradition: "Modern Jazz",
      period: "1959",
      youtube_id: "ylXk1BYqObk",
      duration: "9:22",
      what_to_listen_for: "Listen to the modal improvisation. Instead of moving through a complex series of chord changes, Davis and his band improvise on simple scales. Notice the contrast between Davis's sparse, lyrical trumpet and John Coltrane's rapid, cascading saxophone solo.",
      about_the_piece: "So What is the opening track of Miles Davis's seminal 1959 album Kind of Blue, the best-selling jazz album of all time. It represents the birth of modal jazz, shifting the focus from chord changes to melodic exploration. The track opens with a famous bass figure that asks the musical question, answered by the horns in unison.",
      after_listening: "Does the simplicity of the underlying structure make you feel more grounded or more speculative?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 32,
    featured: {
      type: "art",
      dayIndex: 32,
      work_title: "The Starry Night",
      artist: "Vincent van Gogh",
      tradition: "Post-Impressionism",
      period: "1889",
      local_image_path: "/paintings/starry-night.jpg",
      what_to_look_for: "Observe the swirling brushstrokes in the sky. Van Gogh uses thick, rhythmic lines of cobalt blue and saffron yellow that create a sense of motion. Notice the stark contrast of the dark, flame-like cypress tree in the foreground.",
      about_the_work: "Painted from Vincent's window at the asylum in Saint-Rémy-de-Provence, The Starry Night represents his turbulent inner state and deep spiritual connection to nature. The cypress represents the link between the earth and the infinite cosmos above.",
      after_looking: "How does the painting convert silent stars into a visual chorus of motion?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 33,
    featured: {
      type: "music",
      dayIndex: 33,
      piece_title: "Raga Darbari Kanada - Alap",
      composer_or_artist: "Ustad Amir Khan",
      tradition: "Hindustani Classical",
      period: "Mid-20th Century",
      youtube_id: "4jJpQ4W9h6k",
      duration: "14:15",
      what_to_listen_for: "Listen for the deep, resonant slides (meend) between notes. Notice the heavy oscillation (andolan) on the flat Gandhar (Ga) and flat Dhaivat (Dha). The rendering is slow, majestic, and deeply introspective.",
      about_the_piece: "Raga Darbari Kanada is a late-night raga said to have been brought into Akbar's royal court by Tansen. It belongs to the Asavari thaat and is known for its heavy, somber atmosphere, representing deep emotional gravity and spiritual focus.",
      after_listening: "Does the slow gravity of Darbari bring a sense of quiet closure to your day?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 34,
    featured: {
      type: "art",
      dayIndex: 34,
      work_title: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      tradition: "Ukiyo-e (Woodblock Print)",
      period: "1831",
      local_image_path: "/paintings/great-wave.jpg",
      what_to_look_for: "Look at the claws of foam on the towering wave, ready to engulf the rowers below. In the distance, Mount Fuji stands small and tranquil, a symbol of eternal stability amidst the transient violence of the sea.",
      about_the_work: "This woodblock print is Hokusai's masterpiece. It captures the concept of mono no aware - the beautiful, tragic transience of all things. The Prussian blue ink was a rare import, adding a vivid depth to the visual narrative.",
      after_looking: "Does Mount Fuji represent a quiet observer within your own busy life?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 35,
    featured: {
      type: "music",
      dayIndex: 35,
      piece_title: "Take Five",
      composer_or_artist: "The Dave Brubeck Quartet",
      tradition: "Cool Jazz / West Coast Jazz",
      period: "1959",
      youtube_id: "ryA6eHZNnXY",
      duration: "5:24",
      what_to_listen_for: "Listen to the unusual 5/4 time signature. Drummer Joe Morello plays a steady, syncopated beat while Paul Desmond improvises a cool, lyrical alto saxophone melody that flows effortlessly over the complex rhythm.",
      about_the_piece: "Take Five became the best-selling jazz single of all time. Composed by Paul Desmond, it was a breakthrough in the use of irregular meters in popular jazz, showing that complex rhythms could feel accessible and cool.",
      after_listening: "How does your body naturally adjust to a five-beat rhythm compared to a standard four-beat?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 36,
    featured: {
      type: "art",
      dayIndex: 36,
      work_title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      tradition: "Dutch Golden Age",
      period: "1665",
      local_image_path: "/paintings/girl-pearl-earring.jpg",
      what_to_look_for: "Notice the play of light on the girl's lips and the single white highlight on the pearl earring. The dark, empty background makes her gaze feel direct, intimate, and eternally suspended.",
      about_the_work: "This is a tronie - a study of a head and expression rather than a portrait. Vermeer's mastery of light is visible in the soft shadows and the reflection on the earring, showcasing Dutch realism at its height.",
      after_looking: "What story does the girl's parted lips seem to hold for you?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 37,
    featured: {
      type: "music",
      dayIndex: 37,
      piece_title: "Raga Bhairavi - Thumri",
      composer_or_artist: "Girija Devi",
      tradition: "Hindustani Classical (Semi-Classical)",
      period: "Late 20th Century",
      youtube_id: "aC7JpA4xKik",
      duration: "8:35",
      what_to_listen_for: "Listen for the emotional transitions (pukaar) in Devi's voice. Notice how she uses all twelve notes of the octave (shrutis) to paint a picture of longing and devotional resolution.",
      about_the_piece: "Raga Bhairavi is traditionally performed to conclude a classical concert. It is associated with the morning but can be sung at any time as a closing piece. It represents peace, devotion, and a sense of cosmic return.",
      after_listening: "How does Bhairavi's resolution of all notes make you feel about endings?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 38,
    featured: {
      type: "art",
      dayIndex: 38,
      work_title: "Wanderer Above the Sea of Fog",
      artist: "Caspar David Friedrich",
      tradition: "Romanticism",
      period: "1818",
      local_image_path: "/paintings/wanderer-fog.jpg",
      what_to_look_for: "Observe the figure standing on the rocky precipice with his back to us (Rückenfigur). This technique allows you to step into the figure's shoes and gaze out at the vast, mysterious ocean of mountain fog.",
      about_the_work: "A hallmark of Romantic landscape painting, this piece represents the sublime - the mixture of awe, terror, and insignificance felt when confronting the vastness of nature and the mysteries of existence.",
      after_looking: "Does the fog represent clarity waiting to emerge, or the beauty of what is hidden?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 39,
    featured: {
      type: "music",
      dayIndex: 39,
      piece_title: "Gymnopédie No. 1",
      composer_or_artist: "Erik Satie",
      tradition: "French Impressionism / Avant-Garde",
      period: "1888",
      youtube_id: "S-Xm7s9e9QI",
      duration: "3:10",
      what_to_listen_for: "Listen to the slow, repeating bass chords that alternate between major and minor. The melody is sparse, walking slowly and haltingly, like a solitary dancer in an empty room.",
      about_the_piece: "Satie wrote the Gymnopédies as atmospheric, non-intrusive music - what he called 'furniture music.' It stands as an ancestor to ambient music, designed to exist in the background and alter the mood of the room.",
      after_listening: "How does the repetitive pace of Satie's chords slow down your thoughts?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 40,
    featured: {
      type: "art",
      dayIndex: 40,
      work_title: "Water Lilies",
      artist: "Claude Monet",
      tradition: "Impressionism",
      period: "1906",
      local_image_path: "/paintings/water-lilies.jpg",
      what_to_look_for: "Look at the absence of a horizon or shoreline. Monet focuses entirely on the surface of the pond, where reflections of clouds merge with floating lilies, dissolving the boundary between water and sky.",
      about_the_work: " Monet spent the last thirty years of his life painting the water lily pond in his garden at Giverny. He wanted to capture the fleeting changes of light and atmospheric reflection on the water's surface.",
      after_looking: "Does the lack of structure in the painting bring a sense of mental freedom?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 41,
    featured: {
      type: "music",
      dayIndex: 41,
      piece_title: "A Love Supreme (Acknowledgement)",
      composer_or_artist: "John Coltrane",
      tradition: "Avant-Garde Jazz",
      period: "1965",
      youtube_id: "5S5f73U-jQ0",
      duration: "7:40",
      what_to_listen_for: "Listen to the famous four-note bass motif that mirrors the syllables of the album's title. Notice how Coltrane's saxophone repeats this motif in all keys, building a spiritual, ecstatic crescendo.",
      about_the_piece: "A Love Supreme is Coltrane's spiritual declaration, recorded after overcoming addiction. It is structured as a four-part suite representing his path of recognition, resolution, and pursuit of divine connection through music.",
      after_listening: "Can you feel the intention of devotion in the intense energy of Coltrane's horn?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 42,
    featured: {
      type: "art",
      dayIndex: 42,
      work_title: "The Tree of Life",
      artist: "Gustav Klimt",
      tradition: "Symbolism / Art Nouveau",
      period: "1909",
      local_image_path: "/paintings/tree-of-life.jpg",
      what_to_look_for: "Observe the spiraling branches that represent the complexity of life's paths. Look closely at the golden patterns, the small black bird of death on one branch, and the figures of lovers embraced.",
      about_the_work: "Part of the Stoclet Frieze mosaic in Brussels, Klimt uses gold leaf to elevate the tree into a sacred symbol. The spirals show that life constantly loops, grows, and returns to its roots.",
      after_looking: "Do you see your life's paths as a series of straight lines or golden spirals?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 43,
    featured: {
      type: "music",
      dayIndex: 43,
      piece_title: "Raga Yaman - Vilambit Khayal",
      composer_or_artist: "Pandit Bhimsen Joshi",
      tradition: "Hindustani Classical",
      period: "Late 20th Century",
      youtube_id: "ylV_x64j048",
      duration: "18:20",
      what_to_listen_for: "Notice how Joshi builds the raga note by note in the slow tempo (vilambit). Listen to the sudden, powerful vocal sweeps (taans) that contrast with the quiet contemplative opening.",
      about_the_piece: "Raga Yaman is the archetype of evening calm, belonging to the Kalyan thaat. It uses all natural notes except for the raised Madhyam (sharp fourth), creating a spacious and lyrical mood.",
      after_listening: "How does Yaman's sharp fourth note alter the emotional temperature of the scale?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 44,
    featured: {
      type: "art",
      dayIndex: 44,
      work_title: "Shakuntala",
      artist: "Raja Ravi Varma",
      tradition: "Indian Realism / Academic Art",
      period: "1898",
      local_image_path: "/paintings/ravi-varma-shakuntala.jpg",
      what_to_look_for: "Observe Shakuntala looking back under the pretense of removing a thorn from her foot, while her friends tease her. The painting blends European oil techniques with classical Indian themes.",
      about_the_work: "Ravi Varma's depictions of classical Indian epics redefined visual culture in India, making mythological figures accessible through lithographs. This painting captures a moment of romantic longing from Kalidasa's play.",
      after_looking: "How does the posture of looking back capture the weight of longing?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 45,
    featured: {
      type: "music",
      dayIndex: 45,
      piece_title: "The Goldberg Variations (Aria)",
      composer_or_artist: "Johann Sebastian Bach (Glenn Gould)",
      tradition: "Baroque",
      period: "1741 (Recorded 1981)",
      youtube_id: "r_1c6v_hP3g",
      duration: "3:05",
      what_to_listen_for: "Listen to the quiet, contrapuntal movement of voices in the left and right hands. Notice Glenn Gould's light, detached touch and his soft humming in the background, a sign of his deep concentration.",
      about_the_piece: "Written for Harpsichord, the Goldberg Variations consist of an Aria followed by 30 variations. They represent Bach's mastery of keyboard architecture. The 1981 recording by Gould is slower and more introspective than his 1955 debut.",
      after_listening: "Does the geometric precision of Bach's counterpoint feel like a form of mental architecture?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 46,
    featured: {
      type: "music",
      dayIndex: 46,
      piece_title: "Kind of Blue (So What)",
      composer_or_artist: "Miles Davis",
      tradition: "Modern Jazz",
      period: "1959",
      youtube_id: "ylXk1BYqObk",
      duration: "9:22",
      what_to_listen_for: "Listen to the modal improvisation. Instead of moving through a complex series of chord changes, Davis and his band improvise on simple scales. Notice the contrast between Davis's sparse, lyrical trumpet and John Coltrane's rapid, cascading saxophone solo.",
      about_the_piece: "So What is the opening track of Miles Davis's seminal 1959 album Kind of Blue, the best-selling jazz album of all time. It represents the birth of modal jazz, shifting the focus from chord changes to melodic exploration. The track opens with a famous bass figure that asks the musical question, answered by the horns in unison.",
      after_listening: "Does the simplicity of the underlying structure make you feel more grounded or more speculative?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 47,
    featured: {
      type: "art",
      dayIndex: 47,
      work_title: "The Starry Night",
      artist: "Vincent van Gogh",
      tradition: "Post-Impressionism",
      period: "1889",
      local_image_path: "/paintings/starry-night.jpg",
      what_to_look_for: "Observe the swirling brushstrokes in the sky. Van Gogh uses thick, rhythmic lines of cobalt blue and saffron yellow that create a sense of motion. Notice the stark contrast of the dark, flame-like cypress tree in the foreground.",
      about_the_work: "Painted from Vincent's window at the asylum in Saint-Rémy-de-Provence, The Starry Night represents his turbulent inner state and deep spiritual connection to nature. The cypress represents the link between the earth and the infinite cosmos above.",
      after_looking: "How does the painting convert silent stars into a visual chorus of motion?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 48,
    featured: {
      type: "music",
      dayIndex: 48,
      piece_title: "Raga Darbari Kanada - Alap",
      composer_or_artist: "Ustad Amir Khan",
      tradition: "Hindustani Classical",
      period: "Mid-20th Century",
      youtube_id: "4jJpQ4W9h6k",
      duration: "14:15",
      what_to_listen_for: "Listen for the deep, resonant slides (meend) between notes. Notice the heavy oscillation (andolan) on the flat Gandhar (Ga) and flat Dhaivat (Dha). The rendering is slow, majestic, and deeply introspective.",
      about_the_piece: "Raga Darbari Kanada is a late-night raga said to have been brought into Akbar's royal court by Tansen. It belongs to the Asavari thaat and is known for its heavy, somber atmosphere, representing deep emotional gravity and spiritual focus.",
      after_listening: "Does the slow gravity of Darbari bring a sense of quiet closure to your day?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 49,
    featured: {
      type: "art",
      dayIndex: 49,
      work_title: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      tradition: "Ukiyo-e (Woodblock Print)",
      period: "1831",
      local_image_path: "/paintings/great-wave.jpg",
      what_to_look_for: "Look at the claws of foam on the towering wave, ready to engulf the rowers below. In the distance, Mount Fuji stands small and tranquil, a symbol of eternal stability amidst the transient violence of the sea.",
      about_the_work: "This woodblock print is Hokusai's masterpiece. It captures the concept of mono no aware - the beautiful, tragic transience of all things. The Prussian blue ink was a rare import, adding a vivid depth to the visual narrative.",
      after_looking: "Does Mount Fuji represent a quiet observer within your own busy life?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 50,
    featured: {
      type: "music",
      dayIndex: 50,
      piece_title: "Take Five",
      composer_or_artist: "The Dave Brubeck Quartet",
      tradition: "Cool Jazz / West Coast Jazz",
      period: "1959",
      youtube_id: "ryA6eHZNnXY",
      duration: "5:24",
      what_to_listen_for: "Listen to the unusual 5/4 time signature. Drummer Joe Morello plays a steady, syncopated beat while Paul Desmond improvises a cool, lyrical alto saxophone melody that flows effortlessly over the complex rhythm.",
      about_the_piece: "Take Five became the best-selling jazz single of all time. Composed by Paul Desmond, it was a breakthrough in the use of irregular meters in popular jazz, showing that complex rhythms could feel accessible and cool.",
      after_listening: "How does your body naturally adjust to a five-beat rhythm compared to a standard four-beat?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 51,
    featured: {
      type: "art",
      dayIndex: 51,
      work_title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      tradition: "Dutch Golden Age",
      period: "1665",
      local_image_path: "/paintings/girl-pearl-earring.jpg",
      what_to_look_for: "Notice the play of light on the girl's lips and the single white highlight on the pearl earring. The dark, empty background makes her gaze feel direct, intimate, and eternally suspended.",
      about_the_work: "This is a tronie - a study of a head and expression rather than a portrait. Vermeer's mastery of light is visible in the soft shadows and the reflection on the earring, showcasing Dutch realism at its height.",
      after_looking: "What story does the girl's parted lips seem to hold for you?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 52,
    featured: {
      type: "music",
      dayIndex: 52,
      piece_title: "Raga Bhairavi - Thumri",
      composer_or_artist: "Girija Devi",
      tradition: "Hindustani Classical (Semi-Classical)",
      period: "Late 20th Century",
      youtube_id: "aC7JpA4xKik",
      duration: "8:35",
      what_to_listen_for: "Listen for the emotional transitions (pukaar) in Devi's voice. Notice how she uses all twelve notes of the octave (shrutis) to paint a picture of longing and devotional resolution.",
      about_the_piece: "Raga Bhairavi is traditionally performed to conclude a classical concert. It is associated with the morning but can be sung at any time as a closing piece. It represents peace, devotion, and a sense of cosmic return.",
      after_listening: "How does Bhairavi's resolution of all notes make you feel about endings?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 53,
    featured: {
      type: "art",
      dayIndex: 53,
      work_title: "Wanderer Above the Sea of Fog",
      artist: "Caspar David Friedrich",
      tradition: "Romanticism",
      period: "1818",
      local_image_path: "/paintings/wanderer-fog.jpg",
      what_to_look_for: "Observe the figure standing on the rocky precipice with his back to us (Rückenfigur). This technique allows you to step into the figure's shoes and gaze out at the vast, mysterious ocean of mountain fog.",
      about_the_work: "A hallmark of Romantic landscape painting, this piece represents the sublime - the mixture of awe, terror, and insignificance felt when confronting the vastness of nature and the mysteries of existence.",
      after_looking: "Does the fog represent clarity waiting to emerge, or the beauty of what is hidden?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 54,
    featured: {
      type: "music",
      dayIndex: 54,
      piece_title: "Gymnopédie No. 1",
      composer_or_artist: "Erik Satie",
      tradition: "French Impressionism / Avant-Garde",
      period: "1888",
      youtube_id: "S-Xm7s9e9QI",
      duration: "3:10",
      what_to_listen_for: "Listen to the slow, repeating bass chords that alternate between major and minor. The melody is sparse, walking slowly and haltingly, like a solitary dancer in an empty room.",
      about_the_piece: "Satie wrote the Gymnopédies as atmospheric, non-intrusive music - what he called 'furniture music.' It stands as an ancestor to ambient music, designed to exist in the background and alter the mood of the room.",
      after_listening: "How does the repetitive pace of Satie's chords slow down your thoughts?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 55,
    featured: {
      type: "art",
      dayIndex: 55,
      work_title: "Water Lilies",
      artist: "Claude Monet",
      tradition: "Impressionism",
      period: "1906",
      local_image_path: "/paintings/water-lilies.jpg",
      what_to_look_for: "Look at the absence of a horizon or shoreline. Monet focuses entirely on the surface of the pond, where reflections of clouds merge with floating lilies, dissolving the boundary between water and sky.",
      about_the_work: " Monet spent the last thirty years of his life painting the water lily pond in his garden at Giverny. He wanted to capture the fleeting changes of light and atmospheric reflection on the water's surface.",
      after_looking: "Does the lack of structure in the painting bring a sense of mental freedom?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 56,
    featured: {
      type: "music",
      dayIndex: 56,
      piece_title: "A Love Supreme (Acknowledgement)",
      composer_or_artist: "John Coltrane",
      tradition: "Avant-Garde Jazz",
      period: "1965",
      youtube_id: "5S5f73U-jQ0",
      duration: "7:40",
      what_to_listen_for: "Listen to the famous four-note bass motif that mirrors the syllables of the album's title. Notice how Coltrane's saxophone repeats this motif in all keys, building a spiritual, ecstatic crescendo.",
      about_the_piece: "A Love Supreme is Coltrane's spiritual declaration, recorded after overcoming addiction. It is structured as a four-part suite representing his path of recognition, resolution, and pursuit of divine connection through music.",
      after_listening: "Can you feel the intention of devotion in the intense energy of Coltrane's horn?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 57,
    featured: {
      type: "art",
      dayIndex: 57,
      work_title: "The Tree of Life",
      artist: "Gustav Klimt",
      tradition: "Symbolism / Art Nouveau",
      period: "1909",
      local_image_path: "/paintings/tree-of-life.jpg",
      what_to_look_for: "Observe the spiraling branches that represent the complexity of life's paths. Look closely at the golden patterns, the small black bird of death on one branch, and the figures of lovers embraced.",
      about_the_work: "Part of the Stoclet Frieze mosaic in Brussels, Klimt uses gold leaf to elevate the tree into a sacred symbol. The spirals show that life constantly loops, grows, and returns to its roots.",
      after_looking: "Do you see your life's paths as a series of straight lines or golden spirals?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 58,
    featured: {
      type: "music",
      dayIndex: 58,
      piece_title: "Raga Yaman - Vilambit Khayal",
      composer_or_artist: "Pandit Bhimsen Joshi",
      tradition: "Hindustani Classical",
      period: "Late 20th Century",
      youtube_id: "ylV_x64j048",
      duration: "18:20",
      what_to_listen_for: "Notice how Joshi builds the raga note by note in the slow tempo (vilambit). Listen to the sudden, powerful vocal sweeps (taans) that contrast with the quiet contemplative opening.",
      about_the_piece: "Raga Yaman is the archetype of evening calm, belonging to the Kalyan thaat. It uses all natural notes except for the raised Madhyam (sharp fourth), creating a spacious and lyrical mood.",
      after_listening: "How does Yaman's sharp fourth note alter the emotional temperature of the scale?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 59,
    featured: {
      type: "art",
      dayIndex: 59,
      work_title: "Shakuntala",
      artist: "Raja Ravi Varma",
      tradition: "Indian Realism / Academic Art",
      period: "1898",
      local_image_path: "/paintings/ravi-varma-shakuntala.jpg",
      what_to_look_for: "Observe Shakuntala looking back under the pretense of removing a thorn from her foot, while her friends tease her. The painting blends European oil techniques with classical Indian themes.",
      about_the_work: "Ravi Varma's depictions of classical Indian epics redefined visual culture in India, making mythological figures accessible through lithographs. This painting captures a moment of romantic longing from Kalidasa's play.",
      after_looking: "How does the posture of looking back capture the weight of longing?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 60,
    featured: {
      type: "music",
      dayIndex: 60,
      piece_title: "The Goldberg Variations (Aria)",
      composer_or_artist: "Johann Sebastian Bach (Glenn Gould)",
      tradition: "Baroque",
      period: "1741 (Recorded 1981)",
      youtube_id: "r_1c6v_hP3g",
      duration: "3:05",
      what_to_listen_for: "Listen to the quiet, contrapuntal movement of voices in the left and right hands. Notice Glenn Gould's light, detached touch and his soft humming in the background, a sign of his deep concentration.",
      about_the_piece: "Written for Harpsichord, the Goldberg Variations consist of an Aria followed by 30 variations. They represent Bach's mastery of keyboard architecture. The 1981 recording by Gould is slower and more introspective than his 1955 debut.",
      after_listening: "Does the geometric precision of Bach's counterpoint feel like a form of mental architecture?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 61,
    featured: {
      type: "music",
      dayIndex: 61,
      piece_title: "Kind of Blue (So What)",
      composer_or_artist: "Miles Davis",
      tradition: "Modern Jazz",
      period: "1959",
      youtube_id: "ylXk1BYqObk",
      duration: "9:22",
      what_to_listen_for: "Listen to the modal improvisation. Instead of moving through a complex series of chord changes, Davis and his band improvise on simple scales. Notice the contrast between Davis's sparse, lyrical trumpet and John Coltrane's rapid, cascading saxophone solo.",
      about_the_piece: "So What is the opening track of Miles Davis's seminal 1959 album Kind of Blue, the best-selling jazz album of all time. It represents the birth of modal jazz, shifting the focus from chord changes to melodic exploration. The track opens with a famous bass figure that asks the musical question, answered by the horns in unison.",
      after_listening: "Does the simplicity of the underlying structure make you feel more grounded or more speculative?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 62,
    featured: {
      type: "art",
      dayIndex: 62,
      work_title: "The Starry Night",
      artist: "Vincent van Gogh",
      tradition: "Post-Impressionism",
      period: "1889",
      local_image_path: "/paintings/starry-night.jpg",
      what_to_look_for: "Observe the swirling brushstrokes in the sky. Van Gogh uses thick, rhythmic lines of cobalt blue and saffron yellow that create a sense of motion. Notice the stark contrast of the dark, flame-like cypress tree in the foreground.",
      about_the_work: "Painted from Vincent's window at the asylum in Saint-Rémy-de-Provence, The Starry Night represents his turbulent inner state and deep spiritual connection to nature. The cypress represents the link between the earth and the infinite cosmos above.",
      after_looking: "How does the painting convert silent stars into a visual chorus of motion?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 63,
    featured: {
      type: "music",
      dayIndex: 63,
      piece_title: "Raga Darbari Kanada - Alap",
      composer_or_artist: "Ustad Amir Khan",
      tradition: "Hindustani Classical",
      period: "Mid-20th Century",
      youtube_id: "4jJpQ4W9h6k",
      duration: "14:15",
      what_to_listen_for: "Listen for the deep, resonant slides (meend) between notes. Notice the heavy oscillation (andolan) on the flat Gandhar (Ga) and flat Dhaivat (Dha). The rendering is slow, majestic, and deeply introspective.",
      about_the_piece: "Raga Darbari Kanada is a late-night raga said to have been brought into Akbar's royal court by Tansen. It belongs to the Asavari thaat and is known for its heavy, somber atmosphere, representing deep emotional gravity and spiritual focus.",
      after_listening: "Does the slow gravity of Darbari bring a sense of quiet closure to your day?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 64,
    featured: {
      type: "art",
      dayIndex: 64,
      work_title: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      tradition: "Ukiyo-e (Woodblock Print)",
      period: "1831",
      local_image_path: "/paintings/great-wave.jpg",
      what_to_look_for: "Look at the claws of foam on the towering wave, ready to engulf the rowers below. In the distance, Mount Fuji stands small and tranquil, a symbol of eternal stability amidst the transient violence of the sea.",
      about_the_work: "This woodblock print is Hokusai's masterpiece. It captures the concept of mono no aware - the beautiful, tragic transience of all things. The Prussian blue ink was a rare import, adding a vivid depth to the visual narrative.",
      after_looking: "Does Mount Fuji represent a quiet observer within your own busy life?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 65,
    featured: {
      type: "music",
      dayIndex: 65,
      piece_title: "Take Five",
      composer_or_artist: "The Dave Brubeck Quartet",
      tradition: "Cool Jazz / West Coast Jazz",
      period: "1959",
      youtube_id: "ryA6eHZNnXY",
      duration: "5:24",
      what_to_listen_for: "Listen to the unusual 5/4 time signature. Drummer Joe Morello plays a steady, syncopated beat while Paul Desmond improvises a cool, lyrical alto saxophone melody that flows effortlessly over the complex rhythm.",
      about_the_piece: "Take Five became the best-selling jazz single of all time. Composed by Paul Desmond, it was a breakthrough in the use of irregular meters in popular jazz, showing that complex rhythms could feel accessible and cool.",
      after_listening: "How does your body naturally adjust to a five-beat rhythm compared to a standard four-beat?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 66,
    featured: {
      type: "art",
      dayIndex: 66,
      work_title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      tradition: "Dutch Golden Age",
      period: "1665",
      local_image_path: "/paintings/girl-pearl-earring.jpg",
      what_to_look_for: "Notice the play of light on the girl's lips and the single white highlight on the pearl earring. The dark, empty background makes her gaze feel direct, intimate, and eternally suspended.",
      about_the_work: "This is a tronie - a study of a head and expression rather than a portrait. Vermeer's mastery of light is visible in the soft shadows and the reflection on the earring, showcasing Dutch realism at its height.",
      after_looking: "What story does the girl's parted lips seem to hold for you?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 67,
    featured: {
      type: "music",
      dayIndex: 67,
      piece_title: "Raga Bhairavi - Thumri",
      composer_or_artist: "Girija Devi",
      tradition: "Hindustani Classical (Semi-Classical)",
      period: "Late 20th Century",
      youtube_id: "aC7JpA4xKik",
      duration: "8:35",
      what_to_listen_for: "Listen for the emotional transitions (pukaar) in Devi's voice. Notice how she uses all twelve notes of the octave (shrutis) to paint a picture of longing and devotional resolution.",
      about_the_piece: "Raga Bhairavi is traditionally performed to conclude a classical concert. It is associated with the morning but can be sung at any time as a closing piece. It represents peace, devotion, and a sense of cosmic return.",
      after_listening: "How does Bhairavi's resolution of all notes make you feel about endings?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 68,
    featured: {
      type: "art",
      dayIndex: 68,
      work_title: "Wanderer Above the Sea of Fog",
      artist: "Caspar David Friedrich",
      tradition: "Romanticism",
      period: "1818",
      local_image_path: "/paintings/wanderer-fog.jpg",
      what_to_look_for: "Observe the figure standing on the rocky precipice with his back to us (Rückenfigur). This technique allows you to step into the figure's shoes and gaze out at the vast, mysterious ocean of mountain fog.",
      about_the_work: "A hallmark of Romantic landscape painting, this piece represents the sublime - the mixture of awe, terror, and insignificance felt when confronting the vastness of nature and the mysteries of existence.",
      after_looking: "Does the fog represent clarity waiting to emerge, or the beauty of what is hidden?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 69,
    featured: {
      type: "music",
      dayIndex: 69,
      piece_title: "Gymnopédie No. 1",
      composer_or_artist: "Erik Satie",
      tradition: "French Impressionism / Avant-Garde",
      period: "1888",
      youtube_id: "S-Xm7s9e9QI",
      duration: "3:10",
      what_to_listen_for: "Listen to the slow, repeating bass chords that alternate between major and minor. The melody is sparse, walking slowly and haltingly, like a solitary dancer in an empty room.",
      about_the_piece: "Satie wrote the Gymnopédies as atmospheric, non-intrusive music - what he called 'furniture music.' It stands as an ancestor to ambient music, designed to exist in the background and alter the mood of the room.",
      after_listening: "How does the repetitive pace of Satie's chords slow down your thoughts?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 70,
    featured: {
      type: "art",
      dayIndex: 70,
      work_title: "Water Lilies",
      artist: "Claude Monet",
      tradition: "Impressionism",
      period: "1906",
      local_image_path: "/paintings/water-lilies.jpg",
      what_to_look_for: "Look at the absence of a horizon or shoreline. Monet focuses entirely on the surface of the pond, where reflections of clouds merge with floating lilies, dissolving the boundary between water and sky.",
      about_the_work: " Monet spent the last thirty years of his life painting the water lily pond in his garden at Giverny. He wanted to capture the fleeting changes of light and atmospheric reflection on the water's surface.",
      after_looking: "Does the lack of structure in the painting bring a sense of mental freedom?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 71,
    featured: {
      type: "music",
      dayIndex: 71,
      piece_title: "A Love Supreme (Acknowledgement)",
      composer_or_artist: "John Coltrane",
      tradition: "Avant-Garde Jazz",
      period: "1965",
      youtube_id: "5S5f73U-jQ0",
      duration: "7:40",
      what_to_listen_for: "Listen to the famous four-note bass motif that mirrors the syllables of the album's title. Notice how Coltrane's saxophone repeats this motif in all keys, building a spiritual, ecstatic crescendo.",
      about_the_piece: "A Love Supreme is Coltrane's spiritual declaration, recorded after overcoming addiction. It is structured as a four-part suite representing his path of recognition, resolution, and pursuit of divine connection through music.",
      after_listening: "Can you feel the intention of devotion in the intense energy of Coltrane's horn?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 72,
    featured: {
      type: "art",
      dayIndex: 72,
      work_title: "The Tree of Life",
      artist: "Gustav Klimt",
      tradition: "Symbolism / Art Nouveau",
      period: "1909",
      local_image_path: "/paintings/tree-of-life.jpg",
      what_to_look_for: "Observe the spiraling branches that represent the complexity of life's paths. Look closely at the golden patterns, the small black bird of death on one branch, and the figures of lovers embraced.",
      about_the_work: "Part of the Stoclet Frieze mosaic in Brussels, Klimt uses gold leaf to elevate the tree into a sacred symbol. The spirals show that life constantly loops, grows, and returns to its roots.",
      after_looking: "Do you see your life's paths as a series of straight lines or golden spirals?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 73,
    featured: {
      type: "music",
      dayIndex: 73,
      piece_title: "Raga Yaman - Vilambit Khayal",
      composer_or_artist: "Pandit Bhimsen Joshi",
      tradition: "Hindustani Classical",
      period: "Late 20th Century",
      youtube_id: "ylV_x64j048",
      duration: "18:20",
      what_to_listen_for: "Notice how Joshi builds the raga note by note in the slow tempo (vilambit). Listen to the sudden, powerful vocal sweeps (taans) that contrast with the quiet contemplative opening.",
      about_the_piece: "Raga Yaman is the archetype of evening calm, belonging to the Kalyan thaat. It uses all natural notes except for the raised Madhyam (sharp fourth), creating a spacious and lyrical mood.",
      after_listening: "How does Yaman's sharp fourth note alter the emotional temperature of the scale?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 74,
    featured: {
      type: "art",
      dayIndex: 74,
      work_title: "Shakuntala",
      artist: "Raja Ravi Varma",
      tradition: "Indian Realism / Academic Art",
      period: "1898",
      local_image_path: "/paintings/ravi-varma-shakuntala.jpg",
      what_to_look_for: "Observe Shakuntala looking back under the pretense of removing a thorn from her foot, while her friends tease her. The painting blends European oil techniques with classical Indian themes.",
      about_the_work: "Ravi Varma's depictions of classical Indian epics redefined visual culture in India, making mythological figures accessible through lithographs. This painting captures a moment of romantic longing from Kalidasa's play.",
      after_looking: "How does the posture of looking back capture the weight of longing?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 75,
    featured: {
      type: "music",
      dayIndex: 75,
      piece_title: "The Goldberg Variations (Aria)",
      composer_or_artist: "Johann Sebastian Bach (Glenn Gould)",
      tradition: "Baroque",
      period: "1741 (Recorded 1981)",
      youtube_id: "r_1c6v_hP3g",
      duration: "3:05",
      what_to_listen_for: "Listen to the quiet, contrapuntal movement of voices in the left and right hands. Notice Glenn Gould's light, detached touch and his soft humming in the background, a sign of his deep concentration.",
      about_the_piece: "Written for Harpsichord, the Goldberg Variations consist of an Aria followed by 30 variations. They represent Bach's mastery of keyboard architecture. The 1981 recording by Gould is slower and more introspective than his 1955 debut.",
      after_listening: "Does the geometric precision of Bach's counterpoint feel like a form of mental architecture?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 76,
    featured: {
      type: "music",
      dayIndex: 76,
      piece_title: "Kind of Blue (So What)",
      composer_or_artist: "Miles Davis",
      tradition: "Modern Jazz",
      period: "1959",
      youtube_id: "ylXk1BYqObk",
      duration: "9:22",
      what_to_listen_for: "Listen to the modal improvisation. Instead of moving through a complex series of chord changes, Davis and his band improvise on simple scales. Notice the contrast between Davis's sparse, lyrical trumpet and John Coltrane's rapid, cascading saxophone solo.",
      about_the_piece: "So What is the opening track of Miles Davis's seminal 1959 album Kind of Blue, the best-selling jazz album of all time. It represents the birth of modal jazz, shifting the focus from chord changes to melodic exploration. The track opens with a famous bass figure that asks the musical question, answered by the horns in unison.",
      after_listening: "Does the simplicity of the underlying structure make you feel more grounded or more speculative?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 77,
    featured: {
      type: "art",
      dayIndex: 77,
      work_title: "The Starry Night",
      artist: "Vincent van Gogh",
      tradition: "Post-Impressionism",
      period: "1889",
      local_image_path: "/paintings/starry-night.jpg",
      what_to_look_for: "Observe the swirling brushstrokes in the sky. Van Gogh uses thick, rhythmic lines of cobalt blue and saffron yellow that create a sense of motion. Notice the stark contrast of the dark, flame-like cypress tree in the foreground.",
      about_the_work: "Painted from Vincent's window at the asylum in Saint-Rémy-de-Provence, The Starry Night represents his turbulent inner state and deep spiritual connection to nature. The cypress represents the link between the earth and the infinite cosmos above.",
      after_looking: "How does the painting convert silent stars into a visual chorus of motion?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 78,
    featured: {
      type: "music",
      dayIndex: 78,
      piece_title: "Raga Darbari Kanada - Alap",
      composer_or_artist: "Ustad Amir Khan",
      tradition: "Hindustani Classical",
      period: "Mid-20th Century",
      youtube_id: "4jJpQ4W9h6k",
      duration: "14:15",
      what_to_listen_for: "Listen for the deep, resonant slides (meend) between notes. Notice the heavy oscillation (andolan) on the flat Gandhar (Ga) and flat Dhaivat (Dha). The rendering is slow, majestic, and deeply introspective.",
      about_the_piece: "Raga Darbari Kanada is a late-night raga said to have been brought into Akbar's royal court by Tansen. It belongs to the Asavari thaat and is known for its heavy, somber atmosphere, representing deep emotional gravity and spiritual focus.",
      after_listening: "Does the slow gravity of Darbari bring a sense of quiet closure to your day?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 79,
    featured: {
      type: "art",
      dayIndex: 79,
      work_title: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      tradition: "Ukiyo-e (Woodblock Print)",
      period: "1831",
      local_image_path: "/paintings/great-wave.jpg",
      what_to_look_for: "Look at the claws of foam on the towering wave, ready to engulf the rowers below. In the distance, Mount Fuji stands small and tranquil, a symbol of eternal stability amidst the transient violence of the sea.",
      about_the_work: "This woodblock print is Hokusai's masterpiece. It captures the concept of mono no aware - the beautiful, tragic transience of all things. The Prussian blue ink was a rare import, adding a vivid depth to the visual narrative.",
      after_looking: "Does Mount Fuji represent a quiet observer within your own busy life?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 80,
    featured: {
      type: "music",
      dayIndex: 80,
      piece_title: "Take Five",
      composer_or_artist: "The Dave Brubeck Quartet",
      tradition: "Cool Jazz / West Coast Jazz",
      period: "1959",
      youtube_id: "ryA6eHZNnXY",
      duration: "5:24",
      what_to_listen_for: "Listen to the unusual 5/4 time signature. Drummer Joe Morello plays a steady, syncopated beat while Paul Desmond improvises a cool, lyrical alto saxophone melody that flows effortlessly over the complex rhythm.",
      about_the_piece: "Take Five became the best-selling jazz single of all time. Composed by Paul Desmond, it was a breakthrough in the use of irregular meters in popular jazz, showing that complex rhythms could feel accessible and cool.",
      after_listening: "How does your body naturally adjust to a five-beat rhythm compared to a standard four-beat?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 81,
    featured: {
      type: "art",
      dayIndex: 81,
      work_title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      tradition: "Dutch Golden Age",
      period: "1665",
      local_image_path: "/paintings/girl-pearl-earring.jpg",
      what_to_look_for: "Notice the play of light on the girl's lips and the single white highlight on the pearl earring. The dark, empty background makes her gaze feel direct, intimate, and eternally suspended.",
      about_the_work: "This is a tronie - a study of a head and expression rather than a portrait. Vermeer's mastery of light is visible in the soft shadows and the reflection on the earring, showcasing Dutch realism at its height.",
      after_looking: "What story does the girl's parted lips seem to hold for you?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 82,
    featured: {
      type: "music",
      dayIndex: 82,
      piece_title: "Raga Bhairavi - Thumri",
      composer_or_artist: "Girija Devi",
      tradition: "Hindustani Classical (Semi-Classical)",
      period: "Late 20th Century",
      youtube_id: "aC7JpA4xKik",
      duration: "8:35",
      what_to_listen_for: "Listen for the emotional transitions (pukaar) in Devi's voice. Notice how she uses all twelve notes of the octave (shrutis) to paint a picture of longing and devotional resolution.",
      about_the_piece: "Raga Bhairavi is traditionally performed to conclude a classical concert. It is associated with the morning but can be sung at any time as a closing piece. It represents peace, devotion, and a sense of cosmic return.",
      after_listening: "How does Bhairavi's resolution of all notes make you feel about endings?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 83,
    featured: {
      type: "art",
      dayIndex: 83,
      work_title: "Wanderer Above the Sea of Fog",
      artist: "Caspar David Friedrich",
      tradition: "Romanticism",
      period: "1818",
      local_image_path: "/paintings/wanderer-fog.jpg",
      what_to_look_for: "Observe the figure standing on the rocky precipice with his back to us (Rückenfigur). This technique allows you to step into the figure's shoes and gaze out at the vast, mysterious ocean of mountain fog.",
      about_the_work: "A hallmark of Romantic landscape painting, this piece represents the sublime - the mixture of awe, terror, and insignificance felt when confronting the vastness of nature and the mysteries of existence.",
      after_looking: "Does the fog represent clarity waiting to emerge, or the beauty of what is hidden?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 84,
    featured: {
      type: "music",
      dayIndex: 84,
      piece_title: "Gymnopédie No. 1",
      composer_or_artist: "Erik Satie",
      tradition: "French Impressionism / Avant-Garde",
      period: "1888",
      youtube_id: "S-Xm7s9e9QI",
      duration: "3:10",
      what_to_listen_for: "Listen to the slow, repeating bass chords that alternate between major and minor. The melody is sparse, walking slowly and haltingly, like a solitary dancer in an empty room.",
      about_the_piece: "Satie wrote the Gymnopédies as atmospheric, non-intrusive music - what he called 'furniture music.' It stands as an ancestor to ambient music, designed to exist in the background and alter the mood of the room.",
      after_listening: "How does the repetitive pace of Satie's chords slow down your thoughts?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 85,
    featured: {
      type: "art",
      dayIndex: 85,
      work_title: "Water Lilies",
      artist: "Claude Monet",
      tradition: "Impressionism",
      period: "1906",
      local_image_path: "/paintings/water-lilies.jpg",
      what_to_look_for: "Look at the absence of a horizon or shoreline. Monet focuses entirely on the surface of the pond, where reflections of clouds merge with floating lilies, dissolving the boundary between water and sky.",
      about_the_work: " Monet spent the last thirty years of his life painting the water lily pond in his garden at Giverny. He wanted to capture the fleeting changes of light and atmospheric reflection on the water's surface.",
      after_looking: "Does the lack of structure in the painting bring a sense of mental freedom?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 86,
    featured: {
      type: "music",
      dayIndex: 86,
      piece_title: "A Love Supreme (Acknowledgement)",
      composer_or_artist: "John Coltrane",
      tradition: "Avant-Garde Jazz",
      period: "1965",
      youtube_id: "5S5f73U-jQ0",
      duration: "7:40",
      what_to_listen_for: "Listen to the famous four-note bass motif that mirrors the syllables of the album's title. Notice how Coltrane's saxophone repeats this motif in all keys, building a spiritual, ecstatic crescendo.",
      about_the_piece: "A Love Supreme is Coltrane's spiritual declaration, recorded after overcoming addiction. It is structured as a four-part suite representing his path of recognition, resolution, and pursuit of divine connection through music.",
      after_listening: "Can you feel the intention of devotion in the intense energy of Coltrane's horn?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 87,
    featured: {
      type: "art",
      dayIndex: 87,
      work_title: "The Tree of Life",
      artist: "Gustav Klimt",
      tradition: "Symbolism / Art Nouveau",
      period: "1909",
      local_image_path: "/paintings/tree-of-life.jpg",
      what_to_look_for: "Observe the spiraling branches that represent the complexity of life's paths. Look closely at the golden patterns, the small black bird of death on one branch, and the figures of lovers embraced.",
      about_the_work: "Part of the Stoclet Frieze mosaic in Brussels, Klimt uses gold leaf to elevate the tree into a sacred symbol. The spirals show that life constantly loops, grows, and returns to its roots.",
      after_looking: "Do you see your life's paths as a series of straight lines or golden spirals?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  },
  {
    dayIndex: 88,
    featured: {
      type: "music",
      dayIndex: 88,
      piece_title: "Raga Yaman - Vilambit Khayal",
      composer_or_artist: "Pandit Bhimsen Joshi",
      tradition: "Hindustani Classical",
      period: "Late 20th Century",
      youtube_id: "ylV_x64j048",
      duration: "18:20",
      what_to_listen_for: "Notice how Joshi builds the raga note by note in the slow tempo (vilambit). Listen to the sudden, powerful vocal sweeps (taans) that contrast with the quiet contemplative opening.",
      about_the_piece: "Raga Yaman is the archetype of evening calm, belonging to the Kalyan thaat. It uses all natural notes except for the raised Madhyam (sharp fourth), creating a spacious and lyrical mood.",
      after_listening: "How does Yaman's sharp fourth note alter the emotional temperature of the scale?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kun Faya Kun",
        artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
        film_or_album: "Rockstar",
        year: "2011",
        youtube_id: "T94PHkuyd8c"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Nenjukulle",
        artist: "A.R. Rahman, Shakthisree Gopalan",
        film_or_album: "Kadal",
        year: "2013",
        youtube_id: "X_wHA57d38U"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Fix You",
        artist: "Coldplay",
        film_or_album: "X&Y",
        year: "2005",
        youtube_id: "k4V3_GkySI4"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        film_or_album: "Vida",
        year: "2017",
        youtube_id: "kJQP7kiw5Fk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kahin Deep Jale Kahin Dil",
        artist: "Lata Mangeshkar",
        film_or_album: "Bees Saal Baad",
        year: "1962",
        youtube_id: "d0590eHptW0"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Tamil",
        world_language: undefined,
        song_title: "Katrinile Varum Geetham",
        artist: "M.S. Subbulakshmi",
        film_or_album: "Meera",
        year: "1945",
        youtube_id: "h-yZp-9w6a4"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Space Oddity",
        artist: "David Bowie",
        film_or_album: "Space Oddity",
        year: "1969",
        youtube_id: "iYYRHwL9zSE"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "La Vie En Rose",
        artist: "Edith Piaf",
        film_or_album: "Single",
        year: "1945",
        youtube_id: "kFzViYkZtbk"
      }
    ]
  },
  {
    dayIndex: 89,
    featured: {
      type: "art",
      dayIndex: 89,
      work_title: "Shakuntala",
      artist: "Raja Ravi Varma",
      tradition: "Indian Realism / Academic Art",
      period: "1898",
      local_image_path: "/paintings/ravi-varma-shakuntala.jpg",
      what_to_look_for: "Observe Shakuntala looking back under the pretense of removing a thorn from her foot, while her friends tease her. The painting blends European oil techniques with classical Indian themes.",
      about_the_work: "Ravi Varma's depictions of classical Indian epics redefined visual culture in India, making mythological figures accessible through lithographs. This painting captures a moment of romantic longing from Kalidasa's play.",
      after_looking: "How does the posture of looking back capture the weight of longing?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Dil Se Re",
        artist: "A.R. Rahman",
        film_or_album: "Dil Se",
        year: "1998",
        youtube_id: "YHE7P2588sU"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Malayalam",
        world_language: undefined,
        song_title: "Malare",
        artist: "Vijay Yesudas",
        film_or_album: "Premam",
        year: "2015",
        youtube_id: "0G2VxhV_gXM"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Stay With Me",
        artist: "Sam Smith",
        film_or_album: "In the Lonely Hour",
        year: "2014",
        youtube_id: "pB-5XG-DbAA"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "French",
        song_title: "Je Veux",
        artist: "Zaz",
        film_or_album: "Zaz",
        year: "2010",
        youtube_id: "AQ9coSGDJIw"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Pyaar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        film_or_album: "Mughal-E-Azam",
        year: "1960",
        youtube_id: "TFr6G5zveS8"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Bengali",
        world_language: undefined,
        song_title: "Ami Je Tomar",
        artist: "Shreya Ghoshal",
        film_or_album: "Bhool Bhulaiyaa",
        year: "2007",
        youtube_id: "m9GZpe1G-f8"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Imagine",
        artist: "John Lennon",
        film_or_album: "Imagine",
        year: "1971",
        youtube_id: "YkgkThdFn9g"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Portuguese",
        song_title: "Garota de Ipanema",
        artist: "Stan Getz, Joao Gilberto",
        film_or_album: "Getz/Gilberto",
        year: "1964",
        youtube_id: "c5QdxhadMpM"
      }
    ]
  },
  {
    dayIndex: 90,
    featured: {
      type: "music",
      dayIndex: 90,
      piece_title: "The Goldberg Variations (Aria)",
      composer_or_artist: "Johann Sebastian Bach (Glenn Gould)",
      tradition: "Baroque",
      period: "1741 (Recorded 1981)",
      youtube_id: "r_1c6v_hP3g",
      duration: "3:05",
      what_to_listen_for: "Listen to the quiet, contrapuntal movement of voices in the left and right hands. Notice Glenn Gould's light, detached touch and his soft humming in the background, a sign of his deep concentration.",
      about_the_piece: "Written for Harpsichord, the Goldberg Variations consist of an Aria followed by 30 variations. They represent Bach's mastery of keyboard architecture. The 1981 recording by Gould is slower and more introspective than his 1955 debut.",
      after_listening: "Does the geometric precision of Bach's counterpoint feel like a form of mental architecture?"
    },
    songs: [
      {
        era: "contemporary",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        film_or_album: "Anwar",
        year: "2007",
        youtube_id: "TzV-N1EIdL4"
      },
      {
        era: "contemporary",
        language: "indian_other",
        indian_language: "Telugu",
        world_language: undefined,
        song_title: "Srivalli",
        artist: "Sid Sriram",
        film_or_album: "Pushpa",
        year: "2021",
        youtube_id: "hcMzwfiTdQg"
      },
      {
        era: "contemporary",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Halo",
        artist: "Beyoncé",
        film_or_album: "I Am... Sasha Fierce",
        year: "2008",
        youtube_id: "bnVUHWCynig"
      },
      {
        era: "contemporary",
        language: "world",
        indian_language: undefined,
        world_language: "Spanish",
        song_title: "Amor de Mi Vida",
        artist: "Snatam Kaur",
        film_or_album: "Sacred Chants",
        year: "2012",
        youtube_id: "yS_4Yg2vBsk"
      },
      {
        era: "classical",
        language: "hindi",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Kuch Dil Ne Kaha",
        artist: "Lata Mangeshkar",
        film_or_album: "Anupama",
        year: "1966",
        youtube_id: "L1eI6L5D_Cg"
      },
      {
        era: "classical",
        language: "indian_other",
        indian_language: "Sanskrit",
        world_language: undefined,
        song_title: "Maha Ganapathim",
        artist: "K.J. Yesudas",
        film_or_album: "Carnatic Classical",
        year: "1985",
        youtube_id: "yZ76uBnyG34"
      },
      {
        era: "classical",
        language: "english",
        indian_language: undefined,
        world_language: undefined,
        song_title: "Bohemian Rhapsody",
        artist: "Queen",
        film_or_album: "A Night at the Opera",
        year: "1975",
        youtube_id: "fJ9rUzIMcZQ"
      },
      {
        era: "classical",
        language: "world",
        indian_language: undefined,
        world_language: "Arabic",
        song_title: "Cheb Mami (Desert Rose)",
        artist: "Sting ft. Cheb Mami",
        film_or_album: "Brand New Day",
        year: "1999",
        youtube_id: "C3lWwBkcWDU"
      }
    ]
  }
];
