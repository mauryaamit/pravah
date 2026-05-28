export interface ParadoxEntry {
  name: string;          // "The Ship of Theseus"
  hindi_name: string;    // "थीसियस का जहाज़" in Devanagari
  period: string;        // "Ancient Greece · ~75 CE"
  origin: string;        // 2-3 sentence origin story
  statement: string;     // Core paradox statement (1-2 sentences)
  explanation: string;   // Full explanation
  modern_examples: string[]; // 3 modern parallels
  related_thinkers: string[]; // e.g. ["Heraclitus", "Derek Parfit"]
  thought_experiment: string; // Closing question for the reader
}

export const PARADOXES: ParadoxEntry[] = [
  {
    name: "The Ship of Theseus",
    hindi_name: "थीसियस का जहाज़",
    period: "Ancient Greece · ~75 CE",
    origin: "According to Greek legend recorded by Plutarch, the ship in which Theseus returned from Crete was preserved by the Athenians, who replaced its decaying planks one by one as they rotted over time.",
    statement: "If every single plank of a ship is replaced one by one, is it still the same ship? Furthermore, if the old planks are gathered and rebuilt into a ship, which one is the real Ship of Theseus?",
    explanation: "This classic puzzle explores the nature of identity and material constitution. If identity is tied to the physical substance, then the ship changed as soon as the first plank was replaced. However, if identity is about structure, form, and continuous function, it remains the same ship throughout the replacements. Thomas Hobbes added the second half of the riddle: if we reconstruct a ship from the discarded planks, we end up with two candidate ships claiming to be Theseus's vessel. One has continuous historical functionality, while the other has the original material elements. This forces us to question whether identity is a property of the world or merely a conceptual label we apply for convenience.",
    modern_examples: [
      "Replacing all components of a vintage car over thirty years.",
      "Human cells regenerating completely over seven to ten years.",
      "A band replacing all of its original members over several decades."
    ],
    related_thinkers: ["Plutarch", "Thomas Hobbes", "Heraclitus", "John Locke"],
    thought_experiment: "If you replace every part of your smartphone over two years, at what point does it become a different phone?"
  },
  {
    name: "The Sorites Paradox (Paradox of the Heap)",
    hindi_name: "ढेर का विरोधाभास",
    period: "Ancient Greece · 4th Century BCE",
    origin: "Attributed to the Greek philosopher Eubulides of Miletus, this paradox challenges our definitions of vague terms and predicates by focusing on the accumulation of small increments.",
    statement: "A single grain of sand does not make a heap. If you add one grain of sand, it still isn't a heap. If adding one grain never turns a non-heap into a heap, how can a heap ever be formed?",
    explanation: "The Sorites paradox exposes the trouble with vague language. Many concepts we use every day - like 'heap', 'baldness', 'tallness', or 'childhood' - do not have sharp, mathematically defined boundaries. If we agree that removing a single grain from a heap leaves it a heap, then by mathematical induction, removing grains one by one will eventually force us to conclude that a single grain, or even zero grains, constitutes a heap. Conversely, if we declare a specific number of grains (say, 10,000) as the exact threshold for a heap, we are forced to make the absurd claim that 9,999 grains is not a heap, but adding just one grain magically creates one. This paradox shows that classical logic struggles with the fuzziness of natural human language.",
    modern_examples: [
      "Determining the exact second a child becomes an adult.",
      "Deciding how much hair loss qualifies a person as bald.",
      "Establishing the boundary line between a stream and a river."
    ],
    related_thinkers: ["Eubulides of Miletus", "Bertrand Russell", "Timothy Williamson"],
    thought_experiment: "At what precise millisecond does a collection of feelings transform into love?"
  },
  {
    name: "The Liar Paradox",
    hindi_name: "झूठे का विरोधाभास",
    period: "Ancient Greece · ~600 BCE",
    origin: "Epimenides the Cretan is said to have uttered: 'All Cretans are liars.' Later, philosophers refined this into its simplest, most logically devastating form.",
    statement: "This statement is false.",
    explanation: "The Liar paradox is the ultimate self-referential loop. If the statement 'This statement is false' is true, then what it asserts must be the case, meaning the statement is false. But if the statement is false, then its claim that it is false must be incorrect, meaning it is actually true. This contradiction undermines the foundational law of classical logic: that every statement must be either true or false, but not both. Philosophers like Alfred Tarski resolved this by proposing that language must be divided into levels, where a 'meta-language' evaluates the truth of a 'source language', prohibiting a sentence from evaluating its own truth value. Kurt Gödel used a variation of this logic to prove his famous Incompleteness Theorems in mathematics.",
    modern_examples: [
      "A computer program trying to evaluate an instruction that says 'Ignore this instruction'.",
      "A witness stating in court: 'Everything I say under oath is a lie'.",
      "A signpost reading: 'Do not read this sign'."
    ],
    related_thinkers: ["Epimenides", "Eubulides", "Alfred Tarski", "Kurt Gödel"],
    thought_experiment: "If a fortune teller says 'You will reject this prediction', what happens if you try to make it come true?"
  },
  {
    name: "Achilles and the Tortoise",
    hindi_name: "अकिलीज़ और कछुआ",
    period: "Ancient Greece · ~450 BCE",
    origin: "Created by Zeno of Elea to support his mentor Parmenides' philosophy that change and motion are illusions, and that reality is singular and unchanging.",
    statement: "In a race where a tortoise has a head start, Achilles can never overtake the tortoise because he must first reach the point where the tortoise started, by which time the tortoise has moved ahead.",
    explanation: "Zeno argued that to cover any distance, Achilles must first cover half of that distance, and then half of the remaining distance, ad infinitum. When racing the tortoise, Achilles must first run to the tortoise's starting point (A). During that time, the tortoise crawls to point B. Achilles must then run to point B, during which the tortoise reaches point C. This sequence continues forever. Although the distances shrink, there are an infinite number of points Achilles must reach, meaning he would require an infinite amount of time, making it logically impossible to overtake the tortoise. Modern calculus resolves this by proving that an infinite series of fractions (1/2 + 1/4 + 1/8...) can sum to a finite number (1), meaning Achilles crosses the infinite points in a finite time.",
    modern_examples: [
      "Trying to reach a destination by always halving the remaining distance.",
      "A download progress bar that slows down exponentially as it approaches 100%.",
      "An athlete attempting to reach peak speed from a standstill."
    ],
    related_thinkers: ["Zeno of Elea", "Aristotle", "Augustin-Louis Cauchy", "Bertrand Russell"],
    thought_experiment: "If space and time can be divided infinitely, how do we ever move from one moment to the next?"
  },
  {
    name: "The Arrow Paradox",
    hindi_name: "तीर का विरोधाभास",
    period: "Ancient Greece · ~450 BCE",
    origin: "Another of Zeno's famous paradoxes of motion, designed to show that change and motion cannot logically exist when examined at a microscopic level.",
    statement: "At any single instant of time, a flying arrow is at rest because it occupies a space equal to its size. If it is motionless at every instant, when does it move?",
    explanation: "Zeno's Arrow paradox divides time into discrete, indivisible moments. At any single, instantaneous 'now', the arrow cannot move to a different place because no time passes. It occupies a space exactly equal to its dimensions, meaning it is at rest. Since time is composed entirely of these instantaneous 'nows', and the arrow is motionless in every one of them, Zeno concludes that the arrow is motionless throughout its entire flight. This paradox challenges our understanding of speed and time. Modern mathematics resolves this using limits: speed is not defined by what happens in a single frozen instant, but by the limit of the ratio of distance to time as the time interval approaches zero.",
    modern_examples: [
      "A film strip showing a series of frozen, static images that create the illusion of motion.",
      "An instantaneous speedometer reading on a car dashboard.",
      "A high-speed photograph freezing a bullet in mid-air."
    ],
    related_thinkers: ["Zeno of Elea", "Aristotle", "Henri Bergson", "Alfred North Whitehead"],
    thought_experiment: "Is the present moment a frozen snapshot of reality, or does it possess an inherent flow?"
  },
  {
    name: "The Grandfather Paradox",
    hindi_name: "दादाजी का विरोधाभास",
    period: "Modern Era · 1943",
    origin: "First described in science fiction literature, notably by French writer René Barjavel in his novel 'Le Voyageur Imprudent' (The Futurespast).",
    statement: "If you travel back in time and kill your grandfather before your father is conceived, you would never be born. But if you were never born, how did you travel back to kill him?",
    explanation: "This paradox highlights the logical contradictions inherent in backward time travel. If an event in the past is altered, it breaks the causal chain that led to the alteration in the first place. Physicists and philosophers have proposed several solutions. The 'Novikov Self-Consistency Principle' suggests that the laws of physics prevent any action that would create a paradox; you would fail to kill your grandfather due to coincidences (like a jammed gun). Another solution is the 'Many-Worlds Interpretation' of quantum mechanics, which suggests that killing your grandfather creates a new, parallel timeline where you are never born, leaving your original timeline intact. These theories show how time travel challenges our understandings of causality and free will.",
    modern_examples: [
      "Sending a message to your past self warning you not to send the message.",
      "A software loop where the output deletes the program that generated it.",
      "Creating a time machine to prevent the invention of the time machine."
    ],
    related_thinkers: ["René Barjavel", "David Lewis", "Igor Novikov", "Hugh Everett"],
    thought_experiment: "If you could change the past, would you still be the same person who decided to change it?"
  },
  {
    name: "Schrödinger's Cat",
    hindi_name: "श्रोडिंगर की बिल्ली",
    period: "Modern Era · 1935",
    origin: "Proposed by Austrian physicist Erwin Schrödinger as a thought experiment to illustrate the absurdity of the Copenhagen interpretation of quantum mechanics when applied to everyday objects.",
    statement: "A cat is placed in a sealed box with a radioactive atom, a Geiger counter, and a vial of poison. If the atom decays, the vial breaks and the cat dies. Until the box is opened, is the cat both alive and dead?",
    explanation: "In quantum mechanics, particles can exist in a 'superposition' of multiple states simultaneously until they are measured. Schrödinger argued that if this interpretation is correct, the quantum state of the atom (decayed/not decayed) would become entangled with the macro-state of the cat. Therefore, until an observer opens the box, the cat must exist in a superposition of being both alive and dead at the same time. Schrödinger intended this as a critique, arguing that common sense dictates a cat cannot be in such a state. Modern physics uses 'decoherence' to explain that interaction with the environment (even air molecules inside the box) collapses the superposition long before a human observer opens the box.",
    modern_examples: [
      "A digital file that is corrupted but readable until you try to open it.",
      "A coin spinning on a table, representing both heads and tails until it falls.",
      "An unread message that contains either good or bad news, shaping your reality only when opened."
    ],
    related_thinkers: ["Erwin Schrödinger", "Niels Bohr", "Albert Einstein", "Werner Heisenberg"],
    thought_experiment: "Does an event only become real when someone witnesses it?"
  },
  {
    name: "The Trolley Problem",
    hindi_name: "ट्रॉली की समस्या",
    period: "Modern Era · 1967",
    origin: "Devised by British philosopher Philippa Foot and later expanded by Judith Jarvis Thomson to analyze ethical decision-making and moral responsibility.",
    statement: "A runaway trolley is heading toward five people tied to the tracks. You can pull a lever to redirect it onto a track where only one person is tied. Do you pull the lever?",
    explanation: "The Trolley Problem exposes the tension between two major ethical theories. Utilitarianism, championed by John Stuart Mill, argues that the most moral action is the one that maximizes happiness and minimizes pain (saving five lives at the cost of one). Deontology, derived from Immanuel Kant, argues that certain actions (like killing an innocent person) are inherently wrong, regardless of the consequences. Redirecting the trolley makes you actively responsible for the death of the one person, whereas doing nothing feels like allowing a natural tragedy to unfold. Variations of this problem (like pushing a fat man off a bridge to stop the trolley) show that human morality is highly sensitive to active participation versus passive allowance.",
    modern_examples: [
      "Programming self-driving cars to decide who to save in an unavoidable accident.",
      "Triage protocols in hospitals during a pandemic with limited ventilators.",
      "Military decisions involving civilian casualties to neutralize a major threat."
    ],
    related_thinkers: ["Philippa Foot", "Judith Jarvis Thomson", "Immanuel Kant", "John Stuart Mill"],
    thought_experiment: "If doing nothing leads to more deaths, is inaction a moral choice?"
  },
  {
    name: "The Prisoner's Dilemma",
    hindi_name: "कैदी की दुविधा",
    period: "Modern Era · 1950",
    origin: "Developed by Merrill Flood and Melvin Dresher at the RAND Corporation, and formalized by Albert Tucker to analyze conflict and cooperation in game theory.",
    statement: "Two accomplices are arrested. If both remain silent, they get one year in prison. If one betrays the other while the partner remains silent, the betrayer goes free while the partner gets three years. If both betray, both get two years. What should they do?",
    explanation: "This dilemma demonstrates why two rational individuals might not cooperate, even if it is in their best interest to do so. From an individual perspective, betraying the partner is always the dominant strategy: if the partner is silent, betraying gets you free instead of one year; if the partner betrays, betraying gets you two years instead of three. However, when both act in their own self-interest, they both betray and receive two years, which is a worse outcome than the one year they would have received by cooperating and remaining silent. This conflict between individual rationality and collective benefit explains many challenges in economics, international relations, and environmental policy.",
    modern_examples: [
      "Two countries engaged in a costly nuclear arms race.",
      "Companies spending heavily on advertising to avoid losing market share to each other.",
      "Individuals continuing to pollute because their personal impact seems negligible."
    ],
    related_thinkers: ["Albert Tucker", "John Nash", "Robert Axelrod"],
    thought_experiment: "How can trust be established when selfishness is the most logical choice for each individual?"
  },
  {
    name: "The Monty Hall Problem",
    hindi_name: "मोंटी हॉल की समस्या",
    period: "Modern Era · 1975",
    origin: "Named after the host of the television game show 'Let's Make a Deal', and famously solved by Marilyn vos Savant in her parade magazine column.",
    statement: "You are shown three doors. Behind one is a car; behind the others are goats. You pick Door 1. The host, who knows what's behind them, opens Door 3 to reveal a goat, and asks: 'Do you want to switch to Door 2?' Does switching improve your chances?",
    explanation: "Most people assume that with two doors left, the probability of finding the car is 50/50, so switching doesn't matter. However, the correct choice is to always switch, which doubles your chances of winning from 1/3 to 2/3. When you first choose, there is a 1/3 chance you picked the car and a 2/3 chance you picked a goat. When the host reveals a goat from the remaining doors, he is filtered by his knowledge: he can never reveal the car. Therefore, the 2/3 probability that you originally picked a goat is entirely transferred to the remaining unopened door. Switching essentially allows you to bet on both of the doors you didn't choose originally, revealing how counterintuitive probability can be to the human mind.",
    modern_examples: [
      "Adjusting medical diagnoses when new test results rule out specific conditions.",
      "Updating investment strategies as market variables change.",
      "A detective refining a list of suspects after an alibi is verified."
    ],
    related_thinkers: ["Steve Selvin", "Marilyn vos Savant", "Monty Hall"],
    thought_experiment: "If your intuition disagrees with mathematical proof, which one do you trust?"
  },
  {
    name: "Simpson's Paradox",
    hindi_name: "सिम्पसन का विरोधाभास",
    period: "Modern Era · 1951",
    origin: "First described by Edward H. Simpson in a technical paper, this statistical phenomenon reveals how data can lie when aggregated.",
    statement: "A medical treatment has a higher success rate than another in separate trials for both men and women, yet the other treatment has a higher success rate when the data is combined. How is this possible?",
    explanation: "Simpson's Paradox occurs when a trend appearing in different groups of data disappears or reverses when the groups are combined. This typically happens when there is a 'confounding variable' that influences the results. For example, if one treatment is mostly tested on women (who might recover more easily regardless of the drug) and the other is mostly tested on men, the unequal sizes of the sample groups distort the combined percentage. The paradox warns us that looking at overall averages without understanding the underlying groups can lead to completely incorrect decisions in medicine, social science, and business.",
    modern_examples: [
      "A university showing bias against women in overall admissions, but favoring them in every individual department.",
      "An athlete having a better batting average than another in two separate seasons, but a lower combined average.",
      "A county showing wage growth in every demographic group, while the overall average wage decreases."
    ],
    related_thinkers: ["Edward H. Simpson", "Karl Pearson", "Judea Pearl"],
    thought_experiment: "If statistics can show opposite truths depending on how they are grouped, how do we find the objective truth?"
  },
  {
    name: "The Birthday Paradox",
    hindi_name: "जन्मदिन का विरोधाभास",
    period: "Modern Era · 1939",
    origin: "Developed by mathematician Richard von Mises, this probability puzzle shows how poorly the human mind estimates exponents and combinations.",
    statement: "In a room of just 23 people, what is the probability that at least two people share the same birthday? The answer is over 50%.",
    explanation: "This is called a paradox because our intuition suggests the probability should be much lower, given there are 365 days in a year. We tend to think about the probability of someone sharing *our* birthday, which is indeed low. However, the paradox considers *any* pair of people sharing a birthday. With 23 people, there are 253 possible pairs (calculated as 23 * 22 / 2). The probability of at least one shared birthday is best calculated by finding the probability that *no one* shares a birthday, which decreases rapidly as the number of pairs grows. When the group reaches 57 people, the probability of a shared birthday rises to 99%.",
    modern_examples: [
      "The probability of cryptographic hash collisions in computer security.",
      "Coincidences in DNA matching databases.",
      "Meeting someone with the same name in a relatively small gathering."
    ],
    related_thinkers: ["Richard von Mises", "William Feller"],
    thought_experiment: "Why does our mind struggle to grasp the power of combinations and exponential growth?"
  },
  {
    name: "Russell's Paradox",
    hindi_name: "रसेल का विरोधाभास",
    period: "Modern Era · 1901",
    origin: "Discovered by Bertrand Russell, this paradox shook the foundations of mathematics, exposing a logical flaw in the set theory of Gottlob Frege.",
    statement: "Does the set of all sets that do not contain themselves contain itself? If it does not, then by definition it must contain itself. If it does, it cannot contain itself.",
    explanation: "To understand this, consider a library catalog that lists all catalogs that do not list themselves. Does this catalog list itself? If it does list itself, it violates its own rule. If it does not list itself, it must be included in the list. Russell's paradox showed that 'naive set theory', which allowed any collection of objects to form a set, was logically inconsistent. To resolve this, mathematicians had to rebuild set theory from scratch (creating the Zermelo-Fraenkel set theory), introducing strict rules that prevent sets from referencing themselves in this manner, showing that even mathematical truth requires strict boundaries.",
    modern_examples: [
      "A database table designed to list all tables that do not list themselves.",
      "A rulebook that states: 'Follow all rules except this one'.",
      "A search engine that only indexes websites that are not indexed by any search engine."
    ],
    related_thinkers: ["Bertrand Russell", "Gottlob Frege", "Ernst Zermelo", "Georg Cantor"],
    thought_experiment: "Can a system of logic ever be completely free of self-contradiction?"
  },
  {
    name: "The Barber Paradox",
    hindi_name: "नाई का विरोधाभास",
    period: "Modern Era · 1901",
    origin: "A simplified, citizen-friendly version of Russell's paradox, formulated by Bertrand Russell himself to explain the abstract mathematics of set theory.",
    statement: "In a town, a barber shaves all men, and only those men, who do not shave themselves. Does the barber shave himself?",
    explanation: "If the barber shaves himself, he violates his own rule, which states he only shaves men who *do not* shave themselves. However, if the barber does not shave himself, he falls into the group of men who do not shave themselves, meaning he must shave himself. This paradox is a simple illustration of the limits of definition. The only logical conclusion is that such a town, and such a barber, cannot exist. It shows that we can construct sentences that sound grammatically correct and meaningful, but are logically impossible.",
    modern_examples: [
      "A computer routine designed to terminate all routines that do not terminate themselves.",
      "An editor who edits all writers who do not edit themselves.",
      "A security system that monitors all systems except those that monitor themselves."
    ],
    related_thinkers: ["Bertrand Russell"],
    thought_experiment: "If a definition leads to an impossible contradiction, is the definition itself meaningless?"
  },
  {
    name: "The Fermi Paradox",
    hindi_name: "फर्मी का विरोधाभास",
    period: "Modern Era · 1950",
    origin: "Proposed by physicist Enrico Fermi during a casual lunchtime conversation with colleagues at Los Alamos National Laboratory.",
    statement: "Given the age and vast size of the universe, and the high probability of habitable planets, where is everybody? Why haven't we seen any signs of alien civilizations?",
    explanation: "The Fermi Paradox highlights the contradiction between the high estimates for the existence of extraterrestrial civilizations (such as those calculated by the Drake Equation) and our complete lack of evidence. The universe is about 13.8 billion years old, and our galaxy contains billions of stars similar to our sun, many with Earth-like planets. Even at slow travel speeds, a civilization should have been able to colonize the galaxy within a few million years. Proposed solutions include the 'Great Filter' (that some barrier makes the transition from life to interstellar civilization extremely rare), the 'Zoo Hypothesis' (aliens are observing us but avoiding contact), or the possibility that we are truly alone.",
    modern_examples: [
      "Scanning radio frequencies for decades and hearing only cosmic silence.",
      "The search for megastructures (like Dyson Spheres) yielding no clear results.",
      "The isolation of Earth in a vast, seemingly empty galaxy."
    ],
    related_thinkers: ["Enrico Fermi", "Carl Sagan", "Frank Drake", "Robin Hanson"],
    thought_experiment: "If humanity is the only conscious life in the galaxy, does that make our survival more or less important?"
  },
  {
    name: "The Bootstrap Paradox",
    hindi_name: "बूटस्ट्रैप विरोधाभास",
    period: "Modern Era · 1941",
    origin: "Popularized in science fiction, notably in Robert A. Heinlein's story 'By His Bootstraps', this paradox explores causal loops in time travel.",
    statement: "A time traveler goes back in time and gives young Shakespeare a copy of his plays. Shakespeare publishes them. Who actually wrote the plays?",
    explanation: "This paradox describes an object or information that exists without ever being created. The information travels in a closed loop: from the future copy, to Shakespeare's mind, to the printed page, and back to the future. The information has no origin, yet it exists. The term comes from the phrase 'pulling oneself up by one's bootstraps', representing an impossible feat. In physics, this is called a closed timelike curve. It raises deep questions about the nature of time and information, suggesting that if backward time travel is possible, the universe must allow events to exist without a beginning.",
    modern_examples: [
      "Finding a time machine blueprint in the future, building it, and sending the blueprint back to the past.",
      "A song being copied from a future recording, so the musician never actually composed it.",
      "A historical relic that is kept in a museum, sent back in time, buried, and dug up to be placed in the same museum."
    ],
    related_thinkers: ["Robert A. Heinlein", "David Lewis", "Kip Thorne"],
    thought_experiment: "If information can exist without a creator, does that change our understanding of intelligence?"
  },
  {
    name: "The Paradox of the Unexpected Hanging",
    hindi_name: "अप्रत्याशित फाँसी का विरोधाभास",
    period: "Modern Era · 1940s",
    origin: "First discussed in mathematical circles and popularized by Martin Gardner in his Scientific American column.",
    statement: "A judge tells a prisoner he will be hanged on a weekday next week, and that the execution will be a surprise. The prisoner logically proves the hanging can never happen. Is he right?",
    explanation: "The prisoner reasons that the execution cannot be on Friday: if he is still alive on Thursday night, Friday is the only day left, so it wouldn't be a surprise. Since Friday is ruled out, he reasons it cannot be on Thursday either, for the same reason. He rules out every day of the week one by one. Convinced he cannot be hanged, the prisoner is shocked when the executioner knocks on his door on Wednesday - it is a complete surprise. This paradox exposes a conflict between logic and belief, showing that a logical proof can fail when it relies on assumptions about future knowledge and human decisions.",
    modern_examples: [
      "A teacher announcing a surprise pop quiz next week.",
      "A company planning a surprise inspection during a specific month.",
      "An unexpected software update scheduled for a specific day."
    ],
    related_thinkers: ["Martin Gardner", "W.V.O. Quine", "Michael Scriven"],
    thought_experiment: "Can we ever logically prove that something will surprise us?"
  },
  {
    name: "Buridan's Ass",
    hindi_name: "बुरीदान का गधा",
    period: "Middle Ages · 14th Century",
    origin: "Named after French philosopher Jean Buridan, though the concept dates back to Aristotle, who wrote about a man remaining hungry because he was equally distant from food and drink.",
    statement: "A hungry and thirsty donkey is placed exactly halfway between a stack of hay and a bucket of water. With no reason to choose one over the other, does it stand still and die?",
    explanation: "This paradox examines the nature of free will and rational choice. If a decision requires a reason, and there are two identical options with no reason to prefer one over the other, a purely rational agent would be paralyzed. Jean Buridan used this to argue that we possess a faculty of choice that goes beyond simple logic, allowing us to break ties arbitrarily. In computer science, this is a real problem known as 'metastability' in digital circuits, where a processor takes time to resolve a state when inputs are balanced, sometimes causing systems to freeze.",
    modern_examples: [
      "An undecided shopper standing between two identical items on a shelf.",
      "A self-driving car paralyzed when choosing between two identical paths to avoid an obstacle.",
      "A computer processor stuck when receiving two simultaneous signals of equal priority."
    ],
    related_thinkers: ["Jean Buridan", "Aristotle", "Baruch Spinoza", "Gottfried Wilhelm Leibniz"],
    thought_experiment: "If our choices are always determined by reasons, how do we make decisions when reasons are perfectly balanced?"
  },
  {
    name: "The Epicurean Paradox (Problem of Evil)",
    hindi_name: "एपिकुरियन विरोधाभास",
    period: "Ancient Greece · ~300 BCE",
    origin: "Attributed to the ancient Greek philosopher Epicurus, this paradox formulates the core argument against the existence of an all-powerful, all-good deity.",
    statement: "If God is willing to prevent evil, but not able, then he is not all-powerful. If he is able, but not willing, then he is malevolent. If he is both able and willing, then why does evil exist?",
    explanation: "The Epicurean paradox is the foundation of the 'Problem of Evil' in philosophy. It presents a logical conflict between the existence of suffering in the world and the traditional definition of God as omnipotent (all-powerful), omniscient (all-knowing), and omnibenevolent (all-good). If any of these attributes are true, evil should not exist. Theologians have proposed various 'theodicies' to resolve this, such as arguing that evil is a byproduct of human free will, or that suffering serves a higher purpose that we cannot comprehend. However, the paradox remains a central debate in the philosophy of religion.",
    modern_examples: [
      "Reconciling the tragedy of natural disasters with a belief in a benevolent creator.",
      "Debating the ethics of a parent who allows their child to suffer to teach them a lesson.",
      "The existential struggle to find meaning in suffering."
    ],
    related_thinkers: ["Epicurus", "David Hume", "Augustine of Hippo", "Alvin Plantinga"],
    thought_experiment: "If a world without suffering required removing human free will, would that world be better?"
  },
  {
    name: "Free Will vs Determinism",
    hindi_name: "स्वतंत्र इच्छा बनाम नियतिवाद",
    period: "Antiquity to Present",
    origin: "Debated across cultures and eras, from ancient Stoic philosophers to modern neuroscientists analyzing brain scans.",
    statement: "If the universe is governed by cause and effect, every choice you make is determined by prior events. If your choices are determined, how can you have free will?",
    explanation: "This paradox lies at the heart of metaphysics and ethics. If determinism is true, every brain state and subsequent decision is the inevitable result of prior physical causes (genetics, environment, brain chemistry). This suggests that free will is an illusion. However, our moral and legal systems are built on the assumption that individuals are responsible for their actions. 'Compatibilists' argue that free will exists as long as our actions align with our desires, even if those desires were determined. 'Incompatibilists' argue that true freedom requires the ability to have chosen otherwise, a concept challenged by modern physics and neuroscience.",
    modern_examples: [
      "Using brain scans to predict a participant's choice seconds before they are consciously aware of it.",
      "Using a defendant's genetic makeup or traumatic childhood to argue for a reduced sentence.",
      "Algorithms predicting consumer choices based on past behavior."
    ],
    related_thinkers: ["Baruch Spinoza", "Immanuel Kant", "Arthur Schopenhauer", "Benjamin Libet"],
    thought_experiment: "If you could predict your next choice with absolute certainty, would you still be free to change it?"
  },
  {
    name: "The Banach-Tarski Paradox",
    hindi_name: "बानाच-टार्स्की विरोधाभास",
    period: "Modern Era · 1924",
    origin: "Formulated by mathematicians Stefan Banach and Alfred Tarski as a theorem in set-theoretic geometry.",
    statement: "A solid sphere can be split into a finite number of pieces, which can then be put back together to form two solid spheres of the exact same size as the original.",
    explanation: "This paradox seems to violate the physical law of conservation of mass. However, it is a mathematically proven theorem in set theory, relying on the 'Axion of Choice'. The pieces into which the sphere is divided are not ordinary shapes; they are infinite, non-measurable sets of points with no defined volume. When these points are rotated and translated, they can be assembled into two spheres. While physically impossible because matter is composed of finite atoms, this paradox reveals that infinity behaves in ways that contradict our everyday experiences of space and volume.",
    modern_examples: [
      "Infinite replication of data files without losing quality.",
      "Concept of infinite growth in a finite economy.",
      "The theoretical behavior of black hole singularities."
    ],
    related_thinkers: ["Stefan Banach", "Alfred Tarski", "Felix Hausdorff"],
    thought_experiment: "If mathematics can prove something that is physically impossible, does math describe reality or just its own rules?"
  },
  {
    name: "Olbers' Paradox",
    hindi_name: "ओल्बर्स का विरोधाभास",
    period: "Modern Era · 1823",
    origin: "Popularized by German astronomer Heinrich Wilhelm Olbers, though the question had been asked by Kepler and Halley centuries earlier.",
    statement: "If the universe is infinite and contains an infinite number of stars, why is the night sky dark? Every line of sight should end on a bright star.",
    explanation: "If the universe were static, infinitely old, and populated by an infinite number of stars, the night sky should be as bright as the surface of the sun. Modern cosmology resolves this paradox with two facts: the universe is not infinitely old (it began 13.8 billion years ago), and it is expanding. Because the universe has a finite age, the light from distant stars has not had enough time to reach us. Furthermore, because space is expanding, the light from distant stars is redshifted into the infrared spectrum, making it invisible to the human eye. The dark night sky is evidence of the Big Bang.",
    modern_examples: [
      "The cosmic microwave background radiation, which is the cooled remnants of the Big Bang's light.",
      "Using infrared telescopes (like James Webb) to see stars that are invisible to optical telescopes.",
      "The horizon limit of the observable universe."
    ],
    related_thinkers: ["Heinrich Wilhelm Olbers", "Johannes Kepler", "Edgar Allan Poe", "Edwin Hubble"],
    thought_experiment: "If the universe were static, would night exist?"
  },
  {
    name: "The Hard Problem of Consciousness",
    hindi_name: "चेतना की कठिन समस्या",
    period: "Modern Era · 1995",
    origin: "Coined by Australian philosopher David Chalmers, distinguishing between the easy problems of brain function and the hard problem of experience.",
    statement: "If the brain is just a physical system processing information, why does it feel like anything to be alive? Why does subjective experience exist?",
    explanation: "The 'easy' problems of consciousness involve explaining how the brain integrates sensory information, focuses attention, and controls behavior. These are physical processes that can be explained by neuroscience. The 'hard' problem is explaining why this physical processing is accompanied by subjective experience (qualia), like the redness of a rose or the pain of a burn. If we could build a robot that behaves exactly like a human, would it have inner experiences? The paradox is that while we can observe the physical brain, we cannot observe experience itself, making it difficult to explain using science.",
    modern_examples: [
      "Debating whether an advanced artificial intelligence experiences feelings or just simulates them.",
      "The inability to explain the sensation of color to a person who has been blind from birth.",
      "The mystery of how physical brain damage alters subjective personality."
    ],
    related_thinkers: ["David Chalmers", "Thomas Nagel", "Daniel Dennett", "Frank Jackson"],
    thought_experiment: "If a computer behaved exactly like you, how would you prove you have an inner life and it does not?"
  },
  {
    name: "The Raven Paradox",
    hindi_name: "कौवे का विरोधाभास",
    period: "Modern Era · 1940s",
    origin: "Proposed by German logician Carl Gustav Hempel to show how the rules of formal logic can contradict our common-sense understanding of evidence.",
    statement: "Observing a green apple confirms the statement that 'all ravens are black' because it is logically equivalent to 'all non-black things are non-ravens'. Does a green apple make you more confident that ravens are black?",
    explanation: "In logic, the statement 'All ravens are black' (All R are B) is contrapositive to 'All non-black things are non-ravens' (All non-B are non-R). They are logically equivalent. Therefore, any evidence that supports one must support the other. Observing a green apple (which is non-black and a non-raven) confirms the second statement. By extension, it must confirm that all ravens are black. This means you can do ornithological research without ever leaving your kitchen, simply by looking at green apples. While mathematically correct, it is a paradox because our common sense rejects the idea that a green apple is meaningful evidence about ravens.",
    modern_examples: [
      "Using unrelated data to validate a hypothesis in machine learning.",
      "A detective verifying a suspect's guilt by proving that innocent people were elsewhere.",
      "Testing a drug's efficacy by observing healthy people who did not take it."
    ],
    related_thinkers: ["Carl Gustav Hempel", "Nelson Goodman", "W.V.O. Quine"],
    thought_experiment: "Can we gain knowledge about one thing by studying something completely unrelated?"
  },
  {
    name: "Zeno's Dichotomy Paradox",
    hindi_name: "ज़ेनो का द्वंद्व विरोधाभास",
    period: "Ancient Greece · ~450 BCE",
    origin: "One of Zeno of Elea's paradoxes of motion, focusing on the impossibility of starting a journey if space can be divided infinitely.",
    statement: "To walk across a room, you must first walk halfway. To walk the remaining half, you must first walk half of that. Since this sequence of halves is infinite, you can never begin to move.",
    explanation: "This paradox is similar to Achilles and the Tortoise, but it applies to a single traveler. Before you can reach your destination, you must reach the midpoint. Before you can reach the midpoint, you must reach the quarter-point, and so on. Since space can be divided infinitely, there is an infinite number of midpoints you must reach before you can cover any distance. Zeno argued that you cannot even take a first step, because any step can be divided into a half-step, a quarter-step, and so on. This paradox challenges our understanding of the continuity of space and time.",
    modern_examples: [
      "A project that is constantly delayed because every task is divided into sub-tasks.",
      "The difficulty of starting a complex project when there are infinite preparation steps.",
      "The Planck length in physics, which is the theoretical limit to the divisibility of space."
    ],
    related_thinkers: ["Zeno of Elea", "Aristotle", "René Descartes"],
    thought_experiment: "If space is continuous, how do we cross an infinite number of points in a finite time?"
  },
  {
    name: "The Memory Swap (Theseus's Ship variant)",
    hindi_name: "स्मृति विनिमय विरोधाभास",
    period: "Modern Era",
    origin: "A modern variation of the Ship of Theseus applied to human consciousness and identity, debated in philosophy of mind.",
    statement: "If your memories are copied into a digital brain, and your physical body is destroyed, do you continue to exist? If the copy is made while you are still alive, which one is you?",
    explanation: "This paradox explores the nature of personal identity. John Locke argued that identity is defined by the continuity of consciousness and memory. If this is true, then the digital copy has the same identity as you. However, if the copy is made while you are still alive, there are now two minds with the same memories, but separate experiences. If one is destroyed, the other survives. This suggests that identity is not just about information, but also about the physical continuity of the brain. The paradox challenges our hopes for digital immortality, showing that we must define what makes us 'us'.",
    modern_examples: [
      "Uploading your consciousness to a cloud server to achieve immortality.",
      "Teleportation devices (like in Star Trek) that destroy the original and build a copy.",
      "Reconstructing a historical figure's personality using their letters and writings."
    ],
    related_thinkers: ["John Locke", "Derek Parfit", "Ray Kurzweil"],
    thought_experiment: "If you woke up tomorrow with someone else's memories, who would you be?"
  },
  {
    name: "The Chinese Room",
    hindi_name: "चाइनीज रूम विरोधाभास",
    period: "Modern Era · 1980",
    origin: "Proposed by American philosopher John Searle to challenge the claim that artificial intelligence can achieve true understanding (Strong AI).",
    statement: "A person who doesn't know Chinese sits in a room with a rulebook. They receive Chinese characters, follow the rules to match them with other characters, and send them out. To outsiders, the room understands Chinese. Does the person inside?",
    explanation: "The Chinese Room thought experiment argues that a computer program is like the person in the room: it manipulates symbols based on rules (syntax) without understanding what they mean (semantics). Even if a chatbot passes the Turing Test, it is just simulating understanding. John Searle used this to argue that consciousness and intentionality require biological processes that cannot be replicated by software. Critics argue that while the person inside doesn't understand Chinese, the entire system (person + room + rulebook) does. This debate is central to the philosophy of AI.",
    modern_examples: [
      "Large language models (like GPT) generating coherent text without knowing what the words mean.",
      "A translation app converting languages using algorithms.",
      "A chess computer beating a grandmaster without understanding the game."
    ],
    related_thinkers: ["John Searle", "Alan Turing", "Ned Block"],
    thought_experiment: "If a machine behaves exactly as if it understands, does the difference between simulation and reality matter?"
  },
  {
    name: "The Sleeping Beauty Problem",
    hindi_name: "स्लीपिंग ब्यूटी की समस्या",
    period: "Modern Era · 1999",
    origin: "First published by mathematician Michele Elgland and debated intensely in probability and decision theory.",
    statement: "Sleeping Beauty is put to sleep. A coin is tossed. If Heads, she is awakened on Monday and interviewed. If Tails, she is awakened on Monday, put back to sleep with her memory erased, and awakened on Tuesday. When awakened, what is her probability that the coin landed Heads?",
    explanation: "This problem divides theorists into two camps: 'Halfers' and 'Thirders'. Halfers argue that the coin is fair, so the probability of Heads must be 1/2. No new information has been gained, so the probability remains unchanged. Thirders argue that if this experiment is repeated many times, she will experience three possible awakenings: Monday-Heads, Monday-Tails, and Tuesday-Tails. Since these three situations are indistinguishable to her, each has an equal probability of 1/3. Therefore, when she wakes up, the probability of Heads is 1/3. The paradox reveals how probability depends on how we define and count our experiences.",
    modern_examples: [
      "Estimating probability when your own memory or existence is dependent on the outcome.",
      "Deciding on investments when your tracking tools are unreliable.",
      "Predicting future events when you don't know how many times you've asked the question."
    ],
    related_thinkers: ["Adam Elga", "David Lewis", "Robert Aumann"],
    thought_experiment: "If your memory of an event is erased, did the event still have a probability of happening for you?"
  },
  {
    name: "The Experience Machine",
    hindi_name: "अनुभव की मशीन",
    period: "Modern Era · 1974",
    origin: "Proposed by American philosopher Robert Nozick in his book 'Anarchy, State, and Utopia' to challenge hedonism, the idea that pleasure is the ultimate good.",
    statement: "If there were a machine that could give you any experience you desired, and you wouldn't know you were in it, would you plug in for the rest of your life?",
    explanation: "Robert Nozick argued that most people would choose not to plug in. He suggested three reasons: we want to *do* certain things, not just experience them; we want to *be* a certain kind of person, whereas the machine leaves us as an inactive body; and the machine limits us to a man-made reality, whereas we want contact with the actual world. The thought experiment suggests that we value things beyond subjective pleasure - such as authenticity, truth, and active achievement. It challenges the foundations of utilitarianism and hedonism, suggesting that a good life requires connection to reality, even if that reality includes pain.",
    modern_examples: [
      "Choosing virtual reality worlds over real-life travel.",
      "Using social media profiles to create an idealized version of your life.",
      "The debate over whether virtual friendships are as valuable as physical ones."
    ],
    related_thinkers: ["Robert Nozick", "Jeremy Bentham", "John Stuart Mill"],
    thought_experiment: "If a simulated life offered perfect happiness, is choosing the real world with all its pain rational?"
  },
  {
    name: "The Repugnant Conclusion",
    hindi_name: "घृणास्पद निष्कर्ष",
    period: "Modern Era · 1984",
    origin: "Formulated by British philosopher Derek Parfit in his book 'Reasons and Persons', challenging the foundations of population ethics.",
    statement: "Is a world with billions of extremely happy people better than a world with a much larger population of people whose lives are barely worth living, but still positive?",
    explanation: "Derek Parfit showed that if we accept total utilitarianism (maximizing the sum of happiness), we are led to a conclusion that many find repugnant. If we compare World A (small population, high quality of life) with World B (larger population, slightly lower quality of life but higher total happiness), we must conclude B is better. By repeating this step, we eventually reach World Z (an enormous population where lives are barely worth living, but the sum of happiness is larger). This paradox shows that our moral theories struggle to balance the quality of life with the quantity of people, creating dilemmas for future planning and environmental policy.",
    modern_examples: [
      "Deciding whether to allocate resources to improve current lives or support a larger future population.",
      "Environmental policies balancing resources for a growing global population.",
      "Debates over birth rates and economic growth."
    ],
    related_thinkers: ["Derek Parfit", "John Broome", "Gustaf Arrhenius"],
    thought_experiment: "Is it better to make people happy, or to make happy people?"
  }
];
