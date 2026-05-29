# Pravah — Remaining Rooms Implementation Prompt

## For Antigravity | May 2026



---



## CONTEXT & ABSOLUTE CONSTRAINTS



You are continuing work on **Pravah (प्रवाह)** — a neuroscience-based cognitive sanctuary app. The following has already been implemented in previous sessions:



**Already done — do not touch:**

- Aarambh (Today's Thread, Evening Mirror, glow pulse)

- Manthan (Mental Models room)

- Safar (Dual destination system)

- Bhasha (Shabda + Samvaad merged)

- Darshan (Five-tradition structure)

- Sutra Notes system (✦ button, Aarambh weekly surface, Antarman 6th tab)

- Spaced Revisit system (BookMarked button, Aarambh revisit cards)

- Agni Habit Archaeology

- **Antarman — do not touch a single line. Zero changes. Leave exactly as it is.**

- Bug fixes (Antarman cursor, Sutr mobile, Noor mobile) — already fixed



**Design principles — never violate:**

- Soft, muted, contemplative aesthetic — warm ivory (#F5F0E8) day, warm charcoal (#141210) night

- All text minimum 7:1 contrast ratio (WCAG AAA)

- Fonts: Cormorant Garamond (poetry/quotes/headings), DM Sans (UI/body), Noto Serif Devanagari (Hindi)

- No jarring animations — everything moves like a slow exhale

- No em dashes anywhere — hyphens only

- Indian voice TTS (hi-IN priority, rate 0.75, pitch 0.85)

- No guilt, no streaks pressure, no social features

- Background painting always subtle (max 25% opacity)



**Tech stack:** Next.js 14 App Router, TypeScript strict, Tailwind CSS v3 + CSS variables, Framer Motion v11, Firebase Firestore (asia-south1), Howler.js, Zustand, Lucide React, Recharts



**Daily content architecture (apply to every room in this prompt):**



```typescript

// Content lives as static arrays in each room's data file:

// src/app/(app)/{room}/data.ts

// No Firestore dependency for content — arrays indexed by dayIndex



// dayIndex computation (use this exact utility, or add to src/lib/utils/date.ts):

export function getD
<truncated 45215 bytes>
                          // Aim for: "A day on Venus is longer than a year on Venus."

    why_its_delightful: string; // 20-30 words. What makes this fact wonderful.

  };

  brain_teaser: {

    question: string;           // A puzzle, riddle, or lateral thinking problem.

    reveal: string;             // The answer — hidden until user taps "Reveal"

    type: 'logic' | 'lateral' | 'mathematical' | 'linguistic' | 'visual_described';

  };

  creative_constraint: {

    invitation: string;         // One creative micro-challenge. 

                                 // No materials needed. Can be done mentally.

                                 // "Name 5 things in your current room that share a color."

                                 // "Write a 6-word story about today."

                                 // "Describe your current mood as a weather system."

                                 // "What animal would your current energy be?"

                                 // These are creative prompts, not productivity tasks.

  };

}

```



**Joke reveal pattern:** Show setup. Below it: a "Punchline →" button. On tap: punchline appears with a gentle ease-in. No dramatic animation — just a reveal.



**Brain teaser reveal:** Same pattern — question shown, answer hidden behind "Reveal →" tap.



**Seed — 90 entries minimum.** Brain teasers: classic lateral thinking problems (the surgeon paradox, the man in the elevator, river crossing puzzles), wordplay riddles, mathematical curiosities (the birthday paradox stated as a puzzle), logic puzzles that aren't frustrating. Creative constraints: inspired by Brian Eno's Oblique Strategies and improv theater warm-ups.



**UI layout:**

- Four sections as soft cards — each with its own character

- Joke card: slightly warmer background tint

- Fun fact card: a soft "✦" or star motif in corner

- B
<truncated 11729 bytes>

NOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need.

=== STEP 1912 ===
<USER_REQUEST>
go ahead
</USER_REQUEST>
<ADDITIONAL_METADATA>
The current local time is: 2026-05-28T18:36:32+05:30.
</ADDITIONAL_METADATA>

=== STEP 1919 ===
<USER_REQUEST>
continue
</USER_REQUEST>
<ADDITIONAL_METADATA>
The current local time is: 2026-05-28T18:40:54+05:30.
</ADDITIONAL_METADATA>

=== STEP 2177 ===
<USER_REQUEST>
continue
</USER_REQUEST>
<ADDITIONAL_METADATA>
The current local time is: 2026-05-29T00:07:58+05:30.
</ADDITIONAL_METADATA>

