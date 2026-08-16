// src/app/(app)/vani/data-doha.ts
// Dedicated Doha (दोहा) Architecture and Rich Content Collection for Vani
// Features 16+ classical poets, verified texts, 4-stage contemplation disclosure,
// and comprehensive poet biographies.

export interface PoetProfile {
  id: string;
  nameDevanagari: string;
  nameEnglish: string;
  period: string; // e.g. "15वीं शताब्दी (1398 – 1518 ई.)"
  region: string; // e.g. "काशी (वाराणसी), उत्तर प्रदेश"
  tradition: string; // e.g. "संत काव्य परंपरा · ज्ञानमार्गी निर्गुण शाखा"
  majorWorks: string[];
  philosophicalIdeas: string;
  dialect: string;
  influence: string;
  recommendedReading: string;
  biography: string;
}

export type DohaTheme =
  | 'wisdom'
  | 'humility'
  | 'ego'
  | 'relationships'
  | 'love'
  | 'morality'
  | 'devotion'
  | 'human_behaviour'
  | 'impermanence'
  | 'knowledge'
  | 'compassion'
  | 'discipline'
  | 'society'
  | 'spirituality'
  | 'self_awareness';

export interface DohaEntry {
  id: string;
  sequenceNumber: number;
  dohaDevanagari: string[]; // Complete couplet lines
  transliteration: string[]; // IAST / Roman transliteration
  poetId: string;
  poetNameDevanagari: string;
  poetNameEnglish: string;
  theme: DohaTheme;
  themeHindi: string;
  languageDialect: string;
  source: string; // Classical manuscript / canon reference
  attributionConfidence: 'Verified Canonical' | 'Traditional Manuscript' | 'Oral Canon';
  hindiMeaning: string; // Simple modern Hindi
  englishMeaning: string; // English translation
  deeperInterpretation: string; // Philosophical / Psychological / Social insight
  contextBackground: string; // Historical / textual context
  importantVocabulary: { word: string; meaning: string }[];
  lifeLesson: string; // One-line memorable takeaway
}

export interface DailyDohaSet {
  dayIndex: number;
  dohas: DohaEntry[]; // 3-4 dohas per day covering diverse poets and themes
}

// ─────────────── 1. POET PROFILES (16 CLASSICAL POETS) ───────────────

export const POET_PROFILES: Record<string, PoetProfile> = {
  kabir: {
    id: 'kabir',
    nameDevanagari: 'कबीरदास',
    nameEnglish: 'Kabir Das',
    period: '15वीं शताब्दी (लगभग 1398 – 1518 ई.)',
    region: 'काशी (वाराणसी) एवं मगहर, उत्तर प्रदेश',
    tradition: 'संत काव्य परंपरा · ज्ञानमार्गी निर्गुण शाखा',
    majorWorks: ['बीजक (साखी, सबद, रमैनी)', 'कबीर ग्रंथावली', 'गुरु ग्रंथ साहिब में संकलित पद'],
    philosophicalIdeas: 'बाह्याडंबरों, जातिवाद और संकीर्ण धार्मिक पाखंडों का प्रखर खंडन; अंतरात्मा में निर्गुण राम (सर्वव्यापी चैतन्य) की अनुभूति; प्रेम और सहज समाधि का मार्ग।',
    dialect: 'सधुक्कड़ी / पंचमेल खिचड़ी (अवधी, ब्रज, भोजपुरी, राजस्थानी, पंजाबी का जीवंत सम्मिश्रण)',
    influence: 'उत्तर भारतीय समाज, मध्यकालीन भक्ति आंदोलन, सिख धर्म और आधुनिक भारतीय चेतना पर अमिट प्रभाव।',
    recommendedReading: 'हजारी प्रसाद द्विवेदी कृत "कबीर", क्षितीमोहन सेन कृत "कबीर के पद"',
    biography: 'कबीर मध्यकालीन भारत के सबसे क्रांतिकारी संत-कवि थे। उन्होंने पेशे से जुलाहा रहकर श्रम और साधना का अद्भुत समन्वय प्रस्तुत किया। उनकी भाषा में एक अदम्य फक्कड़पन और सीधी चोट करने की शक्ति है, जो सदियों से सत्य के साधकों को जाग्रत करती आ रही है।'
  },
  rahim: {
    id: 'rahim',
    nameDevanagari: 'अब्दुर्रहीम ख़ान-ए-ख़ाना (रहीम)',
    nameEnglish: 'Abdul Rahim Khan-i-Khana (Rahim)',
    period: '16वीं - 17वीं शताब्दी (1556 – 1627 ई.)',
    region: 'लाहौर, दिल्ली एवं आगरा',
    tradition: 'नीति एवं रीति काव्य परंपरा · समन्वयवादी संस्कृति',
    majorWorks: ['रहीम दोहावली', 'बरवै नायिका भेद', 'मदनाष्टक', 'नगर शोभा', 'खेटकौतुकम्'],
    philosophicalIdeas: 'लोक-व्यवहार, नीति, आत्मसम्मान, मानवीय मर्यादा, संबंधों की सूक्ष्म परख और भगवान कृष्ण के प्रति अनन्य प्रेम का समन्वय।',
    dialect: 'परिष्कृत ब्रजभाषा एवं अवधी',
    influence: 'मुगल दरबार के प्रधान सेनापति और विद्वान होते हुए भी भारतीय लोक-संस्कृति और नीति-साहित्य के अमर कवि बने।',
    recommendedReading: 'डॉ. नगेंद्र संपादित "रहीम ग्रंथावली"',
    biography: 'बैरम खां के पुत्र अब्दुल रहीम मुगल सम्राट अकबर के नवरत्नों में प्रमुख थे। वे संस्कृत, अरबी, फारसी, तुर्की, ब्रज और अवधी के प्रकांड पंडित थे। उनके दोहे आज भी भारतीय जनजीवन में व्यावहारिक बुद्धिमत्ता (worldly wisdom) के सर्वोच्च मानक माने जाते हैं।'
  },
  tulsidas: {
    id: 'tulsidas',
    nameDevanagari: 'गोस्वामी तुलसीदास',
    nameEnglish: 'Goswami Tulsidas',
    period: '16वीं शताब्दी (1532 – 1623 ई.)',
    region: 'राजापुर (चित्रकूट) एवं काशी, उत्तर प्रदेश',
    tradition: 'सगुण रामभक्ति शाखा · समन्वयवादी मर्यादावाद',
    majorWorks: ['श्रीरामचरितमानस', 'दोहावली', 'कवितावली', 'गीतावली', 'विनयपत्रिका', 'हनुमान चालीसा'],
    philosophicalIdeas: 'मर्यादा पुरुषोत्तम राम की भक्ति, धर्म, नीति, समाज-सुधार, पारिवारिक आदर्श और लोक-समन्वय की प्रतिष्ठा।',
    dialect: 'साहित्यिक अवधी एवं ब्रजभाषा',
    influence: 'भारतीय जनमानस, संस्कृति और पारिवारिक मूल्यों को सदियों से सर्वाधिक दिशा देने वाले महाकवि।',
    recommendedReading: 'रामविलास शर्मा कृत "तुलसीदास और उनका युग"',
    biography: 'गोस्वामी तुलसीदास ने संस्कृत के ज्ञान-भंडार को जनभाषा (अवधी) में ढालकर घर-घर तक पहुँचाया। उनकी \'दोहावली\' में जीवन के गूढ़ नैतिक, सामाजिक और दार्शनिक प्रश्नों का अत्यंत सहज एवं सारगर्भित विश्लेषण मिलता है।'
  },
  bihari: {
    id: 'bihari',
    nameDevanagari: 'महाकवि बिहारी लाल',
    nameEnglish: 'Bihari Lal',
    period: '17वीं शताब्दी (1595 – 1663 ई.)',
    region: 'ग्वालियर, मथुरा एवं आमेर (जयपुर), राजस्थान',
    tradition: 'रीतिसिद्ध काव्य परंपरा · शृंगार, नीति एवं भक्ति का त्रिवेणी संगम',
    majorWorks: ['बिहारी सतसई (लगभग 713 दोहे)'],
    philosophicalIdeas: '"गागर में सागर भरने" की अद्वितीय काव्य-कला; मानवीय सौंदर्य, प्रकृति के सूक्ष्म रूप, नीति-वचन और कृष्ण-भक्ति का सजीव चित्रण।',
    dialect: 'प्रांजल साहित्यिक ब्रजभाषा',
    influence: 'हिंदी मुक्तक काव्य परंपरा के सर्वोपरि शिल्पकार माने जाते हैं।',
    recommendedReading: 'जगन्नाथ दास रत्नाकर कृत "बिहारी रत्नाकर"',
    biography: 'आमेर के राजा जयसिंह के राजकवि बिहारी लाल ने केवल एक ग्रन्थ \'बिहारी सतसई\' की रचना की और अमर हो गए। उनके दोहों के बारे में प्रसिद्ध है: "सतसैया के दोहरा ज्यों नावक के तीर, देखन में छोटे लगें घाव करें गंभीर।"'
  },
  ravidas: {
    id: 'ravidas',
    nameDevanagari: 'संत रविदास (रैदास)',
    nameEnglish: 'Sant Ravidas',
    period: '15वीं शताब्दी (लगभग 1377 – 1527 ई.)',
    region: 'वाराणसी, उत्तर प्रदेश',
    tradition: 'संत काव्य परंपरा · निर्गुण भक्ति एवं समतावादी समाज दर्शन',
    majorWorks: ['रैदास की बानी', 'गुरु ग्रंथ साहिब में संकलित 41 पद'],
    philosophicalIdeas: '\'बेगमपुरा\' (दुःख-रहित समतामूलक समाज) की संकल्पना; श्रम की गरिमा (मन चंगा तो कठौती में गंगा); जन्मना जातिवाद का खंडन; अहंकारहीन समर्पण।',
    dialect: 'सरल सधुक्कड़ी, ब्रज एवं अवधी',
    influence: 'समानता, मानवीय गरिमा और सामाजिक न्याय के युगप्रवर्तक संत; मीराबाई के आध्यात्मिक मार्गदर्शक।',
    recommendedReading: 'डॉ. धर्मवीर कृत "कबीर और रैदास"',
    biography: 'संत रविदास ने चमड़े का काम करते हुए भी ब्रह्मज्ञान की पराकाष्ठा को प्राप्त किया। उनकी निर्मल वाणी ने यह सिद्ध किया कि ईश्वर की प्राप्ति उच्च कुल या धन से नहीं, अपितु अंतःकरण की पवित्रता और निष्काम प्रेम से होती है।'
  },
  nanak: {
    id: 'nanak',
    nameDevanagari: 'गुरु नानक देव',
    nameEnglish: 'Guru Nanak Dev',
    period: '15वीं - 16वीं शताब्दी (1469 – 1539 ई.)',
    region: 'तलवंडी (ननकाना साहिब), पंजाब',
    tradition: 'सिख परंपरा के संस्थापक · निर्गुण एकेश्वरवादी संत दर्शन',
    majorWorks: ['जपुजी साहिब', 'सिद्ध गोष्ठ', 'आसा दी वार', 'ओअंकार', 'गुरु ग्रंथ साहिब में संकलित वाणी'],
    philosophicalIdeas: '\'इक ओंकार\' (एक ही परम सत्य); नाम सिमरन, कीरत करो (ईमानदारी का श्रम), वंड छको (बांटकर खाना); अंधविश्वास और आडंबरों का त्याग।',
    dialect: 'संत भाषा / पंजाबी मिश्रित सधुक्कड़ी एवं ब्रज',
    influence: 'सिख धर्म की स्थापना और विश्व शांति, मानवीय भ्रातृत्व का वैश्विक संदेश।',
    recommendedReading: 'प्रो. पूरन सिंह कृत "द बुक ऑफ टेन मास्टर्स"',
    biography: 'सिख धर्म के प्रथम गुरु, गुरु नानक देव जी ने चार विशाल उदासियों (यात्राओं) द्वारा भारत और विदेश में घूमकर प्रेम, सद्भाव, समानता और एक निराकार ईश्वर की साधना का उपदेश दिया।'
  },
  dadudayal: {
    id: 'dadudayal',
    nameDevanagari: 'संत दादू दयाल',
    nameEnglish: 'Sant Dadu Dayal',
    period: '16वीं - 17वीं शताब्दी (1544 – 1603 ई.)',
    region: 'अहमदाबाद, गुजरात एवं नराणा (जयपुर), राजस्थान',
    tradition: 'दादू पंथ · निर्गुण भक्ति एवं अहिंसावादी संत दर्शन',
    majorWorks: ['दादू दयाल की बानी', 'दादू दयाल रा दूहा', 'हरडे बानी'],
    philosophicalIdeas: 'परम करुणा, दया, अहिंसा, जाति-पांति से मुक्त \'निपख\' (निष्पक्ष) मार्ग; अंतर्मुखी सहज ध्यान।',
    dialect: 'राजस्थानी, गुजराती, ब्रज और खड़ी बोली का सुंदर मेल',
    influence: 'राजस्थान और उत्तर-पश्चिम भारत में सामाजिक सद्भाव और आध्यात्मिक जागृति के प्रमुख स्तंभ।',
    recommendedReading: 'परशुराम चतुर्वेदी कृत "उत्तरी भारत की संत परंपरा"',
    biography: 'दादू दयाल स्वभाव से अत्यंत दयालु और शांत संत थे। उन्होंने \'ब्रह्म संप्रदाय\' (दादू पंथ) की स्थापना की और सभी धर्मों के बाहरी विवादों से परे \'सहज प्रेम\' को ही मोक्ष का साधन बताया।'
  },
  meerabai: {
    id: 'meerabai',
    nameDevanagari: 'भक्त कवयित्री मीराबाई',
    nameEnglish: 'Meera Bai',
    period: '16वीं शताब्दी (1498 – 1546 ई.)',
    region: 'मेड़ता, चित्तौड़गढ़ (राजस्थान) एवं द्वारका (गुजरात)',
    tradition: 'सगुण कृष्णभक्ति · माधुर्य भाव',
    majorWorks: ['मीराबाई की पदावली', 'राग सोरठ के पद', 'नरसी जी रो मायरो'],
    philosophicalIdeas: 'संसार के मिथ्या बंधनों का त्याग, गिरिधर गोपाल के प्रति अनन्य प्रेम, सामाजिक रूढ़ियों और राजसी बंधनों के विरुद्ध साहसिक समर्पण।',
    dialect: 'राजस्थानी मिश्रित ब्रजभाषा',
    influence: 'भारतीय भक्ति आंदोलन की सबसे प्रखर और निर्भीक महिला संत।',
    recommendedReading: 'आचार्य रामचंद्र शुक्ल कृत "हिंदी साहित्य का इतिहास"',
    biography: 'मेवाड़ की महारानी होते हुए भी मीराबाई ने लोकलाज और राजमहल के ऐश्वर्य को त्यागकर कृष्ण की भक्ति को ही अपना सर्वस्व माना। उनके पद और दोहे प्रेम, विरह और समर्पण की पराकाष्ठा हैं।'
  },
  surdas: {
    id: 'surdas',
    nameDevanagari: 'महाकवि सूरदास',
    nameEnglish: 'Surdas',
    period: '15वीं - 16वीं शताब्दी (1478 – 1583 ई.)',
    region: 'रुनकता (आगरा) एवं गोवर्धन (मथुरा), उत्तर प्रदेश',
    tradition: 'अष्टछाप · सगुण कृष्णभक्ति शाखा (वात्सल्य एवं सख्य भाव)',
    majorWorks: ['सूरसागर', 'सूरसारावली', 'साहित्य लहरी'],
    philosophicalIdeas: 'बालकृष्ण के रूप-सौंदर्य और लीलाओं का अपूर्व मनोवैज्ञानिक चित्रण; प्रेम और भक्ति के माध्यम से आत्म-निवेदन।',
    dialect: 'मधुर, सरस साहित्यिक ब्रजभाषा',
    influence: 'हिंदी वात्सल्य और शृंगार रस के निर्विवाद सम्राट।',
    recommendedReading: 'आचार्य रामचंद्र शुक्ल कृत "सूरदास"',
    biography: 'सूरदास जी जन्मांध होते हुए भी बाल-मनोविज्ञान और मानव हृदय की सूक्ष्म अनुभूतियों का ऐसा सजीव वर्णन करते हैं जो संसार के किसी भी कवि के लिए दुर्लभ है। महाप्रभु वल्लभाचार्य के शिष्य बनकर उन्होंने गोवर्धन पर अपनी अमृतवाणी से जन-जन को रसविभोर किया।'
  },
  malukdas: {
    id: 'malukdas',
    nameDevanagari: 'संत मलूक दास',
    nameEnglish: 'Sant Maluk Das',
    period: '16वीं - 17वीं शताब्दी (1574 – 1682 ई.)',
    region: 'कड़ा (इलाहाबाद / कौशाम्बी), उत्तर प्रदेश',
    tradition: 'संत परंपरा · सहज भक्ति एवं लोक-कल्याण',
    majorWorks: ['मलूक बानी', 'ज्ञान बोध', 'रत्न खान', 'भक्त वच्छावली'],
    philosophicalIdeas: 'ईश्वर के शरणागत होने का विश्वास; "अजगर करै न चाकरी पंछी करै न काम, दास मलूका कहि गए सब के दाता राम"; दया और परोपकार।',
    dialect: 'अवधी एवं ब्रजभाषा मिश्रित सधुक्कड़ी',
    influence: 'सामान्य जनमानस को निर्भयता, ईश्वर-विश्वास और संतोष का पाठ पढ़ाया।',
    recommendedReading: 'डॉ. पीतांबर दत्त बड़थ्वाल कृत "हिंदी काव्य में निर्गुण संप्रदाय"',
    biography: 'संत मलूक दास जी का जीवन दया, करुणा और अतिथि-सत्कार का अनुपम उदाहरण था। वे कहते थे कि परमात्मा संसार के हर जीव के भरण-पोषण की चिंता करता है, इसलिए मनुष्य को व्यर्थ की तृष्णा त्यागकर सत्कर्म करना चाहिए।'
  },
  sundardas: {
    id: 'sundardas',
    nameDevanagari: 'संत सुन्दर दास',
    nameEnglish: 'Sant Sundar Das',
    period: '16वीं - 17वीं शताब्दी (1596 – 1689 ई.)',
    region: 'दौसा एवं फतेहपुर (शेखावाटी), राजस्थान',
    tradition: 'संत काव्य परंपरा · ज्ञानमार्गी दार्शनिक शाखा (दादू के प्रधान शिष्य)',
    majorWorks: ['सुन्दर विलास', 'ज्ञान समुद्र', 'सर्वांग योग', 'सुन्दर ग्रंथावली'],
    philosophicalIdeas: 'संतों में सर्वाधिक सुशिक्षित व दार्शनिक संत; योग, वेदान्त, सांख्य और काव्यशास्त्र का शास्त्रीय समन्वय; सामाजिक आडंबरों और अंधविश्वासों का तीखा खंडन।',
    dialect: 'शुद्ध साहित्यिक ब्रजभाषा एवं परिष्कृत राजस्थानी',
    influence: 'संत काव्य को शास्त्रीय गरिमा और उच्च साहित्यिक शिल्प प्रदान करने वाले महाकवि।',
    recommendedReading: 'पुरोहित हरिनारायण शर्मा संपादित "सुन्दर ग्रंथावली"',
    biography: 'संत सुन्दर दास जी काशी में संस्कृत, वेदान्त और व्याकरण का गहन अध्ययन करने वाले अद्वितीय संत-कवि थे। उन्होंने अत्यंत परिमार्जित छंदों और दोहों में अद्वैत दर्शन का उपदेश दिया।'
  },
  garibdas: {
    id: 'garibdas',
    nameDevanagari: 'संत गरीब दास',
    nameEnglish: 'Sant Garib Das',
    period: '18वीं शताब्दी (1717 – 1778 ई.)',
    region: 'छुड़ानी (झज्जर), हरियाणा',
    tradition: 'गरीबदासी पंथ · कबीर परंपरा का दार्शनिक विस्तार',
    majorWorks: ['संत गरीबदास जी की ग्रंथावली (रत्न सागर, अमर बोध)'],
    philosophicalIdeas: 'सत्यलोक की संकल्पना, निराकार परमात्मा की अनन्य भक्ति, अहिंसा, दया, सर्वधर्म समभाव और नैतिक आचरण की शुद्धि।',
    dialect: 'हरियाणवी मिश्रित ब्रज एवं सधुक्कड़ी',
    influence: 'हरियाणा, पश्चिमी उत्तर प्रदेश और पंजाब में भक्ति और नैतिक चेतना के प्रमुख केंद्र।',
    recommendedReading: 'स्वामी युगलानंद कृत "गरीबदास दर्शन"',
    biography: 'संत गरीब दास जी ने 10 वर्ष की अल्पायु में आत्मज्ञान प्राप्त किया। उनकी ग्रंथावली में 24,000 से अधिक पद और दोहे संकलित हैं, जो निर्गुण भक्ति और मानवीय मूल्यों के अद्भुत भंडार हैं।'
  },
  dhannabhagat: {
    id: 'dhannabhagat',
    nameDevanagari: 'भगत धन्ना',
    nameEnglish: 'Bhagat Dhanna',
    period: '15वीं शताब्दी (लगभग 1415 ई.)',
    region: 'धुवान (टोंक), राजस्थान',
    tradition: 'रामानंद परंपरा · निष्कपट भोली भक्ति',
    majorWorks: ['गुरु ग्रंथ साहिब में संकलित वाणी एवं पद'],
    philosophicalIdeas: 'बिना किसी चतुराई, अहंकार या आडंबर के सरल हृदय से परमात्मा का स्मरण; श्रम और कृषि कार्य करते हुए ईश्वर-सान्निध्य।',
    dialect: 'प्राचीन राजस्थानी एवं संत भाषा',
    influence: 'सिख परंपरा और राजस्थान की लोक-भक्ति में निष्कपट विश्वास के अमर प्रतीक।',
    recommendedReading: 'मैकॉलिफ कृत "द सिख रिलीजन"',
    biography: 'भगत धन्ना एक सरल किसान थे। उन्होंने यह सिद्ध किया कि परमात्मा किसी जटिल विधि-विधान या पांडित्य से नहीं, बल्कि बालक जैसी निष्कपट श्रद्धा से सहज ही मिल जाते हैं।'
  },
  namdev: {
    id: 'namdev',
    nameDevanagari: 'संत नामदेव',
    nameEnglish: 'Sant Namdev',
    period: '13वीं - 14वीं शताब्दी (1270 – 1350 ई.)',
    region: 'नरसी बामणी (महाराष्ट्र) एवं घुमान (गुरदासपुर), पंजाब',
    tradition: 'वारकरी संप्रदाय एवं उत्तर भारतीय संत धारा का सेतु',
    majorWorks: ['नामदेव गाथा (अभंग)', 'गुरु ग्रंथ साहिब में संकलित 61 पद'],
    philosophicalIdeas: 'सगुण और निर्गुण का अद्वैत समन्वय; विट्ठल की अनन्य भक्ति; उत्तर और दक्षिण भारत की सांस्कृतिक एकता का सूत्रपात।',
    dialect: 'प्राचीन मराठी एवं मध्यकालीन ब्रज/सधुक्कड़ी',
    influence: 'महाराष्ट्र से पंजाब तक भक्ति आंदोलन के सार्वभौमिक दूत।',
    recommendedReading: 'डॉ. विनय मोहन शर्मा कृत "हिंदी को मराठी संतों की देन"',
    biography: 'संत नामदेव जी ने महाराष्ट्र में वारकरी भक्ति आंदोलन को गति देने के बाद जीवन के अंतिम बीस वर्ष पंजाब के घुमान में बिताए, जहाँ उनकी वाणी आज भी पूज्य है।'
  },
  sahajobai: {
    id: 'sahajobai',
    nameDevanagari: 'संत सहजो बाई',
    nameEnglish: 'Sant Sahajo Bai',
    period: '18वीं शताब्दी (लगभग 1725 – 1800 ई.)',
    region: 'डेहरा (मेवात), राजस्थान एवं दिल्ली',
    tradition: 'चरणदासी संप्रदाय · गुरुभक्ति एवं सहज साधना',
    majorWorks: ['सहज प्रकाश'],
    philosophicalIdeas: 'ईश्वर से भी बढ़कर गुरु की महिमा ("राम तजूँ पै गुरु न बिसारूँ"); अहंकारहीन प्रेम; नारी साधना की गरिमा।',
    dialect: 'मेवाती मिश्रित ब्रजभाषा',
    influence: 'उत्तर भारतीय महिला संत कवयित्रियों में अद्वितीय स्थान।',
    recommendedReading: 'परशुराम चतुर्वेदी कृत "सहजो बाई की बानी"',
    biography: 'संत चरणदास की प्रमुख शिष्या सहजो बाई ने गृहस्थ और सांसारिक बंधनों से मुक्त होकर आजीवन निर्मल ज्ञान और गुरु-भक्ति का संदेश दिया।'
  },
  charandas: {
    id: 'charandas',
    nameDevanagari: 'संत चरण दास',
    nameEnglish: 'Sant Charan Das',
    period: '18वीं शताब्दी (1703 – 1782 ई.)',
    region: 'डेहरा (अलवर), राजस्थान एवं दिल्ली',
    tradition: 'चरणदासी संप्रदाय · अष्टांग योग एवं भक्ति का समन्वय',
    majorWorks: ['भक्ति सागर', 'ज्ञान स्वरोदय', 'ब्रह्म ज्ञान सागर'],
    philosophicalIdeas: 'योग और भक्ति का सुंदर मेल; सत्य, अहिंसा, दया और शील के 29 नियम; समता और आंतरिक पवित्रता।',
    dialect: 'ब्रजभाषा मिश्रित खड़ी बोली',
    influence: 'दिल्ली, राजस्थान और हरियाणा में योग और भक्ति के महान आचार्य।',
    recommendedReading: 'डॉ. त्रिलोकी नारायण दीक्षित कृत "संत चरणदास"',
    biography: 'संत चरण दास जी ने नादिरशाह के दिल्ली आक्रमण की सटीक भविष्यवाणी की थी। उन्होंने समाज को बाह्य पाखंडों से हटाकर आंतरिक ध्यान और शील का मार्ग दिखाया।'
  }
};

// ─────────────── 2. CURATED DOHA POOL ───────────────

export const DOHA_COLLECTION: DohaEntry[] = [
  // ── 1. KABIR DOHAS ──
  {
    id: 'doha-kabir-1',
    sequenceNumber: 1,
    dohaDevanagari: [
      'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय।',
      'ढाई आखर प्रेम का, पढ़े सो पंडित होय॥'
    ],
    transliteration: [
      'Pothī paḍhi paḍhi jaga muā, paṇḍita bhayā na koya |',
      'Ḍhāī ākhara prema kā, paḍhe so paṇḍita hoya ||'
    ],
    poetId: 'kabir',
    poetNameDevanagari: 'कबीरदास',
    poetNameEnglish: 'Kabir Das',
    theme: 'wisdom',
    themeHindi: 'सच्चा ज्ञान एवं प्रेम',
    languageDialect: 'सधुक्कड़ी (सुलभ मिश्रित)',
    source: 'कबीर ग्रंथावली / साखी संग्रह',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'संसार में लोग बड़े-बड़े शास्त्र और पुस्तकें पढ़-पढ़कर जीवन समाप्त कर गए, किन्तु कोई भी सच्चा ज्ञानी (पंडित) न बन सका। जो मनुष्य प्रेम के केवल ढाई अक्षर (प-्रे-म) का मर्म समझकर उसे जीवन में उतार लेता है, वही सच्चा ज्ञानी है।',
    englishMeaning: 'The entire world wore itself out reading scriptures and vast volumes, yet none became truly wise. But one who truly reads and embodies the two-and-a-half letters of Love—he alone becomes truly enlightened.',
    deeperInterpretation: 'कबीर यहाँ सूचना (Information) और ज्ञान (Wisdom) के बीच की खाई को उजागर करते हैं। पुस्तकीय ज्ञान अहंकार को बढ़ाता है, जबकि प्रेम और सहानुभूति हृदय को निर्मल बनाकर स्वयं और दूसरों के प्रति गहरी करुणा जगाते हैं।',
    contextBackground: 'मध्यकालीन भारत में जब कर्मकांडी पंडित और मुल्ला केवल ग्रन्थों की रटंत विद्या को धर्म समझ रहे थे, तब कबीर ने सहज प्रेम को ही सर्वोच्च आध्यात्मिक साधना घोषित किया।',
    importantVocabulary: [
      { word: 'पोथी (Pothi)', meaning: 'धार्मिक ग्रंथ या भारी-भरकम पुस्तकें' },
      { word: 'मुआ (Mua)', meaning: 'मृत्यु को प्राप्त हुआ / व्यर्थ समय गंवाया' },
      { word: 'ढाई आखर (Dhai Aakhar)', meaning: 'प्रेम शब्द के ढाई अक्षर, जो संवेदना और करुणा के प्रतीक हैं' }
    ],
    lifeLesson: 'सच्ची बुद्धिमत्ता डिग्रियों या ग्रन्थों के संग्रह में नहीं, अपितु हृदय की सहज करुणा और प्रेम में बसती है।'
  },
  {
    id: 'doha-kabir-2',
    sequenceNumber: 2,
    dohaDevanagari: [
      'माटी कहै कुम्हार सों, तू क्या रूँदे मोहि।',
      'एक दिन ऐसा होएगा, मैं रूँदूंगी तोहि॥'
    ],
    transliteration: [
      'Māṭī kahai kumhāra soṁ, tū kyā rūnde mohi |',
      'Eka dina aisā hoegā, maiṁ rūndūṅgī tohi ||'
    ],
    poetId: 'kabir',
    poetNameDevanagari: 'कबीरदास',
    poetNameEnglish: 'Kabir Das',
    theme: 'impermanence',
    themeHindi: 'अनित्यता एवं नश्वरता',
    languageDialect: 'सधुक्कड़ी',
    source: 'कबीर बीजक',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'मिट्टी कुम्हार से कहती है: हे कुम्हार! आज तू अपने पैरों तले मुझे क्या रौंद रहा है? एक दिन ऐसा भी आएगा जब तू स्वयं मिट्टी में मिल जाएगा और मैं तुझे अपने भीतर समेट लूँगी।',
    englishMeaning: 'The clay speaks to the potter: "Why do you trample and knead me under your feet today? A day shall surely come when you shall turn to dust, and I shall cover you beneath the earth."',
    deeperInterpretation: 'यह दोहा मानव जीवन के अहंकार और नश्वरता पर एक गहरा दार्शनिक व्यंग्य है। मनुष्य जिस भौतिक देह और सांसारिक सत्ता के मद में चूर होकर प्रकृति और अन्य जीवों का शोषण करता है, अंततः उसी पंचतत्व की मिट्टी में विलीन हो जाता है।',
    contextBackground: 'कबीर ने कुम्हार और मिट्टी के दैनिक ग्रामीण दृश्य को एक सार्वभौमिक आध्यात्मिक रूपक (metaphor) में बदल दिया।',
    importantVocabulary: [
      { word: 'रूँदे (Roonde)', meaning: 'पैरों से कुचलना / रौंदना / मिट्टी को गूँथना' },
      { word: 'मोहि/तोहि (Mohi/Tohi)', meaning: 'मुझको / तुझको' }
    ],
    lifeLesson: 'समय और प्रकृति से बड़ा कोई बलवान नहीं; अपने क्षणिक पद, बल या देह पर कभी अहंकार मत करो।'
  },

  // ── 2. RAHIM DOHAS ──
  {
    id: 'doha-rahim-1',
    sequenceNumber: 3,
    dohaDevanagari: [
      'रहिमन धागा प्रेम का, मत तोड़ो चटकाय।',
      'टूटे पे फिर ना जुड़े, जुड़े गाँठ परि जाय॥'
    ],
    transliteration: [
      'Rahimana dhāgā prema kā, mata toḍo caṭakāya |',
      'Ṭūṭe pe phira nā juḍe, juḍe gā̃ṭha pari jāya ||'
    ],
    poetId: 'rahim',
    poetNameDevanagari: 'रहीम',
    poetNameEnglish: 'Rahim',
    theme: 'relationships',
    themeHindi: 'संबंधों की मर्यादा एवं संवेदनशीलता',
    languageDialect: 'ब्रजभाषा',
    source: 'रहीम दोहावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'रहीम कहते हैं कि प्रेम और विश्वास रूपी धागे को झटके से कभी नहीं तोड़ना चाहिए। क्योंकि एक बार यदि यह टूट जाए, तो फिर जुड़ता नहीं; और यदि जुड़ भी जाए, तो बीच में एक दरार (गांठ) रह ही जाती है।',
    englishMeaning: 'Rahim says: Never snap the delicate thread of love and trust in a fit of hasty anger. For once broken, it cannot be rejoined; and even if mended, a permanent knot remains behind.',
    deeperInterpretation: 'मानवीय संबंध अत्यंत नाजुक और मूल्यवान होते हैं। क्षणिक क्रोध या अहंकार में बोले गए कटु वचन वर्षों के विश्वास को पल भर में नष्ट कर देते हैं। क्षमा और सुलह के बाद भी मन में एक सूक्ष्म अविश्वास या संकोच की गांठ शेष रह जाती है।',
    contextBackground: 'रहीम ने अपने राजनैतिक और व्यक्तिगत जीवन के व्यापक अनुभवों से यह सीखा कि सत्ता और धन फिर मिल सकते हैं, किन्तु टूटे हुए मन के तार पुनः पहले जैसे नहीं जुड़ते।',
    importantVocabulary: [
      { word: 'चटकाय (Chatkaye)', meaning: 'झटके से / अचानक आवेश में आकर तोड़ना' },
      { word: 'गाँठ (Ganth)', meaning: 'मन में संदेह या खिंचाव की स्थायी छाप' }
    ],
    lifeLesson: 'क्रोध के एक क्षण में संबंधों पर ऐसा प्रहार मत करो जिसकी भरपाई जीवन भर न हो सके।'
  },
  {
    id: 'doha-rahim-2',
    sequenceNumber: 4,
    dohaDevanagari: [
      'रहिमन देखि बड़ेन को, लघु न दीजिए डारि।',
      'जहाँ काम आवै सुई, कहा करै तरवारि॥'
    ],
    transliteration: [
      'Rahimana dekhi baḍena ko, laghu na dījie ḍāri |',
      'Jahā̃ kāma āvai suī, kahā karai taravāri ||'
    ],
    poetId: 'rahim',
    poetNameDevanagari: 'रहीम',
    poetNameEnglish: 'Rahim',
    theme: 'humility',
    themeHindi: 'प्रत्येक वस्तु एवं व्यक्ति की उपयोगिता',
    languageDialect: 'ब्रजभाषा',
    source: 'रहीम दोहावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'रहीम कहते हैं कि किसी बड़े या शक्तिशाली व्यक्ति अथवा वस्तु को देखकर छोटे और साधारण की उपेक्षा मत करो। जहाँ कपड़े सिलने के लिए एक छोटी सुई की आवश्यकता होती है, वहाँ विशाल तलवार किसी काम नहीं आ सकती।',
    englishMeaning: 'Rahim counsels: Upon meeting the great or acquiring the mighty, do not discard or belittle the small. For where a tiny needle is required to stitch, what purpose can a mighty sword serve?',
    deeperInterpretation: 'संसार में प्रत्येक व्यक्ति, भूमिका और साधन का अपना विशिष्ट मूल्य है। शक्ति और वैभव से हर समस्या का समाधान नहीं हो सकता; कई बार विनम्रता, सूक्ष्म कारीगरी और धैर्य ही काम आते हैं।',
    contextBackground: 'मुगल सेनापति होते हुए भी रहीम को ज्ञात था कि युद्धक्षेत्र की तलवार और घर की सुई—दोनों की अपनी अपरिहार्य जगह है।',
    importantVocabulary: [
      { word: 'बड़ेन (Baden)', meaning: 'बड़े, धनी या प्रभावशाली लोग' },
      { word: 'लघु (Laghu)', meaning: 'छोटा, सामान्य या निर्धन व्यक्ति' },
      { word: 'डारि (Dari)', meaning: 'त्याग देना / फेंक देना / उपेक्षा करना' }
    ],
    lifeLesson: 'किसी भी व्यक्ति को उसकी साधारण स्थिति देखकर कम मत आंकिए; जीवन के हर मोड़ पर छोटे से छोटा साथी भी अमूल्य सिद्ध हो सकता है।'
  },

  // ── 3. TULSIDAS DOHAS ──
  {
    id: 'doha-tulsi-1',
    sequenceNumber: 5,
    dohaDevanagari: [
      'तुलसी मीठे बचन ते, सुख उपजत चहुँ ओर।',
      'बसीकरन इक मंत्र है, परिहरू बचन कठोर॥'
    ],
    transliteration: [
      'Tulasī mīṭhe bacana te, sukha upajata cahũ ora |',
      'Basīkarana ika mantra hai, pariharū bacana kaṭhora ||'
    ],
    poetId: 'tulsidas',
    poetNameDevanagari: 'तुलसीदास',
    poetNameEnglish: 'Tulsidas',
    theme: 'human_behaviour',
    themeHindi: 'मधुर वाणी का प्रभाव',
    languageDialect: 'अवधी',
    source: 'तुलसी दोहावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'तुलसीदास जी कहते हैं कि मधुर और विनम्र वाणी से चारों ओर सुख और आनंद उत्पन्न होता है। मीठे बोल संसार को अपने वश में करने (सबके हृदयों को जीतने) का सबसे अचूक मंत्र हैं; इसलिए कठोर वचनों का सर्वथा त्याग कर देना चाहिए।',
    englishMeaning: 'Tulsidas says: Sweet and gentle speech brings forth happiness in all directions. Kind words are the ultimate spell to win over the hearts of the world; therefore, completely renounce harsh and wounding speech.',
    deeperInterpretation: 'वाणी केवल विचारों के सम्प्रेषण का माध्यम नहीं, अपितु व्यक्ति के संस्कार और अंतःकरण का दर्पण है। कठोर वाणी जहाँ शत्रुता और अशांति पैदा करती है, वहीं मधुर वचन कठिन से कठिन विरोध को भी मैत्री में बदल देते हैं।',
    contextBackground: 'तुलसीदास जी ने समाज के सभी वर्गों के मध्य सद्भाव और शांति बनाए रखने के लिए वाणी की मिठास को सबसे सुलभ सद्गुण बताया।',
    importantVocabulary: [
      { word: 'उपजत (Upajat)', meaning: 'उत्पन्न होता है / प्रस्फुटित होता है' },
      { word: 'बसीकरन (Basikaran)', meaning: 'हृदय को जीतना / वश में करने वाला प्रभाव' },
      { word: 'परिहरू (Pariharu)', meaning: 'त्याग करो / छोड़ दो' }
    ],
    lifeLesson: 'अपनी वाणी में मिठास और आदर घोलें; यह बिना किसी मूल्य के संसार का सबसे बड़ा प्रभावक साधन है।'
  },

  // ── 4. BIHARI DOHAS ──
  {
    id: 'doha-bihari-1',
    sequenceNumber: 6,
    dohaDevanagari: [
      'कनक कनक ते सौ गुनी, मादकता अधिकाय।',
      'वा खाये बौराय जग, या पाये बौराय॥'
    ],
    transliteration: [
      'Kanaka kanaka te sau gunī, mādakatā adhikāya |',
      'Vā khāye baurāya jaga, yā pāye baurāya ||'
    ],
    poetId: 'bihari',
    poetNameDevanagari: 'बिहारी',
    poetNameEnglish: 'Bihari',
    theme: 'ego',
    themeHindi: 'धन का नशा एवं विवेक',
    languageDialect: 'ब्रजभाषा',
    source: 'बिहारी सतसई',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'सोने (स्वर्ण / धन) में धतूरे (नशीले पौधे) की तुलना में सौ गुना अधिक नशा होता है। क्योंकि धतूरे को तो खाने के बाद मनुष्य पागल (मदहोश) होता है, किन्तु सोने (अत्यधिक धन) को तो मात्र पा लेने से ही संसार बौरा (अहंकारी) जाता है।',
    englishMeaning: 'Gold (wealth) possesses a hundred times more intoxication than the poisonous thorn-apple (dhatura). For consuming dhatura makes one lose one’s senses only after eating it; but merely acquiring wealth drives the human mind into blind vanity.',
    deeperInterpretation: 'बिहारी यहाँ धन और सम्पत्ति के मनोवैज्ञानिक प्रभाव का गहरा विश्लेषण करते हैं। भौतिक धन का नशा शारीरिक नशे से भी अधिक घातक है क्योंकि यह व्यक्ति के विवेक, विनम्रता और यथार्थ दृष्टि को चुपके से छीन लेता है।',
    contextBackground: 'यह दोहा हिंदी साहित्य में \'यमक अलंकार\' का सर्वोत्कृष्ट उदाहरण है।',
    importantVocabulary: [
      { word: 'कनक (Kanak)', meaning: 'पहला कनक = धतूरा (विष), दूसरा कनक = स्वर्ण (धन)' },
      { word: 'मादकता (Madakata)', meaning: 'नशा / चित्त का भटकाव / अहंकार' },
      { word: 'बौराय (Bauraye)', meaning: 'पागल होना / विवेक खो बैठना' }
    ],
    lifeLesson: 'सफलता और धन प्राप्त होने पर अपनी विनम्रता और विवेक को सजग रखें; समृद्धि का अहंकार सबसे बड़ा पतन लाता है।'
  },

  // ── 5. SANT RAVIDAS DOHAS ──
  {
    id: 'doha-ravidas-1',
    sequenceNumber: 7,
    dohaDevanagari: [
      'जाति-जाति में जाति हैं, जो केतन के पात।',
      'रैदास मनुष ना जुड़ सकै, जब तक जाति न जात॥'
    ],
    transliteration: [
      'Jāti-jāti meṁ jāti haiṁ, jo ketana ke pāta |',
      'Raidāsa manuṣa nā juḍa sakai, jaba taka jāti na jāta ||'
    ],
    poetId: 'ravidas',
    poetNameDevanagari: 'संत रविदास',
    poetNameEnglish: 'Sant Ravidas',
    theme: 'society',
    themeHindi: 'समानता एवं सामाजिक समरसता',
    languageDialect: 'सधुक्कड़ी / ब्रजभाषा',
    source: 'रैदास की बानी',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'जैसे केले के तने को छीलने पर छिलके के अंदर छिलका (पत्ता-पत्ता) निकलता जाता है और अंत में कुछ सार नहीं मिलता, वैसे ही समाज जातियों के भीतर उप-जातियों में बंटा हुआ है। जब तक यह संकीर्ण जातिगत भेद समाप्त नहीं होगा, तब तक मानवता एकजुट नहीं हो सकती।',
    englishMeaning: 'Just as peeling the layers of a plantain trunk reveals leaf within leaf and nothing solid at the core, so has humanity fragmented into castes within castes. Humanity can never truly unite until the illusion of caste division dissolves.',
    deeperInterpretation: 'संत रविदास सामाजिक संकीर्णता पर सीधा प्रहार करते हैं। जाति व्यवस्था मनुष्य को बांटती है और समाज की स्वाभाविक आत्मीयता को खंडित करती है। सच्ची आध्यात्मिकता वही है जो प्रत्येक जीव में एक समान परमात्मा का दर्शन करे।',
    contextBackground: '15वीं शताब्दी में काशी में संत रविदास ने सामाजिक न्याय और मानवीय गरिमा का जो उद्घोष किया, वह आज भी विश्व भर के समतावादी विचारकों को प्रेरणा देता है।',
    importantVocabulary: [
      { word: 'केतन के पात (Ketan ke Paat)', meaning: 'केले के तने की परतें/पत्ते' },
      { word: 'मनुष ना जुड़ सकै (Manush na jud sakai)', meaning: 'मानव समाज कभी एकजुट नहीं हो सकता' }
    ],
    lifeLesson: 'जन्म या जाति के आधार पर किसी से भेदभाव न करें; मनुष्य की वास्तविक पहचान उसके कर्म और चरित्र से होती है।'
  },

  // ── 6. DADU DAYAL DOHAS ──
  {
    id: 'doha-dadu-1',
    sequenceNumber: 8,
    dohaDevanagari: [
      'दादू आपा जब लगै, तब लगि दूजा होइ।',
      'जब आपा मिटि जाइगा, तब दूजा नाहीं कोइ॥'
    ],
    transliteration: [
      'Dādū āpā jaba lagai, taba lagi dūjā hoi |',
      'Jaba āpā miṭi jāigā, taba dūjā nāhīṁ koi ||'
    ],
    poetId: 'dadudayal',
    poetNameDevanagari: 'संत दादू दयाल',
    poetNameEnglish: 'Dadu Dayal',
    theme: 'self_awareness',
    themeHindi: 'अहंकार का विसर्जन एवं अद्वैत',
    languageDialect: 'राजस्थानी सधुक्कड़ी',
    source: 'दादू दयाल की बानी',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'दादू दयाल कहते हैं कि जब तक भीतर \'आपा\' (अहंकार / मैं-भाव) रहता है, तब तक दूसरा (पराया / भेद-भाव) दिखाई देता है। और जब यह संकीर्ण अहंकार मिट जाता है, तब सर्वत्र एकात्म भाव प्रकट होता है और कोई भी पराया नहीं रह जाता।',
    englishMeaning: 'Dadu says: As long as the sense of "I" (ego and separateness) persists, the world appears divided into the self and the other. When this ego dissolves, the division vanishes and all existence reveals itself as One.',
    deeperInterpretation: 'अद्वैत वेदान्त का सर्वोच्च सूत्र इस सरल दोहे में समाहित है। जब मनुष्य अपने सीमित \'अहं\' (Ego) को छोड़ देता है, तो शत्रुता, भय और ईर्ष्या का मूल कारण ही समाप्त हो जाता है।',
    contextBackground: 'दादू दयाल ने निर्गुण संतों की उस धारा को आगे बढ़ाया जिसने बिना किसी सांप्रदायिक द्वेष के अंतर्मुखी एकात्मता का साक्षात्कार किया।',
    importantVocabulary: [
      { word: 'आपा (Aapa)', meaning: 'अहंकार / मैं-भाव / पृथकता की ग्रंथि' },
      { word: 'दूजा (Dooja)', meaning: 'दूसरा / पराया व्यक्ति / द्वैत भाव' }
    ],
    lifeLesson: 'जब आप स्वयं के अहंकार को शांत करते हैं, तो सारा संसार आपके अपने परिवार की भांति आत्मीय बन जाता है।'
  },

  // ── 7. SUNDAR DAS DOHAS ──
  {
    id: 'doha-sundar-1',
    sequenceNumber: 9,
    dohaDevanagari: [
      'सुन्दर ज्ञान बिना नर अंध है, देखि सकै नहिं पंथ।',
      'जो जन खोजै आपु को, पावै निर्मल ग्रंथ॥'
    ],
    transliteration: [
      'Sundara jñāna binā nara andha hai, dekhi sakai nahiṁ pantha |',
      'Jo jana khojai āpu ko, pāvai nirmala grantha ||'
    ],
    poetId: 'sundardas',
    poetNameDevanagari: 'संत सुन्दर दास',
    poetNameEnglish: 'Sundar Das',
    theme: 'knowledge',
    themeHindi: 'आत्म-ज्ञान की महत्ता',
    languageDialect: 'साहित्यिक ब्रजभाषा',
    source: 'सुन्दर विलास',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'सुन्दर दास जी कहते हैं कि यथार्थ ज्ञान के बिना मनुष्य अंधे के समान है, जो सत्य के मार्ग को नहीं देख सकता। जो व्यक्ति स्वयं अपने अंतःकरण की खोज करता है, वह भीतर ही परम निर्मल सत्य-ग्रंथ को पा लेता है।',
    englishMeaning: 'Sundar Das says: Without genuine wisdom, a person wanders like the blind, unable to discern the true path. But one who deeply investigates their own inner self discovers the purest sacred scripture within.',
    deeperInterpretation: 'सुन्दर दास जी बाहरी शास्त्रों के अध्ययन के साथ-साथ \'आत्म-अन्वेषण\' (Self-inquiry) पर बल देते हैं। जब तक ज्ञान अनुभव में न बदले, तब तक वह केवल अंधकार को बढ़ाता है।',
    contextBackground: 'संत सुन्दर दास जी दादू के शिष्यों में सबसे बड़े दार्शनिक और संस्कृतज्ञ थे।',
    importantVocabulary: [
      { word: 'पंथ (Pantha)', meaning: 'सत्य और धर्म का मार्ग' },
      { word: 'आपु को (Aapu ko)', meaning: 'स्वयं अपने अंतर्मन को' }
    ],
    lifeLesson: 'सत्य की खोज बाहर की दुनिया में भटकने से पहले अपने अंतर्मन की गहराइयों में करें।'
  },

  // ── 8. SAHAJO BAI DOHAS ──
  {
    id: 'doha-sahajo-1',
    sequenceNumber: 10,
    dohaDevanagari: [
      'राम तजूँ पै गुरु न बिसारूँ, गुरु के सम हरि को न निहारूँ।',
      'हरि ने जनम दियो जग माहीं, गुरु ने भरम कटायो नाहीं॥'
    ],
    transliteration: [
      'Rāma tajū̃ pai guru na bisārū̃, guru ke sama hari ko na nihārū̃ |',
      'Hari ne janama diyo jaga māhīṁ, guru ne bharama kaṭāyo nāhī̃ ||'
    ],
    poetId: 'sahajobai',
    poetNameDevanagari: 'संत सहजो बाई',
    poetNameEnglish: 'Sahajo Bai',
    theme: 'devotion',
    themeHindi: 'सद्गुरु की कृतज्ञता एवं महिमा',
    languageDialect: 'मेवाती / ब्रजभाषा',
    source: 'सहज प्रकाश',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'सहजो बाई कहती हैं कि मैं ईश्वर (राम) को भले ही भूल सकती हूँ, किन्तु अपने सद्गुरु को कभी नहीं बिसारूँगी। क्योंकि ईश्वर ने तो मुझे संसार के मोह-जाल में जन्म दिया, किन्तु सद्गुरु ने आकर मेरे अज्ञान और भ्रम के सारे बंधनों को काट दिया।',
    englishMeaning: 'Sahajo Bai proclaims: I may let go of God, but I shall never forget my Guru. For the Creator merely placed me into the transient illusions of the world, but the Guru liberated my consciousness from all delusion.',
    deeperInterpretation: 'भारतीय आध्यात्मिक परंपरा में गुरु का स्थान सर्वोच्च माना गया है क्योंकि वह प्रत्यक्ष पथ-प्रदर्शक बनकर अज्ञान के अंधकार से प्रकाश की ओर ले जाता है। कृतज्ञता और निष्ठा की यह पराकाष्ठा है।',
    contextBackground: 'सहजो बाई संत चरणदास की अनन्य शिष्या थीं और उन्होंने आजीवन गुरु-कृपा के गीत गाए।',
    importantVocabulary: [
      { word: 'तजूँ (Tajoon)', meaning: 'त्याग दूँ / पीछे छोड़ दूँ' },
      { word: 'भरम (Bharam)', meaning: 'अज्ञान, संशय, सांसारिक भ्रम' }
    ],
    lifeLesson: 'उन गुरुओं और शिक्षकों के प्रति सदैव कृतज्ञ रहें जिन्होंने आपके जीवन से अज्ञान के पर्दे हटाए।'
  }
];

// ─────────────── 3. DAILY SET ROTATION HELPER ───────────────

/**
 * Returns 3-4 distinct, curated dohas for a given day index,
 * intelligently selecting across different poets and themes.
 */
export function getDailyDohasForDay(dayIndex: number): DohaEntry[] {
  const count = 3;
  const total = DOHA_COLLECTION.length;
  const result: DohaEntry[] = [];
  const startIdx = Math.abs(dayIndex * 3) % total;

  for (let i = 0; i < count; i++) {
    const item = DOHA_COLLECTION[(startIdx + i) % total];
    result.push(item);
  }

  return result;
}
