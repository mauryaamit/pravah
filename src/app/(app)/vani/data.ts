export interface ShlokaDayData {
  shloka: string;       // Devanagari Sanskrit text
  iast: string;         // IAST transliteration
  source: string;       // e.g. "भगवद्गीता, अध्याय 2, श्लोक 47"
  sourceLine: string;   // Short e.g. "Bhagavad Gita 2.47"
  meaning_hindi: string; // Hindi meaning in Devanagari
  meaning_english: string; // English meaning
}

export interface DohaDayData {
  doha: string;         // Devanagari
  poet: string;         // e.g. "कबीर"
  meaning_hindi: string; // Hindi only
}

export interface ChaupaiDayData {
  chaupai: string;     // Devanagari, with line breaks
  kand: string;        // e.g. "बालकाण्ड"
  meaning_hindi: string;
}

export interface LokKathaDayData {
  saying: string;      // Devanagari dialect text
  language: string;    // e.g. "अवधी", "ब्रज", "मैथिली"
  meaning_hindi: string;
}

export interface HindiWordDayData {
  word: string;
  meaning: string;
  usage: string;
}

export const SHLOKAS: ShlokaDayData[] = [
  {
    shloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    iast: "karmaṇy-evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
    source: "भगवद्गीता, अध्याय 2, श्लोक 47",
    sourceLine: "Bhagavad Gita 2.47",
    meaning_hindi: "कर्म करना ही तुम्हारा अधिकार है, उसके फलों में कभी नहीं। कर्मों के फल की इच्छा वाले मत बनो और न ही अकर्मण्यता में तुम्हारी आसक्ति हो।",
    meaning_english: "You have the right to perform your actions, but never to the fruits of those actions. Let not the fruits of action be your motive, nor let your attachment be to inaction."
  },
  {
    shloka: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    iast: "yadā yadā hi dharmasya glānir bhavati bhārata |\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",
    source: "भगवद्गीता, अध्याय 4, श्लोक 7",
    sourceLine: "Bhagavad Gita 4.7",
    meaning_hindi: "हे भरतवंशी अर्जुन! जब-जब धर्म की हानि होती है और अधर्म का उत्थान होता है, तब-तब मैं अपने साकार रूप को प्रकट करता हूँ।",
    meaning_english: "Whenever there is a decline in righteousness, O Bharat, and a rise in unrighteousness, at that time I manifest myself."
  },
  {
    shloka: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
    iast: "na jāyate mriyate vā kadācin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ |\najo nityaḥ śāśvato 'yaṁ purāṇo\nna hanyate hanymāne śarīre",
    source: "भगवद्गीता, अध्याय 2, श्लोक 20",
    sourceLine: "Bhagavad Gita 2.20",
    meaning_hindi: "यह आत्मा न कभी जन्म लेता है और न कभी मरता है। यह न तो उत्पन्न होकर फिर होने वाला ही है। यह अजन्मा, नित्य, सनातन और पुरातन है, शरीर के मारे जाने पर भी यह नहीं मारा जाता।",
    meaning_english: "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain."
  },
  {
    shloka: "अहं ब्रह्मास्मि",
    iast: "ahaṁ brahmāsmi",
    source: "बृहदारण्यक उपनिषद्, 1.4.10",
    sourceLine: "Brihadaranyaka Upanishad 1.4.10",
    meaning_hindi: "मैं ब्रह्म (परम सत्य/चेतना) हूँ। यह महावाक्य आत्मा की अनंत और सार्वभौमिक प्रकृति को दर्शाता है।",
    meaning_english: "I am Brahman (the absolute reality). This great Upanishadic declaration asserts the ultimate identity of the individual soul with the universal consciousness."
  },
  {
    shloka: "तत्त्वमसि",
    iast: "tat tvam asi",
    source: "छान्दोग्य उपनिषद्, 6.8.7",
    sourceLine: "Chandogya Upanishad 6.8.7",
    meaning_hindi: "वह तुम हो। यह महावाक्य जीव और ईश्वर की अंतर्निहित एकता को प्रकट करता है।",
    meaning_english: "That thou art. This declaration expresses the essential unity between the individual consciousness and the supreme absolute reality."
  },
  {
    shloka: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥",
    iast: "sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ |\nsarve bhadrāṇi paśyantu mā kaścid duḥkha-bhāg bhavet",
    source: "पारम्परिक उपनिषद प्रार्थना",
    sourceLine: "Upanishadic Peace Prayer",
    meaning_hindi: "सभी सुखी हों, सभी निरोगी हों। सभी का कल्याण हो और कोई भी दुःख का भागी न बने।",
    meaning_english: "May all be happy, may all be free from illness. May all see what is auspicious, may no one suffer."
  },
  {
    shloka: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    iast: "ananyāś cintayanto māṁ ye janāḥ paryupāsate |\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham",
    source: "भगवद्गीता, अध्याय 9, श्लोक 22",
    sourceLine: "Bhagavad Gita 9.22",
    meaning_hindi: "जो अनन्य प्रेमी भक्त मुझ परमेश्वर का निरंतर चिंतन करते हुए निष्काम भाव से भजते हैं, उन नित्य निरंतर चिंतन करने वाले पुरुषों का योगक्षेम (आवश्यकताओं की पूर्ति और रक्षा) मैं स्वयं वहन करता हूँ।",
    meaning_english: "For those who worship Me with undivided devotion, meditating on My transcendental form, to them I carry what they lack and preserve what they already possess."
  },
  {
    shloka: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    iast: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja |\nahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
    source: "भगवद्गीता, अध्याय 18, श्लोक 66",
    sourceLine: "Bhagavad Gita 18.66",
    meaning_hindi: "सभी धर्मों (कर्तव्यों और अवधारणाओं) का परित्याग करके केवल मेरी शरण में आ जाओ। मैं तुम्हें सभी पापों से मुक्त कर दूँगा, शोक मत करो।",
    meaning_english: "Abandon all varieties of duties and seek refuge in Me alone. I shall liberate you from all sins; do not grieve."
  },
  {
    shloka: "क्रोधद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
    iast: "krodhād bhavati sammohaḥ sammohat smṛti-vibhramaḥ |\nsmṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati",
    source: "भगवद्गीता, अध्याय 2, श्लोक 63",
    sourceLine: "Bhagavad Gita 2.63",
    meaning_hindi: "क्रोध से सम्मोह (अविवेक) उत्पन्न होता है, सम्मोह से स्मृति भ्रमित होती है, स्मृति भ्रमित होने से बुद्धि का नाश होता है और बुद्धि नष्ट होने से मनुष्य का पूर्ण विनाश हो जाता है।",
    meaning_english: "From anger arises delusion; from delusion comes loss of memory; from loss of memory comes ruin of intellect; and from ruin of intellect, a person is completely destroyed."
  },
  {
    shloka: "सुखदुःखे समे कृत्वा लाभालाभौ जयाज यौ।\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥",
    iast: "sukha-duḥkhe same kṛtvā lābhālābhau jayājayau |\ntato yuddhāya yujyasva naivaṁ pāpam avāpsyasi",
    source: "भगवद्गीता, अध्याय 2, श्लोक 38",
    sourceLine: "Bhagavad Gita 2.38",
    meaning_hindi: "सुख-दुःख, लाभ-हानि, जय-पराजय को समान मानकर युद्ध (कर्तव्य) के लिए तैयार हो जाओ; इस प्रकार आचरण करने से तुम्हें कोई पाप नहीं लगेगा।",
    meaning_english: "Treating alike pleasure and pain, gain and loss, victory and defeat, fight for the sake of duty; thus you shall not incur sin."
  },
  {
    shloka: "सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः।\nयेनाक्रमन्त्यृषयो ह्याप्तकामा यत्र तत् सत्यस्य परमं निधानम्॥",
    iast: "satyameva jayate nānṛtaṁ satyena panthā vitato devayānaḥ |\nyenākramantyrṣayo hyāptakāmā yatra tat satyasya paramaṁ nidhānam",
    source: "मुण्डक उपनिषद्, 3.1.6",
    sourceLine: "Mundaka Upanishad 3.1.6",
    meaning_hindi: "सत्य की ही जीत होती है, असत्य की नहीं। सत्य के माध्यम से ही वह मार्ग प्रशस्त होता है जिसके द्वारा ऋषियों की कामनाएं पूरी होती हैं और वे उस परम धाम को पाते हैं।",
    meaning_english: "Truth alone triumphs, not untruth. By truth is laid out the divine path by which sages, having attained their desires, ascend to where lies the supreme treasure of Truth."
  },
  {
    shloka: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    iast: "uddhared ātmanātmānaṁ nātmānam avasādayet |\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
    source: "भगवद्गीता, अध्याय 6, श्लोक 5",
    sourceLine: "Bhagavad Gita 6.5",
    meaning_hindi: "मनुष्य को अपने मन के द्वारा स्वयं को ऊंचा उठाना चाहिए, नीचे नहीं गिराना चाहिए। क्योंकि मन ही आत्मा का मित्र है और मन ही आत्मा का शत्रु भी है।",
    meaning_english: "Let a man lift himself by his own self, let him not degrade himself. For the self is the friend of the self, and the self is the enemy of the self."
  },
  {
    shloka: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥",
    iast: "vidyā-vinaya-sampanne brāhmaṇe gavi hastini |\nśuni caiva śvapāke ca paṇḍitāḥ sama-darśinaḥ",
    source: "भगवद्गीता, अध्याय 5, श्लोक 18",
    sourceLine: "Bhagavad Gita 5.18",
    meaning_hindi: "ज्ञानी जन एक विनम्र, विद्वान ब्राह्मण, गाय, हाथी, कुत्ते और अछूत में समान रूप से एक ही परमात्मा को देखते हैं।",
    meaning_english: "The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle priest, a cow, an elephant, a dog, and a dog-eater."
  },
  {
    shloka: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
    iast: "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ |\nsa yat pramāṇaṁ kurute lokas tad anuvartate",
    source: "भगवद्गीता, अध्याय 3, श्लोक 21",
    sourceLine: "Bhagavad Gita 3.21",
    meaning_hindi: "महापुरुष जो-जो आचरण करते हैं, अन्य लोग भी वैसा ही आचरण करते हैं। वह जो कुछ भी आदर्श स्थापित करते हैं, समस्त संसार उसका अनुसरण करता है।",
    meaning_english: "Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues."
  },
  {
    shloka: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
    iast: "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati |\ntad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ",
    source: "भगवद्गीता, अध्याय 9, श्लोक 26",
    sourceLine: "Bhagavad Gita 9.26",
    meaning_hindi: "जो कोई भी मुझे भक्तिपूर्वक एक पत्ता, फूल, फल या जल अर्पित करता है, उस शुद्ध मन वाले का प्रेमपूर्वक दिया गया उपहार मैं स्वीकार करता हूँ।",
    meaning_english: "If one offers Me with love and devotion a leaf, a flower, a fruit or water, I will accept it."
  },
  {
    shloka: "श्रद्धावान्ल्लभते ज्ञानं तत्परः संयतेन्द्रियः।\nज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥",
    iast: "śraddhāvāl labhate jñānaṁ tat-paraḥ saṁyatendriyaḥ |\njñānaṁ labdhvā parāṁ śāntim acireṇādhigच्छti",
    source: "भगवद्गीता, अध्याय 4, श्लोक 39",
    sourceLine: "Bhagavad Gita 4.39",
    meaning_hindi: "जितेन्द्रिय और साधनापरायण श्रद्धावान मनुष्य ज्ञान को प्राप्त करता है और ज्ञान प्राप्त होने पर वह तत्काल परम शांति को पा लेता है।",
    meaning_english: "A faithful man who is dedicated to transcendental knowledge and who subdues his senses quickly attains absolute peace."
  },
  {
    shloka: "अहिंसा परमो धर्मः",
    iast: "ahiṁsā paramo dharmaḥ",
    source: "महाभारत, अनुशासन पर्व, 115.25",
    sourceLine: "Mahabharata 115.25",
    meaning_hindi: "अहिंसा मनुष्य का सबसे बड़ा धर्म और कर्तव्य है।",
    meaning_english: "Non-violence is the highest moral duty."
  },
  {
    shloka: "असतो मा सद्गमय तमसो मा ज्योतिर्गमय।\nमृत्योर्मा अमृतं गमय॥",
    iast: "asato mā sad-gamaya tamaso mā jyotir-gamaya |\nmṛtyor mā amṛtaṁ gamaya",
    source: "बृहदारण्यक उपनिषद्, 1.3.28",
    sourceLine: "Brihadaranyaka Upanishad 1.3.28",
    meaning_hindi: "मुझे असत्य से सत्य की ओर ले चलो, अंधकार से प्रकाश की ओर ले चलो, और मृत्यु से अमरता की ओर ले चलो।",
    meaning_english: "Lead me from the unreal to the real, lead me from darkness to light, lead me from death to immortality."
  },
  {
    shloka: "योगः कर्मसु कौशलम्",
    iast: "yogaḥ karmasu kauśalam",
    source: "भगवद्गीता, अध्याय 2, श्लोक 50",
    sourceLine: "Bhagavad Gita 2.50",
    meaning_hindi: "कर्मों को कुशलता और अनासक्ति के साथ करना ही योग है।",
    meaning_english: "Yoga is excellence and equanimity in action."
  },
  {
    shloka: "वसुधैव कुटुम्बकम्",
    iast: "vasudhaiva kuṭumbakam",
    source: "महोपनिषद्, अध्याय 6, श्लोक 71",
    sourceLine: "Maha Upanishad 6.71",
    meaning_hindi: "यह समस्त पृथ्वी ही मेरा परिवार है। संकीर्ण विचारधारा वाले लोग 'अपना-पराया' सोचते हैं, जबकि विशाल हृदय वालों के लिए सारी दुनिया कुटुंब है।",
    meaning_english: "The whole world is indeed one family."
  },
  {
    shloka: "धीमहि धियो यो नः प्रचोदयात्",
    iast: "dhīmahi dhiyo yo naḥ pracodayāt",
    source: "ऋग्वेद, गायत्री मन्त्र (3.62.10)",
    sourceLine: "Rigveda 3.62.10",
    meaning_hindi: "हम उस परम तेज का ध्यान करते हैं जो हमारी बुद्धि और विचारों को प्रेरित और सन्मार्ग पर अग्रसर करे।",
    meaning_english: "May the divine light of the supreme reality inspire and illuminate our intellect and minds."
  },
  {
    shloka: "संघाच्छध्वं संवदध्वं सं वो मनांसि जानताम्।",
    iast: "saṅgacchadhvaṁ saṁvadadhvaṁ saṁ vo manāṁsi jānatām",
    source: "ऋग्वेद, 10.191.2",
    sourceLine: "Rigveda 10.191.2",
    meaning_hindi: "तुम सब एक साथ चलो, एक सुर में बोलो, और तुम्हारे मन एक समान होकर सत्य को जानें।",
    meaning_english: "Walk together, speak in harmony, let your minds be aligned in understanding."
  },
  {
    shloka: "ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥",
    iast: "īśā vāsyam idaṁ sarvaṁ yat kiñca jagatyāṁ jagat |\ntena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam",
    source: "ईशोपनिषद्, श्लोक 1",
    sourceLine: "Ishopanishad 1",
    meaning_hindi: "इस ब्रह्मांड में जो कुछ भी चर-अचर है, वह ईश्वर से व्याप्त है। इसलिए अनासक्त भाव से इसका उपभोग करो, किसी के धन की लालसा मत करो।",
    meaning_english: "Everything animates or inanimate in the universe is controlled and owned by the Divine. Therefore, accept only what is necessary, and do not covet other people's wealth."
  },
  {
    shloka: "संतुष्टः सततं योगी यतात्मा दृढनिश्चयः।\nमय्यर्पितमनोबुद्धिर्यो मे भक्तः स मे प्रियः॥",
    iast: "saṁtuṣṭaḥ satataṁ yogī yatātmā dṛḍha-niścayaḥ |\nmayy arpita-mano-buddhir yo me bhaktaḥ sa me priyaḥ",
    source: "भगवद्गीता, अध्याय 12, श्लोक 14",
    sourceLine: "Bhagavad Gita 12.14",
    meaning_hindi: "जो निरंतर संतुष्ट है, संयमित है, दृढ़ निश्चयी है, और जिसने अपना मन व बुद्धि मुझे समर्पित कर दी है, ऐसा भक्त मुझे प्रिय है।",
    meaning_english: "He who is always satisfied, self-controlled, possessing firm conviction, with mind and intellect dedicated to Me - such a devotee is dear to Me."
  },
  {
    shloka: "मन एव मनुष्याणां कारणं बन्धमोक्षयोः।",
    iast: "mana eva manuṣyāṇāṁ kāraṇaṁ bandha-mokṣayoḥ",
    source: "मैत्रायणी उपनिषद्, 6.34",
    sourceLine: "Maitrayani Upanishad 6.34",
    meaning_hindi: "मन ही मनुष्यों के बंधन (दुःख) और मोक्ष (मुक्ति) का मुख्य कारण है।",
    meaning_english: "Mind alone is the cause of bondage and liberation for human beings."
  },
  {
    shloka: "स्वधर्मे निधनं श्रेयः परधर्मो भयावहः।",
    iast: "svadharme nidhanaṁ śreyaḥ paradharmo bhayāvahaḥ",
    source: "भगवद्गीता, अध्याय 3, श्लोक 35",
    sourceLine: "Bhagavad Gita 3.35",
    meaning_hindi: "अपने स्वभाव के अनुकूल कर्तव्य का पालन करते हुए मरना भी कल्याणकारी है, किन्तु दूसरे के स्वभाव के अनुकूल कर्तव्य को अपनाना भय पैदा करने वाला है।",
    meaning_english: "It is better to discharge one's own prescribed duty, even though faultily, than another's duty. Destruction in the course of performing one's own duty is better than performing another's."
  },
  {
    shloka: "ऋते ज्ञानान्न मुक्तिः।",
    iast: "ṛte jñānānna muktiḥ",
    source: "शङ्कराचार्य सूत्र",
    sourceLine: "Shankara Sutra",
    meaning_hindi: "ज्ञान के बिना मुक्ति संभव नहीं है। अज्ञान के हटने पर ही सत्य का साक्षात्कार होता है।",
    meaning_english: "Without knowledge, liberation is not attained."
  },
  {
    shloka: "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    iast: "tasmād asaktaḥ satataṁ kāryaṁ karma samācara |\nasakto hy ācaran karma param āpnoti pūruṣaḥ",
    source: "भगवद्गीता, अध्याय 3, श्लोक 19",
    sourceLine: "Bhagavad Gita 3.19",
    meaning_hindi: "इसलिए आसक्ति से रहित होकर निरंतर अपने कर्तव्य कर्म का संपादन करो, क्योंकि अनासक्त भाव से कर्म करने पर मनुष्य परम पद को प्राप्त करता है।",
    meaning_english: "Therefore, without attachment, perform always the actions that should be done; for by performing action without attachment, man reaches the Supreme."
  },
  {
    shloka: "ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति।\nनिर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते॥",
    iast: "jñeyaḥ sa nitya-sannyāsī yo na dveṣṭi na kāṅkṣati |\nnirdvandvo hi mahā-bāho sukhaṁ bandhāt pramucyate",
    source: "भगवद्गीता, अध्याय 5, श्लोक 3",
    sourceLine: "Bhagavad Gita 5.3",
    meaning_hindi: "जो न किसी से द्वेष करता है और न किसी वस्तु की आकांक्षा करता है, उसे नित्य संन्यासी समझना चाहिए। ऐसा मनुष्य द्वंद्वों से मुक्त होकर सरलतापूर्वक सांसारिक बंधन से छूट जाता है।",
    meaning_english: "He who neither hates nor desires should be known as a perpetual renunciant. Free from all dualities, O mighty-armed one, he is easily liberated from bondage."
  },
  {
    shloka: "समत्वं योग उच्यते।",
    iast: "samatvaṁ yoga ucyate",
    source: "भगवद्गीता, अध्याय 2, श्लोक 48",
    sourceLine: "Bhagavad Gita 2.48",
    meaning_hindi: "समता की स्थिति (अनुकूलता-प्रतिकूलता में सम रहना) ही योग कहलाती है।",
    meaning_english: "Equanimity is called Yoga."
  }
];

export const DOHAS: DohaDayData[] = [
  {
    doha: "दुख में सुमिरन सब करें, सुख में करे न कोय।\nजो सुख में सुमिरन करें, दुख काहे को होय।।",
    poet: "कबीर",
    meaning_hindi: "दुख के समय सभी लोग ईश्वर को याद करते हैं, परंतु सुख में कोई उन्हें याद नहीं करता। यदि सुख में भी ईश्वर का स्मरण किया जाए, तो जीवन में कभी दुख आएगा ही क्यों।"
  },
  {
    doha: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय।\nजो दिल खोजा आपना, मुझसे बुरा न कोय।।",
    poet: "कबीर",
    meaning_hindi: "जब मैं इस संसार में बुरे लोगों की खोज करने निकला, तो मुझे कोई भी बुरा नहीं मिला। परंतु जब मैंने अंतर्मुखी होकर स्वयं के मन को टटोला, तो पाया कि मुझसे बुरा कोई नहीं है।"
  },
  {
    doha: "माटी कहे कुम्हार से, तू क्या रौंदे मोय।\nएक दिन ऐसा आएगा, मैं रौंदूंगी तोय।।",
    poet: "कबीर",
    meaning_hindi: "मिट्टी कुम्हार से कहती है कि आज तू मिट्टी को अपने पैरों से रौंद रहा है। परंतु एक दिन समय पलटेगा जब मृत्यु के पश्चात तू इसी मिट्टी में मिल जाएगा और मैं तुझे अपने भीतर लीन कर लूँगी।"
  },
  {
    doha: "काल करे सो आज कर, आज करे सो अब।\nपल में परलय होएगी, बहुरि करेगा कब।।",
    poet: "कबीर",
    meaning_hindi: "कल का काम आज ही कर लेना चाहिए, और आज का काम अभी। क्योंकि पल भर में प्रलय हो सकती है (जीवन समाप्त हो सकता है), फिर तुम अपना कार्य कब पूरा करोगे।"
  },
  {
    doha: "साईं इतना दीजिए, जा में कुटुम समाय।\nमैं भी भूखा न रहूं, साधु न भूखा जाय।।",
    poet: "कबीर",
    meaning_hindi: "हे ईश्वर, मुझे केवल उतना ही धन और संसाधन दीजिए जिससे मेरा परिवार आराम से चल सके। मैं भी भूखा न रहूँ और मेरे द्वार पर आया कोई साधु-संत भी भूखा वापस न जाए।"
  },
  {
    doha: "रहिमन धागा प्रेम का, मत तोड़ो चटकाय।\nटूटे से फिर न जुड़े, जुड़े तो गाँठ पड़ जाय।।",
    poet: "रहीम",
    meaning_hindi: "प्रेम का रिश्ता एक धागे की तरह नाजुक होता है, इसे झटके से नहीं तोड़ना चाहिए। यदि यह धागा एक बार टूट जाता है, तो दोबारा जोड़ने पर उसमें गाँठ पड़ जाती है; मन में कड़वाहट रह जाती है।"
  },
  {
    doha: "बड़े बड़ाई न करें, बड़े न बोलें बोल।\nहीरा मुख से ना कहे, लाख टका मेरा मोल।।",
    poet: "रहीम",
    meaning_hindi: "जो वास्तव में महान होते हैं, वे खुद अपनी प्रशंसा नहीं करते। हीरा कभी अपने मुख से नहीं कहता कि उसका मूल्य लाख टका (अत्यंत मूल्यवान) है, उसकी चमक ही उसका मूल्य बताती है।"
  },
  {
    doha: "सकल पदारथ हैं जग माहीं।\nकरमहीन नर पावत नाहीं।।",
    poet: "तुलसीदास",
    meaning_hindi: "इस संसार में सभी प्रकार की वस्तुएं और सुख उपलब्ध हैं, परंतु कर्महीन (आलसी) व्यक्ति उन्हें कभी प्राप्त नहीं कर पाता।"
  },
  {
    doha: "धीरे-धीरे रे मना, धीरे सब कुछ होय।\nमाली सींचे सौ घड़ा, ऋतु आए फल होय।।",
    poet: "कबीर",
    meaning_hindi: "हे मन, धैर्य रखो, सब कुछ अपने समय पर ही होता है। माली भले ही किसी पौधे को सौ घड़े पानी से सींच डाले, परंतु फल तो तभी आएगा जब उसकी सही ऋतु आएगी।"
  },
  {
    doha: "पोथी पढ़ि-पढ़ि जग मुआ, पंडित भया न कोय।\nढाई आखर प्रेम का, पढ़े सो पंडित होय।।",
    poet: "कबीर",
    meaning_hindi: "बड़ी-बड़ी पुस्तकें पढ़कर संसार में कई लोग चले गए, लेकिन कोई सच्चा ज्ञानी नहीं बन पाया। जो प्रेम के ढाई अक्षर को समझ ले और करुणा को अपना ले, वही सच्चा ज्ञानी है।"
  },
  {
    doha: "कबिरा खड़ा बज़ार में, मांगे सबकी खैर।\nना काहू से दोस्ती, ना काहू से बैर।।",
    poet: "कबीर",
    meaning_hindi: "कबीर संसार रूपी बाज़ार में निष्पक्ष खड़े होकर सभी की भलाई और शांति की कामना करते हैं। वे किसी विशेष राग-द्वेष में नहीं पड़ते — न किसी से गहरी आसक्ति और न किसी से शत्रुता।"
  },
  {
    doha: "रहिमन देखि बड़ेन को, लघु न दीजिए डारि।\nजहाँ काम आवे सुई, कहा करे तरवारि।।",
    poet: "रहीम",
    meaning_hindi: "बड़ी चीजों या धनी लोगों को पाकर छोटी चीजों या गरीबों की उपेक्षा नहीं करनी चाहिए। क्योंकि जहाँ सुई का काम होता है, वहाँ तलवार कोई काम नहीं कर सकती।"
  },
  {
    doha: "जैसी बानी बोलिए, मन का आपा खोय।\nऔरण को शीतल करे, आपहु शीतल होय।।",
    poet: "कबीर",
    meaning_hindi: "मन के अहंकार को त्यागकर ऐसी मधुर भाषा बोलनी चाहिए, जिससे सुनने वालों को शांति और शीतलता मिले, तथा स्वयं का मन भी शांत और प्रसन्न रहे।"
  },
  {
    doha: "वृक्ष कबहुं नहीं फल भखै, नदी न संचै नीर।\nपरमारथ के कारने, साधुन धरा सरीर।।",
    poet: "कबीर",
    meaning_hindi: "वृक्ष कभी अपने फल खुद नहीं खाते और नदी कभी अपना पानी इकट्ठा नहीं करती। परोपकार के कार्य के लिए ही सच्चे संत और सज्जन पुरुष शरीर धारण करते हैं।"
  },
  {
    doha: "चिंता ऐसी डाकिनी, काटि करेजा खाय।\nवैद बिचारा क्या करे, कहाँ तक दवा लगाय।।",
    poet: "कबीर",
    meaning_hindi: "चिंता एक ऐसी डाकिनी (राक्षसी) है जो इंसान के कलेजे को अंदर ही अंदर काट खाती है। बेचारा चिकित्सक क्या कर सकता है, वह शरीर की बीमारी की दवा तो दे सकता है पर मानसिक चिंता की नहीं।"
  },
  {
    doha: "बोली एक अमोल है, जो कोई बोलै जानि।\nहिये तराजू तौलि के, तब मुख बाहर आनि।।",
    poet: "कबीर",
    meaning_hindi: "वाणी अत्यंत अनमोल होती है, यदि कोई समझदारी से बोले। बोलने से पहले अपने हृदय के तराजू में वचनों को तौल लेना चाहिए, फिर उन्हें मुख से बाहर निकालना चाहिए।"
  },
  {
    doha: "रहिमन पानी राखिए, बिन पानी सब सून।\nपानी गए न ऊबरै, मोती, मानुष, चून।।",
    poet: "रहीम",
    meaning_hindi: "सम्मान, आभा और जल की हमेशा रक्षा करनी चाहिए। चमक जाने पर मोती व्यर्थ है, सम्मान जाने पर मनुष्य का जीवन व्यर्थ है, और पानी के बिना आटा किसी काम का नहीं है।"
  },
  {
    doha: "मांगन मरन समान है, मति कोई मांगो भीख।\nमांगन ते तो मरना भला, यह सतगुरु की सीख।।",
    poet: "कबीर",
    meaning_hindi: "किसी के आगे हाथ फैलाना मरने के बराबर है, इसलिए कभी किसी से कुछ मांगना नहीं चाहिए। मांगने से तो मर जाना बेहतर है, यह गुरु की बड़ी सीख है।"
  },
  {
    doha: "अति का भला न बोलना, अति की भली न चूप।\nअति का भला न बरसनाव, अति की भली न धूप।।",
    poet: "कबीर",
    meaning_hindi: "न तो अधिक बोलना अच्छा होता है और न ही बहुत अधिक चुप रहना। जैसे बहुत तेज बारिश भी नुकसानदेह है और अत्यधिक तेज धूप भी।"
  },
  {
    doha: "करता था सो क्यों किया, अब करि क्यों पछताय।\nबोया पेड़ बबूल का, आम कहाँ से खाय।।",
    poet: "कबीर",
    meaning_hindi: "गलत काम करते समय तो तुमने नहीं सोचा, अब गलत काम करके क्यों पछताते हो? यदि बबूल का काँटेदार पेड़ बोया है, तो उस पर मीठे आम कैसे लग सकते हैं।"
  },
  {
    doha: "सांच बराबर तप नहीं, झूठ बराबर पाप।\nजाके हिरदे सांच है, ताके हिरदे आप।।",
    poet: "कबीर",
    meaning_hindi: "सत्य के समान कोई तपस्या नहीं है और असत्य बोलने के समान कोई पाप नहीं है। जिसके हृदय में सत्य निवास करता है, उसके हृदय में साक्षात ईश्वर वास करते हैं।"
  },
  {
    doha: "दोष पराया देखि करि, चला हसन्त हसन्त।\nअपने याद न आवई, जिनका आदि न अन्त।।",
    poet: "कबीर",
    meaning_hindi: "मनुष्य दूसरों की गलतियों और दोषों को देखकर हंसता है। परंतु उसे स्वयं के भीतर की अनगिनत बुराइयों का स्मरण नहीं आता, जिनका कोई अंत नहीं है।"
  },
  {
    doha: "कस्तूरी कुंडल बसै, मृग ढूंढे बन माहि।\nऐसे घट-घट राम हैं, दुनिया देखत नाहि।।",
    poet: "कबीर",
    meaning_hindi: "कस्तूरी की सुगंध हिरण की नाभि में ही होती है, परंतु वह उसे पूरे वन में ढूंढता फिरता है। उसी प्रकार ईश्वर घट-घट में वास करते हैं, पर लोग उन्हें बाहर खोजते हैं।"
  },
  {
    doha: "निंदक नियरे राखिए, आँगन कुटी छवाय।\nबिन पानी, साबुन बिना, निर्मल करे सुभाय।।",
    poet: "कबीर",
    meaning_hindi: "अपनी निंदा (आलोचना) करने वाले व्यक्ति को हमेशा अपने पास रखना चाहिए। वह बिना साबुन और पानी के आपकी गलतियां बताकर आपके स्वभाव को स्वच्छ बना देता है।"
  },
  {
    doha: "मधुर वचन है औषधि, कटुक वचन है तीर।\nश्रवन द्वार ह्वै संचरे, सालै सकल सरीर।।",
    poet: "कबीर",
    meaning_hindi: "मधुर वाणी औषधि की तरह घावों को भरती है, जबकि कड़वे वचन तीर के समान कानों के रास्ते पूरे शरीर को पीड़ा पहुंचाते हैं।"
  },
  {
    doha: "माया मरी न मन मुआ, मरि मरि गया सरीर।\nआसा तृस्ना ना मरी, कहि गए दास कबीर।।",
    poet: "कबीर",
    meaning_hindi: "मनुष्य मर जाता है पर उसकी इच्छाएं, आशाएं और भौतिक संसार के प्रति आसक्ति कभी नहीं मरती। शरीर कई बार बदलता है पर तृष्णा वैसी ही बनी रहती है।"
  },
  {
    doha: "मन के हारे हार है, मन के जीते जीत।\nकहे कबीर हरि पाइए, मन ही की परतीत।।",
    poet: "कबीर",
    meaning_hindi: "जीत और हार सब मन की भावनाएं हैं। यदि मन से हार मान ली तो पराजय निश्चित है, और यदि मन में संकल्प है तो विजय निश्चित है।"
  },
  {
    doha: "जो तोको कांटा बुवै, ताहि बोय तू फूल।\nतोको फूल के फूल हैं, वाको शूल के शूल।।",
    poet: "कबीर",
    meaning_hindi: "जो तुम्हारे मार्ग में कांटे बिछाता है, तुम उसके मार्ग में फूल बिछाओ। तुम्हें तो फूल बोने के पुण्य मिलेंगे और उसे अपने बोए कांटों की पीड़ा सहनी पड़ेगी।"
  },
  {
    doha: "खोजत खाजत हे सखी, रहा कबीर हिराय।\nबूंद समानी समद में, सो कत हेरी जाय।।",
    poet: "कबीर",
    meaning_hindi: "परमात्मा को खोजते-खोजते स्वयं साधक का अहंकार ही मिट गया। जैसे समुद्र में गिरी पानी की एक बूंद समुद्र का हिस्सा बन जाती है, फिर उसे अलग से कैसे ढूंढा जा सकता है।"
  },
  {
    doha: "माटी कहे कुम्हार से, तू क्या रौंदे मोय।\nएक दिन ऐसा आएगा, मैं रौंदूंगी तोय।।",
    poet: "कबीर",
    meaning_hindi: "आज मनुष्य मिट्टी को रौंदता है, पर अंततः मृत शरीर मिट्टी में ही मिलता है। प्रकृति का नियम अटल है।"
  }
];

export const CHAUPAIS: ChaupaiDayData[] = [
  {
    chaupai: "जय राम रमा रमण समर्थ।\nकहि न जाइ बड़ भाग अनन्त।।",
    kand: "बालकाण्ड",
    meaning_hindi: "हे लक्ष्मीपति, समर्थ श्रीरामचंद्रजी! आपकी जय हो। आपके अनंत कल्याणकारी गुणों और ऐश्वर्य का वर्णन कोई भी पूरी तरह नहीं कर सकता।"
  },
  {
    chaupai: "मंगल भवन अमंगल हारी।\nद्रवहु सुदसरथ अजर बिहारी।।",
    kand: "बालकाण्ड",
    meaning_hindi: "जो मंगल के धाम हैं और समस्त अमंगलों को हरने वाले हैं, वे अयोध्यापति महाराज दशरथ के आँगन में विहार करने वाले श्रीराम मुझ पर कृपा करें।"
  },
  {
    chaupai: "भये प्रगट कृपाला दीनदयाला।\nकौसल्या हितकारी।",
    kand: "बालकाण्ड",
    meaning_hindi: "दीनों पर दया करने वाले, कृपालु और कौसल्याजी का कल्याण करने वाले प्रभु श्रीरामचंद्रजी प्रकट हुए हैं।"
  },
  {
    chaupai: "रामचरितमानस यह नामा।\nसुनत श्रवन पाइअ बिश्रामा।।",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "इस ग्रंथ का नाम 'रामचरितमानस' है, जिसे कानों से सुनने मात्र से ही मन को परम शांति और विश्राम प्राप्त होता है।"
  },
  {
    chaupai: "सुनहु देव सचराचर स्वामी।\nप्रनतपाल उर अन्तरजामी।।",
    kand: "सुन्दरकाण्ड",
    meaning_hindi: "हे चराचर के स्वामी, शरणागतों की रक्षा करने वाले और सबके हृदय की बात जानने वाले अंतर्यामी प्रभु! मेरी प्रार्थना सुनिए।"
  },
  {
    chaupai: "जासु नाम भव भंजन हरनी।\nसो कैसे न भजे भव पारनी।।",
    kand: "बालकाण्ड",
    meaning_hindi: "जिनका नाम संसार के बंधनों को काटने वाला है, उन भवसागर से पार उतारने वाले प्रभु का भजन मनुष्य क्यों न करे।"
  },
  {
    chaupai: "धीरज धरम मित्र अरु नारी।\nआपद काल परखिए चारी।।",
    kand: "अरण्यकाण्ड",
    meaning_hindi: "धैर्य, धर्म, मित्र और स्त्री — इन चारों की परीक्षा संकट के समय ही होती है।"
  },
  {
    chaupai: "हरि अनन्त हरि कथा अनन्ता।\nकहहिं सुनहिं बहुबिधि सब संता।।",
    kand: "बालकाण्ड",
    meaning_hindi: "ईश्वर की लीलाएं अनंत हैं और उनकी कथाएं भी असीम हैं। संत लोग इन्हें विविध प्रकार से कहते और सुनते हैं।"
  },
  {
    chaupai: "परहित सरिस धरम नहिं भाई।\nपरपीड़ा सम नहिं अधमाई।।",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "दूसरों की भलाई करने के समान कोई धर्म नहीं है, और दूसरों को कष्ट पहुँचाने के समान कोई नीचता/पाप नहीं है।"
  },
  {
    chaupai: "जाकी रही भावना जैसी।\nप्रभु मूरति देखी तिन तैसी।।",
    kand: "बालकाण्ड",
    meaning_hindi: "जिस व्यक्ति की जैसी श्रद्धा और भावना होती है, उसे ईश्वर का रूप भी वैसा ही दिखाई देता है।"
  },
  {
    chaupai: "कर्म प्रधान बिस्व करि राखा।\nजो जस करइ सो तस फलु चाखा।।",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "ईश्वर ने इस संसार को कर्मप्रधान बनाया है। जो मनुष्य जैसा कर्म करता है, उसे वैसा ही फल चखने को मिलता है।"
  },
  {
    chaupai: "तात स्वर्ग अपवर्ग सुख धरिअ तुला एक अंग।\nतुल न ताहि सकल मिली जो सुख लव सतसंग।।",
    kand: "सुन्दरकाण्ड",
    meaning_hindi: "स्वर्ग और मोक्ष के समस्त सुखों को तराजू के एक पलड़े पर रखा जाए, तो भी वे क्षण भर के सत्संग (सच्चे संतों की संगति) के सुख के बराबर नहीं हो सकते।"
  },
  {
    chaupai: "राम नाम मनिदीप धरू जीह देहरीं द्वार।\nतुलसी भीतर बाहेरहुँ जौं चाहसि उजियार।।",
    kand: "बालकाण्ड",
    meaning_hindi: "यदि तुम अपने भीतर और बाहर दोनों ओर उजाला चाहते हो, तो राम नाम रूपी मणिदीपक को अपनी जीभ रूपी देहली के द्वार पर रख लो।"
  },
  {
    chaupai: "जद्यपि प्रभु सब सन अनुरागी।\nजदपि भगत अतिसय प्रिय लागी।।",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "यद्यपि प्रभु प्रेमस्वरूप हैं और सभी जीवों से प्रेम करते हैं, फिर भी जो अनन्य भाव से उनके भक्त हैं, वे उन्हें अत्यधिक प्रिय हैं।"
  },
  {
    chaupai: "हित अनहित पसु पच्छिउ जाना।\nमानुष तन गुन ग्यान निधाना।।",
    kand: "सुन्दरकाण्ड",
    meaning_hindi: "भले और बुरे का ज्ञान तो पशु-पक्षी भी जानते हैं। यह मानव शरीर तो अनंत सद्गुणों और ज्ञान का खजाना है।"
  },
  {
    chaupai: "सुख हरषहिं जड़ दुख बिलखाहीं।\nधीर पुरुष समता मन माहीं।।",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "मूर्ख लोग सुख पाकर अत्यधिक हर्षित होते हैं और दुख पाकर रोते हैं, जबकि धैर्यवान पुरुष दोनों स्थितियों में मन में समता बनाए रखते हैं।"
  },
  {
    chaupai: "सुमति कुमति सब के उर रहहीं।\nनाथ पुरान निगम अस कहहीं।।",
    kand: "सुन्दरकाण्ड",
    meaning_hindi: "अच्छी बुद्धि (सुमति) और बुरी बुद्धि (कुमति) सभी के मन में रहती है, ऐसा वेद और पुराण कहते हैं।"
  },
  {
    chaupai: "जहँ सुमति तहँ संपति नाना।\nजहँ कुमति तहँ बिपति निदाना।।",
    kand: "सुन्दरकाण्ड",
    meaning_hindi: "जहाँ सुमति (अच्छी बुद्धि और एकता) होती है, वहाँ नाना प्रकार की सुख-संपदाएं आती हैं। और जहाँ कुमति होती है, वहाँ संकट निश्चित होता है।"
  },
  {
    chaupai: "काम क्रोध मद लोभ सब नाथ नरक के पंथ।\nसब परिहरि रघुबीरहि भजहु भजहिं जेहि संत।।",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "काम, क्रोध, अहंकार और लोभ — ये सभी पतन के मार्ग हैं। इन सबको छोड़कर प्रभु का भजन करना चाहिए।"
  },
  {
    chaupai: "बिनु सतसंग बिबेक न होई।\nराम कृपा बिनु सुलभ न सोई।।",
    kand: "बालकाण्ड",
    meaning_hindi: "सत्संग के बिना विवेक (भले-बुरे की पहचान) जागृत नहीं होता, और वह सत्संग ईश्वर की कृपा के बिना आसानी से सुलभ नहीं होता।"
  },
  {
    chaupai: "गरल सुधा रिपु करहिं मिताई।\nगोपद सिंधु अनल सितलाई।।",
    kand: "सुन्दरकाण्ड",
    meaning_hindi: "ईश्वर की कृपा से विष अमृत बन जाता है, शत्रु मित्र बन जाते हैं, समुद्र गाय के खुर के समान छोटा हो जाता है और आग शीतल हो जाती है।"
  },
  {
    chaupai: "सेवक सठ नृप कृपन कुनारी।\nकपटि मित्र सूल सम चारी।।",
    kand: "अरण्यकाण्ड",
    meaning_hindi: "मूर्ख सेवक, कंजूस राजा, दुष्ट स्त्री और कपटी मित्र — ये चारों जीवन में शूल (कांटे) के समान कष्ट देने वाले होते हैं।"
  },
  {
    chaupai: "सहज अमित बल अति प्रभुताई।\nकरत कृपा जन जानि ढिठाई।।",
    kand: "बालकाण्ड",
    meaning_hindi: "जिनका बल और प्रभुत्व असीम है, वे प्रभु अपने भक्तों की ढिठाई और गलतियों को क्षमा करके उन पर दया करते हैं।"
  },
  {
    chaupai: "सत्यमूला धरम जग माहीं।\nसत्य सम कछु आन आन नाहिं।।",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "संसार में धर्म की जड़ सत्य ही है। सत्य के समान दूसरा कोई महान सद्गुण नहीं है।"
  },
  {
    chaupai: "सुनत बिमल जस लोचन नीरा।\nभए पुलक अति सिथिल शरीरा।।",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "प्रभु का पवित्र यश सुनकर आँखों में आँसू भर आए और शरीर अत्यंत पुलकित व शिथिल हो गया।"
  },
  {
    chaupai: "अनुचित बहुत कहब नहिं सोहा।\nदुख कर प्रलय होइ जग मोहा।।",
    kand: "बालकाण्ड",
    meaning_hindi: "अनुचित बातें कहना शोभा नहीं देता, इससे केवल संसार में दुख और अज्ञान ही फैलता है।"
  },
  {
    chaupai: "बिगरी बात बनै नहीं लाख करौ किन कोय।\nरहिमन फाटे दूध को मथे न माखन होय।।",
    kand: "बालकाण्ड",
    meaning_hindi: "यदि एक बार बात बिगड़ जाए, तो लाख कोशिश करने पर भी ठीक नहीं होती, जैसे फटे हुए दूध को मथने से माखन नहीं निकाला जा सकता।"
  },
  {
    chaupai: "निज भाषा उन्नति अहै, सब उन्नति को मूल।\nबिन निज भाषा-ज्ञान के, मिटत न हिय को सूल।।",
    kand: "बालकाण्ड",
    meaning_hindi: "अपनी मातृभाषा की उन्नति ही समस्त उन्नतियों का मूल है। अपनी भाषा के बिना हृदय की टीस दूर नहीं होती।"
  },
  {
    chaupai: "दया धरम का मूल है, पाप मूल अभिमान।\nतुलसी दया न छांड़िए, जब लग घट में प्रान।।",
    kand: "बालकाण्ड",
    meaning_hindi: "दया धर्म का मूल आधार है और अहंकार सभी पापों का कारण है। जब तक शरीर में प्राण हैं, तब तक दया का भाव कभी नहीं छोड़ना चाहिए।"
  },
  {
    chaupai: "संत हृदय नवनीत समाना।\nकहा कबिन्ह परि कहि न जाना।।",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "सज्जनों का हृदय मक्खन के समान कोमल होता है। कवियों ने यह उपमा तो दी, पर वे इसके पूर्ण मर्म को व्यक्त नहीं कर पाए।"
  }
];

export const LOK_KATHAS: LokKathaDayData[] = [
  { saying: "नौ नकद न तेरह उधार", language: "अवधी", meaning_hindi: "तुरंत मिलने वाला थोड़ा लाभ भविष्य में मिलने वाले बड़े लेकिन अनिश्चित लाभ से कहीं बेहतर है।" },
  { saying: "अधजल गगरी छलकत जाय", language: "ब्रज", meaning_hindi: "जिस व्यक्ति को अल्प ज्ञान होता है, वह दिखावा और अहंकार अधिक करता है।" },
  { saying: "जब जागो तबही सबेरा", language: "भोजपुरी", meaning_hindi: "जब भी किसी को होश आए या अपनी गलती का एहसास हो, जीवन में सुधार की शुरुआत वहीं से हो जाती है।" },
  { saying: "पाछो पड़े खेती नहीं, आगो पड़े लड़ाई नहीं", language: "राजस्थानी", meaning_hindi: "खेती में आलस या विलंब नहीं करना चाहिए, और युद्ध जैसी कठिन परिस्थितियों से पीछे नहीं हटना चाहिए।" },
  { saying: "घर क चोर घर क चाकर", language: "मैथिली", meaning_hindi: "घर का भेदी या भीतर का व्यक्ति ही सबसे अधिक नुकसान पहुंचा सकता है।" },
  { saying: "जो गरजे सो बरसे नहीं", language: "बुंदेली", meaning_hindi: "जो बहुत बातें करते हैं या डींगें मारते हैं, वे वास्तव में कार्य सिद्ध नहीं कर पाते।" },
  { saying: "हाथ कंगन को आरसी क्या", language: "अवधी", meaning_hindi: "जो बात प्रत्यक्ष और साफ दिखाई दे रही हो, उसे साबित करने के लिए किसी बाहरी प्रमाण की आवश्यकता नहीं होती।" },
  { saying: "मन चंगा तो कठौती में गंगा", language: "भोजपुरी", meaning_hindi: "यदि मन पवित्र और शुद्ध हो, तो घर पर रहकर किया गया साधारण कर्म भी तीर्थ स्नान के समान पुण्य देता है।" },
  { saying: "कोउ नृप होइ हमें का हानी। चेरी छाँड़ि अब होब कि रानी।।", language: "अवधी", meaning_hindi: "शासन में कोई भी परिवर्तन हो, साधारण लोगों के बुनियादी जीवन या स्थिति में कोई बड़ा अंतर नहीं पड़ता।" },
  { saying: "घर का भेदी लंका ढावे", language: "ब्रज", meaning_hindi: "आपसी फूट और घर के रहस्य उजागर करने वाले अपनों के कारण ही विनाश होता है।" },
  { saying: "अपना हाथ जगन्नाथ", language: "भोजपुरी", meaning_hindi: "स्वयं का किया गया कार्य ही सबसे अधिक भरोसेमंद और सर्वोत्तम होता है। स्वावलंबन ही सबसे बड़ी शक्ति है।" },
  { saying: "अकेला चना भाड़ नहीं फोड़ सकता", language: "बुंदेली", meaning_hindi: "कोई भी बड़ा कार्य एक अकेला व्यक्ति अकेले दम पर नहीं कर सकता, उसके लिए सामूहिक प्रयास की आवश्यकता होती है।" },
  { saying: "ऊंची दुकान फीका पकवान", language: "ब्रज", meaning_hindi: "बाहरी चमक-दमक या प्रसिद्धि बहुत अधिक हो, लेकिन अंदर की गुणवत्ता अत्यंत साधारण हो।" },
  { saying: "नाच न जाने आँगन टेढ़ा", language: "भोजपुरी", meaning_hindi: "जब किसी को खुद काम करना नहीं आता, तो वह दूसरों में या परिस्थितियों में कमियां निकालने लगता है।" },
  { saying: "दूध का जला मट्ठा भी फूंक-फूंक कर पीता है", language: "अवधी", meaning_hindi: "एक बार बड़ा नुकसान उठाने के बाद व्यक्ति अत्यधिक सावधान और सतर्क हो जाता है।" },
  { saying: "आगे कुआँ पीछे खाई", language: "मैथिली", meaning_hindi: "जब इंसान हर तरफ से संकट में घिर जाए और बचने का कोई रास्ता न दिखाई दे।" },
  { saying: "का वर्षा जब कृषि सुखाने", language: "अवधी", meaning_hindi: "अवसर बीत जाने के बाद यदि कोई सहायता या संसाधन प्राप्त हो, तो उसका कोई महत्व नहीं रह जाता।" },
  { saying: "चोर की दाढ़ी में तिनका", language: "भोजपुरी", meaning_hindi: "अपराधी या दोषी व्यक्ति हमेशा सशंकित रहता है और अपनी हरकतों से खुद को उजागर कर देता है।" },
  { saying: "अंत भला तो सब भला", language: "राजस्थानी", meaning_hindi: "यदि किसी कार्य का परिणाम सुखद और अच्छा हो, तो रास्ते की कठिनाइयां और गलतियां भुला दी जाती हैं।" },
  { saying: "अब पछताए होत क्या जब चिड़िया चुग गई खेत", language: "ब्रज", meaning_hindi: "नुकसान हो जाने के बाद शोक या पश्चाताप करने का कोई लाभ नहीं होता।" },
  { saying: "धोबी का कुत्ता न घर का न घाट का", language: "भोजपुरी", meaning_hindi: "दो नावों पर सवारी करने वाला व्यक्ति कहीं का नहीं रहता, उसे कोई मान-सम्मान प्राप्त नहीं होता।" },
  { saying: "बकरे की अम्मा कब तक खैर मनाएगी", language: "अवधी", meaning_hindi: "जो विपत्ति निश्चित है, उससे कब तक बचा जा सकता है। संकट एक न एक दिन आएगा ही।" },
  { saying: "मान न मान मैं तेरा मेहमान", language: "ब्रज", meaning_hindi: "बिना किसी इच्छा या निमंत्रण के जबरदस्ती किसी के गले पड़ना या दखल देना।" },
  { saying: "बहती गंगा में हाथ धोना", language: "भोजपुरी", meaning_hindi: "समय के अनुकूल बहते अवसर का चतुराई से लाभ उठा लेना।" },
  { saying: "खोदा पहाड़ निकली चुहिया", language: "राजस्थानी", meaning_hindi: "अत्यधिक कठिन परिश्रम और बड़ी तैयारियों के बाद बहुत ही छोटा और नगण्य फल मिलना।" },
  { saying: "तेल देखो तेल की धार देखो", language: "बुंदेली", meaning_hindi: "जल्दबाज़ी में कोई निर्णय न लें, पहले परिस्थिति को ध्यान से देखें और समझें कि हवा किस तरफ बह रही है।" },
  { saying: "जिसकी लाठी उसकी भैंस", language: "भोजपुरी", meaning_hindi: "बलवान और शक्तिशाली व्यक्ति ही संसाधनों पर अधिकार जमा लेता है।" },
  { saying: "डूबते को तिनके का सहारा", language: "अवधी", meaning_hindi: "घोर संकट के समय मिलने वाली ज़रा सी मदद भी बहुत बड़ी राहत देती है।" },
  { saying: "एक तो करेला दूजे नीम चढ़ा", language: "ब्रज", meaning_hindi: "एक तो पहले से ही बुराई या कड़वाहट थी, ऊपर से वैसी ही बुरी संगति या परिस्थिति और मिल गई।" },
  { saying: "जितनी चादर हो उतने पैर पसारो", language: "मैथिली", meaning_hindi: "अपनी आय और सीमा के भीतर ही खर्च व जीवन यापन करना चाहिए।" }
];

export const HINDI_WORDS: HindiWordDayData[] = [
  {
    word: "जिजीविषा",
    meaning: "जीने की तीव्र इच्छा / जीवन के प्रति गहरा लगाव",
    usage: "कठिन परिस्थितियों में भी उसकी जिजीविषा ने उसे कभी हारने नहीं दिया।"
  },
  {
    word: "अपरिग्रह",
    meaning: "अनावश्यक वस्तुओं का संग्रह न करना / सादगी का जीवन जीना",
    usage: "अपरिग्रह का पालन करने से मन में शांति और संतोष का उदय होता है।"
  },
  {
    word: "अनुराग",
    meaning: "किसी के प्रति गहरा प्रेम, स्नेह या भक्ति",
    usage: "प्रकृति के प्रति उसका अनुराग बचपन से ही अत्यंत गहरा रहा है।"
  },
  {
    word: "अंतर्मन",
    meaning: "हृदय का भीतरी भाग / आत्मा या अंतःकरण",
    usage: "कभी-कभी हमें अपने अंतर्मन की आवाज़ को भी ध्यान से सुनना चाहिए।"
  },
  {
    word: "अनासक्ति",
    meaning: "किसी वस्तु या व्यक्ति के प्रति मोह या लगाव न होना / निष्काम भाव",
    usage: "अनासक्ति का अर्थ उदासीनता नहीं, बल्कि कर्मों के फल से मुक्त होना है।"
  },
  {
    word: "शुचिता",
    meaning: "पवित्रता, स्वच्छता (शारीरिक और मानसिक दोनों)",
    usage: "विचारों की शुचिता ही मनुष्य को वास्तविक गरिमा प्रदान करती है।"
  },
  {
    word: "कृतज्ञता",
    meaning: "दूसरों के उपकार को मानना / आभार व्यक्त करना",
    usage: "हमें जीवन में छोटी-बड़ी हर खुशी के लिए कृतज्ञता का भाव रखना चाहिए।"
  },
  {
    word: "संवेग",
    meaning: "मन का तीव्र वेग या भावना (जैसे हर्ष, शोक, आदि)",
    usage: "कला के माध्यम से मनुष्य अपने संवेगों को एक सुंदर रूप दे सकता है।"
  },
  {
    word: "संकल्प",
    meaning: "किसी कार्य को करने का दृढ़ निश्चय या प्रण",
    usage: "यदि संकल्प सच्चा हो, तो कोई भी बाधा हमें हमारे मार्ग से नहीं डिगा सकती।"
  },
  {
    word: "सौहार्द",
    meaning: "मित्रता की भावना / आपसी प्रेम और भाईचारा",
    usage: "समाज में सुख और शांति बनाए रखने के लिए आपसी सौहार्द बहुत आवश्यक है।"
  },
  {
    word: "वैराग्य",
    meaning: "सांसारिक मोह-माया से विरक्ति / मन का राग-रहित होना",
    usage: "वास्तविक वैराग्य संसार को छोड़ने में नहीं, बल्कि मन की शांति में है।"
  },
  {
    word: "स्वावलंबन",
    meaning: "अपने पैरों पर खड़ा होना / आत्मनिर्भरता",
    usage: "स्वावलंबन ही स्वाभिमान से जीने का एकमात्र मार्ग है।"
  },
  {
    word: "चेतना",
    meaning: "जागृत अवस्था / जीवन शक्ति या समझ",
    usage: "ध्यान के माध्यम से हम अपनी आंतरिक चेतना को जागृत कर सकते हैं।"
  },
  {
    word: "निष्काम",
    meaning: "बिना किसी फल की कामना के किया जाने वाला कर्म",
    usage: "निष्काम सेवा ही समाज में वास्तविक परिवर्तन ला सकती है।"
  },
  {
    word: "साधना",
    meaning: "किसी लक्ष्य की प्राप्ति के लिए किया जाने वाला निरंतर अभ्यास या तप",
    usage: "संगीत की साधना के लिए धैर्य और एकाग्रता की आवश्यकता होती है।"
  },
  {
    word: "समाधि",
    meaning: "ध्यान की वह उच्चतम अवस्था जहाँ मन स्थिर और लीन हो जाता है",
    usage: "योगियों का मन समाधि की अवस्था में परम शांति का अनुभव करता है।"
  },
  {
    word: "संस्कार",
    meaning: "अच्छे आचरण, विचार and आदतों का प्रभाव",
    usage: "परिवार से मिले अच्छे संस्कार ही बच्चों को एक बेहतर इंसान बनाते हैं।"
  },
  {
    word: "पुरुषार्थ",
    meaning: "जीवन के चार मुख्य उद्देश्य (धर्म, अर्थ, काम, मोक्ष) / कठिन प्रयास",
    usage: "अपने पुरुषार्थ के बल पर मनुष्य भाग्य को भी बदल सकता है।"
  },
  {
    word: "करुणा",
    meaning: "दूसरों के दुखों को देखकर द्रवित होना और उनकी सहायता की इच्छा",
    usage: "महात्मा बुद्ध के हृदय में संपूर्ण सृष्टि के लिए असीम करुणा थी।"
  },
  {
    word: "समन्वय",
    meaning: "विभिन्न तत्वों का मेल या सामंजस्य",
    usage: "हमारे जीवन में विचारों और कर्मों का समन्वय होना अत्यंत आवश्यक है।"
  },
  {
    word: "अपरिमेय",
    meaning: "जिसकी माप न की जा सके / असीम या अनंत",
    usage: "इस ब्रह्मांड में ईश्वरीय शक्ति और सौंदर्य अपरिमेय है।"
  },
  {
    word: "जिज्ञासा",
    meaning: "कुछ नया जानने या सीखने की तीव्र इच्छा",
    usage: "बच्चों की जिज्ञासा ही उनके मानसिक विकास की पहली सीढ़ी होती है।"
  },
  {
    word: "तपस्या",
    meaning: "मन और इंद्रियों को वश में करने का कठिन साधना-मार्ग",
    usage: "किसी भी विद्या को सीखने के लिए की गई मेहनत भी एक तपस्या ही है।"
  },
  {
    word: "विवेक",
    meaning: "अच्छे और बुरे, सत्य और असत्य का भेद करने की बुद्धि",
    usage: "संकट के समय हमारा विवेक ही हमें सही मार्ग दिखाता है।"
  },
  {
    word: "निर्मलता",
    meaning: "मैल या विकार से रहित होना / पवित्रता",
    usage: "बहते जल की निर्मलता मन को सहज ही शांत कर देती है।"
  },
  {
    word: "सहजता",
    meaning: "स्वाभाविकता / बनावट या आडंबर से रहित होना",
    usage: "सादगी और सहजता ही मनुष्य के व्यक्तित्व का सबसे बड़ा आभूषण है।"
  },
  {
    word: "आस्था",
    meaning: "किसी के प्रति विश्वास, श्रद्धा या पूज्य बुद्धि",
    usage: "विपरीत समय में ईश्वर के प्रति हमारी आस्था हमें संबल प्रदान करती है।"
  },
  {
    word: "मर्यादा",
    meaning: "सीमा, नियम या नैतिक मूल्यों का पालन",
    usage: "नदी और मनुष्य दोनों अपनी सीमाओं और मर्यादाओं में रहकर ही सुंदर लगते हैं।"
  },
  {
    word: "आशीर्वाद",
    meaning: "बड़ों की कृपा या शुभकामना जो कल्याण करे",
    usage: "माता-पिता का आशीर्वाद ही जीवन की सभी सफलताओं की नींव है।"
  },
  {
    word: "शांति",
    meaning: "हलचल या अशांति का न होना / मन की स्थिरता",
    usage: "वास्तविक शांति बाहरी परिस्थितियों में नहीं, बल्कि हमारे विचारों में होती है।"
  }
];
