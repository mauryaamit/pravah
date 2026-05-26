/**
 * Generates minimal WAV ambient sound files for the 4 broken tracks.
 * These are simple noise-based tracks that loop seamlessly.
 * WAV is supported natively by browsers as audio src.
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/sounds');

const SAMPLE_RATE = 22050; // 22kHz mono
const DURATION = 30; // 30 seconds, loops seamlessly
const NUM_SAMPLES = SAMPLE_RATE * DURATION;

function writeWav(filename, generateSample) {
  const dataSize = NUM_SAMPLES * 2; // 16-bit = 2 bytes per sample
  const buf = Buffer.alloc(44 + dataSize);

  // WAV header
  buf.write('RIFF', 0);
  buf.writeUInt32LE(36 + dataSize, 4);
  buf.write('WAVE', 8);
  buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16); // PCM chunk size
  buf.writeUInt16LE(1, 20);  // PCM format
  buf.writeUInt16LE(1, 22);  // mono
  buf.writeUInt32LE(SAMPLE_RATE, 24);
  buf.writeUInt32LE(SAMPLE_RATE * 2, 28); // byte rate
  buf.writeUInt16LE(2, 32);  // block align
  buf.writeUInt16LE(16, 34); // bits per sample
  buf.write('data', 36);
  buf.writeUInt32LE(dataSize, 40);

  // Generate PCM samples
  for (let i = 0; i < NUM_SAMPLES; i++) {
    const sample = Math.max(-1, Math.min(1, generateSample(i)));
    const int16 = Math.round(sample * 32767);
    buf.writeInt16LE(int16, 44 + i * 2);
  }

  writeFileSync(join(OUT, filename), buf);
  console.log(`✓ Generated ${filename} (${(buf.length / 1024).toFixed(0)} KB)`);
}

// Pseudo-random noise generator (fast, consistent)
function noise(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xFFFFFFFF;
    return (s / 0x80000000) - 1;
  };
}

// Low-pass filter (simple single-pole IIR)
function makeLPF(cutoffHz) {
  const dt = 1 / SAMPLE_RATE;
  const rc = 1 / (2 * Math.PI * cutoffHz);
  const alpha = dt / (rc + dt);
  let prev = 0;
  return (x) => { prev = prev + alpha * (x - prev); return prev; };
}

// ── 1. River / Flowing Water ──────────────────────────────────────────────────
// Bandpass filtered noise with gentle modulation (sounds like a brook)
writeWav('river.mp3', (() => {
  const rng = noise(42);
  const lpf1 = makeLPF(800);
  const lpf2 = makeLPF(400);
  return (i) => {
    const t = i / SAMPLE_RATE;
    const raw = rng();
    const filtered = lpf1(lpf2(raw));
    // Subtle amplitude modulation: slow waves 0.03Hz
    const mod = 0.8 + 0.2 * Math.sin(2 * Math.PI * 0.03 * t);
    // Add gentle high-frequency sparkle for water shimmer
    const shimmer = 0.04 * Math.sin(2 * Math.PI * 1200 * t + Math.sin(2 * Math.PI * 0.7 * t) * 3);
    return (filtered * 0.6 + shimmer) * mod * 0.5;
  };
})());

// ── 2. Café Ambience ──────────────────────────────────────────────────────────
// Layered: low murmur + occasional mid-range bursts (chatter) + soft hiss
writeWav('cafe.mp3', (() => {
  const rng1 = noise(123);
  const rng2 = noise(456);
  const lpf_low = makeLPF(250);  // low rumble = room tone
  const lpf_mid = makeLPF(1200); // mid = chatter
  return (i) => {
    const t = i / SAMPLE_RATE;
    const roomTone = lpf_low(rng1()) * 0.3;
    const chatter = lpf_mid(rng2()) * 0.2;
    // Amplitude envelope for chatter - random-feeling modulation
    const env = 0.5 + 0.5 * Math.abs(Math.sin(2 * Math.PI * 0.11 * t + 1.3)
                                    * Math.sin(2 * Math.PI * 0.23 * t + 0.7));
    // Subtle cup-clink-like clicks at random intervals
    const clickPhase = (t * 0.3) % 1;
    const click = (clickPhase < 0.002) ? 0.15 * (1 - clickPhase / 0.002) : 0;
    return (roomTone + chatter * env + click) * 0.55;
  };
})());

// ── 3. Library Ambience ───────────────────────────────────────────────────────
// Very quiet: faint air hiss + occasional subtle creak
writeWav('library.mp3', (() => {
  const rng = noise(789);
  const lpf = makeLPF(600);
  return (i) => {
    const t = i / SAMPLE_RATE;
    const airHiss = lpf(rng()) * 0.08; // very quiet
    // Occasional page-turn: brief filtered noise burst
    const pagePhase = (t * 0.05) % 1; // every ~20 seconds
    const page = (pagePhase < 0.015) ? lpf(rng()) * 0.2 * (1 - pagePhase / 0.015) : 0;
    // Subtle HVAC hum at 60Hz
    const hum = 0.02 * Math.sin(2 * Math.PI * 60 * t);
    return (airHiss + page + hum) * 0.4;
  };
})());

// ── 4. Tibetan Singing Bowl ───────────────────────────────────────────────────
// Sustained resonant tone with overtones + slow fade envelope cycling
writeWav('singing-bowl.mp3', (() => {
  // Fundamental ~432 Hz with harmonics at 2x, 3x, 5x (bowl partials)
  const f0 = 432;
  return (i) => {
    const t = i / SAMPLE_RATE;
    // Slow 6-second strike cycle that loops
    const cycle = t % 6;
    // Attack 0.05s, decay to sustain, release
    let env;
    if (cycle < 0.05) {
      env = cycle / 0.05; // attack
    } else {
      env = Math.exp(-0.5 * (cycle - 0.05)); // exponential decay
    }
    // Bowl partials: fundamental + inharmonic overtones
    const bowl = 0.5  * Math.sin(2 * Math.PI * f0 * t)        // fundamental
               + 0.25 * Math.sin(2 * Math.PI * f0 * 2.756 * t) // 2nd partial (inharmonic)
               + 0.12 * Math.sin(2 * Math.PI * f0 * 5.404 * t) // 3rd partial
               + 0.06 * Math.sin(2 * Math.PI * f0 * 8.933 * t); // 4th partial
    // Gentle reverb tail: add a slightly delayed copy
    const delay = Math.max(0, cycle - 0.1);
    const tail = 0.15 * Math.exp(-0.8 * delay) * Math.sin(2 * Math.PI * f0 * (t - 0.1));
    return (bowl + tail) * env * 0.45;
  };
})());

console.log('\nAll ambient audio files generated successfully!');
console.log('Note: Files are WAV format with .mp3 extension - browsers will still play them fine.');
