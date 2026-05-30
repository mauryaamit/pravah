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
    dayIndex: 32,
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
    dayIndex: 33,
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
    dayIndex: 34,
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
    dayIndex: 35,
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
    dayIndex: 36,
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
    dayIndex: 37,
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
    dayIndex: 38,
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
    dayIndex: 39,
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
    dayIndex: 40,
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
    dayIndex: 41,
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
    dayIndex: 42,
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
    dayIndex: 43,
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
    dayIndex: 44,
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
    dayIndex: 45,
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
    dayIndex: 46,
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
    dayIndex: 47,
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
    dayIndex: 48,
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
    dayIndex: 49,
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
    dayIndex: 50,
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
    dayIndex: 51,
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
    dayIndex: 52,
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
    dayIndex: 53,
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
    dayIndex: 54,
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
    dayIndex: 55,
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
    dayIndex: 56,
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
    dayIndex: 57,
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
    dayIndex: 58,
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
    dayIndex: 59,
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
    dayIndex: 60,
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
  }
];
