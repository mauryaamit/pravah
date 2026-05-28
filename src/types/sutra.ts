// src/types/sutra.ts
// Type definition for Sutra Notes cross-room saved snippets

export interface SutraNote {
  id: string;
  roomId: string;
  roomName: string;
  contentTitle: string; // heading or snippet of the content captured
  userNote: string;     // the user's own annotation
  date: string;         // YYYY-MM-DD
  createdAt?: unknown;  // Firestore Timestamp
}
