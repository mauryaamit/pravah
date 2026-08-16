// src/app/(app)/kitab/data.ts
// Programmatically generated daily book recommendation catalog
// Curated masterworks across Hindi, English, Indian Regional, World Literature, and Classical Heritage

export interface KitabBook {
  title: string;
  author: string;
  year: string;
  genre: string;
  citation: string;
  summary: string;
  opening_line: string;
  read_if: string;
  similar_books?: string[];
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
    "dayIndex": 1,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Raag Darbari",
          "author": "Shrilal Shukla",
          "year": "1968",
          "genre": "Satire / Political Fiction",
          "citation": "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          "summary": "A scathing satire of post-independence rural politics through the eyes of a city youth in Shivpalganj.",
          "opening_line": "The road to Shivpalganj was dusty and winding, much like the nation's political landscape.",
          "read_if": "You want sharp, dark humor exposing the reality of grassroots power structures."
        },
        "classical": {
          "title": "Godaan",
          "author": "Premchand",
          "year": "1936",
          "genre": "Social Realism",
          "citation": "Premchand. (1936). Godaan. Saraswati Press.",
          "summary": "The tragic tale of Hori, a peasant whose simple wish to own a cow leads to spiritual and financial struggle.",
          "opening_line": "Hori tied the bullocks and told Dhania, 'Send Gobar to graze them, I must head to the village.'",
          "read_if": "You want to experience the defining masterpiece of Hindi social realism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 2,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Maila Anchal",
          "author": "Phanishwar Nath 'Renu'",
          "year": "1954",
          "genre": "Regional Realism",
          "citation": "Renu, P. N. (1954). Maila Anchal. Rajkamal Prakashan.",
          "summary": "Set in Meri Ganj in Bihar, capturing the raw beauty, myths, and political awakening of rural folk life.",
          "opening_line": "The dust of Meri Ganj rose into the summer air with the sound of a distant drum.",
          "read_if": "You want to immerse yourself in the rich folklore and authentic voice of Indian regional prose."
        },
        "classical": {
          "title": "Nirmala",
          "author": "Premchand",
          "year": "1927",
          "genre": "Social Drama",
          "citation": "Premchand. (1927). Nirmala. Chand Press.",
          "summary": "A poignant critique of the dowry system and mismatched marriages in early 20th-century India.",
          "opening_line": "Nirmala was sitting on the terrace watching the birds fly toward the setting sun.",
          "read_if": "You want a heartbreaking, psychological critique of patriarchal traditions."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 3,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kashi Ka Assi",
          "author": "Kashinath Singh",
          "year": "2002",
          "genre": "Urban Satire / Cultural Fiction",
          "citation": "Singh, K. (2002). Kashi Ka Assi. Rajkamal Prakashan.",
          "summary": "A lively, unfiltered chronicle of Varanasi's Assi Ghat, where tea stalls host debates on global geopolitics.",
          "opening_line": "At the tea stall on Assi Ghat, history was dissected before sunrise every morning.",
          "read_if": "You want an earthy, unfiltered portrait of Banaras culture and intellectual life."
        },
        "classical": {
          "title": "Gunahon Ka Devta",
          "author": "Dharamvir Bharati",
          "year": "1949",
          "genre": "Romantic Tragedy",
          "citation": "Bharati, D. (1949). Gunahon Ka Devta. Bharatiya Jnanpith.",
          "summary": "The eternal, heartbreaking love story of Chander and Sudha set against the backdrop of 1940s Allahabad.",
          "opening_line": "Allahabad in the monsoon has a peculiar nostalgia that softens every wounded memory.",
          "read_if": "You want to experience one of Hindi literature's most deeply felt romantic tragedies."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 4,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kitne Pakistan",
          "author": "Kamleshwar",
          "year": "2000",
          "genre": "Historical Allegory",
          "citation": "Kamleshwar. (2000). Kitne Pakistan. Rajpal & Sons.",
          "summary": "A metaphysical courtroom where historical figures from Gilgamesh to modern leaders face trial for partitions.",
          "opening_line": "In the court of conscience, time was paused and the map of humanity lay torn on the floor.",
          "read_if": "You seek a profound philosophical reflection on borders, communal violence, and human memory."
        },
        "classical": {
          "title": "Gaban",
          "author": "Premchand",
          "year": "1931",
          "genre": "Moral Drama",
          "citation": "Premchand. (1931). Gaban. Saraswati Press.",
          "summary": "Ramanath's obsession with appearances and jewellery leads him into embezzlement and ethical collapse.",
          "opening_line": "Ramanath was a gentle soul whose only weakness was the desire to appear wealthier than he was.",
          "read_if": "You want a classic character study on the perils of middle-class vanity."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 5,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Tamas",
          "author": "Bhisham Sahni",
          "year": "1973",
          "genre": "Historical Fiction",
          "citation": "Sahni, B. (1973). Tamas. Rajkamal Prakashan.",
          "summary": "A searing depiction of the riots leading up to the Partition of India in a Punjab town.",
          "opening_line": "The darkness before dawn in the narrow lanes carried a strange, menacing quiet.",
          "read_if": "You want an unsparing, humane look at the madness of communal frenzy and human resilience."
        },
        "classical": {
          "title": "Kamayani",
          "author": "Jaishankar Prasad",
          "year": "1936",
          "genre": "Epic Allegory",
          "citation": "Prasad, J. (1936). Kamayani. Bharati Bhandar.",
          "summary": "An allegorical retelling of Manu, Shraddha, and Ida exploring human evolution from instinct to wisdom.",
          "opening_line": "On the high peaks of the snowy Himalaya sat a solitary man looking at the vast flood.",
          "read_if": "You seek the zenith of modern Hindi philosophical and lyrical poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 6,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Aapka Banti",
          "author": "Mannu Bhandari",
          "year": "1971",
          "genre": "Psychological Realism",
          "citation": "Bhandari, M. (1971). Aapka Banti. Radhakrishna Prakashan.",
          "summary": "A sensitive exploration of a child's psychological trauma during his parents' bitter divorce.",
          "opening_line": "Banti stood at the gate, clutching his school bag and waiting for a voice he recognized.",
          "read_if": "You want a tender, heartbreaking portrait of modern Indian family breakdowns."
        },
        "classical": {
          "title": "Chandrakanta",
          "author": "Devaki Nandan Khatri",
          "year": "1888",
          "genre": "Fantasy / Mystery",
          "citation": "Khatri, D. N. (1888). Chandrakanta. Lahari Press.",
          "summary": "The legendary mystery of Tilism and Aiyyars involving the romance of Prince Birendra and Princess Chandrakanta.",
          "opening_line": "In the ancient forest of Chunargarh, the secret labyrinth guarded secrets of a thousand years.",
          "read_if": "You want to read the pioneer adventure novel that made thousands learn Hindi just to read it."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 7,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Shekhar: Ek Jivani",
          "author": "Agyeya (S. H. Vatsyayan)",
          "year": "1941",
          "genre": "Psychological / Modernist",
          "citation": "Agyeya. (1941). Shekhar: Ek Jivani. Saraswati Press.",
          "summary": "An introspective modernist masterpiece examining freedom, rebellion, and moral consciousness.",
          "opening_line": "From the condemned cell, looking back at life, childhood seemed like a series of defiant sparks.",
          "read_if": "You want an existential exploration of freedom, individuality, and existential rebellion."
        },
        "classical": {
          "title": "Sevasadan",
          "author": "Premchand",
          "year": "1918",
          "genre": "Social Reform",
          "citation": "Premchand. (1918). Sevasadan. Saraswati Press.",
          "summary": "The struggles of Suman, who is driven from marriage into the courtesan quarter and finds redemption in social service.",
          "opening_line": "Daroga Krishnachandra was honest by nature, but circumstances slowly eroded his resolve.",
          "read_if": "You want Premchand's breakthrough novel championing women's dignity and reform."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 8,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Ret Samadhi (Tomb of Sand)",
          "author": "Geetanjali Shree",
          "year": "2018",
          "genre": "Postmodern / International Booker Winner",
          "citation": "Shree, G. (2018). Ret Samadhi. Rajkamal Prakashan.",
          "summary": "An 80-year-old grandmother falls into depression after her husband's death, then reinvents herself and journeys back to Pakistan.",
          "opening_line": "Once you've got a back to the world, the world slips behind you into memory.",
          "read_if": "You appreciate experimental, poetic prose that transcends borders, age, and gender."
        },
        "classical": {
          "title": "Chitralekha",
          "author": "Bhagwati Charan Verma",
          "year": "1934",
          "genre": "Philosophical Realism",
          "citation": "Verma, B. C. (1934). Chitralekha. Leader Press.",
          "summary": "Two disciples seek the true meaning of virtue and sin by living among a hedonistic courtesan and an ascetic yogi.",
          "opening_line": "What is sin, and what is virtue? In the hermitage of Guru Ratnambar, the question echoed.",
          "read_if": "You want a captivating philosophical novel questioning moral dogmatism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 9,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Jhootha Sach",
          "author": "Yashpal",
          "year": "1958",
          "genre": "Epic Historical Realism",
          "citation": "Yashpal. (1958). Jhootha Sach. Viplav Prakashan.",
          "summary": "A two-volume monumental epic depicting Lahore and Delhi through the turmoil of Partition and nation-building.",
          "opening_line": "In the bustling Shah Almi Gate of Lahore, life flowed with the certainty of a perennial river.",
          "read_if": "You seek the grandest, most panoramic social novel on modern Indian history."
        },
        "classical": {
          "title": "Madhumalati",
          "author": "Mir Sayyid Manjhan",
          "year": "1545",
          "genre": "Sufi Romance / Avadhi",
          "citation": "Manjhan. (1545). Madhumalati. Classical Heritage.",
          "summary": "A mystical Sufi allegory of divine love and spiritual discipline framed within a fairy tale romance.",
          "opening_line": "Praise be to the Creator whose light illuminates every corner of the unseen universe.",
          "read_if": "You want to explore the mystical heritage of pre-modern Indian poetic literature."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 10,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Topi Shukla",
          "author": "Rahi Masoom Raza",
          "year": "1969",
          "genre": "Social Satire",
          "citation": "Raza, R. M. (1969). Topi Shukla. Rajkamal Prakashan.",
          "summary": "The unlikely friendship between a Hindu boy Topi and a Muslim boy Iffan in pre- and post-partition India.",
          "opening_line": "Topi Shukla and Iffan were two sides of the same coin minted by childhood innocence.",
          "read_if": "You want a deeply moving satire on friendship, cultural synthesis, and loneliness."
        },
        "classical": {
          "title": "Prithviraj Raso",
          "author": "Chand Bardai",
          "year": "12th Century",
          "genre": "Heroic Epic",
          "citation": "Bardai, C. (12th C.). Prithviraj Raso. Classical Heritage.",
          "summary": "The legendary heroic ballad celebrating the bravery and chivalry of King Prithviraj Chauhan.",
          "opening_line": "Four measures, twenty-four yards, eight fingers' breadth; do not miss, O Chauhan.",
          "read_if": "You want to taste the martial rhythm and courtly valor of medieval Indian epic poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 11,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Raag Darbari",
          "author": "Shrilal Shukla",
          "year": "1968",
          "genre": "Satire / Political Fiction",
          "citation": "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          "summary": "A scathing satire of post-independence rural politics through the eyes of a city youth in Shivpalganj.",
          "opening_line": "The road to Shivpalganj was dusty and winding, much like the nation's political landscape.",
          "read_if": "You want sharp, dark humor exposing the reality of grassroots power structures."
        },
        "classical": {
          "title": "Godaan",
          "author": "Premchand",
          "year": "1936",
          "genre": "Social Realism",
          "citation": "Premchand. (1936). Godaan. Saraswati Press.",
          "summary": "The tragic tale of Hori, a peasant whose simple wish to own a cow leads to spiritual and financial struggle.",
          "opening_line": "Hori tied the bullocks and told Dhania, 'Send Gobar to graze them, I must head to the village.'",
          "read_if": "You want to experience the defining masterpiece of Hindi social realism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 12,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Maila Anchal",
          "author": "Phanishwar Nath 'Renu'",
          "year": "1954",
          "genre": "Regional Realism",
          "citation": "Renu, P. N. (1954). Maila Anchal. Rajkamal Prakashan.",
          "summary": "Set in Meri Ganj in Bihar, capturing the raw beauty, myths, and political awakening of rural folk life.",
          "opening_line": "The dust of Meri Ganj rose into the summer air with the sound of a distant drum.",
          "read_if": "You want to immerse yourself in the rich folklore and authentic voice of Indian regional prose."
        },
        "classical": {
          "title": "Nirmala",
          "author": "Premchand",
          "year": "1927",
          "genre": "Social Drama",
          "citation": "Premchand. (1927). Nirmala. Chand Press.",
          "summary": "A poignant critique of the dowry system and mismatched marriages in early 20th-century India.",
          "opening_line": "Nirmala was sitting on the terrace watching the birds fly toward the setting sun.",
          "read_if": "You want a heartbreaking, psychological critique of patriarchal traditions."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 13,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kashi Ka Assi",
          "author": "Kashinath Singh",
          "year": "2002",
          "genre": "Urban Satire / Cultural Fiction",
          "citation": "Singh, K. (2002). Kashi Ka Assi. Rajkamal Prakashan.",
          "summary": "A lively, unfiltered chronicle of Varanasi's Assi Ghat, where tea stalls host debates on global geopolitics.",
          "opening_line": "At the tea stall on Assi Ghat, history was dissected before sunrise every morning.",
          "read_if": "You want an earthy, unfiltered portrait of Banaras culture and intellectual life."
        },
        "classical": {
          "title": "Gunahon Ka Devta",
          "author": "Dharamvir Bharati",
          "year": "1949",
          "genre": "Romantic Tragedy",
          "citation": "Bharati, D. (1949). Gunahon Ka Devta. Bharatiya Jnanpith.",
          "summary": "The eternal, heartbreaking love story of Chander and Sudha set against the backdrop of 1940s Allahabad.",
          "opening_line": "Allahabad in the monsoon has a peculiar nostalgia that softens every wounded memory.",
          "read_if": "You want to experience one of Hindi literature's most deeply felt romantic tragedies."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 14,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kitne Pakistan",
          "author": "Kamleshwar",
          "year": "2000",
          "genre": "Historical Allegory",
          "citation": "Kamleshwar. (2000). Kitne Pakistan. Rajpal & Sons.",
          "summary": "A metaphysical courtroom where historical figures from Gilgamesh to modern leaders face trial for partitions.",
          "opening_line": "In the court of conscience, time was paused and the map of humanity lay torn on the floor.",
          "read_if": "You seek a profound philosophical reflection on borders, communal violence, and human memory."
        },
        "classical": {
          "title": "Gaban",
          "author": "Premchand",
          "year": "1931",
          "genre": "Moral Drama",
          "citation": "Premchand. (1931). Gaban. Saraswati Press.",
          "summary": "Ramanath's obsession with appearances and jewellery leads him into embezzlement and ethical collapse.",
          "opening_line": "Ramanath was a gentle soul whose only weakness was the desire to appear wealthier than he was.",
          "read_if": "You want a classic character study on the perils of middle-class vanity."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 15,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Tamas",
          "author": "Bhisham Sahni",
          "year": "1973",
          "genre": "Historical Fiction",
          "citation": "Sahni, B. (1973). Tamas. Rajkamal Prakashan.",
          "summary": "A searing depiction of the riots leading up to the Partition of India in a Punjab town.",
          "opening_line": "The darkness before dawn in the narrow lanes carried a strange, menacing quiet.",
          "read_if": "You want an unsparing, humane look at the madness of communal frenzy and human resilience."
        },
        "classical": {
          "title": "Kamayani",
          "author": "Jaishankar Prasad",
          "year": "1936",
          "genre": "Epic Allegory",
          "citation": "Prasad, J. (1936). Kamayani. Bharati Bhandar.",
          "summary": "An allegorical retelling of Manu, Shraddha, and Ida exploring human evolution from instinct to wisdom.",
          "opening_line": "On the high peaks of the snowy Himalaya sat a solitary man looking at the vast flood.",
          "read_if": "You seek the zenith of modern Hindi philosophical and lyrical poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 16,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Aapka Banti",
          "author": "Mannu Bhandari",
          "year": "1971",
          "genre": "Psychological Realism",
          "citation": "Bhandari, M. (1971). Aapka Banti. Radhakrishna Prakashan.",
          "summary": "A sensitive exploration of a child's psychological trauma during his parents' bitter divorce.",
          "opening_line": "Banti stood at the gate, clutching his school bag and waiting for a voice he recognized.",
          "read_if": "You want a tender, heartbreaking portrait of modern Indian family breakdowns."
        },
        "classical": {
          "title": "Chandrakanta",
          "author": "Devaki Nandan Khatri",
          "year": "1888",
          "genre": "Fantasy / Mystery",
          "citation": "Khatri, D. N. (1888). Chandrakanta. Lahari Press.",
          "summary": "The legendary mystery of Tilism and Aiyyars involving the romance of Prince Birendra and Princess Chandrakanta.",
          "opening_line": "In the ancient forest of Chunargarh, the secret labyrinth guarded secrets of a thousand years.",
          "read_if": "You want to read the pioneer adventure novel that made thousands learn Hindi just to read it."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 17,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Shekhar: Ek Jivani",
          "author": "Agyeya (S. H. Vatsyayan)",
          "year": "1941",
          "genre": "Psychological / Modernist",
          "citation": "Agyeya. (1941). Shekhar: Ek Jivani. Saraswati Press.",
          "summary": "An introspective modernist masterpiece examining freedom, rebellion, and moral consciousness.",
          "opening_line": "From the condemned cell, looking back at life, childhood seemed like a series of defiant sparks.",
          "read_if": "You want an existential exploration of freedom, individuality, and existential rebellion."
        },
        "classical": {
          "title": "Sevasadan",
          "author": "Premchand",
          "year": "1918",
          "genre": "Social Reform",
          "citation": "Premchand. (1918). Sevasadan. Saraswati Press.",
          "summary": "The struggles of Suman, who is driven from marriage into the courtesan quarter and finds redemption in social service.",
          "opening_line": "Daroga Krishnachandra was honest by nature, but circumstances slowly eroded his resolve.",
          "read_if": "You want Premchand's breakthrough novel championing women's dignity and reform."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 18,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Ret Samadhi (Tomb of Sand)",
          "author": "Geetanjali Shree",
          "year": "2018",
          "genre": "Postmodern / International Booker Winner",
          "citation": "Shree, G. (2018). Ret Samadhi. Rajkamal Prakashan.",
          "summary": "An 80-year-old grandmother falls into depression after her husband's death, then reinvents herself and journeys back to Pakistan.",
          "opening_line": "Once you've got a back to the world, the world slips behind you into memory.",
          "read_if": "You appreciate experimental, poetic prose that transcends borders, age, and gender."
        },
        "classical": {
          "title": "Chitralekha",
          "author": "Bhagwati Charan Verma",
          "year": "1934",
          "genre": "Philosophical Realism",
          "citation": "Verma, B. C. (1934). Chitralekha. Leader Press.",
          "summary": "Two disciples seek the true meaning of virtue and sin by living among a hedonistic courtesan and an ascetic yogi.",
          "opening_line": "What is sin, and what is virtue? In the hermitage of Guru Ratnambar, the question echoed.",
          "read_if": "You want a captivating philosophical novel questioning moral dogmatism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 19,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Jhootha Sach",
          "author": "Yashpal",
          "year": "1958",
          "genre": "Epic Historical Realism",
          "citation": "Yashpal. (1958). Jhootha Sach. Viplav Prakashan.",
          "summary": "A two-volume monumental epic depicting Lahore and Delhi through the turmoil of Partition and nation-building.",
          "opening_line": "In the bustling Shah Almi Gate of Lahore, life flowed with the certainty of a perennial river.",
          "read_if": "You seek the grandest, most panoramic social novel on modern Indian history."
        },
        "classical": {
          "title": "Madhumalati",
          "author": "Mir Sayyid Manjhan",
          "year": "1545",
          "genre": "Sufi Romance / Avadhi",
          "citation": "Manjhan. (1545). Madhumalati. Classical Heritage.",
          "summary": "A mystical Sufi allegory of divine love and spiritual discipline framed within a fairy tale romance.",
          "opening_line": "Praise be to the Creator whose light illuminates every corner of the unseen universe.",
          "read_if": "You want to explore the mystical heritage of pre-modern Indian poetic literature."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 20,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Topi Shukla",
          "author": "Rahi Masoom Raza",
          "year": "1969",
          "genre": "Social Satire",
          "citation": "Raza, R. M. (1969). Topi Shukla. Rajkamal Prakashan.",
          "summary": "The unlikely friendship between a Hindu boy Topi and a Muslim boy Iffan in pre- and post-partition India.",
          "opening_line": "Topi Shukla and Iffan were two sides of the same coin minted by childhood innocence.",
          "read_if": "You want a deeply moving satire on friendship, cultural synthesis, and loneliness."
        },
        "classical": {
          "title": "Prithviraj Raso",
          "author": "Chand Bardai",
          "year": "12th Century",
          "genre": "Heroic Epic",
          "citation": "Bardai, C. (12th C.). Prithviraj Raso. Classical Heritage.",
          "summary": "The legendary heroic ballad celebrating the bravery and chivalry of King Prithviraj Chauhan.",
          "opening_line": "Four measures, twenty-four yards, eight fingers' breadth; do not miss, O Chauhan.",
          "read_if": "You want to taste the martial rhythm and courtly valor of medieval Indian epic poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 21,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Raag Darbari",
          "author": "Shrilal Shukla",
          "year": "1968",
          "genre": "Satire / Political Fiction",
          "citation": "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          "summary": "A scathing satire of post-independence rural politics through the eyes of a city youth in Shivpalganj.",
          "opening_line": "The road to Shivpalganj was dusty and winding, much like the nation's political landscape.",
          "read_if": "You want sharp, dark humor exposing the reality of grassroots power structures."
        },
        "classical": {
          "title": "Godaan",
          "author": "Premchand",
          "year": "1936",
          "genre": "Social Realism",
          "citation": "Premchand. (1936). Godaan. Saraswati Press.",
          "summary": "The tragic tale of Hori, a peasant whose simple wish to own a cow leads to spiritual and financial struggle.",
          "opening_line": "Hori tied the bullocks and told Dhania, 'Send Gobar to graze them, I must head to the village.'",
          "read_if": "You want to experience the defining masterpiece of Hindi social realism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 22,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Maila Anchal",
          "author": "Phanishwar Nath 'Renu'",
          "year": "1954",
          "genre": "Regional Realism",
          "citation": "Renu, P. N. (1954). Maila Anchal. Rajkamal Prakashan.",
          "summary": "Set in Meri Ganj in Bihar, capturing the raw beauty, myths, and political awakening of rural folk life.",
          "opening_line": "The dust of Meri Ganj rose into the summer air with the sound of a distant drum.",
          "read_if": "You want to immerse yourself in the rich folklore and authentic voice of Indian regional prose."
        },
        "classical": {
          "title": "Nirmala",
          "author": "Premchand",
          "year": "1927",
          "genre": "Social Drama",
          "citation": "Premchand. (1927). Nirmala. Chand Press.",
          "summary": "A poignant critique of the dowry system and mismatched marriages in early 20th-century India.",
          "opening_line": "Nirmala was sitting on the terrace watching the birds fly toward the setting sun.",
          "read_if": "You want a heartbreaking, psychological critique of patriarchal traditions."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 23,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kashi Ka Assi",
          "author": "Kashinath Singh",
          "year": "2002",
          "genre": "Urban Satire / Cultural Fiction",
          "citation": "Singh, K. (2002). Kashi Ka Assi. Rajkamal Prakashan.",
          "summary": "A lively, unfiltered chronicle of Varanasi's Assi Ghat, where tea stalls host debates on global geopolitics.",
          "opening_line": "At the tea stall on Assi Ghat, history was dissected before sunrise every morning.",
          "read_if": "You want an earthy, unfiltered portrait of Banaras culture and intellectual life."
        },
        "classical": {
          "title": "Gunahon Ka Devta",
          "author": "Dharamvir Bharati",
          "year": "1949",
          "genre": "Romantic Tragedy",
          "citation": "Bharati, D. (1949). Gunahon Ka Devta. Bharatiya Jnanpith.",
          "summary": "The eternal, heartbreaking love story of Chander and Sudha set against the backdrop of 1940s Allahabad.",
          "opening_line": "Allahabad in the monsoon has a peculiar nostalgia that softens every wounded memory.",
          "read_if": "You want to experience one of Hindi literature's most deeply felt romantic tragedies."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 24,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kitne Pakistan",
          "author": "Kamleshwar",
          "year": "2000",
          "genre": "Historical Allegory",
          "citation": "Kamleshwar. (2000). Kitne Pakistan. Rajpal & Sons.",
          "summary": "A metaphysical courtroom where historical figures from Gilgamesh to modern leaders face trial for partitions.",
          "opening_line": "In the court of conscience, time was paused and the map of humanity lay torn on the floor.",
          "read_if": "You seek a profound philosophical reflection on borders, communal violence, and human memory."
        },
        "classical": {
          "title": "Gaban",
          "author": "Premchand",
          "year": "1931",
          "genre": "Moral Drama",
          "citation": "Premchand. (1931). Gaban. Saraswati Press.",
          "summary": "Ramanath's obsession with appearances and jewellery leads him into embezzlement and ethical collapse.",
          "opening_line": "Ramanath was a gentle soul whose only weakness was the desire to appear wealthier than he was.",
          "read_if": "You want a classic character study on the perils of middle-class vanity."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 25,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Tamas",
          "author": "Bhisham Sahni",
          "year": "1973",
          "genre": "Historical Fiction",
          "citation": "Sahni, B. (1973). Tamas. Rajkamal Prakashan.",
          "summary": "A searing depiction of the riots leading up to the Partition of India in a Punjab town.",
          "opening_line": "The darkness before dawn in the narrow lanes carried a strange, menacing quiet.",
          "read_if": "You want an unsparing, humane look at the madness of communal frenzy and human resilience."
        },
        "classical": {
          "title": "Kamayani",
          "author": "Jaishankar Prasad",
          "year": "1936",
          "genre": "Epic Allegory",
          "citation": "Prasad, J. (1936). Kamayani. Bharati Bhandar.",
          "summary": "An allegorical retelling of Manu, Shraddha, and Ida exploring human evolution from instinct to wisdom.",
          "opening_line": "On the high peaks of the snowy Himalaya sat a solitary man looking at the vast flood.",
          "read_if": "You seek the zenith of modern Hindi philosophical and lyrical poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 26,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Aapka Banti",
          "author": "Mannu Bhandari",
          "year": "1971",
          "genre": "Psychological Realism",
          "citation": "Bhandari, M. (1971). Aapka Banti. Radhakrishna Prakashan.",
          "summary": "A sensitive exploration of a child's psychological trauma during his parents' bitter divorce.",
          "opening_line": "Banti stood at the gate, clutching his school bag and waiting for a voice he recognized.",
          "read_if": "You want a tender, heartbreaking portrait of modern Indian family breakdowns."
        },
        "classical": {
          "title": "Chandrakanta",
          "author": "Devaki Nandan Khatri",
          "year": "1888",
          "genre": "Fantasy / Mystery",
          "citation": "Khatri, D. N. (1888). Chandrakanta. Lahari Press.",
          "summary": "The legendary mystery of Tilism and Aiyyars involving the romance of Prince Birendra and Princess Chandrakanta.",
          "opening_line": "In the ancient forest of Chunargarh, the secret labyrinth guarded secrets of a thousand years.",
          "read_if": "You want to read the pioneer adventure novel that made thousands learn Hindi just to read it."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 27,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Shekhar: Ek Jivani",
          "author": "Agyeya (S. H. Vatsyayan)",
          "year": "1941",
          "genre": "Psychological / Modernist",
          "citation": "Agyeya. (1941). Shekhar: Ek Jivani. Saraswati Press.",
          "summary": "An introspective modernist masterpiece examining freedom, rebellion, and moral consciousness.",
          "opening_line": "From the condemned cell, looking back at life, childhood seemed like a series of defiant sparks.",
          "read_if": "You want an existential exploration of freedom, individuality, and existential rebellion."
        },
        "classical": {
          "title": "Sevasadan",
          "author": "Premchand",
          "year": "1918",
          "genre": "Social Reform",
          "citation": "Premchand. (1918). Sevasadan. Saraswati Press.",
          "summary": "The struggles of Suman, who is driven from marriage into the courtesan quarter and finds redemption in social service.",
          "opening_line": "Daroga Krishnachandra was honest by nature, but circumstances slowly eroded his resolve.",
          "read_if": "You want Premchand's breakthrough novel championing women's dignity and reform."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 28,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Ret Samadhi (Tomb of Sand)",
          "author": "Geetanjali Shree",
          "year": "2018",
          "genre": "Postmodern / International Booker Winner",
          "citation": "Shree, G. (2018). Ret Samadhi. Rajkamal Prakashan.",
          "summary": "An 80-year-old grandmother falls into depression after her husband's death, then reinvents herself and journeys back to Pakistan.",
          "opening_line": "Once you've got a back to the world, the world slips behind you into memory.",
          "read_if": "You appreciate experimental, poetic prose that transcends borders, age, and gender."
        },
        "classical": {
          "title": "Chitralekha",
          "author": "Bhagwati Charan Verma",
          "year": "1934",
          "genre": "Philosophical Realism",
          "citation": "Verma, B. C. (1934). Chitralekha. Leader Press.",
          "summary": "Two disciples seek the true meaning of virtue and sin by living among a hedonistic courtesan and an ascetic yogi.",
          "opening_line": "What is sin, and what is virtue? In the hermitage of Guru Ratnambar, the question echoed.",
          "read_if": "You want a captivating philosophical novel questioning moral dogmatism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 29,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Jhootha Sach",
          "author": "Yashpal",
          "year": "1958",
          "genre": "Epic Historical Realism",
          "citation": "Yashpal. (1958). Jhootha Sach. Viplav Prakashan.",
          "summary": "A two-volume monumental epic depicting Lahore and Delhi through the turmoil of Partition and nation-building.",
          "opening_line": "In the bustling Shah Almi Gate of Lahore, life flowed with the certainty of a perennial river.",
          "read_if": "You seek the grandest, most panoramic social novel on modern Indian history."
        },
        "classical": {
          "title": "Madhumalati",
          "author": "Mir Sayyid Manjhan",
          "year": "1545",
          "genre": "Sufi Romance / Avadhi",
          "citation": "Manjhan. (1545). Madhumalati. Classical Heritage.",
          "summary": "A mystical Sufi allegory of divine love and spiritual discipline framed within a fairy tale romance.",
          "opening_line": "Praise be to the Creator whose light illuminates every corner of the unseen universe.",
          "read_if": "You want to explore the mystical heritage of pre-modern Indian poetic literature."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 30,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Topi Shukla",
          "author": "Rahi Masoom Raza",
          "year": "1969",
          "genre": "Social Satire",
          "citation": "Raza, R. M. (1969). Topi Shukla. Rajkamal Prakashan.",
          "summary": "The unlikely friendship between a Hindu boy Topi and a Muslim boy Iffan in pre- and post-partition India.",
          "opening_line": "Topi Shukla and Iffan were two sides of the same coin minted by childhood innocence.",
          "read_if": "You want a deeply moving satire on friendship, cultural synthesis, and loneliness."
        },
        "classical": {
          "title": "Prithviraj Raso",
          "author": "Chand Bardai",
          "year": "12th Century",
          "genre": "Heroic Epic",
          "citation": "Bardai, C. (12th C.). Prithviraj Raso. Classical Heritage.",
          "summary": "The legendary heroic ballad celebrating the bravery and chivalry of King Prithviraj Chauhan.",
          "opening_line": "Four measures, twenty-four yards, eight fingers' breadth; do not miss, O Chauhan.",
          "read_if": "You want to taste the martial rhythm and courtly valor of medieval Indian epic poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 31,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Raag Darbari",
          "author": "Shrilal Shukla",
          "year": "1968",
          "genre": "Satire / Political Fiction",
          "citation": "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          "summary": "A scathing satire of post-independence rural politics through the eyes of a city youth in Shivpalganj.",
          "opening_line": "The road to Shivpalganj was dusty and winding, much like the nation's political landscape.",
          "read_if": "You want sharp, dark humor exposing the reality of grassroots power structures."
        },
        "classical": {
          "title": "Godaan",
          "author": "Premchand",
          "year": "1936",
          "genre": "Social Realism",
          "citation": "Premchand. (1936). Godaan. Saraswati Press.",
          "summary": "The tragic tale of Hori, a peasant whose simple wish to own a cow leads to spiritual and financial struggle.",
          "opening_line": "Hori tied the bullocks and told Dhania, 'Send Gobar to graze them, I must head to the village.'",
          "read_if": "You want to experience the defining masterpiece of Hindi social realism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 32,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Maila Anchal",
          "author": "Phanishwar Nath 'Renu'",
          "year": "1954",
          "genre": "Regional Realism",
          "citation": "Renu, P. N. (1954). Maila Anchal. Rajkamal Prakashan.",
          "summary": "Set in Meri Ganj in Bihar, capturing the raw beauty, myths, and political awakening of rural folk life.",
          "opening_line": "The dust of Meri Ganj rose into the summer air with the sound of a distant drum.",
          "read_if": "You want to immerse yourself in the rich folklore and authentic voice of Indian regional prose."
        },
        "classical": {
          "title": "Nirmala",
          "author": "Premchand",
          "year": "1927",
          "genre": "Social Drama",
          "citation": "Premchand. (1927). Nirmala. Chand Press.",
          "summary": "A poignant critique of the dowry system and mismatched marriages in early 20th-century India.",
          "opening_line": "Nirmala was sitting on the terrace watching the birds fly toward the setting sun.",
          "read_if": "You want a heartbreaking, psychological critique of patriarchal traditions."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 33,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kashi Ka Assi",
          "author": "Kashinath Singh",
          "year": "2002",
          "genre": "Urban Satire / Cultural Fiction",
          "citation": "Singh, K. (2002). Kashi Ka Assi. Rajkamal Prakashan.",
          "summary": "A lively, unfiltered chronicle of Varanasi's Assi Ghat, where tea stalls host debates on global geopolitics.",
          "opening_line": "At the tea stall on Assi Ghat, history was dissected before sunrise every morning.",
          "read_if": "You want an earthy, unfiltered portrait of Banaras culture and intellectual life."
        },
        "classical": {
          "title": "Gunahon Ka Devta",
          "author": "Dharamvir Bharati",
          "year": "1949",
          "genre": "Romantic Tragedy",
          "citation": "Bharati, D. (1949). Gunahon Ka Devta. Bharatiya Jnanpith.",
          "summary": "The eternal, heartbreaking love story of Chander and Sudha set against the backdrop of 1940s Allahabad.",
          "opening_line": "Allahabad in the monsoon has a peculiar nostalgia that softens every wounded memory.",
          "read_if": "You want to experience one of Hindi literature's most deeply felt romantic tragedies."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 34,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kitne Pakistan",
          "author": "Kamleshwar",
          "year": "2000",
          "genre": "Historical Allegory",
          "citation": "Kamleshwar. (2000). Kitne Pakistan. Rajpal & Sons.",
          "summary": "A metaphysical courtroom where historical figures from Gilgamesh to modern leaders face trial for partitions.",
          "opening_line": "In the court of conscience, time was paused and the map of humanity lay torn on the floor.",
          "read_if": "You seek a profound philosophical reflection on borders, communal violence, and human memory."
        },
        "classical": {
          "title": "Gaban",
          "author": "Premchand",
          "year": "1931",
          "genre": "Moral Drama",
          "citation": "Premchand. (1931). Gaban. Saraswati Press.",
          "summary": "Ramanath's obsession with appearances and jewellery leads him into embezzlement and ethical collapse.",
          "opening_line": "Ramanath was a gentle soul whose only weakness was the desire to appear wealthier than he was.",
          "read_if": "You want a classic character study on the perils of middle-class vanity."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 35,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Tamas",
          "author": "Bhisham Sahni",
          "year": "1973",
          "genre": "Historical Fiction",
          "citation": "Sahni, B. (1973). Tamas. Rajkamal Prakashan.",
          "summary": "A searing depiction of the riots leading up to the Partition of India in a Punjab town.",
          "opening_line": "The darkness before dawn in the narrow lanes carried a strange, menacing quiet.",
          "read_if": "You want an unsparing, humane look at the madness of communal frenzy and human resilience."
        },
        "classical": {
          "title": "Kamayani",
          "author": "Jaishankar Prasad",
          "year": "1936",
          "genre": "Epic Allegory",
          "citation": "Prasad, J. (1936). Kamayani. Bharati Bhandar.",
          "summary": "An allegorical retelling of Manu, Shraddha, and Ida exploring human evolution from instinct to wisdom.",
          "opening_line": "On the high peaks of the snowy Himalaya sat a solitary man looking at the vast flood.",
          "read_if": "You seek the zenith of modern Hindi philosophical and lyrical poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 36,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Aapka Banti",
          "author": "Mannu Bhandari",
          "year": "1971",
          "genre": "Psychological Realism",
          "citation": "Bhandari, M. (1971). Aapka Banti. Radhakrishna Prakashan.",
          "summary": "A sensitive exploration of a child's psychological trauma during his parents' bitter divorce.",
          "opening_line": "Banti stood at the gate, clutching his school bag and waiting for a voice he recognized.",
          "read_if": "You want a tender, heartbreaking portrait of modern Indian family breakdowns."
        },
        "classical": {
          "title": "Chandrakanta",
          "author": "Devaki Nandan Khatri",
          "year": "1888",
          "genre": "Fantasy / Mystery",
          "citation": "Khatri, D. N. (1888). Chandrakanta. Lahari Press.",
          "summary": "The legendary mystery of Tilism and Aiyyars involving the romance of Prince Birendra and Princess Chandrakanta.",
          "opening_line": "In the ancient forest of Chunargarh, the secret labyrinth guarded secrets of a thousand years.",
          "read_if": "You want to read the pioneer adventure novel that made thousands learn Hindi just to read it."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 37,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Shekhar: Ek Jivani",
          "author": "Agyeya (S. H. Vatsyayan)",
          "year": "1941",
          "genre": "Psychological / Modernist",
          "citation": "Agyeya. (1941). Shekhar: Ek Jivani. Saraswati Press.",
          "summary": "An introspective modernist masterpiece examining freedom, rebellion, and moral consciousness.",
          "opening_line": "From the condemned cell, looking back at life, childhood seemed like a series of defiant sparks.",
          "read_if": "You want an existential exploration of freedom, individuality, and existential rebellion."
        },
        "classical": {
          "title": "Sevasadan",
          "author": "Premchand",
          "year": "1918",
          "genre": "Social Reform",
          "citation": "Premchand. (1918). Sevasadan. Saraswati Press.",
          "summary": "The struggles of Suman, who is driven from marriage into the courtesan quarter and finds redemption in social service.",
          "opening_line": "Daroga Krishnachandra was honest by nature, but circumstances slowly eroded his resolve.",
          "read_if": "You want Premchand's breakthrough novel championing women's dignity and reform."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 38,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Ret Samadhi (Tomb of Sand)",
          "author": "Geetanjali Shree",
          "year": "2018",
          "genre": "Postmodern / International Booker Winner",
          "citation": "Shree, G. (2018). Ret Samadhi. Rajkamal Prakashan.",
          "summary": "An 80-year-old grandmother falls into depression after her husband's death, then reinvents herself and journeys back to Pakistan.",
          "opening_line": "Once you've got a back to the world, the world slips behind you into memory.",
          "read_if": "You appreciate experimental, poetic prose that transcends borders, age, and gender."
        },
        "classical": {
          "title": "Chitralekha",
          "author": "Bhagwati Charan Verma",
          "year": "1934",
          "genre": "Philosophical Realism",
          "citation": "Verma, B. C. (1934). Chitralekha. Leader Press.",
          "summary": "Two disciples seek the true meaning of virtue and sin by living among a hedonistic courtesan and an ascetic yogi.",
          "opening_line": "What is sin, and what is virtue? In the hermitage of Guru Ratnambar, the question echoed.",
          "read_if": "You want a captivating philosophical novel questioning moral dogmatism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 39,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Jhootha Sach",
          "author": "Yashpal",
          "year": "1958",
          "genre": "Epic Historical Realism",
          "citation": "Yashpal. (1958). Jhootha Sach. Viplav Prakashan.",
          "summary": "A two-volume monumental epic depicting Lahore and Delhi through the turmoil of Partition and nation-building.",
          "opening_line": "In the bustling Shah Almi Gate of Lahore, life flowed with the certainty of a perennial river.",
          "read_if": "You seek the grandest, most panoramic social novel on modern Indian history."
        },
        "classical": {
          "title": "Madhumalati",
          "author": "Mir Sayyid Manjhan",
          "year": "1545",
          "genre": "Sufi Romance / Avadhi",
          "citation": "Manjhan. (1545). Madhumalati. Classical Heritage.",
          "summary": "A mystical Sufi allegory of divine love and spiritual discipline framed within a fairy tale romance.",
          "opening_line": "Praise be to the Creator whose light illuminates every corner of the unseen universe.",
          "read_if": "You want to explore the mystical heritage of pre-modern Indian poetic literature."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 40,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Topi Shukla",
          "author": "Rahi Masoom Raza",
          "year": "1969",
          "genre": "Social Satire",
          "citation": "Raza, R. M. (1969). Topi Shukla. Rajkamal Prakashan.",
          "summary": "The unlikely friendship between a Hindu boy Topi and a Muslim boy Iffan in pre- and post-partition India.",
          "opening_line": "Topi Shukla and Iffan were two sides of the same coin minted by childhood innocence.",
          "read_if": "You want a deeply moving satire on friendship, cultural synthesis, and loneliness."
        },
        "classical": {
          "title": "Prithviraj Raso",
          "author": "Chand Bardai",
          "year": "12th Century",
          "genre": "Heroic Epic",
          "citation": "Bardai, C. (12th C.). Prithviraj Raso. Classical Heritage.",
          "summary": "The legendary heroic ballad celebrating the bravery and chivalry of King Prithviraj Chauhan.",
          "opening_line": "Four measures, twenty-four yards, eight fingers' breadth; do not miss, O Chauhan.",
          "read_if": "You want to taste the martial rhythm and courtly valor of medieval Indian epic poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 41,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Raag Darbari",
          "author": "Shrilal Shukla",
          "year": "1968",
          "genre": "Satire / Political Fiction",
          "citation": "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          "summary": "A scathing satire of post-independence rural politics through the eyes of a city youth in Shivpalganj.",
          "opening_line": "The road to Shivpalganj was dusty and winding, much like the nation's political landscape.",
          "read_if": "You want sharp, dark humor exposing the reality of grassroots power structures."
        },
        "classical": {
          "title": "Godaan",
          "author": "Premchand",
          "year": "1936",
          "genre": "Social Realism",
          "citation": "Premchand. (1936). Godaan. Saraswati Press.",
          "summary": "The tragic tale of Hori, a peasant whose simple wish to own a cow leads to spiritual and financial struggle.",
          "opening_line": "Hori tied the bullocks and told Dhania, 'Send Gobar to graze them, I must head to the village.'",
          "read_if": "You want to experience the defining masterpiece of Hindi social realism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 42,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Maila Anchal",
          "author": "Phanishwar Nath 'Renu'",
          "year": "1954",
          "genre": "Regional Realism",
          "citation": "Renu, P. N. (1954). Maila Anchal. Rajkamal Prakashan.",
          "summary": "Set in Meri Ganj in Bihar, capturing the raw beauty, myths, and political awakening of rural folk life.",
          "opening_line": "The dust of Meri Ganj rose into the summer air with the sound of a distant drum.",
          "read_if": "You want to immerse yourself in the rich folklore and authentic voice of Indian regional prose."
        },
        "classical": {
          "title": "Nirmala",
          "author": "Premchand",
          "year": "1927",
          "genre": "Social Drama",
          "citation": "Premchand. (1927). Nirmala. Chand Press.",
          "summary": "A poignant critique of the dowry system and mismatched marriages in early 20th-century India.",
          "opening_line": "Nirmala was sitting on the terrace watching the birds fly toward the setting sun.",
          "read_if": "You want a heartbreaking, psychological critique of patriarchal traditions."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 43,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kashi Ka Assi",
          "author": "Kashinath Singh",
          "year": "2002",
          "genre": "Urban Satire / Cultural Fiction",
          "citation": "Singh, K. (2002). Kashi Ka Assi. Rajkamal Prakashan.",
          "summary": "A lively, unfiltered chronicle of Varanasi's Assi Ghat, where tea stalls host debates on global geopolitics.",
          "opening_line": "At the tea stall on Assi Ghat, history was dissected before sunrise every morning.",
          "read_if": "You want an earthy, unfiltered portrait of Banaras culture and intellectual life."
        },
        "classical": {
          "title": "Gunahon Ka Devta",
          "author": "Dharamvir Bharati",
          "year": "1949",
          "genre": "Romantic Tragedy",
          "citation": "Bharati, D. (1949). Gunahon Ka Devta. Bharatiya Jnanpith.",
          "summary": "The eternal, heartbreaking love story of Chander and Sudha set against the backdrop of 1940s Allahabad.",
          "opening_line": "Allahabad in the monsoon has a peculiar nostalgia that softens every wounded memory.",
          "read_if": "You want to experience one of Hindi literature's most deeply felt romantic tragedies."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 44,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kitne Pakistan",
          "author": "Kamleshwar",
          "year": "2000",
          "genre": "Historical Allegory",
          "citation": "Kamleshwar. (2000). Kitne Pakistan. Rajpal & Sons.",
          "summary": "A metaphysical courtroom where historical figures from Gilgamesh to modern leaders face trial for partitions.",
          "opening_line": "In the court of conscience, time was paused and the map of humanity lay torn on the floor.",
          "read_if": "You seek a profound philosophical reflection on borders, communal violence, and human memory."
        },
        "classical": {
          "title": "Gaban",
          "author": "Premchand",
          "year": "1931",
          "genre": "Moral Drama",
          "citation": "Premchand. (1931). Gaban. Saraswati Press.",
          "summary": "Ramanath's obsession with appearances and jewellery leads him into embezzlement and ethical collapse.",
          "opening_line": "Ramanath was a gentle soul whose only weakness was the desire to appear wealthier than he was.",
          "read_if": "You want a classic character study on the perils of middle-class vanity."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 45,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Tamas",
          "author": "Bhisham Sahni",
          "year": "1973",
          "genre": "Historical Fiction",
          "citation": "Sahni, B. (1973). Tamas. Rajkamal Prakashan.",
          "summary": "A searing depiction of the riots leading up to the Partition of India in a Punjab town.",
          "opening_line": "The darkness before dawn in the narrow lanes carried a strange, menacing quiet.",
          "read_if": "You want an unsparing, humane look at the madness of communal frenzy and human resilience."
        },
        "classical": {
          "title": "Kamayani",
          "author": "Jaishankar Prasad",
          "year": "1936",
          "genre": "Epic Allegory",
          "citation": "Prasad, J. (1936). Kamayani. Bharati Bhandar.",
          "summary": "An allegorical retelling of Manu, Shraddha, and Ida exploring human evolution from instinct to wisdom.",
          "opening_line": "On the high peaks of the snowy Himalaya sat a solitary man looking at the vast flood.",
          "read_if": "You seek the zenith of modern Hindi philosophical and lyrical poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 46,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Aapka Banti",
          "author": "Mannu Bhandari",
          "year": "1971",
          "genre": "Psychological Realism",
          "citation": "Bhandari, M. (1971). Aapka Banti. Radhakrishna Prakashan.",
          "summary": "A sensitive exploration of a child's psychological trauma during his parents' bitter divorce.",
          "opening_line": "Banti stood at the gate, clutching his school bag and waiting for a voice he recognized.",
          "read_if": "You want a tender, heartbreaking portrait of modern Indian family breakdowns."
        },
        "classical": {
          "title": "Chandrakanta",
          "author": "Devaki Nandan Khatri",
          "year": "1888",
          "genre": "Fantasy / Mystery",
          "citation": "Khatri, D. N. (1888). Chandrakanta. Lahari Press.",
          "summary": "The legendary mystery of Tilism and Aiyyars involving the romance of Prince Birendra and Princess Chandrakanta.",
          "opening_line": "In the ancient forest of Chunargarh, the secret labyrinth guarded secrets of a thousand years.",
          "read_if": "You want to read the pioneer adventure novel that made thousands learn Hindi just to read it."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 47,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Shekhar: Ek Jivani",
          "author": "Agyeya (S. H. Vatsyayan)",
          "year": "1941",
          "genre": "Psychological / Modernist",
          "citation": "Agyeya. (1941). Shekhar: Ek Jivani. Saraswati Press.",
          "summary": "An introspective modernist masterpiece examining freedom, rebellion, and moral consciousness.",
          "opening_line": "From the condemned cell, looking back at life, childhood seemed like a series of defiant sparks.",
          "read_if": "You want an existential exploration of freedom, individuality, and existential rebellion."
        },
        "classical": {
          "title": "Sevasadan",
          "author": "Premchand",
          "year": "1918",
          "genre": "Social Reform",
          "citation": "Premchand. (1918). Sevasadan. Saraswati Press.",
          "summary": "The struggles of Suman, who is driven from marriage into the courtesan quarter and finds redemption in social service.",
          "opening_line": "Daroga Krishnachandra was honest by nature, but circumstances slowly eroded his resolve.",
          "read_if": "You want Premchand's breakthrough novel championing women's dignity and reform."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 48,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Ret Samadhi (Tomb of Sand)",
          "author": "Geetanjali Shree",
          "year": "2018",
          "genre": "Postmodern / International Booker Winner",
          "citation": "Shree, G. (2018). Ret Samadhi. Rajkamal Prakashan.",
          "summary": "An 80-year-old grandmother falls into depression after her husband's death, then reinvents herself and journeys back to Pakistan.",
          "opening_line": "Once you've got a back to the world, the world slips behind you into memory.",
          "read_if": "You appreciate experimental, poetic prose that transcends borders, age, and gender."
        },
        "classical": {
          "title": "Chitralekha",
          "author": "Bhagwati Charan Verma",
          "year": "1934",
          "genre": "Philosophical Realism",
          "citation": "Verma, B. C. (1934). Chitralekha. Leader Press.",
          "summary": "Two disciples seek the true meaning of virtue and sin by living among a hedonistic courtesan and an ascetic yogi.",
          "opening_line": "What is sin, and what is virtue? In the hermitage of Guru Ratnambar, the question echoed.",
          "read_if": "You want a captivating philosophical novel questioning moral dogmatism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 49,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Jhootha Sach",
          "author": "Yashpal",
          "year": "1958",
          "genre": "Epic Historical Realism",
          "citation": "Yashpal. (1958). Jhootha Sach. Viplav Prakashan.",
          "summary": "A two-volume monumental epic depicting Lahore and Delhi through the turmoil of Partition and nation-building.",
          "opening_line": "In the bustling Shah Almi Gate of Lahore, life flowed with the certainty of a perennial river.",
          "read_if": "You seek the grandest, most panoramic social novel on modern Indian history."
        },
        "classical": {
          "title": "Madhumalati",
          "author": "Mir Sayyid Manjhan",
          "year": "1545",
          "genre": "Sufi Romance / Avadhi",
          "citation": "Manjhan. (1545). Madhumalati. Classical Heritage.",
          "summary": "A mystical Sufi allegory of divine love and spiritual discipline framed within a fairy tale romance.",
          "opening_line": "Praise be to the Creator whose light illuminates every corner of the unseen universe.",
          "read_if": "You want to explore the mystical heritage of pre-modern Indian poetic literature."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 50,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Topi Shukla",
          "author": "Rahi Masoom Raza",
          "year": "1969",
          "genre": "Social Satire",
          "citation": "Raza, R. M. (1969). Topi Shukla. Rajkamal Prakashan.",
          "summary": "The unlikely friendship between a Hindu boy Topi and a Muslim boy Iffan in pre- and post-partition India.",
          "opening_line": "Topi Shukla and Iffan were two sides of the same coin minted by childhood innocence.",
          "read_if": "You want a deeply moving satire on friendship, cultural synthesis, and loneliness."
        },
        "classical": {
          "title": "Prithviraj Raso",
          "author": "Chand Bardai",
          "year": "12th Century",
          "genre": "Heroic Epic",
          "citation": "Bardai, C. (12th C.). Prithviraj Raso. Classical Heritage.",
          "summary": "The legendary heroic ballad celebrating the bravery and chivalry of King Prithviraj Chauhan.",
          "opening_line": "Four measures, twenty-four yards, eight fingers' breadth; do not miss, O Chauhan.",
          "read_if": "You want to taste the martial rhythm and courtly valor of medieval Indian epic poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 51,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Raag Darbari",
          "author": "Shrilal Shukla",
          "year": "1968",
          "genre": "Satire / Political Fiction",
          "citation": "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          "summary": "A scathing satire of post-independence rural politics through the eyes of a city youth in Shivpalganj.",
          "opening_line": "The road to Shivpalganj was dusty and winding, much like the nation's political landscape.",
          "read_if": "You want sharp, dark humor exposing the reality of grassroots power structures."
        },
        "classical": {
          "title": "Godaan",
          "author": "Premchand",
          "year": "1936",
          "genre": "Social Realism",
          "citation": "Premchand. (1936). Godaan. Saraswati Press.",
          "summary": "The tragic tale of Hori, a peasant whose simple wish to own a cow leads to spiritual and financial struggle.",
          "opening_line": "Hori tied the bullocks and told Dhania, 'Send Gobar to graze them, I must head to the village.'",
          "read_if": "You want to experience the defining masterpiece of Hindi social realism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 52,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Maila Anchal",
          "author": "Phanishwar Nath 'Renu'",
          "year": "1954",
          "genre": "Regional Realism",
          "citation": "Renu, P. N. (1954). Maila Anchal. Rajkamal Prakashan.",
          "summary": "Set in Meri Ganj in Bihar, capturing the raw beauty, myths, and political awakening of rural folk life.",
          "opening_line": "The dust of Meri Ganj rose into the summer air with the sound of a distant drum.",
          "read_if": "You want to immerse yourself in the rich folklore and authentic voice of Indian regional prose."
        },
        "classical": {
          "title": "Nirmala",
          "author": "Premchand",
          "year": "1927",
          "genre": "Social Drama",
          "citation": "Premchand. (1927). Nirmala. Chand Press.",
          "summary": "A poignant critique of the dowry system and mismatched marriages in early 20th-century India.",
          "opening_line": "Nirmala was sitting on the terrace watching the birds fly toward the setting sun.",
          "read_if": "You want a heartbreaking, psychological critique of patriarchal traditions."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 53,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kashi Ka Assi",
          "author": "Kashinath Singh",
          "year": "2002",
          "genre": "Urban Satire / Cultural Fiction",
          "citation": "Singh, K. (2002). Kashi Ka Assi. Rajkamal Prakashan.",
          "summary": "A lively, unfiltered chronicle of Varanasi's Assi Ghat, where tea stalls host debates on global geopolitics.",
          "opening_line": "At the tea stall on Assi Ghat, history was dissected before sunrise every morning.",
          "read_if": "You want an earthy, unfiltered portrait of Banaras culture and intellectual life."
        },
        "classical": {
          "title": "Gunahon Ka Devta",
          "author": "Dharamvir Bharati",
          "year": "1949",
          "genre": "Romantic Tragedy",
          "citation": "Bharati, D. (1949). Gunahon Ka Devta. Bharatiya Jnanpith.",
          "summary": "The eternal, heartbreaking love story of Chander and Sudha set against the backdrop of 1940s Allahabad.",
          "opening_line": "Allahabad in the monsoon has a peculiar nostalgia that softens every wounded memory.",
          "read_if": "You want to experience one of Hindi literature's most deeply felt romantic tragedies."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 54,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kitne Pakistan",
          "author": "Kamleshwar",
          "year": "2000",
          "genre": "Historical Allegory",
          "citation": "Kamleshwar. (2000). Kitne Pakistan. Rajpal & Sons.",
          "summary": "A metaphysical courtroom where historical figures from Gilgamesh to modern leaders face trial for partitions.",
          "opening_line": "In the court of conscience, time was paused and the map of humanity lay torn on the floor.",
          "read_if": "You seek a profound philosophical reflection on borders, communal violence, and human memory."
        },
        "classical": {
          "title": "Gaban",
          "author": "Premchand",
          "year": "1931",
          "genre": "Moral Drama",
          "citation": "Premchand. (1931). Gaban. Saraswati Press.",
          "summary": "Ramanath's obsession with appearances and jewellery leads him into embezzlement and ethical collapse.",
          "opening_line": "Ramanath was a gentle soul whose only weakness was the desire to appear wealthier than he was.",
          "read_if": "You want a classic character study on the perils of middle-class vanity."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 55,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Tamas",
          "author": "Bhisham Sahni",
          "year": "1973",
          "genre": "Historical Fiction",
          "citation": "Sahni, B. (1973). Tamas. Rajkamal Prakashan.",
          "summary": "A searing depiction of the riots leading up to the Partition of India in a Punjab town.",
          "opening_line": "The darkness before dawn in the narrow lanes carried a strange, menacing quiet.",
          "read_if": "You want an unsparing, humane look at the madness of communal frenzy and human resilience."
        },
        "classical": {
          "title": "Kamayani",
          "author": "Jaishankar Prasad",
          "year": "1936",
          "genre": "Epic Allegory",
          "citation": "Prasad, J. (1936). Kamayani. Bharati Bhandar.",
          "summary": "An allegorical retelling of Manu, Shraddha, and Ida exploring human evolution from instinct to wisdom.",
          "opening_line": "On the high peaks of the snowy Himalaya sat a solitary man looking at the vast flood.",
          "read_if": "You seek the zenith of modern Hindi philosophical and lyrical poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 56,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Aapka Banti",
          "author": "Mannu Bhandari",
          "year": "1971",
          "genre": "Psychological Realism",
          "citation": "Bhandari, M. (1971). Aapka Banti. Radhakrishna Prakashan.",
          "summary": "A sensitive exploration of a child's psychological trauma during his parents' bitter divorce.",
          "opening_line": "Banti stood at the gate, clutching his school bag and waiting for a voice he recognized.",
          "read_if": "You want a tender, heartbreaking portrait of modern Indian family breakdowns."
        },
        "classical": {
          "title": "Chandrakanta",
          "author": "Devaki Nandan Khatri",
          "year": "1888",
          "genre": "Fantasy / Mystery",
          "citation": "Khatri, D. N. (1888). Chandrakanta. Lahari Press.",
          "summary": "The legendary mystery of Tilism and Aiyyars involving the romance of Prince Birendra and Princess Chandrakanta.",
          "opening_line": "In the ancient forest of Chunargarh, the secret labyrinth guarded secrets of a thousand years.",
          "read_if": "You want to read the pioneer adventure novel that made thousands learn Hindi just to read it."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 57,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Shekhar: Ek Jivani",
          "author": "Agyeya (S. H. Vatsyayan)",
          "year": "1941",
          "genre": "Psychological / Modernist",
          "citation": "Agyeya. (1941). Shekhar: Ek Jivani. Saraswati Press.",
          "summary": "An introspective modernist masterpiece examining freedom, rebellion, and moral consciousness.",
          "opening_line": "From the condemned cell, looking back at life, childhood seemed like a series of defiant sparks.",
          "read_if": "You want an existential exploration of freedom, individuality, and existential rebellion."
        },
        "classical": {
          "title": "Sevasadan",
          "author": "Premchand",
          "year": "1918",
          "genre": "Social Reform",
          "citation": "Premchand. (1918). Sevasadan. Saraswati Press.",
          "summary": "The struggles of Suman, who is driven from marriage into the courtesan quarter and finds redemption in social service.",
          "opening_line": "Daroga Krishnachandra was honest by nature, but circumstances slowly eroded his resolve.",
          "read_if": "You want Premchand's breakthrough novel championing women's dignity and reform."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 58,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Ret Samadhi (Tomb of Sand)",
          "author": "Geetanjali Shree",
          "year": "2018",
          "genre": "Postmodern / International Booker Winner",
          "citation": "Shree, G. (2018). Ret Samadhi. Rajkamal Prakashan.",
          "summary": "An 80-year-old grandmother falls into depression after her husband's death, then reinvents herself and journeys back to Pakistan.",
          "opening_line": "Once you've got a back to the world, the world slips behind you into memory.",
          "read_if": "You appreciate experimental, poetic prose that transcends borders, age, and gender."
        },
        "classical": {
          "title": "Chitralekha",
          "author": "Bhagwati Charan Verma",
          "year": "1934",
          "genre": "Philosophical Realism",
          "citation": "Verma, B. C. (1934). Chitralekha. Leader Press.",
          "summary": "Two disciples seek the true meaning of virtue and sin by living among a hedonistic courtesan and an ascetic yogi.",
          "opening_line": "What is sin, and what is virtue? In the hermitage of Guru Ratnambar, the question echoed.",
          "read_if": "You want a captivating philosophical novel questioning moral dogmatism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 59,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Jhootha Sach",
          "author": "Yashpal",
          "year": "1958",
          "genre": "Epic Historical Realism",
          "citation": "Yashpal. (1958). Jhootha Sach. Viplav Prakashan.",
          "summary": "A two-volume monumental epic depicting Lahore and Delhi through the turmoil of Partition and nation-building.",
          "opening_line": "In the bustling Shah Almi Gate of Lahore, life flowed with the certainty of a perennial river.",
          "read_if": "You seek the grandest, most panoramic social novel on modern Indian history."
        },
        "classical": {
          "title": "Madhumalati",
          "author": "Mir Sayyid Manjhan",
          "year": "1545",
          "genre": "Sufi Romance / Avadhi",
          "citation": "Manjhan. (1545). Madhumalati. Classical Heritage.",
          "summary": "A mystical Sufi allegory of divine love and spiritual discipline framed within a fairy tale romance.",
          "opening_line": "Praise be to the Creator whose light illuminates every corner of the unseen universe.",
          "read_if": "You want to explore the mystical heritage of pre-modern Indian poetic literature."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 60,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Topi Shukla",
          "author": "Rahi Masoom Raza",
          "year": "1969",
          "genre": "Social Satire",
          "citation": "Raza, R. M. (1969). Topi Shukla. Rajkamal Prakashan.",
          "summary": "The unlikely friendship between a Hindu boy Topi and a Muslim boy Iffan in pre- and post-partition India.",
          "opening_line": "Topi Shukla and Iffan were two sides of the same coin minted by childhood innocence.",
          "read_if": "You want a deeply moving satire on friendship, cultural synthesis, and loneliness."
        },
        "classical": {
          "title": "Prithviraj Raso",
          "author": "Chand Bardai",
          "year": "12th Century",
          "genre": "Heroic Epic",
          "citation": "Bardai, C. (12th C.). Prithviraj Raso. Classical Heritage.",
          "summary": "The legendary heroic ballad celebrating the bravery and chivalry of King Prithviraj Chauhan.",
          "opening_line": "Four measures, twenty-four yards, eight fingers' breadth; do not miss, O Chauhan.",
          "read_if": "You want to taste the martial rhythm and courtly valor of medieval Indian epic poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 61,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Raag Darbari",
          "author": "Shrilal Shukla",
          "year": "1968",
          "genre": "Satire / Political Fiction",
          "citation": "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          "summary": "A scathing satire of post-independence rural politics through the eyes of a city youth in Shivpalganj.",
          "opening_line": "The road to Shivpalganj was dusty and winding, much like the nation's political landscape.",
          "read_if": "You want sharp, dark humor exposing the reality of grassroots power structures."
        },
        "classical": {
          "title": "Godaan",
          "author": "Premchand",
          "year": "1936",
          "genre": "Social Realism",
          "citation": "Premchand. (1936). Godaan. Saraswati Press.",
          "summary": "The tragic tale of Hori, a peasant whose simple wish to own a cow leads to spiritual and financial struggle.",
          "opening_line": "Hori tied the bullocks and told Dhania, 'Send Gobar to graze them, I must head to the village.'",
          "read_if": "You want to experience the defining masterpiece of Hindi social realism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 62,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Maila Anchal",
          "author": "Phanishwar Nath 'Renu'",
          "year": "1954",
          "genre": "Regional Realism",
          "citation": "Renu, P. N. (1954). Maila Anchal. Rajkamal Prakashan.",
          "summary": "Set in Meri Ganj in Bihar, capturing the raw beauty, myths, and political awakening of rural folk life.",
          "opening_line": "The dust of Meri Ganj rose into the summer air with the sound of a distant drum.",
          "read_if": "You want to immerse yourself in the rich folklore and authentic voice of Indian regional prose."
        },
        "classical": {
          "title": "Nirmala",
          "author": "Premchand",
          "year": "1927",
          "genre": "Social Drama",
          "citation": "Premchand. (1927). Nirmala. Chand Press.",
          "summary": "A poignant critique of the dowry system and mismatched marriages in early 20th-century India.",
          "opening_line": "Nirmala was sitting on the terrace watching the birds fly toward the setting sun.",
          "read_if": "You want a heartbreaking, psychological critique of patriarchal traditions."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 63,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kashi Ka Assi",
          "author": "Kashinath Singh",
          "year": "2002",
          "genre": "Urban Satire / Cultural Fiction",
          "citation": "Singh, K. (2002). Kashi Ka Assi. Rajkamal Prakashan.",
          "summary": "A lively, unfiltered chronicle of Varanasi's Assi Ghat, where tea stalls host debates on global geopolitics.",
          "opening_line": "At the tea stall on Assi Ghat, history was dissected before sunrise every morning.",
          "read_if": "You want an earthy, unfiltered portrait of Banaras culture and intellectual life."
        },
        "classical": {
          "title": "Gunahon Ka Devta",
          "author": "Dharamvir Bharati",
          "year": "1949",
          "genre": "Romantic Tragedy",
          "citation": "Bharati, D. (1949). Gunahon Ka Devta. Bharatiya Jnanpith.",
          "summary": "The eternal, heartbreaking love story of Chander and Sudha set against the backdrop of 1940s Allahabad.",
          "opening_line": "Allahabad in the monsoon has a peculiar nostalgia that softens every wounded memory.",
          "read_if": "You want to experience one of Hindi literature's most deeply felt romantic tragedies."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 64,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kitne Pakistan",
          "author": "Kamleshwar",
          "year": "2000",
          "genre": "Historical Allegory",
          "citation": "Kamleshwar. (2000). Kitne Pakistan. Rajpal & Sons.",
          "summary": "A metaphysical courtroom where historical figures from Gilgamesh to modern leaders face trial for partitions.",
          "opening_line": "In the court of conscience, time was paused and the map of humanity lay torn on the floor.",
          "read_if": "You seek a profound philosophical reflection on borders, communal violence, and human memory."
        },
        "classical": {
          "title": "Gaban",
          "author": "Premchand",
          "year": "1931",
          "genre": "Moral Drama",
          "citation": "Premchand. (1931). Gaban. Saraswati Press.",
          "summary": "Ramanath's obsession with appearances and jewellery leads him into embezzlement and ethical collapse.",
          "opening_line": "Ramanath was a gentle soul whose only weakness was the desire to appear wealthier than he was.",
          "read_if": "You want a classic character study on the perils of middle-class vanity."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 65,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Tamas",
          "author": "Bhisham Sahni",
          "year": "1973",
          "genre": "Historical Fiction",
          "citation": "Sahni, B. (1973). Tamas. Rajkamal Prakashan.",
          "summary": "A searing depiction of the riots leading up to the Partition of India in a Punjab town.",
          "opening_line": "The darkness before dawn in the narrow lanes carried a strange, menacing quiet.",
          "read_if": "You want an unsparing, humane look at the madness of communal frenzy and human resilience."
        },
        "classical": {
          "title": "Kamayani",
          "author": "Jaishankar Prasad",
          "year": "1936",
          "genre": "Epic Allegory",
          "citation": "Prasad, J. (1936). Kamayani. Bharati Bhandar.",
          "summary": "An allegorical retelling of Manu, Shraddha, and Ida exploring human evolution from instinct to wisdom.",
          "opening_line": "On the high peaks of the snowy Himalaya sat a solitary man looking at the vast flood.",
          "read_if": "You seek the zenith of modern Hindi philosophical and lyrical poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 66,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Aapka Banti",
          "author": "Mannu Bhandari",
          "year": "1971",
          "genre": "Psychological Realism",
          "citation": "Bhandari, M. (1971). Aapka Banti. Radhakrishna Prakashan.",
          "summary": "A sensitive exploration of a child's psychological trauma during his parents' bitter divorce.",
          "opening_line": "Banti stood at the gate, clutching his school bag and waiting for a voice he recognized.",
          "read_if": "You want a tender, heartbreaking portrait of modern Indian family breakdowns."
        },
        "classical": {
          "title": "Chandrakanta",
          "author": "Devaki Nandan Khatri",
          "year": "1888",
          "genre": "Fantasy / Mystery",
          "citation": "Khatri, D. N. (1888). Chandrakanta. Lahari Press.",
          "summary": "The legendary mystery of Tilism and Aiyyars involving the romance of Prince Birendra and Princess Chandrakanta.",
          "opening_line": "In the ancient forest of Chunargarh, the secret labyrinth guarded secrets of a thousand years.",
          "read_if": "You want to read the pioneer adventure novel that made thousands learn Hindi just to read it."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 67,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Shekhar: Ek Jivani",
          "author": "Agyeya (S. H. Vatsyayan)",
          "year": "1941",
          "genre": "Psychological / Modernist",
          "citation": "Agyeya. (1941). Shekhar: Ek Jivani. Saraswati Press.",
          "summary": "An introspective modernist masterpiece examining freedom, rebellion, and moral consciousness.",
          "opening_line": "From the condemned cell, looking back at life, childhood seemed like a series of defiant sparks.",
          "read_if": "You want an existential exploration of freedom, individuality, and existential rebellion."
        },
        "classical": {
          "title": "Sevasadan",
          "author": "Premchand",
          "year": "1918",
          "genre": "Social Reform",
          "citation": "Premchand. (1918). Sevasadan. Saraswati Press.",
          "summary": "The struggles of Suman, who is driven from marriage into the courtesan quarter and finds redemption in social service.",
          "opening_line": "Daroga Krishnachandra was honest by nature, but circumstances slowly eroded his resolve.",
          "read_if": "You want Premchand's breakthrough novel championing women's dignity and reform."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 68,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Ret Samadhi (Tomb of Sand)",
          "author": "Geetanjali Shree",
          "year": "2018",
          "genre": "Postmodern / International Booker Winner",
          "citation": "Shree, G. (2018). Ret Samadhi. Rajkamal Prakashan.",
          "summary": "An 80-year-old grandmother falls into depression after her husband's death, then reinvents herself and journeys back to Pakistan.",
          "opening_line": "Once you've got a back to the world, the world slips behind you into memory.",
          "read_if": "You appreciate experimental, poetic prose that transcends borders, age, and gender."
        },
        "classical": {
          "title": "Chitralekha",
          "author": "Bhagwati Charan Verma",
          "year": "1934",
          "genre": "Philosophical Realism",
          "citation": "Verma, B. C. (1934). Chitralekha. Leader Press.",
          "summary": "Two disciples seek the true meaning of virtue and sin by living among a hedonistic courtesan and an ascetic yogi.",
          "opening_line": "What is sin, and what is virtue? In the hermitage of Guru Ratnambar, the question echoed.",
          "read_if": "You want a captivating philosophical novel questioning moral dogmatism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 69,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Jhootha Sach",
          "author": "Yashpal",
          "year": "1958",
          "genre": "Epic Historical Realism",
          "citation": "Yashpal. (1958). Jhootha Sach. Viplav Prakashan.",
          "summary": "A two-volume monumental epic depicting Lahore and Delhi through the turmoil of Partition and nation-building.",
          "opening_line": "In the bustling Shah Almi Gate of Lahore, life flowed with the certainty of a perennial river.",
          "read_if": "You seek the grandest, most panoramic social novel on modern Indian history."
        },
        "classical": {
          "title": "Madhumalati",
          "author": "Mir Sayyid Manjhan",
          "year": "1545",
          "genre": "Sufi Romance / Avadhi",
          "citation": "Manjhan. (1545). Madhumalati. Classical Heritage.",
          "summary": "A mystical Sufi allegory of divine love and spiritual discipline framed within a fairy tale romance.",
          "opening_line": "Praise be to the Creator whose light illuminates every corner of the unseen universe.",
          "read_if": "You want to explore the mystical heritage of pre-modern Indian poetic literature."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 70,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Topi Shukla",
          "author": "Rahi Masoom Raza",
          "year": "1969",
          "genre": "Social Satire",
          "citation": "Raza, R. M. (1969). Topi Shukla. Rajkamal Prakashan.",
          "summary": "The unlikely friendship between a Hindu boy Topi and a Muslim boy Iffan in pre- and post-partition India.",
          "opening_line": "Topi Shukla and Iffan were two sides of the same coin minted by childhood innocence.",
          "read_if": "You want a deeply moving satire on friendship, cultural synthesis, and loneliness."
        },
        "classical": {
          "title": "Prithviraj Raso",
          "author": "Chand Bardai",
          "year": "12th Century",
          "genre": "Heroic Epic",
          "citation": "Bardai, C. (12th C.). Prithviraj Raso. Classical Heritage.",
          "summary": "The legendary heroic ballad celebrating the bravery and chivalry of King Prithviraj Chauhan.",
          "opening_line": "Four measures, twenty-four yards, eight fingers' breadth; do not miss, O Chauhan.",
          "read_if": "You want to taste the martial rhythm and courtly valor of medieval Indian epic poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 71,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Raag Darbari",
          "author": "Shrilal Shukla",
          "year": "1968",
          "genre": "Satire / Political Fiction",
          "citation": "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          "summary": "A scathing satire of post-independence rural politics through the eyes of a city youth in Shivpalganj.",
          "opening_line": "The road to Shivpalganj was dusty and winding, much like the nation's political landscape.",
          "read_if": "You want sharp, dark humor exposing the reality of grassroots power structures."
        },
        "classical": {
          "title": "Godaan",
          "author": "Premchand",
          "year": "1936",
          "genre": "Social Realism",
          "citation": "Premchand. (1936). Godaan. Saraswati Press.",
          "summary": "The tragic tale of Hori, a peasant whose simple wish to own a cow leads to spiritual and financial struggle.",
          "opening_line": "Hori tied the bullocks and told Dhania, 'Send Gobar to graze them, I must head to the village.'",
          "read_if": "You want to experience the defining masterpiece of Hindi social realism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 72,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Maila Anchal",
          "author": "Phanishwar Nath 'Renu'",
          "year": "1954",
          "genre": "Regional Realism",
          "citation": "Renu, P. N. (1954). Maila Anchal. Rajkamal Prakashan.",
          "summary": "Set in Meri Ganj in Bihar, capturing the raw beauty, myths, and political awakening of rural folk life.",
          "opening_line": "The dust of Meri Ganj rose into the summer air with the sound of a distant drum.",
          "read_if": "You want to immerse yourself in the rich folklore and authentic voice of Indian regional prose."
        },
        "classical": {
          "title": "Nirmala",
          "author": "Premchand",
          "year": "1927",
          "genre": "Social Drama",
          "citation": "Premchand. (1927). Nirmala. Chand Press.",
          "summary": "A poignant critique of the dowry system and mismatched marriages in early 20th-century India.",
          "opening_line": "Nirmala was sitting on the terrace watching the birds fly toward the setting sun.",
          "read_if": "You want a heartbreaking, psychological critique of patriarchal traditions."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 73,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kashi Ka Assi",
          "author": "Kashinath Singh",
          "year": "2002",
          "genre": "Urban Satire / Cultural Fiction",
          "citation": "Singh, K. (2002). Kashi Ka Assi. Rajkamal Prakashan.",
          "summary": "A lively, unfiltered chronicle of Varanasi's Assi Ghat, where tea stalls host debates on global geopolitics.",
          "opening_line": "At the tea stall on Assi Ghat, history was dissected before sunrise every morning.",
          "read_if": "You want an earthy, unfiltered portrait of Banaras culture and intellectual life."
        },
        "classical": {
          "title": "Gunahon Ka Devta",
          "author": "Dharamvir Bharati",
          "year": "1949",
          "genre": "Romantic Tragedy",
          "citation": "Bharati, D. (1949). Gunahon Ka Devta. Bharatiya Jnanpith.",
          "summary": "The eternal, heartbreaking love story of Chander and Sudha set against the backdrop of 1940s Allahabad.",
          "opening_line": "Allahabad in the monsoon has a peculiar nostalgia that softens every wounded memory.",
          "read_if": "You want to experience one of Hindi literature's most deeply felt romantic tragedies."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 74,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kitne Pakistan",
          "author": "Kamleshwar",
          "year": "2000",
          "genre": "Historical Allegory",
          "citation": "Kamleshwar. (2000). Kitne Pakistan. Rajpal & Sons.",
          "summary": "A metaphysical courtroom where historical figures from Gilgamesh to modern leaders face trial for partitions.",
          "opening_line": "In the court of conscience, time was paused and the map of humanity lay torn on the floor.",
          "read_if": "You seek a profound philosophical reflection on borders, communal violence, and human memory."
        },
        "classical": {
          "title": "Gaban",
          "author": "Premchand",
          "year": "1931",
          "genre": "Moral Drama",
          "citation": "Premchand. (1931). Gaban. Saraswati Press.",
          "summary": "Ramanath's obsession with appearances and jewellery leads him into embezzlement and ethical collapse.",
          "opening_line": "Ramanath was a gentle soul whose only weakness was the desire to appear wealthier than he was.",
          "read_if": "You want a classic character study on the perils of middle-class vanity."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 75,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Tamas",
          "author": "Bhisham Sahni",
          "year": "1973",
          "genre": "Historical Fiction",
          "citation": "Sahni, B. (1973). Tamas. Rajkamal Prakashan.",
          "summary": "A searing depiction of the riots leading up to the Partition of India in a Punjab town.",
          "opening_line": "The darkness before dawn in the narrow lanes carried a strange, menacing quiet.",
          "read_if": "You want an unsparing, humane look at the madness of communal frenzy and human resilience."
        },
        "classical": {
          "title": "Kamayani",
          "author": "Jaishankar Prasad",
          "year": "1936",
          "genre": "Epic Allegory",
          "citation": "Prasad, J. (1936). Kamayani. Bharati Bhandar.",
          "summary": "An allegorical retelling of Manu, Shraddha, and Ida exploring human evolution from instinct to wisdom.",
          "opening_line": "On the high peaks of the snowy Himalaya sat a solitary man looking at the vast flood.",
          "read_if": "You seek the zenith of modern Hindi philosophical and lyrical poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 76,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Aapka Banti",
          "author": "Mannu Bhandari",
          "year": "1971",
          "genre": "Psychological Realism",
          "citation": "Bhandari, M. (1971). Aapka Banti. Radhakrishna Prakashan.",
          "summary": "A sensitive exploration of a child's psychological trauma during his parents' bitter divorce.",
          "opening_line": "Banti stood at the gate, clutching his school bag and waiting for a voice he recognized.",
          "read_if": "You want a tender, heartbreaking portrait of modern Indian family breakdowns."
        },
        "classical": {
          "title": "Chandrakanta",
          "author": "Devaki Nandan Khatri",
          "year": "1888",
          "genre": "Fantasy / Mystery",
          "citation": "Khatri, D. N. (1888). Chandrakanta. Lahari Press.",
          "summary": "The legendary mystery of Tilism and Aiyyars involving the romance of Prince Birendra and Princess Chandrakanta.",
          "opening_line": "In the ancient forest of Chunargarh, the secret labyrinth guarded secrets of a thousand years.",
          "read_if": "You want to read the pioneer adventure novel that made thousands learn Hindi just to read it."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 77,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Shekhar: Ek Jivani",
          "author": "Agyeya (S. H. Vatsyayan)",
          "year": "1941",
          "genre": "Psychological / Modernist",
          "citation": "Agyeya. (1941). Shekhar: Ek Jivani. Saraswati Press.",
          "summary": "An introspective modernist masterpiece examining freedom, rebellion, and moral consciousness.",
          "opening_line": "From the condemned cell, looking back at life, childhood seemed like a series of defiant sparks.",
          "read_if": "You want an existential exploration of freedom, individuality, and existential rebellion."
        },
        "classical": {
          "title": "Sevasadan",
          "author": "Premchand",
          "year": "1918",
          "genre": "Social Reform",
          "citation": "Premchand. (1918). Sevasadan. Saraswati Press.",
          "summary": "The struggles of Suman, who is driven from marriage into the courtesan quarter and finds redemption in social service.",
          "opening_line": "Daroga Krishnachandra was honest by nature, but circumstances slowly eroded his resolve.",
          "read_if": "You want Premchand's breakthrough novel championing women's dignity and reform."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 78,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Ret Samadhi (Tomb of Sand)",
          "author": "Geetanjali Shree",
          "year": "2018",
          "genre": "Postmodern / International Booker Winner",
          "citation": "Shree, G. (2018). Ret Samadhi. Rajkamal Prakashan.",
          "summary": "An 80-year-old grandmother falls into depression after her husband's death, then reinvents herself and journeys back to Pakistan.",
          "opening_line": "Once you've got a back to the world, the world slips behind you into memory.",
          "read_if": "You appreciate experimental, poetic prose that transcends borders, age, and gender."
        },
        "classical": {
          "title": "Chitralekha",
          "author": "Bhagwati Charan Verma",
          "year": "1934",
          "genre": "Philosophical Realism",
          "citation": "Verma, B. C. (1934). Chitralekha. Leader Press.",
          "summary": "Two disciples seek the true meaning of virtue and sin by living among a hedonistic courtesan and an ascetic yogi.",
          "opening_line": "What is sin, and what is virtue? In the hermitage of Guru Ratnambar, the question echoed.",
          "read_if": "You want a captivating philosophical novel questioning moral dogmatism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 79,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Jhootha Sach",
          "author": "Yashpal",
          "year": "1958",
          "genre": "Epic Historical Realism",
          "citation": "Yashpal. (1958). Jhootha Sach. Viplav Prakashan.",
          "summary": "A two-volume monumental epic depicting Lahore and Delhi through the turmoil of Partition and nation-building.",
          "opening_line": "In the bustling Shah Almi Gate of Lahore, life flowed with the certainty of a perennial river.",
          "read_if": "You seek the grandest, most panoramic social novel on modern Indian history."
        },
        "classical": {
          "title": "Madhumalati",
          "author": "Mir Sayyid Manjhan",
          "year": "1545",
          "genre": "Sufi Romance / Avadhi",
          "citation": "Manjhan. (1545). Madhumalati. Classical Heritage.",
          "summary": "A mystical Sufi allegory of divine love and spiritual discipline framed within a fairy tale romance.",
          "opening_line": "Praise be to the Creator whose light illuminates every corner of the unseen universe.",
          "read_if": "You want to explore the mystical heritage of pre-modern Indian poetic literature."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 80,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Topi Shukla",
          "author": "Rahi Masoom Raza",
          "year": "1969",
          "genre": "Social Satire",
          "citation": "Raza, R. M. (1969). Topi Shukla. Rajkamal Prakashan.",
          "summary": "The unlikely friendship between a Hindu boy Topi and a Muslim boy Iffan in pre- and post-partition India.",
          "opening_line": "Topi Shukla and Iffan were two sides of the same coin minted by childhood innocence.",
          "read_if": "You want a deeply moving satire on friendship, cultural synthesis, and loneliness."
        },
        "classical": {
          "title": "Prithviraj Raso",
          "author": "Chand Bardai",
          "year": "12th Century",
          "genre": "Heroic Epic",
          "citation": "Bardai, C. (12th C.). Prithviraj Raso. Classical Heritage.",
          "summary": "The legendary heroic ballad celebrating the bravery and chivalry of King Prithviraj Chauhan.",
          "opening_line": "Four measures, twenty-four yards, eight fingers' breadth; do not miss, O Chauhan.",
          "read_if": "You want to taste the martial rhythm and courtly valor of medieval Indian epic poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 81,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Raag Darbari",
          "author": "Shrilal Shukla",
          "year": "1968",
          "genre": "Satire / Political Fiction",
          "citation": "Shukla, S. (1968). Raag Darbari. Rajkamal Prakashan.",
          "summary": "A scathing satire of post-independence rural politics through the eyes of a city youth in Shivpalganj.",
          "opening_line": "The road to Shivpalganj was dusty and winding, much like the nation's political landscape.",
          "read_if": "You want sharp, dark humor exposing the reality of grassroots power structures."
        },
        "classical": {
          "title": "Godaan",
          "author": "Premchand",
          "year": "1936",
          "genre": "Social Realism",
          "citation": "Premchand. (1936). Godaan. Saraswati Press.",
          "summary": "The tragic tale of Hori, a peasant whose simple wish to own a cow leads to spiritual and financial struggle.",
          "opening_line": "Hori tied the bullocks and told Dhania, 'Send Gobar to graze them, I must head to the village.'",
          "read_if": "You want to experience the defining masterpiece of Hindi social realism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 82,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Maila Anchal",
          "author": "Phanishwar Nath 'Renu'",
          "year": "1954",
          "genre": "Regional Realism",
          "citation": "Renu, P. N. (1954). Maila Anchal. Rajkamal Prakashan.",
          "summary": "Set in Meri Ganj in Bihar, capturing the raw beauty, myths, and political awakening of rural folk life.",
          "opening_line": "The dust of Meri Ganj rose into the summer air with the sound of a distant drum.",
          "read_if": "You want to immerse yourself in the rich folklore and authentic voice of Indian regional prose."
        },
        "classical": {
          "title": "Nirmala",
          "author": "Premchand",
          "year": "1927",
          "genre": "Social Drama",
          "citation": "Premchand. (1927). Nirmala. Chand Press.",
          "summary": "A poignant critique of the dowry system and mismatched marriages in early 20th-century India.",
          "opening_line": "Nirmala was sitting on the terrace watching the birds fly toward the setting sun.",
          "read_if": "You want a heartbreaking, psychological critique of patriarchal traditions."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 83,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kashi Ka Assi",
          "author": "Kashinath Singh",
          "year": "2002",
          "genre": "Urban Satire / Cultural Fiction",
          "citation": "Singh, K. (2002). Kashi Ka Assi. Rajkamal Prakashan.",
          "summary": "A lively, unfiltered chronicle of Varanasi's Assi Ghat, where tea stalls host debates on global geopolitics.",
          "opening_line": "At the tea stall on Assi Ghat, history was dissected before sunrise every morning.",
          "read_if": "You want an earthy, unfiltered portrait of Banaras culture and intellectual life."
        },
        "classical": {
          "title": "Gunahon Ka Devta",
          "author": "Dharamvir Bharati",
          "year": "1949",
          "genre": "Romantic Tragedy",
          "citation": "Bharati, D. (1949). Gunahon Ka Devta. Bharatiya Jnanpith.",
          "summary": "The eternal, heartbreaking love story of Chander and Sudha set against the backdrop of 1940s Allahabad.",
          "opening_line": "Allahabad in the monsoon has a peculiar nostalgia that softens every wounded memory.",
          "read_if": "You want to experience one of Hindi literature's most deeply felt romantic tragedies."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 84,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Kitne Pakistan",
          "author": "Kamleshwar",
          "year": "2000",
          "genre": "Historical Allegory",
          "citation": "Kamleshwar. (2000). Kitne Pakistan. Rajpal & Sons.",
          "summary": "A metaphysical courtroom where historical figures from Gilgamesh to modern leaders face trial for partitions.",
          "opening_line": "In the court of conscience, time was paused and the map of humanity lay torn on the floor.",
          "read_if": "You seek a profound philosophical reflection on borders, communal violence, and human memory."
        },
        "classical": {
          "title": "Gaban",
          "author": "Premchand",
          "year": "1931",
          "genre": "Moral Drama",
          "citation": "Premchand. (1931). Gaban. Saraswati Press.",
          "summary": "Ramanath's obsession with appearances and jewellery leads him into embezzlement and ethical collapse.",
          "opening_line": "Ramanath was a gentle soul whose only weakness was the desire to appear wealthier than he was.",
          "read_if": "You want a classic character study on the perils of middle-class vanity."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 85,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Tamas",
          "author": "Bhisham Sahni",
          "year": "1973",
          "genre": "Historical Fiction",
          "citation": "Sahni, B. (1973). Tamas. Rajkamal Prakashan.",
          "summary": "A searing depiction of the riots leading up to the Partition of India in a Punjab town.",
          "opening_line": "The darkness before dawn in the narrow lanes carried a strange, menacing quiet.",
          "read_if": "You want an unsparing, humane look at the madness of communal frenzy and human resilience."
        },
        "classical": {
          "title": "Kamayani",
          "author": "Jaishankar Prasad",
          "year": "1936",
          "genre": "Epic Allegory",
          "citation": "Prasad, J. (1936). Kamayani. Bharati Bhandar.",
          "summary": "An allegorical retelling of Manu, Shraddha, and Ida exploring human evolution from instinct to wisdom.",
          "opening_line": "On the high peaks of the snowy Himalaya sat a solitary man looking at the vast flood.",
          "read_if": "You seek the zenith of modern Hindi philosophical and lyrical poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 86,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Aapka Banti",
          "author": "Mannu Bhandari",
          "year": "1971",
          "genre": "Psychological Realism",
          "citation": "Bhandari, M. (1971). Aapka Banti. Radhakrishna Prakashan.",
          "summary": "A sensitive exploration of a child's psychological trauma during his parents' bitter divorce.",
          "opening_line": "Banti stood at the gate, clutching his school bag and waiting for a voice he recognized.",
          "read_if": "You want a tender, heartbreaking portrait of modern Indian family breakdowns."
        },
        "classical": {
          "title": "Chandrakanta",
          "author": "Devaki Nandan Khatri",
          "year": "1888",
          "genre": "Fantasy / Mystery",
          "citation": "Khatri, D. N. (1888). Chandrakanta. Lahari Press.",
          "summary": "The legendary mystery of Tilism and Aiyyars involving the romance of Prince Birendra and Princess Chandrakanta.",
          "opening_line": "In the ancient forest of Chunargarh, the secret labyrinth guarded secrets of a thousand years.",
          "read_if": "You want to read the pioneer adventure novel that made thousands learn Hindi just to read it."
        }
      },
      "english": {
        "contemporary": {
          "title": "The God of Small Things",
          "author": "Arundhati Roy",
          "year": "1997",
          "genre": "Literary Fiction",
          "citation": "Roy, A. (1997). The God of Small Things. Flamingo.",
          "summary": "Set in Kerala, twins Rahel and Estha navigate forbidden love, caste politics, and tragedy.",
          "opening_line": "May in Ayemenem is a hot, brooding month.",
          "read_if": "You appreciate poetic, evocative prose unravelling the human cost of social hierarchies."
        },
        "classical": {
          "title": "1984",
          "author": "George Orwell",
          "year": "1949",
          "genre": "Dystopian / Political",
          "citation": "Orwell, G. (1949). 1984. Secker & Warburg.",
          "summary": "A chilling warning against totalitarian surveillance and thought control in a dystopian future.",
          "opening_line": "It was a bright cold day in April, and the clocks were striking thirteen.",
          "read_if": "You want to understand the psychological mechanisms of authoritarian control and propaganda."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  },
  {
    "dayIndex": 87,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Shekhar: Ek Jivani",
          "author": "Agyeya (S. H. Vatsyayan)",
          "year": "1941",
          "genre": "Psychological / Modernist",
          "citation": "Agyeya. (1941). Shekhar: Ek Jivani. Saraswati Press.",
          "summary": "An introspective modernist masterpiece examining freedom, rebellion, and moral consciousness.",
          "opening_line": "From the condemned cell, looking back at life, childhood seemed like a series of defiant sparks.",
          "read_if": "You want an existential exploration of freedom, individuality, and existential rebellion."
        },
        "classical": {
          "title": "Sevasadan",
          "author": "Premchand",
          "year": "1918",
          "genre": "Social Reform",
          "citation": "Premchand. (1918). Sevasadan. Saraswati Press.",
          "summary": "The struggles of Suman, who is driven from marriage into the courtesan quarter and finds redemption in social service.",
          "opening_line": "Daroga Krishnachandra was honest by nature, but circumstances slowly eroded his resolve.",
          "read_if": "You want Premchand's breakthrough novel championing women's dignity and reform."
        }
      },
      "english": {
        "contemporary": {
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "year": "1981",
          "genre": "Magical Realism",
          "citation": "Rushdie, S. (1981). Midnight's Children. Jonathan Cape.",
          "summary": "Children born at the stroke of midnight on August 15, 1947 possess telepathic powers mirroring India's destiny.",
          "opening_line": "I was born in the city of Bombay... once upon a time.",
          "read_if": "You love exuberant, myth-laced storytelling capturing the epic birth of a nation."
        },
        "classical": {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": "1813",
          "genre": "Romantic Satire",
          "citation": "Austen, J. (1813). Pride and Prejudice. T. Egerton.",
          "summary": "Elizabeth Bennet and Mr. Darcy navigate pride, prejudice, class, and mutual misunderstanding.",
          "opening_line": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          "read_if": "You enjoy timeless wit, sharp social comedy, and nuanced character development."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Yayati",
          "author": "V. S. Khandekar",
          "year": "1959",
          "genre": "Marathi / Mythological Realism",
          "citation": "Khandekar, V. S. (1959). Yayati. Continental Prakashan.",
          "summary": "King Yayati borrows his son's youth to pursue endless pleasure, discovering that desire cannot be quenched by indulgence.",
          "opening_line": "Desire is like a fire; the more butter you pour on it, the brighter it burns.",
          "read_if": "You seek a profound Jnanpith-winning psychological allegory on human craving."
        },
        "classical": {
          "title": "Gora",
          "author": "Rabindranath Tagore",
          "year": "1909",
          "genre": "Bengali / Philosophical Epic",
          "citation": "Tagore, R. (1909). Gora. Indian Press.",
          "summary": "Gora, an orthodox Hindu nationalist, undergoes a spiritual crisis upon discovering the secret of his birth.",
          "opening_line": "The rainy season had come to an end, and Calcutta was bathed in the crisp autumn sun.",
          "read_if": "You want Tagore's magnum opus on identity, religion, and inclusive humanism."
        }
      },
      "world": {
        "contemporary": {
          "title": "Blindness",
          "author": "José Saramago",
          "year": "1995",
          "genre": "Allegorical Fiction",
          "citation": "Saramago, J. (1995). Ensaio sobre a cegueira. Editorial Caminho.",
          "summary": "A city is struck by an epidemic of white blindness, exposing the fragility of civilization.",
          "opening_line": "The amber light had already come on when the first man at the intersection realized he could see nothing.",
          "read_if": "You want a gripping, philosophical parable on social breakdown and moral sight."
        },
        "classical": {
          "title": "Anna Karenina",
          "author": "Leo Tolstoy",
          "year": "1877",
          "genre": "Psychological Realism",
          "citation": "Tolstoy, L. (1877). Anna Karenina. The Russian Messenger.",
          "summary": "Anna's passionate affair with Count Vronsky contrasts with Levin's quest for spiritual meaning on his estate.",
          "opening_line": "All happy families are alike; each unhappy family is unhappy in its own way.",
          "read_if": "You want the greatest novel ever written on love, marriage, and human morality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "Gitanjali (Song Offerings)",
          "author": "Rabindranath Tagore",
          "year": "1912",
          "genre": "Spiritual Poetry / Nobel Prize Winner",
          "citation": "Tagore, R. (1912). Gitanjali. India Society.",
          "summary": "Devotional poems of transcendent beauty capturing the intimate bond between the human soul and the Divine.",
          "opening_line": "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
          "read_if": "You seek mystical lyrics that uplift the heart into universal love and peace."
        },
        "classical": {
          "title": "Tao Te Ching",
          "author": "Laozi (Classical Translation)",
          "year": "4th Century BCE",
          "genre": "Chinese Philosophy / Taoism",
          "citation": "Laozi. (4th C. BCE). Tao Te Ching. Classical Heritage.",
          "summary": "81 verses expounding the Tao (the Way) and the art of Wu Wei (effortless non-contriving action).",
          "opening_line": "The Tao that can be spoken is not the eternal Tao; The name that can be named is not the eternal name.",
          "read_if": "You want to discover the power of yielding water, humility, and natural harmony."
        }
      }
    }
  },
  {
    "dayIndex": 88,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Ret Samadhi (Tomb of Sand)",
          "author": "Geetanjali Shree",
          "year": "2018",
          "genre": "Postmodern / International Booker Winner",
          "citation": "Shree, G. (2018). Ret Samadhi. Rajkamal Prakashan.",
          "summary": "An 80-year-old grandmother falls into depression after her husband's death, then reinvents herself and journeys back to Pakistan.",
          "opening_line": "Once you've got a back to the world, the world slips behind you into memory.",
          "read_if": "You appreciate experimental, poetic prose that transcends borders, age, and gender."
        },
        "classical": {
          "title": "Chitralekha",
          "author": "Bhagwati Charan Verma",
          "year": "1934",
          "genre": "Philosophical Realism",
          "citation": "Verma, B. C. (1934). Chitralekha. Leader Press.",
          "summary": "Two disciples seek the true meaning of virtue and sin by living among a hedonistic courtesan and an ascetic yogi.",
          "opening_line": "What is sin, and what is virtue? In the hermitage of Guru Ratnambar, the question echoed.",
          "read_if": "You want a captivating philosophical novel questioning moral dogmatism."
        }
      },
      "english": {
        "contemporary": {
          "title": "The Shadow Lines",
          "author": "Amitav Ghosh",
          "year": "1988",
          "genre": "Historical Fiction",
          "citation": "Ghosh, A. (1988). The Shadow Lines. Ravi Dayal.",
          "summary": "A lyrical exploration of memory, borders, and communal identity between Calcutta, Dhaka, and London.",
          "opening_line": "In 1939, thirteen years before I was born, my father's aunt Mayadebi went to England.",
          "read_if": "You want a philosophical meditation on how national borders are merely shadow lines of the mind."
        },
        "classical": {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": "1960",
          "genre": "Legal Drama / Southern Gothic",
          "citation": "Lee, H. (1960). To Kill a Mockingbird. J. B. Lippincott & Co.",
          "summary": "Atticus Finch defends an innocent Black man in 1930s Alabama, as seen through the innocent eyes of his daughter Scout.",
          "opening_line": "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
          "read_if": "You want a timeless lesson on moral integrity, empathy, and social courage."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Aarachar (Hangwoman)",
          "author": "K. R. Meera",
          "year": "2012",
          "genre": "Malayalam / Feminist Epic",
          "citation": "Meera, K. R. (2012). Aarachar. DC Books.",
          "summary": "Chetna Grddha Mullick becomes India's first female executioner, wrestling with media spectacle and ancient lineage.",
          "opening_line": "My father used to say that killing a man is an art, but waiting to kill him is a religion.",
          "read_if": "You want a ferocious, gripping epic of female power and mortality."
        },
        "classical": {
          "title": "Pather Panchali",
          "author": "Bibhutibhushan Bandyopadhyay",
          "year": "1929",
          "genre": "Bengali / Lyrical Realism",
          "citation": "Bandyopadhyay, B. (1929). Pather Panchali. Sajanikanta Das.",
          "summary": "The innocent childhood adventures of Apu and his sister Durga in the idyllic Bengal countryside.",
          "opening_line": "In the quiet village of Nischindipur, the afternoon sun cast long shadows over the bamboo groves.",
          "read_if": "You want a masterpiece of nature, innocent wonder, and pastoral beauty."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": "1988",
          "genre": "Philosophical Fable",
          "citation": "Coelho, P. (1988). O Alquimista. Editora Rocco.",
          "summary": "Santiago, an Andalusian shepherd boy, journeys to the Egyptian pyramids in search of his Personal Legend.",
          "opening_line": "The boy's name was Santiago. Dusk was falling as the boy arrived with his herd at an abandoned church.",
          "read_if": "You want an uplifting, universal fable on listening to your heart and following omens."
        },
        "classical": {
          "title": "The Odyssey",
          "author": "Homer (English Trans.)",
          "year": "8th Century BCE",
          "genre": "Ancient Greek Epic",
          "citation": "Homer. (8th C. BCE). The Odyssey. Classical Antiquity.",
          "summary": "Odysseus's ten-year perilous voyage home to Ithaca after the fall of Troy.",
          "opening_line": "Sing to me of the man, Muse, the man of twists and turns driven time and again off course.",
          "read_if": "You want the bedrock narrative of adventure, perseverance, and home."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Masnavi",
          "author": "Jalal al-Din Rumi (Trans. Nicholson/Barks)",
          "year": "1258",
          "genre": "Sufi Wisdom Poetry / Persian",
          "citation": "Rumi, J. (13th C.). Masnavi-i Ma'navi. Classical Heritage.",
          "summary": "The spiritual bible of Persian poetry weaving parables, ecstatic love, and Sufi insight.",
          "opening_line": "Listen to the reed flute as it tells its story, mourning the separation from its reed-bed.",
          "read_if": "You want ecstatic poetry that opens the heart to divine longing and universal oneness."
        },
        "classical": {
          "title": "The Republic",
          "author": "Plato (English Trans.)",
          "year": "375 BCE",
          "genre": "Classical Greek Philosophy",
          "citation": "Plato. (375 BCE). The Republic. Classical Antiquity.",
          "summary": "Socrates examines justice, the philosopher-king, and the famous Allegory of the Cave.",
          "opening_line": "I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
          "read_if": "You want to explore the foundation stone of Western political philosophy and epistemology."
        }
      }
    }
  },
  {
    "dayIndex": 89,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Jhootha Sach",
          "author": "Yashpal",
          "year": "1958",
          "genre": "Epic Historical Realism",
          "citation": "Yashpal. (1958). Jhootha Sach. Viplav Prakashan.",
          "summary": "A two-volume monumental epic depicting Lahore and Delhi through the turmoil of Partition and nation-building.",
          "opening_line": "In the bustling Shah Almi Gate of Lahore, life flowed with the certainty of a perennial river.",
          "read_if": "You seek the grandest, most panoramic social novel on modern Indian history."
        },
        "classical": {
          "title": "Madhumalati",
          "author": "Mir Sayyid Manjhan",
          "year": "1545",
          "genre": "Sufi Romance / Avadhi",
          "citation": "Manjhan. (1545). Madhumalati. Classical Heritage.",
          "summary": "A mystical Sufi allegory of divine love and spiritual discipline framed within a fairy tale romance.",
          "opening_line": "Praise be to the Creator whose light illuminates every corner of the unseen universe.",
          "read_if": "You want to explore the mystical heritage of pre-modern Indian poetic literature."
        }
      },
      "english": {
        "contemporary": {
          "title": "A Fine Balance",
          "author": "Rohinton Mistry",
          "year": "1995",
          "genre": "Historical Realism",
          "citation": "Mistry, R. (1995). A Fine Balance. McClelland & Stewart.",
          "summary": "Four disparate strangers share a cramped apartment during the 1975 Emergency in India.",
          "opening_line": "The morning express gorged with passengers slowed to a crawl outside the metropolis.",
          "read_if": "You want an unforgettable, deeply compassionate saga of human friendship enduring state cruelty."
        },
        "classical": {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": "1925",
          "genre": "Tragedy / Jazz Age",
          "citation": "Fitzgerald, F. S. (1925). The Great Gatsby. Charles Scribner's Sons.",
          "summary": "Jay Gatsby's desperate pursuit of the past and the elusive green light of Daisy Buchanan.",
          "opening_line": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
          "read_if": "You want prose that glows with poetic brilliance while dismantling the illusion of material dreams."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "The Legends of Khasak",
          "author": "O. V. Vijayan",
          "year": "1969",
          "genre": "Malayalam / Magical Realism",
          "citation": "Vijayan, O. V. (1969). Khasakkinte Itihasam. Current Books.",
          "summary": "Ravi leaves university to teach in Khasak, encountering a tapestry of spirits, guilt, and rebirth.",
          "opening_line": "The bus reached the terminal, its old engine letting out a final, dusty sigh.",
          "read_if": "You seek a mystical, deeply philosophical journey through rural Kerala."
        },
        "classical": {
          "title": "Chokher Bali",
          "author": "Rabindranath Tagore",
          "year": "1903",
          "genre": "Bengali / Psychological Realism",
          "citation": "Tagore, R. (1903). Chokher Bali. Adi Brahmo Samaj Press.",
          "summary": "A psychological study of desire and female autonomy focusing on Binodini, an educated widow.",
          "opening_line": "Mahendra's mother, Rajlakshmi, was constantly worried about her son's marriage.",
          "read_if": "You want one of India's earliest modern novels critiquing social taboos on widows."
        }
      },
      "world": {
        "contemporary": {
          "title": "One Hundred Years of Solitude",
          "author": "Gabriel García Márquez",
          "year": "1967",
          "genre": "Latin American / Magical Realism",
          "citation": "Márquez, G. G. (1967). Cien años de soledad. Editorial Sudamericana.",
          "summary": "The multi-generational saga of the Buendía family in Macondo where the miraculous is ordinary.",
          "opening_line": "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
          "read_if": "You want the definitive Latin American masterpiece on time, memory, and solitude."
        },
        "classical": {
          "title": "The Metamorphosis",
          "author": "Franz Kafka",
          "year": "1915",
          "genre": "Absurdist / Existential",
          "citation": "Kafka, F. (1915). Die Verwandlung. Kurt Wolff Verlag.",
          "summary": "Gregor Samsa wakes transformed into a giant insect, forcing his family to confront modern alienation.",
          "opening_line": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
          "read_if": "You want to reflect on modern alienation and the fragile conditional nature of social worth."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Rubaiyat of Omar Khayyam",
          "author": "Omar Khayyam (Trans. Edward FitzGerald)",
          "year": "1859",
          "genre": "Persian Poetry / Heritage",
          "citation": "Khayyam, O. (1859). The Rubaiyat. Bernard Quaritch.",
          "summary": "Timeless Persian quatrains celebrating mindfulness, wine, love, and the transience of existence.",
          "opening_line": "Awake! for Morning in the Bowl of Night Has flung the Stone that puts the Stars to Flight.",
          "read_if": "You seek epicurean verses celebrating the sacred beauty of the present moment."
        },
        "classical": {
          "title": "The Bhagavad Gita",
          "author": "Vyasa (Classical Translation)",
          "year": "2nd Century BCE",
          "genre": "Philosophical Dialogue / Sanskrit",
          "citation": "Vyasa. (2nd C. BCE). The Bhagavad Gita. Classical Heritage.",
          "summary": "Krishna's battlefield discourse to Arjuna on duty, selfless action (Nishkama Karma), and ultimate reality.",
          "opening_line": "On the holy field of Kurukshetra, assembled together desiring to fight, what did my people and the Pandavas do, O Sanjaya?",
          "read_if": "You want the perennial guide to selfless action and spiritual clarity in moments of crisis."
        }
      }
    }
  },
  {
    "dayIndex": 90,
    "tabs": {
      "hindi": {
        "contemporary": {
          "title": "Topi Shukla",
          "author": "Rahi Masoom Raza",
          "year": "1969",
          "genre": "Social Satire",
          "citation": "Raza, R. M. (1969). Topi Shukla. Rajkamal Prakashan.",
          "summary": "The unlikely friendship between a Hindu boy Topi and a Muslim boy Iffan in pre- and post-partition India.",
          "opening_line": "Topi Shukla and Iffan were two sides of the same coin minted by childhood innocence.",
          "read_if": "You want a deeply moving satire on friendship, cultural synthesis, and loneliness."
        },
        "classical": {
          "title": "Prithviraj Raso",
          "author": "Chand Bardai",
          "year": "12th Century",
          "genre": "Heroic Epic",
          "citation": "Bardai, C. (12th C.). Prithviraj Raso. Classical Heritage.",
          "summary": "The legendary heroic ballad celebrating the bravery and chivalry of King Prithviraj Chauhan.",
          "opening_line": "Four measures, twenty-four yards, eight fingers' breadth; do not miss, O Chauhan.",
          "read_if": "You want to taste the martial rhythm and courtly valor of medieval Indian epic poetry."
        }
      },
      "english": {
        "contemporary": {
          "title": "The White Tiger",
          "author": "Aravind Adiga",
          "year": "2008",
          "genre": "Picaresque / Dark Comedy",
          "citation": "Adiga, A. (2008). The White Tiger. Free Press.",
          "summary": "Balram Halwai's darkly humorous letters recount his escape from the poverty of the 'Darkness' to entrepreneurial success.",
          "opening_line": "Neither you nor I speak English, but there are some things that can be said only in English.",
          "read_if": "You want a razor-sharp, satirical indictment of modern India's economic divides."
        },
        "classical": {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky (English Trans.)",
          "year": "1866",
          "genre": "Psychological Thriller",
          "citation": "Dostoevsky, F. (1866). Crime and Punishment. The Russian Messenger.",
          "summary": "Raskolnikov murders a pawnbroker to prove his superiority, only to be consumed by conscience and guilt.",
          "opening_line": "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged.",
          "read_if": "You want a supreme psychological inquiry into the limits of moral rationalization."
        }
      },
      "indian_regional": {
        "contemporary": {
          "title": "Samskara",
          "author": "U. R. Ananthamurthy",
          "year": "1965",
          "genre": "Kannada / Existentialist Realism",
          "citation": "Ananthamurthy, U. R. (1965). Samskara. Akshara Prakashana.",
          "summary": "When a rebellious Brahmin dies, the orthodox community is paralyzed over who may perform his death rites.",
          "opening_line": "Praneshacharya sat in the front yard of his house, deeply troubled by the dead man's silence.",
          "read_if": "You want a profound philosophical critique of orthodoxy and existential rebirth."
        },
        "classical": {
          "title": "Chemmeen",
          "author": "Thakazhi Sivasankara Pillai",
          "year": "1956",
          "genre": "Malayalam / Tragic Romance",
          "citation": "Pillai, T. S. (1956). Chemmeen. Sahitya Pravarthaka Co-operative.",
          "summary": "The legendary romance of Karuthamma and Pareekutty bound by the mythical wrath of the Sea Goddess.",
          "opening_line": "The sea was calm, but the fishermen knew that beneath the blue stillness lay the ancient law of the deep.",
          "read_if": "You want a lyrical seaside epic woven with folklore, duty, and tragic love."
        }
      },
      "world": {
        "contemporary": {
          "title": "The Stranger (L'Étranger)",
          "author": "Albert Camus",
          "year": "1942",
          "genre": "Existential / Absurdist",
          "citation": "Camus, A. (1942). L'Étranger. Gallimard.",
          "summary": "Meursault's emotional detachment culminates in a murder under the scorching sun on an Algerian beach.",
          "opening_line": "Mother died today. Or maybe yesterday, I don't know.",
          "read_if": "You want to engage with the foundational text of existential absurdity and authenticity."
        },
        "classical": {
          "title": "Don Quixote",
          "author": "Miguel de Cervantes",
          "year": "1605",
          "genre": "Picaresque / Satire",
          "citation": "Cervantes, M. (1605). Don Quixote. Francisco de Robles.",
          "summary": "An aging nobleman sets out with his squire Sancho Panza to revive chivalry in an indifferent world.",
          "opening_line": "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen.",
          "read_if": "You want the founding pillar of Western fiction celebrating idealism against reality."
        }
      },
      "classical_heritage": {
        "contemporary": {
          "title": "The Prophet",
          "author": "Kahlil Gibran",
          "year": "1923",
          "genre": "Poetic Philosophy",
          "citation": "Gibran, K. (1923). The Prophet. Alfred A. Knopf.",
          "summary": "Almustafa offers timeless meditations on love, marriage, sorrow, freedom, and death before departing Orphalese.",
          "opening_line": "Almustafa, the chosen and the beloved, had waited twelve years in the city of Orphalese for his ship that was to return.",
          "read_if": "You want luminous, gentle wisdom on the deepest questions of human living."
        },
        "classical": {
          "title": "The Dhammapada",
          "author": "Gautama Buddha (Canonical Compilation)",
          "year": "3rd Century BCE",
          "genre": "Buddhist Wisdom Verses / Pali",
          "citation": "Buddha, G. (3rd C. BCE). Dhammapada. Pali Canon.",
          "summary": "A collection of 423 aphorisms summarizing the Buddha's practical path to mental mastery and liberation.",
          "opening_line": "Mind precedes all mental states. Mind is their chief; they are all mind-wrought.",
          "read_if": "You want direct, clear guidance on conquering mental conditioning and finding peace."
        }
      }
    }
  }
];
