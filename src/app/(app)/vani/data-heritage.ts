// src/app/(app)/vani/data-heritage.ts
// Comprehensive Indian Knowledge & Language Models & Datasets for Vani Room
// Covering: Ramayan (Complete Chaupai), Bhagavad Gita (Sequential Journey),
// Mahabharat, Upanishads, Vedas (4 daily selections), Puranas,
// Bharatiya Bhasha (Sanskrit, Awadhi, Regional), and Hindi Vyakaran.

// ─────────────── 1. RAMAYANA (COMPLETE CHAUPAI) ───────────────
export interface RamayanChaupaiEntry {
  id: string;
  globalSequenceNumber: number;
  kand: 'बालकाण्ड' | 'अयोध्याकाण्ड' | 'अरण्यकाण्ड' | 'किष्किन्धाकाण्ड' | 'सुन्दरकाण्ड' | 'लंकाकाण्ड' | 'उत्तरकाण्ड';
  kandEnglish: string;
  dohaNumber?: string;
  chaupaiLines: string[]; // Complete multi-line chaupai unit
  dohaLine?: string; // Optional accompanying concluding doha
  transliteration: string[];
  context: string; // The exact narrative setting in the epic
  charactersInvolved: string[];
  hindiMeaning: string;
  englishMeaning: string;
  spiritualSignificance: string; // Why this passage matters
  keyVocabulary: { word: string; meaning: string }[];
}

export const RAMAYAN_CHAUPAIS: RamayanChaupaiEntry[] = [
  {
    id: 'ram-bal-001',
    globalSequenceNumber: 1,
    kand: 'बालकाण्ड',
    kandEnglish: 'Bala Kanda',
    dohaNumber: 'दुआ 1 (मंगलाचरण)',
    chaupaiLines: [
      'वर्णानामर्थसंघानां रसानां छन्दसामपि।',
      'मङ्गलानां च कर्त्तारौ वन्दे वाणीविनायकौ॥',
      'भवानीशङ्करौ वन्दे श्रद्धाविश्वासरूपिणौ।',
      'याभ्यां विना न पश्यन्ति सिद्धाः स्वान्तःस्थमीश्वरम्॥'
    ],
    dohaLine: 'बंदउँ गुरु पद पदुम परागा। सुरुचि सुबास सरस अनुरागा॥',
    transliteration: [
      'Varṇānām artha-saṅghānāṁ rasānāṁ chandasām api |',
      'Maṅgalānāṁ ca kartārau vande vāṇī-vināyakau ||',
      'Bhavānī-śaṅkarau vande śraddhā-viśvāsa-rūpiṇau |',
      'Yābhyāṁ vinā na paśyanti siddhāḥ svāntaḥ-stham īśvaram ||'
    ],
    context: 'The opening invocatory verses (Mangalacharan) of Sri Ramcharitmanas, where Goswami Tulsidas bows before Goddess Saraswati, Lord Ganesha, and the divine embodiment of Faith and Trust (Bhavani and Shankara).',
    charactersInvolved: ['Tulsidas', 'Saraswati (Vani)', 'Ganesha (Vinayaka)', 'Parvati (Bhavani)', 'Shiva (Shankara)'],
    hindiMeaning: 'अक्षरों, अर्थ-समूहों, रसों, छन्दों और मंगलों को रचने वाली वाणी (सरस्वती) और विनायक (गणेश) की मैं वन्दना करता हूँ। श्रद्धा और विश्वास के स्वरूप पार्वती और शंकर की मैं वन्दना करता हूँ, जिनके बिना सिद्धजन अपने अंतःकरण में स्थित ईश्वर को भी नहीं देख सकते।',
    englishMeaning: 'I bow before Saraswati (the goddess of speech) and Ganesha (the remover of obstacles), who are the originators of letters, meanings, poetic rasas, meters, and auspiciousness. I bow before Goddess Bhavani and Lord Shiva, the embodiments of reverence and unwavering faith, without whom even enlightened sages cannot perceive the Divine dwelling within their own hearts.',
    spiritualSignificance: 'Tulsidas establishes that spiritual wisdom cannot be attained through dry intellect alone; it requires both Shraddha (reverent humility) and Vishvasa (unshakeable trust in the truth).',
    keyVocabulary: [
      { word: 'वाणीविनायकौ (Vani-Vinayakau)', meaning: 'Goddess Saraswati and Lord Ganesha' },
      { word: 'श्रद्धाविश्वासरूपिणौ (Shraddha-Vishvasa-Rupinau)', meaning: 'The embodiment of faith and absolute trust' },
      { word: 'स्वान्तःस्थम् (Svantaḥ-stham)', meaning: 'Dwelling within one\'s own inner heart/consciousness' }
    ]
  },
  {
    id: 'ram-kishkindha-001',
    globalSequenceNumber: 2,
    kand: 'किष्किन्धाकाण्ड',
    kandEnglish: 'Kishkindha Kanda',
    dohaNumber: 'चौपाई 14',
    chaupaiLines: [
      'जल थल नभ गति तास रही। जाकि लीला अद्भुत सही॥',
      'कह कपि सब सुनु रघुराई। सकल सृष्टि यहि बिधि उपाई॥',
      'प्रभु के बचन प्रीति मन मानी। बोले बचन बिहंसि धनुपानी॥',
      'सकल मनोरथ होइहिं पूरे। राम कृपां संसय सब सूरे॥'
    ],
    dohaLine: 'उमा कहहुँ मैं अनुभव अपना। सत हरि भजनु जगत सब सपना॥',
    transliteration: [
      'Jala thala nabha gati tāsa rahī | Jāki līlā adbhuta sahī ||',
      'Kaha kapi saba sunu raghurāī | Sakala sṛṣṭi yahi bidhi upāī ||',
      'Prabhu ke bacana prīti mana mānī | Bole bacana bihaṁsi dhanupānī ||',
      'Sakala manoratha hoihiṁ pūre | Rāma kṛpāṁ saṁsaya saba sūre ||'
    ],
    context: 'Lord Rama and the Vanara army converse on the shores of the ocean in Kishkindha Kanda, reflecting on the omnipresent divine play (lila) that permeates water, earth, and sky.',
    charactersInvolved: ['Shri Rama', 'Sugriva', 'Hanuman', 'Lakshmana'],
    hindiMeaning: 'जल, पृथ्वी और आकाश में सर्वत्र जिनकी अबाध गति है, और जिनकी लीला वास्तव में अत्यंत अद्भुत और सत्य है। वानर सेनापति कहते हैं—हे रघुकुल शिरोमणि! आपकी ही शक्ति से इस सम्पूर्ण सृष्टि का विस्तार हुआ है। प्रभु के मधुर वचन सुनकर सब आनंदित हुए। श्री राम की कृपा से सारे संशय छिन्न-भिन्न हो जाते हैं और समस्त सद्-मनोरथ पूर्ण होते हैं।',
    englishMeaning: 'Whose divine movement is unhindered in water, earth, and sky, and whose cosmic play is truly wondrous and eternal. The Vanara leaders proclaim: "O Lord of the Raghus, this entire universe was brought forth by Your divine will." Hearing the gracious words of the Lord, all doubts are dispelled, and all righteous aspirations are fulfilled by divine grace.',
    spiritualSignificance: 'This passage emphasizes the immanence of the Divine: God is not an abstract entity beyond the clouds, but the living essence pulsating through every atom of water, earth, and sky.',
    keyVocabulary: [
      { word: 'जल थल नभ (Jala-Thala-Nabha)', meaning: 'Water, Earth, and Sky (the cosmos)' },
      { word: 'लीला (Lila)', meaning: 'Cosmic divine play/manifestation' },
      { word: 'संसय सब सूरे (Sansay Saba Soore)', meaning: 'All doubts and confusions are shattered' }
    ]
  },
  {
    id: 'ram-sunder-001',
    globalSequenceNumber: 3,
    kand: 'सुन्दरकाण्ड',
    kandEnglish: 'Sundara Kanda',
    dohaNumber: 'चौपाई 3',
    chaupaiLines: [
      'जामवंत के बचन सुहाए। सुनि हनुमंत हृदय अति भाए॥',
      'तब लगि मोहि परिखेहु तुम्ह भाई। सहि दुख कंद मूल फल खाई॥',
      'जब लगि आवौं सीतहि देखी। होइहि काजु मोहि हरष बिसेषी॥',
      'यह कहि नाइ सबन्हि कहुँ माथा। चलेउ हरषि हियँ धरि रघुनाथा॥'
    ],
    dohaLine: 'सिंधु तीर एक भूधर सुंदर। कौतुक कूदि चढ़ेउ ता ऊपर॥',
    transliteration: [
      'Jāmavanta ke bacana suhāe | Suni hanumanta hṛdaya ati bhāe ||',
      'Taba lagi mohi parikhehu tumha bhāī | Sahi dukha kanda mūla phala khāī ||',
      'Jaba lagi āvauṁ sītahi dekhī | Hoihi kāju mohi haraṣa biseṣī ||',
      'Yaha kahi nāi sabanhi kahuṁ māthā | Caleu haraṣi hiyaom dhari raghunāthā ||'
    ],
    context: 'In Sundara Kanda, after Jambavan awakens Hanuman to his boundless inner potential, Hanuman prepares for his historic leap across the ocean to find Sita in Lanka.',
    charactersInvolved: ['Hanuman', 'Jambavan', 'Angada', 'Vanaras'],
    hindiMeaning: 'जाम्बवान के सुंदर वचनों को सुनकर हनुमान जी का हृदय अत्यंत हर्षित हुआ। उन्होंने कहा—हे भाइयो! जब तक मैं सीता जी को देखकर वापस न लौट आऊँ, तब तक आप सब कन्द-मूल-फल खाकर मेरा इंतज़ार करें। कार्य अवश्य सिद्ध होगा, मेरे मन में बड़ा उत्साह है। यह कहकर सबको मस्तक नवाकर, हृदय में श्री रघुनाथ जी को धारण कर हनुमान जी हर्षपूर्वक चल पड़े।',
    englishMeaning: 'Hearing the inspiring words of Jambavan, Hanuman\'s heart was filled with boundless joy. He said: "O brothers, await my return patiently here. I shall leap across the ocean, behold Mother Sita, and return victorious." Bowing before the elders with deep humility and anchoring Lord Rama in his heart, Hanuman embarked upon his epic leap.',
    spiritualSignificance: 'Courage is born not from ego, but from selfless surrender and the awakening of dormant inner potential in the service of a higher, noble cause.',
    keyVocabulary: [
      { word: 'सुहाए (Suhae)', meaning: 'Pleasing, auspicious, inspiring' },
      { word: 'परिखेहु (Parikhehu)', meaning: 'Wait/watch for my return' },
      { word: 'हियँ धरि (Hiyam Dhari)', meaning: 'Holding firmly within the heart' }
    ]
  },
  {
    id: 'ram-ayodhya-001',
    globalSequenceNumber: 4,
    kand: 'अयोध्याकाण्ड',
    kandEnglish: 'Ayodhya Kanda',
    dohaNumber: 'चौपाई 1',
    chaupaiLines: [
      'सुनु मुनि तोहि कहउँ सहभाऊ। भजहिं जे मोहि तजि सकल छलाऊ॥',
      'कह रघुपति सुनु भामिनि बाता। मानउँ एक भगति कर नाता॥'
    ],
    dohaLine: 'जाति पाँति कुल धर्म बड़ाई। धन बल परिजन गुन चतुराई॥',
    transliteration: [
      'Sunu muni tohi kahauṁ sahabhāū | Bhajahiṁ je mohi taji sakala chalāū ||',
      'Kaha raghupati sunu bhāmini bātā | Mānauṁ eka bhagati kara nātā ||'
    ],
    context: 'Lord Rama speaking to Shabari, explaining the path of devotion.',
    charactersInvolved: ['Shri Rama', 'Shabari'],
    hindiMeaning: 'हे मुनि, सुनो मैं स्वभाव से कहता हूँ, जो छल छोड़कर मेरा भजन करते हैं, वे मुझे प्रिय हैं। श्री राम कहते हैं, हे भामिनी सुनो, मैं केवल एक भक्ति का ही नाता मानता हूँ।',
    englishMeaning: 'Listen O Sage, I tell you my true nature: those who worship me leaving all deceit are dear to me. Lord Rama says, O noble lady, I recognize only the relationship of devotion.',
    spiritualSignificance: 'Devotion supersedes all social constructs of caste, creed, or wealth.',
    keyVocabulary: [
      { word: 'भगति (Bhagati)', meaning: 'Devotion' },
      { word: 'छलाऊ (Chalaoo)', meaning: 'Deceit' }
    ]
  },
  {
    id: 'ram-ayodhya-002',
    globalSequenceNumber: 5,
    kand: 'अयोध्याकाण्ड',
    kandEnglish: 'Ayodhya Kanda',
    dohaNumber: 'चौपाई 2',
    chaupaiLines: [
      'तात मातु गुर सखा गोसाईं। सब सन मोरे प्रान की नाईं॥'
    ],
    dohaLine: 'भरत प्रान प्रिय पावहिं राजू। बिधि सब बिधि मोहि सनमुख आजू॥',
    transliteration: [
      'Tāta mātu gura sakhā gosāīṁ | Saba sana more prāna kī nāīṁ ||'
    ],
    context: 'Rama expressing his love for Bharat.',
    charactersInvolved: ['Shri Rama', 'Lakshmana'],
    hindiMeaning: 'पिता, माता, गुरु, मित्र और स्वामी, सभी मेरे प्राणों के समान हैं।',
    englishMeaning: 'Father, mother, guru, friend, and master, all are as dear to me as my own life.',
    spiritualSignificance: 'True dharma lies in selfless love and respect for elders and loved ones.',
    keyVocabulary: [
      { word: 'प्रान की नाईं (Pran ki naain)', meaning: 'Like my own life' }
    ]
  },
  {
    id: 'ram-aranya-001',
    globalSequenceNumber: 6,
    kand: 'अरण्यकाण्ड',
    kandEnglish: 'Aranya Kanda',
    dohaNumber: 'चौपाई 1',
    chaupaiLines: [
      'नवधा भगति कहउँ तोहि पाहीं। सावधान सुनु धरु मन माहीं॥',
      'प्रथम भगति संतन कर संगा। दूसरि रति मम कथा प्रसंगा॥'
    ],
    dohaLine: 'गुर पद पंकज सेवा तीसरि भगति अमान। चउथि भगति मम गुन गन करइ कपट तजि गान॥',
    transliteration: [
      'Navadhā bhagati kahauṁ tohi pāhīṁ | Sāvadhāna sunu dharu mana māhīṁ ||',
      'Prathama bhagati santana kara saṅgā | Dūsari rati mama kathā prasaṅgā ||'
    ],
    context: 'Lord Rama explaining the nine forms of devotion (Navadha Bhakti) to Shabari.',
    charactersInvolved: ['Shri Rama', 'Shabari'],
    hindiMeaning: 'मैं तुमसे नवधा (नौ प्रकार की) भक्ति कहता हूँ, सावधान होकर सुनो और मन में धारण करो। पहली भक्ति संतों का संग है, और दूसरी मेरी कथाओं में प्रेम है।',
    englishMeaning: 'I shall explain to you the ninefold devotion. Listen carefully and hold it in your mind. The first devotion is the company of saints, and the second is deep love for my stories.',
    spiritualSignificance: 'Provides a structured path to realizing the divine through simple, progressive steps of devotion.',
    keyVocabulary: [
      { word: 'नवधा (Navadha)', meaning: 'Ninefold' },
      { word: 'संतन कर संगा (Santana kara sanga)', meaning: 'Company of the holy (Satsang)' }
    ]
  },
  {
    id: 'ram-sunder-002',
    globalSequenceNumber: 7,
    kand: 'सुन्दरकाण्ड',
    kandEnglish: 'Sundara Kanda',
    dohaNumber: 'चौपाई 4',
    chaupaiLines: [
      'प्रबिसि नगर कीजै सब काजा। हृदयँ राखि कोसलपुर राजा॥',
      'गरल सुधा रिपु करहिं मिताई। गोपद सिंधु अनल सितलाई॥'
    ],
    dohaLine: 'गरुड़ सुमेरु रेनु सम ताही। राम कृपा करि चितवा जाही॥',
    transliteration: [
      'Prabisi nagara kījai saba kājā | Hṛdayaom rākhi kosalapura rājā ||',
      'Garala sudhā ripu karahiṁ mitāī | Gopada siṅdhu anala sitalāī ||'
    ],
    context: 'Hanuman preparing to enter Lanka, invoking Rama\'s grace which makes the impossible possible.',
    charactersInvolved: ['Hanuman'],
    hindiMeaning: 'कोसलपुर के राजा (श्री राम) को हृदय में रखकर नगर में प्रवेश करो और सब काम करो। उनकी कृपा से विष अमृत हो जाता है, शत्रु मित्रता करने लगते हैं, समुद्र गाय के खुर के समान छोटा हो जाता है और अग्नि शीतल हो जाती है।',
    englishMeaning: 'Keeping the King of Kosala (Rama) in your heart, enter the city and accomplish all your tasks. By His grace, poison becomes nectar, enemies become friends, the ocean shrinks to a cow\'s hoof-print, and fire becomes cool.',
    spiritualSignificance: 'With pure devotion and divine remembrance, insurmountable worldly obstacles lose their power to harm or deter the seeker.',
    keyVocabulary: [
      { word: 'गरल सुधा (Garala sudha)', meaning: 'Poison becomes nectar' },
      { word: 'गोपद (Gopada)', meaning: 'Cow\'s hoof-print' }
    ]
  },
  {
    id: 'ram-lanka-001',
    globalSequenceNumber: 8,
    kand: 'लंकाकाण्ड',
    kandEnglish: 'Lanka Kanda',
    dohaNumber: 'चौपाई 1',
    chaupaiLines: [
      'रावनु रथी बिरथ रघुबीरा। देखि बिभीषन भयउ अधीरा॥',
      'अधिक प्रीति मन भा संदेहा। बंदि चरन कह सहित सनेहा॥'
    ],
    dohaLine: 'नाथ न रथ नहिं तन पद त्राना। केहि बिधि जितब बीर बलवाना॥',
    transliteration: [
      'Rāvanu rathī biratha raghubīrā | Dekhi bibhīṣana bhayau adhīrā ||',
      'Adhika prīti mana bhā saṁdehā | Baṅdi carana kaha sahita sanehā ||'
    ],
    context: 'Vibhishana expresses anxiety seeing Ravana heavily armed on a chariot while Rama stands barefoot on the battlefield. Rama then explains the "Chariot of Dharma" (Dharma Ratha).',
    charactersInvolved: ['Shri Rama', 'Vibhishana'],
    hindiMeaning: 'रावण को रथ पर और श्री रघुवीर को बिना रथ के देखकर विभीषण अधीर हो गए। अत्यधिक प्रेम के कारण उनके मन में संदेह हुआ, और वे प्रेम सहित चरण वंदना करके बोले।',
    englishMeaning: 'Seeing Ravana mounted on a chariot and Lord Rama without one, Vibhishana became anxious. Out of deep love, doubt arose in his mind, and bowing at the Lord\'s feet with affection, he spoke.',
    spiritualSignificance: 'This sets the stage for the revelation that true victory depends not on external material armor, but on the inner chariot of truth, courage, and righteousness.',
    keyVocabulary: [
      { word: 'बिरथ (Biratha)', meaning: 'Without a chariot' },
      { word: 'अधीरा (Adhira)', meaning: 'Anxious, restless' }
    ]
  }
];

// ─────────────── 2. BHAGAVAD GITA (SEQUENTIAL SHLOKA JOURNEY) ───────────────
export interface GitaShlokaEntry {
  id: string;
  globalSequenceNumber: number; // 1 to 700 (Sequential Journey)
  chapter: number;
  verse: number;
  chapterNameSanskrit: string;
  chapterNameHindi: string;
  chapterNameEnglish: string;
  shlokaSanskrit: string;
  transliterationIAST: string;
  wordByWordMeaning: { sanskrit: string; english: string }[];
  hindiTranslation: string;
  englishTranslation: string;
  philosophicalCommentary: string;
  modernPracticalApplication: string;
  keySanskritConcepts: { term: string; meaning: string }[];
}

export const GITA_SHLOKAS: GitaShlokaEntry[] = [
  {
    id: 'gita-01-001',
    globalSequenceNumber: 1,
    chapter: 1,
    verse: 1,
    chapterNameSanskrit: 'अर्जुनविषादयोग',
    chapterNameHindi: 'अर्जुन का विषाद योग',
    chapterNameEnglish: 'The Yoga of Arjuna\'s Dejection',
    shlokaSanskrit: 'धृतराष्ट्र उवाच\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥',
    transliterationIAST: 'dhṛtarāṣṭra uvāca\ndharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ |\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya ||',
    wordByWordMeaning: [
      { sanskrit: 'dhṛtarāṣṭraḥ uvāca', english: 'King Dhritarashtra said' },
      { sanskrit: 'dharma-kṣetre', english: 'in the field of righteousness/dharma' },
      { sanskrit: 'kuru-kṣetre', english: 'in the sacred land of Kurukshetra' },
      { sanskrit: 'samavetāḥ', english: 'assembled together' },
      { sanskrit: 'yuyutsavaḥ', english: 'desirous of fighting' },
      { sanskrit: 'māmakāḥ', english: 'my sons (the Kauravas)' },
      { sanskrit: 'pāṇḍavāḥ ca eva', english: 'and the sons of Pandu also' },
      { sanskrit: 'kim akurvata', english: 'what did they do?' },
      { sanskrit: 'sañjaya', english: 'O Sanjaya' }
    ],
    hindiTranslation: 'धृतराष्ट्र ने कहा: हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे पुत्रों (कौरवों) और पाण्डु के पुत्रों (पाण्डवों) ने वहाँ क्या किया?',
    englishTranslation: 'Dhritarashtra said: O Sanjaya, assembled on the sacred field of Kurukshetra with the desire to fight, what did my sons and the sons of Pandu do?',
    philosophicalCommentary: 'The Gita opens with the word "Dharma" and concludes with the word "Mama" (in the last verse), symbolizing that the entire dialogue is about "Mama Dharma" (my essential duty and true nature). Dhritarashtra\'s question reveals his deep psychological bias: he differentiates between "mamakah" (my sons) and "pandavah" (Pandu\'s sons), exhibiting the root of all human conflict—possessiveness and divisive attachment.',
    modernPracticalApplication: 'Kurukshetra is not merely an ancient battlefield in Haryana; it is the daily human mind. Every morning, we wake up at the crossroads between Dharma (righteous, long-term integrity) and Kurukshetra (the arena of selfish desires, impulses, and ego). How we make decisions when our biases collide with duty defines our character.',
    keySanskritConcepts: [
      { term: 'धर्मक्षेत्र (Dharmakshetra)', meaning: 'The arena of cosmic order, righteousness, and moral testing' },
      { term: 'मामकः (Mamaka)', meaning: 'Mine / possessive attachment that divides "us vs them"' }
    ]
  },
  {
    id: 'gita-02-014',
    globalSequenceNumber: 2,
    chapter: 2,
    verse: 14,
    chapterNameSanskrit: 'साङ्ख्ययोग',
    chapterNameHindi: 'सांख्य योग',
    chapterNameEnglish: 'The Yoga of Knowledge',
    shlokaSanskrit: 'मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥',
    transliterationIAST: 'mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ |\nāgamāpāyino ’nityās tāṁs titikṣasva bhārata ||',
    wordByWordMeaning: [
      { sanskrit: 'mātrā-sparśāḥ', english: 'sensory perception' },
      { sanskrit: 'tu', english: 'indeed' },
      { sanskrit: 'kaunteya', english: 'O son of Kunti' },
      { sanskrit: 'śīta-uṣṇa', english: 'winter and summer' },
      { sanskrit: 'sukha-duḥkha-dāḥ', english: 'giving happiness and distress' },
      { sanskrit: 'āgama-apāyinaḥ', english: 'appearing and disappearing' },
      { sanskrit: 'anityāḥ', english: 'impermanent' },
      { sanskrit: 'tān', english: 'them' },
      { sanskrit: 'titikṣasva', english: 'tolerate' },
      { sanskrit: 'bhārata', english: 'O descendant of Bharata' }
    ],
    hindiTranslation: 'हे कुन्तीपुत्र! इन्द्रियों और उनके विषयों का संयोग ही शीत-उष्ण और सुख-दुःख देने वाला है। ये उत्पत्ति और विनाशशील तथा अनित्य हैं, इसलिए हे भारत! उन्हें तुम सहन करो।',
    englishTranslation: 'O son of Kunti, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed.',
    philosophicalCommentary: 'All sensory experiences are transient. By identifying with the changing experiences of joy and sorrow, the mind becomes unstable. Spiritual resilience requires enduring these inevitable dualities.',
    modernPracticalApplication: 'In daily life, praise and criticism, profit and loss will come and go like seasons. Developing emotional endurance (titiksha) prevents you from being tossed around by external circumstances.',
    keySanskritConcepts: [
      { term: 'तितिक्षस्व (Titikshasva)', meaning: 'Endure, tolerate with a calm mind' }
    ]
  },
  {
    id: 'gita-02-019',
    globalSequenceNumber: 3,
    chapter: 2,
    verse: 19,
    chapterNameSanskrit: 'साङ्ख्ययोग',
    chapterNameHindi: 'सांख्य योग',
    chapterNameEnglish: 'The Yoga of Knowledge',
    shlokaSanskrit: 'य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्।\nउभौ तौ न विजानीतो नायं हन्ति न हन्यते॥',
    transliterationIAST: 'ya enaṁ vetti hantāraṁ yaś cainaṁ manyate hatam |\nubhau tau na vijānīto nāyaṁ hanti na hanyate ||',
    wordByWordMeaning: [
      { sanskrit: 'yaḥ', english: 'anyone who' },
      { sanskrit: 'enam', english: 'this (soul)' },
      { sanskrit: 'vetti', english: 'knows' },
      { sanskrit: 'hantāram', english: 'the killer' },
      { sanskrit: 'yaḥ', english: 'anyone who' },
      { sanskrit: 'ca', english: 'also' },
      { sanskrit: 'enam', english: 'this' },
      { sanskrit: 'manyate', english: 'thinks' },
      { sanskrit: 'hatam', english: 'killed' },
      { sanskrit: 'ubhau', english: 'both' },
      { sanskrit: 'tau', english: 'they' },
      { sanskrit: 'na', english: 'never' },
      { sanskrit: 'vijānītaḥ', english: 'know' },
      { sanskrit: 'na', english: 'never' },
      { sanskrit: 'ayam', english: 'this' },
      { sanskrit: 'hanti', english: 'kills' },
      { sanskrit: 'na', english: 'nor' },
      { sanskrit: 'hanyate', english: 'is killed' }
    ],
    hindiTranslation: 'जो इस आत्मा को मारने वाला समझता है तथा जो इसे मरा हुआ मानता है, वे दोनों ही नहीं जानते; क्योंकि यह आत्मा न तो किसी को मारता है और न ही किसी के द्वारा मारा जाता है।',
    englishTranslation: 'Neither he who thinks the living entity the slayer nor he who thinks it slain is in knowledge, for the self slays not nor is slain.',
    philosophicalCommentary: 'The soul (Atman) is fundamentally distinct from the physical body. It transcends the cycle of violence and death that characterizes material existence.',
    modernPracticalApplication: 'When we realize our core identity is immortal and untouched by the physical world, fear of death and existential anxiety evaporate.',
    keySanskritConcepts: [
      { term: 'हन्तारं (Hantaram)', meaning: 'Slayer' }
    ]
  },
  {
    id: 'gita-02-020',
    globalSequenceNumber: 4,
    chapter: 2,
    verse: 20,
    chapterNameSanskrit: 'साङ्ख्ययोग',
    chapterNameHindi: 'सांख्य योग',
    chapterNameEnglish: 'The Yoga of Knowledge',
    shlokaSanskrit: 'न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥',
    transliterationIAST: 'na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ |\najo nityaḥ śāśvato ’yaṁ purāṇo na hanyate hanyamāne śarīre ||',
    wordByWordMeaning: [
      { sanskrit: 'na', english: 'never' },
      { sanskrit: 'jāyate', english: 'takes birth' },
      { sanskrit: 'mriyate', english: 'dies' }
    ],
    hindiTranslation: 'यह आत्मा किसी काल में भी न तो जन्मता है और न मरता है; तथा न यह उत्पन्न होकर फिर होने वाला ही है; क्योंकि यह अजन्मा, नित्य, सनातन और पुरातन है; शरीर के मारे जाने पर भी यह नहीं मारा जाता।',
    englishTranslation: 'For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing and primeval. He is not slain when the body is slain.',
    philosophicalCommentary: 'This verse definitively establishes the eternal, unchanging nature of the Atman. It cannot be modified, created, or destroyed.',
    modernPracticalApplication: 'Grounding yourself in the understanding of an indestructible core helps weather life\'s most severe physical and emotional storms.',
    keySanskritConcepts: [
      { term: 'शाश्वतः (Shashvatah)', meaning: 'Eternal' }
    ]
  },
  {
    id: 'gita-02-047',
    globalSequenceNumber: 5,
    chapter: 2,
    verse: 47,
    chapterNameSanskrit: 'साङ्ख्ययोग',
    chapterNameHindi: 'सांख्य योग',
    chapterNameEnglish: 'The Yoga of Knowledge',
    shlokaSanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    transliterationIAST: 'karmaṇy evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi ||',
    wordByWordMeaning: [
      { sanskrit: 'karmaṇi eva', english: 'in prescribed action/duty only' },
      { sanskrit: 'adhikāraḥ te', english: 'your rightful domain / authority is' },
      { sanskrit: 'mā phaleṣu', english: 'never in the fruits/results' },
      { sanskrit: 'kadācana', english: 'at any time' },
      { sanskrit: 'mā karma-phala-hetuḥ bhūḥ', english: 'do not let the fruit of action be your motive' },
      { sanskrit: 'mā te saṅgaḥ astu', english: 'let not your attachment be' },
      { sanskrit: 'akarmaṇi', english: 'towards inaction or laziness' }
    ],
    hindiTranslation: 'तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। इसलिए तुम कर्मों के फल के हेतु (कारण) मत बनो, और तुम्हारी आसक्ति अकर्म (कर्म न करने/आलस्य) में भी न हो।',
    englishTranslation: 'You have a right only to perform your prescribed duty, but never to the fruits of action. Never let the fruits of action be your motive, nor should you ever be attached to inaction.',
    philosophicalCommentary: 'This is the crown jewel of Nishkama Karma Yoga. Krishna deconstructs the psychology of human anxiety: anxiety arises when our attention is split between the effort (which is in our control) and the outcome (which depends on countless external variables).',
    modernPracticalApplication: 'When preparing for a presentation, an exam, or building a startup, obsessing over whether you will be praised or rejected drains your cognitive bandwidth. Focus entirely on the craft and preparation in front of you. True mastery is outcome-independent excellence.',
    keySanskritConcepts: [
      { term: 'निष्काम कर्म (Nishkama Karma)', meaning: 'Selfless, focused action free from selfish clinging to fruits' }
    ]
  },
  {
    id: 'gita-02-048',
    globalSequenceNumber: 6,
    chapter: 2,
    verse: 48,
    chapterNameSanskrit: 'साङ्ख्ययोग',
    chapterNameHindi: 'सांख्य योग',
    chapterNameEnglish: 'The Yoga of Knowledge',
    shlokaSanskrit: 'योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥',
    transliterationIAST: 'yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya |\nsiddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate ||',
    wordByWordMeaning: [
      { sanskrit: 'yoga-sthaḥ', english: 'established in equanimity/yoga' },
      { sanskrit: 'kuru karmāṇi', english: 'perform your actions' },
      { sanskrit: 'saṅgam tyaktvā', english: 'renouncing attachment/clinging' },
      { sanskrit: 'dhanañjaya', english: 'O Arjuna (conqueror of wealth)' },
      { sanskrit: 'siddhi-asiddhyoḥ', english: 'in success and in failure' },
      { sanskrit: 'samaḥ bhūtvā', english: 'remaining perfectly poised and equal' },
      { sanskrit: 'samatvam yogaḥ ucyate', english: 'this equanimity of mind is called Yoga' }
    ],
    hindiTranslation: 'हे धनंजय! आसक्ति को त्यागकर तथा सिद्धि और असिद्धि (सफलता और विफलता) में समान भाव रखकर योग में स्थित होकर कर्म करो। यह चित्त की समता ही \'योग\' कहलाती है।',
    englishTranslation: 'Perform your duties steadfast in Yoga, O Dhananjaya, renouncing all attachment and remaining undisturbed by success or failure. Such equanimity of mind is truly called Yoga.',
    philosophicalCommentary: 'Krishna provides the definitive philosophical definition of Yoga in the Gita: "Samatvam Yoga Ucyate" (Equanimity is Yoga). Yoga is not merely bodily contortion or breath retention; it is the supreme psychological resilience to remain serene, dignified, and centered whether life brings triumph or defeat.',
    modernPracticalApplication: 'When markets crash, praise vanishes, or projects face setbacks, the untrained mind spirals into despair. The yogic practitioner acknowledges the outcome, recalibrates without emotional hysteria, and keeps moving forward with composure.',
    keySanskritConcepts: [
      { term: 'समत्वम् (Samatvam)', meaning: 'Mental poise, unshakeable calm, and psychological balance' },
      { term: 'योगस्थः (Yogastha)', meaning: 'Anchored firmly in inner equilibrium before taking action' }
    ]
  },
  {
    id: 'gita-02-055',
    globalSequenceNumber: 7,
    chapter: 2,
    verse: 55,
    chapterNameSanskrit: 'साङ्ख्ययोग',
    chapterNameHindi: 'सांख्य योग',
    chapterNameEnglish: 'The Yoga of Knowledge',
    shlokaSanskrit: 'श्रीभगवानुवाच\nप्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान्।\nआत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते॥',
    transliterationIAST: 'śrī-bhagavān uvāca\nprajahāti yadā kāmān sarvān pārtha mano-gatān |\nātmany evātmanā tuṣṭaḥ sthita-prajñas tadocyate ||',
    wordByWordMeaning: [
      { sanskrit: 'prajahāti', english: 'gives up' },
      { sanskrit: 'yadā', english: 'when' },
      { sanskrit: 'kāmān', english: 'desires for sense gratification' },
      { sanskrit: 'sarvān', english: 'all' },
      { sanskrit: 'pārtha', english: 'O son of Pritha' },
      { sanskrit: 'manaḥ-gatān', english: 'of mental concoction' },
      { sanskrit: 'ātmani', english: 'in the pure state of the soul' },
      { sanskrit: 'eva', english: 'certainly' },
      { sanskrit: 'ātmanā', english: 'by the purified mind' },
      { sanskrit: 'tuṣṭaḥ', english: 'satisfied' },
      { sanskrit: 'sthita-prajñaḥ', english: 'transcendentally situated' },
      { sanskrit: 'tadā', english: 'at that time' },
      { sanskrit: 'ucyate', english: 'is said' }
    ],
    hindiTranslation: 'श्री भगवान् ने कहा—हे पार्थ! जब मनुष्य मन में स्थित सम्पूर्ण कामनाओं को भलीभाँति त्याग देता है और आत्मा से आत्मा में ही सन्तुष्ट रहता है, तब वह स्थितप्रज्ञ कहा जाता है।',
    englishTranslation: 'The Supreme Personality of Godhead said: O Partha, when a man gives up all varieties of desire for sense gratification, which arise from mental concoction, and when his mind, thus purified, finds satisfaction in the self alone, then he is said to be in pure transcendental consciousness.',
    philosophicalCommentary: 'True joy is an inside job. A person of steady wisdom (sthita-prajna) does not depend on external objects for happiness, recognizing the self as the source of all fulfillment.',
    modernPracticalApplication: 'Stop chasing happiness through endless consumerism. Seek internal contentment; it makes you immune to external manipulation.',
    keySanskritConcepts: [
      { term: 'स्थितप्रज्ञ (Sthitaprajna)', meaning: 'One of steady wisdom' }
    ]
  },
  {
    id: 'gita-03-019',
    globalSequenceNumber: 8,
    chapter: 3,
    verse: 19,
    chapterNameSanskrit: 'कर्मयोग',
    chapterNameHindi: 'कर्म योग',
    chapterNameEnglish: 'Karma Yoga',
    shlokaSanskrit: 'तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥',
    transliterationIAST: 'tasmād asaktaḥ satataṁ kāryaṁ karma samācara |\nasakto hy ācaran karma param āpnoti pūruṣaḥ ||',
    wordByWordMeaning: [
      { sanskrit: 'tasmāt', english: 'therefore' },
      { sanskrit: 'asaktaḥ', english: 'without attachment' },
      { sanskrit: 'satatam', english: 'constantly' },
      { sanskrit: 'kāryam', english: 'as duty' },
      { sanskrit: 'karma', english: 'work' },
      { sanskrit: 'samācara', english: 'perform' },
      { sanskrit: 'asaktaḥ', english: 'unattached' },
      { sanskrit: 'hi', english: 'certainly' },
      { sanskrit: 'ācaran', english: 'performing' },
      { sanskrit: 'karma', english: 'work' },
      { sanskrit: 'param', english: 'the Supreme' },
      { sanskrit: 'āpnoti', english: 'achieves' },
      { sanskrit: 'pūruṣaḥ', english: 'a man' }
    ],
    hindiTranslation: 'इसलिए तू निरन्तर आसक्तिरहित होकर सदा कर्तव्यकर्म को भलीभाँति करता रह; क्योंकि आसक्तिरहित होकर कर्म करता हुआ मनुष्य परमात्मा को प्राप्त हो जाता है।',
    englishTranslation: 'Therefore, without being attached to the fruits of activities, one should act as a matter of duty, for by working without attachment one attains the Supreme.',
    philosophicalCommentary: 'Action without attachment leads to liberation. It is not action itself that binds, but the clinging to the results.',
    modernPracticalApplication: 'Engage fully in your professional and personal duties, but remain emotionally detached from the final success or failure. The effort purifies you.',
    keySanskritConcepts: [
      { term: 'असक्तः (Asaktah)', meaning: 'Without attachment' }
    ]
  },
  {
    id: 'gita-04-007',
    globalSequenceNumber: 9,
    chapter: 4,
    verse: 7,
    chapterNameSanskrit: 'ज्ञानकर्मसंन्यासयोग',
    chapterNameHindi: 'ज्ञान कर्म संन्यास योग',
    chapterNameEnglish: 'Transcendental Knowledge',
    shlokaSanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
    transliterationIAST: 'yadā yadā hi dharmasya glānir bhavati bhārata |\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||',
    wordByWordMeaning: [
      { sanskrit: 'yadā yadā', english: 'whenever and wherever' },
      { sanskrit: 'hi', english: 'certainly' },
      { sanskrit: 'dharmasya', english: 'of religion' },
      { sanskrit: 'glāniḥ', english: 'discrepancies' },
      { sanskrit: 'bhavati', english: 'manifested, becomes' },
      { sanskrit: 'bhārata', english: 'O descendant of Bharata' },
      { sanskrit: 'abhyutthānam', english: 'predominance' },
      { sanskrit: 'adharmasya', english: 'of irreligion' },
      { sanskrit: 'tadā', english: 'at that time' },
      { sanskrit: 'ātmānam', english: 'self' },
      { sanskrit: 'sṛjāmi', english: 'manifest' },
      { sanskrit: 'aham', english: 'I' }
    ],
    hindiTranslation: 'हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं अपने रूप को रचता हूँ अर्थात् साकार रूप से लोगों के सम्मुख प्रकट होता हूँ।',
    englishTranslation: 'Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself.',
    philosophicalCommentary: 'The Divine intervenes in cosmic history. Avatara means "one who descends." God enters the timeline to restore the balance of dharma.',
    modernPracticalApplication: 'Have faith that cosmic justice prevails. When chaos seems overwhelming, a correcting force invariably emerges.',
    keySanskritConcepts: [
      { term: 'ग्लानिः (Glanih)', meaning: 'Decline' },
      { term: 'सृजाम्यहम् (Srijamyaham)', meaning: 'I manifest Myself' }
    ]
  },
  {
    id: 'gita-04-008',
    globalSequenceNumber: 10,
    chapter: 4,
    verse: 8,
    chapterNameSanskrit: 'ज्ञानकर्मसंन्यासयोग',
    chapterNameHindi: 'ज्ञान कर्म संन्यास योग',
    chapterNameEnglish: 'Transcendental Knowledge',
    shlokaSanskrit: 'परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥',
    transliterationIAST: 'paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām |\ndharma-saṁsthāpanārthāya sambhavāmi yuge yuge ||',
    wordByWordMeaning: [
      { sanskrit: 'paritrāṇāya', english: 'for the deliverance' },
      { sanskrit: 'sādhūnām', english: 'of the devotees' },
      { sanskrit: 'vināśāya', english: 'for the annihilation' },
      { sanskrit: 'ca', english: 'and' },
      { sanskrit: 'duṣkṛtām', english: 'of the miscreants' },
      { sanskrit: 'dharma', english: 'principles of religion' },
      { sanskrit: 'saṁsthāpana-arthāya', english: 'to reestablish' },
      { sanskrit: 'sambhavāmi', english: 'I do appear' },
      { sanskrit: 'yuge yuge', english: 'millennium after millennium' }
    ],
    hindiTranslation: 'साधु पुरुषों का उद्धार करने के लिए, पाप कर्म करने वालों का विनाश करने के लिए और धर्म की भलीभाँति स्थापना करने के लिए मैं युग-युग में प्रकट होता हूँ।',
    englishTranslation: 'To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of religion, I Myself appear, millennium after millennium.',
    philosophicalCommentary: 'The purpose of the Avatar is threefold: protecting the good, destroying the wicked, and firmly establishing righteousness.',
    modernPracticalApplication: 'We must align ourselves with the \'Sadhu\' (good) forces in the world, knowing that ultimate spiritual law supports their protection and victory.',
    keySanskritConcepts: [
      { term: 'परित्राणाय (Paritranaya)', meaning: 'For the protection' },
      { term: 'युगे युगे (Yuge Yuge)', meaning: 'In every age' }
    ]
  },
  {
    id: 'gita-09-022',
    globalSequenceNumber: 11,
    chapter: 9,
    verse: 22,
    chapterNameSanskrit: 'राजविद्याराजगुह्ययोग',
    chapterNameHindi: 'राजविद्या राजगुह्य योग',
    chapterNameEnglish: 'The Most Confidential Knowledge',
    shlokaSanskrit: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥',
    transliterationIAST: 'ananyāś cintayanto māṁ ye janāḥ paryupāsate |\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham ||',
    wordByWordMeaning: [
      { sanskrit: 'ananyāḥ', english: 'having no other object' },
      { sanskrit: 'cintayantaḥ', english: 'concentrating' },
      { sanskrit: 'mām', english: 'on Me' },
      { sanskrit: 'ye', english: 'those who' },
      { sanskrit: 'janāḥ', english: 'persons' },
      { sanskrit: 'paryupāsate', english: 'properly worship' },
      { sanskrit: 'teṣām', english: 'of them' },
      { sanskrit: 'nitya', english: 'always' },
      { sanskrit: 'abhiyuktānām', english: 'fixed in devotion' },
      { sanskrit: 'yoga', english: 'requirements' },
      { sanskrit: 'kṣemam', english: 'protection' },
      { sanskrit: 'vahāmi', english: 'carry' },
      { sanskrit: 'aham', english: 'I' }
    ],
    hindiTranslation: 'जो अनन्य प्रेमी भक्तजन मुझ परमेश्वर को निरन्तर चिन्तन करते हुए निष्कामभाव से भजते हैं, उन नित्य-निरन्तर मेरा चिन्तन करने वाले पुरुषों का योगक्षेम मैं स्वयं प्राप्त कर देता हूँ।',
    englishTranslation: 'But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have.',
    philosophicalCommentary: 'God takes personal responsibility for the material and spiritual well-being (Yoga-Kshema) of a completely surrendered devotee.',
    modernPracticalApplication: 'When you are fully dedicated to a higher purpose without selfish distraction, the universe aligns to provide what you need and protect what you have.',
    keySanskritConcepts: [
      { term: 'योगक्षेमं (Yoga-Kshemam)', meaning: 'Supplying what is lacking and protecting what one has' }
    ]
  },
  {
    id: 'gita-18-066',
    globalSequenceNumber: 12,
    chapter: 18,
    verse: 66,
    chapterNameSanskrit: 'मोक्षसंन्यासयोग',
    chapterNameHindi: 'मोक्ष संन्यास योग',
    chapterNameEnglish: 'Conclusion—The Perfection of Renunciation',
    shlokaSanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥',
    transliterationIAST: 'sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja |\nahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ ||',
    wordByWordMeaning: [
      { sanskrit: 'sarva-dharmān', english: 'all varieties of religion' },
      { sanskrit: 'parityajya', english: 'abandoning' },
      { sanskrit: 'mām', english: 'unto Me' },
      { sanskrit: 'ekam', english: 'only' },
      { sanskrit: 'śaraṇam', english: 'for surrender' },
      { sanskrit: 'vraja', english: 'go' },
      { sanskrit: 'aham', english: 'I' },
      { sanskrit: 'tvām', english: 'you' },
      { sanskrit: 'sarva', english: 'all' },
      { sanskrit: 'pāpebhyaḥ', english: 'from sinful reactions' },
      { sanskrit: 'mokṣayiṣyāmi', english: 'will deliver' },
      { sanskrit: 'mā', english: 'do not' },
      { sanskrit: 'śucaḥ', english: 'worry' }
    ],
    hindiTranslation: 'सम्पूर्ण धर्मों को अर्थात् सम्पूर्ण कर्तव्य कर्मों को मुझमें त्यागकर तू केवल एक मुझ सर्वशक्तिमान्, सर्वाधार परमेश्वर की ही शरण में आ जा। मैं तुझे सम्पूर्ण पापों से मुक्त कर दूँगा, तू शोक मत कर।',
    englishTranslation: 'Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.',
    philosophicalCommentary: 'The ultimate conclusion of the Gita. After explaining various yogas and dharmas, Krishna reveals the highest secret: unconditional surrender to the Divine supersedes all mechanical rituals and duties.',
    modernPracticalApplication: 'Let go of the exhaustive burden of trying to control every outcome. Do your best and surrender the rest to a higher power. Let go of the guilt; you are protected.',
    keySanskritConcepts: [
      { term: 'शरणं (Sharanam)', meaning: 'Surrender/Refuge' },
      { term: 'मा शुचः (Ma Shuchah)', meaning: 'Do not grieve' }
    ]
  },
  {
    id: 'gita-18-078',
    globalSequenceNumber: 13,
    chapter: 18,
    verse: 78,
    chapterNameSanskrit: 'मोक्षसंन्यासयोग',
    chapterNameHindi: 'मोक्ष संन्यास योग',
    chapterNameEnglish: 'Conclusion—The Perfection of Renunciation',
    shlokaSanskrit: 'यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥',
    transliterationIAST: 'yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ |\ntatra śrīr vijayo bhūtir dhruvā nītir matir mama ||',
    wordByWordMeaning: [
      { sanskrit: 'yatra', english: 'where' },
      { sanskrit: 'yoga-īśvaraḥ', english: 'the master of mysticism' },
      { sanskrit: 'kṛṣṇaḥ', english: 'Lord Krishna' },
      { sanskrit: 'yatra', english: 'where' },
      { sanskrit: 'pārthaḥ', english: 'the son of Pritha' },
      { sanskrit: 'dhanuḥ-dharaḥ', english: 'the carrier of the bow and arrow' },
      { sanskrit: 'tatra', english: 'there' },
      { sanskrit: 'śrīḥ', english: 'opulence' },
      { sanskrit: 'vijayaḥ', english: 'victory' },
      { sanskrit: 'bhūtiḥ', english: 'exceptional power' },
      { sanskrit: 'dhruvā', english: 'certain' },
      { sanskrit: 'nītiḥ', english: 'morality' },
      { sanskrit: 'matiḥ mama', english: 'my opinion' }
    ],
    hindiTranslation: 'जहाँ योगेश्वर भगवान् श्रीकृष्ण हैं और जहाँ गाण्डीव-धनुषधारी अर्जुन हैं, वहीं पर श्री, विजय, विभूति और अचल नीति है—ऐसा मेरा मत है।',
    englishTranslation: 'Wherever there is Krishna, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. That is my opinion.',
    philosophicalCommentary: 'Sanjaya concludes the epic dialogue. Success requires both divine grace (Krishna) and human effort (Arjuna). One without the other is incomplete.',
    modernPracticalApplication: 'Vision without action is a daydream; action without vision is a nightmare. Combine high spiritual ideals with dynamic, skilled execution in the world.',
    keySanskritConcepts: [
      { term: 'योगेश्वरः (Yogeshvarah)', meaning: 'Master of Yoga/Mysticism' }
    ]
  }
];

// ─────────────── 3. MAHABHARAT ───────────────
export interface MahabharatEntry {
  id: string;
  globalSequenceNumber: number;
  parva: 'आदिपर्व' | 'सभापर्व' | 'वनपर्व' | 'उद्योगपर्व' | 'भीष्मपर्व' | 'द्रोणपर्व' | 'कर्णपर्व' | 'शल्यपर्व' | 'शान्तिपर्व' | 'अनुशासनपर्व';
  parvaEnglish: string;
  chapterReference: string;
  sanskritText: string;
  transliteration: string;
  charactersInvolved: string[];
  context: string;
  hindiMeaning: string;
  englishMeaning: string;
  ethicalDilemma: string; // The deep philosophical or moral crisis
  modernReflection: string;
}

export const MAHABHARAT_ENTRIES: MahabharatEntry[] = [
  {
    id: 'mbh-shanti-001',
    globalSequenceNumber: 1,
    parva: 'शान्तिपर्व',
    parvaEnglish: 'Shanti Parva',
    chapterReference: 'अध्याय 109, श्लोक 10-11',
    sanskritText: 'धारणाद्धर्ममित्याहुर्धर्मो धारयते प्रजाः।\nयत्स्याद्धारणसंयुक्तं स धर्म इति निश्चयः॥\nन हि सत्यात्परो धर्मो नानृतात्पातकं परम्।',
    transliteration: 'Dhāraṇād dharmam ity āhur dharmo dhārayate prajāḥ |\nYat syād dhāraṇa-saṁyuktaṁ sa dharma iti niścayaḥ ||\nNa hi satyāt paro dharmo nānṛtāt pātakaṁ param |',
    charactersInvolved: ['Bhishma Pitamah', 'Yudhishthira'],
    context: 'Lying on the bed of arrows in Shanti Parva, Grandfather Bhishma instructs King Yudhishthira on the true cosmic definition of Dharma and the foundation of statecraft.',
    hindiMeaning: 'धर्म शब्द \'धृ\' (धारण करना) धातु से बना है। जो समाज, प्रजा और सम्पूर्ण सृष्टि को परस्पर धारण करता है, संतुलित रखता है, वही धर्म है। सत्य से बड़ा कोई दूसरा धर्म नहीं है, और असत्य व कपट से बड़ा कोई दूसरा पाप नहीं है।',
    englishMeaning: 'Dharma is derived from the root \'dhṛ\' (to sustain or uphold). That which sustains humanity, preserves social harmony, and protects the integrity of existence is Dharma. There is no higher virtue than Truth, and no greater transgression than falsehood.',
    ethicalDilemma: 'In times of severe political crisis, leaders often justify deception for short-term gain. Bhishma asserts that any institution built upon falsehood will inevitably collapse under its own structural deceit.',
    modernReflection: 'Institutions, corporations, and relationships survive only as long as they possess "Dharana"—the mutual trust and structural truth that holds them together. The moment deceit becomes systemic, the organization loses its Dharma and disintegrates.'
  },
  {
    id: 'mbh-udyoga-001',
    globalSequenceNumber: 2,
    parva: 'उद्योगपर्व',
    parvaEnglish: 'Udyoga Parva',
    chapterReference: 'विदुर नीति, अध्याय 33',
    sanskritText: 'आत्मज्ञानं समारम्भस्तितिक्षा धर्मनित्यता।\nयमर्था नापकर्षन्ति स वै पण्डित उच्यते॥',
    transliteration: 'Ātma-jñānaṁ samārambhas titikṣā dharma-nityatā |\nYam arthā nāpakarṣanti sa vai paṇḍita ucyate ||',
    charactersInvolved: ['Mahatma Vidura', 'King Dhritarashtra'],
    context: 'In Vidura Niti, Mahatma Vidura counsels King Dhritarashtra on the authentic qualities of a truly wise person (Pandita) as the dark clouds of war loom over Hastinapur.',
    hindiMeaning: 'जिस व्यक्ति को आत्मज्ञान (अपनी शक्तियों और सीमाओं का यथार्थ बोध) हो, जो निष्ठापूर्वक कर्म का आरम्भ करता हो, जिसमें सहनशीलता (तितिक्षा) हो, और जो निरंतर धर्म पर अडिग रहे—जिसके मन को भोग-विलास विचलित न कर सकें, वही वास्तव में \'पण्डित\' (ज्ञानी) कहलाता है।',
    englishMeaning: 'He who possesses self-knowledge, who initiates endeavors with thorough preparation, who practices endurance, remains steadfast in righteousness, and whose mind is never swayed by superficial desires—he alone is truly wise.',
    ethicalDilemma: 'Dhritarashtra possesses intellect, but lacks Titiksha (endurance against emotional weakness for his son Duryodhana). Vidura highlights that knowledge without emotional self-mastery leads to catastrophe.',
    modernReflection: 'Being educated or holding high degrees does not make someone wise. A truly wise professional knows their boundaries, starts projects with discipline, endures hardship without panic, and refuses to compromise core ethics for convenience.'
  },
  {
    id: 'mbh-adi-001',
    globalSequenceNumber: 3,
    parva: 'आदिपर्व',
    parvaEnglish: 'Adi Parva',
    chapterReference: 'अध्याय 1',
    sanskritText: 'धर्मे चार्थे च कामे च मोक्षे च भरतर्षभ।\nयदिहास्ति तदन्यत्र यन्नेहास्ति न तत्क्वचित्॥',
    transliteration: 'dharme cārthe ca kāme ca mokṣe ca bharatarṣabha |\nyad ihāsti tad anyatra yan nehāsti na tat kvacit ||',
    charactersInvolved: ['Vyasa', 'Janamejaya'],
    context: 'Vyasa declaring the comprehensive nature of the Mahabharata.',
    hindiMeaning: 'हे भरतश्रेष्ठ! धर्म, अर्थ, काम और मोक्ष के विषय में जो यहाँ (इस ग्रन्थ में) है, वही अन्यत्र है। जो यहाँ नहीं है, वह कहीं भी नहीं है।',
    englishMeaning: 'O best of the Bharatas, whatever is found here concerning Dharma, Artha, Kama, and Moksha, may be found elsewhere. But what is not found here cannot be found anywhere.',
    ethicalDilemma: 'The assertion that human experience is a universal closed set of emotional and ethical archetypes.',
    modernReflection: 'Human nature, with all its flaws, greed, love, and ambition, remains constant across millennia. Literature merely mirrors it.'
  },
  {
    id: 'mbh-sabha-001',
    globalSequenceNumber: 4,
    parva: 'सभापर्व',
    parvaEnglish: 'Sabha Parva',
    chapterReference: 'द्यूत पर्व',
    sanskritText: 'न सा सभा यत्र न सन्ति वृद्धाः\nवृद्धा न ते ये न वदन्ति धर्मम्।\nधर्मः स नो यत्र न सत्यमस्ति\nसत्यं न तद्यच्छलमभ्युपैति॥',
    transliteration: 'na sā sabhā yatra na santi vṛddhāḥ\nvṛddhā na te ye na vadanti dharmam |\ndharmaḥ sa no yatra na satyam asti\nsatyaṁ na tad yac chalam abhyupaiti ||',
    charactersInvolved: ['Vidura', 'Dritarashtra', 'Kauravas'],
    context: 'Vidura warns the assembly during the disastrous game of dice.',
    hindiMeaning: 'वह सभा नहीं जहाँ वृद्ध (ज्ञानी) न हों, वे वृद्ध नहीं जो धर्म की बात न कहें। वह धर्म नहीं जिसमें सत्य न हो, और वह सत्य नहीं जिसमें छल हो।',
    englishMeaning: 'That is no assembly where there are no elders; those are no elders who do not speak of dharma. That is no dharma where there is no truth; and that is no truth which is mixed with deceit.',
    ethicalDilemma: 'Remaining silent in the face of injustice makes the entire society complicit in the crime.',
    modernReflection: 'Silence by people in power when wrongdoing occurs is an active endorsement of injustice.'
  },
  {
    id: 'mbh-vana-001',
    globalSequenceNumber: 5,
    parva: 'वनपर्व',
    parvaEnglish: 'Vana Parva',
    chapterReference: 'यक्ष प्रश्न',
    sanskritText: 'अहन्यहनि भूतानि गच्छन्तीह यमालयम्।\nशेषाः स्थावरमिच्छन्ति किमाश्चर्यमतः परम्॥',
    transliteration: 'ahany ahani bhūtāni gacchantīha yamālayam |\nśeṣāḥ sthāvaram icchanti kim āścaryam ataḥ param ||',
    charactersInvolved: ['Yudhishthira', 'Yaksha'],
    context: 'Yudhishthira answering the Yaksha\'s question: "What is the greatest wonder in the world?"',
    hindiMeaning: 'प्रतिदिन प्राणी यमलोक (मृत्यु) को प्राप्त हो रहे हैं, फिर भी बचे हुए लोग हमेशा जीवित रहने की इच्छा करते हैं। इससे बड़ा आश्चर्य और क्या हो सकता है?',
    englishMeaning: 'Day after day countless creatures go to the abode of Yama (Death), yet those that remain behind believe themselves to be immortal. What can be more wonderful than this?',
    ethicalDilemma: 'The cognitive dissonance of humanity regarding its own mortality.',
    modernReflection: 'Despite knowing our time is limited, we live and hoard as if we have infinite time, often ignoring what truly matters.'
  },
  {
    id: 'mbh-bhishma-001',
    globalSequenceNumber: 6,
    parva: 'भीष्मपर्व',
    parvaEnglish: 'Bhishma Parva',
    chapterReference: 'भगवद्गीता पर्व',
    sanskritText: 'यदा यदा हि धर्मस्य... (गीता प्रसंग)',
    transliteration: 'yadā yadā hi dharmasya...',
    charactersInvolved: ['Krishna', 'Arjuna'],
    context: 'The setting of the Bhagavad Gita right before the great war.',
    hindiMeaning: 'गीता का उपदेश, जो धर्म और कर्तव्य का मार्ग दिखाता है।',
    englishMeaning: 'The discourse of the Gita, guiding on the path of duty and righteousness.',
    ethicalDilemma: 'Killing one\'s own family for the sake of upholding universal Dharma.',
    modernReflection: 'Sometimes the hardest choices require us to detach from personal relationships and do what is objectively right for society.'
  }
];

// ─────────────── 4. UPANISHADS ───────────────
export interface UpanishadEntry {
  id: string;
  globalSequenceNumber: number;
  upanishadName: 'ईशावास्योपनिषद्' | 'केनोपनिषद्' | 'कठोपनिषद्' | 'मुण्डकोपनिषद्' | 'माण्डूक्योपनिषद्' | 'तैत्तिरीयोपनिषद्' | 'छान्दोग्योपनिषद्' | 'बृहदारण्यकोपनिषद्';
  upanishadNameEnglish: string;
  mantraReference: string;
  sanskritMantra: string;
  transliterationIAST: string;
  hindiMeaning: string;
  englishMeaning: string;
  vedanticSignificance: string; // Connection to Advaita/Vedanta
  keyConcepts: { concept: string; meaning: string }[];
}

export const UPANISHAD_ENTRIES: UpanishadEntry[] = [
  {
    id: 'upan-isha-001',
    globalSequenceNumber: 1,
    upanishadName: 'ईशावास्योपनिषद्',
    upanishadNameEnglish: 'Isha Upanishad',
    mantraReference: 'मन्त्र 1',
    sanskritMantra: 'ॐ ईशा वास्यमिदँ सर्वं यत्किञ्च जगत्यां जगत्।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥',
    transliterationIAST: 'oṁ īśā vāsyam idaṁ sarvaṁ yat kiñca jagatyāṁ jagat |\ntena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam ||',
    hindiMeaning: 'इस गतिशील और नश्वर जगत् में जो कुछ भी दृश्यमान है, वह सब ईश्वर से व्याप्त (आच्छादित) है। अतः त्यागभाव से इस संसार का उपभोग करो; किसी अन्य के धन या सम्पत्ति पर आसक्ति अथवा लोभ मत करो।',
    englishMeaning: 'All this—whatever moves and breathes in this transient universe—is enveloped and permeated by the Supreme Divine. Enjoy life through conscious detachment and renunciation. Do not covet the wealth of anyone.',
    vedanticSignificance: 'The foundational verse of Advaita Vedanta. It reconciles living in the world with spiritual detachment: enjoy the world with gratitude, but remember you are a trustee, not an absolute owner.',
    keyConcepts: [
      { concept: 'ईशा वास्यम् (Isha Vasyam)', meaning: 'Permeated, enveloped, and animated by the Divine Consciousness' },
      { concept: 'तेन त्यक्तेन भुञ्जीथाः (Tena Tyaktena Bhunjitha)', meaning: 'Enjoy with a spirit of non-possessive detachment' }
    ]
  },
  {
    id: 'upan-mundaka-001',
    globalSequenceNumber: 2,
    upanishadName: 'मुण्डकोपनिषद्',
    upanishadNameEnglish: 'Mundaka Upanishad',
    mantraReference: 'तृतीय मुण्डक, प्रथम खण्ड, मन्त्र 6',
    sanskritMantra: 'सत्यमेव जयते नानृतं\nसत्येन पन्था विततो देवयानः।\nयेनाक्रमन्त्यृषयो ह्याप्तकामा\nयत्र तत् सत्यस्य परमं निधानम्॥',
    transliterationIAST: 'satyameva jayate nānṛtaṁ\nsatyena panthā vitato devayānaḥ |\nyenākramanty ṛṣayo hy āptakāmā\nyatra tat satyasya paramaṁ nidhānam ||',
    hindiMeaning: 'सत्य की ही सदा विजय होती है, असत्य की नहीं। सत्य के द्वारा ही देवयान (परम प्रकाश का मार्ग) का विस्तार होता है, जिस मार्ग पर चलकर निष्काम ऋषिजन उस सत्य के परम धाम तक पहुँचते हैं।',
    englishMeaning: 'Truth alone triumphs, not falsehood. Through Truth alone is the divine path paved, along which the sages whose desires are fulfilled ascend to the supreme treasure-house of Truth.',
    vedanticSignificance: 'India\'s national motto "Satyameva Jayate" originates from this sublime Vedic mantra. Truth (Satya) is not merely moral honesty; it is the eternal, unchanging fabric of Brahman (Ultimate Reality).',
    keyConcepts: [
      { concept: 'सत्यमेव जयते (Satyameva Jayate)', meaning: 'Truth alone prevails over the illusions of time' },
      { concept: 'आपत्कामाः (Aptakama)', meaning: 'Those whose desires have dissolved through self-realization' }
    ]
  },
  {
    id: 'upan-brihad-001',
    globalSequenceNumber: 3,
    upanishadName: 'बृहदारण्यकोपनिषद्',
    upanishadNameEnglish: 'Brihadaranyaka Upanishad',
    mantraReference: 'अध्याय 1, ब्राह्मण 3, मन्त्र 28 (शान्ति मन्त्र)',
    sanskritMantra: 'ॐ असतो मा सद्गमय।\nतमसो मा ज्योतिर्गमय।\nमृत्योर्मा अमृतं गमय।\nॐ शान्तिः शान्तिः शान्तिः॥',
    transliterationIAST: 'oṁ asato mā sad gamaya |\ntamaso mā jyotir gamaya |\nmṛtyor mā amṛtaṁ gamaya |\noṁ śāntiḥ śāntiḥ śāntiḥ ||',
    hindiMeaning: 'हे परम चैतन्य! मुझे असत्य और अवास्तविकता से सत्य की ओर ले चलें। मुझे अज्ञान के अंधकार से ज्ञान के प्रकाश की ओर ले चलें। मुझे मृत्यु (नश्वरता) से अमरत्व की ओर ले चलें।',
    englishMeaning: 'Lead me from the unreal to the Real. Lead me from the darkness of ignorance to the Light of understanding. Lead me from the fear of mortality to the nectar of Immortality. Om Peace, Peace, Peace.',
    vedanticSignificance: 'The universal prayer of human consciousness longing for transcendence: shifting from fleeting material forms (Asat) to eternal conscious presence (Sat).',
    keyConcepts: [
      { concept: 'असत् से सत् (Asat to Sat)', meaning: 'From transient illusion to immutable Truth' },
      { concept: 'तमस् से ज्योति (Tamas to Jyoti)', meaning: 'From cognitive darkness to inner illumination' }
    ]
  },
  {
    id: 'upan-isha-002',
    globalSequenceNumber: 4,
    upanishadName: 'ईशावास्योपनिषद्',
    upanishadNameEnglish: 'Isha Upanishad',
    mantraReference: 'मन्त्र 2',
    sanskritMantra: 'कुर्वन्नेवेह कर्माणि जिजीविषेच्छतं समाः।\nएवं त्वयि नान्यथेतोऽस्ति न कर्म लिप्यते नरे॥',
    transliterationIAST: 'kurvann eveha karmāṇi jijīviṣec chataṁ samāḥ |\nevaṁ tvayi nānyatheto\'sti na karma lipyate nare ||',
    hindiMeaning: 'इस संसार में कर्म करते हुए ही सौ वर्ष तक जीने की इच्छा करनी चाहिए। ऐसा करने से तुझमें कर्मों का लेप (आसक्ति) नहीं होगा। इसके अतिरिक्त अन्य कोई मार्ग नहीं है।',
    englishMeaning: 'By performing actions in this world, one should desire to live a hundred years. Thus for you, there is no other way than this by which action does not bind a human being.',
    vedanticSignificance: 'It bridges the gap between active worldly life and spiritual liberation, advocating Nishkama Karma long before the Gita.',
    keyConcepts: [
      { concept: 'कर्म लिप्यते (Karma Lipyate)', meaning: 'Binding effect of action' }
    ]
  },
  {
    id: 'upan-isha-003',
    globalSequenceNumber: 5,
    upanishadName: 'ईशावास्योपनिषद्',
    upanishadNameEnglish: 'Isha Upanishad',
    mantraReference: 'मन्त्र 3',
    sanskritMantra: 'असुर्या नाम ते लोका अन्धेन तमसावृताः।\nतांस्ते प्रेत्याभिगच्छन्ति ये के चात्महनो जनाः॥',
    transliterationIAST: 'asuryā nāma te lokā andhena tamasāvṛtāḥ |\ntāṁs te pretyābhigacchanti ye ke cātmahano janāḥ ||',
    hindiMeaning: 'जो लोग आत्मा की हत्या करने वाले (आत्मा की उपेक्षा करने वाले) हैं, वे मरने के बाद उन लोकों को जाते हैं जो अज्ञान रूपी घोर अंधकार से ढके हुए हैं।',
    englishMeaning: 'Sunless are those worlds, covered in blind darkness, to which those who kill the Self (ignore their spiritual nature) go after departing from here.',
    vedanticSignificance: 'Ignoring spiritual truth leads one into a life of darkness and continued ignorance in subsequent births.',
    keyConcepts: [
      { concept: 'आत्महनः (Atmahanah)', meaning: 'Slayers of the Self (those who ignore spiritual truth)' }
    ]
  },
  {
    id: 'upan-isha-004',
    globalSequenceNumber: 6,
    upanishadName: 'ईशावास्योपनिषद्',
    upanishadNameEnglish: 'Isha Upanishad',
    mantraReference: 'मन्त्र 4',
    sanskritMantra: 'अनेजदेकं मनसो जवीयो नैनद्देवा आप्नुवन्पूर्वमर्षत्।\nतद्धावतोऽन्यानत्येति तिष्ठत्तस्मिन्नपो मातरिश्वा दधाति॥',
    transliterationIAST: 'anejad ekaṁ manaso javīyo nainad devā āpnuvan pūrvam arṣat |\ntad dhāvato\'nyān atyeti tiṣṭhat tasminn apo mātariśvā dadhāti ||',
    hindiMeaning: 'वह (परमात्मा) अचल, एक, और मन से भी अधिक तीव्र गति वाला है। उसे इन्द्रियाँ (देव) नहीं पा सकतीं। वह स्थिर होकर भी दौड़ने वालों को पीछे छोड़ देता है। उसी के आश्रय में वायु जीवन-प्रक्रियाओं को धारण करता है।',
    englishMeaning: 'That One, though motionless, is swifter than the mind. The senses cannot reach It, for It runs ahead of them. Standing still, It overtakes those who run. By It, the cosmic energy sustains all activities.',
    vedanticSignificance: 'Describes the paradoxical nature of Brahman—omnipresent and beyond sensory perception.',
    keyConcepts: [
      { concept: 'अनेजद् (Anejad)', meaning: 'Unmoving, steady' }
    ]
  },
  {
    id: 'upan-isha-005',
    globalSequenceNumber: 7,
    upanishadName: 'ईशावास्योपनिषद्',
    upanishadNameEnglish: 'Isha Upanishad',
    mantraReference: 'मन्त्र 5',
    sanskritMantra: 'तदेजति तन्नैजति तद्दूरे तद्वन्तिके।\nतदन्तरस्य सर्वस्य तदु सर्वस्यास्य बाह्यतः॥',
    transliterationIAST: 'tad ejati tan naijati tad dūre tadv antike |\ntad antarasya sarvasya tad u sarvasyāsya bāhyataḥ ||',
    hindiMeaning: 'वह चलता है, वह नहीं चलता है। वह दूर है, और वह बहुत समीप भी है। वह इस सबके अंदर है, और वह इस सबके बाहर भी है।',
    englishMeaning: 'It moves, and It moves not. It is far, and It is near. It is within all this, and It is outside all this.',
    vedanticSignificance: 'Reaffirms the absolute immanence and transcendence of the Divine.',
    keyConcepts: [
      { concept: 'सर्वस्य (Sarvasya)', meaning: 'Of all that exists' }
    ]
  }
];

// ─────────────── 5. VEDAS (DAILY 4 SELECTIONS) ───────────────
export interface SingleVedaSelection {
  veda: 'ऋग्वेद' | 'सामवेद' | 'यजुर्वेद' | 'अथर्ववेद';
  vedaEnglish: 'Rigveda' | 'Samaveda' | 'Yajurveda' | 'Atharvaveda';
  referenceType: 'ऋचा / सूक्त' | 'साम / गान' | 'मन्त्र / कण्डिका' | 'मन्त्र / काण्ड';
  referenceNumber: string;
  sanskritText: string;
  transliterationIAST: string;
  hindiMeaning: string;
  englishMeaning: string;
  significance: string;
}

export interface DailyVedaSet {
  id: string;
  globalSequenceNumber: number;
  dayIndex: number;
  rigveda: SingleVedaSelection;
  yajurveda: SingleVedaSelection;
  samaveda: SingleVedaSelection;
  atharvaveda: SingleVedaSelection;
}

export const VEDA_DAILY_SETS: DailyVedaSet[] = [
  {
    id: 'veda-set-001',
    globalSequenceNumber: 1,
    dayIndex: 1,
    rigveda: {
      veda: 'ऋग्वेद',
      vedaEnglish: 'Rigveda',
      referenceType: 'ऋचा / सूक्त',
      referenceNumber: 'मण्डल 10, सूक्त 191, मन्त्र 2 (संज्ञान सूक्त)',
      sanskritText: 'सङ्गच्छध्वं संवदध्वं सं वो मनांसि जानताम्।\nदेवा भागं यथा पूर्वे सञ्जानाना उपासते॥',
      transliterationIAST: 'saṅgacchadhvaṁ saṁvadadhvaṁ saṁ vo manāṁsi jānatām |\ndevā bhāgaṁ yathā pūrve sañjānānā upāsate ||',
      hindiMeaning: 'तुम सब साथ चलो (एक साथ प्रगति करो), एक स्वर में बोलो, और तुम्हारे मन एक समान होकर सत्य को जानें। जैसे प्राचीन काल में ज्ञानी देवगण एकमत होकर अपना कर्तव्य निभाते थे।',
      englishMeaning: 'Assemble together, speak with one coherent voice, and let your minds unite in mutual understanding, even as the enlightened beings of ancient times lived in harmonious co-operation.',
      significance: 'The Samjnana Sukta is humanity\'s oldest recorded manifesto for democratic solidarity, collective wisdom, and mutual empathy.'
    },
    yajurveda: {
      veda: 'यजुर्वेद',
      vedaEnglish: 'Yajurveda',
      referenceType: 'मन्त्र / कण्डिका',
      referenceNumber: 'शुक्ल यजुर्वेद, अध्याय 36, मन्त्र 17 (शान्ति मन्त्र)',
      sanskritText: 'द्यौः शान्तिरन्तरिक्षँ शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः।\nवनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः सर्वँ शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि॥',
      transliterationIAST: 'dyauḥ śāntir antarikṣaṁ śāntiḥ pṛthivī śāntir āpaḥ śāntir oṣadhayaḥ śāntiḥ |\nvanaspatayaḥ śāntir viśvedevāḥ śāntir brahma śāntiḥ sarvaṁ śāntiḥ śāntir eva śāntiḥ sā mā śāntir edhi ||',
      hindiMeaning: 'द्युलोक (आकाश) में शान्ति हो, अन्तरिक्ष में शान्ति हो, पृथ्वी पर शान्ति हो, जल में शान्ति हो, औषधियों और वनस्पतियों में शान्ति हो, समस्त चराचर ब्रह्माण्ड में शान्ति हो—वह परम शान्ति मेरे हृदय में भी स्थापित हो।',
      englishMeaning: 'May peace radiate in the celestial spheres, peace in the atmosphere, peace on earth, peace in the waters, peace in healing herbs and forests. May supreme peace prevail in all cosmic powers and within my own being.',
      significance: 'A majestic ecological and cosmic prayer recognizing that human inner peace is inextricably linked with environmental harmony.'
    },
    samaveda: {
      veda: 'सामवेद',
      vedaEnglish: 'Samaveda',
      referenceType: 'साम / गान',
      referenceNumber: 'आर्चिक 1.1.1 (अग्नि स्तवन)',
      sanskritText: 'अग्न आ याहि वीतये गृणानो हव्यदातये।\nनि होता सत्सि बर्हिषि॥',
      transliterationIAST: 'agna ā yāhi vītaye gṛṇāno havya-dātaye |\nni hotā satsi barhiṣi ||',
      hindiMeaning: 'हे दिव्य प्रकाश स्वरूप अग्निदेव! हमारी स्तुतियों से प्रसन्न होकर यज्ञीय आहुति को स्वीकार करने के लिए पधारें, और इस पवित्र कुशासन पर विराजें।',
      englishMeaning: 'O Radiant Divine Agni, invoked by our grateful songs, arrive to accept the dedicated offerings and be seated upon the sacred altar of our hearts.',
      significance: 'Samaveda is the Veda of divine melody and liturgical song (Gana), transforming Vedic mantras into elevated sonic meditations.'
    },
    atharvaveda: {
      veda: 'अथर्ववेद',
      vedaEnglish: 'Atharvaveda',
      referenceType: 'मन्त्र / काण्ड',
      referenceNumber: 'काण्ड 12, सूक्त 1, मन्त्र 12 (भूमि सूक्त)',
      sanskritText: 'माता भूमिः पुत्रो अहं पृथिव्याः।\nपर्जन्यः पिता स उ नः पिपर्तु॥',
      transliterationIAST: 'mātā bhūmiḥ putro ahaṁ pṛthivyāḥ |\nparjanyaḥ pitā sa u naḥ pipartu ||',
      hindiMeaning: 'यह पावन भूमि मेरी माता है और मैं इस पृथ्वी का पुत्र हूँ। वर्षा प्रदान करने वाले पर्जन्य (मेघ) हमारे पिता हैं, जो हमारा पालन-पोषण करें।',
      englishMeaning: 'Earth is my mother, and I am the child of this sacred Soil. The rain-bearing clouds are our nourishing father; may they sustain us with vitality.',
      significance: 'The Bhumi Sukta is the world\'s earliest eco-philosophical hymn, declaring humanity\'s filial relationship and stewardship towards the Earth.'
    }
  },
  {
    id: 'veda-set-002',
    globalSequenceNumber: 2,
    dayIndex: 2,
    rigveda: {
      veda: 'ऋग्वेद',
      vedaEnglish: 'Rigveda',
      referenceType: 'ऋचा / सूक्त',
      referenceNumber: 'मण्डल 3, सूक्त 62, मन्त्र 10 (गायत्री मन्त्र)',
      sanskritText: 'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥',
      transliterationIAST: 'tat savitur vareṇyaṁ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||',
      hindiMeaning: 'हम उस स्रष्टा, प्रकाशमान, परम पूज्य परमात्मा के तेज का ध्यान करते हैं, वह हमारी बुद्धियों को सन्मार्ग की ओर प्रेरित करे।',
      englishMeaning: 'We meditate on the adorable glory of the radiant sun; may he inspire our intelligence.',
      significance: 'The most universal prayer for intellectual illumination.'
    },
    yajurveda: {
      veda: 'यजुर्वेद',
      vedaEnglish: 'Yajurveda',
      referenceType: 'मन्त्र / कण्डिका',
      referenceNumber: 'अध्याय 34, मन्त्र 1 (शिवसंकल्प सूक्त)',
      sanskritText: 'यज्जाग्रतो दूरमुदैति दैवं तदु सुप्तस्य तथैवैति।\nदूरङ्गमं ज्योतिषां ज्योतिरेकं तन्मे मनः शिवसंकल्पमस्तु॥',
      transliterationIAST: 'yaj jāgrato dūram udaiti daivaṁ tad u suptasya tathaivaiti |\ndūraṅgamaṁ jyotiṣāṁ jyotir ekaṁ tan me manaḥ śiva-saṅkalpam astu ||',
      hindiMeaning: 'जो मन जागते हुए बहुत दूर चला जाता है और सोते हुए वैसे ही (लौट) आता है, ज्योतियों की ज्योति उस मेरे मन में शुभ संकल्प हों।',
      englishMeaning: 'May my mind, which travels far while awake and likewise returns in sleep, the light of all lights, be filled with auspicious resolves.',
      significance: 'A profound psychological prayer for the purification of thoughts.'
    },
    samaveda: {
      veda: 'सामवेद',
      vedaEnglish: 'Samaveda',
      referenceType: 'साम / गान',
      referenceNumber: 'आर्चिक 2.2.1',
      sanskritText: 'पुनानो अक्रमीदभि विश्वा रूपाणि अव्ययः।',
      transliterationIAST: 'punāno akramīd abhi viśvā rūpāṇi avyayaḥ |',
      hindiMeaning: 'पवित्र करने वाला अव्यय परमेश्वर सभी रूपों को प्राप्त होता है।',
      englishMeaning: 'The purifying, imperishable Divine pervades all forms.',
      significance: 'Recognizes the permeating purity of the Divine essence.'
    },
    atharvaveda: {
      veda: 'अथर्ववेद',
      vedaEnglish: 'Atharvaveda',
      referenceType: 'मन्त्र / काण्ड',
      referenceNumber: 'काण्ड 10, सूक्त 8',
      sanskritText: 'अकामो धीरो अमृतः स्वयम्भू रसेन तृप्तो न कुतश्चनोनः।',
      transliterationIAST: 'akāmo dhīro amṛtaḥ svayambhū rasena tṛpto na kutaścanonah |',
      hindiMeaning: 'वह (परमात्मा) निष्काम, धीर, अमर, स्वयंभू और रस से तृप्त है; उसमें कोई कमी नहीं है।',
      englishMeaning: 'Desireless, firm, immortal, self-existent, satisfied with the essence, lacking nothing.',
      significance: 'Describes the perfect, fulfilled nature of the Supreme Being.'
    }
  },
  {
    id: 'veda-set-003',
    globalSequenceNumber: 3,
    dayIndex: 3,
    rigveda: {
      veda: 'ऋग्वेद',
      vedaEnglish: 'Rigveda',
      referenceType: 'ऋचा / सूक्त',
      referenceNumber: 'मण्डल 1, सूक्त 164',
      sanskritText: 'एकं सद्विप्रा बहुधा वदन्ति।',
      transliterationIAST: 'ekaṁ sad viprā bahudhā vadanti |',
      hindiMeaning: 'सत्य एक है, ज्ञानी जन उसे अनेक प्रकार से कहते हैं।',
      englishMeaning: 'Truth is One; sages call it by various names.',
      significance: 'The core tenet of spiritual pluralism and tolerance in Indian thought.'
    },
    yajurveda: {
      veda: 'यजुर्वेद',
      vedaEnglish: 'Yajurveda',
      referenceType: 'मन्त्र / कण्डिका',
      referenceNumber: 'अध्याय 40, मन्त्र 1',
      sanskritText: 'ईशा वास्यमिदं सर्वं... (देखें उपनिषद)',
      transliterationIAST: 'īśā vāsyam idaṁ sarvam... (see Upanishad)',
      hindiMeaning: 'सब ईश्वरमय है।',
      englishMeaning: 'All is pervaded by God.',
      significance: 'Same as Isha Upanishad.'
    },
    samaveda: {
      veda: 'सामवेद',
      vedaEnglish: 'Samaveda',
      referenceType: 'साम / गान',
      referenceNumber: 'आर्चिक 3.1.5',
      sanskritText: 'त्वामग्ने हविष्मन्तो देवं मर्तास ईळते।',
      transliterationIAST: 'tvām agne haviṣmanto devaṁ martāsa īḷate |',
      hindiMeaning: 'हे अग्निदेव, हवि धारण करने वाले मरणधर्मा मनुष्य तुम्हारी स्तुति करते हैं।',
      englishMeaning: 'O Agni, mortal men bearing oblations worship You.',
      significance: 'A call to light the fire of knowledge.'
    },
    atharvaveda: {
      veda: 'अथर्ववेद',
      vedaEnglish: 'Atharvaveda',
      referenceType: 'मन्त्र / काण्ड',
      referenceNumber: 'काण्ड 11, सूक्त 5',
      sanskritText: 'ब्रह्मचारी कृष्णजिनं वसानो दीक्षितो दीर्घश्मश्रुः।',
      transliterationIAST: 'brahmacārī kṛṣṇajinaṁ vasāno dīkṣito dīrghaśmaśruḥ |',
      hindiMeaning: 'विद्यार्थी का स्वरूप और तपस्या।',
      englishMeaning: 'The nature and austerity of a student seeking knowledge.',
      significance: 'Extols the virtues of education and discipline.'
    }
  }
];

// ─────────────── 6. PURANAS ───────────────
export interface PuranaEntry {
  id: string;
  globalSequenceNumber: number;
  puranaName: 'विष्णु पुराण' | 'श्रीमद्भागवत पुराण' | 'शिव पुराण' | 'मार्कण्डेय पुराण' | 'स्कन्द पुराण' | 'गरुड़ पुराण' | 'पद्म पुराण';
  puranaNameEnglish: string;
  chapterSection: string;
  sanskritPassage: string;
  transliteration: string;
  storyNarrative: string;
  hindiMeaning: string;
  englishMeaning: string;
  symbolismAndSignificance: string;
}

export const PURANA_ENTRIES: PuranaEntry[] = [
  {
    id: 'pur-vishnu-001',
    globalSequenceNumber: 1,
    puranaName: 'विष्णु पुराण',
    puranaNameEnglish: 'Vishnu Purana',
    chapterSection: 'अंश 1, अध्याय 19 (प्रह्लाद चरित्र)',
    sanskritPassage: 'सर्वभूतेषु यः पश्येन्मां चैव सर्वभूतेषु।\nसोऽविनाशं परं ब्रह्म याति नान्येन चेतसा॥',
    transliteration: 'sarva-bhūteṣu yaḥ paśyen māṁ caiva sarva-bhūteṣu |\nso ’vināśaṁ paraṁ brahma yāti nānyena cetasā ||',
    storyNarrative: 'When confronted by his tyrannical father Hiranyakashipu, the young devotee Prahlada refused to look upon any living creature with hatred, recognizing that the all-pervading Divine Consciousness dwells equally within friend and foe.',
    hindiMeaning: 'जो व्यक्ति समस्त प्राणियों में मुझे (परमात्मा को) देखता है और मुझमें समस्त प्राणियों को देखता है, वह एकाग्र चित्त से उस अविनाशी परब्रह्म को प्राप्त होता है।',
    englishMeaning: 'He who perceives the Divine residing within every living being, and sees all creatures resting within the Divine, attains that imperishable Supreme Truth with an unswerving mind.',
    symbolismAndSignificance: 'Prahlada symbolises innocence and unwavering clarity that triumphs over institutional tyranny and arrogance.'
  },
  {
    id: 'pur-bhagavat-001',
    globalSequenceNumber: 2,
    puranaName: 'श्रीमद्भागवत पुराण',
    puranaNameEnglish: 'Shrimad Bhagavata Purana',
    chapterSection: 'स्कन्ध 11, अध्याय 7 (अवधूत के 24 गुरु)',
    sanskritPassage: 'सन्तोषस्त्रिषु कर्तव्यः स्वदारे भोजने धने।\nत्रिषु चैव न कर्तव्योऽध्ययने जपदानयोः॥',
    transliteration: 'santoṣas triṣu kartavyaḥ sva-dāre bhojane dhane |\ntriṣu caiva na kartavyo ’dhyayane japa-dānayoḥ ||',
    storyNarrative: 'In the Uddhava Gita (11th Skandha), the Avadhuta Dattatreya explains how he derived wisdom from 24 natural teachers (including earth, wind, water, fire, and the honeybee), finding contentment in material things while remaining unquenchably curious in learning.',
    hindiMeaning: 'तीन बातों में मनुष्य को सदैव सन्तोष रखना चाहिए: जीवनसाथी, भोजन और अर्जित धन। किन्तु तीन बातों में कभी सन्तोष (विश्राम) नहीं करना चाहिए: स्वाध्याय (अध्ययन), जप (आत्म-चिन्तन) और दान (परोपकार)।',
    englishMeaning: 'One should always remain content in three things: one\'s companion, one\'s daily food, and one\'s earned wealth. But one should never rest content in three things: learning (self-study), contemplation, and selfless giving.',
    symbolismAndSignificance: 'A profound psychological formula: simplicity and contentment in material consumption paired with boundless ambition in intellectual and spiritual growth.'
  },
  {
    id: 'pur-shiva-001',
    globalSequenceNumber: 3,
    puranaName: 'शिव पुराण',
    puranaNameEnglish: 'Shiva Purana',
    chapterSection: 'विद्येश्वर संहिता',
    sanskritPassage: 'शिव एव जगत् सर्वं जगदेव शिवः स्मृतः।',
    transliteration: 'śiva eva jagat sarvaṁ jagad eva śivaḥ smṛtaḥ |',
    storyNarrative: 'Explaining the fundamental nature of the universe as non-different from Shiva.',
    hindiMeaning: 'शिव ही सम्पूर्ण जगत् है और जगत् ही शिव माना गया है।',
    englishMeaning: 'Shiva alone is the entire universe, and the universe is remembered as Shiva.',
    symbolismAndSignificance: 'Non-duality (Advaita) principle expressing the immanence of the Divine in all creation.'
  },
  {
    id: 'pur-markandeya-001',
    globalSequenceNumber: 4,
    puranaName: 'मार्कण्डेय पुराण',
    puranaNameEnglish: 'Markandeya Purana',
    chapterSection: 'दुर्गा सप्तशती',
    sanskritPassage: 'या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥',
    transliteration: 'yā devī sarva-bhūteṣu śakti-rūpeṇa saṁsthitā |\nnamas tasyai namas tasyai namas tasyai namo namaḥ ||',
    storyNarrative: 'The gods praying to the Goddess, acknowledging Her presence in every being as pure energy and power.',
    hindiMeaning: 'जो देवी सब प्राणियों में शक्ति रूप में स्थित हैं, उनको नमस्कार, नमस्कार, बारम्बार नमस्कार है।',
    englishMeaning: 'To the Goddess who abides in all beings in the form of power/energy, salutations, salutations, salutations to Her over and over again.',
    symbolismAndSignificance: 'Empowerment and honoring the Divine Feminine energy inherent in all existence.'
  },
  {
    id: 'pur-skanda-001',
    globalSequenceNumber: 5,
    puranaName: 'स्कन्द पुराण',
    puranaNameEnglish: 'Skanda Purana',
    chapterSection: 'काशी खण्ड',
    sanskritPassage: 'तीर्थानि नद्यो गिरयो वनानि... (तीर्थ महिमा)',
    transliteration: 'tīrthāni nadyo girayo vanāni...',
    storyNarrative: 'Glorification of sacred geography.',
    hindiMeaning: 'भारत भूमि के सभी तीर्थ, नदियाँ और पर्वत पवित्र हैं।',
    englishMeaning: 'All the pilgrimage sites, rivers, and mountains of the land are sacred.',
    symbolismAndSignificance: 'Instills a deep ecological reverence for nature as a manifestation of the divine.'
  }
];

// ─────────────── 7. BHARATIYA BHASHA (DAILY 3 WORDS) ───────────────
export interface BhashaDiscoverySet {
  id: string;
  globalSequenceNumber: number;
  dayIndex: number;
  sanskritWord: {
    word: string; // Sanskrit Devanagari
    transliteration: string;
    root: string; // Dhatu/Root
    meaningHindi: string;
    englishMeaning: string;
    usageExample: string;
    etymologicalInsight: string;
  };
  awadhiWord: {
    word: string;
    transliteration: string;
    meaningHindi: string;
    englishMeaning: string;
    folkContext: string;
    usageExample: string;
  };
  regionalWord: {
    language: 'Tamil' | 'Telugu' | 'Kannada' | 'Malayalam' | 'Bengali' | 'Marathi' | 'Gujarati' | 'Punjabi' | 'Odia' | 'Assamese';
    originalScriptWord: string;
    transliteration: string;
    meaningHindi: string;
    englishMeaning: string;
    culturalContext: string;
    exampleSentence: string;
  };
}

export const BHASHA_DISCOVERY_SETS: BhashaDiscoverySet[] = [
  {
    id: 'bhasha-set-001',
    globalSequenceNumber: 1,
    dayIndex: 1,
    sanskritWord: {
      word: 'तितिक्षा (Titiksha)',
      transliteration: 'Titikṣā',
      root: 'तिज् (tij) - to endure, sharpen, bear calmly',
      meaningHindi: 'शीत-उष्ण, सुख-दुःख आदि द्वंद्वों को बिना विलाप किए धैर्यपूर्वक सहन करने की मानसिक शक्ति।',
      englishMeaning: 'Spiritual and mental endurance; the ability to bear hardships, heat, cold, and adversity without complaint or mental agitation.',
      usageExample: 'सहनशीलता केवल विवशता नहीं, अपितु तितिक्षा के रूप में एक महान आंतरिक बल है।',
      etymologicalInsight: 'In Vedanta philosophy, Titiksha is one of the six essential treasures (Shat-Sampat) required for deep intellectual clarity.'
    },
    awadhiWord: {
      word: 'सनेह (Saneh)',
      transliteration: 'Saneha',
      meaningHindi: 'निःस्वार्थ प्रेम, आत्मीयता, स्नेह।',
      englishMeaning: 'Selfless love, warmth, deep emotional bond.',
      folkContext: 'Common in Ramcharitmanas and Awadhi folk songs celebrating spontaneous, uncalculated love.',
      usageExample: 'अवध के लोगन मा आजुहुँ पुरान सनेह बसत है। (The people of Awadh still carry that timeless warmth in their hearts.)'
    },
    regionalWord: {
      language: 'Tamil',
      originalScriptWord: 'அகம் (Agam)',
      transliteration: 'Agam',
      meaningHindi: 'आंतरिक संसार, अंतर्मन, हृदय, प्रेम की अंतर्यात्रा।',
      englishMeaning: 'The interior realm; inner consciousness; the private, emotional life of the soul in Sangam literature.',
      culturalContext: 'Ancient Tamil Sangam poetry is divided into Agam (interior poetry of the heart) and Puram (exterior poetry of valor and society).',
      exampleSentence: 'Agam represents the timeless spiritual landscape of the human heart in Tamil classics.'
    }
  },
  {
    id: 'bhasha-set-002',
    globalSequenceNumber: 2,
    dayIndex: 2,
    sanskritWord: {
      word: 'प्रसाद (Prasada)',
      transliteration: 'Prasāda',
      root: 'प्र + सद् (pra + sad) - to settle down, clarify, become serene',
      meaningHindi: 'चित्त की निर्मलता, शांति, प्रसन्नता तथा अनुग्रह।',
      englishMeaning: 'Serenity, mental clarity, tranquility, and divine grace.',
      usageExample: 'प्रसादे सर्वदुःखानां हानिरस्योपजायते (When the mind attains Prasada/clarity, all sorrow dissolves).',
      etymologicalInsight: 'Before meaning food offered in a temple, Prasada originally meant the transparent, undisturbed settlement of the mind like clear water.'
    },
    awadhiWord: {
      word: 'अन्हारे (Anhaare)',
      transliteration: 'Anhaare',
      meaningHindi: 'अंधेरे में, भोर से पहले का समय।',
      englishMeaning: 'In the twilight before dawn; in the early morning darkness.',
      folkContext: 'Used by rural farmers and poets to describe waking before dawn to begin purposeful labor.',
      usageExample: 'किसान अन्हारे उठि कै खेतन क ओर चलि पड़े। (The farmers woke up in the pre-dawn darkness and walked toward the fields.)'
    },
    regionalWord: {
      language: 'Bengali',
      originalScriptWord: 'আড্ডা (Adda)',
      transliteration: 'Adda',
      meaningHindi: 'मित्रों की अनौपचारिक, बौद्धिक और आत्मीय गपशप।',
      englishMeaning: 'An informal, unhurried conversation or intellectual gathering among friends over tea.',
      culturalContext: 'A legendary social institution of Kolkata culture, blending literature, politics, cinema, and philosophy.',
      exampleSentence: 'An evening adda at the Coffee House in College Street is the quintessential Bengali cultural experience.'
    }
  },
  {
    id: 'bhasha-set-003',
    globalSequenceNumber: 3,
    dayIndex: 3,
    sanskritWord: {
      word: 'जिज्ञासा (Jigyasa)',
      transliteration: 'Jijñāsā',
      root: 'ज्ञा (jna) - to know',
      meaningHindi: 'जानने की तीव्र इच्छा।',
      englishMeaning: 'Deep curiosity; the desire to know.',
      usageExample: 'ब्रह्म जिज्ञासा (The desire to know the Ultimate Truth).',
      etymologicalInsight: 'The first sutra of Brahma Sutras begins with "Athato Brahma Jijnasa".'
    },
    awadhiWord: {
      word: 'गोहार (Gohaar)',
      transliteration: 'Gohaar',
      meaningHindi: 'सहायता के लिए पुकार।',
      englishMeaning: 'A call for help or justice.',
      folkContext: 'Often used when appealing to a king or God for mercy.',
      usageExample: 'गरीब किसान राजा से गोहार लगावत है।'
    },
    regionalWord: {
      language: 'Marathi',
      originalScriptWord: 'जिव्हाळा (Jivhala)',
      transliteration: 'Jivhala',
      meaningHindi: 'अत्यंत गहरा स्नेह।',
      englishMeaning: 'Deep emotional attachment and empathy.',
      culturalContext: 'Used to describe the unconditional love a mother has for her child.',
      exampleSentence: 'Aai cha jivhala.'
    }
  },
  {
    id: 'bhasha-set-004',
    globalSequenceNumber: 4,
    dayIndex: 4,
    sanskritWord: {
      word: 'कृतज्ञता (Kritagyata)',
      transliteration: 'Kṛtajñatā',
      root: 'कृ (to do) + ज्ञा (to know)',
      meaningHindi: 'किए गए उपकार को मानना, आभार।',
      englishMeaning: 'Gratitude, remembering favors done by others.',
      usageExample: 'कृतज्ञता मनुष्य का सबसे बड़ा आभूषण है।',
      etymologicalInsight: 'Knowing (jna) what has been done (krita) for oneself.'
    },
    awadhiWord: {
      word: 'असीस (Asees)',
      transliteration: 'Asees',
      meaningHindi: 'आशीर्वाद।',
      englishMeaning: 'Blessing.',
      folkContext: 'Elders giving blessings to the young.',
      usageExample: 'माई का असीस हमेशा साथ रहै।'
    },
    regionalWord: {
      language: 'Gujarati',
      originalScriptWord: 'મમતા (Mamata)',
      transliteration: 'Mamata',
      meaningHindi: 'माँ का प्रेम।',
      englishMeaning: 'Motherly love, affection.',
      culturalContext: 'Deep affection without expectations.',
      exampleSentence: 'Mata ni mamata.'
    }
  },
  {
    id: 'bhasha-set-005',
    globalSequenceNumber: 5,
    dayIndex: 5,
    sanskritWord: {
      word: 'करुणा (Karuna)',
      transliteration: 'Karuṇā',
      root: 'कृ (to do) - feeling moved to act',
      meaningHindi: 'दूसरों का दुःख देखकर उत्पन्न होने वाली दया।',
      englishMeaning: 'Compassion, empathy in action.',
      usageExample: 'भगवान बुद्ध करुणा के सागर थे।',
      etymologicalInsight: 'Unlike pity, Karuna involves an active desire to relieve others\' suffering.'
    },
    awadhiWord: {
      word: 'पिरितिया (Piritiya)',
      transliteration: 'Piritiya',
      meaningHindi: 'प्रेम, प्रीत।',
      englishMeaning: 'Love, deep affection.',
      folkContext: 'Folk songs describing sweet, rustic romance.',
      usageExample: 'तोसे लागी पिरितिया हमार।'
    },
    regionalWord: {
      language: 'Telugu',
      originalScriptWord: 'సంతోషం (Santhosham)',
      transliteration: 'Santhosham',
      meaningHindi: 'ख़ुशी, आनंद।',
      englishMeaning: 'Happiness, joy.',
      culturalContext: 'Common greeting and expression of joy.',
      exampleSentence: 'Chala santhosham.'
    }
  }
];

// ─────────────── 8. HINDI VYAKARAN (DAILY PROGRESSIVE GRAMMAR) ───────────────
export interface HindiVyakaranEntry {
  id: string;
  globalSequenceNumber: number;
  dayIndex: number;
  conceptTitle: string; // e.g. 'वर्ण विचार', 'संधि', 'समास', 'कारक'
  category: 'ध्वनि एवं वर्ण' | 'शब्द रचना' | 'पद विचार' | 'वाक्य विन्यास' | 'काव्य शास्त्र एवं अलंकार' | 'भाषा शुद्धि';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  simpleExplanation: string;
  rulesAndFormulas: string[];
  examples: { original: string; breakdown: string; meaning: string }[];
  commonMistakes: { incorrect: string; correct: string; reason: string }[];
  interactiveMiniQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  linguisticFact: string; // One fascinating linguistic insight
}

export const HINDI_VYAKARAN_ENTRIES: HindiVyakaranEntry[] = [
  {
    id: 'vyakaran-001',
    globalSequenceNumber: 1,
    dayIndex: 1,
    conceptTitle: 'स्वर और व्यंजन (Vowels & Consonants)',
    category: 'ध्वनि एवं वर्ण',
    difficulty: 'Beginner',
    simpleExplanation: 'ध्वनि भाषा की सबसे छोटी इकाई है। जिन ध्वनियों के उच्चारण में किसी अन्य वर्ण की सहायता नहीं लेनी पड़ती, उन्हें \'स्वर\' (Vowels) कहते हैं। जिन ध्वनियों का उच्चारण स्वरों की सहायता से होता है, वे \'व्यंजन\' (Consonants) कहलाते हैं।',
    rulesAndFormulas: [
      'ह्रस्व स्वर (Short Vowels): अ, इ, उ, ऋ (1 मात्रा)',
      'दीर्घ स्वर (Long Vowels): आ, ई, ऊ, ए, ऐ, ओ, औ (2 मात्राएं)',
      'स्पर्श व्यंजन: क-वर्ग से प-वर्ग तक (25 वर्ण)',
      'अन्तःस्थ: य, र, ल, व | ऊष्म: श, ष, स, ह'
    ],
    examples: [
      { original: 'कमल', breakdown: 'क् + अ + म् + अ + ल् + अ', meaning: 'तीन व्यंजनों और तीन स्वरों का संयोजन' },
      { original: 'ज्ञान', breakdown: 'ज् + ञ् + आ + न् + अ', meaning: '\'ज्ञ\' एक संयुक्त व्यंजन (ज् + ञ्) है' }
    ],
    commonMistakes: [
      {
        incorrect: 'ज्ञ का उच्चारण \'ग्य\' समझकर ग + य लिखना',
        correct: 'ज्ञ = ज् + ञ् (शुद्ध रूप)',
        reason: 'मानक हिंदी में व्यावहारिक उच्चारण \'ग्य\' जैसा हो गया है, किन्तु इसका मूल व्याकरणिक निर्माण ज् + ञ् है।'
      }
    ],
    interactiveMiniQuiz: {
      question: 'निम्न में से कौन-सा वर्ण \'दीर्घ स्वर\' है?',
      options: ['अ', 'इ', 'ई', 'ऋ'],
      correctIndex: 2,
      explanation: '\'ई\' दीर्घ स्वर है, जिसके उच्चारण में ह्रस्व स्वर (इ) से दोगुना समय लगता है।'
    },
    linguisticFact: 'देवनागरी लिपि दुनिया की सबसे वैज्ञानिक ध्वन्यात्मक (phonetic) लिपियों में से एक है। इसमें प्रत्येक वर्ण मुख के उच्चारण-स्थान (कंठ, तालु, मूर्धा, दंत, ओष्ठ) के अनुसार अत्यंत सुव्यवस्थित रूप से वर्गीकृत है।'
  },
  {
    id: 'vyakaran-002',
    globalSequenceNumber: 2,
    dayIndex: 2,
    conceptTitle: 'स्वर संधि - दीर्घ संधि (Dirgha Sandhi)',
    category: 'शब्द रचना',
    difficulty: 'Intermediate',
    simpleExplanation: 'दो समीपवर्ती वर्णों के मेल से जो विकार (परिवर्तन) होता है, उसे \'संधि\' कहते हैं। जब दो समान ह्रस्व या दीर्घ स्वर आपस में मिलते हैं, तो वे मिलकर \'दीर्घ स्वर\' बन जाते हैं। इसे \'दीर्घ संधि\' कहते हैं।',
    rulesAndFormulas: [
      'अ / आ + अ / आ = आ (उदा. विद्या + आलय = विद्यालय)',
      'इ / ई + इ / ई = ई (उदा. गिरि + ईश = गिरीश)',
      'उ / ऊ + उ / ऊ = ऊ (उदा. भानु + उदय = भानूदय)'
    ],
    examples: [
      { original: 'हिमालय', breakdown: 'हिम + आलय (अ + आ = आ)', meaning: 'बर्फ का घर' },
      { original: 'कवीन्द्र', breakdown: 'कवि + इन्द्र (इ + इ = ई)', meaning: 'कवियों में श्रेष्ठ' },
      { original: 'लघूर्मि', breakdown: 'लघु + ऊर्मि (उ + ऊ = ऊ)', meaning: 'छोटी लहर' }
    ],
    commonMistakes: [
      {
        incorrect: 'रवि + इन्द्र = रविन्द्र (गलत)',
        correct: 'रवि + इन्द्र = रवीन्द्र (शुद्ध)',
        reason: 'ह्रस्व \'इ\' और \'इ\' मिलकर दीर्घ \'ई\' का निर्माण करते हैं, अतः व में बड़ी \'ई\' की मात्रा (वी) लगेगी।'
      }
    ],
    interactiveMiniQuiz: {
      question: '\'सूर्य + उदय\' में कौन-सी संधि है?',
      options: ['दीर्घ संधि', 'गुण संधि', 'वृद्धि संधि', 'यण संधि'],
      correctIndex: 1,
      explanation: '\'सूर्य (अ) + उदय (उ) = सूर्योदय (ओ)\' यह गुण संधि का नियम है (अ/आ + उ/ऊ = ओ)।'
    },
    linguisticFact: 'संस्कृत और हिंदी की संधियों के नियम प्राचीन गणितीय एल्गोरिदम की तरह सटीक हैं। पाणिनी की अष्टाध्यायी में संधियों के नियम आधुनिक कंप्यूटर कंपाइलर के पार्सिंग नियमों से 2500 वर्ष पूर्व मेल खाते हैं।'
  },
  {
    id: 'vyakaran-003',
    globalSequenceNumber: 3,
    dayIndex: 3,
    conceptTitle: 'समास - द्वन्द्व समास (Dvandva Samas)',
    category: 'शब्द रचना',
    difficulty: 'Intermediate',
    simpleExplanation: 'जिस समास में दोनों पद प्रधान हों और विग्रह करने पर \'और\', \'तथा\', \'या\' आदि योजक शब्द आएं।',
    rulesAndFormulas: [
      'दोनों पदों की प्रधानता',
      'योजक चिह्न (-) का प्रयोग'
    ],
    examples: [
      { original: 'माता-पिता', breakdown: 'माता और पिता', meaning: 'दोनों का समान महत्त्व' }
    ],
    commonMistakes: [
      { incorrect: 'माता पिता', correct: 'माता-पिता', reason: 'योजक चिह्न लगाना आवश्यक है।' }
    ],
    interactiveMiniQuiz: {
      question: '\'दिन-रात\' में कौन सा समास है?',
      options: ['अव्ययीभाव', 'तत्पुरुष', 'द्वन्द्व', 'बहुव्रीहि'],
      correctIndex: 2,
      explanation: 'इसमें दोनों पद प्रधान हैं और विग्रह \'दिन और रात\' होगा।'
    },
    linguisticFact: 'द्वन्द्व का अर्थ है जोड़ा। यह भाषा में संतुलन दर्शाता है।'
  },
  {
    id: 'vyakaran-004',
    globalSequenceNumber: 4,
    dayIndex: 4,
    conceptTitle: 'संज्ञा (Noun)',
    category: 'पद विचार',
    difficulty: 'Beginner',
    simpleExplanation: 'किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।',
    rulesAndFormulas: [
      'व्यक्तिवाचक (Proper)',
      'जातिवाचक (Common)',
      'भाववाचक (Abstract)'
    ],
    examples: [
      { original: 'राम', breakdown: 'व्यक्ति का नाम', meaning: 'व्यक्तिवाचक संज्ञा' }
    ],
    commonMistakes: [
      { incorrect: 'मिठास वस्तु है', correct: 'मिठास भाव है', reason: 'भाववाचक संज्ञा अमूर्त होती है।' }
    ],
    interactiveMiniQuiz: {
      question: '\'सुंदरता\' कौन सी संज्ञा है?',
      options: ['व्यक्तिवाचक', 'जातिवाचक', 'भाववाचक', 'समूहवाचक'],
      correctIndex: 2,
      explanation: 'सुंदरता एक भाव है।'
    },
    linguisticFact: 'भाववाचक संज्ञाएं प्रत्यय जोड़कर भी बनती हैं जैसे सुंदर + ता।'
  },
  {
    id: 'vyakaran-005',
    globalSequenceNumber: 5,
    dayIndex: 5,
    conceptTitle: 'सर्वनाम (Pronoun)',
    category: 'पद विचार',
    difficulty: 'Beginner',
    simpleExplanation: 'संज्ञा के स्थान पर प्रयुक्त होने वाले शब्दों को सर्वनाम कहते हैं।',
    rulesAndFormulas: [
      'पुरुषवाचक',
      'निश्चयवाचक',
      'अनिश्चयवाचक'
    ],
    examples: [
      { original: 'वह', breakdown: 'अन्य पुरुष', meaning: 'किसी तीसरे व्यक्ति के लिए' }
    ],
    commonMistakes: [
      { incorrect: 'मैं ने काम कर लिया', correct: 'मैंने काम कर लिया', reason: 'कारक चिह्न सर्वनाम से जुड़कर लिखे जाते हैं।' }
    ],
    interactiveMiniQuiz: {
      question: '\'कोई\' कौन सा सर्वनाम है?',
      options: ['निश्चयवाचक', 'अनिश्चयवाचक', 'प्रश्नवाचक', 'निजवाचक'],
      correctIndex: 1,
      explanation: 'कोई निश्चित व्यक्ति का बोध नहीं कराता।'
    },
    linguisticFact: 'हिंदी में सर्वनाम के साथ कारक चिह्न मिलाकर लिखे जाते हैं (जैसे- उसने, मुझको)।'
  }
];

export const RAMAYAN_CORPUS_COUNT = RAMAYAN_CHAUPAIS.length;
export const GITA_CORPUS_COUNT = GITA_SHLOKAS.length;
export const MAHABHARAT_CORPUS_COUNT = MAHABHARAT_ENTRIES.length;
export const UPANISHAD_CORPUS_COUNT = UPANISHAD_ENTRIES.length;
export const VEDA_CORPUS_COUNT = VEDA_DAILY_SETS.length;
export const PURANA_CORPUS_COUNT = PURANA_ENTRIES.length;
export const BHASHA_CORPUS_COUNT = BHASHA_DISCOVERY_SETS.length;
export const VYAKARAN_CORPUS_COUNT = HINDI_VYAKARAN_ENTRIES.length;
