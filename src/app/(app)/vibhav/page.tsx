'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';
import ReadAloudButton from '@/components/shared/ReadAloudButton';

interface Person {
  id: string;
  name: string;
  nameHindi: string;
  born: string;
  died?: string;
  nationality: string;
  domain: string;
  imageUrl: string;
  tagline: string;
  biography: string;
  philosophy: string;
  keyWorks: string[];
  famousQuote: string;
  legacy: string;
  lessonsForToday: string[];
  connection: string;
}

const PEOPLE: Person[] = [
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    nameHindi: 'निकोला टेस्ला',
    born: '10 July 1856',
    died: '7 January 1943',
    nationality: 'Serbian-American',
    domain: 'Inventor, Electrical Engineer, Futurist',
    imageUrl: '/images/vibhav/tesla.png',
    tagline: 'The man who lit the world - and died alone.',
    biography: `Nikola Tesla was born on a stormy night in July 1856 in Smiljan, a small village in what is now Croatia. His mother, Djouka Mandic, was herself an inventor of small household appliances. His father was a Serbian Orthodox priest. From childhood, Tesla displayed extraordinary mental abilities - he could perform integral calculus in his head, which so astonished his teachers that they accused him of cheating.

Tesla studied at the Austrian Polytechnic in Graz, where he became obsessed with alternating current - at a time when everyone believed that Edison's direct current was the future of electricity. He moved to Paris, then to America in 1884 with four cents in his pocket, a poem in his head, and the plans for a flying machine in his imagination.

He worked briefly for Thomas Edison, who dismissed his ideas about alternating current. Their famous rivalry - the "War of Currents" - would define electrical history. Tesla partnered with George Westinghouse, and in 1893 their alternating current system lit up the World's Columbian Exposition in Chicago, demonstrating its superiority before 27 million visitors.

Tesla's greatest triumph came at Niagara Falls. In 1895, the first large-scale hydroelectric plant opened, using Tesla's AC system to transmit electricity 22 miles to Buffalo, New York. It was the proof that the world had been waiting for: electricity could travel vast distances without loss. The modern grid was born.

But Tesla was not satisfied with merely powering cities. He dreamed of transmitting energy wirelessly across the entire planet. He built Wardenclyffe Tower on Long Island - a massive transmitting station intended to beam free electricity to anywhere on Earth. His backer, J.P. Morgan, withdrew funding when he realized he couldn't meter wireless electricity and profit from it. The tower was demolished in 1917. Tesla was bankrupted and heartbroken.

In his later years, Tesla lived alone in the New Yorker Hotel, feeding pigeons from his window. He became increasingly eccentric - he claimed to have received signals from Mars, he said he had invented a death ray, he had pathological aversions to pearls and round surfaces. He died alone on January 7, 1943, in Room 3327.

When Tesla died, the FBI seized all his papers. Many of his patents and discoveries lay forgotten for decades. He died with no money, no family nearby, and no recognition. The unit of magnetic field strength - the tesla - was named after him posthumously. His full genius is still not completely understood.`,
    philosophy: `Tesla believed that the universe ran on energy - that what we called matter was simply energy at a lower vibration. He was deeply spiritual in his own way, influenced by Vivekananda's Vedantic philosophy. He wrote to Vivekananda, excited that ancient Hindu concepts of Prana and Akasha aligned with his theories of energy and ether.

He believed that science and spirituality were converging toward the same truth. His vision was not of a world where energy was metered and monetized, but where it was free - where poverty itself could be abolished by eliminating scarcity of power. He wanted to give the world a gift, and the world largely didn't let him.

Tesla also believed intensely in celibacy as a source of creative power. He never married, saying that a creative person could not divide himself. All his energy went into invention.`,
    keyWorks: [
      'AC Motor and Polyphase System (1888)',
      'Tesla Coil (1891)',
      'Niagara Falls Power Plant (1895)',
      'Radio (disputed, 1897)',
      'X-ray experiments (1895)',
      'Wardenclyffe Tower concept (1901)',
      'Remote control boat (1898 - the world\'s first robot',
    ],
    famousQuote: 'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.',
    legacy: `Tesla holds over 300 patents. The principles behind AC motors, radio, radar, the fluorescent bulb, remote control, robotics - all have their roots in Tesla's work. Elon Musk named his electric vehicle company after Tesla partly as a tribute. The unit of magnetic flux density is named the tesla. Google dedicated a doodle to him. But perhaps his greatest legacy is the idea that invention can be an act of love - that a mind can dedicate itself entirely to the benefit of humanity, even at the cost of its own comfort and recognition.`,
    lessonsForToday: [
      'The most important inventions are often the ones that cannot be easily monetized.',
      'Genius and practicality are not the same thing - both are needed.',
      'Free energy, free information, free education: these remain unfinished revolutions.',
      'The world is not always ready for its prophets. That doesn\'t make them wrong.',
    ],
    connection: 'There is a direct electrical line from Tesla\'s alternating current to the device you are reading this on.',
  },
  {
    id: 'gandhi',
    name: 'Mahatma Gandhi',
    nameHindi: 'महात्मा गांधी',
    born: '2 October 1869',
    died: '30 January 1948',
    nationality: 'Indian',
    domain: 'Political Leader, Philosopher, Father of the Nation',
    imageUrl: '/images/vibhav/gandhi.png',
    tagline: 'The man who fought an empire with a spinning wheel.',
    biography: `Mohandas Karamchand Gandhi was born in Porbandar, a coastal town in Gujarat, on October 2, 1869. His family were Vaishnavite Hindus of the Bania caste - merchants by tradition, vegetarians by conviction. His mother, Putlibai, was deeply religious and her influence stayed with Gandhi all his life.

At 19, Gandhi sailed to England to study law. He was a shy, awkward young man - he once stood up to speak at a Vegetarian Society meeting and was so nervous he couldn't say a word, so he sat down and had someone else read his speech. But England transformed him. He read Tolstoy, Ruskin, the Bhagavad Gita in English translation for the first time. He began to think.

He went to South Africa in 1893 to practice law. On his first train journey, he was thrown off a first-class compartment because he was Indian. That night, sitting on a cold platform in Pietermaritzburg, Gandhi decided that he would not run from injustice. He would fight it - but in a way no one had ever used before.

He called his method Satyagraha - truth-force or soul-force. The principle was simple and revolutionary: when faced with injustice, you do not fight with weapons. You resist with your body, your presence, your willingness to suffer. You make the oppressor confront the moral weight of what they are doing.

In South Africa, he led campaigns against discriminatory laws. When he returned to India in 1915, he was already a legend. He walked through India, meeting ordinary people, learning their suffering. The 1919 Jallianwala Bagh massacre - where British troops fired on an unarmed crowd, killing hundreds - convinced him that British rule had to end.

The Salt March of 1930 was his masterpiece. Gandhi walked 240 miles to the sea with 78 followers to make salt from seawater - an act that broke the British salt monopoly law. By the time he reached Dandi, tens of thousands were marching with him. The world watched. The British arrested him. But the empire had already been shaken.

Gandhi was assassinated on January 30, 1948, just months after India gained independence. He was walking to a prayer meeting when Nathuram Godse shot him three times. His last words were reportedly "Hey Ram."`,
    philosophy: `Gandhi's philosophy rested on three pillars: Satya (truth), Ahimsa (nonviolence), and Swaraj (self-rule - both political and personal). He believed that means and ends were inseparable - you could not build a just world through unjust methods. This was his fundamental disagreement with those who believed violence was sometimes necessary.

He was deeply influenced by the Bhagavad Gita, Ruskin's Unto This Last, and Tolstoy's The Kingdom of God is Within You. He practiced what he preached with unusual completeness - he spun his own cloth (khadi), cleaned latrines, fasted regularly, lived in ashrams where all were equal. 

His idea of Swaraj went beyond political independence. True freedom, he said, was internal - it was freedom from greed, from fear, from the desire for retaliation. "Be the change you wish to see in the world" captures this: transformation begins with the self.`,
    keyWorks: [
      'Hind Swaraj (1909) - critique of modern civilization',
      'The Story of My Experiments with Truth (autobiography)',
      'Non-cooperation movement (1920-22)',
      'Salt March / Civil Disobedience (1930)',
      'Quit India Movement (1942)',
    ],
    famousQuote: 'First they ignore you, then they laugh at you, then they fight you, then you win.',
    legacy: `Gandhi's influence is incalculable. Martin Luther King Jr. credited Gandhi's nonviolence as the foundation of the American Civil Rights Movement. Nelson Mandela drew on his example. The United Nations declared his birthday, October 2, as the International Day of Nonviolence. But Gandhi's deepest legacy may be philosophical: the idea that moral force can be more powerful than physical force. This is not naive - it is a technology, difficult to master, demanding extraordinary courage.`,
    lessonsForToday: [
      'The most powerful form of resistance may be the refusal to be what power expects of you.',
      'Change the system from within by changing yourself first.',
      'Simplicity is a kind of freedom. Not poverty - chosen simplicity.',
      'Truth must be tested in action, not only in thought.',
    ],
    connection: 'Every time someone stands in quiet protest against injustice, they are carrying a small piece of Gandhi forward.',
  },
  {
    id: 'rumi',
    name: 'Jalal ad-Din Rumi',
    nameHindi: 'जलालुद्दीन रूमी',
    born: '30 September 1207',
    died: '17 December 1273',
    nationality: 'Persian (born in Balkh, now Afghanistan)',
    domain: 'Poet, Theologian, Sufi Master',
    imageUrl: '/images/vibhav/rumi.png',
    tagline: 'The 13th century mystic who became the bestselling poet in America.',
    biography: `Jalal ad-Din Muhammad Rumi was born in 1207 in Balkh, a city in what is now Afghanistan, into a family of Islamic scholars. His father, Baha ud-Din Walad, was a theologian and mystic who fled westward with his family as the Mongol invasions swept through Central Asia. After years of wandering - through Nishapur (where they met the great poet Attar), through Baghdad, through Mecca on pilgrimage - the family settled in Konya, in what is now Turkey, around 1228.

Rumi inherited his father's scholarly gifts and his mystical inclinations. He studied Islamic law, theology, and the classical Arabic and Persian literary traditions. By the time his father died in 1231, Rumi was already a respected scholar with thousands of students.

Then, in 1244, everything changed. A wandering dervish named Shams-i-Tabrizi arrived in Konya. When Rumi and Shams met for the first time - accounts of their conversation vary, but all agree on its electric quality - something in Rumi was ignited that had never burned before. The two men talked for days without eating or sleeping. Rumi's students were jealous of Shams's hold on their master. Finally, Shams disappeared - either driven away by the jealous disciples, or murdered. Rumi was devastated.

But out of that devastation came the Masnavi - six books of poetry totaling 25,000 verses, considered one of the greatest spiritual works in any language. Rumi also composed the Divan-e Shams-e Tabrizi - a collection of 40,000 verses written in the voice of his lost friend. Grief became art became wisdom became a river of words that has never stopped flowing.

He became the head of a Sufi order - the Mevlevi, whose practice of whirling meditation (the Sema) became the famous "whirling dervishes." He died in 1273 in Konya, where his tomb remains a pilgrimage site visited by hundreds of thousands each year.

The remarkable thing about Rumi's afterlife: he is the bestselling poet in the United States - more than 700 years after his death. His translations have sold over two million copies. Something in his words speaks across thirteen centuries without needing a single footnote.`,
    philosophy: `Rumi's philosophy is the philosophy of divine love and the longing for return. The central image of the Masnavi is the reed flute, cut from the reed bed, crying for reunion. The reed is the soul; the reed bed is God; the music is the sound of separation. All human longing - for love, for home, for meaning - is, at its deepest level, the soul's longing to return to its source.

But Rumi was not passive about this longing. He believed the path back was through surrender - not to other humans, but to the divine presence within all things. He was fiercely inclusive: "Come, come, whoever you are - wanderer, worshiper, lover of leaving - it doesn't matter. Ours is not a caravan of despair. Come, even if you have broken your vow a thousand times. Come, yet again, come."

He saw God in beauty, in music, in the turning of dervishes, in the cry of a flute. Religion, for Rumi, was not a set of rules but a state of being - a continuous turning toward love.`,
    keyWorks: [
      'Masnavi-ye Ma\'navi (Spiritual Couplets) - 6 books, 25,000 verses',
      'Divan-e Shams-e Tabrizi - 40,000 verses',
      'Fihi Ma Fihi (In It What Is In It) - prose teachings',
    ],
    famousQuote: 'Out beyond ideas of wrongdoing and rightdoing, there is a field. I\'ll meet you there.',
    legacy: `Rumi's influence stretches across Islamic civilization, Western literature, and contemporary spiritual practice. His poems have been set to music by Sufis for centuries. His Mevlevi order continues to practice and teach. In the modern West, his translated words have become a touchstone for those seeking a spirituality beyond institutional religion. He is perhaps the greatest demonstration in literary history that love - fierce, consuming, surrendered love - can survive its object and become universal.`,
    lessonsForToday: [
      'Your wound is where the light enters you.',
      'The thing you are seeking is also seeking you.',
      'Don\'t grieve. Anything you lose comes round in another form.',
      'Let yourself be silently drawn by the pull of what you really love.',
    ],
    connection: 'Rumi\'s reed flute plays the music of longing. Every time you miss something or someone that mattered, you are playing that flute.',
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    nameHindi: 'मेरी क्यूरी',
    born: '7 November 1867',
    died: '4 July 1934',
    nationality: 'Polish-French',
    domain: 'Physicist, Chemist, Pioneer of Radioactivity',
    imageUrl: '/images/vibhav/curie.png',
    tagline: 'The first person to win two Nobel Prizes - one of only four ever.',
    biography: `Maria Sklodowska was born on November 7, 1867 in Warsaw, then under Russian control. Polish girls could not attend university - education was surveilled by Russian authorities, who feared an educated Polish population would resist occupation. So Maria and her sister Bronya made a pact: Maria would work as a governess to support Bronya through medical school in Paris; then Bronya would support Maria in return.

Maria held up her end of the bargain through years of difficult domestic service with provincial Polish families, educating herself alone from books borrowed and bought. When she finally arrived in Paris in 1891, she was 24 years old, almost broke, and on fire. She enrolled at the Sorbonne under the Gallicised name Marie, ate almost nothing, wore a coat over her clothes in her freezing garret, and finished first in her physics degree, second in her mathematics degree.

She met Pierre Curie in 1894. He was already an established scientist who had discovered piezoelectricity. He was so struck by her that he offered to share his laboratory with her - and then his life. They married in 1895, refused church ceremony, and worked together as equal partners in a shared laboratory in a converted shed. Their partnership was one of the greatest intellectual collaborations in history.

Together they discovered two new elements: polonium (which Marie named after her occupied homeland) and radium. For this work - and for defining the concept of radioactivity itself - they shared the Nobel Prize in Physics in 1903 with Henri Becquerel. Marie was the first woman to win a Nobel Prize.

Pierre died in 1906 in a tragic accident - he slipped on a wet Parisian street and a horse-drawn cart crushed his skull. Marie was shattered. But she continued. She took over Pierre's professorship at the Sorbonne - becoming its first female professor. In 1911, she won a second Nobel Prize, this time in Chemistry, for her isolation of radium. No one has won Nobel Prizes in two different sciences before or since.

During World War I, she developed mobile X-ray units - called "petites Curies" - that she drove to the front lines herself. She trained 150 women to operate them. An estimated million soldiers were X-rayed using her units.

Marie Curie died of aplastic anemia in 1934 - caused by decades of radiation exposure, carrying radioactive isotopes in her pockets, working with no protective equipment in an era when radiation's dangers were unknown. Her notebooks are still radioactive and are stored in lead-lined boxes in Paris. Researchers who wish to view them must sign a liability waiver.`,
    philosophy: `Curie believed in the absolute primacy of work. "One never notices what has been done; one can only see what remains to be done," she wrote. She had no patience for social recognition or for the limitations placed on her by gender. She simply continued.

She was deeply secular and scientific in her worldview, but not without wonder. The discovery of radioactivity - the spontaneous emission of energy from atoms - revealed that matter was not inert, that inside every atom was a kind of fire. She found this astonishing. "I am among those who think that science has great beauty," she said. "A scientist in his laboratory is not a mere technician: he is also a child confronting natural phenomena that impress him like fairy tales."`,
    keyWorks: [
      'Discovery of Polonium (1898)',
      'Discovery of Radium (1898)',
      'Theory of Radioactivity',
      'Nobel Prize in Physics (1903)',
      'Nobel Prize in Chemistry (1911)',
      'Development of mobile X-ray units for WWI',
    ],
    famousQuote: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.',
    legacy: `Curie's legacy in science is immense - radioactivity, X-rays, cancer treatment using radioactive isotopes, nuclear energy, nuclear medicine. But perhaps her greater legacy is as proof that systems of exclusion are wrong: that the person they excluded may be the very person who changes the world. The fact that she had to fight for every laboratory, every recognition, every professional right makes her achievements not smaller but larger. She did it all while the world told her she shouldn't be there.`,
    lessonsForToday: [
      'Work is its own reward. Not recognition. Not approval. The work itself.',
      'The obstacles between you and your work are smaller than you think.',
      'Wonder is a form of intelligence.',
      'The system that excludes you may not survive the exclusion.',
    ],
    connection: 'Every X-ray ever taken carries a trace of Marie Curie\'s work. The smoke detector in your home is based on radioactive principles she discovered.',
  },
  {
    id: 'kalam',
    name: 'A.P.J. Abdul Kalam',
    nameHindi: 'ए.पी.जे. अब्दुल कलाम',
    born: '15 October 1931',
    died: '27 July 2015',
    nationality: 'Indian',
    domain: 'Aerospace Scientist, President of India, Teacher',
    imageUrl: '/images/vibhav/kalam.png',
    tagline: 'The Missile Man of India who chose to teach children rather than attend state banquets.',
    biography: `Avul Pakir Jainulabdeen Abdul Kalam was born on October 15, 1931 in Rameswaram, a small island town in Tamil Nadu. His father, Jainulabdeen, was a boat owner and imam of a local mosque. The family was poor. Kalam sold newspapers as a child to help with household expenses. He was fascinated by birds and by flight - watching the seabirds over Rameswaram harbor made him dream of aircraft.

He studied physics at Saint Joseph's College, Tiruchirappalli, then went to the Madras Institute of Technology to study aerospace engineering. In 1958, he joined the Defence Research and Development Organisation (DRDO). He worked on hovercraft, on satellites, on missiles - patiently, without glamour, in the service of his country's independence.

His great achievement was the Pokhran-II nuclear tests of 1998 - he was Chief Scientific Adviser to the government and played a central role in planning the tests. India became only the sixth country to have demonstrated nuclear capability. He was the hero of Indian science.

From 2002 to 2007, Kalam served as the 11th President of India - called "the People's President" because of his unusual accessibility and his insistence on spending time with children and students rather than at formal state functions. He was known to invite schoolchildren to Rashtrapati Bhavan for tea. He was known to respond to letters from children. He slept very little - usually only two or three hours - and spent the rest of his time working, reading, or writing.

After his presidency, Kalam returned to teaching. He taught at universities across India and gave thousands of lectures, always returning to the same themes: dream big, work hard, choose mentors carefully, never stop learning.

He died on July 27, 2015, while delivering a lecture on "creating a livable planet" at IIM Shillong. He collapsed mid-sentence. He was 83.`,
    philosophy: `Kalam's philosophy was simple, warm, and consistent across decades: India's youth were its greatest resource, and their dreams were the country's future. He believed that every person - regardless of background, religion, or region - had within them the capacity for greatness, if only they could be shown the way.

He was deeply spiritual despite being a scientist. He read the Bhagavad Gita and the Quran with equal reverence. He played the veena. He wrote poetry in Tamil. He believed that science and spirituality were not in conflict - both were searches for truth, both required humility before what one didn't yet understand.

His book Wings of Fire - part autobiography, part inspirational manual - has sold millions of copies and is perhaps the most-read autobiography in modern India.`,
    keyWorks: [
      'SLV-3 satellite launch vehicle (1980)',
      'Integrated Guided Missile Development Programme',
      'Agni, Prithvi, Akash missile systems',
      'Pokhran-II nuclear tests (1998)',
      'Wings of Fire (autobiography, 1999)',
      'Ignited Minds (2002)',
      '11th President of India (2002-2007)',
    ],
    famousQuote: 'Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.',
    legacy: `Kalam's legacy is divided between science and inspiration. In science, he led India to self-sufficiency in missiles and space technology. In inspiration, he reached an extraordinary number of people - especially children, especially the children of India's small towns and villages who had no models of what was possible for people like them. He was that model. A poor boy from a small island who became the most powerful man in India, who never lost the simplicity of the poor boy.`,
    lessonsForToday: [
      'Dream bigger than your circumstances.',
      'Teach what you know. Teaching is not a lesser calling - it may be the most important one.',
      'Your religion and your work do not have to conflict. Let both make you more human.',
      'When you have power, use it to open doors - not to close them.',
    ],
    connection: 'If you have ever felt that your origin limits your destination, Kalam\'s life is a direct argument against that feeling.',
  },
  {
    id: 'einstein',
    name: 'Albert Einstein',
    nameHindi: 'अल्बर्ट आइंस्टाइन',
    born: '14 March 1879',
    died: '18 April 1955',
    nationality: 'German-American',
    domain: 'Theoretical Physicist',
    imageUrl: '/images/vibhav/einstein.jpg',
    tagline: 'He reimagined space, time, matter, and energy in a single year at 26.',
    biography: `Albert Einstein was born on March 14, 1879 in Ulm, Kingdom of Württemberg, Germany. He was a late talker - his parents worried he might have a cognitive disability. He did not speak fluently until age four or five. He disliked the rote memorization that German schools demanded. He felt alienated in formal education from the beginning.

But he taught himself calculus by fourteen. He had what he called thought experiments - he would imagine himself riding alongside a beam of light, or falling in an elevator, and think through what physics would look like from those perspectives. These imaginative leaps, not laboratory experiments, were the engine of his greatest discoveries.

In 1905 - his Annus Mirabilis, his miracle year - Einstein published four papers that each would have made him famous. The first explained the photoelectric effect (demonstrating that light comes in packets - photons - for which he later won the Nobel Prize). The second explained Brownian motion, confirming the existence of atoms. The third was the Special Theory of Relativity - time and space are not fixed; they stretch and compress depending on relative velocity. The fourth derived E = mc² - the equivalence of mass and energy, the equation that would eventually lead to nuclear power.

He was working as a patent clerk at the time. He had no laboratory, no academic position, no collaborators.

The General Theory of Relativity came in 1915 - a decade of more thought experiments, false starts, and one of the most beautiful intellectual struggles in history. It described gravity not as a force but as a curvature in spacetime caused by mass. Its predictions - that light bends around massive objects, that clocks run slower near large masses, that space itself expands - have been confirmed with extraordinary precision by every observation since.

Einstein fled Germany in 1933 when Hitler came to power - he was Jewish, and the Nazis had already confiscated his property and put a price on his head. He settled at Princeton's Institute for Advanced Study, where he spent the rest of his life searching for a unified field theory that would reconcile general relativity with quantum mechanics. He never found it. But the search produced thousands of pages of work that physicists are still mining today.`,
    philosophy: `Einstein was deeply spiritual without being religious in the institutional sense. He spoke of a "cosmic religious feeling" - the sense of awe before the mysteries of the universe. "The most beautiful thing we can experience is the mysterious," he wrote. "It is the source of all true art and science."

He was a pacifist who - paradoxically and with great anguish - signed the letter to Roosevelt that initiated the Manhattan Project. He believed that Nazi Germany might develop the bomb first, and that this would be catastrophic. When the bombs fell on Hiroshima and Nagasaki, he was devastated. He spent his last years working for nuclear disarmament.

He was also a committed socialist and anti-racist. He called racism America's "worst disease" and gave lectures at Black universities at a time when most white academics would not. He befriended Paul Robeson and W.E.B. Du Bois.`,
    keyWorks: [
      'Special Theory of Relativity (1905)',
      'E = mc² (1905)',
      'Photoelectric Effect explanation (1905) - Nobel Prize 1921',
      'General Theory of Relativity (1915)',
      'Bose-Einstein Condensate (1924-25)',
      'Einstein-Podolsky-Rosen paradox (1935)',
    ],
    famousQuote: 'Imagination is more important than knowledge. For knowledge is limited, whereas imagination encircles the world.',
    legacy: `General relativity underlies GPS satellites - without relativistic corrections, GPS would be off by 11 km per day. His work on the photoelectric effect made solar panels possible. The Large Hadron Collider tests his predictions constantly. Every time your phone tells you where you are, it is correcting for Einstein. His face is the face of genius in popular imagination - not because he was handsome or famous, but because the story of a patent clerk rewriting the laws of the universe in his spare time is the ultimate story of the power of thought.`,
    lessonsForToday: [
      'Imagination is a form of intelligence, not a distraction from it.',
      'Work alone, patiently, on what seems impossible. The impossible has been wrong before.',
      'The universe is under no obligation to be comprehensible. The fact that it largely is, is astonishing.',
      'Use whatever power you have in service of those who have less.',
    ],
    connection: 'Space-time is curved right now, around you, because of the Earth\'s mass. You are living inside Einstein\'s theory.',
  },
];

export default function VibhavPage() {
  const dayOfYear = getDayOfYear();
  const featuredIndex = dayOfYear % PEOPLE.length;
  const featured = PEOPLE[featuredIndex];
  const [selected, setSelected] = useState<Person>(featured);
  const [expandedSection, setExpandedSection] = useState<string | null>('biography');

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Header */}
        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Person of the Day</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>विभाव - Vibhav</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            One extraordinary life, explored deeply. A different person each day.
          </p>
        </motion.div>

        {/* Person selector pills */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          animate="animate"
          className="flex gap-2 flex-wrap"
        >
          {PEOPLE.map((person, i) => (
            <motion.button
              key={person.id}
              variants={STAGGER_ITEM}
              onClick={() => { setSelected(person); setExpandedSection('biography'); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === person.id ? 'var(--accent-saffron)' : 'var(--bg-tertiary)',
                color: selected.id === person.id ? 'white' : 'var(--text-muted)',
                border: i === featuredIndex ? '2px solid var(--accent-saffron)' : '1px solid var(--border-default)',
              }}
            >
              {person.name}
              {i === featuredIndex && <span className="ml-1 opacity-70">• Today</span>}
            </motion.button>
          ))}
        </motion.div>

        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="space-y-5"
          >
            {/* Hero */}
            <div className="card-base overflow-hidden">
              <div className="relative h-56 sm:h-72 bg-gray-100" style={{ background: 'var(--bg-tertiary)' }}>
                <img
                  src={selected.imageUrl}
                  alt={selected.name}
                  className="w-full h-full object-cover object-top"
                  onError={e => { const el = e.target as HTMLImageElement; el.src = '/images/vibhav/tesla.png'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white leading-tight">{selected.name}</h2>
                  <p className="font-devanagari text-sm text-white/70 mt-0.5">{selected.nameHindi}</p>
                  <p className="text-sm text-white/60 mt-1">{selected.born} - {selected.died || 'Present'}</p>
                  <p className="text-xs text-white/50">{selected.nationality} · {selected.domain}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="font-serif italic text-lg" style={{ color: 'var(--text-primary)' }}>
                  "{selected.tagline}"
                </p>
              </div>
            </div>

            {/* Famous Quote */}
            <div className="card-base p-6 relative" style={{ background: 'color-mix(in srgb, var(--accent-saffron) 6%, var(--bg-secondary))' }}>
              <div className="absolute top-6 right-6">
                <ReadAloudButton
                  text={selected.famousQuote}
                  lang="en-IN"
                  size="sm"
                />
              </div>
              <p className="section-label mb-3">In Their Own Words</p>
              <blockquote className="font-serif text-xl leading-relaxed pr-8" style={{ color: 'var(--text-primary)' }}>
                "{selected.famousQuote}"
              </blockquote>
              <p className="text-sm mt-3" style={{ color: 'var(--text-muted)' }}>- {selected.name}</p>
            </div>

            {/* Expandable sections */}
            {[
              { key: 'biography', title: 'Life Story', content: selected.biography },
              { key: 'philosophy', title: 'Philosophy & Worldview', content: selected.philosophy },
              { key: 'legacy', title: 'Legacy', content: selected.legacy },
              { key: 'connection', title: 'Connection to Now', content: selected.connection },
            ].map(section => (
              <div key={section.key} className="card-base overflow-hidden">
                <div className="w-full relative">
                  <div className="flex items-center justify-between p-5">
                    <button
                      onClick={() => setExpandedSection(expandedSection === section.key ? null : section.key)}
                      className="flex-1 text-left font-semibold text-sm"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {section.title}
                    </button>
                    
                    <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
                      <ReadAloudButton
                        text={`${section.title}. ${section.content}`}
                        lang="en-IN"
                        size="sm"
                      />
                      <button
                        onClick={() => setExpandedSection(expandedSection === section.key ? null : section.key)}
                        className="p-1 rounded-full hover:bg-secondary transition-all"
                      >
                        <motion.div animate={{ rotate: expandedSection === section.key ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
                        </motion.div>
                      </button>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {expandedSection === section.key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t" style={{ borderColor: 'var(--border-default)' }}>
                        <div className="pt-4 space-y-3">
                          {section.content.split('\n\n').map((para, i) => (
                            <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Key Works */}
            <div className="card-base p-5 space-y-3">
              <p className="section-label">Key Works & Contributions</p>
              <ul className="space-y-2">
                {selected.keyWorks.map((work, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--accent-saffron)' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{work}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lessons */}
            <div className="card-base p-5 space-y-3">
              <p className="section-label">What Their Life Teaches Us</p>
              <div className="space-y-3">
                {selected.lessonsForToday.map((lesson, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
                    <span className="text-xs font-bold mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-saffron)' }}>{i + 1}</span>
                    <p className="text-sm leading-relaxed font-serif italic" style={{ color: 'var(--text-primary)' }}>{lesson}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
