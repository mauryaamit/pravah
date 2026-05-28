export interface NoorEntry {
  dayIndex: number;
  ignition: string;           // 1-3 lines. Spare. Visual. Kinetic.
  ignition_hi?: string;       // Hindi version
  attribution: string;        // "Marcus Aurelius" etc.
  attribution_context: string; // brief, factual context
  spark: string;              // 30-50 words. What they knew about showing up.
  invitation: string;         // One sentence. Opening.
}

export const NOOR_ENTRIES: NoorEntry[] = [
  {
    dayIndex: 1,
    ignition: "The path is dry clay,\ncracked by a thousand footsteps,\nwaiting for the hammer of the mind.",
    ignition_hi: "रास्ता सूखी मिट्टी है,\nहजारों कदमों से दरका हुआ,\nमन के हथौड़े की प्रतीक्षा में।",
    attribution: "B. R. Ambedkar",
    attribution_context: "Architect of the Indian Constitution and champion of social justice",
    spark: "Ambedkar recognized that social change does not arrive through passive waiting. It requires relentless mental application and structured effort. Showing up meant studying late into the night, compiling legal frameworks, and refusing to accept the quiet margins of history.",
    invitation: "Apply your intellect to a challenge you have been passively accepting."
  },
  {
    dayIndex: 2,
    ignition: "The stone falls through the air,\ndoing no wrong in its descent,\nseeking only the center of the earth.",
    ignition_hi: "पत्थर हवा से गिरता है,\nनीचे आते हुए कोई भूल नहीं करता,\nकेवल पृथ्वी के केंद्र को खोजता है।",
    attribution: "Marcus Aurelius",
    attribution_context: "Roman Emperor and Stoic philosopher writing during military campaigns",
    spark: "In the middle of plague and war, Aurelius wrote to remind himself that duty is simple. Showing up is not about emotional enthusiasm; it is about performing your nature as a rational being, steadily, without demanding applause from the crowd.",
    invitation: "Perform your primary task today without expecting recognition or praise."
  },
  {
    dayIndex: 3,
    ignition: "The clay pot is filled with river water,\nwater is in the pot, water is in the stream.\nOne shatter, and the light is naked.",
    ignition_hi: "मिट्टी का घड़ा नदी के जल से भरा है,\nजल घड़े में है, जल धारा में है।\nएक चोट, और प्रकाश नग्न है।",
    attribution: "Kabir",
    attribution_context: "15th-century mystic poet and weaver of Varanasi",
    spark: "Kabir saw the sacred in the ordinary work of weaving. For him, presence was not found in distant temples but in the rhythm of the loom. Showing up is recognizing that the ultimate truth is woven into this very breath.",
    invitation: "Find the sacred dimension in your most mundane chore today."
  },
  {
    dayIndex: 4,
    ignition: "The room grows narrow at dusk.\nYour hands are heavy in your lap,\nholding the unwritten letters of the year.",
    ignition_hi: "सांझ ढले कमरा संकरा हो जाता है।\nआपकी हथेलियां गोद में भारी हैं,\nसाल के अनलिखे पत्रों को थामे हुए।",
    attribution: "Rainer Maria Rilke",
    attribution_context: "Austrian lyric poet who wrote extensively on solitude and patience",
    spark: "Rilke knew that creation requires a willingness to live in uncertainty. Showing up means sitting quietly in the dark room, waiting for the inner voice to mature. We must love the questions themselves before we can live into the answers.",
    invitation: "Allow one difficult question in your life to remain unanswered today."
  },
  {
    dayIndex: 5,
    ignition: "Anklets chime against the stone floor.\nThe palace gate is locked,\nbut the courtyard is open to the sky.",
    ignition_hi: "पत्थर के फर्श पर घुंघरू छनकते हैं।\nमहल का दरवाजा बंद है,\nपर आंगन आसमान के लिए खुला है।",
    attribution: "Mirabai",
    attribution_context: "16th-century Rajput princess and ecstatic devotee of Krishna",
    spark: "Mirabai chose public dancing and devotion over royal expectations. Showing up, for her, was an act of radical vulnerability. She showed up with her whole body and voice, resilient against all criticism, completely anchored in love.",
    invitation: "Express your authentic self today even if it defies external expectations."
  },
  {
    dayIndex: 6,
    ignition: "The fire is in the basement.\nWe are sweeping the front porch,\npretending the foundations are not warm.",
    ignition_hi: "आग तहखाने में लगी है।\nहम सामने के बरामदे में झाड़ू लगा रहे हैं,\nयह नाटक करते हुए कि नींव गर्म नहीं है।",
    attribution: "James Baldwin",
    attribution_context: "American essayist, novelist, and voice of the civil rights movement",
    spark: "Baldwin understood that nothing can be changed until it is faced. Showing up demands looking directly at our collective and personal shadows. It is the difficult, honest act of naming what hurts, so that we may finally heal.",
    invitation: "Look directly at a truth about yourself that you have been avoiding."
  },
  {
    dayIndex: 7,
    ignition: "The dry leaf dances in the wind,\nrejoicing in its release from the branch,\nsinging of the dust it will soon become.",
    ignition_hi: "सूखा पत्ता हवा में नाचता है,\nशाखा से अपनी मुक्ति पर हर्ष मनाता है,\nउस धूल का गान करता है जो वह जल्द बनेगा।",
    attribution: "Rabindranath Tagore",
    attribution_context: "Bengali polymath, Nobel laureate, and founder of Visva-Bharati",
    spark: "Tagore believed that human consciousness reaches its peak when it aligns with the universe through creative action. Showing up is not just labor; it is a song of participation. We must open our windows to the morning breeze of existence.",
    invitation: "Take five minutes to step outside and let the world greet you."
  },
  {
    dayIndex: 8,
    ignition: "The ink is dry in the well.\nThe birds outside have no names,\nuntil you speak them into the room.",
    ignition_hi: "दवात में स्याही सूख चुकी है।\nबाहर के पक्षियों का कोई नाम नहीं है,\nजब तक आप उन्हें कमरे में पुकारते नहीं।",
    attribution: "Toni Morrison",
    attribution_context: "Nobel laureate American novelist who explored the Black experience",
    spark: "Morrison wrote in the quiet hours before dawn, before her children woke and her day job began. Showing up meant claiming a space that did not yet exist. It is the daily labor of carving out room for your own voice.",
    invitation: "Claim fifteen minutes of uninterrupted quiet for yourself today."
  },
  {
    dayIndex: 9,
    ignition: "The kerosene lamp flickers.\nThe peasant counts his torn coins,\nmeasuring the winter by his hunger.",
    ignition_hi: "मिट्टी के तेल का दीया टिमटिमा रहा है।\nकिसान अपने फटे सिक्के गिनता है,\nअपनी भूख से सर्दी को नापता हुआ।",
    attribution: "Munshi Premchand",
    attribution_context: "Pioneering writer who brought realism to Hindi literature",
    spark: "Premchand wrote about the ordinary struggles of rural India with sharp realism. Showing up meant looking closely at the marginalized and telling their stories without sentimentality. Truthful observation of the common life is the highest form of writing.",
    invitation: "Notice one detail about someone whose work usually goes unseen today."
  },
  {
    dayIndex: 10,
    ignition: "The boulder is wet with morning dew.\nYour hands find the rough groove,\nand the hill waits, silent as ever.",
    ignition_hi: "चट्टान सुबह की ओस से गीली है।\nआपके हाथ खुरदरे खांचे को ढूंढ लेते हैं,\nऔर पहाड़ी हमेशा की तरह मौन प्रतीक्षा करती है।",
    attribution: "Albert Camus",
    attribution_context: "French-Algerian philosopher and champion of the absurd",
    spark: "Camus imagined Sisyphus smiling as he pushed his rock up the mountain. Showing up is the ultimate rebellion against meaningless adversity. When we accept our task and perform it with conscious presence, we master our own fate.",
    invitation: "Engage in a repetitive task today with absolute dedication and joy."
  },
  {
    dayIndex: 11,
    ignition: "The slate is wet with sweat.\nA stone thrown from the dark alley\nshatters the quiet of the classroom.",
    ignition_hi: "स्लेट पसीने से भीगी है।\nतंग गली से फेंका गया एक पत्थर\nकक्षा की शांति को भंग कर देता है।",
    attribution: "Savitribai Phule",
    attribution_context: "Social reformer and pioneer of women's education in India",
    spark: "Savitribai Phule carried an extra sari to school because people threw mud at her for teaching girls. Showing up, for her, was an act of stubborn, quiet defiance. She knew that education was the only light to banish historical darkness.",
    invitation: "Stand firm in support of someone trying to learn or grow today."
  },
  {
    dayIndex: 12,
    ignition: "The grape wants to be crushed.\nIt sings under the weight of the press,\ndreaming of the wine it will become.",
    ignition_hi: "अंगूर कुचले जाने की इच्छा रखता है।\nवह कोल्हू के भार तले गाता है,\nउस मदिरा का स्वप्न देखता हुआ जो वह बनेगा।",
    attribution: "Rumi",
    attribution_context: "13th-century Persian Sufi poet and ecstatic mystic",
    spark: "Rumi saw pain and difficulty as the necessary fire that refines the soul. Showing up is not about remaining comfortable; it is about letting life break you open so that your inner fragrance can finally escape into the world.",
    invitation: "Welcome a moment of discomfort today as a potential teacher."
  },
  {
    dayIndex: 13,
    ignition: "The metal sheet is hot under the sun.\nA spark leaps from the welding torch,\ntracing the arc of a rising rocket.",
    ignition_hi: "वेल्डिंग टॉर्च से एक चिंगारी निकलती है,\nउठते हुए रॉकेट के पथ को रेखांकित करती हुई।",
    attribution: "A. P. J. Abdul Kalam",
    attribution_context: "Aerospace scientist and former President of India",
    spark: "Kalam believed that dreams are not what we see in sleep, but what keep us awake. Showing up meant working through failures with scientific discipline. It is the belief that small, consistent actions eventually launch us into greatness.",
    invitation: "Take one concrete action toward a long-term dream today."
  },
  {
    dayIndex: 14,
    ignition: "The cup is empty.\nThe tavern door swings in the wind,\ninviting the sober to lose their names.",
    ignition_hi: "प्याला खाली है।\nमधुशाला का द्वार हवा में झूल रहा है,\nहोशमंदों को अपना नाम भूल जाने की दावत देता हुआ।",
    attribution: "Hafiz",
    attribution_context: "14th-century Persian lyric poet and Sufi master",
    spark: "Hafiz wrote of the heart as a musical instrument waiting to be tuned by love. Showing up is the act of tuning ourselves to joy and gratitude, despite the dry arguments of the intellect. Let your heart sing its wild melody.",
    invitation: "Express unreserved appreciation to someone in your life today."
  },
  {
    dayIndex: 15,
    ignition: "The oil is measured to the drop.\nThe wick is trimmed before the dark,\nand the map is drawn in silence.",
    ignition_hi: "तेल की एक-एक बूंद नापी गई है।\nअंधेरे से पहले बत्ती को छांटा गया है,\nऔर मानचित्र मौन में तैयार किया गया है।",
    attribution: "Chanakya",
    attribution_context: "Ancient Indian teacher, philosopher, and royal advisor",
    spark: "Chanakya understood that strategy is nothing without discipline. Showing up is the cold, calculated preparation that precedes action. It is about understanding the territory, managing resources, and acting with precision when the right moment presents itself.",
    invitation: "Organize one small area of your workspace or schedule today."
  },
  {
    dayIndex: 16,
    ignition: "The black bear eats the wild berries.\nThe pond is still, waiting for the rain,\nand your feet know the soft moss.",
    ignition_hi: "काला भालू जंगली बेर खाता है।\nतालाब शांत है, बारिश का इंतजार कर रहा है,\nऔर आपके पैर नरम काई को पहचानते हैं।",
    attribution: "Mary Oliver",
    attribution_context: "American poet of nature and quiet attention",
    spark: "Oliver found salvation in walking through the woods and paying absolute attention. Showing up is the simple act of looking. We do not have to be good; we only have to let the soft animal of our body love what it loves.",
    invitation: "Spend five minutes observing a plant, insect, or cloud with close attention."
  },
  {
    dayIndex: 17,
    ignition: "The hair is a garment.\nThe thorns on the forest path\ndo not ask for your lineage.",
    ignition_hi: "केश ही वस्त्र हैं।\nजंगल के रास्ते के कांटे\nआपका वंश नहीं पूछते।",
    attribution: "Akka Mahadevi",
    attribution_context: "12th-century Kannada poet and Veerashaiva saint",
    spark: "Akka Mahadevi shed her clothes and walked naked into the world, wrapped only in her long hair, seeking the divine. Showing up, to her, meant shedding all societal expectations. It is the absolute refusal to wear masks that hide your truth.",
    invitation: "Identify one social mask you wear and choose to speak without it today."
  },
  {
    dayIndex: 18,
    ignition: "The lamp burns low on the desk.\nA single fly buzzed against the pane,\nand the doctor writes another prescription.",
    ignition_hi: "मेज पर दीया धीमा जल रहा है।\nखिड़की के शीशे से एक मक्खी टकराई,\nऔर डॉक्टर एक और नुस्खा लिखता है।",
    attribution: "Anton Chekhov",
    attribution_context: "Russian physician, playwright, and short-story writer",
    spark: "Chekhov balanced his medical practice with writing stories, working late into the night. Showing up meant documenting the quiet disappointments of ordinary life without judgment. He knew that simple, honest observation of human nature is medicine for the soul.",
    invitation: "Listen to someone today without trying to fix their problems."
  },
  {
    dayIndex: 19,
    ignition: "The iron muscle tenses.\nThe wave rises from the quiet ocean,\nbreaking the shore with its roar.",
    ignition_hi: "लोहे की मांसपेशी तन जाती है।\nशांत समुद्र से लहर उठती है,\nअपनी गर्जना से तट को तोड़ती हुई।",
    attribution: "Swami Vivekananda",
    attribution_context: "19th-century spiritual leader who introduced Vedanta to the West",
    spark: "Vivekananda urged people to stand up and express the strength within them. Showing up is an act of spiritual courage. It is the decision to stop hiding behind weakness and to claim your inherent divinity through active service.",
    invitation: "Do one thing today that requires you to be stronger than you feel."
  },
  {
    dayIndex: 20,
    ignition: "The ship is tied to the rotting dock.\nThe storm gathers on the horizon,\nand the sailor checks the knot one last time.",
    ignition_hi: "जहाज सड़ती हुई गोदी से बंधा है।\nक्षितिज पर तूफान उमड़ रहा है,\nऔर नाविक आखिरी बार गांठ की जांच करता है।",
    attribution: "Seneca",
    attribution_context: "Roman Stoic philosopher, statesman, and advisor to Nero",
    spark: "Seneca wrote that we suffer more often in imagination than in reality. Showing up means bringing the mind back from future anxieties to the immediate duty. It is about preparing for the worst while acting with calm resolve in the present.",
    invitation: "Write down a fear that is distracting you, then focus on your immediate task."
  },
  {
    dayIndex: 21,
    ignition: "The wooden wheel spins.\nThe thread grows longer under the thumb,\nquiet as the dust on the floor.",
    ignition_hi: "लकड़ी का चरखा घूमता है।\nअंगूठे के नीचे धागा लंबा होता जाता है,\nफर्श की धूल की तरह शांत।",
    attribution: "Mahatma Gandhi",
    attribution_context: "Leader of the Indian independence movement and advocate of nonviolence",
    spark: "Gandhi spun cotton daily as a form of meditative action and economic resistance. Showing up is the quiet alignment of your daily practices with your deepest values. The smallest act, done consistently, holds the power to move empires.",
    invitation: "Align one routine action today with your core ethical values."
  },
  {
    dayIndex: 22,
    ignition: "The snow is gray on the track.\nA thin bowl of soup between cold hands,\nand the light in the sky is still pale.",
    ignition_hi: "पटरी पर बर्फ धूसर है।\nठंडे हाथों के बीच सूप का एक पतला कटोरा,\nऔर आसमान में रोशनी अब भी मद्धम है।",
    attribution: "Viktor Frankl",
    attribution_context: "Austrian psychiatrist, neurologist, and Holocaust survivor",
    spark: "Frankl discovered in the concentration camps that everything can be taken from us except the freedom to choose our attitude. Showing up is finding meaning in the midst of suffering. We do not just exist; we decide how to respond.",
    invitation: "Choose your attitude intentionally in a frustrating situation today."
  },
  {
    dayIndex: 23,
    ignition: "The bird flies across the sky,\nleaving no path behind it,\nand the air closes in its wake.",
    ignition_hi: "पक्षी आकाश में उड़ता है,\nअपने पीछे कोई रास्ता नहीं छोड़ता,\nऔर हवा उसके पीछे बंद हो जाती है।",
    attribution: "Jiddu Krishnamurti",
    attribution_context: "Philosopher and speaker on self-inquiry and psychological freedom",
    spark: "Krishnamurti pointed out that truth is a pathless land. Showing up means looking at the world without the burden of past conclusions or conditioning. It is the fresh, unmediated observation of what is, without the desire to change it.",
    invitation: "Observe a habit of your mind today without judging it."
  },
  {
    dayIndex: 24,
    ignition: "The axe bites into the pine.\nThe cabin door is hung on its hinges,\nand the lake reflects the morning star.",
    ignition_hi: "कुल्हाड़ी देवदार में धंस जाती है।\nकैबिन का दरवाजा अपने कब्जों पर लटका है,\nऔर झील भोर के तारे को प्रतिबिंबित करती है।",
    attribution: "Henry David Thoreau",
    attribution_context: "American transcendentalist essayist and author of Walden",
    spark: "Thoreau went to the woods to live deliberately. Showing up means stripping away the unnecessary noise of society to find the raw facts of existence. It is the quiet choice to live by your own compass rather than consensus.",
    invitation: "Turn off all digital notifications for one hour today and sit in quiet."
  },
  {
    dayIndex: 25,
    ignition: "The breath is a bellows.\nThe coal in the chest begins to glow,\nmelting the ice of the old year.",
    ignition_hi: "सांस एक धौंकनी है।\nसीने में कोयला दहकने लगा है,\nपुराने साल की बर्फ को पिघलाता हुआ।",
    attribution: "Lal Ded",
    attribution_context: "14th-century Kashmiri mystic poet and Shaivite saint",
    spark: "Lal Ded wandered the hills of Kashmir, singing of the indwelling divine. Showing up was the discovery that the temple is within the body itself. We must search inside, refining our attention until the seeker and the sought become one.",
    invitation: "Close your eyes and follow the flow of your breath for two minutes."
  },
  {
    dayIndex: 26,
    ignition: "The waves break on the shore.\nA single lighthouse beam cuts the fog,\nand the pen hovers over the blank sheet.",
    ignition_hi: "लहरें तट पर टूटती हैं।\nलाइटहाउस की एक किरण कोहरे को चीरती है,\nऔर कलम कोरे कागज पर कांपती है।",
    attribution: "Virginia Woolf",
    attribution_context: "English modernist writer who pioneered stream of consciousness",
    spark: "Woolf insisted that a writer needs a room of one's own and financial independence. Showing up is the daily preservation of your intellectual space. It is protecting the quiet room where your thoughts can unfold without interruption.",
    invitation: "Declare a physical boundary for your creative work today."
  },
  {
    dayIndex: 27,
    ignition: "The stone sinker floats.\nThe river takes the manuscripts,\nbut the song remains in the throat.",
    ignition_hi: "डूबने वाला पत्थर तैरता है।\nनदी पांडुलिपियों को ले जाती है,\nपर गीत गले में बचा रहता है।",
    attribution: "Tukaram",
    attribution_context: "17th-century Marathi Varkari saint and poet",
    spark: "Tukaram's poems were thrown into the river by rivals, only to rise unharmed. Showing up is the resilience of your inner truth. When you write and live from the center of your being, your work survives all external storms.",
    invitation: "Perform one act of creative expression purely for your own joy today."
  },
  {
    dayIndex: 28,
    ignition: "The shadow walks behind you.\nIt grows longer as the sun sets,\nwaiting for you to turn and speak.",
    ignition_hi: "परछाई आपके पीछे चलती है।\nसूरज ढलने पर यह लंबी हो जाती है,\nआपके मुड़ने और बात करने की प्रतीक्षा में।",
    attribution: "Carl Jung",
    attribution_context: "Swiss psychiatrist who founded analytical psychology",
    spark: "Jung believed that until you make the unconscious conscious, it will direct your life and you will call it fate. Showing up is the work of integration. It is welcoming the parts of yourself you have rejected or ignored.",
    invitation: "Write down your first memory of the day and look for its deeper symbol."
  },
  {
    dayIndex: 29,
    ignition: "The dust settles on the leaf.\nThe hand touches the earth,\nasking the ground to witness the stillness.",
    ignition_hi: "पत्ते पर धूल बैठ जाती है।\nहाथ धरती को छूता है,\nजमीन से इस स्थिरता का गवाह बनने को कहता हुआ।",
    attribution: "Gautama Buddha",
    attribution_context: "Siddhartha Gautama, founder of Buddhism",
    spark: "Sitting under the Bodhi tree, the Buddha touched the earth to witness his right to awaken. Showing up is this radical grounding. It is refusing to run away from pain or desire, standing firm in the reality of the present moment.",
    invitation: "Touch the earth or a solid surface today to ground your attention."
  },
  {
    dayIndex: 30,
    ignition: "The hunger is sharp.\nThe bread sits on the wooden table,\nuntouched until the guest arrives.",
    ignition_hi: "भूख तेज है।\nरोटी लकड़ी की मेज पर रखी है,\nअतिथि के आने तक बिना छुए।",
    attribution: "Simone Weil",
    attribution_context: "French philosopher, mystic, and social activist",
    spark: "Weil practiced attention as a form of prayer and solidarity with the suffering. Showing up means stepping out of your own ego to listen fully to the world. It is the demanding discipline of making space for another's reality.",
    invitation: "Listen to a friend today without planning what you will say next."
  },
  {
    dayIndex: 31,
    ignition: "The cell is dark and quiet.\nThe stone walls expand into light,\nand the mind goes silent under the pressure.",
    ignition_hi: "कोठरी अंधेरी और शांत है।\nपत्थर की दीवारें प्रकाश में फैल जाती हैं,\nऔर दबाव में मन मौन हो जाता है।",
    attribution: "Sri Aurobindo",
    attribution_context: "Philosopher, nationalist leader, and yogi of Pondicherry",
    spark: "While imprisoned in Alipore Jail, Aurobindo experienced a profound spiritual awakening. Showing up is the realization that external confinement cannot limit inner consciousness. We must transform our daily pressures into fuel for inner evolution.",
    invitation: "Reframe a current constraint in your life as a spiritual laboratory."
  },
  {
    dayIndex: 32,
    ignition: "The water carved the canyon.\nIt does not fight the rock,\nseeking only the lowest path to the sea.",
    ignition_hi: "पानी ने घाटी को तराशा।\nवह चट्टान से लड़ता नहीं है,\nसमुद्र तक जाने वाले सबसे निचले रास्ते को खोजता है।",
    attribution: "Lao Tzu",
    attribution_context: "Ancient Chinese philosopher and author of the Tao Te Ching",
    spark: "Lao Tzu taught the principle of Wu Wei, or effortless action. Showing up is not about violent effort; it is about aligning with the natural flow of things. We accomplish more by yielding and remaining soft than by force.",
    invitation: "Stop forcing a solution to a problem today and let things settle naturally."
  },
  {
    dayIndex: 33,
    ignition: "The seed is buried in the furrow.\nThe rain does not promise the harvest,\nyet the plowman walks before dawn.",
    ignition_hi: "बीज नाली में दबा है।\nबारिश फसल का वादा नहीं करती,\nफिर भी हलवाहा भोर से पहले चलता है।",
    attribution: "Thiruvalluvar",
    attribution_context: "Ancient Tamil poet and philosopher, author of the Thirukkural",
    spark: "Thiruvalluvar emphasized the value of household life and honest labor. Showing up is the practice of virtue in everyday relationships. It is the belief that small acts of hospitality and integrity are the true foundation of society.",
    invitation: "Perform one small, unexpected act of kindness for a family member today."
  },
  {
    dayIndex: 34,
    ignition: "The mountain air is cold.\nYour boots grip the loose shale,\nand the valley lies far below, silent.",
    ignition_hi: "पहाड़ी हवा ठंडी है।\nआपके जूते ढीले पत्थरों को पकड़ते हैं,\nऔर घाटी बहुत नीचे मौन पड़ी है।",
    attribution: "Friedrich Nietzsche",
    attribution_context: "German philosopher who challenged conventional morality",
    spark: "Nietzsche wrote that what does not kill us makes us stronger. Showing up means embracing life in its entirety, including its pain and chaos. It is the creative willingness to write your own values and love your fate.",
    invitation: "Accept a difficult aspect of your life today as necessary for your growth."
  },
  {
    dayIndex: 35,
    ignition: "The snake is just a rope.\nThe lamp shines on the dusty floor,\nand the illusion vanishes into the air.",
    ignition_hi: "सांप सिर्फ एक रस्सी है।\nधूल भरे फर्श पर दीपक चमकता है,\nऔर भ्रम हवा में गायब हो जाता है।",
    attribution: "Adi Shankara",
    attribution_context: "8th-century philosopher who consolidated Advaita Vedanta",
    spark: "Shankara travelled across India to debate and unify spiritual thought. Showing up is the pursuit of clear vision. It is the daily discipline of looking past superficial differences to see the underlying unity of all existence.",
    invitation: "Look past a disagreement today and find a common ground with someone."
  },
  {
    dayIndex: 36,
    ignition: "The firing squad stands ready.\nThe cold wind blows off the river,\nand the seconds swell into eternity.",
    ignition_hi: "फायरिंग स्क्वाड तैयार खड़ा है।\nनदी से ठंडी हवा चल रही है,\nऔर सेकंड अनंत काल में बदल रहे हैं।",
    attribution: "Fyodor Dostoevsky",
    attribution_context: "Russian novelist who explored psychology and faith",
    spark: "Dostoevsky, facing execution before being reprieved at the last minute, realized the immense value of life. Showing up is living with the awareness of mortality. It is refusing to waste your precious days in triviality and cynicism.",
    invitation: "Reflect on your mortality today to prioritize what truly matters."
  },
  {
    dayIndex: 37,
    ignition: "The book is closed on the table.\nThe dancing bells are on the feet,\nand the old teacher shakes his head.",
    ignition_hi: "मेज पर किताब बंद है।\nपैरों में घुंघरू बंधे हैं,\nऔर बूढ़ा शिक्षक सिर हिलाता है।",
    attribution: "Bulleh Shah",
    attribution_context: "17th-century Punjabi Sufi poet and philosopher",
    spark: "Bulleh Shah danced in public to appease his spiritual master, breaking caste barriers. Showing up means shedding intellectual pride. It is the willingness to become simple, foolish in the eyes of the world, for the sake of love.",
    invitation: "Do something playful and uncalculated that frees you from self-consciousness."
  },
  {
    dayIndex: 38,
    ignition: "The room is white and small.\nA single bee hums at the pane,\nand the world fits in a scrap of paper.",
    ignition_hi: "कमरा सफेद और छोटा है।\nखिड़की के शीशे पर एक मधुमक्खी भिनभिनाती है,\nऔर दुनिया कागज के एक टुकड़े में समा जाती है।",
    attribution: "Emily Dickinson",
    attribution_context: "Reclusive American poet who wrote thousands of lyrics",
    spark: "Dickinson spent most of her life in her family home, writing poems on scraps of paper. Showing up is not about public exposure; it is about private intensity. She proved that the mind is its own infinite kingdom.",
    invitation: "Write down a single, vivid observation of your immediate surroundings."
  },
  {
    dayIndex: 39,
    ignition: "The rain washes the stone.\nThe lamp burns through the wet night,\nbearing witness to the unseen guest.",
    ignition_hi: "बारिश पत्थर को धो देती है।\nदीपक गीली रात भर जलता है,\nअनदेखे अतिथि का गवाह बनता हुआ।",
    attribution: "Mahadevi Varma",
    attribution_context: "Modern Hindi poet of the Chhayavad movement and activist",
    spark: "Varma lived a simple life of teaching and writing while supporting women's education. Showing up meant combining artistic sensitivity with social responsibility. It is holding the flame of compassion steady in a turbulent world.",
    invitation: "Support a cause or person in your community with quiet action today."
  },
  {
    dayIndex: 40,
    ignition: "The woods are silent in winter.\nYour breath hangs in the cold air,\nand the path is lost under the snow.",
    ignition_hi: "सर्दी में जंगल खामोश हैं।\nआपकी सांस ठंडी हवा में ठहर जाती है,\nऔर रास्ता बर्फ के नीचे खो जाता है।",
    attribution: "Ralph Waldo Emerson",
    attribution_context: "American essayist and leader of the Transcendentalist movement",
    spark: "Emerson wrote that self-reliance is the first secret of success. Showing up means trusting your own inner spark when the world demands conformity. It is the daily discipline of listening to your own genius and speaking it clearly.",
    invitation: "Make a decision today based entirely on your inner conviction."
  },
  {
    dayIndex: 41,
    ignition: "The loom weaves the golden thread.\nThe song of the palanquin bearers\nrises above the noise of the bazaar.",
    ignition_hi: "करघा सोने का धागा बुनता है।\nपालकी ढोने वालों का गीत\nबाजार के शोर से ऊपर उठता है।",
    attribution: "Sarojini Naidu",
    attribution_context: "Poet, freedom fighter, and the Nightingale of India",
    spark: "Naidu used her poetic voice to inspire a nation's struggle for independence. Showing up means lending your voice to a larger cause. It is the fusion of beauty and activism, showing that art can build bridges and break chains.",
    invitation: "Speak up on behalf of someone or something you care about today."
  },
  {
    dayIndex: 42,
    ignition: "The arrow leaves the bow.\nThe archer aims at the infinite,\nand the string sings in the quiet air.",
    ignition_hi: "तीर धनुष से छूट जाता है।\nधनुर्धर अनंत पर निशाना साधता है,\nऔर शांत हवा में डोरी गाती है।",
    attribution: "Khalil Gibran",
    attribution_context: "Lebanese-American poet, writer, and visual artist",
    spark: "Gibran wrote that work is love made visible. Showing up is not about mere duty; it is about pouring your spirit into whatever you create. When you work with love, you bind yourself to others and to the divine.",
    invitation: "Pour extra care and love into a routine task you perform today."
  },
  {
    dayIndex: 43,
    ignition: "The river runs cold at dawn.\nThe three days of silence are over,\nand the first word is simply one.",
    ignition_hi: "भोर में नदी ठंडी बहती है।\nतीन दिनों का मौन समाप्त हो गया है,\nऔर पहला शब्द केवल एक है।",
    attribution: "Guru Nanak",
    attribution_context: "Founder of Sikhism and spiritual reformer of medieval India",
    spark: "Nanak disappeared into a river for three days, emerging with a vision of universal oneness. Showing up is the rejection of dividing labels. It is recognizing the divine light in every person you meet, without exception.",
    invitation: "Look past a label you have placed on someone and see their humanity."
  },
  {
    dayIndex: 44,
    ignition: "The public square is empty.\nThe shutters are drawn on the shops,\nand the voice speaks to the silent stones.",
    ignition_hi: "सार्वजनिक चौक खाली है।\nदुकानों के शटर गिरे हुए हैं,\nऔर आवाज मौन पत्थरों से बात करती है।",
    attribution: "Hannah Arendt",
    attribution_context: "German-American political theorist who wrote on totalitarianism",
    spark: "Arendt argued that political action is the highest expression of human freedom. Showing up means participating in the public realm. It is the courage to think, speak, and act collectively to build a shared world.",
    invitation: "Engage in an honest conversation about a shared community issue today."
  },
  {
    dayIndex: 45,
    ignition: "The night sky is a copper bowl.\nThe shadow of the earth falls on the moon,\nand the numbers fall into their places.",
    ignition_hi: "रात का आकाश तांबे का कटोरा है।\nपृथ्वी की छाया चंद्रमा पर पड़ती है,\nऔर अंक अपने स्थानों पर आ जाते हैं।",
    attribution: "Aryabhata",
    attribution_context: "5th-century Indian mathematician and astronomer",
    spark: "Aryabhata mapped the rotation of the earth and the cause of eclipses using basic mathematics. Showing up is the patient search for order in the cosmos. It is trust in the power of human reason to illuminate the unknown.",
    invitation: "Solve a practical problem today using logical analysis and patience."
  },
  {
    dayIndex: 46,
    ignition: "The tower library is quiet.\nThe cat sits on the open ledger,\nand the writer smiles at his own doubt.",
    ignition_hi: "मीनार का पुस्तकालय शांत है।\nबिल्ली खुली बही पर बैठी है,\nऔर लेखक अपने ही संदेह पर मुस्कुराता है।",
    attribution: "Michel de Montaigne",
    attribution_context: "French philosopher who popularized the essay as a literary genre",
    spark: "Montaigne retired to his tower to write about his own thoughts and habits. Showing up is the honest study of your own mind. He knew that to understand the world, one must first study oneself with curiosity.",
    invitation: "Write down your reactions to a small frustration today and study them."
  },
  {
    dayIndex: 47,
    ignition: "The mountain is silent.\nThe question stays in the throat,\nuntil the questioner disappears.",
    ignition_hi: "पर्वत मौन है।\nप्रश्न गले में ही अटका रहता है,\nजब तक कि प्रश्नकर्ता स्वयं गायब न हो जाए।",
    attribution: "Ramana Maharshi",
    attribution_context: "20th-century sage of Arunachala who advocated self-inquiry",
    spark: "Maharshi taught the path of self-inquiry: asking 'Who am I?'. Showing up is the removal of false identities. It is sitting in the quiet presence of your awareness, beneath the noise of thoughts and personality.",
    invitation: "Pause today and ask yourself 'Who is experiencing this?' in a quiet moment."
  },
  {
    dayIndex: 48,
    ignition: "The silence is a heavy stone.\nYour throat tenses around the word,\nknowing the risk of speaking it.",
    ignition_hi: "मौन एक भारी पत्थर है।\nआपका गला शब्द के इर्द-गिर्द तन जाता है,\nइसे बोलने के जोखिम को जानते हुए।",
    attribution: "Audre Lorde",
    attribution_context: "American writer, feminist, and civil rights activist",
    spark: "Lorde declared that our silence will not protect us. Showing up is the act of transforming silence into language and action. It is speaking your truth even when you are afraid, because the connection it builds is essential.",
    invitation: "Speak a truth today that you have been holding back out of fear."
  },
  {
    dayIndex: 49,
    ignition: "The water washes the temple floor.\nThe body itself is the pillar,\nand the soul is the golden cup.",
    ignition_hi: "पानी मंदिर के फर्श को धोता है।\nशरीर स्वयं स्तंभ है,\nऔर आत्मा सोने का कलश है।",
    attribution: "Basaveshwara",
    attribution_context: "12th-century philosopher, statesman, and social reformer",
    spark: "Basaveshwara rejected temple-based worship, stating that the human body is the true temple. Showing up is living spirituality in action. It is recognizing that honest labor and social equality are the highest forms of devotion.",
    invitation: "Perform your work today as if it were a direct act of service."
  },
  {
    dayIndex: 50,
    ignition: "The leg is bound in chains.\nThe master can break the bone,\nbut the mind remains free as the wind.",
    ignition_hi: "पैर जंजीरों में बंधा है।\nस्वामी हड्डी तोड़ सकता है,\nपर मन हवा की तरह स्वतंत्र रहता है।",
    attribution: "Epictetus",
    attribution_context: "Greek Stoic philosopher born a slave in Hierapolis",
    spark: "Epictetus taught that we do not control external events, only our response to them. Showing up is focusing entirely on what is within our power. When we accept external constraints, we preserve our inner freedom.",
    invitation: "Identify one thing outside your control today and consciously let go of it."
  },
  {
    dayIndex: 51,
    ignition: "The wind sweeps across the fields.\nThe fire of freedom burns in the song,\nmelting the chains of the old caste.",
    ignition_hi: "हवा खेतों में बहती है।\nगीत में स्वतंत्रता की आग जलती है,\nपुरानी जाति की जंजीरों को पिघलाती हुई।",
    attribution: "Subramania Bharati",
    attribution_context: "Pioneering modern Tamil poet, writer, and independence activist",
    spark: "Bharati wrote revolutionary poems that challenged social inequality and colonial rule. Showing up means using your creative energy as a force for liberation. It is about singing of courage when others are silent.",
    invitation: "Encourage someone today who is fighting for their independence."
  },
  {
    dayIndex: 52,
    ignition: "The grass grows under the fence.\nI lean and loaf at my ease,\nobserving a spear of summer grass.",
    ignition_hi: "बाड़ के नीचे घास उगती है।\nमैं आराम से झुकता और घूमता हूं,\nगर्मी की घास के एक तिनके को देखता हुआ।",
    attribution: "Walt Whitman",
    attribution_context: "American poet and author of Leaves of Grass",
    spark: "Whitman celebrated the common human experience and the natural world. Showing up is the expansive embrace of life. It is the willingness to celebrate yourself and others, recognizing the cosmic value in the ordinary.",
    invitation: "Take a slow walk today and celebrate the simple fact of being alive."
  },
  {
    dayIndex: 53,
    ignition: "The ink spills on the torn page.\nThe heart beats behind the ruined wall,\nand the night is deep with longing.",
    ignition_hi: "फटे पन्ने पर स्याही बिखर जाती है।\nखंडहर हो चुकी दीवार के पीछे दिल धड़कता है,\nऔर रात चाहत से गहरी है।",
    attribution: "Ghalib",
    attribution_context: "Classical Urdu and Persian poet during the late Mughal era",
    spark: "Ghalib wrote of love and suffering with philosophical depth amidst the decline of his world. Showing up is finding poetry in heartbreak. It is the capacity to look at pain and transform it into timeless beauty.",
    invitation: "Find a creative expression for a disappointment you experienced recently."
  },
  {
    dayIndex: 54,
    ignition: "The glass lens is ground to a curve.\nThe sunlight bends through the dust,\nrevealing the infinite substance of all.",
    ignition_hi: "कांच के लेंस को मोड़ पर घिसा गया है।\nधूल से होकर सूरज की रोशनी मुड़ती है,\nसभी के अनंत तत्व को प्रकट करती हुई।",
    attribution: "Baruch Spinoza",
    attribution_context: "Dutch philosopher who worked as a lens grinder",
    spark: "Spinoza declined prestigious university posts to grind lenses and write philosophy in quiet isolation. Showing up meant choosing intellectual integrity over status. He believed that understanding nature is the true love of God.",
    invitation: "Prioritize the quality of your work over external recognition today."
  },
  {
    dayIndex: 55,
    ignition: "The falcon flies against the wind.\nThe nest is left on the mountain peak,\nand the sky is wide before the wings.",
    ignition_hi: "बाज हवा के विपरीत उड़ता है।\nघोंसला पहाड़ की चोटी पर छूट गया है,\nऔर पंखों के सामने आसमान विस्तृत है।",
    attribution: "Allama Iqbal",
    attribution_context: "Philosopher, poet, and politician of British India",
    spark: "Iqbal wrote of Khudi, the development of the self through action and struggle. Showing up is the rejection of passive complacency. We must cultivate our inner strength until we become co-creators of our destiny.",
    invitation: "Take a step today that challenges your self-imposed limits."
  },
  {
    dayIndex: 56,
    ignition: "The river flows past the ferry.\nThe water is always the same,\nyet it is new in every moment.",
    ignition_hi: "नदी नौका के पास से बहती है।\nपानी हमेशा वही रहता है,\nफिर भी हर पल नया होता है।",
    attribution: "Hermann Hesse",
    attribution_context: "German-Swiss novelist and poet who explored self-realization",
    spark: "Hesse wrote of characters seeking their own path through spiritual crises. Showing up is the journey of individuation. It is accepting that your path is unique and that you must find your own way through the dark forest.",
    invitation: "Honor your unique journey today, even if it feels different from others."
  },
  {
    dayIndex: 57,
    ignition: "The forest is silent and dark.\nThe footstep on the dry leaf leaves a print,\nand the voice demands the land back.",
    ignition_hi: "जंगल शांत और अंधेरा है।\nसूखे पत्ते पर पैर रखने से एक निशान बन जाता है,\nऔर आवाज जमीन वापस मांगती है।",
    attribution: "Mahasweta Devi",
    attribution_context: "Bengali writer and activist for tribal rights",
    spark: "Devi spent decades documenting and fighting for the rights of tribal communities. Showing up meant using your pen as a weapon for the voiceless. It is the commitment to stand where the struggle is hardest.",
    invitation: "Learn about or support a community that is marginalized in your area."
  },
  {
    dayIndex: 58,
    ignition: "The candle is lit in the dark room.\nThe shadow on the wall is a dragon,\nand the words build a path to the stars.",
    ignition_hi: "अंधेरे कमरे में मोमबत्ती जलाई जाती है।\nदीवार पर परछाई एक ड्रैगन की है,\nऔर शब्द सितारों तक जाने का रास्ता बनाते हैं।",
    attribution: "Ursula K. Le Guin",
    attribution_context: "American author of speculative fiction and essays",
    spark: "Le Guin used science fiction to explore alternative societies and human nature. Showing up is the work of imagination. It is the ability to envision a different, more just world, and to begin living it now.",
    invitation: "Imagine a positive alternative to a difficult situation you face today."
  },
  {
    dayIndex: 59,
    ignition: "The paper is torn at the edge.\nThe ink is mixed with tears,\nand the silent forest begins to speak.",
    ignition_hi: "कागज किनारे से फटा हुआ है।\nस्याही आंसुओं में मिल गई है,\nऔर खामोश जंगल बोलने लगा है।",
    attribution: "Amrita Pritam",
    attribution_context: "Pioneering Punjabi writer and poet of the Partition",
    spark: "Pritam wrote courageously about the trauma of Partition and women's desires. Showing up means giving voice to collective grief and personal truth. It is the refusal to let history silence the pain of the vulnerable.",
    invitation: "Acknowledge and write down a difficult feeling you have been carrying."
  },
  {
    dayIndex: 60,
    ignition: "The wind blows through the pass.\nThe notebook is open on the seat,\nand the highway stretches into the desert.",
    ignition_hi: "दर्रे से होकर हवा बहती है।\nसीट पर नोटबुक खुली है,\nऔर राजमार्ग मरुस्थल में फैला हुआ है।",
    attribution: "Joan Didion",
    attribution_context: "American journalist, essayist, and novelist",
    spark: "Didion observed the fractures of American culture and personal grief with cool, sharp prose. Showing up is the commitment to see clearly. We tell ourselves stories in order to live, but we must face the raw reality underneath.",
    invitation: "Observe a situation in your life today as a neutral, detached reporter."
  }
];
