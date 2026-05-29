# generate_bhasha_mastery.py
import os
import json

entries = []

# --- 1. VERB TENSES & ASPECT (Days 0-14) ---
tenses_data = [
    # Day 0
    {
        "concept": "Present Perfect vs. Simple Past",
        "conceptExplanation": "Use Simple Past for actions completed at a specific time in the past (e.g., 'yesterday', 'in 2020'). Use Present Perfect for actions completed at an unspecified time, or when the action has relevance to the present (e.g., life experiences).",
        "drills": [
            {"sentence": "I ___ to Delhi last year, but I ___ there since then.", "options": ["went / haven't been", "have gone / didn't go", "went / didn't go", "have gone / wasn't"], "correctAnswer": "went / haven't been", "explanation": "Simple past for specific past, present perfect for ongoing past-to-present interval."},
            {"sentence": "She ___ three projects today, and it's only 2 PM.", "options": ["finished", "has finished", "had finished", "is finishing"], "correctAnswer": "has finished", "explanation": "Today is still ongoing, and the accomplishments have current relevance."},
            {"sentence": "___ you ___ your lunch yet?", "options": ["Did / eat", "Have / eaten", "Had / eaten", "Are / eating"], "correctAnswer": "Have / eaten", "explanation": "'Yet' is commonly used with present perfect to ask about actions expected up to the present moment."},
            {"sentence": "Alexander Graham Bell ___ the telephone in 1876.", "options": ["has invented", "invented", "had invented", "was inventing"], "correctAnswer": "invented", "explanation": "The invention happened at a specific, completed point in the past."}
        ],
        "dialogue": {
            "speakerA": "Have you finished the report yet?", "speakerA_trans": "क्या आपने अभी तक रिपोर्ट पूरी कर ली है?",
            "speakerB": "Yes, I finished it yesterday evening.", "speakerB_trans": "हाँ, मैंने इसे कल शाम को पूरा कर लिया था।",
            "context": "A manager checking progress on an assignment."
        },
        "thinkInEnglish": {
            "prompt": "How would you tell someone you have met their manager before, without specifying when?",
            "incorrectDesiLiteral": "I met your manager before.",
            "correctNatural": "I have met your manager before.",
            "explanation": "Use present perfect ('have met') for life experiences with unspecified time."
        },
        "desiCorrection": {
            "incorrect": "I have seen that movie yesterday.",
            "correct": "I saw that movie yesterday.",
            "why": "Avoid using present perfect ('have seen') with specific past time markers like 'yesterday'."
        }
    },
    # Day 1
    {
        "concept": "Past Perfect vs. Simple Past",
        "conceptExplanation": "Use Simple Past for a past action. Use Past Perfect ('had' + past participle) to show that one action occurred before another action in the past.",
        "drills": [
            {"sentence": "By the time the train ___, we ___ at the station for an hour.", "options": ["arrived / had been waiting", "had arrived / waited", "arrived / waited", "was arriving / had waited"], "correctAnswer": "arrived / had been waiting", "explanation": "The waiting occurred before the train's arrival, which is in the simple past."},
            {"sentence": "When I reached the cinema, the movie ___ already ___.", "options": ["had / started", "has / started", "was / starting", "did / start"], "correctAnswer": "had / started", "explanation": "The movie started before the speaker reached the cinema, so past perfect is required."},
            {"sentence": "He ___ the keys that he ___ earlier that morning.", "options": ["found / lost", "found / had lost", "had found / lost", "was finding / lost"], "correctAnswer": "found / had lost", "explanation": "Losing the keys happened before finding them, so losing is past perfect."},
            {"sentence": "She realized she ___ her passport at home after she ___ at the airport.", "options": ["left / arrived", "had left / arrived", "left / had arrived", "was leaving / arrived"], "correctAnswer": "had left / arrived", "explanation": "Leaving the passport at home happened before arriving at the airport."}
        ],
        "dialogue": {
            "speakerA": "Why were you late for the meeting?", "speakerA_trans": "आप मीटिंग के लिए लेट क्यों थे?",
            "speakerB": "Because my alarm hadn't gone off.", "speakerB_trans": "क्योंकि मेरा अलार्म बजा ही नहीं था।",
            "context": "An employee explaining lateness to a colleague."
        },
        "thinkInEnglish": {
            "prompt": "How do you explain that your friend left before you got home?",
            "incorrectDesiLiteral": "When I came home, my friend already went.",
            "correctNatural": "When I came home, my friend had already gone.",
            "explanation": "The friend's departure happened before you came home, so past perfect is used."
        },
        "desiCorrection": {
            "incorrect": "I had completed my degree in 2018.",
            "correct": "I completed my degree in 2018.",
            "why": "Do not use past perfect unless relating it to another past action; use simple past for a single completed past event."
        }
    },
    # Day 2
    {
        "concept": "Present Continuous for Future Plans",
        "conceptExplanation": "Use Present Continuous (am/is/are + verb-ing) for future arrangements that have already been scheduled or confirmed with others. Do not use 'will' for social arrangements.",
        "drills": [
            {"sentence": "I ___ dinner with Rajiv tomorrow at 8 PM. We booked the table.", "options": ["will have", "am having", "have", "going to have"], "correctAnswer": "am having", "explanation": "A confirmed arrangement with a specific time and booking uses Present Continuous."},
            {"sentence": "What ___ you ___ this weekend?", "options": ["will / do", "are / doing", "do / do", "shall / do"], "correctAnswer": "are / doing", "explanation": "Asking about social arrangements/plans for a specific upcoming period."},
            {"sentence": "We ___ to London next Friday. We got the tickets.", "options": ["fly", "are flying", "will fly", "have flown"], "correctAnswer": "are flying", "explanation": "Since tickets are bought, this is a confirmed arrangement, so Present Continuous is most natural."},
            {"sentence": "She ___ a presentation tomorrow at 10 AM.", "options": ["gives", "is giving", "will give", "gave"], "correctAnswer": "is giving", "explanation": "Scheduled calendar events are best expressed with Present Continuous."}
        ],
        "dialogue": {
            "speakerA": "Are you free tomorrow afternoon?", "speakerA_trans": "क्या आप कल दोपहर खाली हैं?",
            "speakerB": "No, I am meeting a client at three.", "speakerB_trans": "नहीं, मैं तीन बजे एक ग्राहक से मिल रहा हूँ।",
            "context": "Colleagues coordinating schedules."
        },
        "thinkInEnglish": {
            "prompt": "How would you tell a friend that you are going to the cinema tonight with someone else?",
            "incorrectDesiLiteral": "I will go to the cinema tonight with Neha.",
            "correctNatural": "I am going to the cinema tonight with Neha.",
            "explanation": "Use present continuous for social plans already agreed upon."
        },
        "desiCorrection": {
            "incorrect": "I will meet you tomorrow at 4 PM as we decided.",
            "correct": "I am meeting you tomorrow at 4 PM as we decided.",
            "why": "When plans are already decided and fixed, Present Continuous sounds much more natural and committed than 'will'."
        }
    },
    # Day 3
    {
        "concept": "State vs. Action Verbs",
        "conceptExplanation": "State verbs describe states, feelings, or beliefs (e.g., love, hate, know, believe, understand, resemble, own). They are not used in continuous (-ing) forms. Action verbs describe activities and can be used in continuous forms.",
        "drills": [
            {"sentence": "I ___ the answer to your question now.", "options": ["am knowing", "know", "knows", "have known"], "correctAnswer": "know", "explanation": "'Know' is a state verb and cannot be used in the continuous form."},
            {"sentence": "She ___ a car and two laptops.", "options": ["is owning", "owns", "own", "has owned"], "correctAnswer": "owns", "explanation": "'Own' is a state verb of possession and takes the simple present."},
            {"sentence": "I ___ what you mean, but I don't agree.", "options": ["am understanding", "understand", "understands", "understood"], "correctAnswer": "understand", "explanation": "'Understand' represents a mental state, which is static."},
            {"sentence": "This soup ___ delicious.", "options": ["is tasting", "tastes", "tasted", "has tasted"], "correctAnswer": "tastes", "explanation": "When describing a quality, 'taste' is a state verb."}
        ],
        "dialogue": {
            "speakerA": "Do you need help with this code?", "speakerA_trans": "क्या आपको इस कोड के साथ मदद चाहिए?",
            "speakerB": "No thanks, I understand it now.", "speakerB_trans": "नहीं धन्यवाद, मैं इसे अब समझ रहा हूँ।",
            "context": "A developer talking to a team lead."
        },
        "thinkInEnglish": {
            "prompt": "How do you express that you are currently loving your new job?",
            "incorrectDesiLiteral": "I am loving my new job.",
            "correctNatural": "I love my new job. / I really enjoy my new job.",
            "explanation": "'Love' is a state verb; except for the informal McDonald's slogan, it is typically used in the simple tense."
        },
        "desiCorrection": {
            "incorrect": "I am knowing your brother since childhood.",
            "correct": "I have known your brother since childhood.",
            "why": "'Know' is a state verb. Since we refer to a period starting in the past and continuing to the present, use Present Perfect."
        }
    },
    # Day 4
    {
        "concept": "Used to vs. Would for Past Habits",
        "conceptExplanation": "Use both 'used to' and 'would' for past repeated actions (habits). However, use ONLY 'used to' for past states (e.g., 'I used to live in Mumbai'). Do not use 'would' for past states.",
        "drills": [
            {"sentence": "We ___ go to the beach every Sunday when we lived in Goa.", "options": ["would", "used to", "both 'would' and 'used to'", "were used to"], "correctAnswer": "both 'would' and 'used to'", "explanation": "Going to the beach is a repeated past action, so both are correct."},
            {"sentence": "I ___ have long hair when I was a child.", "options": ["would", "used to", "was used to", "used"], "correctAnswer": "used to", "explanation": "Having long hair is a past state, so only 'used to' is correct."},
            {"sentence": "He ___ live in Delhi before moving to Bangalore.", "options": ["would", "used to", "was used to", "use to"], "correctAnswer": "used to", "explanation": "Living somewhere is a state, not a quick repeated action, so 'used to' is required."},
            {"sentence": "Every morning, my grandfather ___ read the newspaper aloud.", "options": ["would", "used to", "both 'would' and 'used to'", "uses to"], "correctAnswer": "both 'would' and 'used to'", "explanation": "Reading is a repeated past action, so both are correct."}
        ],
        "dialogue": {
            "speakerA": "Did you play sports in school?", "speakerA_trans": "क्या आप स्कूल में खेल खेलते थे?",
            "speakerB": "Yes, I would play football every evening.", "speakerB_trans": "हाँ, मैं हर शाम फुटबॉल खेलता था।",
            "context": "Friends reminiscing about childhood."
        },
        "thinkInEnglish": {
            "prompt": "How do you say that you had a bicycle in the past but don't have it anymore?",
            "incorrectDesiLiteral": "I would have a bicycle in school days.",
            "correctNatural": "I used to have a bicycle when I was in school.",
            "explanation": "Having a bicycle is a state of possession, so use 'used to', not 'would'."
        },
        "desiCorrection": {
            "incorrect": "I would live in Chennai five years ago.",
            "correct": "I used to live in Chennai five years ago. / I lived in Chennai five years ago.",
            "why": "Living in a city is a state. Do not use 'would' for past states."
        }
    },
    # Day 5
    {
        "concept": "Present Perfect Continuous",
        "conceptExplanation": "Use Present Perfect Continuous (has/have been + verb-ing) for actions that started in the past and are still continuing, or have just stopped and have a clear result in the present.",
        "drills": [
            {"sentence": "I ___ for two hours. My eyes are tired.", "options": ["am reading", "have been reading", "had been reading", "read"], "correctAnswer": "have been reading", "explanation": "Focuses on the duration of an activity that started in the past and is still ongoing or just ended with a present result."},
            {"sentence": "It ___ since morning. The streets are flooded.", "options": ["is raining", "has been raining", "rained", "rains"], "correctAnswer": "has been raining", "explanation": "Ongoing action starting in the past with current visible consequences."},
            {"sentence": "Why are you sweaty? I ___ in the gym.", "options": ["have worked out", "have been working out", "am working out", "worked out"], "correctAnswer": "have been working out", "explanation": "The action has just finished, but the physical effect (sweating) is present."},
            {"sentence": "Rajiv ___ for a job since he graduated.", "options": ["is looking", "has been looking", "looked", "looks"], "correctAnswer": "has been looking", "explanation": "Since is used to mark the start of the ongoing action."}
        ],
        "dialogue": {
            "speakerA": "How long have you been waiting here?", "speakerA_trans": "आप यहाँ कितनी देर से इंतज़ार कर रहे हैं?",
            "speakerB": "I have been waiting for forty minutes.", "speakerB_trans": "मैं चालीस मिनट से इंतज़ार कर रहा हूँ।",
            "context": "Two friends meeting at a cafe."
        },
        "thinkInEnglish": {
            "prompt": "How would you express that you have been learning music for three years?",
            "incorrectDesiLiteral": "I am learning music from last three years.",
            "correctNatural": "I have been learning music for three years.",
            "explanation": "Use present perfect continuous for ongoing durations and 'for' (not 'from') to state the length of time."
        },
        "desiCorrection": {
            "incorrect": "I am working in this company since 2021.",
            "correct": "I have been working in this company since 2021.",
            "why": "Avoid using Present Continuous ('am working') with 'since' or 'for'; use Present Perfect Continuous instead."
        }
    },
    # Day 6
    {
        "concept": "Future Perfect",
        "conceptExplanation": "Use Future Perfect (will have + past participle) to describe an action that will be completed before a specific point in the future (often used with 'by the time' or 'by').",
        "drills": [
            {"sentence": "By next month, I ___ my project.", "options": ["will finish", "will have finished", "am finishing", "have finished"], "correctAnswer": "will have finished", "explanation": "The completion happens before the future milestone ('by next month')."},
            {"sentence": "By 10 PM tonight, she ___ for twelve hours.", "options": ["will work", "will have worked", "will have been working", "works"], "correctAnswer": "will have worked", "explanation": "Focuses on completion of work before 10 PM tonight."},
            {"sentence": "They ___ dinner by the time we arrive.", "options": ["will finish", "will have finished", "would finish", "are finishing"], "correctAnswer": "will have finished", "explanation": "Dining will be completed before the future arrival."},
            {"sentence": "In two years, the government ___ the bridge.", "options": ["will build", "will have built", "is building", "has built"], "correctAnswer": "will have built", "explanation": "The building will be completed within/before the end of the two-year period."}
        ],
        "dialogue": {
            "speakerA": "Can I call you tomorrow at nine?", "speakerA_trans": "क्या मैं कल नौ बजे फोन कर सकता हूँ?",
            "speakerB": "Yes, I will have finished my breakfast by then.", "speakerB_trans": "हाँ, तब तक मैं अपना नाश्ता खत्म कर चुका हूँगा।",
            "context": "Coordinating a phone call time."
        },
        "thinkInEnglish": {
            "prompt": "How do you tell your boss you will finish a task before the Friday deadline?",
            "incorrectDesiLiteral": "I will finish this task till Friday.",
            "correctNatural": "I will have finished this task by Friday.",
            "explanation": "'Will have finished' + 'by' is the correct way to show completion before a deadline."
        },
        "desiCorrection": {
            "incorrect": "I will complete my report till tomorrow morning.",
            "correct": "I will have completed my report by tomorrow morning.",
            "why": "Use 'by' (not 'till') for deadlines, and Future Perfect to show completion before that deadline."
        }
    },
    # Day 7
    {
        "concept": "Future Continuous",
        "conceptExplanation": "Use Future Continuous (will be + verb-ing) to describe an action that will be in progress at a specific time in the future.",
        "drills": [
            {"sentence": "This time tomorrow, we ___ on a beach in Goa.", "options": ["will lie", "will be lying", "are lying", "lie"], "correctAnswer": "will be lying", "explanation": "The action of lying will be ongoing at that specific future time."},
            {"sentence": "Don't call me at 2 PM. I ___ a client.", "options": ["will meet", "will be meeting", "meet", "am meeting"], "correctAnswer": "will be meeting", "explanation": "The meeting will be in progress at that time, making it a bad time to call."},
            {"sentence": "At the meeting, she ___ the new company policy.", "options": ["will explain", "will be explaining", "explains", "explained"], "correctAnswer": "will be explaining", "explanation": "The explanation will be the ongoing activity during the meeting."},
            {"sentence": "They ___ football when we get to the park.", "options": ["will play", "will be playing", "play", "are playing"], "correctAnswer": "will be playing", "explanation": "The playing will be in progress when we arrive."}
        ],
        "dialogue": {
            "speakerA": "What will you be doing this evening?", "speakerA_trans": "आप आज शाम क्या कर रहे होंगे?",
            "speakerB": "I will be watching the cricket match.", "speakerB_trans": "मैं क्रिकेट मैच देख रहा हूँगा।",
            "context": "Chatting about evening plans."
        },
        "thinkInEnglish": {
            "prompt": "How do you tell a friend that you will be sleeping at midnight tonight?",
            "incorrectDesiLiteral": "At midnight, I will sleep.",
            "correctNatural": "At midnight, I will be sleeping.",
            "explanation": "Use Future Continuous to show the action is in progress at that specific time."
        },
        "desiCorrection": {
            "incorrect": "I will be writing to you soon.",
            "correct": "I will write to you soon.",
            "why": "Use simple future ('will write') for future decisions or promises; Future Continuous implies the action is in progress at a specific time."
        }
    },
    # Day 8
    {
        "concept": "Past Continuous vs. Simple Past",
        "conceptExplanation": "Use the Past Continuous to describe a background action that was in progress, and the Simple Past for a shorter action that interrupted it.",
        "drills": [
            {"sentence": "While I ___ down the street, I ___ Rajiv.", "options": ["walked / saw", "was walking / saw", "walked / was seeing", "was walking / was seeing"], "correctAnswer": "was walking / saw", "explanation": "Walking is the background continuous action; seeing is the brief interrupting event."},
            {"sentence": "The power ___ out while they ___ dinner.", "options": ["went / had", "had gone / were having", "went / were having", "was going / had"], "correctAnswer": "went / were having", "explanation": "Power going out is the interruption (simple past); having dinner is the ongoing event (past continuous)."},
            {"sentence": "She ___ a book when the phone ___.", "options": ["read / rang", "was reading / rang", "read / was ringing", "was reading / was ringing"], "correctAnswer": "was reading / rang", "explanation": "Reading is the ongoing past action; ringing is the interruption."},
            {"sentence": "I ___ my keys while I ___ in the park.", "options": ["dropped / jogged", "dropped / was jogging", "was dropping / jogged", "was dropping / was jogging"], "correctAnswer": "dropped / was jogging", "explanation": "Jogging is the continuous action; dropping keys is the single moment."}
        ],
        "dialogue": {
            "speakerA": "Did you hear the thunderstorm last night?", "speakerA_trans": "क्या आपने कल रात आंधी-तूफान की आवाज सुनी?",
            "speakerB": "No, I was sleeping soundly.", "speakerB_trans": "नहीं, मैं गहरी नींद में सो रहा था।",
            "context": "Discussing night events."
        },
        "thinkInEnglish": {
            "prompt": "How do you say you were cooking when your brother arrived?",
            "incorrectDesiLiteral": "My cooking was going on when my brother came.",
            "correctNatural": "I was cooking when my brother arrived.",
            "explanation": "Simple past for arrival, past continuous for cooking."
        },
        "desiCorrection": {
            "incorrect": "He was crossing the road and a car hit him.",
            "correct": "While he was crossing the road, a car hit him.",
            "why": "Use 'while' or 'when' to clearly show the relationship between the background action and the interruption."
        }
    },
    # Day 9
    {
        "concept": "Present Perfect vs. Present Perfect Continuous",
        "conceptExplanation": "Use Present Perfect to focus on the result of a completed action (e.g., 'I have painted the kitchen'). Use Present Perfect Continuous to focus on the activity itself and its duration (e.g., 'I have been painting the kitchen').",
        "drills": [
            {"sentence": "I ___ my assignment. Here it is.", "options": ["have been finishing", "have finished", "finished", "had finished"], "correctAnswer": "have finished", "explanation": "Focuses on the completed result now."},
            {"sentence": "He ___ for hours, and his hands are dirty.", "options": ["has gardened", "has been gardening", "gardened", "is gardening"], "correctAnswer": "has been gardening", "explanation": "Focuses on the activity and duration, with visible results."},
            {"sentence": "We ___ three cups of tea this morning.", "options": ["have been drinking", "have drunk", "drank", "had drunk"], "correctAnswer": "have drunk", "explanation": "Focuses on the completed quantity, not the ongoing process."},
            {"sentence": "How long ___ you ___ English?", "options": ["have / studied", "have / been studying", "are / studying", "did / study"], "correctAnswer": "have / been studying", "explanation": "Focuses on the ongoing duration of study."}
        ],
        "dialogue": {
            "speakerA": "You look exhausted. What have you been doing?", "speakerA_trans": "आप बहुत थके हुए लग रहे हैं। आप क्या कर रहे थे?",
            "speakerB": "I have been running in the park.", "speakerB_trans": "मैं पार्क में दौड़ रहा था।",
            "context": "Asking about exhaustion."
        },
        "thinkInEnglish": {
            "prompt": "How do you tell someone you've written five pages of your book today?",
            "incorrectDesiLiteral": "I have been writing five pages today.",
            "correctNatural": "I have written five pages today.",
            "explanation": "Use present perfect for quantities/results completed rather than continuous duration."
        },
        "desiCorrection": {
            "incorrect": "I have been knowing him for years.",
            "correct": "I have known him for years.",
            "why": "'Know' is a state verb and cannot be used in continuous forms; use Present Perfect instead."
        }
    },
    # Day 10
    {
        "concept": "Going to vs. Will for Future Decisions",
        "conceptExplanation": "Use 'will' for decisions made at the moment of speaking (spontaneous). Use 'going to' for decisions or plans already made before speaking.",
        "drills": [
            {"sentence": "A: We don't have any milk. B: Really? I ___ buy some.", "options": ["will go and", "am going to", "go and", "shall have"], "correctAnswer": "will go and", "explanation": "Spontaneous decision at the moment of learning about the milk shortage."},
            {"sentence": "I ___ Rajiv tomorrow. We planned this last week.", "options": ["will meet", "am going to meet", "meet", "have met"], "correctAnswer": "am going to meet", "explanation": "Plan made prior to the conversation."},
            {"sentence": "Look at those dark clouds! It ___ rain.", "options": ["will", "is going to", "rains", "would"], "correctAnswer": "is going to", "explanation": "Prediction based on current physical evidence."},
            {"sentence": "A: Why are you holding that paint? B: I ___ paint my door.", "options": ["will", "am going to", "paint", "shall"], "correctAnswer": "am going to", "explanation": "Intent/plan established before the conversation."}
        ],
        "dialogue": {
            "speakerA": "The phone is ringing.", "speakerA_trans": "फोन बज रहा है।",
            "speakerB": "I will get it.", "speakerB_trans": "मैं उठाता हूँ।",
            "context": "Spontaneous reaction to a ring."
        },
        "thinkInEnglish": {
            "prompt": "How would you spontaneously offer to carry a heavy bag for an elderly person?",
            "incorrectDesiLiteral": "I am going to carry your bag.",
            "correctNatural": "I will carry your bag for you. / Let me carry your bag.",
            "explanation": "Use 'will' for instant, helpful offers."
        },
        "desiCorrection": {
            "incorrect": "I will buy a new house next month, everything is finalized.",
            "correct": "I am going to buy a new house next month, everything is finalized.",
            "why": "Use 'going to' (or Present Continuous) for prior decisions and pre-arranged plans."
        }
    },
    # Day 11
    {
        "concept": "Past Continuous for Background Descriptions",
        "conceptExplanation": "Use the Past Continuous to paint a scene or set the atmosphere at the beginning of a story, while using the Simple Past to initiate the actual sequence of events.",
        "drills": [
            {"sentence": "The sun ___ and the birds ___ when I stepped outside.", "options": ["shone / sang", "was shining / were singing", "shone / were singing", "was shining / sang"], "correctAnswer": "was shining / were singing", "explanation": "Sets the background atmosphere at the start of the scene."},
            {"sentence": "Everyone in the cafe ___ when suddenly a loud crash occurred.", "options": ["chatted", "was chatting", "had chatted", "chats"], "correctAnswer": "was chatting", "explanation": "Background activity in progress when the main event happens."},
            {"sentence": "Wind ___ through the trees and rain ___ against the glass.", "options": ["howled / beat", "was howling / was beating", "howled / was beating", "was howling / beat"], "correctAnswer": "was howling / was beating", "explanation": "Sets the weather atmosphere in past continuous."},
            {"sentence": "While the children ___ in the yard, their father prepare lunch.", "options": ["played", "were playing", "had played", "are playing"], "correctAnswer": "were playing", "explanation": "Continuous background play setting."}
        ],
        "dialogue": {
            "speakerA": "What did it look like when you arrived?", "speakerA_trans": "जब आप पहुंचे तो कैसा नजारा था?",
            "speakerB": "Music was playing and people were dancing.", "speakerB_trans": "संगीत बज रहा था और लोग नाच रहे थे।",
            "context": "Describing a party scene."
        },
        "thinkInEnglish": {
            "prompt": "How do you set the scene of a busy office morning in past tenses?",
            "incorrectDesiLiteral": "Phones rang and printers printed when I came.",
            "correctNatural": "Phones were ringing and printers were printing when I arrived.",
            "explanation": "Past continuous builds the active background environment."
        },
        "desiCorrection": {
            "incorrect": "It was raining when I woke up and the wind blew.",
            "correct": "It was raining and the wind was blowing when I woke up.",
            "why": "Keep parallel structure in the background description using Past Continuous for both rain and wind."
        }
    },
    # Day 12
    {
        "concept": "Past Perfect Continuous",
        "conceptExplanation": "Use Past Perfect Continuous (had been + verb-ing) to show that an action started in the past and continued up until another point in the past, highlighting duration.",
        "drills": [
            {"sentence": "They ___ for two hours when Rajiv finally arrived.", "options": ["were talking", "had been talking", "talked", "have been talking"], "correctAnswer": "had been talking", "explanation": "Action in progress with duration before a past point of arrival."},
            {"sentence": "The grass was wet because it ___ all night.", "options": ["rained", "had been raining", "was raining", "has been raining"], "correctAnswer": "had been raining", "explanation": "The rain was continuous and finished right before the past observation of wet grass."},
            {"sentence": "She ___ for the exam for weeks, so she passed easily.", "options": ["studied", "had been studying", "was studying", "has been studying"], "correctAnswer": "had been studying", "explanation": "Long-term preparation preceding the past event of taking/passing the exam."},
            {"sentence": "He was exhausted because he ___ since morning.", "options": ["worked", "had been working", "was working", "has worked"], "correctAnswer": "had been working", "explanation": "Duration of past work causing past state of exhaustion."}
        ],
        "dialogue": {
            "speakerA": "Why did you quit your job?", "speakerA_trans": "आपने नौकरी क्यों छोड़ दी?",
            "speakerB": "I had been working twelve hours a day and felt burned out.", "speakerB_trans": "मैं दिन में बारह घंटे काम कर रहा था और थका हुआ महसूस कर रहा था।",
            "context": "Discussing career changes."
        },
        "thinkInEnglish": {
            "prompt": "How do you explain that you had been driving for five hours before finding a hotel?",
            "incorrectDesiLiteral": "We were driving for five hours then we found a hotel.",
            "correctNatural": "We had been driving for five hours before we found a hotel.",
            "explanation": "Past perfect continuous correctly links the prior duration to the past discovery."
        },
        "desiCorrection": {
            "incorrect": "I was waiting for you since 2 PM yesterday.",
            "correct": "I had been waiting for you since 2 PM yesterday.",
            "why": "When referring to an ongoing past duration starting at a specific point, use Past Perfect Continuous instead of simple Past Continuous."
        }
    },
    # Day 13
    {
        "concept": "Verbs with Dual Meaning (State and Action)",
        "conceptExplanation": "Some verbs can be both state and action verbs with a shift in meaning. E.g., 'think' (opinion vs. active consideration), 'have' (possession vs. activity), 'see' (understanding/sight vs. dating/meeting).",
        "drills": [
            {"sentence": "I ___ that this is a great idea.", "options": ["am thinking", "think", "thinks", "thought"], "correctAnswer": "think", "explanation": "State verb expressing an opinion/belief."},
            {"sentence": "Quiet, please. I ___ about my exam.", "options": ["think", "am thinking", "thinks", "have thought"], "correctAnswer": "am thinking", "explanation": "Action verb representing mental activity in progress."},
            {"sentence": "Rajiv ___ a meeting with his lawyer right now.", "options": ["has", "is having", "owns", "possesses"], "correctAnswer": "is having", "explanation": "'Having a meeting' is an active experience, not static possession."},
            {"sentence": "I ___ the doctor tomorrow morning.", "options": ["see", "am seeing", "have seen", "sees"], "correctAnswer": "am seeing", "explanation": "'Seeing' here means meeting/visiting, which is an action."}
        ],
        "dialogue": {
            "speakerA": "What are you doing?", "speakerA_trans": "तुम क्या कर रहे हो?",
            "speakerB": "I am having lunch. I have a sandwich.", "speakerB_trans": "मैं लंच कर रहा हूँ। मेरे पास एक सैंडविच है।",
            "context": "Eating and possessing simultaneously."
        },
        "thinkInEnglish": {
            "prompt": "How do you tell someone you are actively considering moving to Mumbai?",
            "incorrectDesiLiteral": "I think to move to Mumbai.",
            "correctNatural": "I am thinking of moving to Mumbai.",
            "explanation": "Active consideration of a plan uses the continuous form 'thinking of'."
        },
        "desiCorrection": {
            "incorrect": "I am having three houses in Mumbai.",
            "correct": "I have three houses in Mumbai.",
            "why": "'Have' meaning possession is a state verb and should not be used in continuous form."
        }
    },
    # Day 14
    {
        "concept": "Habits in the Present",
        "conceptExplanation": "Use Simple Present for regular habits. However, use 'tend to' for tendencies, 'will' for typical characteristic behaviors, or Present Continuous + 'always' to express annoyance at a habit.",
        "drills": [
            {"sentence": "Rajiv ___ lose his keys; he's so disorganized.", "options": ["is always losing", "always loses", "will lose", "tends to lose"], "correctAnswer": "is always losing", "explanation": "Present continuous + always expresses irritation or exaggeration about a habit."},
            {"sentence": "I ___ wake up early on weekends.", "options": ["will", "tend to", "am always waking", "tending to"], "correctAnswer": "tend to", "explanation": "Expresses a regular tendency rather than a strict rule."},
            {"sentence": "She ___ talk for hours if you let her.", "options": ["will", "is talking", "tends", "always talks"], "correctAnswer": "will", "explanation": "'Will' describes typical, predictable behavior in the present."},
            {"sentence": "He ___ late to meetings, which is unprofessional.", "options": ["is always coming", "always comes", "tends to come", "will come"], "correctAnswer": "is always coming", "explanation": "Highlighting a annoying habit using Present Continuous + always."}
        ],
        "dialogue": {
            "speakerA": "Rajiv is always interrupting me.", "speakerA_trans": "राजीव हमेशा मेरी बात काटता रहता है।",
            "speakerB": "Yes, he tends to dominate conversations.", "speakerB_trans": "हाँ, उसकी बातचीत पर हावी होने की प्रवृत्ति है।",
            "context": "Discussing annoying habits of a coworker."
        },
        "thinkInEnglish": {
            "prompt": "How do you express frustration that your computer is constantly crashing?",
            "incorrectDesiLiteral": "My computer crashes always.",
            "correctNatural": "My computer is always crashing!",
            "explanation": "Present continuous with 'always' emphasizes the frustration of a repetitive issue."
        },
        "desiCorrection": {
            "incorrect": "He is daily coming late.",
            "correct": "He comes late every day. / He is always coming late.",
            "why": "Avoid combining 'daily' with continuous forms; use simple present or the annoying habit structure."
        }
    }
]

# Process tenses data (first 15 entries)
for day_idx, t_data in enumerate(tenses_data):
    t_data["dayIndex"] = day_idx
    t_data["theme"] = "Verb Tenses"
    entries.append(t_data)

# --- 2. PREPOSITIONS & PARTICLE PLACEMENT (Days 15-29) ---
prepositions_topics = [
    # Day 15
    ("Prepositions of Time: In, On, At", "Use 'at' for precise times (at 3 PM, at midnight). Use 'on' for days and dates (on Monday, on May 24). Use 'in' for longer periods like months, years, seasons (in May, in winter).",
     [
         ("The presentation starts ___ 9:30 AM ___ Monday.", ["in / on", "at / on", "at / in", "on / at"], "at / on", "'At' for clock time, 'on' for days."),
         ("India gained independence ___ August ___ 1947.", ["in / in", "on / in", "at / in", "in / on"], "in / in", "Both month and year require 'in'."),
         ("My birthday is ___ June 15th.", ["in", "on", "at", "during"], "on", "Specific dates take 'on'."),
         ("We usually visit our village ___ winter.", ["on", "at", "in", "during"], "in", "Seasons take 'in'.")
     ],
     ("When is the flight?", "It is at midnight on Saturday.", "Confirming travel plans."),
     "How do you tell a client a meeting is scheduled for 4 PM on Tuesday?", "The meeting is at 4 PM on Tuesday.", "At for clock time, on for day.",
     "I will meet you in 5:00 PM.", "I will meet you at 5:00 PM.", "Clock times require 'at'."),
    
    # Day 16
    ("Prepositions of Place: In, On, At", "Use 'at' for a point/specific location. Use 'in' for an enclosed space or geographic area. Use 'on' for surfaces.",
     [
         ("Rajiv is currently ___ the office, sitting ___ his desk.", ["at / at", "in / on", "at / on", "in / at"], "at / at", "'At the office' (location), 'at his desk' (point)."),
         ("I left the report ___ the table ___ the conference room.", ["on / in", "in / on", "at / in", "on / at"], "on / in", "Table is a surface ('on'), room is a space ('in')."),
         ("She lives ___ Mumbai ___ an apartment near the sea.", ["in / in", "at / in", "in / on", "at / at"], "in / in", "Cities and buildings use 'in'."),
         ("Meet me ___ the main gate of the metro station.", ["in", "on", "at", "inside"], "at", "Gate is a meeting point.")
     ],
     ("Where are you?", "I am standing at the entrance of the mall.", "Locating someone."),
     "How do you say you left your laptop on the bed in your room?", "My laptop is on the bed in my room.", "Bed is surface ('on'), room is space ('in').",
     "He is not in his seat.", "He is not at his desk.", "Use 'at his desk/post' for work locations."),

    # Day 17
    ("For vs. Since with Time Periods", "Use 'for' to describe a length or duration of time. Use 'since' to specify a starting point in the past.",
     [
         ("I have lived in this apartment ___ ten years.", ["since", "for", "from", "during"], "for", "Duration takes 'for'."),
         ("She has been working here ___ she graduated.", ["for", "since", "from", "after"], "since", "Graduation is a past starting point."),
         ("We haven't seen Rajiv ___ last Sunday.", ["for", "since", "from", "till"], "since", "Point in time takes 'since'."),
         ("The program has been running ___ several hours.", ["since", "for", "from", "by"], "for", "Duration takes 'for'.")
     ],
     ("How long have you known each other?", "We have known each other since college.", "Colleagues talking about their friendship."),
     "How do you tell a doctor you've had a headache for two days?", "I have had a headache for two days.", "'For' for duration of time.",
     "I am waiting here since one hour.", "I have been waiting here for an hour.", "Use 'for' (not 'since') with a duration of time."),

    # Day 18
    ("During vs. While", "Use 'during' followed by a noun or noun phrase. Use 'while' followed by a subject + verb clause.",
     [
         ("We stayed silent ___ the speech.", ["during", "while", "for", "in"], "during", "Speech is a noun phrase, requiring 'during'."),
         ("Rajiv fell asleep ___ he was reading.", ["during", "while", "since", "in"], "while", "Clause follows, requiring 'while'."),
         ("Please don't talk ___ the film is playing.", ["during", "while", "for", "by"], "while", "Clause follows."),
         ("Many issues were discussed ___ the meeting.", ["during", "while", "on", "for"], "during", "Meeting is a noun phrase.")
     ],
     ("Did you take notes?", "No, I listened during the session.", "A workshop environment."),
     "How do you tell someone not to check their phone during dinner?", "Don't check your phone while we are eating. / Don't check your phone during dinner.", "While with clause, during with noun.",
     "He called me while the meeting.", "He called me during the meeting. / He called me while I was in the meeting.", "Do not use 'while' before a simple noun; use 'during'."),

    # Day 19
    ("Prepositions after Adjectives", "Many adjectives require specific prepositions. E.g., good at (not good in), interested in, afraid of, angry with, proud of, responsible for.",
     [
         ("She is exceptionally good ___ coding.", ["in", "at", "with", "for"], "at", "The standard dependent preposition for 'good' is 'at'."),
         ("Are you interested ___ history?", ["in", "at", "about", "for"], "in", "Interested takes 'in'."),
         ("Rajiv is responsible ___ the deployment.", ["for", "to", "with", "of"], "for", "Responsible takes 'for'."),
         ("I am proud ___ my team's effort.", ["for", "of", "with", "about"], "of", "Proud takes 'of'.")
     ],
     ("Are you afraid of public speaking?", "Yes, but I am trying to get better at it.", "Preparing for a presentation."),
     "How do you tell someone you are keen on learning a new skill?", "I am keen on learning python.", "Keen is followed by 'on'.",
     "I am very good in English.", "I am very good at English.", "Use 'good at' to describe capability or skill, never 'good in'."),

    # Day 20
    ("Prepositions after Verbs", "Certain verbs have fixed dependent prepositions. E.g., depend on (not depend of), agree with, listen to, believe in, apply for, consist of.",
     [
         ("The success of the app depends ___ team coordination.", ["of", "on", "with", "for"], "on", "Depend takes 'on'."),
         ("I completely agree ___ your proposal.", ["with", "to", "about", "for"], "with", "Agree with a person or idea."),
         ("Did you apply ___ the visa?", ["to", "for", "in", "with"], "for", "Apply for a position or visa."),
         ("This book consists ___ ten chapters.", ["of", "with", "in", "by"], "of", "Consist takes 'of'.")
     ],
     ("Will you come tomorrow?", "It depends on the weather.", "Deciding on outdoor plans."),
     "How do you ask someone to listen to your advice?", "Please listen to my advice.", "Listen takes 'to'.",
     "It depends of your schedule.", "It depends on your schedule.", "Depend takes 'on', never 'of'."),

    # Day 21
    ("Phrasal Verbs with 'Up'", "'Up' as a particle often indicates completion, improvement, or rising. E.g., give up (stop trying), clean up, bring up (mention), grow up.",
     [
         ("Don't ___ on your dreams.", ["give up", "give down", "give out", "give in"], "give up", "Give up means to surrender or stop trying."),
         ("Rajiv ___ a crucial issue during the meeting.", ["brought up", "brought down", "brought out", "brought in"], "brought up", "Bring up means to mention or introduce a topic."),
         ("We need to ___ this workspace.", ["clean up", "clean out", "clean down", "clean off"], "clean up", "Clean up means to make neat."),
         ("He ___ in Mumbai before moving abroad.", ["grew up", "grew out", "grew in", "grew down"], "grew up", "Grow up describes childhood development.")
     ],
     ("Why did you bring that up?", "Because it is an unresolved issue.", "A difficult conversation in a team meeting."),
     "How do you encourage a colleague not to stop trying?", "Don't give up. You can do this.", "Give up means quit.",
     "I will revert up to you.", "I will get back to you. / I will reply to you.", "Revert back/up is redundant; use 'get back to'."),

    # Day 22
    ("Phrasal Verbs with 'Out'", "'Out' often signifies exit, discovery, exclusion, or completion. E.g., find out (discover), run out (exhaust supply), figure out (solve).",
     [
         ("We have ___ of coffee. I need to buy more.", ["run out", "run in", "run down", "run off"], "run out", "Run out of means to exhaust the supply."),
         ("I can't ___ how to solve this puzzle.", ["figure out", "figure up", "figure in", "figure off"], "figure out", "Figure out means to solve or understand."),
         ("She ___ that there was a typo in the slide.", ["pointed out", "pointed up", "pointed down", "pointed off"], "pointed out", "Point out means to show or indicate."),
         ("How did you ___ about the secret?", ["find out", "find up", "find down", "find off"], "find out", "Find out means to discover information.")
     ],
     ("Have we run out of time?", "Yes, we need to wrap up the meeting.", "Running late in a discussion."),
     "How do you tell someone you solved the problem?", "I figured out the solution.", "Figure out means solve.",
     "I will find out it soon.", "I will find it out soon. / I will find out about it soon.", "Transitive phrasal verbs require correct pronoun placement."),

    # Day 23
    ("Phrasal Verbs with 'Off'", "'Off' indicates separation, cancellation, delay, or departure. E.g., take off (depart/remove), call off (cancel), put off (postpone).",
     [
         ("The meeting was ___ due to heavy rain.", ["called off", "called out", "called in", "called up"], "called off", "Call off means cancel."),
         ("We should not ___ what we can do today.", ["put off", "put out", "put down", "put on"], "put off", "Put off means postpone."),
         ("The plane will ___ in ten minutes.", ["take off", "take out", "take in", "take down"], "take off", "Take off means depart."),
         ("Rajiv likes to ___ his new watch.", ["show off", "show out", "show down", "show off in"], "show off", "Show off means exhibit boastfully.")
     ],
     ("Is the match postponed?", "Yes, they put it off until tomorrow.", "Weather affecting sports."),
     "How do you tell someone to remove their shoes before entering?", "Please take off your shoes.", "Take off means remove.",
     "They cancelled off the project.", "They called off the project. / They cancelled the project.", "Cancel doesn't take 'off'; only 'call off' does."),

    # Day 24
    ("By vs. Until for Deadlines", "Use 'by' to indicate an action happening at or before a deadline. Use 'until' to describe a state or continuous action continuing up to a specific time.",
     [
         ("Please submit the report ___ Friday afternoon.", ["by", "until", "to", "till"], "by", "Friday afternoon is a deadline for a one-time action."),
         ("I will be in the office ___ 6 PM today.", ["by", "until", "since", "on"], "until", "Being in the office is a continuous state."),
         ("You must register ___ tomorrow night.", ["by", "until", "since", "till"], "by", "Register is a completed action before a deadline."),
         ("He stayed at the party ___ midnight.", ["by", "until", "on", "since"], "until", "Staying is a continuous action.")
     ],
     ("Can you deliver the package by five?", "Yes, I will be working until five, so I can.", "Arranging a delivery."),
     "How do you tell a coworker you will wait for them up to 4 PM?", "I will wait for you until 4 PM.", "Waiting is continuous, so use until.",
     "I will complete this work until Friday.", "I will complete this work by Friday. / I will work on this until Friday.", "Completion is a one-time event, so use 'by'."),

    # Day 25
    ("Between vs. Among", "Use 'between' when naming distinct, individual items. Use 'among' when items are part of an undefined group, crowd, or mass.",
     [
         ("The negotiations are ___ India and Nepal.", ["between", "among", "with", "in"], "between", "Refers to two distinct countries."),
         ("She felt comfortable ___ her friends.", ["between", "among", "within", "at"], "among", "Refers to a group of friends."),
         ("Choose ___ a sandwich, a salad, or a wrap.", ["between", "among", "inside", "within"], "between", "Refers to distinct choices."),
         ("There is a secret ___ the members of the club.", ["between", "among", "within", "at"], "among", "Refers to a collective group.")
     ],
     ("Which laptop should I buy?", "It's a choice between these two models.", "Shopping advice."),
     "How do you say you distributed sweets to a group of children?", "I distributed sweets among the children.", "Among is used for groups.",
     "Divide the work among the two of you.", "Divide the work between the two of you.", "Use 'between' for two distinct people."),

    # Day 26
    ("Prepositions of Movement", "Prepositions of movement show direction: 'into' (entering a space), 'onto' (moving to a surface), 'through' (passing inside a volume), 'past' (passing near).",
     [
         ("He walked ___ the room and sat down.", ["into", "in", "onto", "on"], "into", "Indicates movement from outside to inside."),
         ("The cat jumped ___ the counter.", ["onto", "into", "through", "in"], "onto", "Movement to a surface."),
         ("We drove ___ the tunnel.", ["through", "across", "into", "onto"], "through", "Movement within a 3D space."),
         ("Walk ___ the bank and turn right.", ["past", "into", "onto", "through"], "past", "Movement passing near.")
     ],
     ("Did you see Rajiv?", "Yes, he walked past my desk a minute ago.", "Looking for someone at work."),
     "How do you describe stepping out of the rain and entering a house?", "I walked into the house to escape the rain.", "Into indicates entering.",
     "He put the books in the table.", "He put the books on the table.", "Use 'on' for a surface."),

    # Day 27
    ("Dependent Prepositions for Nouns", "Many nouns are followed by specific prepositions. E.g., reason for (not reason of), increase in, key to, connection between.",
     [
         ("What is the reason ___ your decision?", ["for", "of", "to", "with"], "for", "The standard preposition after 'reason' is 'for'."),
         ("Hard work is the key ___ success.", ["to", "for", "of", "with"], "to", "'Key to' is the idiom."),
         ("There has been a sharp increase ___ sales.", ["in", "of", "on", "for"], "in", "'Increase in' indicates what grew."),
         ("What is the connection ___ these two ideas?", ["between", "among", "with", "to"], "between", "Connection between distinct items.")
     ],
     ("Do you know the reason for the delay?", "It was because of a server issue.", "Debugging a system error."),
     "How do you describe finding a solution to a problem?", "I found the key to the problem.", "Key to is the standard expression.",
     "What is the reason of the meeting?", "What is the reason for the meeting?", "Use 'reason for', not 'reason of'."),

    # Day 28
    ("Prepositions at the End of Clauses", "In natural, modern English, prepositions are frequently left at the end of relative clauses or questions (e.g., 'the person I talked to').",
     [
         ("Who are you waiting ___?", ["for", "to", "with", "at"], "for", "The preposition stays at the end of the question."),
         ("That is the project I am working ___.", ["on", "at", "for", "in"], "on", "Work on a project. Natural preposition placement."),
         ("Which town did you grow up ___?", ["in", "at", "on", "by"], "in", "Grow up in a town."),
         ("She is the colleague I spoke ___.", ["to", "with", "both 'to' and 'with'", "about"], "both 'to' and 'with'", "Speak to/with someone.")
     ],
     ("Which company do you work for?", "I work for Pravah Tech.", "A professional introduction."),
     "How do you ask someone who they came to the party with?", "Who did you come with?", "Preposition at the end is standard in conversation.",
     "To whom were you talking?", "Who were you talking to?", "'Who... to?' is much more natural and common in spoken English."),

    # Day 29
    ("Phrasal Verbs with 'Down'", "'Down' often indicates reduction, refusal, or settling. E.g., break down (stop working), turn down (reject), calm down, settle down.",
     [
         ("He ___ the job offer because the salary was low.", ["turned down", "turned off", "turned out", "turned up"], "turned down", "Turn down means reject."),
         ("My car ___ on the highway.", ["broke down", "broke off", "broke out", "broke up"], "broke down", "Break down means stop functioning."),
         ("Please ___ and tell me what happened.", ["calm down", "calm off", "calm out", "calm up"], "calm down", "Calm down means become relaxed."),
         ("They plan to ___ in Mumbai next year.", ["settle down", "settle off", "settle out", "settle in"], "settle down", "Settle down means establish stable life.")
     ],
     ("Did they accept the proposal?", "No, they turned it down.", "Reviewing project submissions."),
     "How do you tell a friend to relax when they are panicked?", "Please calm down. Everything is fine.", "Calm down means relax.",
     "My computer was broken down yesterday.", "My computer broke down yesterday.", "Do not use passive voice with 'break down' for machine failure.")
]

# Process prepositions topics (Days 15-29)
for idx, (concept, explanation, drills, dialogue_info, think_prompt, think_correct, think_exp, desi_inc, desi_cor, desi_why) in enumerate(prepositions_topics):
    day_num = 15 + idx
    drills_list = []
    for s, opts, ans, exp in drills:
        drills_list.append({
            "sentence": s,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp
        })
    entries.append({
        "dayIndex": day_num,
        "theme": "Prepositions",
        "concept": concept,
        "conceptExplanation": explanation,
        "drills": drills_list,
        "dialogue": {
            "speakerA": dialogue_info[0],
            "speakerA_trans": "",
            "speakerB": dialogue_info[1],
            "speakerB_trans": "",
            "context": dialogue_info[2]
        },
        "thinkInEnglish": {
            "prompt": think_prompt,
            "incorrectDesiLiteral": "",
            "correctNatural": think_correct,
            "explanation": think_exp
        },
        "desiCorrection": {
            "incorrect": desi_inc,
            "correct": desi_cor,
            "why": desi_why
        }
    })

# --- 3. MODALS & CONDITIONALS (Days 30-44) ---
modals_topics = [
    ("Zero and First Conditionals", "Zero Conditional (If + Present Simple, Present Simple) is used for general truths or facts. First Conditional (If + Present Simple, Will + Verb) is used for real or likely future events.",
     [
         ("If you heat water to 100 degrees, it ___.", ["boils", "will boil", "boiled", "would boil"], "boils", "General scientific truth uses Zero Conditional (boils)."),
         ("If Rajiv ___ tomorrow, we ___ go to the park.", ["comes / will", "will come / will", "comes / would", "came / will"], "comes / will", "Likely future condition uses First Conditional."),
         ("If I ___ time tonight, I ___ finish the book.", ["have / will", "will have / will", "had / would", "have / would"], "have / will", "First conditional for possible future plan."),
         ("Plants die if they ___ enough water.", ["don't get", "won't get", "didn't get", "aren't getting"], "don't get", "General factual relationship uses Zero Conditional.")
     ],
     ("What if it rains tomorrow?", "If it rains, we will stay indoors.", "Making weekend plans."),
     "How do you tell someone that a system crashes if it overheats?", 
     "If the system overheats, it crashes.", 
     "Zero conditional for general system fact.", 
     "If you will come tomorrow, we will discuss.", 
     "If you come tomorrow, we will discuss.", 
     "Do not use 'will' in the 'if' clause of conditional sentences."),

    ("Second Conditional", "Use Second Conditional (If + Past Simple, Would + Verb) to talk about imaginary, hypothetical, or highly unlikely situations in the present or future.",
     [
         ("If I ___ Rajiv's number, I ___ call him.", ["had / would", "have / will", "had / will", "have / would"], "had / would", "Hypothetical situation: I don't have the number, but if I did, I would call."),
         ("If they ___ more money, they ___ buy a house.", ["had / would", "have / will", "have / would", "had / will"], "had / would", "Hypothetical present condition and result."),
         ("What ___ you do if you ___ the lottery?", ["would / won", "will / win", "would / win", "will / won"], "would / won", "Imagining a highly unlikely future event."),
         ("If I ___ you, I ___ apply for the job.", ["were / would", "was / will", "am / would", "were / will"], "were / would", "Giving advice: 'If I were you' is standard in the Second Conditional.")
     ],
     ("Would you move to New York if you got a job?", "Yes, I would definitely go.", "Discussing career dreams."),
     "How do you advise a friend by putting yourself in their shoes?", 
     "If I were you, I would take a break.", 
     "'If I were you' + 'would' is the standard way to offer advice.",
     "If I will be the president, I will change the rules.", 
     "If I were the president, I would change the rules.", 
     "Use simple past in the 'if' clause and 'would' in the main clause for imaginary situations."),

    ("Third Conditional", "Use Third Conditional (If + Past Perfect, Would have + Past Participle) to talk about imaginary, hypothetical situations in the past that did not happen, often expressing regret.",
     [
         ("If you ___ me, I ___ you at the airport.", ["had called / would have met", "called / would meet", "had called / will meet", "called / met"], "had called / would have met", "Imagining a past event that didn't happen (you didn't call, I didn't meet you)."),
         ("We ___ the match if Rajiv ___ that goal.", ["would have won / had scored", "won / had scored", "would win / scored", "had won / scored"], "would have won / had scored", "Past regret: he didn't score, so we didn't win."),
         ("If I ___ more, I ___ the exam.", ["had studied / would have passed", "studied / would pass", "studied / passed", "had studied / passed"], "had studied / would have passed", "Past hypothetical study and exam outcome."),
         ("She ___ the flight if she ___ earlier.", ["wouldn't have missed / had left", "hadn't missed / left", "wouldn't miss / left", "missed / had left"], "wouldn't have missed / had left", "Past hypothetical flight scenario.")
     ],
     ("Why did you fail the test?", "If I had studied harder, I would have passed.", "Talking about past academic regret."),
     "How do you tell someone you would have helped them yesterday if you had known they were in trouble?", 
     "If I had known, I would have helped you.", 
     "Third conditional for past hypothetical assistance.",
     "If I would have studied, I would have passed.", 
     "If I had studied, I would have passed.", 
     "Do not use 'would have' in the 'if' clause of conditional sentences; use Past Perfect ('had studied')."),

    ("Mixed Conditionals", "Mixed Conditionals combine past hypothetical conditions with present hypothetical results (If + Past Perfect, Would + Verb) or present states with past hypothetical results.",
     [
         ("If I ___ that job in Mumbai, I ___ there now.", ["had taken / would live", "took / would live", "had taken / would have lived", "took / lived"], "had taken / would live", "Past action (took job) having a result in the present (living there now)."),
         ("We ___ lost if we ___ the map.", ["wouldn't be / had checked", "weren't / checked", "wouldn't have been / checked", "aren't / had checked"], "wouldn't be / had checked", "Present state (not lost now) resulting from past action (checking map)."),
         ("If Rajiv ___ more organized, he ___ his keys yesterday.", ["were / wouldn't have lost", "had been / wouldn't lose", "was / didn't lose", "were / wouldn't lose"], "were / wouldn't have lost", "General present state (Rajiv's personality) affecting a past event (losing keys)."),
         ("I ___ at the meeting now if I ___ the flight.", ["would be / hadn't missed", "will be / didn't miss", "would have been / hadn't missed", "am / didn't miss"], "would be / hadn't missed", "Present result (being at meeting now) of a past event (missing flight).")
     ],
     ("Are you still living in Delhi?", "Yes. If I had moved last year, I would be in London now.", "Discussing past decisions and current state."),
     "How do you say that because you didn't buy a ticket last week, you aren't going to the concert tonight?", 
     "If I had bought a ticket, I would be going to the concert tonight.", 
     "Mixed conditional linking past action to present event.",
     "If I had bought the house, I would have been living there now.", 
     "If I had bought the house, I would be living there now.", 
     "Use simple 'would + verb' (not would have been) for present consequences of past actions."),

    ("Regret and Past Possibilities", "Use 'should have', 'would have', and 'could have' followed by the past participle to talk about mistakes, regrets, or alternative possibilities in the past.",
     [
         ("I ___ more water; now I'm dehydrated.", ["should have drunk", "should drink", "must have drunk", "could drink"], "should have drunk", "Expresses regret about a past mistake."),
         ("Rajiv ___ the project, but he ran out of time.", ["could have finished", "can finish", "could finish", "should finish"], "could have finished", "Past ability/possibility that was not realized."),
         ("We ___ you, but we didn't have your number.", ["would have called", "should call", "would call", "could call"], "would have called", "Past willingness that was blocked by lack of details."),
         ("You ___ told me you were struggling.", ["should have", "must have", "would have", "could have"], "should have", "Gently criticizing a past action/failure to communicate.")
     ],
     ("I missed the train.", "You should have left home earlier.", "Analyzing a travel mistake."),
     "How do you tell a friend that they had the capability to win the competition?", 
     "You could have won the competition.", 
     "Could have + past participle for past unrealized potential.",
     "I should had told you.", 
     "I should have told you.", 
     "The auxiliary verb after modals is always 'have', never 'had' or 'has'."),

    ("Must vs. Have to for Obligation", "Use 'must' for personal, internal obligations (felt by the speaker). Use 'have to' for external obligations (laws, rules, regulations, or circumstances).",
     [
         ("In India, you ___ drive on the left side of the road.", ["must", "have to", "should", "ought to"], "have to", "External traffic law requires 'have to'."),
         ("I ___ call my mother; it's her birthday today.", ["must", "have to", "should", "ought to"], "must", "Internal, personal obligation felt by the speaker."),
         ("We ___ submit the timesheets by Friday evening.", ["must", "have to", "would", "may"], "have to", "External corporate rule requires 'have to'."),
         ("You ___ see this movie! It's fantastic.", ["must", "have to", "need", "could"], "must", "Strong personal recommendation uses 'must'.")
     ],
     ("Do you have to wear a uniform?", "Yes, it is a strict company policy.", "Discussing workplace rules."),
     "How do you tell yourself you really need to start exercising?", 
     "I must start exercising.", 
     "Internal resolve/desire uses 'must'.",
     "I am having to do this work.", 
     "I have to do this work.", 
     "Avoid using 'have to' in the continuous form; use simple present 'have to'."),

    ("Modals of Permission and Requests", "Use 'can' for informal requests and permission. Use 'could' for more polite or formal requests. Use 'may' for extremely formal or polite permission.",
     [
         ("___ I borrow your pen for a second?", ["Can", "Could", "May", "All options are correct"], "All options are correct", "All three express permission, ranging from informal (can) to formal (may)."),
         ("___ you help me carry this box, please?", ["Can", "Could", "May", "Should"], "Could", "Polite request for assistance uses 'could' (or 'would')."),
         ("Excuse me, ___ I ask a question?", ["may", "could", "can", "should"], "may", "Formal setting of asking a question in a seminar/meeting."),
         ("___ you pass the salt, please?", ["Could", "Can", "Would", "All options are correct"], "All options are correct", "All are common ways of making a polite request at the table.")
     ],
     ("Could you open the window?", "Sure, no problem.", "Requesting help in a hot room."),
     "How do you ask a senior colleague for permission to leave early?", 
     "May I leave early today, please?", 
     "May represents polite, formal permission request.",
     "Can you please explain me this?", 
     "Could you please explain this to me?", 
     "Explain takes a direct object (this) and 'to' before the person (to me)."),

    ("Modals of Possibility: Might, May, Could", "Use 'might', 'may', and 'could' to express possibility in the present or future. 'Might' indicates a slightly lower probability than 'may'. 'Could' suggests one of several options.",
     [
         ("It ___ rain later, so take an umbrella.", ["might", "could", "must", "should"], "might", "Refers to a future possibility of rain."),
         ("Rajiv ___ be in the conference room; let's check.", ["could", "must", "should", "will"], "could", "Expresses one possible location among others."),
         ("We ___ face some delays due to traffic.", ["may", "must", "should", "would"], "may", "A realistic present/future possibility."),
         ("If we don't hurry, we ___ miss the flight.", ["might", "could", "may", "All options are correct"], "All options are correct", "All three modals correctly express future possibilities of negative outcomes.")
     ],
     ("Where is Rajiv?", "He might be working from home today.", "Searching for a coworker."),
     "How do you tell a client that project costs could change?", 
     "The project costs could vary depending on the scope.", 
     "Could represents a possibility of variation.",
     "He may can come tomorrow.", 
     "He may come tomorrow. / He might be able to come tomorrow.", 
     "Never combine two modal verbs directly; use 'might be able to'."),

    ("Modals of Deduction: Must have / Can't have", "Use 'must have' + past participle when you are almost certain a past action occurred. Use 'can't have' + past participle when you are almost certain it did not.",
     [
         ("Rajiv's lights are off. He ___ gone to sleep.", ["must have", "can't have", "should have", "might have"], "must have", "Logical deduction of high certainty: lights off implies he went to sleep."),
         ("You ___ finished the exam already! It was three hours long.", ["can't have", "must have", "should have", "could have"], "can't have", "Logical deduction of impossibility: completing a long exam so fast is unlikely."),
         ("She ___ left her phone at home. She isn't answering.", ["must have", "can't have", "should have", "would have"], "must have", "Highly probable past event based on current evidence (no answer)."),
         ("He ___ seen the sign. It was huge and bright.", ["must have", "can't have", "might have", "should have"], "must have", "Highly certain past observation.")
     ],
     ("Rajiv looks very happy today.", "He must have passed his interview.", "Deducing why a friend is happy."),
     "How do you express that it's impossible for your friend to have reached Mumbai already?", 
     "He can't have reached Mumbai yet.", 
     "Can't have + past participle for past impossibility.",
     "He must has finished the task.", 
     "He must have finished the task.", 
     "Always use 'have' (never 'has') after modal verbs in past deductions."),

    ("Lack of Obligation: Needn't vs. Don't have to", "Use 'needn't' or 'don't have to' to show that there is no obligation to do something. Do not use 'mustn't', which indicates a strict prohibition.",
     [
         ("We ___ work tomorrow; it's a public holiday.", ["don't have to", "mustn't", "needn't to", "shouldn't"], "don't have to", "Lack of obligation: we are free not to work."),
         ("You ___ come if you are feeling unwell.", ["needn't", "mustn't", "shouldn't", "haven't to"], "needn't", "No obligation to attend."),
         ("You ___ touch that wire! It's live and dangerous.", ["mustn't", "don't have to", "needn't", "shouldn't"], "mustn't", "Strict prohibition: touching it is forbidden/unsafe."),
         ("He ___ buy a ticket; entrance is free.", ["doesn't have to", "mustn't", "needn't to", "isn't having to"], "doesn't have to", "No payment or ticket required.")
     ],
     ("Should I bring some snacks?", "No, you don't have to bring anything.", "Guest asking a host before a party."),
     "How do you tell a junior developer that a document doesn't need to be long?", 
     "The document needn't be very detailed.", 
     "Needn't expressing lack of obligation.",
     "You must not pay for this, it is free.", 
     "You don't have to pay for this. / You needn't pay for this.", 
     "'Must not' means it is forbidden to pay. Use 'don't have to' to show payment is not necessary."),

    ("Present Regrets: Wish / If only", "Use 'wish' or 'if only' + Past Simple to express a desire for a present situation to be different.",
     [
         ("I wish I ___ more free time to exercise.", ["had", "have", "would have", "had had"], "had", "Present regret: I don't have time now, but I wish I did (past simple 'had')."),
         ("If only Rajiv ___ here. He would know what to do.", ["were", "is", "would be", "had been"], "were", "Desire for a different present situation; 'were' is preferred for all subjects."),
         ("I wish I ___ speak Spanish fluently.", ["could", "can", "would", "had"], "could", "Present regret about ability."),
         ("If only it ___ raining! I want to go out.", ["stopped", "would stop", "had stopped", "stops"], "would stop", "Expressing annoyance or desiring a change in a current situation/behavior.")
     ],
     ("Do you like your house?", "It's nice, but I wish it were larger.", "Discussing living space."),
     "How do you say you regret not knowing how to play the guitar?", 
     "I wish I knew how to play the guitar.", 
     "Wish + simple past for present regrets.",
     "I wish I will buy a car soon.", 
     "I wish I could buy a car soon. / I hope I will buy a car soon.", 
     "Use 'wish' for imaginary/unlikely present regrets, and 'hope' for realistic future desires."),

    ("Past Regrets: Wish / If only", "Use 'wish' or 'if only' + Past Perfect to express regret about a past situation that cannot be changed now.",
     [
         ("I wish I ___ computer science in college.", ["had studied", "studied", "would study", "have studied"], "had studied", "Past regret: I didn't study it, but now I wish I had (past perfect)."),
         ("If only we ___ that train! We wouldn't be late.", ["hadn't missed", "didn't miss", "wouldn't miss", "missed"], "hadn't missed", "Past regret about missing a train."),
         ("I wish Rajiv ___ to the party yesterday.", ["had come", "came", "would come", "has come"], "had come", "Regret about Rajiv's past absence."),
         ("If only I ___ that comment to her.", ["hadn't said", "didn't say", "wouldn't say", "haven't said"], "hadn't said", "Past regret about speaking.")
     ],
     ("I'm sorry I shouted at you yesterday.", "I wish you hadn't done that, but it's okay.", "Resolving a past argument."),
     "How do you express regret that you didn't save money last year?", 
     "I wish I had saved more money last year.", 
     "Wish + past perfect for past regrets.",
     "I wish I didn't say that yesterday.", 
     "I wish I hadn't said that yesterday.", 
     "Use Past Perfect ('hadn't said') for regrets about completed past events."),

    ("Had better / Ought to for Advice", "Use 'had better' + base verb to give strong, urgent advice (implying a negative consequence if ignored). Use 'ought to' as a synonym for 'should' for general advice.",
     [
         ("We ___ leave now, or we will miss the flight.", ["had better", "ought to", "would better", "should have"], "had better", "Urgent advice: missing the flight is the negative consequence."),
         ("You ___ apologize to her for your behavior.", ["ought to", "had better", "would ought", "should have"], "ought to", "General moral advice or recommendation (ought to)."),
         ("Rajiv ___ not be late for this client meeting.", ["had better", "ought to", "should have", "must to"], "had better", "Negative advice: 'had better not' + verb."),
         ("You ___ eat more vegetables for your health.", ["ought to", "had better to", "would better", "ought"], "ought to", "General health advice; 'ought' is followed by 'to'.")
     ],
     ("Should I wear a suit?", "You had better wear one; the client is very formal.", "Preparing for a business presentation."),
     "How do you warn a colleague that they should backup their files immediately?", 
     "You had better backup your files now.", 
     "Had better indicates urgent warning.",
     "You had better to complete this work.", 
     "You had better complete this work.", 
     "'Had better' is followed by a bare infinitive (complete), never 'to complete'."),

    ("Will/Would for Typical Behavior", "Use 'will' to describe typical, predictable habits in the present. Use 'would' to describe typical, predictable habits in the past.",
     [
         ("She is so helpful. She ___ always help you if you ask.", ["will", "would", "shall", "should"], "will", "Predictable present habit/characteristic."),
         ("When we were kids, we ___ build sandcastles on the beach.", ["would", "will", "shall", "should"], "would", "Repeated past characteristic behavior (similar to used to)."),
         ("Rajiv is very forgetful. He ___ leave his bag in the office.", ["will", "would", "should", "ought"], "will", "Typical present characteristic behavior."),
         ("Every afternoon, my cat ___ sit by the window for hours.", ["would", "will", "both 'will' and 'would'", "shall"], "both 'will' and 'would'", "Can be present ('will') or past ('would') depending on overall context.")
     ],
     ("Does Rajiv always arrive late?", "Yes, he will typically walk in ten minutes after we start.", "Discussing a colleague's habits."),
     "How do you describe how your grandmother used to tell stories every night?", 
     "My grandmother would tell us stories every night.", 
     "Would for typical past habits.",
     "When I was young I will play cricket.", 
     "When I was young I would play cricket. / When I was young I used to play cricket.", 
     "Use 'would' or 'used to' for past typical habits, not 'will'."),

    ("Supposed to for Expectations", "Use 'be supposed to' + verb to describe things that are expected, scheduled, or required by rules/custom, but might not actually happen.",
     [
         ("The train ___ arrive at 8 AM, but it's late.", ["is supposed to", "supposed to", "was supposed to", "is supposing to"], "is supposed to", "Expectation or schedule in the present."),
         ("We ___ use this door; it is an emergency exit.", ["aren't supposed to", "don't suppose to", "mustn't suppose to", "aren't supposing to"], "aren't supposed to", "Rule/expectation of prohibition."),
         ("I ___ meet Rajiv at five, but he cancelled.", ["was supposed to", "is supposed to", "am supposed to", "supposed to"], "was supposed to", "Past expectation that did not occur."),
         ("What ___ we ___ do during an earthquake?", ["are / supposed to", "do / suppose to", "are / supposing to", "will / suppose to"], "are / supposed to", "Expectation/instruction of behavior.")
     ],
     ("Why is Rajiv here today?", "He was supposed to be on holiday, but his plans changed.", "Surprise encounter at the office."),
     "How do you tell a classmate that they are expected to submit their homework by Monday?", 
     "You are supposed to submit the homework by Monday.", 
     "Supposed to for standard expectations.",
     "I am suppose to work tomorrow.", 
     "I am supposed to work tomorrow.", 
     "Always use the past participle spelling 'supposed to', not 'suppose to'.")
]

# Process modals topics (Days 30-44)
for idx, (concept, explanation, drills, dialogue_info, think_prompt, think_correct, think_exp, desi_inc, desi_cor, desi_why) in enumerate(modals_topics):
    day_num = 30 + idx
    drills_list = []
    for s, opts, ans, exp in drills:
        drills_list.append({
            "sentence": s,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp
        })
    entries.append({
        "dayIndex": day_num,
        "theme": "Modals & Conditionals",
        "concept": concept,
        "conceptExplanation": explanation,
        "drills": drills_list,
        "dialogue": {
            "speakerA": dialogue_info[0],
            "speakerA_trans": "",
            "speakerB": dialogue_info[1],
            "speakerB_trans": "",
            "context": dialogue_info[2]
        },
        "thinkInEnglish": {
            "prompt": think_prompt,
            "incorrectDesiLiteral": "",
            "correctNatural": think_correct,
            "explanation": think_exp
        },
        "desiCorrection": {
            "incorrect": desi_inc,
            "correct": desi_cor,
            "why": desi_why
        }
    })

# --- 4. SENTENCE STRUCTURE & CONNECTORS (Days 45-59) ---
connectors_topics = [
    ("Relative Clauses: Who, Which, That", "Use 'who' for people, 'which' for things and animals, and 'that' for both people and things in defining relative clauses.",
     [
         ("The developer ___ wrote this code has left the company.", ["who", "which", "whose", "whom"], "who", "'Who' is the subject pronoun for a person."),
         ("The bug ___ caused the crash has been fixed.", ["who", "which", "whose", "whom"], "which", "'Which' is used for non-human things (bug)."),
         ("This is the laptop ___ Rajiv bought yesterday.", ["who", "that", "whose", "whom"], "that", "'That' can be used for things in defining clauses."),
         ("I met a colleague ___ father works at ISRO.", ["who", "whose", "whom", "which"], "whose", "'Whose' indicates possession (colleague's father).")
     ],
     ("Do you know the woman who spoke to us?", "Yes, she is the designer who built the UI.", "Identifying team members."),
     "How do you describe a book that taught you a lot?", 
     "It is a book which taught me a lot.", 
     "Which for objects.",
     "The person which met you is my brother.", 
     "The person who met you is my brother.", 
     "Use 'who' (not 'which') for people."),

    ("Passive Voice for Focus", "Use the passive voice (be + past participle) when the focus is on the action or the object of the action, or when the agent performing the action is unknown or unimportant.",
     [
         ("The new software update ___ last night.", ["was released", "released", "is releasing", "has released"], "was released", "Focus is on the software, and release is complete (passive)."),
         ("All active issues ___ by our team daily.", ["are resolved", "resolve", "are resolving", "resolved"], "are resolved", "Continuous/habitual team task focus in the present (passive)."),
         ("The project ___ by Rajiv before the deadline.", ["was completed", "completed", "had completed", "was completing"], "was completed", "Passive focus on the project's completion."),
         ("Thousands of emails ___ every second.", ["are sent", "send", "is sent", "sent"], "are sent", "Passive focus on emails as a group.")
     ],
     ("Has the invoice been sent?", "Yes, it was sent this morning.", "Checking billing status."),
     "How do you report that someone fixed the office printer without naming them?", 
     "The printer has been fixed.", 
     "Passive voice focuses on the object ('the printer').",
     "The code was wrote by Rajiv.", 
     "The code was written by Rajiv.", 
     "Passive voice requires the past participle form of the verb ('written', not 'wrote')."),

    ("Reported Speech Tense Shifts", "When reporting what someone said in the past, tenses typically shift backward (Present Simple to Past Simple, Present Continuous to Past Continuous, Present Perfect to Past Perfect).",
     [
         ("Direct: 'I am tired.' -> Reported: He said that he ___ tired.", ["is", "was", "has been", "had been"], "was", "Present 'am' shifts to past 'was' in reported speech."),
         ("Direct: 'I have completed the work.' -> Reported: She told me she ___ the work.", ["completed", "has completed", "had completed", "was completing"], "had completed", "Present perfect 'have completed' shifts to past perfect 'had completed'."),
         ("Direct: 'I will go tomorrow.' -> Reported: Rajiv said he ___ go the next day.", ["will", "would", "went", "goes"], "would", "'Will' shifts to 'would' in reported speech."),
         ("Direct: 'I lost my keys.' -> Reported: He admitted he ___ his keys.", ["lost", "had lost", "was losing", "has lost"], "had lost", "Simple past 'lost' shifts to past perfect 'had lost'.")
     ],
     ("What did Rajiv say about the deadline?", "He said that he would submit the work by Friday.", "Reporting office conversations."),
     "How do you tell a teammate that the manager said she was happy with the progress?", 
     "She said she was happy with the progress.", 
     "Present shifts to past in reporting.",
     "He said me that he is busy.", 
     "He told me that he was busy. / He said that he was busy.", 
     "'Say' cannot take a direct personal object without 'to' (said to me). 'Tell' takes a personal object directly (told me). Also, shift the tense ('was busy')."),

    ("Concession: Although, Despite, In spite of", "Use 'although' or 'even though' followed by a subject + verb clause. Use 'despite' or 'in spite of' followed by a noun, pronoun, or -ing verb.",
     [
         ("___ it was raining heavily, Rajiv went for a run.", ["Although", "Despite", "In spite of", "Even"], "Although", "Followed by a clause ('it was raining')."),
         ("___ the heavy rain, Rajiv went for a run.", ["Although", "Despite", "Even though", "Though"], "Despite", "Followed by a noun phrase ('the heavy rain')."),
         ("They completed the deployment ___ facing multiple bugs.", ["although", "despite", "even though", "though"], "despite", "Followed by an -ing verb ('facing')."),
         ("She bought the laptop ___ the high price.", ["although", "even though", "in spite of", "despite of"], "in spite of", "Followed by a noun phrase. Note: 'despite' does not take 'of'.")
     ],
     ("Did you finish the work on time?", "Yes, although we had very little time.", "Reviewing project timeline."),
     "How do you state that a team succeeded despite having a low budget?", 
     "The team succeeded despite having a low budget. / The team succeeded although the budget was low.", 
     "Budget low as noun clause vs phrase.",
     "Despite of the low budget, they won.", 
     "Despite the low budget, they won. / In spite of the low budget, they won.", 
     "'Despite' never takes the preposition 'of'. Only 'in spite of' does."),

    ("Connectors of Purpose: In order to, So that", "Use 'in order to' or 'to' followed by a base verb. Use 'so that' followed by a subject + modal verb clause (can, could, would).",
     [
         ("I joined Pravah ___ improve my grammar.", ["to", "in order to", "so that", "both 'to' and 'in order to'"], "both 'to' and 'in order to'", "Both are followed by the base verb (improve)."),
         ("He worked late ___ the team could meet the deadline.", ["in order to", "to", "so that", "for"], "so that", "Followed by a clause ('the team could meet')."),
         ("She saved money ___ buy a new laptop.", ["in order to", "so that", "for to", "so to"], "in order to", "Followed by base verb (buy)."),
         ("We took a taxi ___ we wouldn't be late.", ["so that", "to", "in order to", "for"], "so that", "Followed by negative modal clause.")
     ],
     ("Why did you call Rajiv?", "I called him in order to clarify the client requirements.", "Discussing call purpose."),
     "How do you explain that you backup files to prevent data loss?", 
     "I backup my files so that I don't lose my data.", 
     "So that with negative modal clause.",
     "I came here for meeting you.", 
     "I came here to meet you. / I came here in order to meet you.", 
     "Use 'to + infinitive' (or 'in order to') to express purpose, not 'for + -ing' verb."),

    ("Non-Defining Relative Clauses", "Use non-defining relative clauses to add extra, non-essential information about a noun. Always separate these clauses with commas, and never use 'that' (use 'who' or 'which').",
     [
         ("My brother, ___ lives in London, is visiting next week.", ["who", "which", "that", "whose"], "who", "Non-defining clause about a person; 'that' is incorrect, requires 'who'."),
         ("The office printer, ___ was bought last year, is already broken.", ["which", "that", "who", "whose"], "which", "Non-defining clause about an object; requires 'which'."),
         ("Rajiv, ___ laptop is broken, is working on my computer.", ["who", "whose", "which", "whom"], "whose", "Indicates possession of the laptop by Rajiv."),
         ("We visited Varanasi, ___ is one of the oldest cities.", ["which", "who", "that", "where"], "which", "Non-defining clause about a location as a subject.")
     ],
     ("Where is your brother?", "My brother, who works in Bangalore, is visiting today.", "Introducing family."),
     "How do you mention that your car (which is red) broke down?", 
     "My car, which is red, broke down yesterday.", 
     "Separated by commas, using which.",
     "My car that is red broke down.", 
     "My car, which is red, broke down.", 
     "Use 'which' and commas for non-essential extra information."),

    ("Passive Voice in Professional Writing", "In professional contexts, the passive voice is useful for delivering negative news or focusing on processes objectively rather than accusing individuals.",
     [
         ("A billing error ___ on your account.", ["was made", "has been made", "was making", "both 'was made' and 'has been made'"], "both 'was made' and 'has been made'", "Objective passive focus, avoiding blaming a specific employee."),
         ("Your application ___ currently ___.", ["is / being processed", "is / processing", "has / processed", "was / processed"], "is / being processed", "Process focus in the present continuous passive."),
         ("The project schedule ___ due to resource shortages.", ["was revised", "revised", "had revised", "was revising"], "was revised", "Passive focus on the schedule change rather than the person who changed it."),
         ("Our server logs ___ for security audits.", ["are monitored", "monitor", "are monitoring", "monitored"], "are monitored", "Objective system process description.")
     ],
     ("Why was the meeting cancelled?", "The schedule was revised due to key absences.", "Corporate communications."),
     "How do you politely tell a customer that their credit card was declined without blaming them?", 
     "Your credit card payment was declined.", 
     "Passive voice focuses on the action, not the customer's failure.",
     "You made a mistake in the calculation.", 
     "A mistake was made in the calculation. / There appears to be an error in the calculation.", 
     "Passive voice or indirect phrasing is much more polite and professional in workplace communication."),

    ("Reported Questions", "Reported questions do not use question word order (verb-subject) and do not use 'do/does/did'. They use statement word order (subject-verb) and 'if/whether' for yes/no questions.",
     [
         ("Direct: 'Where do you live?' -> Reported: She asked me where I ___.", ["lived", "do live", "did I live", "was living"], "lived", "Statement word order (subject + verb) and tense shift."),
         ("Direct: 'Are you coming?' -> Reported: Rajiv asked ___ I was coming.", ["if", "that", "what", "whether or not"], "if", "Yes/no question reporting uses 'if' or 'whether'."),
         ("Direct: 'What time does the train leave?' -> Reported: He wanted to know what time the train ___.", ["left", "did leave", "leaves", "was leaving"], "left", "Statement word order, no 'does', past tense."),
         ("Direct: 'Have you seen Rajiv?' -> Reported: She asked if I ___ Rajiv.", ["had seen", "saw", "have seen", "was seeing"], "had seen", "Tense shift to Past Perfect in reported question.")
     ],
     ("What did the interviewer ask you?", "She asked why I wanted to join the company.", "Recounting a job interview."),
     "How do you tell a friend that a stranger asked for their name?", 
     "The stranger asked what my name was.", 
     "Reported question structure (subject + was).",
     "She asked me where did I live.", 
     "She asked me where I lived.", 
     "Do not use 'did' or question word order in reported questions; use statement word order."),

    ("Because vs. Because of / Due to", "Use 'because' followed by a subject + verb clause. Use 'because of' or 'due to' followed by a noun or noun phrase.",
     [
         ("The flight was delayed ___ it was foggy.", ["because", "because of", "due to", "owing"], "because", "Followed by a clause ('it was foggy')."),
         ("The flight was delayed ___ the fog.", ["because", "because of", "due to", "both 'because of' and 'due to'"], "both 'because of' and 'due to'", "Followed by a noun phrase ('the fog')."),
         ("We cancelled the picnic ___ the heavy rain.", ["because of", "because", "due to of", "since"], "because of", "Followed by a noun phrase."),
         ("I couldn't sleep ___ the noise outside.", ["because of", "because", "since", "as"], "because of", "Followed by a noun phrase.")
     ],
     ("Why were you absent yesterday?", "I was absent because of a sudden illness.", "Explaining absence to a manager."),
     "How do you explain that a project was delayed due to lack of staff?", 
     "The project was delayed due to staff shortages. / The project was delayed because we were short of staff.", 
     "Clause vs noun phrase distinction.",
     "I am late due to I missed the bus.", 
     "I am late because I missed the bus. / I am late due to missing the bus.", 
     "'Due to' must be followed by a noun or noun phrase, not a clause. Use 'because' for clauses."),

    ("So vs. Such", "Use 'so' before adjectives or adverbs (so hot, so quickly). Use 'such' or 'such a/an' before a noun or adjective + noun phrase (such a hot day, such beautiful music).",
     [
         ("The weather today is ___ hot.", ["so", "such", "such a", "very much"], "so", "Adjective ('hot') requires 'so'."),
         ("It is ___ a hot day today.", ["so", "such", "such a", "too"], "such a", "Noun phrase starting with singular countable noun takes 'such a'."),
         ("She plays the sitar ___ beautifully.", ["so", "such", "such a", "so much"], "so", "Adverb ('beautifully') takes 'so'."),
         ("They are ___ friendly people.", ["so", "such", "such a", "too"], "such", "Plural noun phrase ('friendly people') takes 'such'.")
     ],
     ("Did you enjoy the movie?", "Yes, it was such a moving story.", "Discussing cinema."),
     "How do you express that a task is extremely difficult?", 
     "This task is so difficult! / This is such a difficult task.", 
     "So + adj vs such a + adj + noun.",
     "He is a so nice person.", 
     "He is such a nice person. / He is so nice.", 
     "'So' cannot go directly before an 'adjective + noun' phrase; use 'such a' instead."),

    ("Subject-Verb Agreement with Indefinite Pronouns", "Indefinite pronouns like 'everyone', 'everybody', 'someone', 'nobody', 'each', 'neither', and 'either' are grammatically singular and take singular verbs.",
     [
         ("Everyone in the office ___ happy with the new policy.", ["is", "are", "were", "have been"], "is", "'Everyone' is singular, requiring 'is'."),
         ("Neither of the proposals ___ suitable for the project.", ["is", "are", "were", "have been"], "is", "'Neither of' takes a singular verb in standard formal English."),
         ("Each of the candidates ___ an interview tomorrow.", ["has", "have", "are having", "is having"], "has", "'Each' is singular, requiring 'has'."),
         ("Somebody ___ left their bag in the lobby.", ["has", "have", "is", "are"], "has", "'Somebody' is singular.")
     ],
     ("Has everyone arrived?", "Yes, everybody is sitting in the conference room.", "Preparing to start a meeting."),
     "How do you tell a group that each person will receive a certificate?", 
     "Each participant is going to receive a certificate.", 
     "Each takes singular verb 'is'.",
     "Neither of the two books are interesting.", 
     "Neither of the two books is interesting.", 
     "Use singular verb 'is' with 'neither of' in standard English."),

    ("Participle Clauses", "Use participle clauses (-ing or -ed clauses) to express time, reason, or result in a concise way, ensuring the subject of the clause matches the main clause.",
     [
         ("___ down the street, I found a lost wallet.", ["Walking", "Walked", "Having walked", "While walked"], "Walking", "Present participle clause shows simultaneous action (I was walking, I found)."),
         ("___ by the client's reaction, Rajiv revised the proposal.", ["Surprised", "Surprising", "Having surprised", "Surprise"], "Surprised", "Past participle clause indicates reason/cause (Because he was surprised...)."),
         ("___ his dinner, he went straight to bed.", ["Having finished", "Finishing", "Finished", "Have finished"], "Having finished", "Perfect participle clause shows completed action before another."),
         ("___ in Mumbai, she knows the city very well.", ["Having lived", "Living", "Lived", "Both 'Living' and 'Having lived'"], "Both 'Living' and 'Having lived'", "Lived/living both show duration/reason.")
     ],
     ("Did you see the accident?", "Yes, walking to work this morning, I saw it happen.", "Talking about a commute event."),
     "How do you explain that because you felt tired, you went to sleep early?", 
     "Feeling tired, I went to sleep early.", 
     "Participle clause showing reason.",
     "Walking in the park, a dog bit him.", 
     "While he was walking in the park, a dog bit him. / Walking in the park, he was bitten by a dog.", 
     "Avoid 'dangling participles'; the subject of the participle clause must match the subject of the main clause."),

    ("Inversion for Emphasis", "In formal English, when we begin a sentence with a negative or restrictive adverb (e.g., 'never', 'seldom', 'hardly', 'not only'), the subject and auxiliary verb invert.",
     [
         ("Seldom ___ seen such a brilliant performance.", ["have I", "I have", "did I", "had I"], "have I", "Negative adverb 'seldom' triggers subject-auxiliary inversion."),
         ("Not only ___ late, but he also forgot the slides.", ["was Rajiv", "Rajiv was", "did Rajiv", "had Rajiv"], "was Rajiv", "Restrictive connector 'not only' at the start triggers inversion."),
         ("Hardly ___ entered the room when the phone rang.", ["had I", "I had", "did I", "was I"], "had I", "Hardly... when structure triggers past perfect inversion."),
         ("Never ___ experienced such warmth from strangers.", ["have I", "I have", "did I", "had I"], "have I", "Negative adverb 'never' triggers present perfect inversion.")
     ],
     ("Was the presentation successful?", "Not only was the client impressed, but they also signed the contract.", "Reviewing client feedback."),
     "How do you dramatically state that you have never seen such a beautiful sight?", 
     "Never have I seen such a beautiful sight.", 
     "Inversion for poetic emphasis.",
     "Rarely I go to the cinema.", 
     "Rarely do I go to the cinema.", 
     "Restrictive adverb 'rarely' at the start of a sentence requires inversion using the auxiliary 'do'."),

    ("Cleft Sentences", "Use cleft sentences (starting with 'What...' or 'It is...') to connect new information to old, or to place strong emphasis on a specific part of a sentence.",
     [
         ("___ I need is a cup of strong tea.", ["What", "It is", "That", "Which"], "What", "Cleft structure: 'What + subject + verb + is + noun' emphasizes the need."),
         ("It was Rajiv ___ solved the server issue.", ["who", "which", "that", "whose"], "who", "It-cleft emphasizes the person who did the action."),
         ("___ she wants is to learn fluent English.", ["What", "It is", "That", "Which"], "What", "Emphasizing a desire using a what-cleft."),
         ("It was yesterday ___ they signed the deal.", ["that", "when", "which", "who"], "that", "It-cleft emphasizing a specific time.")
     ],
     ("Did you lose your keys?", "No, it was my wallet that I lost.", "Correcting a misunderstanding."),
     "How do you emphasize that the most important thing is team communication?", 
     "What we need most is better team communication.", 
     "What-cleft sentence for emphasis.",
     "What I want is a laptop.", 
     "What I want is a laptop. (Correct) / The thing what I want is a laptop. (Incorrect)", 
     "'What I want' is a complete cleft clause; do not add 'what' after 'the thing'."),

    ("Double Comparatives", "Use double comparatives (The + comparative adjective/adverb, the + comparative adjective/adverb) to show that two changes happen together and depend on each other.",
     [
         ("The ___ you study, the ___ you learn.", ["more / more", "most / most", "better / more", "more / better"], "more / more", "Shows direct proportional relationship of learning to study."),
         ("The ___ the coffee, the ___ I like it.", ["stronger / more", "strong / most", "strongest / more", "stronger / most"], "stronger / more", "Double comparative form using comparative adjectives."),
         ("The ___ we leave, the ___ we will arrive.", ["earlier / sooner", "early / soon", "earliest / soonest", "earlier / soonest"], "earlier / sooner", "Double comparative using adverbs of time."),
         ("The ___ the task, the ___ we should be.", ["harder / more careful", "hard / careful", "hardest / most careful", "harder / careful"], "harder / more careful", "Double comparative with long adjective comparison.")
     ],
     ("Are you nervous about the presentation?", "Yes, the closer it gets, the more nervous I feel.", "Discussing upcoming challenges."),
     "How do you say that as a person grows older, they gain wisdom?", 
     "The older you get, the wiser you become.", 
     "Double comparative structure.",
     "The more you work, the most money you make.", 
     "The more you work, the more money you make.", 
     "Both parts of a double comparative must use comparative forms ('more', not 'most').")
]

# Process connectors topics (Days 45-59)
for idx, (concept, explanation, drills, dialogue_info, think_prompt, think_correct, think_exp, desi_inc, desi_cor, desi_why) in enumerate(connectors_topics):
    day_num = 45 + idx
    drills_list = []
    for s, opts, ans, exp in drills:
        drills_list.append({
            "sentence": s,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp
        })
    entries.append({
        "dayIndex": day_num,
        "theme": "Sentence Structure & Connectors",
        "concept": concept,
        "conceptExplanation": explanation,
        "drills": drills_list,
        "dialogue": {
            "speakerA": dialogue_info[0],
            "speakerA_trans": "",
            "speakerB": dialogue_info[1],
            "speakerB_trans": "",
            "context": dialogue_info[2]
        },
        "thinkInEnglish": {
            "prompt": think_prompt,
            "incorrectDesiLiteral": "",
            "correctNatural": think_correct,
            "explanation": think_exp
        },
        "desiCorrection": {
            "incorrect": desi_inc,
            "correct": desi_cor,
            "why": desi_why
        }
    })

# --- 5. COMMON INDIANISMS & REDUNDANCIES (Days 60-74) ---
desi_topics = [
    ("Revert Back", "The word 'revert' means to return to a previous state, or in business contexts, to reply. Adding 'back' is a redundancy because the concept of 'back' is already inside the word 'revert'.",
     [
         ("Please ___ to me by Friday evening.", ["revert", "revert back", "reply back", "revert up"], "revert", "'Revert' is sufficient and correct on its own."),
         ("If we do not maintain the code, it will ___ to its buggy state.", ["revert", "revert back", "reply", "revert up"], "revert", "Here, revert means return to past state."),
         ("I will ___ with the details soon.", ["get back", "revert back", "reply back", "revert back to you"], "get back", "'Get back' is highly natural and correct."),
         ("They promised to ___ to our query today.", ["revert", "revert back", "reply back", "respond back"], "revert", "Revert means respond/reply.")
     ],
     ("Did the client respond?", "No, they haven't reverted yet.", "Waiting for email replies."),
     "How do you ask a client to reply to your email as soon as possible?", 
     "Please reply to this email at your earliest convenience. / Please revert to us at your earliest convenience.", 
     "Revert or reply without 'back'.",
     "I will revert back to you shortly.", 
     "I will get back to you shortly. / I will reply to you shortly.", 
     "Never use 'revert back' or 'reply back'; 'revert' and 'reply' already contain the direction 'back'."),

    ("Discuss About", "The verb 'discuss' is a transitive verb that directly takes the topic as its object (e.g., 'discuss the plan'). Do not add the preposition 'about' after it.",
     [
         ("We need to ___ the project budget tomorrow.", ["discuss", "discuss about", "talk", "mention about"], "discuss", "'Discuss' directly takes the object 'project budget'."),
         ("Let's ___ how we can improve sales.", ["discuss", "discuss about", "talk about", "both 'discuss' and 'talk about'"], "both 'discuss' and 'talk about'", "'Discuss' takes no preposition; 'talk' requires 'about'."),
         ("They spent an hour ___ the typo.", ["discussing", "discussing about", "talking", "explaining about"], "discussing", "Discussing takes a direct object."),
         ("Did you ___ the new contract with Rajiv?", ["discuss", "discuss about", "talk", "mention about"], "discuss", "Discuss takes a direct object.")
     ],
     ("What did you do in the meeting?", "We discussed the client feedback.", "Reporting meeting activities."),
     "How do you tell a teammate you want to talk about a design proposal?", 
     "I want to discuss the design proposal.", 
     "Discuss takes a direct object.",
     "Let's discuss about this issue.", 
     "Let's discuss this issue. / Let's talk about this issue.", 
     "Do not use 'about' after 'discuss'."),

    ("Order For Food", "The verb 'order' is transitive and directly takes the item ordered as its object (e.g., 'order food'). Do not use the preposition 'for' after 'order' when it is used as a verb.",
     [
         ("I want to ___ a cup of tea.", ["order", "order for", "request for", "ask for"], "order", "'Order' as a verb takes a direct object, no 'for' is needed."),
         ("Our manager ___ lunch for the entire team.", ["ordered", "ordered for", "requested for", "placed an order for"], "ordered", "Verb 'ordered' takes a direct object."),
         ("We placed an ___ two pizzas.", ["order for", "order", "ordered for", "ordered"], "order for", "When 'order' is a noun, 'order for' is grammatically correct."),
         ("She ___ a taxi ten minutes ago.", ["ordered", "ordered for", "called for", "requested for"], "ordered", "Verb takes direct object.")
     ],
     ("Are you hungry?", "Yes, let's order some food.", "Arranging a meal break."),
     "How do you say you want to purchase a laptop online?", 
     "I am going to order a new laptop.", 
     "Order + direct object.",
     "He ordered for a cup of coffee.", 
     "He ordered a cup of coffee. / He placed an order for a cup of coffee.", 
     "Do not use the preposition 'for' after the verb 'order'."),

    ("Pass Out", "In standard English, 'to pass out' means to lose consciousness or faint. To express finishing high school or university, use the verb 'to graduate' or 'finish'.",
     [
         ("Rajiv ___ from IIT Delhi in 2018.", ["graduated", "passed out", "finished from", "completed from"], "graduated", "'Graduated' is the standard international term."),
         ("It was so hot in the room that I almost ___.", ["passed out", "graduated", "passed away", "passed through"], "passed out", "'Passed out' here correctly means fainted."),
         ("She wants to look for a job after she ___.", ["graduates", "passes out", "graduates from", "both 'graduates' and 'graduates from'"], "both 'graduates' and 'graduates from'", "Graduates/graduates from is correct."),
         ("My sister ___ of college last month.", ["graduated", "passed out", "finished", "left"], "graduated", "Graduated is the correct term.")
     ],
     ("Which year did you finish college?", "I graduated in 2020.", "Discussing educational background."),
     "How do you tell a recruiter you finished your studies at Mumbai University?", 
     "I graduated from Mumbai University.", 
     "Use 'graduated from' for college completion.",
     "I passed out from college in 2015.", 
     "I graduated from college in 2015. / I finished college in 2015.", 
     "'Pass out' means faint. Use 'graduate' or 'finish' for completing academic studies."),

    ("Cope Up", "The correct English phrasal verb is 'to cope with' (meaning to handle or manage a difficult situation successfully). There is no such phrasal verb as 'cope up'.",
     [
         ("It is difficult to ___ this workload.", ["cope with", "cope up with", "cope up", "manage with"], "cope with", "'Cope with' is the correct and standard phrasal verb."),
         ("Rajiv is struggling to ___ the pressure.", ["cope with", "cope up", "cope up with", "handle with"], "cope with", "Struggling to cope with pressure."),
         ("We must learn to ___ changes in technology.", ["cope with", "cope up", "cope up with", "adapt with"], "cope with", "Cope with changes."),
         ("How do you ___ stress during exams?", ["cope with", "cope up", "cope up with", "deal"], "cope with", "Cope with stress.")
     ],
     ("Are you doing okay with the new project?", "Yes, I am coping with the challenges.", "Supportive check-in by a manager."),
     "How do you tell a friend you are managing to handle the heat?", 
     "I am coping with the hot weather.", 
     "Cope with is correct.",
     "She cannot cope up with the stress.", 
     "She cannot cope with the stress.", 
     "Never use 'cope up' or 'cope up with'; the correct expression is 'cope with'."),

    ("Mention About", "The verb 'mention' is transitive and takes a direct object. Do not use 'about' after the verb 'mention'.",
     [
         ("Rajiv ___ the delay during the call.", ["mentioned", "mentioned about", "told about", "spoke about"], "mentioned", "Mention takes a direct object."),
         ("Did she ___ her holiday plans?", ["mention", "mention about", "talk about", "both 'mention' and 'talk about'"], "both 'mention' and 'talk about'", "'Mention' takes direct object; 'talk' takes 'about'."),
         ("He ___ that he would be late.", ["mentioned", "mentioned about", "said about", "told"], "mentioned", "Mentioned + that clause is correct."),
         ("Don't ___ the cost to him yet.", ["mention", "mention about", "say about", "tell about"], "mention", "Mention + direct object.")
     ],
     ("Did Rajiv talk to you?", "Yes, he mentioned the upcoming meeting.", "Recalling a brief exchange."),
     "How do you tell a colleague that you raised the bug in the standup?", 
     "I mentioned the bug during the standup.", 
     "Mention + object.",
     "She mentioned about her project yesterday.", 
     "She mentioned her project yesterday. / She talked about her project yesterday.", 
     "Do not use 'about' after 'mention'."),

    ("Describe About", "The verb 'describe' is transitive and takes a direct object (e.g., 'describe the painting'). Do not add the preposition 'about' after the verb 'describe'.",
     [
         ("Can you ___ the suspect?", ["describe", "describe about", "explain about", "tell about"], "describe", "Describe takes a direct object (suspect)."),
         ("The manual ___ how to set up the device.", ["describes", "describes about", "explains about", "details about"], "describes", "Describes + clause."),
         ("He ___ his trip in great detail.", ["described", "described about", "talked about", "both 'described' and 'talked about'"], "both 'described' and 'talked about'", "'Described' takes direct object; 'talked' takes 'about'."),
         ("Please ___ the incident to the manager.", ["describe", "describe about", "explain about", "tell about"], "describe", "Describe takes a direct object.")
     ],
     ("What did she say in the email?", "She described the issue in detail.", "Analyzing communication."),
     "How do you ask a candidate to explain their past project experience?", 
     "Please describe your project experience.", 
     "Describe + object.",
     "Let me describe about the software architecture.", 
     "Let me describe the software architecture. / Let me talk about the software architecture.", 
     "Do not use 'about' after the verb 'describe'."),

    ("Having for States", "Do not use 'having' in the continuous form when it means possession (e.g., 'I have two brothers'). Use 'having' only for active experiences (eating, taking).",
     [
         ("I ___ a headache today.", ["have", "am having", "both 'have' and 'am having'", "has"], "both 'have' and 'am having'", "Headache can be static possession or active experience."),
         ("Rajiv ___ two sisters.", ["has", "is having", "have", "possesses"], "has", "Possession of family is a static state."),
         ("They ___ a great time at the party.", ["are having", "have", "has", "had"], "are having", "'Having a time' is an active experience."),
         ("We ___ a holiday tomorrow.", ["have", "are having", "has", "possesses"], "have", "Possession of a holiday takes simple present.")
     ],
     ("Do you have a laptop?", "Yes, I have a MacBook.", "Checking hardware requirements."),
     "How do you state that you own a car?", 
     "I have a car. / I own a car.", 
     "Use have or own for static possession.",
     "I am having a flat in Mumbai.", 
     "I have a flat in Mumbai. / I own a flat in Mumbai.", 
     "Do not use 'having' for static ownership of assets."),

    ("Like This Only", "Using 'only' at the end of a sentence for emphasis (e.g., 'he does it like this only') is a direct translation of the Hindi 'hi' (ऐसा ही). In standard English, use 'this is how...' or 'just like this'.",
     [
         ("This is ___ I code.", ["how I code", "like this only how I code", "how I code only", "how only I code"], "how I code", "'This is how I code' is standard English."),
         ("He always behaves ___.", ["like this", "like this only", "just like this only", "only like this"], "like this", "'Like this' is correct."),
         ("I want the design ___.", ["just like this", "like this only", "exactly like this only", "only like this"], "just like this", "'Just like this' adds natural emphasis."),
         ("She told me to do it ___.", ["this way", "like this only", "this way only", "only this way"], "this way", "'This way' is correct.")
     ],
     ("Why did you format the file this way?", "Because this is the standard style.", "Code review discussion."),
     "How do you tell a teammate that this is how you write functions?", 
     "This is how I write functions. / I write functions like this.", 
     "Standard structures.",
     "He speaks like this only.", 
     "He speaks like this. / This is just how he speaks.", 
     "Avoid using 'only' at the end of a sentence to mean 'exactly' or 'hi'."),

    ("Out of Station", "The phrase 'out of station' is a common Indianism. In standard international English, use 'out of town' or 'away' to describe being out of the city.",
     [
         ("I will be ___ next week on vacation.", ["out of town", "out of station", "out from station", "out of city"], "out of town", "'Out of town' is the standard international phrase."),
         ("Rajiv is ___ today; he returns on Monday.", ["away", "out of station", "out of town", "both 'away' and 'out of town'"], "both 'away' and 'out of town'", "Both express being away from the city."),
         ("Our manager is ___ on a business trip.", ["out of town", "out of station", "out from town", "away of town"], "out of town", "Out of town is correct."),
         ("I can't meet you because I am ___.", ["away", "out of station", "out of town", "both 'away' and 'out of town'"], "both 'away' and 'out of town'", "Standard terms.")
     ],
     ("Is Rajiv in the office today?", "No, he is out of town until Friday.", "Asking for a colleague."),
     "How do you tell a client you will be away from the city next Monday?", 
     "I will be out of town next Monday.", 
     "Out of town is standard.",
     "I am out of station today.", 
     "I am out of town today. / I am away today.", 
     "Use 'out of town' or 'away' instead of 'out of station'."),

    ("Doing the Needful", "The phrase 'do the needful' is an archaic British administrative phrase. Use 'do what is necessary' or 'take care of this' instead.",
     [
         ("Please ___ regarding the bug report.", ["take care of this", "do the needful", "do what is necessary", "both 'take care of this' and 'do what is necessary'"], "both 'take care of this' and 'do what is necessary'", "Both are modern, natural alternatives."),
         ("He promised to ___ to fix the issue.", ["do whatever is necessary", "do the needful", "do the necessary", "do needed"], "do whatever is necessary", "Natural phrasing."),
         ("I will ___ and update you.", ["take care of it", "do the needful", "do the necessary", "do needed"], "take care of it", "Active, responsible phrasing."),
         ("Could you please ___ to process the refund?", ["take the necessary steps", "do the needful", "do the necessary", "do needed"], "take the necessary steps", "Professional alternative.")
     ],
     ("The client requested a refund.", "Could you please take care of it?", "Handling customer requests."),
     "How do you ask a colleague to take care of a server migration?", 
     "Could you please take care of the server migration?", 
     "Take care of is active and professional.",
     "Please do the needful.", 
     "Please do what is necessary. / Please take care of this.", 
     "Replace 'do the needful' with direct, modern action verbs."),

    ("Years Back", "In English, use 'ago' to indicate how far in the past something happened relative to the present. Avoid using 'back' in formal contexts.",
     [
         ("I moved to Bangalore five ___.", ["years ago", "years back", "years before", "years past"], "years ago", "'Ago' is the standard word for past time relative to the present."),
         ("Rajiv left the company two ___.", ["years ago", "years back", "years past", "years before"], "years ago", "Two years ago is correct."),
         ("The project was launched months ___.", ["ago", "back", "before", "past"], "ago", "Months ago is correct."),
         ("We met in Delhi ten ___.", ["years ago", "years back", "years before", "years past"], "years ago", "Ten years ago is correct.")
     ],
     ("When did you start learning guitar?", "I started five years ago.", "Sharing hobbies."),
     "How do you say you visited London three years in the past?", 
     "I visited London three years ago.", 
     "Use ago.",
     "I completed my college three years back.", 
     "I completed my college three years ago.", 
     "Use 'ago' (not 'back') when referencing time elapsed from the present."),

    ("Cousin Brother/Sister", "In English, the word 'cousin' does not take gender modifiers like 'brother' or 'sister'. Simply use 'cousin'. Gender is understood from pronouns or context.",
     [
         ("I am going to the wedding of my ___.", ["cousin", "cousin brother", "cousin sister", "cousin-in-law"], "cousin", "'Cousin' is correct; gender additions are redundant."),
         ("He lives in Delhi with his ___.", ["cousin", "cousin brother", "brother cousin", "cousin sister"], "cousin", "Cousin is sufficient."),
         ("My ___ is a doctor.", ["cousin, who is a woman,", "cousin sister", "sister cousin", "cousin sister of mine"], "cousin, who is a woman,", "Use relative clause if specifying gender is essential."),
         ("I have three ___.", ["cousins", "cousin brothers", "cousin sisters", "cousin brothers and sisters"], "cousins", "Plural is simply cousins.")
     ],
     ("Who is that in the photo?", "That is my cousin, Rajiv.", "Looking at photos."),
     "How do you tell a coworker you are traveling with your uncle's son?", 
     "I am traveling with my cousin.", 
     "Cousin is enough.",
     "She is my cousin sister.", 
     "She is my cousin.", 
     "Do not attach 'brother' or 'sister' to the word 'cousin'."),

    ("Return Back", "The word 'return' means to go or come back. Adding 'back' is a redundancy. Use 'return' or 'go/come back' instead.",
     [
         ("When will you ___ from Goa?", ["return", "return back", "go back", "both 'return' and 'go back'"], "both 'return' and 'go back'", "'Return' or 'go/come back' are correct; 'return back' is redundant."),
         ("Please ___ these books to the library.", ["return", "return back", "give back", "both 'return' and 'give back'"], "both 'return' and 'give back'", "Both are correct."),
         ("He ___ to his home village after retirement.", ["returned", "returned back", "went back", "both 'returned' and 'went back'"], "both 'returned' and 'went back'", "Standard past usage."),
         ("I will ___ the money tomorrow.", ["return", "return back", "pay back", "both 'return' and 'pay back'"], "both 'return' and 'pay back'", "Standard payment structures.")
     ],
     ("Did you give the keys back?", "Yes, I returned them to Rajiv.", "Checking keys."),
     "How do you say you came back to the office after lunch?", 
     "I returned to the office after lunch.", 
     "Return without back.",
     "I will return back your laptop tomorrow.", 
     "I will return your laptop tomorrow. / I will give your laptop back tomorrow.", 
     "Never use 'return back'; use 'return' or 'give/get back'.")
]

# Process desi topics (Days 60-73)
for idx, (concept, explanation, drills, dialogue_info, think_prompt, think_correct, think_exp, desi_inc, desi_cor, desi_why) in enumerate(desi_topics):
    day_num = 60 + idx
    drills_list = []
    for s, opts, ans, exp in drills:
        drills_list.append({
            "sentence": s,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp
        })
    entries.append({
        "dayIndex": day_num,
        "theme": "Common Indianisms & Redundancies",
        "concept": concept,
        "conceptExplanation": explanation,
        "drills": drills_list,
        "dialogue": {
            "speakerA": dialogue_info[0],
            "speakerA_trans": "",
            "speakerB": dialogue_info[1],
            "speakerB_trans": "",
            "context": dialogue_info[2]
        },
        "thinkInEnglish": {
            "prompt": think_prompt,
            "incorrectDesiLiteral": "",
            "correctNatural": think_correct,
            "explanation": think_exp
        },
        "desiCorrection": {
            "incorrect": desi_inc,
            "correct": desi_cor,
            "why": desi_why
        }
    })

# Day 74
day_74 = {
    "theme": "Common Indianisms & Redundancies",
    "concept": "Request you to",
    "conceptExplanation": "In formal English, request is followed by a direct object + to-infinitive, but it sounds much more natural to use 'ask' or 'would appreciate it if you could'.",
    "drills": [
        {"sentence": "I ___ send me the updated proposal.", "options": ["request that you", "request you to", "would request you to", "ask you to"], "correctAnswer": "request that you", "explanation": "'Request that you' is much more professional than 'request you to'."},
        {"sentence": "We ___ verify your credentials.", "options": ["request you to", "ask you to", "would appreciate if you could", "both 'ask you to' and 'would appreciate if you could'"], "correctAnswer": "both 'ask you to' and 'would appreciate if you could'", "explanation": "Both are polite and modern alternatives."},
        {"sentence": "Clients are ___ remain seated.", "options": ["requested to", "requested for", "requesting to", "requested that they"], "correctAnswer": "requested to", "explanation": "Passive construction 'are requested to' is correct."},
        {"sentence": "I write to ___ your support in this matter.", "options": ["request", "request you to", "request for", "demand for"], "correctAnswer": "request", "explanation": "Request takes a direct object."}
    ],
    "dialogue": {
        "speakerA": "Could you please send me the files?", "speakerA_trans": "क्या आप कृपया मुझे फाइलें भेज सकते हैं?",
        "speakerB": "Sure, I request you to wait for five minutes.", "speakerB_trans": "ज़रूर, मेरा आपसे अनुरोध है कि पांच मिनट इंतज़ार करें।",
        "context": "Customer support interaction."
    },
    "thinkInEnglish": {
        "prompt": "How do you ask a client to sign a document politely in an email?",
        "incorrectDesiLiteral": "I request you to sign the document.",
        "correctNatural": "Could you please sign the document? / We would appreciate it if you could sign the document.",
        "explanation": "Could you please or We would appreciate it are standard polite formulas."
    },
    "desiCorrection": {
        "incorrect": "We request you to kindly attend the meeting.",
        "correct": "We request that you attend the meeting. / We invite you to attend the meeting.",
        "why": "Using 'request you to kindly' is overly formal and redundant. Use 'request that you' or 'invite you to'."
    }
}
day_74["dayIndex"] = 74
entries.append(day_74)

# --- 6. SOFTENING & PROFESSIONAL ENGLISH (Days 75-89) ---
softening_topics = [
    # Day 75
    ("Indirect Questions", "Use indirect questions to sound more polite and professional, especially when asking strangers or superiors for information. E.g., 'Could you tell me where...?' instead of 'Where is...?'",
     [
         ("Which is more polite?", ["Where is the conference room?", "Could you tell me where the conference room is?", "Where is conference room, please?", "Tell me where is the conference room."], "Could you tell me where the conference room is?", "Indirect questions use statement word order and polite opening formulas."),
         ("Complete: 'I was wondering if you ___ help me.'", ["can", "could", "would", "will"], "could", "'I was wondering if you could...' is a standard polite opening."),
         ("Indirect: 'Do you know what time ___?'", ["the train leaves", "does the train leave", "leaves the train", "did the train leave"], "the train leaves", "Indirect questions require statement word order rather than question order."),
         ("Which is the most professional way to ask for someone's name?", ["What is your name?", "May I ask who I am speaking with?", "Who are you?", "Your name, please?"], "May I ask who I am speaking with?", "Polite and formal indirect name request.")
     ],
     ("Excuse me, what time is the meeting?", "Could you tell me what time the meeting starts, please?", "Polite query in the hallway."),
     "How do you ask a customer service representative where the manager is?", 
     "Could you let me know if the manager is available?", 
     "Indirect question for assistance.",
     "Tell me when you are free.", 
     "I was wondering if you could let me know when you are free. / Could you tell me when you are available?", 
     "'Tell me...' is a direct command and can sound rude; use indirect phrasing to soften it."),

    # Day 76
    ("Hedging in Professional Communication", "Hedging is the use of cautious, non-assertive language (e.g., 'it seems', 'appears', 'possibly') to avoid sounding overly dogmatic or aggressive.",
     [
         ("Which statement uses hedging to sound polite?", ["This design is bad.", "It seems that this design needs some adjustments.", "You made a bad design.", "This design has many errors."], "It seems that this design needs some adjustments.", "Hedging softens the criticism using 'It seems that'."),
         ("Complete: 'There ___ to be a misunderstanding.'", ["appears", "is", "must", "definitely is"], "appears", "'Appears to be' is a common hedge to describe a conflict gently."),
         ("Which is more professional?", ["The server crashed because of your code.", "The recent server issue might be related to the new code deployment.", "Your code crashed the server.", "The new code is buggy and crashed the server."], "The recent server issue might be related to the new code deployment.", "Uses 'might' and passive framing to hedge and avoid direct blame."),
         ("The results ___ that our strategy is working.", ["suggest", "prove", "definitely show", "confirm"], "suggest", "'Suggest' is a safe hedge compared to the absolute 'prove'.")
     ],
     ("Your report has errors.", "It appears that there are a few discrepancies in the report.", "Providing constructive feedback to a direct report."),
     "How do you diplomatically suggest that a colleague's schedule is too ambitious?", 
     "It seems that the proposed timeline might be slightly tight.", 
     "Uses 'It seems', 'might', and 'slightly' to hedge.",
     "Your code is wrong.", 
     "There appears to be a small issue with the code. / It seems we might need to adjust this logic.", 
     "Avoid blunt, accusatory declarations of error; hedge to maintain collaborative relationships."),

    # Day 77
    ("Polite Negation", "Use softening phrases when saying 'no' or declining requests to remain professional and preserve relationships. E.g., 'I'm afraid I can't' instead of 'I won't/can't'.",
     [
         ("Which is the most professional way to decline a meeting invite?", ["I can't come, I'm busy.", "I'm afraid I won't be able to make it due to a prior commitment.", "I am not coming to the meeting.", "No, I am busy."], "I'm afraid I won't be able to make it due to a prior commitment.", "Uses softening ('I'm afraid') and a neutral explanation."),
         ("Complete: 'Unfortunately, we ___ accept your offer at this time.'", ["cannot", "are unable to", "won't", "refuse to"], "are unable to", "'Are unable to' is softer and more professional than 'cannot'."),
         ("Which is the best way to say no to a discount request?", ["We don't give discounts.", "Unfortunately, our prices are fixed.", "I'm afraid we are unable to offer discounts on this package.", "No discount is possible."], "I'm afraid we are unable to offer discounts on this package.", "Polite decline of business request."),
         ("We apologize, but the item is ___.", ["out of stock", "no longer available", "sold out", "all options are correct"], "all options are correct", "Standard professional phrasing.")
     ],
     ("Can you finish this by tonight?", "I'm afraid that won't be possible. I can deliver it by tomorrow noon.", "Managing workload expectations with a manager."),
     "How do you tell a supplier you cannot accept their delivery today?", 
     "Unfortunately, we are unable to accept the delivery today.", 
     "Softened negation.",
     "I can't help you with this.", 
     "I'm afraid I won't be able to assist you with this at the moment.", 
     "Soften 'can't' with 'I'm afraid I won't be able to'."),

    # Day 78
    ("Diplomatic Passive Voice", "Use the passive voice to describe errors or system issues without pointing fingers or blaming individuals. E.g., 'A mistake was made' instead of 'You made a mistake'.",
     [
         ("Which is the most diplomatic statement?", ["You forgot to backup the files.", "The files were not backed up.", "You made an error by not backing up.", "You should have backed up the files."], "The files were not backed up.", "Passive voice focuses on the state, avoiding direct blame."),
         ("Complete: 'A mistake ___ in the invoice.'", ["was made", "has been made", "was making", "both 'was made' and 'has been made'"], "both 'was made' and 'has been made'", "Focuses on the mistake, not the person who made it."),
         ("Which is more professional?", ["You did not send the email.", "It appears the email was not sent.", "You forgot to send the email.", "The email is not sent by you."], "It appears the email was not sent.", "Combines hedging and passive voice."),
         ("The system ___ for maintenance during the holiday.", ["will be shut down", "will shut down", "is shutting down", "shuts down"], "will be shut down", "Standard objective passive.")
     ],
     ("You broke the build.", "It seems the build was broken after the recent merge.", "Discussing a build failure in a team chat."),
     "How do you report that a bug was introduced into the codebase without blaming the author?", 
     "A bug was introduced in the latest release.", 
     "Passive voice avoids blaming the developer.",
     "You delivered the project late.", 
     "The project was delivered after the deadline.", 
     "Passive voice shifts focus from the person's failure to the event itself."),

    # Day 79
    ("Polite Requests with 'Would you mind'", "Use 'Would you mind' followed by an -ing verb to make polite requests, or 'Would you mind if I...' followed by a past tense verb for permission.",
     [
         ("Which is correct?", ["Would you mind to help me?", "Would you mind helping me?", "Would you mind for helping me?", "Would you mind help me?"], "Would you mind helping me?", "'Would you mind' is followed by a gerund (-ing verb)."),
         ("Complete: 'Would you mind if I ___ my seat?'", ["changed", "change", "would change", "changing"], "changed", "'Would you mind if I...' requires the past tense subjunctive."),
         ("Which is the most polite request to close a door?", ["Close the door.", "Would you mind closing the door?", "Can you close the door?", "Please close the door."], "Would you mind closing the door?", "'Would you mind' is a very soft request form."),
         ("Would you mind ___ this document?", ["reviewing", "to review", "review", "for reviewing"], "reviewing", "Requires the gerund form.")
     ],
     ("Could you review this code?", "Would you mind reviewing this code when you have a moment?", "Asking a busy colleague for help."),
     "How do you ask a coworker if it's okay for you to turn down the AC?", 
     "Would you mind if I turned down the air conditioning?", 
     "Mind if I + past subjunctive.",
     "Would you mind to send me the report?", 
     "Would you mind sending me the report? / Could you please send me the report?", 
     "Never use a 'to + infinitive' after 'would you mind'; always use a gerund."),

    # Day 80
    ("I was wondering if you could", "This phrase is a powerful, polite way to initiate requests in emails or speech, as it presents the request as a gentle thought rather than a demand.",
     [
         ("Which is the most polite opening for a request?", ["Send me the slides.", "I was wondering if you could send me the slides.", "Can you send the slides?", "Please send me the slides."], "I was wondering if you could send me the slides.", "Presents the request gently."),
         ("Complete: 'I was wondering if you ___ free for a call tomorrow.'", ["are", "were", "would be", "will be"], "were", "The past tense 'were' is used to soften the request further."),
         ("Which is more professional?", ["I want a meeting with you.", "I was wondering if you could spare ten minutes for a brief meeting.", "Meeting me tomorrow at 3.", "Can we meet tomorrow?"], "I was wondering if you could spare ten minutes for a brief meeting.", "Polite request for time."),
         ("I was wondering if you ___ review this draft.", ["could", "can", "would", "will"], "could", "'Could' represents polite capability.")
     ],
     ("I need your help.", "I was wondering if you could help me with this task.", "Asking a team member for assistance."),
     "How do you ask a manager if you can schedule a 1-on-1 meeting next week?", 
     "I was wondering if you could spare some time for a 1-on-1 next week.", 
     "Polite opening formula.",
     "I am wondering if you can help.", 
     "I was wondering if you could help. / I wanted to ask if you could help.", 
     "The past continuous 'was wondering' and past modal 'could' sound much softer than 'am wondering'."),

    # Day 81
    ("Apologizing Professionally", "When apologizing in business, avoid emotional language. Accept responsibility clearly, explain the resolution, and focus on the future.",
     [
         ("Which is the most professional apology for a delay?", ["Sorry for the late reply, I was busy.", "We apologize for the delay in response and appreciate your patience.", "I am sorry I didn't reply sooner.", "Sorry about that."], "We apologize for the delay in response and appreciate your patience.", "Takes responsibility and thanks client."),
         ("Complete: 'Please accept our apologies for the ___ caused.'", ["trouble", "inconvenience", "mistake", "annoyance"], "inconvenience", "'Inconvenience' is the standard professional term."),
         ("Which is the best way to apologize for a server outage?", ["Sorry the server went down.", "Please accept our sincere apologies for the service interruption. We have resolved the root issue.", "The server crashed, sorry.", "We are sorry for the crash."], "Please accept our sincere apologies for the service interruption. We have resolved the root issue.", "Takes responsibility and states resolution."),
         ("We are sorry for any ___ this may have created.", ["problems", "inconvenience", "frustrations", "delays"], "inconvenience", "Standard closing noun.")
     ],
     ("Why did you miss the deadline?", "Please accept our apologies for the delay. We are putting in extra hours to deliver the project.", "Communicating a project delay."),
     "How do you apologize to a client for sending the wrong file?", 
     "Please accept our apologies for the oversight. The correct file is attached below.", 
     "Oversight is a polite word for error.",
     "Sorry for making a mistake in the code.", 
     "Please accept my apologies for the error. I have submitted a fix to correct it.", 
     "Avoid casual 'sorry' in official emails; use 'please accept my apologies'."),

    # Day 82
    ("Polite Disagreement", "To disagree politely, first validate the other person's point of view, then present your perspective using softening connectors like 'however' or 'on the other hand'.",
     [
         ("Which is the most polite way to disagree?", ["Your idea won't work.", "I see your point; however, we might run into budget constraints.", "That is wrong.", "I disagree with you completely."], "I see your point; however, we might run into budget constraints.", "Validates first, then cautions gently."),
         ("Complete: 'I understand where you're coming from, ___ we have to consider the risk.'", ["but", "however", "although", "and"], "however", "'However' is softer and more professional than 'but'."),
         ("Which is the best way to suggest an alternative design?", ["This design is bad. Let's do this instead.", "I appreciate this approach. Alternatively, we could explore this other option.", "Your design has flaws, look at my idea.", "No, this is not correct."], "I appreciate this approach. Alternatively, we could explore this other option.", "Appreciates work first."),
         ("I see what you mean, but I ___ a different view.", ["have", "take", "hold", "all options are correct"], "all options are correct", "Standard idioms for gentle disagreement.")
     ],
     ("That feature is useless.", "I understand the value of this feature; however, it might not be a priority.", "Discussing product roadmap features."),
     "How do you tell a manager you disagree with a delivery timeline?", 
     "I see your point about speed; however, a rushed timeline might compromise quality.", 
     "Appreciates speed, cautions on quality.",
     "You are wrong about this data.", 
     "I understand your interpretation; however, the data suggests a different conclusion.", 
     "Disagree with the interpretation, not the person, and use 'however'.")
]

# Process softening topics (Days 75-82)
for idx, (concept, explanation, drills, dialogue_info, think_prompt, think_correct, think_exp, desi_inc, desi_cor, desi_why) in enumerate(softening_topics):
    day_num = 75 + idx
    drills_list = []
    for s, opts, ans, exp in drills:
        drills_list.append({
            "sentence": s,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp
        })
    entries.append({
        "dayIndex": day_num,
        "theme": "Softening & Professional English",
        "concept": concept,
        "conceptExplanation": explanation,
        "drills": drills_list,
        "dialogue": {
            "speakerA": dialogue_info[0],
            "speakerA_trans": "",
            "speakerB": dialogue_info[1],
            "speakerB_trans": "",
            "context": dialogue_info[2]
        },
        "thinkInEnglish": {
            "prompt": think_prompt,
            "incorrectDesiLiteral": "",
            "correctNatural": think_correct,
            "explanation": think_exp
        },
        "desiCorrection": {
            "incorrect": desi_inc,
            "correct": desi_cor,
            "why": desi_why
        }
    })

# Softening Days 83-89:
softening_extra = [
    # Day 83
    {
        "concept": "Making Suggestions Politely",
        "conceptExplanation": "Use 'How about we...?', 'We could...', or 'Have you considered...?' to make suggestions, which sounds much less demanding than 'You must' or 'We should'.",
        "drills": [
            {"sentence": "___ reschedule the meeting to next week?", "options": ["How about we", "We should", "You must", "We have to"], "correctAnswer": "How about we", "explanation": "Polite, open-ended suggestion style."},
            {"sentence": "We ___ try updating the drivers to see if that works.", "options": ["could", "must", "have to", "are forced to"], "correctAnswer": "could", "explanation": "Suggests a possibility rather than a command."},
            {"sentence": "___ exploring a different color scheme?", "options": ["Have you considered", "You should try", "Why don't you", "We must do"], "correctAnswer": "Have you considered", "explanation": "'Have you considered' + gerund is very polite and professional."},
            {"sentence": "___ to try running the diagnostics test?", "options": ["Would it help", "How about", "We should", "You ought"], "correctAnswer": "Would it help", "explanation": "Focuses on usefulness of the suggestion."}
        ],
        "dialogue": {
            "speakerA": "The current design is too busy.", "speakerA_trans": "वर्तमान डिज़ाइन बहुत व्यस्त/अस्त-व्यस्त है।",
            "speakerB": "We could try reducing the spacing between cards.", "speakerB_trans": "हम कार्डों के बीच की दूरी कम करके देख सकते हैं।",
            "context": "UX discussion in a team meeting."
        },
        "thinkInEnglish": {
            "prompt": "How do you suggest changing a project deadline to a senior colleague?",
            "incorrectDesiLiteral": "We should change the project deadline.",
            "correctNatural": "Perhaps we could consider adjusting the project timeline?",
            "explanation": "Using 'perhaps', 'could', and framing it as a consideration softens the suggestion for senior members."
        },
        "desiCorrection": {
            "incorrect": "You must implement this feature.",
            "correct": "Have you considered implementing this feature? / We could look into implementing this feature.",
            "why": "Using 'must' with colleagues sounds like an command; use suggestions instead."
        }
    },
    # Day 84
    {
        "concept": "Asking for Clarification",
        "conceptExplanation": "When you don't understand something, ask for clarification using polite indirect questions rather than blunt demands like 'Explain this' or 'What do you mean?'.",
        "drills": [
            {"sentence": "Could you ___ what you mean by 'optimization'?", "options": ["elaborate on", "explain about", "tell about", "clear up"], "correctAnswer": "elaborate on", "explanation": "'Elaborate on' is a very professional way to ask for details."},
            {"sentence": "I want to make sure I understand. ___ you are suggesting a delay?", "options": ["So you mean", "Are you saying that", "What do you mean by", "Does it mean"], "correctAnswer": "Are you saying that", "explanation": "Paraphrasing to check understanding politely."},
            {"sentence": "Could you please ___ that last point?", "options": ["clarify", "describe about", "explain about", "clear up"], "correctAnswer": "clarify", "explanation": "'Clarify' is direct but polite when preceded by 'Could you please'."},
            {"sentence": "I'm not sure I follow. Would you mind ___ that step again?", "options": ["explaining", "to explain", "explain", "explanation"], "correctAnswer": "explaining", "explanation": "Requires gerund after 'Would you mind'."}
        ],
        "dialogue": {
            "speakerA": "The system requirements have changed.", "speakerA_trans": "सिस्टम की आवश्यकताएं बदल गई हैं।",
            "speakerB": "Could you elaborate on what specific changes were made?", "speakerB_trans": "क्या आप विस्तार से बता सकते हैं कि कौन से विशिष्ट बदलाव किए गए हैं?",
            "context": "Seeking details on a project update."
        },
        "thinkInEnglish": {
            "prompt": "How do you ask a client to explain a vague feedback comment?",
            "incorrectDesiLiteral": "What do you mean by 'make it pop'?",
            "correctNatural": "Could you clarify what you mean by 'make it pop'? / Could you please elaborate on that point?",
            "explanation": "'Could you clarify...' or 'Could you elaborate...' are the standard polite ways to ask for details."
        },
        "desiCorrection": {
            "incorrect": "Explain this code again.",
            "correct": "Would you mind going over this code one more time? / Could you explain this part to me again?",
            "why": "Direct commands like 'Explain...' sound rude. Use indirect requests to be polite."
        }
    },
    # Day 85
    {
        "concept": "Checking Understanding",
        "conceptExplanation": "Instead of asking 'Did you understand?' (which can sound patronizing or doubtful of the listener's intelligence), ask 'Does that make sense?' or 'Do you have any questions so far?'.",
        "drills": [
            {"sentence": "We need to finish the setup first. ___?", "options": ["Did you understand", "Does that make sense", "Is it clear to you", "Are you following me"], "correctAnswer": "Does that make sense", "explanation": "Polite and checks if the explanation was clear, rather than questioning the listener's intelligence."},
            {"sentence": "That is the current status. ___?", "options": ["Do you have any questions so far", "Did you get it", "Understood", "Is it clear"], "correctAnswer": "Do you have any questions so far", "explanation": "Open invitation for questions is very collaborative."},
            {"sentence": "I hope that ___ the process.", "options": ["clarifies", "explains about", "clears out", "clears up to"], "correctAnswer": "clarifies", "explanation": "Hoping it clarifies is a polite closing after explaining."},
            {"sentence": "Please let me know if you need any ___.", "options": ["further clarification", "more explanation about", "more clarify", "further explains"], "correctAnswer": "further clarification", "explanation": "Standard professional email check."}
        ],
        "dialogue": {
            "speakerA": "We will deploy the fix at midnight.", "speakerA_trans": "हम आधी रात को फिक्स तैनात करेंगे।",
            "speakerB": "That makes sense. I will be online to monitor.", "speakerB_trans": "यह सही लग रहा है। मैं निगरानी के लिए ऑनलाइन रहूँगा।",
            "context": "Confirming a deployment schedule."
        },
        "thinkInEnglish": {
            "prompt": "How do you check if your client understood your explanation of a delay?",
            "incorrectDesiLiteral": "Did you understand why we are late?",
            "correctNatural": "Does that explanation make sense? / Please let me know if you have any questions about this delay.",
            "explanation": "Focus on the clarity of your explanation rather than the client's ability to understand."
        },
        "desiCorrection": {
            "incorrect": "Are you clear?",
            "correct": "Does that make sense? / Is everything clear so far?",
            "why": "'Are you clear?' sounds like an interrogation. Use 'Is everything clear?' or 'Does that make sense?'."
        }
    },
    # Day 86
    {
        "concept": "Highlighting Importance",
        "conceptExplanation": "To stress that something is critical, use adjectives like 'crucial', 'essential', or 'vital' with 'It is...' rather than screaming 'Very important!' or 'Do it now!'.",
        "drills": [
            {"sentence": "It is ___ that we secure the API keys.", "options": ["crucial", "essential", "vital", "all options are correct"], "correctAnswer": "all options are correct", "explanation": "All three words represent highly formal and strong urgency in professional English."},
            {"sentence": "It is ___ to test the code before merging.", "options": ["essential", "importantly", "need", "vital to"], "correctAnswer": "essential", "explanation": "'It is essential to + verb' is correct grammatical structure."},
            {"sentence": "Please note that database backups are of ___ importance.", "options": ["vital", "crucial", "essential", "high"], "correctAnswer": "vital", "explanation": "'Of vital importance' is a standard business collocation."},
            {"sentence": "It is ___ that everyone attends the client demo.", "options": ["imperative", "needful", "obligated", "vital to"], "correctAnswer": "imperative", "explanation": "'Imperative' means absolutely required/critical."}
        ],
        "dialogue": {
            "speakerA": "Should I push this to production now?", "speakerA_trans": "क्या मैं इसे अभी प्रोडक्शन में पुश करूँ?",
            "speakerB": "No, it is crucial that we run the tests first.", "speakerB_trans": "नहीं, यह महत्वपूर्ण है कि हम पहले टेस्ट चलाएं।",
            "context": "Advising caution on deployment."
        },
        "thinkInEnglish": {
            "prompt": "How do you tell a teammate that signing off on a document is extremely urgent?",
            "incorrectDesiLiteral": "Signing this document is very, very important.",
            "correctNatural": "It is critical that you sign this document today.",
            "explanation": "'It is critical that you...' is powerful and professional."
        },
        "desiCorrection": {
            "incorrect": "This task is very much important.",
            "correct": "This task is of vital importance. / This task is highly critical.",
            "why": "Avoid 'very much important'; use 'vitally important' or 'critical' instead."
        }
    },
    # Day 87
    {
        "concept": "Following Up in Emails",
        "conceptExplanation": "When following up on a pending request, use polite openings like 'Just checking in on...' or 'I wanted to follow up on...' rather than direct demands like 'Give update' or 'Why no reply?'.",
        "drills": [
            {"sentence": "I wanted to ___ the status of the design proposal.", "options": ["follow up on", "follow up about", "ask update of", "ask update for"], "correctAnswer": "follow up on", "explanation": "'Follow up on' is the standard professional phrasal verb for status checks."},
            {"sentence": "Just ___ to see if you have reviewed the draft.", "options": ["checking in", "following up", "writing you", "both 'checking in' and 'following up'"], "correctAnswer": "both 'checking in' and 'following up'", "explanation": "Both are polite and friendly follow-up openings."},
            {"sentence": "Could you please give me an update ___ the project?", "options": ["on", "about", "for", "with"], "correctAnswer": "on", "explanation": "Update takes 'on'."},
            {"sentence": "I am writing to ___ my previous email.", "options": ["follow up on", "ask about", "revert to", "request update of"], "correctAnswer": "follow up on", "explanation": "Formal follow up phrasing."}
        ],
        "dialogue": {
            "speakerA": "Did you get a reply from Rajiv?", "speakerA_trans": "क्या आपको राजीव से कोई जवाब मिला?",
            "speakerB": "No, I am writing to follow up on my request now.", "speakerB_trans": "नहीं, मैं अभी अपने अनुरोध पर फॉलो अप करने के लिए लिख रहा हूँ।",
            "context": "Tracking communication status."
        },
        "thinkInEnglish": {
            "prompt": "How do you politely check if a client has signed a contract in an email?",
            "incorrectDesiLiteral": "You signed the contract or not? Send update.",
            "correctNatural": "I wanted to follow up and see if you've had a chance to sign the contract.",
            "explanation": "Use 'I wanted to follow up and see if you've had a chance to...' for a soft, polite status check."
        },
        "desiCorrection": {
            "incorrect": "Give me update about the bug.",
            "correct": "Could you please provide an update on the bug? / Just following up on the bug status.",
            "why": "Direct commands like 'Give me...' sound demanding; use polite queries instead."
        }
    },
    # Day 88
    {
        "concept": "Ending Emails Professionally",
        "conceptExplanation": "End professional emails with forward-looking statements like 'Looking forward to hearing from you' or 'Please let me know if you need anything else' followed by standard closing markers ('Best regards', 'Sincerely').",
        "drills": [
            {"sentence": "___ hearing from you soon.", "options": ["Looking forward to", "I look forward to", "both options are correct", "I am looking forward for"], "correctAnswer": "both options are correct", "explanation": "Both 'Looking forward to' + gerund and 'I look forward to' + gerund are standard and correct."},
            {"sentence": "Please let me know if you ___.", "options": ["need any further assistance", "require anything else", "have any questions", "all options are correct"], "correctAnswer": "all options are correct", "explanation": "All three are standard polite email closing offers."},
            {"sentence": "I look forward to ___ Rajiv tomorrow.", "options": ["meeting", "meet", "meeting with", "meet with"], "correctAnswer": "meeting", "explanation": "'Look forward to' is followed by a gerund (-ing verb)."},
            {"sentence": "Which closing is best for a formal client email?", "options": ["Warm regards,", "Best regards,", "Yours sincerely,", "All options are correct"], "correctAnswer": "All options are correct", "explanation": "All are highly professional and acceptable email closings."}
        ],
        "dialogue": {
            "speakerA": "How should I end this email to the director?", "speakerA_trans": "मुझे निदेशक को लिखे इस ईमेल को कैसे समाप्त करना चाहिए?",
            "speakerB": "Use 'Thank you for your time' followed by 'Best regards'.", "speakerB_trans": "'समय देने के लिए धन्यवाद' और फिर 'सादर' का प्रयोग करें।",
            "context": "Reviewing email draft."
        },
        "thinkInEnglish": {
            "prompt": "How do you end an email showing you are excited to work with a new client?",
            "incorrectDesiLiteral": "I am waiting to work with you.",
            "correctNatural": "I look forward to working with you.",
            "explanation": "'Look forward to working with...' is the professional standard for expressing positive anticipation."
        },
        "desiCorrection": {
            "incorrect": "I look forward to meet you.",
            "correct": "I look forward to meeting you.",
            "why": "'Look forward to' is a phrasal verb preposition combination that requires a gerund (-ing verb) after it, not the infinitive."
        }
    },
    # Day 89
    {
        "concept": "Professional Apologies for Client Inconvenience",
        "conceptExplanation": "When apologizing for system downtimes, errors, or service delays, take organizational responsibility, state the correction, and avoid personal excuses like 'I was sick'.",
        "drills": [
            {"sentence": "We apologize for the service disruption. The issue ___.", "options": ["has been resolved", "is fixed by us", "was solved yesterday", "got fixed"], "correctAnswer": "has been resolved", "explanation": "Passive present perfect 'has been resolved' is professional, objective, and reassuring."},
            {"sentence": "Please accept our apologies for any inconvenience ___.", "options": ["caused", "this may have caused", "both options are correct", "made"], "correctAnswer": "both options are correct", "explanation": "Both are standard polite collocations for business apologies."},
            {"sentence": "We are taking steps to ensure this ___ happen again.", "options": ["does not", "will not", "cannot", "won't"], "correctAnswer": "does not", "explanation": "'Ensure this does not...' is standard formal phrasing."},
            {"sentence": "We appreciate your ___ while we resolved the issue.", "options": ["patience", "understanding", "cooperation", "all options are correct"], "correctAnswer": "all options are correct", "explanation": "Thanking clients for patience or understanding at the end of an apology is highly professional."}
        ],
        "dialogue": {
            "speakerA": "The website was down for three hours.", "speakerA_trans": "वेबसाइट तीन घंटे के लिए डाउन थी।",
            "speakerB": "We must apologize to the clients and assure them it is fixed.", "speakerB_trans": "हमें ग्राहकों से माफ़ी मांगनी चाहिए और उन्हें आश्वस्त करना चाहिए कि यह ठीक हो गया है।",
            "context": "Incident management debrief."
        },
        "thinkInEnglish": {
            "prompt": "How do you write a professional apology email for a late shipment?",
            "incorrectDesiLiteral": "Sorry we are late. Courier guy did mistake.",
            "correctNatural": "We apologize for the delay in shipment. We are working to resolve this and appreciate your patience.",
            "explanation": "Focus on the solution and thank the customer, avoiding finger-pointing."
        },
        "desiCorrection": {
            "incorrect": "Extremely sorry for the mistake. It was my mistake only.",
            "correct": "Please accept my apologies for the oversight. I have updated the details to correct it.",
            "why": "Avoid overly emotional 'extremely sorry'; state it as an 'oversight' and focus on the action taken to fix it."
        }
    }
]

# Process softening_extra (Days 83-89)
for idx, s_data in enumerate(softening_extra):
    day_num = 83 + idx
    s_data["dayIndex"] = day_num
    s_data["theme"] = "Softening & Professional English"
    entries.append(s_data)

# Print final count
print(f"Total entries: {len(entries)}")

# Write to file
data_file_path = "c:/Users/amitm/Desktop/New Agent/Pravah/src/app/(app)/bhasha/data.ts"

with open(data_file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Make sure we don't duplicate
if "export const ENGLISH_MASTERY_ENTRIES" in content:
    print("ENGLISH_MASTERY_ENTRIES already in file!")
else:
    # Append the exported array to the end of data.ts
    mastery_ts = "\n\n// ─────────────── ENGLISH MASTERY ───────────────\n\n"
    mastery_ts += "export const ENGLISH_MASTERY_ENTRIES: EnglishMasteryEntry[] = "
    mastery_ts += json.dumps(entries, ensure_ascii=False, indent=2)
    mastery_ts += ";\n"
    
    with open(data_file_path, "a", encoding="utf-8") as f:
        f.write(mastery_ts)
    print("Successfully appended ENGLISH_MASTERY_ENTRIES to data.ts!")
