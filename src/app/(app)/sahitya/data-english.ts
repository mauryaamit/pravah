// src/app/(app)/sahitya/data-english.ts
// Generated database containing 60 English writers

export type Era = 'contemporary' | 'classical';

export interface EnglishWriter {
  dayIndex: number;
  era: Era;
  nationality: string;
  name: string;
  born: string;
  died?: string;
  period: string;
  summary: string;
  portrait: string;
  signature_work: {
    title: string;
    year?: string;
    what_it_is: string;
    why_it_matters: string;
    one_passage?: string;
  };
  what_they_knew: string;
  must_read: string[];
  read_if_curious: string;
}

export const ENGLISH_WRITERS: EnglishWriter[] = [
  {
    dayIndex: 1,
    era: 'contemporary',
    nationality: "American",
    name: "Toni Morrison",
    born: "1931",
    died: "2019",
    period: "Modernist African-American",
    summary: "Toni Morrison is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Toni Morrison (1931 - 2019) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Beloved",
      what_it_is: "A novel depicting the haunting legacy of slavery",
      why_it_matters: "Won the Nobel Prize in Literature",
      one_passage: "Sweet home is not a place; it is a ghost that follows you."
    },
    what_they_knew: "Toni Morrison knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Beloved', 'Song of Solomon'],
    read_if_curious: "Read Beloved first."
  },
  {
    dayIndex: 2,
    era: 'contemporary',
    nationality: "American",
    name: "Cormac McCarthy",
    born: "1933",
    died: "2023",
    period: "Western Gothic",
    summary: "Cormac McCarthy is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Cormac McCarthy (1933 - 2023) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Road",
      what_it_is: "A post-apocalyptic journey of a father and son",
      why_it_matters: "Captured existential survival and raw nature",
      one_passage: "You have to carry the fire inside."
    },
    what_they_knew: "Cormac McCarthy knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Road', 'Blood Meridian'],
    read_if_curious: "Read The Road first."
  },
  {
    dayIndex: 3,
    era: 'contemporary',
    nationality: "American",
    name: "Philip Roth",
    born: "1933",
    died: "2018",
    period: "Jewish-American Realism",
    summary: "Philip Roth is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Philip Roth (1933 - 2018) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "American Pastoral",
      what_it_is: "A family's tragedy in the backdrop of 1960s riots",
      why_it_matters: "Exposed the collapse of the American Dream",
      one_passage: "The tragedy of life is that we get people wrong."
    },
    what_they_knew: "Philip Roth knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['American Pastoral', "Portnoy's Complaint"],
    read_if_curious: "Read American Pastoral first."
  },
  {
    dayIndex: 4,
    era: 'contemporary',
    nationality: "American",
    name: "Don DeLillo",
    born: "1936",
    period: "Postmodernism",
    summary: "Don DeLillo is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Don DeLillo (1936 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "White Noise",
      what_it_is: "A satire of consumerism, media, and death anxiety",
      why_it_matters: "Captured modern paranoia and media oversaturation",
      one_passage: "The family is the cradle of world misinformation."
    },
    what_they_knew: "Don DeLillo knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['White Noise', 'Underworld'],
    read_if_curious: "Read White Noise first."
  },
  {
    dayIndex: 5,
    era: 'contemporary',
    nationality: "American",
    name: "Joan Didion",
    born: "1934",
    died: "2021",
    period: "New Journalism / Essays",
    summary: "Joan Didion is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Joan Didion (1934 - 2021) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Slouching Towards Bethlehem",
      what_it_is: "Essays capturing the cultural collapse of 1960s California",
      why_it_matters: "Revolutionized literary journalism with personal style",
      one_passage: "We tell ourselves stories in order to live."
    },
    what_they_knew: "Joan Didion knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Slouching Towards Bethlehem', 'The Year of Magical Thinking'],
    read_if_curious: "Read the essays first."
  },
  {
    dayIndex: 6,
    era: 'contemporary',
    nationality: "American",
    name: "David Foster Wallace",
    born: "1962",
    died: "2008",
    period: "Post-postmodernism",
    summary: "David Foster Wallace is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "David Foster Wallace (1962 - 2008) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Infinite Jest",
      what_it_is: "A massive novel about tennis, addiction, and entertainment",
      why_it_matters: "Exposed the hollow core of modern pleasure seeking",
      one_passage: "This is water; the hardest thing is to be present."
    },
    what_they_knew: "David Foster Wallace knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Infinite Jest', 'Consider the Lobster'],
    read_if_curious: "Read his essays first."
  },
  {
    dayIndex: 7,
    era: 'contemporary',
    nationality: "British",
    name: "Zadie Smith",
    born: "1975",
    period: "Hysterical Realism",
    summary: "Zadie Smith is an influential contemporary British writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Zadie Smith (1975 - present) is a leading British voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "White Teeth",
      what_it_is: "A vibrant novel tracing immigrant families in London",
      why_it_matters: "Captured the multicultural complexity of modern Britain",
      one_passage: "You must look at your history before you can leave it."
    },
    what_they_knew: "Zadie Smith knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['White Teeth', 'On Beauty'],
    read_if_curious: "Read White Teeth first."
  },
  {
    dayIndex: 8,
    era: 'contemporary',
    nationality: "British / Japanese",
    name: "Kazuo Ishiguro",
    born: "1954",
    period: "Lyrical Modernism",
    summary: "Kazuo Ishiguro is an influential contemporary British / Japanese writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Kazuo Ishiguro (1954 - present) is a leading British / Japanese voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Remains of the Day",
      what_it_is: "A butler reflecting on his loyalty and lost love",
      why_it_matters: "Won the Nobel Prize in Literature",
      one_passage: "There is a dignity in keeping quiet."
    },
    what_they_knew: "Kazuo Ishiguro knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Remains of the Day', 'Never Let Me Go'],
    read_if_curious: "Read Remains of the Day first."
  },
  {
    dayIndex: 9,
    era: 'contemporary',
    nationality: "British",
    name: "Hilary Mantel",
    born: "1952",
    died: "2022",
    period: "Historical Fiction",
    summary: "Hilary Mantel is an influential contemporary British writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Hilary Mantel (1952 - 2022) is a leading British voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Wolf Hall",
      what_it_is: "A novel depicting the rise of Thomas Cromwell",
      why_it_matters: "Won two Booker Prizes for her Tudor trilogy",
      one_passage: "History is what the survivors agree upon."
    },
    what_they_knew: "Hilary Mantel knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Wolf Hall', 'Bring Up the Bodies'],
    read_if_curious: "Read Wolf Hall first."
  },
  {
    dayIndex: 10,
    era: 'contemporary',
    nationality: "Irish",
    name: "Colm Tóibín",
    born: "1955",
    period: "Realism",
    summary: "Colm Tóibín is an influential contemporary Irish writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Colm Tóibín (1955 - present) is a leading Irish voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Brooklyn",
      what_it_is: "A young Irish woman migrating to New York in the 1950s",
      why_it_matters: "Exquisite, quiet style depicting exile and duty",
      one_passage: "Home is where the silence is familiar."
    },
    what_they_knew: "Colm Tóibín knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Brooklyn', 'The Master'],
    read_if_curious: "Read Brooklyn first."
  },
  {
    dayIndex: 11,
    era: 'contemporary',
    nationality: "British",
    name: "Ian McEwan",
    born: "1948",
    period: "Psychological Realism",
    summary: "Ian McEwan is an influential contemporary British writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Ian McEwan (1948 - present) is a leading British voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Atonement",
      what_it_is: "A novel about a young girl's lie that ruins lives",
      why_it_matters: "Explored guilt, class, and the authority of the writer",
      one_passage: "The problem of writing is that you cannot undo the word."
    },
    what_they_knew: "Ian McEwan knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Atonement', 'Saturday'],
    read_if_curious: "Read Atonement first."
  },
  {
    dayIndex: 12,
    era: 'contemporary',
    nationality: "British",
    name: "Martin Amis",
    born: "1949",
    died: "2023",
    period: "Satiric Modernism",
    summary: "Martin Amis is an influential contemporary British writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Martin Amis (1949 - 2023) is a leading British voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Money",
      what_it_is: "A dark comedy about consumerism and filmmaking",
      why_it_matters: "Acclaimed for his pyrotechnic, highly stylized prose",
      one_passage: "Money does not talk; it screams in your face."
    },
    what_they_knew: "Martin Amis knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Money', 'London Fields'],
    read_if_curious: "Read Money first."
  },
  {
    dayIndex: 13,
    era: 'contemporary',
    nationality: "British",
    name: "Julian Barnes",
    born: "1946",
    period: "Postmodern Realism",
    summary: "Julian Barnes is an influential contemporary British writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Julian Barnes (1946 - present) is a leading British voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Sense of an Ending",
      what_it_is: "A retired man reflecting on his youth and a suicide",
      why_it_matters: "Won the Booker Prize and explored memory distortion",
      one_passage: "History is that certainty produced at the point of doubt."
    },
    what_they_knew: "Julian Barnes knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Sense of an Ending', "Flaubert's Parrot"],
    read_if_curious: "Read Sense of an Ending first."
  },
  {
    dayIndex: 14,
    era: 'contemporary',
    nationality: "British / Scottish",
    name: "Ali Smith",
    born: "1962",
    period: "Postmodernism",
    summary: "Ali Smith is an influential contemporary British / Scottish writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Ali Smith (1962 - present) is a leading British / Scottish voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Autumn",
      what_it_is: "A novel exploring Brexit, art, and aging friendship",
      why_it_matters: "Captures contemporary political crisis with lyrical play",
      one_passage: "Time is a circle that wraps around our mistakes."
    },
    what_they_knew: "Ali Smith knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Autumn', 'How to be Both'],
    read_if_curious: "Read How to be Both first."
  },
  {
    dayIndex: 15,
    era: 'contemporary',
    nationality: "Nigerian",
    name: "Chimamanda Ngozi Adichie",
    born: "1977",
    period: "African Realism",
    summary: "Chimamanda Ngozi Adichie is an influential contemporary Nigerian writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Chimamanda Ngozi Adichie (1977 - present) is a leading Nigerian voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Half of a Yellow Sun",
      what_it_is: "A novel about the Biafran war and domestic lives",
      why_it_matters: "Brought contemporary Nigerian voices to global acclaim",
      one_passage: "The problem of a single story is that it robs dignity."
    },
    what_they_knew: "Chimamanda Ngozi Adichie knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Half of a Yellow Sun', 'Americanah'],
    read_if_curious: "Read Half of a Yellow Sun first."
  },
  {
    dayIndex: 16,
    era: 'contemporary',
    nationality: "American / Nigerian",
    name: "Teju Cole",
    born: "1975",
    period: "Essayist / Flaneur",
    summary: "Teju Cole is an influential contemporary American / Nigerian writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Teju Cole (1975 - present) is a leading American / Nigerian voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Open City",
      what_it_is: "A doctor walking New York, reflecting on history",
      why_it_matters: "Synthesized photography and essayistic walking fiction",
      one_passage: "To walk is to read the city's scars."
    },
    what_they_knew: "Teju Cole knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Known and Strange Things', 'Blind Spot'],
    read_if_curious: "Read Open City first."
  },
  {
    dayIndex: 17,
    era: 'contemporary',
    nationality: "Zimbabwean",
    name: "NoViolet Bulawayo",
    born: "1981",
    period: "Contemporary African",
    summary: "NoViolet Bulawayo is an influential contemporary Zimbabwean writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "NoViolet Bulawayo (1981 - present) is a leading Zimbabwean voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "We Need New Names",
      what_it_is: "A girl's migration from Zimbabwe to America",
      why_it_matters: "Nominated for the Booker Prize, depicting immigrant loss",
      one_passage: "You cannot run away from your country's hunger."
    },
    what_they_knew: "NoViolet Bulawayo knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['We Need New Names', 'Glory'],
    read_if_curious: "Read We Need New Names first."
  },
  {
    dayIndex: 18,
    era: 'contemporary',
    nationality: "British",
    name: "Bernardine Evaristo",
    born: "1959",
    period: "Verse Novel",
    summary: "Bernardine Evaristo is an influential contemporary British writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Bernardine Evaristo (1959 - present) is a leading British voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Girl, Woman, Other",
      what_it_is: "Twelve characters, mostly black women, in Britain",
      why_it_matters: "Won the Booker Prize, celebrating diverse black voices",
      one_passage: "We are not one story; we are a choir of voices."
    },
    what_they_knew: "Bernardine Evaristo knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Girl, Woman, Other', 'Mr Loverman'],
    read_if_curious: "Read Girl, Woman, Other first."
  },
  {
    dayIndex: 19,
    era: 'contemporary',
    nationality: "American / Vietnamese",
    name: "Ocean Vuong",
    born: "1988",
    period: "Lyrical Poetry & Prose",
    summary: "Ocean Vuong is an influential contemporary American / Vietnamese writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Ocean Vuong (1988 - present) is a leading American / Vietnamese voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "On Earth We're Briefly Gorgeous",
      what_it_is: "A letter from a son to his illiterate mother",
      why_it_matters: "Infused prose with intense, poetic, and immigrant grief",
      one_passage: "The word is a bridge built out of breath."
    },
    what_they_knew: "Ocean Vuong knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ["On Earth We're Briefly Gorgeous", 'Night Sky with Exit Wounds'],
    read_if_curious: "Read the novel first."
  },
  {
    dayIndex: 20,
    era: 'contemporary',
    nationality: "Native American",
    name: "Tommy Orange",
    born: "1982",
    period: "Indigenous Realism",
    summary: "Tommy Orange is an influential contemporary Native American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Tommy Orange (1982 - present) is a leading Native American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "There There",
      what_it_is: "Twelve Native Americans heading to an Oakland Powwow",
      why_it_matters: "Captured urban indigenous identity and historical trauma",
      one_passage: "We have been trying to return to a land that was erased."
    },
    what_they_knew: "Tommy Orange knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['There There', 'Wandering Stars'],
    read_if_curious: "Read There There first."
  },
  {
    dayIndex: 21,
    era: 'contemporary',
    nationality: "American",
    name: "Richard Powers",
    born: "1957",
    period: "Ecological Fiction",
    summary: "Richard Powers is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Richard Powers (1957 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Overstory",
      what_it_is: "A novel exploring the relationship between humans and trees",
      why_it_matters: "Won the Pulitzer Prize, advocating ecological awareness",
      one_passage: "Trees are the ancient memory of the planet."
    },
    what_they_knew: "Richard Powers knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Overstory', 'Bewilderment'],
    read_if_curious: "Read The Overstory first."
  },
  {
    dayIndex: 22,
    era: 'contemporary',
    nationality: "American",
    name: "Jonathan Franzen",
    born: "1959",
    period: "Social Realism",
    summary: "Jonathan Franzen is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Jonathan Franzen (1959 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Corrections",
      what_it_is: "A midwestern family gathering for a final Christmas",
      why_it_matters: "A major realist novel of family and globalization",
      one_passage: "The corrections we make are often the source of error."
    },
    what_they_knew: "Jonathan Franzen knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Corrections', 'Freedom'],
    read_if_curious: "Read The Corrections first."
  },
  {
    dayIndex: 23,
    era: 'contemporary',
    nationality: "American",
    name: "Jennifer Egan",
    born: "1962",
    period: "Experimental Realism",
    summary: "Jennifer Egan is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Jennifer Egan (1962 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "A Visit from the Goon Squad",
      what_it_is: "Interconnected stories exploring music, time, and tech",
      why_it_matters: "Won the Pulitzer Prize for its structural innovation",
      one_passage: "Time is a goon that steals your beauty."
    },
    what_they_knew: "Jennifer Egan knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['A Visit from the Goon Squad', 'The Candy House'],
    read_if_curious: "Read Goon Squad first."
  },
  {
    dayIndex: 24,
    era: 'contemporary',
    nationality: "American",
    name: "Marilynne Robinson",
    born: "1943",
    period: "Lyrical / Spiritual Realism",
    summary: "Marilynne Robinson is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Marilynne Robinson (1943 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Gilead",
      what_it_is: "An aging pastor writing a letter to his young son",
      why_it_matters: "Exquisite, quiet prose exploring grace and mortality",
      one_passage: "Grace is the only thing that survives our justice."
    },
    what_they_knew: "Marilynne Robinson knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Gilead', 'Housekeeping'],
    read_if_curious: "Read Gilead first."
  },
  {
    dayIndex: 25,
    era: 'contemporary',
    nationality: "American",
    name: "Annie Proulx",
    born: "1935",
    period: "Western Realism",
    summary: "Annie Proulx is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Annie Proulx (1935 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Shipping News",
      what_it_is: "A depressed man rebuilding his life in Newfoundland",
      why_it_matters: "Won the Pulitzer Prize, writing with rough, poetic force",
      one_passage: "The weather in a place shapes the geography of the soul."
    },
    what_they_knew: "Annie Proulx knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Shipping News', 'Close Range'],
    read_if_curious: "Read the short stories first."
  },
  {
    dayIndex: 26,
    era: 'contemporary',
    nationality: "Canadian",
    name: "Alice Munro",
    born: "1931",
    died: "2024",
    period: "Short Story Realism",
    summary: "Alice Munro is an influential contemporary Canadian writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Alice Munro (1931 - 2024) is a leading Canadian voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Dear Life",
      what_it_is: "Stories capturing the quiet, tragic turns of ordinary lives",
      why_it_matters: "Won the Nobel Prize in Literature for short fiction",
      one_passage: "The short story is a house with many windows."
    },
    what_they_knew: "Alice Munro knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Dear Life', 'Hateship, Friendship, Courtship, Loveship, Marriage'],
    read_if_curious: "Read any collection first."
  },
  {
    dayIndex: 27,
    era: 'contemporary',
    nationality: "Canadian",
    name: "Margaret Atwood",
    born: "1939",
    period: "Speculative Fiction",
    summary: "Margaret Atwood is an influential contemporary Canadian writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Margaret Atwood (1939 - present) is a leading Canadian voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Handmaid's Tale",
      what_it_is: "A dystopian novel exploring patriarchy and state power",
      why_it_matters: "A leading feminist voice in world literature",
      one_passage: "Nolite te bastardes carborundorum."
    },
    what_they_knew: "Margaret Atwood knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ["The Handmaid's Tale", 'Oryx and Crake'],
    read_if_curious: "Read The Handmaid's Tale first."
  },
  {
    dayIndex: 28,
    era: 'contemporary',
    nationality: "American",
    name: "Colson Whitehead",
    born: "1969",
    period: "Historical / Neo-Slave",
    summary: "Colson Whitehead is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Colson Whitehead (1969 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Underground Railroad",
      what_it_is: "A novel imagining the escape route as a literal train",
      why_it_matters: "Won two Pulitzer Prizes for his historical novels",
      one_passage: "To survive, you must run through the dark."
    },
    what_they_knew: "Colson Whitehead knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Underground Railroad', 'The Nickel Boys'],
    read_if_curious: "Read The Underground Railroad first."
  },
  {
    dayIndex: 29,
    era: 'contemporary',
    nationality: "American",
    name: "Edward P. Jones",
    born: "1950",
    period: "African-American Realism",
    summary: "Edward P. Jones is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Edward P. Jones (1950 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Known World",
      what_it_is: "A novel depicting black slaveholders in Virginia",
      why_it_matters: "Won the Pulitzer Prize for its complex moral landscape",
      one_passage: "History is a book of names that were erased."
    },
    what_they_knew: "Edward P. Jones knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Known World', 'Lost in the City'],
    read_if_curious: "Read The Known World first."
  },
  {
    dayIndex: 30,
    era: 'contemporary',
    nationality: "American",
    name: "James Baldwin (late work)",
    born: "1924",
    died: "1987",
    period: "Civil Rights / Essays",
    summary: "James Baldwin (late work) is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "James Baldwin (late work) (1924 - 1987) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "If Beale Street Could Talk",
      what_it_is: "A novel exploring love and systemic racism in Harlem",
      why_it_matters: "A powerful voice of the civil rights struggle",
      one_passage: "Love does not begin and end the way we think."
    },
    what_they_knew: "James Baldwin (late work) knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['If Beale Street Could Talk', 'Just Above My Head'],
    read_if_curious: "Read Beale Street first."
  },
  {
    dayIndex: 31,
    era: 'contemporary',
    nationality: "American",
    name: "Thomas Pynchon",
    born: "1937",
    period: "Postmodernism",
    summary: "Thomas Pynchon is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Thomas Pynchon (1937 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Gravity's Rainbow",
      what_it_is: "A complex postmodern novel about V-2 rockets in WWII",
      why_it_matters: "Acclaimed for its encyclopedic scope and paranoia",
      one_passage: "A screaming comes across the sky."
    },
    what_they_knew: "Thomas Pynchon knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ["Gravity's Rainbow", 'The Crying of Lot 49'],
    read_if_curious: "Read Lot 49 first."
  },
  {
    dayIndex: 32,
    era: 'contemporary',
    nationality: "American",
    name: "George Saunders",
    born: "1958",
    period: "Satiric Surrealism",
    summary: "George Saunders is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "George Saunders (1958 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Lincoln in the Bardo",
      what_it_is: "A polyphonic novel about Abraham Lincoln mourning his son",
      why_it_matters: "Won the Booker Prize, blending history and Buddhist bardo",
      one_passage: "We are all in the process of leaving."
    },
    what_they_knew: "George Saunders knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Lincoln in the Bardo', 'Tenth of December'],
    read_if_curious: "Read Tenth of December first."
  },
  {
    dayIndex: 33,
    era: 'contemporary',
    nationality: "American",
    name: "Donna Tartt",
    born: "1963",
    period: "Neo-Romanticism",
    summary: "Donna Tartt is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Donna Tartt (1963 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Secret History",
      what_it_is: "A murder mystery among elite classics students in Vermont",
      why_it_matters: "A modern cult classic exploring beauty and terror",
      one_passage: "Beauty is terror. Whatever we call beautiful, we quiver before it."
    },
    what_they_knew: "Donna Tartt knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Secret History', 'The Goldfinch'],
    read_if_curious: "Read The Secret History first."
  },
  {
    dayIndex: 34,
    era: 'contemporary',
    nationality: "American",
    name: "Jeffrey Eugenides",
    born: "1960",
    period: "Contemporary Realism",
    summary: "Jeffrey Eugenides is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Jeffrey Eugenides (1960 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Middlesex",
      what_it_is: "A family saga about a Greek-American intersex narrator",
      why_it_matters: "Won the Pulitzer Prize for its epic scope and gender themes",
      one_passage: "Sing now, Muse, and through me tell the story."
    },
    what_they_knew: "Jeffrey Eugenides knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Middlesex', 'The Virgin Suicides'],
    read_if_curious: "Read Middlesex first."
  },
  {
    dayIndex: 35,
    era: 'contemporary',
    nationality: "Canadian",
    name: "Michael Ondaatje",
    born: "1943",
    period: "Lyrical Realism",
    summary: "Michael Ondaatje is an influential contemporary Canadian writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Michael Ondaatje (1943 - present) is a leading Canadian voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The English Patient",
      what_it_is: "Four damaged souls sheltering in an Italian villa in WWII",
      why_it_matters: "Won the Booker Prize for its poetic style and memory themes",
      one_passage: "We are the real countries, not the boundaries."
    },
    what_they_knew: "Michael Ondaatje knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The English Patient', "Anil's Ghost"],
    read_if_curious: "Read The English Patient first."
  },
  {
    dayIndex: 36,
    era: 'contemporary',
    nationality: "British",
    name: "David Mitchell",
    born: "1969",
    period: "Postmodern Polyphony",
    summary: "David Mitchell is an influential contemporary British writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "David Mitchell (1969 - present) is a leading British voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Cloud Atlas",
      what_it_is: "Six nested stories tracing human connection across time",
      why_it_matters: "Famous for its nested, genre-bending structural design",
      one_passage: "What is an ocean but a multitude of drops?"
    },
    what_they_knew: "David Mitchell knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Cloud Atlas', 'The Bone Clocks'],
    read_if_curious: "Read Cloud Atlas first."
  },
  {
    dayIndex: 37,
    era: 'contemporary',
    nationality: "American",
    name: "Jonathan Lethem",
    born: "1964",
    period: "Contemporary Realism / Noir",
    summary: "Jonathan Lethem is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Jonathan Lethem (1964 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Motherless Brooklyn",
      what_it_is: "A detective with Tourette's investigates his mentor's murder",
      why_it_matters: "Won the National Book Critics Circle Award, blending noir and psychology",
      one_passage: "Language is a series of corrections we make to silence."
    },
    what_they_knew: "Jonathan Lethem knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Motherless Brooklyn', 'The Fortress of Solitude'],
    read_if_curious: "Read Motherless Brooklyn first."
  },
  {
    dayIndex: 38,
    era: 'contemporary',
    nationality: "British",
    name: "Neil Gaiman",
    born: "1960",
    period: "Modern Fantasy",
    summary: "Neil Gaiman is an influential contemporary British writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Neil Gaiman (1960 - present) is a leading British voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "American Gods",
      what_it_is: "A battle between old and new gods in modern America",
      why_it_matters: "A premier modern fantasy, celebrating myth and belief",
      one_passage: "A town is not a place; it is a state of mind."
    },
    what_they_knew: "Neil Gaiman knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['American Gods', 'The Ocean at the End of the Lane'],
    read_if_curious: "Read The Ocean first."
  },
  {
    dayIndex: 39,
    era: 'contemporary',
    nationality: "American",
    name: "Dave Eggers",
    born: "1970",
    period: "Experimental Memoir / Satire",
    summary: "Dave Eggers is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Dave Eggers (1970 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "A Heartbreaking Work of Staggering Genius",
      what_it_is: "A memoir of raising his younger brother after their parents' death",
      why_it_matters: "Revolutionized contemporary memoir with self-referential irony",
      one_passage: "We are all writing the same book of memory."
    },
    what_they_knew: "Dave Eggers knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['A Heartbreaking Work', 'The Circle'],
    read_if_curious: "Read the memoir first."
  },
  {
    dayIndex: 40,
    era: 'contemporary',
    nationality: "American",
    name: "Ted Chiang",
    born: "1967",
    period: "Speculative Fiction",
    summary: "Ted Chiang is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Ted Chiang (1967 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Stories of Your Life and Others",
      what_it_is: "A collection of mind-bending science fiction stories",
      why_it_matters: "Acclaimed for combining deep science with human emotion",
      one_passage: "Language is the thread that binds time."
    },
    what_they_knew: "Ted Chiang knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Stories of Your Life', 'Exhalation'],
    read_if_curious: "Read Stories of Your Life first."
  },
  {
    dayIndex: 41,
    era: 'contemporary',
    nationality: "American",
    name: "Elizabeth Strout",
    born: "1956",
    period: "Minimalist Realism",
    summary: "Elizabeth Strout is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Elizabeth Strout (1956 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Olive Kitteridge",
      what_it_is: "Thirteen connected stories about a retired teacher in Maine",
      why_it_matters: "Won the Pulitzer Prize, capturing small-town human complexity",
      one_passage: "There is no life that is not simple and tragic."
    },
    what_they_knew: "Elizabeth Strout knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Olive Kitteridge', 'My Name is Lucy Barton'],
    read_if_curious: "Read Olive Kitteridge first."
  },
  {
    dayIndex: 42,
    era: 'contemporary',
    nationality: "American",
    name: "Barbara Kingsolver",
    born: "1955",
    period: "Social Realism",
    summary: "Barbara Kingsolver is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Barbara Kingsolver (1955 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Poisonwood Bible",
      what_it_is: "A missionary family's tragedy in the Belgian Congo",
      why_it_matters: "A powerful post-colonial critique of cultural arrogance",
      one_passage: "The forest does not ask you for your name."
    },
    what_they_knew: "Barbara Kingsolver knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Poisonwood Bible', 'Demon Copperhead'],
    read_if_curious: "Read Poisonwood Bible first."
  },
  {
    dayIndex: 43,
    era: 'contemporary',
    nationality: "American",
    name: "Anthony Doerr",
    born: "1973",
    period: "Lyrical Realism",
    summary: "Anthony Doerr is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Anthony Doerr (1973 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "All the Light We Cannot See",
      what_it_is: "A blind French girl and a German orphan boy in occupied France",
      why_it_matters: "Won the Pulitzer Prize for its structural design and prose",
      one_passage: "The brain is locked in total darkness, yet it constructs light."
    },
    what_they_knew: "Anthony Doerr knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['All the Light We Cannot See', 'Cloud Cuckoo Land'],
    read_if_curious: "Read All the Light first."
  },
  {
    dayIndex: 44,
    era: 'contemporary',
    nationality: "American",
    name: "Karen Russell",
    born: "1981",
    period: "Magical Realism",
    summary: "Karen Russell is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Karen Russell (1981 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "Swamplandia!",
      what_it_is: "A family of alligator wrestlers dealing with grief in Florida",
      why_it_matters: "Finalist for the Pulitzer Prize, blending myth and ecology",
      one_passage: "The swamp is a place where boundaries melt."
    },
    what_they_knew: "Karen Russell knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['Swamplandia!', 'Vampires in the Lemon Grove'],
    read_if_curious: "Read the short stories first."
  },
  {
    dayIndex: 45,
    era: 'contemporary',
    nationality: "American",
    name: "Paul Beatty",
    born: "1962",
    period: "Satire",
    summary: "Paul Beatty is an influential contemporary American writer, known for their narrative innovation and exploration of modern identity.",
    portrait: "Paul Beatty (1962 - present) is a leading American voice of modern literature. Born in the context of rapid global change, they have shaped contemporary fiction by exploring themes of history, displacement, and human relationships.\n\nTheir prose is characterized by its stylistic innovation, its psychological complexity, and its deep engagement with the moral questions of our time. By challenging traditional narrative structures, they have expanded the boundaries of what the novel can capture, offering a key reference for understanding the anxieties of contemporary life.",
    signature_work: {
      title: "The Sellout",
      what_it_is: "A biting satire on race and segregation in a California town",
      why_it_matters: "First American writer to win the Booker Prize",
      one_passage: "Memory is a room with a lock."
    },
    what_they_knew: "Paul Beatty knew that modern human relationships are shaped by the pressure of historical memory and systemic divides, which they detailed in their writing.",
    must_read: ['The Sellout'],
    read_if_curious: "Read The Sellout first."
  },
  {
    dayIndex: 46,
    era: 'classical',
    nationality: "British",
    name: "Shakespeare",
    born: "1564",
    died: "1616",
    period: "Elizabethan Drama",
    summary: "Shakespeare is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Shakespeare (1564 - 1616) was a monumental figure in the history of English literature. Belonging to the Elizabethan Drama era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Hamlet",
      what_it_is: "The tragedy of the prince of Denmark",
      why_it_matters: "The greatest playwright in the English language",
      one_passage: "To be or not to be, that is the question."
    },
    what_they_knew: "Shakespeare knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Hamlet', 'King Lear', 'The Tempest'],
    read_if_curious: "Read Hamlet first."
  },
  {
    dayIndex: 47,
    era: 'classical',
    nationality: "British",
    name: "Milton",
    born: "1608",
    died: "1674",
    period: "Puritan Epic",
    summary: "Milton is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Milton (1608 - 1674) was a monumental figure in the history of English literature. Belonging to the Puritan Epic era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Paradise Lost",
      what_it_is: "The epic poem describing the fall of man",
      why_it_matters: "Master of blank verse and classical republicanism",
      one_passage: "Better to reign in Hell than serve in Heaven."
    },
    what_they_knew: "Milton knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Paradise Lost', 'Areopagitica'],
    read_if_curious: "Read Paradise Lost first."
  },
  {
    dayIndex: 48,
    era: 'classical',
    nationality: "British",
    name: "Chaucer",
    born: "1343",
    died: "1400",
    period: "Middle English Poetry",
    summary: "Chaucer is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Chaucer (1343 - 1400) was a monumental figure in the history of English literature. Belonging to the Middle English Poetry era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Canterbury Tales",
      what_it_is: "Stories told by pilgrims heading to Canterbury",
      why_it_matters: "Established English as a literary language",
      one_passage: "The life so short, the craft so long to learn."
    },
    what_they_knew: "Chaucer knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['The Canterbury Tales'],
    read_if_curious: "Read the General Prologue first."
  },
  {
    dayIndex: 49,
    era: 'classical',
    nationality: "British",
    name: "John Donne",
    born: "1572",
    died: "1631",
    period: "Metaphysical Poetry",
    summary: "John Donne is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "John Donne (1572 - 1631) was a monumental figure in the history of English literature. Belonging to the Metaphysical Poetry era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Holy Sonnets",
      what_it_is: "Sonnets exploring divine love and mortality",
      why_it_matters: "Pioneered Metaphysical poetry, combining intellect and passion",
      one_passage: "No man is an island, entire of itself."
    },
    what_they_knew: "John Donne knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Holy Sonnets', 'Songs and Sonnets'],
    read_if_curious: "Read 'A Valediction' first."
  },
  {
    dayIndex: 50,
    era: 'classical',
    nationality: "British",
    name: "Alexander Pope",
    born: "1688",
    died: "1744",
    period: "Neoclassical Satire",
    summary: "Alexander Pope is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Alexander Pope (1688 - 1744) was a monumental figure in the history of English literature. Belonging to the Neoclassical Satire era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Rape of the Lock",
      what_it_is: "A mock-heroic poem satirizing high society",
      why_it_matters: "Master of the heroic couplet and witty satire",
      one_passage: "To err is human, to forgive divine."
    },
    what_they_knew: "Alexander Pope knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['The Rape of the Lock', 'An Essay on Criticism'],
    read_if_curious: "Read Rape of the Lock first."
  },
  {
    dayIndex: 51,
    era: 'classical',
    nationality: "Irish / British",
    name: "Jonathan Swift",
    born: "1667",
    died: "1745",
    period: "Augustan Satire",
    summary: "Jonathan Swift is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Jonathan Swift (1667 - 1745) was a monumental figure in the history of English literature. Belonging to the Augustan Satire era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Gulliver's Travels",
      what_it_is: "A satirical travelogue mocking human nature",
      why_it_matters: "The premier prose satirist in English history",
      one_passage: "I write to vex the world rather than divert it."
    },
    what_they_knew: "Jonathan Swift knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ["Gulliver's Travels", 'A Modest Proposal'],
    read_if_curious: "Read Gulliver's Travels first."
  },
  {
    dayIndex: 52,
    era: 'classical',
    nationality: "British",
    name: "Samuel Johnson",
    born: "1709",
    died: "1784",
    period: "Dictionary / Essays",
    summary: "Samuel Johnson is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Samuel Johnson (1709 - 1784) was a monumental figure in the history of English literature. Belonging to the Dictionary / Essays era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "A Dictionary of the English Language",
      what_it_is: "The first comprehensive dictionary of English",
      why_it_matters: "The leading critic, lexicographer, and essayist of his era",
      one_passage: "No man but a blockhead ever wrote except for money."
    },
    what_they_knew: "Samuel Johnson knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['The Lives of the Poets', 'Rasselas'],
    read_if_curious: "Read Rasselas first."
  },
  {
    dayIndex: 53,
    era: 'classical',
    nationality: "British",
    name: "William Blake",
    born: "1757",
    died: "1827",
    period: "Romantic Poetry & Art",
    summary: "William Blake is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "William Blake (1757 - 1827) was a monumental figure in the history of English literature. Belonging to the Romantic Poetry & Art era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Songs of Innocence and of Experience",
      what_it_is: "Poems contrasting childhood purity and social corruption",
      why_it_matters: "A visionary poet and artist who rejected industrialization",
      one_passage: "In seed time learn, in harvest teach, in winter enjoy."
    },
    what_they_knew: "William Blake knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Songs of Innocence', 'The Marriage of Heaven and Hell'],
    read_if_curious: "Read Songs of Experience first."
  },
  {
    dayIndex: 54,
    era: 'classical',
    nationality: "British",
    name: "Jane Austen",
    born: "1775",
    died: "1817",
    period: "Regency Realism",
    summary: "Jane Austen is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Jane Austen (1775 - 1817) was a monumental figure in the history of English literature. Belonging to the Regency Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Pride and Prejudice",
      what_it_is: "A witty novel of manners, class, and marriage",
      why_it_matters: "Master of free indirect discourse and domestic satire",
      one_passage: "It is a truth universally acknowledged."
    },
    what_they_knew: "Jane Austen knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Pride and Prejudice', 'Emma', 'Persuasion'],
    read_if_curious: "Read Pride and Prejudice first."
  },
  {
    dayIndex: 55,
    era: 'classical',
    nationality: "British",
    name: "Charles Dickens",
    born: "1812",
    died: "1870",
    period: "Victorian Realism",
    summary: "Charles Dickens is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Charles Dickens (1812 - 1870) was a monumental figure in the history of English literature. Belonging to the Victorian Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Great Expectations",
      what_it_is: "The story of orphan Pip and his class ambitions",
      why_it_matters: "The definitive Victorian novelist of social reform",
      one_passage: "It was the best of times, it was the worst of times."
    },
    what_they_knew: "Charles Dickens knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Great Expectations', 'Bleak House'],
    read_if_curious: "Read Great Expectations first."
  },
  {
    dayIndex: 56,
    era: 'classical',
    nationality: "British",
    name: "George Eliot",
    born: "1819",
    died: "1880",
    period: "Victorian Realism",
    summary: "George Eliot is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "George Eliot (1819 - 1880) was a monumental figure in the history of English literature. Belonging to the Victorian Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Middlemarch",
      what_it_is: "A study of provincial life, reform, and marriage",
      why_it_matters: "Acclaimed for her intellectual depth and moral realism",
      one_passage: "It is never too late to be what you might have been."
    },
    what_they_knew: "George Eliot knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Middlemarch', 'The Mill on the Floss'],
    read_if_curious: "Read Middlemarch — it is a masterpiece."
  },
  {
    dayIndex: 57,
    era: 'classical',
    nationality: "British",
    name: "Thomas Hardy",
    born: "1840",
    died: "1928",
    period: "Victorian Naturalism",
    summary: "Thomas Hardy is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Thomas Hardy (1840 - 1928) was a monumental figure in the history of English literature. Belonging to the Victorian Naturalism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Tess of the d'Urbervilles",
      what_it_is: "The tragic story of a peasant girl ruined by double standards",
      why_it_matters: "Explored the clash between modern industry and rural cycles",
      one_passage: "The beauty of a woman is a trap set by nature."
    },
    what_they_knew: "Thomas Hardy knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Tess', 'Jude the Obscure'],
    read_if_curious: "Read Tess first."
  },
  {
    dayIndex: 58,
    era: 'classical',
    nationality: "British / Polish",
    name: "Joseph Conrad",
    born: "1857",
    died: "1924",
    period: "Late Victorian / Modernism",
    summary: "Joseph Conrad is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Joseph Conrad (1857 - 1924) was a monumental figure in the history of English literature. Belonging to the Late Victorian / Modernism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Heart of Darkness",
      what_it_is: "A journey down the Congo River exposing colonialism",
      why_it_matters: "Explored the dark depths of human psychology and empire",
      one_passage: "The horror! The horror!"
    },
    what_they_knew: "Joseph Conrad knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Heart of Darkness', 'Lord Jim'],
    read_if_curious: "Read Heart of Darkness first."
  },
  {
    dayIndex: 59,
    era: 'classical',
    nationality: "American / British",
    name: "Henry James",
    born: "1843",
    died: "1916",
    period: "Psychological Realism",
    summary: "Henry James is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Henry James (1843 - 1916) was a monumental figure in the history of English literature. Belonging to the Psychological Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Portrait of a Lady",
      what_it_is: "A young American woman inheriting wealth and facing deceit",
      why_it_matters: "Master of psychological realism and narrative point of view",
      one_passage: "It is art that makes life, makes interest."
    },
    what_they_knew: "Henry James knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Portrait of a Lady', 'The Turn of the Screw'],
    read_if_curious: "Read Turn of the Screw first."
  },
  {
    dayIndex: 60,
    era: 'classical',
    nationality: "British",
    name: "Virginia Woolf",
    born: "1882",
    died: "1941",
    period: "Modernism / Bloomsbury",
    summary: "Virginia Woolf is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Virginia Woolf (1882 - 1941) was a monumental figure in the history of English literature. Belonging to the Modernism / Bloomsbury era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Mrs Dalloway",
      what_it_is: "A day in the life of Clarissa Dalloway in post-war London",
      why_it_matters: "Pioneered stream of consciousness and feminist criticism",
      one_passage: "A woman must have money and a room of her own."
    },
    what_they_knew: "Virginia Woolf knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Mrs Dalloway', 'To the Lighthouse'],
    read_if_curious: "Read To the Lighthouse first."
  },
  {
    dayIndex: 61,
    era: 'classical',
    nationality: "Irish",
    name: "James Joyce",
    born: "1882",
    died: "1941",
    period: "Modernism",
    summary: "James Joyce is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "James Joyce (1882 - 1941) was a monumental figure in the history of English literature. Belonging to the Modernism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Ulysses",
      what_it_is: "A single day in Dublin following Leopold Bloom",
      why_it_matters: "Revolutionized literature with stylistic experimentation",
      one_passage: "History is a nightmare from which I am trying to awake."
    },
    what_they_knew: "James Joyce knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Ulysses', 'Dubliners'],
    read_if_curious: "Read Dubliners first to understand his realism."
  },
  {
    dayIndex: 62,
    era: 'classical',
    nationality: "British",
    name: "D.H. Lawrence",
    born: "1885",
    died: "1930",
    period: "Modernism / Vitalism",
    summary: "D.H. Lawrence is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "D.H. Lawrence (1885 - 1930) was a monumental figure in the history of English literature. Belonging to the Modernism / Vitalism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Sons and Lovers",
      what_it_is: "A young artist's struggle with class and mother-love",
      why_it_matters: "Explored sensuality, vitality, and industrial decay",
      one_passage: "The body is the only temple we possess."
    },
    what_they_knew: "D.H. Lawrence knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Sons and Lovers', 'Women in Love'],
    read_if_curious: "Read Sons and Lovers first."
  },
  {
    dayIndex: 63,
    era: 'classical',
    nationality: "British / American",
    name: "T.S. Eliot",
    born: "1888",
    died: "1965",
    period: "Modernist Poetry",
    summary: "T.S. Eliot is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "T.S. Eliot (1888 - 1965) was a monumental figure in the history of English literature. Belonging to the Modernist Poetry era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Waste Land",
      what_it_is: "A dense, fragmented poem reflecting on post-war collapse",
      why_it_matters: "Won the Nobel Prize, defining modern poetry",
      one_passage: "April is the cruellest month."
    },
    what_they_knew: "T.S. Eliot knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['The Waste Land', 'Four Quartets'],
    read_if_curious: "Read Waste Land first."
  },
  {
    dayIndex: 64,
    era: 'classical',
    nationality: "Irish",
    name: "W.B. Yeats",
    born: "1865",
    died: "1939",
    period: "Romanticism / Modernism",
    summary: "W.B. Yeats is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "W.B. Yeats (1865 - 1939) was a monumental figure in the history of English literature. Belonging to the Romanticism / Modernism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Second Coming",
      what_it_is: "A poem predicting historical cycles and collapse",
      why_it_matters: "Won the Nobel Prize, blending myth with modern politics",
      one_passage: "Things fall apart; the centre cannot hold."
    },
    what_they_knew: "W.B. Yeats knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Selected Poems', 'The Tower'],
    read_if_curious: "Read 'The Second Coming' first."
  },
  {
    dayIndex: 65,
    era: 'classical',
    nationality: "Irish / French",
    name: "Samuel Beckett",
    born: "1906",
    died: "1989",
    period: "Absurdist Drama",
    summary: "Samuel Beckett is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Samuel Beckett (1906 - 1989) was a monumental figure in the history of English literature. Belonging to the Absurdist Drama era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Waiting for Godot",
      what_it_is: "Two men waiting for a mysterious figure who never arrives",
      why_it_matters: "Pioneered the Theater of the Absurd, winning Nobel Prize",
      one_passage: "I can't go on. I'll go on."
    },
    what_they_knew: "Samuel Beckett knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Waiting for Godot', 'Endgame'],
    read_if_curious: "Read Waiting for Godot first."
  },
  {
    dayIndex: 66,
    era: 'classical',
    nationality: "British",
    name: "George Orwell",
    born: "1903",
    died: "1950",
    period: "Political Realism",
    summary: "George Orwell is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "George Orwell (1903 - 1950) was a monumental figure in the history of English literature. Belonging to the Political Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Nineteen Eighty-Four",
      what_it_is: "A dystopian novel depicting totalitarian state power",
      why_it_matters: "The premier political essayist and novelist of the 20th century",
      one_passage: "Big Brother is watching you."
    },
    what_they_knew: "George Orwell knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['1984', 'Animal Farm', 'Essays'],
    read_if_curious: "Read his essays on language first."
  },
  {
    dayIndex: 67,
    era: 'classical',
    nationality: "British",
    name: "Graham Greene",
    born: "1904",
    died: "1991",
    period: "Political / Catholic Realism",
    summary: "Graham Greene is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Graham Greene (1904 - 1991) was a monumental figure in the history of English literature. Belonging to the Political / Catholic Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Power and the Glory",
      what_it_is: "A whiskey priest fleeing persecution in Mexico",
      why_it_matters: "Captured the moral ambiguity and geopolitical margins of cold war",
      one_passage: "There is always a point in childhood when the door opens."
    },
    what_they_knew: "Graham Greene knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['The Power and the Glory', 'The Quiet American'],
    read_if_curious: "Read The Quiet American first."
  },
  {
    dayIndex: 68,
    era: 'classical',
    nationality: "British",
    name: "Evelyn Waugh",
    born: "1903",
    died: "1966",
    period: "Satire & Realism",
    summary: "Evelyn Waugh is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Evelyn Waugh (1903 - 1966) was a monumental figure in the history of English literature. Belonging to the Satire & Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Brideshead Revisited",
      what_it_is: "A reflection on the decline of a Catholic aristocratic family",
      why_it_matters: "A premier satirist who captured post-war nostalgia",
      one_passage: "To know oneself is the first step to wisdom."
    },
    what_they_knew: "Evelyn Waugh knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Brideshead Revisited', 'Decline and Fall'],
    read_if_curious: "Read Brideshead first."
  },
  {
    dayIndex: 69,
    era: 'classical',
    nationality: "American",
    name: "F. Scott Fitzgerald",
    born: "1896",
    died: "1940",
    period: "Jazz Age Realism",
    summary: "F. Scott Fitzgerald is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "F. Scott Fitzgerald (1896 - 1940) was a monumental figure in the history of English literature. Belonging to the Jazz Age Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Great Gatsby",
      what_it_is: "A novel about wealth, love, and self-invention in Long Island",
      why_it_matters: "Captured the beauty, hollow core, and tragedy of the 1920s",
      one_passage: "So we beat on, boats against the current."
    },
    what_they_knew: "F. Scott Fitzgerald knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['The Great Gatsby', 'Tender Is the Night'],
    read_if_curious: "Read Gatsby first."
  },
  {
    dayIndex: 70,
    era: 'classical',
    nationality: "American",
    name: "Ernest Hemingway",
    born: "1899",
    died: "1961",
    period: "Minimalist Realism",
    summary: "Ernest Hemingway is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Ernest Hemingway (1899 - 1961) was a monumental figure in the history of English literature. Belonging to the Minimalist Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Old Man and the Sea",
      what_it_is: "A Cuban fisherman's struggle with a giant marlin",
      why_it_matters: "Won the Nobel Prize, pioneering the 'Iceberg Theory' of prose",
      one_passage: "A man can be destroyed but not defeated."
    },
    what_they_knew: "Ernest Hemingway knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['The Sun Also Rises', 'The Old Man and the Sea'],
    read_if_curious: "Read The Old Man and the Sea first."
  },
  {
    dayIndex: 71,
    era: 'classical',
    nationality: "American",
    name: "William Faulkner",
    born: "1897",
    died: "1962",
    period: "Southern Gothic",
    summary: "William Faulkner is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "William Faulkner (1897 - 1962) was a monumental figure in the history of English literature. Belonging to the Southern Gothic era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Sound and the Fury",
      what_it_is: "The decline of the Compson family told in multiple voices",
      why_it_matters: "Won the Nobel Prize, exploring historical guilt and time",
      one_passage: "The past is never dead. It's not even past."
    },
    what_they_knew: "William Faulkner knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['The Sound and the Fury', 'As I Lay Dying'],
    read_if_curious: "Read As I Lay Dying first."
  },
  {
    dayIndex: 72,
    era: 'classical',
    nationality: "American",
    name: "Flannery O'Connor",
    born: "1925",
    died: "1964",
    period: "Southern Gothic",
    summary: "Flannery O'Connor is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Flannery O'Connor (1925 - 1964) was a monumental figure in the history of English literature. Belonging to the Southern Gothic era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "A Good Man Is Hard to Find",
      what_it_is: "Stories exploring violence, grace, and morality in the South",
      why_it_matters: "A master of the grotesque, writing with absolute precision",
      one_passage: "She would have been a good woman if someone had been there."
    },
    what_they_knew: "Flannery O'Connor knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['A Good Man Is Hard to Find', 'Wise Blood'],
    read_if_curious: "Read the short stories first."
  },
  {
    dayIndex: 73,
    era: 'classical',
    nationality: "American",
    name: "Ralph Ellison",
    born: "1914",
    died: "1994",
    period: "African-American Modernism",
    summary: "Ralph Ellison is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Ralph Ellison (1914 - 1994) was a monumental figure in the history of English literature. Belonging to the African-American Modernism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Invisible Man",
      what_it_is: "A novel depicting a black man's invisibility in white society",
      why_it_matters: "Synthesized jazz rhythms and modernism to capture racism",
      one_passage: "I am an invisible man. No, I am not a spook."
    },
    what_they_knew: "Ralph Ellison knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Invisible Man', 'Going to the Territory'],
    read_if_curious: "Read Invisible Man first."
  },
  {
    dayIndex: 74,
    era: 'classical',
    nationality: "American",
    name: "James Baldwin (early)",
    born: "1924",
    died: "1987",
    period: "Civil Rights / Essays",
    summary: "James Baldwin (early) is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "James Baldwin (early) (1924 - 1987) was a monumental figure in the history of English literature. Belonging to the Civil Rights / Essays era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Go Tell It on the Mountain",
      what_it_is: "A semi-autobiographical novel exploring church and family in Harlem",
      why_it_matters: "A premier essayist on race, sexuality, and humanism",
      one_passage: "To be a Negro in this country and to be relatively conscious."
    },
    what_they_knew: "James Baldwin (early) knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Go Tell It on the Mountain', 'Notes of a Native Son'],
    read_if_curious: "Read Notes of a Native Son first."
  },
  {
    dayIndex: 75,
    era: 'classical',
    nationality: "American",
    name: "Langston Hughes",
    born: "1901",
    died: "1967",
    period: "Harlem Renaissance",
    summary: "Langston Hughes is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Langston Hughes (1901 - 1967) was a monumental figure in the history of English literature. Belonging to the Harlem Renaissance era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Weary Blues",
      what_it_is: "Poetry blending jazz and blues rhythms with black life",
      why_it_matters: "A central leader of the Harlem Renaissance",
      one_passage: "What happens to a dream deferred?"
    },
    what_they_knew: "Langston Hughes knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Selected Poems', 'The Ways of White Folks'],
    read_if_curious: "Read the poetry first."
  },
  {
    dayIndex: 76,
    era: 'classical',
    nationality: "British",
    name: "Christopher Marlowe",
    born: "1564",
    died: "1593",
    period: "Elizabethan Drama",
    summary: "Christopher Marlowe is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Christopher Marlowe (1564 - 1593) was a monumental figure in the history of English literature. Belonging to the Elizabethan Drama era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Doctor Faustus",
      what_it_is: "A scholar sells his soul to the Devil for knowledge",
      why_it_matters: "Pioneered the use of blank verse in Elizabethan theater",
      one_passage: "Was this the face that launch'd a thousand ships?"
    },
    what_they_knew: "Christopher Marlowe knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Doctor Faustus', 'Tamburlaine'],
    read_if_curious: "Read Doctor Faustus first."
  },
  {
    dayIndex: 77,
    era: 'classical',
    nationality: "British",
    name: "Ben Jonson",
    born: "1572",
    died: "1637",
    period: "Elizabethan Comedy",
    summary: "Ben Jonson is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Ben Jonson (1572 - 1637) was a monumental figure in the history of English literature. Belonging to the Elizabethan Comedy era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Volpone",
      what_it_is: "A wealthy Venetian fakes illness to trick greedy suitors",
      why_it_matters: "Master of satire and the comedy of humors",
      one_passage: "Mischiefs feed like beasts when they are young."
    },
    what_they_knew: "Ben Jonson knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Volpone', 'The Alchemist'],
    read_if_curious: "Read Volpone first."
  },
  {
    dayIndex: 78,
    era: 'classical',
    nationality: "British",
    name: "John Keats",
    born: "1795",
    died: "1821",
    period: "Romantic Poetry",
    summary: "John Keats is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "John Keats (1795 - 1821) was a monumental figure in the history of English literature. Belonging to the Romantic Poetry era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Ode on a Grecian Urn",
      what_it_is: "A poem reflecting on art, beauty, and mortality",
      why_it_matters: "A key Romantic poet celebrated for his sensory imagery",
      one_passage: "Beauty is truth, truth beauty,-that is all ye know."
    },
    what_they_knew: "John Keats knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Ode on a Grecian Urn', 'Ode to a Nightingale'],
    read_if_curious: "Read the Odes first."
  },
  {
    dayIndex: 79,
    era: 'classical',
    nationality: "British",
    name: "Percy Bysshe Shelley",
    born: "1792",
    died: "1822",
    period: "Romantic Poetry",
    summary: "Percy Bysshe Shelley is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Percy Bysshe Shelley (1792 - 1822) was a monumental figure in the history of English literature. Belonging to the Romantic Poetry era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Ozymandias",
      what_it_is: "A sonnet reflecting on the ruins of an ancient king's statue",
      why_it_matters: "A visionary Romantic poet who advocated political reform",
      one_passage: "Look on my Works, ye Mighty, and despair!"
    },
    what_they_knew: "Percy Bysshe Shelley knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Ozymandias', 'Prometheus Unbound'],
    read_if_curious: "Read Ozymandias first."
  },
  {
    dayIndex: 80,
    era: 'classical',
    nationality: "British",
    name: "Lord Byron",
    born: "1788",
    died: "1824",
    period: "Romantic Poetry",
    summary: "Lord Byron is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Lord Byron (1788 - 1824) was a monumental figure in the history of English literature. Belonging to the Romantic Poetry era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Don Juan",
      what_it_is: "A satirical epic poem reversing the legendary libertine's story",
      why_it_matters: "Pioneered the 'Byronic hero', combining cynicism and passion",
      one_passage: "Man's love is of man's life a thing apart."
    },
    what_they_knew: "Lord Byron knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Don Juan', "Childe Harold's Pilgrimage"],
    read_if_curious: "Read Don Juan first."
  },
  {
    dayIndex: 81,
    era: 'classical',
    nationality: "British",
    name: "William Wordsworth",
    born: "1770",
    died: "1850",
    period: "Romantic Poetry",
    summary: "William Wordsworth is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "William Wordsworth (1770 - 1850) was a monumental figure in the history of English literature. Belonging to the Romantic Poetry era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Lyrical Ballads",
      what_it_is: "A poetry collection celebrating nature and ordinary language",
      why_it_matters: "Co-founded English Romanticism, advocating nature reflection",
      one_passage: "The child is father of the man."
    },
    what_they_knew: "William Wordsworth knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Lyrical Ballads', 'The Prelude'],
    read_if_curious: "Read Lyrical Ballads first."
  },
  {
    dayIndex: 82,
    era: 'classical',
    nationality: "British",
    name: "Samuel Taylor Coleridge",
    born: "1772",
    died: "1834",
    period: "Romantic Poetry",
    summary: "Samuel Taylor Coleridge is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Samuel Taylor Coleridge (1772 - 1834) was a monumental figure in the history of English literature. Belonging to the Romantic Poetry era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Rime of the Ancient Mariner",
      what_it_is: "An epic poem about a sailor who kills an albatross",
      why_it_matters: "Co-founded English Romanticism, blending supernatural and morals",
      one_passage: "Water, water, everywhere, nor any drop to drink."
    },
    what_they_knew: "Samuel Taylor Coleridge knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['The Rime', 'Kubla Khan'],
    read_if_curious: "Read Kubla Khan first."
  },
  {
    dayIndex: 83,
    era: 'classical',
    nationality: "British",
    name: "Charlotte Brontë",
    born: "1816",
    died: "1855",
    period: "Victorian Gothic Realism",
    summary: "Charlotte Brontë is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Charlotte Brontë (1816 - 1855) was a monumental figure in the history of English literature. Belonging to the Victorian Gothic Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Jane Eyre",
      what_it_is: "The story of an orphaned governess seeking independence",
      why_it_matters: "A classic Victorian novel exploring female integrity and class",
      one_passage: "I am no bird; and no net ensnares me."
    },
    what_they_knew: "Charlotte Brontë knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Jane Eyre', 'Villette'],
    read_if_curious: "Read Jane Eyre first."
  },
  {
    dayIndex: 84,
    era: 'classical',
    nationality: "British",
    name: "Emily Brontë",
    born: "1818",
    died: "1848",
    period: "Victorian Gothic",
    summary: "Emily Brontë is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Emily Brontë (1818 - 1848) was a monumental figure in the history of English literature. Belonging to the Victorian Gothic era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Wuthering Heights",
      what_it_is: "A passionate, dark tale of love and revenge in the moors",
      why_it_matters: "A masterpiece of Gothic romance and psychological intensity",
      one_passage: "Whatever our souls are made of, his and mine are the same."
    },
    what_they_knew: "Emily Brontë knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Wuthering Heights'],
    read_if_curious: "Read Wuthering Heights first."
  },
  {
    dayIndex: 85,
    era: 'classical',
    nationality: "British",
    name: "Mary Shelley",
    born: "1797",
    died: "1851",
    period: "Gothic Science Fiction",
    summary: "Mary Shelley is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Mary Shelley (1797 - 1851) was a monumental figure in the history of English literature. Belonging to the Gothic Science Fiction era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Frankenstein",
      what_it_is: "A scientist creates a living creature from dead matter",
      why_it_matters: "Pioneered science fiction, exploring creation and morals",
      one_passage: "Beware; for I am fearless, and therefore powerful."
    },
    what_they_knew: "Mary Shelley knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Frankenstein', 'The Last Man'],
    read_if_curious: "Read Frankenstein first."
  },
  {
    dayIndex: 86,
    era: 'classical',
    nationality: "American",
    name: "Edgar Allan Poe",
    born: "1809",
    died: "1849",
    period: "Gothic Romantism",
    summary: "Edgar Allan Poe is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Edgar Allan Poe (1809 - 1849) was a monumental figure in the history of English literature. Belonging to the Gothic Romantism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "The Raven",
      what_it_is: "A narrative poem depicting a lover's descent into madness",
      why_it_matters: "Pioneered the short story, detective fiction, and Gothic horror",
      one_passage: "Quoth the Raven 'Nevermore.'"
    },
    what_they_knew: "Edgar Allan Poe knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['The Raven', 'Tales of the Grotesque and Arabesque'],
    read_if_curious: "Read the short stories first."
  },
  {
    dayIndex: 87,
    era: 'classical',
    nationality: "American",
    name: "Walt Whitman",
    born: "1819",
    died: "1892",
    period: "Transcendental Poetry",
    summary: "Walt Whitman is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Walt Whitman (1819 - 1892) was a monumental figure in the history of English literature. Belonging to the Transcendental Poetry era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Leaves of Grass",
      what_it_is: "A monumental poetry collection celebrating democracy and self",
      why_it_matters: "Pioneered free verse and American transcendentalism",
      one_passage: "I contain multitudes."
    },
    what_they_knew: "Walt Whitman knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Leaves of Grass', 'Song of Myself'],
    read_if_curious: "Read Song of Myself first."
  },
  {
    dayIndex: 88,
    era: 'classical',
    nationality: "American",
    name: "Herman Melville",
    born: "1819",
    died: "1891",
    period: "Romantic / Adventure",
    summary: "Herman Melville is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Herman Melville (1819 - 1891) was a monumental figure in the history of English literature. Belonging to the Romantic / Adventure era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Moby-Dick",
      what_it_is: "A captain's obsessive hunt for a white whale",
      why_it_matters: "An epic American novel exploring fate, nature, and obsession",
      one_passage: "Call me Ishmael."
    },
    what_they_knew: "Herman Melville knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Moby-Dick', 'Bartleby, the Scrivener'],
    read_if_curious: "Read Bartleby first."
  },
  {
    dayIndex: 89,
    era: 'classical',
    nationality: "American",
    name: "Mark Twain",
    born: "1835",
    died: "1910",
    period: "American Realism",
    summary: "Mark Twain is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Mark Twain (1835 - 1910) was a monumental figure in the history of English literature. Belonging to the American Realism era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Adventures of Huckleberry Finn",
      what_it_is: "A boy and a runaway slave float down the Mississippi",
      why_it_matters: "A foundational American novel exploring race and freedom",
      one_passage: "You don't know about me without you have read a book."
    },
    what_they_knew: "Mark Twain knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Huckleberry Finn', 'The Adventures of Tom Sawyer'],
    read_if_curious: "Read Huckleberry Finn first."
  },
  {
    dayIndex: 90,
    era: 'classical',
    nationality: "American",
    name: "Emily Dickinson",
    born: "1830",
    died: "1886",
    period: "Minimalist Poetry",
    summary: "Emily Dickinson is a legendary classical figure of English literature, whose work defined the formal and linguistic parameters of the tradition.",
    portrait: "Emily Dickinson (1830 - 1886) was a monumental figure in the history of English literature. Belonging to the Minimalist Poetry era, they defined the language, form, and moral scope of the literary tradition.\n\nTheir work is celebrated for its linguistic beauty, its formal mastery, and its profound exploration of the human condition. Whether writing drama, epic poetry, or realistic fiction, they captured the psychological, social, and philosophical currents of their time, leaving behind a body of work that continues to shape how we think and speak today.",
    signature_work: {
      title: "Selected Poems",
      what_it_is: "Short, intense poems exploring death, nature, and self",
      why_it_matters: "A leading American poet, using unique punctuation and lines",
      one_passage: "Hope is the thing with feathers."
    },
    what_they_knew: "Emily Dickinson knew that the human heart contains enduring, classical contradictions of desire, duty, and mortality, which they expressed in timeless language.",
    must_read: ['Selected Poems'],
    read_if_curious: "Read any collection first."
  }
];
