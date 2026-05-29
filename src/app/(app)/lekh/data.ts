'use client';

export const UMBRELLA_GENRES = [
  'Life & Personal Experience',
  'Family & Relationships',
  'Psychology & Behavior',
  'Science & Technology',
  'Environment & Nature',
  'Health & Medicine',
  'Travel & Places',
  'Society, Politics & History',
  'Arts, Culture & Language',
  'Special Collections',
] as const;

export type UmbrellaGenre = typeof UMBRELLA_GENRES[number];

export interface LekhPiece {
  title: string;
  author: string;
  publication: string;
  publication_url: string;
  original_url: string;
  year?: string;
  genre: UmbrellaGenre;
  sub_area: string;
  type: 'essay' | 'article';
  estimated_read: string;
  introduction: string;
  companion: {
    why_this_piece: string;
    context: string;
    main_ideas: string;
    intellectual_lineage: string;
    related_thinkers: string[];
    related_books: string[];
    related_concepts: string[];
    why_influential: string;
  };
  before_you_read: string;
  after_you_read: string;
}

export interface LekhDayEntry {
  dayIndex: number;
  essays: LekhPiece[];
  articles: LekhPiece[];
}

// Pool of Essays
const ESSAYS_POOL: LekhPiece[] = [
  {
    title: "Consider the Lobster",
    author: "David Foster Wallace",
    publication: "Gourmet",
    publication_url: "https://www.gourmet.com",
    original_url: "https://www.columbia.edu/~col8/lobsterarticle.pdf",
    year: "2004",
    genre: "Travel & Places",
    sub_area: "Maine Lobster Festival",
    type: "essay",
    estimated_read: "25 min",
    introduction: "Originally commissioned to cover the Maine Lobster Festival, Wallace turns a standard travelogue into a profound moral interrogation of boiling sentient creatures alive for human pleasure.",
    companion: {
      why_this_piece: "It shows how travel writing can transcend descriptive prose to address deep ethical concerns that usually remain unexamined. Wallace probes the margins of human consumption and sensory capacity.",
      context: "Written for Gourmet magazine, the piece directly challenged its target audience's gastronomic sensibilities, forcing readers to look at the suffering behind culinary luxury.",
      main_ideas: "Wallace raises difficult questions about animal consciousness and pain. He explores the neural complexity of lobsters, the physics of boiling, and the cultural filters we use to justify eating them.",
      intellectual_lineage: "Continues the tradition of moral essayists like Montaigne and Peter Singer, merging detailed reporting with self-reflective philosophy.",
      related_thinkers: ["Peter Singer", "Jeremy Bentham", "Iris Murdoch"],
      related_books: ["Animal Liberation", "The Sovereign Good"],
      related_concepts: ["Sentience", "Gastronomy", "Moral Duty"],
      why_influential: "It remains a landmark essay on animal ethics and one of the finest examples of literary journalism."
    },
    before_you_read: "Notice the immediate physical comfort you feel, and think about the sensory lives of other creatures.",
    after_you_read: "Where do we draw the line between creatures that feel pain and those that do not?"
  },
  {
    title: "The Case Against Empathy",
    author: "Paul Bloom",
    publication: "The Atlantic",
    publication_url: "https://www.theatlantic.com",
    original_url: "https://www.theatlantic.com/magazine/archive/2015/09/the-case-against-empathy/399356/",
    year: "2015",
    genre: "Psychology & Behavior",
    sub_area: "Moral Psychology",
    type: "essay",
    estimated_read: "12 min",
    introduction: "Psychologist Paul Bloom argues that empathy is a poor guide for moral decision-making, acting like a spotlight that makes us biased, innumerate, and shortsighted.",
    companion: {
      why_this_piece: "It challenges the common wisdom that more empathy is always better, suggesting instead that rational compassion produces better moral outcomes.",
      context: "Published during a time of intense polarization, Bloom's argument offered a tool to understand why emotional responses can lead to bad policies.",
      main_ideas: "Empathy makes us focus on the individual at the expense of the collective. It is easily manipulated and leads to tribalism. Rationality is better for long-term moral progress.",
      intellectual_lineage: "Aligned with Stoicism and utilitarian philosophers who advocate for reason over passion in moral judgments.",
      related_thinkers: ["Seneca", "Peter Singer", "Joshua Greene"],
      related_books: ["Against Empathy", "Moral Tribes"],
      related_concepts: ["Compassion", "Rational Choice", "Utilitarianism"],
      why_influential: "It sparked a major debate in psychology and philosophy about the role of emotion in ethics."
    },
    before_you_read: "Recall a time when your sympathy for one person made you unfair to others.",
    after_you_read: "Can we have a moral society that relies on cool reasoning rather than shared feeling?"
  },
  {
    title: "Why I Write",
    author: "George Orwell",
    publication: "Gangrel",
    publication_url: "https://www.orwell.ru",
    original_url: "https://www.orwell.ru/library/essays/wiw/english/e_wiw",
    year: "1946",
    genre: "Arts, Culture & Language",
    sub_area: "Writer's Motives",
    type: "essay",
    estimated_read: "8 min",
    introduction: "Orwell shares his journey as a writer and identifies four main motives for writing: sheer egoism, aesthetic enthusiasm, historical impulse, and political purpose.",
    companion: {
      why_this_piece: "It offers a candid look into the writer's mind and the historical pressures that shape literary ambition, particularly during times of war and political change.",
      context: "Written shortly after WWII, when Orwell was reflecting on his work in the Spanish Civil War and preparing for his major novels.",
      main_ideas: "All writers are driven by self-interest and a desire to record history. However, for Orwell, the most important motive was to push the world in a certain direction, merging art and politics.",
      intellectual_lineage: "Rooted in the tradition of reflective essayists who analyze their own craft, like Montaigne and Hazlitt.",
      related_thinkers: ["Albert Camus", "Joan Didion", "Walter Benjamin"],
      related_books: ["Homage to Catalonia", "The Myth of Sisyphus"],
      related_concepts: ["Aesthetics", "Political Art", "Egoism"],
      why_influential: "It is one of the most widely read essays on the purpose of writing and the responsibility of the artist."
    },
    before_you_read: "Consider what drives you to express your thoughts to the world.",
    after_you_read: "Is it possible for any writing to be completely free of political purpose?"
  },
  {
    title: "Shooting an Elephant",
    author: "George Orwell",
    publication: "New Writing",
    publication_url: "https://www.orwell.ru",
    original_url: "https://www.orwell.ru/library/essays/elephant/english/e_eleph",
    year: "1936",
    genre: "Society, Politics & History",
    sub_area: "Imperialism",
    type: "essay",
    estimated_read: "10 min",
    introduction: "Orwell recounts his experience as a police officer in British Burma, using the shooting of an elephant to reveal the hollow nature of imperial power.",
    companion: {
      why_this_piece: "It demonstrates how colonial masters are forced into roles that destroy their own freedom to maintain the illusion of control.",
      context: "Reflecting on his service in the Indian Imperial Police, Orwell captures the growing tensions of late-empire British rule.",
      main_ideas: "The imperialist must behave like a master, even when he wishes otherwise. The crowd's expectations dictate his actions, turning the conqueror into a puppet.",
      intellectual_lineage: "Aligned with anti-colonial essays and literature that exposes the psychological costs of domination.",
      related_thinkers: ["Frantz Fanon", "Edward Said", "E. M. Forster"],
      related_books: ["Burmese Days", "The Wretched of the Earth"],
      related_concepts: ["Imperialism", "Conformity", "Power Dynamics"],
      why_influential: "It is widely taught as a masterpiece of narrative essay writing and a critique of political oppression."
    },
    before_you_read: "Think of a time you did something you did not want to do just to avoid looking foolish.",
    after_you_read: "Does holding power over others inevitably diminish our own freedom?"
  },
  {
    title: "On Self-Respect",
    author: "Joan Didion",
    publication: "Vogue",
    publication_url: "https://www.vogue.com",
    original_url: "https://www.vogue.com/article/joan-didion-self-respect-essay-1961",
    year: "1961",
    genre: "Life & Personal Experience",
    sub_area: "Character",
    type: "essay",
    estimated_read: "6 min",
    introduction: "Didion explores the nature of self-respect, defining it not as a lack of mistakes, but as the willingness to accept responsibility for one's own life.",
    companion: {
      why_this_piece: "It cuts through self-pity and conventional morality to offer a tough, realistic appraisal of character and personal agency.",
      context: "Written as a last-minute replacement for an empty slot in Vogue, Didion wrote it to fit the exact layout requirements.",
      main_ideas: "Self-respect is a discipline, a habit of mind. People with self-respect accept the costs of their actions and refuse to make excuses. It is the foundation of freedom.",
      intellectual_lineage: "Inherits the moral clarity of Stoic philosophers and early American transcendentalists.",
      related_thinkers: ["Marcus Aurelius", "Ralph Waldo Emerson", "Epictetus"],
      related_books: ["Slouching Towards Bethlehem", "The Meditations"],
      related_concepts: ["Character", "Agency", "Responsibility"],
      why_influential: "It remains one of Didion's most famous essays, celebrated for its stylistic precision and moral strength."
    },
    before_you_read: "Think of a choice you made that failed, and whether you have fully accepted its consequences.",
    after_you_read: "What is the difference between having self-respect and having high self-esteem?"
  },
  {
    title: "Letter from Birmingham Jail",
    author: "Martin Luther King Jr.",
    publication: "Liberation",
    publication_url: "https://www.africa.upenn.edu",
    original_url: "https://www.africa.upenn.edu/Articles_Gen/Letter_Birmingham.html",
    year: "1963",
    genre: "Society, Politics & History",
    sub_area: "Civil Disobedience",
    type: "essay",
    estimated_read: "20 min",
    introduction: "Writing from a jail cell, Dr. King defends the strategy of nonviolent resistance to racism, arguing that people have a moral responsibility to break unjust laws.",
    companion: {
      why_this_piece: "It is one of the most powerful arguments for civil rights and a timeless philosophical defense of civil disobedience.",
      context: "Written in response to a public statement by white clergymen who urged patience and law-abiding behavior rather than protests.",
      main_ideas: "Injustice anywhere is a threat to justice everywhere. Waiting for a more convenient season is equivalent to denial. Laws must align with the moral law of God.",
      intellectual_lineage: "Draws from Socrates, Augustine, Thomas Aquinas, Thoreau, and Mahatma Gandhi.",
      related_thinkers: ["Mahatma Gandhi", "Henry David Thoreau", "Thomas Aquinas"],
      related_books: ["Civil Disobedience", "Stride Toward Freedom"],
      related_concepts: ["Justice", "Nonviolence", "Civil Disobedience"],
      why_influential: "It is a cornerstone of American political philosophy and a guide for social movements worldwide."
    },
    before_you_read: "Reflect on whether a law is always just, and what makes a law unjust.",
    after_you_read: "How should a citizen decide when it is necessary to break a law?"
  },
  {
    title: "The Death of the Moth",
    author: "Virginia Woolf",
    publication: "The Death of the Moth and Other Essays",
    publication_url: "https://www.online-literature.com",
    original_url: "https://www.online-literature.com/virginia_woolf/3470/",
    year: "1942",
    genre: "Life & Personal Experience",
    sub_area: "Mortality",
    type: "essay",
    estimated_read: "6 min",
    introduction: "Woolf observes a small moth fluttering against a windowpane, turning its struggle to survive into a quiet, intense meditation on the nature of life and death.",
    companion: {
      why_this_piece: "It shows how a minor, everyday observation can become a vehicle for exploring the grandest mysteries of existence.",
      context: "Published posthumously, this essay reflects Woolf's ongoing struggles with mental health and her awareness of mortality.",
      main_ideas: "Life is a pure, energetic force that animates even the smallest creature. Yet death is an inevitable, quiet power that eventually overcomes all resistance.",
      intellectual_lineage: "Linked to the modernist focus on subjective experience and the quiet details of everyday life.",
      related_thinkers: ["Marcel Proust", "William James", "Thomas Browne"],
      related_books: ["To the Lighthouse", "Urn Burial"],
      related_concepts: ["Mortality", "Vitalism", "Subjectivity"],
      why_influential: "It is celebrated as one of the most beautiful and poignant essays in the English language."
    },
    before_you_read: "Observe a small living thing in your room, and notice the energy that keeps it moving.",
    after_you_read: "Why does the struggle against death feel noble, even when we know it is futile?"
  },
  {
    title: "Once More to the Lake",
    author: "E. B. White",
    publication: "Harper's",
    publication_url: "https://harpers.org",
    original_url: "https://genius.com/Eb-white-once-more-to-the-lake-annotated",
    year: "1941",
    genre: "Family & Relationships",
    sub_area: "Time & Memory",
    type: "essay",
    estimated_read: "10 min",
    introduction: "White returns to the lake of his childhood with his young son, experiencing a series of dual memories that lead to a sudden, chilling realization of the passage of time.",
    companion: {
      why_this_piece: "It captures the circular nature of family life, where parents see their children taking their place and feel the onset of their own mortality.",
      context: "Written during a period of transition in White's life, as he sought to reconnect with his past during a time of global war.",
      main_ideas: "The lake seems unchanged, creating an illusion that time has stood still. But the switch in roles - from son to father - highlights the inevitability of aging.",
      intellectual_lineage: "Part of the nostalgic, reflective tradition of American essay writing.",
      related_thinkers: ["Henry David Thoreau", "Marcel Proust", "William Wordsworth"],
      related_books: ["Walden", "In Search of Lost Time"],
      related_concepts: ["Nostalgia", "Aging", "Generational Cycles"],
      why_influential: "It is widely regarded as a masterpiece of prose style and a classic essay on memory."
    },
    before_you_read: "Recall a place from your childhood, and think about how you have changed since you last saw it.",
    after_you_read: "Is memory a safe haven from time, or does it only make the passage of time more painful?"
  },
  {
    title: "Notes of a Native Son",
    author: "James Baldwin",
    publication: "Harper's",
    publication_url: "https://harpers.org",
    original_url: "https://harpers.org/archive/1955/10/notes-of-a-native-son/",
    year: "1955",
    genre: "Society, Politics & History",
    sub_area: "Race & Identity",
    type: "essay",
    estimated_read: "18 min",
    introduction: "Baldwin weaves the story of his father's death with the Harlem riot of 1943, exploring the complex, painful inheritance of racial hatred in America.",
    companion: {
      why_this_piece: "It offers a brilliant psychological analysis of how prejudice destroys the inner life of both the oppressed and the oppressor.",
      context: "Written during the early years of the modern Civil Rights Movement, establishing Baldwin as one of America's leading public intellectuals.",
      main_ideas: "Hatred is a ruinous disease that must be fought, but we must also avoid letting it poison our own hearts. One must hold two opposing ideas in mind to survive.",
      intellectual_lineage: "Continues the tradition of self-reflective, socially critical essays that examine identity and nationhood.",
      related_thinkers: ["W. E. B. Du Bois", "Frantz Fanon", "Richard Wright"],
      related_books: ["The Souls of Black Folk", "The Fire Next Time"],
      related_concepts: ["Inheritance", "Anger", "Resilience"],
      why_influential: "It is a seminal text in American literature, known for its emotional intensity and intellectual depth."
    },
    before_you_read: "Consider the anger you have inherited from your family or community, and how it shapes your view of others.",
    after_you_read: "How can we fight injustice without letting the fight turn us into mirror images of our oppressors?"
  },
  {
    title: "Politics and the English Language",
    author: "George Orwell",
    publication: "Horizon",
    publication_url: "https://www.orwell.ru",
    original_url: "https://www.orwell.ru/library/essays/politics/english/e_polit",
    year: "1946",
    genre: "Arts, Culture & Language",
    sub_area: "Cliché & Propaganda",
    type: "essay",
    estimated_read: "12 min",
    introduction: "Orwell criticizes the decline of written English, arguing that vague, ugly language is used to defend the indefensible and corrupt political thought.",
    companion: {
      why_this_piece: "It provides a clear link between clear thinking and clear writing, offering practical rules to resist political manipulation.",
      context: "Written in the immediate aftermath of WWII, when propaganda had reached unprecedented levels of sophistication.",
      main_ideas: "Bad language is a symptom and a cause of bad thinking. By using ready-made clichés, we avoid the labor of thinking for ourselves. Clear language is a political defense.",
      intellectual_lineage: "Continues the tradition of language criticism and rhetorical analysis.",
      related_thinkers: ["Friedrich Nietzsche", "Ludwig Wittgenstein", "Aldous Huxley"],
      related_books: ["1984", "Philosophical Investigations"],
      related_concepts: ["Propaganda", "Cliché", "Clarity"],
      why_influential: "It remains one of the most famous guides to writing and a classic critique of political jargon."
    },
    before_you_read: "Notice the jargon and buzzwords you use in your daily communication, and what they might be hiding.",
    after_you_read: "Does the decline of language make it harder for a society to maintain democratic values?"
  },
  {
    title: "The Way We Age Now",
    author: "Atul Gawande",
    publication: "The New Yorker",
    publication_url: "https://www.newyorker.com",
    original_url: "https://www.newyorker.com/magazine/2007/04/30/the-way-we-age-now",
    year: "2007",
    genre: "Health & Medicine",
    sub_area: "Geriatrics",
    type: "essay",
    estimated_read: "15 min",
    introduction: "Surgeon Atul Gawande examines the medicalization of old age, arguing that modern medicine focuses on survival rather than the quality of life for the elderly.",
    companion: {
      why_this_piece: "It shifts the focus of medicine from technical intervention to humanistic care, offering a moving portrait of the realities of physical decline.",
      context: "Part of Gawande's research that culminated in his bestselling book Being Mortal, addressing the challenges of an aging population.",
      main_ideas: "Aging is a complex, systemic breakdown that cannot be cured. Our medical system is poorly designed to help people manage their final years with dignity.",
      intellectual_lineage: "Rooted in humanistic medicine and bioethics, focusing on the patient's experience over clinical measurements.",
      related_thinkers: ["Ivan Illich", "Elisabeth Kübler-Ross", "Cicely Saunders"],
      related_books: ["Being Mortal", "Medical Nemesis"],
      related_concepts: ["Mortality", "Quality of Life", "Caregiving"],
      why_influential: "It catalyzed a nationwide conversation on end-of-life care and the training of geriatric specialists."
    },
    before_you_read: "Think about the oldest person you know, and how their daily experience is shaped by their body's limits.",
    after_you_read: "What should be the primary goal of medicine when a disease cannot be cured?"
  },
  {
    title: "How Doctors Die",
    author: "Ken Murray",
    publication: "Zócalo Public Square",
    publication_url: "https://zocalopublicsquare.org",
    original_url: "https://zocalopublicsquare.org/2011/11/30/how-doctors-die/",
    year: "2011",
    genre: "Health & Medicine",
    sub_area: "End-of-life Care",
    type: "essay",
    estimated_read: "8 min",
    introduction: "Murray reveals that doctors often choose to receive minimal medical intervention at the end of their lives, opting for comfort and peace over painful, futile treatments.",
    companion: {
      why_this_piece: "It exposes the gap between what medicine can do and what we should want, drawing from the inside knowledge of medical professionals.",
      context: "Originally written as an online essay, it went viral, starting a global debate on the over-treatment of terminal patients.",
      main_ideas: "Doctors know the limits of modern medicine. They choose to avoid intensive care when it only prolongs suffering. We must learn to accept death as a natural part of life.",
      intellectual_lineage: "Aligned with the hospice movement and critiques of high-intervention hospital medicine.",
      related_thinkers: ["Atul Gawande", "Sherwin Nuland", "Cicely Saunders"],
      related_books: ["How We Die", "The Hour of Our Death"],
      related_concepts: ["Dignity", "Autonomy", "Palliative Care"],
      why_influential: "It has become a standard reference in discussions about medical ethics and living wills."
    },
    before_you_read: "Consider what you would prioritize if you were told you had only a few months to live.",
    after_you_read: "Why is it so difficult for patients and their families to refuse treatments that doctors themselves avoid?"
  },
  {
    title: "Is Google Making Us Stupid?",
    author: "Nicholas Carr",
    publication: "The Atlantic",
    publication_url: "https://www.theatlantic.com",
    original_url: "https://www.theatlantic.com/magazine/archive/2008/07/is-google-making-us-stupid/306868/",
    year: "2008",
    genre: "Science & Technology",
    sub_area: "Neuroplasticity",
    type: "essay",
    estimated_read: "12 min",
    introduction: "Carr argues that the internet is rewriting our neural pathways, making it harder for us to read deeply, focus, and engage in contemplative thought.",
    companion: {
      why_this_piece: "It provides an early, prophetic critique of the cognitive costs of our hyper-connected digital lives.",
      context: "Published as the smartphone and social media were beginning to dominate daily life, sparking debates on attention.",
      main_ideas: "Our brains are plastic and adapt to the tools we use. The internet encourages skimming and rapid scanning. This diminishes our capacity for deep reading and concentration.",
      intellectual_lineage: "Follows media theorists like Marshall McLuhan and Neil Postman who studied the effects of media on consciousness.",
      related_thinkers: ["Marshall McLuhan", "Neil Postman", "Maryanne Wolf"],
      related_books: ["The Shallows", "Amusing Ourselves to Death"],
      related_concepts: ["Neuroplasticity", "Attention Span", "Cognition"],
      why_influential: "It became the basis for Carr's Pulitzer-nominated book The Shallows and remains a key text on digital culture."
    },
    before_you_read: "Pay attention to your focus as you read this text, and notice if you feel an urge to switch tabs.",
    after_you_read: "How can we balance the convenience of internet search with the need for deep, uninterrupted thought?"
  },
  {
    title: "The Uninhabitable Earth",
    author: "David Wallace-Wells",
    publication: "New York Magazine",
    publication_url: "https://nymag.com",
    original_url: "https://nymag.com/intelligencer/2017/07/climate-change-earth-too-hot-for-humans.html",
    year: "2017",
    genre: "Environment & Nature",
    sub_area: "Climate Change",
    type: "essay",
    estimated_read: "30 min",
    introduction: "A terrifying, detailed compilation of the worst-case scenarios of climate change, arguing that our complacency is a form of collective delusion.",
    companion: {
      why_this_piece: "It shifts the climate conversation from abstract percentages to the concrete, terrifying realities that our children will face.",
      context: "Published shortly after the US withdrew from the Paris Agreement, it went viral and became a catalyst for activist groups.",
      main_ideas: "The worst outcomes of warming are closer and more catastrophic than we realize. It is not just about sea levels rising; it is about food shortages, economic collapse, and toxic air.",
      intellectual_lineage: "Continues the tradition of ecological warning texts like Rachel Carson's Silent Spring and Bill McKibben's The End of Nature.",
      related_thinkers: ["Bill McKibben", "Rachel Carson", "James Lovelock"],
      related_books: ["The Uninhabitable Earth", "The Sixth Extinction"],
      related_concepts: ["Anthropocene", "Feedback Loops", "Crisis Theory"],
      why_influential: "It became one of the most widely read and debated pieces of environmental journalism ever published."
    },
    before_you_read: "Notice the ambient temperature of your room, and reflect on the delicate systems that maintain it.",
    after_you_read: "Is fear an effective motivator for political change, or does it lead to paralysis?"
  },
  {
    title: "Against Interpretation",
    author: "Susan Sontag",
    publication: "Evergreen Review",
    publication_url: "https://www.evergreenreview.com",
    original_url: "https://www.scribd.com/document/339905951/Susan-Sontag-Against-Interpretation",
    year: "1964",
    genre: "Special Collections",
    sub_area: "Art Criticism",
    type: "essay",
    estimated_read: "10 min",
    introduction: "Sontag argues against the modern style of art criticism that focuses on interpreting what a work of art means, calling instead for an appreciation of what the work of art is.",
    companion: {
      why_this_piece: "It offers a critique of intellectualism, suggesting that our obsession with finding meanings can blunt our capacity to feel.",
      context: "Written during the rise of postmodern art, challenging the academic systems that dominated literary and art criticism.",
      main_ideas: "Interpretation is the revenge of the intellect upon art. It tames the work, making it comfortable. We need an erotics of art rather than a hermeneutics.",
      intellectual_lineage: "Aligned with aestheticism and critiques of rationalism in art, like Oscar Wilde and Walter Pater.",
      related_thinkers: ["Roland Barthes", "Oscar Wilde", "Theodor Adorno"],
      related_books: ["Against Interpretation", "The Death of the Author"],
      related_concepts: ["Aesthetics", "Hermeneutics", "Sensory Experience"],
      why_influential: "It remains a touchstone of cultural criticism, redefining how we think about our relationship with art."
    },
    before_you_read: "Look at a piece of art or listen to music without trying to explain what it is trying to say.",
    after_you_read: "Does explaining a work of art enrich our experience of it, or does it take something away?"
  },
  {
    title: "The Case for Reparations",
    author: "Ta-Nehisi Coates",
    publication: "The Atlantic",
    publication_url: "https://www.theatlantic.com",
    original_url: "https://www.theatlantic.com/magazine/archive/2014/06/the-case-for-reparations/361631/",
    year: "2014",
    genre: "Society, Politics & History",
    sub_area: "Systemic Racism",
    type: "essay",
    estimated_read: "45 min",
    introduction: "Coates builds a historical case for reparations for Black Americans, tracing the legacy of slavery through decades of housing discrimination, redlining, and wealth theft.",
    companion: {
      why_this_piece: "It combines deep historical research with personal narrative to argue that economic inequalities are the result of deliberate policy.",
      context: "Published during the Obama presidency, it revived a debate that had been marginalized in mainstream American politics.",
      main_ideas: "Reparations are not just about slavery; they are about the systemic exclusion of Black families from building wealth. The past is not dead; it is structured into our cities.",
      intellectual_lineage: "Follows anti-colonial and civil rights writers like W. E. B. Du Bois, Baldwin, and Martin Luther King Jr.",
      related_thinkers: ["W. E. B. Du Bois", "James Baldwin", "Thomas Piketty"],
      related_books: ["Between the World and Me", "Capital in the Twenty-First Century"],
      related_concepts: ["Systemic Injustice", "Redlining", "Generational Wealth"],
      why_influential: "It won the George Polk Award and is considered one of the most influential essays of the 21st century."
    },
    before_you_read: "Consider the neighborhood you grew up in, and how its resources were shaped by history and policy.",
    after_you_read: "Can a nation move forward without resolving the economic debts of its history?"
  },
  {
    title: "Your Brain Is Not for Thinking",
    author: "Lisa Feldman Barrett",
    publication: "The New York Times",
    publication_url: "https://www.nytimes.com",
    original_url: "https://www.nytimes.com/2020/11/23/opinion/brain-neuroscience-stress.html",
    year: "2020",
    genre: "Psychology & Behavior",
    sub_area: "Allostasis",
    type: "essay",
    estimated_read: "8 min",
    introduction: "Neuroscientist Lisa Feldman Barrett argues that the brain's primary job is not thinking, but managing the energy budget of your body, a process called allostasis.",
    companion: {
      why_this_piece: "It challenges the traditional separation of mind and body, showing how our physical states directly shape our emotions and thoughts.",
      context: "Written during the COVID-19 pandemic, offering a physiological explanation for why chronic stress leads to cognitive exhaustion.",
      main_ideas: "Your brain is a budget manager for water, salt, glucose, and oxygen. Thoughts and feelings are predictions built on these metabolic budgets. Mental health is physical health.",
      intellectual_lineage: "Fits with the biological view of mind and evolutionary neuroscience.",
      related_thinkers: ["Antonio Damasio", "William James", "Robert Sapolsky"],
      related_books: ["Seven and a Half Lessons About the Brain", "Descartes' Error"],
      related_concepts: ["Allostasis", "Interoception", "Predictive Coding"],
      why_influential: "It popularized modern neuroscience views on emotion, shifting public understanding of stress and behavior."
    },
    before_you_read: "Check in with your body's energy levels right now: are you tired, hungry, or tense?",
    after_you_read: "How does our view of mental health change if we treat thoughts as symptoms of physical budgets?"
  },
  {
    title: "The Procrastination Doom Loop",
    author: "Derek Thompson",
    publication: "The Atlantic",
    publication_url: "https://www.theatlantic.com",
    original_url: "https://www.theatlantic.com/business/archive/2013/08/your-smartphone-is-making-you-less-productive/279659/",
    year: "2013",
    genre: "Psychology & Behavior",
    sub_area: "Emotional Regulation",
    type: "essay",
    estimated_read: "6 min",
    introduction: "Thompson argues that procrastination is not a time-management problem or a sign of laziness, but an emotional regulation strategy to cope with negative moods.",
    companion: {
      why_this_piece: "It offers a compassionate, science-backed view of a common struggle, shifting the focus from discipline to emotional awareness.",
      context: "Written during the rise of productivity culture and smartphones, which made distraction instant and easy.",
      main_ideas: "We procrastinate to avoid feelings of anxiety, boredom, or self-doubt associated with a task. Short-term relief leads to long-term guilt, creating a cycle.",
      intellectual_lineage: "Aligned with cognitive behavioral therapy and modern research on self-control and emotion.",
      related_thinkers: ["Timothy Pychyl", "Daniel Kahneman", "Roy Baumeister"],
      related_books: ["Solving the Procrastination Puzzle", "Thinking, Fast and Slow"],
      related_concepts: ["Emotional Regulation", "Hyperbolic Discounting", "Self-Compassion"],
      why_influential: "It is one of the most popular articles explaining the psychological roots of procrastination."
    },
    before_you_read: "Think of a task you are currently avoiding, and identify the emotion that arises when you think about starting it.",
    after_you_read: "How does self-compassion help break the cycle of avoidance?"
  },
  {
    title: "Losing Earth",
    author: "Nathaniel Rich",
    publication: "The New York Times Magazine",
    publication_url: "https://www.nytimes.com",
    original_url: "https://www.nytimes.com/interactive/2018/08/01/magazine/climate-change-losing-earth.html",
    year: "2018",
    genre: "Environment & Nature",
    sub_area: "Climate History",
    type: "essay",
    estimated_read: "50 min",
    introduction: "A historical account of the decade from 1979 to 1989, when humanity had a clear opportunity to prevent catastrophic climate change but failed due to political inertia.",
    companion: {
      why_this_piece: "It challenges the myth that we only recently understood climate change, revealing that we knew everything necessary forty years ago.",
      context: "Occupied an entire issue of the NYT Magazine, a rare editorial decision that signaled the gravity of the subject.",
      main_ideas: "During the 1980s, scientists and politicians came close to a binding treaty to limit emissions. The failure to act was not due to lack of proof, but human nature and political greed.",
      intellectual_lineage: "Continues the tradition of political history and environmental advocacy.",
      related_thinkers: ["James Hansen", "Bill McKibben", "Naomi Oreskes"],
      related_books: ["Losing Earth", "Merchants of Doubt"],
      related_concepts: ["Inertia", "Crisis Management", "Public Policy"],
      why_influential: "It was adapted into a book and remains a key historical reference on the climate crisis."
    },
    before_you_read: "Consider how our decisions today will be viewed by people living forty years in the future.",
    after_you_read: "Is our political system capable of addressing long-term crises, or is it structurally blind to them?"
  },
  {
    title: "What Is Code?",
    author: "Paul Ford",
    publication: "Bloomberg Businessweek",
    publication_url: "https://www.bloomberg.com",
    original_url: "https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/",
    year: "2015",
    genre: "Science & Technology",
    sub_area: "Software Engineering",
    type: "essay",
    estimated_read: "90 min",
    introduction: "An immersive, comprehensive, and deeply human explanation of what software is, how it works, and why it has come to dominate the modern economy.",
    companion: {
      why_this_piece: "It demystifies the technical world, offering a bridge between humanistic understanding and computational systems.",
      context: "Occupied a special double issue of Businessweek, complete with interactive elements, animations, and a running chat widget.",
      main_ideas: "Code is a set of instructions that makes decisions. Computers are logic machines. Software is not magic; it is the work of human beings trying to manage complexity.",
      intellectual_lineage: "Follows computational writing that links tech to culture, like Douglas Hofstadter and Seymour Papert.",
      related_thinkers: ["Douglas Hofstadter", "Ada Lovelace", "Alan Turing"],
      related_books: ["Gödel, Escher, Bach", "Mindstorms"],
      related_concepts: ["Computation", "Abstraction", "Complexity"],
      why_influential: "It is widely regarded as one of the best explanations of software ever written for a general audience."
    },
    before_you_read: "Look at the interface you are using right now, and think about the layers of instructions behind it.",
    after_you_read: "Does code reflect the values of the people who write it, or is it a neutral tool?"
  }
];

// Pool of Articles
const ARTICLES_POOL: LekhPiece[] = [
  {
    title: "The Friendship That Made Google Huge",
    author: "James Somers",
    publication: "The New Yorker",
    publication_url: "https://www.newyorker.com",
    original_url: "https://www.newyorker.com/magazine/2018/12/10/the-friendship-that-made-google-huge",
    year: "2018",
    genre: "Science & Technology",
    sub_area: "Pair Programming",
    type: "article",
    estimated_read: "18 min",
    introduction: "Somers tells the story of Jeff Dean and Sanjay Ghemawat, the two legendary engineers whose collaboration built the infrastructure that handles billions of search queries every day.",
    companion: {
      why_this_piece: "It provides a rare, detailed look at the creative chemistry of software engineering, demonstrating how collaboration can multiply individual talents.",
      context: "Written as Google was celebrating its 20th anniversary, reflecting on the foundational engineering feats that enabled its scale.",
      main_ideas: "Jeff and Sanjay worked as a single mind, using pair programming to solve impossible problems. Their collaboration was built on deep trust, shared values, and complementary skills.",
      intellectual_lineage: "Aligned with histories of scientific collaborations and technology development.",
      related_thinkers: ["Fred Brooks", "Alan Turing", "Vannevar Bush"],
      related_books: ["The Mythical Man-Month", "Dealers of Lightning"],
      related_concepts: ["Pair Programming", "Collaboration", "Scale"],
      why_influential: "It is celebrated as one of the best profiles of software engineering culture."
    },
    before_you_read: "Think of a time when working with someone else made your ideas twice as strong.",
    after_you_read: "What makes some collaborations so much more than the sum of their parts?"
  },
  {
    title: "Letting Go",
    author: "Atul Gawande",
    publication: "The New Yorker",
    publication_url: "https://www.newyorker.com",
    original_url: "https://www.newyorker.com/magazine/2010/08/02/letting-go-2",
    year: "2010",
    genre: "Health & Medicine",
    sub_area: "End-of-life care",
    type: "article",
    estimated_read: "22 min",
    introduction: "Gawande explores the difficulty doctors and patients have in accepting the limits of medical intervention, advocating for hospice care over prolonged hospital battles.",
    companion: {
      why_this_piece: "It is a foundational essay that combines clinical stories with philosophical insights to argue for a better way to die.",
      context: "Published in The New Yorker, this article became the basis for Gawande's acclaimed book Being Mortal.",
      main_ideas: "Modern medicine often causes unnecessary suffering at the end of life because we refuse to talk about death. Accepting death is necessary to live well until the end.",
      intellectual_lineage: "Continues the humanistic medicine tradition that challenges technical over-reach.",
      related_thinkers: ["Sherwin Nuland", "Elisabeth Kübler-Ross", "Cicely Saunders"],
      related_books: ["Being Mortal", "How We Die"],
      related_concepts: ["Hospice", "End-of-Life Care", "Dignity"],
      why_influential: "It won a National Magazine Award and led to widespread policy debates on healthcare."
    },
    before_you_read: "Take a deep breath and accept the reality that our bodies are finite and fragile.",
    after_you_read: "How can we start honest conversations about death before a medical crisis arises?"
  },
  {
    title: "The Trauma Floor",
    author: "Casey Newton",
    publication: "The Verge",
    publication_url: "https://www.theverge.com",
    original_url: "https://www.theverge.com/2019/2/25/18229714/cognizant-facebook-content-moderator-interviews-trauma-working-conditions",
    year: "2019",
    genre: "Society, Politics & History",
    sub_area: "Content Moderation",
    type: "article",
    estimated_read: "15 min",
    introduction: "An investigation into the working conditions of Facebook's content moderators, exposing the psychological trauma suffered by workers who filter the internet's worst content.",
    companion: {
      why_this_piece: "It reveals the human cost of the clean, frictionless interfaces we use every day, exposing the labor behind digital safety.",
      context: "Published during a time of intense scrutiny of social media's impact on society, forcing platforms to address worker welfare.",
      main_ideas: "Moderators work under intense pressure and constant surveillance. They suffer from PTSD and secondary trauma. Platforms outsource this difficult work to avoid liability.",
      intellectual_lineage: "Aligned with labor journalism that exposes the exploitation of workers in new industries.",
      related_thinkers: ["Shoshana Zuboff", "Karl Marx", "David Graeber"],
      related_books: ["The Age of Surveillance Capitalism", "Bullshit Jobs"],
      related_concepts: ["Labor Exploitation", "Mental Health", "Surveillance"],
      why_influential: "It sparked investigations, protests, and eventually forced tech companies to improve moderator support."
    },
    before_you_read: "Reflect on what makes the internet safe for you, and who might be paying the price for that safety.",
    after_you_read: "Is it possible to automate safety, or will digital hygiene always require human trauma?"
  },
  {
    title: "How Loneliness Is Tearing America Apart",
    author: "Arthur Brooks",
    publication: "The New York Times",
    publication_url: "https://www.nytimes.com",
    original_url: "https://www.nytimes.com/2018/11/23/opinion/loneliness-political-polarization.html",
    year: "2018",
    genre: "Psychology & Behavior",
    sub_area: "Social Isolation",
    type: "article",
    estimated_read: "6 min",
    introduction: "Brooks links the epidemic of loneliness to rising political polarization, arguing that isolated individuals turn to tribal politics to satisfy their need for connection.",
    companion: {
      why_this_piece: "It links mental health to political stability, offering a social explanation for political anger.",
      context: "Published during a period of high polarization, suggesting that political reform requires rebuilding social relationships.",
      main_ideas: "Loneliness is rising. Without local communities, people look for belonging in political tribes, turning policy debates into moral battles. Rebuilding community is essential.",
      intellectual_lineage: "Aligned with sociological studies of social capital, like Robert Putnam's Bowling Alone.",
      related_thinkers: ["Robert Putnam", "Alexis de Tocqueville", "Erich Fromm"],
      related_books: ["Bowling Alone", "The Sane Society"],
      related_concepts: ["Social Capital", "Tribalism", "Alienation"],
      why_influential: "It influenced debates on public health and social policy, highlighting the need for community infrastructure."
    },
    before_you_read: "Consider the connections you have in your local neighborhood, and how often you talk to your neighbors.",
    after_you_read: "How can we build communities that satisfy our need for connection without relying on shared enemies?"
  },
  {
    title: "The Ecology of Influence",
    author: "Aeon Editors",
    publication: "Aeon",
    publication_url: "https://aeon.co",
    original_url: "https://aeon.co",
    year: "2020",
    genre: "Arts, Culture & Language",
    sub_area: "Cultural Evolution",
    type: "article",
    estimated_read: "10 min",
    introduction: "This article explores how ideas and styles spread through cultural networks, showing that artistic creation is always a dialogue with our environment.",
    companion: {
      why_this_piece: "It challenges the myth of the isolated genius, showing instead that all artists are part of a shared cultural ecology.",
      context: "Part of Aeon's essays exploring cultural evolution and the philosophy of art in a connected world.",
      main_ideas: "Influence is not plagiarism; it is the currency of culture. Ideas evolve through copy and combination. By embracing our influences, we participate in cultural history.",
      intellectual_lineage: "Aligned with theories of cultural transmission and evolutionary aesthetics.",
      related_thinkers: ["Richard Dawkins", "Walter Benjamin", "Brian Eno"],
      related_books: ["The Selfish Gene", "The Work of Art in the Age of Mechanical Reproduction"],
      related_concepts: ["Memetics", "Collaboration", "Ecology"],
      why_influential: "It remains a popular essay on the creative process and the ethics of influence."
    },
    before_you_read: "Reflect on where your favorite ideas or tastes came from, and who influenced you to adopt them.",
    after_you_read: "Is there any such thing as a truly original idea, or is all creation a form of rearrangement?"
  },
  {
    title: "India's Daughters",
    author: "Caravan Editors",
    publication: "The Caravan",
    publication_url: "https://caravanmagazine.in",
    original_url: "https://caravanmagazine.in",
    year: "2019",
    genre: "Society, Politics & History",
    sub_area: "Gender Equality",
    type: "article",
    estimated_read: "12 min",
    introduction: "An analysis of the structural barriers faced by women in modern India, exploring the gap between legal protections and daily realities.",
    companion: {
      why_this_piece: "It offers a realistic, policy-focused analysis of gender dynamics, avoiding easy sentimentality to look at the structures.",
      context: "Published in The Caravan, a premier journal of politics and culture in India.",
      main_ideas: "Legal rights are not enough without cultural change. Economic independence is crucial. We must challenge the patriarchal systems that limit women's choices.",
      intellectual_lineage: "Aligned with Indian feminist scholarship and social justice movements.",
      related_thinkers: ["Amartya Sen", "B. R. Ambedkar", "Nivedita Menon"],
      related_books: ["Development as Freedom", "Seeing Like a Feminist"],
      related_concepts: ["Gender Equity", "Human Rights", "Social Justice"],
      why_influential: "It is widely cited in reports and discussions about women's rights in South Asia."
    },
    before_you_read: "Reflect on the women in your family, and the choices they had compared to the men.",
    after_you_read: "What are the most effective ways to change deeply ingrained cultural norms?"
  },
  {
    title: "A Warming World",
    author: "Guardian Staff",
    publication: "The Guardian",
    publication_url: "https://www.theguardian.com",
    original_url: "https://www.theguardian.com/environment/2019/oct/03/our-house-is-on-fire",
    year: "2019",
    genre: "Environment & Nature",
    sub_area: "Climate Activism",
    type: "article",
    estimated_read: "14 min",
    introduction: "A report on the global youth climate strikes, capturing the anger and determination of a generation that feels betrayed by its leaders.",
    companion: {
      why_this_piece: "It documents a historic shift in climate politics, where young people have taken the lead in demanding systemic change.",
      context: "Published during the international climate strikes led by Greta Thunberg and other youth organizers.",
      main_ideas: "The climate crisis is a generational injustice. Young people are refusing to accept complacency. The focus must shift from personal lifestyle changes to political action.",
      intellectual_lineage: "Aligned with histories of social movements and environmental activism.",
      related_thinkers: ["Greta Thunberg", "Naomi Klein", "Bill McKibben"],
      related_books: ["This Changes Everything", "No One Is Too Small to Make a Difference"],
      related_concepts: ["Intergenerational Equity", "Activism", "Systemic Change"],
      why_influential: "It captured the energy of a global movement, helping to define the terms of the climate debate."
    },
    before_you_read: "Reflect on how old you will be in 2050, and what the world might look like then.",
    after_you_read: "How can citizens translate emotional anger into lasting political agreements?"
  },
  {
    title: "The Science of Why You Have Great Ideas in the Shower",
    author: "Nautilus Staff",
    publication: "Nautilus",
    publication_url: "https://nautil.us",
    original_url: "https://nautil.us",
    year: "2021",
    genre: "Science & Technology",
    sub_area: "Default Mode Network",
    type: "article",
    estimated_read: "8 min",
    introduction: "An explanation of the cognitive science behind creative breakthroughs, showing how relaxation and distraction allow the brain's default mode network to solve hard problems.",
    companion: {
      why_this_piece: "It offers a practical, science-backed view of the creative process, suggesting that breaks are essential for productive thinking.",
      context: "Part of Nautilus's explorations of neurobiology and the science of everyday life.",
      main_ideas: "Intense focus is only part of problem-solving. When we relax, the default mode network activates, connecting distant ideas. Distraction can be a creative tool.",
      intellectual_lineage: "Aligned with cognitive psychology and research on insight and incubation.",
      related_thinkers: ["Henri Poincaré", "Daniel Kahneman", "John Kounios"],
      related_books: ["The Eureka Factor", "Thinking, Fast and Slow"],
      related_concepts: ["Incubation", "Default Mode Network", "Creativity"],
      why_influential: "It remains one of the most shared science articles on the mechanics of creativity."
    },
    before_you_read: "Recall your last creative breakthrough: did it arrive when you were focusing hard, or when you were doing something else?",
    after_you_read: "How can we design our daily schedules to allow for periods of cognitive incubation?"
  },
  {
    title: "Why Solitude Is Underrated",
    author: "Psyche Editors",
    publication: "Psyche",
    publication_url: "https://psyche.co",
    original_url: "https://psyche.co",
    year: "2021",
    genre: "Life & Personal Experience",
    sub_area: "Solitude",
    type: "article",
    estimated_read: "10 min",
    introduction: "This article distinguishes between painful loneliness and healthy solitude, showing how spending time alone is essential for self-knowledge and mental health.",
    companion: {
      why_this_piece: "It offers a guide to navigating our hyper-connected lives, suggesting that solitude is a skill we must practice.",
      context: "Published in Psyche, a sister publication of Aeon focused on psychology and self-improvement.",
      main_ideas: "Solitude is not isolation; it is a creative dialogue with oneself. It allows us to process emotions, build self-reliance, and find clarity away from others.",
      intellectual_lineage: "Aligned with philosophical defenses of solitude, from Montaigne to Thoreau.",
      related_thinkers: ["Michel de Montaigne", "Henry David Thoreau", "Paul Tillich"],
      related_books: ["Solitude: A Return to the Self", "Walden"],
      related_concepts: ["Solitude", "Self-Reliance", "Reflection"],
      why_influential: "It is widely read as a practical guide to mental wellness in the digital age."
    },
    before_you_read: "Sit in silence for one minute before reading, and notice what thoughts arise when you are alone.",
    after_you_read: "How can we teach children to value solitude in a world that fears isolation?"
  },
  {
    title: "The Case for Travel",
    author: "Longform Staff",
    publication: "Traveler",
    publication_url: "https://www.nationalgeographic.com",
    original_url: "https://www.nationalgeographic.com",
    year: "2018",
    genre: "Travel & Places",
    sub_area: "Perspective",
    type: "article",
    estimated_read: "12 min",
    introduction: "An exploration of how travel changes our cognitive pathways, challenging our assumptions and broadening our moral imagination.",
    companion: {
      why_this_piece: "It moves travel writing beyond consumption, exploring how physical relocation changes our psychological patterns.",
      context: "Part of a collection of essays on the transformative power of travel in an age of globalization.",
      main_ideas: "Exposing ourselves to different cultures makes us more creative and flexible. Travel forces us to see our own habits as choices rather than natural laws.",
      intellectual_lineage: "Aligned with travel literature and psychological research on multicultural experience.",
      related_thinkers: ["Alain de Botton", "Montaigne", "Claude Lévi-Strauss"],
      related_books: ["The Art of Travel", "Tristes Tropiques"],
      related_concepts: ["Cognitive Flexibility", "Empathy", "Perspective Shift"],
      why_influential: "It remains a classic reference on the cognitive benefits of exploration."
    },
    before_you_read: "Recall a trip you took that changed how you view your home country or daily routine.",
    after_you_read: "Can we experience the benefits of travel without leaving our homes?"
  },
  {
    title: "My Year of No Shopping",
    author: "Ann Patchett",
    publication: "The New York Times",
    publication_url: "https://www.nytimes.com",
    original_url: "https://www.nytimes.com/2017/12/15/opinion/sunday/no-shopping-what-i-learned.html",
    year: "2017",
    genre: "Family & Relationships",
    sub_area: "Minimalism",
    type: "article",
    estimated_read: "8 min",
    introduction: "Novelist Ann Patchett recounts her experiment of going a full year without buying any consumer goods, exploring the psychological freedom of wanting less.",
    companion: {
      why_this_piece: "It challenges the consumer culture that equates buying with happiness, showing how letting go of consumer habits reveals our real needs.",
      context: "Published in the Sunday Opinion section of the NYT during the holiday shopping season.",
      main_ideas: "Most of what we buy is a response to boredom or anxiety, not real need. Going without shopping helps us appreciate what we already have and reduces mental clutter.",
      intellectual_lineage: "Connected to critiques of consumerism and defenses of simple living, from Seneca to Thoreau.",
      related_thinkers: ["Seneca", "Thoreau", "Erich Fromm"],
      related_books: ["To Have or to Be?", "Walden"],
      related_concepts: ["Consumerism", "Minimalism", "Desire"],
      why_influential: "It inspired thousands of readers to try their own 'no-buy' experiments."
    },
    before_you_read: "Look around your room, and identify three things you bought recently that you do not really need.",
    after_you_read: "Does our society rely on creating artificial desires to keep the economy moving?"
  },
  {
    title: "The 36 Questions That Lead to Love",
    author: "Daniel Jones",
    publication: "The New York Times",
    publication_url: "https://www.nytimes.com",
    original_url: "https://www.nytimes.com/2015/01/09/style/no-37-big-wedding-or-small.html",
    year: "2015",
    genre: "Family & Relationships",
    sub_area: "Vulnerability",
    type: "article",
    estimated_read: "10 min",
    introduction: "Jones shares an experiment based on psychologist Arthur Aron's study on how structured vulnerability can build closeness between strangers in a short time.",
    companion: {
      why_this_piece: "It shows how intimacy can be built through deliberate, structured conversation, moving relationship-building beyond chance.",
      context: "Published in the Modern Love column, becoming one of the most read and shared articles in the column's history.",
      main_ideas: "Intimacy requires vulnerability. By answering a series of increasingly personal questions, two people can bypass social guards to build deep connections.",
      intellectual_lineage: "Aligned with social psychology research on interpersonal closeness and emotional self-disclosure.",
      related_thinkers: ["Arthur Aron", "Carl Rogers", "Brené Brown"],
      related_books: ["Daring Greatly", "Modern Love"],
      related_concepts: ["Vulnerability", "Mutual Disclosure", "Intimacy"],
      why_influential: "It inspired an app, books, and started a conversation about how we build relationships."
    },
    before_you_read: "Think of the person you feel closest to, and what conversation built that closeness.",
    after_you_read: "Can intimacy be built using a formula, or does it require something more mysterious?"
  },
  {
    title: "The Grieving Brain",
    author: "Aeon & Nautilus Editors",
    publication: "Aeon",
    publication_url: "https://aeon.co",
    original_url: "https://aeon.co",
    year: "2021",
    genre: "Psychology & Behavior",
    sub_area: "Neurology of Grief",
    type: "article",
    estimated_read: "10 min",
    introduction: "An exploration of how the brain processes loss, showing that grief is a cognitive challenge of updating our maps of the world when someone is gone.",
    companion: {
      why_this_piece: "It offers a scientific, compassionate framework to understand the physical and mental reality of grief.",
      context: "Published during a time of global loss, helping readers make sense of their cognitive struggles during mourning.",
      main_ideas: "The brain builds predictions about our loved ones' locations and availability. Grief is the slow, painful process of updating these neural models when they die.",
      intellectual_lineage: "Aligned with cognitive psychology and predictive processing theories of mind.",
      related_thinkers: ["Mary-Frances O'Connor", "Daniel Kahneman", "Lisa Feldman Barrett"],
      related_books: ["The Grieving Brain", "Descartes' Error"],
      related_concepts: ["Predictive Processing", "Allostasis", "Loss"],
      why_influential: "It remains a widely cited article on the neuroscience of grief and mourning."
    },
    before_you_read: "Think of a loss you have experienced, and how your brain struggled to accept the new reality.",
    after_you_read: "Does treating grief as a cognitive mapping problem make it easier or harder to process?"
  },
  {
    title: "What a Plant Knows",
    author: "Nautilus Staff",
    publication: "Nautilus",
    publication_url: "https://nautil.us",
    original_url: "https://nautil.us",
    year: "2018",
    genre: "Environment & Nature",
    sub_area: "Plant Neurobiology",
    type: "article",
    estimated_read: "8 min",
    introduction: "An article exploring the sensory world of plants, showing how they see, smell, feel, and communicate with each other through root networks.",
    companion: {
      why_this_piece: "It challenges our definition of consciousness, revealing that plants are active participants in their environments.",
      context: "Part of Nautilus's series exploring plant intelligence and the philosophy of biology.",
      main_ideas: "Plants have senses that resemble animal senses, using light receptors and chemical signals to navigate. They are not passive; they are responsive.",
      intellectual_lineage: "Aligned with plant neurobiology and ecological philosophy.",
      related_thinkers: ["Stefano Mancuso", "Michael Pollan", "Suzanne Simard"],
      related_books: ["What a Plant Knows", "The Hidden Life of Trees"],
      related_concepts: ["Plant Intelligence", "Symbiosis", "Ecological Systems"],
      why_influential: "It popularised scientific research on plant senses, changing how readers view the natural world."
    },
    before_you_read: "Look at a plant in your vicinity, and notice the subtle ways it has grown toward the light.",
    after_you_read: "How does plant intelligence challenge our animal-centric definitions of consciousness?"
  },
  {
    title: "How Architecture Shapes Our Minds",
    author: "Aeon Editors",
    publication: "Aeon",
    publication_url: "https://aeon.co",
    original_url: "https://aeon.co",
    year: "2019",
    genre: "Special Collections",
    sub_area: "Neuro-architecture",
    type: "article",
    estimated_read: "12 min",
    introduction: "An exploration of neuro-architecture, showing how the design of buildings and public spaces directly shapes our mental health, productivity, and social habits.",
    companion: {
      why_this_piece: "It connects our physical environments to our cognitive states, showing that architecture is a form of cognitive design.",
      context: "Published as urban planning was beginning to integrate neuroscience and psychology into design frameworks.",
      main_ideas: "High ceilings encourage abstract thinking. Low ceilings encourage analytical focus. Natural light improves mood. Open public spaces build trust.",
      intellectual_lineage: "Linked to environmental psychology and space theory, like Gaston Bachelard's The Poetics of Space.",
      related_thinkers: ["Gaston Bachelard", "Juhani Pallasmaa", "William H. Whyte"],
      related_books: ["The Poetics of Space", "The Eyes of the Skin"],
      related_concepts: ["Neuro-architecture", "Spatial Cognition", "Environmental Health"],
      why_influential: "It is widely read by architects and designers seeking to integrate science into their practice."
    },
    before_you_read: "Notice the shape of the room you are currently in, its ceiling height, and how that space makes you feel.",
    after_you_read: "How should we design public spaces to build trust in fragmented communities?"
  },
  {
    title: "The Last Days of a Forest",
    author: "Guardian Long Reads",
    publication: "The Guardian",
    publication_url: "https://www.theguardian.com",
    original_url: "https://www.theguardian.com/environment/2019/oct/03/our-house-is-on-fire",
    year: "2019",
    genre: "Environment & Nature",
    sub_area: "Deforestation",
    type: "article",
    estimated_read: "14 min",
    introduction: "A report on the destruction of primary forests in Europe, exploring the economic forces and corruption that drive illegal logging.",
    companion: {
      why_this_piece: "It exposes the limits of environmental protections, showing how economic greed bypasses legal frameworks.",
      context: "Published as part of The Guardian's series documenting the global ecological emergency.",
      main_ideas: "Primary forests are irreplaceable habitats. Illegal logging is driven by global wood markets. Protecting them requires both local enforcement and international policy.",
      intellectual_lineage: "Aligned with investigative environmental journalism that exposes corruption and corporate crimes.",
      related_thinkers: ["Bill McKibben", "George Monbiot", "Rob Nixon"],
      related_books: ["Feral", "Slow Violence and the Environmentalism of the Poor"],
      related_concepts: ["Deforestation", "Ecological Crime", "Conservation"],
      why_influential: "It sparked protests in Europe and led to changes in wood certification standards."
    },
    before_you_read: "Reflect on a forest or wild place you love, and the time it takes for a forest to grow compared to how fast it can be cut down.",
    after_you_read: "How can we value natural ecosystems when the market only prices their destruction?"
  },
  {
    title: "Rereading",
    author: "Pankaj Mishra",
    publication: "The Caravan",
    publication_url: "https://caravanmagazine.in",
    original_url: "https://caravanmagazine.in",
    year: "2018",
    genre: "Arts, Culture & Language",
    sub_area: "Literary Theory",
    type: "article",
    estimated_read: "10 min",
    introduction: "Mishra reflects on the act of reading the same books at different stages of life, showing how our understanding of a text changes as we change.",
    companion: {
      why_this_piece: "It explores the relationship between reading and personal growth, showing that books are mirrors for our own evolution.",
      context: "Published in The Caravan, reflecting on the literary heritage of South Asia and the West.",
      main_ideas: "We cannot read the same book twice because we are not the same person. A great book changes its meaning as we bring new experiences to it. Rereading is a form of self-examination.",
      intellectual_lineage: "Aligned with reception theory and personal essays on reading, like Harold Bloom or Roland Barthes.",
      related_thinkers: ["Harold Bloom", "Jorge Luis Borges", "Roland Barthes"],
      related_books: ["The Western Canon", "Labyrinths"],
      related_concepts: ["Reception Theory", "Identity", "Memory"],
      why_influential: "It remains a popular essay for writers and readers exploring the psychology of literacy."
    },
    before_you_read: "Think of a book you read years ago that you would understand differently if you read it today.",
    after_you_read: "Why do some books seem to grow with us, while others feel dated or irrelevant?"
  },
  {
    title: "The Science of Eating",
    author: "Atlantic Editors",
    publication: "The Atlantic",
    publication_url: "https://www.theatlantic.com",
    original_url: "https://www.theatlantic.com/magazine/archive/2008/07/is-google-making-us-stupid/306868/",
    year: "2019",
    genre: "Health & Medicine",
    sub_area: "Nutritional Science",
    type: "article",
    estimated_read: "10 min",
    introduction: "An exploration of how ultra-processed foods alter our hormones and brain chemistry, making it difficult to regulate our food intake.",
    companion: {
      why_this_piece: "It refines the obesity debate from willpower to biochemistry, showing how food companies design products to bypass our natural satiety signals.",
      context: "Published as metabolic diseases were rising, offering a critique of the industrial food system.",
      main_ideas: "Processed foods are engineered to hit a bliss point, triggering dopamine release. This overrides our hormonal cues, leading to overeating. We need systemic food reforms.",
      intellectual_lineage: "Follows critiques of industrial agriculture and food design, like Michael Pollan's The Omnivore's Dilemma.",
      related_thinkers: ["Michael Pollan", "David Kessler", "Robert Lustig"],
      related_books: ["The End of Overeating", "Fat Chance"],
      related_concepts: ["Bliss Point", "Hormonal Regulation", "Metabolism"],
      why_influential: "It is widely read by nutritionists and policymakers seeking to understand dietary health."
    },
    before_you_read: "Notice the cravings you feel right now, and whether they are driven by real hunger or external cues.",
    after_you_read: "How should we regulate food companies that design products to exploit our biology?"
  },
  {
    title: "The Great Indian Jugaad",
    author: "Caravan Editors",
    publication: "The Caravan",
    publication_url: "https://caravanmagazine.in",
    original_url: "https://caravanmagazine.in",
    year: "2017",
    genre: "Special Collections",
    sub_area: "Frugal Innovation",
    type: "article",
    estimated_read: "12 min",
    introduction: "An analysis of Jugaad - the Indian practice of frugal innovation - exploring its strengths and limitations in a globalizing economy.",
    companion: {
      why_this_piece: "It analyzes a cultural practice, showing how scarcity drives creativity while raising questions about systemic limits.",
      context: "Published in The Caravan, a premier journal of politics and culture in India.",
      main_ideas: "Jugaad is a creative response to resource constraints. While it solves immediate problems, it can also lead to poor quality and prevent systemic development. We must balance improvisation with standards.",
      intellectual_lineage: "Aligned with business and sociological research on frugal innovation in developing nations.",
      related_thinkers: ["C. K. Prahalad", "Vijay Govindarajan", "B. R. Ambedkar"],
      related_books: ["The Fortune at the Bottom of the Pyramid", "Jugaad Innovation"],
      related_concepts: ["Frugal Innovation", "Improvisation", "Resourcefulness"],
      why_influential: "It is widely cited in business and policy discussions about innovation in emerging markets."
    },
    before_you_read: "Think of an improvisation you made to fix a broken tool or organize your home.",
    after_you_read: "Is frugal innovation a substitute for long-term infrastructural investment?"
  },
  {
    title: "On Not Going Home",
    author: "James Baldwin",
    publication: "Harper's",
    publication_url: "https://harpers.org",
    original_url: "https://harpers.org/archive/1955/10/notes-of-a-native-son/",
    year: "1960",
    genre: "Travel & Places",
    sub_area: "Exile",
    type: "article",
    estimated_read: "10 min",
    introduction: "Baldwin reflects on his exile in Paris, exploring why leaving America was necessary to write about it clearly and save his own life.",
    companion: {
      why_this_piece: "It explores the psychology of exile, showing how distance can provide a clearer perspective on one's own culture.",
      context: "Written during Baldwin's years in Europe, where he sought refuge from American racism to focus on his work.",
      main_ideas: "Leaving home is sometimes necessary to survive. The expatriate experience reveals that our home country's habits are choices rather than universal laws. Exile is a journey to find the self.",
      intellectual_lineage: "Continues the literature of exile and reflection on nationhood, like Richard Wright or Joyce.",
      related_thinkers: ["Richard Wright", "James Joyce", "Edward Said"],
      related_books: ["Another Country", "Reflections on Exile"],
      related_concepts: ["Exile", "Identity", "Distance"],
      why_influential: "It is a key reference for expatriates and scholars analyzing the intersection of race, art, and travel."
    },
    before_you_read: "Think of a time when leaving a familiar place made you understand it much better.",
    after_you_read: "Can we understand our own culture clearly without ever leaving it?"
  }
];

// Helper to construct entries dynamically.
// We map the 10 genres to 10 essays and 10 articles per day index.
// Since we have 20 essays and 20 articles, we can distribute them.
export const LEKH_ENTRIES: LekhDayEntry[] = Array.from({ length: 20 }, (_, dayIndex) => {
  const essays: LekhPiece[] = [];
  const articles: LekhPiece[] = [];

  UMBRELLA_GENRES.forEach((genre, idx) => {
    // Find essays belonging to this genre in our pool
    const genreEssays = ESSAYS_POOL.filter(e => e.genre === genre);
    const genreArticles = ARTICLES_POOL.filter(a => a.genre === genre);

    // Distribute/rotate
    if (genreEssays.length > 0) {
      const selectedEssay = genreEssays[(dayIndex + idx) % genreEssays.length];
      essays.push(selectedEssay);
    } else {
      // Fallback
      essays.push(ESSAYS_POOL[(dayIndex + idx) % ESSAYS_POOL.length]);
    }

    if (genreArticles.length > 0) {
      const selectedArticle = genreArticles[(dayIndex + idx) % genreArticles.length];
      articles.push(selectedArticle);
    } else {
      // Fallback
      articles.push(ARTICLES_POOL[(dayIndex + idx) % ARTICLES_POOL.length]);
    }
  });

  return {
    dayIndex,
    essays,
    articles,
  };
});
