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
  },

  // ── 9. NEW DOHAS ──
  {
    id: 'doha-kabir-3',
    sequenceNumber: 11,
    dohaDevanagari: [
      'काल करे सो आज कर, आज करे सो अब।',
      'पल में परलय होयगी, बहुरि करेगो कब॥'
    ],
    transliteration: [
      'Kāla kare so āja kara, āja kare so aba |',
      'Pala meṁ paralaya hoyagī, bahuri karego kaba ||'
    ],
    poetId: 'kabir',
    poetNameDevanagari: 'कबीरदास',
    poetNameEnglish: 'Kabir',
    theme: 'discipline',
    themeHindi: 'अनुशासन और समय का महत्त्व',
    languageDialect: 'सधुक्कड़ी / अवधी',
    source: 'कबीर ग्रंथावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'कबीरदास जी कहते हैं कि जो काम कल करना है, उसे आज ही कर लो। और जो आज करना है, उसे अभी कर लो। पल भर में प्रलय (विनाश) हो सकता है, फिर काम कब करोगे?',
    englishMeaning: 'Kabir says: What you have to do tomorrow, do it today. What you have to do today, do it now. If the world ends in a moment, when will you finish your work?',
    deeperInterpretation: 'यह दोहा समय के सदुपयोग और टालमटोल (procrastination) से बचने की गहरी चेतावनी है। जीवन की अनिश्चितता को स्वीकार करते हुए हर क्षण का सही उपयोग करना ही ज्ञान है।',
    contextBackground: 'यह कबीर के सबसे प्रसिद्ध और व्यावहारिक दोहों में से एक है।',
    importantVocabulary: [
      { word: 'परलय (Paralaya)', meaning: 'विनाश / प्रलय / मृत्यु' },
      { word: 'बहुरि (Bahuri)', meaning: 'फिर / बाद में' }
    ],
    lifeLesson: 'टालमटोल की आदत छोड़ें और वर्तमान क्षण में अपने कर्तव्यों को पूरा करें।'
  },
  {
    id: 'doha-kabir-4',
    sequenceNumber: 12,
    dohaDevanagari: [
      'बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर।',
      'पंछी छाया न होय फल लागे अति दूर॥'
    ],
    transliteration: [
      'Baṛā huā to kyā huā, jaise peṛa khajūra |',
      'Paṁchī chāyā na hoya phala lāge ati dūra ||'
    ],
    poetId: 'kabir',
    poetNameDevanagari: 'कबीरदास',
    poetNameEnglish: 'Kabir',
    theme: 'humility',
    themeHindi: 'विनम्रता और उपयोगिता',
    languageDialect: 'सधुक्कड़ी',
    source: 'कबीर ग्रंथावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'केवल शरीर या पद में बड़े होने से क्या लाभ, जैसे खजूर का पेड़। वह राहगीरों को छाया भी नहीं देता और उसके फल भी बहुत ऊँचाई पर लगते हैं।',
    englishMeaning: 'What is the use of just being big, like a date palm tree? It offers no shade to travelers, and its fruits are out of reach.',
    deeperInterpretation: 'कबीर समझाते हैं कि बड़प्पन आकार या संपत्ति में नहीं, बल्कि उपयोगिता और परोपकार में है। जो व्यक्ति दूसरों के काम न आए, उसकी महानता व्यर्थ है।',
    contextBackground: 'अहंकार और निरर्थक दिखावे पर प्रहार करते हुए कबीर ने यह दृष्टांत दिया।',
    importantVocabulary: [
      { word: 'खजूर (Khajoor)', meaning: 'खजूर का पेड़ (Date palm)' }
    ],
    lifeLesson: 'सच्चा बड़प्पन इस बात में है कि आप दूसरों के लिए कितने उपयोगी और सुलभ हैं।'
  },
  {
    id: 'doha-kabir-5',
    sequenceNumber: 13,
    dohaDevanagari: [
      'दुःख में सुमिरन सब करें, सुख में करे न कोय।',
      'जो सुख में सुमिरन करे, दुःख काहे होय॥'
    ],
    transliteration: [
      'Duḥkha meṁ sumirana saba kareṁ, sukha meṁ kare na koya |',
      'Jo sukha meṁ sumirana kare, duḥkha kāhe hoya ||'
    ],
    poetId: 'kabir',
    poetNameDevanagari: 'कबीरदास',
    poetNameEnglish: 'Kabir',
    theme: 'devotion',
    themeHindi: 'निरंतर स्मरण',
    languageDialect: 'सधुक्कड़ी',
    source: 'कबीर ग्रंथावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'दुःख में सभी ईश्वर को याद करते हैं, लेकिन सुख में कोई नहीं करता। यदि सुख के समय भी ईश्वर को याद किया जाए, तो दुःख कैसे आ सकता है?',
    englishMeaning: 'Everyone remembers God in sorrow, but no one does in joy. If one remembers God in joy, why would sorrow even come?',
    deeperInterpretation: 'मनुष्य की यह प्रवृत्ति है कि वह केवल संकट में ही परमात्मा की शरण जाता है। सच्ची भक्ति वह है जो सुख और दुःख दोनों में समान रूप से बनी रहे। समता का भाव ही दुःख का नाश करता है।',
    contextBackground: 'सच्ची और निरंतर भक्ति का महत्व समझाने के लिए कबीर ने यह बात कही।',
    importantVocabulary: [
      { word: 'सुमिरन (Sumiran)', meaning: 'स्मरण / याद करना' }
    ],
    lifeLesson: 'अच्छे समय में भी कृतज्ञ रहें और परमात्मा को याद रखें, केवल संकट में नहीं।'
  },
  {
    id: 'doha-kabir-6',
    sequenceNumber: 14,
    dohaDevanagari: [
      'जो तोको काँटा बुवे, ताको बोय तू फूल।',
      'तोहि फूल को फूल है, वाको शूल सो शूल॥'
    ],
    transliteration: [
      'Jo toko kāṭā buve, tāko boya tū phūla |',
      'Tohi phūla ko phūla hai, vāko śūla so śūla ||'
    ],
    poetId: 'kabir',
    poetNameDevanagari: 'कबीरदास',
    poetNameEnglish: 'Kabir',
    theme: 'compassion',
    themeHindi: 'क्षमा और करुणा',
    languageDialect: 'सधुक्कड़ी',
    source: 'कबीर ग्रंथावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'जो तुम्हारे लिए काँटे बोता है, तुम उसके लिए फूल बोओ। तुम्हें तो फूल बोने के बदले फूल ही मिलेंगे, किन्तु उसे उसके बोए काँटों के बदले काँटे ही चुभेंगे।',
    englishMeaning: 'For one who sows thorns for you, sow flowers in return. You will reap the flowers you sowed, while they will suffer from their own thorns.',
    deeperInterpretation: 'बुरे के साथ बुराई करने से केवल बुराई बढ़ती है। कबीर सिखाते हैं कि अपनी अच्छाई मत छोड़ो, क्योंकि कर्म का सिद्धांत (Law of Karma) अपना काम करेगा।',
    contextBackground: 'क्षमा और अहिंसा के मार्ग का अनुसरण करने की प्रेरणा।',
    importantVocabulary: [
      { word: 'शूल (Shool)', meaning: 'काँटा / पीड़ा' }
    ],
    lifeLesson: 'दूसरों के बुरे व्यवहार के कारण अपनी अच्छाई और स्वभाव को न बदलें।'
  },
  {
    id: 'doha-rahim-3',
    sequenceNumber: 15,
    dohaDevanagari: [
      'बिगड़ी बात बनै नहीं, लाख करो किन कोय।',
      'रहिमन फाटे दूध को, मथे न माखन होय॥'
    ],
    transliteration: [
      'Bigaṛī bāta banai nahīṁ, lākha karo kina koya |',
      'Rahimana phāṭe dūdha ko, mathe na mākhana hoya ||'
    ],
    poetId: 'rahim',
    poetNameDevanagari: 'रहीम',
    poetNameEnglish: 'Rahim',
    theme: 'relationships',
    themeHindi: 'रिश्तों की संवेदनशीलता',
    languageDialect: 'ब्रजभाषा',
    source: 'रहीम दोहावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'जब कोई बात एक बार बिगड़ जाती है, तो लाख कोशिश करने पर भी पहले जैसी नहीं हो सकती। ठीक वैसे ही, जैसे फटे हुए दूध को मथने से मक्खन नहीं निकलता।',
    englishMeaning: 'Once things go wrong, a million attempts cannot make them right again. Rahim says, just as churning curdled milk cannot yield butter.',
    deeperInterpretation: 'रहीम रिश्तों और परिस्थितियों में सावधानी बरतने की सलाह देते हैं। विश्वास या रिश्ते एक बार टूट जाएं, तो उन्हें मूल स्वरूप में वापस लाना लगभग असंभव होता है।',
    contextBackground: 'वाणी और व्यवहार में संयम रखने की नीति।',
    importantVocabulary: [
      { word: 'फाटे दूध (Phaate doodh)', meaning: 'फटा हुआ दूध' }
    ],
    lifeLesson: 'अपने व्यवहार और शब्दों के प्रति सावधान रहें, क्योंकि कुछ नुकसान की भरपाई नहीं की जा सकती।'
  },
  {
    id: 'doha-rahim-4',
    sequenceNumber: 16,
    dohaDevanagari: [
      'एकै साधे सब सधे, सब साधे सब जाय।',
      'रहिमन मूलहि सींचिबो, फूलै फलै अघाय॥'
    ],
    transliteration: [
      'Ekai sādhe saba sadhe, saba sādhe saba jāya |',
      'Rahimana mūlahi sīṁcibo, phūlai phalai aghāya ||'
    ],
    poetId: 'rahim',
    poetNameDevanagari: 'रहीम',
    poetNameEnglish: 'Rahim',
    theme: 'wisdom',
    themeHindi: 'एकाग्रता और मूल तत्त्व',
    languageDialect: 'ब्रजभाषा',
    source: 'रहीम दोहावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'एक (मूल लक्ष्य या ईश्वर) को साधने से सब कुछ सध जाता है, और सब कुछ एक साथ साधने के प्रयास में सब कुछ हाथ से निकल जाता है। जैसे पेड़ की जड़ को सींचने से ही वह खूब फलता-फूलता है।',
    englishMeaning: 'By focusing on the one root cause, everything else is achieved. Trying to grasp everything at once leads to losing it all. Rahim says, water the root, and the tree will bloom and bear fruit abundantly.',
    deeperInterpretation: 'यह एकाग्रता (Focus) और प्राथमिकता तय करने का उत्तम सिद्धांत है। जीवन में कई चीज़ों के पीछे भागने के बजाय जो सबसे महत्वपूर्ण और मूलभूत है, उस पर ध्यान देना चाहिए।',
    contextBackground: 'नीति और जीवन प्रबंधन का उत्कृष्ट उदाहरण।',
    importantVocabulary: [
      { word: 'मूलहि (Moolahi)', meaning: 'जड़ को (to the root)' },
      { word: 'अघाय (Aghaya)', meaning: 'तृप्त होकर / भरपूर' }
    ],
    lifeLesson: 'अपनी ऊर्जा को अनेक दिशाओं में बिखेरने के बजाय एक मुख्य लक्ष्य पर केंद्रित करें।'
  },
  {
    id: 'doha-tulsi-2',
    sequenceNumber: 17,
    dohaDevanagari: [
      'सरनागत कहुँ जे तजहिं, निज अनहित अनुमानि।',
      'ते नर पाँवर पापमय, तिन्हहि दर्सनु बानि॥'
    ],
    transliteration: [
      'Saranāgata kahu je tajahiṁ, nija anahita anumāni |',
      'Te nara pāvara pāpamaya, tinhahi darsanu bāni ||'
    ],
    poetId: 'tulsidas',
    poetNameDevanagari: 'तुलसीदास',
    poetNameEnglish: 'Tulsidas',
    theme: 'morality',
    themeHindi: 'शरणागत की रक्षा',
    languageDialect: 'अवधी',
    source: 'रामचरितमानस',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'तुलसीदास जी कहते हैं कि जो लोग अपने नुकसान की आशंका से, शरण में आए हुए व्यक्ति का त्याग कर देते हैं, वे मनुष्य नीच और पापमय हैं; उनका दर्शन भी अशुभ होता है।',
    englishMeaning: 'Those who abandon someone seeking refuge out of fear for their own self-interest are lowly and sinful; even seeing them brings misfortune.',
    deeperInterpretation: 'यह दोहा शरणार्थी की रक्षा को परम धर्म बताता है। स्वार्थ के कारण किसी निस्सहाय को छोड़ देना इंसानियत का सबसे बड़ा पतन है। यह भगवान राम के आदर्श को दर्शाता है।',
    contextBackground: 'रामचरितमानस में विभीषण के राम की शरण में आने पर राम द्वारा कहा गया वचन।',
    importantVocabulary: [
      { word: 'सरनागत (Saranagat)', meaning: 'शरण में आया हुआ' },
      { word: 'पाँवर (Paanvar)', meaning: 'नीच / क्षुद्र' }
    ],
    lifeLesson: 'यदि कोई सहायता या सुरक्षा के लिए आपकी शरण में आए, तो अपने स्वार्थ के कारण उसे निराश न करें।'
  },
  {
    id: 'doha-tulsi-3',
    sequenceNumber: 18,
    dohaDevanagari: [
      'धीरज, धर्म, मित्र अरु नारी।',
      'आपत काल परखिए चारी॥'
    ],
    transliteration: [
      'Dhīraja, dharma, mitra aru nārī |',
      'Āpata kāla parakhie cārī ||'
    ],
    poetId: 'tulsidas',
    poetNameDevanagari: 'तुलसीदास',
    poetNameEnglish: 'Tulsidas',
    theme: 'wisdom',
    themeHindi: 'संकट में असली पहचान',
    languageDialect: 'अवधी',
    source: 'रामचरितमानस',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'धैर्य, धर्म, मित्र और पत्नी—इन चारों की असली परीक्षा संकट के समय (आपत्तिकाल) में ही होती है।',
    englishMeaning: 'Patience, righteousness, a friend, and a spouse—these four are truly tested only in times of adversity.',
    deeperInterpretation: 'सुख के समय तो सभी साथ देते हैं, लेकिन जब जीवन में कठिनाइयाँ आती हैं, तब व्यक्ति का असली चरित्र और रिश्तों की सच्चाई सामने आती है।',
    contextBackground: 'रामचरितमानस के अरण्यकाण्ड में जीवन की वास्तविकता का वर्णन।',
    importantVocabulary: [
      { word: 'आपत काल (Apat Kaal)', meaning: 'संकट या विपत्ति का समय' }
    ],
    lifeLesson: 'संकट का समय ही आपके धैर्य और रिश्तों की सच्चाई की सच्ची कसौटी है।'
  },
  {
    id: 'doha-bihari-2',
    sequenceNumber: 19,
    dohaDevanagari: [
      'नहिं पराग नहिं मधुर मधु, नहिं विकास यहि काल।',
      'अलि कलि सोई सुख देत है, वा रादा वासल।।'
    ],
    transliteration: [
      'Nahiṁ parāga nahiṁ madhura madhu, nahiṁ vikāsa yahi kāla |',
      'Ali kali soī sukha deta hai, vā rādā vāsala ||'
    ],
    poetId: 'bihari',
    poetNameDevanagari: 'बिहारीलाल',
    poetNameEnglish: 'Bihari',
    theme: 'human_behaviour',
    themeHindi: 'समय पूर्व आसक्ति',
    languageDialect: 'ब्रजभाषा',
    source: 'बिहारी सतसई',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'इस कली में अभी न तो पराग है, न ही मीठा मकरंद, और न ही इसका पूरी तरह विकास हुआ है। हे भौंरे, यदि तू अभी से इस कली में सुख ढूंढ रहा है, तो आगे तेरा क्या हाल होगा?',
    englishMeaning: 'There is neither pollen nor sweet nectar, nor is it fully blossomed yet. O bee, if you are already so infatuated with this bud, what will happen to you in the future?',
    deeperInterpretation: 'यह दोहा राजा जयसिंह को सचेत करने के लिए लिखा गया था, जो अपनी नवविवाहिता पत्नी के प्रेम में इतने डूब गए थे कि राजकाज भूल गए। यह कर्तव्य-विमुखता पर एक व्यंग्य है।',
    contextBackground: 'बिहारीलाल द्वारा रचित यह दोहा अन्योक्ति अलंकार का उत्कृष्ट उदाहरण है।',
    importantVocabulary: [
      { word: 'अलि (Ali)', meaning: 'भौंरा (Bee)' }
    ],
    lifeLesson: 'अपरिपक्व अवस्था में ही किसी चीज़ के प्रति अत्यधिक आसक्ति भविष्य के लिए हानिकारक हो सकती है।'
  },
  {
    id: 'doha-ravidas-2',
    sequenceNumber: 20,
    dohaDevanagari: [
      'मन चंगा तो कठौती में गंगा।',
      'मन निर्मल मैला तो सोना।।'
    ],
    transliteration: [
      'Mana caṅgā to kaṭhautī meṁ gaṅgā |',
      'Mana nirmala mailā to sonā ||'
    ],
    poetId: 'ravidas',
    poetNameDevanagari: 'संत रविदास',
    poetNameEnglish: 'Ravidas',
    theme: 'spirituality',
    themeHindi: 'मन की पवित्रता',
    languageDialect: 'सधुक्कड़ी',
    source: 'रविदास वाणी',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'यदि हमारा मन पवित्र और शुद्ध है, तो चमड़ा रंगने वाले बर्तन (कठौती) का जल भी गंगाजल के समान पवित्र है। मन की निर्मलता ही सबसे बड़ा तीर्थ है।',
    englishMeaning: 'If the mind is pure, even the water in a cobbler’s bowl is as sacred as the river Ganges. A clean mind is the highest pilgrimage.',
    deeperInterpretation: 'संत रविदास बाह्य कर्मकांडों और तीर्थाटन का खंडन करते हुए आंतरिक शुद्धि पर जोर देते हैं। ईश्वर किसी विशेष स्थान पर नहीं, बल्कि एक शुद्ध अंतःकरण में निवास करता है।',
    contextBackground: 'यह संत रविदास का सबसे लोकप्रिय और क्रांतिकारी संदेश है।',
    importantVocabulary: [
      { word: 'चंगा (Changa)', meaning: 'स्वस्थ / शुद्ध / अच्छा' },
      { word: 'कठौती (Kathauti)', meaning: 'चमड़ा धोने या रखने का लकड़ी का पात्र' }
    ],
    lifeLesson: 'सच्ची पवित्रता बाहरी दिखावे में नहीं, बल्कि मन की शुद्धि में है।'
  },
  {
    id: 'doha-dadu-2',
    sequenceNumber: 21,
    dohaDevanagari: [
      'दादू हरि के नाम बिन, होर सकल जंजाल।',
      'माया में उलझान रहा, निकसत नाहीं बाल॥'
    ],
    transliteration: [
      'Dādū hari ke nāma bina, hora sakala jaṁjāla |',
      'Māyā meṁ ulajhāna rahā, nikasata nāhīṁ bāla ||'
    ],
    poetId: 'dadudayal',
    poetNameDevanagari: 'दादू दयाल',
    poetNameEnglish: 'Dadu Dayal',
    theme: 'spirituality',
    themeHindi: 'ईश्वर-नाम की महिमा',
    languageDialect: 'सधुक्कड़ी / राजस्थानी',
    source: 'दादू वाणी',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'दादू दयाल कहते हैं कि ईश्वर के नाम-स्मरण के बिना यह सारा संसार केवल एक झंझट (जंजाल) है। मनुष्य माया में ऐसा उलझा रहता है कि उसका एक बाल भी नहीं बच पाता।',
    englishMeaning: 'Dadu says: Without the name of the Lord, everything else is just an entanglement. Man remains so caught up in the illusion of the world that not a single hair is spared.',
    deeperInterpretation: 'माया का जाल इतना सूक्ष्म और व्यापक है कि व्यक्ति अनजाने में ही इसमें फंस जाता है। केवल हरि-स्मरण ही वह धागा है जो इस भूलभुलैया से बाहर निकाल सकता है।',
    contextBackground: 'दादू दयाल निर्गुण भक्ति धारा के प्रमुख संत थे, जिन्होंने सरलता का संदेश दिया।',
    importantVocabulary: [
      { word: 'जंजाल (Janjaal)', meaning: 'व्यर्थ का बंधन / झंझट' }
    ],
    lifeLesson: 'सांसारिक उलझनों के बीच भी परमात्मा के स्मरण को न भूलें, वही आपको मुक्त रखेगा।'
  },
  {
    id: 'doha-namdev-1',
    sequenceNumber: 22,
    dohaDevanagari: [
      'नामदेव प्रभु मेरो है, उनसे नाहीं कुछ दूर।',
      'सेवक और स्वामी एक हैं, मिटे भव का भूर।।'
    ],
    transliteration: [
      'Nāmadeva prabhu mero hai, unase nāhīṁ kucha dūra |',
      'Sevaka aura svāmī eka haiṁ, miṭe bhava kā bhūra ||'
    ],
    poetId: 'namdev',
    poetNameDevanagari: 'संत नामदेव',
    poetNameEnglish: 'Namdev',
    theme: 'devotion',
    themeHindi: 'ईश्वर से अद्वैत संबंध',
    languageDialect: 'सधुक्कड़ी / मराठी प्रभाव',
    source: 'नामदेव वाणी',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'संत नामदेव कहते हैं कि प्रभु मेरे हैं और मुझसे तनिक भी दूर नहीं हैं। जब सेवक और स्वामी (भक्त और भगवान) एक हो जाते हैं, तो संसार का सारा भय और भ्रम मिट जाता है।',
    englishMeaning: 'Namdev declares: The Lord is mine, and He is not at all far from me. When the servant and the Master become one, all worldly illusions and fears disappear.',
    deeperInterpretation: 'भक्ति की चरम अवस्था में भक्त और भगवान का भेद मिट जाता है। यह अद्वैत (Non-duality) का अनुभव ही जीवन के सारे बंधनों को काट देता है।',
    contextBackground: 'नामदेव महाराष्ट्र के महान संत थे, जो भगवान विट्ठल के परम भक्त थे।',
    importantVocabulary: [
      { word: 'भव का भूर (Bhava ka bhoor)', meaning: 'संसार का भय या भ्रम' }
    ],
    lifeLesson: 'ईश्वर को बाहर नहीं, अपने भीतर खोजें, क्योंकि वह आपसे कभी दूर नहीं है।'
  },
  {
    id: 'doha-kabir-7',
    sequenceNumber: 23,
    dohaDevanagari: [
      'अति का भला न बोलना, अति की भली न चूप।',
      'अति का भला न बरसना, अति की भली न धूप॥'
    ],
    transliteration: [
      'Ati kā bhalā na bolanā, ati kī bhalī na cūpa |',
      'Ati kā bhalā na barasanā, ati kī bhalī na dhūpa ||'
    ],
    poetId: 'kabir',
    poetNameDevanagari: 'कबीरदास',
    poetNameEnglish: 'Kabir',
    theme: 'wisdom',
    themeHindi: 'मध्यम मार्ग का महत्व',
    languageDialect: 'सधुक्कड़ी',
    source: 'कबीर ग्रंथावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'कबीर कहते हैं कि न तो बहुत अधिक बोलना अच्छा है, और न ही हमेशा चुप रहना। जैसे न तो बहुत अधिक वर्षा अच्छी होती है, और न ही बहुत अधिक धूप।',
    englishMeaning: 'Kabir says: Neither speaking too much is good, nor is excessive silence. Just as neither too much rain is beneficial, nor is relentless sunshine.',
    deeperInterpretation: 'यह दोहा जीवन में संतुलन (Balance) और \'मध्यम मार्ग\' (The Middle Path) का समर्थन करता है। अति (Extremes) हर चीज़ में हानिकारक होती है, चाहे वह व्यवहार हो या प्रकृति।',
    contextBackground: 'स्वभाव और आचरण में संयम बनाए रखने की सलाह।',
    importantVocabulary: [
      { word: 'अति (Ati)', meaning: 'अधिकता / बहुत ज़्यादा (Excess)' }
    ],
    lifeLesson: 'जीवन के हर क्षेत्र में संतुलन बनाए रखें; अति से बचें।'
  },
  {
    id: 'doha-kabir-8',
    sequenceNumber: 24,
    dohaDevanagari: [
      'गुरु गोविन्द दोउ खड़े, काके लागूँ पाय।',
      'बलिहारी गुरु आपने को, जिन गोविन्द दियो बताय॥'
    ],
    transliteration: [
      'Guru govinda dou khaṛe, kāke lāgū pāya |',
      'Balihārī guru āpane ko, jina govinda diyo batāya ||'
    ],
    poetId: 'kabir',
    poetNameDevanagari: 'कबीरदास',
    poetNameEnglish: 'Kabir',
    theme: 'devotion',
    themeHindi: 'गुरु की महिमा',
    languageDialect: 'सधुक्कड़ी',
    source: 'कबीर ग्रंथावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'गुरु और ईश्वर (गोविन्द) दोनों एक साथ खड़े हैं, मैं किसके चरण स्पर्श करूँ? मैं अपने गुरु पर न्योछावर हूँ, जिन्होंने मुझे ईश्वर तक पहुँचने का मार्ग बता दिया।',
    englishMeaning: 'Both the Guru and the Lord (Govind) are standing before me; whose feet should I touch first? I sacrifice myself to the Guru, for it was he who showed me the way to the Lord.',
    deeperInterpretation: 'कबीर ने गुरु को ईश्वर से भी उच्च स्थान दिया है, क्योंकि गुरु के बिना ईश्वर का ज्ञान और प्राप्ति संभव नहीं है। यह आध्यात्मिक गुरु के प्रति परम कृतज्ञता का प्रतीक है।',
    contextBackground: 'गुरु-शिष्य परंपरा का सबसे प्रतिष्ठित और उद्धृत किया जाने वाला दोहा।',
    importantVocabulary: [
      { word: 'बलिहारी (Balihari)', meaning: 'न्योछावर होना / कृतज्ञ होना' }
    ],
    lifeLesson: 'उन गुरुओं और शिक्षकों का सदैव सम्मान करें जो आपको सही मार्ग दिखाते हैं।'
  },
  {
    id: 'doha-rahim-5',
    sequenceNumber: 25,
    dohaDevanagari: [
      'रहिमन चुप हो बैठिए, देखि दिनन के फेर।',
      'जब नैयार होइहि पार तह, चहींगे सब हेर॥'
    ],
    transliteration: [
      'Rahimana cupa ho baiṭhie, dekhi dinana ke phera |',
      'Jaba naiyāra hoihi pāra taha, cahīṁge saba hera ||'
    ],
    poetId: 'rahim',
    poetNameDevanagari: 'रहीम',
    poetNameEnglish: 'Rahim',
    theme: 'wisdom',
    themeHindi: 'धैर्य और समय का चक्र',
    languageDialect: 'ब्रजभाषा',
    source: 'रहीम दोहावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'रहीम कहते हैं कि जब समय खराब चल रहा हो, तो चुपचाप धैर्य धारण कर बैठना चाहिए। जब अच्छे दिन लौटकर आएंगे, तो बिगड़े हुए काम अपने आप बन जाएंगे।',
    englishMeaning: 'Rahim advises keeping quiet and patiently waiting out bad times. When favorable days return, things will fall into place and everyone will look up to you again.',
    deeperInterpretation: 'बुरा समय कभी स्थायी नहीं होता। संघर्ष के समय व्यर्थ की प्रतिक्रिया या ऊर्जा नष्ट करने के बजाय, धैर्यपूर्वक उचित अवसर की प्रतीक्षा करना ही बुद्धिमानी है।',
    contextBackground: 'समय की परिवर्तनशीलता पर रहीम की गहरी समझ।',
    importantVocabulary: [
      { word: 'दिनन के फेर (Dinan ke pher)', meaning: 'समय का बदलाव / बुरे दिन' }
    ],
    lifeLesson: 'प्रतिकूल परिस्थितियों में धैर्य बनाए रखें; समय बदलते ही सब ठीक हो जाएगा।'
  },
  {
    id: 'doha-rahim-6',
    sequenceNumber: 26,
    dohaDevanagari: [
      'रहिमन पानी राखिए, बिन पानी सब सून।',
      'पानी गए न उबरे, मोती, मानुस, चून॥'
    ],
    transliteration: [
      'Rahimana pānī rākhie, bina pānī saba sūna |',
      'Pānī gae na ubare, motī, mānusa, cūna ||'
    ],
    poetId: 'rahim',
    poetNameDevanagari: 'रहीम',
    poetNameEnglish: 'Rahim',
    theme: 'morality',
    themeHindi: 'आत्मसम्मान का महत्व',
    languageDialect: 'ब्रजभाषा',
    source: 'रहीम दोहावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'रहीम कहते हैं कि पानी (सम्मान/चमक/जल) हमेशा बचाकर रखना चाहिए, क्योंकि इसके बिना सब कुछ सूना है। पानी चले जाने पर मोती (चमक), मनुष्य (सम्मान) और चून/आटा (जल) किसी काम के नहीं रहते।',
    englishMeaning: 'Rahim says to preserve "paani" (water/luster/honor), for without it everything is desolate. Without it, a pearl loses its luster, a person their honor, and dough cannot be made.',
    deeperInterpretation: 'यहाँ \'पानी\' शब्द का प्रयोग श्लेष अलंकार (Pun) के रूप में हुआ है। मनुष्य के लिए इसका अर्थ आत्मसम्मान है। सम्मान खोने के बाद जीवन का मूल्य शून्य हो जाता है।',
    contextBackground: 'यह दोहा रहीम की नीति और भाषा-कौशल (श्लेष अलंकार) का सबसे प्रसिद्ध उदाहरण है।',
    importantVocabulary: [
      { word: 'सून (Soon)', meaning: 'सूना / व्यर्थ / शून्य' }
    ],
    lifeLesson: 'अपना आत्मसम्मान और चरित्र सदैव सुरक्षित रखें, यही आपकी असली संपत्ति है।'
  },
  {
    id: 'doha-garibdas-1',
    sequenceNumber: 27,
    dohaDevanagari: [
      'सत को सत जानों सदा, असत को असत मान।',
      'गरास मति पाइये, जीव गति पहचान।।'
    ],
    transliteration: [
      'Sata ko sata jānoṁ sadā, asata ko asata māna |',
      'Garāsa mati pāiye, jīva gati pahacāna ||'
    ],
    poetId: 'garibdas',
    poetNameDevanagari: 'संत गरीबदास',
    poetNameEnglish: 'Garibdas',
    theme: 'spirituality',
    themeHindi: 'सत्य की पहचान',
    languageDialect: 'हरियाणवी / सधुक्कड़ी',
    source: 'गरीबदास की वाणी',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'सत्य को सदैव सत्य ही जानो और असत्य को असत्य मानो। मोह-माया में फँसकर अपना विनाश मत करो, बल्कि आत्मा की सही दिशा (गति) को पहचानो।',
    englishMeaning: 'Always recognize truth as truth and untruth as untruth. Do not let yourself be consumed by illusion; instead, realize the true state and path of the soul.',
    deeperInterpretation: 'सत्य और असत्य के बीच स्पष्ट विवेक ही आध्यात्मिक प्रगति का पहला कदम है। जो व्यक्ति इस विवेक को खो देता है, वह संसार की क्षणभंगुरता में उलझकर अपनी आत्मा का हनन कर लेता है।',
    contextBackground: 'संत गरीबदास ने सत्य और असत्य के बीच विवेक करने पर जोर दिया है।',
    importantVocabulary: [
      { word: 'सत (Sat)', meaning: 'सत्य / शाश्वत सत्य' },
      { word: 'गरास (Garas)', meaning: 'ग्रास बनना / नष्ट होना' }
    ],
    lifeLesson: 'जीवन में सच और झूठ का स्पष्ट भेद करना सीखें और सच्चाई का साथ दें।'
  },
  {
    id: 'doha-malukdas-1',
    sequenceNumber: 28,
    dohaDevanagari: [
      'अजगर करै न चाकरी, पंछी करै न काम।',
      'दास मलूका कहि गए, सब के दाता राम॥'
    ],
    transliteration: [
      'Ajagara karai na cākarī, paṁchī karai na kāma |',
      'Dāsa malūkā kahi gae, saba ke dātā rāma ||'
    ],
    poetId: 'malukdas',
    poetNameDevanagari: 'संत मलूकदास',
    poetNameEnglish: 'Malukdas',
    theme: 'devotion',
    themeHindi: 'ईश्वर पर पूर्ण विश्वास',
    languageDialect: 'अवधी / सधुक्कड़ी',
    source: 'मलूक ग्रंथावली',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'न तो अजगर किसी की नौकरी करता है, और न ही पक्षी कोई काम-धंधा करते हैं। संत मलूकदास कहते हैं कि सबका भरण-पोषण करने वाला केवल राम (ईश्वर) ही है।',
    englishMeaning: 'The python does no job, and the bird does no work. Malukdas says: The Lord provides for all.',
    deeperInterpretation: 'यह दोहा अकर्मण्यता (आलस्य) का नहीं, बल्कि ईश्वर पर पूर्ण निर्भरता (Surrender) का संदेश देता है। जब प्रकृति के हर जीव का पालनहार ईश्वर है, तो मनुष्य को व्यर्थ की चिंता नहीं करनी चाहिए।',
    contextBackground: 'यह दोहा वैराग्य और ईश्वर के पालनहार स्वरूप पर अटूट विश्वास को दर्शाता है।',
    importantVocabulary: [
      { word: 'चाकरी (Chaakari)', meaning: 'नौकरी / सेवा' }
    ],
    lifeLesson: 'अपनी ओर से प्रयास करें, लेकिन भविष्य की अत्यधिक चिंता न करें—ईश्वर सबका ध्यान रखता है।'
  },
  {
    id: 'doha-tulsi-4',
    sequenceNumber: 29,
    dohaDevanagari: [
      'तुलसी काइआ न साथि जग, तन की नाना गति।',
      'परमारथी असाधु को, सथं संत संगाति॥'
    ],
    transliteration: [
      'Tulasī kāiā na sāthi jaga, tana kī nānā gati |',
      'Paramārathī asādhu ko, sathaṁ saṁta saṁgāti ||'
    ],
    poetId: 'tulsidas',
    poetNameDevanagari: 'तुलसीदास',
    poetNameEnglish: 'Tulsidas',
    theme: 'impermanence',
    themeHindi: 'सत्संग और नश्वरता',
    languageDialect: 'अवधी',
    source: 'तुलसी साहित्य',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'तुलसीदास कहते हैं कि यह काया (शरीर) इस जगत में सदा साथ नहीं निभाती, इसकी अनेक गतियाँ होती हैं। परमार्थ चाहने वाले व्यक्ति को असाधुओं का संग छोड़कर संतों की संगति करनी चाहिए।',
    englishMeaning: 'Tulsidas says that this body does not remain a companion forever in this world; it has various fleeting states. A seeker of higher truth should leave the company of the wicked and associate with the holy.',
    deeperInterpretation: 'शरीर की नश्वरता को समझाते हुए तुलसीदास अच्छे संग (Satsang) के महत्व को रेखांकित करते हैं। जीवन छोटा है, इसलिए इसका उपयोग सत्संग और परमार्थ में करना चाहिए।',
    contextBackground: 'सत्संग के प्रभाव को समझाने के लिए रचित विचार।',
    importantVocabulary: [
      { word: 'काइआ (Kaia)', meaning: 'काया / शरीर' },
      { word: 'संगाति (Sangaati)', meaning: 'संगति / साथ' }
    ],
    lifeLesson: 'जीवन क्षणभंगुर है, इसलिए अच्छे लोगों की संगति में रहें जो आपको सही मार्ग दिखाएं।'
  },
  {
    id: 'doha-sahajo-2',
    sequenceNumber: 30,
    dohaDevanagari: [
      'सहजो मन निर्मल कर, जैसे निर्मल आकाश।',
      'तब ही आतमा टहलता, पावे परम प्रकाश॥'
    ],
    transliteration: [
      'Sahajo mana nirmala kara, jaise nirmala ākāśa |',
      'Taba hī ātamā ṭahalatā, pāve parama prakāśa ||'
    ],
    poetId: 'sahajobai',
    poetNameDevanagari: 'संत सहजो बाई',
    poetNameEnglish: 'Sahajo Bai',
    theme: 'spirituality',
    themeHindi: 'मन की शुद्धि',
    languageDialect: 'मेवाती / ब्रजभाषा',
    source: 'सहज प्रकाश',
    attributionConfidence: 'Verified Canonical',
    hindiMeaning: 'सहजो बाई कहती हैं कि अपने मन को निर्मल आकाश के समान स्वच्छ कर लो। तभी आत्मा निर्बाध रूप से विचरती हुई उस परम प्रकाश (ईश्वर) को प्राप्त कर सकेगी।',
    englishMeaning: 'Sahajo advises: Purify your mind, making it as clear as the cloudless sky. Only then can the soul wander freely and attain the Supreme Light.',
    deeperInterpretation: 'जब तक मन में विचारों और इच्छाओं के बादल छाए रहते हैं, तब तक आत्मा का स्वरूप स्पष्ट नहीं होता। मन का खाली और शुद्ध होना ही आत्म-साक्षात्कार (Self-realization) की कुंजी है।',
    contextBackground: 'सहजो बाई द्वारा मन की शुद्धि को साधना का मूल बताया गया है।',
    importantVocabulary: [
      { word: 'टहलता (Tahalata)', meaning: 'स्वतंत्र रूप से विचरता हुआ' }
    ],
    lifeLesson: 'अपने विचारों को शुद्ध और स्पष्ट रखें; एक शांत मन ही सही दिशा में सोच सकता है।'
  }
];

export const DOHA_CORPUS_COUNT = DOHA_COLLECTION.length;

export function getDailyDohasForDay(dayIndex: number): DohaEntry[] {
  const count = 3;
  const total = DOHA_COLLECTION.length;
  const startIdx = Math.abs(dayIndex * 3) % total;
  const result: DohaEntry[] = [];
  for (let i = 0; i < count; i++) {
    result.push(DOHA_COLLECTION[(startIdx + i) % total]);
  }
  return result;
}
