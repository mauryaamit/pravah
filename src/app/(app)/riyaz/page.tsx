'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const RAGAS = [
  {
    id: 'yaman',
    name: 'Raga Yaman',
    hindi: 'राग यमन',
    time: 'Early Evening (6pm – 9pm)',
    season: 'All seasons',
    rasa: 'Shringar (Love), Shanta (Peace)',
    thaat: 'Kalyan',
    vadiSamvadi: 'Gandhar (G) – Nishad (N)',
    aroh: 'N R G M# P D N S\'',
    avroh: 'S\' N D P M# G R S',
    description: `Raga Yaman is one of the most beloved and fundamental ragas of Hindustani classical music. It is considered among the first ragas that students learn — not because it is simple (no raga truly is) but because it exemplifies the principles of Hindustani raga grammar with unusual clarity, and because its emotional territory — romantic longing, evening calm, a certain wistfulness — is accessible without being shallow.

The defining characteristic of Yaman is its use of the teevra (raised) Madhyam — the sharp fourth. In the swarasaptaka (the seven-note scale), Yaman uses all seven notes, but with that one critical alteration: the Madhyam is raised by a half step. This single change gives Yaman its characteristic "opening" quality — a sense of spaciousness and gentle yearning that distinguishes it from ragas using the natural Madhyam.

The raga is associated with the early evening — the transition between day and night, between the activity of the afternoon and the settling of the night. This temporal association is not arbitrary in Indian classical music; it reflects centuries of observation about how certain scale structures relate to certain qualities of light, temperature, and human psychological states. The evening has a particular quality of suspended time, of the day not yet fully released — and Yaman captures this quality precisely.

Yaman belongs to the Kalyan thaat — one of the ten parent scales (thaats) of Hindustani music classified by Vishnu Narayan Bhatkhande in the early 20th century. Many beautiful ragas share the Kalyan thaat: Yaman Kalyan, Bhupali, Shuddha Kalyan. But Yaman remains the archetype — the clearest expression of what the Kalyan thaat sounds like in its fullest form.

The vadi (most important note) is Gandhar (G, the third) and the samvadi (second most important) is Nishad (N, the seventh). These two notes, with their particular relationship to the raised Madhyam, give Yaman its characteristic movement: ascending phrases that spiral through the middle octave, touching the raised Madhyam with a particular gravity, then releasing upward toward the pancham (fifth) and nishad before resolving back to the tonic.

Famous compositions in Yaman span centuries and styles. The bandish "Eri aali piya bina" — a khayal composition whose authorship is disputed but whose beauty is not — is one of the canonical Yaman compositions. Pandit Bhimsen Joshi's recordings of Yaman are considered landmarks of 20th century Hindustani vocal music. Ustad Vilayat Khan's sitar rendition of Yaman Kalyan, recorded in the 1960s, is among the great recordings of Indian classical music. The raga appears in film music too: the song "Kahin deep jale kahin dil" from Bees Saal Baad is in Yaman.`,
    listening: 'Begin with a slow alap — the opening, improvisational section without rhythm — to understand the raga\'s emotional register. Listen for the raised Madhyam: the note that opens the space. Then notice how the musician returns to the Gandhar as a resting point. The raga should feel like an evening opening slowly into night.',
  },
  {
    id: 'bhairav',
    name: 'Raga Bhairav',
    hindi: 'राग भैरव',
    time: 'Early Morning (6am – 9am)',
    season: 'All seasons',
    rasa: 'Bhakti (Devotion), Shanta (Peace), Veer (Courage)',
    thaat: 'Bhairav',
    vadiSamvadi: 'Dhaivat (D) – Rishabh (R)',
    aroh: 'S r G M P d N S\'',
    avroh: 'S\' N d P M G r S',
    description: `Raga Bhairav occupies a special place among the morning ragas of Hindustani classical music. Named for Bhairav — one of the fierce forms of Lord Shiva — it carries an ancient, profound quality that is simultaneously austere and deeply moving. The early morning has its own quality: the night hasn't quite let go, the day hasn't quite begun. Bhairav inhabits this liminal space.

Its characteristic notes are the flat Rishabh (komal re) and flat Dhaivat (komal dha) — two lowered notes that give it a gravity and depth that no other morning raga quite replicates. These two notes are its identity. You hear the komal re in the very first movement of a Bhairav performance and you know immediately where you are.

Bhairav gives name to its own thaat — it is the parent scale of the Bhairav family, which includes ragas like Ramkali, Kalingada, and Gunkali. The thaat contains both the natural Madhyam and all the notes of Bhairav proper. But the raga Bhairav itself has a specific grammar, specific characteristic phrases (pakad), and specific forbidden phrases that distinguish it from other ragas in the same thaat.

The emotional quality of Bhairav is devotional — bhakti — with an undertow of detachment and solemnity. It is the raga of the early morning prayers, of the aarti before sunrise, of the stillness before the day begins. Listening to a great Bhairav rendition in the early morning — before the world has started its noise — is one of the profound musical experiences available to a human being.`,
    listening: 'Listen in the early morning, before dawn if possible. Ustad Rashid Khan\'s Bhairav performances are widely considered among the finest of the contemporary era. Notice the movement around the komal re — how it is approached from above and below, how it becomes a center of gravity for the entire architecture of the raga.',
  },
];

const RIYAZ_ESSAY = `What does riyaz mean?

The word comes from the Arabic "riyada" — exercise, training, discipline. In the context of Indian classical music, it refers to daily practice — the disciplined, sustained, daily engagement with one's instrument or voice that is considered the foundation of the entire tradition. Not performance practice. Not preparation for a specific performance. Daily practice for its own sake, as a life practice.

Riyaz in Indian classical music is not like "practice" in the Western music tradition. Western classical musicians practice passages, pieces, technical exercises. They prepare repertoire. Indian classical musicians practice differently: they practice the basic scale (sargam), the basic rhythmic patterns (tala), the characteristic phrases (pakad) of ragas, and extended improvisations within single ragas — sometimes spending months deepening their understanding of a single raga before moving to another.

The great musicians of the tradition tell stories of their own riyaz that are almost incomprehensible in their intensity. Ustad Bismillah Khan, the shehnai maestro, reportedly practiced eight to twelve hours per day for decades. Pandit Bhimsen Joshi would do his morning riyaz beginning at 4am and continuing until the day's first proper light. The story is told of Ustad Allauddin Khan — father of Ali Akbar Khan and guru to Ravi Shankar — that he practiced for 18 hours a day and became so absorbed that he once did not notice a fire in his room until the heat became unbearable.

These stories are not simply about hard work, though they are about that. They are about a certain relationship with the art: the understanding that music, at its deepest, is not a skill to be acquired but a presence to be cultivated. The riyaz is the cultivation. Like a farmer who tends the same field every day not for any specific harvest but because the relationship with the field is the meaning of his life, the musician who does riyaz daily is building and maintaining a relationship with music that transcends any individual performance.

Pandit Ravi Shankar wrote: "The musician lives in a kind of permanent preparation for music. The performance is the moment when the preparation flowers. But the flower is not the plant — the preparation is." This is the philosophy of riyaz. The performance is the visible moment. The riyaz is the invisible life of the plant.

The tradition also holds that riyaz has a spiritual dimension. The human voice or instrument, worked daily, gradually becomes capable of sounds that it was not capable of before — not because the anatomy has changed, but because the awareness behind the playing has deepened. The distinction between the player and the playing blurs. The musician stops playing the music and begins to inhabit it. This is what the tradition calls "laya" — mergence, the loss of the boundary between the musician and the musical moment.

What does this mean practically for someone who is not a classical musician? The riyaz model offers a way of thinking about any practice that matters: daily, humble, not aimed at immediate performance or immediate reward, building something over years that no individual session could produce. Whether it is writing, drawing, mathematics, a language, or meditation — the riyaz principle says: do a little every day, let it accumulate, trust the long process. The harvest will come, but the cultivation is the life.`;

const ARTIST = {
  name: 'Pandit Ravi Shankar',
  hindi: 'पंडित रवि शंकर',
  period: '1920 – 2012',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Ravi_Shankar_1974.jpg/440px-Ravi_Shankar_1974.jpg',
  bio: `Ravi Shankar was born Robindra Shankar Chowdhury on April 7, 1920, in Varanasi, the youngest of seven brothers. He spent his early years in Paris and London, performing as a dancer in the troupe of his eldest brother Uday Shankar. He was, by his own account, more interested in pleasure than music in his teens.

The transformation came when he met Ustad Allauddin Khan — one of the greatest figures in 20th century Indian classical music, the guru of Ali Akbar Khan, Nikhil Banerjee, and through them, the shaper of the modern Hindustani instrumental tradition. Khan-sahib was famously exacting. He took Ravi Shankar under his training and subjected him to years of rigorous, intensive riyaz. Shankar has written that during the years of his training, he would practice 14-18 hours a day. He became one of the finest sitarists in the history of the instrument.

But Ravi Shankar's global significance came from his decision to share Indian classical music with a Western audience at a moment when very few were doing this. His friendship and collaboration with violinist Yehudi Menuhin (which produced the historic 1966 album "West Meets East") introduced Indian classical music to audiences in Europe and North America who had never encountered it. His relationship with George Harrison — whose interest in the sitar and in Indian philosophy profoundly shaped the Beatles' late period — brought Indian music to millions of young people in the 1960s. Harrison became a devoted student and remained a close friend until Shankar's death.

Shankar was awarded the Bharat Ratna (India's highest civilian honor) in 1999, the Polar Music Prize in 1998, and three Grammy Awards. He composed the music for Gandhi (1982), the Academy Award-winning film directed by Richard Attenborough. He performed at Woodstock in 1969, at the Concert for Bangladesh in 1971 (organized by Harrison for famine relief), and at the Concert for Democracy before India's first free elections in 1947.

His daughter Anoushka Shankar is a virtuoso sitarist in her own right. His daughter Norah Jones (by a different relationship) is a Grammy-winning pop artist. His lineage in music spans genres and continents.

What Ravi Shankar represented, more than any other single person, was the possibility of Indian classical music as a global art form — not diluted for Western audiences but shared in its full depth and integrity. He refused to simplify. He insisted on explaining the raga system, the tala system, the relationship between raga and time of day, the philosophy of the tradition. He treated Western audiences as capable of genuine engagement with something demanding and foreign. They were.`,
};

const LISTENING_LIST = [
  { title: 'Raga Yaman — Pandit Bhimsen Joshi', reason: 'The definitive khayal performance in Yaman. Joshi\'s voice in the alap section builds the raga from nothing in a way that is almost meditative. Listen with your eyes closed.' },
  { title: 'Raga Bhairav — Ustad Rashid Khan', reason: 'Rashid Khan brings Bhairav\'s early-morning gravity into the 21st century. The thumri at the end of his better recordings demonstrates how the same raga can hold different emotional temperatures simultaneously.' },
  { title: 'Offering — Ravi Shankar & Philip Glass', reason: 'The 1990 collaboration between Shankar and Glass is one of the most successful genuine fusions in music history — not sitar-over-Western-arrangement but a true structural meeting of two musical vocabularies.' },
  { title: 'Morning Raga — Ustad Ali Akbar Khan', reason: 'Raga Todi at dawn, performed on sarod. Khan-sahib plays with a quality of complete absorption that listening to it produces a sympathetic stillness in the listener. One of the great recordings of Indian music.' },
  { title: 'Samaagama — M.S. Subbulakshmi', reason: 'For a different tradition: Subbulakshmi\'s Carnatic classical singing, in Bhairavi and other ragas, is considered the benchmark of emotional depth in South Indian classical music. Her voice is sometimes described as a form of prayer that was answered.' },
];

export default function RiyazPage() {
  const dayOfYear = getDayOfYear();
  const todayRaga = RAGAS[dayOfYear % RAGAS.length];
  const [selectedRaga, setSelectedRaga] = useState(todayRaga);
  const [showRiyazFull, setShowRiyazFull] = useState(false);
  const [showBio, setShowBio] = useState(false);

  const riyazPreview = RIYAZ_ESSAY.split('\n\n').slice(0, 3).join('\n\n');

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-7">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Music Room</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>रियाज़ — Riyaz</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            In Indian classical music, the practice is never separate from the art. Riyaz is not preparation for music. It is the music.
          </p>
        </motion.div>

        {/* Raga of the day */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>Raga of the Day</h2>
            <div className="flex gap-2">
              {RAGAS.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRaga(r)}
                  className="px-3 py-1 rounded-full text-xs font-medium transition-all"
                  style={{
                    background: selectedRaga.id === r.id ? '#C4873A' : 'var(--bg-tertiary)',
                    color: selectedRaga.id === r.id ? 'white' : 'var(--text-muted)',
                    border: i === dayOfYear % RAGAS.length ? '2px solid #C4873A' : '1px solid var(--border-default)',
                  }}
                >
                  {r.name}{i === dayOfYear % RAGAS.length ? ' • Today' : ''}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRaga.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="card-base overflow-hidden"
            >
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>{selectedRaga.name}</h3>
                  <p className="font-devanagari text-lg mt-0.5" style={{ color: 'var(--text-muted)' }}>{selectedRaga.hindi}</p>
                </div>

                {/* Raga metadata grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Time of Day', value: selectedRaga.time },
                    { label: 'Rasa', value: selectedRaga.rasa },
                    { label: 'Thaat', value: selectedRaga.thaat },
                    { label: 'Vadi / Samvadi', value: selectedRaga.vadiSamvadi },
                    { label: 'Aroha', value: selectedRaga.aroh },
                    { label: 'Avaroha', value: selectedRaga.avroh },
                  ].map(item => (
                    <div key={item.label} className="p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
                      <p className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: 'var(--text-faint)' }}>{item.label}</p>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4" style={{ borderColor: 'var(--border-default)' }}>
                  {selectedRaga.description.split('\n\n').map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>{para}</p>
                  ))}
                </div>

                <div className="p-4 rounded-xl" style={{ background: 'color-mix(in srgb, #C4873A 8%, var(--bg-tertiary))' }}>
                  <p className="section-label mb-1" style={{ color: '#C4873A' }}>How to Listen</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{selectedRaga.listening}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Riyaz essay */}
        <div className="card-base p-6 space-y-4">
          <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>The Practice of Riyaz</h2>
          {(showRiyazFull ? RIYAZ_ESSAY : riyazPreview).split('\n\n').map((para, i) => (
            <p key={i} className={`text-sm leading-relaxed ${para.endsWith('?') && !para.includes(' ') ? 'font-serif text-base font-medium' : ''}`}
              style={{ color: para.endsWith('?') && !para.includes(' ') ? 'var(--text-primary)' : 'var(--text-secondary)', lineHeight: 1.85 }}>
              {para}
            </p>
          ))}
          {!showRiyazFull && (
            <button onClick={() => setShowRiyazFull(true)} className="px-5 py-2 rounded-full text-sm font-medium" style={{ background: '#C4873A', color: 'white' }}>
              Read More →
            </button>
          )}
        </div>

        {/* Featured Artist */}
        <div className="card-base overflow-hidden">
          <div className="p-5 space-y-2">
            <p className="section-label">Featured Artist</p>
            <div className="flex gap-4 items-start">
              <img
                src={ARTIST.imageUrl}
                alt={ARTIST.name}
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div>
                <h3 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>{ARTIST.name}</h3>
                <p className="font-devanagari text-sm" style={{ color: 'var(--text-muted)' }}>{ARTIST.hindi}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>{ARTIST.period}</p>
              </div>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: 'var(--border-default)' }}>
            <div className="p-5">
              <AnimatePresence>
                {showBio ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    {ARTIST.bio.split('\n\n').map((para, i) => (
                      <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>{para}</p>
                    ))}
                  </motion.div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                      {ARTIST.bio.split('\n\n')[0]}
                    </p>
                    <button onClick={() => setShowBio(true)} className="px-5 py-2 rounded-full text-sm font-medium" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                      Read Full Biography →
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Daily Listening */}
        <div className="space-y-3">
          <h2 className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>Today's Listening</h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Five pieces worth your full attention today. Search for them on any streaming platform.</p>
          {LISTENING_LIST.map((item, i) => (
            <div key={i} className="card-base p-4 space-y-1">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold flex-shrink-0 mt-0.5" style={{ color: '#C4873A' }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                  <p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--text-muted)' }}>{item.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
