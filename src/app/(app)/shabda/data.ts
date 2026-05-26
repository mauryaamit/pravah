export interface WordOfDay {
  word: string;
  pronunciation: string;   // IPA
  part_of_speech: string;  // "noun", "verb", "adjective"
  meaning: string;         // Full meaning
  etymology: string;       // Word origin story
  usage_sentence: string;  // Example sentence
  synonyms: string[];      // 3-5 synonyms
}

export interface PhraseOfDay {
  phrase: string;
  meaning: string;
  origin: string;
  usage: string;
}

export interface FancyWord {
  word: string;
  pronunciation: string;
  meaning: string;
  why_it_exists: string;   // Etymology / fascinating origin
  usage: string;
}

export interface GenZTerm {
  term: string;
  meaning: string;
  origin: string;          // Where it came from
  example: string;
  note: string;            // Brief linguist's note
}

export const WORDS_OF_DAY: WordOfDay[] = [
  {
    word: "Sonder",
    pronunciation: "/ˈsɒn.dər/",
    part_of_speech: "noun",
    meaning: "The realization that each random passerby is living a life as vivid and complex as your own.",
    etymology: "Coined in 2012 by John Koenig in 'The Dictionary of Obscure Sorrows', derived from German or French 'sonder' (to probe/fathom).",
    usage_sentence: "Sitting on the train, a sudden wave of sonder hit him: every stranger checking their phone had their own deep tragedies and triumphs.",
    synonyms: ["empathy", "interconnection", "realization", "awareness"]
  },
  {
    word: "Petrichor",
    pronunciation: "/ˈpɛt.rɪ.kɔːr/",
    part_of_speech: "noun",
    meaning: "A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.",
    etymology: "Coined in 1964 by Australian researchers Isabel Bear and Richard Thomas, from Greek 'petra' (stone) and 'ichor' (the fluid that flows in the veins of the gods).",
    usage_sentence: "She opened the window to let in the fresh petrichor as the first heavy summer rain hit the parched soil.",
    synonyms: ["earthy scent", "rain fragrance", "earth-smell"]
  },
  {
    word: "Hiraeth",
    pronunciation: "/ˈhɪərɑːð/",
    part_of_speech: "noun",
    meaning: "A homesickness for a home to which you cannot return, a home which maybe never was, or the nostalgia for lost places.",
    etymology: "From the Welsh language, combining elements of longing, regret, and nostalgia. It has no direct single-word equivalent in English.",
    usage_sentence: "Looking at old family albums from a town that had since been flooded for a reservoir, he felt a deep, incurable hiraeth.",
    synonyms: ["nostalgia", "homesickness", "yearning", "melancholy"]
  },
  {
    word: "Ephemeral",
    pronunciation: "/ɪˈfɛm.ər.əl/",
    part_of_speech: "adjective",
    meaning: "Lasting for a very short time; transient.",
    etymology: "From Greek 'ephemeros', meaning 'lasting only a day', from 'epi' (upon) + 'hemera' (day). Originally used in medical contexts for brief fevers.",
    usage_sentence: "The beauty of the cherry blossoms is famously ephemeral, lasting only a couple of weeks before scattering in the wind.",
    synonyms: ["transitory", "fleeting", "evanescent", "temporary"]
  },
  {
    word: "Serendipity",
    pronunciation: "/ˌsɛr.ənˈdɪp.ɪ.ti/",
    part_of_speech: "noun",
    meaning: "The occurrence of valuable or agreeable events by chance in a happy or beneficial way.",
    etymology: "Coined by Horace Walpole in 1754, inspired by the Persian fairy tale 'The Three Princes of Serendip' (an old name for Sri Lanka), whose heroes were always making discoveries by accident.",
    usage_sentence: "Finding her favorite out-of-print novel in a tiny free library on the corner was a delightful stroke of serendipity.",
    synonyms: ["fluke", "happy accident", "providence", "coincidence"]
  },
  {
    word: "Susurrus",
    pronunciation: "/suːˈsɜː.rəs/",
    part_of_speech: "noun",
    meaning: "A whispering, murmuring, or rustling sound.",
    etymology: "Directly from Latin 'susurrus' (a hum, whisper, or murmur), which itself is an onomatopoeic word imitating the sound of whispering.",
    usage_sentence: "The gentle susurrus of the autumn leaves in the evening breeze lulled her to sleep.",
    synonyms: ["whisper", "murmur", "rustle", "soughing"]
  },
  {
    word: "Vellichor",
    pronunciation: "/ˈvɛl.ɪ.kɔːr/",
    part_of_speech: "noun",
    meaning: "The strange wistfulness of used bookstores, which are somehow infused with the passage of time.",
    etymology: "Coined by John Koenig in 'The Dictionary of Obscure Sorrows', combining Latin 'vellum' (parchment) and Greek 'ichor' (fluid of the gods).",
    usage_sentence: "Stepping into the basement bookshop, he breathed in the vellichor of thousands of old paperbacks waiting on shelves.",
    synonyms: ["nostalgia", "book-yearning", "old-book smell"]
  },
  {
    word: "Liminal",
    pronunciation: "/ˈlɪm.ɪ.nəl/",
    part_of_speech: "adjective",
    meaning: "Relating to a transitional or initial stage of a process; occupying a position at, or on both sides of, a boundary or threshold.",
    etymology: "From Latin 'limen', meaning 'threshold'. Popularized in anthropology to describe the middle stage of rites of passage.",
    usage_sentence: "The hour just before dawn feels liminal — a quiet boundary space where the night has ended but the day has not yet begun.",
    synonyms: ["transitional", "intermediate", "threshold", "in-between"]
  },
  {
    word: "Solipsism",
    pronunciation: "/ˈsɒl.ɪp.sɪ.z(ə)m/",
    part_of_speech: "noun",
    meaning: "The philosophical theory that only the self exists, or can be proved to exist; extreme egocentrism.",
    etymology: "From Latin 'solus' (alone) + 'ipse' (self). Coined in the 17th century to describe the radical skepticism of Cartesian philosophy.",
    usage_sentence: "His absolute refusal to consider how his actions hurt others bordered on moral solipsism.",
    synonyms: ["egocentricity", "selfishness", "individualism"]
  },
  {
    word: "Apophenia",
    pronunciation: "/ˌæp.əˈfiː.ni.ə/",
    part_of_speech: "noun",
    meaning: "The tendency to perceive meaningful connections or patterns between unrelated or random things.",
    etymology: "Coined in 1958 by German neurologist Klaus Conrad, from Greek 'apophainein' (to show/declare), describing the early stages of delusional thinking.",
    usage_sentence: "Seeing a face in the electrical outlet is a harmless instance of visual apophenia.",
    synonyms: ["patternicity", "illusion", "delusion"]
  },
  {
    word: "Mellifluous",
    pronunciation: "/mɛˈlɪf.lu.əs/",
    part_of_speech: "adjective",
    meaning: "Sweet or musical; pleasant to hear (typically of a voice or words).",
    etymology: "From Latin 'mellifluus', from 'mel' (honey) + 'fluere' (to flow) — literally, flowing like honey.",
    usage_sentence: "The singer's mellifluous tones filled the auditorium, captivating the audience instantly.",
    synonyms: ["dulcet", "euphonious", "sweet-sounding", "lyrical"]
  },
  {
    word: "Limerence",
    pronunciation: "/ˈlɪm.ər.əns/",
    part_of_speech: "noun",
    meaning: "The state of being infatuated or obsessed with another person, typically experienced involuntarily and characterized by a strong desire for reciprocation.",
    etymology: "Coined by psychologist Dorothy Tennov in 1979 in her book 'Love and Limerence' as a scientific term for romantic infatuation.",
    usage_sentence: "He realized his feelings weren't mature love but rather a state of limerence, fueled by his own imagination.",
    synonyms: ["infatuation", "crush", "obsession", "passion"]
  },
  {
    word: "Defenestration",
    pronunciation: "/ˌdiː.fɛn.ɪˈstreɪ.ʃən/",
    part_of_speech: "noun",
    meaning: "The action of throwing someone out of a window.",
    etymology: "From Latin 'de-' (down from) + 'fenestra' (window). Historically associated with the Defenestrations of Prague in 1618, which triggered the Thirty Years' War.",
    usage_sentence: "The meeting deteriorated so rapidly that we joked about the risk of literal defenestration.",
    synonyms: ["ejection", "expulsion", "ouster"]
  },
  {
    word: "Ethereal",
    pronunciation: "/iˈθɪə.ri.əl/",
    part_of_speech: "adjective",
    meaning: "Extremely delicate and light in a way that seems too perfect for this world; heavenly.",
    etymology: "From Greek 'aitherios' (high in the air, celestial), from 'aither' (pure upper air/ether).",
    usage_sentence: "The morning fog rolling over the quiet lake gave the landscape an ethereal, dreamlike quality.",
    synonyms: ["celestial", "heavenly", "exquisite", "delicate"]
  },
  {
    word: "Halcyon",
    pronunciation: "/ˈhæl.si.ən/",
    part_of_speech: "adjective",
    meaning: "Denoting a period of time in the past that was idyllically happy and peaceful.",
    etymology: "From Greek 'alkuon' (kingfisher). Ancient Greeks believed the kingfisher bird laid eggs in a nest on the sea during winter, and calmed the waves during this period ('halcyon days').",
    usage_sentence: "She looked back fondly on the halcyon days of her university years, before the stresses of career took over.",
    synonyms: ["serene", "idyllic", "tranquil", "peaceful"]
  },
  {
    word: "Ineffable",
    pronunciation: "/ɪnˈɛf.ə.bəl/",
    part_of_speech: "adjective",
    meaning: "Too great or extreme to be expressed or described in words.",
    etymology: "From Latin 'ineffabilis', from 'in-' (not) + 'effabilis' (speakable), from 'effari' (to utter).",
    usage_sentence: "Standing at the edge of the Grand Canyon, he was struck by a sense of ineffable wonder.",
    synonyms: ["indescribable", "unutterable", "beyond words", "overwhelming"]
  },
  {
    word: "Nefarious",
    pronunciation: "/nɪˈfeə.ri.əs/",
    part_of_speech: "adjective",
    meaning: "Wicked, villainous, or criminal (typically of an action or activity).",
    etymology: "From Latin 'nefarius', from 'nefas' (wrong/sin), from 'ne-' (not) + 'fas' (divine law).",
    usage_sentence: "The hacker had nefarious intentions, attempting to lock down the city's power grid.",
    synonyms: ["wicked", "evil", "sinister", "heinous"]
  },
  {
    word: "Sempiternal",
    pronunciation: "/ˌsɛm.pɪˈtɜː.nəl/",
    part_of_speech: "adjective",
    meaning: "Everlasting; eternal and unchanging.",
    etymology: "From Latin 'sempiternus', from 'semper' (always) + 'aeternus' (eternal).",
    usage_sentence: "The mountains stood in sempiternal silence, unchanged by the generations of men below.",
    synonyms: ["eternal", "infinite", "everlasting", "perpetual"]
  },
  {
    word: "Tessellate",
    pronunciation: "/ˈtɛs.əl.eɪt/",
    part_of_speech: "verb",
    meaning: "Decorate (a floor or wall) with mosaics; fit together in a close repeating pattern without gaps or overlaps.",
    etymology: "From Latin 'tessellatus', from 'tessella' (a small square block of stone/tile), diminutive of 'tessera' (square).",
    usage_sentence: "The geometric tiles tessellate perfectly across the courtyard floor.",
    synonyms: ["tile", "grid", "fit together", "pattern"]
  },
  {
    word: "Ubiquitous",
    pronunciation: "/juːˈbɪk.wɪ.təs/",
    part_of_speech: "adjective",
    meaning: "Present, appearing, or found everywhere.",
    etymology: "From Latin 'ubique', meaning 'everywhere', from 'ubi' (where).",
    usage_sentence: "Smartphones have become ubiquitous in modern society, replacing books, cameras, and wallets.",
    synonyms: ["omnipresent", "pervasive", "rife", "widespread"]
  },
  {
    word: "Crepuscular",
    pronunciation: "/krɪˈpʌs.kjʊ.lər/",
    part_of_speech: "adjective",
    meaning: "Of, resembling, or active during the twilight hours (dawn and dusk).",
    etymology: "From Latin 'crepusculum' (twilight), from 'creper' (dark/obscure).",
    usage_sentence: "Deer are crepuscular animals, emerging from the forest cover to graze mostly during dawn and dusk.",
    synonyms: ["twilit", "shadowy", "dim"]
  },
  {
    word: "Penumbra",
    pronunciation: "/pɪˈnʌm.brə/",
    part_of_speech: "noun",
    meaning: "The partially shaded outer region of a shadow cast by an opaque object; a margin or fringe region where something is not clearly defined.",
    etymology: "From Latin 'paene' (almost) + 'umbra' (shadow). Coined by astronomer Johannes Kepler in 1604.",
    usage_sentence: "She operated in the legal penumbra — technically obeying the letter of the law but violating its spirit.",
    synonyms: ["shadow", "fringe", "margin", "gray area"]
  },
  {
    word: "Lacuna",
    pronunciation: "/ləˈkjuː.nə/",
    part_of_speech: "noun",
    meaning: "An unfilled space or interval; a gap, particularly in a book, manuscript, law, or memory.",
    etymology: "Directly from Latin 'lacuna' (a ditch, gap, or pool), diminutive of 'lacus' (lake).",
    usage_sentence: "Due to a lacuna in the historical record, we know very little about the queen's early years.",
    synonyms: ["gap", "blank", "void", "omission"]
  },
  {
    word: "Palimpsest",
    pronunciation: "/ˈpæl.ɪmp.sɛst/",
    part_of_speech: "noun",
    meaning: "A manuscript page, scroll, or parchment from which text has been scraped off to make room for another, but which still bears traces of its original writing.",
    etymology: "From Greek 'palimpsestos', from 'palin' (again) + 'psen' (to scrape clean).",
    usage_sentence: "London is a historical palimpsest, where Roman ruins rest beneath Victorian brickwork and glass skyscrapers.",
    synonyms: ["layering", "accumulation", "overwriting"]
  },
  {
    word: "Elegy",
    pronunciation: "/ˈɛl.ɪ.dʒi/",
    part_of_speech: "noun",
    meaning: "A poem of serious reflection, typically a lament for the dead.",
    etymology: "From Greek 'elegeia', from 'elegos' (a mournful song/lament).",
    usage_sentence: "The poet wrote an elegy for the dying logging towns of his youth.",
    synonyms: ["lament", "dirge", "requiem", "memorial poem"]
  },
  {
    word: "Komorebi",
    pronunciation: "/ko.mo.re.bi/",
    part_of_speech: "noun",
    meaning: "The sunlight filtering through the leaves of trees.",
    etymology: "A Japanese untranslatable word, combining 'ko' (tree), 'more' (leak/escape), and 'bi' (sun/light).",
    usage_sentence: "We sat quietly in the forest clearing, enjoying the beautiful play of komorebi on the grass.",
    synonyms: ["dappled sunlight", "filtered sun"]
  },
  {
    word: "Elysian",
    pronunciation: "/ɪˈlɪz.i.ən/",
    part_of_speech: "adjective",
    meaning: "Relating to or characteristic of heaven or paradise; blissful.",
    etymology: "From Greek 'Elysion' (the Elysian Fields), the final resting place of heroes and the virtuous in Greek mythology.",
    usage_sentence: "The tropical resort offered an Elysian escape from the bitter winter weather.",
    synonyms: ["heavenly", "blissful", "paradisiacal", "idyllic"]
  },
  {
    word: "Meraki",
    pronunciation: "/may-rah-kee/",
    part_of_speech: "noun",
    meaning: "The soul, creativity, or love put into something; the essence of yourself that you leave in your work.",
    etymology: "From Modern Greek 'meraki', meaning to do something with passion, absolute devotion, and undivided attention.",
    usage_sentence: "Every item in her bakery was made with meraki, and the customers could taste the care in every bite.",
    synonyms: ["passion", "soulfulness", "devotion", "love"]
  },
  {
    word: "Grok",
    pronunciation: "/ˈɡrɒk/",
    part_of_speech: "verb",
    meaning: "Understand something intuitively or empathetically; to establish deep rapport with.",
    etymology: "Coined by science fiction author Robert A. Heinlein in his 1961 novel 'Stranger in a Strange Land' as a Martian word meaning 'to drink' and metaphorically 'to understand fully'.",
    usage_sentence: "Once you truly grok the concept of recursion, programming becomes far more logical.",
    synonyms: ["comprehend", "grasp", "understand", "absorb"]
  },
  {
    word: "Clinomania",
    pronunciation: "/ˌklaɪ.noʊˈmeɪ.ni.ə/",
    part_of_speech: "noun",
    meaning: "An excessive desire to stay in bed.",
    etymology: "From Greek 'kline' (bed) + 'mania' (madness/obsession). Used in psychology.",
    usage_sentence: "On rainy Sunday mornings, my clinomania wins and I refuse to get up before noon.",
    synonyms: ["dysania", "bed-obsession"]
  }
];

export const PHRASES_OF_DAY: PhraseOfDay[] = [
  {
    phrase: "To gild the lily",
    meaning: "To adorn or embellish something that is already beautiful or perfect, thus spoiling its natural grace.",
    origin: "From Shakespeare's play 'King John' (1595), where Lord Salisbury says: 'To GILD refined gold, to PAINT the LILY... is wasteful and ridiculous excess.' Popular usage conflated the two verbs.",
    usage: "Applying heavy makeup to her naturally flawless skin felt like gilding the lily."
  },
  {
    phrase: "Bite the bullet",
    meaning: "To face a difficult, painful, or unpleasant situation with courage and endurance.",
    origin: "Before the advent of anesthesia in military surgery, wounded soldiers would be given a lead bullet to bite down on to cope with the excruciating pain of amputations or operations.",
    usage: "I finally decided to bite the bullet and tell my boss that I was resigning."
  },
  {
    phrase: "Fly by the seat of your pants",
    meaning: "To act by instinct and improvisation without a clear plan or instruments.",
    origin: "Early aviation jargon. Before modern cockpit instruments, pilots had to fly by feeling the vibrations of the aircraft and engine through their seats to judge flight conditions.",
    usage: "We didn't have a business plan; we just flew by the seat of our pants for the first year."
  },
  {
    phrase: "Burn the midnight oil",
    meaning: "To work or study late into the night.",
    origin: "Dating back to the pre-electricity era, when staying up late to study or write meant burning the expensive oil in a lamp.",
    usage: "She had to burn the midnight oil for three weeks straight to prepare for the bar exam."
  },
  {
    phrase: "Once in a blue moon",
    meaning: "Very rarely; almost never.",
    origin: "A 'blue moon' refers to the second full moon within a single calendar month. Because this occurs roughly once every 2.7 years, it became a metaphor for rarity.",
    usage: "Since moving to Australia, he only visits his family in Norway once in a blue moon."
  },
  {
    phrase: "Barking up the wrong tree",
    meaning: "Pursuing a mistaken line of thought or course of action; accusing the wrong person.",
    origin: "From American raccoon hunting in the 19th century, where dogs would stand at the base of a tree and bark, mistakenly believing the raccoon was still there after it had jumped to another tree.",
    usage: "If you think I took your keys, you're barking up the wrong tree — I wasn't even in the office today."
  },
  {
    phrase: "Let the cat out of the bag",
    meaning: "To reveal a secret, often accidentally.",
    origin: "In medieval markets, dishonest merchants would put a worthless cat inside a sack and sell it, claiming it was a valuable piglet. If a customer opened the bag, the fraud was revealed.",
    usage: "We wanted the retirement party to be a surprise, but Sarah let the cat out of the bag."
  },
  {
    phrase: "Cost an arm and a leg",
    meaning: "Extremely expensive.",
    origin: "Likely originated from 18th-century painters who charged extra to include limbs in portrait paintings, making full-length portraits far more expensive than bust portraits.",
    usage: "Buying front-row tickets to the concert is going to cost an arm and a leg."
  },
  {
    phrase: "Spill the beans",
    meaning: "To disclose confidential information prematurely.",
    origin: "Ancient Greek voting system. Citizens would cast votes by placing colored beans (white for yes, black for no) into a jar. If the jar was knocked over and the beans spilled, the results were revealed early.",
    usage: "Don't spill the beans about the plot twist before everyone has watched the episode!"
  },
  {
    phrase: "Break the ice",
    meaning: "To relieve tension or initiate conversation in a social setting.",
    origin: "Before railways, ships were the only trade link. In winter, special port ships ('icebreakers') would clear a path through frozen rivers so cargo ships could enter and begin business.",
    usage: "He told a self-deprecating joke to break the ice at the start of the presentation."
  },
  {
    phrase: "Under the weather",
    meaning: "Slightly unwell, tired, or out of sorts.",
    origin: "Maritime origin. In bad weather, sailors who felt seasick would go below deck to the cabin, placing themselves literally 'under the weather' to recover.",
    usage: "I'm feeling a bit under the weather today, so I think I'll skip the gym."
  },
  {
    phrase: "A blessing in disguise",
    meaning: "Something that seems bad or unfortunate at first, but results in a good outcome later.",
    origin: "Dates back to the mid-18th century, appearing in hymns and literary works discussing how apparent trials are divine blessings.",
    usage: "Losing my job was a blessing in disguise because it forced me to start my own consulting firm."
  },
  {
    phrase: "Rule of thumb",
    meaning: "A broadly accurate guide or principle based on practice rather than theory.",
    origin: "Associated with ancient carpenters and brewers who used the width of their thumb or the temperature of their thumb to make rough measurements.",
    usage: "As a rule of thumb, you should save at least twenty percent of your monthly income."
  },
  {
    phrase: "Turn a blind eye",
    meaning: "To ignore situations, facts, or reality deliberately.",
    origin: "At the Battle of Copenhagen (1801), British Admiral Horatio Nelson, who was blind in one eye, was signaled to retreat. He held his telescope to his blind eye and claimed he couldn't see the signal, continuing to fight and win.",
    usage: "The teacher turned a blind eye to minor whispering as long as the students did their work."
  },
  {
    phrase: "Cold shoulder",
    meaning: "Deliberate coldness, rejection, or ignoring of someone.",
    origin: "In medieval England, it was customary to serve guests hot roast meat. However, when a guest had overstayed their welcome, the host would serve them a cold shoulder of mutton, signaling them to leave.",
    usage: "Ever since their argument, she's been giving him the cold shoulder in the hallway."
  },
  {
    phrase: "Paint the town red",
    meaning: "Go out and enjoy oneself flamboyantly or rowdily.",
    origin: "In 1837, the Marquis of Waterford, a notorious mischief-maker, led a group of rowdy friends through the town of Melton Mowbray, literally painting tollgates, doors, and walls with red paint.",
    usage: "It was their last night in New York, and they decided to go out and paint the town red."
  },
  {
    phrase: "Straight from the horse's mouth",
    meaning: "From the highest, most authoritative source.",
    origin: "Horse racing tipsters. Buyers can determine a horse's true age and health by examining its teeth ('straight from the mouth'), which is far more reliable than anything a seller claims.",
    usage: "I didn't believe the merger rumor until I heard it straight from the horse's mouth."
  },
  {
    phrase: "Kick the bucket",
    meaning: "To die.",
    origin: "Most likely from the bucket or beam (called a 'bucket' in old French/English dialect) upon which slaughtered pigs were hung by their heels. The animal's spasms would cause it to 'kick the bucket'.",
    usage: "My ancient laptop finally kicked the bucket this morning."
  },
  {
    phrase: "Left in the lurch",
    meaning: "Abandoned in a difficult or embarrassing situation without assistance.",
    origin: "From the old French board game 'Lurch' (similar to backgammon). To be 'left in the lurch' meant to be badly defeated or stuck in a position from which you could not score.",
    usage: "His partner quit the business overnight, leaving him in the lurch with all the debts."
  },
  {
    phrase: "skeleton in the closet",
    meaning: "A shameful or embarrassing secret that a family or individual hides from others.",
    origin: "Originated in the 19th century, drawing on the gothic image of a house containing a hidden, unburied skeleton representing an unsolved crime or shame.",
    usage: "The politician's campaign derailed when journalists uncovered a major financial skeleton in his closet."
  },
  {
    phrase: "Beat around the bush",
    meaning: "To discuss a matter without coming to the point; delay talking about the main issue.",
    origin: "In medieval boar hunting, beaters would hit the bushes to flush out birds and animals, while the actual hunters would wait nearby. Beating around the bush was the preliminary, indirect step.",
    usage: "Stop beating around the bush and tell me how much the repairs are going to cost."
  },
  {
    phrase: "Cut corners",
    meaning: "Do something in the easiest, cheapest, or fastest way, often sacrificing quality or safety.",
    origin: "Drawn from driving or walking, where 'cutting the corner' of a path saves distance but risks damage to the landscaping or colliding with oncoming traffic.",
    usage: "The contractors cut corners on the foundation, leading to cracks in the walls years later."
  },
  {
    phrase: "Hit the nail on the head",
    meaning: "To describe exactly what is causing a situation or problem; to be precisely correct.",
    origin: "Ancient carpentry phrase, referring to the accuracy required to strike a nail exactly on its head to drive it straight.",
    usage: "Your analysis of our declining sales hit the nail on the head."
  },
  {
    phrase: "In the red",
    meaning: "Spending more money than you are earning; in debt.",
    origin: "From the traditional bookkeeping practice of using red ink to write negative balances or losses, and black ink for positive numbers.",
    usage: "The company has been in the red for three consecutive quarters."
  },
  {
    phrase: "Steal someone's thunder",
    meaning: "To preempt someone's ideas or take the credit for their achievements.",
    origin: "In 1709, playwright John Dennis invented a realistic thunder machine for his play. The play failed, but a later production of Macbeth used his thunder machine. Dennis famously complained: 'They will not let my play run, yet they steal my thunder!'",
    usage: "I was about to announce my engagement, but my sister stole my thunder by announcing her pregnancy first."
  },
  {
    phrase: "Take with a grain of salt",
    meaning: "To view a statement with skepticism or reserve.",
    origin: "From Pliny the Elder's 'Natural History' (77 CE), describing an antidote to poison which was to be taken 'with a grain of salt' to make it palatable.",
    usage: "He boasts a lot about his connections, so I take his stories with a grain of salt."
  },
  {
    phrase: "Throw caution to the wind",
    meaning: "To act recklessly or make a bold decision without worrying about the risks.",
    origin: "Drawn from the physical act of throwing seeds or dust into a strong wind, where they scatter uncontrollably.",
    usage: "She threw caution to the wind, quit her corporate job, and bought a one-way ticket to Paris."
  },
  {
    phrase: "Up in the air",
    meaning: "Unresolved, uncertain, or undecided.",
    origin: "Refers to objects thrown high in the air before they land and settle in a fixed place.",
    usage: "Our travel plans are still up in the air until we get our visas approved."
  },
  {
    phrase: "Face the music",
    meaning: "To accept the unpleasant consequences of one's actions.",
    origin: "From military dismissals. When a soldier was court-martialed, they would be marched out of the camp to the sound of a drum cadence, forced to face the drums and music.",
    usage: "After failing three classes, he had to go home and face the music with his parents."
  },
  {
    phrase: "Go cold turkey",
    meaning: "To stop an addictive behavior abruptly and completely.",
    origin: "Drawn from the goosebumps and pale, clammy skin that drug addicts experience during withdrawal, which resembles the skin of a plucked cold turkey.",
    usage: "She decided to quit drinking coffee cold turkey, resulting in a three-day headache."
  }
];

export const FANCY_WORDS: FancyWord[] = [
  {
    word: "Petrichor",
    pronunciation: "/ˈpɛt.rɪ.kɔːr/",
    meaning: "The distinct earthy scent of rain on dry ground.",
    why_it_exists: "Coined by Australian scientists, it describes the release of oils secreted by plants and Geosmin (a soil bacterium byproduct) that occurs when rain hits dry earth.",
    usage: "The petrichor rose from the pavement as the first drops of the thunderstorm fell."
  },
  {
    word: "Crepuscular",
    pronunciation: "/krɪˈpʌs.kjʊ.lər/",
    meaning: "Of or resembling twilight.",
    why_it_exists: "Derived from Latin 'crepusculum', it was adopted by biologists to describe animals that hunt or feed exclusively during the intermediate lighting of dawn and dusk.",
    usage: "Bats and owls are crepuscular creatures, emerging as the sun dips below the horizon."
  },
  {
    word: "Penumbra",
    pronunciation: "/pɪˈnʌm.brə/",
    meaning: "The partially shaded outer region of a shadow.",
    why_it_exists: "Coined by astronomer Johannes Kepler, it bridges the gap between total shadow (umbra) and complete light, serving as a metaphor for ambiguity.",
    usage: "She existed in a penumbra of uncertainty, neither fully employed nor entirely out of work."
  },
  {
    word: "Lacuna",
    pronunciation: "/ləˈkjuː.nə/",
    meaning: "A gap or missing portion, as in a manuscript or series.",
    why_it_exists: "From Latin meaning 'ditch' or 'pool', indicating a hollow space where something should be. In manuscript studies, it represents lost parchment.",
    usage: "The archives contained a significant lacuna covering the years of the plague."
  },
  {
    word: "Palimpsest",
    pronunciation: "/ˈpæl.ɪmp.sɛst/",
    meaning: "A manuscript page written over but showing traces of earlier work.",
    why_it_exists: "Because parchment was expensive in antiquity, scribes would scrape off old text. Traces remained, leaving a multilayered document.",
    usage: "The city's history is a palimpsest, with Roman roads buried under modern concrete."
  },
  {
    word: "Elegy",
    pronunciation: "/ˈɛl.ɪ.dʒi/",
    meaning: "A mournful poem lamenting the dead.",
    why_it_exists: "Rooted in the Greek poetic form 'elegeia', written in couplets, it has evolved into a universal term for artistic grief and reflection.",
    usage: "His final symphony was a moving elegy to his lost homeland."
  },
  {
    word: "Chiaroscuro",
    pronunciation: "/kiˌɑːr.əˈskjʊə.roʊ/",
    meaning: "The treatment of light and shade in drawing and painting.",
    why_it_exists: "From Italian 'chiaro' (clear/light) + 'scuro' (dark). Popularized during the Renaissance by painters like Caravaggio to create dramatic depth.",
    usage: "The photographer used chiaroscuro to highlight the contours of the subject's face."
  },
  {
    word: "Idyllic",
    pronunciation: "/aɪˈdɪl.ɪk/",
    meaning: "Extremely happy, peaceful, or picturesque.",
    why_it_exists: "Derived from 'idyll', a short poem describing rustic life. It represents our idealized longing for rural simplicity.",
    usage: "They spent an idyllic summer in a remote cottage in the Swiss Alps."
  },
  {
    word: "Luminous",
    pronunciation: "/ˈluː.mɪ.nəs/",
    meaning: "Full of or shedding light; bright or shining, especially in the dark.",
    why_it_exists: "From Latin 'lumen' (light). It implies a soft glow rather than a harsh glare, representing wisdom or inner peace.",
    usage: "The cat's eyes were luminous in the dark hallway."
  },
  {
    word: "Mellifluous",
    pronunciation: "/mɛˈlɪf.lu.əs/",
    meaning: "Flowing sweet like honey (typically of a voice or sound).",
    why_it_exists: "A poetic merging of Latin words for honey and flow, used to describe sounds that are rich, smooth, and pleasant.",
    usage: "Her mellifluous voice was perfect for late-night radio broadcasts."
  },
  {
    word: "Nostalgia",
    pronunciation: "/nɒˈstæl.dʒə/",
    meaning: "A sentimental longing for the past.",
    why_it_exists: "Coined by a Swiss medical student in 1688 as a clinical term for severe homesickness among soldiers, combining 'nostos' (homecoming) + 'algos' (pain).",
    usage: "Hearing the old theme song filled her with a warm wave of nostalgia."
  },
  {
    word: "Solitude",
    pronunciation: "/ˈsɒl.ɪ.tjuːd/",
    meaning: "The state or situation of being alone, especially a pleasant one.",
    why_it_exists: "From Latin 'solus' (alone). It distinguishes itself from loneliness by representing a chosen, peaceful, and constructive isolation.",
    usage: "He valued the solitude of his morning walks before the city woke up."
  },
  {
    word: "Tranquility",
    pronunciation: "/træŋˈkwɪl.ɪ.ti/",
    meaning: "The quality or state of being calm and peaceful.",
    why_it_exists: "From Latin 'tranquillus' (quiet/calm). It represents an undisturbed state of mind and environment.",
    usage: "The tranquility of the forest was broken only by the chirping of birds."
  },
  {
    word: "Verisimilitude",
    pronunciation: "/ˌvɛr.ɪ.sɪˈmɪl.ɪ.tjuːd/",
    meaning: "The appearance of being true or real.",
    why_it_exists: "From Latin 'verus' (true) + 'similis' (like). Used in literary criticism to describe how believable a fictional world is.",
    usage: "The historical novelist researched clothing styles to add verisimilitude to the story."
  },
  {
    word: "Zephyr",
    pronunciation: "/ˈzɛf.ər/",
    meaning: "A gentle, mild breeze.",
    why_it_exists: "Named after Zephyrus, the ancient Greek god and personification of the gentle west wind, which brought spring.",
    usage: "A cool zephyr blew off the ocean, taking the edge off the midday heat."
  },
  {
    word: "Bibliophile",
    pronunciation: "/ˈbɪb.li.oʊ.faɪl/",
    meaning: "A person who collects or has a great love of books.",
    why_it_exists: "From Greek 'biblion' (book) + 'philos' (loving). It refers to someone who loves books as objects, not just for reading.",
    usage: "As a dedicated bibliophile, he had floor-to-ceiling bookshelves in every room."
  },
  {
    word: "Cacophony",
    pronunciation: "/kəˈkɒf.ə.ni/",
    meaning: "A harsh, discordant mixture of sounds.",
    why_it_exists: "From Greek 'kakos' (bad) + 'phone' (sound/voice). The opposite of euphony.",
    usage: "The cacophony of car horns and construction equipment made it impossible to sleep."
  },
  {
    word: "Dapple",
    pronunciation: "/ˈdæp.əl/",
    meaning: "Mark with spots or rounded patches of color or light.",
    why_it_exists: "Old English origin, describing the spotted coat of a horse, now used widely for patterns of light in nature.",
    usage: "The sun began to dapple the forest floor with patches of gold."
  },
  {
    word: "Furtive",
    pronunciation: "/ˈfɜː.tɪv/",
    meaning: "Attempting to avoid notice or attention, typically because of guilt; secretive.",
    why_it_exists: "From Latin 'furtivus' (stolen/secret), from 'fur' (thief). It implies a quick, stealthy action.",
    usage: "He cast a furtive glance at his watch during the boring lecture."
  },
  {
    word: "Gossamer",
    pronunciation: "/ˈɡɒs.ə.mər/",
    meaning: "A fine, filmy substance consisting of cobwebs spun by small spiders; very light, thin, and insubstantial.",
    why_it_exists: "Middle English 'gosesamer' (goose-summer), referring to the warm late autumn period when geese were eaten and spider webs were visible.",
    usage: "She wore a veil of gossamer silk that floated in the breeze."
  },
  {
    word: "Insouciant",
    pronunciation: "/ɪnˈsuː.si.ənt/",
    meaning: "Showing a casual lack of concern; indifferent.",
    why_it_exists: "From French 'insouciant', from 'in-' (not) + 'soucier' (to care/worry).",
    usage: "He strolled down the street with an insouciant shrug, untroubled by his test results."
  },
  {
    word: "Jubilant",
    pronunciation: "/ˈdʒuː.bɪ.lənt/",
    meaning: "Feeling or expressing great happiness and triumph.",
    why_it_exists: "From Latin 'jubilare' (to shout for joy). It implies a loud, communal celebration.",
    usage: "The crowd erupted in jubilant cheers as the final whistle blew."
  },
  {
    word: "Knell",
    pronunciation: "/nɛl/",
    meaning: "The sound of a bell, especially when rung solemnly for a death or funeral; an indicator of the end of something.",
    why_it_exists: "Old English 'nyllan' (to toll a bell), historically used to warn a community of a death.",
    usage: "The closing of the factory sounded the death knell for the local economy."
  },
  {
    word: "Labyrinth",
    pronunciation: "/ˈlæb.ə.rɪnθ/",
    meaning: "A complicated irregular network of passages or paths in which it is difficult to find one's way; a maze.",
    why_it_exists: "From the mythological maze built by Daedalus in Crete to contain the Minotaur.",
    usage: "The old city was a labyrinth of winding alleys and dead ends."
  },
  {
    word: "Macabre",
    pronunciation: "/məˈkɑː.brə/",
    meaning: "Disturbing and horrifying because of involvement with or depiction of death and injury.",
    why_it_exists: "From French 'Danse Macabre' (dance of death), a medieval allegory reminding people of the universality of death.",
    usage: "The museum cabinet contained a macabre collection of medieval torture instruments."
  },
  {
    word: "Nexus",
    pronunciation: "/ˈnɛk.səs/",
    meaning: "A connection or series of connections linking two or more things; a central or focal point.",
    why_it_exists: "From Latin 'nexus' (a binding/connection), from 'nectere' (to bind). It represents a critical point of convergence where multiple systems or ideas meet.",
    usage: "The city serves as the financial and transport nexus of the region."
  },
  {
    word: "Obfuscate",
    pronunciation: "/ˈɒb.fʌs.keɪt/",
    meaning: "Render obscure, unclear, or unintelligible.",
    why_it_exists: "From Latin 'obfuscare' (to darken). Used in software engineering to describe making code unreadable to prevent reverse engineering.",
    usage: "The politician attempted to obfuscate the issue with vague statistics."
  },
  {
    word: "Quixotic",
    pronunciation: "/kwɪkˈsɒt.ɪk/",
    meaning: "Exceedingly idealistic, unrealistic, and impractical.",
    why_it_exists: "Inspired by the character Don Quixote from Miguel de Cervantes' novel, who fought imaginary giants (windmills).",
    usage: "His quixotic quest to eliminate all plastic waste overnight was admired but doomed."
  },
  {
    word: "Resplendent",
    pronunciation: "/rɪˈsplɛn.dənt/",
    meaning: "Attractive and impressive through being richly colorful or shining.",
    why_it_exists: "From Latin 'resplendere' (to shine back/glow).",
    usage: "The queen appeared in a gown resplendent with hand-embroidered gold threads."
  },
  {
    word: "Surreptitious",
    pronunciation: "/ˌsʌr.əpˈtɪʃ.əs/",
    meaning: "Kept secret, especially because it would not be approved of.",
    why_it_exists: "From Latin 'surrepticius' (stolen/secret), from 'sub-' (under) + 'rapere' (to seize).",
    usage: "She slipped a surreptitious note into his pocket before leaving the room."
  }
];

export const GENZ_TERMS: GenZTerm[] = [
  {
    term: "Delulu",
    meaning: "Delusional, typically in a self-aware, humorous, or aspirational way.",
    origin: "K-Pop fan communities (mainstream around 2023). Originated as shorthand for fans who believe they will date their idols.",
    example: "I'm fully delulu about landing that job, but delulu is sometimes the only solulu.",
    note: "Modern slang frequently shortens psychological terms to make heavy concepts light and playful."
  },
  {
    term: "Slay",
    meaning: "To perform exceptionally well; to look outstanding or achieve great success.",
    origin: "Black and Latinx LGBTQ ballroom culture of the 1970s and 80s, popularized globally by social media.",
    example: "She walked onto the stage and absolutely slayed that presentation.",
    note: "Ballroom slang has historically been the primary driver of mainstream pop culture vocabulary."
  },
  {
    term: "No Cap",
    meaning: "No lie; seriously; for real.",
    origin: "African American Vernacular English (AAVE), originating in Atlanta hip-hop culture in the late 2010s.",
    example: "That was the best meal I've ever had in my life, no cap.",
    note: "'Cap' originally referred to boasting or exaggerating, hence 'no cap' indicates pure honesty."
  },
  {
    term: "Touch Grass",
    meaning: "Go outside; disconnect from the internet and return to the real world.",
    origin: "Online gaming and social media communities (circa 2020), used to dismiss people who are 'too online'.",
    example: "If you are getting this angry about an online argument, it is time to go touch grass.",
    note: "A modern idioms addressing digital fatigue and the psychological need for physical grounding."
  },
  {
    term: "Understood the Assignment",
    meaning: "Executed something perfectly, meeting and exceeding all expectations with style.",
    origin: "Twitter and TikTok culture (circa 2021), originally referring to actor performances or high-fashion looks.",
    example: "The singer wore a custom gown matching the museum's paintings — she understood the assignment.",
    note: "Reflects a cultural value on high effort, precision, and stylistic alignment."
  },
  {
    term: "Rizz",
    meaning: "Charm, charisma, or the ability to attract and interest others.",
    origin: "Popularized by internet streamer Kai Cenat in 2022; short for 'charisma'. Named Oxford Word of the Year 2023.",
    example: "He walked up to the podium and spoke with so much rizz that the whole room was listening.",
    note: "Shows how language shortens multi-syllable Latin terms into punchy monosyllabic slang."
  },
  {
    term: "Rent Free",
    meaning: "Occupying someone's thoughts constantly and without permission.",
    origin: "Popularized online to describe an argument or person you can't stop thinking about.",
    example: "That awkward comment I made during the meeting is living rent free in my head.",
    note: "A clever economic metaphor for the cognitive space we allow negative thoughts to occupy."
  },
  {
    term: "Mid",
    meaning: "Mediocre; average; unimpressive.",
    origin: "Originally sports and gaming slang for mid-tier rankings, popularized in music and film reviews.",
    example: "The movie wasn't bad, but it was just mid compared to the original.",
    note: "Represents a shift away from binary 'good/bad' scales to a casual dismissal of average effort."
  },
  {
    term: "Situationship",
    meaning: "A romantic relationship that is undefined, lacking clear labels or commitment.",
    origin: "Dating apps and modern relationship discourse (mainstream around 2020).",
    example: "We've been hanging out for six months, but we are definitely in a situationship.",
    note: "Reflects the complexity of modern dating, where labels are avoided to keep options open."
  },
  {
    term: "Glazing",
    meaning: "Over-praising or brown-nosed flattery of someone, often to an embarrassing degree.",
    origin: "Twitch and gaming streams (circa 2023), used to mock sycophants.",
    example: "Stop glazing the manager just because he agreed with your idea.",
    note: "A harsh but humorous check on social sycophancy in collaborative workspaces."
  },
  {
    term: "Bussin",
    meaning: "Extremely delicious (typically referring to food).",
    origin: "African American Vernacular English (AAVE), popularized on food review videos on TikTok.",
    example: "This spicy ramen is absolutely bussin, you have to try it.",
    note: "Highlights how culinary slang spreads quickly through video-sharing platforms."
  },
  {
    term: "Era",
    meaning: "A distinct period in a person's life characterized by a specific interest, style, or phase.",
    origin: "Inspired by Taylor Swift's 'Eras Tour', but evolved into a general term for temporary lifestyle phases.",
    example: "I am currently in my cooking era, making bread from scratch every weekend.",
    note: "Shows how marketing concepts are adapted by individuals to structure their personal identity."
  },
  {
    term: "Glow Up",
    meaning: "A significant mental, physical, or social transformation for the better.",
    origin: "A play on 'grow up', popularized in rap music and internet makeovers.",
    example: "He spent the summer reading and exercising — he had a total glow up.",
    note: "Celebrates personal growth and transformation as a milestone."
  },
  {
    term: "Main Character Energy",
    meaning: "Behaving like the protagonist of a movie; confident, stylish, or sometimes self-centered.",
    origin: "TikTok trend starting in 2020 where users filmed themselves acting dramatic in public settings.",
    example: "She walked in wearing a velvet coat and sunglasses, emitting major main character energy.",
    note: "Reflects how cinema framing has bled into personal self-perception and branding."
  },
  {
    term: "Yap",
    meaning: "To talk excessively or pointlessly about trivial matters.",
    origin: "Drawn from the sound of a barking dog, modernized to describe over-communicators.",
    example: "I was supposed to study, but we spent three hours yapping about music.",
    note: "Shows a modern return to onomatopoeic put-downs for low-value chatter."
  },
  {
    term: "Cook",
    meaning: "To let someone execute a plan, showcase their skills, or develop an argument uninterrupted.",
    origin: "Hip-hop and sports culture ('Let him cook'), popularized on social media platforms.",
    example: "He was writing some amazing code, so we just stood back and let him cook.",
    note: "Represents a supportive slang for giving talent the space it needs to shine."
  },
  {
    term: "Flex",
    meaning: "To show off one's achievements, possessions, or skills.",
    origin: "Drawn from bodybuilding (flexing muscles), adopted into rap lyrics and general slang.",
    example: "Showing his award on social media was a subtle flex.",
    note: "A concise term for status-seeking behavior in the age of social media."
  },
  {
    term: "Ghost",
    meaning: "To suddenly cut off all communication with someone without explanation.",
    origin: "Dating app culture of the 2010s, now used for friendships and business contexts too.",
    example: "We went on two dates, and then he just ghosted me.",
    note: "Delineates how digital communication makes avoidance easier than direct closure."
  },
  {
    term: "Side Eye",
    meaning: "A look expressing disapproval, skepticism, or suspicion.",
    origin: "Drawn from physical gestures, turned into a verbal description or audio meme ('bombastic side eye').",
    example: "The librarian gave us a major side eye when we started laughing.",
    note: "Captures how facial expressions are codified and verbalized in internet communication."
  },
  {
    term: "Sus",
    meaning: "Suspicious; shady; untrustworthy.",
    origin: "Popularized globally by the online multiplayer game 'Among Us' in 2020; abbreviation of 'suspicious'.",
    example: "The email asking for my password looked very sus.",
    note: "Shows how collaborative gaming creates quick, high-speed shorthand for communication."
  },
  {
    term: "Simp",
    meaning: "Showing excessive attention or submissiveness to someone you are attracted to.",
    origin: "A historic term (short for simpleton) revived and redefined by internet forums in the 2020s.",
    example: "He's simping hard, buying her coffee every single morning.",
    note: "Reflects peer policing of romantic asymmetry and submissive behaviors."
  },
  {
    term: "Ate",
    meaning: "Did something exceptionally well (similar to 'left no crumbs').",
    origin: "LGBTQ ballroom and hip-hop culture, referring to taking in the spotlight and executing.",
    example: "Her new album is perfect — she really ate.",
    note: "Short, punchy verb phrase used to signal absolute approval."
  },
  {
    term: "Left No Crumbs",
    meaning: "Executed something so flawlessly that nothing could be improved.",
    origin: "An extension of 'ate', indicating that everything was consumed/done.",
    example: "His dance performance was incredible, he left no crumbs.",
    note: "Visual culinary metaphor for absolute completion and perfection."
  },
  {
    term: "Big W",
    meaning: "A major win or success.",
    origin: "Sports shorthand ('W' for win), popularized in gaming and general achievement talk.",
    example: "Passing that exam with an A was a big W for me.",
    note: "Reflects the gamification of life achievements using simple scoreboard letters."
  },
  {
    term: "Tea",
    meaning: "Gossip; juicy news or information.",
    origin: "Black drag culture (often written as 'T' for truth), popularized by social media.",
    example: "Sit down and spill the tea about what happened at the party.",
    note: "A social metaphor of sharing secrets over a hot cup of tea."
  },
  {
    term: "Bet",
    meaning: "Yes; okay; I agree; an expression of agreement or challenge.",
    origin: "AAVE, historically meaning 'you can bet on it' or 'I challenge you'.",
    example: "A: Let's get pizza. B: Bet, see you there.",
    note: "A versatile term that can serve as a simple affirmation or a competitive response."
  },
  {
    term: "Cringe",
    meaning: "Embarrassing, awkward, or painful to watch.",
    origin: "Originally a verb describing the physical reaction of shrinking back, now used as an adjective.",
    example: "The dad joke he told at the dinner table was so cringe.",
    note: "Captures the visceral physical reaction to social awkwardness."
  },
  {
    term: "Valid",
    meaning: "Reasonable; understandable; worthy of respect.",
    origin: "Evolved from legal/logical validation into a general expression of emotional validation.",
    example: "Your reason for being late is completely valid.",
    note: "Shows how therapeutic concepts of validation are integrated into daily conversation."
  },
  {
    term: "Sending Me",
    meaning: "Making me laugh hysterically or causing extreme amusement.",
    origin: "Social media shorthand for 'sending me into hysterics'.",
    example: "This video of the cat jumping is absolutely sending me.",
    note: "A spatial metaphor for how extreme humor transports a person's attention."
  },
  {
    term: "Gucci",
    meaning: "Good; fine; cool.",
    origin: "Rap lyrics referencing the luxury brand, turned into a general adjective for high quality or general satisfaction.",
    example: "Don't worry about the delay, we're all Gucci here.",
    note: "Shows how brand names are detached from products and turned into quality descriptors."
  }
];
