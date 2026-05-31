// src/app/(app)/kitab/data.ts
// Programmatically generated daily book recommendation data

export interface KitabBook {
  title: string;
  author: string;
  year: string;
  genre: string;
  citation: string;
  summary: string;
  opening_line: string;
  read_if: string;
  similar_books: string[];
  purchase_or_info_link?: string;
}

export interface KitabLanguageGroup {
  contemporary: KitabBook;
  classical: KitabBook;
}

export interface KitabDayEntry {
  dayIndex: number;
  tabs: {
    hindi: KitabLanguageGroup;
    english: KitabLanguageGroup;
    indian_regional: KitabLanguageGroup;
    world: KitabLanguageGroup;
    classical_heritage: KitabLanguageGroup;
  };
}

export const KITAB_DATA: KitabDayEntry[] = [
  {
    dayIndex: 1,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 2,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 3,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 4,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 5,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 6,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 7,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 8,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 9,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 10,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 11,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 12,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 13,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 14,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 15,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 16,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 17,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 18,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 19,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 20,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 21,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 22,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 23,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 24,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 25,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 26,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 27,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 28,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 29,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 30,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 31,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 32,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 33,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 34,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 35,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 36,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 37,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 38,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 39,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 40,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 41,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 42,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 43,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 44,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 45,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 46,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 47,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 48,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 49,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 50,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 51,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 52,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 53,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 54,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 55,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 56,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 57,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 58,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 59,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 60,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 61,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 62,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 63,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 64,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 65,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 66,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 67,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 68,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 69,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 70,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 71,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 72,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 73,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 74,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 75,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 76,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 77,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 78,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 79,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 80,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 81,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 82,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 83,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 84,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 85,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 86,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 87,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 88,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 89,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  },
  {
    dayIndex: 90,
    tabs: {
      hindi: {
        contemporary: {
          title: "Raag Darbari",
          author: "Shrilal Shukla",
          year: "1968",
          genre: "Satire / Fiction",
          citation: "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          summary: "A scathing, hilarious satire of post-independence Indian rural life and politics, told through the eyes of a young city scholar visiting his uncle, Vaidyaji, in the village of Shivpalganj.",
          opening_line: "The road to Shivpalganj was long and dusty, like the state of affairs in the country.",
          read_if: "You want to understand the grassroots reality of power, bureaucracy, and survival in rural India with a side of sharp, dark humor.",
          similar_books: ["Godaan", "Maila Anchal", "Kashi Ka Assi"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Raag_Darbari"
        },
        classical: {
          title: "Godaan",
          author: "Premchand",
          year: "1936",
          genre: "Social Realism",
          citation: "Premchand. (1936). Godaan. Saraswati Press.",
          summary: "The tragic epic of Hori, a poor peasant, and his wife Dhania, whose lifelong dream is to own a cow - a simple wish that becomes their financial and spiritual undoing in colonial India.",
          opening_line: "Hori, having fed the bullocks, came out and said to Dhania, 'Send Gobar to cut some grass; I'll be back late.'",
          read_if: "You want to experience the defining masterpiece of Hindi literature, which depicts the agrarian crisis and class exploitation with profound empathy.",
          similar_books: ["Gaban", "Karmabhoomi", "Nirmala"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Godaan"
        }
      },
      english: {
        contemporary: {
          title: "The God of Small Things",
          author: "Arundhati Roy",
          year: "1997",
          genre: "Literary Fiction",
          citation: "Roy, A. (1997). The God of Small Things. Flamingo.",
          summary: "Set in Kerala, the novel explores how the small things in life shape the big things, following fraternal twins Rahel and Estha as they navigate love, tragedy, and the rigid laws of caste and class.",
          opening_line: "May in Ayemenem is a hot, brooding month.",
          read_if: "You appreciate poetic, non-linear prose that exposes the human cost of social hierarchies and forbidden love.",
          similar_books: ["Midnight's Children", "A Fine Balance", "The Inheritance of Loss"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
        },
        classical: {
          title: "1984",
          author: "George Orwell",
          year: "1949",
          genre: "Dystopian / Political Fiction",
          citation: "Orwell, G. (1949). 1984. Secker & Warburg.",
          summary: "A chilling vision of a totalitarian future where Big Brother monitors every action, thought, and word of its citizens, following Winston Smith's rebellion against the Party.",
          opening_line: "It was a bright cold day in April, and the clocks were striking thirteen.",
          read_if: "You want to understand the psychological mechanisms of state control, propaganda, and the preservation of individual truth.",
          similar_books: ["Brave New World", "Fahrenheit 451", "The Handmaid's Tale"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/1984"
        }
      },
      indian_regional: {
        contemporary: {
          title: "The Legends of Khasak",
          author: "O. V. Vijayan",
          year: "1969",
          genre: "Magical Realism / Malayalam",
          citation: "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          summary: "Ravi, a young man haunted by guilt, leaves his university studies to start a single-teacher school in the remote, myth-steeped village of Khasak, encountering a tapestry of eccentric characters and local spirits.",
          opening_line: "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          read_if: "You seek a mystical, deeply philosophical journey through rural Kerala, exploring guilt, rebirth, and the coexistence of myth and reality.",
          similar_books: ["Chemmeen", "Naalukettu", "Aarachar"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Legends_of_Khasak"
        },
        classical: {
          title: "Chokher Bali",
          author: "Rabindranath Tagore",
          year: "1903",
          genre: "Psychological Realism / Bengali",
          citation: "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          summary: "A brilliant psychological study of desire, jealousy, and female autonomy, focusing on Binodini, a young, educated widow who disrupts the domestic peace of a wealthy Calcutta family.",
          opening_line: "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          read_if: "You want to read one of India's earliest modern novels that boldly critiques the social constraints placed upon widows and female agency.",
          similar_books: ["Gora", "Ghare Baire", "Charulata"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/Chokher_Bali"
        }
      },
      world: {
        contemporary: {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          genre: "Magical Realism",
          citation: "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          summary: "The multi-generational epic of the Buendía family, who build and witness the eventual decline of Macondo, a town suspended between myth and history in the Colombian jungle.",
          opening_line: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          read_if: "You want to experience the defining masterpiece of Latin American magical realism, where the miraculous is ordinary and history loops in endless solitude.",
          similar_books: ["The House of the Spirits", "Midnight's Children", "Ficciones"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
        },
        classical: {
          title: "The Metamorphosis",
          author: "Franz Kafka",
          year: "1915",
          genre: "Absurdist Fiction",
          citation: "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          summary: "Gregor Samsa wakes up one morning to find himself transformed into a giant insect, forcing him and his family to confront alienation, dependency, and the absurdity of their existence.",
          opening_line: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          read_if: "You want to sit with the classic exploration of modern alienation, existential guilt, and the burden of productivity in family structures.",
          similar_books: ["The Trial", "The Stranger", "Nausea"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Metamorphosis"
        }
      },
      classical_heritage: {
        contemporary: {
          title: "The Rubaiyat of Omar Khayyam",
          author: "Omar Khayyam (Edward FitzGerald)",
          year: "1859 (Translation)",
          genre: "Poetry / Persian Heritage",
          citation: "Khayyam, O. (1859). The Rubaiyat of Omar Khayyam. Bernard Quaritch.",
          summary: "A collection of quatrains celebrating the beauty of the present moment, wine, love, and the mystery of existence, warning against dogmatic certainty and intellectual vanity.",
          opening_line: "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          read_if: "You seek beautiful, epicurean verses that advocate for mindfulness, skepticism, and finding joy in the transient pleasures of life.",
          similar_books: ["Ghazals of Ghalib", "The Masnavi", "The Prophet"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Rubaiyat_of_Omar_Khayyam"
        },
        classical: {
          title: "The Upanishads",
          author: "Ancient Sages",
          year: "c. 800 - 500 BCE",
          genre: "Sacred Philosophy",
          citation: "Ancient Forest Sages. The Upanishads.",
          summary: "The foundational texts of Indian philosophy, consisting of dialogues that explore the nature of reality, the unity of the individual self (Atman) with the universal soul (Brahman), and the path to liberation (Moksha).",
          opening_line: "OM. All this, whatsoever moves in this moving world, is enveloped by God.",
          read_if: "You want to explore the ultimate roots of non-dual consciousness and the philosophical dialogues that shaped Indian spiritual traditions.",
          similar_books: ["The Bhagavad Gita", "The Dhammapada", "Tao Te Ching"],
          purchase_or_info_link: "https://en.wikipedia.org/wiki/The_Upanishads"
        }
      },
    }
  }
];
