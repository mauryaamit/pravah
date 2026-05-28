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
