// src/types/revisit.ts
// Type definition for Spaced Revisit items

export interface RevisitItem {
  id: string;
  roomId: string;
  roomName: string;
  contentTitle: string;
  contentSummary: string;  // brief snippet to show on revisit card
  savedDate: string;       // YYYY-MM-DD when saved
  revisitDates: string[];  // YYYY-MM-DD dates when user should revisit
  revisitedAt: string[];   // YYYY-MM-DD dates actually revisited
  createdAt?: unknown;     // Firestore Timestamp
}
