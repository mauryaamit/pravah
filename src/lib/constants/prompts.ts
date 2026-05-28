// src/lib/constants/prompts.ts

export type PromptLevel = 'surface' | 'depth' | 'excavation';

export interface TieredPrompt {
  surface: string;
  depth: string;
  excavation: string;
}

export const PROMPTS: TieredPrompt[] = [
  {
    surface: "What was the most pleasant sensory detail of today (a sound, a taste, a texture)?",
    depth: "What did today ask of you that you didn't expect to give?",
    excavation: "What is the truth you are currently trying to negotiate your way around?"
  },
  {
    surface: "Describe the weather today and how it matched or mismatched your mood.",
    depth: "What was a moment today where you felt a quiet, simple sense of alignment?",
    excavation: "What are you pretending not to notice about a relationship in your life right now?"
  },
  {
    surface: "What is one thing you completed or checked off your list today?",
    depth: "How did a challenge today force you to show up differently than usual?",
    excavation: "If your current anxiety could speak, what is the core demand it is making?"
  },
  {
    surface: "Who did you make eye contact or share a brief word with today?",
    depth: "What did you learn about your limits or boundaries today?",
    excavation: "What have you been avoiding saying out loud to someone you care about?"
  },
  {
    surface: "What did you eat today that you genuinely enjoyed?",
    depth: "What did today reveal to you about what you currently value most?",
    excavation: "What complaint about your current life are you holding onto as an excuse?"
  },
  {
    surface: "Write down three physical objects you interacted with today.",
    depth: "How did you react to a moment of friction or annoyance today?",
    excavation: "What are you holding onto that you know you need to let go of?"
  },
  {
    surface: "What was the first thing you noticed when you woke up this morning?",
    depth: "Who made you feel seen, heard, or respected today, and how did they do it?",
    excavation: "What is the secret expectation you are placing on others without their consent?"
  },
  {
    surface: "What is a song, sound, or voice you heard today that stayed with you?",
    depth: "In what way did you practice patience or self-restraint today?",
    excavation: "What part of your own behavior today are you struggling to forgive?"
  },
  {
    surface: "Describe one physical space you visited today and its atmosphere.",
    depth: "What did a mistake or misstep today teach you about your habits?",
    excavation: "What are you keeping in the dark because you are afraid of what the light will show?"
  },
  {
    surface: "What is one task or chore you did today to take care of your space?",
    depth: "What brought you a unexpected spark of interest or curiosity today?",
    excavation: "What is the heaviest thing you are carrying right now that isn't actually yours?"
  },
  {
    surface: "Write down the colors you recall seeing the most today.",
    depth: "How did you support or help someone else today, even in a tiny way?",
    excavation: "What is a desire you are suppressing because it feels inconvenient or selfish?"
  },
  {
    surface: "What was the easiest part of your day today?",
    depth: "What did today ask you to accept that you usually fight against?",
    excavation: "If you had to write an honest apology to yourself today, what would it be for?"
  },
  {
    surface: "What is a word or phrase you used multiple times today?",
    depth: "What moment today did you feel most grounded or at ease in your body?",
    excavation: "What are you hiding behind your current busyness or productivity?"
  },
  {
    surface: "Describe a small act of kindness you witnessed or received today.",
    depth: "What did you see today that reminded you of the larger world outside your own thoughts?",
    excavation: "What is the unresolved question you keep returning to when the room goes silent?"
  },
  {
    surface: "What was the most beautiful thing you saw today?",
    depth: "What did you do today that felt like an investment in your future self?",
    excavation: "What is the most vulnerable feeling you had today, and how did you hide it?"
  },
  {
    surface: "Write about a transition today — leaving work, arriving home, waking up.",
    depth: "How did your physical energy levels shape your reactions today?",
    excavation: "What boundary did you allow to be crossed today because you wanted to avoid conflict?"
  },
  {
    surface: "What is a small choice you made today that changed the course of your afternoon?",
    depth: "What did you change your mind about today, even slightly?",
    excavation: "What are you holding onto from yesterday that is polluting your experience of today?"
  },
  {
    surface: "What is one physical comfort you are grateful for right now?",
    depth: "How did you handle a moment of quiet or solitude today?",
    excavation: "What is the real fear behind the decision you are currently putting off?"
  },
  {
    surface: "Write about a street, path, or road you traveled on today.",
    depth: "What did an interaction today teach you about your current emotional state?",
    excavation: "Who are you trying to impress or appease with your current choices?"
  },
  {
    surface: "What is one thing you bought or used today?",
    depth: "What felt most meaningful or purposeful about today's work or actions?",
    excavation: "What is a resentment you are keeping warm, and what is it costing you?"
  },
  {
    surface: "Describe a shadow, reflection, or light effect you noticed today.",
    depth: "What did today show you about your capacity for change or growth?",
    excavation: "What is the lie you have told yourself so many times that you've started believing it?"
  },
  {
    surface: "What is a tool, app, or device that made your day easier today?",
    depth: "How did you handle a moment of uncertainty or delay today?",
    excavation: "What are you hoping someone else will fix for you so you don't have to face it?"
  },
  {
    surface: "Describe a plant, flower, or tree you saw today.",
    depth: "What did a quiet moment today allow you to notice that you usually rush past?",
    excavation: "What is the unspoken disappointment you are carrying about yourself?"
  },
  {
    surface: "What was the temperature like today and how did it feel on your skin?",
    depth: "What made you feel connected to a community or the human family today?",
    excavation: "What is the warning sign in your life right now that you are actively ignoring?"
  },
  {
    surface: "Describe one small interaction with an animal or insect today.",
    depth: "What standard or expectation did you let go of today in order to be kinder to yourself?",
    excavation: "What are you trying to prove to someone who is no longer in your life?"
  },
  {
    surface: "What was the loudest sound you heard today?",
    depth: "What did you do today that felt like an act of genuine self-respect?",
    excavation: "What is the dream you have set aside because it feels too late or too foolish?"
  },
  {
    surface: "Describe a moment of physical rest or sitting down today.",
    depth: "What was a moment of unexpected humor or lightheartedness today?",
    excavation: "What are you holding back from the people who love you?"
  },
  {
    surface: "Write down three things you can hear right now.",
    depth: "What did today show you about the difference between your plans and reality?",
    excavation: "If you had to live today over again, what is the one thing you would change?"
  },
  {
    surface: "What is a habit or routine you performed without thinking today?",
    depth: "What did you do today to honor a commitment you made to yourself?",
    excavation: "What is the most honest sentence you could write about your heart right now?"
  },
  {
    surface: "What is a physical item you held in your hand today for more than a minute?",
    depth: "What was a moment of clear, undivided focus you experienced today?",
    excavation: "What is the truth you are waiting for permission to speak?"
  }
];
