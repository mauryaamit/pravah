export interface AnandEntry {
  dayIndex: number;
  riddle: {
    title: string;
    title_hi: string;
    question: string;
    question_hi: string;
    reveal: string;
    reveal_hi: string;
  };
  joke: {
    setup: string;
    setup_hi?: string;
    punchline: string;
    punchline_hi?: string;
    type: 'wordplay' | 'absurdist' | 'observational' | 'science' | 'desi';
  };
  fun_fact: {
    fact: string;
    fact_hi?: string;
    why_delightful: string;
  };
  sarcasm_or_wit: {
    observation: string;
    observation_hi?: string;
    attribution?: string;
  };
}

export const ANAND_ENTRIES: AnandEntry[] = [
  {
    dayIndex: 1,
    riddle: {
      title: "The Silent Runner",
      title_hi: "मूक धावक",
      question: "I have hands but cannot clap, and I run but have no legs. What am I?",
      question_hi: "मेरे पास हाथ हैं लेकिन मैं ताली नहीं बजा सकता, और मैं दौड़ता हूँ लेकिन मेरे पैर नहीं हैं। मैं क्या हूँ?",
      reveal: "A clock.",
      reveal_hi: "एक घड़ी।"
    },
    joke: {
      setup: "Why does an auto-rickshaw driver reject three passengers before choosing one?",
      setup_hi: "एक ऑटो-रिक्शा चालक एक सवारी को चुनने से पहले तीन सवारियों को क्यों मना करता है?",
      punchline: "He is not driving; he is a philosopher deciding if your destination aligns with his karma.",
      punchline_hi: "वह गाड़ी नहीं चला रहा है; वह एक दार्शनिक है जो यह तय कर रहा है कि आपका गंतव्य उसके कर्म से मेल खाता है या नहीं।",
      type: "desi"
    },
    fun_fact: {
      fact: "Honey is one of the very few foods that never spoils. Archaeologists have excavated pots of honey from ancient Egyptian tombs that are over three thousand years old and still perfectly edible. This longevity is due to its low moisture content and highly acidic pH, which prevents bacteria growth.",
      fact_hi: "शहद उन बहुत कम खाद्य पदार्थों में से एक है जो कभी खराब नहीं होते। पुरातत्वविदों को मिस्र के मकबरों से तीन हजार साल पुराना शहद मिला है जो आज भी खाने योग्य है।",
      why_delightful: "It is amazing to think we could eat food prepared by bees that lived during the reign of Tutankhamun, tasting history directly."
    },
    sarcasm_or_wit: {
      observation: "Nothing says 'I value your time' quite like scheduling a one-hour meeting to read a three-sentence email out loud.",
      observation_hi: "एक घंटे की मीटिंग में तीन वाक्यों का ईमेल पढ़कर सुनाने से बेहतर 'समय की कद्र' करने का कोई तरीका नहीं है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 2,
    riddle: {
      title: "The Dark Companion",
      title_hi: "काला साथी",
      question: "I only exist when there is light, but direct light kills me. What am I?",
      question_hi: "मैं केवल तभी अस्तित्व में आता हूँ जब प्रकाश होता है, लेकिन सीधा प्रकाश मुझे मार देता है। मैं क्या हूँ?",
      reveal: "A shadow.",
      reveal_hi: "एक परछाई।"
    },
    joke: {
      setup: "Why did the Schrodinger's cat joke go viral?",
      setup_hi: "श्रोडिंगर की बिल्ली का मजाक क्यों वायरल हो गया?",
      punchline: "It was both funny and not funny until you read the punchline.",
      punchline_hi: "यह मजाकिया भी था और नहीं भी, जब तक कि आपने इसका अंत नहीं पढ़ लिया।",
      type: "science"
    },
    fun_fact: {
      fact: "Bananas contain high levels of potassium, and a tiny fraction of natural potassium is radioactive potassium-forty. Eating a single banana exposes you to a very small amount of radiation. You would need to eat about ten million bananas in one sitting to suffer from fatal radiation poisoning.",
      fact_hi: "केले में उच्च मात्रा में पोटेशियम होता है, और पोटेशियम का एक बहुत छोटा हिस्सा प्राकृतिक रूप से रेडियोधर्मी होता है।",
      why_delightful: "This fact makes a humble fruit feel like a tiny, yellow power plant, reminding us of the radioactivity present in daily life."
    },
    sarcasm_or_wit: {
      observation: "My gym membership is basically a monthly charitable donation to a building I visited once in January.",
      observation_hi: "मेरी जिम सदस्यता मूल रूप से उस इमारत के लिए मासिक धर्मार्थ दान है जहां मैं जनवरी में एक बार गया था।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 3,
    riddle: {
      title: "The Devourer",
      title_hi: "भक्षक",
      question: "If you feed me, I grow and live, but if you give me water, I die. What am I?",
      question_hi: "यदि आप मुझे खिलाते हैं, तो मैं बढ़ता हूँ और जीवित रहता हूँ, लेकिन यदि आप मुझे पानी देते हैं, तो मैं मर जाता हूँ। मैं क्या हूँ?",
      reveal: "Fire.",
      reveal_hi: "आग।"
    },
    joke: {
      setup: "Why did the bicycle fall over?",
      setup_hi: "साइकिल क्यों गिर गई?",
      punchline: "Because it was two-tired.",
      punchline_hi: "क्योंकि वह बहुत थक गई थी (दो पहियों वाली थी)।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Wombats are the only known animals in the world that produce cube-shaped feces. This unique shape is a result of their long and slow digestion process combined with the changing elasticity of their intestinal walls. The flat edges prevent the poop from rolling away, helping mark territory.",
      fact_hi: "वोम्बैट दुनिया के एकमात्र ऐसे जीव हैं जो चौकोर (क्यूब) आकार का मल त्याग करते हैं, जिससे यह लुढ़क नहीं पाता।",
      why_delightful: "It is a quirky evolutionary solution that turns waste management into a highly stable, block-building geometry game in the Australian bush."
    },
    sarcasm_or_wit: {
      observation: "Modern adulthood is mostly just being tired and talking about how tired you are to other tired people.",
      observation_hi: "वयस्क जीवन का अधिकांश हिस्सा सिर्फ थका हुआ महसूस करना और दूसरे थके हुए लोगों से अपनी थकान के बारे में चर्चा करना है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 4,
    riddle: {
      title: "The Paper World",
      title_hi: "कागज की दुनिया",
      question: "I have cities but no houses, forests but no trees, and rivers but no water. What am I?",
      question_hi: "मेरे पास शहर हैं लेकिन घर नहीं, जंगल हैं लेकिन पेड़ नहीं, और नदियां हैं लेकिन पानी नहीं। मैं क्या हूँ?",
      reveal: "A map.",
      reveal_hi: "एक नक्शा।"
    },
    joke: {
      setup: "Why did the cloud paint itself green?",
      setup_hi: "बादल ने खुद को हरा रंग क्यों लगाया?",
      punchline: "Because it wanted to pretend it was a very high-altitude lawn.",
      punchline_hi: "क्योंकि वह दिखाना चाहता था कि वह बहुत ऊंचाई पर स्थित एक घास का मैदान है।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "Sea otters are known to hold hands in groups, called rafts, while they sleep to keep from drifting apart in open water. They also wrap themselves in giant kelp to anchor themselves. This social behavior helps them stay connected to family groups and prevents separation by ocean currents.",
      fact_hi: "समुद्री ऊदबिलाव (Sea otters) सोते समय पानी में एक-दूसरे का हाथ पकड़ लेते हैं ताकि वे बहाव में अलग न हो जाएं।",
      why_delightful: "This tender habit shows that even in the wild oceans, companionship is a biological necessity for warmth, safety, and peace of mind."
    },
    sarcasm_or_wit: {
      observation: "I have decided to delete my social media accounts, but I will keep them active just in case I need to tell people I deleted them.",
      observation_hi: "मैंने अपने सोशल मीडिया अकाउंट डिलीट करने का फैसला किया है, लेकिन मैं उन्हें सक्रिय रखूँगा ताकि लोगों को बता सकूँ।",
      attribution: "Mark Twain"
    }
  },
  {
    dayIndex: 5,
    riddle: {
      title: "The Mimic",
      title_hi: "नकलची",
      question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
      question_hi: "मैं बिना मुँह के बोलता हूँ और बिना कान के सुनता हूँ। मेरा कोई शरीर नहीं है, लेकिन मैं हवा के साथ जीवित हो उठता हूँ। मैं क्या हूँ?",
      reveal: "An echo.",
      reveal_hi: "एक गूंज।"
    },
    joke: {
      setup: "Why do we keep opening the refrigerator door expecting new food to appear?",
      setup_hi: "हम बार-बार फ्रिज का दरवाजा खोलकर नए खाने के आने की उम्मीद क्यों करते हैं?",
      punchline: "We are not looking for food; we are looking for a new standard of happiness.",
      punchline_hi: "हम खाने की तलाश में नहीं हैं; हम खुशी के एक नए स्तर की तलाश कर रहे हैं।",
      type: "observational"
    },
    fun_fact: {
      fact: "The Turritopsis dohrnii jellyfish is biologically immortal because it can revert its cells back to their earliest form when damaged or starving. This process, called transdifferentiation, allows the jellyfish to start its life cycle over from the polyp stage, avoiding death from old age indefinitely.",
      fact_hi: "टुरिटोप्सिस डोहर्नी नाम की जेलीफिश जैविक रूप से अमर है क्योंकि यह अपनी कोशिकाओं को वापस पुरानी अवस्था में ले जा सकती है।",
      why_delightful: "It is nature's own reset button, proving that aging is not an absolute rule but a process that can be reversed."
    },
    sarcasm_or_wit: {
      observation: "Coffee is the magic potion that turns 'leave me alone or die' into 'good morning, dear colleagues.'",
      observation_hi: "कॉफी वह जादुई पेय है जो सुबह के गुस्से को सहकर्मियों के लिए 'सुप्रभात' में बदल देता है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 6,
    riddle: {
      title: "The Key Master",
      title_hi: "चाबी का मालिक",
      question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go outside. What am I?",
      question_hi: "मेरे पास चाबियां (Keys) हैं लेकिन ताले नहीं खुलते। मेरे पास स्पेस (Space) है लेकिन कोई कमरा नहीं। आप प्रवेश (Enter) कर सकते हैं, लेकिन बाहर नहीं जा सकते। मैं क्या हूँ?",
      reveal: "A keyboard.",
      reveal_hi: "एक कंप्यूटर कीबोर्ड।"
    },
    joke: {
      setup: "Why do we tap the bottom of a tea glass before drinking at a tapri?",
      setup_hi: "हम टपरी पर चाय पीने से पहले कांच के गिलास के तले को क्यों थपथपाते हैं?",
      punchline: "To check if the glass has survived the intense heat of boiling ginger chai.",
      punchline_hi: "यह देखने के लिए कि क्या ग्लास उबलती हुई अदरक की चाय की तीव्र गर्मी से बच पाया है।",
      type: "desi"
    },
    fun_fact: {
      fact: "Octopuses possess three separate hearts and copper-rich blue blood. Two hearts pump blood to the gills, while the third circulates it to the rest of the body. When the octopus swims, the central heart stops beating, which explains why they prefer crawling over active swimming.",
      fact_hi: "ऑक्टोपस के पास तीन अलग दिल और तांबे से भरपूर नीला खून होता है। तैरते समय उनका मुख्य दिल धड़कना बंद कर देता है।",
      why_delightful: "It paints the octopus as a truly alien creature living in our oceans, carrying extra hearts to fuel its mysterious depths."
    },
    sarcasm_or_wit: {
      observation: "Writing your password on a post-it note and sticking it to your monitor is the peak of cybersecurity innovation.",
      observation_hi: "पोस्ट-इट नोट पर अपना पासवर्ड लिखकर मॉनिटर पर चिपका देना साइबर सुरक्षा का शिखर है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 7,
    riddle: {
      title: "The Melting Light",
      title_hi: "पिघलती रोशनी",
      question: "I am tall when I am young, and I am short when I am old. What am I?",
      question_hi: "जब मैं युवा होता हूँ तो लंबा होता हूँ, और जब मैं बूढ़ा होता हूँ तो छोटा होता हूँ। मैं क्या हूँ?",
      reveal: "A candle.",
      reveal_hi: "एक मोमबत्ती।"
    },
    joke: {
      setup: "Why did the parallel lines refuse to meet?",
      setup_hi: "समानांतर रेखाओं ने मिलने से क्यों इनकार कर दिया?",
      punchline: "Because they had so much in common, but absolutely no intersection.",
      punchline_hi: "क्योंकि उनमें बहुत कुछ समान था, लेकिन कोई प्रतिच्छेदन (intersection) नहीं था।",
      type: "science"
    },
    fun_fact: {
      fact: "Sloths can slow down their heart rate by a third, allowing them to hold their breath underwater for up to forty minutes. This is longer than the average dolphin, which needs to surface for air after about ten minutes. Their slow metabolism conserves oxygen remarkably well.",
      fact_hi: "सुस्त जानवर (Sloths) पानी के भीतर अपनी सांस को चालीस मिनट तक रोक सकते हैं, जो डॉल्फ़िन से भी अधिक है।",
      why_delightful: "It is a hilarious contrast that the slowest land animal becomes an elite free-diver when placed in a tropical forest river."
    },
    sarcasm_or_wit: {
      observation: "Agreeing to a software update terms of service is our collective modern act of pure, blind faith.",
      observation_hi: "सॉफ्टवेयर अपडेट के नियमों को बिना पढ़े स्वीकार करना आधुनिक समय का सबसे बड़ा अंधविश्वास है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 8,
    riddle: {
      title: "The Silent Teacher",
      title_hi: "मूक शिक्षक",
      question: "I have a spine but no bones. I have leaves but I am not a tree. What am I?",
      question_hi: "मेरी रीढ़ (Spine) है लेकिन कोई हड्डियाँ नहीं। मेरे पास पत्ते (Leaves/पन्ने) हैं लेकिन मैं पेड़ नहीं हूँ। मैं क्या हूँ?",
      reveal: "A book.",
      reveal_hi: "एक किताब।"
    },
    joke: {
      setup: "What do you call a fake noodle?",
      setup_hi: "नकली नूडल को आप क्या कहेंगे?",
      punchline: "An impasta.",
      punchline_hi: "एक इम-पास्ता (धोखेबाज)।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "An average cumulus cloud weighs about one point one million pounds, which is equivalent to about one hundred elephants. Despite this massive weight, the cloud floats because the water droplets composing it are spread out over a huge volume of air that is denser than the cloud itself.",
      fact_hi: "एक औसत बादल का वजन लगभग ग्यारह लाख पाउंड होता है, जो लगभग सौ हाथियों के बराबर है।",
      why_delightful: "It changes how we look at the sky, realizing that massive, invisible weights are floating gracefully right above our heads like soft pillows."
    },
    sarcasm_or_wit: {
      observation: "Lowering the car radio volume while looking for a street address is essential to help our eyes see better.",
      observation_hi: "गली का पता ढूंढते समय कार रेडियो की आवाज़ कम करना हमारी आँखों को बेहतर ढंग से देखने में मदद करने के लिए आवश्यक है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 9,
    riddle: {
      title: "The Heavy Diver",
      title_hi: "भारी गोताखोर",
      question: "You throw me out when you want to use me, and take me in when you are done. What am I?",
      question_hi: "जब आप मेरा उपयोग करना चाहते हैं तो मुझे बाहर फेंक देते हैं, और जब आपका काम हो जाता है तो मुझे अंदर ले लेते हैं। मैं क्या हूँ?",
      reveal: "An anchor.",
      reveal_hi: "एक लंगर (Anchor)।"
    },
    joke: {
      setup: "Why did the banana go to the doctor?",
      setup_hi: "केला डॉक्टर के पास क्यों गया?",
      punchline: "Because it wasn't peeling well, so the doctor turned into a mailbox.",
      punchline_hi: "क्योंकि वह छिल (peeling/अच्छा महसूस) नहीं रहा था, और डॉक्टर मेलबॉक्स बन गया।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "Flamingos are born with grey feathers and slowly turn pink due to their diet of brine shrimp and blue-green algae. These foods contain organic pigments called carotenoids, which are broken down in the liver and deposited in the feathers and skin of the growing bird.",
      fact_hi: "फ्लेमिंगो का जन्म ग्रे पंखों के साथ होता है और उनके आहार (झींगे और शैवाल) के कारण वे गुलाबी हो जाते हैं।",
      why_delightful: "It proves that we literally are what we eat, turning a simple dinner menu into a vibrant, fashion-forward pink costume."
    },
    sarcasm_or_wit: {
      observation: "Checking your phone for the time, locking it, and then instantly forgetting what time it was is a daily superpower.",
      observation_hi: "समय देखने के लिए फोन चेक करना, उसे लॉक करना और तुरंत भूल जाना कि क्या समय था, एक दैनिक महाशक्ति है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 10,
    riddle: {
      title: "The Truth Teller",
      title_hi: "सच बताने वाला",
      question: "I look at you, you look at me. I raise my right hand, you raise your left. What am I?",
      question_hi: "मैं आपको देखता हूँ, आप मुझे देखते हैं। मैं अपना दाहिना हाथ उठाता हूँ, आप अपना बायाँ हाथ उठाते हैं। मैं क्या हूँ?",
      reveal: "A mirror.",
      reveal_hi: "एक दर्पण।"
    },
    joke: {
      setup: "Why do we press harder on the remote control buttons when we know the batteries are dead?",
      setup_hi: "बैटरी खत्म होने के बाद भी हम रिमोट कंट्रोल के बटन पर अधिक जोर क्यों देते हैं?",
      punchline: "Because we hope our physical desperation will somehow recharge the chemical cells.",
      punchline_hi: "क्योंकि हमें उम्मीद होती है कि हमारी शारीरिक हताशा किसी तरह रासायनिक कोशिकाओं को रिचार्ज कर देगी।",
      type: "observational"
    },
    fun_fact: {
      fact: "Linguists have discovered that cows in different regions have distinct accents when they moo. Farmers first noticed that cows in Somerset mooed differently from those in Yorkshire. The variations are learned from the herd, similar to how human accents develop in localized social groups.",
      fact_hi: "भाषाविदों ने पाया है कि अलग-अलग क्षेत्रों की गायों के रंभाने (moo) का लहजा (accent) भी अलग होता है।",
      why_delightful: "It makes you wonder if cows from different countries have trouble understanding each other, adding a social depth to farm animals."
    },
    sarcasm_or_wit: {
      observation: "Staring at the food rotating inside the microwave is the ultimate test of human patience and modern entertainment.",
      observation_hi: "माइक्रोवेव के अंदर घूमते हुए भोजन को घूरना मानव धैर्य और आधुनिक मनोरंजन की अंतिम परीक्षा है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 11,
    riddle: {
      title: "The Silence",
      title_hi: "मौन",
      question: "If you speak my name, you break me. What am I?",
      question_hi: "यदि आप मेरा नाम लेते हैं, तो आप मुझे तोड़ देते हैं। मैं क्या हूँ?",
      reveal: "Silence.",
      reveal_hi: "मौन।"
    },
    joke: {
      setup: "Why do Indian mothers believe that a bowl of hot khichdi can cure everything?",
      setup_hi: "भारतीय माताएं क्यों मानती हैं कि एक कटोरी गर्म खिचड़ी सब कुछ ठीक कर सकती है?",
      punchline: "Because turmeric and ghee are the ultimate spiritual medicine recognized by all mothers.",
      punchline_hi: "क्योंकि हल्दी और घी सभी माताओं द्वारा मान्यता प्राप्त अंतिम आध्यात्मिक औषधि हैं।",
      type: "desi"
    },
    fun_fact: {
      fact: "Venus has an extremely slow rotation on its axis, taking two hundred and forty-three Earth days to complete one single rotation. However, it takes only two hundred and twenty-five Earth days to orbit the Sun. Thus, a day on Venus lasts longer than an entire Venusian year.",
      fact_hi: "शुक्र (Venus) ग्रह पर एक दिन उसके पूरे एक वर्ष से भी अधिक लंबा होता है, क्योंकि इसका घूर्णन बहुत धीमा है।",
      why_delightful: "It challenges our cosmic sense of time, showing that a single sunset can take longer than a trip around the star."
    },
    sarcasm_or_wit: {
      observation: "I have read and agree to the terms and conditions is the biggest lie told in the history of human civilization.",
      observation_hi: "मैंने नियमों और शर्तों को पढ़ लिया है और मैं सहमत हूँ, मानव सभ्यता के इतिहास में बोला गया सबसे बड़ा झूठ है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 12,
    riddle: {
      title: "The Traveling Container",
      title_hi: "यात्रा करने वाला डिब्बा",
      question: "I have a neck but no head, and I wear a cap but have no hair. What am I?",
      question_hi: "मेरी गर्दन है लेकिन सिर नहीं, और मैं टोपी पहनता हूँ लेकिन बाल नहीं हैं। मैं क्या हूँ?",
      reveal: "A bottle.",
      reveal_hi: "एक बोतल।"
    },
    joke: {
      setup: "Why did the tectonic plates break up?",
      setup_hi: "टेक्टोनिक प्लेटों का संबंध क्यों टूट गया?",
      punchline: "It wasn't their fault, there was just too much friction between them.",
      punchline_hi: "यह उनकी गलती (fault) नहीं थी, बस उनके बीच बहुत अधिक घर्षण (friction) था।",
      type: "science"
    },
    fun_fact: {
      fact: "Trees share nutrients and warn each other about pests through an underground network of fungal threads called mycorrhiza. This system, often called the Wood Wide Web, allows older mother trees to nourish younger saplings and coordinate forest-wide defenses against environmental threats and insects.",
      fact_hi: "पेड़ जमीन के नीचे कवक (fungi) के जाल के माध्यम से एक-दूसरे से पोषक तत्व साझा करते हैं और खतरों की चेतावनी देते हैं।",
      why_delightful: "It transforms our view of forests from competitive individuals to a highly cooperative, social community linked by silent threads."
    },
    sarcasm_or_wit: {
      observation: "The laundry basket is a magical portal that generates dirty clothes the minute you finish folding the clean ones.",
      observation_hi: "कपड़ों की टोकरी एक जादुई पोर्टल है जो आपके साफ कपड़ों को मोड़ने के तुरंत बाद गंदे कपड़े पैदा कर देती है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 13,
    riddle: {
      title: "The Golden Key",
      title_hi: "सुनहरी चाबी",
      question: "The more of them you take, the more you leave behind. What are they?",
      question_hi: "आप जितना अधिक आगे बढ़ते हैं, उतने ही अधिक पीछे छोड़ जाते हैं। वे क्या हैं?",
      reveal: "Footsteps.",
      reveal_hi: "कदम।"
    },
    joke: {
      setup: "Why did the scarecrow win an award?",
      setup_hi: "पुतले (Scarecrow) ने पुरस्कार क्यों जीता?",
      punchline: "Because he was outstanding in his field.",
      punchline_hi: "क्योंकि वह अपने क्षेत्र (खेत) में उत्कृष्ट (outstanding) था।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Sharks have been swimming in Earth's oceans for over four hundred million years. This means they have survived five major mass extinction events, making them older than the dinosaurs, and remarkably, even older than the existence of trees on dry land.",
      fact_hi: "शार्क पृथ्वी के महासागरों में चालीस करोड़ वर्षों से रह रही हैं, जो उन्हें पेड़ों और डायनासोर से भी पुराना बनाता है।",
      why_delightful: "It reshapes our biological perspective, showing that these oceanic predators are ancient survivors of time itself."
    },
    sarcasm_or_wit: {
      observation: "Going to bed early so you can get a full eight hours of sleep is the best way to wake up feeling completely exhausted.",
      observation_hi: "आठ घंटे की नींद पूरी करने के लिए जल्दी सो जाना, सुबह पूरी तरह से थका हुआ महसूस करने का सबसे अच्छा तरीका है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 14,
    riddle: {
      title: "The Unseen Voice",
      title_hi: "अदृश्य आवाज",
      question: "I have no voice, yet I can scream. I have no wings, yet I can fly. What am I?",
      question_hi: "मेरी कोई आवाज़ नहीं है, फिर भी मैं चिल्ला सकता हूँ। मेरे कोई पंख नहीं हैं, फिर भी मैं उड़ सकता हूँ। मैं क्या हूँ?",
      reveal: "The wind.",
      reveal_hi: "हवा।"
    },
    joke: {
      setup: "What is the difference between a duck?",
      setup_hi: "एक बत्तख के बीच क्या अंतर है?",
      punchline: "One of its legs is both the same, which makes no sense, just like this question.",
      punchline_hi: "उसका एक पैर दोनों जैसा ही है, जिसका कोई अर्थ नहीं है, बिल्कुल इस प्रश्न की तरह।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "The pleasant, earthy smell that rises from dry soil after rain is called petrichor. It is produced by an organic compound named geosmin, which is released by soil bacteria. Humans are incredibly sensitive to this scent, detecting it at extremely low concentrations.",
      fact_hi: "बारिश के बाद सूखी मिट्टी से आने वाली सोंधी महक को पेट्रीचोर (Petrichor) कहते हैं, जो जियोस्मिन के कारण होती है।",
      why_delightful: "This sensory bond connects us directly to the ancient chemistry of our soil, signaling life and growth."
    },
    sarcasm_or_wit: {
      observation: "Nothing is more humbling than searching for your glasses for ten minutes while wearing them on your head.",
      observation_hi: "सिर पर चश्मा पहनकर दस मिनट तक उसे ढूंढने से ज्यादा विनम्र करने वाला कोई अनुभव नहीं है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 15,
    riddle: {
      title: "The Empty Cage",
      title_hi: "खाली पिंजरा",
      question: "I have space but no room, you can enter but you cannot go outside. What am I?",
      question_hi: "मेरे पास स्पेस है लेकिन कमरा नहीं, आप प्रवेश कर सकते हैं लेकिन बाहर नहीं जा सकते। मैं क्या हूँ?",
      reveal: "A computer keyboard.",
      reveal_hi: "एक कंप्यूटर कीबोर्ड।"
    },
    joke: {
      setup: "Why is the process of getting a USB drive in the right way always a three-step process?",
      setup_hi: "यूएसबी ड्राइव को सही तरीके से लगाने की प्रक्रिया हमेशा तीन चरणों की क्यों होती है?",
      punchline: "Try once, fail; flip it, fail; flip it back to the first way, success.",
      punchline_hi: "एक बार कोशिश करें, विफल; पलटें, विफल; फिर से पहली बार वाले तरीके पर वापस लाएं, सफलता।",
      type: "observational"
    },
    fun_fact: {
      fact: "At Saturn's north pole, there is a permanent hexagonal storm system that is wider than the diameter of two Earths. Discovered by the Voyager spacecraft, this six-sided jet stream has been rotating stably for decades, defying standard atmospheric models.",
      fact_hi: "शनि ग्रह के उत्तरी ध्रुव पर एक स्थायी षट्कोणीय (Hexagonal) तूफान है, जो दो पृथ्वियों से भी बड़ा है।",
      why_delightful: "It proves that nature is a master geometer, crafting massive hexagonal patterns in the freezing winds of deep space."
    },
    sarcasm_or_wit: {
      observation: "Saying 'no offense' right before saying something incredibly offensive is the ultimate social cheat code.",
      observation_hi: "अत्यधिक अपमानजनक बात कहने से ठीक पहले 'बुरा मत मानना' कहना परम सामाजिक ढाल है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 16,
    riddle: {
      title: "The Breath of Life",
      title_hi: "जीवन की सांस",
      question: "I am invisible, yet I can be felt. Without me, you cannot survive for more than a few minutes. What am I?",
      question_hi: "मैं अदृश्य हूँ, फिर भी मुझे महसूस किया जा सकता है। मेरे बिना, आप कुछ मिनटों से अधिक जीवित नहीं रह सकते। मैं क्या हूँ?",
      reveal: "Air.",
      reveal_hi: "हवा (वायु)।"
    },
    joke: {
      setup: "Why do Indian parents keep the plastic cover on the remote control for years?",
      setup_hi: "भारतीय माता-पिता सालों तक रिमोट कंट्रोल पर प्लास्टिक का कवर क्यों चढ़ाए रखते हैं?",
      punchline: "Because they believe that if the remote gets scratched, the TV itself might stop working.",
      punchline_hi: "क्योंकि उनका मानना है कि अगर रिमोट पर खरोंच आ गई, तो टीवी भी काम करना बंद कर सकता है।",
      type: "desi"
    },
    fun_fact: {
      fact: "Hummingbirds are the only birds that can fly backward and upside down. They can flap their wings up to eighty times per second, creating a humming sound. This rapid motion requires immense energy, forcing them to eat twice their body weight daily.",
      fact_hi: "हमिंगबर्ड एकमात्र ऐसे पक्षी हैं जो पीछे की ओर और उल्टे भी उड़ सकते हैं।",
      why_delightful: "These tiny aviators show us that sometimes, moving backward is a highly specialized skill of survival."
    },
    sarcasm_or_wit: {
      observation: "Using the phrase 'per my last email' is the professional equivalent of asking someone if they actually know how to read.",
      observation_hi: "'मेरे पिछले ईमेल के अनुसार' लिखना किसी से यह पूछने का व्यावसायिक तरीका है कि क्या वे पढ़ना जानते हैं।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 17,
    riddle: {
      title: "The Alphabet Box",
      title_hi: "वर्णमाला का डिब्बा",
      question: "What word contains all twenty-six letters of the alphabet but has only three letters?",
      question_hi: "किस शब्द में वर्णमाला के सभी छब्बीस अक्षर शामिल हैं लेकिन उसमें केवल तीन अक्षर हैं?",
      reveal: "Alphabet.",
      reveal_hi: "वर्णमाला (Alphabet)।"
    },
    joke: {
      setup: "Why did the physicist break up with the biologist?",
      setup_hi: "भौतिक विज्ञानी ने जीवविज्ञानी से नाता क्यों तोड़ लिया?",
      punchline: "There was absolutely no chemistry between them.",
      punchline_hi: "उनके बीच कोई रसायन शास्त्र (chemistry) नहीं था।",
      type: "science"
    },
    fun_fact: {
      fact: "During the hot summer months, the Eiffel Tower can grow up to fifteen centimeters taller. This height increase occurs because the thermal expansion of the iron structure causes it to expand as the metal absorbs solar heat and contracts in winter cold.",
      fact_hi: "गर्मियों के दौरान थर्मल विस्तार (thermal expansion) के कारण एफिल टॉवर पंद्रह सेंटीमीटर तक बढ़ सकता है।",
      why_delightful: "It makes a static monument feel alive, stretching to reach the sun in summer and shrinking back in winter."
    },
    sarcasm_or_wit: {
      observation: "Working from home is great because you can replace the stress of your commute with the stress of staring at your bed.",
      observation_hi: "वर्क फ्रॉम होम बहुत अच्छा है क्योंकि आप आने-जाने के तनाव को अपने बिस्तर को घूरने के तनाव से बदल सकते हैं।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 18,
    riddle: {
      title: "The Eternal River",
      title_hi: "शाश्वत नदी",
      question: "I have a bed but never sleep, and I have a mouth but never speak. What am I?",
      question_hi: "मेरे पास बिस्तर (Bed/तल) है लेकिन मैं सोता नहीं, और मेरा मुँह है लेकिन मैं बोलता नहीं। मैं क्या हूँ?",
      reveal: "A river.",
      reveal_hi: "एक नदी।"
    },
    joke: {
      setup: "What do you call a sleeping bull?",
      setup_hi: "सोते हुए सांड को आप क्या कहेंगे?",
      punchline: "A bulldozer.",
      punchline_hi: "एक बुलडोजर।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Koalas have unique fingerprints that are almost indistinguishable from human fingerprints, even under an electron microscope. This similarity is so strong that police officers have occasionally worried that koala prints could contaminate crime scenes in the Australian forests.",
      fact_hi: "कोआला के फिंगरप्रिंट इंसानों के इतने समान होते हैं कि माइक्रोस्कोप से भी अंतर करना मुश्किल होता है।",
      why_delightful: "It is a charming twist of evolution that a tiny marsupial shares our most unique physical identifier."
    },
    sarcasm_or_wit: {
      observation: "Telling your dog 'I'll be right back' is a legally binding contract that must be honored at all costs.",
      observation_hi: "अपने कुत्ते से 'मैं अभी वापस आऊंगा' कहना एक कानूनी रूप से बाध्यकारी समझौता है जिसका पालन होना ही चाहिए।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 19,
    riddle: {
      title: "The Sharp Eye",
      title_hi: "तेज आंख",
      question: "I have one eye but cannot see, and a long tail that flows through me. What am I?",
      question_hi: "मेरी एक आँख है लेकिन मैं देख नहीं सकता, और मेरे माध्यम से एक लंबी पूंछ बहती है। मैं क्या हूँ?",
      reveal: "A needle.",
      reveal_hi: "एक सुई।"
    },
    joke: {
      setup: "Why did the vacuum cleaner get fired from its job?",
      setup_hi: "वैक्यूम क्लीनर को नौकरी से क्यों निकाल दिया गया?",
      punchline: "It was collecting dust, which was its job description, but the dust had not paid any rent.",
      punchline_hi: "वह धूल जमा कर रहा था, जो कि उसका काम था, लेकिन धूल ने कोई किराया नहीं दिया था।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "Apollo astronauts reported that moon dust smells surprisingly like spent gunpowder. This scent is particularly noticeable when they returned to the lunar module and removed their helmets, exposing themselves to the fine abrasive particles brought in on their spacesuits.",
      fact_hi: "अपोलो अंतरिक्ष यात्रियों ने बताया कि चांद की धूल से जले हुए बारूद जैसी गंध आती है।",
      why_delightful: "It brings a sensory dimension to space exploration, connecting the distant moon with a familiar earthly smell."
    },
    sarcasm_or_wit: {
      observation: "Waking up ten minutes before your alarm rings is the universe's way of showing you that it has a personal grudge.",
      observation_hi: "अलार्म बजने से दस मिनट पहले जाग जाना ब्रह्मांड का यह दिखाने का तरीका है कि उसकी आपसे निजी दुश्मनी है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 20,
    riddle: {
      title: "The White Keys",
      title_hi: "सफेद चाबियां",
      question: "Thirty white horses on a red hill. First they champ, then they stamp, then they stand still. What are they?",
      question_hi: "एक लाल पहाड़ी पर तीस सफेद घोड़े। पहले वे चबाते हैं, फिर वे पैर पटकते हैं, फिर वे स्थिर खड़े हो जाते हैं। वे क्या हैं?",
      reveal: "Teeth.",
      reveal_hi: "दांत।"
    },
    joke: {
      setup: "Why did you lower the radio volume when parking?",
      setup_hi: "गाड़ी पार्क करते समय आपने रेडियो की आवाज़ क्यों कम की?",
      punchline: "Because I cannot see the white lines properly when the music is too loud.",
      punchline_hi: "क्योंकि जब संगीत बहुत तेज़ होता है तो मुझे सफ़ेद रेखाएँ ठीक से दिखाई नहीं देतीं।",
      type: "observational"
    },
    fun_fact: {
      fact: "It takes almost two years for a single pineapple to grow from seed to maturity. Each plant produces only one pineapple at a time, emerging from the center of a cluster of spiky leaves, requiring patience from farmers.",
      fact_hi: "एक अनानास को पूरी तरह उगने में लगभग दो साल का समय लगता है, और एक पौधे से एक ही फल मिलता है।",
      why_delightful: "It reminds us that the sweetest things in life cannot be rushed and require their own natural season."
    },
    sarcasm_or_wit: {
      observation: "The chair in your bedroom is not for sitting; it is a temporary holding zone for clothes that are too dirty for the closet but too clean for the wash.",
      observation_hi: "बेडरूम की कुर्सी बैठने के लिए नहीं है; यह उन कपड़ों के लिए है जो कोठरी के लिए बहुत गंदे और धोने के लिए बहुत साफ हैं।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 21,
    riddle: {
      title: "The Hidden Truth",
      title_hi: "छिपा हुआ सच",
      question: "If you have it, you want to share it. If you share it, you don't have it. What is it?",
      question_hi: "यदि यह आपके पास है, तो आप इसे साझा करना चाहते हैं। यदि आप इसे साझा करते हैं, तो यह आपके पास नहीं रहता। यह क्या है?",
      reveal: "A secret.",
      reveal_hi: "एक रहस्य (Secret)।"
    },
    joke: {
      setup: "Why do we bargain with a roadside vendor for ten rupees but pay fifty rupees tip at a fancy cafe?",
      setup_hi: "हम सड़क किनारे रेहड़ी-पटरी वाले से दस रुपये के लिए सौदेबाजी क्यों करते हैं लेकिन फैंसी कैफे में पचास रुपये टिप देते हैं?",
      punchline: "Because bargaining is a cultural emotion of victory, while tipping is just a transaction.",
      punchline_hi: "क्योंकि सौदेबाजी जीत की एक सांस्कृतिक भावना है, जबकि टिप देना सिर्फ एक लेन-देन है।",
      type: "desi"
    },
    fun_fact: {
      fact: "Tardigrades, also known as water bears, are microscopic animals that can survive the vacuum of space, extreme radiation, boiling temperatures, and pressure six times greater than the deepest ocean trench by entering a state of suspended animation called cryptobiosis.",
      fact_hi: "टार्डिग्रेड्स (जल भालू) सूक्ष्म जीव हैं जो अंतरिक्ष के निर्वात और अत्यधिक तापमान में भी जीवित रह सकते हैं।",
      why_delightful: "It shows that life is incredibly resilient, carrying a microscopic suit of armor that can withstand cosmic extremes."
    },
    sarcasm_or_wit: {
      observation: "Nothing brings more pure, unadulterated joy than cancelling plans you never wanted to attend in the first place.",
      observation_hi: "उन योजनाओं को रद्द करने से ज्यादा शुद्ध खुशी कुछ नहीं मिलती जिनमें आप कभी जाना ही नहीं चाहते थे।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 22,
    riddle: {
      title: "The Wet Blanket",
      title_hi: "गीला कंबल",
      question: "I get wetter the more I dry. What am I?",
      question_hi: "मैं जितना अधिक सुखाता हूँ, उतना ही गीला हो जाता हूँ। मैं क्या हूँ?",
      reveal: "A towel.",
      reveal_hi: "एक तौलिया।"
    },
    joke: {
      setup: "What does a subatomic particle say when it loses its electron?",
      setup_hi: "एक उपपरमाण्विक कण अपना इलेक्ट्रॉन खोने पर क्या कहता है?",
      punchline: "I'm positive!",
      punchline_hi: "मैं सकारात्मक (धनात्मक) हूँ!",
      type: "science"
    },
    fun_fact: {
      fact: "Butterflies taste their food using sensory receptors located on their feet. When they land on a plant, they tap it with their legs to release juices and determine if the leaves are suitable for eating or laying eggs for their caterpillars.",
      fact_hi: "तितलियाँ अपने पैरों में मौजूद रिसेप्टर्स से स्वाद चखती हैं ताकि वे जान सकें कि पत्तियां खाने योग्य हैं या नहीं।",
      why_delightful: "It makes walking feel like a culinary adventure, tasting the earth with every single step you take."
    },
    sarcasm_or_wit: {
      observation: "Keeping thirty browser tabs open simultaneously is a great way to ensure you never finish any of the tasks you started.",
      observation_hi: "एक साथ तीस ब्राउज़र टैब खुले रखना यह सुनिश्चित करने का एक शानदार तरीका है कि आप शुरू किया गया कोई काम कभी पूरा न करें।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 23,
    riddle: {
      title: "The Fragile House",
      title_hi: "नाजुक घर",
      question: "A box without hinges, key, or lid, yet golden treasure inside is hid. What am I?",
      question_hi: "बिना कब्जों, चाबी या ढक्कन का एक डिब्बा, फिर भी भीतर सोने का खजाना छिपा है। मैं क्या हूँ?",
      reveal: "An egg.",
      reveal_hi: "एक अंडा।"
    },
    joke: {
      setup: "Why did the tomato turn red?",
      setup_hi: "टमाटर लाल क्यों हो गया?",
      punchline: "Because it saw the salad dressing.",
      punchline_hi: "क्योंकि उसने सलाद की ड्रेसिंग (कपड़े बदलना/सजावट) देख ली थी।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Most of the water on Earth has been recycled through biological and geological systems for billions of years. This means the glass of water you are drinking today likely contains molecules that once passed through a dinosaur millions of years ago.",
      fact_hi: "पृथ्वी पर अधिकांश पानी अरबों वर्षों से चक्रित हो रहा है, यानी आज जो पानी आप पी रहे हैं वह कभी डायनासोर ने पिया होगा।",
      why_delightful: "It connects us across eras, linking our daily hydration with the prehistoric beasts that once walked the planet."
    },
    sarcasm_or_wit: {
      observation: "Buying books and reading books are two entirely separate, unrelated hobbies that require different amounts of time.",
      observation_hi: "किताबें खरीदना और किताबें पढ़ना दो बिल्कुल अलग और असंबंधित शौक हैं जिनमें अलग समय की आवश्यकता होती है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 24,
    riddle: {
      title: "The Sky Screen",
      title_hi: "आकाश की खिड़की",
      question: "I have no hinges, but I open and close. I have no eyes, but I let you see. What am I?",
      question_hi: "मेरे पास कोई कब्जे नहीं हैं, लेकिन मैं खुलता और बंद होता हूँ। मेरी कोई आँखें नहीं हैं, लेकिन मैं आपको देखने देता हूँ। मैं क्या हूँ?",
      reveal: "A window.",
      reveal_hi: "एक खिड़की।"
    },
    joke: {
      setup: "Why did the tree decide to learn how to play the violin?",
      setup_hi: "पेड़ ने वायलिन बजाना सीखने का फैसला क्यों किया?",
      punchline: "It sounded a bit woody, mostly because it was using its own branch as a bow.",
      punchline_hi: "यह थोड़ा लकड़ी जैसा लग रहा था, क्योंकि वह अपनी ही शाखा को धनुष की तरह इस्तेमाल कर रहा था।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "Lobsters chew their food using a structures located inside their stomachs, known as the gastric mill. This system consists of three grinding surfaces that act like teeth to break down hard shells and crabs before further digestion occurs.",
      fact_hi: "लॉबस्टर अपने पेट के अंदर मौजूद 'गैस्ट्रिक मिल' से अपना भोजन चबाते हैं, जो दांतों की तरह काम करता है।",
      why_delightful: "It turns the stomach into a microscopic kitchen blender, processing meals in the dark depths of the sea."
    },
    sarcasm_or_wit: {
      observation: "Typing 'hahaha' with a completely blank, expressionless face is the ultimate testament to human emotional evolution.",
      observation_hi: "पूरी तरह से सपाट और बिना किसी भाव वाले चेहरे के साथ 'हाहाहा' टाइप करना मानवीय भावनाओं के विकास का प्रमाण है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 25,
    riddle: {
      title: "The Border Guard",
      title_hi: "सीमा रक्षक",
      question: "I run all around the backyard, yet I never move. What am I?",
      question_hi: "मैं पिछवाड़े के चारों ओर दौड़ता हूँ, फिर भी कभी हिलता नहीं। मैं क्या हूँ?",
      reveal: "A fence.",
      reveal_hi: "एक बाड़ (Fence)।"
    },
    joke: {
      setup: "Why does the shopping cart always have one wheel that wants to explore its own path?",
      setup_hi: "शॉपिंग कार्ट का एक पहिया हमेशा अपने रास्ते पर क्यों जाना चाहता है?",
      punchline: "Because it's the only wheel that wants to break free from the capitalist system.",
      punchline_hi: "क्योंकि यह एकमात्र पहिया है जो पूंजीवादी व्यवस्था से मुक्त होना चाहता है।",
      type: "observational"
    },
    fun_fact: {
      fact: "Thousands of years ago, the Sahara Desert was a lush, green landscape covered with lakes, rivers, and forests. Cave paintings in the region depict hippos, crocodiles, and elephants, proving that earth's climate patterns shift dramatically over long geological epochs.",
      fact_hi: "हजारों साल पहले सहारा मरुस्थल एक हरा-भरा इलाका था जहाँ झीलें और नदियाँ थीं, जैसा कि वहाँ की गुफा चित्रों से पता चलता है।",
      why_delightful: "It shows that nature has a long memory, and even the driest sands were once home to swimming giants."
    },
    sarcasm_or_wit: {
      observation: "Putting your phone in your pocket, only to pull it out three seconds later to check if you have any messages, is a daily ritual.",
      observation_hi: "अपने फोन को जेब में रखना, और तीन सेकंड बाद संदेशों की जांच करने के लिए बाहर निकालना, एक दैनिक अनुष्ठान है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 26,
    riddle: {
      title: "The Silent Step",
      title_hi: "मूक कदम",
      question: "The more you walk on me, the more you leave behind, yet I have no shape of my own. What am I?",
      question_hi: "आप मुझ पर जितना अधिक चलते हैं, उतना ही अधिक पीछे छोड़ जाते हैं, फिर भी मेरा अपना कोई आकार नहीं है। मैं क्या हूँ?",
      reveal: "Footprints.",
      reveal_hi: "पैरों के निशान।"
    },
    joke: {
      setup: "Why does every Indian wedding have a relative whose sole job is to look slightly offended?",
      setup_hi: "हर भारतीय शादी में एक ऐसा रिश्तेदार क्यों होता है जिसका काम थोड़ा नाराज दिखना होता है?",
      punchline: "To maintain the delicate, traditional ecosystem of family drama and respect.",
      punchline_hi: "पारिवारिक नाटक और सम्मान के नाजुक, पारंपरिक पारिस्थितिकी तंत्र को बनाए रखने के लिए।",
      type: "desi"
    },
    fun_fact: {
      fact: "Every single snowflake possesses a unique structure, but they all share one fundamental rule: they have exactly six sides. This hexagonal symmetry is dictated by the chemical structure of water molecules as they freeze into ice crystals in the cold upper atmosphere.",
      fact_hi: "हर बर्फ के टुकड़े की संरचना अलग होती है, लेकिन पानी के अणुओं के कारण उन सभी के छह पक्ष (sides) होते हैं।",
      why_delightful: "It shows that while nature encourages infinite diversity, it maintains a strict, underlying geometric order."
    },
    sarcasm_or_wit: {
      observation: "Eating a salad but adding enough cheese, croutons, and dressing to make it equivalent to a double cheeseburger is a lifestyle choice.",
      observation_hi: "सलाद खाना लेकिन उसमें पनीर और ड्रेसिंग मिलाकर उसे डबल चीज़बर्गर के बराबर बना देना एक जीवन शैली विकल्प है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 27,
    riddle: {
      title: "The Unspeakable",
      title_hi: "अकथनीय",
      question: "I am always with you, but if you mention my name, I am gone. What am I?",
      question_hi: "मैं हमेशा तुम्हारे साथ हूँ, लेकिन यदि तुम मेरा नाम लेते हो, तो मैं चला जाता हूँ। मैं क्या हूँ?",
      reveal: "Silence.",
      reveal_hi: "मौन।"
    },
    joke: {
      setup: "Why did the helium atom refuse to react with the fluorine atom?",
      setup_hi: "हीलियम परमाणु ने फ्लोरीन परमाणु के साथ प्रतिक्रिया करने से क्यों इनकार कर दिया?",
      punchline: "Because he was noble, and she was far too reactive for his taste.",
      punchline_hi: "क्योंकि वह कुलीन (noble) था, और वह उसके स्वाद के लिए बहुत अधिक प्रतिक्रियाशील (reactive) थी।",
      type: "science"
    },
    fun_fact: {
      fact: "Certain species of land snails can enter a state of deep hibernation that lasts for up to three years when environmental conditions are unfavorable. During this prolonged sleep, their metabolic rate drops to almost zero to conserve moisture and energy.",
      fact_hi: "प्रतिकूल मौसम में कुछ घोंघे (Snails) तीन साल तक सो सकते हैं, जिससे उनका मेटाबॉलिज्म लगभग शून्य हो जाता है।",
      why_delightful: "It makes our Sunday afternoon naps look like a brief blink of an eye compared to this slow-paced dream."
    },
    sarcasm_or_wit: {
      observation: "Cleaning your entire house right before the house cleaner arrives is the ultimate social anxiety flex.",
      observation_hi: "घर के नौकर के आने से ठीक पहले पूरे घर की सफाई करना सामाजिक चिंता का चरम उदाहरण है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 28,
    riddle: {
      title: "The Dark Valley",
      title_hi: "अंधेरी घाटी",
      question: "The hand of the sun created me, but if the sun shines directly on me, I am destroyed. What am I?",
      question_hi: "सूर्य के हाथ ने मुझे बनाया है, लेकिन यदि सूर्य सीधे मुझ पर चमके, तो मैं नष्ट हो जाता हूँ। मैं क्या हूँ?",
      reveal: "A shadow.",
      reveal_hi: "एक परछाई।"
    },
    joke: {
      setup: "What did the ocean say to the shore when it arrived?",
      setup_hi: "समुद्र ने किनारे पर पहुँचकर उससे क्या कहा?",
      punchline: "Nothing, it just waved and left quietly.",
      punchline_hi: "कुछ नहीं, उसने बस हाथ हिलाया (लहर उठी) और चुपचाप चला गया।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Fitzroy River turtles possess specialized sacs in their cloaca that allow them to absorb oxygen directly from water. This process, known as cloacal respiration, enables the turtles to remain submerged for up to three weeks without surfacing for air.",
      fact_hi: "फिट्ज़रॉय नदी के कछुए पानी के भीतर अपनी पूंछ के पिछले हिस्से से सांस ले सकते हैं और हफ्तों डूबे रह सकते हैं।",
      why_delightful: "It is an bizarre anatomical shortcut that shows nature will always find a way to breathe, no matter the route."
    },
    sarcasm_or_wit: {
      observation: "Ironing your clothes with a hot tea mug is the kind of engineering degree application they don't teach you in college.",
      observation_hi: "गर्म चाय के प्याले से अपने कपड़ों पर इस्त्री करना उस इंजीनियरिंग का उदाहरण है जो कॉलेज में नहीं सिखाई जाती।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 29,
    riddle: {
      title: "The Wind Turner",
      title_hi: "हवा का चक्र",
      question: "I have blades but no knives. I turn with the wind but never move from my spot. What am I?",
      question_hi: "मेरे पास ब्लेड (पंखे) हैं लेकिन चाकू नहीं। मैं हवा के साथ घूमता हूँ लेकिन अपनी जगह से कभी नहीं हिलता। मैं क्या हूँ?",
      reveal: "A windmill.",
      reveal_hi: "एक पवनचक्की (Windmill)।"
    },
    joke: {
      setup: "A man asks his reflection for directions to the train station.",
      setup_hi: "एक व्यक्ति ने अपने प्रतिबिंब से रेलवे स्टेशन का रास्ता पूछा।",
      punchline: "The reflection points left, but then they both realize they live in a mirror.",
      punchline_hi: "प्रतिबिंब ने बाईं ओर इशारा किया, लेकिन फिर दोनों को एहसास हुआ कि वे एक दर्पण में रहते हैं।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "Honeybees have the cognitive ability to recognize individual human faces. Researchers trained bees using sugar rewards associated with specific photographs, showing that their miniature brains process visual information in a manner similar to mammals, despite having fewer neurons.",
      fact_hi: "मधुमक्खियों में इंसानी चेहरों को पहचानने की संज्ञानात्मक क्षमता होती है, जो उनके छोटे दिमाग की शक्ति को दर्शाती है।",
      why_delightful: "It is humbling to realize that a bee visiting your garden might actually remember you from the day before."
    },
    sarcasm_or_wit: {
      observation: "Re-reading an email you just sent to check if it sounds professional is a form of self-inflicted psychological torture.",
      observation_hi: "भेजे गए ईमेल को यह जांचने के लिए दोबारा पढ़ना कि वह पेशेवर लग रहा है या नहीं, एक मानसिक प्रताड़ना है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 30,
    riddle: {
      title: "The Stamp Stamp",
      title_hi: "टिकट टिकट",
      question: "I travel all over the world, yet I stay in one tiny corner. What am I?",
      question_hi: "मैं पूरी दुनिया में यात्रा करता हूँ, फिर भी एक छोटे से कोने में ही रहता हूँ। मैं क्या हूँ?",
      reveal: "A postage stamp.",
      reveal_hi: "एक डाक टिकट।"
    },
    joke: {
      setup: "Why do we agree to software updates without reading the terms?",
      setup_hi: "हम बिना नियमों को पढ़े सॉफ्टवेयर अपडेट के लिए क्यों सहमत हो जाते हैं?",
      punchline: "Because we are willing to sign away our firstborn to get rid of a pop-up window.",
      punchline_hi: "क्योंकि हम पॉप-अप विंडो से छुटकारा पाने के लिए अपने अधिकारों को छोड़ने के लिए भी तैयार हैं।",
      type: "observational"
    },
    fun_fact: {
      fact: "Bananas grow pointing upward against gravity in a process called negative geotropism. The fruit curves toward the sun to receive more light, which explains their characteristic curved shape rather than growing straight down like other hanging fruits.",
      fact_hi: "केले गुरुत्वाकर्षण के विपरीत ऊपर की ओर बढ़ते हैं (negative geotropism), जिससे उनका आकार मुड़ा हुआ हो जाता है।",
      why_delightful: "It shows that even plants have their own architectural ambition, bending themselves to catch the warm sunlight."
    },
    sarcasm_or_wit: {
      observation: "Leaving a voicemail in the twenty-first century is the communication equivalent of sending a message in a bottle.",
      observation_hi: "इक्कीसवीं सदी में वॉयस मेल छोड़ना बोतल में संदेश भेजने के संचार के समान है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 31,
    riddle: {
      title: "The Tooth Comb",
      title_hi: "दांतों वाली कंघी",
      question: "I have many teeth but cannot bite. What am I?",
      question_hi: "मेरे बहुत सारे दांत हैं लेकिन मैं काट नहीं सकता। मैं क्या हूँ?",
      reveal: "A comb.",
      reveal_hi: "एक कंघी।"
    },
    joke: {
      setup: "What is the official speed limit on most Indian roads?",
      setup_hi: "अधिकांश भारतीय सड़कों पर आधिकारिक गति सीमा क्या है?",
      punchline: "Whatever the cow sitting in the middle of the road decides at that moment.",
      punchline_hi: "सड़क के बीचों-बीच बैठी गाय उस पल जो भी फैसला करे।",
      type: "desi"
    },
    fun_fact: {
      fact: "Cats possess thirty-two individual muscles in each of their ears. These muscles allow them to rotate their ears one hundred and eighty degrees independently, helping them pinpoint the precise location of tiny sounds like mice rustling in the grass.",
      fact_hi: "बिल्लियों के प्रत्येक कान में बत्तीस मांसपेशियां होती हैं, जिससे वे उन्हें 180 डिग्री तक घुमा सकती हैं।",
      why_delightful: "It turns their ears into two independent radar dishes, scanning the environment for the quietest sounds of life."
    },
    sarcasm_or_wit: {
      observation: "Pretending to look at your phone to avoid eye contact with someone you know in public is a peak social survival skill.",
      observation_hi: "सार्वजनिक स्थान पर किसी परिचित से आँख मिलाने से बचने के लिए अपने फोन को देखने का नाटक करना एक बड़ा कौशल है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 32,
    riddle: {
      title: "The Sky Water",
      title_hi: "आकाश का पानी",
      question: "I fall from the sky but have no wings, and I water the earth but have no hose. What am I?",
      question_hi: "मैं आकाश से गिरता हूँ लेकिन मेरे पंख नहीं हैं, और मैं पृथ्वी को सींचता हूँ लेकिन मेरे पास कोई नली नहीं है। मैं क्या हूँ?",
      reveal: "Rain.",
      reveal_hi: "बारिश (वर्षा)।"
    },
    joke: {
      setup: "There are ten types of people in this world.",
      setup_hi: "इस दुनिया में दस तरह के लोग होते हैं।",
      punchline: "Those who understand binary, and those who don't.",
      punchline_hi: "वे जो बाइनरी को समझते हैं, और वे जो नहीं समझते।",
      type: "science"
    },
    fun_fact: {
      fact: "The platypus exhibits biofluorescence, glowing a bluish-green color under ultraviolet light. This trait is caused by pigments in its waterproof fur that absorb UV light and re-emit it as visible color, a phenomenon also observed in wombats.",
      fact_hi: "प्लैटिपस पराबैंगनी (UV) प्रकाश के तहत एक नीली-हरी चमक (Biofluorescence) बिखेरता है, जो बहुत दुर्लभ है।",
      why_delightful: "It makes this already strange, egg-laying mammal look like a neon-lit rave prop from a cosmic party."
    },
    sarcasm_or_wit: {
      observation: "Reading three hundred reviews for a twenty-rupee item is how we exercise our deep financial wisdom.",
      observation_hi: "बीस रुपये की वस्तु के लिए तीन सौ समीक्षाएं पढ़ना हमारी गहरी वित्तीय बुद्धिमत्ता का प्रदर्शन है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 33,
    riddle: {
      title: "The Sad Book",
      title_hi: "उदास किताब",
      question: "Why did the math book look sad?",
      question_hi: "गणित की किताब उदास क्यों दिख रही थी?",
      reveal: "Because it had too many problems.",
      reveal_hi: "क्योंकि उसमें बहुत सारी समस्याएँ (Problems) थीं।"
    },
    joke: {
      setup: "Why did the golfer bring two pairs of pants to the tournament?",
      setup_hi: "गोल्फर टूर्नामेंट में दो जोड़ी पैंट क्यों लाया?",
      punchline: "In case he got a hole in one.",
      punchline_hi: "इस मामले में कि उसे एक में छेद (Hole in one/सफलता) मिल जाए।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Sharks are composed entirely of cartilage rather than bone, which is the same flexible material that makes up human ears and noses. This lightweight skeleton allows them to save energy and move quickly through the ocean currents.",
      fact_hi: "शार्क के शरीर में एक भी हड्डी नहीं होती; उनका कंकाल पूरी तरह से लचीली उपास्थि (Cartilage) से बना होता है।",
      why_delightful: "It means these fierce ocean hunters are structurally as flexible and soft as the tip of your own nose."
    },
    sarcasm_or_wit: {
      observation: "Setting five alarms in the morning is a great way to ensure you experience the trauma of waking up five times.",
      observation_hi: "सुबह पांच अलार्म सेट करना यह सुनिश्चित करने का तरीका है कि आप जागने के आघात को पांच बार महसूस करें।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 34,
    riddle: {
      title: "The Step Steps",
      title_hi: "सीढ़ी की सीढ़ियाँ",
      question: "I go up and down but never move. What am I?",
      question_hi: "मैं ऊपर-नीचे जाता हूँ लेकिन कभी हिलता नहीं। मैं क्या हूँ?",
      reveal: "A staircase.",
      reveal_hi: "एक सीढ़ी (Staircase)।"
    },
    joke: {
      setup: "A horse walks into a bar and the bartender asks, 'Why the long face?'",
      setup_hi: "एक घोड़ा बार में जाता है और बारटेंडर पूछता है, 'चेहरा इतना लंबा क्यों है?'",
      punchline: "The horse replies, 'I have a highly complex emotional inner life that you cannot comprehend.'",
      punchline_hi: "घोड़ा उत्तर देता है, 'मेरा एक अत्यधिक जटिल भावनात्मक आंतरिक जीवन है जिसे तुम समझ नहीं सकते।'",
      type: "absurdist"
    },
    fun_fact: {
      fact: "Raindrops fall at an average speed of ten miles per hour. The speed depends on the size of the droplet, with larger drops falling faster due to gravity, while smaller drops drift slowly through the air resistance before landing.",
      fact_hi: "बारिश की बूंदें औसतन दस मील प्रति घंटे की गति से गिरती हैं, जो उनके आकार पर निर्भर करता है।",
      why_delightful: "It means a rain shower is a gentle bombardment of thousands of tiny water capsules landing softy on our skin."
    },
    sarcasm_or_wit: {
      observation: "Nodding along in agreement when you have absolutely no idea what the other person just said is a key conversation skill.",
      observation_hi: "जब आपको पता न हो कि सामने वाले ने क्या कहा, तो सहमति में सिर हिलाना बातचीत का एक बड़ा कौशल है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 35,
    riddle: {
      title: "The Cry Maker",
      title_hi: "रुलाने वाला",
      question: "You strip my skin and I make you cry, yet I have no heart or feelings. What am I?",
      question_hi: "तुम मेरी त्वचा उतारते हो और मैं तुम्हें रुलाता हूँ, फिर भी मेरा कोई दिल या भावनाएँ नहीं हैं। मैं क्या हूँ?",
      reveal: "An onion.",
      reveal_hi: "एक प्याज।"
    },
    joke: {
      setup: "Why do we text 'on my way' when we are still in bed?",
      setup_hi: "जब हम बिस्तर पर होते हैं तब भी हम 'रास्ते में हूँ' का मैसेज क्यों भेजते हैं?",
      punchline: "Because mentally, we have already started the journey of getting up and putting on clothes.",
      punchline_hi: "क्योंकि मानसिक रूप से, हमने उठने और कपड़े पहनने की यात्रा पहले ही शुरू कर दी है।",
      type: "observational"
    },
    fun_fact: {
      fact: "The Sun contains ninety-nine point eight percent of all the mass in our solar system. The remaining fraction is split among the planets, asteroids, and moons, making Jupiter the largest shareholder of the tiny remnant of cosmic matter.",
      fact_hi: "हमारे सौर मंडल के कुल द्रव्यमान का 99.8% हिस्सा अकेले सूर्य में है, बाकी में सभी ग्रह आते हैं।",
      why_delightful: "It reminds us that our solid Earth is just a tiny speck of dust revolving around a massive ball of light."
    },
    sarcasm_or_wit: {
      observation: "Putting an item in a 'safe place' is the most effective way to ensure it will never be seen again by human eyes.",
      observation_hi: "किसी वस्तु को 'सुरक्षित स्थान' पर रखना यह सुनिश्चित करने का सबसे प्रभावी तरीका है कि वह फिर कभी न मिले।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 36,
    riddle: {
      title: "The Bottomless Hole",
      title_hi: "बिना पेंदे का गड्ढा",
      question: "What has a bottom at the top, and a mouth at the bottom?",
      question_hi: "किसके पास शीर्ष पर नीचे का हिस्सा (bottom) और तल पर मुँह (mouth) होता है?",
      reveal: "A leg.",
      reveal_hi: "एक पैर।"
    },
    joke: {
      setup: "Why do we buy extra green chillies and coriander from the vegetable vendor?",
      setup_hi: "हम सब्जी विक्रेता से अतिरिक्त हरी मिर्च और धनिया मुफ्त में क्यों लेते हैं?",
      punchline: "Because getting them for free is not a transaction, it is our historical birthright.",
      punchline_hi: "क्योंकि उन्हें मुफ्त में प्राप्त करना एक लेन-देन नहीं है, यह हमारा ऐतिहासिक जन्मसिद्ध अधिकार है।",
      type: "desi"
    },
    fun_fact: {
      fact: "A single bolt of lightning contains enough energy to heat the surrounding air to fifty thousand degrees Fahrenheit, which is five times hotter than the surface of the sun, causing the rapid expansion of air we hear as thunder.",
      fact_hi: "बिजली की एक कौंध हवा को 50,000 डिग्री फ़ारेनहाइट तक गर्म कर सकती है, जो सूर्य की सतह से पांच गुना गर्म है।",
      why_delightful: "It shows that the heavens flash with temperatures hotter than stars, right in our own atmosphere during storms."
    },
    sarcasm_or_wit: {
      observation: "Apologizing to a piece of furniture when you accidentally bump into it is the height of polite civilization.",
      observation_hi: "जब आप गलती से किसी फर्नीचर से टकरा जाएं तो उससे माफी मांगना विनम्र सभ्यता की पराकाष्ठा है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 37,
    riddle: {
      title: "The Small Teapot",
      title_hi: "छोटा केतली",
      question: "I have a spout but cannot pour, and a handle but cannot hold. What am I?",
      question_hi: "मेरी एक टोंटी (Spout) है लेकिन मैं डाल नहीं सकता, और एक हैंडल है लेकिन मैं पकड़ नहीं सकता। मैं क्या हूँ?",
      reveal: "A teapot.",
      reveal_hi: "एक केतली।"
    },
    joke: {
      setup: "How does a physicist exercise at the gym?",
      setup_hi: "एक भौतिक विज्ञानी जिम में व्यायाम कैसे करता है?",
      punchline: "By doing work, which is force times displacement, even if they end up in the exact same spot.",
      punchline_hi: "कार्य (work) करके, जो बल गुणा विस्थापन है, भले ही वे अंत में उसी स्थान पर समाप्त हों।",
      type: "science"
    },
    fun_fact: {
      fact: "All the gold present on Earth originated from the collisions of neutron stars and supernova explosions billions of years ago. These cosmic events forged heavy metals that were incorporated into Earth during its formation from space dust.",
      fact_hi: "पृथ्वी पर मौजूद सारा सोना अरबों साल पहले न्यूट्रॉन सितारों की टक्कर और सुपरनोवा विस्फोटों से बना था।",
      why_delightful: "It means that the gold ring on your finger is literally forged in the heart of dying cosmic stars."
    },
    sarcasm_or_wit: {
      observation: "Staring at your email inbox expecting new emails to arrive is the modern version of watching paint dry.",
      observation_hi: "नए ईमेल आने की उम्मीद में अपने इनबॉक्स को घूरना पेंट सूखने को देखने का आधुनिक संस्करण है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 38,
    riddle: {
      title: "The Twin Twin",
      title_hi: "जुड़वां भाई",
      question: "I look at you, you look at me. I smile, you smile. I cannot speak, but I copy everything you do. What am I?",
      question_hi: "मैं आपको देखता हूँ, आप मुझे देखते हैं। मैं मुस्कुराता हूँ, आप मुस्कुराते हैं। मैं बोल नहीं सकता, लेकिन मैं आपकी हर हरकत की नकल करता हूँ। मैं क्या हूँ?",
      reveal: "A mirror.",
      reveal_hi: "एक दर्पण।"
    },
    joke: {
      setup: "What do you call a bear with no teeth?",
      setup_hi: "बिना दांत वाले भालू को आप क्या कहेंगे?",
      punchline: "A gummy bear.",
      punchline_hi: "एक चिपचिपा भालू (Gummy bear)।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Studies show that chronic sleep deprivation can have severe biological effects on rats, leading to weight loss and system failure. Their immune system degrades rapidly without sleep, proving that rest is essential for maintaining physical functions and homeostasis.",
      fact_hi: "अध्ययनों से पता चलता है कि नींद की कमी से चूहों पर गंभीर जैविक प्रभाव पड़ते हैं, जिससे वजन कम हो जाता है।",
      why_delightful: "It serves as a stark biological reminder that sleep is not a luxury, but a fundamental requirement for survival."
    },
    sarcasm_or_wit: {
      observation: "Taking your laptop to a coffee shop to work, only to spend three hours reading Wikipedia, is an elite productivity hack.",
      observation_hi: "काम करने के लिए लैपटॉप को कॉफी शॉप में ले जाना, और केवल विकिपीडिया पढ़ना, एक बड़ी उत्पादकता है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 39,
    riddle: {
      title: "The Letter Box",
      title_hi: "पत्र का डिब्बा",
      question: "What starts with the letter 'e', ends with the letter 'e', but contains only one letter?",
      question_hi: "क्या 'e' अक्षर से शुरू होता है, 'e' अक्षर पर समाप्त होता है, लेकिन उसमें केवल एक अक्षर होता है?",
      reveal: "An envelope.",
      reveal_hi: "एक लिफाफा (Envelope)।"
    },
    joke: {
      setup: "What happens when you drop a piano down a mine shaft?",
      setup_hi: "जब आप खदान के कुएं में पियानो गिराते हैं तो क्या होता है?",
      punchline: "You get a flat miner, but only if the miner was playing the triangle.",
      punchline_hi: "आपको एक फ्लैट माइनर (सुर/खनिक) मिलता है, लेकिन केवल तब जब खनिक ट्राएंगल बजा रहा हो।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "Strawberries are not true botanical berries, because their seeds are located on the outside of the fruit. Instead, botanists classify them as accessory fruits, while bananas, watermelons, and tomatoes are technically classified as true berries.",
      fact_hi: "स्ट्रॉबेरी वनस्पति विज्ञान के अनुसार बेरी नहीं हैं, जबकि केले और तरबूज बेरी की श्रेणी में आते हैं।",
      why_delightful: "It flips our fruit basket upside down, proving that botanical rules don't always align with our dinner plate."
    },
    sarcasm_or_wit: {
      observation: "Making a list of things to ignore is the most productive thing you can do when you are overwhelmed with work.",
      observation_hi: "जब आप काम से घिरे हों, तो अनदेखा करने वाली चीजों की सूची बनाना सबसे अधिक उत्पादकता वाला काम है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 40,
    riddle: {
      title: "The Secret Eye",
      title_hi: "गुप्त आंख",
      question: "I am a small hole that lets you look through walls, yet I have no window. What am I?",
      question_hi: "मैं एक छोटा सा छेद हूँ जो आपको दीवारों के पार देखने देता है, फिर भी मेरे पास कोई खिड़की नहीं है। मैं क्या हूँ?",
      reveal: "A keyhole.",
      reveal_hi: "एक चाबी का छेद (Keyhole)।"
    },
    joke: {
      setup: "Why is the process of drying clothes in the dryer so mysterious?",
      setup_hi: "ड्रायर में कपड़े सुखाने की प्रक्रिया इतनी रहस्यमयी क्यों है?",
      punchline: "Because it always eats one sock from every pair as a tax for its service.",
      punchline_hi: "क्योंकि यह हमेशा अपनी सेवा के लिए कर के रूप में हर जोड़ी में से एक मोज़ा खा जाता है।",
      type: "observational"
    },
    fun_fact: {
      fact: "The Moon is slowly moving away from Earth at a rate of approximately one point five inches per year. This tidal acceleration is caused by the gravitational friction of the ocean tides, which transfers rotational energy to the Moon's orbit.",
      fact_hi: "चंद्रमा हर साल पृथ्वी से लगभग 1.5 इंच दूर खिसक रहा है, जो गुरुत्वाकर्षण घर्षण के कारण है।",
      why_delightful: "It shows that our cosmic dance partner is slowly waving goodbye, leaving us bit by bit over millions of years."
    },
    sarcasm_or_wit: {
      observation: "Eating an entire block of cheese at midnight while standing in front of the open refrigerator is peak culinary art.",
      observation_hi: "आधी रात को खुले फ्रिज के सामने खड़े होकर पनीर का पूरा ब्लॉक खा जाना पाक कला का शिखर है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 41,
    riddle: {
      title: "The Ice Mountain",
      title_hi: "बर्फ का पहाड़",
      question: "I am hard as stone but melt in your hand. I float on water but sink in oil. What am I?",
      question_hi: "मैं पत्थर की तरह कठोर हूँ लेकिन तुम्हारे हाथ में पिघल जाता हूँ। मैं पानी पर तैरता हूँ लेकिन तेल में डूब जाता हूँ। मैं क्या हूँ?",
      reveal: "Ice.",
      reveal_hi: "बर्फ।"
    },
    joke: {
      setup: "Why do Indian engineers always end up doing an MBA?",
      setup_hi: "भारतीय इंजीनियर हमेशा एमबीए क्यों करते हैं?",
      punchline: "Because four years of engineering teaches them that they definitely don't want to do engineering.",
      punchline_hi: "क्योंकि चार साल की इंजीनियरिंग उन्हें सिखाती है कि वे निश्चित रूप से इंजीनियरिंग नहीं करना चाहते।",
      type: "desi"
    },
    fun_fact: {
      fact: "Ants do not possess lungs; instead, they breathe through microscopic holes located on the sides of their bodies, called spiracles. Oxygen enters these tubes and circulates directly to their cells, allowing them to remain active in tiny underground tunnels.",
      fact_hi: "चींटियों के फेफड़े नहीं होते; वे अपने शरीर के किनारों पर बने छिद्रों (Spiracles) से सांस लेती हैं।",
      why_delightful: "It makes their tiny bodies seem like advanced micro-machines, breathing through their skin without needing chests."
    },
    sarcasm_or_wit: {
      observation: "Checking the weather app while standing directly next to a window is how we verify reality in the digital age.",
      observation_hi: "खिड़की के ठीक पास खड़े होकर मौसम ऐप की जांच करना डिजिटल युग में वास्तविकता को सत्यापित करने का हमारा तरीका है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 42,
    riddle: {
      title: "The Book House",
      title_hi: "किताबों का घर",
      question: "I have thousands of stories but no voice, and many rooms but no beds. What am I?",
      question_hi: "मेरे पास हजारों कहानियाँ हैं लेकिन कोई आवाज़ नहीं, और कई कमरे हैं लेकिन कोई बिस्तर नहीं। मैं क्या हूँ?",
      reveal: "A library.",
      reveal_hi: "एक पुस्तकालय (Library)।"
    },
    joke: {
      setup: "What did the cell say when his sister stepped on his toe?",
      setup_hi: "कोशिका ने क्या कहा जब उसकी बहन ने उसके पैर की उंगली पर कदम रखा?",
      punchline: "Mitosis!",
      punchline_hi: "माइटोसिस (Mitosis/मेरी उंगली)!",
      type: "science"
    },
    fun_fact: {
      fact: "Human bones are incredibly strong, with a block of bone the size of a matchbox capable of supporting nine tons of weight, which is four times stronger than concrete of equivalent density. This strength is due to its composite structure.",
      fact_hi: "मानव हड्डियां कंक्रीट से चार गुना अधिक मजबूत होती हैं, माचिस के आकार की हड्डी नौ टन वजन सह सकती है।",
      why_delightful: "It shows that we walk around on skeletons that are engineered to be tougher than the roads we tread."
    },
    sarcasm_or_wit: {
      observation: "Leaving your read receipts on is the ultimate digital power move, showing people that you saw their message and chose silence.",
      observation_hi: "रीड रिसिप्ट्स (read receipts) को चालू रखना डिजिटल ताकत का प्रदर्शन है, जो दिखाता है कि आपने मैसेज देखा और चुप रहे।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 43,
    riddle: {
      title: "The Dirt Sweeper",
      title_hi: "धूल साफ करने वाला",
      question: "I have a long handle and thousands of bristles, and I clean the floor but never wash myself. What am I?",
      question_hi: "मेरा एक लंबा हैंडल और हजारों ब्रिसल्स (बाल) हैं, और मैं फर्श को साफ करता हूँ लेकिन खुद को कभी नहीं धोता। मैं क्या हूँ?",
      reveal: "A broom.",
      reveal_hi: "एक झाड़ू।"
    },
    joke: {
      setup: "Why did the golfer bring two pairs of pants to the course?",
      setup_hi: "गोल्फर कोर्स में दो जोड़ी पैंट क्यों लाया?",
      punchline: "In case he got a hole in one.",
      punchline_hi: "इस मामले में कि उसे एक में छेद (Hole in one) मिल जाए।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Saturn has such a low average density that it would float if placed in a giant bathtub of water. The planet is composed mostly of hydrogen and helium, which are lighter than water, despite its massive volume and size.",
      fact_hi: "शनि ग्रह का घनत्व पानी से भी कम है, यदि इसे पानी के एक विशाल टब में रखा जाए तो यह तैरने लगेगा।",
      why_delightful: "It paints a giant ringed planet as a light, cosmic bubble that could bob along on the ocean surface."
    },
    sarcasm_or_wit: {
      observation: "Unsubscribing from a spam email list only to receive three confirmation emails is the peak of digital irony.",
      observation_hi: "स्पैम ईमेल सूची से अनसब्सक्राइब करना और फिर तीन पुष्टिकरण ईमेल प्राप्त करना डिजिटल विडंबना का शिखर है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 44,
    riddle: {
      title: "The Water Holder",
      title_hi: "पानी रखने वाला",
      question: "I am full of holes but still hold water. What am I?",
      question_hi: "मैं छेदों से भरा हुआ हूँ फिर भी पानी रोकता हूँ। मैं क्या हूँ?",
      reveal: "A sponge.",
      reveal_hi: "एक स्पंज।"
    },
    joke: {
      setup: "Why do birds fly south for winter?",
      setup_hi: "सर्दियों में पक्षी दक्षिण की ओर क्यों उड़ते हैं?",
      punchline: "Because walking would take way too long and they forgot where they parked their cars.",
      punchline_hi: "क्योंकि पैदल चलने में बहुत लंबा समय लगेगा और वे भूल गए कि उन्होंने अपनी कारें कहाँ पार्क की थीं।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "Dogs process changes in time through their sense of smell. They can detect the fading concentration of scents in a room, allowing them to estimate how long their owners have been gone and predict when they will return.",
      fact_hi: "कुत्ते गंध के माध्यम से समय बीतने का अनुभव करते हैं, जिससे वे मालिक के लौटने के समय का अनुमान लगा लेते हैं।",
      why_delightful: "It shows that for our canine friends, time is not a tick-tock of a clock, but a fading perfume of presence."
    },
    sarcasm_or_wit: {
      observation: "Smiling at your computer screen during a video call so your coworkers think you are actually paying attention is a vital skill.",
      observation_hi: "वीडियो कॉल के दौरान स्क्रीन पर मुस्कुराना ताकि सहकर्मी समझें कि आप ध्यान दे रहे हैं, एक महत्वपूर्ण कौशल है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 45,
    riddle: {
      title: "The Water Road",
      title_hi: "पानी का रास्ता",
      question: "I cross the river but never drink, and I carry cars but never move. What am I?",
      question_hi: "मैं नदी पार करता हूँ लेकिन कभी पीता नहीं, और मैं कारें ले जाता हूँ लेकिन कभी हिलता नहीं। मैं क्या हूँ?",
      reveal: "A bridge.",
      reveal_hi: "एक पुल (Bridge)।"
    },
    joke: {
      setup: "Why do we buy bananas to eat healthy, only to watch them turn into banana bread ingredients?",
      setup_hi: "हम स्वस्थ खाने के लिए केले क्यों खरीदते हैं, केवल उन्हें बनाना ब्रेड की सामग्री बनते देखने के लिए?",
      punchline: "Because banana bread is the ultimate compromise between nutrition and baking guilt.",
      punchline_hi: "क्योंकि बनाना ब्रेड पोषण और बेकिंग के अपराधबोध के बीच का अंतिम समझौता है।",
      type: "observational"
    },
    fun_fact: {
      fact: "A blue whale's tongue weighs approximately two point seven tons, which is equivalent to the weight of an entire adult elephant. Their hearts are the size of a small car, pumping blood through arteries that a human could crawl through.",
      fact_hi: "ब्लू व्हेल की जीभ का वजन लगभग 2.7 टन होता है, जो एक वयस्क हाथी के वजन के बराबर है।",
      why_delightful: "It highlights the scales of life in our oceans, hosting giants that make land giants look like mice."
    },
    sarcasm_or_wit: {
      observation: "Reorganizing your desktop files into colored folders is the best way to pretend you are accomplishing real work.",
      observation_hi: "डेस्कटॉप फ़ाइलों को रंगीन फ़ोल्डरों में पुनर्गठित करना यह नाटक करने का तरीका है कि आप वास्तविक काम कर रहे हैं।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 46,
    riddle: {
      title: "The Four Legs",
      title_hi: "चार पैर",
      question: "I have four legs but cannot walk, and a flat back but cannot speak. What am I?",
      question_hi: "मेरे चार पैर हैं लेकिन मैं चल नहीं सकता, और एक सपाट पीठ है लेकिन मैं बोल नहीं सकता। मैं क्या हूँ?",
      reveal: "A table.",
      reveal_hi: "एक मेज।"
    },
    joke: {
      setup: "What is the most powerful unit of time in India?",
      setup_hi: "भारत में समय की सबसे शक्तिशाली इकाई कौन सी है?",
      punchline: "'Five minutes,' which can range from five minutes to three hours depending on traffic and tea availability.",
      punchline_hi: "'पांच मिनट,' जो ट्रैफिक और चाय की उपलब्धता के आधार पर पांच मिनट से तीन घंटे तक हो सकता है।",
      type: "desi"
    },
    fun_fact: {
      fact: "Venus is the only planet in our solar system that spins clockwise on its axis, a motion called retrograde rotation. All other planets rotate counterclockwise when viewed from their north poles, suggesting a massive collision altered Venus's spin.",
      fact_hi: "शुक्र हमारे सौर मंडल का एकमात्र ऐसा ग्रह है जो दक्षिणावर्त (clockwise) घूमता है, जिसे प्रतिगामी घूर्णन कहते हैं।",
      why_delightful: "It shows that even in the harmony of the solar system, there is a rebel spinning in its own direction."
    },
    sarcasm_or_wit: {
      observation: "Staring at your phone while walking is a great way to test the physical durability of street poles.",
      observation_hi: "चलते समय अपने फोन को घूरना सड़क के खंभों के स्थायित्व का परीक्षण करने का एक शानदार तरीका है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 47,
    riddle: {
      title: "The Foot Soldier",
      title_hi: "पैदल सैनिक",
      question: "I have a heel and a toe but no legs or body. What am I?",
      question_hi: "मेरी एक एड़ी और एक अंगूठा है लेकिन मेरे पैर या शरीर नहीं है। मैं क्या हूँ?",
      reveal: "A shoe.",
      reveal_hi: "एक जूता।"
    },
    joke: {
      setup: "What did the light bulb say to the generator?",
      setup_hi: "लाइट बल्ब ने जनरेटर से क्या कहा?",
      punchline: "I find you shocking, but you really brighten up my day!",
      punchline_hi: "मुझे आप काफी झटकेदार (shocking) लगते हैं, लेकिन आप सचमुच मेरा दिन रोशन कर देते हैं!",
      type: "science"
    },
    fun_fact: {
      fact: "Water expands by approximately nine percent when it freezes into ice, which is why ice floats. This expansion occurs because water molecules form a crystalline structure that has more space between molecules than liquid water.",
      fact_hi: "पानी जमने पर लगभग नौ प्रतिशत तक फैल जाता है, यही कारण है कि बर्फ पानी पर तैरती है।",
      why_delightful: "It is a rare chemical anomaly that prevents lakes from freezing solid from the bottom up, preserving aquatic life."
    },
    sarcasm_or_wit: {
      observation: "Sending an email saying 'please find attached' without actually attaching the document is a modern rite of passage.",
      observation_hi: "दस्तावेज़ संलग्न किए बिना 'कृपया संलग्न फ़ाइल देखें' का ईमेल भेजना आधुनिक समय की एक रस्म है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 48,
    riddle: {
      title: "The Ringing Bell",
      title_hi: "बजने वाली घंटी",
      question: "I have a tongue but cannot speak, and a metal body that rings. What am I?",
      question_hi: "मेरी एक जीभ है लेकिन मैं बोल नहीं सकता, और एक धातु का शरीर है जो बजता है। मैं क्या हूँ?",
      reveal: "A bell.",
      reveal_hi: "एक घंटी।"
    },
    joke: {
      setup: "What do you call a line of men waiting to get haircuts?",
      setup_hi: "बाल कटवाने के लिए इंतजार कर रहे पुरुषों की कतार को आप क्या कहेंगे?",
      punchline: "A barbercue.",
      punchline_hi: "एक नाई-क्यू (Barbercue)।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "During winter dormancy, trees sleep and relax their branches, letting them droop by up to ten centimeters. Researchers using laser scanners measured this nighttime movement, proving that trees have circadian rhythms and cycles of rest.",
      fact_hi: "सर्दियों के दौरान पेड़ अपनी शाखाओं को ढीला छोड़ देते हैं और सोते हैं, जो उनके दिन-रात के चक्र को दिखाता है।",
      why_delightful: "It makes the forest feel like a sleeping nursery, with massive giants nodding off in the quiet night."
    },
    sarcasm_or_wit: {
      observation: "Washing the dishes right before you put them inside the dishwasher is how we show the machine who is boss.",
      observation_hi: "डिशवॉशर में बर्तन डालने से ठीक पहले उन्हें धोना मशीन को यह दिखाने का तरीका है कि असली बॉस कौन है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 49,
    riddle: {
      title: "The Wave Wave",
      title_hi: "लहर लहर",
      question: "I have no voice but can roar, and no legs but can sweep the shore. What am I?",
      question_hi: "मेरी कोई आवाज़ नहीं है लेकिन मैं दहाड़ सकता हूँ, और मेरे पैर नहीं हैं लेकिन मैं किनारे को साफ कर सकता हूँ। मैं क्या हूँ?",
      reveal: "An ocean wave.",
      reveal_hi: "समुद्र की लहर।"
    },
    joke: {
      setup: "Why is auto-correct sometimes the most dangerous tool on your phone?",
      setup_hi: "ऑटो-करेक्ट कभी-कभी आपके फोन का सबसे खतरनाक उपकरण क्यों होता है?",
      punchline: "Because it has its own agenda and wants to replace 'dear mom' with 'dead moth.'",
      punchline_hi: "क्योंकि उसका अपना एक एजेंडा है और वह 'प्रिय माँ' को 'मरे हुए पतंगे' से बदलना चाहता है।",
      type: "observational"
    },
    fun_fact: {
      fact: "Sea turtles possess a geomagnetic sense that allows them to return to the exact beach where they were born to lay eggs. They navigate thousands of miles across open ocean by detecting the angle and intensity of Earth's magnetic field.",
      fact_hi: "समुद्री कछुए पृथ्वी के चुंबकीय क्षेत्र की मदद से हजारों मील दूर उसी तट पर लौट आते हैं जहां उनका जन्म हुआ था।",
      why_delightful: "It turns these slow sea-travelers into master navigators, carrying an invisible compass in their heads."
    },
    sarcasm_or_wit: {
      observation: "Reading complex cooking recipes for two hours, only to boil instant noodles instead, is the peak of culinary ambition.",
      observation_hi: "दो घंटे तक जटिल व्यंजन विधियाँ पढ़ना, और अंत में केवल मैगी बनाना, पाक महत्वाकांक्षा का चरम है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 50,
    riddle: {
      title: "The Companion",
      title_hi: "साथी",
      question: "I follow you in the day, but run away in the dark. What am I?",
      question_hi: "मैं दिन में आपके पीछे चलता हूँ, लेकिन अंधेरे में भाग जाता हूँ। मैं क्या हूँ?",
      reveal: "A shadow.",
      reveal_hi: "एक परछाई।"
    },
    joke: {
      setup: "Why do we tap the bottom of a hot tea glass before drinking at a tapri?",
      setup_hi: "हम टपरी पर गर्म चाय पीने से पहले गिलास के तले को क्यों थपथपाते हैं?",
      punchline: "To check if the glass has survived the heat and won't shatter in our hands.",
      punchline_hi: "यह जांचने के लिए कि क्या ग्लास गर्मी से बच गया है और हमारे हाथों में नहीं बिखरेगा।",
      type: "desi"
    },
    fun_fact: {
      fact: "Glass is not a slow-flowing liquid but an amorphous solid, meaning its molecules are disordered but locked in place. The myth that old stained-glass windows are thicker at the bottom because of gravity has been disproved by materials scientists.",
      fact_hi: "कांच कोई धीमा बहने वाला तरल नहीं है बल्कि एक अनाकार ठोस (amorphous solid) है जिसके अणु स्थिर होते हैं।",
      why_delightful: "It shows that things that appear to flow can actually be frozen in time, holding their shape for centuries."
    },
    sarcasm_or_wit: {
      observation: "Buying expensive organic vegetables just to watch them turn into a liquid puddle in the crisper drawer is a healthy habit.",
      observation_hi: "महंगी जैविक सब्जियां खरीदना केवल उन्हें फ्रिज के ड्रावर में सड़ते हुए देखने के लिए, एक स्वस्थ आदत है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 51,
    riddle: {
      title: "The Truth Teller",
      title_hi: "सच बताने वाला",
      question: "I raise my hand when you raise yours, but I cannot touch you. What am I?",
      question_hi: "जब आप अपना हाथ उठाते हैं तो मैं अपना हाथ उठाता हूँ, लेकिन मैं आपको छू नहीं सकता। मैं क्या हूँ?",
      reveal: "A mirror.",
      reveal_hi: "एक दर्पण।"
    },
    joke: {
      setup: "Why is organic chemistry so difficult to study?",
      setup_hi: "ऑर्गेनिक केमिस्ट्री का अध्ययन करना इतना कठिन क्यों है?",
      punchline: "Because it contains carbon copies of everything, making it feel highly repetitive.",
      punchline_hi: "क्योंकि इसमें हर चीज़ की कार्बन कॉपियां होती हैं, जिससे यह बहुत दोहराव वाला महसूस होता।",
      type: "science"
    },
    fun_fact: {
      fact: "Woodpeckers have an incredibly long tongue that wraps around their brain to act as a shock absorber. This anatomical structure protects their brain from damage when they strike tree bark at forces up to fifteen times gravity.",
      fact_hi: "कटफोड़वा (Woodpecker) की जीभ उसके दिमाग के चारों ओर लिपटी होती है, जो आघात अवशोषक (shock absorber) का काम करती है।",
      why_delightful: "It is a spectacular design that turns a tongue into a helmet, shielding the brain during heavy construction."
    },
    sarcasm_or_wit: {
      observation: "Keeping empty cardboard gift boxes in your closet because 'they are really good boxes' is a sign of true maturity.",
      observation_hi: "अपने कोठरी में खाली डिब्बे जमा करके रखना क्योंकि 'वे सचमुच अच्छे डिब्बे हैं' वास्तविक परिपक्वता का संकेत है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 52,
    riddle: {
      title: "The Silent Runner",
      title_hi: "मूक धावक",
      question: "I run all day but never get tired, and have hands but no body. What am I?",
      question_hi: "मैं दिन भर दौड़ता हूँ लेकिन कभी थकता नहीं, और मेरे पास हाथ हैं लेकिन शरीर नहीं। मैं क्या हूँ?",
      reveal: "A clock.",
      reveal_hi: "एक घड़ी।"
    },
    joke: {
      setup: "Why do we tell actors to break a leg before going on stage?",
      setup_hi: "हम अभिनेताओं को मंच पर जाने से पहले पैर तोड़ने (शुभकामना देने) के लिए क्यों कहते हैं?",
      punchline: "Because every theatrical play must have a cast to support it.",
      punchline_hi: "क्योंकि हर नाटक में उसका समर्थन करने के लिए एक कास्ट (कलाकार/प्लास्टर) होनी चाहिए।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "On Jupiter and Saturn, it rains diamonds due to extreme atmospheric pressure. Methane gas is converted into soot by lightning, which then hardens into graphite and eventually turns into diamonds as it falls through the hot, dense depths.",
      fact_hi: "बृहस्पति और शनि ग्रह पर अत्यधिक दबाव के कारण हीरों की बारिश होती है, जहाँ मीथेन कालिख से हीरा बनती है।",
      why_delightful: "It transforms our view of weather, replacing muddy rain showers with a brilliant, sparkling fall of gems."
    },
    sarcasm_or_wit: {
      observation: "Cleaning your room by shoving everything under the bed is the spatial equivalent of deleting emails instead of reading them.",
      observation_hi: "सब कुछ बिस्तर के नीचे धकेल कर अपने कमरे की सफाई करना ईमेल को पढ़ने के बजाय डिलीट करने के समान है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 53,
    riddle: {
      title: "The Letter Box",
      title_hi: "पत्र का डिब्बा",
      question: "What contains letters but has only three letters itself?",
      question_hi: "किसमें बहुत सारे अक्षर (letters) होते हैं लेकिन उसमें स्वयं केवल तीन अक्षर होते हैं?",
      reveal: "Alphabet.",
      reveal_hi: "वर्णमाला (Alphabet)।"
    },
    joke: {
      setup: "A toaster and a refrigerator get into an argument about politics.",
      setup_hi: "एक टोस्टर और एक रेफ्रिजरेटर के बीच राजनीति को लेकर बहस हो जाती है।",
      punchline: "The toaster says, 'At least my bread rises,' and the refrigerator replies, 'I am a refrigerator.'",
      punchline_hi: "टोस्टर कहता है, 'कम से कम मेरी ब्रेड तो उठती है,' और फ्रिज जवाब देता है, 'मैं एक फ्रिज हूँ।'",
      type: "absurdist"
    },
    fun_fact: {
      fact: "Sunflowers exhibit heliotropism, tracking the movement of the sun from east to west across the sky during the day. At night, they turn back to the east to prepare for the next sunrise, a movement regulated by their internal biological clock.",
      fact_hi: "सूरजमुखी के फूल दिन में सूरज की दिशा में घूमते हैं (Heliotropism) और रात में पूर्व की ओर वापस आ जाते हैं।",
      why_delightful: "It makes these bright yellow flowers look like small, botanical radars capturing the golden energy of the star."
    },
    sarcasm_or_wit: {
      observation: "Telling your hairdresser that you love the haircut when you actually want to cry is our greatest act of social bravery.",
      observation_hi: "अपने हेयरड्रेसर से यह कहना कि आपको बाल कटवाना पसंद आया, जब आप रोना चाहते हैं, हमारा सबसे बड़ा साहस है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 54,
    riddle: {
      title: "The White Path",
      title_hi: "सफेद मार्ग",
      question: "I have no wheels but travel far, and I cross the mountains without a car. What am I?",
      question_hi: "मेरे पास कोई पहिया नहीं है लेकिन मैं दूर तक जाता हूँ, और मैं बिना कार के पहाड़ों को पार करता हूँ। मैं क्या हूँ?",
      reveal: "A road.",
      reveal_hi: "एक सड़क।"
    },
    joke: {
      setup: "Why is trying to read your phone screen in direct sunlight so frustrating?",
      setup_hi: "तेज धूप में अपने फोन की स्क्रीन पढ़ने की कोशिश करना इतना निराशाजनक क्यों है?",
      punchline: "Because you end up staring at a dark reflection of your own disappointed face instead.",
      punchline_hi: "क्योंकि अंत में आप अपने ही निराश चेहरे का एक अंधेरा प्रतिबिंब देखने लगते हैं।",
      type: "observational"
    },
    fun_fact: {
      fact: "Beavers possess iron-rich orange teeth that grow continuously throughout their lives. The iron makes the enamel extremely hard and resistant to acid, allowing them to chew through massive tree trunks without wearing down their teeth to the gums.",
      fact_hi: "बीवर (Beavers) के दांत लोहे से भरपूर होने के कारण नारंगी होते हैं और जीवन भर बढ़ते रहते हैं।",
      why_delightful: "It turns their teeth into built-in steel chisels, perfectly engineered to construct wooden dams in forest rivers."
    },
    sarcasm_or_wit: {
      observation: "Taking the stairs instead of the elevator once is how we instantly transform into fitness icons in our own minds.",
      observation_hi: "लिफ्ट के बजाय एक बार सीढ़ियों का उपयोग करना हमें हमारे मन में फिटनेस आइकन बना देता है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 55,
    riddle: {
      title: "The Darkness",
      title_hi: "अंधेरा",
      question: "The more of me there is, the less you can see. What am I?",
      question_hi: "मेरी मात्रा जितनी अधिक होगी, आप उतना ही कम देख पाएंगे। मैं क्या हूँ?",
      reveal: "Darkness.",
      reveal_hi: "अंधेरा।"
    },
    joke: {
      setup: "Why do we keep empty ice cream boxes in the freezer?",
      setup_hi: "हम फ्रीज़र में खाली आइसक्रीम के डिब्बे क्यों रखते हैं?",
      punchline: "Because they are actually filled with frozen green chillies and coriander, the ultimate trust test.",
      punchline_hi: "क्योंकि वे वास्तव में जमी हुई हरी मिर्च और धनिए से भरे होते हैं, जो विश्वास की परीक्षा है।",
      type: "desi"
    },
    fun_fact: {
      fact: "Octopuses possess taste receptors inside the suction cups on their arms. This allows them to taste their environment and locate prey simply by touching rocks and crawling through crevices, processing sensory information directly in their nervous system.",
      fact_hi: "ऑक्टोपस के हाथों के सक्शन कप में स्वाद रिसेप्टर्स होते हैं, जिससे वे छूकर स्वाद का अनुभव कर सकते हैं।",
      why_delightful: "It means that for an octopus, walking on the ocean floor is equivalent to eating a buffet with its feet."
    },
    sarcasm_or_wit: {
      observation: "Charging your phone to ninety-nine percent instead of one hundred is a risk level that most of us cannot handle.",
      observation_hi: "अपने फोन को सौ प्रतिशत के बजाय निन्यानबे प्रतिशत तक चार्ज करना एक ऐसा जोखिम है जिसे हम झेल नहीं सकते।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 56,
    riddle: {
      title: "The Round Shield",
      title_hi: "गोल ढाल",
      question: "I have a head and a tail but no body. What am I?",
      question_hi: "मेरे पास एक सिर और एक पूंछ है लेकिन कोई शरीर नहीं है। मैं क्या हूँ?",
      reveal: "A coin.",
      reveal_hi: "एक सिक्का।"
    },
    joke: {
      setup: "Why did the Pavlovian scientist jump up when the bar phone rang loudly?",
      setup_hi: "जब बार का फोन जोर से बजा तो पावलोवियन वैज्ञानिक क्यों उछल पड़ा?",
      punchline: "He shouted, 'Oh no, I forgot to feed the dog!' showing that reflexes work both ways.",
      punchline_hi: "वह चिल्लाया, 'अरे नहीं, मैं कुत्ते को खाना खिलाना भूल गया!' यह दिखाता है कि सजगता दोनों तरह से काम करती है।",
      type: "science"
    },
    fun_fact: {
      fact: "The platypus does not possess a stomach; instead, its esophagus connects directly to its intestines. This anatomical structure means they lack the genes for producing acid and digestive enzymes that other mammals use to process food.",
      fact_hi: "प्लैटिपस के पास पेट (Stomach) नहीं होता; उनकी भोजन नली सीधे आंतों से जुड़ी होती है।",
      why_delightful: "It proves that nature can simplify digestion entirely, bypassing the need for a stomach and still thriving."
    },
    sarcasm_or_wit: {
      observation: "Adding a task to your to-do list that you have already finished, just so you can cross it off immediately, is pure power.",
      observation_hi: "टू-डू लिस्ट में उस काम को जोड़ना जिसे आप पहले ही पूरा कर चुके हैं, ताकि उसे तुरंत काट सकें, शुद्ध आनंद है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 57,
    riddle: {
      title: "The Great Light",
      title_hi: "महान प्रकाश",
      question: "I have a golden head and a golden tail, but no body. I rise in the east and set in the west. What am I?",
      question_hi: "मेरा एक सुनहरा सिर और एक सुनहरी पूंछ है, लेकिन कोई शरीर नहीं। मैं पूर्व में उगता हूँ और पश्चिम में ढलता हूँ। मैं क्या हूँ?",
      reveal: "The sun.",
      reveal_hi: "सूर्य।"
    },
    joke: {
      setup: "Why did the computer go to the hospital?",
      setup_hi: "कंप्यूटर अस्पताल क्यों गया?",
      punchline: "Because it had a virus that was eating its memory.",
      punchline_hi: "क्योंकि उसमें एक वायरस था जो उसकी मेमोरी खा रहा था।",
      type: "science"
    },
    fun_fact: {
      fact: "Honeybees communicate the location of flowers to their hive members using a series of movements called the waggle dance. The angle of the dance relative to the sun indicates the direction, while the duration indicates the distance.",
      fact_hi: "मधुमक्खियाँ अपने छत्ते के सदस्यों को फूलों के स्थान की जानकारी देने के लिए 'वैगल डांस' (Waggle dance) करती हैं।",
      why_delightful: "It turns navigation into a silent choreography, using a dance routine to map the geography of sweetness."
    },
    sarcasm_or_wit: {
      observation: "Planning to wake up early tomorrow is a wonderful activity that has absolutely no relation to actually waking up early.",
      observation_hi: "कल सुबह जल्दी उठने की योजना बनाना एक अद्भुत गतिविधि है जिसका वास्तव में जल्दी उठने से कोई संबंध नहीं है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 58,
    riddle: {
      title: "The Weightless Box",
      title_hi: "भारहीन डिब्बा",
      question: "What can you fill a bucket with to make it lighter?",
      question_hi: "आप एक बाल्टी को किससे भर सकते हैं कि वह हल्की हो जाए?",
      reveal: "Holes.",
      reveal_hi: "छेद।"
    },
    joke: {
      setup: "Why do we say 'two minutes' when we are going to take at least an hour?",
      setup_hi: "जब हम कम से कम एक घंटा लेने वाले होते हैं तो हम 'दो मिनट' क्यों कहते हैं?",
      punchline: "It is a diplomatic unit of time designed to maintain domestic peace.",
      punchline_hi: "यह घरेलू शांति बनाए रखने के लिए डिज़ाइन की गई समय की एक राजनयिक इकाई है।",
      type: "observational"
    },
    fun_fact: {
      fact: "The Pando colony in Utah is a single organism consisting of over forty thousand aspen trees connected by a single underground root system. This massive colony weighs six million kilograms, making it the heaviest known organism on Earth.",
      fact_hi: "यूटा में पांडो (Pando) नामक पेड़ों की कॉलोनी वास्तव में एक ही जीव है जो एक जड़ प्रणाली से जुड़े हैं।",
      why_delightful: "It shows that a forest is not a collection of individuals, but a single massive family sharing a root."
    },
    sarcasm_or_wit: {
      observation: "Watching a tutorial video for ten minutes but choosing to do the task by trial and error is our preferred method.",
      observation_hi: "दस मिनट के लिए ट्यूटोरियल वीडियो देखना लेकिन काम को ट्रायल और एरर विधि से करना हमारा पसंदीदा तरीका है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 59,
    riddle: {
      title: "The Double Face",
      title_hi: "दोहरा चेहरा",
      question: "I have two heads, four eyes, but only one body. The more I stand, the shorter I get. What am I?",
      question_hi: "मेरे पास दो सिर, चार आँखें हैं, लेकिन केवल एक शरीर है। मैं जितना खड़ा रहता हूँ, उतना ही छोटा होता जाता हूँ। मैं क्या हूँ?",
      reveal: "A candle with two wicks.",
      reveal_hi: "दो बत्ती वाली मोमबत्ती।"
    },
    joke: {
      setup: "Why do Indian fathers refuse to use GPS?",
      setup_hi: "भारतीय पिता जीपीएस का उपयोग करने से क्यों मना करते हैं?",
      punchline: "Because asking a local paan-wala is a spiritual connection to the land.",
      punchline_hi: "क्योंकि स्थानीय पान वाले से पूछना मिट्टी से एक आध्यात्मिक जुड़ाव है।",
      type: "desi"
    },
    fun_fact: {
      fact: "Sharks have been swimming in Earth's oceans for over four hundred million years. This means they have survived five major mass extinction events, making them older than the dinosaurs, and remarkably, even older than the rings of Saturn.",
      fact_hi: "शार्क पृथ्वी के महासागरों में चालीस करोड़ वर्षों से रह रही हैं, जो उन्हें शनि के छल्लों (rings) से भी पुराना बनाता है।",
      why_delightful: "It changes our view of time, realizing that these ocean predators pre-date some of the solar system's features."
    },
    sarcasm_or_wit: {
      observation: "Saying 'let's do lunch sometime' is our modern, polite way of saying we hope we never see each other again.",
      observation_hi: "'चलो कभी लंच करते हैं' कहना यह कहने का हमारा आधुनिक तरीका है कि हमें उम्मीद है कि हम कभी नहीं मिलेंगे।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 60,
    riddle: {
      title: "The Footless Traveler",
      title_hi: "बिना पैर का यात्री",
      question: "I run through hills, I run through vales, but I never move. What am I?",
      question_hi: "मैं पहाड़ियों और घाटियों से होकर गुजरता हूँ, लेकिन कभी हिलता नहीं हूँ। मैं क्या हूँ?",
      reveal: "A road.",
      reveal_hi: "एक सड़क।"
    },
    joke: {
      setup: "Why did the math book look so sad?",
      setup_hi: "गणित की किताब इतनी दुखी क्यों लग रही थी?",
      punchline: "Because it had too many problems that nobody wanted to solve.",
      punchline_hi: "क्योंकि उसमें बहुत सारी समस्याएं थीं जिन्हें कोई हल नहीं करना चाहता था।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Sea otters are known to hold hands in groups, called rafts, while they sleep to keep from drifting apart in open water. They also wrap themselves in giant kelp to anchor themselves. This social behavior helps them stay connected to family.",
      fact_hi: "समुद्री ऊदबिलाव सोते समय पानी में एक-दूसरे का हाथ पकड़ लेते हैं ताकि वे बहाव में अलग न हो जाएं।",
      why_delightful: "This tender habit shows that even in the wild oceans, companionship is a biological necessity for warmth and safety."
    },
    sarcasm_or_wit: {
      observation: "Checking the refrigerator three times in ten minutes expecting new food to appear is the definition of insanity.",
      observation_hi: "दस मिनट में तीन बार फ्रिज चेक करना और नए खाने की उम्मीद करना पागलपन की परिभाषा है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 61,
    riddle: {
      title: "The White Dress",
      title_hi: "सफेद पोशाक",
      question: "I fall from the sky, softer than hair, cold as ice, but when I touch the warm ground I disappear. What am I?",
      question_hi: "मैं आसमान से गिरता हूँ, बालों से भी मुलायम, बर्फ जैसा ठंडा, लेकिन जब मैं गर्म जमीन को छूता हूँ तो गायब हो जाता हूँ। मैं क्या हूँ?",
      reveal: "Snow.",
      reveal_hi: "बर्फ।"
    },
    joke: {
      setup: "Why did the coffee file a police report?",
      setup_hi: "कॉफी ने पुलिस रिपोर्ट क्यों दर्ज कराई?",
      punchline: "Because it got mugged in the kitchen.",
      punchline_hi: "क्योंकि रसोई में उसके साथ मगिंग (mugged) हो गई थी।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Wombat poop is cube-shaped, which stops it from rolling away. This allows the animals to mark their territory effectively on flat surfaces without their markers rolling down the hills.",
      fact_hi: "वोम्बैट का मल चौकोर (क्यूब) आकार का होता है, जिससे यह लुढ़क नहीं पाता।",
      why_delightful: "It shows how nature solves the problem of rolling signposts with geometric waste design."
    },
    sarcasm_or_wit: {
      observation: "Nothing says 'creative design' quite like putting the power button right next to the delete key on a keyboard.",
      observation_hi: "कीबोर्ड पर डिलीट की (Delete key) के ठीक बगल में पावर बटन रखने से बेहतर 'रचनात्मक डिजाइन' का कोई उदाहरण नहीं है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 62,
    riddle: {
      title: "The Silent Watcher",
      title_hi: "मूक दर्शक",
      question: "I have an eye but cannot see, I am sharp but have no mind. What am I?",
      question_hi: "मेरी एक आँख है लेकिन मैं देख नहीं सकता, मैं नुकीला हूँ लेकिन मेरे पास दिमाग नहीं है। मैं क्या हूँ?",
      reveal: "A needle.",
      reveal_hi: "एक सुई।"
    },
    joke: {
      setup: "Why did the chicken cross the playground?",
      setup_hi: "मुर्गी ने खेल का मैदान क्यों पार किया?",
      punchline: "To get to the other slide and pretend it was flying.",
      punchline_hi: "दूसरे स्लाइड पर जाने के लिए और नाटक करने के लिए कि वह उड़ रही है।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "In Switzerland, it is legally forbidden to own just one guinea pig. These animals are highly social, and having only one is considered an act of isolation and animal cruelty under local laws.",
      fact_hi: "स्विट्जरलैंड में कानूनन केवल एक गिनी पिग रखना मना है क्योंकि वे बहुत सामाजिक जीव होते हैं।",
      why_delightful: "It is wonderful to live in a country where the social happiness of small pets is protected by national constitution."
    },
    sarcasm_or_wit: {
      observation: "My gym membership is a monthly charitable donation to a building I visited once in January to check the air conditioning.",
      observation_hi: "मेरी जिम सदस्यता उस इमारत के लिए मासिक दान है जहां मैं जनवरी में एसी चेक करने गया था।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 63,
    riddle: {
      title: "The Water Companion",
      title_hi: "जल साथी",
      question: "I am born in water, I live in water, but if water touches me, I disappear. What am I?",
      question_hi: "मेरा जन्म पानी में होता है, मैं पानी में रहता हूँ, लेकिन अगर पानी मुझे छूता है, तो मैं गायब हो जाता हूँ। मैं क्या हूँ?",
      reveal: "Salt.",
      reveal_hi: "नमक।"
    },
    joke: {
      setup: "Why are developers afraid of the dark?",
      setup_hi: "डेवलपर्स अंधेरे से क्यों डरते हैं?",
      punchline: "Because that is when the bugs come out of the code.",
      punchline_hi: "क्योंकि तभी कोड से कीड़े (bugs) बाहर आते हैं।",
      type: "science"
    },
    fun_fact: {
      fact: "A single day on the planet Venus is longer than a whole Venusian year. Venus takes 243 Earth days to rotate once on its axis, but only 225 Earth days to travel around the Sun.",
      fact_hi: "शुक्र ग्रह पर एक दिन उसके पूरे एक वर्ष से भी अधिक लंबा होता है।",
      why_delightful: "It breaks our standard understanding of time, showing that a day can be longer than a year."
    },
    sarcasm_or_wit: {
      observation: "Adulthood is mostly just checking the weather forecast and then choosing to complain about it regardless of what it says.",
      observation_hi: "वयस्कता का मतलब मौसम का पूर्वानुमान देखना और फिर चाहे जो भी हो, उसकी शिकायत करना है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 64,
    riddle: {
      title: "The Growing Space",
      title_hi: "बढ़ता स्थान",
      question: "The more you take away from me, the larger I become. What am I?",
      question_hi: "आप मुझसे जितना अधिक छीनेंगे, मैं उतना ही बड़ा होता जाऊंगा। मैं क्या हूँ?",
      reveal: "A hole.",
      reveal_hi: "एक गड्ढा।"
    },
    joke: {
      setup: "Why do we buy books and then just stack them as decorative towers?",
      setup_hi: "हम किताबें क्यों खरीदते हैं और फिर उन्हें सजावटी मीनारों की तरह ढेर कर देते हैं?",
      punchline: "We are hoping to absorb the knowledge through geological pressure.",
      punchline_hi: "हमें उम्मीद है कि हम भूवैज्ञानिक दबाव के माध्यम से ज्ञान को अवशोषित कर लेंगे।",
      type: "observational"
    },
    fun_fact: {
      fact: "Cleopatra lived closer in time to the launch of the iPhone than she did to the building of the Great Pyramid of Giza. The pyramid was built around 2560 BC, while Cleopatra lived around 30 BC.",
      fact_hi: "क्लियोपेट्रा का समय मिस्र के पिरामिडों के निर्माण की तुलना में आईफोन के लॉन्च के अधिक करीब है।",
      why_delightful: "It makes historical timelines feel incredibly close, showing how old human history really is."
    },
    sarcasm_or_wit: {
      observation: "We live in an age where our phones are smart, but we spend hours trying to explain to our auto-correct that we actually meant 'that word'.",
      observation_hi: "हम उस युग में रहते हैं जहां फोन स्मार्ट हैं, लेकिन हम ऑटो-करेक्ट को समझाने में घंटों बिताते हैं।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 65,
    riddle: {
      title: "The Safe Box",
      title_hi: "सुरक्षित डिब्बा",
      question: "I have no hinges, no key, no lid, yet golden treasure inside is hid. What am I?",
      question_hi: "मेरा कोई कब्जा (hinge) नहीं है, कोई चाबी नहीं, कोई ढक्कन नहीं, फिर भी अंदर सुनहरा खजाना छिपा है। मैं क्या हूँ?",
      reveal: "An egg.",
      reveal_hi: "एक अंडा।"
    },
    joke: {
      setup: "Why do uncles at weddings dance with an invisible plate in their hands?",
      setup_hi: "शादियों में चाचा-ताऊ अपने हाथों में एक अदृश्य प्लेट लेकर क्यों नाचते हैं?",
      punchline: "It is the ancient ritual of balancing food intake with dance energy.",
      punchline_hi: "यह नृत्य ऊर्जा के साथ भोजन सेवन को संतुलित करने की प्राचीन रस्म है।",
      type: "desi"
    },
    fun_fact: {
      fact: "The heart of a blue whale is so large that a human child could swim through its main arteries. The heart weighs about 400 pounds, similar to the size of a small car.",
      fact_hi: "ब्लू व्हेल का दिल इतना बड़ा होता है कि एक बच्चा उसकी धमनियों में तैर सकता है।",
      why_delightful: "It reveals the massive scale of life in our oceans, rendering biological mechanics on a scale of architecture."
    },
    sarcasm_or_wit: {
      observation: "The laundry basket is a magical portal that generates new dirty clothes the moment you finish folding the clean ones.",
      observation_hi: "कपड़ों की टोकरी एक जादुई द्वार है जो साफ कपड़ों को मोड़ते ही गंदे कपड़े पैदा कर देती है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 66,
    riddle: {
      title: "The Paper Message",
      title_hi: "कागज का संदेश",
      question: "I have wings of paper but I cannot fly, I speak to you from lands far and wide. What am I?",
      question_hi: "मेरे पास कागज के पंख हैं लेकिन मैं उड़ नहीं सकता, मैं दूर-दूर के देशों से आपसे बात करता हूँ। मैं क्या हूँ?",
      reveal: "A letter.",
      reveal_hi: "एक पत्र।"
    },
    joke: {
      setup: "Why did the belt go to jail?",
      setup_hi: "बेल्ट जेल क्यों गई?",
      punchline: "For holding up a pair of pants against their will.",
      punchline_hi: "पेंट को उनकी इच्छा के विरुद्ध पकड़कर रखने के लिए।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Honeybees can recognize human faces. Researchers have trained bees to associate specific human faces with sugary rewards, showing that their small brains are capable of detailed pattern recognition.",
      fact_hi: "मधुमक्खियां इंसानी चेहरों को पहचान सकती हैं और उन्हें याद रख सकती हैं।",
      why_delightful: "It is sweet to think that a bee might recognize you when you walk in a garden, connecting us to tiny insects."
    },
    sarcasm_or_wit: {
      observation: "Telling your dog 'I will be right back' is a legally binding contract that must be honored at all costs to prevent sadness.",
      observation_hi: "अपने कुत्ते से 'मैं अभी वापस आऊंगा' कहना एक कानूनी रूप से बाध्यकारी वादा है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 67,
    riddle: {
      title: "The Empty Traveler",
      title_hi: "खाली यात्री",
      question: "I go in dry and come out wet, the longer I stay, the stronger I get. What am I?",
      question_hi: "मैं सूखा अंदर जाता हूँ और गीला बाहर आता हूँ, जितना अधिक समय तक मैं रहता हूँ, उतना ही मजबूत होता जाता हूँ। मैं क्या हूँ?",
      reveal: "A tea bag.",
      reveal_hi: "चाय का थैला (Tea bag)।"
    },
    joke: {
      setup: "Why did the picture go to jail?",
      setup_hi: "तस्वीर जेल क्यों गई?",
      punchline: "Because it was framed for a crime it didn't commit.",
      punchline_hi: "क्योंकि उसे उस अपराध के लिए फंसाया (framed) गया था जो उसने नहीं किया था।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Bananas are slightly radioactive because they contain high levels of potassium, a small portion of which is the isotope potassium-forty. You would need to eat ten million bananas at once to die of radiation.",
      fact_hi: "केले थोड़े रेडियोधर्मी होते हैं क्योंकि उनमें पोटेशियम होता है।",
      why_delightful: "It shows that nuclear physics is present in our grocery store, inside a humble yellow fruit."
    },
    sarcasm_or_wit: {
      observation: "The best way to wake up feeling completely exhausted is to go to bed early so you can get a full eight hours of sleep.",
      observation_hi: "सुबह थका हुआ महसूस करने का सबसे अच्छा तरीका आठ घंटे की नींद के लिए जल्दी सो जाना है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 68,
    riddle: {
      title: "The Mirror of Time",
      title_hi: "समय का दर्पण",
      question: "I can bring back the past, show you the present, and hold your memories forever, yet I am just a sheet of paper. What am I?",
      question_hi: "मैं अतीत को वापस ला सकता हूँ, आपको वर्तमान दिखा सकता हूँ, और आपकी यादों को हमेशा के लिए संजो सकता हूँ, फिर भी मैं सिर्फ कागज का एक पन्ना हूँ। मैं क्या हूँ?",
      reveal: "A photograph.",
      reveal_hi: "एक तस्वीर।"
    },
    joke: {
      setup: "Why did the bicycle refuse to stand up?",
      setup_hi: "साइकिल ने खड़े होने से क्यों मना कर दिया?",
      punchline: "Because it was two-tired and needed a rest on the lawn.",
      punchline_hi: "क्योंकि वह बहुत थक गई थी और उसे घास पर आराम की जरूरत थी।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "The Eiffel Tower grows up to 15 centimeters taller during the hot summer months due to thermal expansion. The metal structure expands in heat and contracts when the winter cold returns.",
      fact_hi: "गर्मियों के दौरान एफिल टॉवर थर्मल विस्तार के कारण 15 सेंटीमीटर तक बढ़ सकता है।",
      why_delightful: "It makes a solid iron monument feel alive, stretching to reach the warm summer sun."
    },
    sarcasm_or_wit: {
      observation: "Nothing is more humbling than searching for your glasses for ten minutes while using their lenses to scan the living room.",
      observation_hi: "कमरे में चश्मा ढूंढने से ज्यादा विनम्र अनुभव कोई नहीं है जबकि वह आपके चेहरे पर लगा हो।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 69,
    riddle: {
      title: "The Black Skin",
      title_hi: "काली त्वचा",
      question: "I am black when you buy me, red when you use me, and grey when you throw me away. What am I?",
      question_hi: "जब आप मुझे खरीदते हैं तो मैं काला होता हूँ, जब आप मेरा उपयोग करते हैं तो लाल होता हूँ, और जब आप मुझे फेंकते हैं तो ग्रे होता हूँ। मैं क्या हूँ?",
      reveal: "Charcoal.",
      reveal_hi: "कोयला।"
    },
    joke: {
      setup: "Why did the light bulb fail its exam?",
      setup_hi: "लाइट बल्ब अपनी परीक्षा में क्यों फेल हो गया?",
      punchline: "Because it wasn't bright enough to understand the questions.",
      punchline_hi: "क्योंकि वह सवालों को समझने के लिए पर्याप्त समझदार (bright) नहीं था।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Apollo astronauts reported that moon dust smells like spent gunpowder when brought into their spacecraft. The scent is likely due to the highly reactive, abrasive nature of fresh lunar dust particles.",
      fact_hi: "अपोलो अंतरिक्ष यात्रियों के अनुसार चांद की धूल से जले हुए बारूद जैसी गंध आती है।",
      why_delightful: "It gives a sensory connection to space exploration, showing that even the moon has a specific smell."
    },
    sarcasm_or_wit: {
      observation: "Saying 'no offense' right before saying something incredibly offensive is the ultimate social cheat code of modern communication.",
      observation_hi: "कोई अपमानजनक बात कहने से ठीक पहले 'बुरा मत मानना' कहना बातचीत का एक शॉर्टकट है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 70,
    riddle: {
      title: "The One-Way Gate",
      title_hi: "एकतरफा दरवाजा",
      question: "What goes up but never comes down?",
      question_hi: "क्या ऊपर जाता है लेकिन कभी नीचे नहीं आता?",
      reveal: "Your age.",
      reveal_hi: "आपकी उम्र।"
    },
    joke: {
      setup: "Why do we keep staring at the loading bar hoping it will move faster?",
      setup_hi: "हम लोडिंग बार को क्यों घूरते रहते हैं यह उम्मीद करते हुए कि वह तेजी से चलेगा?",
      punchline: "We believe our intense gaze has a physical force on the bits.",
      punchline_hi: "हमारा मानना है कि हमारी तीव्र दृष्टि का उन बिट्स पर एक भौतिक प्रभाव पड़ता है।",
      type: "observational"
    },
    fun_fact: {
      fact: "Sea otters hold hands while they sleep to keep from drifting apart in ocean currents. They form groups called rafts and sometimes anchor themselves to giant kelp beds to stay safe.",
      fact_hi: "समुद्री ऊदबिलाव सोते समय एक-दूसरे का हाथ पकड़ लेते हैं ताकि वे बह न जाएं।",
      why_delightful: "It is a beautiful evolutionary solution where companionship is a vital survival mechanism against the sea."
    },
    sarcasm_or_wit: {
      observation: "Using the phrase 'per my last email' is the professional equivalent of asking someone if they actually know how to read words.",
      observation_hi: "'मेरे पिछले ईमेल के अनुसार' लिखना यह पूछने का सभ्य तरीका है कि क्या आप पढ़ना जानते हैं।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 71,
    riddle: {
      title: "The Ring of Truth",
      title_hi: "सच्चाई का छल्ला",
      question: "I have no voice, but I tell you everything. I have no hands, but I point to the hour. What am I?",
      question_hi: "मेरी कोई आवाज़ नहीं है, लेकिन मैं आपको सब कुछ बताता हूँ। मेरे पास हाथ नहीं हैं, लेकिन मैं घंटे की ओर इशारा करता हूँ। मैं क्या हूँ?",
      reveal: "A sundial.",
      reveal_hi: "एक धूपघड़ी।"
    },
    joke: {
      setup: "Why did the scarecrow become a successful manager?",
      setup_hi: "पुतला (scarecrow) एक सफल मैनेजर क्यों बन गया?",
      punchline: "Because he was outstanding in his field and never complained about meetings.",
      punchline_hi: "क्योंकि वह अपने क्षेत्र में उत्कृष्ट था और कभी बैठकों की शिकायत नहीं करता था।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Cows have best friends and experience severe stress when they are separated from their favorite companions. Farmers have measured elevated heart rates in cows kept away from their best buddies.",
      fact_hi: "गायों के पक्के दोस्त (best friends) होते हैं और अलग होने पर वे तनाव महसूस करती हैं।",
      why_delightful: "It reveals that emotional bonding and social comfort are not unique to humans but shared across mammals."
    },
    sarcasm_or_wit: {
      observation: "Staring at the food rotating inside the microwave is the ultimate test of human patience and modern domestic entertainment.",
      observation_hi: "माइक्रोवेव में घूमते हुए भोजन को देखना मानव धैर्य और आधुनिक मनोरंजन की परीक्षा है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 72,
    riddle: {
      title: "The Tree without Leaves",
      title_hi: "बिना पत्तों का पेड़",
      question: "I have branches but no leaves, I have trunk but no bark, I stand in the city to light up the dark. What am I?",
      question_hi: "मेरी शाखाएँ हैं लेकिन पत्ते नहीं, मेरे पास तना है लेकिन छाल नहीं, मैं अंधेरे को रोशन करने के लिए शहर में खड़ा हूँ। मैं क्या हूँ?",
      reveal: "A lamppost.",
      reveal_hi: "एक लैम्पपोस्ट (बिजली का खंभा)।"
    },
    joke: {
      setup: "Why did the astronaut break up with his girlfriend?",
      setup_hi: "अंतरिक्ष यात्री ने अपनी प्रेमिका से नाता क्यों तोड़ लिया?",
      punchline: "Because he needed more space to explore other stars.",
      punchline_hi: "क्योंकि उसे अन्य तारों की खोज के लिए अधिक स्थान (space) की आवश्यकता थी।",
      type: "science"
    },
    fun_fact: {
      fact: "There are more trees on planet Earth than there are stars in the Milky Way galaxy. The Earth has about three trillion trees, while the galaxy contains between 100 and 400 billion stars.",
      fact_hi: "पृथ्वी पर मौजूद पेड़ों की संख्या मिल्की वे आकाशगंगा में मौजूद तारों की संख्या से अधिक है।",
      why_delightful: "It restores our pride in our green home, showing that we have a forest of stars right under our feet."
    },
    sarcasm_or_wit: {
      observation: "Checking your phone for the time, locking it, and then instantly forgetting what time it was is a daily superpower we all possess.",
      observation_hi: "समय देखने के लिए फोन चेक करना, उसे लॉक करना और तुरंत समय भूल जाना एक दैनिक महाशक्ति है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 73,
    riddle: {
      title: "The Heavy Companion",
      title_hi: "भारी साथी",
      question: "What weighs more, a pound of feathers or a pound of iron?",
      question_hi: "किसका वजन अधिक होता है, एक पाउंड पंख या एक पाउंड लोहा?",
      reveal: "They weigh the same.",
      reveal_hi: "दोनों का वजन समान होता है।"
    },
    joke: {
      setup: "Why did the cookie go to the doctor?",
      setup_hi: "कुकी डॉक्टर के पास क्यों गई?",
      punchline: "Because it was feeling crumbly and weak.",
      punchline_hi: "क्योंकि वह बहुत कमजोर और टूटी-टूटी (crumbly) महसूस कर रही थी।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "A cloud can weigh more than a million pounds, which is equivalent to about 100 elephants. It floats because the water droplets are spread out over a volume that is less dense than the surrounding air.",
      fact_hi: "एक औसत बादल का वजन लगभग ग्यारह लाख पाउंड होता है, जो सौ हाथियों के बराबर है।",
      why_delightful: "It is amazing to realize that massive weights are floating gracefully right above our heads like soft pillows."
    },
    sarcasm_or_wit: {
      observation: "Lowering the car radio volume while looking for a specific street address is essential to help our eyes see the house numbers.",
      observation_hi: "गली का पता ढूंढते समय कार रेडियो की आवाज़ कम करना आँखों को देखने में मदद करने के लिए जरूरी है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 74,
    riddle: {
      title: "The Cold Runner",
      title_hi: "ठंडा धावक",
      question: "I run all day but never get hot, I have a mouth but never eat. What am I?",
      question_hi: "मैं दिन भर दौड़ता हूँ लेकिन कभी गर्म नहीं होता, मेरा एक मुँह है लेकिन कभी खाता नहीं हूँ। मैं क्या हूँ?",
      reveal: "A river.",
      reveal_hi: "एक नदी।"
    },
    joke: {
      setup: "Why did the physics teacher jump off the building?",
      setup_hi: "भौतिकी के शिक्षक ने इमारत से छलांग क्यों लगा दी?",
      punchline: "To prove that gravity is not just a theory but a physical reality.",
      punchline_hi: "यह साबित करने के लिए कि गुरुत्वाकर्षण केवल एक सिद्धांत नहीं बल्कि एक भौतिक वास्तविकता है।",
      type: "science"
    },
    fun_fact: {
      fact: "Sloths can hold their breath underwater for up to 40 minutes by slowing down their heart rate to a third of its normal speed. This is longer than dolphins can stay submerged.",
      fact_hi: "सुस्त जानवर (sloths) पानी के भीतर अपनी सांस को चालीस मिनट तक रोक सकते हैं।",
      why_delightful: "It is a funny contrast where the slowest land animal becomes an elite free-diver in tropical rivers."
    },
    sarcasm_or_wit: {
      observation: "Agreeing to a software update's terms of service is our collective modern act of pure, blind faith in unseen corporate engineers.",
      observation_hi: "सॉफ्टवेयर शर्तों को बिना पढ़े स्वीकार करना आधुनिक समय का सबसे बड़ा अंधविश्वास है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 75,
    riddle: {
      title: "The Soft Wall",
      title_hi: "नरम दीवार",
      question: "I can hold water but I am full of holes. What am I?",
      question_hi: "मैं पानी रोक सकता हूँ लेकिन मैं छेदों से भरा हूँ। मैं क्या हूँ?",
      reveal: "A sponge.",
      reveal_hi: "एक स्पंज।"
    },
    joke: {
      setup: "Why do we feel the urge to clean the house only when we have an exam next day?",
      setup_hi: "हमें अगले दिन परीक्षा होने पर ही घर साफ करने की इच्छा क्यों होती है?",
      punchline: "Because clean desk is the ultimate psychological defense against bad grades.",
      punchline_hi: "क्योंकि साफ डेस्क खराब ग्रेड के खिलाफ अंतिम मनोवैज्ञानिक ढाल है।",
      type: "observational"
    },
    fun_fact: {
      fact: "Octopuses have three hearts and their blood is blue because it is rich in copper rather than iron. When they swim, their main heart stops beating, which is why they prefer crawling.",
      fact_hi: "ऑक्टोपस के पास तीन दिल होते हैं और तांबे की अधिकता के कारण उनका खून नीला होता है।",
      why_delightful: "It confirms that the ocean depths hold creatures that are biologically alien to our land-based rules."
    },
    sarcasm_or_wit: {
      observation: "Cybersecurity innovation peaked when we started writing our complex passwords on post-it notes and sticking them to our monitors.",
      observation_hi: "साइबर सुरक्षा तब अपने चरम पर थी जब हमने पासवर्ड को नोट पर लिखकर मॉनिटर पर चिपकाना शुरू किया।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 76,
    riddle: {
      title: "The Lock without Key",
      title_hi: "बिना चाबी का ताला",
      question: "I have no door but you can enter me, I have no key but you can unlock me with a click. What am I?",
      question_hi: "मेरा कोई दरवाजा नहीं है लेकिन आप मुझमें प्रवेश कर सकते हैं, मेरी कोई चाबी नहीं है लेकिन आप एक क्लिक से मुझे अनलॉक कर सकते हैं। मैं क्या हूँ?",
      reveal: "A website.",
      reveal_hi: "एक वेबसाइट।"
    },
    joke: {
      setup: "Why do uncles at weddings keep checking their watches every five minutes?",
      setup_hi: "शादियों में चाचा-ताऊ हर पांच मिनट में अपनी घड़ी क्यों चेक करते रहते हैं?",
      punchline: "To calculate if they have spent enough time to justify eating the sweets.",
      punchline_hi: "यह गणना करने के लिए कि क्या उन्होंने मिठाई खाने को सही ठहराने के लिए पर्याप्त समय बिताया है।",
      type: "desi"
    },
    fun_fact: {
      fact: "Koalas have unique fingerprints that are nearly identical to human fingerprints, even under electron microscopes. This has occasionally confused police detectives at Australian crime scenes.",
      fact_hi: "कोआला के फिंगरप्रिंट इंसानों के इतने समान होते हैं कि अंतर करना मुश्किल होता है।",
      why_delightful: "It shows how evolutionary patterns repeat across distant mammal branches, giving marsupials our identifiers."
    },
    sarcasm_or_wit: {
      observation: "Nothing says 'I value your time' quite like scheduling a one-hour meeting to read a three-sentence email out loud to ten people.",
      observation_hi: "समय की कद्र करने का इससे अच्छा तरीका नहीं है कि एक ईमेल को दस लोगों के सामने मीटिंग में पढ़ा जाए।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 77,
    riddle: {
      title: "The Small House",
      title_hi: "छोटा घर",
      question: "A house of bone, a roof of stone, I carry my home wherever I roam. What am I?",
      question_hi: "हड्डी का घर, पत्थर की छत, मैं जहाँ भी जाता हूँ अपना घर साथ ले जाता हूँ। मैं क्या हूँ?",
      reveal: "A turtle.",
      reveal_hi: "एक कछुआ।"
    },
    joke: {
      setup: "Why did the skeleton refuse to go to the party?",
      setup_hi: "कंकाल ने पार्टी में जाने से क्यों मना कर दिया?",
      punchline: "Because he had no body to dance with.",
      punchline_hi: "क्योंकि उसके पास नाचने के लिए कोई शरीर (nobody) नहीं था।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "The pleasant smell of dry earth after rain is called petrichor. It is produced by geosmin, an organic compound released by soil bacteria when the humidity rises, triggering human olfactory senses.",
      fact_hi: "बारिश के बाद सूखी मिट्टी से आने वाली सोंधी महक को पेट्रीचोर कहते हैं।",
      why_delightful: "It links our senses directly to the ancient chemistry of our soil, signaling life and growth."
    },
    sarcasm_or_wit: {
      observation: "Modern adulthood is mostly just being tired and talking about how tired you are to other tired people in a quiet office.",
      observation_hi: "आधुनिक वयस्कता सिर्फ थका हुआ महसूस करना और दूसरे थके हुए लोगों से इसकी चर्चा करना है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 78,
    riddle: {
      title: "The Golden Skin",
      title_hi: "सुनहरी त्वचा",
      question: "I wear a yellow coat, I am sweet and soft, monkeys love me, what am I?",
      question_hi: "मैं पीले रंग का कोट पहनता हूँ, मैं मीठा और नरम हूँ, बंदर मुझे पसंद करते हैं, मैं क्या हूँ?",
      reveal: "A banana.",
      reveal_hi: "एक केला।"
    },
    joke: {
      setup: "Why did the computer catch cold?",
      setup_hi: "कंप्यूटर को सर्दी क्यों लग गई?",
      punchline: "Because it left its Windows open in the winter breeze.",
      punchline_hi: "क्योंकि उसने सर्दियों की हवा में अपनी विंडोज खुली छोड़ दी थीं।",
      type: "science"
    },
    fun_fact: {
      fact: "Flamingos are not born pink. They are born with grey feathers and turn pink over time due to their diet of brine shrimp and blue-green algae, which are rich in organic carotenoid pigments.",
      fact_hi: "फ्लेमिंगो का जन्म ग्रे पंखों के साथ होता है और उनके विशेष आहार के कारण वे गुलाबी हो जाते हैं।",
      why_delightful: "It proves that we literally are what we eat, transforming a simple dinner menu into a vibrant pink costume."
    },
    sarcasm_or_wit: {
      observation: "Coffee is the magical potion that turns 'leave me alone or suffer' into 'good morning, dear colleagues, let's collaborate.'",
      observation_hi: "कॉफी वह जादुई पेय है जो सुबह के गुस्से को 'सुप्रभात सहकर्मियों' में बदल देता है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 79,
    riddle: {
      title: "The Unseen Network",
      title_hi: "अदृश्य जाल",
      question: "I connect the world but have no wires, I hold all knowledge but have no pages. What am I?",
      question_hi: "मैं दुनिया को जोड़ता हूँ लेकिन कोई तार नहीं हैं, मैं सारा ज्ञान रखता हूँ लेकिन कोई पन्ने नहीं हैं। मैं क्या हूँ?",
      reveal: "The internet.",
      reveal_hi: "इंटरनेट।"
    },
    joke: {
      setup: "Why did the golfer wear two pairs of pants?",
      setup_hi: "गोल्फर ने दो जोड़ी पैंट क्यों पहनी थी?",
      punchline: "In case he got a hole in one.",
      punchline_hi: "यदि उसे एक में छेद (hole in one) हो जाए।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Before trees existed on land, the Earth was covered in giant mushrooms that grew up to 24 feet tall and 3 feet wide. These organisms, called Prototaxites, dominated the Devonian landscape.",
      fact_hi: "पेड़ों के अस्तित्व में आने से पहले पृथ्वी पर 24 फीट ऊंचे विशाल मशरूम मौजूद थे।",
      why_delightful: "It shows how alien our own planet looked millions of years ago, covered in giant fungal towers."
    },
    sarcasm_or_wit: {
      observation: "I have decided to delete my social media accounts, but I will keep them active just in case I need to log in to tell people I deleted them.",
      observation_hi: "मैंने सोशल मीडिया अकाउंट डिलीट करने का निर्णय लिया है, लेकिन उन्हें सक्रिय रखूँगा ताकि लोगों को बता सकूँ।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 80,
    riddle: {
      title: "The Sharp Teeth",
      title_hi: "नुकीले दांत",
      question: "I have many teeth but cannot bite, I help you keep your hair looking right. What am I?",
      question_hi: "मेरे कई दांत हैं लेकिन मैं काट नहीं सकता, मैं आपके बालों को ठीक रखने में मदद करता हूँ। मैं क्या हूँ?",
      reveal: "A comb.",
      reveal_hi: "एक कंघी।"
    },
    joke: {
      setup: "Why did the clock get punished?",
      setup_hi: "घड़ी को सजा क्यों मिली?",
      punchline: "Because it was constantly telling the truth but moving backward.",
      punchline_hi: "क्योंकि वह लगातार सच बोल रही थी लेकिन पीछे की ओर चल रही थी।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "The immortal jellyfish, Turritopsis dohrnii, can revert its cells back to their youngest polyp form when damaged or starving, starting its life cycle over and avoiding old age indefinitely.",
      fact_hi: "टुरिटोप्सिस डोहर्नी नाम की जेलीफिश जैविक रूप से अमर है क्योंकि यह अपनी कोशिकाओं को वापस पुरानी अवस्था में ले जा सकती है।",
      why_delightful: "It is nature's own reset button, proving that biological aging is not an absolute rule but a process."
    },
    sarcasm_or_wit: {
      observation: "Watching a tutorial video for ten minutes but choosing to do the task by trial and error is our preferred method of self-education.",
      observation_hi: "ट्यूटोरियल देखना लेकिन काम को ट्रायल और एरर विधि से करना हमारा पसंदीदा तरीका है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 81,
    riddle: {
      title: "The Sweet Drop",
      title_hi: "मीठी बूंद",
      question: "I am made by bees, sweet as sugar, golden and thick. What am I?",
      question_hi: "मैं मधुमक्खियों द्वारा बनाया जाता हूँ, चीनी की तरह मीठा, सुनहरा और गाढ़ा। मैं क्या हूँ?",
      reveal: "Honey.",
      reveal_hi: "शहद।"
    },
    joke: {
      setup: "Why do we say 'just checking' when we get caught looking at something we shouldn't?",
      setup_hi: "जब हम किसी ऐसी चीज को देखते हुए पकड़े जाते हैं जिसे हमें नहीं देखना चाहिए, तो हम 'बस चेक कर रहे थे' क्यों कहते हैं?",
      punchline: "It is the universal linguistic shield for curiosity.",
      punchline_hi: "यह जिज्ञासा के लिए सार्वभौमिक भाषाई ढाल है।",
      type: "observational"
    },
    fun_fact: {
      fact: "Woodpecker tongues are so long that they wrap around their skulls to protect their brains from damage when they are drumming on wood. The tongue acts as a biological shock absorber.",
      fact_hi: "कटफोड़वा (woodpecker) की जीभ उसके पूरे सिर में घूमकर उसके दिमाग को झटके से बचाती है।",
      why_delightful: "It is an engineering marvel of biology, turning a simple tongue into a protective helmet for the brain."
    },
    sarcasm_or_wit: {
      observation: "Agreeing to meet someone next month is easy because next month's version of you doesn't exist yet to feel the regret of agreeing.",
      observation_hi: "अगले महीने मिलने के लिए सहमत होना आसान है क्योंकि अगले महीने वाला आप अभी अस्तित्व में नहीं है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 82,
    riddle: {
      title: "The White Bird",
      title_hi: "सफेद पक्षी",
      question: "I have no wings but I can fly, I am made of paper and rise up high in the windy sky. What am I?",
      question_hi: "मेरे पास पंख नहीं हैं लेकिन मैं उड़ सकता हूँ, मैं कागज से बना हूँ और हवादार आसमान में ऊँचा उठता हूँ। मैं क्या हूँ?",
      reveal: "A kite.",
      reveal_hi: "एक पतंग।"
    },
    joke: {
      setup: "Why do mothers keep empty ice cream boxes in the freezer?",
      setup_hi: "माताएं फ्रीजर में खाली आइसक्रीम के डिब्बे क्यों रखती हैं?",
      punchline: "To store frozen peas and disappoint their children's hopes.",
      punchline_hi: "फ्रोजन मटर रखने के लिए और अपने बच्चों की उम्मीदों को निराश करने के लिए।",
      type: "desi"
    },
    fun_fact: {
      fact: "An average adult human body contains enough iron to forge a metal nail that is three inches long. This iron is primarily found in the hemoglobin of red blood cells to transport oxygen.",
      fact_hi: "एक वयस्क मानव शरीर में तीन इंच लंबी लोहे की कील बनाने के लिए पर्याप्त लोहा होता है।",
      why_delightful: "It reminds us that we are literally built from mineral elements forged in the hearts of dying stars."
    },
    sarcasm_or_wit: {
      observation: "Adulthood is just walking into a room, forgetting why you entered, and then walking back out hoping the memory returns in the hallway.",
      observation_hi: "वयस्कता कमरे में जाना, भूल जाना कि क्यों गए थे, और वापस बाहर आना है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 83,
    riddle: {
      title: "The Round Face",
      title_hi: "गोल चेहरा",
      question: "I have no eyes, no nose, no mouth, but I have twelve numbers and two hands. What am I?",
      question_hi: "मेरे पास आँखें, नाक, मुँह नहीं हैं, लेकिन मेरे पास बारह नंबर और दो हाथ हैं। मैं क्या हूँ?",
      reveal: "A clock.",
      reveal_hi: "एक घड़ी।"
    },
    joke: {
      setup: "Why did the cell phone wear glasses?",
      setup_hi: "सेल फोन ने चश्मा क्यों पहना था?",
      punchline: "Because it lost its contacts in the update.",
      punchline_hi: "क्योंकि उसने अपडेट में अपने संपर्क (contacts) खो दिए थे।",
      type: "science"
    },
    fun_fact: {
      fact: "Crows can recognize human faces and can remember them for several years. They also communicate this information to other members of their flock, teaching them which humans to avoid.",
      fact_hi: "कौवे इंसानी चेहरों को पहचान सकते हैं और कई सालों तक याद रख सकते हैं।",
      why_delightful: "It reveals a high level of social communication and intelligence inside a bird we see in the city."
    },
    sarcasm_or_wit: {
      observation: "The speed at which a human cleans their house is directly proportional to how close their guests are to the front door.",
      observation_hi: "घर साफ करने की गति मेहमानों के दरवाजे के कितना पास होने के सीधे आनुपातिक होती है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 84,
    riddle: {
      title: "The Green Umbrella",
      title_hi: "हरा छाता",
      question: "I stand on one leg, wear a green dress, and provide shade to all travelers. What am I?",
      question_hi: "मैं एक पैर पर खड़ा रहता हूँ, हरी पोशाक पहनता हूँ, और सभी यात्रियों को छाया प्रदान करता हूँ। मैं क्या हूँ?",
      reveal: "A tree.",
      reveal_hi: "एक पेड़।"
    },
    joke: {
      setup: "Why did the math class feel like a jungle?",
      setup_hi: "गणित की कक्षा जंगल जैसी क्यों लग रही थी?",
      punchline: "Because there were too many roots and exponents hanging around.",
      punchline_hi: "क्योंकि वहां बहुत सारे रूट्स (roots) और घातांक लटके हुए थे।",
      type: "science"
    },
    fun_fact: {
      fact: "The total weight of all the ants on Earth is roughly equal to the total weight of all the humans on the planet. Ants outnumber humans by about one million to one, keeping ecosystems balanced.",
      fact_hi: "पृथ्वी पर सभी चींटियों का कुल वजन लगभग सभी मनुष्यों के कुल वजन के बराबर है।",
      why_delightful: "It shows the massive collective power of tiny insects, managing the soil right under our feet."
    },
    sarcasm_or_wit: {
      observation: "Nothing makes you realize how old you are quite like making a noise when you sit down and a different noise when you stand up.",
      observation_hi: "बैठते समय आवाज करना और उठते समय दूसरी आवाज करना उम्र का अहसास कराता है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 85,
    riddle: {
      title: "The Black Board",
      title_hi: "काला बोर्ड",
      question: "I am clean when I am black, and dirty when I am white. What am I?",
      question_hi: "जब मैं काला होता हूँ तो साफ होता हूँ, और जब सफेद होता हूँ तो गंदा होता हूँ। मैं क्या हूँ?",
      reveal: "A blackboard.",
      reveal_hi: "एक ब्लैकबोर्ड।"
    },
    joke: {
      setup: "Why did the sun refuse to go to college?",
      setup_hi: "सूर्य ने कॉलेज जाने से क्यों मना कर दिया?",
      punchline: "Because it already had millions of degrees.",
      punchline_hi: "क्योंकि उसके पास पहले से ही करोड़ों डिग्री थीं।",
      type: "science"
    },
    fun_fact: {
      fact: "Puffins use small wooden sticks to scratch their backs, representing one of the few observed cases of seabirds using tools. This behavior shows their problem-solving skills in the wild.",
      fact_hi: "पफिन (Puffins) अपनी पीठ खुजलाने के लिए छोटी लकड़ी की तीली का उपयोग करते हैं, जो उनके टूल उपयोग को दर्शाता है।",
      why_delightful: "It is adorable to think of a small sea bird finding a back-scratcher in the ocean driftwood."
    },
    sarcasm_or_wit: {
      observation: "I have a lot of productive things to do today, so I will start by reorganizing my desktop icons for three hours.",
      observation_hi: "आज मेरे पास बहुत सारे काम हैं, इसलिए मैं तीन घंटे डेस्कटॉप आइकॉन व्यवस्थित करने से शुरुआत करूँगा।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 86,
    riddle: {
      title: "The Cold House",
      title_hi: "ठंडा घर",
      question: "I am a box that keeps your food cold and fresh, humming all day. What am I?",
      question_hi: "मैं एक ऐसा डिब्बा हूँ जो आपके भोजन को ठंडा और ताजा रखता है, दिन भर गुनगुनाता रहता है। मैं क्या हूँ?",
      reveal: "A refrigerator.",
      reveal_hi: "एक फ्रिज।"
    },
    joke: {
      setup: "Why did the pillow go to the gym?",
      setup_hi: "तकिया जिम क्यों गया?",
      punchline: "To get stuffed and lose some fluff.",
      punchline_hi: "भरवां होने के लिए और कुछ फुला हुआ हिस्सा कम करने के लिए।",
      type: "absurdist"
    },
    fun_fact: {
      fact: "The tongue of a blue whale is so heavy that it weighs as much as an entire adult elephant. It is used to push water out of the whale's mouth while keeping small shrimp inside.",
      fact_hi: "ब्लू व्हेल की जीभ का वजन एक पूरे वयस्क हाथी के बराबर होता है।",
      why_delightful: "It shows the massive proportions of the blue whale, whose single muscle matches the weight of land giants."
    },
    sarcasm_or_wit: {
      observation: "The first thirty years of childhood are always the hardest, after that you get used to being tired all the time.",
      observation_hi: "बचपन के पहले तीस साल हमेशा सबसे कठिन होते हैं, उसके बाद आपको थकान की आदत हो जाती है।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 87,
    riddle: {
      title: "The Fire Carrier",
      title_hi: "आग ले जाने वाला",
      question: "I am a small wooden stick with a red head, scratch me and I bring fire. What am I?",
      question_hi: "मैं लाल सिर वाली लकड़ी की एक छोटी सी तीली हूँ, मुझे रगड़ो और मैं आग लाता हूँ। मैं क्या हूँ?",
      reveal: "A matchstick.",
      reveal_hi: "एक माचिस की तीली।"
    },
    joke: {
      setup: "Why do we always buy vegetables that we know we will throw away next week?",
      setup_hi: "हम हमेशा ऐसी सब्जियां क्यों खरीदते हैं जिन्हें हम जानते हैं कि हम अगले हफ्ते फेंक देंगे?",
      punchline: "It is a weekly ritual of hoping to become a healthier version of ourselves.",
      punchline_hi: "यह खुद का एक स्वस्थ संस्करण बनने की उम्मीद का एक साप्ताहिक अनुष्ठान है।",
      type: "observational"
    },
    fun_fact: {
      fact: "Squirrels are responsible for planting thousands of new trees every year because they bury acorns and seeds in the ground and then forget where they hid them, allowing them to grow.",
      fact_hi: "गिलहरियां हर साल हजारों पेड़ लगाती हैं क्योंकि वे बीज जमीन में गाड़कर भूल जाती हैं।",
      why_delightful: "It is a beautiful coincidence where forgetfulness turns into active environmental conservation."
    },
    sarcasm_or_wit: {
      observation: "Buying fresh vegetables is the ultimate act of optimism, usually followed by the realistic act of throwing them away next week.",
      observation_hi: "ताजी सब्जियां खरीदना आशावाद का चरम है, जिसे अगले हफ्ते फेंक दिया जाता है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 88,
    riddle: {
      title: "The White Road",
      title_hi: "सफेद सड़क",
      question: "I am drawn on a blackboard with chalk, leaving a white path behind me. What am I?",
      question_hi: "मुझे ब्लैकबोर्ड पर चाक से खींचा जाता है, जिससे मेरे पीछे एक सफेद रास्ता बन जाता है। मैं क्या हूँ?",
      reveal: "A chalk line.",
      reveal_hi: "चाक की रेखा।"
    },
    joke: {
      setup: "Why do Indian uncles put their hands on their hips when watching construction works?",
      setup_hi: "भारतीय चाचा निर्माण कार्यों को देखते समय अपने कूल्हों पर हाथ क्यों रखते हैं?",
      punchline: "To assume the posture of structural engineering authority.",
      punchline_hi: "संरचनात्मक इंजीनियरिंग अधिकार की मुद्रा ग्रहण करने के लिए।",
      type: "desi"
    },
    fun_fact: {
      fact: "Pineapples take almost three years to grow and mature from a single seed or slip. Only one pineapple is produced by a single plant in a year, making them highly valuable fruits.",
      fact_hi: "एक अनानास को बढ़ने और पकने में लगभग तीन साल का समय लगता है।",
      why_delightful: "It teaches us patience, reminding us that sweetness requires time and steady nourishment."
    },
    sarcasm_or_wit: {
      observation: "I am not saying I am lazy, I am just on energy-saving mode to help save the planet from unnecessary heat generation.",
      observation_hi: "मैं आलसी नहीं हूँ, मैं तो बस पृथ्वी को बचाने के लिए ऊर्जा-बचत मोड पर हूँ।",
      attribution: "Anonymous"
    }
  },
  {
    dayIndex: 89,
    riddle: {
      title: "The Red Liquid",
      title_hi: "लाल तरल",
      question: "I flow through your veins, bringing life to your body. What am I?",
      question_hi: "मैं आपकी नसों में बहता हूँ, आपके शरीर में जीवन लाता हूँ। मैं क्या हूँ?",
      reveal: "Blood.",
      reveal_hi: "रक्त।"
    },
    joke: {
      setup: "Why did the moon go to the bank?",
      setup_hi: "चाँद बैंक क्यों गया?",
      punchline: "To change its quarters and get a full balance.",
      punchline_hi: "अपने क्वार्टर बदलने और पूरा बैलेंस प्राप्त करने के लिए।",
      type: "science"
    },
    fun_fact: {
      fact: "Some sea snails have shells that are made of iron sulfide, which they gather from deep-ocean hydrothermal vents. This armor protects them from predators in extreme deep-sea pressure.",
      fact_hi: "कुछ समुद्री घोंघों के कवच लोहे के सल्फाइड से बने होते हैं जो उन्हें सुरक्षा देते हैं।",
      why_delightful: "It proves that nature designs iron-clad soldiers in the hot hydrothermal vents of the dark ocean."
    },
    sarcasm_or_wit: {
      observation: "Adulthood is buying a plant, watching it die slowly, and then buying a plastic version of the same plant to hide your failure.",
      observation_hi: "वयस्कता पौधा खरीदना, उसे मरते देखना, और फिर असफलता छिपाने के लिए प्लास्टिक का पौधा लाना है।",
      attribution: "Pravah"
    }
  },
  {
    dayIndex: 90,
    riddle: {
      title: "The Fast Runner",
      title_hi: "तेज धावक",
      question: "I fly without wings, and I change everything, but you can never see me. What am I?",
      question_hi: "मैं बिना पंखों के उड़ता हूँ, और मैं सब कुछ बदल देता हूँ, लेकिन आप मुझे कभी देख नहीं सकते। मैं क्या हूँ?",
      reveal: "Time.",
      reveal_hi: "समय।"
    },
    joke: {
      setup: "Why did the book go to the park?",
      setup_hi: "किताब पार्क क्यों गई?",
      punchline: "To let its leaves rustle in the wind.",
      punchline_hi: "हवा में अपने पत्तों को फड़फड़ाने देने के लिए।",
      type: "wordplay"
    },
    fun_fact: {
      fact: "Water can boil and freeze at the same time under specific temperature and pressure conditions, known as the triple point. At this point, the solid, liquid, and gas phases exist in balance.",
      fact_hi: "पानी एक ही समय में उबल भी सकता है और जम भी सकता है जिसे त्रिक बिंदु (triple point) कहते हैं।",
      why_delightful: "It breaks our binary logic of ice and fire, showing that opposites can meet in physical harmony."
    },
    sarcasm_or_wit: {
      observation: "We spend the first half of our lives wanting to be older, and the second half trying to figure out how to reset our knees.",
      observation_hi: "हम आधा जीवन बड़ा होने की इच्छा में बिताते हैं, और आधा जीवन घुटनों को ठीक करने में।",
      attribution: "Anonymous"
    }
  }
];
