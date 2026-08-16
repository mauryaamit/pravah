// src/app/(app)/vani/data-heritage.ts
// Comprehensive Indian Knowledge & Language Models & Datasets for Vani Room
// Covering: Ramayan (Complete Chaupai), Bhagavad Gita (Sequential Journey),
// Mahabharat, Upanishads, Vedas (4 daily selections), Puranas,
// Bharatiya Bhasha (Sanskrit, Awadhi, Regional), and Hindi Vyakaran.

// ─────────────── 1. RAMAYANA (COMPLETE CHAUPAI) ───────────────
export interface RamayanChaupaiEntry {
  id: string;
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
    id: 'ram-1',
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
    id: 'ram-2',
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
    id: 'ram-3',
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
  }
];

// ─────────────── 2. BHAGAVAD GITA (SEQUENTIAL SHLOKA JOURNEY) ───────────────
export interface GitaShlokaEntry {
  sequenceNumber: number; // 1 to 700 (Sequential Journey)
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
    sequenceNumber: 1,
    chapter: 1,
    verse: 1,
    chapterNameSanskrit: 'अर्जुनविषादयोग',
    chapterNameHindi: 'अर्जुन का विषाद योग',
    chapterNameEnglish: 'The Yoga of Arjuna\'s Dejection',
    shlokaSanskrit: `धृतराष्ट्र उवाच
धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।
मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥`,
    transliterationIAST: `dhṛtarāṣṭra uvāca
dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ |
māmakāḥ pāṇḍavāś caiva kim akurvata sañjaya ||`,
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
    sequenceNumber: 47,
    chapter: 2,
    verse: 47,
    chapterNameSanskrit: 'साङ्ख्ययोग',
    chapterNameHindi: 'सांख्य योग (ज्ञान एवं कर्मयोग)',
    chapterNameEnglish: 'The Yoga of Knowledge and Action',
    shlokaSanskrit: `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥`,
    transliterationIAST: `karmaṇy evādhikāras te mā phaleṣu kadācana |
mā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi ||`,
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
    philosophicalCommentary: 'This is the crown jewel of Nishkama Karma Yoga. Krishna deconstructs the psychology of human anxiety: anxiety arises when our attention is split between the effort (which is in our control) and the outcome (which depends on countless external variables). By dedicating 100% of our energy to the act itself without being paralyzed by expectations, work transforms into a meditative art.',
    modernPracticalApplication: 'When preparing for a presentation, an exam, or building a startup, obsessing over whether you will be praised or rejected drains your cognitive bandwidth. Focus entirely on the craft and preparation in front of you. True mastery is outcome-independent excellence.',
    keySanskritConcepts: [
      { term: 'अधिकार (Adhikara)', meaning: 'Your sovereign sphere of agency and responsibility' },
      { term: 'अकर्म (Akarma)', meaning: 'Inaction, apathy, or giving up on duty out of fear of failure' },
      { term: 'निष्काम कर्म (Nishkama Karma)', meaning: 'Selfless, focused action free from selfish clinging to fruits' }
    ]
  },
  {
    sequenceNumber: 48,
    chapter: 2,
    verse: 48,
    chapterNameSanskrit: 'साङ्ख्ययोग',
    chapterNameHindi: 'सांख्य योग',
    chapterNameEnglish: 'The Yoga of Knowledge and Action',
    shlokaSanskrit: `योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।
सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥`,
    transliterationIAST: `yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya |
siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate ||`,
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
  }
];

// ─────────────── 3. MAHABHARAT ───────────────
export interface MahabharatEntry {
  id: string;
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
    id: 'mb-1',
    parva: 'शान्तिपर्व',
    parvaEnglish: 'Shanti Parva',
    chapterReference: 'अध्याय 109, श्लोक 10-11',
    sanskritText: `धारणाद्धर्ममित्याहुर्धर्मो धारयते प्रजाः।
यत्स्याद्धारणसंयुक्तं स धर्म इति निश्चयः॥
न हि सत्यात्परो धर्मो नानृतात्पातकं परम्।`,
    transliteration: `Dhāraṇād dharmam ity āhur dharmo dhārayate prajāḥ |
Yat syād dhāraṇa-saṁyuktaṁ sa dharma iti niścayaḥ ||
Na hi satyāt paro dharmo nānṛtāt pātakaṁ param |`,
    charactersInvolved: ['Bhishma Pitamah', 'Yudhishthira'],
    context: 'Lying on the bed of arrows in Shanti Parva, Grandfather Bhishma instructs King Yudhishthira on the true cosmic definition of Dharma and the foundation of statecraft.',
    hindiMeaning: 'धर्म शब्द \'धृ\' (धारण करना) धातु से बना है। जो समाज, प्रजा और सम्पूर्ण सृष्टि को परस्पर धारण करता है, संतुलित रखता है, वही धर्म है। सत्य से बड़ा कोई दूसरा धर्म नहीं है, और असत्य व कपट से बड़ा कोई दूसरा पाप नहीं है।',
    englishMeaning: 'Dharma is derived from the root \'dhṛ\' (to sustain or uphold). That which sustains humanity, preserves social harmony, and protects the integrity of existence is Dharma. There is no higher virtue than Truth, and no greater transgression than falsehood.',
    ethicalDilemma: 'In times of severe political crisis, leaders often justify deception for short-term gain. Bhishma asserts that any institution built upon falsehood will inevitably collapse under its own structural deceit.',
    modernReflection: 'Institutions, corporations, and relationships survive only as long as they possess "Dharana"—the mutual trust and structural truth that holds them together. The moment deceit becomes systemic, the organization loses its Dharma and disintegrates.'
  },
  {
    id: 'mb-2',
    parva: 'उद्योगपर्व',
    parvaEnglish: 'Udyoga Parva',
    chapterReference: 'विदुर नीति, अध्याय 33',
    sanskritText: `आत्मज्ञानं समारम्भस्तितिक्षा धर्मनित्यता।
यमर्था नापकर्षन्ति स वै पण्डित उच्यते॥`,
    transliteration: `Ātma-jñānaṁ samārambhas titikṣā dharma-nityatā |
Yam arthā nāpakarṣanti sa vai paṇḍita ucyate ||`,
    charactersInvolved: ['Mahatma Vidura', 'King Dhritarashtra'],
    context: 'In Vidura Niti, Mahatma Vidura counsels King Dhritarashtra on the authentic qualities of a truly wise person (Pandita) as the dark clouds of war loom over Hastinapur.',
    hindiMeaning: 'जिस व्यक्ति को आत्मज्ञान (अपनी शक्तियों और सीमाओं का यथार्थ बोध) हो, जो निष्ठापूर्वक कर्म का आरम्भ करता हो, जिसमें सहनशीलता (तितिक्षा) हो, और जो निरंतर धर्म पर अडिग रहे—जिसके मन को भोग-विलास विचलित न कर सकें, वही वास्तव में \'पण्डित\' (ज्ञानी) कहलाता है।',
    englishMeaning: 'He who possesses self-knowledge, who initiates endeavors with thorough preparation, who practices endurance, remains steadfast in righteousness, and whose mind is never swayed by superficial desires—he alone is truly wise.',
    ethicalDilemma: 'Dhritarashtra possesses intellect, but lacks Titiksha (endurance against emotional weakness for his son Duryodhana). Vidura highlights that knowledge without emotional self-mastery leads to catastrophe.',
    modernReflection: 'Being educated or holding high degrees does not make someone wise. A truly wise professional knows their boundaries, starts projects with discipline, endures hardship without panic, and refuses to compromise core ethics for convenience.'
  }
];

// ─────────────── 4. UPANISHADS ───────────────
export interface UpanishadEntry {
  id: string;
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
    id: 'up-1',
    upanishadName: 'ईशावास्योपनिषद्',
    upanishadNameEnglish: 'Isha Upanishad',
    mantraReference: 'मन्त्र 1',
    sanskritMantra: `ॐ ईशा वास्यमिदँ सर्वं यत्किञ्च जगत्यां जगत्।
तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥`,
    transliterationIAST: `oṁ īśā vāsyam idaṁ sarvaṁ yat kiñca jagatyāṁ jagat |
tena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam ||`,
    hindiMeaning: 'इस गतिशील और नश्वर जगत् में जो कुछ भी दृश्यमान है, वह सब ईश्वर से व्याप्त (आच्छादित) है। अतः त्यागभाव से इस संसार का उपभोग करो; किसी अन्य के धन या सम्पत्ति पर आसक्ति अथवा लोभ मत करो।',
    englishMeaning: 'All this—whatever moves and breathes in this transient universe—is enveloped and permeated by the Supreme Divine. Enjoy life through conscious detachment and renunciation. Do not covet the wealth of anyone.',
    vedanticSignificance: 'The foundational verse of Advaita Vedanta. It reconciles living in the world with spiritual detachment: enjoy the world with gratitude, but remember you are a trustee, not an absolute owner.',
    keyConcepts: [
      { concept: 'ईशा वास्यम् (Isha Vasyam)', meaning: 'Permeated, enveloped, and animated by the Divine Consciousness' },
      { concept: 'तेन त्यक्तेन भुञ्जीथाः (Tena Tyaktena Bhunjitha)', meaning: 'Enjoy with a spirit of non-possessive detachment' }
    ]
  },
  {
    id: 'up-2',
    upanishadName: 'मुण्डकोपनिषद्',
    upanishadNameEnglish: 'Mundaka Upanishad',
    mantraReference: 'तृतीय मुण्डक, प्रथम खण्ड, मन्त्र 6',
    sanskritMantra: `सत्यमेव जयते नानृतं
सत्येन पन्था विततो देवयानः।
येनाक्रमन्त्यृषयो ह्याप्तकामा
यत्र तत् सत्यस्य परमं निधानम्॥`,
    transliterationIAST: `satyameva jayate nānṛtaṁ
satyena panthā vitato devayānaḥ |
yenākramanty ṛṣayo hy āptakāmā
yatra tat satyasya paramaṁ nidhānam ||`,
    hindiMeaning: 'सत्य की ही सदा विजय होती है, असत्य की नहीं। सत्य के द्वारा ही देवयान (परम प्रकाश का मार्ग) का विस्तार होता है, जिस मार्ग पर चलकर निष्काम ऋषिजन उस सत्य के परम धाम तक पहुँचते हैं।',
    englishMeaning: 'Truth alone triumphs, not falsehood. Through Truth alone is the divine path paved, along which the sages whose desires are fulfilled ascend to the supreme treasure-house of Truth.',
    vedanticSignificance: 'India\'s national motto "Satyameva Jayate" originates from this sublime Vedic mantra. Truth (Satya) is not merely moral honesty; it is the eternal, unchanging fabric of Brahman (Ultimate Reality).',
    keyConcepts: [
      { concept: 'सत्यमेव जयते (Satyameva Jayate)', meaning: 'Truth alone prevails over the illusions of time' },
      { concept: 'आपत्कामाः (Aptakama)', meaning: 'Those whose desires have dissolved through self-realization' }
    ]
  },
  {
    id: 'up-3',
    upanishadName: 'बृहदारण्यकोपनिषद्',
    upanishadNameEnglish: 'Brihadaranyaka Upanishad',
    mantraReference: 'अध्याय 1, ब्राह्मण 3, मन्त्र 28 (शान्ति मन्त्र)',
    sanskritMantra: `ॐ असतो मा सद्गमय।
तमसो मा ज्योतिर्गमय।
मृत्योर्मा अमृतं गमय।
ॐ शान्तिः शान्तिः शान्तिः॥`,
    transliterationIAST: `oṁ asato mā sad gamaya |
tamaso mā jyotir gamaya |
mṛtyor mā amṛtaṁ gamaya |
oṁ śāntiḥ śāntiḥ śāntiḥ ||`,
    hindiMeaning: 'हे परम चैतन्य! मुझे असत्य और अवास्तविकता से सत्य की ओर ले चलें। मुझे अज्ञान के अंधकार से ज्ञान के प्रकाश की ओर ले चलें। मुझे मृत्यु (नश्वरता) से अमरत्व की ओर ले चलें।',
    englishMeaning: 'Lead me from the unreal to the Real. Lead me from the darkness of ignorance to the Light of understanding. Lead me from the fear of mortality to the nectar of Immortality. Om Peace, Peace, Peace.',
    vedanticSignificance: 'The universal prayer of human consciousness longing for transcendence: shifting from fleeting material forms (Asat) to eternal conscious presence (Sat).',
    keyConcepts: [
      { concept: 'असत् से सत् (Asat to Sat)', meaning: 'From transient illusion to immutable Truth' },
      { concept: 'तमस् से ज्योति (Tamas to Jyoti)', meaning: 'From cognitive darkness to inner illumination' }
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
  dayIndex: number;
  rigveda: SingleVedaSelection;
  yajurveda: SingleVedaSelection;
  samaveda: SingleVedaSelection;
  atharvaveda: SingleVedaSelection;
}

export const VEDA_DAILY_SETS: DailyVedaSet[] = [
  {
    dayIndex: 1,
    rigveda: {
      veda: 'ऋग्वेद',
      vedaEnglish: 'Rigveda',
      referenceType: 'ऋचा / सूक्त',
      referenceNumber: 'मण्डल 10, सूक्त 191, मन्त्र 2 (संज्ञान सूक्त)',
      sanskritText: `सङ्गच्छध्वं संवदध्वं सं वो मनांसि जानताम्।
देवा भागं यथा पूर्वे सञ्जानाना उपासते॥`,
      transliterationIAST: `saṅgacchadhvaṁ saṁvadadhvaṁ saṁ vo manāṁsi jānatām |
devā bhāgaṁ yathā pūrve sañjānānā upāsate ||`,
      hindiMeaning: 'तुम सब साथ चलो (एक साथ प्रगति करो), एक स्वर में बोलो, और तुम्हारे मन एक समान होकर सत्य को जानें। जैसे प्राचीन काल में ज्ञानी देवगण एकमत होकर अपना कर्तव्य निभाते थे।',
      englishMeaning: 'Assemble together, speak with one coherent voice, and let your minds unite in mutual understanding, even as the enlightened beings of ancient times lived in harmonious co-operation.',
      significance: 'The Samjnana Sukta is humanity\'s oldest recorded manifesto for democratic solidarity, collective wisdom, and mutual empathy.'
    },
    yajurveda: {
      veda: 'यजुर्वेद',
      vedaEnglish: 'Yajurveda',
      referenceType: 'मन्त्र / कण्डिका',
      referenceNumber: 'शुक्ल यजुर्वेद, अध्याय 36, मन्त्र 17 (शान्ति मन्त्र)',
      sanskritText: `द्यौः शान्तिरन्तरिक्षँ शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः।
वनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः सर्वँ शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि॥`,
      transliterationIAST: `dyauḥ śāntir antarikṣaṁ śāntiḥ pṛthivī śāntir āpaḥ śāntir oṣadhayaḥ śāntiḥ |
vanaspatayaḥ śāntir viśvedevāḥ śāntir brahma śāntiḥ sarvaṁ śāntiḥ śāntir eva śāntiḥ sā mā śāntir edhi ||`,
      hindiMeaning: 'द्युलोक (आकाश) में शान्ति हो, अन्तरिक्ष में शान्ति हो, पृथ्वी पर शान्ति हो, जल में शान्ति हो, औषधियों और वनस्पतियों में शान्ति हो, समस्त चराचर ब्रह्माण्ड में शान्ति हो—वह परम शान्ति मेरे हृदय में भी स्थापित हो।',
      englishMeaning: 'May peace radiate in the celestial spheres, peace in the atmosphere, peace on earth, peace in the waters, peace in healing herbs and forests. May supreme peace prevail in all cosmic powers and within my own being.',
      significance: 'A majestic ecological and cosmic prayer recognizing that human inner peace is inextricably linked with environmental harmony.'
    },
    samaveda: {
      veda: 'सामवेद',
      vedaEnglish: 'Samaveda',
      referenceType: 'साम / गान',
      referenceNumber: 'आर्चिक 1.1.1 (अग्नि स्तवन)',
      sanskritText: `अग्न आ याहि वीतये गृणानो हव्यदातये।
नि होता सत्सि बर्हिषि॥`,
      transliterationIAST: `agna ā yāhi vītaye gṛṇāno havya-dātaye |
ni hotā satsi barhiṣi ||`,
      hindiMeaning: 'हे दिव्य प्रकाश स्वरूप अग्निदेव! हमारी स्तुतियों से प्रसन्न होकर यज्ञीय आहुति को स्वीकार करने के लिए पधारें, और इस पवित्र कुशासन पर विराजें।',
      englishMeaning: 'O Radiant Divine Agni, invoked by our grateful songs, arrive to accept the dedicated offerings and be seated upon the sacred altar of our hearts.',
      significance: 'Samaveda is the Veda of divine melody and liturgical song (Gana), transforming Vedic mantras into elevated sonic meditations.'
    },
    atharvaveda: {
      veda: 'अथर्ववेद',
      vedaEnglish: 'Atharvaveda',
      referenceType: 'मन्त्र / काण्ड',
      referenceNumber: 'काण्ड 12, सूक्त 1, मन्त्र 12 (भूमि सूक्त)',
      sanskritText: `माता भूमिः पुत्रो अहं पृथिव्याः।
पर्जन्यः पिता स उ नः पिपर्तु॥`,
      transliterationIAST: `mātā bhūmiḥ putro ahaṁ pṛthivyāḥ |
parjanyaḥ pitā sa u naḥ pipartu ||`,
      hindiMeaning: 'यह पावन भूमि मेरी माता है और मैं इस पृथ्वी का पुत्र हूँ। वर्षा प्रदान करने वाले पर्जन्य (मेघ) हमारे पिता हैं, जो हमारा पालन-पोषण करें।',
      englishMeaning: 'Earth is my mother, and I am the child of this sacred Soil. The rain-bearing clouds are our nourishing father; may they sustain us with vitality.',
      significance: 'The Bhumi Sukta is the world\'s earliest eco-philosophical hymn, declaring humanity\'s filial relationship and stewardship towards the Earth.'
    }
  }
];

// ─────────────── 6. PURANAS ───────────────
export interface PuranaEntry {
  id: string;
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
    id: 'pur-1',
    puranaName: 'विष्णु पुराण',
    puranaNameEnglish: 'Vishnu Purana',
    chapterSection: 'अंश 1, अध्याय 19 (प्रह्लाद चरित्र)',
    sanskritPassage: `सर्वभूतेषु यः पश्येन्मां चैव सर्वभूतेषु।
सोऽविनाशं परं ब्रह्म याति नान्येन चेतसा॥`,
    transliteration: `sarva-bhūteṣu yaḥ paśyen māṁ caiva sarva-bhūteṣu |
so ’vināśaṁ paraṁ brahma yāti nānyena cetasā ||`,
    storyNarrative: 'When confronted by his tyrannical father Hiranyakashipu, the young devotee Prahlada refused to look upon any living creature with hatred, recognizing that the all-pervading Divine Consciousness dwells equally within friend and foe.',
    hindiMeaning: 'जो व्यक्ति समस्त प्राणियों में मुझे (परमात्मा को) देखता है और मुझमें समस्त प्राणियों को देखता है, वह एकाग्र चित्त से उस अविनाशी परब्रह्म को प्राप्त होता है।',
    englishMeaning: 'He who perceives the Divine residing within every living being, and sees all creatures resting within the Divine, attains that imperishable Supreme Truth with an unswerving mind.',
    symbolismAndSignificance: 'Prahlada symbolises innocence and unwavering clarity that triumphs over institutional tyranny and arrogance.'
  },
  {
    id: 'pur-2',
    puranaName: 'श्रीमद्भागवत पुराण',
    puranaNameEnglish: 'Shrimad Bhagavata Purana',
    chapterSection: 'स्कन्ध 11, अध्याय 7 (अवधूत के 24 गुरु)',
    sanskritPassage: `सन्तोषस्त्रिषु कर्तव्यः स्वदारे भोजने धने।
त्रिषु चैव न कर्तव्योऽध्ययने जपदानयोः॥`,
    transliteration: `santoṣas triṣu kartavyaḥ sva-dāre bhojane dhane |
triṣu caiva na kartavyo ’dhyayane japa-dānayoḥ ||`,
    storyNarrative: 'In the Uddhava Gita (11th Skandha), the Avadhuta Dattatreya explains how he derived wisdom from 24 natural teachers (including earth, wind, water, fire, and the honeybee), finding contentment in material things while remaining unquenchably curious in learning.',
    hindiMeaning: 'तीन बातों में मनुष्य को सदैव सन्तोष रखना चाहिए: जीवनसाथी, भोजन और अर्जित धन। किन्तु तीन बातों में कभी सन्तोष (विश्राम) नहीं करना चाहिए: स्वाध्याय (अध्ययन), जप (आत्म-चिन्तन) और दान (परोपकार)।',
    englishMeaning: 'One should always remain content in three things: one\'s companion, one\'s daily food, and one\'s earned wealth. But one should never rest content in three things: learning (self-study), contemplation, and selfless giving.',
    symbolismAndSignificance: 'A profound psychological formula: simplicity and contentment in material consumption paired with boundless ambition in intellectual and spiritual growth.'
  }
];

// ─────────────── 7. BHARATIYA BHASHA (DAILY 3 WORDS) ───────────────
export interface BhashaDiscoverySet {
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
      englishMeaning: 'Tender affection, unpretentious warmth, deep emotional bond.',
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
  }
];

// ─────────────── 8. HINDI VYAKARAN (DAILY PROGRESSIVE GRAMMAR) ───────────────
export interface HindiVyakaranEntry {
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
  }
];
