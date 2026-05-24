'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/utils/motion';
import PageTransition from '@/components/layout/PageTransition';
import { getDayOfYear } from '@/lib/utils/date';

const DESTINATIONS = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    hindi: 'वाराणसी',
    country: 'India',
    tagline: 'The oldest living city on Earth',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Varanasi_Ghats.jpg/800px-Varanasi_Ghats.jpg',
    intro: 'Varanasi - also called Kashi, the City of Light - has been continuously inhabited for at least 3,000 years, making it one of the oldest surviving cities in the world. It sits on the western bank of the Ganges in Uttar Pradesh, and every morning, thousands of pilgrims descend its 88 ghats to bathe in water they believe flows directly from Shiva\'s hair.',
    deepContent: `Varanasi is the kind of city that defeats language. Every writer who has tried to describe it has eventually resorted to contradiction: it is simultaneously the most alive and the most death-haunted city in India, perhaps in the world. The burning ghats of Manikarnika and Harishchandra burn 24 hours a day, 365 days a year - the pyres are never extinguished. The smoke drifts over the ghats where pilgrims bathe. Life and death are not separated here into hospitals and crematoriums, into neat institutional spaces. They are side by side on the same steps.

Hindu theology holds that dying in Kashi grants moksha - liberation from the cycle of rebirth. This is why the elderly and the terminally ill come here to die: not out of despair but out of the deepest possible hope. The Kashi Labh Mukti Bhawan is a guesthouse where people come to die - residents may stay for two weeks; if they haven't died by then, they must leave to make room for others. The rooms are usually full. The management keeps scrupulous records.

The ghats - the broad stone steps descending to the river - are the heart of Varanasi's social and spiritual life. They are not tourist attractions. They are functional infrastructure of religious practice: the washing of bodies, the carrying of corpses, the doing of puja, the children learning to swim, the sadhus meditating at the water's edge, the boatmen who have been ferrying pilgrims across the Ganges for generations. Every caste, every occupation, every aspect of Hindu life has its designated ghat.

The morning boat ride on the Ganges at dawn is, for many visitors, one of the most powerful travel experiences available in India. You watch the city wake up: the lamps floated on the water, the devotional singing rising from the ghats, the mist coming off the river, the sky turning from black to violet to gold. Everything is happening at once. The city is engaged in an act of collective worship that has been performed every morning for 3,000 years.

Varanasi is also a city of classical learning. The Banaras Hindu University - founded in 1916, one of the largest residential universities in Asia - has been a center of Sanskrit scholarship, philosophy, music, and art for a century. The tradition of Sanskrit scholarship in Varanasi is older still: the city was the center of Brahminic learning for centuries, home to the great grammarians, logicians, and philosophers of the Nyaya school. Pandit Ravi Shankar studied sitar here. Bismillah Khan - the shehnai maestro - was born here and spent his entire life here, never permanently leaving.

The Banaras that persists through the tourist industry and rapid development is simultaneously fragile and astonishingly resilient. The silk weaving tradition - Banarasi saris, considered among the finest in India - is under pressure from cheaper powerloom imitations. The old city's lanes (gallis), some barely wide enough for two people to pass, still house the traditional workshops. The sitar craftsmen, the betel leaf sellers, the ritual sweet makers - they are still there, in the same lanes their grandfathers occupied.

What makes Varanasi irreplaceable is its function as a lens: it shows you India in concentrated form - its relationship with death, its integration of the sacred and the mundane, its ancient learning, its overcrowding, its beauty, its squalor, its capacity to hold contradictions without resolving them. It is the most Indian of Indian cities, and therefore the most useful for understanding what India is actually made of.`,
    practicalWonder: 'The Ganga Aarti at the Dashashwamedh Ghat - performed every evening at sunset - involves dozens of priests performing synchronized rituals with fire, flowers, incense, and sacred implements, accompanied by devotional music. It draws thousands of witnesses. It has been performed every evening without interruption for generations.',
  },
  {
    id: 'patagonia',
    name: 'Patagonia',
    hindi: 'पटागोनिया',
    country: 'Argentina / Chile',
    tagline: 'Where the world runs out',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Fitz_Roy.jpg/800px-Fitz_Roy.jpg',
    intro: 'At the southern tip of South America, Patagonia is one of the most spectacularly empty landscapes on Earth - a region of glaciers, torres (towers of rock), pampas, and wind so constant and powerful that trees grow bent permanently sideways. It is the place the world runs out, before Antarctica begins.',
    deepContent: `Patagonia covers approximately 1 million square kilometers across southern Argentina and Chile - an area roughly the size of Egypt - and has a population of about 2 million people. Most of that population is in a few coastal cities. The interior - the vast pampas (grasslands), the Andes foothills, the great wind-blasted plateaus - is emptier than anywhere in Europe and emptier than most of Asia.

The wind is the fact of Patagonian life. The Roaring Forties - latitude bands in the Southern Hemisphere where strong westerly winds blow almost unimpeded around the globe, not stopped by any significant land mass - produce a wind regime in Patagonia of extraordinary consistency and power. Winds of 100 km/h are not unusual. The trees on the pampas grow at permanent angles, their branches all pointing in the same direction, as if frozen mid-wave. Locals say the wind has a name and a personality. It is not weather. It is character.

The Torres del Paine National Park in Chilean Patagonia is the region's most visited landscape - towers of granite that rise 2,000 meters straight from the pampas, carved by glaciers that are still retreating. The park's hiking trail, the W Circuit, takes 4-5 days and passes through ecosystems that range from wind-blasted steppe to humid forest to the edge of glacial ice fields. The Perito Moreno Glacier - in Argentine Patagonia - is one of the few glaciers in the world that is currently stable (neither advancing nor retreating significantly), and it calves enormous chunks of ice into the lake below with a sound like cannon fire, visible from viewing platforms at close range.

Charles Darwin visited Patagonia in 1832-1833 aboard the Beagle and was profoundly affected by it. The vast emptiness, the strange fauna (guanacos, rheas, pumas, condors), the indigenous Tehuelche and Kawésqar peoples who had lived there for 10,000 years - all of this contributed to the observations that would eventually lead to the theory of evolution. Darwin wrote: "In calling up images of the past, I find that the plains of Patagonia frequently cross before my eyes; yet these plains are pronounced by all wretched and useless."

And yet he found himself unable to stop thinking about them. The emptiness had a quality he couldn't name. The geographer's term for it is "sublime" - the aesthetic experience of immensity that simultaneously diminishes the observer and elevates them. The Romantic painters tried to capture it. The Patagonian landscape does it naturally: you stand at the edge of a glacier, or watch the condors circle the torres at dawn, or simply face the wind on the pampas and feel the full weight of geological time - the ice ages that shaped this landscape, the millions of years before and after human presence - and the ordinary human concerns that fill your normal attention simply fall away.

The Kawésqar people, who navigated the fjords of southern Chile in bark canoes for thousands of years, are now almost entirely gone - victims of disease, forced sedentarization, and cultural destruction during the colonial period. A few remain in Puerto Edén. The Tehuelche of Argentine Patagonia are more numerous but their traditional way of life - hunting guanaco on the pampas - was destroyed by the introduction of European sheep farming in the 19th century.

Patagonia is one of the places where the encounter between human civilization and pure geological scale is most visceral. The Torres del Paine granite was intruded into the existing rock 12 million years ago - before our genus existed. The glaciers are remnants of ice sheets that covered this entire region until 10,000 years ago. The condors overhead have a wingspan of 3 meters and can live 70 years. Everything here is older, larger, and slower than human life. Being there recalibrates your sense of scale.`,
    practicalWonder: 'In southern Patagonia, the night sky - far from any light pollution - shows the Magellanic Clouds: two irregular dwarf galaxies, visible to the naked eye, satellites of the Milky Way. Named by Magellan\'s crew when they saw them in 1519, they were the first galaxies beyond the Milky Way to be identified.',
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    hindi: 'क्योतो',
    country: 'Japan',
    tagline: 'The city that remembered how to be beautiful',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Kinkaku-ji_during_autumn.jpg/800px-Kinkaku-ji_during_autumn.jpg',
    intro: 'For over a thousand years, Kyoto was the capital of Japan - the seat of the Emperor, the center of Buddhist and Shinto practice, the birthplace of Japanese aesthetic culture. Today it is the city that most carefully preserved what Japan was before the 20th century changed everything.',
    deepContent: `Kyoto was Japan's imperial capital from 794 CE to 1869 CE - a period of over a thousand years during which it accumulated temples, shrines, gardens, palaces, and cultural traditions of extraordinary density. When Japan modernized rapidly in the Meiji era, and when World War II destroyed most of Japan's cities, Kyoto survived largely intact. The reasons are disputed - one persistent story is that American Secretary of War Henry Stimson, who had visited Kyoto on his honeymoon, personally intervened to remove it from the nuclear targeting list. Whatever the reason, Kyoto's architectural heritage survived.

The result is a city of 1,400 Buddhist temples, 400 Shinto shrines, 17 UNESCO World Heritage sites, and millions of visitors - packed into a mountain basin in central Japan where the autumn maples turn the hills red and gold in November, and the cherry blossoms transform the city in a week every April. The crowds in peak season are extraordinary. And yet: find the right temple at the right hour, and you will understand why Japanese Buddhism speaks of the possibility of sudden illumination.

The Zen gardens of Kyoto are among the most studied and imitated landscape designs in history. The karesansui - dry stone garden - at Ryoan-ji consists of fifteen rocks arranged in raked white gravel, with no plants. Its meaning has been debated for centuries. The temple's position on a hill obscures the gravel garden's full extent from any single viewing angle - you can never see all fifteen rocks simultaneously. This is considered intentional. The garden is not a representation of nature. It is a meditation object. You sit in front of it and let the mind come to stillness.

The tea ceremony (chado) reached its definitive form in Kyoto in the 16th century under the tea master Sen no Rikyu, who served Toyotomi Hideyoshi. The ceremony - now widely available to visitors in simplified form in various parts of the city - involves the preparation and consumption of matcha in a prescribed sequence of movements and attention. The point is not the tea. The point is the quality of attention required to perform each gesture correctly: the folding of the napkin, the warming of the bowl, the whisking of the tea. The ceremony is a training in presence, developed by Zen monks who found that paying total attention to simple physical actions could produce the same stillness as formal meditation.

The geisha culture of Kyoto - the geiko (Kyoto dialect for geisha) and maiko (apprentice geisha) of the Gion district - is one of the most misunderstood aspects of Japanese culture in Western perception. Geiko are performers - trained in traditional music, dance, conversation, and the tea ceremony for years before they complete their apprenticeship. The training is extraordinarily demanding: young women who enter the system as maiko at fifteen typically spend five years in intensive study before becoming full geiko. The relationship between geiko and their clients is formal, aesthetic, and professional. It is the Japanese performance tradition, in its most refined form, applied to the art of hospitality.

Kyoto's relationship with time is its most distinctive feature. Other cities rush toward their future. Kyoto seems to have made a collective decision - reinforced by heritage regulations, tourism economics, and cultural pride - to maintain the relationship with its past. This is not simply preservation. It is a different relationship with time: the recognition that the past is not behind us but within us, that what was done with care and intelligence centuries ago still has something to teach, that beauty is not fashion but something more durable.

The philosopher Nishida Kitaro - founder of the Kyoto School of philosophy, the most significant school of Japanese philosophy in the 20th century - wrote about "pure experience" as the starting point of philosophical inquiry. He was teaching at Kyoto Imperial University, walking the canal path now called the Philosopher's Walk every morning, thinking. The Philosopher's Walk is lined with cherry trees. In spring it is one of the most beautiful short walks in the world. Nishida walked it for decades. The canal was there before him. The cherry trees will be there after.`,
    practicalWonder: 'The Fushimi Inari-Taisha shrine has approximately 10,000 torii gates (traditional orange-red shrine gates) walking up the mountain behind it. Walking the full path through all the gates and back takes about 2-3 hours. The path was built by merchants who dedicated each gate as a prayer for business success. The gates have been accumulating for centuries.',
  },
];

export default function SafarPage() {
  const dayOfYear = getDayOfYear();
  const today = DESTINATIONS[dayOfYear % DESTINATIONS.length];
  const [selected, setSelected] = useState(today);
  const [showFull, setShowFull] = useState(false);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        <motion.div variants={FADE_UP} initial="initial" animate="animate" className="space-y-1">
          <p className="section-label">Travel Room</p>
          <h1 className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>सफ़र - Safar</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Travel is not tourism. It is the discovery that the world is larger than your map of it.
          </p>
        </motion.div>

        <div className="flex gap-2 flex-wrap">
          {DESTINATIONS.map((d, i) => (
            <button
              key={d.id}
              onClick={() => { setSelected(d); setShowFull(false); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: selected.id === d.id ? '#5A8A7C' : 'var(--bg-tertiary)',
                color: selected.id === d.id ? 'white' : 'var(--text-muted)',
                border: i === dayOfYear % DESTINATIONS.length ? '2px solid #5A8A7C' : '1px solid var(--border-default)',
              }}
            >
              {d.name}{i === dayOfYear % DESTINATIONS.length ? ' • Today' : ''}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-5"
          >
            <div className="card-base overflow-hidden">
              <div className="relative" style={{ paddingBottom: '55%', background: 'var(--bg-tertiary)' }}>
                <img
                  src={selected.imageUrl}
                  alt={selected.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7FBFB0' }}>{selected.country}</span>
                  <h2 className="font-serif text-2xl text-white mt-1">{selected.name}</h2>
                  <p className="font-devanagari text-sm text-white/60">{selected.hindi}</p>
                  <p className="font-serif italic text-sm text-white/80 mt-1">"{selected.tagline}"</p>
                </div>
              </div>
              <div className="p-5">
                <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{selected.intro}</p>
              </div>
            </div>

            <div className="card-base p-6 space-y-4">
              {(showFull ? selected.deepContent : selected.deepContent.split('\n\n').slice(0, 3).join('\n\n')).split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>{para}</p>
              ))}
              {!showFull && (
                <div className="text-center pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  <button onClick={() => setShowFull(true)} className="px-6 py-2.5 rounded-full text-sm font-medium" style={{ background: '#5A8A7C', color: 'white' }}>
                    Continue the Journey →
                  </button>
                </div>
              )}
            </div>

            <div className="card-base p-5" style={{ background: 'color-mix(in srgb, #5A8A7C 8%, var(--bg-secondary))', border: '1px solid #5A8A7C' }}>
              <p className="section-label mb-2" style={{ color: '#5A8A7C' }}>The Particular Wonder</p>
              <p className="font-serif italic text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{selected.practicalWonder}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
