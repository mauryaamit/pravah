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
  },
  {
    shloka: "सर्वं खल्विदं ब्रह्म तज्जलानिति शान्त उपासीत।",
    iast: "sarvaṃ khalv idaṃ brahma tajjalāniti śānta upāsīta",
    source: "छान्दोग्य उपनिषद्, 3.14.1",
    sourceLine: "Chandogya Upanishad 3.14.1",
    meaning_hindi: "यह समस्त जगत् ब्रह्म ही है — वह ब्रह्म जिससे यह सृष्टि उत्पन्न होती है, जिसमें यह जीती है और जिसमें यह विलीन हो जाती है। इस बोध के साथ शांत मन से उस ब्रह्म की उपासना करनी चाहिए। इस महान वचन में वेदांत का सार समाहित है। जब हम यह समझ लेते हैं कि हर पत्ता, हर पत्थर, हर जीव — सब उसी एक चेतना के विभिन्न रूप हैं — तो हमारे भीतर विभाजन और द्वंद्व समाप्त हो जाते हैं। यह अद्वैत की दृष्टि है जो हमें मैं और तुम की संकीर्णता से मुक्त करती है। आधुनिक भौतिकी भी क्वांटम के स्तर पर यह स्वीकार करती है कि सब कुछ एक ही मूल ऊर्जा के रूपांतरण हैं।",
    meaning_english: "All this is indeed Brahman. From it all comes, into it all dissolves, and by it all breathes. Let one calmly worship it."
  },
  {
    shloka: "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते।\nपूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते॥",
    iast: "oṃ pūrṇam adaḥ pūrṇam idaṃ pūrṇāt pūrṇam udacyate |\npūrṇasya pūrṇam ādāya pūrṇam evāvaśiṣyate",
    source: "बृहदारण्यक उपनिषद् — शांतिपाठ",
    sourceLine: "Brihadaranyaka Upanishad Peace Invocation",
    meaning_hindi: "वह (परब्रह्म) पूर्ण है, यह (जगत्) भी पूर्ण है। पूर्ण से पूर्ण की उत्पत्ति होती है। पूर्ण में से पूर्ण को निकाल लेने पर भी पूर्ण ही शेष रहता है। यह श्लोक गणितीय और आध्यात्मिक दोनों दृष्टियों से अद्भुत है। अनंत में से अनंत घटाने पर भी अनंत ही बचता है — यह वेदांत का वह सत्य है जो अनंत की अविभाज्यता को सिद्ध करता है। ईश्वर से सृष्टि प्रकट हुई, फिर भी वह अपूर्ण नहीं हुआ। यह बोध हमें यह सिखाता है कि प्रकृति में जो भी है, वह स्वयं में संपूर्ण है और परम सत्य से अलग नहीं। जीव भी पूर्ण है, ब्रह्म भी पूर्ण है — फिर भी मिलने पर अनंत आनंद प्रकट होता है।",
    meaning_english: "That is whole, this is whole. From wholeness comes wholeness. Taking wholeness from wholeness, wholeness alone remains."
  },
  {
    shloka: "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः।\nन चैव न भविष्यामः सर्वे वयमतः परम्॥",
    iast: "na tv evāhaṃ jātu nāsaṃ na tvaṃ neme janādhipāḥ |\nna caiva na bhaviṣyāmaḥ sarve vayam ataḥ param",
    source: "भगवद्गीता, अध्याय 2, श्लोक 12",
    sourceLine: "Bhagavad Gita 2.12",
    meaning_hindi: "न तो ऐसा कभी हुआ कि मैं नहीं था, तुम नहीं थे, या ये राजा-लोग नहीं थे। और न ऐसा होगा कि इसके आगे हम सब नहीं रहेंगे। भगवान कृष्ण इस श्लोक में आत्मा की नित्यता का प्रतिपादन करते हैं। यह वचन एक ऐसी दृष्टि देता है जो मृत्यु-भय को निर्मूल कर देती है। हम जो स्वयं को शरीर मानते हैं, वह केवल एक वस्त्र है — आत्मा शाश्वत है, बस उसके रूप बदलते हैं। यह बोध हमें वर्तमान में पूर्ण रूप से जीने की प्रेरणा देता है। जब मृत्यु का भय नहीं रहता, तो जीवन में एक निर्भयता आती है जो हर कर्म को निष्काम और प्रेमपूर्ण बनाती है।",
    meaning_english: "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be."
  },
  {
    shloka: "आत्मा वा अरे द्रष्टव्यः श्रोतव्यो मन्तव्यो निदिध्यासितव्यः।",
    iast: "ātmā vā are draṣṭavyaḥ śrotavyo mantavyo nididhyāsitavyaḥ",
    source: "बृहदारण्यक उपनिषद्, 4.5.6",
    sourceLine: "Brihadaranyaka Upanishad 4.5.6",
    meaning_hindi: "हे प्रिय! आत्मा को देखना चाहिए, सुनना चाहिए, मनन करना चाहिए और निदिध्यासन (गहन ध्यान) करना चाहिए। ऋषि याज्ञवल्क्य की यह उक्ति आत्म-साक्षात्कार की पूरी प्रक्रिया को चार शब्दों में बता देती है। श्रवण, मनन और निदिध्यासन — ये तीन सीढ़ियाँ हैं जो हमें बाहर की दुनिया से हटाकर भीतर के अनंत की ओर ले जाती हैं। आज के युग में यह और भी आवश्यक है जब हम बाहरी उत्तेजनाओं में खोकर अपनी अंतरात्मा की आवाज़ सुनना भूल जाते हैं। यह उपनिषद् का वह महावाक्य है जो संपूर्ण आत्मज्ञान की यात्रा को एक वाक्य में समेट देता है।",
    meaning_english: "The Self, my dear, must be seen, heard, reflected upon and meditated upon. Through this fourfold discipline, it is fully known."
  },
  {
    shloka: "यस्तु सर्वाणि भूतान्यात्मन्येवानुपश्यति।\nसर्वभूतेषु चात्मानं ततो न विजुगुप्सते॥",
    iast: "yas tu sarvāṇi bhūtāny ātmany evānupaśyati |\nsarva-bhūteṣu cātmānaṃ tato na vijugupsate",
    source: "ईशोपनिषद्, श्लोक 6",
    sourceLine: "Ishopanishad 6",
    meaning_hindi: "जो समस्त भूतों (प्राणियों) को आत्मा में ही देखता है और आत्मा को समस्त भूतों में — उसे किसी से घृणा नहीं होती। जब हमें यह अनुभव होता है कि दूसरे में भी वही आत्मा है जो मुझमें है, तो घृणा, भेदभाव और हिंसा असंभव हो जाते हैं। यह वैश्विक प्रेम और करुणा का दार्शनिक आधार है। पर्यावरण की रक्षा, अहिंसा, मानवाधिकार — ये सब इसी दृष्टि के व्यावहारिक रूप हैं। समता और करुणा का यह सर्वोच्च आदर्श भारतीय दर्शन की विश्व को सबसे बड़ी देन है।",
    meaning_english: "He who perceives all beings in the Self, and the Self in all beings, feels no hatred by virtue of that understanding."
  },
  {
    shloka: "तमेव भान्तमनुभाति सर्वं तस्य भासा सर्वमिदं विभाति।",
    iast: "tam eva bhāntam anubhāti sarvaṃ tasya bhāsā sarvam idaṃ vibhāti",
    source: "मुण्डक उपनिषद्, 2.2.10",
    sourceLine: "Mundaka Upanishad 2.2.10",
    meaning_hindi: "उस (ब्रह्म) के चमकने से ही सब चमकते हैं। उसी के प्रकाश से यह सब प्रकाशित होता है। सूर्य, चंद्र, तारे, अग्नि और मनुष्य के मन की बुद्धि — सब उस एक मूल प्रकाश के प्रतिबिंब हैं। हम जब किसी विचार को समझते हैं, तो वह उसी चेतना का प्रकाश है जो हमारे भीतर आभासित होता है। इस श्लोक को पढ़कर भीतर एक अद्भुत शांति और कृतज्ञता आती है कि हम उस ब्रह्म की किरणें हैं। यह कथन कठोपनिषद् और भगवद्गीता दोनों में प्रतिध्वनित होता है।",
    meaning_english: "By its shining, all this shines after it. By its light, all this is illumined."
  },
  {
    shloka: "यतो वाचो निवर्तन्ते अप्राप्य मनसा सह।\nआनन्दं ब्रह्मणो विद्वान्न बिभेति कुतश्चन॥",
    iast: "yato vāco nivartante aprāpya manasā saha |\nānandaṃ brahmaṇo vidvān na bibheti kutaścana",
    source: "तैत्तिरीय उपनिषद्, 2.9.1",
    sourceLine: "Taittiriya Upanishad 2.9.1",
    meaning_hindi: "जहाँ से वाणी (मन सहित) लौट आती है, उस ब्रह्म के आनंद को जो जानता है, वह किसी से नहीं डरता। भाषा और मन की सीमाएं हैं। ब्रह्म उन सीमाओं के परे है — इसीलिए उसे शब्दों में पूर्ण रूप से व्यक्त नहीं किया जा सकता। पर उसका आनंद — वह अनुभव जो मौन में मिलता है — वह सबसे वास्तविक है। जो इसे जान लेता है, उसे किसी का भय नहीं रहता। निर्भयता ही ब्रह्म-ज्ञान का सबसे बड़ा फल है।",
    meaning_english: "From where speech, together with the mind, turns back unable to reach — one who knows the bliss of Brahman fears nothing at all."
  },
  {
    shloka: "गुणा गुणेषु वर्तन्ते इति मत्वा न सज्जते।",
    iast: "guṇā guṇeṣu vartanta iti matvā na sajjate",
    source: "भगवद्गीता, अध्याय 3, श्लोक 28",
    sourceLine: "Bhagavad Gita 3.28",
    meaning_hindi: "प्रकृति के गुण, गुणों में ही बरत रहे हैं — यह जानकर जो व्यक्ति इनमें आसक्त नहीं होता, वही ज्ञानी है। यह अत्यंत गहन वैज्ञानिक दृष्टिकोण है। प्रकृति के तीन गुण — सत्व, रजस और तमस — परस्पर क्रिया करते हुए यह संसार रचते हैं। जब हम देखते हैं कि क्रोध, उत्साह, और जड़ता ये सब प्रकृति के खेल हैं, न कि मेरे कर्म, तो हम साक्षी बन जाते हैं और आंतरिक शांति प्राप्त करते हैं। साक्षी भाव ही योग की वह कुंजी है जो जीवन को कर्म से मुक्त करती है।",
    meaning_english: "The gunas of nature act upon the gunas of nature. Knowing this, one does not become attached to actions."
  },
  {
    shloka: "यस्य नाहंकृतो भावो बुद्धिर्यस्य न लिप्यते।\nहत्वापि स इमाँल्लोकान्न हन्ति न निबध्यते॥",
    iast: "yasya nāhaṃkṛto bhāvo buddhir yasya na lipyate |\nhatvāpi sa imāṃl lokān na hanti na nibadhyate",
    source: "भगवद्गीता, अध्याय 18, श्लोक 17",
    sourceLine: "Bhagavad Gita 18.17",
    meaning_hindi: "जिसके मन में अहंकार का भाव नहीं है और जिसकी बुद्धि लिप्त नहीं होती, वह इन सब लोकों को मारकर भी न मारता है और न बंधन में पड़ता है। यह श्लोक निष्काम कर्म के सिद्धांत की चरम अभिव्यक्ति है। अहंकार और आसक्ति के बिना किया गया कर्म कर्ता को नहीं बांधता। यह वह स्वतंत्रता है जो कर्म के बावजूद मिलती है — जब हम करने वाले की भावना से मुक्त हो जाते हैं। यह अवस्था योग की सिद्धि है, जिसे जीवनमुक्ति कहते हैं।",
    meaning_english: "He who is free from the notion of ego, whose intelligence is not tainted — even if he kills, he does not kill, nor is he bound by results."
  },
  {
    shloka: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    iast: "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ |\nāgamāpāyino 'nityās tāṃs titikṣasva bhārata",
    source: "भगवद्गीता, अध्याय 2, श्लोक 14",
    sourceLine: "Bhagavad Gita 2.14",
    meaning_hindi: "हे कुन्तीपुत्र! इन्द्रियों और विषयों के संयोग से उत्पन्न शीत-ताप और सुख-दुःख — ये आते-जाते रहते हैं और अनित्य हैं। इन्हें सहन करना सीखो, हे भारत! यह श्लोक जीवन में धैर्य और स्थिरता की शिक्षा देता है। सुख और दुःख दोनों एक-दूसरे के बाद आते हैं जैसे ऋतुएं बदलती हैं। जो इस नियम को समझकर न अत्यधिक हर्षित होता है और न अत्यधिक खिन्न — वही स्थितप्रज्ञ है। आधुनिक मनोविज्ञान में इसे 'इमोशनल रेगुलेशन' कहते हैं — गीता ने इसे हजारों वर्ष पहले सिखाया।",
    meaning_english: "The contact of senses with their objects gives rise to cold, heat, pleasure and pain — these are impermanent, O Arjuna; one must learn to tolerate them without disturbance."
  },
  {
    shloka: "शनैः शनैरुपरमेद्बुद्ध्या धृतिगृहीतया।\nआत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत्॥",
    iast: "śanaiḥ śanair uparamed buddhyā dhṛti-gṛhītayā |\nātma-saṃsthaṃ manaḥ kṛtvā na kiñcid api cintayet",
    source: "भगवद्गीता, अध्याय 6, श्लोक 25",
    sourceLine: "Bhagavad Gita 6.25",
    meaning_hindi: "धैर्य से धारण की हुई बुद्धि के द्वारा धीरे-धीरे शांत हो जाए। मन को आत्मा में स्थापित करके किसी वस्तु का चिंतन न करे। यह ध्यान की व्यावहारिक विधि है। मन को एकाएक शांत नहीं किया जा सकता — यह क्रमिक प्रक्रिया है। जैसे तूफानी झील का पानी धीरे-धीरे शांत होता है, वैसे ही मन भी अभ्यास से स्थिर होता है। आधुनिक माइंडफुलनेस अभ्यास इसी सिद्धांत पर आधारित है। धैर्य — यही साधना का सबसे बड़ा गुण है।",
    meaning_english: "Gradually, step by step, with full conviction, let the mind be brought to equilibrium by intelligence. Let one's mind be fixed on the Self and think of nothing else."
  },
  {
    shloka: "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते।\nवासुदेवः सर्वमिति स महात्मा सुदुर्लभः॥",
    iast: "bahūnāṃ janmanām ante jñānavān māṃ prapadyate |\nvāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ",
    source: "भगवद्गीता, अध्याय 7, श्लोक 19",
    sourceLine: "Bhagavad Gita 7.19",
    meaning_hindi: "बहुत जन्मों के अंत में ज्ञानी पुरुष मुझे प्राप्त होता है — यह जानकर कि वासुदेव (सर्वव्यापी परमात्मा) ही सब कुछ है। ऐसा महात्मा बहुत दुर्लभ है। यह वचन आत्म-साक्षात्कार की यात्रा की विशालता दर्शाता है। जीव का विकास अनेक जन्मों में होता है — धीरे-धीरे, क्रमशः। और जब एक दिन यह ज्ञान होता है कि सर्वत्र वही एक है, तो मोक्ष हो जाता है। यह ज्ञान दुर्लभ पर प्राप्य है — इसीलिए हर जन्म में साधना का महत्व है।",
    meaning_english: "After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes. Such a great soul is very rare."
  },
  {
    shloka: "नाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते।\nस्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्॥",
    iast: "nābhikrama-nāśo'sti pratyavāyo na vidyate |\nsvalpam apy asya dharmasya trāyate mahato bhayāt",
    source: "भगवद्गीता, अध्याय 2, श्लोक 40",
    sourceLine: "Bhagavad Gita 2.40",
    meaning_hindi: "इस योग में आरंभ का नाश नहीं है, न कोई विपरीत फल है। इसका थोड़ा-सा भी अभ्यास महान भय से रक्षा करता है। आध्यात्मिक साधना की यह सबसे बड़ी विशेषता है — यह कभी व्यर्थ नहीं जाती। एक बार किया गया ध्यान, एक बार पढ़ा गया शास्त्र, एक बार की हुई भलाई — ये सब संस्कारों के रूप में आत्मा में संग्रहित रहते हैं। इसलिए साधना का आरंभ कभी देर से नहीं होता। अंत में यह थोड़ी-सी साधना भी महान संकटों से बचाती है।",
    meaning_english: "In this endeavor, there is no loss or diminution, and even a little advancement on this path protects one from the most dangerous type of fear."
  },
  {
    shloka: "प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि।",
    iast: "prakṛtiṃ puruṣaṃ caiva viddhy anādī ubhāv api",
    source: "भगवद्गीता, अध्याय 13, श्लोक 19",
    sourceLine: "Bhagavad Gita 13.19",
    meaning_hindi: "प्रकृति और पुरुष (चेतना) दोनों को अनादि जानो। सांख्य दर्शन का यह केंद्रीय सूत्र हमें बताता है कि चेतना और पदार्थ — दोनों मूलभूत हैं। आधुनिक विज्ञान भी यह स्वीकार करने लगा है कि ब्रह्मांड केवल जड़ पदार्थ नहीं है — चेतना का कोई न कोई मूल रूप हर जगह व्याप्त हो सकता है। यह सूत्र हमें विज्ञान और अध्यात्म के मध्य एक सेतु बनाने की प्रेरणा देता है। द्वैत और अद्वैत दोनों की जड़ यहीं है।",
    meaning_english: "Know that both Prakriti (nature/matter) and Purusha (consciousness) are beginningless and coeternal."
  },
  {
    shloka: "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते।\nतदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि॥",
    iast: "indriyāṇāṃ hi caratāṃ yan mano 'nuvidhīyate |\ntad asya harati prajñāṃ vāyur nāvam ivāmbhasi",
    source: "भगवद्गीता, अध्याय 2, श्लोक 67",
    sourceLine: "Bhagavad Gita 2.67",
    meaning_hindi: "विचरण करती हुई इंद्रियों में से जिस किसी के साथ मन जाता है, वह एकमात्र इंद्रिय मनुष्य की बुद्धि को उसी प्रकार हर लेती है, जैसे जल में चलती नाव को वायु। यह एक बहुत व्यावहारिक मनोवैज्ञानिक सत्य है। जब मन किसी एक इंद्रिय के पीछे दौड़ जाता है, तो विवेक जाता रहता है। सोशल मीडिया स्क्रॉलिंग, अत्यधिक खानपान — ये सब इसी का आधुनिक रूप हैं। इंद्रिय-संयम ही विवेक की रक्षा का उपाय है।",
    meaning_english: "As a boat on the water is swept away by a strong wind, even one of the senses on which the mind focuses can carry away a man's intelligence."
  },
  {
    shloka: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहंकारः समदुःखसुखः क्षमी॥",
    iast: "adveṣṭā sarva-bhūtānāṃ maitraḥ karuṇa eva ca |\nnirmamo nirahaṃkāraḥ sama-duḥkha-sukhaḥ kṣamī",
    source: "भगवद्गीता, अध्याय 12, श्लोक 13",
    sourceLine: "Bhagavad Gita 12.13",
    meaning_hindi: "जो सब प्राणियों से द्वेष रहित है, मैत्री और करुणा से युक्त है, ममता और अहंकार से शून्य है, सुख-दुःख में समान है और क्षमाशील है — वह मुझे प्रिय है। यह आदर्श मानव-चरित्र का सुंदरतम चित्र है। यहाँ न किसी से शत्रुता है, न किसी पर ममता का बोझ है। यह वह अवस्था है जहाँ सेवा स्वाभाविक हो जाती है — फर्ज से नहीं, प्रेम से। यह परम भक्त का लक्षण है जिसे गीता सर्वोच्च स्थान देती है।",
    meaning_english: "He who is not envious but is a kind friend to all living entities, who does not think himself a proprietor, free from false ego, equal in happiness and distress — such a devotee is very dear to Me."
  },
  {
    shloka: "एकं सद्विप्रा बहुधा वदन्ति।",
    iast: "ekaṃ sad viprā bahudhā vadanti",
    source: "ऋग्वेद, 1.164.46",
    sourceLine: "Rigveda 1.164.46",
    meaning_hindi: "एक ही सत्य को ज्ञानीजन अनेक रूपों में कहते हैं। वेद का यह अत्यंत उदार और गहन वचन भारतीय दर्शन की आधारशिला है। इंद्र, मित्र, वरुण, अग्नि — ये सब एक ही परम सत्ता के नाम हैं। विभिन्न धर्म, विभिन्न साधनाएं — सब उसी एक सत्य की ओर जाने के अलग-अलग मार्ग हैं। यही भारत की वैश्विक दृष्टि का आधार है — सहिष्णुता और बहुलता। इस ऋचा में विश्व के सभी धर्मों का सम्मान निहित है।",
    meaning_english: "Truth is one; the wise call it by many names."
  },
  {
    shloka: "अयं निजः परो वेति गणना लघुचेतसाम्।\nउदारचरितानां तु वसुधैव कुटुम्बकम्॥",
    iast: "ayaṃ nijaḥ paro veti gaṇanā laghu-cetasām |\nudāra-caritānāṃ tu vasudhaiva kuṭumbakam",
    source: "हितोपदेश / महोपनिषद्",
    sourceLine: "Hitopadesha / Maha Upanishad",
    meaning_hindi: "यह अपना है, यह पराया है — ऐसी सोच संकीर्ण चित्त वालों की होती है। उदार हृदय वालों के लिए तो पूरी पृथ्वी एक परिवार है। इस पूर्ण उद्धरण का पहला भाग उतना ही महत्वपूर्ण है जितना दूसरा। 'अपना-पराया' की सोच मानसिक संकीर्णता की निशानी है। वैश्विक नागरिकता, पर्यावरण संरक्षण, अंतर्राष्ट्रीय सहयोग — ये सब इसी दृष्टि के व्यावहारिक रूप हैं। यह भारत का संयुक्त राष्ट्र को संदेश है।",
    meaning_english: "This is mine, that belongs to another — such is the thinking of narrow-minded people. For the magnanimous, the whole world is one family."
  },
  {
    shloka: "विद्या ददाति विनयं विनयाद्याति पात्रताम्।\nपात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥",
    iast: "vidyā dadāti vinayaṃ vinayād yāti pātratām |\npātratvād dhanam āpnoti dhanād dharmaṃ tataḥ sukham",
    source: "हितोपदेश, 1.1",
    sourceLine: "Hitopadesha 1.1",
    meaning_hindi: "विद्या विनय देती है, विनय से पात्रता आती है, पात्रता से धन मिलता है, धन से धर्म और धर्म से सुख। यह एक सुंदर कार्य-कारण श्रृंखला है। विद्या का पहला फल विनम्रता है — जो व्यक्ति सीखता है, वह जानता है कि अभी कितना और सीखना है। यह विनम्रता उसे योग्य बनाती है, योग्यता संसाधन लाती है, संसाधन से सेवा होती है और सेवा से जीवन में सुख। यह शिक्षा का सर्वोत्तम परिणाम-पथ है।",
    meaning_english: "Knowledge gives humility, from humility comes worthiness, from worthiness comes wealth, from wealth comes dharma, and from dharma happiness."
  },
  {
    shloka: "क्षणशः कणशश्चैव विद्यामर्थं च साधयेत्।\nक्षणे नष्टे कुतो विद्या कणे नष्टे कुतो धनम्॥",
    iast: "kṣaṇaśaḥ kaṇaśaś caiva vidyām arthaṃ ca sādhayet |\nkṣaṇe naṣṭe kuto vidyā kaṇe naṣṭe kuto dhanam",
    source: "सुभाषितरत्नभाण्डागार",
    sourceLine: "Subhashitaratna Bhandagara",
    meaning_hindi: "एक-एक पल का उपयोग करके विद्या साधनी चाहिए और एक-एक कण से धन अर्जित करना चाहिए। पल नष्ट होने पर विद्या कहाँ से आएगी और कण नष्ट होने पर धन कहाँ से? समय और संसाधन दोनों का सदुपयोग इस सूत्र का सार है। जो व्यक्ति छोटे-छोटे क्षणों को महत्व देता है — वह विद्या, धन और सफलता सभी प्राप्त करता है। यह 'compound effect' का प्राचीन भारतीय संस्करण है — निरंतर छोटे प्रयासों से महान लक्ष्य सधते हैं।",
    meaning_english: "Acquire knowledge moment by moment and wealth particle by particle. If moments are wasted, how will knowledge come? If grains are wasted, how will wealth come?"
  },
  {
    shloka: "सर्वेऽपि सुखिनः सन्तु सर्वे सन्तु निरामयाः।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखमाप्नुयात्॥",
    iast: "sarve 'pi sukhinaḥ santu sarve santu nirāmayāḥ |\nsarve bhadrāṇi paśyantu mā kaścid duḥkham āpnuyāt",
    source: "विष्णु पुराण — प्रार्थना श्लोक",
    sourceLine: "Vishnu Purana — Prayer",
    meaning_hindi: "सभी सुखी हों, सभी रोगमुक्त हों। सभी का कल्याण हो, कोई दुःख न पाए। यह प्रार्थना अपने लिए नहीं — संपूर्ण सृष्टि के लिए है। सच्ची आध्यात्मिकता का परिणाम यह होता है कि हमारी कामना विस्तृत होती जाती है। पहले अपने लिए, फिर परिवार, फिर समाज और अंत में समस्त प्राणियों के लिए। यह विस्तार ही मुक्ति की दिशा है। जो सबकी खुशी में खुश है, वही सच्चा साधु है।",
    meaning_english: "May all indeed be happy, may all be free from disease. May all see what is auspicious, may no one suffer."
  },
  {
    shloka: "अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः।\nयज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः॥",
    iast: "annād bhavanti bhūtāni parjanyād anna-sambhavaḥ |\nyajñād bhavati parjanyo yajñaḥ karma-samudbhavaḥ",
    source: "भगवद्गीता, अध्याय 3, श्लोक 14",
    sourceLine: "Bhagavad Gita 3.14",
    meaning_hindi: "अन्न से प्राणी जीते हैं, वर्षा से अन्न उत्पन्न होता है, यज्ञ से वर्षा होती है, और यज्ञ कर्म से उत्पन्न होता है। यह एक पारिस्थितिक-आध्यात्मिक चक्र है। मनुष्य के शुभ कर्म और त्याग (यज्ञ) ही वायुमंडल और ऋतुचक्र को संतुलित रखते हैं — यह प्राचीन भारत की पारिस्थितिक समझ है। आज के संदर्भ में यह हमें याद दिलाता है कि हमारे कर्म पर्यावरण को प्रभावित करते हैं। जब हम प्रकृति से लेते हैं, हमें देना भी होगा।",
    meaning_english: "All living bodies subsist on food grains, which are produced from rains. Rains are produced by yajna, and yajna is born of prescribed duties."
  },
  {
    shloka: "देवान्भावयतानेन ते देवा भावयन्तु वः।\nपरस्परं भावयन्तः श्रेयः परमवाप्स्यथ॥",
    iast: "devān bhāvayatānena te devā bhāvayantu vaḥ |\nparasparam bhāvayantaḥ śreyaḥ param avāpsyatha",
    source: "भगवद्गीता, अध्याय 3, श्लोक 11",
    sourceLine: "Bhagavad Gita 3.11",
    meaning_hindi: "इस यज्ञ के द्वारा देवताओं को प्रसन्न करो और वे देवता तुम्हें प्रसन्न करें। इस प्रकार परस्पर पोषण करते हुए तुम परम कल्याण को प्राप्त होगे। यह वचन सहकारिता और परस्पर पोषण का सूत्र है। जब हम प्रकृति के तत्वों की देखभाल करते हैं — पेड़, नदी, वायु — तो वे हमारी देखभाल करते हैं। यह पारिस्थितिक संतुलन का मूल दर्शन है जो आज भी उतना ही सत्य और प्रासंगिक है।",
    meaning_english: "Cherish the gods with this sacrifice, and may those gods cherish you; thus cherishing one another, you shall gain the highest good."
  },
  {
    shloka: "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः।\nअनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक्॥",
    iast: "saha-yajñāḥ prajāḥ sṛṣṭvā puro vāca prajāpatiḥ |\nanena prasaviṣyadhvam eṣa vo 'stv iṣṭa-kāma-dhuk",
    source: "भगवद्गीता, अध्याय 3, श्लोक 10",
    sourceLine: "Bhagavad Gita 3.10",
    meaning_hindi: "सृष्टि के आरंभ में प्रजापति ने यज्ञ के साथ प्रजा को उत्पन्न करके कहा — इस यज्ञ के द्वारा समृद्ध होओ; यह तुम्हारी कामनाओं की पूर्ति करने वाली कामधेनु हो। यज्ञ का अर्थ है — पारस्परिक देना और लेना। जब हम प्रकृति, समाज और ईश्वर को देते हैं, तो वे हमें और अधिक देते हैं। यह पारिस्थितिक और सामाजिक संतुलन का सूत्र है। आज का 'सस्टेनेबिलिटी' का विचार इसी प्राचीन यज्ञ-दृष्टि का आधुनिक रूप है।",
    meaning_english: "In the beginning of creation, the Lord sent forth humanity together with sacrifices and said: 'By this shall you prosper; let this be your wish-fulfilling cow.'"
  },
  {
    shloka: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
    iast: "paritrāṇāya sādhūnāṃ vināśāya ca duṣkṛtām |\ndharma-saṃsthāpanārthāya sambhavāmi yuge yuge",
    source: "भगवद्गीता, अध्याय 4, श्लोक 8",
    sourceLine: "Bhagavad Gita 4.8",
    meaning_hindi: "साधुओं की रक्षा के लिए, दुष्कर्मियों के विनाश के लिए और धर्म की स्थापना के लिए मैं युग-युग में जन्म लेता हूँ। भगवान का यह वचन दैवी न्याय के सिद्धांत की अभिव्यक्ति है। इतिहास में देखें — जब भी अत्याचार की पराकाष्ठा हुई, एक नई शक्ति उभरी जिसने संतुलन बहाल किया। यह ईश्वर का वचन है कि वह अपनी सृष्टि को कभी पूरी तरह अंधकार में नहीं डूबने देता।",
    meaning_english: "To deliver the pious and annihilate the miscreants, and to reestablish the principles of dharma, I appear millennium after millennium."
  },
  {
    shloka: "अपि चेत्सुदुराचारो भजते मामनन्यभाक्।\nसाधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः॥",
    iast: "api cet su-durācāro bhajate mām ananya-bhāk |\nsādhur eva sa mantavyaḥ samyag vyavasito hi saḥ",
    source: "भगवद्गीता, अध्याय 9, श्लोक 30",
    sourceLine: "Bhagavad Gita 9.30",
    meaning_hindi: "यदि अत्यंत दुराचारी व्यक्ति भी अनन्य भक्ति से मेरा भजन करता है, तो उसे साधु ही मानना चाहिए, क्योंकि उसने सही निश्चय किया है। यह भगवान की करुणा का सबसे उदार रूप है। कोई भी इतना पापी नहीं कि भक्ति का द्वार बंद हो। एक बार का सच्चा संकल्प — अब से ईश्वर की शरण — जीवन को बदल सकता है। यह नई शुरुआत की संभावना का दिव्य आश्वासन है। अंगुलिमाल से वाल्मीकि बने — यही इसका प्रमाण है।",
    meaning_english: "Even if the most sinful person resolves to worship Me with single-minded devotion, he shall be considered righteous, for he has rightly resolved."
  },
  {
    shloka: "नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः।\nअज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः॥",
    iast: "nādatte kasyacit pāpaṃ na caiva sukṛtaṃ vibhuḥ |\najñānenāvṛtaṃ jñānaṃ tena muhyanti jantavaḥ",
    source: "भगवद्गीता, अध्याय 5, श्लोक 15",
    sourceLine: "Bhagavad Gita 5.15",
    meaning_hindi: "सर्वव्यापी परमात्मा न किसी के पाप को, न किसी के पुण्य को ग्रहण करता है। ज्ञान अज्ञान से आवृत है, इसलिए प्राणी मोहित हो जाते हैं। ईश्वर न्यायाधीश नहीं, साक्षी है। वह हमें दंड या पुरस्कार नहीं देता — कर्म का स्वाभाविक नियम वह कार्य करता है। अज्ञान ही बंधन का कारण है। जब ज्ञान होता है, तो मोह टूटता है और जीव मुक्त होता है।",
    meaning_english: "Nor does the Supreme Lord assume anyone's sinful or pious activities. Embodied beings are bewildered because of ignorance which covers their real knowledge."
  },
  {
    shloka: "ज्योतिषामपि तज्ज्योतिस्तमसः परमुच्यते।\nज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम्॥",
    iast: "jyotiṣām api taj jyotis tamasaḥ param ucyate |\njñānaṃ jñeyaṃ jñāna-gamyaṃ hṛdi sarvasya viṣṭhitam",
    source: "भगवद्गीता, अध्याय 13, श्लोक 17",
    sourceLine: "Bhagavad Gita 13.17",
    meaning_hindi: "वह (ब्रह्म) सभी ज्योतियों की ज्योति है, अंधकार से परे कहा जाता है। वह ज्ञान, ज्ञेय और ज्ञान से प्राप्त होने वाला है, और सभी के हृदय में स्थित है। सूर्य प्रकाश देता है, पर जिस चेतना से हम सूर्य को देखते हैं — वह चेतना ही सबसे बड़ी ज्योति है। वह सबके हृदय में है — इसलिए उसे ढूंढने के लिए कहीं जाना नहीं, बस भीतर देखना है। गीता का यह वचन सभी उपनिषदों के सार को समेटता है।",
    meaning_english: "He is the source of light in all luminous objects. He is beyond the darkness of matter. He is knowledge, the object of knowledge, and the goal of knowledge, situated in everyone's heart."
  },
  {
    shloka: "प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वशः।\nयः पश्यति तथात्मानमकर्तारं स पश्यति॥",
    iast: "prakṛtyaiva ca karmāṇi kriyamāṇāni sarvaśaḥ |\nyaḥ paśyati tathātmānam akartāraṃ sa paśyati",
    source: "भगवद्गीता, अध्याय 13, श्लोक 29",
    sourceLine: "Bhagavad Gita 13.29",
    meaning_hindi: "जो यह देखता है कि सभी कर्म प्रकृति द्वारा ही किए जाते हैं और आत्मा अकर्ता है, वही वास्तव में देखता है। यह एक क्रांतिकारी दृष्टिकोण है। अहंकार को लगता है कि मैं करता हूँ। पर वास्तव में पंचतत्व, इंद्रियाँ, मन — सब प्रकृति के अंग हैं जो कार्य करते हैं। आत्मा साक्षी है, कर्ता नहीं। जो यह देख ले, उसे अहंकार से मुक्ति मिलती है। यह साक्षी-भाव ही योग का रहस्य है।",
    meaning_english: "One who can see that all activities are performed by the body created of material nature, and that the self does nothing — actually sees."
  },
  {
    shloka: "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः।\nजन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम्॥",
    iast: "karmajaṃ buddhi-yuktā hi phalaṃ tyaktvā manīṣiṇaḥ |\njanma-bandha-vinirmuktāḥ padaṃ gacchanty anāmayam",
    source: "भगवद्गीता, अध्याय 2, श्लोक 51",
    sourceLine: "Bhagavad Gita 2.51",
    meaning_hindi: "बुद्धियोग से युक्त मनीषी लोग कर्मजनित फल को त्यागकर जन्म के बंधन से मुक्त होकर उस पद को प्राप्त होते हैं जो समस्त दुःखों से परे है। कर्मफल का त्याग अकर्मण्यता नहीं है। यह एक मानसिक स्थिति है जहाँ कर्म पूरी ऊर्जा से होता है पर फल की चिंता नहीं होती। यह वह अवस्था है जहाँ कर्म एक आनंद बन जाता है, बोझ नहीं। और ऐसा व्यक्ति क्रमशः जन्म-मरण के चक्र से मुक्त होता है।",
    meaning_english: "The wise, engaged in devotional service, take refuge in the Lord, freeing themselves from the cycle of birth and death by renouncing the fruits of actions."
  },
  {
    shloka: "श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते।\nध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम्॥",
    iast: "śreyo hi jñānam abhyāsāj jñānād dhyānaṃ viśiṣyate |\ndhyānāt karma-phala-tyāgas tyāgāc chāntir anantaram",
    source: "भगवद्गीता, अध्याय 12, श्लोक 12",
    sourceLine: "Bhagavad Gita 12.12",
    meaning_hindi: "अभ्यास से ज्ञान श्रेष्ठ है, ज्ञान से ध्यान श्रेष्ठ है, ध्यान से कर्मफल का त्याग श्रेष्ठ है, और त्याग से तुरंत शांति प्राप्त होती है। यह एक क्रमिक सीढ़ी है — अभ्यास, ज्ञान, ध्यान और अंत में फलत्याग। प्रत्येक सीढ़ी अगली की तैयारी है। पर अंत में शांति का द्वार है त्याग — भौतिक का नहीं, आसक्ति का। और यह शांति तत्काल मिलती है — जैसे ही त्याग पूर्ण होता है।",
    meaning_english: "Better indeed is knowledge than mechanical practice. Better than knowledge is meditation. But better still is surrender of attachment to results, because there follows immediate peace."
  },
  {
    shloka: "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    iast: "tasmād asaktaḥ satataṃ kāryaṃ karma samācara |\nasakto hy ācaran karma param āpnoti pūruṣaḥ",
    source: "भगवद्गीता, अध्याय 3, श्लोक 19",
    sourceLine: "Bhagavad Gita 3.19",
    meaning_hindi: "इसलिए आसक्ति से रहित होकर निरंतर अपने कर्तव्य कर्म का संपादन करो, क्योंकि अनासक्त भाव से कर्म करने पर मनुष्य परम पद को प्राप्त करता है। यही कर्मयोग का सार है — कर्म करो, पर परिणाम से निर्लिप्त रहो। यह विरोधाभास नहीं, सिद्धांत है। जब हम परिणाम की चिंता से मुक्त होते हैं, तो हमारा कार्य और भी श्रेष्ठ होता है — क्योंकि भय और लालच नहीं होते, केवल समर्पण होता है।",
    meaning_english: "Therefore, without attachment, perform always the actions that should be done; for by performing action without attachment, man reaches the Supreme."
  },
  {
    shloka: "इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ।\nतयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ॥",
    iast: "indriyasyendriyasyārthe rāga-dveṣau vyavasthitau |\ntayor na vaśam āgacchet tau hy asya paripanthinau",
    source: "भगवद्गीता, अध्याय 3, श्लोक 34",
    sourceLine: "Bhagavad Gita 3.34",
    meaning_hindi: "प्रत्येक इंद्रिय के अपने-अपने विषयों में राग और द्वेष रहते हैं। इन दोनों के वश में नहीं होना चाहिए, क्योंकि ये दोनों ही जीव के मार्ग के शत्रु हैं। यह हमारे मनोवैज्ञानिक जीवन का एक गहरा सत्य है। हर इंद्रिय — आँख, कान, नाक — को कुछ पसंद है, कुछ नापसंद। जब हम इन रागों और द्वेषों के पीछे चलते हैं, तो हम यांत्रिक हो जाते हैं। विवेकपूर्ण जीवन वह है जहाँ हम इंद्रियों के स्वामी हों, न दास।",
    meaning_english: "Attraction and repulsion for sense objects are seated in the senses. One should not come under the control of these two, for they are one's enemies on the path of self-realization."
  },
  {
    shloka: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
    iast: "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ |\nsa yat pramāṇaṃ kurute lokas tad anuvartate",
    source: "भगवद्गीता, अध्याय 3, श्लोक 21",
    sourceLine: "Bhagavad Gita 3.21",
    meaning_hindi: "महापुरुष जो-जो आचरण करते हैं, अन्य लोग भी वैसा ही आचरण करते हैं। वह जो कुछ भी आदर्श स्थापित करते हैं, समस्त संसार उसका अनुसरण करता है। यह नेतृत्व का सर्वोच्च सत्य है — नेता का आचरण ही समाज का दर्पण होता है। माता-पिता, शिक्षक, नेता — सब पर यह दायित्व है। कहने से अधिक करके दिखाने का प्रभाव होता है। गांधीजी का जीवन इस श्लोक का जीवंत प्रमाण था।",
    meaning_english: "Whatever action a great person performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues."
  },
  {
    shloka: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    iast: "uddhared ātmanātmānaṃ nātmānam avasādayet |\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
    source: "भगवद्गीता, अध्याय 6, श्लोक 5",
    sourceLine: "Bhagavad Gita 6.5",
    meaning_hindi: "मनुष्य को अपने मन के द्वारा स्वयं को ऊंचा उठाना चाहिए, नीचे नहीं गिराना चाहिए। क्योंकि मन ही आत्मा का मित्र है और मन ही आत्मा का शत्रु भी है। यह आत्म-सुधार का सबसे शक्तिशाली सूत्र है। जब हम खुद से कहते हैं — मैं यह नहीं कर सकता — तो मन शत्रु बन जाता है। जब कहते हैं — मैं यह कर सकता हूँ — तो मन मित्र बन जाता है। अपनी आत्मा का उद्धार स्वयं करना है — कोई बाहरी शक्ति नहीं करेगी।",
    meaning_english: "Let a man lift himself by his own self, let him not degrade himself; for the self is the friend of oneself, and the self is also the enemy of oneself."
  },
  {
    shloka: "ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति।\nनिर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते॥",
    iast: "jñeyaḥ sa nitya-sannyāsī yo na dveṣṭi na kāṅkṣati |\nnirdvandvo hi mahā-bāho sukhaṃ bandhāt pramucyate",
    source: "भगवद्गीता, अध्याय 5, श्लोक 3",
    sourceLine: "Bhagavad Gita 5.3",
    meaning_hindi: "जो न किसी से द्वेष करता है और न किसी वस्तु की आकांक्षा करता है, उसे नित्य संन्यासी समझना चाहिए। ऐसा मनुष्य द्वंद्वों से मुक्त होकर सरलतापूर्वक सांसारिक बंधन से छूट जाता है। सन्यास त्याग का नाम नहीं — मनोवृत्ति का नाम है। जो घर में रहते हुए, संसार में रहते हुए, बिना राग और द्वेष के जीता है — वह वास्तविक संन्यासी है। यह कर्म और त्याग का सुंदर समन्वय है।",
    meaning_english: "He who neither hates nor desires should be known as a perpetual renunciant. Free from all dualities, he is easily liberated from bondage."
  },
  {
    shloka: "सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः।\nयेनाक्रमन्त्यृषयो ह्याप्तकामा यत्र तत्सत्यस्य परमं निधानम्॥",
    iast: "satyam eva jayate nānṛtaṃ satyena panthā vitato devayānaḥ |\nyenākrамanty ṛṣayo hy āptakāmā yatra tat satyasya paramaṃ nidhānam",
    source: "मुण्डक उपनिषद्, 3.1.6",
    sourceLine: "Mundaka Upanishad 3.1.6",
    meaning_hindi: "सत्य की ही जीत होती है, असत्य की नहीं। सत्य के माध्यम से ही वह देवयान मार्ग प्रशस्त होता है जिस पर चलकर ऋषि अपनी कामनाओं को पूरा करके उस परम धाम को पाते हैं जहाँ सत्य का परम निधान है। यह भारत का राष्ट्रीय आदर्श वाक्य है। इसमें केवल राजनीतिक नारा नहीं, एक संपूर्ण दर्शन है — कि दीर्घकाल में केवल सत्य टिकता है। असत्य की नींव पर बना कोई भी भवन अंततः ढहता है।",
    meaning_english: "Truth alone triumphs, not untruth. By truth is laid out the path leading to the gods, by which the sages, having their desires fulfilled, go to where is the supreme treasure of Truth."
  },
  {
    shloka: "संतुष्टः सततं योगी यतात्मा दृढनिश्चयः।\nमय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः॥",
    iast: "saṃtuṣṭaḥ satataṃ yogī yatātmā dṛḍha-niścayaḥ |\nmayy arpita-mano-buddhir yo me bhaktaḥ sa me priyaḥ",
    source: "भगवद्गीता, अध्याय 12, श्लोक 14",
    sourceLine: "Bhagavad Gita 12.14",
    meaning_hindi: "जो निरंतर संतुष्ट है, संयमित है, दृढ़ निश्चयी है, और जिसने अपना मन व बुद्धि मुझे समर्पित कर दी है, ऐसा भक्त मुझे प्रिय है। ये चार गुण — संतोष, संयम, दृढ़ संकल्प और समर्पण — मिलकर एक पूर्ण मानव बनाते हैं। संतोष से लालच जाता है, संयम से इंद्रियाँ वश में आती हैं, दृढ़ता से लक्ष्य मिलता है और समर्पण से अहंकार जाता है। यह भक्ति का व्यावहारिक पक्ष है।",
    meaning_english: "He who is always satisfied, self-controlled, possessing firm conviction, with mind and intellect dedicated to Me — such a devotee of Mine is very dear to Me."
  },
  {
    shloka: "मन एव मनुष्याणां कारणं बन्धमोक्षयोः।",
    iast: "mana eva manuṣyāṇāṃ kāraṇaṃ bandha-mokṣayoḥ",
    source: "मैत्रायणी उपनिषद्, 6.34",
    sourceLine: "Maitrayani Upanishad 6.34",
    meaning_hindi: "मन ही मनुष्यों के बंधन (दुःख) और मोक्ष (मुक्ति) का मुख्य कारण है। यह उपनिषद् का सबसे संक्षिप्त और सबसे गहरा मनोवैज्ञानिक सत्य है। बंधन बाहर नहीं है — मन में है। मुक्ति भी बाहर नहीं — मन में है। जब मन कलुषित होता है, संसार दुःखमय दिखता है; जब मन शुद्ध होता है, वही संसार आनंदमय हो जाता है। इसलिए मन का प्रशिक्षण ही सबसे बड़ी साधना है।",
    meaning_english: "Mind alone is the cause of bondage and liberation for human beings."
  },
  {
    shloka: "स्वधर्मे निधनं श्रेयः परधर्मो भयावहः।",
    iast: "svadharme nidhanaṃ śreyaḥ paradharmo bhayāvahaḥ",
    source: "भगवद्गीता, अध्याय 3, श्लोक 35",
    sourceLine: "Bhagavad Gita 3.35",
    meaning_hindi: "अपने स्वभाव के अनुकूल कर्तव्य का पालन करते हुए मरना भी कल्याणकारी है, किन्तु दूसरे के स्वभाव के अनुकूल कर्तव्य को अपनाना भय पैदा करने वाला है। यह प्रामाणिकता का दर्शन है — वही करो जो तुम्हारे स्वभाव के अनुकूल हो, न कि वह जो दूसरे कर रहे हैं। दूसरों की नकल कभी पूर्णता नहीं दे सकती। अपने अनन्य मार्ग पर चलना ही जीवन की सबसे बड़ी उपलब्धि है। यह आत्म-प्रामाणिकता का भारतीय दर्शन है।",
    meaning_english: "It is better to discharge one's own prescribed duty, even though faultily, than another's duty perfectly. Destruction in the course of performing one's own duty is better."
  },
  {
    shloka: "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः।\nमनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः॥",
    iast: "indriyāṇi parāṇy āhur indriyebhyaḥ paraṃ manaḥ |\nmanasas tu parā buddhir yo buddheḥ paratas tu saḥ",
    source: "भगवद्गीता, अध्याय 3, श्लोक 42",
    sourceLine: "Bhagavad Gita 3.42",
    meaning_hindi: "इंद्रियाँ श्रेष्ठ कही जाती हैं; इंद्रियों से श्रेष्ठ मन है; मन से श्रेष्ठ बुद्धि है; और जो बुद्धि से भी परे है — वह (आत्मा) है। यह मानव चेतना की एक सुंदर पदानुक्रम है — शरीर, इंद्रियाँ, मन, बुद्धि, आत्मा। जब हम इस क्रम को समझते हैं, तो हम समझते हैं कि किसे प्राथमिकता दें। बुद्धि मन को नियंत्रित करे, और बुद्धि आत्मा के अनुसार चले — यही श्रेष्ठ जीवन है।",
    meaning_english: "The senses are superior to the dull matter; the mind is higher than the senses; intelligence is still higher than the mind; and the soul is even higher than intelligence."
  },
  {
    shloka: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति।\nतस्याहं न प्रणश्यामि स च मे न प्रणश्यति॥",
    iast: "yo māṃ paśyati sarvatra sarvaṃ ca mayi paśyati |\ntasyāhaṃ na praṇaśyāmi sa ca me na praṇaśyati",
    source: "भगवद्गीता, अध्याय 6, श्लोक 30",
    sourceLine: "Bhagavad Gita 6.30",
    meaning_hindi: "जो मुझे सर्वत्र देखता है और सब कुछ मुझमें देखता है, उसके लिए मैं अदृश्य नहीं होता और वह मेरे लिए अदृश्य नहीं होता। यह एकात्मता का अनुभव है। जब हम सब में परमात्मा देखते हैं, तो अकेलापन, भय और अलगाव की भावना जाती रहती है। ईश्वर और भक्त के बीच यह गहरा संबंध है — मैं उसे देखूं, वह मुझे देखे। यह प्रेम की चरम अवस्था है जिसे भक्ति कहते हैं।",
    meaning_english: "For one who sees Me everywhere and sees everything in Me, I am never lost to him, and he is never lost to Me."
  },
  {
    shloka: "ऋते ज्ञानान्न मुक्तिः।",
    iast: "ṛte jñānānna muktiḥ",
    source: "शांकरभाष्य सूत्र",
    sourceLine: "Shankara Sutra",
    meaning_hindi: "ज्ञान के बिना मुक्ति संभव नहीं है। यह शांकर वेदांत का मूल सिद्धांत है। कितना भी कर्म करो, कितनी भी पूजा करो — यदि अज्ञान है तो बंधन रहेगा। अज्ञान के हटने पर ही सत्य का साक्षात्कार होता है। ज्ञान का अर्थ यहाँ केवल बौद्धिक जानकारी नहीं, बल्कि आत्म-साक्षात्कार है — वह प्रत्यक्ष अनुभव कि मैं ब्रह्म हूँ।",
    meaning_english: "Without knowledge, liberation is not attained."
  },
  {
    shloka: "ओम् तत् सत्।",
    iast: "oṃ tat sat",
    source: "भगवद्गीता, अध्याय 17, श्लोक 23",
    sourceLine: "Bhagavad Gita 17.23",
    meaning_hindi: "ओम्, तत् (वह), सत् (सत्य) — ये ब्रह्म के तीन प्रतीक हैं। भगवद्गीता बताती है कि आदिकाल से ब्राह्मण, वेद और यज्ञ इन तीन शब्दों से आरंभ किए जाते हैं। 'ओम्' परम नाद है, 'तत्' इशारा करता है उस अनिर्वचनीय की ओर, और 'सत्' उसकी नित्य वास्तविकता को कहता है। यह त्रिवर्ण मंत्र समस्त वैदिक कर्म और ज्ञान का आधार है।",
    meaning_english: "Om, Tat, Sat — these three words represent the Supreme Absolute Truth. By these, brahminical activities, Vedic studies, and sacrifices were performed from the beginning of creation."
  },
  {
    shloka: "यत्र नान्यत्पश्यति नान्यच्छृणोति नान्यद्विजानाति तद्भूमा।",
    iast: "yatra nānyat paśyati nānyac chṛṇoti nānyad vijānāti tad bhūmā",
    source: "छान्दोग्य उपनिषद्, 7.24.1",
    sourceLine: "Chandogya Upanishad 7.24.1",
    meaning_hindi: "जहाँ कोई दूसरा नहीं दिखता, कोई दूसरा नहीं सुनाई देता, कोई दूसरा नहीं जाना जाता — वही भूमा (अनंत) है। भूमा — यह संस्कृत का एक अत्यंत सुंदर शब्द है जो उस अवस्था को दर्शाता है जहाँ द्वंद्व नहीं है। उस ध्यान की गहराई में जहाँ केवल एक ही रहता है — वहाँ परम आनंद है। जहाँ दूसरा है, वहाँ भय है, वहाँ दुःख है। अद्वैत में ही परम शांति है।",
    meaning_english: "Where one sees nothing else, hears nothing else, knows nothing else — that is the Infinite (Bhuma). Where one sees something else, hears something else — that is the finite."
  },
  {
    shloka: "प्रणवः सर्ववेदेषु समिद्धोऽग्निरिव ज्वलन्।",
    iast: "praṇavaḥ sarva-vedeṣu samidhdhagnir iva jvalan",
    source: "कठोपनिषद्, 1.2.16 (भाव)",
    sourceLine: "Katha Upanishad 1.2.15-16",
    meaning_hindi: "प्रणव (ओम्) समस्त वेदों में जैसे प्रज्वलित अग्नि में समिधा की तरह विद्यमान है। ओम् का यह रूपक अत्यंत सुंदर है — जैसे अग्नि समिधा में और समिधा अग्नि में होती है, वैसे ही ओम् वेद में और वेद ओम् में है। यह एकता बोध ही संपूर्ण ज्ञान का सार है। ओम् केवल ध्वनि नहीं — वह ब्रह्मांड का मूल कंपन है।",
    meaning_english: "The pranava (Om) shines within all the Vedas like fire blazing with kindling."
  },
  {
    shloka: "सर्वं जगदिदं ब्रह्मोपनिषदं परं ब्रह्म।\nब्रह्मैव सर्वं विश्वं तदेतत्।",
    iast: "sarvaṃ jagad idaṃ brahma upaniṣadaṃ paraṃ brahma |\nbrahmaiva sarvaṃ viśvaṃ tad etat",
    source: "माण्डूक्य उपनिषद् (भाव)",
    sourceLine: "Mandukya Upanishad",
    meaning_hindi: "यह समस्त जगत् ब्रह्म है — यही उपनिषद् का परम ब्रह्म है। ब्रह्म ही यह संपूर्ण विश्व है। माण्डूक्य उपनिषद् सबसे संक्षिप्त उपनिषद् है, पर इसमें वेदांत का समूचा सार है। ओम् के चार पाद — जाग्रत, स्वप्न, सुषुप्ति और तुरीय — ये चेतना की चार अवस्थाएं हैं। जो इन्हें समझ लेता है, वह ब्रह्म को जान लेता है।",
    meaning_english: "All this universe is indeed Brahman, the supreme Brahman of the Upanishads. Brahman alone is this entire cosmos."
  },
  {
    shloka: "अहिंसा परमो धर्मस्तथाहिंसा परं तपः।\nअहिंसा परमं सत्यं यतो धर्मः प्रवर्तते॥",
    iast: "ahiṃsā paramo dharmas tathāhiṃsā paraṃ tapaḥ |\nahiṃsā paramaṃ satyaṃ yato dharmaḥ pravartate",
    source: "महाभारत, अनुशासन पर्व, 115.23",
    sourceLine: "Mahabharata 115.23",
    meaning_hindi: "अहिंसा परम धर्म है, अहिंसा परम तप है, अहिंसा परम सत्य है — जिससे धर्म प्रवर्तित होता है। यह केवल शरीर की अहिंसा नहीं — मन, वचन और कर्म तीनों स्तरों पर अहिंसा। जब हम मन में किसी के प्रति वैर-भाव नहीं रखते, तब सच्ची अहिंसा है। महात्मा गांधी ने इसी सिद्धांत को साम्राज्य के विरुद्ध एक अद्भुत शस्त्र बनाया।",
    meaning_english: "Non-violence is the supreme dharma, non-violence is supreme austerity, non-violence is the highest truth — from which all dharma flows."
  },
  {
    shloka: "असतो मा सद्गमय तमसो मा ज्योतिर्गमय।\nमृत्योर्मा अमृतं गमय। ओम् शांतिः शांतिः शांतिः।",
    iast: "asato mā sad-gamaya tamaso mā jyotir-gamaya |\nmṛtyor mā amṛtaṃ gamaya oṃ śāntiḥ śāntiḥ śāntiḥ",
    source: "बृहदारण्यक उपनिषद्, 1.3.28",
    sourceLine: "Brihadaranyaka Upanishad 1.3.28",
    meaning_hindi: "मुझे असत्य से सत्य की ओर ले चलो, अंधकार से प्रकाश की ओर ले चलो, मृत्यु से अमरता की ओर ले चलो। यह तीन याचनाएं एक साथ तीन स्तरों पर मुक्ति की प्रार्थना हैं — वैचारिक, भावनात्मक और आत्मिक। असत्य से सत्य की यात्रा बौद्धिक है, अंधकार से प्रकाश की यात्रा भावनात्मक है, और मृत्यु से अमरता की यात्रा आत्मिक है। तीन बार शांति — त्रिविध तापों की शांति के लिए।",
    meaning_english: "Lead me from the unreal to the real, lead me from darkness to light, lead me from death to immortality. Om, peace, peace, peace."
  },
  {
    shloka: "तेजो यत्ते रूपं कल्याणतमं तत्ते पश्यामि यो'सावसौ पुरुषः सो'हमस्मि।",
    iast: "tejo yat te rūpaṃ kalyāṇatamaṃ tat te paśyāmi yo'sāv asau puruṣaḥ so'ham asmi",
    source: "ईश उपनिषद्, 16",
    sourceLine: "Isha Upanishad 16",
    meaning_hindi: "जो तेरा सबसे कल्याणकारी तेजोमय रूप है, उसे मैं देखता हूँ। वह जो सूर्य में पुरुष है — वही मैं हूँ। यह उपनिषद् का एक अत्यंत साहसिक कथन है — सूर्य में जो दिव्य चेतना है, वही मुझमें है। अहं ब्रह्मास्मि का यह रूप और भी भावपूर्ण है। ध्यान में जब हम सूर्य को नमस्कार करते हैं, तो यह भाव होना चाहिए कि उस सूर्य-ज्योति और मेरी अंतर-ज्योति में कोई भेद नहीं।",
    meaning_english: "The light that is your most auspicious form — I see that. That person who is in the sun — that same person am I."
  },
  {
    shloka: "प्रियं च नानृतं ब्रूयादेष धर्मः सनातनः।",
    iast: "priyaṃ ca nānṛtaṃ brūyād eṣa dharmaḥ sanātanaḥ",
    source: "महाभारत, विदुर नीति",
    sourceLine: "Mahabharata - Vidur Niti",
    meaning_hindi: "जो प्रिय लगे वही बोलो, पर जो असत्य हो वह प्रिय भी न बोलो — यह सनातन धर्म है। यह वचन 'प्रिय सत्य' की अवधारणा को स्पष्ट करता है। हमें हमेशा मीठे शब्द बोलने की जरूरत नहीं — पर जो भी बोलें वह सत्य होना चाहिए। और यदि सत्य कड़वा है तो उसे भी मधुरता से कहा जा सकता है। कटु सत्य और असत्य — दोनों से बचना ही श्रेष्ठ संवाद-कौशल है। विदुर नीति का यह रत्न आज भी उतना ही प्रासंगिक है।",
    meaning_english: "Speak what is pleasant, but never speak an untruth just to please — this is the eternal dharma."
  },
  {
    shloka: "अणोरणीयान्महतो महीयान्आत्मास्य जन्तोर्निहितो गुहायाम्।\nतमक्रतुः पश्यति वीतशोको धातुः प्रसादान्महिमानमात्मनः॥",
    iast: "aṇor aṇīyān mahato mahīyān ātmāsya jantor nihito guhāyām |\ntam akratuḥ paśyati vīta-śoko dhātuḥ prasādān mahimānam ātmanaḥ",
    source: "कठोपनिषद्, 1.2.20",
    sourceLine: "Katha Upanishad 1.2.20",
    meaning_hindi: "आत्मा अणु से भी सूक्ष्म और महान से भी महान है। प्रत्येक प्राणी के हृदय की गुहा में वह छिपा है। जो इच्छाओं से मुक्त और शोक-रहित है, वह ईश्वर की कृपा से आत्मा की उस महिमा को देख लेता है। आत्मा की यह विशेषता — परमाणु से भी सूक्ष्म और विश्व से भी बड़ी — भारतीय दर्शन का एक अद्वितीय प्रतिभाशाली वर्णन है। जो खुद को जानता है वह सब जानता है।",
    meaning_english: "The Self, smaller than the small, greater than the great, is hidden in the heart of the creature. One without desires, freed from grief, sees the glory of the Self by grace."
  },
  {
    shloka: "नचिकेताः उवाच — श्रेयश्च प्रेयश्च मनुष्यमेतस्तौ सम्परीत्य विविनक्ति धीरः।\nश्रेयो हि धीरो'भिप्रेयसो वृणीते प्रेयो मन्दो योगक्षेमाद्वृणीते॥",
    iast: "śreyaś ca preyaś ca manuṣyam etas tau samparītya vivinakti dhīraḥ |\nśreyo hi dhīro'bhipreyaso vṛṇīte preyo mando yoga-kṣemād vṛṇīte",
    source: "कठोपनिषद्, 1.2.2",
    sourceLine: "Katha Upanishad 1.2.2",
    meaning_hindi: "श्रेय और प्रेय — दोनों मनुष्य के पास आते हैं। धीर उन्हें परखकर अलग करता है। धीर प्रेय से श्रेय को चुनता है, मंद व्यक्ति भोग-कुशलता के लिए प्रेय को वरण करता है। यह जीवन की सबसे बुनियादी पसंद है। हर दिन हम इस चुनाव का सामना करते हैं — आसान और प्रिय लगने वाला, या वह जो दीर्घकाल में कल्याणकारी हो। धीरता — यही विवेक की पहली निशानी है।",
    meaning_english: "Both the good and the pleasant approach a man. The wise man examines and distinguishes them. The wise prefers the good over the pleasant; the fool, driven by worldly concerns, chooses the pleasant."
  },
  {
    shloka: "सत्यं ज्ञानमनन्तं ब्रह्म।",
    iast: "satyaṃ jñānam anantaṃ brahma",
    source: "तैत्तिरीय उपनिषद्, 2.1.1",
    sourceLine: "Taittiriya Upanishad 2.1.1",
    meaning_hindi: "ब्रह्म सत्य है, ज्ञान है, अनंत है। ये तीन विशेषण ब्रह्म के स्वरूप को परिभाषित करते हैं। सत्य — जो कभी न बदले। ज्ञान — जो स्वयं प्रकाश है। अनंत — जिसकी कोई सीमा नहीं। ये तीनों मिलकर उस परम तत्व को इंगित करते हैं जिसे आनंद-ब्रह्म के रूप में जाना जाता है। संपूर्ण वेदांत इन तीन शब्दों में समाहित है और हर साधक इन्हीं की खोज में है।",
    meaning_english: "Brahman is truth, consciousness (knowledge), and infinite — these three define the nature of the ultimate reality."
  },
  {
    shloka: "यद्यत्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा।\nतत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम्॥",
    iast: "yad yad vibhūtimat sattvaṃ śrīmad ūrjitam eva vā |\ntat tad evāvagaccha tvaṃ mama tejo'ṃśa-sambhavam",
    source: "भगवद्गीता, अध्याय 10, श्लोक 41",
    sourceLine: "Bhagavad Gita 10.41",
    meaning_hindi: "जो भी वस्तु ऐश्वर्यशाली, श्रीमती (कान्तिमती) या तेजस्वी है — उसे मेरे तेज के एक अंश से उत्पन्न जानो। इस श्लोक में भगवान हर सुंदर, शक्तिशाली और उज्ज्वल वस्तु में अपना अंश बताते हैं। जब भी हम किसी कलाकृति, सूर्यास्त, किसी महान व्यक्ति या किसी सुंदर गीत में भाव-विभोर हो जाते हैं — वह उसी दिव्य तेज की एक किरण है। यह दृष्टि जीवन को पवित्र बना देती है।",
    meaning_english: "Know that every beautiful, glorious, or powerful manifestation is but a spark of My splendor."
  },
  {
    shloka: "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च।\nअहंकार इतीयं मे भिन्ना प्रकृतिरष्टधा॥",
    iast: "bhūmir āpo 'nalo vāyuḥ khaṃ mano buddhir eva ca |\nahaṃkāra itīyaṃ me bhinnā prakṛtir aṣṭadhā",
    source: "भगवद्गीता, अध्याय 7, श्लोक 4",
    sourceLine: "Bhagavad Gita 7.4",
    meaning_hindi: "पृथ्वी, जल, अग्नि, वायु, आकाश, मन, बुद्धि और अहंकार — यह मेरी आठ प्रकार की भिन्न प्रकृति है। भगवान यहाँ समस्त सृष्टि को अपनी ही प्रकृति का विस्तार बताते हैं। पंचमहाभूत और तीन अंतःकरण — ये सब परमेश्वर की अपरा प्रकृति के रूप हैं। यह समझ हमें अहंकार से मुक्त करती है — मेरा शरीर और मेरा मन भी ईश्वर की ही प्रकृति के रूप हैं।",
    meaning_english: "Earth, water, fire, air, ether, mind, intelligence and false ego — these eight comprise My separated material energies."
  },
  {
    shloka: "वायुर्यमोऽग्निर्वरुणः शशांकः प्रजापतिस्त्वं प्रपितामहश्च।\nनमो नमस्तेऽस्तु सहस्रकृत्वः पुनश्च भूयोऽपि नमो नमस्ते॥",
    iast: "vāyur yamo'gnir varuṇaḥ śaśāṃkaḥ prajāpatis tvaṃ prapitāmahaś ca |\nnamo namas te'stu sahasra-kṛtvaḥ punaś ca bhūyo'pi namo namas te",
    source: "भगवद्गीता, अध्याय 11, श्लोक 39",
    sourceLine: "Bhagavad Gita 11.39",
    meaning_hindi: "तुम वायु, यम, अग्नि, वरुण, चंद्रमा, प्रजापति और पितामह हो। हजार बार तुम्हें नमस्कार, और फिर-फिर भी नमस्कार। अर्जुन ने विश्वरूप देखकर यह स्तुति की। यह दृष्टि है — जब हम देखते हैं कि प्रकृति की हर शक्ति, हर देवता, एक ही परमेश्वर के रूप हैं। यह एकेश्वरवाद और बहुदेववाद का अद्वितीय समन्वय है।",
    meaning_english: "You are air, Yama, fire, Varuna, the moon, the creator Brahma, and the great-grandfather. A thousand salutations to You, and again and again."
  },
  {
    shloka: "ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः।\nतेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम्॥",
    iast: "jñānena tu tad ajñānaṃ yeṣāṃ nāśitam ātmanaḥ |\nteṣām āditya-vaj jñānaṃ prakāśayati tat param",
    source: "भगवद्गीता, अध्याय 5, श्लोक 16",
    sourceLine: "Bhagavad Gita 5.16",
    meaning_hindi: "किन्तु जिनका वह अज्ञान आत्म-ज्ञान से नष्ट हो गया है, उनका ज्ञान सूर्य की तरह उस परम तत्व को प्रकाशित कर देता है। जब अज्ञान के बादल हटते हैं, तो ज्ञान का सूर्य स्वयं ही चमकने लगता है — इसे अर्जित नहीं करना होता, बस प्रकट होता है। यही उपनिषद् का अनावरण-दर्शन है — ब्रह्म छिपा नहीं है, बस अज्ञान ने ढक रखा है।",
    meaning_english: "When, however, one is enlightened with the knowledge by which ignorance is destroyed, then his knowledge reveals everything, as the sun lights up everything in the daytime."
  },
  {
    shloka: "वेदानां सामवेदोऽस्मि देवानामस्मि वासवः।\nइन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना॥",
    iast: "vedānāṃ sāma-vedo'smi devānām asmi vāsavaḥ |\nindriyāṇāṃ manaś cāsmi bhūtānām asmi cetanā",
    source: "भगवद्गीता, अध्याय 10, श्लोक 22",
    sourceLine: "Bhagavad Gita 10.22",
    meaning_hindi: "वेदों में मैं सामवेद हूँ, देवताओं में इंद्र हूँ, इंद्रियों में मन हूँ, और प्राणियों में चेतना हूँ। भगवान की विभूतियों की इस सूची में सबसे गहरा तत्व है — भूतानाम् चेतना — प्राणियों में चेतना। जो अनुभव करता है, जो जानता है, जो देखता है — वह चेतना ही ईश्वर का सबसे प्रत्यक्ष अंश है। हम अपनी चेतना में ईश्वर को सबसे निकट पाते हैं।",
    meaning_english: "Of the Vedas I am the Sama Veda; of the demigods I am Indra; of the senses I am the mind; and in living beings I am the living force, consciousness."
  },
  {
    shloka: "प्रजापतिर्ह वा आसीत्। स प्रजाः असृजत। प्रजाः सृष्ट्वा सः तासु प्राविशत्।",
    iast: "prajāpatir ha vā āsīt | sa prajāḥ asṛjat | prajāḥ sṛṣṭvā saḥ tāsu prāviśat",
    source: "ऐतरेय उपनिषद्, 1.1.1",
    sourceLine: "Aitareya Upanishad 1.1.1",
    meaning_hindi: "प्रजापति (सर्जक ब्रह्म) था। उसने प्रजाओं (जीवों) को उत्पन्न किया। प्रजाओं को उत्पन्न करके वह उनमें स्वयं प्रवेश कर गया। यह एक अत्यंत गहरी सृष्टि-दृष्टि है। सर्जक अपनी ही रचना में छिप जाता है — जैसे कुम्हार मिट्टी में, और मिट्टी घड़े में। ईश्वर ने जगत् बनाया और फिर स्वयं उसमें आत्मा के रूप में निवास किया। इसीलिए हर जीव में ईश्वर की उपस्थिति है — और हर जीव पवित्र है।",
    meaning_english: "Prajapati was indeed here. He created the creatures. Having created them, he entered into them."
  },
  {
    shloka: "यस्य देवे परा भक्तिर्यथा देवे तथा गुरौ।\nतस्यैते कथिता ह्यर्थाः प्रकाशन्ते महात्मनः॥",
    iast: "yasya deve parā bhaktir yathā deve tathā gurau |\ntasyaite kathitā hy arthāḥ prakāśante mahātmanaḥ",
    source: "श्वेताश्वतर उपनिषद्, 6.23",
    sourceLine: "Shvetashvatara Upanishad 6.23",
    meaning_hindi: "जिसकी ईश्वर में परम भक्ति है और जैसी ईश्वर में वैसी ही गुरु में भी — उस महात्मा को ये उपनिषद् के अर्थ स्वयं प्रकाशित हो जाते हैं। गुरु-शिष्य परंपरा का यह सूत्र अत्यंत गहन है। शास्त्र केवल पढ़ने से नहीं, बल्कि श्रद्धापूर्वक गुरु-ईश्वर में समर्पण से प्रकट होते हैं। बुद्धि की सीमा है — श्रद्धा उसे पार करती है। यह उपनिषद् का वह सूत्र है जो 'गुरुकृपा' की महत्ता सिद्ध करता है।",
    meaning_english: "To the great soul with supreme devotion to God and equal devotion to the Guru, the meanings of these scriptures become self-luminous."
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
    meaning_hindi: "कबीर संसार रूपी बाज़ार में निष्पक्ष खड़े होकर सभी की भलाई और शांति की कामना करते हैं। वे किसी विशेष राग-द्वेष में नहीं पड़ते - न किसी से गहरी आसक्ति और न किसी से शत्रुता।"
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
  },
  {
    doha: "जो तोको काँटा बुवै, ताहि बोव तू फूल।\nतोहि फूल को फूल है, वाको है तिरसूल॥",
    poet: "कबीर दास",
    meaning_hindi: "जो तुम्हारे लिए काँटे बोए, उसके लिए तुम फूल बोओ। तुम्हें फूल का फूल मिलेगा और उसे त्रिशूल मिलेगा। यह दोहा क्षमा और परोपकार की सबसे व्यावहारिक शिक्षा देता है। कबीर यहाँ यह नहीं कहते कि बुराई को नजरअंदाज करो — वे कहते हैं कि बुराई का बदला भलाई से दो। यह केवल आदर्शवाद नहीं — यह एक रणनीति भी है। जब हम शत्रु के प्रति दयाभाव रखते हैं, तो हमारा चित्त शांत रहता है और उसका अपना कर्म उसे फल देता है। फूल बोने वाले के जीवन में सुगंध रहती है, काँटे बोने वाला स्वयं घायल होता है।"
  },
  {
    doha: "माटी कहे कुम्हार से, तू क्या रौंदे मोहि।\nएक दिन ऐसा होयगा, मैं रौंदूँगी तोहि॥",
    poet: "कबीर दास",
    meaning_hindi: "मिट्टी कुम्हार से कहती है — तू मुझे अभी रौंद रहा है, पर एक दिन ऐसा आएगा जब मैं तुझे रौंदूँगी (तू मिट्टी में मिल जाएगा)। यह दोहा मृत्यु की अनिवार्यता और जीवन की क्षणभंगुरता की याद दिलाता है। मनुष्य अहंकार में मिट्टी को तुच्छ समझता है, पर अंत में सब मिट्टी में ही मिलते हैं। कबीर इस दोहे से हमें विनम्रता, सादगी और अहंकार-मुक्ति की ओर बुलाते हैं। जो यह जानता है कि अंत में सब समान है, वह भेदभाव और घमंड से ऊपर उठ जाता है।"
  },
  {
    doha: "रहिमन पानी राखिये, बिन पानी सब सून।\nपानी गये न ऊबरे, मोती मानुष चून॥",
    poet: "रहीम",
    meaning_hindi: "रहीम कहते हैं — मान और इज्जत (पानी) को बनाए रखो, क्योंकि बिना इज्जत के सब व्यर्थ है। पानी जाने पर मोती, मनुष्य और चूना (पत्थर) — तीनों की शोभा नष्ट हो जाती है। मोती का पानी (चमक), मनुष्य का पानी (सम्मान) और चूने का पानी (जल) — इन तीनों को रहीम ने एक ही शब्द 'पानी' से जोड़ा है। यह बहुआयामी प्रतीक भारतीय काव्य की महानता का उदाहरण है। इज्जत खोकर जीना मृत्यु से भी बुरा है — यह भारतीय संस्कृति का एक मूल मूल्य है।"
  },
  {
    doha: "रहिमन धागा प्रेम का, मत तोड़ो चटकाय।\nटूटे से फिर ना जुड़े, जुड़े गाँठ पड़ि जाय॥",
    poet: "रहीम",
    meaning_hindi: "रहीम कहते हैं — प्रेम का धागा झटके से मत तोड़ो। एक बार टूट जाने पर वह फिर जुड़ता नहीं, और यदि जुड़े भी तो गाँठ पड़ जाती है। यह दोहा रिश्तों की नाजुकता और सम्मान की आवश्यकता को बताता है। प्रेम एक धागा है जिसे सहेजकर रखना होता है। एक बार कठोर शब्द, एक बार धोखा — और यह धागा टूट जाता है। कभी-कभी माफी हो भी जाती है, पर वह गाँठ — वह पुरानी ठेस — मन में रह जाती है। इसलिए रिश्तों में सावधानी और कोमलता जरूरी है।"
  },
  {
    doha: "रहिमन वे नर मर चुके, जे कहुँ माँगन जाहिं।\nउनते पहले वे मुए, जिन मुख निकसत नाहिं॥",
    poet: "रहीम",
    meaning_hindi: "रहीम कहते हैं — वे लोग जो किसी के पास माँगने जाते हैं, वे तो मरे हुए हैं ही; पर उनसे पहले वे मरे हुए हैं जिनके मुख से 'नहीं' निकलती है — जो किसी की मदद नहीं करते। यह दोहा दान और सहायता की महत्ता बताता है। माँगना एक प्रकार की विवशता है, पर माँगने पर देने से इनकार करना और भी बड़ी आत्मिक दीनता है। जो दे सकता है और नहीं देता, वह वास्तव में जीवित नहीं है।"
  },
  {
    doha: "तुलसी साथी विपत्ति के, विद्या विनय विवेक।\nसाहस सुकृति सुसत्यव्रत, राम भरोसो एक॥",
    poet: "तुलसीदास",
    meaning_hindi: "तुलसीदास कहते हैं — विपत्ति के साथी हैं: विद्या, विनय, विवेक, साहस, सुकर्म, सत्यव्रत और सबसे बड़ा — राम का भरोसा। जब जीवन में संकट आए, तो ये सात गुण और ईश्वर पर विश्वास ही काम आते हैं। धन, परिवार, पद — ये सब संकट में साथ छोड़ सकते हैं। पर ज्ञान, विनम्रता, साहस और ईश्वर-भक्ति — ये कभी साथ नहीं छोड़ते। यह दोहा जीवन की प्राथमिकताएं तय करने में मदद करता है।"
  },
  {
    doha: "सकल पदारथ है जग माहीं। करमहीन नर पावत नाहीं॥",
    poet: "तुलसीदास",
    meaning_hindi: "तुलसीदास कहते हैं — संसार में सभी पदार्थ (वस्तुएं, सुख) उपलब्ध हैं, पर कर्महीन मनुष्य उन्हें नहीं पाता। यह कर्म के महत्व का एक सुंदर वचन है। भाग्य और ईश्वर पर विश्वास रखना अच्छा है, पर पुरुषार्थ के बिना कुछ नहीं मिलता। जो बोएगा वही काटेगा। सृष्टि में सब कुछ है — स्वास्थ्य, ज्ञान, प्रेम, समृद्धि — पर ये सब उन्हीं को मिलते हैं जो प्रयास करते हैं। यह आलस्य के विरुद्ध और कर्म की महत्ता के पक्ष में एक सशक्त उद्बोधन है।"
  },
  {
    doha: "मेरा मुझमें कुछ नहीं, जो कुछ है सो तेरा।\nतेरा तुझको सौंपते, क्या लागे है मेरा॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — मेरे में मेरा कुछ भी नहीं है, जो कुछ है वह सब तेरा (ईश्वर का) है। तेरी चीज तुझे वापस करने में मेरा क्या जाता है? यह समर्पण भाव की सर्वोच्च अभिव्यक्ति है। जब हम यह मान लेते हैं कि शरीर, मन, बुद्धि, धन — सब ईश्वर का दिया हुआ है — तो अहंकार और ममता स्वाभाविक रूप से गिर जाती है। यह भक्ति का वह शिखर है जहाँ 'मैं' और 'मेरा' की भावना विलीन हो जाती है और केवल समर्पण शेष रहता है।"
  },
  {
    doha: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय।\nजो दिल खोजा आपना, मुझसे बुरा न कोय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — मैं दूसरों में बुराई खोजने निकला, पर कोई बुरा नहीं मिला। जब मैंने अपने मन को खोजा, तो पाया कि मुझसे बुरा कोई नहीं है। यह आत्म-निरीक्षण और आत्म-आलोचना का सबसे गहरा पाठ है। जब हम दूसरों की बुराइयाँ देखते हैं, तो वास्तव में हम अपनी कमजोरियों को बाहर प्रक्षेपित कर रहे होते हैं। जो व्यक्ति स्वयं को गहराई से जानता है, वह दूसरों की आलोचना करना बंद कर देता है।"
  },
  {
    doha: "दुख में सुमिरन सब करें, सुख में करे न कोय।\nजो सुख में सुमिरन करे, तो दुख काहे होय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — दुख में सब ईश्वर को याद करते हैं, सुख में कोई नहीं करता। यदि सुख में भी ईश्वर को याद किया जाए, तो दुख आएगा ही क्यों? यह एक गहरी मनोवैज्ञानिक और आध्यात्मिक बात है। जो केवल संकट में भगवान को याद करते हैं, वे ईश्वर को 'इमरजेंसी सेवा' मानते हैं। पर जो प्रत्येक क्षण, सुख-दुख दोनों में, ईश्वर का स्मरण रखते हैं — उनका जीवन संतुलित और शांत रहता है।"
  },
  {
    doha: "ऐसी वाणी बोलिए मन का आपा खोय।\nऔरन को शीतल करे, आपहु शीतल होय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — ऐसी वाणी बोलो जो अहंकार से मुक्त हो। ऐसी वाणी जो दूसरों को शीतल (शांत) करे और तुम्हें भी शीतल करे। वाणी का यह गुण — शीतलता देना — सबसे कठिन और सबसे मूल्यवान है। कठोर वाणी क्षणिक संतुष्टि देती है पर रिश्तों को नष्ट करती है। मधुर वाणी न केवल सुनने वाले का मन जीतती है, बल्कि बोलने वाले का मन भी शांत रखती है।"
  },
  {
    doha: "गुरु गोविंद दोउ खड़े, काके लागूँ पाँय।\nबलिहारी गुरु आपने, गोविंद दियो बताय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — गुरु और ईश्वर (गोविंद) दोनों एक साथ खड़े हैं, तो पहले किसके पैर छुऊं? मैं गुरु पर बलिहारी (न्योछावर) हूँ, क्योंकि उन्होंने ही गोविंद से मिलाया। गुरु-महिमा का यह दोहा भारत में अत्यंत प्रसिद्ध है। गुरु वह माध्यम है जिसके द्वारा हम ईश्वर तक पहुँचते हैं। आज जब 'मेंटर' और 'कोच' की बात होती है, तो यह दोहा याद दिलाता है कि सही मार्गदर्शक का महत्व ईश्वर के समान है।"
  },
  {
    doha: "जिन खोजा तिन पाइया, गहरे पानी पैठ।\nमैं बपुरा बूड़न डरा, रहा किनारे बैठ॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — जिसने खोजा उसे पाया, गहरे पानी में डुबकी लगाकर। मैं डूबने के डर से किनारे पर बैठा रहा। यह आत्म-साक्षात्कार के मार्ग में साहस की आवश्यकता बताता है। जो अपने डर को पार कर गहरे उतरता है — वह ज्ञान का मोती पाता है। जो किनारे पर बैठा रहता है — वह सुरक्षित तो है, पर खाली हाथ भी। जीवन में बड़ी उपलब्धियां जोखिम लेने वालों को मिलती हैं।"
  },
  {
    doha: "काल करे सो आज कर, आज करे सो अब।\nपल में परलय होयगी, बहुरि करेगो कब॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — जो कल करना है वह आज करो, जो आज करना है वह अभी करो। एक पल में प्रलय हो सकती है, तब क्या करोगे? यह दोहा समय के महत्व और तात्कालिकता का सबसे प्रसिद्ध काव्यात्मक उद्घोष है। कल पर टालने की आदत ही सफलता की सबसे बड़ी शत्रु है। कबीर का यह वचन आज के युग में भी उतना ही सत्य है जितना पाँच सौ वर्ष पहले था। वर्तमान क्षण में ही जीवन है।"
  },
  {
    doha: "अवसर चूका बनिज को, तो क्या पछताय।\nबीती ताहि बिसारि दे, आगे की सुधि लेय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — व्यापार का अवसर चूक जाने पर क्या पछताना? जो बीत गया उसे भूल जाओ और आगे का सोचो। यह दोहा पछतावे की व्यर्थता और आगे बढ़ने की शक्ति पर है। बीती बातों पर पछताना ऊर्जा की बर्बादी है। जो गया सो गया — अब जो है उसका सदुपयोग करो। यह माइंडफुलनेस और 'letting go' का सबसे सरल और स्पष्ट भारतीय संदेश है।"
  },
  {
    doha: "कनक कनक ते सौ गुनी, मादकता अधिकाय।\nवा खाये बौराय जग, या पाये बौराय॥",
    poet: "बिहारी",
    meaning_hindi: "बिहारी कहते हैं — धतूरा (कनक) से सौ गुना अधिक नशा सोने (कनक) में है। धतूरा खाने पर आदमी पागल होता है, पर सोना पाने से पहले ही दुनिया पागल हो जाती है। 'कनक' शब्द का यह श्लेष (दो अर्थ — धतूरा और सोना) बिहारी की काव्य-प्रतिभा का उत्कृष्ट उदाहरण है। धन का लोभ और पागलपन — यह सत्य आज के उपभोक्तावादी युग में और भी प्रासंगिक है।"
  },
  {
    doha: "रहिमन अँसुवा नयन ढरि, जियत न बहुरि आव।\nजो चाहत मन की कह, वो मुँह से न जाव॥",
    poet: "रहीम",
    meaning_hindi: "रहीम कहते हैं — एक बार बहाए गए आँसू वापस नहीं आते जब तक जीवन है। जो बात मन में कहना चाहो, वह मुँह से कहने के लिए जाती नहीं (भावनाएं शब्दों में नहीं आती)। यह दोहा भावनाओं की गहराई और व्यक्त न कर पाने की पीड़ा को दर्शाता है। कभी-कभी जो सबसे अधिक कहना होता है, वही शब्दों में नहीं आता। यह मानवीय संवेदनशीलता की एक काव्यात्मक पहचान है।"
  },
  {
    doha: "चाह गई चिंता मिटी, मनवा बेपरवाह।\nजिनको कछु न चाहिए, वे शाहन के शाह॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — चाहत (इच्छा) जब चली जाती है, तो चिंता भी मिट जाती है और मन बेपरवाह (निश्चिंत) हो जाता है। जिन्हें कुछ भी नहीं चाहिए, वे राजाओं के भी राजा हैं। यह परम संतोष और वैराग्य का दोहा है। चिंता का मूल कारण इच्छाएं हैं — जितनी इच्छाएं, उतनी चिंता। जो इच्छाओं से मुक्त है, वह वास्तविक अर्थ में स्वतंत्र और सम्राट है।"
  },
  {
    doha: "नहाये धोये क्या भया, जो मन मैल न जाय।\nमीन सदा जल में रहे, धोये बास न जाय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — नहाने-धोने से क्या फायदा यदि मन की मैल न जाए? मछली हमेशा पानी में रहती है, फिर भी धोने से उसकी गंध नहीं जाती। यह बाह्य शुद्धता बनाम आंतरिक शुद्धता का दोहा है। धार्मिक कर्मकांड, तीर्थयात्रा, स्नान — ये सब तभी अर्थपूर्ण हैं जब भीतर परिवर्तन हो। ईर्ष्या, द्वेष, लालच — ये मन की मैल है। इन्हें बिना हटाए बाहरी शुद्धता अर्थहीन है।"
  },
  {
    doha: "करता था सो क्यों किया, अब करि क्यों पछिताय।\nजो किया सो क्यों किया, अब किए बनत न आय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — जो कर रहा था वह क्यों किया? और अब क्यों पछता रहा है? जो किया सो किया — अब वह उलटा नहीं हो सकता। यह पछतावे की निरर्थकता पर एक सशक्त वचन है। बीती गलतियों पर रोना ऊर्जा और समय की बर्बादी है। उनसे सीखो, उनका बोझ मत ढोओ। कबीर का यह दोहा मनोवैज्ञानिक स्वतंत्रता और वर्तमान में जीने की प्रेरणा देता है।"
  },
  {
    doha: "साईं इतना दीजिए, जामें कुटुम्ब समाय।\nमैं भी भूखा न रहूँ, साधु न भूखा जाय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर ईश्वर से माँगते हैं — हे प्रभु, इतना दो जिसमें परिवार का गुजारा हो। न मैं भूखा रहूँ, न कोई संत मेरे द्वार से भूखा जाए। यह दोहा संतोष और दान की एक साथ कामना करता है। कबीर न अधिक माँग रहे हैं, न कम — बस इतना जिससे खुद जीएं और दूसरों को भी दे सकें। यह सादगी और उदारता का आदर्श संतुलन है। उपभोक्तावाद के इस युग में यह दोहा और भी प्रासंगिक है।"
  },
  {
    doha: "मन के हारे हार है, मन के जीते जीत।\nपारब्रह्म को पाइए, मन की सच्ची रीत॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — मन की हार ही वास्तविक हार है और मन की जीत ही वास्तविक जीत। परब्रह्म (ईश्वर) को भी मन की सच्ची रीत (सच्चाई और ललक) से ही पाया जाता है। यह दोहा मन की शक्ति पर सबसे सटीक काव्यात्मक कथन है। बाहरी परिस्थितियाँ गौण हैं — जो मन से जीत जाता है, वह सब जीत जाता है। आधुनिक मनोविज्ञान का 'mindset' सिद्धांत इसी का विस्तार है।"
  },
  {
    doha: "जल में कुम्भ, कुम्भ में जल है, बाहर भीतर पानी।\nफूटा कुम्भ जल जलही समाना, यह तत कथो ज्ञानी॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — जल में घड़ा है, घड़े में जल है, बाहर-भीतर सब पानी ही है। घड़ा टूटने पर जल, जल में मिल जाता है। यह ज्ञानीजन का सत्य है। यह व्यक्ति और ब्रह्म के संबंध का एक सुंदर रूपक है। जीव (घड़ा) ब्रह्म (जल) में है और ब्रह्म जीव में — दोनों में एक ही तत्व है। मृत्यु (घड़ा टूटना) पर जीव-आत्मा ब्रह्म में मिल जाती है। यह भेद केवल नाम-रूप का है, तत्व का नहीं।"
  },
  {
    doha: "धीरे धीरे रे मना, धीरे सब कुछ होय।\nमाली सींचे सौ घड़ा, ऋतु आए फल होय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — हे मन! धीरे-धीरे चल, धीरे-धीरे सब कुछ होता है। माली सौ घड़े पानी सींचे, पर फल तो ऋतु आने पर ही आता है। यह धैर्य और प्रक्रिया पर विश्वास का दोहा है। आज की तात्कालिकता (instant gratification) की संस्कृति में यह संदेश सबसे जरूरी है। बीज बोने और फल पाने के बीच का समय — यही साधना है। प्रयास करो, पर परिणाम की जल्दी मत करो।"
  },
  {
    doha: "कबीरा खड़ा बाजार में, माँगे सबकी खैर।\nना काहू से दोस्ती, न काहू से बैर॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर बाजार (संसार) में खड़े होकर सबकी भलाई की कामना करते हैं। न किसी से दोस्ती, न किसी से दुश्मनी। यह तटस्थता और समता का उच्चतम आदर्श है। यह उदासीनता नहीं — यह निस्पृहता है। सबका कल्याण चाहना, पर किसी विशेष से आसक्त या द्वेषी न होना — यह योगी का जीवन है। कबीर इस उदाहरण से हमें सामाजिक जीवन में तटस्थ रहने की प्रेरणा देते हैं।"
  },
  {
    doha: "पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय।\nढाई आखर प्रेम का, पढ़े सो पंडित होय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — पोथियाँ (ग्रंथ) पढ़-पढ़ कर दुनिया मर गई, पर कोई पंडित (ज्ञानी) नहीं बना। जो प्रेम के ढाई अक्षर पढ़ ले (प्रेम को जी ले), वही सच्चा पंडित है। यह शास्त्रीय ज्ञान बनाम जीवनानुभव की एक ऐतिहासिक बहस का काव्यात्मक उत्तर है। डिग्रियाँ और पांडित्य बाहरी हैं। असली ज्ञान वह है जो हृदय को विशाल बनाए — और वह है प्रेम। कबीर का यह दोहा शिक्षा-व्यवस्था पर एक सशक्त टिप्पणी भी है।"
  },
  {
    doha: "जाति न पूछो साधु की, पूछ लीजिए ज्ञान।\nमोल करो तलवार का, पड़ा रहन दो म्यान॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — साधु की जाति मत पूछो, उसका ज्ञान पूछो। तलवार का मोल करो, म्यान पड़ी रहने दो। जाति-पाँति, वर्ण-व्यवस्था — यह सब म्यान है, बाहरी आवरण है। असली मूल्य व्यक्ति के भीतर की गुणवत्ता में है — उसके ज्ञान, चरित्र और करुणा में। यह कबीर का सबसे सशक्त सामाजिक संदेश है जो आज भी उतना ही क्रांतिकारी है।"
  },
  {
    doha: "माँगन मरण समान है, मत माँगो कोय भीख।\nमाँगन ते मरना भला, यह सतगुरु की सीख॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — माँगना मृत्यु के समान है, किसी से भीख मत माँगो। माँगने से मरना बेहतर है — यही सच्चे गुरु की शिक्षा है। यह स्वाभिमान और स्वावलंबन का संदेश है। जो व्यक्ति खुद पर निर्भर रहता है, अपने श्रम से जीता है — वह सम्मान का जीवन जीता है। दूसरों पर आर्थिक या भावनात्मक निर्भरता — दोनों एक प्रकार की दीनता है।"
  },
  {
    doha: "सुख में सुमिरन ना किया, दुख में कीजिए याद।\nकहे कबीर उस दास की, कौन सुने फरियाद॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — सुख में जिसने ईश्वर को याद नहीं किया, दुख में उसकी याद करने से क्या होगा? उस सेवक की फरियाद कौन सुनेगा जो केवल संकट में याद करता है? यह ईश्वर-स्मरण की निरंतरता का संदेश है। संकट में की गई प्रार्थना भी स्वीकार होती है — ईश्वर करुणामय है। पर जो हर समय उसे याद रखे, उसका संबंध ईश्वर से कहीं गहरा होता है।"
  },
  {
    doha: "तन को जोगी सब करें, मन को करे न कोय।\nसहजे सब सिधि पाइए, जो मन जोगी होय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — तन (शरीर) को योगी बनाने की कोशिश सब करते हैं — भगवा वस्त्र, जटा, भस्म — पर मन को योगी नहीं बनाते। जो मन को योगी बना ले, वह सहज ही सब सिद्धियाँ पा लेता है। यह बाह्य धर्म बनाम आंतरिक साधना का विरोध है। वेश-भूषा, तीर्थ, उपवास — ये सब तभी अर्थपूर्ण हैं जब मन का रूपांतरण हो। मन की योग-साधना ही सच्ची साधना है।"
  },
  {
    doha: "संत ना छाड़ें संतई, जो कोटिक मिले असंत।\nचंदन विष व्यापत नहीं, लिपटे रहत भुजंग॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — संत अपनी संतई (संत-स्वभाव) नहीं छोड़ते चाहे करोड़ों दुर्जनों का सामना हो। जैसे चंदन पर साँप लिपटा रहने पर भी उसकी सुगंध विष से प्रभावित नहीं होती। यह चरित्र की दृढ़ता का सबसे सुंदर रूपक है। संगति का प्रभाव होता है — पर जो अपने स्वभाव में दृढ़ है, वह बुरी संगति में भी अपना मूल न्याय-धर्म नहीं खोता। चंदन की तरह — सुगंध देना उसका स्वभाव है।"
  },
  {
    doha: "मोको कहाँ ढूँढे रे बंदे, मैं तो तेरे पास में।\nना तीरथ में ना मूरत में, ना एकांत निवास में॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर के शब्दों में ईश्वर कहता है — हे बंदे, तू मुझे कहाँ ढूँढता है? मैं तेरे पास ही हूँ। न तीर्थ में, न मूर्ति में, न एकांत में। ईश्वर की यह वाणी भक्ति और तर्क दोनों को चुनौती देती है। यदि ईश्वर सर्वव्यापी है तो वह हमारे भीतर भी है — फिर बाहर ढूँढना क्यों? यह दोहा बाह्य धर्म की जड़ता पर और आंतरिक खोज की श्रेष्ठता पर कबीर का सबसे सीधा प्रहार है।"
  },
  {
    doha: "मालिन आवत देखि के, कलियन कहि पुकार।\nफूले फूले चुनि लिए, काल्हि हमारी बार॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — माली को आते देखकर कलियाँ (अधखिली कलियाँ) फूलों से कहती हैं: आज तुम्हें चुना गया, कल हमारी बारी आएगी। यह मृत्यु की अनिवार्यता और समानता का दोहा है। आज जो फूल हैं, कल वे मुरझाएंगे। आज जो जवान हैं, एक दिन बूढ़े और फिर मृत होंगे। यह अनित्यता का बोध ही हमें वर्तमान की कदर करना सिखाता है।"
  },
  {
    doha: "दुर्लभ मानुष जनम है, देह न बारम्बार।\nतरुवर ज्यों पत्ती झड़े, बहुरि न लागे डार॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — मनुष्य जन्म दुर्लभ है, यह शरीर बार-बार नहीं मिलता। जैसे पेड़ से पत्ती झड़ने पर उसी डाल पर दोबारा नहीं लगती। मनुष्य योनि को सर्वोच्च माना गया है क्योंकि यहाँ ज्ञान, भक्ति और मुक्ति संभव है। पशु, पक्षी, देवता — अन्य योनियों में यह संभावना नहीं। इसलिए इस जन्म को व्यर्थ मत गँवाओ — यही कबीर का आग्रह है।"
  },
  {
    doha: "आछे दिन पाछे गए, हरि से किया न हेत।\nअब पछताये होत क्या, चिड़ियाँ चुग गई खेत॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — अच्छे दिन बीत गए, ईश्वर से प्रेम नहीं किया। अब पछताने से क्या होगा — चिड़ियाँ खेत चुग गई हैं। यह अवसर की नश्वरता पर कबीर की सबसे मार्मिक चेतावनी है। यौवन और स्वास्थ्य — ये साधना के सबसे अनुकूल समय हैं। जब ये चले जाते हैं और बुढ़ापा और रोग आते हैं, तब ध्यान-भजन कठिन हो जाता है। इसलिए सही समय पर सही काम करो।"
  },
  {
    doha: "सात समंदर की मसि करूँ, लेखनी सब बनराय।\nधरती सब कागद करूँ, हरि गुण लिखा न जाय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — सातों समुद्रों को स्याही बना लूँ, सभी वनों की लकड़ी से लेखनी बना लूँ, सारी पृथ्वी को कागद बना लूँ — फिर भी हरि (ईश्वर) के गुण नहीं लिख पाऊँगा। यह ईश्वर की असीम महिमा का काव्यात्मक वर्णन है। उपनिषद् का वह वचन याद आता है — 'जहाँ से वाणी लौट आती है।' परमात्मा की महिमा शब्दातीत है — केवल अनुभव से जानी जा सकती है।"
  },
  {
    doha: "ज्ञान से बड़ा विवेक है, विवेक से भी बड़ा प्रेम।\nप्रेम से बड़ा कुछ नहीं, यही ज्ञानी का क्षेम॥",
    poet: "मीराबाई",
    meaning_hindi: "मीरा कहती हैं — ज्ञान से बड़ा विवेक है, विवेक से भी बड़ा प्रेम है। प्रेम से बड़ा कुछ नहीं — यही ज्ञानी का कल्याण-मार्ग है। मीरा का यह दोहा भक्ति और ज्ञान के बीच के सम्बन्ध को स्पष्ट करता है। ज्ञान बुद्धि का है, विवेक बुद्धि और हृदय दोनों का, और प्रेम शुद्ध हृदय का। परम पद वह है जहाँ ज्ञान और प्रेम एक हो जाते हैं — जैसे मीरा में हुआ।"
  },
  {
    doha: "एक प्रेम ही जगत में, बाकी सब बेकार।\nयह माया यह संसार, सब झूठों का बाजार॥",
    poet: "मीराबाई",
    meaning_hindi: "मीरा कहती हैं — इस जगत में केवल एक प्रेम ही सत्य है, बाकी सब बेकार है। यह माया, यह संसार — सब झूठों का बाजार है। यह दोहा मीरा की वैराग्य-भक्ति का सार है। जब उन्हें श्रीकृष्ण से प्रेम हो गया, तो राजसी वैभव, सामाजिक प्रतिष्ठा, सब व्यर्थ लगा। एक बार परम प्रेम का अनुभव होने पर संसार के अन्य रंग फीके पड़ जाते हैं।"
  },
  {
    doha: "मन मस्त हुआ तब क्यों बोले, हीरा पायो गाँठ गठियायो।\nबाहर भीतर एकहि जाना, जागत सोवत सदा समायो॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — मन मस्त हो गया, तो अब क्या बोलें? हीरा मिल गया, गाँठ में बाँध लिया। बाहर-भीतर एक ही जाना, जागते-सोते सदा उसमें समाया रहा। यह समाधि-अवस्था का काव्यात्मक वर्णन है। जब ज्ञान का हीरा मिल जाता है, तो न बोलने की जरूरत रहती है, न बताने की। भीतर और बाहर एक हो जाते हैं — यह अद्वैत-अनुभव है। ऐसा व्यक्ति जागते-सोते — दोनों अवस्थाओं में — उस एक में डूबा रहता है।"
  },
  {
    doha: "हस्ती चढ़िए ज्ञान को, सहज दुलीचा डारि।\nस्वान रूप संसार है, भूँकन दे झख मारि॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — ज्ञान के हाथी पर सहज (स्वाभाविक) बिछौना डालकर चढ़ जाओ। यह संसार कुत्ते जैसा है — भौंकने देना, व्यर्थ ही बकबक करेगा। जो ज्ञान के उच्च स्तर पर आसीन है, उसे सांसारिक आलोचना और निंदा का भय नहीं होता। जैसे हाथी चलते समय कुत्तों की भौंक पर ध्यान नहीं देता — वैसे ही ज्ञानी संसार की आलोचना से विचलित नहीं होता।"
  },
  {
    doha: "तेरा साईं तुझ में ज्यों, पहुपन माहि बास।\nकस्तूरी का मृग ज्यों, फिरत बन उदास॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — तेरा प्रभु तुझ में है, जैसे फूल में सुगंध होती है। जैसे कस्तूरी मृग अपनी नाभि में कस्तूरी लिए फिरता है और वन में दर-दर भटकता है — वैसे ही मनुष्य ईश्वर को बाहर खोजता है जो भीतर है। यह दोहा एक गहरा रूपक है — कस्तूरी की खुशबू उसी मृग की नाभि में है जो उसे ढूंढता भटकता है। ईश्वर भी उसी आत्मा में है जो उसे बाहर तीर्थों में खोजती है।"
  },
  {
    doha: "सुरत कलारिन भई अहेरी, हरि रस लेन आई।\nकाम क्रोध दोउ मार खिलाए, प्रेम सुरा पिलाई॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — सुरत (चेतना) शिकारिन (मदिरा बेचने वाली) बन गई, हरि-रस लेने आई। काम और क्रोध — दोनों को मार दिया और प्रेम की सुरा पिला दी। यह रूपक योग-साधना का है। जब चेतना भीतर की यात्रा पर निकलती है, तो काम और क्रोध — ये दो सबसे बड़े बाधक — जीत लिए जाते हैं। और फिर प्रेम का वह रस मिलता है जो किसी बाहरी मदिरा से नहीं मिलता।"
  },
  {
    doha: "निंदा नहीं किसी की कर, आप बड़ा नहीं होय।\nजो कोई आप बड़ा बने, बड़ो न जाने सोय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — किसी की निंदा करने से खुद बड़ा नहीं बनते। जो खुद को बड़ा बनाने के लिए दूसरों को छोटा दिखाता है, वह असल में बड़प्पन को नहीं जानता। निंदा और आलोचना एक बीमारी है जो बोलने वाले को ही नुकसान पहुँचाती है। जो व्यक्ति सत्कर्म से बड़ा बनता है, उसे दूसरों को छोटा दिखाने की जरूरत नहीं होती।"
  },
  {
    doha: "रहिमन देखि बड़ेन को, लघु न दीजिए डारि।\nजहाँ काम आवे सुई, कहा करे तरवारि॥",
    poet: "रहीम",
    meaning_hindi: "रहीम कहते हैं — बड़ों को देखकर छोटों की उपेक्षा मत करो। जहाँ सुई काम आए, वहाँ तलवार क्या करेगी? यह दोहा हर व्यक्ति, वस्तु और परिस्थिति की अपनी उपयोगिता बताता है। छोटे-छोटे काम और छोटे-छोटे लोग भी अपनी जगह अपरिहार्य हैं। जो बड़ों का सम्मान करते हुए छोटों को भी महत्व देता है — वही सच्चा विवेकी है।"
  },
  {
    doha: "रहिमन वृक्ष बड़ भय, दलन लागी छाँह।\nफल लागे तो झुक गया, यह बड़प्पन की राह॥",
    poet: "रहीम",
    meaning_hindi: "रहीम कहते हैं — पेड़ जब बड़ा हुआ तो उसकी छाया फैल गई। फल लगने पर वह झुक गया — यही बड़प्पन का मार्ग है। यह विनम्रता का एक सुंदर प्राकृतिक रूपक है। पेड़ जितना बड़ा होता है, उतना अधिक छाया देता है। और फल लगने पर झुकता है — यानी जितना अधिक ज्ञान और समृद्धि, उतना अधिक विनम्रता और दान। यही सच्ची महानता है।"
  },
  {
    doha: "कागद पर लिखत न बनत, कहत सँदेसो लाज।\nकहिए कैसे कीजिए, हाय राम की माज॥",
    poet: "मीराबाई",
    meaning_hindi: "मीरा कहती हैं — कागज पर लिखा नहीं जाता, कहते समय लाज (संकोच) आती है। कैसे कहूँ, क्या करूँ — हे राम, आपकी माया तो अद्भुत है। यह दोहा उस अनुभव को व्यक्त करता है जो शब्दों से परे है। प्रेम और भक्ति की वह अवस्था जब भावनाएं इतनी गहरी हों कि न लिखी जाएं, न कही जाएं। यह भक्ति का सर्वोच्च रूप है जो अनिर्वचनीय है।"
  },
  {
    doha: "ज्ञान होय तो विनम्र हो, मान घटे न बाड़।\nपाँव तले की मिट्टी से, मत कर तू अनुनाड़॥",
    poet: "तुलसीदास",
    meaning_hindi: "तुलसीदास कहते हैं — यदि ज्ञान हो तो विनम्र बनो, सम्मान घटे नहीं बल्कि बढ़े। पाँव तले की मिट्टी (छोटे लोगों) से अहंकार मत करो। यह दोहा ज्ञान और विनम्रता के अनिवार्य सम्बन्ध को बताता है। जो जितना बड़ा ज्ञानी है, वह उतना विनम्र होता है — क्योंकि वह जानता है कि उसने कितना कम जाना है। घमंडी ज्ञानी वास्तव में अज्ञानी है।"
  },
  {
    doha: "सोना सज्जन साधु जन, टूटि जुड़हिं सौ बार।\nदुर्जन कुम्भ कुम्हार के, एइकहि धक्का दरार॥",
    poet: "रहीम",
    meaning_hindi: "रहीम कहते हैं — सोना और सज्जन व्यक्ति — दोनों टूटने पर सौ बार जोड़े जा सकते हैं। पर दुर्जन (बुरा व्यक्ति) कुम्हार के घड़े की तरह है — एक ही धक्के से दरार पड़ जाती है। यह दोहा चरित्र की दृढ़ता बनाम कमजोरी पर सटीक रूपक है। सज्जन और सोना — दोनों में लचीलापन है, पर अपनी मूल गुणवत्ता बनाए रखते हैं। दुर्जन भंगुर होता है — एक संकट में टूट जाता है।"
  },
  {
    doha: "रहिमन चुप हुइ बैठिए, देखि दिनन को फेर।\nजब नीके दिन आइहैं, बनत न लागिहैं देर॥",
    poet: "रहीम",
    meaning_hindi: "रहीम कहते हैं — समय के उलटफेर को देखकर चुप रहो और बैठे रहो (धैर्य रखो)। जब अच्छे दिन आएंगे, तब देर नहीं लगेगी। यह धैर्य और समय पर भरोसे का दोहा है। जीवन में उतार-चढ़ाव आते हैं। बुरे दिनों में घबराहट और उतावलापन समस्या को बढ़ाता है। जो शांत रहकर अपना काम करता रहता है, उसके लिए अनुकूल समय अवश्य आता है।"
  },
  {
    doha: "बिगरी जनम अनेक की, सुधरे अब और आज।\nहोय सहाय राम जी, नाँव धरो तो काज॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — अनेक जन्मों की बिगड़ी बात अब इसी जन्म में सुधर सकती है। राम सहाय हों तो आज उनका नाम लेने से काम बन जाता है। यह दोहा उम्मीद और दिव्य कृपा का संदेश है। चाहे कितने जन्मों का अज्ञान हो — एक जन्म में, एक क्षण में, सच्ची भक्ति से सब सुधर सकता है। यह तत्काल मुक्ति की संभावना का कबीर का आश्वासन है।"
  },
  {
    doha: "जहाँ दया तहाँ धर्म है, जहाँ लोभ तहाँ पाप।\nजहाँ क्रोध तहाँ काल है, जहाँ क्षमा तहाँ आप॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — जहाँ दया है वहाँ धर्म है, जहाँ लोभ है वहाँ पाप है, जहाँ क्रोध है वहाँ मृत्यु है और जहाँ क्षमा है — वहाँ स्वयं ईश्वर हैं। यह दोहा जीवन के चार प्रमुख भावों और उनके परिणामों का एक क्रमबद्ध विश्लेषण है। दया, क्षमा — ये दैवीय गुण हैं जो ईश्वर की उपस्थिति को आमंत्रित करते हैं। लोभ और क्रोध — ये असुरी गुण हैं जो पतन का कारण बनते हैं।"
  },
  {
    doha: "कस्तूरी कुण्डल बसे, मृग ढूँढत बन माहि।\nऐसे घट घट राम हैं, दुनिया देखत नाहि॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — कस्तूरी (सुगंधित पदार्थ) मृग की नाभि में बसती है, पर मृग उसे जंगल में ढूंढता फिरता है। इसी तरह हर शरीर में राम हैं, पर दुनिया देखती नहीं। यह रूपक कबीर ने दोहराया है क्योंकि यह उनका सबसे महत्वपूर्ण संदेश है — ईश्वर को बाहर नहीं, भीतर खोजना है। हर जीव में वही एक आत्मा है। इस दृष्टि से हिंसा, भेदभाव, और घृणा असंभव हो जाती है।"
  },
  {
    doha: "संगत से गुण ऊपजे, संगत से गुण जाय।\nइक सूखो बदरी छुई, तर-तर पानी आय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — संगति से गुण उत्पन्न होते हैं और संगति से ही गुण चले जाते हैं। एक सूखा पत्ता बादल से छू जाए तो टपटप पानी आ जाता है। संगति का प्रभाव जल्दी और गहरा होता है। जैसे सूखा पत्ता बादल के स्पर्श से भीग जाता है — वैसे ही व्यक्ति अच्छी संगति में गुणवान बन जाता है और बुरी संगति में दोषी। इसलिए संगति चुनना जीवन का सबसे महत्वपूर्ण निर्णय है।"
  },
  {
    doha: "जो उग्या सो अन्तबे, फूल्या सो कुमिलाहि।\nजो चिनिया सो ढहि पड़े, जो आया सो जाहि॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — जो उगा वह अंत होगा, जो फूला वह मुरझाएगा। जो बना वह गिरेगा, जो आया वह जाएगा। यह सृष्टि का अटल नियम है। हर वस्तु नश्वर है — यह बोध ही वैराग्य का द्वार है। जब हम स्वीकार कर लेते हैं कि कुछ भी स्थायी नहीं है — न सुख, न दुःख, न यश, न अपयश — तो एक गहरी शांति मिलती है। यह अनित्यता का बोध ही मुक्ति की नींव है।"
  },
  {
    doha: "गारी ही से उपजे, कलह कलेश विगार।\nहरिचर्चा से उपजे, प्रेम भक्ति व्यवहार॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — गाली (कटु वाणी) से कलह, क्लेश और बिगाड़ उत्पन्न होते हैं। हरि की चर्चा (सत्संग) से प्रेम, भक्ति और अच्छा व्यवहार उत्पन्न होता है। वाणी और संगति का यह प्रभाव सीधा और तत्काल होता है। जो सत्संग में बैठता है, उसके जीवन में क्रमशः सकारात्मक परिवर्तन आता है। जो निंदा और कटुता में समय बिताता है, उसका जीवन विवादों से भर जाता है।"
  },
  {
    doha: "लम्बा मारग दूरि घर, विकट पंथ बहु मार।\nकहो संत कैसे चलूँ, पाँव मेरे छाले पड़े॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — घर (मोक्ष) बहुत दूर है, रास्ता लंबा है, कठिन पथ पर बहुत बाधाएं हैं। हे संत! कैसे चलूँ — मेरे पाँव में छाले पड़ गए हैं। यह साधक की थकान और जिज्ञासा का मार्मिक चित्रण है। आध्यात्मिक यात्रा कठिन है। पर इस कठिनाई में ही गुरु की आवश्यकता और ईश्वर की कृपा का महत्व समझ में आता है। जो थककर भी नहीं रुकता — वही मंजिल पाता है।"
  },
  {
    doha: "उठ जाग मुसाफिर भोर भई, अब रैन कहाँ जो सोवत है।\nजो सोवत है सो खोवत है, जो जागत है सो पावत है॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — उठ जाग, पथिक! भोर हो गई, अब रात कहाँ जो सोते हो? जो सोता है वह खोता है, जो जागता है वह पाता है। यह जागरण और साधना का आह्वान है। भोर — यह नए अवसर का प्रतीक है। जो उस अवसर में सोया रहता है — वह खो देता है। जो जागकर साधना करता है — वह पाता है। यह मनुष्य-जीवन के दुर्लभ अवसर का सदुपयोग करने की प्रेरणा है।"
  },
  {
    doha: "एकहि साधे सब सधे, सब साधे सब जाय।\nरहिमन मूलहिं सींचिए, फूलै फलै अघाय॥",
    poet: "रहीम",
    meaning_hindi: "रहीम कहते हैं — एक को साधने से सब सध जाता है, सबको साधने में लगने से सब जाता है। जैसे जड़ को सींचने से पूरा पेड़ — फूल, फल, पत्ते — सब तृप्त होते हैं। यह एकाग्रता और प्राथमिकता का दोहा है। आज की दुनिया में हम सब कुछ एक साथ पाना चाहते हैं — पर जो एक मूल पर ध्यान देता है (एक लक्ष्य, एक साधना), वही सफल होता है।"
  },
  {
    doha: "चिंता ऐसी डाकिनी, काट कलेजो खाय।\nवैद बेचारा क्या करे, कहाँ तक दवा खाय॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — चिंता एक डाकिनी (राक्षसी) है जो कलेजा काटकर खा जाती है। बेचारा वैद्य क्या करे — चिंता की दवाई कहाँ तक चलेगी? चिंता स्वास्थ्य की सबसे बड़ी शत्रु है — यह मेडिकल तथ्य भी है। कबीर का यह दोहा आधुनिक मनोचिकित्सा का एक सरल सत्य कह देता है। चिंता का उपाय दवाई नहीं — मन की शांति, ईश्वर पर भरोसा और सही दृष्टिकोण है।"
  },
  {
    doha: "कहता हूँ कहि जात हूँ, देखत हूँ भरपूर।\nजो यह जाने और की बात, वो मुझसे रहे दूर॥",
    poet: "कबीर दास",
    meaning_hindi: "कबीर कहते हैं — मैं कहता हूँ और कहता जाता हूँ, मैं देखता हूँ भरपूर (सत्य को)। जो इसे दूसरों की बात समझे, वह मुझसे दूर रहे। कबीर अपने उपदेश की प्रत्यक्षता पर जोर देते हैं। वे केवल शास्त्र का हवाला नहीं देते — वे जो अनुभव करते हैं वह कहते हैं। और वे चाहते हैं कि सुनने वाला भी इसे अपने पर लागू करे, न दूसरों पर। यह आत्म-साक्षात्कार का निमंत्रण है।"
  },
  {
    doha: "माटी का तन, मस्ती मन, क्षण-क्षण बदला रूप।\nआज यहाँ कल और कहाँ, जीवन बहता धूप॥",
    poet: "कबीर दास (भाव)",
    meaning_hindi: "कबीर भाव में कहते हैं — मिट्टी का शरीर है, मस्त मन है, पल-पल रूप बदलता है। आज यहाँ हैं, कल कहाँ होंगे — जीवन धूप की तरह बहता है। यह अनित्यता और वर्तमान क्षण की विशेषता पर काव्यात्मक टिप्पणी है। जीवन प्रवाहमान है — इसे रोका नहीं जा सकता। जो वर्तमान में जीता है, वह इस प्रवाह में आनंद पाता है। जो भूत या भविष्य में जीता है, वह इस क्षण को खो देता है।"
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
    meaning_hindi: "धैर्य, धर्म, मित्र और स्त्री - इन चारों की परीक्षा संकट के समय ही होती है।"
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
    meaning_hindi: "काम, क्रोध, अहंकार और लोभ - ये सभी पतन के मार्ग हैं। इन सबको छोड़कर प्रभु का भजन करना चाहिए।"
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
    meaning_hindi: "मूर्ख सेवक, कंजूस राजा, दुष्ट स्त्री और कपटी मित्र - ये चारों जीवन में शूल (कांटे) के समान कष्ट देने वाले होते हैं।"
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
  },
  {
    chaupai: "होइहि वही जो राम रचि राखा। को करि तर्क बढ़ावहि साखा॥",
    kand: "बालकाण्ड",
    meaning_hindi: "जो राम ने रच रखा है, वही होगा। कोई तर्क करके इस पेड़ (भाग्य) की शाखा-प्रशाखा क्यों बढ़ाए? तुलसीदास की यह पंक्ति ईश्वरीय नियति और समर्पण का सबसे सुंदर काव्यात्मक कथन है। यह निष्क्रियता नहीं सिखाती — यह कहती है कि जो तुम्हारे हाथ में है वह करो, पर परिणाम के लिए व्यर्थ चिंता मत करो। जो ईश्वर ने तय किया है वह होकर रहेगा — इस विश्वास में जीना एक अद्भुत शांति देता है।"
  },
  {
    chaupai: "सुनि सिय रामु न बोले कछु, मन महुँ कीन्ह विचार।\nबड़ भए गुरु आयसु, मेटब कवन विचार॥",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "यह सुनकर सीता और राम ने कुछ नहीं कहा, मन में विचार किया — गुरु की आज्ञा महान है, उसे टालने का क्या विचार है? यह गुरु-आज्ञा पालन का आदर्श उदाहरण है। राम और सीता — दोनों ने वनवास की आज्ञा मिलते ही बिना विरोध के स्वीकार किया। यह अहंकार और स्वार्थ से ऊपर उठकर धर्म और कर्तव्य को प्राथमिकता देने का चित्र है। गुरु की आज्ञा में श्रेष्ठ भविष्य छिपा होता है।"
  },
  {
    chaupai: "धीरज धर्म मित्र अरु नारी। आपद काल परखिए चारी॥",
    kand: "अरण्यकाण्ड",
    meaning_hindi: "धैर्य, धर्म, मित्र और पत्नी (नारी) — इन चारों की परीक्षा विपत्ति के समय होती है। यह एक अत्यंत व्यावहारिक जीवन-सत्य है। सुख में तो सब साथ होते हैं — संकट में ही असली परीक्षा होती है। जो धर्म संकट में न छूटे — वही सच्चा धर्म है। जो मित्र संकट में साथ दे — वही सच्चा मित्र है। यह अनुभव-सिद्ध वचन आज भी उतना ही सत्य है।"
  },
  {
    chaupai: "मुखिया मुख सो चाहिए, खान पान को एक।\nपाले पोसे सकल अंग, तुलसी सहित विवेक॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "तुलसीदास कहते हैं — मुखिया (नेता) वैसा होना चाहिए जैसा मुँह है — खाना-पीना अकेला करता है, पर सभी अंगों का पोषण करता है — विवेक सहित। यह नेतृत्व का सर्वोत्तम वर्णन है। नेता का काम सेवा है, स्वार्थ नहीं। जैसे मुँह भोजन करता है पर उससे पूरे शरीर को ऊर्जा मिलती है — वैसे ही नेता को प्राप्त शक्ति और संसाधनों से समाज का पोषण करना चाहिए।"
  },
  {
    chaupai: "जे न मित्र दुख होहिं दुखारी। तिन्हहि बिलोकत पातक भारी॥",
    kand: "अरण्यकाण्ड",
    meaning_hindi: "जो मित्र के दुख से दुखी नहीं होते — उन्हें देखना भी पाप है। तुलसीदास यहाँ मित्रता के सर्वोच्च मानदंड की बात करते हैं — सच्चा मित्र वह है जो मित्र के दुख को अपना दुख समझे। यह केवल शब्दों की सहानुभूति नहीं — बल्कि हृदय की वास्तविक पीड़ा। ऐसे मित्र दुर्लभ हैं पर जिन्हें मिलते हैं, उनका जीवन धन्य हो जाता है।"
  },
  {
    chaupai: "काम क्रोध मद लोभ की, जौ लौं मन में खान।\nतौ लौं पंडित मूरखहू, तुलसी एक समान॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसीदास कहते हैं — जब तक मन में काम (वासना), क्रोध, मद (अहंकार) और लोभ की खान (भंडार) भरी है, तब तक पंडित और मूर्ख — दोनों एक समान हैं। यह बाह्य ज्ञान बनाम आंतरिक परिवर्तन का सशक्त कथन है। डिग्रियाँ, शास्त्र-ज्ञान — तब तक व्यर्थ हैं जब तक भीतर के दोष नहीं गए। वास्तविक शिक्षा वह है जो मनुष्य को इन दोषों से मुक्त करे।"
  },
  {
    chaupai: "सरनागत कहुँ जे तजहिं निज अनहित अनुमानि।\nते नर पावर पापमय, तिन्हहि बिलोकत हानि॥",
    kand: "सुन्दरकाण्ड",
    meaning_hindi: "जो शरण में आए की रक्षा नहीं करते और उसे संभावित नुकसान सोचकर छोड़ देते हैं — वे पापी और नीच हैं, उन्हें देखना भी हानिकारक है। यह शरणागत-धर्म का वचन है। भारतीय संस्कृति में 'शरण' की अवधारणा पवित्र है। जो शरण माँगे उसकी रक्षा करना धर्म है। राम ने विभीषण को शरण दी — शत्रु-पक्ष का होने के बावजूद। यह उदारता और न्याय का आदर्श है।"
  },
  {
    chaupai: "बिनय न मानत जलधि जड़, गए तीनि दिन बीति।\nबोले राम सकोप तब, भय बिनु होइ न प्रीति॥",
    kand: "लंकाकाण्ड",
    meaning_hindi: "जड़ (मूर्ख) समुद्र ने तीन दिन तक विनय (प्रार्थना) नहीं मानी। तब राम क्रोधित होकर बोले — 'भय के बिना प्रेम (विनय मानना) नहीं होता।' यह एक गहरा व्यावहारिक सत्य है। तुलसी यहाँ कहते हैं कि शक्ति और करुणा दोनों जरूरी हैं। केवल करुणा से कुछ मूर्ख नहीं मानते — उनके लिए शक्ति का प्रदर्शन भी आवश्यक है। यह कूटनीति और शासन का व्यावहारिक सिद्धांत है।"
  },
  {
    chaupai: "सुनि मन हरष बिषाद सब, राखे धरि धीर।\nपुनि बोले मृदु बचन सुनहु, सुमंत्र सुबीर॥",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "यह सुनकर मन में हर्ष और विषाद दोनों उठे — पर धैर्य धारण कर रखा। फिर मृदु (कोमल) वचन बोले — हे सुमंत्र सुवीर! यह धैर्य और मृदु वाणी का सुंदर आदर्श है। संकट में भावनाएं उठना स्वाभाविक है — पर उन्हें धैर्य से रोककर मृदु वाणी में अभिव्यक्त करना — यही नेतृत्व का गुण है। राम इसके सर्वश्रेष्ठ उदाहरण हैं।"
  },
  {
    chaupai: "रघुकुल रीति सदा चलि आई। प्राण जाय पर वचन न जाई॥",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "रघुकुल (राम के वंश) की यह परंपरा सदा से चली आई है — प्राण चले जाएं पर वचन न जाए (वचन से न मुकरें)। यह सत्यनिष्ठा और वचन-पालन का सर्वोच्च आदर्श है। राम ने पिता के वचन की रक्षा के लिए राजसिंहासन और वैभव छोड़ा। वचन और प्रतिज्ञा — ये भारतीय चरित्र का सबसे मूल्यवान अंग हैं। जो वचन देकर मुकरे — उसका व्यक्तित्व ध्वस्त हो जाता है।"
  },
  {
    chaupai: "नाना भाँति राम अवतारा। रामायण सत कोटि अपारा॥",
    kand: "बालकाण्ड",
    meaning_hindi: "राम के अनेक प्रकार के अवतार हुए हैं और रामायण सौ करोड़ (असंख्य) हैं। तुलसी यहाँ बताते हैं कि राम-कथा केवल एक नहीं — हर युग, हर संस्कृति में वह अपने रूप में प्रकट होती है। भारत के अलग-अलग प्रांतों में रामकथा के विभिन्न रूप हैं। यह भारत की सांस्कृतिक विविधता और एकता का प्रतीक है — अनेक रूप, एक मूल।"
  },
  {
    chaupai: "तुलसी जे कीरति चाहें, पर की कीरति न घावें।\nनिज कल्यानहि आसक्त, सोइ परम सुख पावें॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसी कहते हैं — जो यश चाहते हैं, वे दूसरों की कीर्ति पर प्रहार न करें। जो अपने कल्याण में आसक्त है — वही परम सुख पाता है। दूसरों को नीचा दिखाकर यश पाने की चाह एक झूठी और क्षणिक सफलता है। वास्तविक यश तब मिलता है जब हम अपने कर्मों से बड़े बनते हैं। यह नेतृत्व और जीवन-सफलता का सदाबहार सूत्र है।"
  },
  {
    chaupai: "पर उपकार वचन मन काया। संत सहज सुभाव खगराया॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "वचन, मन और काया (शरीर) से परोपकार करना — यह संत का सहज स्वभाव है, हे काग (काकभुशुण्डि)! तुलसी यहाँ संत के तीन स्तरों पर परोपकार की बात करते हैं — वाणी से (कोमल, उपयोगी वचन), मन से (सबके कल्याण की भावना), और कर्म से (सेवा)। यह त्रिस्तरीय परोपकार ही सच्ची साधना का परिणाम है और सच्चे संत का लक्षण।"
  },
  {
    chaupai: "बिना तेज के पुरुष, जैसे मेघ बिना जल।\nजैसे पंख बिना पंछी, व्यर्थ है सकल॥",
    kand: "विनयपत्रिका (भाव)",
    meaning_hindi: "तुलसीदास के भाव में — बिना तेज (प्रभाव, ऊर्जा) के पुरुष वैसा है जैसे बिना पानी का बादल। जैसे बिना पंख का पक्षी सब व्यर्थ है। व्यक्तित्व का तेज — आत्मविश्वास, नैतिकता, ज्ञान — ये सब न हों तो शरीर और पद व्यर्थ हैं। बाह्य रूप और पद से बड़ा है आंतरिक तेज। यह तेज साधना, चरित्र और ज्ञान से आता है।"
  },
  {
    chaupai: "मंत्र परम लघु जासु बस, विधि हरि हर सुर सर्ब।\nमहामत्त गजराज कहुँ, बस करे जिमि दर्ब॥",
    kand: "बालकाण्ड",
    meaning_hindi: "मंत्र अत्यंत छोटा है पर उसके वश में ब्रह्मा, विष्णु, महेश और सभी देवता हैं — जैसे महामत्त गजराज (मतवाला हाथी) को छोटी लोहे की कील (दर्ब) वश में कर लेती है। यह शब्द-शक्ति और मंत्र की महत्ता बताता है। छोटे-से 'राम' नाम में अपार शक्ति है। जैसे एक छोटी कील हाथी को रोक लेती है, वैसे ही एक नाम पूरे मन को स्थिर कर सकता है।"
  },
  {
    chaupai: "कोमल चित अति दीनदयाला। कारन बिनु रघुनाथ कृपाला॥",
    kand: "बालकाण्ड",
    meaning_hindi: "भगवान राम का चित्त अत्यंत कोमल है और वे दीनों पर दया करने वाले हैं। रघुनाथ (राम) बिना कारण के (यानी बिना किसी विशेष कारण या योग्यता की माँग किए) कृपालु हैं। यह ईश्वरीय कृपा की निःशर्त प्रकृति का वर्णन है। राम का प्रेम किसी शर्त पर नहीं है — वे दीनों पर, असहायों पर, पापियों पर भी कृपा करते हैं। यह भक्ति की सबसे बड़ी प्रेरणा है।"
  },
  {
    chaupai: "बिनु सत्संग विवेक न होई। राम कृपा बिनु सुलभ न सोई॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "सत्संग के बिना विवेक नहीं होता। और सत्संग भी राम की कृपा के बिना सुलभ नहीं होता। यह एक गहरी परस्पर-निर्भरता है। विवेक के लिए सत्संग चाहिए, सत्संग के लिए ईश्वर की कृपा। इसलिए पहले ईश्वर से कृपा माँगो, कृपा से सत्संग मिलेगा, सत्संग से विवेक और विवेक से मुक्ति। यह क्रम तुलसीदास ने बहुत स्पष्ट किया है।"
  },
  {
    chaupai: "सुनहुँ तात यह अकथ कहानी। समुझत बनइ न जाइ बखानी॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "हे तात! यह अकथनीय कहानी (राम-लीला का रहस्य) सुनो। इसे समझकर बखाना नहीं जा सकता। तुलसीदास यहाँ राम-तत्व की अनिर्वचनीयता की ओर संकेत करते हैं। जैसे उपनिषद् कहते हैं — 'जहाँ वाणी नहीं पहुँच सकती' — वैसे ही राम का रहस्य शब्दातीत है। इसे केवल अनुभव से, कृपा से जाना जा सकता है — तर्क और शब्दों से नहीं।"
  },
  {
    chaupai: "जब तें राम ब्याहि घर आए। नित नव मंगल मोद बधाए॥",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "जब से राम ने विवाह करके घर में सीता को लाए — नित्य नए मंगल और आनंद उत्सव मनाए जाने लगे। यह गृहस्थ जीवन की पवित्रता और उत्सवधर्मिता का चित्रण है। राम-सीता का विवाह केवल व्यक्तिगत नहीं था — उससे पूरी अयोध्या में उत्सव का वातावरण बना। जब घर में प्रेम और पवित्रता हो, तो हर दिन उत्सव है।"
  },
  {
    chaupai: "भूमि परत भा काह न कोऊ। भए सब मग परिहरहिं दोऊ॥",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "जब राम और लक्ष्मण वन को जाते समय रास्ते में आए, तो भूमि पर गिरते भी थे और उठते भी — पर किसी का क्या बिगड़ा? दोनों ने रास्ते छोड़ दिए। यह विनम्रता और आत्म-संयम का उदाहरण है। जब ऊँचे पद के लोग भी रास्ते में खड़े होकर बाधा न बनें — यह व्यवहार-कुशलता और सबके प्रति सम्मान का आदर्श है।"
  },
  {
    chaupai: "जनकसुता जग जननि जानकी। अतिसय प्रिय करुनानिधान की॥",
    kand: "बालकाण्ड",
    meaning_hindi: "जनक-पुत्री जानकी (सीता) जगत की जननी (माता) हैं और करुणानिधान (राम) को अत्यंत प्रिय हैं। यह श्लोक सीता की दो भूमिकाओं को एक साथ दर्शाता है — जगत्-माता (सार्वभौमिक माता) और राम की प्रिया (प्रेम की अभिव्यक्ति)। भारतीय संस्कृति में नारी को इस दोहरे सम्मान से देखा गया है — वह शक्ति है और प्रेम भी।"
  },
  {
    chaupai: "सीय राम मय सब जग जानी। करउँ प्रनाम जोरि जुग पानी॥",
    kand: "बालकाण्ड",
    meaning_hindi: "सीता-राम से भरे इस संपूर्ण जगत को जानकर, दोनों हाथ जोड़कर मैं प्रणाम करता हूँ। तुलसी का यह वचन सर्वोच्च अद्वैत-भक्ति की अभिव्यक्ति है। जब दृष्टि इतनी विशाल हो जाए कि हर जगह सीता-राम दिखें — हर व्यक्ति में, हर प्राणी में — तो घृणा और भेद-भाव असंभव हो जाते हैं। यह वैश्विक प्रेम की नींव है।"
  },
  {
    chaupai: "तुलसी या संसार में, भाँति भाँति के लोग।\nसबसे हिल मिल चालिए, नदी नाव संजोग॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसी कहते हैं — इस संसार में अनेक प्रकार के लोग हैं। सबसे मिलकर चलना चाहिए — जैसे नदी-नाव का संजोग होता है। नदी और नाव — दोनों की अपनी-अपनी प्रकृति है, पर एक-दूसरे के बिना काम नहीं। यह सहयोग और सामाजिकता का संदेश है। जो सबसे मिलकर चलता है — उसकी यात्रा सुगम होती है।"
  },
  {
    chaupai: "सब जीवन को सुख दीजे, नहिं कर कठिन व्यवहार।\nतुलसी यह संसार में, परम धर्म उपकार॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसी कहते हैं — सभी जीवों को सुख दो, कठोर व्यवहार मत करो। इस संसार में परोपकार ही परम धर्म है। यह वचन अहिंसा, करुणा और परोपकार को धर्म का सर्वोच्च रूप बताता है। जो किसी को भी कष्ट नहीं देता और सबके सुख का प्रयास करता है — वह सच्चे अर्थ में धर्मात्मा है।"
  },
  {
    chaupai: "परहित सरिस धरम नहिं भाई। पर पीड़ा सम नहिं अधमाई॥",
    kand: "अरण्यकाण्ड",
    meaning_hindi: "परहित (दूसरों का भला) के समान कोई धर्म नहीं है, भाई! और दूसरों को पीड़ा देने के समान कोई नीचता नहीं है। यह तुलसीदास का नैतिकता का सबसे संक्षिप्त और सशक्त सूत्र है। दो शब्दों में पूरा नीतिशास्त्र — परहित करो, पर-पीड़ा मत दो। यही धर्म और अधर्म की परिभाषा है।"
  },
  {
    chaupai: "एहि तन कर फल बिषय न भाई। स्वर्गउ स्वल्प अंत दुखदाई॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "इस शरीर का फल (उद्देश्य) विषय-भोग (सांसारिक सुख) नहीं है, भाई! स्वर्ग भी अल्प और अंत में दुखदायी है। तुलसी यहाँ मानव-जन्म के उच्चतम उद्देश्य की ओर ले जाते हैं — मोक्ष, ईश्वर-प्राप्ति। न इंद्रिय-भोग, न स्वर्ग — ये सब क्षणिक हैं। मानव-जन्म का वास्तविक फल है — मुक्ति और ईश्वर-साक्षात्कार।"
  },
  {
    chaupai: "साधु संत के जानिहु मीत। जो चाहत निज कल्यान हित॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "यदि तुम अपना कल्याण चाहते हो तो साधु और संत को मित्र जानो। सत्संग की यह सलाह तुलसी बार-बार देते हैं। जिस व्यक्ति के मित्र-मंडल में सज्जन लोग हों — जो प्रेरणा देते हों, जो सत्य बताते हों — उसका जीवन अपने आप उत्तम दिशा में जाता है। व्यक्ति जैसे लोगों के साथ रहता है, वैसा बनता है।"
  },
  {
    chaupai: "राम नाम की महिमा अपरा। जो सुमिरत पातक सब टरा॥",
    kand: "तुलसीदास",
    meaning_hindi: "राम-नाम की महिमा अपरम्पार है। जो उनका स्मरण करता है — उसके सब पाप दूर हो जाते हैं। यह नाम-जप की शक्ति का वर्णन है। 'राम' — यह केवल एक नाम नहीं, एक ऊर्जा है। मंत्र-विज्ञान के अनुसार सही ध्वनि का सही उच्चारण मन और शरीर दोनों पर गहरा प्रभाव डालता है। 'राम' नाम में 'र' और 'म' — अग्नि और जल — दोनों तत्वों का संगम है।"
  },
  {
    chaupai: "जल थल नभ गति तास रही। जाकि लीला अद्भुत सही॥",
    kand: "किष्किन्धाकाण्ड",
    meaning_hindi: "जल में, थल (पृथ्वी) पर, नभ (आकाश) में — उनकी (राम की) लीला अद्भुत और सच्ची है। राम केवल एक भूमि या काल की घटना नहीं — वे सर्वव्यापी हैं। उनकी लीला त्रिलोक में है। यह सर्वव्यापकता का बोध भक्त को विराट दृष्टि देता है — ईश्वर जल में भी है, पृथ्वी पर भी, आकाश में भी।"
  },
  {
    chaupai: "भरत चरित करि नेमु तुलसी, जो सादर सुनहिं।\nसीय राम पद प्रेमु, अवसि होइ तिन्ह के मनहिं॥",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "तुलसी कहते हैं — भरत के चरित्र की कथा जो आदर के साथ सुनते हैं, उनके मन में सीता-राम के प्रति प्रेम अवश्य होगा। भरत का चरित्र — जिन्होंने राज्य-सिंहासन ठुकरा दिया और राम-चरणों की खड़ाऊँ रखकर राज्य चलाया — यह त्याग और भक्ति का सर्वोच्च उदाहरण है। उनकी कहानी सुनने से भक्ति स्वाभाविक जागती है।"
  },
  {
    chaupai: "क्षमा बड़न को चाहिए, छोटन को उत्पात।\nका रहीम हरि को घट्यो, जो भृगु मारी लात॥",
    kand: "दोहा (चौपाई शैली)",
    meaning_hindi: "रहीम कहते हैं — क्षमा बड़ों (महान लोगों) को शोभा देती है, छोटे तो उत्पात (उपद्रव) करते ही हैं। भृगु ऋषि ने भगवान विष्णु (हरि) को लात मारी — तो क्या उनकी महिमा घटी? महान आत्माएं क्षमाशील होती हैं। कोई उन्हें ठेस पहुँचाए — वे क्षमा कर देते हैं। यह क्षमा कमजोरी नहीं — सामर्थ्य है। केवल जो शक्तिशाली है, वही माफ कर सकता है।"
  },
  {
    chaupai: "दुर्लभ जन्म पुनीत तन, मिल्यो मानव देह।\nमहाभाग तेहि पाव जग, सुमिरत सिय पति नेह॥",
    kand: "उत्तरकाण्ड (भाव)",
    meaning_hindi: "यह दुर्लभ और पवित्र मानव-देह मिली है। इस संसार में वही महाभाग है जो सीता के पति (राम) का प्रेम से स्मरण करता है। मनुष्य-जन्म को सबसे बड़ा वरदान माना गया है — इसीलिए इसे व्यर्थ नहीं गँवाना चाहिए। जो ईश्वर-स्मरण में जीवन बिताता है, वह सबसे भाग्यशाली है।"
  },
  {
    chaupai: "मन की गति मन जाने, जो न कहे सो जानि।\nजो कहे सो जानि ना, यह रहीम की बानि॥",
    kand: "दोहावली",
    meaning_hindi: "रहीम कहते हैं — मन की गति को मन ही जाने। जो (अनुभव) न कहे जाए, उसे जानो। जो कहा जाए वह जाना न जाए — यही रहीम का वचन है। यह एक गहरा दार्शनिक वक्तव्य है। जो अनुभव शब्दों में आ जाए — वह पूरा अनुभव नहीं। सच्चा ज्ञान, सच्चा प्रेम, सच्चा ईश्वर-अनुभव — ये सब अनिर्वचनीय हैं। जो जितना बताता है, वह उतना कम जानता है।"
  },
  {
    chaupai: "सुत हित पितु माता करहिं, राज हित भूप विचार।\nनारि हित पति हित करहिं, सो सेवक सब नाम धार॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "माता-पिता पुत्र के हित में, राजा राज-हित में विचार करता है, नारी पति के हित में करती है — ये सब नाम के सेवक हैं (स्वार्थी सेवा है)। तुलसी यहाँ वास्तविक निःस्वार्थ सेवा की परिभाषा करते हैं। जो केवल अपने संबंधियों के लिए काम करते हैं — वे नाममात्र के सेवक हैं। सच्ची सेवा वह है जो बिना स्वार्थ के सबके लिए हो।"
  },
  {
    chaupai: "बिना विचारे जो करे, सो पाछे पछताय।\nकाम बिगारे आपनो, जग में होत हँसाय॥",
    kand: "कवितावली (भाव)",
    meaning_hindi: "बिना विचारे जो काम करता है — वह बाद में पछताता है। अपना काम बिगाड़ लेता है और दुनिया में हँसी का पात्र बनता है। 'Think before you act' — यह आधुनिक प्रबंधन का सिद्धांत तुलसी की इस पंक्ति में है। जल्दबाजी में लिए गए निर्णय अक्सर गलत होते हैं। विचार-पूर्वक कार्य करना ही बुद्धिमानी है।"
  },
  {
    chaupai: "बरसत हरषत लोग सब, करषत लखे न कोय।\nतुलसी प्रजा सुभाग से, भूप भानु सम होय॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसी कहते हैं — जब वर्षा होती है तो सब हर्षित होते हैं, पर जब बादल जल को खींचता (वाष्पीकरण) है तो कोई ध्यान नहीं देता। सौभाग्यशाली प्रजा को राजा सूर्य जैसा मिलता है। सूर्य पानी खींचता है (कर लेता है) पर बारिश के रूप में लौटाता भी है। यह शासन और नेतृत्व का उपयुक्त रूपक है — करों का सदुपयोग प्रजा के कल्याण में होना चाहिए।"
  },
  {
    chaupai: "एक घड़ी आधी घड़ी, आधी में पुनि आध।\nतुलसी संगत साधु की, हरे कोटि अपराध॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसी कहते हैं — एक घड़ी, आधी घड़ी, आधी में भी आधा — यानी बहुत थोड़ा समय भी — साधु-संत की संगति करने से करोड़ों अपराध (पाप) मिट जाते हैं। सत्संग की यह शक्ति असाधारण है। एक अच्छी किताब, एक प्रेरक मुलाकात, एक सच्ची प्रार्थना — ये थोड़ा समय भी जीवन बदल सकता है। साधु-संगति की यह अमोघ शक्ति है।"
  },
  {
    chaupai: "जिमि प्रति लाभ लोभ अधिकाई। सिमिति जाइ न मदिर मदिराई॥",
    kand: "बालकाण्ड",
    meaning_hindi: "जैसे प्रत्येक लाभ से लोभ और अधिक बढ़ता है, और मदिरा से नशा कम नहीं होता (बढ़ता है) — वैसे ही तृष्णा भोग से नहीं जाती। यह तृष्णा की अतृप्त प्रकृति का सटीक वर्णन है। जितना अधिक भोगते हैं, उतनी अधिक भूख। यही संसार का नियम है। इससे मुक्ति केवल ज्ञान और वैराग्य से होती है — और अधिक भोग से नहीं।"
  },
  {
    chaupai: "गिरा अनयन नयन बिनु बानी। जिनके पग रज सिर धरि जाँचत जानी॥",
    kand: "बालकाण्ड",
    meaning_hindi: "गिरा (वाणी) आँखों के बिना है, नयन (नेत्र) वाणी के बिना — अर्थात् सरस्वती और दृष्टि दोनों अपूर्ण हैं। पर जिनके पाँवों की धूल सिर पर लगाकर माँगी जाती है — वे हैं राम। यह तुलसी की विनम्रता और भक्ति का उदाहरण है। ज्ञान, वाणी — सब राम के बिना अधूरे हैं। राम ही वह केंद्र हैं जिनसे सब पूर्ण होते हैं।"
  },
  {
    chaupai: "काम अकाम नितहिं मन, सकल होत सुखकंद।\nराम भजन अभियान जग, यह तुलसी आनंद॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसी कहते हैं — राम-भजन का अभ्यास इस जगत में सब सुखों का केंद्र है। यही मेरा (तुलसी का) आनंद है। यह व्यक्तिगत अनुभव-कथन है। तुलसी ने जीवन में कष्ट उठाए — पत्नी का ताना, अपमान, दरिद्रता — पर राम-नाम में उन्हें अटूट सुख मिला। यह भक्ति की अनुभव-सिद्ध गवाही है।"
  },
  {
    chaupai: "अभिमान मेरु समान है, क्षमा समुद्र समान।\nतुलसी इन दोनों में, जयी क्षमा महान॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसी कहते हैं — अहंकार मेरु पर्वत जितना बड़ा है और क्षमा समुद्र जितनी विशाल है। इन दोनों में क्षमा ही महान विजेता है। यह एक सुंदर तुलना है — पर्वत कठोर और अटल है, समुद्र विशाल और समाहित करने वाला। क्षमा का समुद्र अहंकार के पर्वत को भी समाहित कर लेता है। यही जीवन में सच्ची विजय है।"
  },
  {
    chaupai: "हरि अनंत हरि कथा अनंता। कहहिं सुनहिं बहुबिधि सब संता॥",
    kand: "बालकाण्ड",
    meaning_hindi: "हरि (ईश्वर) अनंत हैं और उनकी कथा भी अनंत है। सब संत उसे अनेक प्रकार से कहते और सुनते हैं। यह एक ऐसा वचन है जो धार्मिक बहुलता को सम्मान देता है। एक ही ईश्वर की कथा को अनेक संत, अनेक परंपराएं, अनेक भाषाएं — सब अपने-अपने तरीके से कहती हैं। यह विविधता में एकता है — और यही भारत की सांस्कृतिक महानता है।"
  },
  {
    chaupai: "भायप भगति भरत आचरनू। कहत सुनत दुख दूषन हरनू॥",
    kand: "अयोध्याकाण्ड",
    meaning_hindi: "भरत का प्रेम और उनकी भक्ति तथा आचरण — इसे कहने और सुनने से दुख और दोष दूर हो जाते हैं। भरत भारतीय जीवन-मूल्यों के आदर्श प्रतीक हैं — भाई-प्रेम, त्याग, नैतिकता। उनकी कहानी केवल पुराण-कथा नहीं — यह एक जीवन-आदर्श है जो आज भी प्रेरणा देता है।"
  },
  {
    chaupai: "सो कुल धन्य उमा सुनु, जगत पूज्य सुपुनीत।\nश्री रघुबीर परायन जेहि, नर उपजहिं तेहि रीत॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "हे उमा! वह वंश धन्य है और जगत में पूज्य तथा पवित्र है — जिस वंश में राम-परायण (राम को सर्वस्व मानने वाले) पुरुष जन्म लेते हैं। यह परिवार और वंश की वास्तविक महानता का मापदंड है। धन, पद, यश नहीं — ईश्वर-भक्त संतान ही वंश की सच्ची संपत्ति है। यह जीवन-मूल्यों की प्राथमिकता का सुंदर कथन है।"
  },
  {
    chaupai: "सेवक सेव्य भाव बिनु, भव न तरिअ उरगारि।\nबिनु पद बिनु पद पदुम बिनु, नलिन बिनु पानि बारि॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "हे गरुड़! सेवक और सेव्य (ईश्वर) के भाव के बिना संसार-सागर नहीं पार किया जा सकता — जैसे पैरों के बिना पद-प्राप्ति नहीं, कमल के बिना पानी में सुंदरता नहीं। भक्त-भगवान का संबंध ही वह नाव है जो संसार-सागर पार कराती है। इस संबंध के बिना — चाहे कितना भी ज्ञान हो, कितनी भी तपस्या हो — पार नहीं होते।"
  },
  {
    chaupai: "सुमिरि पवनसुत पावन नामू। अपने बस करि राखे रामू॥",
    kand: "सुन्दरकाण्ड",
    meaning_hindi: "हनुमान के पवित्र नाम का स्मरण करके उन्होंने राम को भी अपने वश में कर रखा है। यह हनुमान की भक्ति-शक्ति का वर्णन है। हनुमान — जो स्वयं राम के परम भक्त हैं — उन्होंने अपनी भक्ति से ही राम को वश में किया। यह भक्ति की शक्ति का अद्भुत उदाहरण है — प्रेम ईश्वर को भी 'वश' कर लेता है।"
  },
  {
    chaupai: "जे न मित्र दुख होहिं दुखारी। तिन्हहि बिलोकत पातक भारी॥",
    kand: "अरण्यकाण्ड (भाव-विस्तार)",
    meaning_hindi: "जो मित्र के दुख में दुखी न हो — उसे देखना भी पाप है। यह सच्ची मित्रता की कसौटी है। सच्चे मित्र की पहचान मुश्किल समय में होती है। जो सुख में साथ हो, दुख में गायब हो जाए — वह मित्र नहीं। जो मित्र की तकलीफ को अपनी तकलीफ महसूस करे, उसके लिए खड़ा हो — वह जीवन भर का साथी है। ऐसे मित्र दुर्लभ पर अमूल्य हैं।"
  },
  {
    chaupai: "पुत्रवती जुबती जग सोई। रहीम सपूत जासु सुत होई॥",
    kand: "दोहावली",
    meaning_hindi: "रहीम कहते हैं — वही युवती (माँ) धन्य है जिसका पुत्र सुपुत्र (योग्य, आज्ञाकारी, नैतिक) हो। केवल पुत्र होना पर्याप्त नहीं — सुपुत्र होना चाहिए। यह माता-पिता के लिए एक संदेश है — संतान को जन्म देना ही पर्याप्त नहीं, उन्हें सुसंस्कारी बनाना भी माता-पिता का कर्तव्य है। और जिस माँ का बच्चा अच्छा बने — वही सच्ची माँ है।"
  },
  {
    chaupai: "रहिमन नीर पखारि कै, मुख मीठा कीजै।\nसुधि पाछिलि बिसारि के, नया नेह कीजै॥",
    kand: "दोहावली",
    meaning_hindi: "रहीम कहते हैं — पानी से मुँह धोकर, मुँह मीठा करो (मीठा बोलो)। पुराने मन-मुटाव को भूलकर नया प्रेम करो। यह पुरानी कटुता से मुक्ति और नई शुरुआत का संदेश है। रिश्तों में टकराव होते हैं — पर उन्हें लंबे समय तक ढोना स्वयं के लिए कष्टकारी है। क्षमा करो, भूलो और नए सिरे से प्रेम शुरू करो — यही रिश्तों को जीवित रखता है।"
  },
  {
    chaupai: "जहाँ सुमति तहाँ सम्पति नाना। जहाँ कुमति तहाँ बिपति निदाना॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "जहाँ सुमति (अच्छी बुद्धि) है, वहाँ अनेक प्रकार की संपत्ति है। जहाँ कुमति (बुरी बुद्धि) है, वहाँ विपत्ति का निवास है। यह एक सार्वभौमिक सत्य है जिसे हर युग ने सिद्ध किया है। जो अच्छे विचारों के साथ जीता है — उसका जीवन, परिवार, व्यापार — सब समृद्ध होते हैं। जो बुरे इरादों से चलता है — वह अंततः विपत्ति में पड़ता है।"
  },
  {
    chaupai: "गिरिजा जगत पूज्य गुर चरना। मानत सुख घर बाहर बरना॥",
    kand: "बालकाण्ड",
    meaning_hindi: "हे गिरिजा (पार्वती)! जगत में गुरु के चरण पूज्य हैं। जो उन्हें मानता है, उसे घर और बाहर दोनों जगह सुख मिलता है। यह गुरु-भक्ति का फल बताता है। गुरु की आज्ञा मानने से, उनके मार्गदर्शन में चलने से न केवल आध्यात्मिक बल्कि सांसारिक जीवन भी सुखमय हो जाता है। गुरु-शिष्य संबंध की यह शक्ति अनुभव से जानी जा सकती है।"
  },
  {
    chaupai: "तुलसी जप तप नेम ब्रत, सब फल एही काज।\nराम लखन जानकि जहाँ, तहाँ विराजहु आज॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसी कहते हैं — जप, तप, नियम, व्रत — इन सबका एक ही फल है: जहाँ राम, लक्ष्मण और जानकी हों, वहाँ (उनके चरणों में, उनकी भक्ति में) विराजो। सभी साधनाओं का अंतिम लक्ष्य एक है — ईश्वर की उपस्थिति में रहना, उनसे एक होना। यह सारे कर्मकाण्ड का सार है।"
  },
  {
    chaupai: "उमा राम गुन गूढ़ पंडित, मुनि न पावहिं पार।\nकवन कोटि पामर जन जानहिं, श्री रघुबर बिचार॥",
    kand: "उत्तरकाण्ड",
    meaning_hindi: "हे उमा! राम के गूढ़ (रहस्यमय) गुणों का पार पंडित और मुनि भी नहीं पा सकते — तो करोड़ों साधारण लोग श्री राम के विचार को कैसे जानेंगे? यह ईश्वर की अगम्यता का स्वीकार है। पर साथ ही यह यह भी कहता है — जो जितना जान सके, वह जाने। सीमित ज्ञान भी अनंत की ओर एक कदम है।"
  },
  {
    chaupai: "नाम जपत मंगल दिसि, नाम जपत सुख छाय।\nनाम जपत दुख दूर हो, नाम बड़ो गुन गाय॥",
    kand: "तुलसीदास (भाव)",
    meaning_hindi: "नाम जपने से दिशाएं मंगलमय होती हैं, नाम जपने से सुख की छाया मिलती है, नाम जपने से दुख दूर होता है — नाम के गुणों की महिमा गाओ। नाम-जप की यह चतुर्मुखी शक्ति — मांगलिक, सुखप्रद, दुःखहारी — तुलसीदास की भक्ति-परंपरा का मूल है। भजन-कीर्तन और जप — ये मन को शांत करने के सिद्ध उपाय हैं जो वैज्ञानिक रूप से भी प्रमाणित हो रहे हैं।"
  },
  {
    chaupai: "कलियुग सब से उत्तम, नाम आधार जान।\nसत्संग सुमिरन भजन से, पायो परम निधान॥",
    kand: "उत्तरकाण्ड (भाव)",
    meaning_hindi: "कलियुग में नाम-स्मरण को सबसे उत्तम जानो। सत्संग, स्मरण और भजन से परम निधान (ईश्वर) प्राप्त होता है। तुलसी के अनुसार कलियुग में कठिन तप-साधना नहीं — केवल भक्ति, नाम-जप और सत्संग से मुक्ति संभव है। यह युगानुकूल धर्म का संदेश है। हर युग में धर्म का रूप बदलता है — पर उसका सार — ईश्वर-प्रेम — अटल रहता है।"
  },
  {
    chaupai: "मनसा वाचा कर्मना, नित्य एक ही भाव।\nतुलसी भक्ति सो पाइए, रामहि अमित प्रभाव॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसी कहते हैं — मन, वचन और कर्म तीनों में एक ही भाव (भक्ति) रखने से राम की असीम कृपा प्राप्त होती है। त्रिकरण शुद्धि — मन, वचन, कर्म का एकरूप होना — यही सच्ची भक्ति और सच्ची साधना है। जो मन में एक सोचता है, मुँह से दूसरा बोलता है और करता तीसरा है — वह विभाजित व्यक्तित्व है जिसे शांति नहीं मिल सकती।"
  },
  {
    chaupai: "संसार काच कुहरे सम है, दुर्लभ मानव देह।\nसो पाए जो राम भजे, तुलसी यह निर्देह॥",
    kand: "तुलसीदास",
    meaning_hindi: "तुलसी कहते हैं — यह संसार काँच की धुंध (भ्रम) जैसा है और मानव-देह दुर्लभ है। जो राम का भजन करता है, वही इस दुर्लभ देह का वास्तविक लाभ उठाता है — यह निःसंदेह सत्य है। मानव-जन्म एक दुर्लभ अवसर है और उसे भजन और सेवा में लगाना ही उसका सदुपयोग है। बाकी सब — कमाना, खाना, सोना — पशु भी करते हैं।"
  },
  {
    chaupai: "सेवक सठ नृप कृपन कुनारी। कपटी मित्र सूल सम चारी॥",
    kand: "रामचरितमानस — अरण्यकाण्ड",
    meaning_hindi: "मूर्ख सेवक, कंजूस राजा, कुलटा स्त्री और कपटी मित्र — ये चारों शूल (कांटे) के समान कष्टदायक होते हैं। तुलसीदास यहाँ उन चार संबंधों की बात करते हैं जो जीवन में सबसे अधिक पीड़ा देते हैं। यदि सेवक मूर्ख हो, राजा कंजूस हो, स्त्री दुष्ट हो, और मित्र कपटी हो, तो व्यक्ति का जीवन नर्क समान हो जाता है। इनसे बचना ही बुद्धिमानी है।"
  },
  {
    chaupai: "हित अनहित पसु पच्छिहु जाना। मानुष तनु गुन ग्यान निधाना॥",
    kand: "रामचरितमानस — सुंदरकाण्ड",
    meaning_hindi: "अपना भला और बुरा तो पशु-पक्षी भी जानते हैं, लेकिन मनुष्य का शरीर तो गुणों और ज्ञान का खजाना है। तुलसीदास कहते हैं कि मनुष्य में विवेक होना चाहिए। यदि मनुष्य भी पशुओं की तरह केवल आहार, निद्रा, भय और मैथुन में लगा रहे, तो वह मनुष्य कहलाने योग्य नहीं है। मनुष्य का कर्तव्य है कि वह अपने ज्ञान और गुणों का उपयोग दूसरों के कल्याण के लिए करे।"
  },
  {
    chaupai: "सत्य मूल सब धरम अधारा। तेज प्रताप सुजस जग सारा॥",
    kand: "रामचरितमानस — अयोध्याकाण्ड",
    meaning_hindi: "सत्य ही सभी धर्मों का मूल और आधार है। इसी सत्य से तेज, प्रताप और संसार में यश प्राप्त होता है। रामचरितमानस में सत्य को सर्वोच्च स्थान दिया गया है। राम ने सत्य और वचन के पालन के लिए सब कुछ त्याग दिया। सत्य वह नींव है जिस पर संपूर्ण चारित्रिक और सामाजिक ढांचा खड़ा होता है।"
  }
];

export const LOK_KATHAS: LokKathaDayData[] = [
  {
    saying: "नौ नकद न तेरह उधार",
    language: "अवधी",
    meaning_hindi: "तुरंत मिलने वाला थोड़ा लाभ भविष्य में मिलने वाले बड़े लेकिन अनिश्चित लाभ से कहीं बेहतर है।"
  },
  {
    saying: "अधजल गगरी छलकत जाय",
    language: "ब्रज",
    meaning_hindi: "जिस व्यक्ति को अल्प ज्ञान होता है, वह दिखावा और अहंकार अधिक करता है।"
  },
  {
    saying: "जब जागो तबही सबेरा",
    language: "भोजपुरी",
    meaning_hindi: "जब भी किसी को होश आए या अपनी गलती का एहसास हो, जीवन में सुधार की शुरुआत वहीं से हो जाती है।"
  },
  {
    saying: "पाछो पड़े खेती नहीं, आगो पड़े लड़ाई नहीं",
    language: "राजस्थानी",
    meaning_hindi: "खेती में आलस या विलंब नहीं करना चाहिए, और युद्ध जैसी कठिन परिस्थितियों से पीछे नहीं हटना चाहिए।"
  },
  {
    saying: "घर क चोर घर क चाकर",
    language: "मैथिली",
    meaning_hindi: "घर का भेदी या भीतर का व्यक्ति ही सबसे अधिक नुकसान पहुंचा सकता है।"
  },
  {
    saying: "जो गरजे सो बरसे नहीं",
    language: "बुंदेली",
    meaning_hindi: "जो बहुत बातें करते हैं या डींगें मारते हैं, वे वास्तव में कार्य सिद्ध नहीं कर पाते।"
  },
  {
    saying: "हाथ कंगन को आरसी क्या",
    language: "अवधी",
    meaning_hindi: "जो बात प्रत्यक्ष और साफ दिखाई दे रही हो, उसे साबित करने के लिए किसी बाहरी प्रमाण की आवश्यकता नहीं होती।"
  },
  {
    saying: "मन चंगा तो कठौती में गंगा",
    language: "भोजपुरी",
    meaning_hindi: "यदि मन पवित्र और शुद्ध हो, तो घर पर रहकर किया गया साधारण कर्म भी तीर्थ स्नान के समान पुण्य देता है।"
  },
  {
    saying: "कोउ नृप होइ हमें का हानी। चेरी छाँड़ि अब होब कि रानी।।",
    language: "अवधी",
    meaning_hindi: "शासन में कोई भी परिवर्तन हो, साधारण लोगों के बुनियादी जीवन या स्थिति में कोई बड़ा अंतर नहीं पड़ता।"
  },
  {
    saying: "घर का भेदी लंका ढावे",
    language: "ब्रज",
    meaning_hindi: "आपसी फूट और घर के रहस्य उजागर करने वाले अपनों के कारण ही विनाश होता है।"
  },
  {
    saying: "अपना हाथ जगन्नाथ",
    language: "भोजपुरी",
    meaning_hindi: "स्वयं का किया गया कार्य ही सबसे अधिक भरोसेमंद और सर्वोत्तम होता है। स्वावलंबन ही सबसे बड़ी शक्ति है।"
  },
  {
    saying: "अकेला चना भाड़ नहीं फोड़ सकता",
    language: "बुंदेली",
    meaning_hindi: "कोई भी बड़ा कार्य एक अकेला व्यक्ति अकेले दम पर नहीं कर सकता, उसके लिए सामूहिक प्रयास की आवश्यकता होती है।"
  },
  {
    saying: "ऊंची दुकान फीका पकवान",
    language: "ब्रज",
    meaning_hindi: "बाहरी चमक-दमक या प्रसिद्धि बहुत अधिक हो, लेकिन अंदर की गुणवत्ता अत्यंत साधारण हो।"
  },
  {
    saying: "नाच न जाने आँगन टेढ़ा",
    language: "भोजपुरी",
    meaning_hindi: "जब किसी को खुद काम करना नहीं आता, तो वह दूसरों में या परिस्थितियों में कमियां निकालने लगता है।"
  },
  {
    saying: "दूध का जला मट्ठा भी फूंक-फूंक कर पीता है",
    language: "अवधी",
    meaning_hindi: "एक बार बड़ा नुकसान उठाने के बाद व्यक्ति अत्यधिक सावधान और सतर्क हो जाता है।"
  },
  {
    saying: "आगे कुआँ पीछे खाई",
    language: "मैथिली",
    meaning_hindi: "जब इंसान हर तरफ से संकट में घिर जाए और बचने का कोई रास्ता न दिखाई दे।"
  },
  {
    saying: "का वर्षा जब कृषि सुखाने",
    language: "अवधी",
    meaning_hindi: "अवसर बीत जाने के बाद यदि कोई सहायता या संसाधन प्राप्त हो, तो उसका कोई महत्व नहीं रह जाता।"
  },
  {
    saying: "चोर की दाढ़ी में तिनका",
    language: "भोजपुरी",
    meaning_hindi: "अपराधी या दोषी व्यक्ति हमेशा सशंकित रहता है और अपनी हरकतों से खुद को उजागर कर देता है।"
  },
  {
    saying: "अंत भला तो सब भला",
    language: "राजस्थानी",
    meaning_hindi: "यदि किसी कार्य का परिणाम सुखद और अच्छा हो, तो रास्ते की कठिनाइयां और गलतियां भुला दी जाती हैं।"
  },
  {
    saying: "अब पछताए होत क्या जब चिड़िया चुग गई खेत",
    language: "ब्रज",
    meaning_hindi: "नुकसान हो जाने के बाद शोक या पश्चाताप करने का कोई लाभ नहीं होता।"
  },
  {
    saying: "धोबी का कुत्ता न घर का न घाट का",
    language: "भोजपुरी",
    meaning_hindi: "दो नावों पर सवारी करने वाला व्यक्ति कहीं का नहीं रहता, उसे कोई मान-सम्मान प्राप्त नहीं होता।"
  },
  {
    saying: "बकरे की अम्मा कब तक खैर मनाएगी",
    language: "अवधी",
    meaning_hindi: "जो विपत्ति निश्चित है, उससे कब तक बचा जा सकता है। संकट एक न एक दिन आएगा ही।"
  },
  {
    saying: "मान न मान मैं तेरा मेहमान",
    language: "ब्रज",
    meaning_hindi: "बिना किसी इच्छा या निमंत्रण के जबरदस्ती किसी के गले पड़ना या दखल देना।"
  },
  {
    saying: "बहती गंगा में हाथ धोना",
    language: "भोजपुरी",
    meaning_hindi: "समय के अनुकूल बहते अवसर का चतुराई से लाभ उठा लेना।"
  },
  {
    saying: "खोदा पहाड़ निकली चुहिया",
    language: "राजस्थानी",
    meaning_hindi: "अत्यधिक कठिन परिश्रम और बड़ी तैयारियों के बाद बहुत ही छोटा और नगण्य फल मिलना।"
  },
  {
    saying: "तेल देखो तेल की धार देखो",
    language: "बुंदेली",
    meaning_hindi: "जल्दबाज़ी में कोई निर्णय न लें, पहले परिस्थिति को ध्यान से देखें और समझें कि हवा किस तरफ बह रही है।"
  },
  {
    saying: "जिसकी लाठी उसकी भैंस",
    language: "भोजपुरी",
    meaning_hindi: "बलवान और शक्तिशाली व्यक्ति ही संसाधनों पर अधिकार जमा लेता है।"
  },
  {
    saying: "डूबते को तिनके का सहारा",
    language: "अवधी",
    meaning_hindi: "घोर संकट के समय मिलने वाली ज़रा सी मदद भी बहुत बड़ी राहत देती है।"
  },
  {
    saying: "एक तो करेला दूजे नीम चढ़ा",
    language: "ब्रज",
    meaning_hindi: "एक तो पहले से ही बुराई या कड़वाहट थी, ऊपर से वैसी ही बुरी संगति या परिस्थिति और मिल गई।"
  },
  {
    saying: "जितनी चादर हो उतने पैर पसारो",
    language: "मैथिली",
    meaning_hindi: "अपनी आय और सीमा के भीतर ही खर्च व जीवन यापन करना चाहिए।"
  },
  {
    saying: "अपनी करनी पार उतरनी",
    language: "राजस्थानी",
    meaning_hindi: "स्वयं का परिश्रम ही व्यक्ति को सफलता दिलाता है, दूसरे के भरोसे काम सिद्ध नहीं होता।"
  },
  {
    saying: "आगे नाथ न पीछे पगहा",
    language: "भोजपुरी",
    meaning_hindi: "जिस व्यक्ति पर कोई पारिवारिक या सामाजिक जिम्मेदारी न हो और वह पूरी तरह स्वतंत्र या आवारा हो।"
  },
  {
    saying: "उलटा चोर कोतवाल को डांटे",
    language: "ब्रज",
    meaning_hindi: "स्वयं गलती करने के बाद निर्दोष व्यक्ति पर ही आरोप मढ़ना या धमकाना।"
  },
  {
    saying: "एक पंथ दो काज",
    language: "अवधी",
    meaning_hindi: "एक ही प्रयास या यात्रा से दो उद्देश्यों या लाभों को प्राप्त कर लेना।"
  },
  {
    saying: "ओखली में सिर दिया तो मूसलों से क्या डरना",
    language: "बुंदेली",
    meaning_hindi: "जब किसी कठिन कार्य को करने का बीड़ा उठा ही लिया है, तो आने वाली कठिनाइयों से घबराना नहीं चाहिए।"
  },
  {
    saying: "कंगाली में आटा गीला",
    language: "भोजपुरी",
    meaning_hindi: "संकट के समय एक और नया संकट आ जाना, जिससे परेशानी दोगुनी हो जाए।"
  },
  {
    saying: "घर की मुर्गी दाल बराबर",
    language: "मैथिली",
    meaning_hindi: "घर की मूल्यवान वस्तु या गुणी व्यक्ति का कोई आदर या महत्व न समझना।"
  },
  {
    saying: "चमड़ी जाए पर दमड़ी न जाए",
    language: "राजस्थानी",
    meaning_hindi: "अत्यधिक कंजूस होना, चाहे उसके लिए कितना ही कष्ट क्यों न उठाना पड़े।"
  },
  {
    saying: "छोटा मुँह बड़ी बात",
    language: "ब्रज",
    meaning_hindi: "अपनी हैसियत या योग्यता से बढ़कर बड़ी-बड़ी बातें करना या सलाह देना।"
  },
  {
    saying: "जाको राखे साइयां मार सके न कोय",
    language: "अवधी",
    meaning_hindi: "जिस रक्षा स्वयं ईश्वर करते हैं, उसे कोई भी बड़ी से बड़ी ताकत नुकसान नहीं पहुँचा सकती।"
  },
  {
    saying: "जिसका काम उसी को साजे, और करे तो डंडा बाजे",
    language: "भोजपुरी",
    meaning_hindi: "जो व्यक्ति जिस काम में निपुण हो, उसे ही वह काम करना चाहिए; अनाड़ी द्वारा किए जाने पर काम बिगड़ता है।"
  },
  {
    saying: "दूर के ढोल सुहावने लगते हैं",
    language: "बुंदेली",
    meaning_hindi: "दूर की चीजें या परिस्थितियां देखने में अच्छी लगती हैं, पर वास्तविकता पास आने पर ही पता चलती है।"
  },
  {
    saying: "धोबी का कुत्ता न घर का न घाट का",
    language: "अवधी",
    meaning_hindi: "असमंजस या दोहरी निष्ठा के कारण कहीं भी आदर या स्थान न पाना।"
  },
  {
    saying: "नाम बड़े और दर्शन छोटे",
    language: "ब्रज",
    meaning_hindi: "बाहरी प्रसिद्धि और प्रतिष्ठा बहुत अधिक होना, पर असलियत में योग्यता बहुत कम होना।"
  },
  {
    saying: "बंदर क्या जाने अदरक का स्वाद",
    language: "भोजपुरी",
    meaning_hindi: "मूर्ख या अज्ञानी व्यक्ति किसी मूल्यवान या उत्तम वस्तु की कद्र नहीं कर सकता।"
  },
  {
    saying: "भैंस के आगे बीन बजाना",
    language: "अवधी",
    meaning_hindi: "मूर्ख या असंवेदनशील व्यक्ति को ज्ञान या उपदेश देना पूरी तरह व्यर्थ है।"
  },
  {
    saying: "मन चंगा तो कठौती में गंगा",
    language: "ब्रज",
    meaning_hindi: "यदि हृदय पवित्र और विचार शुद्ध हैं, तो घर पर ही तीर्थ का फल मिल जाता।"
  },
  {
    saying: "मुँह में राम बगल में छुरी",
    language: "भोजपुरी",
    meaning_hindi: "बाहर से मित्रता और प्रेम दिखाना, पर मन में कपट और शत्रुता का भाव रखना।"
  },
  {
    saying: "रस्सी जल गई पर ऐंठन न गई",
    language: "अवधी",
    meaning_hindi: "सब कुछ नष्ट हो जाने के बाद भी पुराना घमंड और अकड़ न जाना।"
  },
  {
    saying: "हाथ कंगन को आरसी क्या",
    language: "राजस्थानी",
    meaning_hindi: "जो बात बिल्कुल प्रत्यक्ष हो, उसे किसी प्रमाण या गवाही की आवश्यकता नहीं होती।"
  },
  {
    saying: "अंधों में काना राजा",
    language: "हरियाणवी",
    meaning_hindi: "मूर्खों या अज्ञानियों के बीच थोड़ा बहुत जानने वाला व्यक्ति भी महान बन बैठता है।"
  },
  {
    saying: "ऊंत के मुँह में जीरा",
    language: "अवधी",
    meaning_hindi: "आवश्यकता बहुत अधिक होने पर बहुत ही कम मात्रा में वस्तु मिलना।"
  },
  {
    saying: "खोदा पहाड़ निकली चुहिया",
    language: "बुंदेली",
    meaning_hindi: "बहुत अधिक परिश्रम और प्रयास करने के बाद अत्यंत छोटा या नगण्य फल मिलना।"
  },
  {
    saying: "घर का भेदी लंका ढावे",
    language: "ब्रज",
    meaning_hindi: "आपसी फूट या अपनों के विश्वासघात के कारण ही विनाश निश्चित होता है।"
  },
  {
    saying: "जैसी बह बयार पीठ तब तैसी दीजे",
    language: "भोजपुरी",
    meaning_hindi: "समय और परिस्थिति के अनुकूल ही व्यवहार और निर्णय बदलना चाहिए।"
  },
  {
    saying: "डूबते को तिनके का सहारा",
    language: "मैथिली",
    meaning_hindi: "घोर विपत्ति में मिली जरा सी सहायता भी बहुत बड़ी राहत देती है।"
  },
  {
    saying: "नौ दिन चले अढ़ाई कोस",
    language: "अवधी",
    meaning_hindi: "अत्यंत धीमी गति से कार्य करना या बहुत प्रयास के बाद भी कम प्रगति होना।"
  },
  {
    saying: "बकरे की अम्मा कब तक खैर मनाएगी",
    language: "भोजपुरी",
    meaning_hindi: "जिस संकट या अंत का आना निश्चित है, उससे ज्यादा समय तक बचा नहीं जा सकता।"
  },
  {
    saying: "मान न मान मैं तेरा मेहमान",
    language: "राजस्थानी",
    meaning_hindi: "बिना बुलाए या जबरदस्ती किसी के यहाँ दखल देना या गले पड़ना।"
  },
  {
    saying: "होनहार बिरवान के होत चीकने पात",
    language: "अवधी",
    meaning_hindi: "प्रतिभाशाली व्यक्तियों के लक्षण बचपन में ही दिखाई देने लगते हैं।"
  },
  {
    saying: "अपना हाथ जगन्नाथ",
    language: "छत्तीसगढ़ी",
    meaning_hindi: "आत्मनिर्भरता ही सबसे बड़ी शक्ति और सफलता का मार्ग है।"
  },
  {
    saying: "आसमान से गिरा खजूर में अटका",
    language: "भोजपुरी",
    meaning_hindi: "एक मुसीबत से छुटकारा पाकर तुरंत दूसरी मुसीबत में फँस जाना।"
  },
  {
    saying: "इस हाथ दे उस हाथ ले",
    language: "ब्रज",
    meaning_hindi: "जो भी भला या बुरा काम आप करते हैं, उसका फल आपको तुरंत या इसी जीवन में मिल जाता है।"
  },
  {
    saying: "एक और एक ग्यारह होते हैं",
    language: "राजस्थानी",
    meaning_hindi: "संगठन और एकता में बहुत बड़ी शक्ति होती है, जिससे कठिन काम भी आसान हो जाते।"
  },
  {
    saying: "कोयले की दलाली में हाथ काले",
    language: "अवधी",
    meaning_hindi: "बुरे लोगों की संगति या बुरे कार्यों में शामिल होने पर बदनामी निश्चित है।"
  },
  {
    saying: "घर का जोगी जोगड़ा आन गाँव का सिद्ध",
    language: "मैथिली",
    meaning_hindi: "अपने गाँव या घर के ज्ञानी व्यक्ति का आदर न होना, बाहर के साधारण को भी मान मिलना।"
  },
  {
    saying: "चोर-चोर मौसेरे भाई",
    language: "भोजपुरी",
    meaning_hindi: "एक जैसे स्वभाव या गलत काम करने वाले लोग जल्दी ही आपस में साथी बन जाते हैं।"
  },
  {
    saying: "जितने मुँह उतनी बातें",
    language: "ब्रज",
    meaning_hindi: "किसी एक विषय पर जितने लोग होंगे, उतनी ही अलग-अलग राय या अफवाहें होंगी।"
  },
  {
    saying: "डाइन भी दामाद छोड़ देती है",
    language: "अवधी",
    meaning_hindi: "कितना ही क्रूर व्यक्ति क्यों न हो, वह अपने सगे-संबंधियों के प्रति थोड़ी रियायत जरूर बरतता है।"
  },
  {
    saying: "तेल देखो तेल की धार देखो",
    language: "बुंदेली",
    meaning_hindi: "कोई भी निर्णय लेने से पहले परिस्थिति को ध्यान से देखें कि वह किस दिशा में मुड़ रही है।"
  },
  {
    saying: "नाच न जाने आँगन टेढ़ा",
    language: "पहाड़ी",
    meaning_hindi: "अपनी कमियों को स्वीकार करने के बजाय साधनों या दूसरों पर दोष मढ़ना।"
  },
  {
    saying: "पढ़े न लिखे नाम विद्याधर",
    language: "भोजपुरी",
    meaning_hindi: "बिना किसी योग्यता या ज्ञान के भी बड़ा नाम या पद पा लेना।"
  },
  {
    saying: "बगल में छोरा शहर में ढिंढोरा",
    language: "अवधी",
    meaning_hindi: "जो वस्तु अपने पास ही उपलब्ध है, उसे बाहर हर जगह पागलों की तरह खोजना।"
  },
  {
    saying: "भागते चोर की लंगोटी ही सही",
    language: "राजस्थानी",
    meaning_hindi: "जहाँ पूरा नुकसान हो रहा हो, वहाँ से जो कुछ भी बच जाए, उसी में संतोष कर लेना चाहिए।"
  },
  {
    saying: "मियां की जूती मियां के सिर",
    language: "ब्रज",
    meaning_hindi: "किसी व्यक्ति की चाल या तरकीब का इस्तेमाल करके उसी को परास्त या नुकसान पहुंचाना।"
  },
  {
    saying: "रातों रात कुआँ नहीं खुदता",
    language: "बुंदेली",
    meaning_hindi: "कोई भी बड़ा या स्थायी कार्य एक रात में पूरा नहीं होता, उसके लिए समय और धैर्य चाहिए।"
  },
  {
    saying: "सब धान बाईस पसेरी",
    language: "भोजपुरी",
    meaning_hindi: "अच्छे और बुरे, योग्य और अयोग्य सभी को एक समान आंकना या उनके साथ एक जैसा बर्ताव करना।"
  },
  {
    saying: "हंसा थे सो उड़ गए अब काग भये दीवान",
    language: "अवधी",
    meaning_hindi: "गुणी और सज्जन लोगों के चले जाने पर अयोग्य और ओछे लोगों के हाथ में सत्ता आ जाना।"
  },
  {
    saying: "अपना दही को कोई खट्टा नहीं कहता",
    language: "पहाड़ी",
    meaning_hindi: "अपनी बनाई वस्तु या अपने बच्चों की कमियां किसी को दिखाई नहीं देतीं।"
  },
  {
    saying: "अंधा बांटे रेवड़ी फिर-फिर अपनों को दे",
    language: "भोजपुरी",
    meaning_hindi: "अधिकार या पद मिलने पर केवल अपने सगे-संबंधियों को ही लाभ पहुँचाना।"
  },
  {
    saying: "इतने की कलाई नहीं जितने का कंगन",
    language: "ब्रज",
    meaning_hindi: "किसी कार्य को करने में उसकी उपयोगिता से अधिक खर्च या नुकसान हो जाना।"
  },
  {
    saying: "एक तंदुरुस्ती हजार नियामत",
    language: "अवधी",
    meaning_hindi: "उत्तम स्वास्थ्य ही सबसे बड़ा धन और सुख है, इसके बिना सभी वैभव व्यर्थ हैं।"
  },
  {
    saying: "काठ की हांडी बार-बार नहीं चढ़ती",
    language: "राजस्थानी",
    meaning_hindi: "धोखेबाज़ी या छल-कपट से किसी को केवल एक बार ही बेवकूफ बनाया जा सकता है, बार-बार नहीं।"
  },
  {
    saying: "गेहूँ के साथ घुन भी पिस जाता है",
    language: "बुंदेली",
    meaning_hindi: "अपराधियों या बुरे लोगों के साथ रहने पर निर्दोष सज्जन भी सजा पा जाते हैं।"
  },
  {
    saying: "चिराग तले अंधेरा",
    language: "ब्रज",
    meaning_hindi: " दूसरों को उपदेश देने या प्रकाश फैलाने वाले व्यक्ति के अपने घर या आचरण में ही दोष होना।"
  },
  {
    saying: "जंगल में मोर नाचा किसने देखा",
    language: "अवधी",
    meaning_hindi: "किसी कला या गुण का प्रदर्शन यदि उपयुक्त स्थान या दर्शकों के सामने न हो, तो वह व्यर्थ जाता है।"
  },
  {
    saying: "ताली एक हाथ से नहीं बजती",
    language: "भोजपुरी",
    meaning_hindi: "किसी भी विवाद या झगड़े के लिए दोनों पक्ष किसी न किसी रूप में जिम्मेदार होते हैं।"
  },
  {
    saying: "नाई की बारात में ठाकुर ही ठाकुर",
    language: "मैथिली",
    meaning_hindi: "जहाँ सभी खुद को बड़ा और नेता मानते हों और काम करने वाला कोई न हो।"
  },
  {
    saying: "बिल्ली के भागों छींका टूटा",
    language: "अवधी",
    meaning_hindi: "बिना किसी विशेष प्रयास के अचानक या भाग्यवश मनचाहा लाभ मिल जाना।"
  },
  {
    saying: "मर्ज बढ़ता गया ज्यों-ज्यों दवा की",
    language: "ब्रज",
    meaning_hindi: "संकट को सुलझाने के जितने प्रयास किए गए, वह उतना ही अधिक उलझता और गंभीर होता गया।"
  }
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
  },
  {
    word: "उद्गम",
    meaning: "शुरुआत या उत्पत्ति का स्थान",
    usage: "गंगा का उद्गम गंगोत्री हिमनद से होता है।"
  },
  {
    word: "सोपान",
    meaning: "सीढ़ी या प्रगति का चरण",
    usage: "कठिन परिश्रम ही सफलता का पहला सोपान है।"
  },
  {
    word: "निष्प्रभ",
    meaning: "बिना चमक का / फीका या कांतिहीन",
    usage: "लंबी बीमारी के बाद उसका चेहरा निष्प्रभ दिखाई दे रहा था।"
  },
  {
    word: "विहंगम",
    meaning: "पक्षी जैसा विस्तृत / व्यापक अवलोकन",
    usage: "पहाड़ी की चोटी से घाटी का विहंगम दृश्य अत्यंत सुंदर लग रहा था।"
  },
  {
    word: "कुतूहल",
    meaning: "जानने की तीव्र इच्छा या जिज्ञासा",
    usage: "जादूगर के नए कारनामे को देखने के लिए बच्चों में बड़ा कुतूहल था।"
  },
  {
    word: "सायुज्य",
    meaning: "एकरूपता / ईश्वर में पूरी तरह विलीन हो जाना",
    usage: "साधक अंततः परमात्मा के साथ सायुज्य प्राप्त करने का प्रयास करता है।"
  },
  {
    word: "परावलंबन",
    meaning: "दूसरों पर निर्भर रहना / पराधीनता",
    usage: "परावलंबन मनुष्य के आत्मविश्वास और प्रगति को धीरे-धीरे नष्ट कर देता है।"
  },
  {
    word: "मुमुक्षु",
    meaning: "मोक्ष या आध्यात्मिक मुक्ति की इच्छा रखने वाला",
    usage: "ऋषिकेश के आश्रमों में कई मुमुक्षु ध्यान और साधना में लीन रहते हैं।"
  },
  {
    word: "विस्मृति",
    meaning: "भूल जाने की क्रिया या अवस्था",
    usage: "समय बीतने के साथ पुरानी कटु यादें विस्मृति के गर्त में चली जाती हैं।"
  },
  {
    word: "संधान",
    meaning: "निशाना लगाना या खोज करना",
    usage: "वैज्ञानिक काफी समय से इस गंभीर बीमारी के इलाज का संधान कर रहे हैं।"
  },
  {
    word: "आस्तिकता",
    meaning: "ईश्वर या परम सत्ता में विश्वास होना",
    usage: "उनकी आस्तिकता संकट के समय भी उन्हें आंतरिक संबल प्रदान करती है।"
  },
  {
    word: "उहापोह",
    meaning: "असमंजस या उधेड़बुन की स्थिति",
    usage: "भविष्य के करियर को लेकर उसके मन में काफी उहापोह मची हुई थी।"
  },
  {
    word: "संभ्रांत",
    meaning: "प्रतिष्ठित, आदरणीय या कुलीन",
    usage: "वे शहर के एक संभ्रांत और प्रतिष्ठित परिवार से ताल्लुक रखते हैं।"
  },
  {
    word: "अपरिहार्य",
    meaning: "जिसे टाला न जा सके / अत्यंत आवश्यक",
    usage: "खराब मौसम के कारण उड़ानों का रद्द होना अपरिहार्य हो गया था।"
  },
  {
    word: "प्रदीप्त",
    meaning: "चमकता हुआ / ज्ञान से आलोकित",
    usage: "गुरु के वचनों ने शिष्य के अंतःकरण को पूरी तरह प्रदीप्त कर दिया।"
  },
  {
    word: "अवसाद",
    meaning: "गहरी उदासी या मानसिक निराशा",
    usage: "असफलता के दौर में स्वयं को अवसाद से बचाना एक बड़ी चुनौती है।"
  },
  {
    word: "सौजन्य",
    meaning: "कृपा, भद्रता या सौम्यता",
    usage: "यह कार्यक्रम स्थानीय कला अकादमी के सौजन्य से आयोजित किया जा रहा है।"
  },
  {
    word: "नैसर्गिकता",
    meaning: "स्वाभाविकता या प्राकृतिक रूप",
    usage: "पहाड़ी रास्तों पर चलते हुए प्रकृति की नैसर्गिकता मन को मोह लेती है।"
  },
  {
    word: "सम्मोहन",
    meaning: "अपनी ओर आकर्षित या मुग्ध करने की कला",
    usage: "उसकी जादुई आवाज में एक अजीब सा सम्मोहन था जो सबको बांध लेता था।"
  },
  {
    word: "अंतर्द्वंद्व",
    meaning: "मन के भीतर चलने वाला विचारों का टकराव",
    usage: "कर्तव्य और भावनाओं के बीच चल रहे अंतर्द्वंद्व ने उसे बेचैन कर दिया था।"
  },
  {
    word: "उदारता",
    meaning: "बड़ा दिल होना / दानशीलता या दयालुता",
    usage: "संकट के समय गरीबों की मदद करना उनकी उदारता को दर्शाता है।"
  },
  {
    word: "विद्रूपता",
    meaning: "कुरुपता या समाज का बिगड़ा हुआ रूप",
    usage: "यह नाटक आधुनिक शहरी जीवन की विद्रूपता पर करारा प्रहार करता है।"
  },
  {
    word: "वैविध्य",
    meaning: "विविधता या अलग-अलग रूप होना",
    usage: "भारतीय संस्कृति का वैविध्य ही इसकी सबसे बड़ी पहचान और शक्ति है।"
  },
  {
    word: "जीर्णोद्धार",
    meaning: "पुरानी या टूटी इमारत की मरम्मत कर नया बनाना",
    usage: "सरकार ने ऐतिहासिक किले के जीर्णोद्धार के लिए बजट स्वीकृत किया है।"
  },
  {
    word: "प्रतिबद्धता",
    meaning: "अपने वचन या कर्तव्य के प्रति दृढ़ रहना",
    usage: "काम को समय पर पूरा करना उनकी व्यावसायिक प्रतिबद्धता को दर्शाता है।"
  },
  {
    word: "संवेदनशीलता",
    meaning: "दूसरों के दुख-दर्द को महसूस करने का गुण",
    usage: "एक अच्छे लेखक में समाज के प्रति गहरी संवेदनशीलता होनी चाहिए।"
  },
  {
    word: "सद्भाव",
    meaning: "आपसी प्रेम, भाईचारा और अच्छे विचार",
    usage: "विभिन्न समुदायों के बीच सद्भाव बनाए रखना शांति के लिए आवश्यक है।"
  },
  {
    word: "दूरदर्शिता",
    meaning: "भविष्य की परिस्थितियों को पहले से भांप लेना",
    usage: "उनकी व्यावसायिक दूरदर्शिता के कारण कंपनी ने बड़ी सफलता हासिल की।"
  },
  {
    word: "अडिग",
    meaning: "जो अपने स्थान या निर्णय से न डिगे / स्थिर",
    usage: "कठिन से कठिन चुनौतियों के सामने भी उनका संकल्प अडिग रहा।"
  },
  {
    word: "पारदर्शिता",
    meaning: "स्पष्टता या ईमानदारी (छुपाव न होना)",
    usage: "प्रशासनिक कार्यों में पारदर्शिता होने से जनता का विश्वास बढ़ता है।"
  },
  {
    word: "परिहार",
    meaning: "निवारण करना या किसी चीज से बचना",
    usage: "स्वास्थ्य लाभ के लिए जंक फूड का परिहार करना अत्यंत आवश्यक है।"
  },
  {
    word: "मर्यादा",
    meaning: "आचरण की सीमा या प्रतिष्ठा",
    usage: "हमें हर परिस्थिति में समाज और परिवार की मर्यादा का ध्यान रखना चाहिए।"
  },
  {
    word: "सहिष्णुता",
    meaning: "दूसरों के विचारों और व्यवहार को सहन करने की क्षमता",
    usage: "लोकतांत्रिक समाज में सहिष्णुता एक अनिवार्य नागरिक गुण है।"
  },
  {
    word: "कृतज्ञता",
    meaning: "उपकार मानने की भावना या आभार",
    usage: "मुसीबत में मदद करने वाले मित्र के प्रति कृतज्ञता व्यक्त करना हमारा कर्तव्य है।"
  },
  {
    word: "अमूल्य",
    meaning: "जिसका कोई मूल्य न आंका जा सके / कीमती",
    usage: "समय जीवन की सबसे अमूल्य धरोहर है, इसे व्यर्थ नहीं गंवाना चाहिए।"
  },
  {
    word: "सहानुभूति",
    meaning: "दूसरों के दुख में duḥkhi होने की भावना",
    usage: "बीमार पड़ोसी के प्रति सहानुभूति दिखाते हुए उसने उनके भोजन का प्रबंध किया।"
  },
  {
    word: "आत्मविश्वास",
    meaning: "स्वयं की क्षमता पर अटूट भरोसा",
    usage: "नियमित अभ्यास से खेल के मैदान में उसका आत्मविश्वास काफी बढ़ गया।"
  },
  {
    word: "परिश्रम",
    meaning: "कड़ी मेहनत या पुरुषार्थ",
    usage: "कठिन परिश्रम का कोई दूसरा विकल्प नहीं है, यही सफलता का मार्ग है।"
  },
  {
    word: "सदाचार",
    meaning: "अच्छा और नैतिक व्यवहार",
    usage: "बचपन से ही बच्चों में सदाचार और नैतिकता के संस्कार डालने चाहिए।"
  },
  {
    word: "संतुष्टि",
    meaning: "मन का संतोष या प्रसन्नता",
    usage: "सादगीपूर्ण जीवन जीने से जो संतुष्टि मिलती है, वह वैभव में नहीं है।"
  },
  {
    word: "सत्यनिष्ठा",
    meaning: "सत्य और ईमानदारी पर दृढ़ रहना",
    usage: "उनके लंबे करियर में उनकी सत्यनिष्ठा पर कभी कोई सवाल नहीं उठा।"
  },
  {
    word: "परोपकार",
    meaning: "दूसरों की भलाई या सेवा करना",
    usage: "परोपकार की भावना ही मनुष्य को मशुओं से अलग और महान बनाती है।"
  },
  {
    word: "दृढ़ता",
    meaning: "संकल्प की मजबूती या अडिगता",
    usage: "कठिनाइयों के बावजूद उसने अपने लक्ष्य को पाने के लिए दृढ़ता दिखाई।"
  },
  {
    word: "उत्साह",
    meaning: "मन का उमंग या जोश",
    usage: "नए प्रोजेक्ट पर काम शुरू करने को लेकर पूरी टीम में बहुत उत्साह था।"
  },
  {
    word: "विनम्रता",
    meaning: "अहंकार रहित होना / सौम्यता",
    usage: "सफलता मिलने के बाद भी उनके व्यवहार में विनम्रता बनी रही।"
  },
  {
    word: "विवेकशीलता",
    meaning: "भले-बुरे का विचार करने की बुद्धि",
    usage: "संकट के समय विवेकशीलता से काम लेने पर ही सही रास्ता मिलता है।"
  },
  {
    word: "स्वावलंबन",
    meaning: "आत्मनिर्भर होना / स्वयं के पैरों पर खड़ा होना",
    usage: "स्वावलंबन ही सम्मानपूर्वक जीवन जीने का एकमात्र मार्ग है।"
  },
  {
    word: "निष्ठा",
    meaning: "अपने काम या कर्तव्य के प्रति गहरी वफादारी",
    usage: "कंपनी के प्रति उनकी निष्ठा के कारण उन्हें विशेष पुरस्कार मिला।"
  },
  {
    word: "एकाग्रता",
    meaning: "मन को एक ही बिंदु पर केंद्रित करना",
    usage: "ध्यान लगाने से विद्यार्थियों की एकाग्रता और स्मरण शक्ति बढ़ती है।"
  },
  {
    word: "धैर्य",
    meaning: "धीरज या संकट में मन को शांत रखना",
    usage: "मुश्किल वक्त में धैर्य खोने के बजाय समाधान खोजने का प्रयास करना चाहिए।"
  },
  {
    word: "संशय",
    meaning: "संदेह या अनिश्चय की स्थिति",
    usage: "मन में संशय रखकर किया गया कोई भी कार्य कभी फलदायी नहीं होता।"
  },
  {
    word: "सामंजस्य",
    meaning: "आपसी तालमेल या संतुलन",
    usage: "कार्यस्थल पर सहयोगियों के बीच सामंजस्य होना काम को आसान बनाता है।"
  },
  {
    word: "गरिमा",
    meaning: "मर्यादा या गौरवपूर्ण स्थिति",
    usage: "हर व्यक्ति को स्वाभिमान और मानवीय गरिमा के साथ जीने का अधिकार है।"
  },
  {
    word: "अभिलाषा",
    meaning: "तीव्र इच्छा या आकांक्षा",
    usage: "उसकी एकमात्र अभिलाषा है कि वह अपने माता-पिता का नाम रोशन करे।"
  },
  {
    word: "कुशलता",
    meaning: "किसी कार्य में निपुणता या दक्षता",
    usage: "नियमित अभ्यास से उसने चित्रकारी में अद्भुत कुशलता हासिल कर ली है।"
  },
  {
    word: "तटस्थता",
    meaning: "निष्पक्ष होना / किसी का पक्ष न लेना",
    usage: "न्यायाधीश को निर्णय देते समय पूरी तटस्थता बरतनी चाहिए।"
  },
  {
    word: "जिज्ञासा",
    meaning: "नयी चीजें सीखने या जानने की इच्छा",
    usage: "सच्चे वैज्ञानिक के मन में प्रकृति के रहस्यों के प्रति हमेशा जिज्ञासा रहती है।"
  },
  {
    word: "प्रोत्साहन",
    meaning: "आगे बढ़ने की प्रेरणा या हौसला बढ़ाना",
    usage: "शिक्षकों के प्रोत्साहन से उसने बोर्ड परीक्षा में सर्वोच्च अंक प्राप्त किए।"
  },
  {
    word: "समर्पण",
    meaning: "पूरी लगन के साथ अर्पित होना",
    usage: "देश की सेवा में सैनिकों का समर्पण अत्यंत प्रेरणादायक होता है।"
  },
  {
    word: "आस्था",
    meaning: "गहरी श्रद्धा या अटूट विश्वास",
    usage: "ईश्वर में उनकी अटूट आस्था ने उन्हें हर कठिन परिस्थिति से उबरने में मदद की।"
  }
];
