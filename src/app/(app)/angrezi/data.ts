// src/app/(app)/bhasha/data.ts
// Bhasha room - unified language data (merged from Shabda + Samvaad + new content)

// ─────────────── INTERFACES ───────────────

export interface BhashaEnglishWord {
  word: string;
  pronunciation: string;
  part_of_speech: string;
  meaning: string;
  etymology: string;
  usage_sentence: string;
  synonyms: string[];
  hindi_meaning: string; // Devanagari translation
}

export interface BhashaHindiWord {
  word: string;           // Devanagari
  roman: string;          // Romanization
  part_of_speech: string;
  meaning: string;        // in English
  hindi_meaning: string;  // full meaning in Devanagari
  example: string;        // usage in Devanagari
  etymology: string;      // origin in English
}

export interface BhashaPhrase {
  phrase: string;
  meaning: string;
  origin: string;
  usage: string;
  hindi_equivalent: string; // Hindi idiom/saying with similar meaning
  hindi_equivalent_roman: string;
}

export interface BhashaRareWord {
  word: string;
  pronunciation: string;
  meaning: string;
  why_it_exists: string;
  usage: string;
  hindi_equivalent: string; // rare Hindi/Urdu/Sanskrit word with similar meaning
}

export interface BhashaStory {
  title: string;
  word: string;
  story: string; // 200-300 word etymology narrative
  language: string;
  script?: string;
  usage_examples: string[];
  cultural_note: string;
}

export interface BhashaModernTerm {
  term: string;
  meaning: string;
  origin: string;
  example: string;
  note: string;
  hindi_meaning: string;
  desi_equivalent?: string; // Indian slang equivalent if any
}

export interface EnglishMasteryDrill {
  sentence: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface EnglishMasteryEntry {
  dayIndex: number;
  theme: string;
  concept: string;
  conceptExplanation: string;
  drills: EnglishMasteryDrill[];
  dialogue: {
    speakerA: string;
    speakerA_trans: string;
    speakerB: string;
    speakerB_trans: string;
    context: string;
  };
  thinkInEnglish: {
    prompt: string;
    incorrectDesiLiteral: string;
    correctNatural: string;
    explanation: string;
  };
  desiCorrection: {
    incorrect: string;
    correct: string;
    why: string;
  };
}

// ─────────────── ENGLISH WORDS ───────────────

export const ENGLISH_WORDS: BhashaEnglishWord[] = [
  {
    word: 'Sonder',
    pronunciation: '/ˈsɒn.dər/',
    part_of_speech: 'noun',
    meaning: 'The realization that each random passerby is living a life as vivid and complex as your own.',
    etymology: 'Coined in 2012 by John Koenig in "The Dictionary of Obscure Sorrows", derived from German "sonder" (to probe/fathom).',
    usage_sentence: 'Sitting on the train, a sudden wave of sonder hit him - every stranger checking their phone had their own deep tragedies and triumphs.',
    synonyms: ['empathy', 'interconnection', 'awareness'],
    hindi_meaning: 'यह अहसास कि हर राहगीर का अपना एक अलग, जीवंत और जटिल जीवन है।',
  },
  {
    word: 'Petrichor',
    pronunciation: '/ˈpɛt.rɪ.kɔːr/',
    part_of_speech: 'noun',
    meaning: 'A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.',
    etymology: 'Coined in 1964 by Australian researchers Isabel Bear and Richard Thomas, from Greek "petra" (stone) and "ichor" (the fluid that flows in the veins of the gods).',
    usage_sentence: 'She opened the window to let in the fresh petrichor as the first heavy summer rain hit the parched soil.',
    synonyms: ['earthy scent', 'rain fragrance'],
    hindi_meaning: 'सूखी मिट्टी पर पहली बारिश के बाद आने वाली भीनी-भीनी सौंधी खुशबू।',
  },
  {
    word: 'Hiraeth',
    pronunciation: '/ˈhɪərɑːð/',
    part_of_speech: 'noun',
    meaning: 'A homesickness for a home to which you cannot return, a home which maybe never was, or the nostalgia for lost places.',
    etymology: 'From the Welsh language, combining elements of longing, regret, and nostalgia. It has no direct single-word equivalent in English.',
    usage_sentence: 'Looking at old family albums from a town that had since been flooded, he felt a deep, incurable hiraeth.',
    synonyms: ['nostalgia', 'homesickness', 'yearning', 'melancholy'],
    hindi_meaning: 'एक ऐसे घर या स्थान के लिए तीव्र लालसा जहाँ अब वापस नहीं लौटा जा सकता।',
  },
  {
    word: 'Ephemeral',
    pronunciation: '/ɪˈfɛm.ər.əl/',
    part_of_speech: 'adjective',
    meaning: 'Lasting for a very short time; transitory; fleeting.',
    etymology: 'From Greek "ephemeros" - "epi" (on) + "hemera" (day), literally "lasting only a day." Used in biology for organisms that live only one day.',
    usage_sentence: 'The cherry blossoms reminded her of the ephemeral nature of beauty - most stunning precisely because they do not last.',
    synonyms: ['transient', 'fleeting', 'momentary', 'short-lived'],
    hindi_meaning: 'क्षणभंगुर, बहुत कम समय तक रहने वाला या नश्वर।',
  },
  {
    word: 'Serendipity',
    pronunciation: '/ˌsɛr.ənˈdɪp.ɪ.ti/',
    part_of_speech: 'noun',
    meaning: 'The occurrence of happy or beneficial events by chance; a fortunate accident.',
    etymology: 'Coined in 1754 by Horace Walpole in a letter, from the Persian fairy tale "The Three Princes of Serendip" (ancient name for Sri Lanka), in which princes discover things by accidental sagacity.',
    usage_sentence: 'It was pure serendipity that she sat next to the very publisher who would later launch her career on that delayed train.',
    synonyms: ['coincidence', 'chance', 'luck', 'fortuitousness'],
    hindi_meaning: 'अचानक या अप्रत्याशित रूप से किसी मूल्यवान या सुखद चीज़ का मिल जाना।',
  },
  {
    word: 'Vellichor',
    pronunciation: '/ˈvɛl.ɪ.kɔːr/',
    part_of_speech: 'noun',
    meaning: 'The strange wistfulness of used bookshops - the sense that all those forgotten books are waiting to be rediscovered.',
    etymology: 'Coined by John Koenig in "The Dictionary of Obscure Sorrows". Blends "vellum" (parchment used for manuscripts) with "ichor" (divine fluid). Captures the specific atmosphere of old bookshops.',
    usage_sentence: 'He always felt a gentle vellichor in used bookshops - every paperback was someone\'s abandoned universe.',
    synonyms: ['nostalgia', 'wistfulness', 'antiquarian feeling'],
    hindi_meaning: 'पुरानी किताबों की दुकानों में मिलने वाली कागज़ और यादों की एक विशेष भीनी खुशबू।',
  },
  {
    word: 'Liminal',
    pronunciation: '/ˈlɪm.ɪ.nəl/',
    part_of_speech: 'adjective',
    meaning: 'Relating to a transitional or initial stage; at the boundary or threshold between two states or phases.',
    etymology: 'From Latin "limen" (threshold). Anthropologist Arnold van Gennep used it in "Rites of Passage" (1909) to describe the transitional middle phase of ritual, when one is "betwixt and between."',
    usage_sentence: 'The months after graduation have a strange liminal quality - you are no longer a student but not yet fully adult.',
    synonyms: ['transitional', 'intermediate', 'threshold'],
    hindi_meaning: 'संक्रमणकालीन अवस्था, दो सीमाओं या चरणों के बीच का स्थान।',
  },
  {
    word: 'Mellifluous',
    pronunciation: '/mɪˈlɪf.lu.əs/',
    part_of_speech: 'adjective',
    meaning: '(Of a voice or music) sweet or musical; pleasant to hear; smooth and sweet.',
    etymology: 'From Latin "mel" (honey) + "fluere" (to flow) - literally "flowing with honey." Applied to voices, music, and writing that flows sweetly without harshness.',
    usage_sentence: 'The narrator\'s mellifluous voice transformed even dry historical facts into something that felt like poetry.',
    synonyms: ['dulcet', 'honeyed', 'sweet-sounding', 'melodious'],
    hindi_meaning: 'मधुर, सुरीला या सुनने में मीठा और कोमल।',
  },
  {
    word: 'Ethereal',
    pronunciation: '/ɪˈθɪər.i.əl/',
    part_of_speech: 'adjective',
    meaning: 'Extremely delicate and light in a way that seems not to be of this world; heavenly or spiritual.',
    etymology: 'From Greek "ether" - the clear sky or pure upper air in classical cosmology where the gods lived. The suffix "-eal" creates the adjectival form meaning "of or relating to."',
    usage_sentence: 'In the morning mist over the Dal Lake, the houseboats had an ethereal quality, as if suspended between water and sky.',
    synonyms: ['otherworldly', 'delicate', 'celestial', 'diaphanous'],
    hindi_meaning: 'अत्यंत सुंदर, नाजुक और अलौकिक, जो इस लोक का न लगे।',
  },
  {
    word: 'Ineffable',
    pronunciation: '/ɪˈnɛf.ə.bəl/',
    part_of_speech: 'adjective',
    meaning: 'Too great, extreme, or beautiful to be expressed or described in words; unspeakable.',
    etymology: 'From Latin "ineffabilis" - "in" (not) + "effabilis" (utterable), from "effari" (to speak out). Applied to things so sacred, beautiful, or extreme that language cannot reach them.',
    usage_sentence: 'Standing at the edge of the Grand Canyon, she understood why travellers have always reported an ineffable feeling of smallness and wonder.',
    synonyms: ['indescribable', 'unutterable', 'inexpressible', 'beyond words'],
    hindi_meaning: 'अकथनीय; जिसे शब्दों में बयां न किया जा सके।',
  },
];

// ─────────────── HINDI WORDS ───────────────

export const HINDI_WORDS: BhashaHindiWord[] = [
  {
    word: 'विरह',
    roman: 'Virah',
    part_of_speech: 'noun (masculine)',
    meaning: 'The pain of separation from a beloved - a specific, poetic form of longing that is central to Indian devotional and love poetry.',
    hindi_meaning: 'प्रिय व्यक्ति से बिछड़ने की पीड़ा। यह केवल अनुपस्थिति नहीं, बल्कि उस अनुपस्थिति में डूबे रहने की एक विशेष भावना है।',
    example: 'वह मीरा की कविताओं में विरह की तड़प महसूस कर सकती थी।',
    etymology: 'From Sanskrit "vi" (apart, away) + "rah" (to remain). Virah is the state of remaining apart - its depth of meaning is best understood through Bhakti poetry, where separation from the divine is the very condition of devotional longing.',
  },
  {
    word: 'तड़प',
    roman: 'Tadap',
    part_of_speech: 'noun / verb root (feminine)',
    meaning: 'A burning, throbbing longing or restlessness - more physically intense than mere desire, closer to a kind of inner writhing.',
    hindi_meaning: 'जलन और बेचैनी से भरी तीव्र आकांक्षा या पीड़ा। यह शब्द शरीर की भाषा में दर्द को व्यक्त करता है।',
    example: 'उसे परिणाम जानने की ऐसी तड़प थी कि रात भर नींद नहीं आई।',
    etymology: 'From the Hindi root "tapna" (to burn, to scorch). Tadap carries the physical quality of heat - a burning in the chest that accompanies intense desire or grief. Often used in music and poetry to describe spiritual yearning.',
  },
  {
    word: 'सुकून',
    roman: 'Sukoon',
    part_of_speech: 'noun (masculine)',
    meaning: 'A deep, settled peace; contentment that is not excitement but its opposite - a quiet satisfaction in which restlessness has dissolved.',
    hindi_meaning: 'गहरी आत्मिक शांति और संतोष। यह खुशी नहीं, बल्कि बेचैनी का पूर्णतः समाप्त हो जाना है।',
    example: 'वर्षों की भागदौड़ के बाद पहाड़ों में उसे असली सुकून मिला।',
    etymology: 'From Arabic "sukun" (stillness, rest, cessation of movement) via Urdu. In Arabic, "sukun" refers also to the diacritical mark indicating a consonant not followed by a vowel - the sound of stopping. Sukoon is the soul\'s equivalent of that stop.',
  },
  {
    word: 'जुगनू',
    roman: 'Jugnu',
    part_of_speech: 'noun (masculine)',
    meaning: 'Firefly. But in poetry and metaphor, it extends to any small light in a dark field - a symbol of brief, beautiful, independent brightness.',
    hindi_meaning: 'जुगनू - वह छोटा कीड़ा जो अंधेरे में खुद चमकता है। काव्य में यह किसी छोटी परंतु साहसी उम्मीद का प्रतीक है।',
    example: 'वे जुगनुओं की तरह थे - अँधेरे में भी अपनी रोशनी से चमकते।',
    etymology: 'Onomatopoeic in origin - the word mimics the flickering, intermittent nature of the firefly\'s glow in its very sound. Used extensively in Urdu poetry and Bollywood lyrics as a symbol of hope and self-made brightness.',
  },
  {
    word: 'उलझन',
    roman: 'Uljhan',
    part_of_speech: 'noun (feminine)',
    meaning: 'A tangle - but used metaphorically for a mental or emotional knot: confusion, perplexity, an inner state of being caught up in something that cannot easily be resolved.',
    hindi_meaning: 'मन की उलझन - वह स्थिति जब विचार, भावनाएँ या परिस्थितियाँ आपस में इस तरह उलझ जाएँ कि सुलझाना मुश्किल हो।',
    example: 'जीवन के फ़ैसलों की उलझन में वह महीनों डूबी रही।',
    etymology: 'From the Hindi/Urdu root "ulajhna" (to tangle, to become entangled). In everyday speech it means confusion; in poetry it means the beautiful, productive entanglement of the mind with a question larger than itself.',
  },
  {
    word: 'अलबेला',
    roman: 'Albela',
    part_of_speech: 'adjective / noun',
    meaning: 'Carefree, joyful, unconventional - someone who lives with a lightness and playfulness that sets them apart from the serious world.',
    hindi_meaning: 'मस्त, अनोखा और बेफ़िक्र। जो अपनी ही धुन में जीता हो और दुनिया की परवाह न करे।',
    example: 'वह अलबेला किस्म का इंसान था - बंधनों में नहीं, अपनी मर्जी से जीता था।',
    etymology: 'From Braj Bhasha "albela" - itself from Sanskrit "a-lobha" (without greed or worldly desire) plus the suffix "-ela". Over time it evolved from "without worldly entanglement" to the playful quality of someone unencumbered by worry.',
  },
  {
    word: 'नासमझ',
    roman: 'Nasamajh',
    part_of_speech: 'adjective / noun',
    meaning: 'One who does not understand - but used affectionately or in poetry as a kind of innocence: the one who hasn\'t learned what the world wants to teach, and is perhaps better for it.',
    hindi_meaning: 'जो समझ नहीं पाता। लेकिन कभी-कभी यह अज्ञानता नहीं, बल्कि दुनिया की चालाकियों से दूर एक निर्मल सादगी है।',
    example: 'वह नासमझ था - पर उसकी नासमझी में एक गहरी सच्चाई थी।',
    etymology: 'From Farsi "na" (not) + Hindi "samajh" (understanding). A compound that literally means "without understanding." Used in Urdu poetry to describe the beloved who does not understand the lover\'s pain - but also the mystic who has refused worldly understanding.',
  },
  {
    word: 'ख़ामोशी',
    roman: 'Khamoshi',
    part_of_speech: 'noun (feminine)',
    meaning: 'Silence - but a particular, weighted silence; not the absence of sound but the presence of something unsaid, unshared, or deliberately withheld.',
    hindi_meaning: 'ख़ामोशी - वह मौन जिसमें कुछ अनकहा दबा हो। यह सिर्फ़ आवाज़ का न होना नहीं, बल्कि बातों का बोझ उठाए बैठी एक भारी चुप्पी है।',
    example: 'उनकी ख़ामोशी ने जो कहा, वह शब्द कभी नहीं कह पाते।',
    etymology: 'From Persian "khamush" (silent, mute) via Urdu. In Persian poetry, silence is not empty - it is the space where the soul speaks. Khamoshi carries this weight: the fullness of what remains unspoken.',
  },
  {
    word: 'इत्मीनान',
    roman: 'Itminaan',
    part_of_speech: 'noun (masculine)',
    meaning: 'Assurance, contentment, settled peace of mind - specifically the feeling of having verified or resolved something that was uncertain, and now being at rest in that resolution.',
    hindi_meaning: 'वह मानसिक शांति जो किसी बात के स्पष्ट हो जाने या किसी भरोसे के पक्के हो जाने पर मिलती है।',
    example: 'उसका इत्मीनान देखकर पता चलता था कि उसने सब कुछ सोच-समझकर तय किया है।',
    etymology: 'From Arabic "itmi\'nan" (tranquility of the heart, assurance) via Persian and Urdu. In Islamic spiritual literature, itminaan is specifically the peace that comes from trust in God - the heart that has "settled" into trust.',
  },
  {
    word: 'मनमौजी',
    roman: 'Manmauji',
    part_of_speech: 'adjective',
    meaning: 'One who follows the whims of their own mind - spontaneous, self-directed, not bound by convention or others\' expectations.',
    hindi_meaning: 'मन की लहर पर चलने वाला। जो अपनी इच्छा और मूड के अनुसार जीता हो, न कि दुनिया की उम्मीदों के मुताबिक।',
    example: 'वह मनमौजी यात्री था - कोई योजना नहीं, बस एक बैग और खुला मन।',
    etymology: 'From Hindi "man" (mind, heart) + "mauji" (one who rides the waves/moods). Literally "one who rides the waves of their own mind." A distinctly affectionate term - there is no judgment in calling someone manmauji.',
  },
];

// ─────────────── ENGLISH PHRASES (with Hindi equivalents) ───────────────

export const ENGLISH_PHRASES: BhashaPhrase[] = [
  {
    phrase: 'To gild the lily',
    meaning: 'To try to improve or add to something that is already perfect or beautiful, making it worse in the process.',
    origin: 'From Shakespeare\'s King John (1595): "To gild refined gold, to paint the lily... is wasteful and ridiculous excess." The popular phrase inverts the original\'s structure but captures its meaning perfectly.',
    usage: 'The director\'s decision to add an orchestral score to the documentary was gilding the lily - the natural sounds told the story better.',
    hindi_equivalent: 'सोने में सुहागा लगाना',
    hindi_equivalent_roman: 'Sone mein suhaga lagana',
  },
  {
    phrase: 'Bite the bullet',
    meaning: 'To endure a painful or difficult situation with courage and stoicism; to do something unpleasant that must be done.',
    origin: 'From the pre-anesthesia surgical practice of giving patients a bullet to bite during procedures to help them endure pain without screaming. First appeared in print in Rudyard Kipling\'s "The Light that Failed" (1891).',
    usage: 'She finally bit the bullet and called her estranged father after ten years of silence.',
    hindi_equivalent: 'दाँत पीसकर सहना',
    hindi_equivalent_roman: 'Daant peeskar sahna',
  },
  {
    phrase: 'Break the ice',
    meaning: 'To say or do something to relieve tension or awkwardness in a social situation; to start a conversation or activity.',
    origin: 'From the practice of sending smaller vessels ahead of larger ships in frozen harbors to break the ice and allow passage. By the 17th century it was already used metaphorically for overcoming social awkwardness.',
    usage: 'The activity leader broke the ice at the workshop by asking everyone to share their most embarrassing travel story.',
    hindi_equivalent: 'बात का सिलसिला शुरू करना',
    hindi_equivalent_roman: 'Baat ka silsila shuru karna',
  },
  {
    phrase: 'Once in a blue moon',
    meaning: 'Very rarely; once in a very long time.',
    origin: 'The "blue moon" was originally a folkloric English expression meaning something absurd or impossible. By the 19th century it had shifted to mean "very rarely" - the astronomical blue moon (second full moon in a calendar month) reinforced this meaning.',
    usage: 'She only visited her hometown once in a blue moon now, and each visit felt like entering a strange museum of her past.',
    hindi_equivalent: 'ईद का चाँद होना',
    hindi_equivalent_roman: 'Eid ka chaand hona',
  },
  {
    phrase: 'Burn the midnight oil',
    meaning: 'To work or study late into the night; to stay up very late working.',
    origin: 'Before electricity, working late meant burning oil lamps. The phrase appears in Francis Quarles\'s "Emblems" (1635): "We spend our midday sweat, our midnight oil." It preserved its meaning perfectly into the electric age.',
    usage: 'The team burned the midnight oil for three weeks before the product launch, surviving on coffee and collective stubbornness.',
    hindi_equivalent: 'रात-रात भर जागकर काम करना',
    hindi_equivalent_roman: 'Raat-raat bhar jaagkar kaam karna',
  },
  {
    phrase: 'A blessing in disguise',
    meaning: 'Something that seems bad or unlucky at first but turns out to be good in the end.',
    origin: 'Coined by James Hervey in "Reflections on a Flower Garden" (1746): "E\'en crosses from his sov\'reign hand are blessings in disguise." The metaphor treats misfortune as a gift wearing a mask.',
    usage: 'Losing the contract turned out to be a blessing in disguise - it forced them to pivot to a model that was far more sustainable.',
    hindi_equivalent: 'आपदा में अवसर',
    hindi_equivalent_roman: 'Aapda mein avsar',
  },
  {
    phrase: 'Rule of thumb',
    meaning: 'A broadly accurate guide or principle, based on experience or practice rather than theory.',
    origin: 'The most likely origin is from traditional trades where craftsmen used their thumbs as approximate measuring devices. The "thumb\'s width" was a rough unit of measurement in brewing, carpentry, and other crafts - practical and good enough.',
    usage: 'As a rule of thumb, spend no more on a car than half your annual salary. But rules of thumb exist to be questioned.',
    hindi_equivalent: 'अनुभव का साधारण नियम',
    hindi_equivalent_roman: 'Anubhav ka sadharan niyam',
  },
  {
    phrase: 'Cut to the chase',
    meaning: 'To get to the important part without wasting time on irrelevant details; to be direct.',
    origin: 'From early Hollywood screenwriting, when editors would cut from setup scenes directly to the "chase" - the action climax audiences actually wanted. First used in written form in the 1940s.',
    usage: 'She cut to the chase in the presentation: three recommendations, the evidence behind each, and a clear timeline. No preamble.',
    hindi_equivalent: 'सीधे मुद्दे पर आना',
    hindi_equivalent_roman: 'Seedhe mudde par aana',
  },
];

// ─────────────── RARE WORDS ───────────────

export const RARE_WORDS: BhashaRareWord[] = [
  {
    word: 'Komorebi',
    pronunciation: '/ko-mo-REH-bi/',
    meaning: 'A Japanese word for the interplay of light and leaves when sunlight filters through trees - the dappled, moving light that falls through a canopy.',
    why_it_exists: 'Japanese aesthetics has long valued extremely precise observation of natural phenomena - the names of different types of rain, snow, light, and wind reflect a culture that pays careful attention to the textures of the natural world. Komorebi exists because this specific quality of light was observed and valued enough to name.',
    usage: 'She sat in the komorebi for an hour, watching the light shift with the breeze, thinking about nothing in particular.',
    hindi_equivalent: 'वृक्षों से छनकर आती धूप की किरणें (Vriksho se chhankar aati dhoop ki kiranen)',
  },
  {
    word: 'Mamihlapinatapai',
    pronunciation: '/mah-mih-hlah-pee-nah-tah-pai/',
    meaning: 'A Yaghan word (an indigenous language of Tierra del Fuego, nearly extinct) meaning: a look shared between two people, each wishing that the other would initiate something they both desire but neither wants to start.',
    why_it_exists: 'The Yaghan people of southern South America lived in one of the most extreme environments on Earth and had developed a language dense with social and emotional precision. The word exists because this specific, shared hesitation was common enough to name - and precisely because it needed only one word.',
    usage: 'There was a long mamihlapinatapai across the table before either of them said what both had been thinking for months.',
    hindi_equivalent: 'दोनों चाहते हैं, कोई बोले - मौन का आमना-सामना',
  },
  {
    word: 'Saudade',
    pronunciation: '/saw-DAH-djeh/',
    meaning: 'A Portuguese word for a melancholic longing for something loved and lost - or perhaps never had - combined with the knowledge that this longing itself is pleasurable.',
    why_it_exists: 'Seven centuries of Portuguese seafaring, empire, and loss created the emotional conditions for this word. The sailors who left and never returned, the families who waited - saudade became the name for the permanent condition of loving something from which you are separated.',
    usage: 'He felt a saudade for the city he had lived in during his twenties - not because it was gone, but because he was.',
    hindi_equivalent: 'टीस भरी यादें (Tees bhari yaadein) / विरह की मिठास (Virah ki mithhas)',
  },
  {
    word: 'Schadenfreude',
    pronunciation: '/ˈʃɑː.dən.frɔɪ.də/',
    meaning: 'German for the pleasure derived from another\'s misfortune. Not malicious delight exactly - more the involuntary satisfaction when someone who seemed to have it all experiences a setback.',
    why_it_exists: 'German is famous for compound nouns that name emotional states precisely. "Schaden" (damage/harm) + "Freude" (joy) = the joy in harm. The word\'s adoption into English suggests we recognize the feeling but were reluctant to admit it deserved a name.',
    usage: 'She felt a twinge of schadenfreude reading the review of her rival\'s book - then immediately felt guilty about it.',
    hindi_equivalent: 'दूसरों के दुख में सुख (Doosron ke dukh mein sukh)',
  },
  {
    word: 'Tsundoku',
    pronunciation: '/tsun-DOH-ku/',
    meaning: 'Japanese for the habit of buying books and letting them pile up unread. Specifically the act of leaving books to accumulate with the intention of reading them eventually.',
    why_it_exists: 'Japan has a culture of intense bibliophilia combined with the awareness that the act of acquiring books is separate from the act of reading them. Tsundoku recognizes both the pleasure of the acquisition and the guilt of the pile - and names the condition without judgment.',
    usage: 'Her apartment had reached peak tsundoku - three unread books on the nightstand, seven more in a bag from last week\'s visit to the shop.',
    hindi_equivalent: 'किताबें खरीदते जाना, पढ़ना कभी नहीं (Kitaaben kharidte jaana, padhna kabhi nahi)',
  },
  {
    word: 'Jugaad',
    pronunciation: '/joo-GAAD/',
    meaning: 'A Hindi/Punjabi concept for frugal, flexible innovation - finding a simple, cheap, improvised solution to a problem using whatever is available; the mindset of making do creatively.',
    why_it_exists: 'India\'s history of material scarcity and institutional unreliability made jugaad not just a backup plan but often the only plan. The word entered global business vocabulary around 2010, when management consultants began writing about it as a distinctly Indian approach to innovation.',
    usage: 'The entire irrigation system was a masterpiece of jugaad - bicycle pumps, old pipes, and gravity doing the work of equipment that cost fifty times as much.',
    hindi_equivalent: 'जुगाड़ ही है जुगाड़ (it is its own equivalent - a uniquely Indian concept)',
  },
];

// ─────────────── LANGUAGE STORIES (from Samvaad) ───────────────

export const LANGUAGE_STORIES: BhashaStory[] = [
  {
    title: 'Saudade and the Soul of Portugal',
    word: 'Saudade',
    language: 'Portuguese',
    script: 'Saudade',
    story: `Saudade derives from the Latin "solitatem" (solitude), entering Old Galician-Portuguese as "soedade" before evolving into its modern form. But etymology only carries you to the container - the content of the word comes from seven centuries of Portuguese and Brazilian emotional life.\n\nThe concept appears first in medieval Galician-Portuguese poetry of the 13th century, in the troubadour tradition. It became most fully developed in Fado - the traditional Portuguese music form that is, above all, the music of saudade. Fado singers describe themselves as "doing saudade," as if it were an active practice.\n\nWhat makes saudade philosophically interesting is that it can be felt for things that never existed. You can feel saudade for a version of yourself you never became, for a love affair that never happened, for a childhood that was happier in memory than in fact. The writer Manuel de Melo defined it in 1660: "A pleasure you suffer, an ailment you enjoy." Saudade does not want resolution. It wants to be sat with.`,
    usage_examples: [
      'She looked at the old photographs with saudade, not quite grieving, not quite happy.',
      'There is a saudade in autumn light - the year remembering its own summer.',
    ],
    cultural_note: 'Saudade appears in every culture but most cultures lack a single word for it. The Portuguese gave this universal human experience a home in language.',
  },
  {
    title: 'Wabi-Sabi and the Art of Imperfection',
    word: 'Wabi-Sabi',
    language: 'Japanese',
    script: '侘び寂び',
    story: `Wabi and sabi were originally separate concepts in Japanese aesthetics. Wabi referred to the loneliness and simplicity of rustic life. In the 16th century, under the influence of Zen Buddhism and the tea ceremony, wabi came to mean the beauty of simple, natural, irregular things. The tea master Sen no Rikyu deliberately used rough, asymmetric, imperfect tea bowls rather than smooth Chinese porcelain.\n\nSabi originally meant loneliness - related to the verb "sabiru" (to rust, to become desolate). It evolved to mean the beauty that comes with age and use: the patina of an old wooden floor, the moss on a stone lantern, the crack in a teacup repaired with gold (kintsugi).\n\nTogether, wabi-sabi describes a worldview: that all things are impermanent, imperfect, and incomplete - and that this is not a problem to be solved but the very condition of beauty. Applied to humans: the life that has suffered and healed is richer, not lesser. This is not passivity - it is acceptance that transforms perception.`,
    usage_examples: [
      'The old wooden table, with its scratches and watermarks, embodied wabi-sabi - it had lived.',
      'Kintsugi is wabi-sabi made literal: the broken places, repaired in gold, become the most beautiful parts.',
    ],
    cultural_note: 'Modern consumer culture is built on the opposite of wabi-sabi: the new, the perfect, the unblemished. Wabi-sabi is a counter-philosophy - it asks what we lose when we insist on perfection.',
  },
  {
    title: 'Moksha - Liberation from the Cycle',
    word: 'Moksha',
    language: 'Sanskrit',
    script: 'मोक्ष',
    story: `Moksha derives from the Sanskrit root "muc" (to release, to free). The concept appears as early as the Upanishads (900-600 BCE), where it is described as the direct knowledge of the identity between Atman (the individual self) and Brahman (the universal self).\n\nIn Advaita Vedanta, moksha is the realization that the apparent duality between self and world is a conceptual overlay - an error of perception (maya). Moksha is not attaining something new but recognizing what was always already the case. Different Indian philosophical schools define moksha differently: in Advaita Vedanta it is the recognition of non-duality; in Vishishtadvaita it is eternal communion with the personal God; in Buddhism it is the cessation of craving; in Jainism it is the removal of karma from the soul.\n\nWhat all traditions share: moksha is not heaven (a post-death reward state) but a fundamental shift in perception - available in life, not only after death. The Jivanmukta - the "liberated while living" - is a recognized figure in Hindu tradition.`,
    usage_examples: [
      'For the renunciant, moksha was not a distant goal but a present possibility - available in the next breath if the mind could be quieted.',
      'Moksha is not the opposite of life. It is life without the filters of fear and craving.',
    ],
    cultural_note: 'Every culture has a concept of ultimate liberation: moksha, nirvana, salvation, enlightenment. That the same intuition appears across all traditions may itself be significant.',
  },
  {
    title: 'Jugaad - The Philosophy of Making Do',
    word: 'Jugaad',
    language: 'Hindi / Punjabi',
    script: 'जुगाड़',
    story: `Jugaad comes from the Hindi/Punjabi verb "jugaadna" - to improvise, to find a way, to cobble together. The word has two lives: its colloquial Hindi life and its global management-theory life.\n\nIn everyday Hindi, jugaad is the motorcycle converted into a transport vehicle by attaching a wooden platform; it is the fan made from an old electric motor; it is the water pipe repaired with duct tape and optimism. Jugaad is what you do when the "right" solution is unavailable or unaffordable. In management theory, jugaad became a framework for reverse innovation - developing products in resource-constrained environments that are so efficient they succeed everywhere.\n\nThe Western equivalent might be "hack" in its original, positive sense - a clever improvisation. But jugaad carries a different cultural weight. In India's history of material scarcity and institutional unreliability, jugaad was not a backup plan. It was often the only plan. The philosophy of jugaad is inseparable from centuries of managing with less than you need, and finding in that constraint not poverty but creativity.`,
    usage_examples: [
      'The entire irrigation system was a masterpiece of jugaad - bicycle pumps, plastic pipes, and gravity.',
      'Silicon Valley calls it minimum viable product. We\'ve been doing jugaad for centuries.',
    ],
    cultural_note: 'Jugaad may encode a form of wisdom that over-resourced environments lose: the ability to look at what you have and ask "what can this become?"',
  },
];

// ─────────────── MODERN / GEN Z TERMS ───────────────

export const MODERN_TERMS: BhashaModernTerm[] = [
  {
    term: 'Delulu',
    meaning: 'Delusional in an aspirational, self-aware way - convincing yourself something will happen through sheer belief, even without evidence. Often used approvingly: "the delulu to delusion pipeline is real."',
    origin: 'From "delusional," clipped and softened. Popularized on TikTok and K-pop fan communities around 2022-2023, where fans would jokingly call themselves delulu for believing in unlikely outcomes.',
    example: '"I applied to 47 jobs I was underqualified for. Pure delulu behavior. Got three of them."',
    note: 'Interesting as a linguistic phenomenon: "delulu" defangs the clinical word "delusional" by making it sound cute. It transforms what was a pathology into a personality trait - the refusal to be limited by probability.',
    hindi_meaning: 'भ्रम या कल्पना की दुनिया में रहना (अत्यधिक आशावादी होना)।',
    desi_equivalent: 'Sab theek ho jaayega wali mindset',
  },
  {
    term: 'Main Character Energy',
    meaning: 'The attitude of treating yourself as the protagonist of your own life story - making deliberate, interesting choices; narrating your own experience as if it matters; refusing to be background.',
    origin: 'From film/TV narrative terminology, popularized on TikTok around 2021. The "main character" trope was first used mockingly (for people who act like the world revolves around them) but quickly became genuinely aspirational.',
    example: '"She walked into the interview like she already had the job. Pure main character energy."',
    note: 'Philosophically interesting: "main character energy" is essentially a lay-person\'s version of what existentialists call "authenticity" - living as if your choices and story matter, rather than drifting through life as a supporting character in other people\'s plots.',
    hindi_meaning: 'खुद को जीवन का मुख्य पात्र मानना और आत्मविश्वास से भरपूर होना।',
    desi_equivalent: 'Hero wali entry',
  },
  {
    term: 'Rizz',
    meaning: 'Natural charm and charisma, especially in romantic contexts. The ability to attract people effortlessly - through manner, wit, presence - without trying visibly hard.',
    origin: 'From "charisma," clipped from the middle of the word. Popularized by streamer Kai Cenat in 2022-23, then entering mainstream vocabulary after actor Tom Holland mentioned it in an interview.',
    example: '"He didn\'t say anything clever. He just walked in with the rizz and the whole room shifted."',
    note: 'Rizz is interesting because it distinguishes between performed charm (which can be learned) and something more fundamental - a quality of presence. "Unspoken rizz" (attracting without words) became its own sub-category. The concept maps onto older ideas about charisma and magnetism.',
    hindi_meaning: 'आकर्षण क्षमता; किसी को प्रभावित या रिझाने की कला।',
    desi_equivalent: 'Dum hai is bande mein',
  },
  {
    term: 'Era',
    meaning: 'A distinct phase of your life defined by a particular identity, focus, or emotional state. "Being in your ____ era" means fully inhabiting that phase without apology.',
    origin: 'From Taylor Swift\'s "The Eras Tour" (2023), which retrospectively named distinct periods of her artistic life. Fans adopted "era" to describe their own life phases, turning a music concept into a broader cultural framework.',
    example: '"I\'m in my reading era - 40 books this year, minimal social media, bed by 10."',
    note: 'The "era" frame is psychologically useful: it treats identity as fluid and sequential rather than fixed. You are not permanently becoming a hermit - you are in your hermit era. This reduces the pressure to be consistent and allows for deliberate reinvention.',
    hindi_meaning: 'जीवन का एक विशिष्ट चरण या दौर।',
    desi_equivalent: 'Apna woh wala time / apna ek alag phase',
  },
  {
    term: 'Situationship',
    meaning: 'A romantic connection that is more than friendship but less than a defined relationship - ambiguous, undefined, and often emotionally intense precisely because of what it isn\'t labeled.',
    origin: 'Emerged from dating culture vocabulary on social media around 2019-2021. The word fills a genuine gap: English lacks a word for the stage between "talking" and "together" that many relationships now occupy.',
    example: '"We\'ve been in this situationship for six months. He texts every day but won\'t meet my friends."',
    note: 'Situationship is linguistically significant because it named an experience that many people were having but lacked vocabulary for - the relationship that is and isn\'t. Having a word for it changed how people could think and talk about it.',
    hindi_meaning: 'ऐसा अनौपचारिक रिश्ता जो दोस्ती से अधिक हो परंतु उसकी कोई स्पष्ट परिभाषा न हो।',
    desi_equivalent: 'Na ghar ka na ghat ka wala scene',
  },
  {
    term: 'Touch Grass',
    meaning: 'To log off and re-engage with the physical world; to take a break from the internet, screens, or online discourse and remember that physical reality exists.',
    origin: 'From the online gaming community, where "touching grass" (literally going outside) became a humorous insult for people who spent too much time online. By 2021-22 it became self-deprecating and affectionate.',
    example: '"I spent three hours arguing about a movie on Twitter. I need to go touch grass immediately."',
    note: 'The phrase is interesting because it uses a physical action - touching grass - as a synecdoche for entire categories of experience: going outside, being present, engaging with embodied reality. The choice of grass (universal, accessible, distinctly non-digital) is deliberate.',
    hindi_meaning: 'वास्तविक दुनिया में लौटना और प्रकृति से जुड़ना।',
    desi_equivalent: 'Bahar nikal, hawa khaa',
  },
  {
    term: 'Understood the Assignment',
    meaning: 'To have completely and brilliantly done what was required; to have met the moment perfectly - often used as enthusiastic praise when someone has exceeded expectations.',
    origin: 'From academic/workplace vocabulary, applied to pop culture performance. First widely used on Twitter/TikTok around 2020-21 to praise celebrities who showed up exactly right for a moment.',
    example: '"Billie Eilish at the Met Gala? She understood the assignment completely."',
    note: 'The phrase uses academic framing (the "assignment") to describe performance in any context. It implies a test that was given (often invisible or unspoken) and a person who read it perfectly. What\'s interesting is the assumption that there is always an assignment - always a right way to read a moment.',
    hindi_meaning: 'दिए गए काम या भूमिका को पूरी तरह और बेहतरीन ढंग से निभाना।',
    desi_equivalent: 'Ekdum sahi pakda usne',
  },
  {
    term: 'Rent Free',
    meaning: 'When someone or something occupies your thoughts constantly without your permission or desire - usually something you dislike or that bothers you, living "rent free" in your head.',
    origin: 'From the metaphor of a tenant (thought or person) living in your mental "space" without paying rent - i.e., without your willing invitation or any benefit to you. Became widely used on Twitter around 2019.',
    example: '"That offhand comment he made three years ago still lives rent free in my head at 2am."',
    note: 'The metaphor is precise: a thought that lives rent free is one you didn\'t invite, can\'t evict, and isn\'t paying you anything. It captures the involuntary, asymmetric quality of intrusive thoughts - you are giving mental real estate to something that gives nothing back.',
    hindi_meaning: 'दिमाग में बिना किसी प्रयास के लगातार बने रहना।',
    desi_equivalent: 'Dimaag mein ghur gaya hai',
  },
];


// ─────────────── ENGLISH MASTERY ───────────────

export const ENGLISH_MASTERY_ENTRIES: EnglishMasteryEntry[] = [
  {
    "concept": "Present Perfect vs. Simple Past",
    "conceptExplanation": "Use Simple Past for actions completed at a specific time in the past (e.g., 'yesterday', 'in 2020'). Use Present Perfect for actions completed at an unspecified time, or when the action has relevance to the present (e.g., life experiences).",
    "drills": [
      {
        "sentence": "I ___ to Delhi last year, but I ___ there since then.",
        "options": [
          "went / haven't been",
          "have gone / didn't go",
          "went / didn't go",
          "have gone / wasn't"
        ],
        "correctAnswer": "went / haven't been",
        "explanation": "Simple past for specific past, present perfect for ongoing past-to-present interval."
      },
      {
        "sentence": "She ___ three projects today, and it's only 2 PM.",
        "options": [
          "finished",
          "has finished",
          "had finished",
          "is finishing"
        ],
        "correctAnswer": "has finished",
        "explanation": "Today is still ongoing, and the accomplishments have current relevance."
      },
      {
        "sentence": "___ you ___ your lunch yet?",
        "options": [
          "Did / eat",
          "Have / eaten",
          "Had / eaten",
          "Are / eating"
        ],
        "correctAnswer": "Have / eaten",
        "explanation": "'Yet' is commonly used with present perfect to ask about actions expected up to the present moment."
      },
      {
        "sentence": "Alexander Graham Bell ___ the telephone in 1876.",
        "options": [
          "has invented",
          "invented",
          "had invented",
          "was inventing"
        ],
        "correctAnswer": "invented",
        "explanation": "The invention happened at a specific, completed point in the past."
      }
    ],
    "dialogue": {
      "speakerA": "Have you finished the report yet?",
      "speakerA_trans": "क्या आपने अभी तक रिपोर्ट पूरी कर ली है?",
      "speakerB": "Yes, I finished it yesterday evening.",
      "speakerB_trans": "हाँ, मैंने इसे कल शाम को पूरा कर लिया था।",
      "context": "A manager checking progress on an assignment."
    },
    "thinkInEnglish": {
      "prompt": "How would you tell someone you have met their manager before, without specifying when?",
      "incorrectDesiLiteral": "I met your manager before.",
      "correctNatural": "I have met your manager before.",
      "explanation": "Use present perfect ('have met') for life experiences with unspecified time."
    },
    "desiCorrection": {
      "incorrect": "I have seen that movie yesterday.",
      "correct": "I saw that movie yesterday.",
      "why": "Avoid using present perfect ('have seen') with specific past time markers like 'yesterday'."
    },
    "dayIndex": 0,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Past Perfect vs. Simple Past",
    "conceptExplanation": "Use Simple Past for a past action. Use Past Perfect ('had' + past participle) to show that one action occurred before another action in the past.",
    "drills": [
      {
        "sentence": "By the time the train ___, we ___ at the station for an hour.",
        "options": [
          "arrived / had been waiting",
          "had arrived / waited",
          "arrived / waited",
          "was arriving / had waited"
        ],
        "correctAnswer": "arrived / had been waiting",
        "explanation": "The waiting occurred before the train's arrival, which is in the simple past."
      },
      {
        "sentence": "When I reached the cinema, the movie ___ already ___.",
        "options": [
          "had / started",
          "has / started",
          "was / starting",
          "did / start"
        ],
        "correctAnswer": "had / started",
        "explanation": "The movie started before the speaker reached the cinema, so past perfect is required."
      },
      {
        "sentence": "He ___ the keys that he ___ earlier that morning.",
        "options": [
          "found / lost",
          "found / had lost",
          "had found / lost",
          "was finding / lost"
        ],
        "correctAnswer": "found / had lost",
        "explanation": "Losing the keys happened before finding them, so losing is past perfect."
      },
      {
        "sentence": "She realized she ___ her passport at home after she ___ at the airport.",
        "options": [
          "left / arrived",
          "had left / arrived",
          "left / had arrived",
          "was leaving / arrived"
        ],
        "correctAnswer": "had left / arrived",
        "explanation": "Leaving the passport at home happened before arriving at the airport."
      }
    ],
    "dialogue": {
      "speakerA": "Why were you late for the meeting?",
      "speakerA_trans": "आप मीटिंग के लिए लेट क्यों थे?",
      "speakerB": "Because my alarm hadn't gone off.",
      "speakerB_trans": "क्योंकि मेरा अलार्म बजा ही नहीं था।",
      "context": "An employee explaining lateness to a colleague."
    },
    "thinkInEnglish": {
      "prompt": "How do you explain that your friend left before you got home?",
      "incorrectDesiLiteral": "When I came home, my friend already went.",
      "correctNatural": "When I came home, my friend had already gone.",
      "explanation": "The friend's departure happened before you came home, so past perfect is used."
    },
    "desiCorrection": {
      "incorrect": "I had completed my degree in 2018.",
      "correct": "I completed my degree in 2018.",
      "why": "Do not use past perfect unless relating it to another past action; use simple past for a single completed past event."
    },
    "dayIndex": 1,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Present Continuous for Future Plans",
    "conceptExplanation": "Use Present Continuous (am/is/are + verb-ing) for future arrangements that have already been scheduled or confirmed with others. Do not use 'will' for social arrangements.",
    "drills": [
      {
        "sentence": "I ___ dinner with Rajiv tomorrow at 8 PM. We booked the table.",
        "options": [
          "will have",
          "am having",
          "have",
          "going to have"
        ],
        "correctAnswer": "am having",
        "explanation": "A confirmed arrangement with a specific time and booking uses Present Continuous."
      },
      {
        "sentence": "What ___ you ___ this weekend?",
        "options": [
          "will / do",
          "are / doing",
          "do / do",
          "shall / do"
        ],
        "correctAnswer": "are / doing",
        "explanation": "Asking about social arrangements/plans for a specific upcoming period."
      },
      {
        "sentence": "We ___ to London next Friday. We got the tickets.",
        "options": [
          "fly",
          "are flying",
          "will fly",
          "have flown"
        ],
        "correctAnswer": "are flying",
        "explanation": "Since tickets are bought, this is a confirmed arrangement, so Present Continuous is most natural."
      },
      {
        "sentence": "She ___ a presentation tomorrow at 10 AM.",
        "options": [
          "gives",
          "is giving",
          "will give",
          "gave"
        ],
        "correctAnswer": "is giving",
        "explanation": "Scheduled calendar events are best expressed with Present Continuous."
      }
    ],
    "dialogue": {
      "speakerA": "Are you free tomorrow afternoon?",
      "speakerA_trans": "क्या आप कल दोपहर खाली हैं?",
      "speakerB": "No, I am meeting a client at three.",
      "speakerB_trans": "नहीं, मैं तीन बजे एक ग्राहक से मिल रहा हूँ।",
      "context": "Colleagues coordinating schedules."
    },
    "thinkInEnglish": {
      "prompt": "How would you tell a friend that you are going to the cinema tonight with someone else?",
      "incorrectDesiLiteral": "I will go to the cinema tonight with Neha.",
      "correctNatural": "I am going to the cinema tonight with Neha.",
      "explanation": "Use present continuous for social plans already agreed upon."
    },
    "desiCorrection": {
      "incorrect": "I will meet you tomorrow at 4 PM as we decided.",
      "correct": "I am meeting you tomorrow at 4 PM as we decided.",
      "why": "When plans are already decided and fixed, Present Continuous sounds much more natural and committed than 'will'."
    },
    "dayIndex": 2,
    "theme": "Verb Tenses"
  },
  {
    "concept": "State vs. Action Verbs",
    "conceptExplanation": "State verbs describe states, feelings, or beliefs (e.g., love, hate, know, believe, understand, resemble, own). They are not used in continuous (-ing) forms. Action verbs describe activities and can be used in continuous forms.",
    "drills": [
      {
        "sentence": "I ___ the answer to your question now.",
        "options": [
          "am knowing",
          "know",
          "knows",
          "have known"
        ],
        "correctAnswer": "know",
        "explanation": "'Know' is a state verb and cannot be used in the continuous form."
      },
      {
        "sentence": "She ___ a car and two laptops.",
        "options": [
          "is owning",
          "owns",
          "own",
          "has owned"
        ],
        "correctAnswer": "owns",
        "explanation": "'Own' is a state verb of possession and takes the simple present."
      },
      {
        "sentence": "I ___ what you mean, but I don't agree.",
        "options": [
          "am understanding",
          "understand",
          "understands",
          "understood"
        ],
        "correctAnswer": "understand",
        "explanation": "'Understand' represents a mental state, which is static."
      },
      {
        "sentence": "This soup ___ delicious.",
        "options": [
          "is tasting",
          "tastes",
          "tasted",
          "has tasted"
        ],
        "correctAnswer": "tastes",
        "explanation": "When describing a quality, 'taste' is a state verb."
      }
    ],
    "dialogue": {
      "speakerA": "Do you need help with this code?",
      "speakerA_trans": "क्या आपको इस कोड के साथ मदद चाहिए?",
      "speakerB": "No thanks, I understand it now.",
      "speakerB_trans": "नहीं धन्यवाद, मैं इसे अब समझ रहा हूँ।",
      "context": "A developer talking to a team lead."
    },
    "thinkInEnglish": {
      "prompt": "How do you express that you are currently loving your new job?",
      "incorrectDesiLiteral": "I am loving my new job.",
      "correctNatural": "I love my new job. / I really enjoy my new job.",
      "explanation": "'Love' is a state verb; except for the informal McDonald's slogan, it is typically used in the simple tense."
    },
    "desiCorrection": {
      "incorrect": "I am knowing your brother since childhood.",
      "correct": "I have known your brother since childhood.",
      "why": "'Know' is a state verb. Since we refer to a period starting in the past and continuing to the present, use Present Perfect."
    },
    "dayIndex": 3,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Used to vs. Would for Past Habits",
    "conceptExplanation": "Use both 'used to' and 'would' for past repeated actions (habits). However, use ONLY 'used to' for past states (e.g., 'I used to live in Mumbai'). Do not use 'would' for past states.",
    "drills": [
      {
        "sentence": "We ___ go to the beach every Sunday when we lived in Goa.",
        "options": [
          "would",
          "used to",
          "both 'would' and 'used to'",
          "were used to"
        ],
        "correctAnswer": "both 'would' and 'used to'",
        "explanation": "Going to the beach is a repeated past action, so both are correct."
      },
      {
        "sentence": "I ___ have long hair when I was a child.",
        "options": [
          "would",
          "used to",
          "was used to",
          "used"
        ],
        "correctAnswer": "used to",
        "explanation": "Having long hair is a past state, so only 'used to' is correct."
      },
      {
        "sentence": "He ___ live in Delhi before moving to Bangalore.",
        "options": [
          "would",
          "used to",
          "was used to",
          "use to"
        ],
        "correctAnswer": "used to",
        "explanation": "Living somewhere is a state, not a quick repeated action, so 'used to' is required."
      },
      {
        "sentence": "Every morning, my grandfather ___ read the newspaper aloud.",
        "options": [
          "would",
          "used to",
          "both 'would' and 'used to'",
          "uses to"
        ],
        "correctAnswer": "both 'would' and 'used to'",
        "explanation": "Reading is a repeated past action, so both are correct."
      }
    ],
    "dialogue": {
      "speakerA": "Did you play sports in school?",
      "speakerA_trans": "क्या आप स्कूल में खेल खेलते थे?",
      "speakerB": "Yes, I would play football every evening.",
      "speakerB_trans": "हाँ, मैं हर शाम फुटबॉल खेलता था।",
      "context": "Friends reminiscing about childhood."
    },
    "thinkInEnglish": {
      "prompt": "How do you say that you had a bicycle in the past but don't have it anymore?",
      "incorrectDesiLiteral": "I would have a bicycle in school days.",
      "correctNatural": "I used to have a bicycle when I was in school.",
      "explanation": "Having a bicycle is a state of possession, so use 'used to', not 'would'."
    },
    "desiCorrection": {
      "incorrect": "I would live in Chennai five years ago.",
      "correct": "I used to live in Chennai five years ago. / I lived in Chennai five years ago.",
      "why": "Living in a city is a state. Do not use 'would' for past states."
    },
    "dayIndex": 4,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Present Perfect Continuous",
    "conceptExplanation": "Use Present Perfect Continuous (has/have been + verb-ing) for actions that started in the past and are still continuing, or have just stopped and have a clear result in the present.",
    "drills": [
      {
        "sentence": "I ___ for two hours. My eyes are tired.",
        "options": [
          "am reading",
          "have been reading",
          "had been reading",
          "read"
        ],
        "correctAnswer": "have been reading",
        "explanation": "Focuses on the duration of an activity that started in the past and is still ongoing or just ended with a present result."
      },
      {
        "sentence": "It ___ since morning. The streets are flooded.",
        "options": [
          "is raining",
          "has been raining",
          "rained",
          "rains"
        ],
        "correctAnswer": "has been raining",
        "explanation": "Ongoing action starting in the past with current visible consequences."
      },
      {
        "sentence": "Why are you sweaty? I ___ in the gym.",
        "options": [
          "have worked out",
          "have been working out",
          "am working out",
          "worked out"
        ],
        "correctAnswer": "have been working out",
        "explanation": "The action has just finished, but the physical effect (sweating) is present."
      },
      {
        "sentence": "Rajiv ___ for a job since he graduated.",
        "options": [
          "is looking",
          "has been looking",
          "looked",
          "looks"
        ],
        "correctAnswer": "has been looking",
        "explanation": "Since is used to mark the start of the ongoing action."
      }
    ],
    "dialogue": {
      "speakerA": "How long have you been waiting here?",
      "speakerA_trans": "आप यहाँ कितनी देर से इंतज़ार कर रहे हैं?",
      "speakerB": "I have been waiting for forty minutes.",
      "speakerB_trans": "मैं चालीस मिनट से इंतज़ार कर रहा हूँ।",
      "context": "Two friends meeting at a cafe."
    },
    "thinkInEnglish": {
      "prompt": "How would you express that you have been learning music for three years?",
      "incorrectDesiLiteral": "I am learning music from last three years.",
      "correctNatural": "I have been learning music for three years.",
      "explanation": "Use present perfect continuous for ongoing durations and 'for' (not 'from') to state the length of time."
    },
    "desiCorrection": {
      "incorrect": "I am working in this company since 2021.",
      "correct": "I have been working in this company since 2021.",
      "why": "Avoid using Present Continuous ('am working') with 'since' or 'for'; use Present Perfect Continuous instead."
    },
    "dayIndex": 5,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Future Perfect",
    "conceptExplanation": "Use Future Perfect (will have + past participle) to describe an action that will be completed before a specific point in the future (often used with 'by the time' or 'by').",
    "drills": [
      {
        "sentence": "By next month, I ___ my project.",
        "options": [
          "will finish",
          "will have finished",
          "am finishing",
          "have finished"
        ],
        "correctAnswer": "will have finished",
        "explanation": "The completion happens before the future milestone ('by next month')."
      },
      {
        "sentence": "By 10 PM tonight, she ___ for twelve hours.",
        "options": [
          "will work",
          "will have worked",
          "will have been working",
          "works"
        ],
        "correctAnswer": "will have worked",
        "explanation": "Focuses on completion of work before 10 PM tonight."
      },
      {
        "sentence": "They ___ dinner by the time we arrive.",
        "options": [
          "will finish",
          "will have finished",
          "would finish",
          "are finishing"
        ],
        "correctAnswer": "will have finished",
        "explanation": "Dining will be completed before the future arrival."
      },
      {
        "sentence": "In two years, the government ___ the bridge.",
        "options": [
          "will build",
          "will have built",
          "is building",
          "has built"
        ],
        "correctAnswer": "will have built",
        "explanation": "The building will be completed within/before the end of the two-year period."
      }
    ],
    "dialogue": {
      "speakerA": "Can I call you tomorrow at nine?",
      "speakerA_trans": "क्या मैं कल नौ बजे फोन कर सकता हूँ?",
      "speakerB": "Yes, I will have finished my breakfast by then.",
      "speakerB_trans": "हाँ, तब तक मैं अपना नाश्ता खत्म कर चुका हूँगा।",
      "context": "Coordinating a phone call time."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell your boss you will finish a task before the Friday deadline?",
      "incorrectDesiLiteral": "I will finish this task till Friday.",
      "correctNatural": "I will have finished this task by Friday.",
      "explanation": "'Will have finished' + 'by' is the correct way to show completion before a deadline."
    },
    "desiCorrection": {
      "incorrect": "I will complete my report till tomorrow morning.",
      "correct": "I will have completed my report by tomorrow morning.",
      "why": "Use 'by' (not 'till') for deadlines, and Future Perfect to show completion before that deadline."
    },
    "dayIndex": 6,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Future Continuous",
    "conceptExplanation": "Use Future Continuous (will be + verb-ing) to describe an action that will be in progress at a specific time in the future.",
    "drills": [
      {
        "sentence": "This time tomorrow, we ___ on a beach in Goa.",
        "options": [
          "will lie",
          "will be lying",
          "are lying",
          "lie"
        ],
        "correctAnswer": "will be lying",
        "explanation": "The action of lying will be ongoing at that specific future time."
      },
      {
        "sentence": "Don't call me at 2 PM. I ___ a client.",
        "options": [
          "will meet",
          "will be meeting",
          "meet",
          "am meeting"
        ],
        "correctAnswer": "will be meeting",
        "explanation": "The meeting will be in progress at that time, making it a bad time to call."
      },
      {
        "sentence": "At the meeting, she ___ the new company policy.",
        "options": [
          "will explain",
          "will be explaining",
          "explains",
          "explained"
        ],
        "correctAnswer": "will be explaining",
        "explanation": "The explanation will be the ongoing activity during the meeting."
      },
      {
        "sentence": "They ___ football when we get to the park.",
        "options": [
          "will play",
          "will be playing",
          "play",
          "are playing"
        ],
        "correctAnswer": "will be playing",
        "explanation": "The playing will be in progress when we arrive."
      }
    ],
    "dialogue": {
      "speakerA": "What will you be doing this evening?",
      "speakerA_trans": "आप आज शाम क्या कर रहे होंगे?",
      "speakerB": "I will be watching the cricket match.",
      "speakerB_trans": "मैं क्रिकेट मैच देख रहा हूँगा।",
      "context": "Chatting about evening plans."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a friend that you will be sleeping at midnight tonight?",
      "incorrectDesiLiteral": "At midnight, I will sleep.",
      "correctNatural": "At midnight, I will be sleeping.",
      "explanation": "Use Future Continuous to show the action is in progress at that specific time."
    },
    "desiCorrection": {
      "incorrect": "I will be writing to you soon.",
      "correct": "I will write to you soon.",
      "why": "Use simple future ('will write') for future decisions or promises; Future Continuous implies the action is in progress at a specific time."
    },
    "dayIndex": 7,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Past Continuous vs. Simple Past",
    "conceptExplanation": "Use the Past Continuous to describe a background action that was in progress, and the Simple Past for a shorter action that interrupted it.",
    "drills": [
      {
        "sentence": "While I ___ down the street, I ___ Rajiv.",
        "options": [
          "walked / saw",
          "was walking / saw",
          "walked / was seeing",
          "was walking / was seeing"
        ],
        "correctAnswer": "was walking / saw",
        "explanation": "Walking is the background continuous action; seeing is the brief interrupting event."
      },
      {
        "sentence": "The power ___ out while they ___ dinner.",
        "options": [
          "went / had",
          "had gone / were having",
          "went / were having",
          "was going / had"
        ],
        "correctAnswer": "went / were having",
        "explanation": "Power going out is the interruption (simple past); having dinner is the ongoing event (past continuous)."
      },
      {
        "sentence": "She ___ a book when the phone ___.",
        "options": [
          "read / rang",
          "was reading / rang",
          "read / was ringing",
          "was reading / was ringing"
        ],
        "correctAnswer": "was reading / rang",
        "explanation": "Reading is the ongoing past action; ringing is the interruption."
      },
      {
        "sentence": "I ___ my keys while I ___ in the park.",
        "options": [
          "dropped / jogged",
          "dropped / was jogging",
          "was dropping / jogged",
          "was dropping / was jogging"
        ],
        "correctAnswer": "dropped / was jogging",
        "explanation": "Jogging is the continuous action; dropping keys is the single moment."
      }
    ],
    "dialogue": {
      "speakerA": "Did you hear the thunderstorm last night?",
      "speakerA_trans": "क्या आपने कल रात आंधी-तूफान की आवाज सुनी?",
      "speakerB": "No, I was sleeping soundly.",
      "speakerB_trans": "नहीं, मैं गहरी नींद में सो रहा था।",
      "context": "Discussing night events."
    },
    "thinkInEnglish": {
      "prompt": "How do you say you were cooking when your brother arrived?",
      "incorrectDesiLiteral": "My cooking was going on when my brother came.",
      "correctNatural": "I was cooking when my brother arrived.",
      "explanation": "Simple past for arrival, past continuous for cooking."
    },
    "desiCorrection": {
      "incorrect": "He was crossing the road and a car hit him.",
      "correct": "While he was crossing the road, a car hit him.",
      "why": "Use 'while' or 'when' to clearly show the relationship between the background action and the interruption."
    },
    "dayIndex": 8,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Present Perfect vs. Present Perfect Continuous",
    "conceptExplanation": "Use Present Perfect to focus on the result of a completed action (e.g., 'I have painted the kitchen'). Use Present Perfect Continuous to focus on the activity itself and its duration (e.g., 'I have been painting the kitchen').",
    "drills": [
      {
        "sentence": "I ___ my assignment. Here it is.",
        "options": [
          "have been finishing",
          "have finished",
          "finished",
          "had finished"
        ],
        "correctAnswer": "have finished",
        "explanation": "Focuses on the completed result now."
      },
      {
        "sentence": "He ___ for hours, and his hands are dirty.",
        "options": [
          "has gardened",
          "has been gardening",
          "gardened",
          "is gardening"
        ],
        "correctAnswer": "has been gardening",
        "explanation": "Focuses on the activity and duration, with visible results."
      },
      {
        "sentence": "We ___ three cups of tea this morning.",
        "options": [
          "have been drinking",
          "have drunk",
          "drank",
          "had drunk"
        ],
        "correctAnswer": "have drunk",
        "explanation": "Focuses on the completed quantity, not the ongoing process."
      },
      {
        "sentence": "How long ___ you ___ English?",
        "options": [
          "have / studied",
          "have / been studying",
          "are / studying",
          "did / study"
        ],
        "correctAnswer": "have / been studying",
        "explanation": "Focuses on the ongoing duration of study."
      }
    ],
    "dialogue": {
      "speakerA": "You look exhausted. What have you been doing?",
      "speakerA_trans": "आप बहुत थके हुए लग रहे हैं। आप क्या कर रहे थे?",
      "speakerB": "I have been running in the park.",
      "speakerB_trans": "मैं पार्क में दौड़ रहा था।",
      "context": "Asking about exhaustion."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell someone you've written five pages of your book today?",
      "incorrectDesiLiteral": "I have been writing five pages today.",
      "correctNatural": "I have written five pages today.",
      "explanation": "Use present perfect for quantities/results completed rather than continuous duration."
    },
    "desiCorrection": {
      "incorrect": "I have been knowing him for years.",
      "correct": "I have known him for years.",
      "why": "'Know' is a state verb and cannot be used in continuous forms; use Present Perfect instead."
    },
    "dayIndex": 9,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Going to vs. Will for Future Decisions",
    "conceptExplanation": "Use 'will' for decisions made at the moment of speaking (spontaneous). Use 'going to' for decisions or plans already made before speaking.",
    "drills": [
      {
        "sentence": "A: We don't have any milk. B: Really? I ___ buy some.",
        "options": [
          "will go and",
          "am going to",
          "go and",
          "shall have"
        ],
        "correctAnswer": "will go and",
        "explanation": "Spontaneous decision at the moment of learning about the milk shortage."
      },
      {
        "sentence": "I ___ Rajiv tomorrow. We planned this last week.",
        "options": [
          "will meet",
          "am going to meet",
          "meet",
          "have met"
        ],
        "correctAnswer": "am going to meet",
        "explanation": "Plan made prior to the conversation."
      },
      {
        "sentence": "Look at those dark clouds! It ___ rain.",
        "options": [
          "will",
          "is going to",
          "rains",
          "would"
        ],
        "correctAnswer": "is going to",
        "explanation": "Prediction based on current physical evidence."
      },
      {
        "sentence": "A: Why are you holding that paint? B: I ___ paint my door.",
        "options": [
          "will",
          "am going to",
          "paint",
          "shall"
        ],
        "correctAnswer": "am going to",
        "explanation": "Intent/plan established before the conversation."
      }
    ],
    "dialogue": {
      "speakerA": "The phone is ringing.",
      "speakerA_trans": "फोन बज रहा है।",
      "speakerB": "I will get it.",
      "speakerB_trans": "मैं उठाता हूँ।",
      "context": "Spontaneous reaction to a ring."
    },
    "thinkInEnglish": {
      "prompt": "How would you spontaneously offer to carry a heavy bag for an elderly person?",
      "incorrectDesiLiteral": "I am going to carry your bag.",
      "correctNatural": "I will carry your bag for you. / Let me carry your bag.",
      "explanation": "Use 'will' for instant, helpful offers."
    },
    "desiCorrection": {
      "incorrect": "I will buy a new house next month, everything is finalized.",
      "correct": "I am going to buy a new house next month, everything is finalized.",
      "why": "Use 'going to' (or Present Continuous) for prior decisions and pre-arranged plans."
    },
    "dayIndex": 10,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Past Continuous for Background Descriptions",
    "conceptExplanation": "Use the Past Continuous to paint a scene or set the atmosphere at the beginning of a story, while using the Simple Past to initiate the actual sequence of events.",
    "drills": [
      {
        "sentence": "The sun ___ and the birds ___ when I stepped outside.",
        "options": [
          "shone / sang",
          "was shining / were singing",
          "shone / were singing",
          "was shining / sang"
        ],
        "correctAnswer": "was shining / were singing",
        "explanation": "Sets the background atmosphere at the start of the scene."
      },
      {
        "sentence": "Everyone in the cafe ___ when suddenly a loud crash occurred.",
        "options": [
          "chatted",
          "was chatting",
          "had chatted",
          "chats"
        ],
        "correctAnswer": "was chatting",
        "explanation": "Background activity in progress when the main event happens."
      },
      {
        "sentence": "Wind ___ through the trees and rain ___ against the glass.",
        "options": [
          "howled / beat",
          "was howling / was beating",
          "howled / was beating",
          "was howling / beat"
        ],
        "correctAnswer": "was howling / was beating",
        "explanation": "Sets the weather atmosphere in past continuous."
      },
      {
        "sentence": "While the children ___ in the yard, their father prepare lunch.",
        "options": [
          "played",
          "were playing",
          "had played",
          "are playing"
        ],
        "correctAnswer": "were playing",
        "explanation": "Continuous background play setting."
      }
    ],
    "dialogue": {
      "speakerA": "What did it look like when you arrived?",
      "speakerA_trans": "जब आप पहुंचे तो कैसा नजारा था?",
      "speakerB": "Music was playing and people were dancing.",
      "speakerB_trans": "संगीत बज रहा था और लोग नाच रहे थे।",
      "context": "Describing a party scene."
    },
    "thinkInEnglish": {
      "prompt": "How do you set the scene of a busy office morning in past tenses?",
      "incorrectDesiLiteral": "Phones rang and printers printed when I came.",
      "correctNatural": "Phones were ringing and printers were printing when I arrived.",
      "explanation": "Past continuous builds the active background environment."
    },
    "desiCorrection": {
      "incorrect": "It was raining when I woke up and the wind blew.",
      "correct": "It was raining and the wind was blowing when I woke up.",
      "why": "Keep parallel structure in the background description using Past Continuous for both rain and wind."
    },
    "dayIndex": 11,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Past Perfect Continuous",
    "conceptExplanation": "Use Past Perfect Continuous (had been + verb-ing) to show that an action started in the past and continued up until another point in the past, highlighting duration.",
    "drills": [
      {
        "sentence": "They ___ for two hours when Rajiv finally arrived.",
        "options": [
          "were talking",
          "had been talking",
          "talked",
          "have been talking"
        ],
        "correctAnswer": "had been talking",
        "explanation": "Action in progress with duration before a past point of arrival."
      },
      {
        "sentence": "The grass was wet because it ___ all night.",
        "options": [
          "rained",
          "had been raining",
          "was raining",
          "has been raining"
        ],
        "correctAnswer": "had been raining",
        "explanation": "The rain was continuous and finished right before the past observation of wet grass."
      },
      {
        "sentence": "She ___ for the exam for weeks, so she passed easily.",
        "options": [
          "studied",
          "had been studying",
          "was studying",
          "has been studying"
        ],
        "correctAnswer": "had been studying",
        "explanation": "Long-term preparation preceding the past event of taking/passing the exam."
      },
      {
        "sentence": "He was exhausted because he ___ since morning.",
        "options": [
          "worked",
          "had been working",
          "was working",
          "has worked"
        ],
        "correctAnswer": "had been working",
        "explanation": "Duration of past work causing past state of exhaustion."
      }
    ],
    "dialogue": {
      "speakerA": "Why did you quit your job?",
      "speakerA_trans": "आपने नौकरी क्यों छोड़ दी?",
      "speakerB": "I had been working twelve hours a day and felt burned out.",
      "speakerB_trans": "मैं दिन में बारह घंटे काम कर रहा था और थका हुआ महसूस कर रहा था।",
      "context": "Discussing career changes."
    },
    "thinkInEnglish": {
      "prompt": "How do you explain that you had been driving for five hours before finding a hotel?",
      "incorrectDesiLiteral": "We were driving for five hours then we found a hotel.",
      "correctNatural": "We had been driving for five hours before we found a hotel.",
      "explanation": "Past perfect continuous correctly links the prior duration to the past discovery."
    },
    "desiCorrection": {
      "incorrect": "I was waiting for you since 2 PM yesterday.",
      "correct": "I had been waiting for you since 2 PM yesterday.",
      "why": "When referring to an ongoing past duration starting at a specific point, use Past Perfect Continuous instead of simple Past Continuous."
    },
    "dayIndex": 12,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Verbs with Dual Meaning (State and Action)",
    "conceptExplanation": "Some verbs can be both state and action verbs with a shift in meaning. E.g., 'think' (opinion vs. active consideration), 'have' (possession vs. activity), 'see' (understanding/sight vs. dating/meeting).",
    "drills": [
      {
        "sentence": "I ___ that this is a great idea.",
        "options": [
          "am thinking",
          "think",
          "thinks",
          "thought"
        ],
        "correctAnswer": "think",
        "explanation": "State verb expressing an opinion/belief."
      },
      {
        "sentence": "Quiet, please. I ___ about my exam.",
        "options": [
          "think",
          "am thinking",
          "thinks",
          "have thought"
        ],
        "correctAnswer": "am thinking",
        "explanation": "Action verb representing mental activity in progress."
      },
      {
        "sentence": "Rajiv ___ a meeting with his lawyer right now.",
        "options": [
          "has",
          "is having",
          "owns",
          "possesses"
        ],
        "correctAnswer": "is having",
        "explanation": "'Having a meeting' is an active experience, not static possession."
      },
      {
        "sentence": "I ___ the doctor tomorrow morning.",
        "options": [
          "see",
          "am seeing",
          "have seen",
          "sees"
        ],
        "correctAnswer": "am seeing",
        "explanation": "'Seeing' here means meeting/visiting, which is an action."
      }
    ],
    "dialogue": {
      "speakerA": "What are you doing?",
      "speakerA_trans": "तुम क्या कर रहे हो?",
      "speakerB": "I am having lunch. I have a sandwich.",
      "speakerB_trans": "मैं लंच कर रहा हूँ। मेरे पास एक सैंडविच है।",
      "context": "Eating and possessing simultaneously."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell someone you are actively considering moving to Mumbai?",
      "incorrectDesiLiteral": "I think to move to Mumbai.",
      "correctNatural": "I am thinking of moving to Mumbai.",
      "explanation": "Active consideration of a plan uses the continuous form 'thinking of'."
    },
    "desiCorrection": {
      "incorrect": "I am having three houses in Mumbai.",
      "correct": "I have three houses in Mumbai.",
      "why": "'Have' meaning possession is a state verb and should not be used in continuous form."
    },
    "dayIndex": 13,
    "theme": "Verb Tenses"
  },
  {
    "concept": "Habits in the Present",
    "conceptExplanation": "Use Simple Present for regular habits. However, use 'tend to' for tendencies, 'will' for typical characteristic behaviors, or Present Continuous + 'always' to express annoyance at a habit.",
    "drills": [
      {
        "sentence": "Rajiv ___ lose his keys; he's so disorganized.",
        "options": [
          "is always losing",
          "always loses",
          "will lose",
          "tends to lose"
        ],
        "correctAnswer": "is always losing",
        "explanation": "Present continuous + always expresses irritation or exaggeration about a habit."
      },
      {
        "sentence": "I ___ wake up early on weekends.",
        "options": [
          "will",
          "tend to",
          "am always waking",
          "tending to"
        ],
        "correctAnswer": "tend to",
        "explanation": "Expresses a regular tendency rather than a strict rule."
      },
      {
        "sentence": "She ___ talk for hours if you let her.",
        "options": [
          "will",
          "is talking",
          "tends",
          "always talks"
        ],
        "correctAnswer": "will",
        "explanation": "'Will' describes typical, predictable behavior in the present."
      },
      {
        "sentence": "He ___ late to meetings, which is unprofessional.",
        "options": [
          "is always coming",
          "always comes",
          "tends to come",
          "will come"
        ],
        "correctAnswer": "is always coming",
        "explanation": "Highlighting a annoying habit using Present Continuous + always."
      }
    ],
    "dialogue": {
      "speakerA": "Rajiv is always interrupting me.",
      "speakerA_trans": "राजीव हमेशा मेरी बात काटता रहता है।",
      "speakerB": "Yes, he tends to dominate conversations.",
      "speakerB_trans": "हाँ, उसकी बातचीत पर हावी होने की प्रवृत्ति है।",
      "context": "Discussing annoying habits of a coworker."
    },
    "thinkInEnglish": {
      "prompt": "How do you express frustration that your computer is constantly crashing?",
      "incorrectDesiLiteral": "My computer crashes always.",
      "correctNatural": "My computer is always crashing!",
      "explanation": "Present continuous with 'always' emphasizes the frustration of a repetitive issue."
    },
    "desiCorrection": {
      "incorrect": "He is daily coming late.",
      "correct": "He comes late every day. / He is always coming late.",
      "why": "Avoid combining 'daily' with continuous forms; use simple present or the annoying habit structure."
    },
    "dayIndex": 14,
    "theme": "Verb Tenses"
  },
  {
    "dayIndex": 15,
    "theme": "Prepositions",
    "concept": "Prepositions of Time: In, On, At",
    "conceptExplanation": "Use 'at' for precise times (at 3 PM, at midnight). Use 'on' for days and dates (on Monday, on May 24). Use 'in' for longer periods like months, years, seasons (in May, in winter).",
    "drills": [
      {
        "sentence": "The presentation starts ___ 9:30 AM ___ Monday.",
        "options": [
          "in / on",
          "at / on",
          "at / in",
          "on / at"
        ],
        "correctAnswer": "at / on",
        "explanation": "'At' for clock time, 'on' for days."
      },
      {
        "sentence": "India gained independence ___ August ___ 1947.",
        "options": [
          "in / in",
          "on / in",
          "at / in",
          "in / on"
        ],
        "correctAnswer": "in / in",
        "explanation": "Both month and year require 'in'."
      },
      {
        "sentence": "My birthday is ___ June 15th.",
        "options": [
          "in",
          "on",
          "at",
          "during"
        ],
        "correctAnswer": "on",
        "explanation": "Specific dates take 'on'."
      },
      {
        "sentence": "We usually visit our village ___ winter.",
        "options": [
          "on",
          "at",
          "in",
          "during"
        ],
        "correctAnswer": "in",
        "explanation": "Seasons take 'in'."
      }
    ],
    "dialogue": {
      "speakerA": "When is the flight?",
      "speakerA_trans": "",
      "speakerB": "It is at midnight on Saturday.",
      "speakerB_trans": "",
      "context": "Confirming travel plans."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a client a meeting is scheduled for 4 PM on Tuesday?",
      "incorrectDesiLiteral": "",
      "correctNatural": "The meeting is at 4 PM on Tuesday.",
      "explanation": "At for clock time, on for day."
    },
    "desiCorrection": {
      "incorrect": "I will meet you in 5:00 PM.",
      "correct": "I will meet you at 5:00 PM.",
      "why": "Clock times require 'at'."
    }
  },
  {
    "dayIndex": 16,
    "theme": "Prepositions",
    "concept": "Prepositions of Place: In, On, At",
    "conceptExplanation": "Use 'at' for a point/specific location. Use 'in' for an enclosed space or geographic area. Use 'on' for surfaces.",
    "drills": [
      {
        "sentence": "Rajiv is currently ___ the office, sitting ___ his desk.",
        "options": [
          "at / at",
          "in / on",
          "at / on",
          "in / at"
        ],
        "correctAnswer": "at / at",
        "explanation": "'At the office' (location), 'at his desk' (point)."
      },
      {
        "sentence": "I left the report ___ the table ___ the conference room.",
        "options": [
          "on / in",
          "in / on",
          "at / in",
          "on / at"
        ],
        "correctAnswer": "on / in",
        "explanation": "Table is a surface ('on'), room is a space ('in')."
      },
      {
        "sentence": "She lives ___ Mumbai ___ an apartment near the sea.",
        "options": [
          "in / in",
          "at / in",
          "in / on",
          "at / at"
        ],
        "correctAnswer": "in / in",
        "explanation": "Cities and buildings use 'in'."
      },
      {
        "sentence": "Meet me ___ the main gate of the metro station.",
        "options": [
          "in",
          "on",
          "at",
          "inside"
        ],
        "correctAnswer": "at",
        "explanation": "Gate is a meeting point."
      }
    ],
    "dialogue": {
      "speakerA": "Where are you?",
      "speakerA_trans": "",
      "speakerB": "I am standing at the entrance of the mall.",
      "speakerB_trans": "",
      "context": "Locating someone."
    },
    "thinkInEnglish": {
      "prompt": "How do you say you left your laptop on the bed in your room?",
      "incorrectDesiLiteral": "",
      "correctNatural": "My laptop is on the bed in my room.",
      "explanation": "Bed is surface ('on'), room is space ('in')."
    },
    "desiCorrection": {
      "incorrect": "He is not in his seat.",
      "correct": "He is not at his desk.",
      "why": "Use 'at his desk/post' for work locations."
    }
  },
  {
    "dayIndex": 17,
    "theme": "Prepositions",
    "concept": "For vs. Since with Time Periods",
    "conceptExplanation": "Use 'for' to describe a length or duration of time. Use 'since' to specify a starting point in the past.",
    "drills": [
      {
        "sentence": "I have lived in this apartment ___ ten years.",
        "options": [
          "since",
          "for",
          "from",
          "during"
        ],
        "correctAnswer": "for",
        "explanation": "Duration takes 'for'."
      },
      {
        "sentence": "She has been working here ___ she graduated.",
        "options": [
          "for",
          "since",
          "from",
          "after"
        ],
        "correctAnswer": "since",
        "explanation": "Graduation is a past starting point."
      },
      {
        "sentence": "We haven't seen Rajiv ___ last Sunday.",
        "options": [
          "for",
          "since",
          "from",
          "till"
        ],
        "correctAnswer": "since",
        "explanation": "Point in time takes 'since'."
      },
      {
        "sentence": "The program has been running ___ several hours.",
        "options": [
          "since",
          "for",
          "from",
          "by"
        ],
        "correctAnswer": "for",
        "explanation": "Duration takes 'for'."
      }
    ],
    "dialogue": {
      "speakerA": "How long have you known each other?",
      "speakerA_trans": "",
      "speakerB": "We have known each other since college.",
      "speakerB_trans": "",
      "context": "Colleagues talking about their friendship."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a doctor you've had a headache for two days?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I have had a headache for two days.",
      "explanation": "'For' for duration of time."
    },
    "desiCorrection": {
      "incorrect": "I am waiting here since one hour.",
      "correct": "I have been waiting here for an hour.",
      "why": "Use 'for' (not 'since') with a duration of time."
    }
  },
  {
    "dayIndex": 18,
    "theme": "Prepositions",
    "concept": "During vs. While",
    "conceptExplanation": "Use 'during' followed by a noun or noun phrase. Use 'while' followed by a subject + verb clause.",
    "drills": [
      {
        "sentence": "We stayed silent ___ the speech.",
        "options": [
          "during",
          "while",
          "for",
          "in"
        ],
        "correctAnswer": "during",
        "explanation": "Speech is a noun phrase, requiring 'during'."
      },
      {
        "sentence": "Rajiv fell asleep ___ he was reading.",
        "options": [
          "during",
          "while",
          "since",
          "in"
        ],
        "correctAnswer": "while",
        "explanation": "Clause follows, requiring 'while'."
      },
      {
        "sentence": "Please don't talk ___ the film is playing.",
        "options": [
          "during",
          "while",
          "for",
          "by"
        ],
        "correctAnswer": "while",
        "explanation": "Clause follows."
      },
      {
        "sentence": "Many issues were discussed ___ the meeting.",
        "options": [
          "during",
          "while",
          "on",
          "for"
        ],
        "correctAnswer": "during",
        "explanation": "Meeting is a noun phrase."
      }
    ],
    "dialogue": {
      "speakerA": "Did you take notes?",
      "speakerA_trans": "",
      "speakerB": "No, I listened during the session.",
      "speakerB_trans": "",
      "context": "A workshop environment."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell someone not to check their phone during dinner?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Don't check your phone while we are eating. / Don't check your phone during dinner.",
      "explanation": "While with clause, during with noun."
    },
    "desiCorrection": {
      "incorrect": "He called me while the meeting.",
      "correct": "He called me during the meeting. / He called me while I was in the meeting.",
      "why": "Do not use 'while' before a simple noun; use 'during'."
    }
  },
  {
    "dayIndex": 19,
    "theme": "Prepositions",
    "concept": "Prepositions after Adjectives",
    "conceptExplanation": "Many adjectives require specific prepositions. E.g., good at (not good in), interested in, afraid of, angry with, proud of, responsible for.",
    "drills": [
      {
        "sentence": "She is exceptionally good ___ coding.",
        "options": [
          "in",
          "at",
          "with",
          "for"
        ],
        "correctAnswer": "at",
        "explanation": "The standard dependent preposition for 'good' is 'at'."
      },
      {
        "sentence": "Are you interested ___ history?",
        "options": [
          "in",
          "at",
          "about",
          "for"
        ],
        "correctAnswer": "in",
        "explanation": "Interested takes 'in'."
      },
      {
        "sentence": "Rajiv is responsible ___ the deployment.",
        "options": [
          "for",
          "to",
          "with",
          "of"
        ],
        "correctAnswer": "for",
        "explanation": "Responsible takes 'for'."
      },
      {
        "sentence": "I am proud ___ my team's effort.",
        "options": [
          "for",
          "of",
          "with",
          "about"
        ],
        "correctAnswer": "of",
        "explanation": "Proud takes 'of'."
      }
    ],
    "dialogue": {
      "speakerA": "Are you afraid of public speaking?",
      "speakerA_trans": "",
      "speakerB": "Yes, but I am trying to get better at it.",
      "speakerB_trans": "",
      "context": "Preparing for a presentation."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell someone you are keen on learning a new skill?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I am keen on learning python.",
      "explanation": "Keen is followed by 'on'."
    },
    "desiCorrection": {
      "incorrect": "I am very good in English.",
      "correct": "I am very good at English.",
      "why": "Use 'good at' to describe capability or skill, never 'good in'."
    }
  },
  {
    "dayIndex": 20,
    "theme": "Prepositions",
    "concept": "Prepositions after Verbs",
    "conceptExplanation": "Certain verbs have fixed dependent prepositions. E.g., depend on (not depend of), agree with, listen to, believe in, apply for, consist of.",
    "drills": [
      {
        "sentence": "The success of the app depends ___ team coordination.",
        "options": [
          "of",
          "on",
          "with",
          "for"
        ],
        "correctAnswer": "on",
        "explanation": "Depend takes 'on'."
      },
      {
        "sentence": "I completely agree ___ your proposal.",
        "options": [
          "with",
          "to",
          "about",
          "for"
        ],
        "correctAnswer": "with",
        "explanation": "Agree with a person or idea."
      },
      {
        "sentence": "Did you apply ___ the visa?",
        "options": [
          "to",
          "for",
          "in",
          "with"
        ],
        "correctAnswer": "for",
        "explanation": "Apply for a position or visa."
      },
      {
        "sentence": "This book consists ___ ten chapters.",
        "options": [
          "of",
          "with",
          "in",
          "by"
        ],
        "correctAnswer": "of",
        "explanation": "Consist takes 'of'."
      }
    ],
    "dialogue": {
      "speakerA": "Will you come tomorrow?",
      "speakerA_trans": "",
      "speakerB": "It depends on the weather.",
      "speakerB_trans": "",
      "context": "Deciding on outdoor plans."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask someone to listen to your advice?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Please listen to my advice.",
      "explanation": "Listen takes 'to'."
    },
    "desiCorrection": {
      "incorrect": "It depends of your schedule.",
      "correct": "It depends on your schedule.",
      "why": "Depend takes 'on', never 'of'."
    }
  },
  {
    "dayIndex": 21,
    "theme": "Prepositions",
    "concept": "Phrasal Verbs with 'Up'",
    "conceptExplanation": "'Up' as a particle often indicates completion, improvement, or rising. E.g., give up (stop trying), clean up, bring up (mention), grow up.",
    "drills": [
      {
        "sentence": "Don't ___ on your dreams.",
        "options": [
          "give up",
          "give down",
          "give out",
          "give in"
        ],
        "correctAnswer": "give up",
        "explanation": "Give up means to surrender or stop trying."
      },
      {
        "sentence": "Rajiv ___ a crucial issue during the meeting.",
        "options": [
          "brought up",
          "brought down",
          "brought out",
          "brought in"
        ],
        "correctAnswer": "brought up",
        "explanation": "Bring up means to mention or introduce a topic."
      },
      {
        "sentence": "We need to ___ this workspace.",
        "options": [
          "clean up",
          "clean out",
          "clean down",
          "clean off"
        ],
        "correctAnswer": "clean up",
        "explanation": "Clean up means to make neat."
      },
      {
        "sentence": "He ___ in Mumbai before moving abroad.",
        "options": [
          "grew up",
          "grew out",
          "grew in",
          "grew down"
        ],
        "correctAnswer": "grew up",
        "explanation": "Grow up describes childhood development."
      }
    ],
    "dialogue": {
      "speakerA": "Why did you bring that up?",
      "speakerA_trans": "",
      "speakerB": "Because it is an unresolved issue.",
      "speakerB_trans": "",
      "context": "A difficult conversation in a team meeting."
    },
    "thinkInEnglish": {
      "prompt": "How do you encourage a colleague not to stop trying?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Don't give up. You can do this.",
      "explanation": "Give up means quit."
    },
    "desiCorrection": {
      "incorrect": "I will revert up to you.",
      "correct": "I will get back to you. / I will reply to you.",
      "why": "Revert back/up is redundant; use 'get back to'."
    }
  },
  {
    "dayIndex": 22,
    "theme": "Prepositions",
    "concept": "Phrasal Verbs with 'Out'",
    "conceptExplanation": "'Out' often signifies exit, discovery, exclusion, or completion. E.g., find out (discover), run out (exhaust supply), figure out (solve).",
    "drills": [
      {
        "sentence": "We have ___ of coffee. I need to buy more.",
        "options": [
          "run out",
          "run in",
          "run down",
          "run off"
        ],
        "correctAnswer": "run out",
        "explanation": "Run out of means to exhaust the supply."
      },
      {
        "sentence": "I can't ___ how to solve this puzzle.",
        "options": [
          "figure out",
          "figure up",
          "figure in",
          "figure off"
        ],
        "correctAnswer": "figure out",
        "explanation": "Figure out means to solve or understand."
      },
      {
        "sentence": "She ___ that there was a typo in the slide.",
        "options": [
          "pointed out",
          "pointed up",
          "pointed down",
          "pointed off"
        ],
        "correctAnswer": "pointed out",
        "explanation": "Point out means to show or indicate."
      },
      {
        "sentence": "How did you ___ about the secret?",
        "options": [
          "find out",
          "find up",
          "find down",
          "find off"
        ],
        "correctAnswer": "find out",
        "explanation": "Find out means to discover information."
      }
    ],
    "dialogue": {
      "speakerA": "Have we run out of time?",
      "speakerA_trans": "",
      "speakerB": "Yes, we need to wrap up the meeting.",
      "speakerB_trans": "",
      "context": "Running late in a discussion."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell someone you solved the problem?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I figured out the solution.",
      "explanation": "Figure out means solve."
    },
    "desiCorrection": {
      "incorrect": "I will find out it soon.",
      "correct": "I will find it out soon. / I will find out about it soon.",
      "why": "Transitive phrasal verbs require correct pronoun placement."
    }
  },
  {
    "dayIndex": 23,
    "theme": "Prepositions",
    "concept": "Phrasal Verbs with 'Off'",
    "conceptExplanation": "'Off' indicates separation, cancellation, delay, or departure. E.g., take off (depart/remove), call off (cancel), put off (postpone).",
    "drills": [
      {
        "sentence": "The meeting was ___ due to heavy rain.",
        "options": [
          "called off",
          "called out",
          "called in",
          "called up"
        ],
        "correctAnswer": "called off",
        "explanation": "Call off means cancel."
      },
      {
        "sentence": "We should not ___ what we can do today.",
        "options": [
          "put off",
          "put out",
          "put down",
          "put on"
        ],
        "correctAnswer": "put off",
        "explanation": "Put off means postpone."
      },
      {
        "sentence": "The plane will ___ in ten minutes.",
        "options": [
          "take off",
          "take out",
          "take in",
          "take down"
        ],
        "correctAnswer": "take off",
        "explanation": "Take off means depart."
      },
      {
        "sentence": "Rajiv likes to ___ his new watch.",
        "options": [
          "show off",
          "show out",
          "show down",
          "show off in"
        ],
        "correctAnswer": "show off",
        "explanation": "Show off means exhibit boastfully."
      }
    ],
    "dialogue": {
      "speakerA": "Is the match postponed?",
      "speakerA_trans": "",
      "speakerB": "Yes, they put it off until tomorrow.",
      "speakerB_trans": "",
      "context": "Weather affecting sports."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell someone to remove their shoes before entering?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Please take off your shoes.",
      "explanation": "Take off means remove."
    },
    "desiCorrection": {
      "incorrect": "They cancelled off the project.",
      "correct": "They called off the project. / They cancelled the project.",
      "why": "Cancel doesn't take 'off'; only 'call off' does."
    }
  },
  {
    "dayIndex": 24,
    "theme": "Prepositions",
    "concept": "By vs. Until for Deadlines",
    "conceptExplanation": "Use 'by' to indicate an action happening at or before a deadline. Use 'until' to describe a state or continuous action continuing up to a specific time.",
    "drills": [
      {
        "sentence": "Please submit the report ___ Friday afternoon.",
        "options": [
          "by",
          "until",
          "to",
          "till"
        ],
        "correctAnswer": "by",
        "explanation": "Friday afternoon is a deadline for a one-time action."
      },
      {
        "sentence": "I will be in the office ___ 6 PM today.",
        "options": [
          "by",
          "until",
          "since",
          "on"
        ],
        "correctAnswer": "until",
        "explanation": "Being in the office is a continuous state."
      },
      {
        "sentence": "You must register ___ tomorrow night.",
        "options": [
          "by",
          "until",
          "since",
          "till"
        ],
        "correctAnswer": "by",
        "explanation": "Register is a completed action before a deadline."
      },
      {
        "sentence": "He stayed at the party ___ midnight.",
        "options": [
          "by",
          "until",
          "on",
          "since"
        ],
        "correctAnswer": "until",
        "explanation": "Staying is a continuous action."
      }
    ],
    "dialogue": {
      "speakerA": "Can you deliver the package by five?",
      "speakerA_trans": "",
      "speakerB": "Yes, I will be working until five, so I can.",
      "speakerB_trans": "",
      "context": "Arranging a delivery."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a coworker you will wait for them up to 4 PM?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I will wait for you until 4 PM.",
      "explanation": "Waiting is continuous, so use until."
    },
    "desiCorrection": {
      "incorrect": "I will complete this work until Friday.",
      "correct": "I will complete this work by Friday. / I will work on this until Friday.",
      "why": "Completion is a one-time event, so use 'by'."
    }
  },
  {
    "dayIndex": 25,
    "theme": "Prepositions",
    "concept": "Between vs. Among",
    "conceptExplanation": "Use 'between' when naming distinct, individual items. Use 'among' when items are part of an undefined group, crowd, or mass.",
    "drills": [
      {
        "sentence": "The negotiations are ___ India and Nepal.",
        "options": [
          "between",
          "among",
          "with",
          "in"
        ],
        "correctAnswer": "between",
        "explanation": "Refers to two distinct countries."
      },
      {
        "sentence": "She felt comfortable ___ her friends.",
        "options": [
          "between",
          "among",
          "within",
          "at"
        ],
        "correctAnswer": "among",
        "explanation": "Refers to a group of friends."
      },
      {
        "sentence": "Choose ___ a sandwich, a salad, or a wrap.",
        "options": [
          "between",
          "among",
          "inside",
          "within"
        ],
        "correctAnswer": "between",
        "explanation": "Refers to distinct choices."
      },
      {
        "sentence": "There is a secret ___ the members of the club.",
        "options": [
          "between",
          "among",
          "within",
          "at"
        ],
        "correctAnswer": "among",
        "explanation": "Refers to a collective group."
      }
    ],
    "dialogue": {
      "speakerA": "Which laptop should I buy?",
      "speakerA_trans": "",
      "speakerB": "It's a choice between these two models.",
      "speakerB_trans": "",
      "context": "Shopping advice."
    },
    "thinkInEnglish": {
      "prompt": "How do you say you distributed sweets to a group of children?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I distributed sweets among the children.",
      "explanation": "Among is used for groups."
    },
    "desiCorrection": {
      "incorrect": "Divide the work among the two of you.",
      "correct": "Divide the work between the two of you.",
      "why": "Use 'between' for two distinct people."
    }
  },
  {
    "dayIndex": 26,
    "theme": "Prepositions",
    "concept": "Prepositions of Movement",
    "conceptExplanation": "Prepositions of movement show direction: 'into' (entering a space), 'onto' (moving to a surface), 'through' (passing inside a volume), 'past' (passing near).",
    "drills": [
      {
        "sentence": "He walked ___ the room and sat down.",
        "options": [
          "into",
          "in",
          "onto",
          "on"
        ],
        "correctAnswer": "into",
        "explanation": "Indicates movement from outside to inside."
      },
      {
        "sentence": "The cat jumped ___ the counter.",
        "options": [
          "onto",
          "into",
          "through",
          "in"
        ],
        "correctAnswer": "onto",
        "explanation": "Movement to a surface."
      },
      {
        "sentence": "We drove ___ the tunnel.",
        "options": [
          "through",
          "across",
          "into",
          "onto"
        ],
        "correctAnswer": "through",
        "explanation": "Movement within a 3D space."
      },
      {
        "sentence": "Walk ___ the bank and turn right.",
        "options": [
          "past",
          "into",
          "onto",
          "through"
        ],
        "correctAnswer": "past",
        "explanation": "Movement passing near."
      }
    ],
    "dialogue": {
      "speakerA": "Did you see Rajiv?",
      "speakerA_trans": "",
      "speakerB": "Yes, he walked past my desk a minute ago.",
      "speakerB_trans": "",
      "context": "Looking for someone at work."
    },
    "thinkInEnglish": {
      "prompt": "How do you describe stepping out of the rain and entering a house?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I walked into the house to escape the rain.",
      "explanation": "Into indicates entering."
    },
    "desiCorrection": {
      "incorrect": "He put the books in the table.",
      "correct": "He put the books on the table.",
      "why": "Use 'on' for a surface."
    }
  },
  {
    "dayIndex": 27,
    "theme": "Prepositions",
    "concept": "Dependent Prepositions for Nouns",
    "conceptExplanation": "Many nouns are followed by specific prepositions. E.g., reason for (not reason of), increase in, key to, connection between.",
    "drills": [
      {
        "sentence": "What is the reason ___ your decision?",
        "options": [
          "for",
          "of",
          "to",
          "with"
        ],
        "correctAnswer": "for",
        "explanation": "The standard preposition after 'reason' is 'for'."
      },
      {
        "sentence": "Hard work is the key ___ success.",
        "options": [
          "to",
          "for",
          "of",
          "with"
        ],
        "correctAnswer": "to",
        "explanation": "'Key to' is the idiom."
      },
      {
        "sentence": "There has been a sharp increase ___ sales.",
        "options": [
          "in",
          "of",
          "on",
          "for"
        ],
        "correctAnswer": "in",
        "explanation": "'Increase in' indicates what grew."
      },
      {
        "sentence": "What is the connection ___ these two ideas?",
        "options": [
          "between",
          "among",
          "with",
          "to"
        ],
        "correctAnswer": "between",
        "explanation": "Connection between distinct items."
      }
    ],
    "dialogue": {
      "speakerA": "Do you know the reason for the delay?",
      "speakerA_trans": "",
      "speakerB": "It was because of a server issue.",
      "speakerB_trans": "",
      "context": "Debugging a system error."
    },
    "thinkInEnglish": {
      "prompt": "How do you describe finding a solution to a problem?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I found the key to the problem.",
      "explanation": "Key to is the standard expression."
    },
    "desiCorrection": {
      "incorrect": "What is the reason of the meeting?",
      "correct": "What is the reason for the meeting?",
      "why": "Use 'reason for', not 'reason of'."
    }
  },
  {
    "dayIndex": 28,
    "theme": "Prepositions",
    "concept": "Prepositions at the End of Clauses",
    "conceptExplanation": "In natural, modern English, prepositions are frequently left at the end of relative clauses or questions (e.g., 'the person I talked to').",
    "drills": [
      {
        "sentence": "Who are you waiting ___?",
        "options": [
          "for",
          "to",
          "with",
          "at"
        ],
        "correctAnswer": "for",
        "explanation": "The preposition stays at the end of the question."
      },
      {
        "sentence": "That is the project I am working ___.",
        "options": [
          "on",
          "at",
          "for",
          "in"
        ],
        "correctAnswer": "on",
        "explanation": "Work on a project. Natural preposition placement."
      },
      {
        "sentence": "Which town did you grow up ___?",
        "options": [
          "in",
          "at",
          "on",
          "by"
        ],
        "correctAnswer": "in",
        "explanation": "Grow up in a town."
      },
      {
        "sentence": "She is the colleague I spoke ___.",
        "options": [
          "to",
          "with",
          "both 'to' and 'with'",
          "about"
        ],
        "correctAnswer": "both 'to' and 'with'",
        "explanation": "Speak to/with someone."
      }
    ],
    "dialogue": {
      "speakerA": "Which company do you work for?",
      "speakerA_trans": "",
      "speakerB": "I work for Pravah Tech.",
      "speakerB_trans": "",
      "context": "A professional introduction."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask someone who they came to the party with?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Who did you come with?",
      "explanation": "Preposition at the end is standard in conversation."
    },
    "desiCorrection": {
      "incorrect": "To whom were you talking?",
      "correct": "Who were you talking to?",
      "why": "'Who... to?' is much more natural and common in spoken English."
    }
  },
  {
    "dayIndex": 29,
    "theme": "Prepositions",
    "concept": "Phrasal Verbs with 'Down'",
    "conceptExplanation": "'Down' often indicates reduction, refusal, or settling. E.g., break down (stop working), turn down (reject), calm down, settle down.",
    "drills": [
      {
        "sentence": "He ___ the job offer because the salary was low.",
        "options": [
          "turned down",
          "turned off",
          "turned out",
          "turned up"
        ],
        "correctAnswer": "turned down",
        "explanation": "Turn down means reject."
      },
      {
        "sentence": "My car ___ on the highway.",
        "options": [
          "broke down",
          "broke off",
          "broke out",
          "broke up"
        ],
        "correctAnswer": "broke down",
        "explanation": "Break down means stop functioning."
      },
      {
        "sentence": "Please ___ and tell me what happened.",
        "options": [
          "calm down",
          "calm off",
          "calm out",
          "calm up"
        ],
        "correctAnswer": "calm down",
        "explanation": "Calm down means become relaxed."
      },
      {
        "sentence": "They plan to ___ in Mumbai next year.",
        "options": [
          "settle down",
          "settle off",
          "settle out",
          "settle in"
        ],
        "correctAnswer": "settle down",
        "explanation": "Settle down means establish stable life."
      }
    ],
    "dialogue": {
      "speakerA": "Did they accept the proposal?",
      "speakerA_trans": "",
      "speakerB": "No, they turned it down.",
      "speakerB_trans": "",
      "context": "Reviewing project submissions."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a friend to relax when they are panicked?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Please calm down. Everything is fine.",
      "explanation": "Calm down means relax."
    },
    "desiCorrection": {
      "incorrect": "My computer was broken down yesterday.",
      "correct": "My computer broke down yesterday.",
      "why": "Do not use passive voice with 'break down' for machine failure."
    }
  },
  {
    "dayIndex": 30,
    "theme": "Modals & Conditionals",
    "concept": "Zero and First Conditionals",
    "conceptExplanation": "Zero Conditional (If + Present Simple, Present Simple) is used for general truths or facts. First Conditional (If + Present Simple, Will + Verb) is used for real or likely future events.",
    "drills": [
      {
        "sentence": "If you heat water to 100 degrees, it ___.",
        "options": [
          "boils",
          "will boil",
          "boiled",
          "would boil"
        ],
        "correctAnswer": "boils",
        "explanation": "General scientific truth uses Zero Conditional (boils)."
      },
      {
        "sentence": "If Rajiv ___ tomorrow, we ___ go to the park.",
        "options": [
          "comes / will",
          "will come / will",
          "comes / would",
          "came / will"
        ],
        "correctAnswer": "comes / will",
        "explanation": "Likely future condition uses First Conditional."
      },
      {
        "sentence": "If I ___ time tonight, I ___ finish the book.",
        "options": [
          "have / will",
          "will have / will",
          "had / would",
          "have / would"
        ],
        "correctAnswer": "have / will",
        "explanation": "First conditional for possible future plan."
      },
      {
        "sentence": "Plants die if they ___ enough water.",
        "options": [
          "don't get",
          "won't get",
          "didn't get",
          "aren't getting"
        ],
        "correctAnswer": "don't get",
        "explanation": "General factual relationship uses Zero Conditional."
      }
    ],
    "dialogue": {
      "speakerA": "What if it rains tomorrow?",
      "speakerA_trans": "",
      "speakerB": "If it rains, we will stay indoors.",
      "speakerB_trans": "",
      "context": "Making weekend plans."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell someone that a system crashes if it overheats?",
      "incorrectDesiLiteral": "",
      "correctNatural": "If the system overheats, it crashes.",
      "explanation": "Zero conditional for general system fact."
    },
    "desiCorrection": {
      "incorrect": "If you will come tomorrow, we will discuss.",
      "correct": "If you come tomorrow, we will discuss.",
      "why": "Do not use 'will' in the 'if' clause of conditional sentences."
    }
  },
  {
    "dayIndex": 31,
    "theme": "Modals & Conditionals",
    "concept": "Second Conditional",
    "conceptExplanation": "Use Second Conditional (If + Past Simple, Would + Verb) to talk about imaginary, hypothetical, or highly unlikely situations in the present or future.",
    "drills": [
      {
        "sentence": "If I ___ Rajiv's number, I ___ call him.",
        "options": [
          "had / would",
          "have / will",
          "had / will",
          "have / would"
        ],
        "correctAnswer": "had / would",
        "explanation": "Hypothetical situation: I don't have the number, but if I did, I would call."
      },
      {
        "sentence": "If they ___ more money, they ___ buy a house.",
        "options": [
          "had / would",
          "have / will",
          "have / would",
          "had / will"
        ],
        "correctAnswer": "had / would",
        "explanation": "Hypothetical present condition and result."
      },
      {
        "sentence": "What ___ you do if you ___ the lottery?",
        "options": [
          "would / won",
          "will / win",
          "would / win",
          "will / won"
        ],
        "correctAnswer": "would / won",
        "explanation": "Imagining a highly unlikely future event."
      },
      {
        "sentence": "If I ___ you, I ___ apply for the job.",
        "options": [
          "were / would",
          "was / will",
          "am / would",
          "were / will"
        ],
        "correctAnswer": "were / would",
        "explanation": "Giving advice: 'If I were you' is standard in the Second Conditional."
      }
    ],
    "dialogue": {
      "speakerA": "Would you move to New York if you got a job?",
      "speakerA_trans": "",
      "speakerB": "Yes, I would definitely go.",
      "speakerB_trans": "",
      "context": "Discussing career dreams."
    },
    "thinkInEnglish": {
      "prompt": "How do you advise a friend by putting yourself in their shoes?",
      "incorrectDesiLiteral": "",
      "correctNatural": "If I were you, I would take a break.",
      "explanation": "'If I were you' + 'would' is the standard way to offer advice."
    },
    "desiCorrection": {
      "incorrect": "If I will be the president, I will change the rules.",
      "correct": "If I were the president, I would change the rules.",
      "why": "Use simple past in the 'if' clause and 'would' in the main clause for imaginary situations."
    }
  },
  {
    "dayIndex": 32,
    "theme": "Modals & Conditionals",
    "concept": "Third Conditional",
    "conceptExplanation": "Use Third Conditional (If + Past Perfect, Would have + Past Participle) to talk about imaginary, hypothetical situations in the past that did not happen, often expressing regret.",
    "drills": [
      {
        "sentence": "If you ___ me, I ___ you at the airport.",
        "options": [
          "had called / would have met",
          "called / would meet",
          "had called / will meet",
          "called / met"
        ],
        "correctAnswer": "had called / would have met",
        "explanation": "Imagining a past event that didn't happen (you didn't call, I didn't meet you)."
      },
      {
        "sentence": "We ___ the match if Rajiv ___ that goal.",
        "options": [
          "would have won / had scored",
          "won / had scored",
          "would win / scored",
          "had won / scored"
        ],
        "correctAnswer": "would have won / had scored",
        "explanation": "Past regret: he didn't score, so we didn't win."
      },
      {
        "sentence": "If I ___ more, I ___ the exam.",
        "options": [
          "had studied / would have passed",
          "studied / would pass",
          "studied / passed",
          "had studied / passed"
        ],
        "correctAnswer": "had studied / would have passed",
        "explanation": "Past hypothetical study and exam outcome."
      },
      {
        "sentence": "She ___ the flight if she ___ earlier.",
        "options": [
          "wouldn't have missed / had left",
          "hadn't missed / left",
          "wouldn't miss / left",
          "missed / had left"
        ],
        "correctAnswer": "wouldn't have missed / had left",
        "explanation": "Past hypothetical flight scenario."
      }
    ],
    "dialogue": {
      "speakerA": "Why did you fail the test?",
      "speakerA_trans": "",
      "speakerB": "If I had studied harder, I would have passed.",
      "speakerB_trans": "",
      "context": "Talking about past academic regret."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell someone you would have helped them yesterday if you had known they were in trouble?",
      "incorrectDesiLiteral": "",
      "correctNatural": "If I had known, I would have helped you.",
      "explanation": "Third conditional for past hypothetical assistance."
    },
    "desiCorrection": {
      "incorrect": "If I would have studied, I would have passed.",
      "correct": "If I had studied, I would have passed.",
      "why": "Do not use 'would have' in the 'if' clause of conditional sentences; use Past Perfect ('had studied')."
    }
  },
  {
    "dayIndex": 33,
    "theme": "Modals & Conditionals",
    "concept": "Mixed Conditionals",
    "conceptExplanation": "Mixed Conditionals combine past hypothetical conditions with present hypothetical results (If + Past Perfect, Would + Verb) or present states with past hypothetical results.",
    "drills": [
      {
        "sentence": "If I ___ that job in Mumbai, I ___ there now.",
        "options": [
          "had taken / would live",
          "took / would live",
          "had taken / would have lived",
          "took / lived"
        ],
        "correctAnswer": "had taken / would live",
        "explanation": "Past action (took job) having a result in the present (living there now)."
      },
      {
        "sentence": "We ___ lost if we ___ the map.",
        "options": [
          "wouldn't be / had checked",
          "weren't / checked",
          "wouldn't have been / checked",
          "aren't / had checked"
        ],
        "correctAnswer": "wouldn't be / had checked",
        "explanation": "Present state (not lost now) resulting from past action (checking map)."
      },
      {
        "sentence": "If Rajiv ___ more organized, he ___ his keys yesterday.",
        "options": [
          "were / wouldn't have lost",
          "had been / wouldn't lose",
          "was / didn't lose",
          "were / wouldn't lose"
        ],
        "correctAnswer": "were / wouldn't have lost",
        "explanation": "General present state (Rajiv's personality) affecting a past event (losing keys)."
      },
      {
        "sentence": "I ___ at the meeting now if I ___ the flight.",
        "options": [
          "would be / hadn't missed",
          "will be / didn't miss",
          "would have been / hadn't missed",
          "am / didn't miss"
        ],
        "correctAnswer": "would be / hadn't missed",
        "explanation": "Present result (being at meeting now) of a past event (missing flight)."
      }
    ],
    "dialogue": {
      "speakerA": "Are you still living in Delhi?",
      "speakerA_trans": "",
      "speakerB": "Yes. If I had moved last year, I would be in London now.",
      "speakerB_trans": "",
      "context": "Discussing past decisions and current state."
    },
    "thinkInEnglish": {
      "prompt": "How do you say that because you didn't buy a ticket last week, you aren't going to the concert tonight?",
      "incorrectDesiLiteral": "",
      "correctNatural": "If I had bought a ticket, I would be going to the concert tonight.",
      "explanation": "Mixed conditional linking past action to present event."
    },
    "desiCorrection": {
      "incorrect": "If I had bought the house, I would have been living there now.",
      "correct": "If I had bought the house, I would be living there now.",
      "why": "Use simple 'would + verb' (not would have been) for present consequences of past actions."
    }
  },
  {
    "dayIndex": 34,
    "theme": "Modals & Conditionals",
    "concept": "Regret and Past Possibilities",
    "conceptExplanation": "Use 'should have', 'would have', and 'could have' followed by the past participle to talk about mistakes, regrets, or alternative possibilities in the past.",
    "drills": [
      {
        "sentence": "I ___ more water; now I'm dehydrated.",
        "options": [
          "should have drunk",
          "should drink",
          "must have drunk",
          "could drink"
        ],
        "correctAnswer": "should have drunk",
        "explanation": "Expresses regret about a past mistake."
      },
      {
        "sentence": "Rajiv ___ the project, but he ran out of time.",
        "options": [
          "could have finished",
          "can finish",
          "could finish",
          "should finish"
        ],
        "correctAnswer": "could have finished",
        "explanation": "Past ability/possibility that was not realized."
      },
      {
        "sentence": "We ___ you, but we didn't have your number.",
        "options": [
          "would have called",
          "should call",
          "would call",
          "could call"
        ],
        "correctAnswer": "would have called",
        "explanation": "Past willingness that was blocked by lack of details."
      },
      {
        "sentence": "You ___ told me you were struggling.",
        "options": [
          "should have",
          "must have",
          "would have",
          "could have"
        ],
        "correctAnswer": "should have",
        "explanation": "Gently criticizing a past action/failure to communicate."
      }
    ],
    "dialogue": {
      "speakerA": "I missed the train.",
      "speakerA_trans": "",
      "speakerB": "You should have left home earlier.",
      "speakerB_trans": "",
      "context": "Analyzing a travel mistake."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a friend that they had the capability to win the competition?",
      "incorrectDesiLiteral": "",
      "correctNatural": "You could have won the competition.",
      "explanation": "Could have + past participle for past unrealized potential."
    },
    "desiCorrection": {
      "incorrect": "I should had told you.",
      "correct": "I should have told you.",
      "why": "The auxiliary verb after modals is always 'have', never 'had' or 'has'."
    }
  },
  {
    "dayIndex": 35,
    "theme": "Modals & Conditionals",
    "concept": "Must vs. Have to for Obligation",
    "conceptExplanation": "Use 'must' for personal, internal obligations (felt by the speaker). Use 'have to' for external obligations (laws, rules, regulations, or circumstances).",
    "drills": [
      {
        "sentence": "In India, you ___ drive on the left side of the road.",
        "options": [
          "must",
          "have to",
          "should",
          "ought to"
        ],
        "correctAnswer": "have to",
        "explanation": "External traffic law requires 'have to'."
      },
      {
        "sentence": "I ___ call my mother; it's her birthday today.",
        "options": [
          "must",
          "have to",
          "should",
          "ought to"
        ],
        "correctAnswer": "must",
        "explanation": "Internal, personal obligation felt by the speaker."
      },
      {
        "sentence": "We ___ submit the timesheets by Friday evening.",
        "options": [
          "must",
          "have to",
          "would",
          "may"
        ],
        "correctAnswer": "have to",
        "explanation": "External corporate rule requires 'have to'."
      },
      {
        "sentence": "You ___ see this movie! It's fantastic.",
        "options": [
          "must",
          "have to",
          "need",
          "could"
        ],
        "correctAnswer": "must",
        "explanation": "Strong personal recommendation uses 'must'."
      }
    ],
    "dialogue": {
      "speakerA": "Do you have to wear a uniform?",
      "speakerA_trans": "",
      "speakerB": "Yes, it is a strict company policy.",
      "speakerB_trans": "",
      "context": "Discussing workplace rules."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell yourself you really need to start exercising?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I must start exercising.",
      "explanation": "Internal resolve/desire uses 'must'."
    },
    "desiCorrection": {
      "incorrect": "I am having to do this work.",
      "correct": "I have to do this work.",
      "why": "Avoid using 'have to' in the continuous form; use simple present 'have to'."
    }
  },
  {
    "dayIndex": 36,
    "theme": "Modals & Conditionals",
    "concept": "Modals of Permission and Requests",
    "conceptExplanation": "Use 'can' for informal requests and permission. Use 'could' for more polite or formal requests. Use 'may' for extremely formal or polite permission.",
    "drills": [
      {
        "sentence": "___ I borrow your pen for a second?",
        "options": [
          "Can",
          "Could",
          "May",
          "All options are correct"
        ],
        "correctAnswer": "All options are correct",
        "explanation": "All three express permission, ranging from informal (can) to formal (may)."
      },
      {
        "sentence": "___ you help me carry this box, please?",
        "options": [
          "Can",
          "Could",
          "May",
          "Should"
        ],
        "correctAnswer": "Could",
        "explanation": "Polite request for assistance uses 'could' (or 'would')."
      },
      {
        "sentence": "Excuse me, ___ I ask a question?",
        "options": [
          "may",
          "could",
          "can",
          "should"
        ],
        "correctAnswer": "may",
        "explanation": "Formal setting of asking a question in a seminar/meeting."
      },
      {
        "sentence": "___ you pass the salt, please?",
        "options": [
          "Could",
          "Can",
          "Would",
          "All options are correct"
        ],
        "correctAnswer": "All options are correct",
        "explanation": "All are common ways of making a polite request at the table."
      }
    ],
    "dialogue": {
      "speakerA": "Could you open the window?",
      "speakerA_trans": "",
      "speakerB": "Sure, no problem.",
      "speakerB_trans": "",
      "context": "Requesting help in a hot room."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask a senior colleague for permission to leave early?",
      "incorrectDesiLiteral": "",
      "correctNatural": "May I leave early today, please?",
      "explanation": "May represents polite, formal permission request."
    },
    "desiCorrection": {
      "incorrect": "Can you please explain me this?",
      "correct": "Could you please explain this to me?",
      "why": "Explain takes a direct object (this) and 'to' before the person (to me)."
    }
  },
  {
    "dayIndex": 37,
    "theme": "Modals & Conditionals",
    "concept": "Modals of Possibility: Might, May, Could",
    "conceptExplanation": "Use 'might', 'may', and 'could' to express possibility in the present or future. 'Might' indicates a slightly lower probability than 'may'. 'Could' suggests one of several options.",
    "drills": [
      {
        "sentence": "It ___ rain later, so take an umbrella.",
        "options": [
          "might",
          "could",
          "must",
          "should"
        ],
        "correctAnswer": "might",
        "explanation": "Refers to a future possibility of rain."
      },
      {
        "sentence": "Rajiv ___ be in the conference room; let's check.",
        "options": [
          "could",
          "must",
          "should",
          "will"
        ],
        "correctAnswer": "could",
        "explanation": "Expresses one possible location among others."
      },
      {
        "sentence": "We ___ face some delays due to traffic.",
        "options": [
          "may",
          "must",
          "should",
          "would"
        ],
        "correctAnswer": "may",
        "explanation": "A realistic present/future possibility."
      },
      {
        "sentence": "If we don't hurry, we ___ miss the flight.",
        "options": [
          "might",
          "could",
          "may",
          "All options are correct"
        ],
        "correctAnswer": "All options are correct",
        "explanation": "All three modals correctly express future possibilities of negative outcomes."
      }
    ],
    "dialogue": {
      "speakerA": "Where is Rajiv?",
      "speakerA_trans": "",
      "speakerB": "He might be working from home today.",
      "speakerB_trans": "",
      "context": "Searching for a coworker."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a client that project costs could change?",
      "incorrectDesiLiteral": "",
      "correctNatural": "The project costs could vary depending on the scope.",
      "explanation": "Could represents a possibility of variation."
    },
    "desiCorrection": {
      "incorrect": "He may can come tomorrow.",
      "correct": "He may come tomorrow. / He might be able to come tomorrow.",
      "why": "Never combine two modal verbs directly; use 'might be able to'."
    }
  },
  {
    "dayIndex": 38,
    "theme": "Modals & Conditionals",
    "concept": "Modals of Deduction: Must have / Can't have",
    "conceptExplanation": "Use 'must have' + past participle when you are almost certain a past action occurred. Use 'can't have' + past participle when you are almost certain it did not.",
    "drills": [
      {
        "sentence": "Rajiv's lights are off. He ___ gone to sleep.",
        "options": [
          "must have",
          "can't have",
          "should have",
          "might have"
        ],
        "correctAnswer": "must have",
        "explanation": "Logical deduction of high certainty: lights off implies he went to sleep."
      },
      {
        "sentence": "You ___ finished the exam already! It was three hours long.",
        "options": [
          "can't have",
          "must have",
          "should have",
          "could have"
        ],
        "correctAnswer": "can't have",
        "explanation": "Logical deduction of impossibility: completing a long exam so fast is unlikely."
      },
      {
        "sentence": "She ___ left her phone at home. She isn't answering.",
        "options": [
          "must have",
          "can't have",
          "should have",
          "would have"
        ],
        "correctAnswer": "must have",
        "explanation": "Highly probable past event based on current evidence (no answer)."
      },
      {
        "sentence": "He ___ seen the sign. It was huge and bright.",
        "options": [
          "must have",
          "can't have",
          "might have",
          "should have"
        ],
        "correctAnswer": "must have",
        "explanation": "Highly certain past observation."
      }
    ],
    "dialogue": {
      "speakerA": "Rajiv looks very happy today.",
      "speakerA_trans": "",
      "speakerB": "He must have passed his interview.",
      "speakerB_trans": "",
      "context": "Deducing why a friend is happy."
    },
    "thinkInEnglish": {
      "prompt": "How do you express that it's impossible for your friend to have reached Mumbai already?",
      "incorrectDesiLiteral": "",
      "correctNatural": "He can't have reached Mumbai yet.",
      "explanation": "Can't have + past participle for past impossibility."
    },
    "desiCorrection": {
      "incorrect": "He must has finished the task.",
      "correct": "He must have finished the task.",
      "why": "Always use 'have' (never 'has') after modal verbs in past deductions."
    }
  },
  {
    "dayIndex": 39,
    "theme": "Modals & Conditionals",
    "concept": "Lack of Obligation: Needn't vs. Don't have to",
    "conceptExplanation": "Use 'needn't' or 'don't have to' to show that there is no obligation to do something. Do not use 'mustn't', which indicates a strict prohibition.",
    "drills": [
      {
        "sentence": "We ___ work tomorrow; it's a public holiday.",
        "options": [
          "don't have to",
          "mustn't",
          "needn't to",
          "shouldn't"
        ],
        "correctAnswer": "don't have to",
        "explanation": "Lack of obligation: we are free not to work."
      },
      {
        "sentence": "You ___ come if you are feeling unwell.",
        "options": [
          "needn't",
          "mustn't",
          "shouldn't",
          "haven't to"
        ],
        "correctAnswer": "needn't",
        "explanation": "No obligation to attend."
      },
      {
        "sentence": "You ___ touch that wire! It's live and dangerous.",
        "options": [
          "mustn't",
          "don't have to",
          "needn't",
          "shouldn't"
        ],
        "correctAnswer": "mustn't",
        "explanation": "Strict prohibition: touching it is forbidden/unsafe."
      },
      {
        "sentence": "He ___ buy a ticket; entrance is free.",
        "options": [
          "doesn't have to",
          "mustn't",
          "needn't to",
          "isn't having to"
        ],
        "correctAnswer": "doesn't have to",
        "explanation": "No payment or ticket required."
      }
    ],
    "dialogue": {
      "speakerA": "Should I bring some snacks?",
      "speakerA_trans": "",
      "speakerB": "No, you don't have to bring anything.",
      "speakerB_trans": "",
      "context": "Guest asking a host before a party."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a junior developer that a document doesn't need to be long?",
      "incorrectDesiLiteral": "",
      "correctNatural": "The document needn't be very detailed.",
      "explanation": "Needn't expressing lack of obligation."
    },
    "desiCorrection": {
      "incorrect": "You must not pay for this, it is free.",
      "correct": "You don't have to pay for this. / You needn't pay for this.",
      "why": "'Must not' means it is forbidden to pay. Use 'don't have to' to show payment is not necessary."
    }
  },
  {
    "dayIndex": 40,
    "theme": "Modals & Conditionals",
    "concept": "Present Regrets: Wish / If only",
    "conceptExplanation": "Use 'wish' or 'if only' + Past Simple to express a desire for a present situation to be different.",
    "drills": [
      {
        "sentence": "I wish I ___ more free time to exercise.",
        "options": [
          "had",
          "have",
          "would have",
          "had had"
        ],
        "correctAnswer": "had",
        "explanation": "Present regret: I don't have time now, but I wish I did (past simple 'had')."
      },
      {
        "sentence": "If only Rajiv ___ here. He would know what to do.",
        "options": [
          "were",
          "is",
          "would be",
          "had been"
        ],
        "correctAnswer": "were",
        "explanation": "Desire for a different present situation; 'were' is preferred for all subjects."
      },
      {
        "sentence": "I wish I ___ speak Spanish fluently.",
        "options": [
          "could",
          "can",
          "would",
          "had"
        ],
        "correctAnswer": "could",
        "explanation": "Present regret about ability."
      },
      {
        "sentence": "If only it ___ raining! I want to go out.",
        "options": [
          "stopped",
          "would stop",
          "had stopped",
          "stops"
        ],
        "correctAnswer": "would stop",
        "explanation": "Expressing annoyance or desiring a change in a current situation/behavior."
      }
    ],
    "dialogue": {
      "speakerA": "Do you like your house?",
      "speakerA_trans": "",
      "speakerB": "It's nice, but I wish it were larger.",
      "speakerB_trans": "",
      "context": "Discussing living space."
    },
    "thinkInEnglish": {
      "prompt": "How do you say you regret not knowing how to play the guitar?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I wish I knew how to play the guitar.",
      "explanation": "Wish + simple past for present regrets."
    },
    "desiCorrection": {
      "incorrect": "I wish I will buy a car soon.",
      "correct": "I wish I could buy a car soon. / I hope I will buy a car soon.",
      "why": "Use 'wish' for imaginary/unlikely present regrets, and 'hope' for realistic future desires."
    }
  },
  {
    "dayIndex": 41,
    "theme": "Modals & Conditionals",
    "concept": "Past Regrets: Wish / If only",
    "conceptExplanation": "Use 'wish' or 'if only' + Past Perfect to express regret about a past situation that cannot be changed now.",
    "drills": [
      {
        "sentence": "I wish I ___ computer science in college.",
        "options": [
          "had studied",
          "studied",
          "would study",
          "have studied"
        ],
        "correctAnswer": "had studied",
        "explanation": "Past regret: I didn't study it, but now I wish I had (past perfect)."
      },
      {
        "sentence": "If only we ___ that train! We wouldn't be late.",
        "options": [
          "hadn't missed",
          "didn't miss",
          "wouldn't miss",
          "missed"
        ],
        "correctAnswer": "hadn't missed",
        "explanation": "Past regret about missing a train."
      },
      {
        "sentence": "I wish Rajiv ___ to the party yesterday.",
        "options": [
          "had come",
          "came",
          "would come",
          "has come"
        ],
        "correctAnswer": "had come",
        "explanation": "Regret about Rajiv's past absence."
      },
      {
        "sentence": "If only I ___ that comment to her.",
        "options": [
          "hadn't said",
          "didn't say",
          "wouldn't say",
          "haven't said"
        ],
        "correctAnswer": "hadn't said",
        "explanation": "Past regret about speaking."
      }
    ],
    "dialogue": {
      "speakerA": "I'm sorry I shouted at you yesterday.",
      "speakerA_trans": "",
      "speakerB": "I wish you hadn't done that, but it's okay.",
      "speakerB_trans": "",
      "context": "Resolving a past argument."
    },
    "thinkInEnglish": {
      "prompt": "How do you express regret that you didn't save money last year?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I wish I had saved more money last year.",
      "explanation": "Wish + past perfect for past regrets."
    },
    "desiCorrection": {
      "incorrect": "I wish I didn't say that yesterday.",
      "correct": "I wish I hadn't said that yesterday.",
      "why": "Use Past Perfect ('hadn't said') for regrets about completed past events."
    }
  },
  {
    "dayIndex": 42,
    "theme": "Modals & Conditionals",
    "concept": "Had better / Ought to for Advice",
    "conceptExplanation": "Use 'had better' + base verb to give strong, urgent advice (implying a negative consequence if ignored). Use 'ought to' as a synonym for 'should' for general advice.",
    "drills": [
      {
        "sentence": "We ___ leave now, or we will miss the flight.",
        "options": [
          "had better",
          "ought to",
          "would better",
          "should have"
        ],
        "correctAnswer": "had better",
        "explanation": "Urgent advice: missing the flight is the negative consequence."
      },
      {
        "sentence": "You ___ apologize to her for your behavior.",
        "options": [
          "ought to",
          "had better",
          "would ought",
          "should have"
        ],
        "correctAnswer": "ought to",
        "explanation": "General moral advice or recommendation (ought to)."
      },
      {
        "sentence": "Rajiv ___ not be late for this client meeting.",
        "options": [
          "had better",
          "ought to",
          "should have",
          "must to"
        ],
        "correctAnswer": "had better",
        "explanation": "Negative advice: 'had better not' + verb."
      },
      {
        "sentence": "You ___ eat more vegetables for your health.",
        "options": [
          "ought to",
          "had better to",
          "would better",
          "ought"
        ],
        "correctAnswer": "ought to",
        "explanation": "General health advice; 'ought' is followed by 'to'."
      }
    ],
    "dialogue": {
      "speakerA": "Should I wear a suit?",
      "speakerA_trans": "",
      "speakerB": "You had better wear one; the client is very formal.",
      "speakerB_trans": "",
      "context": "Preparing for a business presentation."
    },
    "thinkInEnglish": {
      "prompt": "How do you warn a colleague that they should backup their files immediately?",
      "incorrectDesiLiteral": "",
      "correctNatural": "You had better backup your files now.",
      "explanation": "Had better indicates urgent warning."
    },
    "desiCorrection": {
      "incorrect": "You had better to complete this work.",
      "correct": "You had better complete this work.",
      "why": "'Had better' is followed by a bare infinitive (complete), never 'to complete'."
    }
  },
  {
    "dayIndex": 43,
    "theme": "Modals & Conditionals",
    "concept": "Will/Would for Typical Behavior",
    "conceptExplanation": "Use 'will' to describe typical, predictable habits in the present. Use 'would' to describe typical, predictable habits in the past.",
    "drills": [
      {
        "sentence": "She is so helpful. She ___ always help you if you ask.",
        "options": [
          "will",
          "would",
          "shall",
          "should"
        ],
        "correctAnswer": "will",
        "explanation": "Predictable present habit/characteristic."
      },
      {
        "sentence": "When we were kids, we ___ build sandcastles on the beach.",
        "options": [
          "would",
          "will",
          "shall",
          "should"
        ],
        "correctAnswer": "would",
        "explanation": "Repeated past characteristic behavior (similar to used to)."
      },
      {
        "sentence": "Rajiv is very forgetful. He ___ leave his bag in the office.",
        "options": [
          "will",
          "would",
          "should",
          "ought"
        ],
        "correctAnswer": "will",
        "explanation": "Typical present characteristic behavior."
      },
      {
        "sentence": "Every afternoon, my cat ___ sit by the window for hours.",
        "options": [
          "would",
          "will",
          "both 'will' and 'would'",
          "shall"
        ],
        "correctAnswer": "both 'will' and 'would'",
        "explanation": "Can be present ('will') or past ('would') depending on overall context."
      }
    ],
    "dialogue": {
      "speakerA": "Does Rajiv always arrive late?",
      "speakerA_trans": "",
      "speakerB": "Yes, he will typically walk in ten minutes after we start.",
      "speakerB_trans": "",
      "context": "Discussing a colleague's habits."
    },
    "thinkInEnglish": {
      "prompt": "How do you describe how your grandmother used to tell stories every night?",
      "incorrectDesiLiteral": "",
      "correctNatural": "My grandmother would tell us stories every night.",
      "explanation": "Would for typical past habits."
    },
    "desiCorrection": {
      "incorrect": "When I was young I will play cricket.",
      "correct": "When I was young I would play cricket. / When I was young I used to play cricket.",
      "why": "Use 'would' or 'used to' for past typical habits, not 'will'."
    }
  },
  {
    "dayIndex": 44,
    "theme": "Modals & Conditionals",
    "concept": "Supposed to for Expectations",
    "conceptExplanation": "Use 'be supposed to' + verb to describe things that are expected, scheduled, or required by rules/custom, but might not actually happen.",
    "drills": [
      {
        "sentence": "The train ___ arrive at 8 AM, but it's late.",
        "options": [
          "is supposed to",
          "supposed to",
          "was supposed to",
          "is supposing to"
        ],
        "correctAnswer": "is supposed to",
        "explanation": "Expectation or schedule in the present."
      },
      {
        "sentence": "We ___ use this door; it is an emergency exit.",
        "options": [
          "aren't supposed to",
          "don't suppose to",
          "mustn't suppose to",
          "aren't supposing to"
        ],
        "correctAnswer": "aren't supposed to",
        "explanation": "Rule/expectation of prohibition."
      },
      {
        "sentence": "I ___ meet Rajiv at five, but he cancelled.",
        "options": [
          "was supposed to",
          "is supposed to",
          "am supposed to",
          "supposed to"
        ],
        "correctAnswer": "was supposed to",
        "explanation": "Past expectation that did not occur."
      },
      {
        "sentence": "What ___ we ___ do during an earthquake?",
        "options": [
          "are / supposed to",
          "do / suppose to",
          "are / supposing to",
          "will / suppose to"
        ],
        "correctAnswer": "are / supposed to",
        "explanation": "Expectation/instruction of behavior."
      }
    ],
    "dialogue": {
      "speakerA": "Why is Rajiv here today?",
      "speakerA_trans": "",
      "speakerB": "He was supposed to be on holiday, but his plans changed.",
      "speakerB_trans": "",
      "context": "Surprise encounter at the office."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a classmate that they are expected to submit their homework by Monday?",
      "incorrectDesiLiteral": "",
      "correctNatural": "You are supposed to submit the homework by Monday.",
      "explanation": "Supposed to for standard expectations."
    },
    "desiCorrection": {
      "incorrect": "I am suppose to work tomorrow.",
      "correct": "I am supposed to work tomorrow.",
      "why": "Always use the past participle spelling 'supposed to', not 'suppose to'."
    }
  },
  {
    "dayIndex": 45,
    "theme": "Sentence Structure & Connectors",
    "concept": "Relative Clauses: Who, Which, That",
    "conceptExplanation": "Use 'who' for people, 'which' for things and animals, and 'that' for both people and things in defining relative clauses.",
    "drills": [
      {
        "sentence": "The developer ___ wrote this code has left the company.",
        "options": [
          "who",
          "which",
          "whose",
          "whom"
        ],
        "correctAnswer": "who",
        "explanation": "'Who' is the subject pronoun for a person."
      },
      {
        "sentence": "The bug ___ caused the crash has been fixed.",
        "options": [
          "who",
          "which",
          "whose",
          "whom"
        ],
        "correctAnswer": "which",
        "explanation": "'Which' is used for non-human things (bug)."
      },
      {
        "sentence": "This is the laptop ___ Rajiv bought yesterday.",
        "options": [
          "who",
          "that",
          "whose",
          "whom"
        ],
        "correctAnswer": "that",
        "explanation": "'That' can be used for things in defining clauses."
      },
      {
        "sentence": "I met a colleague ___ father works at ISRO.",
        "options": [
          "who",
          "whose",
          "whom",
          "which"
        ],
        "correctAnswer": "whose",
        "explanation": "'Whose' indicates possession (colleague's father)."
      }
    ],
    "dialogue": {
      "speakerA": "Do you know the woman who spoke to us?",
      "speakerA_trans": "",
      "speakerB": "Yes, she is the designer who built the UI.",
      "speakerB_trans": "",
      "context": "Identifying team members."
    },
    "thinkInEnglish": {
      "prompt": "How do you describe a book that taught you a lot?",
      "incorrectDesiLiteral": "",
      "correctNatural": "It is a book which taught me a lot.",
      "explanation": "Which for objects."
    },
    "desiCorrection": {
      "incorrect": "The person which met you is my brother.",
      "correct": "The person who met you is my brother.",
      "why": "Use 'who' (not 'which') for people."
    }
  },
  {
    "dayIndex": 46,
    "theme": "Sentence Structure & Connectors",
    "concept": "Passive Voice for Focus",
    "conceptExplanation": "Use the passive voice (be + past participle) when the focus is on the action or the object of the action, or when the agent performing the action is unknown or unimportant.",
    "drills": [
      {
        "sentence": "The new software update ___ last night.",
        "options": [
          "was released",
          "released",
          "is releasing",
          "has released"
        ],
        "correctAnswer": "was released",
        "explanation": "Focus is on the software, and release is complete (passive)."
      },
      {
        "sentence": "All active issues ___ by our team daily.",
        "options": [
          "are resolved",
          "resolve",
          "are resolving",
          "resolved"
        ],
        "correctAnswer": "are resolved",
        "explanation": "Continuous/habitual team task focus in the present (passive)."
      },
      {
        "sentence": "The project ___ by Rajiv before the deadline.",
        "options": [
          "was completed",
          "completed",
          "had completed",
          "was completing"
        ],
        "correctAnswer": "was completed",
        "explanation": "Passive focus on the project's completion."
      },
      {
        "sentence": "Thousands of emails ___ every second.",
        "options": [
          "are sent",
          "send",
          "is sent",
          "sent"
        ],
        "correctAnswer": "are sent",
        "explanation": "Passive focus on emails as a group."
      }
    ],
    "dialogue": {
      "speakerA": "Has the invoice been sent?",
      "speakerA_trans": "",
      "speakerB": "Yes, it was sent this morning.",
      "speakerB_trans": "",
      "context": "Checking billing status."
    },
    "thinkInEnglish": {
      "prompt": "How do you report that someone fixed the office printer without naming them?",
      "incorrectDesiLiteral": "",
      "correctNatural": "The printer has been fixed.",
      "explanation": "Passive voice focuses on the object ('the printer')."
    },
    "desiCorrection": {
      "incorrect": "The code was wrote by Rajiv.",
      "correct": "The code was written by Rajiv.",
      "why": "Passive voice requires the past participle form of the verb ('written', not 'wrote')."
    }
  },
  {
    "dayIndex": 47,
    "theme": "Sentence Structure & Connectors",
    "concept": "Reported Speech Tense Shifts",
    "conceptExplanation": "When reporting what someone said in the past, tenses typically shift backward (Present Simple to Past Simple, Present Continuous to Past Continuous, Present Perfect to Past Perfect).",
    "drills": [
      {
        "sentence": "Direct: 'I am tired.' -> Reported: He said that he ___ tired.",
        "options": [
          "is",
          "was",
          "has been",
          "had been"
        ],
        "correctAnswer": "was",
        "explanation": "Present 'am' shifts to past 'was' in reported speech."
      },
      {
        "sentence": "Direct: 'I have completed the work.' -> Reported: She told me she ___ the work.",
        "options": [
          "completed",
          "has completed",
          "had completed",
          "was completing"
        ],
        "correctAnswer": "had completed",
        "explanation": "Present perfect 'have completed' shifts to past perfect 'had completed'."
      },
      {
        "sentence": "Direct: 'I will go tomorrow.' -> Reported: Rajiv said he ___ go the next day.",
        "options": [
          "will",
          "would",
          "went",
          "goes"
        ],
        "correctAnswer": "would",
        "explanation": "'Will' shifts to 'would' in reported speech."
      },
      {
        "sentence": "Direct: 'I lost my keys.' -> Reported: He admitted he ___ his keys.",
        "options": [
          "lost",
          "had lost",
          "was losing",
          "has lost"
        ],
        "correctAnswer": "had lost",
        "explanation": "Simple past 'lost' shifts to past perfect 'had lost'."
      }
    ],
    "dialogue": {
      "speakerA": "What did Rajiv say about the deadline?",
      "speakerA_trans": "",
      "speakerB": "He said that he would submit the work by Friday.",
      "speakerB_trans": "",
      "context": "Reporting office conversations."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a teammate that the manager said she was happy with the progress?",
      "incorrectDesiLiteral": "",
      "correctNatural": "She said she was happy with the progress.",
      "explanation": "Present shifts to past in reporting."
    },
    "desiCorrection": {
      "incorrect": "He said me that he is busy.",
      "correct": "He told me that he was busy. / He said that he was busy.",
      "why": "'Say' cannot take a direct personal object without 'to' (said to me). 'Tell' takes a personal object directly (told me). Also, shift the tense ('was busy')."
    }
  },
  {
    "dayIndex": 48,
    "theme": "Sentence Structure & Connectors",
    "concept": "Concession: Although, Despite, In spite of",
    "conceptExplanation": "Use 'although' or 'even though' followed by a subject + verb clause. Use 'despite' or 'in spite of' followed by a noun, pronoun, or -ing verb.",
    "drills": [
      {
        "sentence": "___ it was raining heavily, Rajiv went for a run.",
        "options": [
          "Although",
          "Despite",
          "In spite of",
          "Even"
        ],
        "correctAnswer": "Although",
        "explanation": "Followed by a clause ('it was raining')."
      },
      {
        "sentence": "___ the heavy rain, Rajiv went for a run.",
        "options": [
          "Although",
          "Despite",
          "Even though",
          "Though"
        ],
        "correctAnswer": "Despite",
        "explanation": "Followed by a noun phrase ('the heavy rain')."
      },
      {
        "sentence": "They completed the deployment ___ facing multiple bugs.",
        "options": [
          "although",
          "despite",
          "even though",
          "though"
        ],
        "correctAnswer": "despite",
        "explanation": "Followed by an -ing verb ('facing')."
      },
      {
        "sentence": "She bought the laptop ___ the high price.",
        "options": [
          "although",
          "even though",
          "in spite of",
          "despite of"
        ],
        "correctAnswer": "in spite of",
        "explanation": "Followed by a noun phrase. Note: 'despite' does not take 'of'."
      }
    ],
    "dialogue": {
      "speakerA": "Did you finish the work on time?",
      "speakerA_trans": "",
      "speakerB": "Yes, although we had very little time.",
      "speakerB_trans": "",
      "context": "Reviewing project timeline."
    },
    "thinkInEnglish": {
      "prompt": "How do you state that a team succeeded despite having a low budget?",
      "incorrectDesiLiteral": "",
      "correctNatural": "The team succeeded despite having a low budget. / The team succeeded although the budget was low.",
      "explanation": "Budget low as noun clause vs phrase."
    },
    "desiCorrection": {
      "incorrect": "Despite of the low budget, they won.",
      "correct": "Despite the low budget, they won. / In spite of the low budget, they won.",
      "why": "'Despite' never takes the preposition 'of'. Only 'in spite of' does."
    }
  },
  {
    "dayIndex": 49,
    "theme": "Sentence Structure & Connectors",
    "concept": "Connectors of Purpose: In order to, So that",
    "conceptExplanation": "Use 'in order to' or 'to' followed by a base verb. Use 'so that' followed by a subject + modal verb clause (can, could, would).",
    "drills": [
      {
        "sentence": "I joined Pravah ___ improve my grammar.",
        "options": [
          "to",
          "in order to",
          "so that",
          "both 'to' and 'in order to'"
        ],
        "correctAnswer": "both 'to' and 'in order to'",
        "explanation": "Both are followed by the base verb (improve)."
      },
      {
        "sentence": "He worked late ___ the team could meet the deadline.",
        "options": [
          "in order to",
          "to",
          "so that",
          "for"
        ],
        "correctAnswer": "so that",
        "explanation": "Followed by a clause ('the team could meet')."
      },
      {
        "sentence": "She saved money ___ buy a new laptop.",
        "options": [
          "in order to",
          "so that",
          "for to",
          "so to"
        ],
        "correctAnswer": "in order to",
        "explanation": "Followed by base verb (buy)."
      },
      {
        "sentence": "We took a taxi ___ we wouldn't be late.",
        "options": [
          "so that",
          "to",
          "in order to",
          "for"
        ],
        "correctAnswer": "so that",
        "explanation": "Followed by negative modal clause."
      }
    ],
    "dialogue": {
      "speakerA": "Why did you call Rajiv?",
      "speakerA_trans": "",
      "speakerB": "I called him in order to clarify the client requirements.",
      "speakerB_trans": "",
      "context": "Discussing call purpose."
    },
    "thinkInEnglish": {
      "prompt": "How do you explain that you backup files to prevent data loss?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I backup my files so that I don't lose my data.",
      "explanation": "So that with negative modal clause."
    },
    "desiCorrection": {
      "incorrect": "I came here for meeting you.",
      "correct": "I came here to meet you. / I came here in order to meet you.",
      "why": "Use 'to + infinitive' (or 'in order to') to express purpose, not 'for + -ing' verb."
    }
  },
  {
    "dayIndex": 50,
    "theme": "Sentence Structure & Connectors",
    "concept": "Non-Defining Relative Clauses",
    "conceptExplanation": "Use non-defining relative clauses to add extra, non-essential information about a noun. Always separate these clauses with commas, and never use 'that' (use 'who' or 'which').",
    "drills": [
      {
        "sentence": "My brother, ___ lives in London, is visiting next week.",
        "options": [
          "who",
          "which",
          "that",
          "whose"
        ],
        "correctAnswer": "who",
        "explanation": "Non-defining clause about a person; 'that' is incorrect, requires 'who'."
      },
      {
        "sentence": "The office printer, ___ was bought last year, is already broken.",
        "options": [
          "which",
          "that",
          "who",
          "whose"
        ],
        "correctAnswer": "which",
        "explanation": "Non-defining clause about an object; requires 'which'."
      },
      {
        "sentence": "Rajiv, ___ laptop is broken, is working on my computer.",
        "options": [
          "who",
          "whose",
          "which",
          "whom"
        ],
        "correctAnswer": "whose",
        "explanation": "Indicates possession of the laptop by Rajiv."
      },
      {
        "sentence": "We visited Varanasi, ___ is one of the oldest cities.",
        "options": [
          "which",
          "who",
          "that",
          "where"
        ],
        "correctAnswer": "which",
        "explanation": "Non-defining clause about a location as a subject."
      }
    ],
    "dialogue": {
      "speakerA": "Where is your brother?",
      "speakerA_trans": "",
      "speakerB": "My brother, who works in Bangalore, is visiting today.",
      "speakerB_trans": "",
      "context": "Introducing family."
    },
    "thinkInEnglish": {
      "prompt": "How do you mention that your car (which is red) broke down?",
      "incorrectDesiLiteral": "",
      "correctNatural": "My car, which is red, broke down yesterday.",
      "explanation": "Separated by commas, using which."
    },
    "desiCorrection": {
      "incorrect": "My car that is red broke down.",
      "correct": "My car, which is red, broke down.",
      "why": "Use 'which' and commas for non-essential extra information."
    }
  },
  {
    "dayIndex": 51,
    "theme": "Sentence Structure & Connectors",
    "concept": "Passive Voice in Professional Writing",
    "conceptExplanation": "In professional contexts, the passive voice is useful for delivering negative news or focusing on processes objectively rather than accusing individuals.",
    "drills": [
      {
        "sentence": "A billing error ___ on your account.",
        "options": [
          "was made",
          "has been made",
          "was making",
          "both 'was made' and 'has been made'"
        ],
        "correctAnswer": "both 'was made' and 'has been made'",
        "explanation": "Objective passive focus, avoiding blaming a specific employee."
      },
      {
        "sentence": "Your application ___ currently ___.",
        "options": [
          "is / being processed",
          "is / processing",
          "has / processed",
          "was / processed"
        ],
        "correctAnswer": "is / being processed",
        "explanation": "Process focus in the present continuous passive."
      },
      {
        "sentence": "The project schedule ___ due to resource shortages.",
        "options": [
          "was revised",
          "revised",
          "had revised",
          "was revising"
        ],
        "correctAnswer": "was revised",
        "explanation": "Passive focus on the schedule change rather than the person who changed it."
      },
      {
        "sentence": "Our server logs ___ for security audits.",
        "options": [
          "are monitored",
          "monitor",
          "are monitoring",
          "monitored"
        ],
        "correctAnswer": "are monitored",
        "explanation": "Objective system process description."
      }
    ],
    "dialogue": {
      "speakerA": "Why was the meeting cancelled?",
      "speakerA_trans": "",
      "speakerB": "The schedule was revised due to key absences.",
      "speakerB_trans": "",
      "context": "Corporate communications."
    },
    "thinkInEnglish": {
      "prompt": "How do you politely tell a customer that their credit card was declined without blaming them?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Your credit card payment was declined.",
      "explanation": "Passive voice focuses on the action, not the customer's failure."
    },
    "desiCorrection": {
      "incorrect": "You made a mistake in the calculation.",
      "correct": "A mistake was made in the calculation. / There appears to be an error in the calculation.",
      "why": "Passive voice or indirect phrasing is much more polite and professional in workplace communication."
    }
  },
  {
    "dayIndex": 52,
    "theme": "Sentence Structure & Connectors",
    "concept": "Reported Questions",
    "conceptExplanation": "Reported questions do not use question word order (verb-subject) and do not use 'do/does/did'. They use statement word order (subject-verb) and 'if/whether' for yes/no questions.",
    "drills": [
      {
        "sentence": "Direct: 'Where do you live?' -> Reported: She asked me where I ___.",
        "options": [
          "lived",
          "do live",
          "did I live",
          "was living"
        ],
        "correctAnswer": "lived",
        "explanation": "Statement word order (subject + verb) and tense shift."
      },
      {
        "sentence": "Direct: 'Are you coming?' -> Reported: Rajiv asked ___ I was coming.",
        "options": [
          "if",
          "that",
          "what",
          "whether or not"
        ],
        "correctAnswer": "if",
        "explanation": "Yes/no question reporting uses 'if' or 'whether'."
      },
      {
        "sentence": "Direct: 'What time does the train leave?' -> Reported: He wanted to know what time the train ___.",
        "options": [
          "left",
          "did leave",
          "leaves",
          "was leaving"
        ],
        "correctAnswer": "left",
        "explanation": "Statement word order, no 'does', past tense."
      },
      {
        "sentence": "Direct: 'Have you seen Rajiv?' -> Reported: She asked if I ___ Rajiv.",
        "options": [
          "had seen",
          "saw",
          "have seen",
          "was seeing"
        ],
        "correctAnswer": "had seen",
        "explanation": "Tense shift to Past Perfect in reported question."
      }
    ],
    "dialogue": {
      "speakerA": "What did the interviewer ask you?",
      "speakerA_trans": "",
      "speakerB": "She asked why I wanted to join the company.",
      "speakerB_trans": "",
      "context": "Recounting a job interview."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a friend that a stranger asked for their name?",
      "incorrectDesiLiteral": "",
      "correctNatural": "The stranger asked what my name was.",
      "explanation": "Reported question structure (subject + was)."
    },
    "desiCorrection": {
      "incorrect": "She asked me where did I live.",
      "correct": "She asked me where I lived.",
      "why": "Do not use 'did' or question word order in reported questions; use statement word order."
    }
  },
  {
    "dayIndex": 53,
    "theme": "Sentence Structure & Connectors",
    "concept": "Because vs. Because of / Due to",
    "conceptExplanation": "Use 'because' followed by a subject + verb clause. Use 'because of' or 'due to' followed by a noun or noun phrase.",
    "drills": [
      {
        "sentence": "The flight was delayed ___ it was foggy.",
        "options": [
          "because",
          "because of",
          "due to",
          "owing"
        ],
        "correctAnswer": "because",
        "explanation": "Followed by a clause ('it was foggy')."
      },
      {
        "sentence": "The flight was delayed ___ the fog.",
        "options": [
          "because",
          "because of",
          "due to",
          "both 'because of' and 'due to'"
        ],
        "correctAnswer": "both 'because of' and 'due to'",
        "explanation": "Followed by a noun phrase ('the fog')."
      },
      {
        "sentence": "We cancelled the picnic ___ the heavy rain.",
        "options": [
          "because of",
          "because",
          "due to of",
          "since"
        ],
        "correctAnswer": "because of",
        "explanation": "Followed by a noun phrase."
      },
      {
        "sentence": "I couldn't sleep ___ the noise outside.",
        "options": [
          "because of",
          "because",
          "since",
          "as"
        ],
        "correctAnswer": "because of",
        "explanation": "Followed by a noun phrase."
      }
    ],
    "dialogue": {
      "speakerA": "Why were you absent yesterday?",
      "speakerA_trans": "",
      "speakerB": "I was absent because of a sudden illness.",
      "speakerB_trans": "",
      "context": "Explaining absence to a manager."
    },
    "thinkInEnglish": {
      "prompt": "How do you explain that a project was delayed due to lack of staff?",
      "incorrectDesiLiteral": "",
      "correctNatural": "The project was delayed due to staff shortages. / The project was delayed because we were short of staff.",
      "explanation": "Clause vs noun phrase distinction."
    },
    "desiCorrection": {
      "incorrect": "I am late due to I missed the bus.",
      "correct": "I am late because I missed the bus. / I am late due to missing the bus.",
      "why": "'Due to' must be followed by a noun or noun phrase, not a clause. Use 'because' for clauses."
    }
  },
  {
    "dayIndex": 54,
    "theme": "Sentence Structure & Connectors",
    "concept": "So vs. Such",
    "conceptExplanation": "Use 'so' before adjectives or adverbs (so hot, so quickly). Use 'such' or 'such a/an' before a noun or adjective + noun phrase (such a hot day, such beautiful music).",
    "drills": [
      {
        "sentence": "The weather today is ___ hot.",
        "options": [
          "so",
          "such",
          "such a",
          "very much"
        ],
        "correctAnswer": "so",
        "explanation": "Adjective ('hot') requires 'so'."
      },
      {
        "sentence": "It is ___ a hot day today.",
        "options": [
          "so",
          "such",
          "such a",
          "too"
        ],
        "correctAnswer": "such a",
        "explanation": "Noun phrase starting with singular countable noun takes 'such a'."
      },
      {
        "sentence": "She plays the sitar ___ beautifully.",
        "options": [
          "so",
          "such",
          "such a",
          "so much"
        ],
        "correctAnswer": "so",
        "explanation": "Adverb ('beautifully') takes 'so'."
      },
      {
        "sentence": "They are ___ friendly people.",
        "options": [
          "so",
          "such",
          "such a",
          "too"
        ],
        "correctAnswer": "such",
        "explanation": "Plural noun phrase ('friendly people') takes 'such'."
      }
    ],
    "dialogue": {
      "speakerA": "Did you enjoy the movie?",
      "speakerA_trans": "",
      "speakerB": "Yes, it was such a moving story.",
      "speakerB_trans": "",
      "context": "Discussing cinema."
    },
    "thinkInEnglish": {
      "prompt": "How do you express that a task is extremely difficult?",
      "incorrectDesiLiteral": "",
      "correctNatural": "This task is so difficult! / This is such a difficult task.",
      "explanation": "So + adj vs such a + adj + noun."
    },
    "desiCorrection": {
      "incorrect": "He is a so nice person.",
      "correct": "He is such a nice person. / He is so nice.",
      "why": "'So' cannot go directly before an 'adjective + noun' phrase; use 'such a' instead."
    }
  },
  {
    "dayIndex": 55,
    "theme": "Sentence Structure & Connectors",
    "concept": "Subject-Verb Agreement with Indefinite Pronouns",
    "conceptExplanation": "Indefinite pronouns like 'everyone', 'everybody', 'someone', 'nobody', 'each', 'neither', and 'either' are grammatically singular and take singular verbs.",
    "drills": [
      {
        "sentence": "Everyone in the office ___ happy with the new policy.",
        "options": [
          "is",
          "are",
          "were",
          "have been"
        ],
        "correctAnswer": "is",
        "explanation": "'Everyone' is singular, requiring 'is'."
      },
      {
        "sentence": "Neither of the proposals ___ suitable for the project.",
        "options": [
          "is",
          "are",
          "were",
          "have been"
        ],
        "correctAnswer": "is",
        "explanation": "'Neither of' takes a singular verb in standard formal English."
      },
      {
        "sentence": "Each of the candidates ___ an interview tomorrow.",
        "options": [
          "has",
          "have",
          "are having",
          "is having"
        ],
        "correctAnswer": "has",
        "explanation": "'Each' is singular, requiring 'has'."
      },
      {
        "sentence": "Somebody ___ left their bag in the lobby.",
        "options": [
          "has",
          "have",
          "is",
          "are"
        ],
        "correctAnswer": "has",
        "explanation": "'Somebody' is singular."
      }
    ],
    "dialogue": {
      "speakerA": "Has everyone arrived?",
      "speakerA_trans": "",
      "speakerB": "Yes, everybody is sitting in the conference room.",
      "speakerB_trans": "",
      "context": "Preparing to start a meeting."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a group that each person will receive a certificate?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Each participant is going to receive a certificate.",
      "explanation": "Each takes singular verb 'is'."
    },
    "desiCorrection": {
      "incorrect": "Neither of the two books are interesting.",
      "correct": "Neither of the two books is interesting.",
      "why": "Use singular verb 'is' with 'neither of' in standard English."
    }
  },
  {
    "dayIndex": 56,
    "theme": "Sentence Structure & Connectors",
    "concept": "Participle Clauses",
    "conceptExplanation": "Use participle clauses (-ing or -ed clauses) to express time, reason, or result in a concise way, ensuring the subject of the clause matches the main clause.",
    "drills": [
      {
        "sentence": "___ down the street, I found a lost wallet.",
        "options": [
          "Walking",
          "Walked",
          "Having walked",
          "While walked"
        ],
        "correctAnswer": "Walking",
        "explanation": "Present participle clause shows simultaneous action (I was walking, I found)."
      },
      {
        "sentence": "___ by the client's reaction, Rajiv revised the proposal.",
        "options": [
          "Surprised",
          "Surprising",
          "Having surprised",
          "Surprise"
        ],
        "correctAnswer": "Surprised",
        "explanation": "Past participle clause indicates reason/cause (Because he was surprised...)."
      },
      {
        "sentence": "___ his dinner, he went straight to bed.",
        "options": [
          "Having finished",
          "Finishing",
          "Finished",
          "Have finished"
        ],
        "correctAnswer": "Having finished",
        "explanation": "Perfect participle clause shows completed action before another."
      },
      {
        "sentence": "___ in Mumbai, she knows the city very well.",
        "options": [
          "Having lived",
          "Living",
          "Lived",
          "Both 'Living' and 'Having lived'"
        ],
        "correctAnswer": "Both 'Living' and 'Having lived'",
        "explanation": "Lived/living both show duration/reason."
      }
    ],
    "dialogue": {
      "speakerA": "Did you see the accident?",
      "speakerA_trans": "",
      "speakerB": "Yes, walking to work this morning, I saw it happen.",
      "speakerB_trans": "",
      "context": "Talking about a commute event."
    },
    "thinkInEnglish": {
      "prompt": "How do you explain that because you felt tired, you went to sleep early?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Feeling tired, I went to sleep early.",
      "explanation": "Participle clause showing reason."
    },
    "desiCorrection": {
      "incorrect": "Walking in the park, a dog bit him.",
      "correct": "While he was walking in the park, a dog bit him. / Walking in the park, he was bitten by a dog.",
      "why": "Avoid 'dangling participles'; the subject of the participle clause must match the subject of the main clause."
    }
  },
  {
    "dayIndex": 57,
    "theme": "Sentence Structure & Connectors",
    "concept": "Inversion for Emphasis",
    "conceptExplanation": "In formal English, when we begin a sentence with a negative or restrictive adverb (e.g., 'never', 'seldom', 'hardly', 'not only'), the subject and auxiliary verb invert.",
    "drills": [
      {
        "sentence": "Seldom ___ seen such a brilliant performance.",
        "options": [
          "have I",
          "I have",
          "did I",
          "had I"
        ],
        "correctAnswer": "have I",
        "explanation": "Negative adverb 'seldom' triggers subject-auxiliary inversion."
      },
      {
        "sentence": "Not only ___ late, but he also forgot the slides.",
        "options": [
          "was Rajiv",
          "Rajiv was",
          "did Rajiv",
          "had Rajiv"
        ],
        "correctAnswer": "was Rajiv",
        "explanation": "Restrictive connector 'not only' at the start triggers inversion."
      },
      {
        "sentence": "Hardly ___ entered the room when the phone rang.",
        "options": [
          "had I",
          "I had",
          "did I",
          "was I"
        ],
        "correctAnswer": "had I",
        "explanation": "Hardly... when structure triggers past perfect inversion."
      },
      {
        "sentence": "Never ___ experienced such warmth from strangers.",
        "options": [
          "have I",
          "I have",
          "did I",
          "had I"
        ],
        "correctAnswer": "have I",
        "explanation": "Negative adverb 'never' triggers present perfect inversion."
      }
    ],
    "dialogue": {
      "speakerA": "Was the presentation successful?",
      "speakerA_trans": "",
      "speakerB": "Not only was the client impressed, but they also signed the contract.",
      "speakerB_trans": "",
      "context": "Reviewing client feedback."
    },
    "thinkInEnglish": {
      "prompt": "How do you dramatically state that you have never seen such a beautiful sight?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Never have I seen such a beautiful sight.",
      "explanation": "Inversion for poetic emphasis."
    },
    "desiCorrection": {
      "incorrect": "Rarely I go to the cinema.",
      "correct": "Rarely do I go to the cinema.",
      "why": "Restrictive adverb 'rarely' at the start of a sentence requires inversion using the auxiliary 'do'."
    }
  },
  {
    "dayIndex": 58,
    "theme": "Sentence Structure & Connectors",
    "concept": "Cleft Sentences",
    "conceptExplanation": "Use cleft sentences (starting with 'What...' or 'It is...') to connect new information to old, or to place strong emphasis on a specific part of a sentence.",
    "drills": [
      {
        "sentence": "___ I need is a cup of strong tea.",
        "options": [
          "What",
          "It is",
          "That",
          "Which"
        ],
        "correctAnswer": "What",
        "explanation": "Cleft structure: 'What + subject + verb + is + noun' emphasizes the need."
      },
      {
        "sentence": "It was Rajiv ___ solved the server issue.",
        "options": [
          "who",
          "which",
          "that",
          "whose"
        ],
        "correctAnswer": "who",
        "explanation": "It-cleft emphasizes the person who did the action."
      },
      {
        "sentence": "___ she wants is to learn fluent English.",
        "options": [
          "What",
          "It is",
          "That",
          "Which"
        ],
        "correctAnswer": "What",
        "explanation": "Emphasizing a desire using a what-cleft."
      },
      {
        "sentence": "It was yesterday ___ they signed the deal.",
        "options": [
          "that",
          "when",
          "which",
          "who"
        ],
        "correctAnswer": "that",
        "explanation": "It-cleft emphasizing a specific time."
      }
    ],
    "dialogue": {
      "speakerA": "Did you lose your keys?",
      "speakerA_trans": "",
      "speakerB": "No, it was my wallet that I lost.",
      "speakerB_trans": "",
      "context": "Correcting a misunderstanding."
    },
    "thinkInEnglish": {
      "prompt": "How do you emphasize that the most important thing is team communication?",
      "incorrectDesiLiteral": "",
      "correctNatural": "What we need most is better team communication.",
      "explanation": "What-cleft sentence for emphasis."
    },
    "desiCorrection": {
      "incorrect": "What I want is a laptop.",
      "correct": "What I want is a laptop. (Correct) / The thing what I want is a laptop. (Incorrect)",
      "why": "'What I want' is a complete cleft clause; do not add 'what' after 'the thing'."
    }
  },
  {
    "dayIndex": 59,
    "theme": "Sentence Structure & Connectors",
    "concept": "Double Comparatives",
    "conceptExplanation": "Use double comparatives (The + comparative adjective/adverb, the + comparative adjective/adverb) to show that two changes happen together and depend on each other.",
    "drills": [
      {
        "sentence": "The ___ you study, the ___ you learn.",
        "options": [
          "more / more",
          "most / most",
          "better / more",
          "more / better"
        ],
        "correctAnswer": "more / more",
        "explanation": "Shows direct proportional relationship of learning to study."
      },
      {
        "sentence": "The ___ the coffee, the ___ I like it.",
        "options": [
          "stronger / more",
          "strong / most",
          "strongest / more",
          "stronger / most"
        ],
        "correctAnswer": "stronger / more",
        "explanation": "Double comparative form using comparative adjectives."
      },
      {
        "sentence": "The ___ we leave, the ___ we will arrive.",
        "options": [
          "earlier / sooner",
          "early / soon",
          "earliest / soonest",
          "earlier / soonest"
        ],
        "correctAnswer": "earlier / sooner",
        "explanation": "Double comparative using adverbs of time."
      },
      {
        "sentence": "The ___ the task, the ___ we should be.",
        "options": [
          "harder / more careful",
          "hard / careful",
          "hardest / most careful",
          "harder / careful"
        ],
        "correctAnswer": "harder / more careful",
        "explanation": "Double comparative with long adjective comparison."
      }
    ],
    "dialogue": {
      "speakerA": "Are you nervous about the presentation?",
      "speakerA_trans": "",
      "speakerB": "Yes, the closer it gets, the more nervous I feel.",
      "speakerB_trans": "",
      "context": "Discussing upcoming challenges."
    },
    "thinkInEnglish": {
      "prompt": "How do you say that as a person grows older, they gain wisdom?",
      "incorrectDesiLiteral": "",
      "correctNatural": "The older you get, the wiser you become.",
      "explanation": "Double comparative structure."
    },
    "desiCorrection": {
      "incorrect": "The more you work, the most money you make.",
      "correct": "The more you work, the more money you make.",
      "why": "Both parts of a double comparative must use comparative forms ('more', not 'most')."
    }
  },
  {
    "dayIndex": 60,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Revert Back",
    "conceptExplanation": "The word 'revert' means to return to a previous state, or in business contexts, to reply. Adding 'back' is a redundancy because the concept of 'back' is already inside the word 'revert'.",
    "drills": [
      {
        "sentence": "Please ___ to me by Friday evening.",
        "options": [
          "revert",
          "revert back",
          "reply back",
          "revert up"
        ],
        "correctAnswer": "revert",
        "explanation": "'Revert' is sufficient and correct on its own."
      },
      {
        "sentence": "If we do not maintain the code, it will ___ to its buggy state.",
        "options": [
          "revert",
          "revert back",
          "reply",
          "revert up"
        ],
        "correctAnswer": "revert",
        "explanation": "Here, revert means return to past state."
      },
      {
        "sentence": "I will ___ with the details soon.",
        "options": [
          "get back",
          "revert back",
          "reply back",
          "revert back to you"
        ],
        "correctAnswer": "get back",
        "explanation": "'Get back' is highly natural and correct."
      },
      {
        "sentence": "They promised to ___ to our query today.",
        "options": [
          "revert",
          "revert back",
          "reply back",
          "respond back"
        ],
        "correctAnswer": "revert",
        "explanation": "Revert means respond/reply."
      }
    ],
    "dialogue": {
      "speakerA": "Did the client respond?",
      "speakerA_trans": "",
      "speakerB": "No, they haven't reverted yet.",
      "speakerB_trans": "",
      "context": "Waiting for email replies."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask a client to reply to your email as soon as possible?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Please reply to this email at your earliest convenience. / Please revert to us at your earliest convenience.",
      "explanation": "Revert or reply without 'back'."
    },
    "desiCorrection": {
      "incorrect": "I will revert back to you shortly.",
      "correct": "I will get back to you shortly. / I will reply to you shortly.",
      "why": "Never use 'revert back' or 'reply back'; 'revert' and 'reply' already contain the direction 'back'."
    }
  },
  {
    "dayIndex": 61,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Discuss About",
    "conceptExplanation": "The verb 'discuss' is a transitive verb that directly takes the topic as its object (e.g., 'discuss the plan'). Do not add the preposition 'about' after it.",
    "drills": [
      {
        "sentence": "We need to ___ the project budget tomorrow.",
        "options": [
          "discuss",
          "discuss about",
          "talk",
          "mention about"
        ],
        "correctAnswer": "discuss",
        "explanation": "'Discuss' directly takes the object 'project budget'."
      },
      {
        "sentence": "Let's ___ how we can improve sales.",
        "options": [
          "discuss",
          "discuss about",
          "talk about",
          "both 'discuss' and 'talk about'"
        ],
        "correctAnswer": "both 'discuss' and 'talk about'",
        "explanation": "'Discuss' takes no preposition; 'talk' requires 'about'."
      },
      {
        "sentence": "They spent an hour ___ the typo.",
        "options": [
          "discussing",
          "discussing about",
          "talking",
          "explaining about"
        ],
        "correctAnswer": "discussing",
        "explanation": "Discussing takes a direct object."
      },
      {
        "sentence": "Did you ___ the new contract with Rajiv?",
        "options": [
          "discuss",
          "discuss about",
          "talk",
          "mention about"
        ],
        "correctAnswer": "discuss",
        "explanation": "Discuss takes a direct object."
      }
    ],
    "dialogue": {
      "speakerA": "What did you do in the meeting?",
      "speakerA_trans": "",
      "speakerB": "We discussed the client feedback.",
      "speakerB_trans": "",
      "context": "Reporting meeting activities."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a teammate you want to talk about a design proposal?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I want to discuss the design proposal.",
      "explanation": "Discuss takes a direct object."
    },
    "desiCorrection": {
      "incorrect": "Let's discuss about this issue.",
      "correct": "Let's discuss this issue. / Let's talk about this issue.",
      "why": "Do not use 'about' after 'discuss'."
    }
  },
  {
    "dayIndex": 62,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Order For Food",
    "conceptExplanation": "The verb 'order' is transitive and directly takes the item ordered as its object (e.g., 'order food'). Do not use the preposition 'for' after 'order' when it is used as a verb.",
    "drills": [
      {
        "sentence": "I want to ___ a cup of tea.",
        "options": [
          "order",
          "order for",
          "request for",
          "ask for"
        ],
        "correctAnswer": "order",
        "explanation": "'Order' as a verb takes a direct object, no 'for' is needed."
      },
      {
        "sentence": "Our manager ___ lunch for the entire team.",
        "options": [
          "ordered",
          "ordered for",
          "requested for",
          "placed an order for"
        ],
        "correctAnswer": "ordered",
        "explanation": "Verb 'ordered' takes a direct object."
      },
      {
        "sentence": "We placed an ___ two pizzas.",
        "options": [
          "order for",
          "order",
          "ordered for",
          "ordered"
        ],
        "correctAnswer": "order for",
        "explanation": "When 'order' is a noun, 'order for' is grammatically correct."
      },
      {
        "sentence": "She ___ a taxi ten minutes ago.",
        "options": [
          "ordered",
          "ordered for",
          "called for",
          "requested for"
        ],
        "correctAnswer": "ordered",
        "explanation": "Verb takes direct object."
      }
    ],
    "dialogue": {
      "speakerA": "Are you hungry?",
      "speakerA_trans": "",
      "speakerB": "Yes, let's order some food.",
      "speakerB_trans": "",
      "context": "Arranging a meal break."
    },
    "thinkInEnglish": {
      "prompt": "How do you say you want to purchase a laptop online?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I am going to order a new laptop.",
      "explanation": "Order + direct object."
    },
    "desiCorrection": {
      "incorrect": "He ordered for a cup of coffee.",
      "correct": "He ordered a cup of coffee. / He placed an order for a cup of coffee.",
      "why": "Do not use the preposition 'for' after the verb 'order'."
    }
  },
  {
    "dayIndex": 63,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Pass Out",
    "conceptExplanation": "In standard English, 'to pass out' means to lose consciousness or faint. To express finishing high school or university, use the verb 'to graduate' or 'finish'.",
    "drills": [
      {
        "sentence": "Rajiv ___ from IIT Delhi in 2018.",
        "options": [
          "graduated",
          "passed out",
          "finished from",
          "completed from"
        ],
        "correctAnswer": "graduated",
        "explanation": "'Graduated' is the standard international term."
      },
      {
        "sentence": "It was so hot in the room that I almost ___.",
        "options": [
          "passed out",
          "graduated",
          "passed away",
          "passed through"
        ],
        "correctAnswer": "passed out",
        "explanation": "'Passed out' here correctly means fainted."
      },
      {
        "sentence": "She wants to look for a job after she ___.",
        "options": [
          "graduates",
          "passes out",
          "graduates from",
          "both 'graduates' and 'graduates from'"
        ],
        "correctAnswer": "both 'graduates' and 'graduates from'",
        "explanation": "Graduates/graduates from is correct."
      },
      {
        "sentence": "My sister ___ of college last month.",
        "options": [
          "graduated",
          "passed out",
          "finished",
          "left"
        ],
        "correctAnswer": "graduated",
        "explanation": "Graduated is the correct term."
      }
    ],
    "dialogue": {
      "speakerA": "Which year did you finish college?",
      "speakerA_trans": "",
      "speakerB": "I graduated in 2020.",
      "speakerB_trans": "",
      "context": "Discussing educational background."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a recruiter you finished your studies at Mumbai University?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I graduated from Mumbai University.",
      "explanation": "Use 'graduated from' for college completion."
    },
    "desiCorrection": {
      "incorrect": "I passed out from college in 2015.",
      "correct": "I graduated from college in 2015. / I finished college in 2015.",
      "why": "'Pass out' means faint. Use 'graduate' or 'finish' for completing academic studies."
    }
  },
  {
    "dayIndex": 64,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Cope Up",
    "conceptExplanation": "The correct English phrasal verb is 'to cope with' (meaning to handle or manage a difficult situation successfully). There is no such phrasal verb as 'cope up'.",
    "drills": [
      {
        "sentence": "It is difficult to ___ this workload.",
        "options": [
          "cope with",
          "cope up with",
          "cope up",
          "manage with"
        ],
        "correctAnswer": "cope with",
        "explanation": "'Cope with' is the correct and standard phrasal verb."
      },
      {
        "sentence": "Rajiv is struggling to ___ the pressure.",
        "options": [
          "cope with",
          "cope up",
          "cope up with",
          "handle with"
        ],
        "correctAnswer": "cope with",
        "explanation": "Struggling to cope with pressure."
      },
      {
        "sentence": "We must learn to ___ changes in technology.",
        "options": [
          "cope with",
          "cope up",
          "cope up with",
          "adapt with"
        ],
        "correctAnswer": "cope with",
        "explanation": "Cope with changes."
      },
      {
        "sentence": "How do you ___ stress during exams?",
        "options": [
          "cope with",
          "cope up",
          "cope up with",
          "deal"
        ],
        "correctAnswer": "cope with",
        "explanation": "Cope with stress."
      }
    ],
    "dialogue": {
      "speakerA": "Are you doing okay with the new project?",
      "speakerA_trans": "",
      "speakerB": "Yes, I am coping with the challenges.",
      "speakerB_trans": "",
      "context": "Supportive check-in by a manager."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a friend you are managing to handle the heat?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I am coping with the hot weather.",
      "explanation": "Cope with is correct."
    },
    "desiCorrection": {
      "incorrect": "She cannot cope up with the stress.",
      "correct": "She cannot cope with the stress.",
      "why": "Never use 'cope up' or 'cope up with'; the correct expression is 'cope with'."
    }
  },
  {
    "dayIndex": 65,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Mention About",
    "conceptExplanation": "The verb 'mention' is transitive and takes a direct object. Do not use 'about' after the verb 'mention'.",
    "drills": [
      {
        "sentence": "Rajiv ___ the delay during the call.",
        "options": [
          "mentioned",
          "mentioned about",
          "told about",
          "spoke about"
        ],
        "correctAnswer": "mentioned",
        "explanation": "Mention takes a direct object."
      },
      {
        "sentence": "Did she ___ her holiday plans?",
        "options": [
          "mention",
          "mention about",
          "talk about",
          "both 'mention' and 'talk about'"
        ],
        "correctAnswer": "both 'mention' and 'talk about'",
        "explanation": "'Mention' takes direct object; 'talk' takes 'about'."
      },
      {
        "sentence": "He ___ that he would be late.",
        "options": [
          "mentioned",
          "mentioned about",
          "said about",
          "told"
        ],
        "correctAnswer": "mentioned",
        "explanation": "Mentioned + that clause is correct."
      },
      {
        "sentence": "Don't ___ the cost to him yet.",
        "options": [
          "mention",
          "mention about",
          "say about",
          "tell about"
        ],
        "correctAnswer": "mention",
        "explanation": "Mention + direct object."
      }
    ],
    "dialogue": {
      "speakerA": "Did Rajiv talk to you?",
      "speakerA_trans": "",
      "speakerB": "Yes, he mentioned the upcoming meeting.",
      "speakerB_trans": "",
      "context": "Recalling a brief exchange."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a colleague that you raised the bug in the standup?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I mentioned the bug during the standup.",
      "explanation": "Mention + object."
    },
    "desiCorrection": {
      "incorrect": "She mentioned about her project yesterday.",
      "correct": "She mentioned her project yesterday. / She talked about her project yesterday.",
      "why": "Do not use 'about' after 'mention'."
    }
  },
  {
    "dayIndex": 66,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Describe About",
    "conceptExplanation": "The verb 'describe' is transitive and takes a direct object (e.g., 'describe the painting'). Do not add the preposition 'about' after the verb 'describe'.",
    "drills": [
      {
        "sentence": "Can you ___ the suspect?",
        "options": [
          "describe",
          "describe about",
          "explain about",
          "tell about"
        ],
        "correctAnswer": "describe",
        "explanation": "Describe takes a direct object (suspect)."
      },
      {
        "sentence": "The manual ___ how to set up the device.",
        "options": [
          "describes",
          "describes about",
          "explains about",
          "details about"
        ],
        "correctAnswer": "describes",
        "explanation": "Describes + clause."
      },
      {
        "sentence": "He ___ his trip in great detail.",
        "options": [
          "described",
          "described about",
          "talked about",
          "both 'described' and 'talked about'"
        ],
        "correctAnswer": "both 'described' and 'talked about'",
        "explanation": "'Described' takes direct object; 'talked' takes 'about'."
      },
      {
        "sentence": "Please ___ the incident to the manager.",
        "options": [
          "describe",
          "describe about",
          "explain about",
          "tell about"
        ],
        "correctAnswer": "describe",
        "explanation": "Describe takes a direct object."
      }
    ],
    "dialogue": {
      "speakerA": "What did she say in the email?",
      "speakerA_trans": "",
      "speakerB": "She described the issue in detail.",
      "speakerB_trans": "",
      "context": "Analyzing communication."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask a candidate to explain their past project experience?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Please describe your project experience.",
      "explanation": "Describe + object."
    },
    "desiCorrection": {
      "incorrect": "Let me describe about the software architecture.",
      "correct": "Let me describe the software architecture. / Let me talk about the software architecture.",
      "why": "Do not use 'about' after the verb 'describe'."
    }
  },
  {
    "dayIndex": 67,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Having for States",
    "conceptExplanation": "Do not use 'having' in the continuous form when it means possession (e.g., 'I have two brothers'). Use 'having' only for active experiences (eating, taking).",
    "drills": [
      {
        "sentence": "I ___ a headache today.",
        "options": [
          "have",
          "am having",
          "both 'have' and 'am having'",
          "has"
        ],
        "correctAnswer": "both 'have' and 'am having'",
        "explanation": "Headache can be static possession or active experience."
      },
      {
        "sentence": "Rajiv ___ two sisters.",
        "options": [
          "has",
          "is having",
          "have",
          "possesses"
        ],
        "correctAnswer": "has",
        "explanation": "Possession of family is a static state."
      },
      {
        "sentence": "They ___ a great time at the party.",
        "options": [
          "are having",
          "have",
          "has",
          "had"
        ],
        "correctAnswer": "are having",
        "explanation": "'Having a time' is an active experience."
      },
      {
        "sentence": "We ___ a holiday tomorrow.",
        "options": [
          "have",
          "are having",
          "has",
          "possesses"
        ],
        "correctAnswer": "have",
        "explanation": "Possession of a holiday takes simple present."
      }
    ],
    "dialogue": {
      "speakerA": "Do you have a laptop?",
      "speakerA_trans": "",
      "speakerB": "Yes, I have a MacBook.",
      "speakerB_trans": "",
      "context": "Checking hardware requirements."
    },
    "thinkInEnglish": {
      "prompt": "How do you state that you own a car?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I have a car. / I own a car.",
      "explanation": "Use have or own for static possession."
    },
    "desiCorrection": {
      "incorrect": "I am having a flat in Mumbai.",
      "correct": "I have a flat in Mumbai. / I own a flat in Mumbai.",
      "why": "Do not use 'having' for static ownership of assets."
    }
  },
  {
    "dayIndex": 68,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Like This Only",
    "conceptExplanation": "Using 'only' at the end of a sentence for emphasis (e.g., 'he does it like this only') is a direct translation of the Hindi 'hi' (ऐसा ही). In standard English, use 'this is how...' or 'just like this'.",
    "drills": [
      {
        "sentence": "This is ___ I code.",
        "options": [
          "how I code",
          "like this only how I code",
          "how I code only",
          "how only I code"
        ],
        "correctAnswer": "how I code",
        "explanation": "'This is how I code' is standard English."
      },
      {
        "sentence": "He always behaves ___.",
        "options": [
          "like this",
          "like this only",
          "just like this only",
          "only like this"
        ],
        "correctAnswer": "like this",
        "explanation": "'Like this' is correct."
      },
      {
        "sentence": "I want the design ___.",
        "options": [
          "just like this",
          "like this only",
          "exactly like this only",
          "only like this"
        ],
        "correctAnswer": "just like this",
        "explanation": "'Just like this' adds natural emphasis."
      },
      {
        "sentence": "She told me to do it ___.",
        "options": [
          "this way",
          "like this only",
          "this way only",
          "only this way"
        ],
        "correctAnswer": "this way",
        "explanation": "'This way' is correct."
      }
    ],
    "dialogue": {
      "speakerA": "Why did you format the file this way?",
      "speakerA_trans": "",
      "speakerB": "Because this is the standard style.",
      "speakerB_trans": "",
      "context": "Code review discussion."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a teammate that this is how you write functions?",
      "incorrectDesiLiteral": "",
      "correctNatural": "This is how I write functions. / I write functions like this.",
      "explanation": "Standard structures."
    },
    "desiCorrection": {
      "incorrect": "He speaks like this only.",
      "correct": "He speaks like this. / This is just how he speaks.",
      "why": "Avoid using 'only' at the end of a sentence to mean 'exactly' or 'hi'."
    }
  },
  {
    "dayIndex": 69,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Out of Station",
    "conceptExplanation": "The phrase 'out of station' is a common Indianism. In standard international English, use 'out of town' or 'away' to describe being out of the city.",
    "drills": [
      {
        "sentence": "I will be ___ next week on vacation.",
        "options": [
          "out of town",
          "out of station",
          "out from station",
          "out of city"
        ],
        "correctAnswer": "out of town",
        "explanation": "'Out of town' is the standard international phrase."
      },
      {
        "sentence": "Rajiv is ___ today; he returns on Monday.",
        "options": [
          "away",
          "out of station",
          "out of town",
          "both 'away' and 'out of town'"
        ],
        "correctAnswer": "both 'away' and 'out of town'",
        "explanation": "Both express being away from the city."
      },
      {
        "sentence": "Our manager is ___ on a business trip.",
        "options": [
          "out of town",
          "out of station",
          "out from town",
          "away of town"
        ],
        "correctAnswer": "out of town",
        "explanation": "Out of town is correct."
      },
      {
        "sentence": "I can't meet you because I am ___.",
        "options": [
          "away",
          "out of station",
          "out of town",
          "both 'away' and 'out of town'"
        ],
        "correctAnswer": "both 'away' and 'out of town'",
        "explanation": "Standard terms."
      }
    ],
    "dialogue": {
      "speakerA": "Is Rajiv in the office today?",
      "speakerA_trans": "",
      "speakerB": "No, he is out of town until Friday.",
      "speakerB_trans": "",
      "context": "Asking for a colleague."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a client you will be away from the city next Monday?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I will be out of town next Monday.",
      "explanation": "Out of town is standard."
    },
    "desiCorrection": {
      "incorrect": "I am out of station today.",
      "correct": "I am out of town today. / I am away today.",
      "why": "Use 'out of town' or 'away' instead of 'out of station'."
    }
  },
  {
    "dayIndex": 70,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Doing the Needful",
    "conceptExplanation": "The phrase 'do the needful' is an archaic British administrative phrase. Use 'do what is necessary' or 'take care of this' instead.",
    "drills": [
      {
        "sentence": "Please ___ regarding the bug report.",
        "options": [
          "take care of this",
          "do the needful",
          "do what is necessary",
          "both 'take care of this' and 'do what is necessary'"
        ],
        "correctAnswer": "both 'take care of this' and 'do what is necessary'",
        "explanation": "Both are modern, natural alternatives."
      },
      {
        "sentence": "He promised to ___ to fix the issue.",
        "options": [
          "do whatever is necessary",
          "do the needful",
          "do the necessary",
          "do needed"
        ],
        "correctAnswer": "do whatever is necessary",
        "explanation": "Natural phrasing."
      },
      {
        "sentence": "I will ___ and update you.",
        "options": [
          "take care of it",
          "do the needful",
          "do the necessary",
          "do needed"
        ],
        "correctAnswer": "take care of it",
        "explanation": "Active, responsible phrasing."
      },
      {
        "sentence": "Could you please ___ to process the refund?",
        "options": [
          "take the necessary steps",
          "do the needful",
          "do the necessary",
          "do needed"
        ],
        "correctAnswer": "take the necessary steps",
        "explanation": "Professional alternative."
      }
    ],
    "dialogue": {
      "speakerA": "The client requested a refund.",
      "speakerA_trans": "",
      "speakerB": "Could you please take care of it?",
      "speakerB_trans": "",
      "context": "Handling customer requests."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask a colleague to take care of a server migration?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Could you please take care of the server migration?",
      "explanation": "Take care of is active and professional."
    },
    "desiCorrection": {
      "incorrect": "Please do the needful.",
      "correct": "Please do what is necessary. / Please take care of this.",
      "why": "Replace 'do the needful' with direct, modern action verbs."
    }
  },
  {
    "dayIndex": 71,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Years Back",
    "conceptExplanation": "In English, use 'ago' to indicate how far in the past something happened relative to the present. Avoid using 'back' in formal contexts.",
    "drills": [
      {
        "sentence": "I moved to Bangalore five ___.",
        "options": [
          "years ago",
          "years back",
          "years before",
          "years past"
        ],
        "correctAnswer": "years ago",
        "explanation": "'Ago' is the standard word for past time relative to the present."
      },
      {
        "sentence": "Rajiv left the company two ___.",
        "options": [
          "years ago",
          "years back",
          "years past",
          "years before"
        ],
        "correctAnswer": "years ago",
        "explanation": "Two years ago is correct."
      },
      {
        "sentence": "The project was launched months ___.",
        "options": [
          "ago",
          "back",
          "before",
          "past"
        ],
        "correctAnswer": "ago",
        "explanation": "Months ago is correct."
      },
      {
        "sentence": "We met in Delhi ten ___.",
        "options": [
          "years ago",
          "years back",
          "years before",
          "years past"
        ],
        "correctAnswer": "years ago",
        "explanation": "Ten years ago is correct."
      }
    ],
    "dialogue": {
      "speakerA": "When did you start learning guitar?",
      "speakerA_trans": "",
      "speakerB": "I started five years ago.",
      "speakerB_trans": "",
      "context": "Sharing hobbies."
    },
    "thinkInEnglish": {
      "prompt": "How do you say you visited London three years in the past?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I visited London three years ago.",
      "explanation": "Use ago."
    },
    "desiCorrection": {
      "incorrect": "I completed my college three years back.",
      "correct": "I completed my college three years ago.",
      "why": "Use 'ago' (not 'back') when referencing time elapsed from the present."
    }
  },
  {
    "dayIndex": 72,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Cousin Brother/Sister",
    "conceptExplanation": "In English, the word 'cousin' does not take gender modifiers like 'brother' or 'sister'. Simply use 'cousin'. Gender is understood from pronouns or context.",
    "drills": [
      {
        "sentence": "I am going to the wedding of my ___.",
        "options": [
          "cousin",
          "cousin brother",
          "cousin sister",
          "cousin-in-law"
        ],
        "correctAnswer": "cousin",
        "explanation": "'Cousin' is correct; gender additions are redundant."
      },
      {
        "sentence": "He lives in Delhi with his ___.",
        "options": [
          "cousin",
          "cousin brother",
          "brother cousin",
          "cousin sister"
        ],
        "correctAnswer": "cousin",
        "explanation": "Cousin is sufficient."
      },
      {
        "sentence": "My ___ is a doctor.",
        "options": [
          "cousin, who is a woman,",
          "cousin sister",
          "sister cousin",
          "cousin sister of mine"
        ],
        "correctAnswer": "cousin, who is a woman,",
        "explanation": "Use relative clause if specifying gender is essential."
      },
      {
        "sentence": "I have three ___.",
        "options": [
          "cousins",
          "cousin brothers",
          "cousin sisters",
          "cousin brothers and sisters"
        ],
        "correctAnswer": "cousins",
        "explanation": "Plural is simply cousins."
      }
    ],
    "dialogue": {
      "speakerA": "Who is that in the photo?",
      "speakerA_trans": "",
      "speakerB": "That is my cousin, Rajiv.",
      "speakerB_trans": "",
      "context": "Looking at photos."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a coworker you are traveling with your uncle's son?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I am traveling with my cousin.",
      "explanation": "Cousin is enough."
    },
    "desiCorrection": {
      "incorrect": "She is my cousin sister.",
      "correct": "She is my cousin.",
      "why": "Do not attach 'brother' or 'sister' to the word 'cousin'."
    }
  },
  {
    "dayIndex": 73,
    "theme": "Common Indianisms & Redundancies",
    "concept": "Return Back",
    "conceptExplanation": "The word 'return' means to go or come back. Adding 'back' is a redundancy. Use 'return' or 'go/come back' instead.",
    "drills": [
      {
        "sentence": "When will you ___ from Goa?",
        "options": [
          "return",
          "return back",
          "go back",
          "both 'return' and 'go back'"
        ],
        "correctAnswer": "both 'return' and 'go back'",
        "explanation": "'Return' or 'go/come back' are correct; 'return back' is redundant."
      },
      {
        "sentence": "Please ___ these books to the library.",
        "options": [
          "return",
          "return back",
          "give back",
          "both 'return' and 'give back'"
        ],
        "correctAnswer": "both 'return' and 'give back'",
        "explanation": "Both are correct."
      },
      {
        "sentence": "He ___ to his home village after retirement.",
        "options": [
          "returned",
          "returned back",
          "went back",
          "both 'returned' and 'went back'"
        ],
        "correctAnswer": "both 'returned' and 'went back'",
        "explanation": "Standard past usage."
      },
      {
        "sentence": "I will ___ the money tomorrow.",
        "options": [
          "return",
          "return back",
          "pay back",
          "both 'return' and 'pay back'"
        ],
        "correctAnswer": "both 'return' and 'pay back'",
        "explanation": "Standard payment structures."
      }
    ],
    "dialogue": {
      "speakerA": "Did you give the keys back?",
      "speakerA_trans": "",
      "speakerB": "Yes, I returned them to Rajiv.",
      "speakerB_trans": "",
      "context": "Checking keys."
    },
    "thinkInEnglish": {
      "prompt": "How do you say you came back to the office after lunch?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I returned to the office after lunch.",
      "explanation": "Return without back."
    },
    "desiCorrection": {
      "incorrect": "I will return back your laptop tomorrow.",
      "correct": "I will return your laptop tomorrow. / I will give your laptop back tomorrow.",
      "why": "Never use 'return back'; use 'return' or 'give/get back'."
    }
  },
  {
    "theme": "Common Indianisms & Redundancies",
    "concept": "Request you to",
    "conceptExplanation": "In formal English, request is followed by a direct object + to-infinitive, but it sounds much more natural to use 'ask' or 'would appreciate it if you could'.",
    "drills": [
      {
        "sentence": "I ___ send me the updated proposal.",
        "options": [
          "request that you",
          "request you to",
          "would request you to",
          "ask you to"
        ],
        "correctAnswer": "request that you",
        "explanation": "'Request that you' is much more professional than 'request you to'."
      },
      {
        "sentence": "We ___ verify your credentials.",
        "options": [
          "request you to",
          "ask you to",
          "would appreciate if you could",
          "both 'ask you to' and 'would appreciate if you could'"
        ],
        "correctAnswer": "both 'ask you to' and 'would appreciate if you could'",
        "explanation": "Both are polite and modern alternatives."
      },
      {
        "sentence": "Clients are ___ remain seated.",
        "options": [
          "requested to",
          "requested for",
          "requesting to",
          "requested that they"
        ],
        "correctAnswer": "requested to",
        "explanation": "Passive construction 'are requested to' is correct."
      },
      {
        "sentence": "I write to ___ your support in this matter.",
        "options": [
          "request",
          "request you to",
          "request for",
          "demand for"
        ],
        "correctAnswer": "request",
        "explanation": "Request takes a direct object."
      }
    ],
    "dialogue": {
      "speakerA": "Could you please send me the files?",
      "speakerA_trans": "क्या आप कृपया मुझे फाइलें भेज सकते हैं?",
      "speakerB": "Sure, I request you to wait for five minutes.",
      "speakerB_trans": "ज़रूर, मेरा आपसे अनुरोध है कि पांच मिनट इंतज़ार करें।",
      "context": "Customer support interaction."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask a client to sign a document politely in an email?",
      "incorrectDesiLiteral": "I request you to sign the document.",
      "correctNatural": "Could you please sign the document? / We would appreciate it if you could sign the document.",
      "explanation": "Could you please or We would appreciate it are standard polite formulas."
    },
    "desiCorrection": {
      "incorrect": "We request you to kindly attend the meeting.",
      "correct": "We request that you attend the meeting. / We invite you to attend the meeting.",
      "why": "Using 'request you to kindly' is overly formal and redundant. Use 'request that you' or 'invite you to'."
    },
    "dayIndex": 74
  },
  {
    "dayIndex": 75,
    "theme": "Softening & Professional English",
    "concept": "Indirect Questions",
    "conceptExplanation": "Use indirect questions to sound more polite and professional, especially when asking strangers or superiors for information. E.g., 'Could you tell me where...?' instead of 'Where is...?'",
    "drills": [
      {
        "sentence": "Which is more polite?",
        "options": [
          "Where is the conference room?",
          "Could you tell me where the conference room is?",
          "Where is conference room, please?",
          "Tell me where is the conference room."
        ],
        "correctAnswer": "Could you tell me where the conference room is?",
        "explanation": "Indirect questions use statement word order and polite opening formulas."
      },
      {
        "sentence": "Complete: 'I was wondering if you ___ help me.'",
        "options": [
          "can",
          "could",
          "would",
          "will"
        ],
        "correctAnswer": "could",
        "explanation": "'I was wondering if you could...' is a standard polite opening."
      },
      {
        "sentence": "Indirect: 'Do you know what time ___?'",
        "options": [
          "the train leaves",
          "does the train leave",
          "leaves the train",
          "did the train leave"
        ],
        "correctAnswer": "the train leaves",
        "explanation": "Indirect questions require statement word order rather than question order."
      },
      {
        "sentence": "Which is the most professional way to ask for someone's name?",
        "options": [
          "What is your name?",
          "May I ask who I am speaking with?",
          "Who are you?",
          "Your name, please?"
        ],
        "correctAnswer": "May I ask who I am speaking with?",
        "explanation": "Polite and formal indirect name request."
      }
    ],
    "dialogue": {
      "speakerA": "Excuse me, what time is the meeting?",
      "speakerA_trans": "",
      "speakerB": "Could you tell me what time the meeting starts, please?",
      "speakerB_trans": "",
      "context": "Polite query in the hallway."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask a customer service representative where the manager is?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Could you let me know if the manager is available?",
      "explanation": "Indirect question for assistance."
    },
    "desiCorrection": {
      "incorrect": "Tell me when you are free.",
      "correct": "I was wondering if you could let me know when you are free. / Could you tell me when you are available?",
      "why": "'Tell me...' is a direct command and can sound rude; use indirect phrasing to soften it."
    }
  },
  {
    "dayIndex": 76,
    "theme": "Softening & Professional English",
    "concept": "Hedging in Professional Communication",
    "conceptExplanation": "Hedging is the use of cautious, non-assertive language (e.g., 'it seems', 'appears', 'possibly') to avoid sounding overly dogmatic or aggressive.",
    "drills": [
      {
        "sentence": "Which statement uses hedging to sound polite?",
        "options": [
          "This design is bad.",
          "It seems that this design needs some adjustments.",
          "You made a bad design.",
          "This design has many errors."
        ],
        "correctAnswer": "It seems that this design needs some adjustments.",
        "explanation": "Hedging softens the criticism using 'It seems that'."
      },
      {
        "sentence": "Complete: 'There ___ to be a misunderstanding.'",
        "options": [
          "appears",
          "is",
          "must",
          "definitely is"
        ],
        "correctAnswer": "appears",
        "explanation": "'Appears to be' is a common hedge to describe a conflict gently."
      },
      {
        "sentence": "Which is more professional?",
        "options": [
          "The server crashed because of your code.",
          "The recent server issue might be related to the new code deployment.",
          "Your code crashed the server.",
          "The new code is buggy and crashed the server."
        ],
        "correctAnswer": "The recent server issue might be related to the new code deployment.",
        "explanation": "Uses 'might' and passive framing to hedge and avoid direct blame."
      },
      {
        "sentence": "The results ___ that our strategy is working.",
        "options": [
          "suggest",
          "prove",
          "definitely show",
          "confirm"
        ],
        "correctAnswer": "suggest",
        "explanation": "'Suggest' is a safe hedge compared to the absolute 'prove'."
      }
    ],
    "dialogue": {
      "speakerA": "Your report has errors.",
      "speakerA_trans": "",
      "speakerB": "It appears that there are a few discrepancies in the report.",
      "speakerB_trans": "",
      "context": "Providing constructive feedback to a direct report."
    },
    "thinkInEnglish": {
      "prompt": "How do you diplomatically suggest that a colleague's schedule is too ambitious?",
      "incorrectDesiLiteral": "",
      "correctNatural": "It seems that the proposed timeline might be slightly tight.",
      "explanation": "Uses 'It seems', 'might', and 'slightly' to hedge."
    },
    "desiCorrection": {
      "incorrect": "Your code is wrong.",
      "correct": "There appears to be a small issue with the code. / It seems we might need to adjust this logic.",
      "why": "Avoid blunt, accusatory declarations of error; hedge to maintain collaborative relationships."
    }
  },
  {
    "dayIndex": 77,
    "theme": "Softening & Professional English",
    "concept": "Polite Negation",
    "conceptExplanation": "Use softening phrases when saying 'no' or declining requests to remain professional and preserve relationships. E.g., 'I'm afraid I can't' instead of 'I won't/can't'.",
    "drills": [
      {
        "sentence": "Which is the most professional way to decline a meeting invite?",
        "options": [
          "I can't come, I'm busy.",
          "I'm afraid I won't be able to make it due to a prior commitment.",
          "I am not coming to the meeting.",
          "No, I am busy."
        ],
        "correctAnswer": "I'm afraid I won't be able to make it due to a prior commitment.",
        "explanation": "Uses softening ('I'm afraid') and a neutral explanation."
      },
      {
        "sentence": "Complete: 'Unfortunately, we ___ accept your offer at this time.'",
        "options": [
          "cannot",
          "are unable to",
          "won't",
          "refuse to"
        ],
        "correctAnswer": "are unable to",
        "explanation": "'Are unable to' is softer and more professional than 'cannot'."
      },
      {
        "sentence": "Which is the best way to say no to a discount request?",
        "options": [
          "We don't give discounts.",
          "Unfortunately, our prices are fixed.",
          "I'm afraid we are unable to offer discounts on this package.",
          "No discount is possible."
        ],
        "correctAnswer": "I'm afraid we are unable to offer discounts on this package.",
        "explanation": "Polite decline of business request."
      },
      {
        "sentence": "We apologize, but the item is ___.",
        "options": [
          "out of stock",
          "no longer available",
          "sold out",
          "all options are correct"
        ],
        "correctAnswer": "all options are correct",
        "explanation": "Standard professional phrasing."
      }
    ],
    "dialogue": {
      "speakerA": "Can you finish this by tonight?",
      "speakerA_trans": "",
      "speakerB": "I'm afraid that won't be possible. I can deliver it by tomorrow noon.",
      "speakerB_trans": "",
      "context": "Managing workload expectations with a manager."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a supplier you cannot accept their delivery today?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Unfortunately, we are unable to accept the delivery today.",
      "explanation": "Softened negation."
    },
    "desiCorrection": {
      "incorrect": "I can't help you with this.",
      "correct": "I'm afraid I won't be able to assist you with this at the moment.",
      "why": "Soften 'can't' with 'I'm afraid I won't be able to'."
    }
  },
  {
    "dayIndex": 78,
    "theme": "Softening & Professional English",
    "concept": "Diplomatic Passive Voice",
    "conceptExplanation": "Use the passive voice to describe errors or system issues without pointing fingers or blaming individuals. E.g., 'A mistake was made' instead of 'You made a mistake'.",
    "drills": [
      {
        "sentence": "Which is the most diplomatic statement?",
        "options": [
          "You forgot to backup the files.",
          "The files were not backed up.",
          "You made an error by not backing up.",
          "You should have backed up the files."
        ],
        "correctAnswer": "The files were not backed up.",
        "explanation": "Passive voice focuses on the state, avoiding direct blame."
      },
      {
        "sentence": "Complete: 'A mistake ___ in the invoice.'",
        "options": [
          "was made",
          "has been made",
          "was making",
          "both 'was made' and 'has been made'"
        ],
        "correctAnswer": "both 'was made' and 'has been made'",
        "explanation": "Focuses on the mistake, not the person who made it."
      },
      {
        "sentence": "Which is more professional?",
        "options": [
          "You did not send the email.",
          "It appears the email was not sent.",
          "You forgot to send the email.",
          "The email is not sent by you."
        ],
        "correctAnswer": "It appears the email was not sent.",
        "explanation": "Combines hedging and passive voice."
      },
      {
        "sentence": "The system ___ for maintenance during the holiday.",
        "options": [
          "will be shut down",
          "will shut down",
          "is shutting down",
          "shuts down"
        ],
        "correctAnswer": "will be shut down",
        "explanation": "Standard objective passive."
      }
    ],
    "dialogue": {
      "speakerA": "You broke the build.",
      "speakerA_trans": "",
      "speakerB": "It seems the build was broken after the recent merge.",
      "speakerB_trans": "",
      "context": "Discussing a build failure in a team chat."
    },
    "thinkInEnglish": {
      "prompt": "How do you report that a bug was introduced into the codebase without blaming the author?",
      "incorrectDesiLiteral": "",
      "correctNatural": "A bug was introduced in the latest release.",
      "explanation": "Passive voice avoids blaming the developer."
    },
    "desiCorrection": {
      "incorrect": "You delivered the project late.",
      "correct": "The project was delivered after the deadline.",
      "why": "Passive voice shifts focus from the person's failure to the event itself."
    }
  },
  {
    "dayIndex": 79,
    "theme": "Softening & Professional English",
    "concept": "Polite Requests with 'Would you mind'",
    "conceptExplanation": "Use 'Would you mind' followed by an -ing verb to make polite requests, or 'Would you mind if I...' followed by a past tense verb for permission.",
    "drills": [
      {
        "sentence": "Which is correct?",
        "options": [
          "Would you mind to help me?",
          "Would you mind helping me?",
          "Would you mind for helping me?",
          "Would you mind help me?"
        ],
        "correctAnswer": "Would you mind helping me?",
        "explanation": "'Would you mind' is followed by a gerund (-ing verb)."
      },
      {
        "sentence": "Complete: 'Would you mind if I ___ my seat?'",
        "options": [
          "changed",
          "change",
          "would change",
          "changing"
        ],
        "correctAnswer": "changed",
        "explanation": "'Would you mind if I...' requires the past tense subjunctive."
      },
      {
        "sentence": "Which is the most polite request to close a door?",
        "options": [
          "Close the door.",
          "Would you mind closing the door?",
          "Can you close the door?",
          "Please close the door."
        ],
        "correctAnswer": "Would you mind closing the door?",
        "explanation": "'Would you mind' is a very soft request form."
      },
      {
        "sentence": "Would you mind ___ this document?",
        "options": [
          "reviewing",
          "to review",
          "review",
          "for reviewing"
        ],
        "correctAnswer": "reviewing",
        "explanation": "Requires the gerund form."
      }
    ],
    "dialogue": {
      "speakerA": "Could you review this code?",
      "speakerA_trans": "",
      "speakerB": "Would you mind reviewing this code when you have a moment?",
      "speakerB_trans": "",
      "context": "Asking a busy colleague for help."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask a coworker if it's okay for you to turn down the AC?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Would you mind if I turned down the air conditioning?",
      "explanation": "Mind if I + past subjunctive."
    },
    "desiCorrection": {
      "incorrect": "Would you mind to send me the report?",
      "correct": "Would you mind sending me the report? / Could you please send me the report?",
      "why": "Never use a 'to + infinitive' after 'would you mind'; always use a gerund."
    }
  },
  {
    "dayIndex": 80,
    "theme": "Softening & Professional English",
    "concept": "I was wondering if you could",
    "conceptExplanation": "This phrase is a powerful, polite way to initiate requests in emails or speech, as it presents the request as a gentle thought rather than a demand.",
    "drills": [
      {
        "sentence": "Which is the most polite opening for a request?",
        "options": [
          "Send me the slides.",
          "I was wondering if you could send me the slides.",
          "Can you send the slides?",
          "Please send me the slides."
        ],
        "correctAnswer": "I was wondering if you could send me the slides.",
        "explanation": "Presents the request gently."
      },
      {
        "sentence": "Complete: 'I was wondering if you ___ free for a call tomorrow.'",
        "options": [
          "are",
          "were",
          "would be",
          "will be"
        ],
        "correctAnswer": "were",
        "explanation": "The past tense 'were' is used to soften the request further."
      },
      {
        "sentence": "Which is more professional?",
        "options": [
          "I want a meeting with you.",
          "I was wondering if you could spare ten minutes for a brief meeting.",
          "Meeting me tomorrow at 3.",
          "Can we meet tomorrow?"
        ],
        "correctAnswer": "I was wondering if you could spare ten minutes for a brief meeting.",
        "explanation": "Polite request for time."
      },
      {
        "sentence": "I was wondering if you ___ review this draft.",
        "options": [
          "could",
          "can",
          "would",
          "will"
        ],
        "correctAnswer": "could",
        "explanation": "'Could' represents polite capability."
      }
    ],
    "dialogue": {
      "speakerA": "I need your help.",
      "speakerA_trans": "",
      "speakerB": "I was wondering if you could help me with this task.",
      "speakerB_trans": "",
      "context": "Asking a team member for assistance."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask a manager if you can schedule a 1-on-1 meeting next week?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I was wondering if you could spare some time for a 1-on-1 next week.",
      "explanation": "Polite opening formula."
    },
    "desiCorrection": {
      "incorrect": "I am wondering if you can help.",
      "correct": "I was wondering if you could help. / I wanted to ask if you could help.",
      "why": "The past continuous 'was wondering' and past modal 'could' sound much softer than 'am wondering'."
    }
  },
  {
    "dayIndex": 81,
    "theme": "Softening & Professional English",
    "concept": "Apologizing Professionally",
    "conceptExplanation": "When apologizing in business, avoid emotional language. Accept responsibility clearly, explain the resolution, and focus on the future.",
    "drills": [
      {
        "sentence": "Which is the most professional apology for a delay?",
        "options": [
          "Sorry for the late reply, I was busy.",
          "We apologize for the delay in response and appreciate your patience.",
          "I am sorry I didn't reply sooner.",
          "Sorry about that."
        ],
        "correctAnswer": "We apologize for the delay in response and appreciate your patience.",
        "explanation": "Takes responsibility and thanks client."
      },
      {
        "sentence": "Complete: 'Please accept our apologies for the ___ caused.'",
        "options": [
          "trouble",
          "inconvenience",
          "mistake",
          "annoyance"
        ],
        "correctAnswer": "inconvenience",
        "explanation": "'Inconvenience' is the standard professional term."
      },
      {
        "sentence": "Which is the best way to apologize for a server outage?",
        "options": [
          "Sorry the server went down.",
          "Please accept our sincere apologies for the service interruption. We have resolved the root issue.",
          "The server crashed, sorry.",
          "We are sorry for the crash."
        ],
        "correctAnswer": "Please accept our sincere apologies for the service interruption. We have resolved the root issue.",
        "explanation": "Takes responsibility and states resolution."
      },
      {
        "sentence": "We are sorry for any ___ this may have created.",
        "options": [
          "problems",
          "inconvenience",
          "frustrations",
          "delays"
        ],
        "correctAnswer": "inconvenience",
        "explanation": "Standard closing noun."
      }
    ],
    "dialogue": {
      "speakerA": "Why did you miss the deadline?",
      "speakerA_trans": "",
      "speakerB": "Please accept our apologies for the delay. We are putting in extra hours to deliver the project.",
      "speakerB_trans": "",
      "context": "Communicating a project delay."
    },
    "thinkInEnglish": {
      "prompt": "How do you apologize to a client for sending the wrong file?",
      "incorrectDesiLiteral": "",
      "correctNatural": "Please accept our apologies for the oversight. The correct file is attached below.",
      "explanation": "Oversight is a polite word for error."
    },
    "desiCorrection": {
      "incorrect": "Sorry for making a mistake in the code.",
      "correct": "Please accept my apologies for the error. I have submitted a fix to correct it.",
      "why": "Avoid casual 'sorry' in official emails; use 'please accept my apologies'."
    }
  },
  {
    "dayIndex": 82,
    "theme": "Softening & Professional English",
    "concept": "Polite Disagreement",
    "conceptExplanation": "To disagree politely, first validate the other person's point of view, then present your perspective using softening connectors like 'however' or 'on the other hand'.",
    "drills": [
      {
        "sentence": "Which is the most polite way to disagree?",
        "options": [
          "Your idea won't work.",
          "I see your point; however, we might run into budget constraints.",
          "That is wrong.",
          "I disagree with you completely."
        ],
        "correctAnswer": "I see your point; however, we might run into budget constraints.",
        "explanation": "Validates first, then cautions gently."
      },
      {
        "sentence": "Complete: 'I understand where you're coming from, ___ we have to consider the risk.'",
        "options": [
          "but",
          "however",
          "although",
          "and"
        ],
        "correctAnswer": "however",
        "explanation": "'However' is softer and more professional than 'but'."
      },
      {
        "sentence": "Which is the best way to suggest an alternative design?",
        "options": [
          "This design is bad. Let's do this instead.",
          "I appreciate this approach. Alternatively, we could explore this other option.",
          "Your design has flaws, look at my idea.",
          "No, this is not correct."
        ],
        "correctAnswer": "I appreciate this approach. Alternatively, we could explore this other option.",
        "explanation": "Appreciates work first."
      },
      {
        "sentence": "I see what you mean, but I ___ a different view.",
        "options": [
          "have",
          "take",
          "hold",
          "all options are correct"
        ],
        "correctAnswer": "all options are correct",
        "explanation": "Standard idioms for gentle disagreement."
      }
    ],
    "dialogue": {
      "speakerA": "That feature is useless.",
      "speakerA_trans": "",
      "speakerB": "I understand the value of this feature; however, it might not be a priority.",
      "speakerB_trans": "",
      "context": "Discussing product roadmap features."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a manager you disagree with a delivery timeline?",
      "incorrectDesiLiteral": "",
      "correctNatural": "I see your point about speed; however, a rushed timeline might compromise quality.",
      "explanation": "Appreciates speed, cautions on quality."
    },
    "desiCorrection": {
      "incorrect": "You are wrong about this data.",
      "correct": "I understand your interpretation; however, the data suggests a different conclusion.",
      "why": "Disagree with the interpretation, not the person, and use 'however'."
    }
  },
  {
    "concept": "Making Suggestions Politely",
    "conceptExplanation": "Use 'How about we...?', 'We could...', or 'Have you considered...?' to make suggestions, which sounds much less demanding than 'You must' or 'We should'.",
    "drills": [
      {
        "sentence": "___ reschedule the meeting to next week?",
        "options": [
          "How about we",
          "We should",
          "You must",
          "We have to"
        ],
        "correctAnswer": "How about we",
        "explanation": "Polite, open-ended suggestion style."
      },
      {
        "sentence": "We ___ try updating the drivers to see if that works.",
        "options": [
          "could",
          "must",
          "have to",
          "are forced to"
        ],
        "correctAnswer": "could",
        "explanation": "Suggests a possibility rather than a command."
      },
      {
        "sentence": "___ exploring a different color scheme?",
        "options": [
          "Have you considered",
          "You should try",
          "Why don't you",
          "We must do"
        ],
        "correctAnswer": "Have you considered",
        "explanation": "'Have you considered' + gerund is very polite and professional."
      },
      {
        "sentence": "___ to try running the diagnostics test?",
        "options": [
          "Would it help",
          "How about",
          "We should",
          "You ought"
        ],
        "correctAnswer": "Would it help",
        "explanation": "Focuses on usefulness of the suggestion."
      }
    ],
    "dialogue": {
      "speakerA": "The current design is too busy.",
      "speakerA_trans": "वर्तमान डिज़ाइन बहुत व्यस्त/अस्त-व्यस्त है।",
      "speakerB": "We could try reducing the spacing between cards.",
      "speakerB_trans": "हम कार्डों के बीच की दूरी कम करके देख सकते हैं।",
      "context": "UX discussion in a team meeting."
    },
    "thinkInEnglish": {
      "prompt": "How do you suggest changing a project deadline to a senior colleague?",
      "incorrectDesiLiteral": "We should change the project deadline.",
      "correctNatural": "Perhaps we could consider adjusting the project timeline?",
      "explanation": "Using 'perhaps', 'could', and framing it as a consideration softens the suggestion for senior members."
    },
    "desiCorrection": {
      "incorrect": "You must implement this feature.",
      "correct": "Have you considered implementing this feature? / We could look into implementing this feature.",
      "why": "Using 'must' with colleagues sounds like an command; use suggestions instead."
    },
    "dayIndex": 83,
    "theme": "Softening & Professional English"
  },
  {
    "concept": "Asking for Clarification",
    "conceptExplanation": "When you don't understand something, ask for clarification using polite indirect questions rather than blunt demands like 'Explain this' or 'What do you mean?'.",
    "drills": [
      {
        "sentence": "Could you ___ what you mean by 'optimization'?",
        "options": [
          "elaborate on",
          "explain about",
          "tell about",
          "clear up"
        ],
        "correctAnswer": "elaborate on",
        "explanation": "'Elaborate on' is a very professional way to ask for details."
      },
      {
        "sentence": "I want to make sure I understand. ___ you are suggesting a delay?",
        "options": [
          "So you mean",
          "Are you saying that",
          "What do you mean by",
          "Does it mean"
        ],
        "correctAnswer": "Are you saying that",
        "explanation": "Paraphrasing to check understanding politely."
      },
      {
        "sentence": "Could you please ___ that last point?",
        "options": [
          "clarify",
          "describe about",
          "explain about",
          "clear up"
        ],
        "correctAnswer": "clarify",
        "explanation": "'Clarify' is direct but polite when preceded by 'Could you please'."
      },
      {
        "sentence": "I'm not sure I follow. Would you mind ___ that step again?",
        "options": [
          "explaining",
          "to explain",
          "explain",
          "explanation"
        ],
        "correctAnswer": "explaining",
        "explanation": "Requires gerund after 'Would you mind'."
      }
    ],
    "dialogue": {
      "speakerA": "The system requirements have changed.",
      "speakerA_trans": "सिस्टम की आवश्यकताएं बदल गई हैं।",
      "speakerB": "Could you elaborate on what specific changes were made?",
      "speakerB_trans": "क्या आप विस्तार से बता सकते हैं कि कौन से विशिष्ट बदलाव किए गए हैं?",
      "context": "Seeking details on a project update."
    },
    "thinkInEnglish": {
      "prompt": "How do you ask a client to explain a vague feedback comment?",
      "incorrectDesiLiteral": "What do you mean by 'make it pop'?",
      "correctNatural": "Could you clarify what you mean by 'make it pop'? / Could you please elaborate on that point?",
      "explanation": "'Could you clarify...' or 'Could you elaborate...' are the standard polite ways to ask for details."
    },
    "desiCorrection": {
      "incorrect": "Explain this code again.",
      "correct": "Would you mind going over this code one more time? / Could you explain this part to me again?",
      "why": "Direct commands like 'Explain...' sound rude. Use indirect requests to be polite."
    },
    "dayIndex": 84,
    "theme": "Softening & Professional English"
  },
  {
    "concept": "Checking Understanding",
    "conceptExplanation": "Instead of asking 'Did you understand?' (which can sound patronizing or doubtful of the listener's intelligence), ask 'Does that make sense?' or 'Do you have any questions so far?'.",
    "drills": [
      {
        "sentence": "We need to finish the setup first. ___?",
        "options": [
          "Did you understand",
          "Does that make sense",
          "Is it clear to you",
          "Are you following me"
        ],
        "correctAnswer": "Does that make sense",
        "explanation": "Polite and checks if the explanation was clear, rather than questioning the listener's intelligence."
      },
      {
        "sentence": "That is the current status. ___?",
        "options": [
          "Do you have any questions so far",
          "Did you get it",
          "Understood",
          "Is it clear"
        ],
        "correctAnswer": "Do you have any questions so far",
        "explanation": "Open invitation for questions is very collaborative."
      },
      {
        "sentence": "I hope that ___ the process.",
        "options": [
          "clarifies",
          "explains about",
          "clears out",
          "clears up to"
        ],
        "correctAnswer": "clarifies",
        "explanation": "Hoping it clarifies is a polite closing after explaining."
      },
      {
        "sentence": "Please let me know if you need any ___.",
        "options": [
          "further clarification",
          "more explanation about",
          "more clarify",
          "further explains"
        ],
        "correctAnswer": "further clarification",
        "explanation": "Standard professional email check."
      }
    ],
    "dialogue": {
      "speakerA": "We will deploy the fix at midnight.",
      "speakerA_trans": "हम आधी रात को फिक्स तैनात करेंगे।",
      "speakerB": "That makes sense. I will be online to monitor.",
      "speakerB_trans": "यह सही लग रहा है। मैं निगरानी के लिए ऑनलाइन रहूँगा।",
      "context": "Confirming a deployment schedule."
    },
    "thinkInEnglish": {
      "prompt": "How do you check if your client understood your explanation of a delay?",
      "incorrectDesiLiteral": "Did you understand why we are late?",
      "correctNatural": "Does that explanation make sense? / Please let me know if you have any questions about this delay.",
      "explanation": "Focus on the clarity of your explanation rather than the client's ability to understand."
    },
    "desiCorrection": {
      "incorrect": "Are you clear?",
      "correct": "Does that make sense? / Is everything clear so far?",
      "why": "'Are you clear?' sounds like an interrogation. Use 'Is everything clear?' or 'Does that make sense?'."
    },
    "dayIndex": 85,
    "theme": "Softening & Professional English"
  },
  {
    "concept": "Highlighting Importance",
    "conceptExplanation": "To stress that something is critical, use adjectives like 'crucial', 'essential', or 'vital' with 'It is...' rather than screaming 'Very important!' or 'Do it now!'.",
    "drills": [
      {
        "sentence": "It is ___ that we secure the API keys.",
        "options": [
          "crucial",
          "essential",
          "vital",
          "all options are correct"
        ],
        "correctAnswer": "all options are correct",
        "explanation": "All three words represent highly formal and strong urgency in professional English."
      },
      {
        "sentence": "It is ___ to test the code before merging.",
        "options": [
          "essential",
          "importantly",
          "need",
          "vital to"
        ],
        "correctAnswer": "essential",
        "explanation": "'It is essential to + verb' is correct grammatical structure."
      },
      {
        "sentence": "Please note that database backups are of ___ importance.",
        "options": [
          "vital",
          "crucial",
          "essential",
          "high"
        ],
        "correctAnswer": "vital",
        "explanation": "'Of vital importance' is a standard business collocation."
      },
      {
        "sentence": "It is ___ that everyone attends the client demo.",
        "options": [
          "imperative",
          "needful",
          "obligated",
          "vital to"
        ],
        "correctAnswer": "imperative",
        "explanation": "'Imperative' means absolutely required/critical."
      }
    ],
    "dialogue": {
      "speakerA": "Should I push this to production now?",
      "speakerA_trans": "क्या मैं इसे अभी प्रोडक्शन में पुश करूँ?",
      "speakerB": "No, it is crucial that we run the tests first.",
      "speakerB_trans": "नहीं, यह महत्वपूर्ण है कि हम पहले टेस्ट चलाएं।",
      "context": "Advising caution on deployment."
    },
    "thinkInEnglish": {
      "prompt": "How do you tell a teammate that signing off on a document is extremely urgent?",
      "incorrectDesiLiteral": "Signing this document is very, very important.",
      "correctNatural": "It is critical that you sign this document today.",
      "explanation": "'It is critical that you...' is powerful and professional."
    },
    "desiCorrection": {
      "incorrect": "This task is very much important.",
      "correct": "This task is of vital importance. / This task is highly critical.",
      "why": "Avoid 'very much important'; use 'vitally important' or 'critical' instead."
    },
    "dayIndex": 86,
    "theme": "Softening & Professional English"
  },
  {
    "concept": "Following Up in Emails",
    "conceptExplanation": "When following up on a pending request, use polite openings like 'Just checking in on...' or 'I wanted to follow up on...' rather than direct demands like 'Give update' or 'Why no reply?'.",
    "drills": [
      {
        "sentence": "I wanted to ___ the status of the design proposal.",
        "options": [
          "follow up on",
          "follow up about",
          "ask update of",
          "ask update for"
        ],
        "correctAnswer": "follow up on",
        "explanation": "'Follow up on' is the standard professional phrasal verb for status checks."
      },
      {
        "sentence": "Just ___ to see if you have reviewed the draft.",
        "options": [
          "checking in",
          "following up",
          "writing you",
          "both 'checking in' and 'following up'"
        ],
        "correctAnswer": "both 'checking in' and 'following up'",
        "explanation": "Both are polite and friendly follow-up openings."
      },
      {
        "sentence": "Could you please give me an update ___ the project?",
        "options": [
          "on",
          "about",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanation": "Update takes 'on'."
      },
      {
        "sentence": "I am writing to ___ my previous email.",
        "options": [
          "follow up on",
          "ask about",
          "revert to",
          "request update of"
        ],
        "correctAnswer": "follow up on",
        "explanation": "Formal follow up phrasing."
      }
    ],
    "dialogue": {
      "speakerA": "Did you get a reply from Rajiv?",
      "speakerA_trans": "क्या आपको राजीव से कोई जवाब मिला?",
      "speakerB": "No, I am writing to follow up on my request now.",
      "speakerB_trans": "नहीं, मैं अभी अपने अनुरोध पर फॉलो अप करने के लिए लिख रहा हूँ।",
      "context": "Tracking communication status."
    },
    "thinkInEnglish": {
      "prompt": "How do you politely check if a client has signed a contract in an email?",
      "incorrectDesiLiteral": "You signed the contract or not? Send update.",
      "correctNatural": "I wanted to follow up and see if you've had a chance to sign the contract.",
      "explanation": "Use 'I wanted to follow up and see if you've had a chance to...' for a soft, polite status check."
    },
    "desiCorrection": {
      "incorrect": "Give me update about the bug.",
      "correct": "Could you please provide an update on the bug? / Just following up on the bug status.",
      "why": "Direct commands like 'Give me...' sound demanding; use polite queries instead."
    },
    "dayIndex": 87,
    "theme": "Softening & Professional English"
  },
  {
    "concept": "Ending Emails Professionally",
    "conceptExplanation": "End professional emails with forward-looking statements like 'Looking forward to hearing from you' or 'Please let me know if you need anything else' followed by standard closing markers ('Best regards', 'Sincerely').",
    "drills": [
      {
        "sentence": "___ hearing from you soon.",
        "options": [
          "Looking forward to",
          "I look forward to",
          "both options are correct",
          "I am looking forward for"
        ],
        "correctAnswer": "both options are correct",
        "explanation": "Both 'Looking forward to' + gerund and 'I look forward to' + gerund are standard and correct."
      },
      {
        "sentence": "Please let me know if you ___.",
        "options": [
          "need any further assistance",
          "require anything else",
          "have any questions",
          "all options are correct"
        ],
        "correctAnswer": "all options are correct",
        "explanation": "All three are standard polite email closing offers."
      },
      {
        "sentence": "I look forward to ___ Rajiv tomorrow.",
        "options": [
          "meeting",
          "meet",
          "meeting with",
          "meet with"
        ],
        "correctAnswer": "meeting",
        "explanation": "'Look forward to' is followed by a gerund (-ing verb)."
      },
      {
        "sentence": "Which closing is best for a formal client email?",
        "options": [
          "Warm regards,",
          "Best regards,",
          "Yours sincerely,",
          "All options are correct"
        ],
        "correctAnswer": "All options are correct",
        "explanation": "All are highly professional and acceptable email closings."
      }
    ],
    "dialogue": {
      "speakerA": "How should I end this email to the director?",
      "speakerA_trans": "मुझे निदेशक को लिखे इस ईमेल को कैसे समाप्त करना चाहिए?",
      "speakerB": "Use 'Thank you for your time' followed by 'Best regards'.",
      "speakerB_trans": "'समय देने के लिए धन्यवाद' और फिर 'सादर' का प्रयोग करें।",
      "context": "Reviewing email draft."
    },
    "thinkInEnglish": {
      "prompt": "How do you end an email showing you are excited to work with a new client?",
      "incorrectDesiLiteral": "I am waiting to work with you.",
      "correctNatural": "I look forward to working with you.",
      "explanation": "'Look forward to working with...' is the professional standard for expressing positive anticipation."
    },
    "desiCorrection": {
      "incorrect": "I look forward to meet you.",
      "correct": "I look forward to meeting you.",
      "why": "'Look forward to' is a phrasal verb preposition combination that requires a gerund (-ing verb) after it, not the infinitive."
    },
    "dayIndex": 88,
    "theme": "Softening & Professional English"
  },
  {
    "concept": "Professional Apologies for Client Inconvenience",
    "conceptExplanation": "When apologizing for system downtimes, errors, or service delays, take organizational responsibility, state the correction, and avoid personal excuses like 'I was sick'.",
    "drills": [
      {
        "sentence": "We apologize for the service disruption. The issue ___.",
        "options": [
          "has been resolved",
          "is fixed by us",
          "was solved yesterday",
          "got fixed"
        ],
        "correctAnswer": "has been resolved",
        "explanation": "Passive present perfect 'has been resolved' is professional, objective, and reassuring."
      },
      {
        "sentence": "Please accept our apologies for any inconvenience ___.",
        "options": [
          "caused",
          "this may have caused",
          "both options are correct",
          "made"
        ],
        "correctAnswer": "both options are correct",
        "explanation": "Both are standard polite collocations for business apologies."
      },
      {
        "sentence": "We are taking steps to ensure this ___ happen again.",
        "options": [
          "does not",
          "will not",
          "cannot",
          "won't"
        ],
        "correctAnswer": "does not",
        "explanation": "'Ensure this does not...' is standard formal phrasing."
      },
      {
        "sentence": "We appreciate your ___ while we resolved the issue.",
        "options": [
          "patience",
          "understanding",
          "cooperation",
          "all options are correct"
        ],
        "correctAnswer": "all options are correct",
        "explanation": "Thanking clients for patience or understanding at the end of an apology is highly professional."
      }
    ],
    "dialogue": {
      "speakerA": "The website was down for three hours.",
      "speakerA_trans": "वेबसाइट तीन घंटे के लिए डाउन थी।",
      "speakerB": "We must apologize to the clients and assure them it is fixed.",
      "speakerB_trans": "हमें ग्राहकों से माफ़ी मांगनी चाहिए और उन्हें आश्वस्त करना चाहिए कि यह ठीक हो गया है।",
      "context": "Incident management debrief."
    },
    "thinkInEnglish": {
      "prompt": "How do you write a professional apology email for a late shipment?",
      "incorrectDesiLiteral": "Sorry we are late. Courier guy did mistake.",
      "correctNatural": "We apologize for the delay in shipment. We are working to resolve this and appreciate your patience.",
      "explanation": "Focus on the solution and thank the customer, avoiding finger-pointing."
    },
    "desiCorrection": {
      "incorrect": "Extremely sorry for the mistake. It was my mistake only.",
      "correct": "Please accept my apologies for the oversight. I have updated the details to correct it.",
      "why": "Avoid overly emotional 'extremely sorry'; state it as an 'oversight' and focus on the action taken to fix it."
    },
    "dayIndex": 89,
    "theme": "Softening & Professional English"
  }
];
