'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { getDayIndex } from '@/lib/utils/date';
import { FADE_UP } from '@/lib/utils/motion';
import { cn } from '@/lib/utils/cn';
import ReadAloudButton from '@/components/shared/ReadAloudButton';

// 30 curated daily discoveries - cross-domain, serendipitous, mind-expanding
const DISCOVERIES = [
  {
    category: 'Quantum',
    title: 'The Quantum Eraser',
    body: 'In a double-slit experiment, particles behave like waves until you observe them. But there is a stranger version: the quantum eraser. If you measure which slit the particle goes through, the wave pattern disappears. If you then "erase" that information - even after the particle has already landed - the wave pattern comes back. The future can appear to influence the past. Physicists are not sure what this means. Neither are philosophers.',
    prompt: 'What would you erase from your past, if it meant changing your present?',
    color: '#3A5A8A',
  },
  {
    category: 'Sufi Wisdom',
    title: 'Rumi on the Reed Flute',
    body: 'The Masnavi begins with the image of a reed flute crying. Rumi writes: "Listen to the reed flute, how it tells a tale, complaining of separations." The reed has been cut from the reed bed. Its music is the sound of longing. Rumi\'s entire philosophy is contained in this image: separation is the source of music. Pain is not the enemy of beauty. It is how beauty arrives.',
    prompt: 'What longing in your life has produced your most beautiful work or thought?',
    color: '#8B4A7C',
  },
  {
    category: 'Nature',
    title: 'Mycelium Networks',
    body: 'Beneath every old forest is a network of fungal threads called mycelium, connecting tree roots across hundreds of meters. Trees use this network to share nutrients, water, and even warning signals when attacked by insects. Scientists call it the Wood Wide Web. Old-growth forests have the richest networks. Dying trees send their remaining carbon to their neighbors through the network before they fall.',
    prompt: 'What invisible networks sustain you that you rarely acknowledge?',
    color: '#4A7C59',
  },
  {
    category: 'Film',
    title: 'Andrei Tarkovsky on Time',
    body: 'Andrei Tarkovsky, director of Stalker and Solaris, believed cinema was the art of sculpting in time. He took long, slow shots deliberately - sometimes minutes of nothing but dripping water, reflected light, a sleeping face. He said: "The allotted function of art is not, as is often assumed, to put across ideas, to propagate thoughts, to serve as example. The aim of art is to prepare a person for death, to plough and harrow his soul, rendering it capable of turning to good."',
    prompt: 'When did you last let yourself be completely still without a purpose?',
    color: '#6B7FA6',
  },
  {
    category: 'Language',
    title: 'Saudade',
    body: 'Portuguese has a word with no direct English translation: saudade. It means a melancholic longing or nostalgia for something beautiful that has passed, or perhaps never existed at all. It is not sadness exactly. It is the feeling of loving something that is absent. The word appears in Fado music, in Brazilian literature, in the writing of Fernando Pessoa. Some linguists believe it is almost untranslatable because it requires a particular relationship with loss.',
    prompt: 'What do you feel saudade for right now?',
    color: '#5B7FA6',
  },
  {
    category: 'Psychology',
    title: 'The Spotlight Effect',
    body: 'You walk into a room having spilled coffee on your shirt. You are certain everyone notices. Psychologists call this the Spotlight Effect: we overestimate how much others observe our flaws, embarrassments, and mistakes. Studies show people notice perhaps 50% of what we think they do. The reason is simple - everyone else is also under their own spotlight, convinced the room is watching them too.',
    prompt: 'What have you been embarrassed about that probably no one else remembers?',
    color: '#D4A853',
  },
  {
    category: 'Astronomy',
    title: 'The Great Filter',
    body: 'The Fermi Paradox asks: if the universe is billions of years old and full of planets, where is everyone? One answer is the Great Filter - some barrier that prevents civilizations from becoming interstellar. The disturbing question is whether the filter is behind us (we survived something most don\'t) or ahead of us (something is coming). The discovery of simple life on Mars would be terrifying - it would suggest the filter is ahead.',
    prompt: 'What do you think the greatest civilizational challenge of the next 100 years will be?',
    color: '#3A4A7C',
  },
  {
    category: 'Art',
    title: 'Wabi-Sabi',
    body: 'Japanese aesthetics contains a concept called wabi-sabi: the beauty of imperfection, impermanence, and incompleteness. A tea bowl with a crack repaired in gold is more beautiful than an uncracked one. A garden where the moss grows unevenly is more alive than a manicured one. An aged face tells more than a young one. This is not resignation to decay. It is the recognition that impermanence is where beauty actually lives.',
    prompt: 'What imperfection in your life have you been trying to fix that might actually be beautiful?',
    color: '#8B6355',
  },
  {
    category: 'History',
    title: 'The Library of Alexandria',
    body: 'The Library of Alexandria did not burn in one dramatic fire. It declined across centuries - underfunded, under-staffed, visited less frequently as Alexandria itself lost political importance. The final blow came not from flames but from budget cuts. Most of what was lost was simply not copied before the papyrus scrolls decayed. Knowledge rarely dies dramatically. It is usually just quietly not passed on.',
    prompt: 'What knowledge or skill in your family or community is at risk of being lost?',
    color: '#A67C52',
  },
  {
    category: 'Mathematics',
    title: 'The Golden Ratio in Nature',
    body: 'The golden ratio (1.618...) appears in the spiral of a nautilus shell, the arrangement of sunflower seeds, the branching of trees, the shape of galaxies. It appears in the Parthenon, in da Vinci\'s work, in the proportions of the human face. Mathematicians call it phi. It emerges from the Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13... each number the sum of the previous two. Divide any number by its predecessor and you approach 1.618. The universe seems to be built on it.',
    prompt: 'Where do you find pattern and beauty where others see only randomness?',
    color: '#D4A853',
  },
  {
    category: 'Philosophy',
    title: 'The Ship of Theseus',
    body: 'Ancient Athens kept the ship of Theseus as a monument. As planks rotted, they were replaced - one by one. After centuries, every single plank had been replaced. Was it still the same ship? Now imagine the old planks being kept and reassembled. Which is the original - the continuous ship or the reassembled one? This puzzle has no answer. But it has a question that matters enormously: are you the same person you were ten years ago?',
    prompt: 'Which parts of your identity have been completely replaced? What remains original?',
    color: '#7297A6',
  },
  {
    category: 'Music',
    title: 'Silence in Music',
    body: 'John Cage composed 4\'33" - a piece performed by a pianist sitting at a piano for four minutes and thirty-three seconds without playing a single note. The music is whatever sounds happen in the room: coughs, rustling, traffic, breathing. Cage said: "There is no such thing as silence. Something is always happening that makes a sound." The piece was not about nothing. It was about paying attention to what was already there.',
    prompt: 'What sounds do you hear right now that you normally ignore completely?',
    color: '#8B4A7C',
  },
  {
    category: 'Biology',
    title: 'Tardigrades',
    body: 'Tardigrades - microscopic animals called water bears - can survive conditions that would kill almost anything else. They have been frozen at -272°C (one degree above absolute zero), boiled, desiccated for decades, exposed to the vacuum of space, and subjected to radiation 1000 times the lethal dose for humans. They do this by entering a state called cryptobiosis - essentially pressing pause on all biological processes. They are the most resilient creatures on Earth.',
    prompt: 'What is your version of cryptobiosis - your way of pressing pause when life is extreme?',
    color: '#5B8B5B',
  },
  {
    category: 'Literature',
    title: 'Borges and the Library of Babel',
    body: 'Jorge Luis Borges imagined a universe that is a library containing every possible 410-page book. Most books are pure gibberish. A few contain fragments of meaning. Some contain accurate histories of the future and explanations of everything - but finding them is impossible, and there is no catalogue. This is not fiction. It is an exact description of the internet, of genetics, of consciousness. The problem is never information. It is meaning.',
    prompt: 'How do you find meaning inside an overwhelming amount of information?',
    color: '#8B6355',
  },
  {
    category: 'Neuroscience',
    title: 'Neuroplasticity',
    body: 'Until the 1990s, scientists believed the adult brain was fixed - neurons could not regenerate and the brain\'s structure was permanent. We now know this is completely wrong. The brain physically restructures itself based on what you do repeatedly. Musicians have larger motor cortexes in the areas controlling their instrument. London taxi drivers have larger hippocampi. Meditators have thicker prefrontal cortexes. What you practice, you become - literally, at the cellular level.',
    prompt: 'What have you been practicing so consistently that it might be reshaping your brain?',
    color: '#7A6BA6',
  },
  {
    category: 'Ecology',
    title: 'The Wolves of Yellowstone',
    body: 'When wolves were reintroduced to Yellowstone in 1995 after a 70-year absence, something unexpected happened. The elk, afraid of wolves in open valleys, moved away from rivers. The vegetation along riverbanks, no longer overgrazed, grew back. More trees meant more shade, which cooled the rivers. Beavers returned. The beaver dams created ponds for fish and amphibians. The rivers themselves physically changed course. One species changed the shape of rivers. This is called a trophic cascade.',
    prompt: 'What single change in your life, if made, might cascade into unexpected transformation elsewhere?',
    color: '#4A7C59',
  },
  {
    category: 'Psychology',
    title: 'Flow State',
    body: 'Psychologist Mihaly Csikszentmihalyi spent decades studying optimal human experience and found that the most fulfilling state is neither relaxation nor peak excitement - it is flow. Flow occurs at the intersection of high challenge and high skill. Time distorts. Self-consciousness disappears. Action and awareness merge. Athletes call it being in the zone. Artists call it inspiration. Meditators call it presence. It is available to anyone, in almost any activity, when difficulty and ability are perfectly balanced.',
    prompt: 'What activity reliably puts you in flow? When did you last do it?',
    color: '#6B7FA6',
  },
  {
    category: 'Language',
    title: 'Mamihlapinatapai',
    body: 'The Yaghan language of Tierra del Fuego has a word considered one of the most difficult to translate: mamihlapinatapai. It means a look between two people, each wanting the other to do something that both desire but neither wants to initiate. The Yaghan were the indigenous people of the southern tip of South America. The language is now essentially extinct, with one remaining speaker in old age. When she goes, this word - and the exact feeling it names - will have no home in language.',
    prompt: 'What feeling do you have that you have never found the right words for?',
    color: '#5B6B8A',
  },
  {
    category: 'History',
    title: 'The Radium Girls',
    body: 'In the 1920s, young women painted clock dials with radium-based paint that glowed in the dark. They were instructed to point their brushes with their lips. Their supervisors assured them the radium was harmless. Within years, their jaws were disintegrating, their bones fracturing, their bodies glowing in the dark from within. They sued - and won, setting the legal precedent that corporations are liable for occupational health damage. Their suffering created the legal framework that protects workers today.',
    prompt: 'What protection do you benefit from today that someone suffered to create?',
    color: '#C25B3A',
  },
  {
    category: 'Astronomy',
    title: 'Pale Blue Dot',
    body: 'In 1990, as Voyager 1 was leaving the solar system, Carl Sagan persuaded NASA to turn the camera back toward Earth. From 6 billion kilometers away, Earth appears as a tiny speck of light less than a pixel in size - a pale blue dot suspended in a sunbeam. Sagan wrote: "Our planet is a lonely speck in the great enveloping cosmic dark. In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves."',
    prompt: 'When you feel the weight of the world, what perspective brings you back to proportion?',
    color: '#3A4A7C',
  },
  {
    category: 'Art',
    title: 'The Unfinished Symphony',
    body: 'Schubert wrote his eighth symphony in 1822 and left it with only two movements. He never returned to it. We do not know why. Perhaps he felt the work was complete as it was. Perhaps life simply moved on. The symphony is so perfectly balanced in its incompleteness that most scholars believe finishing it would diminish it. Some of the most powerful things in art are unfinished - because completion would close them, and openness is exactly what they need.',
    prompt: 'What have you left unfinished that might be more powerful incomplete?',
    color: '#8B7297',
  },
  {
    category: 'Philosophy',
    title: 'Epictetus on What We Control',
    body: 'Epictetus was born a slave in ancient Rome. He became one of the most important Stoic philosophers. His central teaching was simple: some things are in our control, and some things are not. What is in our control: our judgments, our desires, our actions. What is not: our body, our reputation, our property, other people\'s opinions. The suffering of most people, he said, comes from confusing the two categories. Freedom is possible in any circumstance - even slavery - because it lives entirely in the mind.',
    prompt: 'What are you currently suffering over that is actually outside your control?',
    color: '#7297A6',
  },
  {
    category: 'Biology',
    title: 'The Mantis Shrimp',
    body: 'Humans have three types of color receptors: red, green, and blue. Mantis shrimp have sixteen. They can perceive colors that humans cannot even imagine - ultraviolet, infrared, and ten additional dimensions of color between those. They also have the fastest punch of any animal - their clubs move at 23 meters per second, creating a shockwave of cavitation bubbles that can shatter aquarium glass. They are simultaneously among the most visually rich and physically powerful creatures on Earth.',
    prompt: 'What dimensions of perception do you think humans are missing?',
    color: '#4A7C8B',
  },
  {
    category: 'Neuroscience',
    title: 'The Default Mode Network',
    body: 'When you are not doing anything in particular - not focused on a task - your brain activates a network called the Default Mode Network. This network is associated with daydreaming, self-reflection, imagining the future, and thinking about other minds. Crucially, some of the brain\'s most creative and integrative work happens here. Cultures that eliminated idle time also eliminated the conditions for deep creativity. Being bored is not wasted time. It is when the brain integrates everything.',
    prompt: 'When did you last allow yourself to be truly bored without reaching for your phone?',
    color: '#7A6BA6',
  },
  {
    category: 'Wisdom',
    title: 'Marcus Aurelius on Mortality',
    body: 'Marcus Aurelius was the most powerful man in the Roman Empire. He wrote his private journal not for publication but for himself - reminders to behave well. He returned obsessively to mortality: "You could leave life right now. Let that determine what you do and say and think." This is not morbidity. It is clarity. The Stoics called this memento mori - remember you will die. It was not meant to depress. It was meant to illuminate what actually matters.',
    prompt: 'If you could leave life right now, what would you regret most deeply?',
    color: '#8A6A3A',
  },
  {
    category: 'Music',
    title: 'Raga and Time of Day',
    body: 'In classical Hindustani music, ragas are not just melodic frameworks - they are associated with specific times of day, seasons, and emotional states. Bhairav is the morning raga, evoking the stillness before dawn. Yaman is performed at dusk. Bhairavi closes concerts, inducing a mood of sweet sorrow and farewell. Playing a raga at the wrong time of day is considered musically inappropriate. Music, in this tradition, is not entertainment. It is an alignment with natural time.',
    prompt: 'What music feels true to your current time of day, season, or emotional state?',
    color: '#8B4A7C',
  },
  {
    category: 'Science',
    title: 'The Overview Effect',
    body: 'Astronauts who see Earth from space frequently describe a profound psychological transformation. They report an immediate and overwhelming sense of the Earth\'s fragility, the arbitrary nature of national borders, and a deep sense of connection with all of humanity. This has been named the Overview Effect. Frank White, who coined the term, noted that this perspective shift - available only to a handful of humans - might be the most important insight our species has ever had. The Earth has no borders from space.',
    prompt: 'What would you need to step back to, in order to see your own life with this kind of clarity?',
    color: '#3A5A8A',
  },
  {
    category: 'Philosophy',
    title: 'Camus and the Absurd',
    body: 'Albert Camus proposed that the central problem of philosophy is not existence but rather the absurd: the confrontation between a human\'s desire for clarity, meaning, and purpose, and the universe\'s absolute silence on these matters. His answer was not despair but revolt. One must imagine Sisyphus happy, he wrote. Sisyphus, condemned to roll a boulder uphill forever, must be imagined happy because the struggle itself toward the heights is enough to fill a man\'s heart.',
    prompt: 'What is your boulder? And in what moments do you feel - despite everything - almost happy pushing it?',
    color: '#6B7FA6',
  },
  {
    category: 'Language',
    title: 'Lost Languages',
    body: 'Linguists estimate that one language dies every two weeks. When a language dies, we lose not just words but entire ways of perceiving and categorizing reality. The Pirahã language of the Amazon has no numbers, no colors, no creation myth, and no past or future tense - only the present. Linguist Daniel Everett spent decades with them and concluded that their language and worldview challenged fundamental assumptions about what all human minds share. They are profoundly content. They do not believe in God or the afterlife and consider worry about the future to be foolish.',
    prompt: 'What assumptions about how the mind must work have you never questioned?',
    color: '#5B6B8A',
  },
  {
    category: 'Biology',
    title: 'Octopus Intelligence',
    body: 'Octopuses have nine brains: one central brain and one in each arm, which can act semi-independently. They can solve puzzles, open jars, play, and recognize individual human faces. They sleep, and recent studies suggest they may dream - their skin flickering with color changes during sleep, as if replaying experiences. They evolved intelligence completely separately from vertebrates - their last common ancestor with us lived 600 million years ago. There may be more than one way to become intelligent.',
    prompt: 'What if intelligence is not one thing but many different things, each equally valid?',
    color: '#4A6B8A',
  },
];

export default function DiscoveryCard() {
  const [expanded, setExpanded] = useState(false);
  const dayIndex = getDayIndex();
  const discovery = DISCOVERIES[dayIndex % DISCOVERIES.length];

  return (
    <motion.div
      variants={FADE_UP}
      initial="initial"
      animate="animate"
      className="card-base overflow-hidden cursor-pointer relative"
      style={{
        borderColor: `color-mix(in srgb, ${discovery.color} 30%, var(--border-default))`,
      }}
      onClick={() => setExpanded(e => !e)}
    >
      {/* Background painting at 5% opacity */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'url(/paintings/wanderer-fog.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Header */}
      <div className="p-5 space-y-2 relative z-10"
        style={{ background: `color-mix(in srgb, ${discovery.color} 6%, var(--bg-secondary))` }}>
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: discovery.color, letterSpacing: '0.12em' }}
          >
            {discovery.category}
          </span>
          <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
            <ReadAloudButton
              text={`${discovery.title}. ${discovery.body} ${discovery.prompt}`}
              lang="en-IN"
              size="sm"
            />
            {/* Breathing dot = alive */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full"
              style={{ background: discovery.color }}
            />
          </div>
        </div>
        <h3 className="font-serif text-xl leading-snug" style={{ color: 'var(--text-primary)' }}>
          {discovery.title}
        </h3>
        <p className="text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {discovery.body}
        </p>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.25 } }}
            className="overflow-hidden relative z-10"
          >
            <div className="px-5 pb-5 space-y-4"
              style={{ background: `color-mix(in srgb, ${discovery.color} 3%, var(--bg-secondary))` }}>
              <div className="pt-3 border-t" style={{ borderColor: 'var(--border-default)' }}>
                <p className="prose-reading text-sm" style={{ maxWidth: '100%', lineHeight: 1.85 }}>
                  {discovery.body}
                </p>
              </div>
              {/* Reflection prompt */}
              <div className="p-4 rounded-xl"
                style={{ background: `color-mix(in srgb, ${discovery.color} 8%, var(--bg-tertiary))` }}>
                <p className="text-xs font-semibold mb-2 tracking-wider"
                  style={{ color: discovery.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Reflect
                </p>
                <p className="font-serif italic text-base leading-relaxed"
                  style={{ color: 'var(--text-primary)' }}>
                  {discovery.prompt}
                </p>
              </div>
              <p className="text-xs text-center" style={{ color: 'var(--text-faint)' }}>
                Tap to collapse
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!expanded && (
        <div className="px-5 pb-4 pt-0 relative z-10">
          <span className="text-xs" style={{ color: discovery.color }}>
            Tap to explore
          </span>
        </div>
      )}
    </motion.div>
  );
}
