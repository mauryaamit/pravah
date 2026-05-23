// src/lib/utils/identity.ts
// Pure computation of identity dimensions from room visit data.
// No side effects. This is the foundation of the "who you are becoming" system.

export type IdentityDimension =
  | 'philosopher'
  | 'poet'
  | 'explorer'
  | 'builder'
  | 'storyteller'
  | 'scientist'
  | 'contemplative';

export interface IdentityScore {
  dimension: IdentityDimension;
  label: string;
  score: number;       // 0–100
  rooms: string[];     // contributing rooms
  whisper: string;     // shown when score > threshold
}

// Which rooms feed which dimension
const DIMENSION_ROOMS: Record<IdentityDimension, string[]> = {
  philosopher:   ['darshan', 'manthan', 'bodh'],
  poet:          ['sukoon', 'kathakar', 'riyaz'],
  explorer:      ['safar', 'cosmos', 'aranya', 'duniya'],
  builder:       ['agni', 'bargad'],
  storyteller:   ['kathakar', 'lekhak', 'vibhav'],
  scientist:     ['neurolab', 'cosmos', 'bodh', 'neelakurinji'],
  contemplative: ['antarman', 'sukoon', 'manthan', 'sukoon'],
};

const DIMENSION_META: Record<IdentityDimension, { label: string; whisper: string }> = {
  philosopher:   { label: 'Philosopher',   whisper: 'You are learning to ask better questions.' },
  poet:          { label: 'Poet',          whisper: 'You notice what others walk past.' },
  explorer:      { label: 'Explorer',      whisper: 'Your curiosity has no borders.' },
  builder:       { label: 'Builder',       whisper: 'You are becoming more consistent than you know.' },
  storyteller:   { label: 'Storyteller',   whisper: 'You understand that all wisdom lives in stories.' },
  scientist:     { label: 'Scientist',     whisper: 'You want to understand, not just believe.' },
  contemplative: { label: 'Contemplative', whisper: 'Your inner world is growing quieter and deeper.' },
};

// visitCounts: { roomId: number of visits }
export function computeIdentityScores(visitCounts: Record<string, number>): IdentityScore[] {
  const totalVisits = Object.values(visitCounts).reduce((a, b) => a + b, 0) || 1;

  return (Object.keys(DIMENSION_ROOMS) as IdentityDimension[]).map(dim => {
    const rooms = DIMENSION_ROOMS[dim];
    const dimVisits = rooms.reduce((sum, r) => sum + (visitCounts[r] || 0), 0);
    // Score: weighted contribution relative to total, capped at 100
    const rawScore = Math.min(100, Math.round((dimVisits / (rooms.length * 3)) * 100));

    return {
      dimension: dim,
      label: DIMENSION_META[dim].label,
      score: rawScore,
      rooms,
      whisper: DIMENSION_META[dim].whisper,
    };
  }).sort((a, b) => b.score - a.score);
}

// Returns the dominant dimension (highest score), or null if too early
export function getDominantDimension(scores: IdentityScore[]): IdentityScore | null {
  const top = scores[0];
  if (!top || top.score < 15) return null;
  return top;
}

// Returns a daily growth whisper for Aarambh
export function getDailyWhisper(scores: IdentityScore[], totalDays: number): string {
  if (totalDays < 2) return 'Your journey here is just beginning. There is no rush.';
  if (totalDays < 7) return `Day ${totalDays}. Something is already shifting inside you.`;

  const dominant = getDominantDimension(scores);
  if (dominant) return dominant.whisper;

  const generic = [
    'Your curiosity is crossing domains. That is rare and beautiful.',
    'You are building a mind that cannot be easily unseen.',
    'Every room you visit leaves a small trace. They are accumulating.',
    'The life of the mind is the longest adventure there is.',
  ];
  return generic[totalDays % generic.length];
}
