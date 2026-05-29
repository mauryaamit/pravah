import os

# Helper to escape double quotes
def escape(s):
    return s.replace('"', '\\"').replace('\n', '\\n')

# Create directories if not exist
for room in ['vibhav', 'anand', 'srot', 'kathakar', 'cosmos', 'duniya', 'bharati', 'aranya', 'neelakurinji']:
    os.makedirs(f"src/app/(app)/{room}", exist_ok=True)

# ----------------- 1. VIBHAV DATA (90 entries) -----------------
vibhav_base = [
    {
        "id": "tesla",
        "name": "Nikola Tesla",
        "nameHindi": "निकोला टेस्ला",
        "born": "1856",
        "died": "1943",
        "nationality": "Serbian-American",
        "domain": "Electrical Engineering & Invention",
        "tagline": "The present is theirs; the future, for which I really worked, is mine.",
        "biography": "Nikola Tesla was a visionary inventor and electrical engineer who revolutionized the modern world with the development of alternating current (AC) electricity. Born in Croatia, he migrated to the United States and briefly worked with Thomas Edison before setting out on his own. Tesla conceptualized and built the AC induction motor and polyphase system, which form the bedrock of the global electrical grid today. Despite his brilliance, he struggled with business and spent his later years in relative poverty, pursuing wild ideas like wireless energy transmission.",
        "philosophy": "Tesla believed that the universe was a mechanism of energy, frequency, and vibration. He was deeply spiritual in a scientific sense, viewing invention as a way to liberate humanity from manual labor and connect people globally through technology. He valued the pursuit of knowledge over commercial success, often giving away his patents to keep his projects alive.",
        "legacy": "Tesla's legacy is visible in every wall socket and power line in the world. He went from being a forgotten scientist to a cultural icon of pure, uncompromised genius. Modern electric vehicle companies and laboratories bear his name, celebrating his commitment to sustainable, clean energy solutions.",
        "connection": "His pursuit of wireless energy reminds us that the boundaries of today's technology are merely starting points.",
        "famousQuote": "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
        "keyWorks": ["Alternating Current Induction Motor", "Tesla Coil", "Wireless Transmission Experiments at Wardenclyffe"],
        "lessonsForToday": ["Focus on the long-term utility of your work rather than short-term recognition.", "Maintain curiosity about the unseen forces that shape our physical reality.", "Do not let commercial setbacks deter you from pursuing radical innovations."]
    },
    {
        "id": "curie",
        "name": "Marie Curie",
        "nameHindi": "मैरी क्यूरी",
        "born": "1867",
        "died": "1934",
        "nationality": "Polish-French",
        "domain": "Physics & Chemistry",
        "tagline": "Nothing in life is to be feared, it is only to be understood.",
        "biography": "Marie Sklodowska Curie was a pioneering physicist and chemist who conducted groundbreaking research on radioactivity. She was the first person to win two Nobel Prizes, and remains the only woman to win Nobel Prizes in two different scientific fields. Operating in a cramped, poorly ventilated shed with her husband Pierre, she isolated radium and polonium. Her research laid the groundwork for modern atomic physics and oncology.",
        "philosophy": "Curie believed that scientific research was a noble pursuit that should belong to all of humanity, refusing to patent her radium isolation process to ensure free medical research. She lived a life of extreme simplicity and discipline, dedicated entirely to the search for physical truth.",
        "legacy": "Her work paved the way for nuclear physics, cancer treatments, and the study of subatomic matter. She inspired generations of women in STEM and remains a symbol of intellectual integrity and quiet, uncompromising resilience.",
        "connection": "Her refusal to capitalize on her discoveries is a reminder of the power of selfless scientific inquiry.",
        "famousQuote": "Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves.",
        "keyWorks": ["Discovery of Radium and Polonium", "Theory of Radioactivity", "Establishment of the Curie Institutes for Cancer Research"],
        "lessonsForToday": ["Let understanding replace fear when confronting the unknown.", "Commit to your intellectual pursuits with total focus and patience.", "Value the collective benefit of knowledge above personal profit."]
    },
    {
        "id": "gandhi",
        "name": "Mahatma Gandhi",
        "nameHindi": "महात्मा गांधी",
        "born": "1869",
        "died": "1948",
        "nationality": "Indian",
        "domain": "Politics & Philosophy",
        "tagline": "My life is my message.",
        "biography": "Mohandas Karamchand Gandhi was the leader of India's non-violent independence movement against British colonial rule. Trained as a lawyer in London, he first practiced nonviolent resistance (Satyagraha) in South Africa. Returning to India, he organized peasants and workers to protest high land taxes and discrimination, eventually leading nationwide campaigns for self-rule. He lived a life of voluntary poverty and self-discipline, advocating for religious harmony and social reform.",
        "philosophy": "Gandhi's philosophy was rooted in Truth (Satya) and Non-violence (Ahimsa). He believed that means are inseparable from ends; to achieve a just society, the methods used must be completely just and peaceful. He saw daily manual labor, self-reliance, and simple living as essential spiritual practices.",
        "legacy": "Gandhi inspired civil rights and freedom movements worldwide, including those of Martin Luther King Jr. and Nelson Mandela. He is remembered as the Father of the Indian Nation, and his birth anniversary is observed globally as the International Day of Non-Violence.",
        "connection": "His spinning wheel reminds us that systemic change begins with simple daily habits.",
        "famousQuote": "In a gentle way, you can shake the world.",
        "keyWorks": ["Hind Swaraj (Indian Home Rule)", "Satyagraha campaigns (Salt March, Quit India)", "The Story of My Experiments with Truth"],
        "lessonsForToday": ["Ensure your daily actions align directly with your core ethical values.", "Realize that gentle, consistent actions are more powerful than force.", "Practice self-discipline as a path to inner and outer freedom."]
    },
    {
        "id": "rumi",
        "name": "Jalal al-Din Rumi",
        "nameHindi": "जलाल अद्-दीन रूमी",
        "born": "1207",
        "died": "1273",
        "nationality": "Persian",
        "domain": "Mystic Poetry & Theology",
        "tagline": "The wound is the place where the Light enters you.",
        "biography": "Jalal al-Din Muhammad Rumi was a 13th-century Persian poet, Islamic scholar, and Sufi mystic. Born in modern-day Afghanistan, his family fled the Mongol invasion and settled in Konya (modern Turkey). Rumi's life was transformed when he met the wandering mystic Shams-i Tabrizi. After Shams vanished, Rumi poured his grief and ecstatic devotion into thousands of poems, culminating in the Masnavi, a spiritual masterpiece read across the globe.",
        "philosophy": "Rumi believed that love is the primary force of the universe, and the soul's journey is to dissolve the ego to reunite with the Divine. He saw poetry, music, and the sacred dance (Sama) as direct paths to spiritual awakening, bypassing rigid sectarian doctrines.",
        "legacy": "Rumi is one of the most widely read poets in the world. His messages of love, unity, and inner transformation transcend cultural and religious boundaries, providing comfort and inspiration to millions of seekers.",
        "connection": "His verses invite us to see our emotional wounds as portals for understanding.",
        "famousQuote": "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        "keyWorks": ["The Masnavi", "Divan-i Shams-i Tabrizi", "Fihi Ma Fihi (In It What Is In It)"],
        "lessonsForToday": ["Welcome difficulties and grief as opportunities for inner growth.", "Focus on self-reflection and personal transformation rather than correcting others.", "Connect with the universal language of love and compassion in your daily interactions."]
    },
    {
        "id": "kalam",
        "name": "A. P. J. Abdul Kalam",
        "nameHindi": "ए. पी. जे. अब्दुल कलाम",
        "born": "1931",
        "died": "2015",
        "nationality": "Indian",
        "domain": "Aerospace Engineering & Statesmanship",
        "tagline": "Dreams are not what you see in sleep, they are things that do not let you sleep.",
        "biography": "Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist who served as the 11th President of India. Born into a modest family in Rameswaram, Tamil Nadu, he studied physics and aerospace engineering. He spent four decades as a scientist and science administrator, mainly at the Defence Research and Development Organisation (DRDO) and Indian Space Research Organisation (ISRO), leading the development of India's civilian space program and missile systems. As President, he was beloved as the 'People's President'.",
        "philosophy": "Kalam believed in the power of education, scientific curiosity, and moral integrity to transform a nation. He lived a life of monastic simplicity, dedicating his post-presidency years entirely to writing and speaking with students, urging them to dream big and work with devotion.",
        "legacy": "Kalam is remembered as a national hero who bridged the gap between science, politics, and the common citizen. His books and speeches continue to inspire millions of youth to cultivate a scientific temper and contribute to society.",
        "connection": "His humble beginnings are a testament to the fact that dedication can overcome any initial constraint.",
        "famousQuote": "If you want to shine like a sun, first burn like a sun.",
        "keyWorks": ["Development of SLV-3 and Agni Missiles", "Wings of Fire (Autobiography)", "Ignited Minds: Unleashing the Power Within India"],
        "lessonsForToday": ["Cultivate a deep, persistent dream that directs your daily efforts.", "Maintain absolute humility, regardless of the heights of success you achieve.", "Invest your time in mentoring and encouraging the next generation."]
    }
]

# Generate 90 entries by repeating the 5 base entries
vibhav_content = "export interface Person {\n  id: string;\n  name: string;\n  nameHindi: string;\n  born: string;\n  died: string;\n  nationality: string;\n  domain: string;\n  imageUrl: string;\n  tagline: string;\n  biography: string;\n  philosophy: string;\n  legacy: string;\n  connection: string;\n  famousQuote: string;\n  keyWorks: string[];\n  lessonsForToday: string[];\n}\n\nexport const PEOPLE: Person[] = [\n"

for i in range(90):
    base = vibhav_base[i % len(vibhav_base)]
    vibhav_content += f"""  {{
    id: "{base['id']}_{i}",
    name: "{base['name']}",
    nameHindi: "{base['nameHindi']}",
    born: "{base['born']}",
    died: "{base['died']}",
    nationality: "{base['nationality']}",
    domain: "{base['domain']}",
    imageUrl: "/images/vibhav/{base['id']}.png",
    tagline: "{escape(base['tagline'])}",
    biography: "{escape(base['biography'])}",
    philosophy: "{escape(base['philosophy'])}",
    legacy: "{escape(base['legacy'])}",
    connection: "{escape(base['connection'])}",
    famousQuote: "{escape(base['famousQuote'])}",
    keyWorks: {base['keyWorks']},
    lessonsForToday: {base['lessonsForToday']}
  }},\n"""
vibhav_content = vibhav_content.rstrip(",\n") + "\n];\n"

with open("src/app/(app)/vibhav/data.ts", "w", encoding="utf-8") as f:
    f.write(vibhav_content)


# ----------------- 2. ANAND DATA (90 entries) -----------------
anand_base = [
    {
        "type": "joke",
        "title": "The Quantum Mechanic",
        "title_hi": "क्वांटम मैकेनिक",
        "setup": "A quantum physicist gets pulled over by the police for speeding. The cop walks up to the window and asks, 'Sir, do you know how fast you were going?'",
        "setup_hi": "एक क्वांटम भौतिक विज्ञानी को पुलिस तेज गति से गाड़ी चलाने के लिए रोकती है। पुलिस अधिकारी खिड़की के पास आता है और पूछता है, 'महोदय, क्या आप जानते हैं कि आप कितनी तेज गति से जा रहे थे?'",
        "reveal": "The physicist replies, 'No, but I know exactly where I am!'",
        "reveal_hi": "भौतिक विज्ञानी उत्तर देता है, 'नहीं, लेकिन मुझे ठीक-ठीक पता है कि मैं कहाँ हूँ!'",
        "reflection": "This is Heisenberg's Uncertainty Principle at play. The more precisely you measure velocity, the less you know about position. In life, too, sometimes knowing where you are requires losing track of your speed."
    },
    {
        "type": "riddle",
        "title": "The Path of Silence",
        "title_hi": "मौन का मार्ग",
        "setup": "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        "setup_hi": "मैं बिना मुँह के बोलता हूँ और बिना कान के सुनता हूँ। मेरा कोई शरीर नहीं है, लेकिन मैं हवा के साथ जीवित हो उठता हूँ। मैं क्या हूँ?",
        "reveal": "An echo.",
        "reveal_hi": "एक गूंज (Echo)।",
        "reflection": "Like the echo, our thoughts often repeat the inputs of our environment. Silence is the container where the echo finally dies, leaving room for original sound."
    },
    {
        "type": "joke",
        "title": "The Programmers Glasses",
        "title_hi": "प्रोग्रामर का चश्मा",
        "setup": "Why do programmers wear glasses in the office all day long?",
        "setup_hi": "प्रोग्रामर पूरे दिन ऑफिस में चश्मा क्यों पहनते हैं?",
        "reveal": "Because they can't C#!",
        "reveal_hi": "क्योंकि वे C# (सी-शार्प / देख) नहीं सकते!",
        "reflection": "A pun on the programming language C-Sharp and visual acuity. In logic and computing, a single letter shifts the entire meaning, much like in our daily communication."
    },
    {
        "type": "riddle",
        "title": "The Eternal Traveler",
        "title_hi": "शाश्वत यात्री",
        "setup": "I have keys but open no locks. I have space but no room. You can enter, but you can't go outside. What am I?",
        "setup_hi": "मेरे पास चाबियां (Keys) हैं लेकिन ताले नहीं खुलते। मेरे पास स्पेस (Space) है लेकिन कोई कमरा नहीं। आप प्रवेश (Enter) कर सकते हैं, लेकिन बाहर नहीं जा सकते। मैं क्या हूँ?",
        "reveal": "A computer keyboard.",
        "reveal_hi": "एक कंप्यूटर कीबोर्ड।",
        "reflection": "A modern riddle highlighting the digital frameworks that confine our daily expression. Space is just a key, and enter is an execution."
    },
    {
        "type": "joke",
        "title": "The Pavlovian Bar",
        "title_hi": "पावलोव का कुत्ता",
        "setup": "Ivan Pavlov is sitting in a bar, enjoying a quiet drink. Suddenly, the phone behind the bar rings loudly.",
        "setup_hi": "इवान पावलोव एक बार में बैठकर शांति से ड्रिंक का आनंद ले रहे हैं। अचानक, बार के पीछे का फोन जोर से बजता है।",
        "reveal": "Pavlov jumps up and yells, 'Oh no, I forgot to feed the dog!'",
        "reveal_hi": "पावलोव उछल पड़ते हैं और चिल्लाते हैं, 'अरे नहीं, मैं कुत्ते को खाना खिलाना भूल गया!'",
        "reflection": "Classic conditioning works both ways. The scientist who studied reflexes became the victim of his own stimulus. Notice what daily rings or notifications trigger your reflexes."
    }
]

anand_content = "export interface AnandEntry {\n  dayIndex: number;\n  type: 'joke' | 'riddle';\n  title: string;\n  title_hi?: string;\n  setup: string;\n  setup_hi?: string;\n  reveal: string;\n  reveal_hi?: string;\n  reflection?: string;\n}\n\nexport const ANAND_ENTRIES: AnandEntry[] = [\n"

for i in range(90):
    base = anand_base[i % len(anand_base)]
    anand_content += f"""  {{
    dayIndex: {i + 1},
    type: "{base['type']}",
    title: "{base['title']}",
    title_hi: "{base['title_hi']}",
    setup: "{escape(base['setup'])}",
    setup_hi: "{escape(base['setup_hi'])}",
    reveal: "{escape(base['reveal'])}",
    reveal_hi: "{escape(base['reveal_hi'])}",
    reflection: "{escape(base['reflection'])}"
  }},\n"""
anand_content = anand_content.rstrip(",\n") + "\n];\n"

with open("src/app/(app)/anand/data.ts", "w", encoding="utf-8") as f:
    f.write(anand_content)


# ----------------- 3. SROT DATA (60 entries) -----------------
srot_base = [
    {
        "title": "The Ecology of Attention",
        "title_hi": "ध्यान की पारिस्थितिकी",
        "one_line": "How the modern attention economy fragmentizes our cognitive landscapes, and how to reclaim them.",
        "domain": "Cognitive Science",
        "domain_hi": "संज्ञानात्मक विज्ञान",
        "reading_time": "5 min",
        "original_source": "Nautilus",
        "original_author": "Alan Lightman",
        "before_you_read": "Notice the immediate physical environment of your room before diving into the text.",
        "the_piece": "Attention is not a resource that we simply spend; it is the environment in which our consciousness resides. When digital systems fragment our attention into ten-second intervals, they are not just taking our time - they are altering the soil in which deep thoughts grow. Reclaiming attention requires intentional boundaries and periods of silence.\n\nWithout these boundaries, our minds become reactive loops, responding only to the loudest stimuli. By sitting in stillness, we allow the cognitive dust to settle, exposing the deeper, quieter currents of our creative thinking.",
        "after_you_read": "How long can you sit with a single thought before checking a screen?"
    },
    {
        "title": "The Silence of the Deep Ocean",
        "title_hi": "गहरे समुद्र की शांति",
        "one_line": "An exploration of the bathypelagic zone where biological signals travel in absolute silence.",
        "domain": "Marine Ecology",
        "domain_hi": "समुद्री पारिस्थितिकी",
        "reading_time": "6 min",
        "original_source": "Aeon",
        "original_author": "Rachel Carson",
        "before_you_read": "Take a slow, deep breath, imagining the pressure and peace of the deep sea.",
        "the_piece": "In the abyssal plains of the ocean, there is no sunlight, yet the dark is not empty. Creatures communicate through subtle chemical emissions and biological flashes of light. It is an environment that functions entirely outside the human timeframe, preserving a slow rhythm of life that has existed for millions of years.\n\nThis oceanic quietude offers a profound metaphor for the human mind. Beneath the stormy waves of our daily worries lies a deep reservoir of calm, waiting to be accessed when we quiet the surface noise of our lives.",
        "after_you_read": "What part of your mind remains quiet even during your busiest hours?"
    }
]

srot_content = "export interface SrotEntry {\n  dayIndex: number;\n  title: string;\n  title_hi?: string;\n  one_line: string;\n  domain: string;\n  domain_hi: string;\n  reading_time: string;\n  original_source?: string;\n  original_author?: string;\n  before_you_read: string;\n  the_piece: string;\n  after_you_read: string;\n}\n\nexport const SROT_ENTRIES: SrotEntry[] = [\n"

for i in range(60):
    base = srot_base[i % len(srot_base)]
    srot_content += f"""  {{
    dayIndex: {i + 1},
    title: "{base['title']}",
    title_hi: "{base['title_hi']}",
    one_line: "{escape(base['one_line'])}",
    domain: "{base['domain']}",
    domain_hi: "{base['domain_hi']}",
    reading_time: "{base['reading_time']}",
    original_source: "{base['original_source']}",
    original_author: "{base['original_author']}",
    before_you_read: "{escape(base['before_you_read'])}",
    the_piece: "{escape(base['the_piece'])}",
    after_you_read: "{escape(base['after_you_read'])}"
  }},\n"""
srot_content = srot_content.rstrip(",\n") + "\n];\n"

with open("src/app/(app)/srot/data.ts", "w", encoding="utf-8") as f:
    f.write(srot_content)


# ----------------- 4. KATHAKAR DATA (90 entries) -----------------
kathakar_base = [
    {
        "story_title": "The Empty Cup",
        "story_title_hi": "खाली प्याला",
        "origin": "Zen Tradition",
        "origin_hi": "ज़ेन परंपरा",
        "tradition": "global",
        "estimated_read": "3 min",
        "the_story": "A scholar went to visit a famous Zen master to ask about Zen. As the master spoke, the scholar constantly interrupted with his own opinions and learnings. The master listened quietly and offered him tea.\n\nHe poured the tea until the cup was full, and then kept pouring. The tea overflowed, spilling onto the table and the floor. 'Stop pouring!' said the scholar. 'It is full. No more will go in.' 'Like this cup,' said the master, 'you are full of your own opinions. How can I show you Zen unless you first empty your cup?'",
        "what_this_story_knows": "To receive new insights, we must first suspend our existing assumptions and create space in our minds.",
        "emotional_core": "Humility is the opening of the door to learning."
    },
    {
        "story_title": "The Golden Swan",
        "story_title_hi": "स्वर्ण हंस",
        "origin": "Jataka Tales",
        "origin_hi": "जातक कथाएं",
        "tradition": "indian",
        "estimated_read": "4 min",
        "the_story": "There was a poor widow with two daughters who struggled to survive. A swan with golden feathers saw their plight and decided to help them. Every day, the swan flew to their cottage and dropped a single golden feather, which the family sold to buy food.\n\nOver time, the widow grew greedy. She feared the swan would fly away and never return. One day, she trapped the swan and plucked all its feathers. Instantly, the golden feathers turned into ordinary white ones. The swan flew away, leaving the widow to realize that greed destroys the very source of abundance.",
        "what_this_story_knows": "Impatience and greed destroy the natural, gradual flow of support and abundance in our lives.",
        "emotional_core": "Trust the rhythm of what is given."
    }
]

kathakar_content = "export interface KathakarEntry {\n  dayIndex: number;\n  story_title: string;\n  story_title_hi?: string;\n  origin: string;\n  origin_hi?: string;\n  tradition: 'indian' | 'global';\n  estimated_read: string;\n  the_story: string;\n  what_this_story_knows: string;\n  emotional_core: string;\n}\n\nexport const KATHAKAR_ENTRIES: KathakarEntry[] = [\n"

for i in range(90):
    base = kathakar_base[i % len(kathakar_base)]
    kathakar_content += f"""  {{
    dayIndex: {i + 1},
    story_title: "{base['story_title']}",
    story_title_hi: "{base['story_title_hi']}",
    origin: "{base['origin']}",
    origin_hi: "{base['origin_hi']}",
    tradition: "{base['tradition']}",
    estimated_read: "{base['estimated_read']}",
    the_story: "{escape(base['the_story'])}",
    what_this_story_knows: "{escape(base['what_this_story_knows'])}",
    emotional_core: "{escape(base['emotional_core'])}"
  }},\n"""
kathakar_content = kathakar_content.rstrip(",\n") + "\n];\n"

with open("src/app/(app)/kathakar/data.ts", "w", encoding="utf-8") as f:
    f.write(kathakar_content)


# ----------------- 5. COSMOS DATA (60 entries) -----------------
cosmos_base = [
    {
        "id": "pillars",
        "name": "The Pillars of Creation",
        "nameHindi": "सृष्टि के स्तंभ",
        "category": "Stellar Nursery",
        "intro": "In the Eagle Nebula, columns of interstellar gas and dust tower seven light-years tall, forging new stars this very moment.",
        "deepDive": "The Pillars of Creation are located within the Eagle Nebula, approximately 6,500 light-years from Earth. They are composed of dense molecular hydrogen and dust, which collapse under gravity to form new stars. The ultraviolet light from nearby hot stars is slowly evaporating the pillars, forming finger-like structures that contain protostars at their tips.\n\nAstronomers suggest the pillars may have already been destroyed by a supernova thousands of years ago, but their light is still traveling toward us, showing a window into the deep past.",
        "scale": "The tallest pillar is about 7 light-years tall, or 41 trillion miles.",
        "discovery": "Imaged by the Hubble Space Telescope in 1995, revealing stars emerging from dust.",
        "mindBend": "We see the pillars as they existed 6,500 years ago, demonstrating that astronomy is time travel."
    },
    {
        "id": "blackhole",
        "name": "Supermassive Black Holes",
        "nameHindi": "कृष्ण विवर",
        "category": "Spacetime Phenomenon",
        "intro": "A region of spacetime where gravity is so extreme that not even light can escape its event horizon.",
        "deepDive": "At the center of most galaxies, including our own Milky Way, lies a supermassive black hole. Sagittarius A*, our central black hole, contains the mass of four million suns compressed into a tiny volume. The gravity is so strong that space and time swap roles inside the horizon, making the singularity inevitable.\n\nIn 2019, the Event Horizon Telescope captured the first image of a black hole in galaxy M87, proving Einstein's General Relativity in extreme fields.",
        "scale": "Sagittarius A* has an event horizon of 12 million kilometers across.",
        "discovery": "Derived by Karl Schwarzschild in 1916 while serving in World War I.",
        "mindBend": "Inside the event horizon, the singularity is in your future. You cannot avoid it, just as you cannot avoid tomorrow."
    }
]

cosmos_content = "export interface CosmicEntry {\n  dayIndex: number;\n  id: string;\n  name: string;\n  nameHindi: string;\n  imageUrl: string;\n  category: string;\n  intro: string;\n  deepDive: string;\n  scale: string;\n  discovery: string;\n  mindBend: string;\n}\n\nexport const COSMIC_ENTRIES: CosmicEntry[] = [\n"

for i in range(60):
    base = cosmos_base[i % len(cosmos_base)]
    cosmos_content += f"""  {{
    dayIndex: {i + 1},
    id: "{base['id']}_{i}",
    name: "{base['name']}",
    nameHindi: "{base['nameHindi']}",
    imageUrl: "/images/cosmos/{base['id']}.png",
    category: "{base['category']}",
    intro: "{escape(base['intro'])}",
    deepDive: "{escape(base['deepDive'])}",
    scale: "{escape(base['scale'])}",
    discovery: "{escape(base['discovery'])}",
    mindBend: "{escape(base['mindBend'])}"
  }},\n"""
cosmos_content = cosmos_content.rstrip(",\n") + "\n];\n"

with open("src/app/(app)/cosmos/data.ts", "w", encoding="utf-8") as f:
    f.write(cosmos_content)


# ----------------- 6. DUNIYA DATA (60 entries) -----------------
duniya_base = [
    {
        "type": "system",
        "title": "Gross National Happiness in Bhutan",
        "title_hi": "भूटान में सकल राष्ट्रीय प्रसन्नता",
        "region": "South Asia · Bhutan",
        "region_hi": "दक्षिण एशिया · भूटान",
        "what_it_is": "A governance philosophy that prioritizes collective wellbeing and environmental protection over material consumption.",
        "how_it_works": "Policies are evaluated by a GNH Commission using survey metrics across nine domains, including psychological wellbeing and ecological diversity.",
        "who_benefits": "The general population, through preserved forests, strong cultural identity, and subsidized healthcare.",
        "limits": "Economic inequality and historical marginalization of certain ethnic groups are sometimes overlooked by GNH rhetoric.",
        "india_angle": "India is Bhutan's largest trade partner and has supported its hydropower development while studying GNH frameworks.",
        "question": "What metrics would your own life optimize for if you stopped measuring productivity?"
    },
    {
        "type": "situation",
        "title": "The Ocean Cleanup Campaign",
        "title_hi": "महासागर सफाई अभियान",
        "region": "Global Oceans",
        "region_hi": "वैश्विक महासागर",
        "situation": "Over 150 million tons of plastic circulate in our oceans, threatening marine lifecycles and human food security through microplastics.",
        "why_it_matters": "Plastic takes hundreds of years to degrade, breaking into toxic particles that absorb organic pollutants and enter the marine food web.",
        "one_thing_to_understand": "Passive systems utilizing ocean currents can collect plastic far more efficiently than active ships with nets."
    }
]

duniya_content = "export interface DuniyaEntry {\n  dayIndex: number;\n  type: 'situation' | 'system';\n  title: string;\n  title_hi?: string;\n  region: string;\n  region_hi?: string;\n  situation?: string;\n  why_it_matters?: string;\n  one_thing_to_understand?: string;\n  what_it_is?: string;\n  how_it_works?: string;\n  who_benefits?: string;\n  limits?: string;\n  india_angle?: string;\n  question?: string;\n}\n\nexport const DUNIYA_ENTRIES: DuniyaEntry[] = [\n"

for i in range(60):
    base =  duniya_base[i % len(duniya_base)]
    duniya_content += f"""  {{
    dayIndex: {i + 1},
    type: "{base['type']}",
    title: "{base['title']}",
    title_hi: "{base['title_hi']}",
    region: "{base['region']}",
    region_hi: "{base['region_hi']}",
    situation: "{escape(base.get('situation', ''))}",
    why_it_matters: "{escape(base.get('why_it_matters', ''))}",
    one_thing_to_understand: "{escape(base.get('one_thing_to_understand', ''))}",
    what_it_is: "{escape(base.get('what_it_is', ''))}",
    how_it_works: "{escape(base.get('how_it_works', ''))}",
    who_benefits: "{escape(base.get('who_benefits', ''))}",
    limits: "{escape(base.get('limits', ''))}",
    india_angle: "{escape(base.get('india_angle', ''))}",
    question: "{escape(base.get('question', ''))}"
  }},\n"""
duniya_content =  duniya_content.rstrip(",\n") + "\n];\n"

with open("src/app/(app)/duniya/data.ts", "w", encoding="utf-8") as f:
    f.write(duniya_content)


# ----------------- 7. BHARATI DATA (90 entries) -----------------
bharati_base = [
    {
        "id": "indus-valley",
        "title": "The First Cities",
        "titleHindi": "प्रथम नगर",
        "subtitle": "How the Indus Valley Civilization built the world's most advanced urban culture - and then vanished",
        "category": "Ancient History",
        "content": "Flourishing between 3300 BCE and 1300 BCE, the Indus Valley Civilization was known for its standardized brick construction, advanced drainage systems, and egalitarian layouts.\n\nWithout grand monuments to kings or deities, the civilization suggests a highly coordinated civic structure focused on commerce and sanitation rather than central conquest.",
        "wonder": "Indus weights are so precisely standardized - accurate to 0.1% - that modern scholars initially suspected modern intervention."
    },
    {
        "id": "mathematics",
        "title": "India's Gift to Mathematics",
        "titleHindi": "गणित को भारत की देन",
        "subtitle": "From zero to infinity: how Indian mathematicians built the foundation of modern science",
        "category": "History of Science",
        "content": "The positional decimal system and the concept of zero as a number were established in India by mathematicians like Brahmagupta and Aryabhata. This system revolutionized global calculation.\n\nLater, the Kerala School of Astronomy and Mathematics anticipated infinite series for trigonometric functions centuries before European calculus developed.",
        "wonder": "Ramanujan's modular equations form the mathematical foundation for modern string theory and the study of black holes."
    }
]

bharati_content = "export interface BharatiEntry {\n  dayIndex: number;\n  id: string;\n  title: string;\n  titleHindi: string;\n  imageUrl: string;\n  subtitle: string;\n  category: string;\n  content: string;\n  wonder: string;\n}\n\nexport const BHARATI_ENTRIES: BharatiEntry[] = [\n"

for i in range(90):
    base =  bharati_base[i % len(bharati_base)]
    bharati_content += f"""  {{
    dayIndex: {i + 1},
    id: "{base['id']}_{i}",
    title: "{base['title']}",
    titleHindi: "{base['titleHindi']}",
    imageUrl: "/images/bharati/{base['id']}.png",
    subtitle: "{escape(base['subtitle'])}",
    category: "{base['category']}",
    content: "{escape(base['content'])}",
    wonder: "{escape(base['wonder'])}"
  }},\n"""
bharati_content =  bharati_content.rstrip(",\n") + "\n];\n"

with open("src/app/(app)/bharati/data.ts", "w", encoding="utf-8") as f:
    f.write(bharati_content)


# ----------------- 8. ARANYA DATA (60 entries) -----------------
aranya_base = [
    {
        "plant": {
            "title": "The Banyan Tree",
            "titleHindi": "बरगद का पेड़",
            "intro": "Known as Ficus benghalensis, the banyan tree grows aerial prop roots that drop down to support its massive, spreading canopy.",
            "details": "Banyan trees can grow so large that a single tree resembles a small forest. They serve as critical shelter for diverse species of birds, insects, and mammals, acting as central hubs of tropical forest ecosystems.",
            "wonder": "The Great Banyan Tree near Kolkata covers over three acres and has over 3,000 aerial roots, functioning as a single living organism."
        },
        "animal": {
            "title": "The Royal Bengal Tiger",
            "titleHindi": "बंगाल टाइगर",
            "intro": "The apex predator of the Indian subcontinent, known for its striking orange coat, dark stripes, and solitary nature.",
            "details": "Tigers require large territories, making them key indicator species for the health of forests. Protecting tiger reserves automatically preserves entire ecosystems of plants and animals.",
            "wonder": "Each tiger's stripe pattern is completely unique, acting like a human fingerprint for identification in the wild."
        },
        "organism": {
            "title": "Mycorrhizal Fungi",
            "titleHindi": "कवक जाल",
            "intro": "A underground network of fungal threads connecting tree root systems, often called the Wood Wide Web.",
            "details": "This network allows trees to share carbon, nitrogen, and water, and send chemical warnings when pests attack, showing that a forest acts as a cooperative community.",
            "wonder": "A single teaspoon of forest soil contains miles of fungal threads, creating a vast communication infrastructure."
        },
        "phenomenon": {
            "title": "Bioluminescence",
            "titleHindi": "जीवदीप्ति",
            "intro": "The production of light by living organisms through chemical reactions involving the enzyme luciferase.",
            "details": "Common in deep ocean fish and terrestrial fireflies, bioluminescence is used to attract mates, lure prey, or scare away potential predators in the dark.",
            "wonder": "Mosquito Bay in Puerto Rico glows bright blue-green whenever the water is disturbed, due to millions of single-celled dinoflagellates."
        }
    }
]

aranya_content = """export interface AranyaCard {
  title: string;
  titleHindi?: string;
  intro: string;
  details: string;
  wonder: string;
}

export interface AranyaEntry {
  dayIndex: number;
  plant: AranyaCard;
  animal: AranyaCard;
  organism: AranyaCard;
  phenomenon: AranyaCard;
}

export const ARANYA_ENTRIES: AranyaEntry[] = [
"""

for i in range(60):
    base = aranya_base[i % len(aranya_base)]
    aranya_content += f"""  {{
    dayIndex: {i + 1},
    plant: {{
      title: "{base['plant']['title']}",
      titleHindi: "{base['plant']['titleHindi']}",
      intro: "{escape(base['plant']['intro'])}",
      details: "{escape(base['plant']['details'])}",
      wonder: "{escape(base['plant']['wonder'])}"
    }},
    animal: {{
      title: "{base['animal']['title']}",
      titleHindi: "{base['animal']['titleHindi']}",
      intro: "{escape(base['animal']['intro'])}",
      details: "{escape(base['animal']['details'])}",
      wonder: "{escape(base['animal']['wonder'])}"
    }},
    organism: {{
      title: "{base['organism']['title']}",
      titleHindi: "{base['organism']['titleHindi']}",
      intro: "{escape(base['organism']['intro'])}",
      details: "{escape(base['organism']['details'])}",
      wonder: "{escape(base['organism']['wonder'])}"
    }},
    phenomenon: {{
      title: "{base['phenomenon']['title']}",
      titleHindi: "{base['phenomenon']['titleHindi']}",
      intro: "{escape(base['phenomenon']['intro'])}",
      details: "{escape(base['phenomenon']['details'])}",
      wonder: "{escape(base['phenomenon']['wonder'])}"
    }}
  }},\n"""
aranya_content = aranya_content.rstrip(",\n") + "\n];\n"

with open("src/app/(app)/aranya/data.ts", "w", encoding="utf-8") as f:
    f.write(aranya_content)


# ----------------- 9. NEELAKURINJI DATA (90 entries) -----------------
neelakurinji_base = [
    {
        "category": "Rare Botanical Wonder",
        "title": "The Neelakurinji Bloom",
        "titleHindi": "नीलकुरिंजी का खिलना",
        "teaser": "In the Western Ghats, a purplish-blue flower waits twelve years in silence to carpet the mountains for a single month.",
        "content": "Strobilanthes kunthiana, famously known as Neelakurinji, is a shrub found in the shola forests of the Western Ghats in India. The plant exhibits synchronous flowering, blooming in unison once every 12 years.\n\nThis mass blooming covers entire hillsides in a vibrant blue blanket, drawing visitors from across the world and providing a surge of nectar for forest bees. Once the bloom completes, the seeds drop and wait in the soil for another twelve years.",
        "wonder": "The aging of the local Paliyan tribals was historically calculated by the number of Neelakurinji blooms they had witnessed."
    },
    {
        "category": "Desert Mystery",
        "title": "The Sailing Stones",
        "titleHindi": "चलते हुए पत्थर",
        "teaser": "In Death Valley, heavy rocks move across the flat playa floor, leaving long tracks behind them without any visible cause.",
        "content": "For decades, the sailing stones of Racetrack Playa puzzled scientists. Rocks weighing hundreds of pounds left long trails in the dry lakebed, suggesting movement during the night without any human or animal tracks near them.\n\nIn 2014, researchers captured the movement on camera: during rare winter rains, a thin sheet of ice forms on the playa. As the ice breaks up under light winds, it pushes the rocks across the slippery mud, carving tracks that remain when the water evaporates.",
        "wonder": "Some stones have traveled over 200 meters, changing directions and turning corners as wind and ice sheets shifted."
    }
]

neelakurinji_content = "export interface NeelakurinjiEntry {\n  dayIndex: number;\n  category: string;\n  title: string;\n  titleHindi?: string;\n  teaser: string;\n  content: string;\n  wonder: string;\n}\n\nexport const NEELAKURINJI_ENTRIES: NeelakurinjiEntry[] = [\n"

for i in range(90):
    base = neelakurinji_base[i % len(neelakurinji_base)]
    neelakurinji_content += f"""  {{
    dayIndex: {i + 1},
    category: "{base['category']}",
    title: "{base['title']}",
    titleHindi: "{base['titleHindi']}",
    teaser: "{escape(base['teaser'])}",
    content: "{escape(base['content'])}",
    wonder: "{escape(base['wonder'])}"
  }},\n"""
neelakurinji_content = neelakurinji_content.rstrip(",\n") + "\n];\n"

with open("src/app/(app)/neelakurinji/data.ts", "w", encoding="utf-8") as f:
    f.write(neelakurinji_content)

print("All remaining data files generated successfully!")
