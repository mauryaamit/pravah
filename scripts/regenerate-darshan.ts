// scripts/regenerate-darshan.ts
// Regenerates the `the_idea`, `why_it_matters_today`, `in_dialogue_with`,
// `critique`, and `sit_with_this` fields for every entry in data-philosophy.ts
// using the Gemini API, replacing the identical template bodies with substantively
// unique content specific to each philosopher and concept.
//
// Usage:
//   npx tsx scripts/regenerate-darshan.ts             # Regenerate all 450
//   npx tsx scripts/regenerate-darshan.ts --limit 10  # Regenerate first 10 only
//   npx tsx scripts/regenerate-darshan.ts --start 50  # Start at index 50
//   npx tsx scripts/regenerate-darshan.ts --tradition Indian  # One tradition only
//
// Rate-limited to 1 request/second to respect Gemini quota.
// Writes progress to data/content-history/darshan-regen.log.
// On re-run, skips already-regenerated entries (idempotent).

import * as fs from 'fs';
import * as path from 'path';

// Manually load .env.local (avoids needing dotenv as a runtime dep)
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}
loadEnv();

// ── Config ───────────────────────────────────────────────────────────────────
const DATA_FILE = path.join(process.cwd(), 'src/app/(app)/darshan/data-philosophy.ts');
const LOG_FILE = path.join(process.cwd(), 'data/content-history/darshan-regen.log');
const RATE_LIMIT_MS = 1200; // ms between API calls (stay under 60 req/min)

// ── CLI Args ─────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const limitArg = args.find(a => a.startsWith('--limit=') || a === '--limit');
const startArg = args.find(a => a.startsWith('--start=') || a === '--start');
const traditionArg = args.find(a => a.startsWith('--tradition=') || a === '--tradition');

const limit = limitArg
  ? parseInt(
      limitArg.includes('=') ? limitArg.split('=')[1] : args[args.indexOf(limitArg) + 1],
      10
    )
  : Infinity;

const startAt = startArg
  ? parseInt(
      startArg.includes('=') ? startArg.split('=')[1] : args[args.indexOf(startArg) + 1],
      10
    )
  : 0;

const filterTradition = traditionArg
  ? traditionArg.includes('=') ? traditionArg.split('=')[1] : args[args.indexOf(traditionArg) + 1]
  : null;

// ── Gemini Client ─────────────────────────────────────────────────────────────
const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY ||
  process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
  process.env.GOOGLE_AI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ No Gemini API key found. Set GEMINI_API_KEY in .env.local');
  process.exit(1);
}

async function callGemini(prompt: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash:generateContent?key=${GEMINI_API_KEY}`;
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.75, maxOutputTokens: 2048 },
  };

  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) await sleep(2000 * attempt);
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 429 || res.status >= 500) {
      console.warn(`  ⚠️  HTTP ${res.status}, retrying (attempt ${attempt + 1}/3)...`);
      continue;
    }
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Gemini HTTP ${res.status}: ${text.slice(0, 300)}`);
    }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error(`No text in Gemini response: ${JSON.stringify(data).slice(0, 300)}`);
    return text as string;
  }
  throw new Error('Max retries exceeded');
}

function sleep(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

// ── Prompt Builder ─────────────────────────────────────────────────────────────
function buildPrompt(entry: {
  concept_name: string;
  concept_name_original?: string;
  tradition: string;
  school: string;
  thinker: string;
  thinker_bio: string;
  summary: string;
  related_thinkers: string[];
  related_texts: string[];
}): string {
  return `You are an expert philosopher and educator writing for a contemplative reading app called Pravah.

Write ORIGINAL, SUBSTANTIVELY UNIQUE content about the following philosophical concept. 
Do NOT use generic templates. Every paragraph must be specifically grounded in the actual historical, doctrinal, 
and intellectual details of this concept and thinker.

CONCEPT: ${entry.concept_name}${entry.concept_name_original ? ` (${entry.concept_name_original})` : ''}
TRADITION: ${entry.tradition}
SCHOOL: ${entry.school}
THINKER: ${entry.thinker}
THINKER BIO: ${entry.thinker_bio}
SUMMARY: ${entry.summary}
RELATED THINKERS: ${entry.related_thinkers.join(', ')}
RELATED TEXTS: ${entry.related_texts.join(', ')}

Write the following 5 sections. Use plain text, NO markdown, NO bullet points, NO headers.
Separate sections with the exact separator line: ===SECTION===

SECTION 1 — THE_IDEA (approx 500 words):
A rich, deeply specific exploration of this concept. Cover: its historical emergence and the intellectual 
context that demanded it; the core metaphysical or ethical claim it makes; how it operates mechanically 
or conceptually; what it demands of the practitioner or thinker; and its lasting significance. 
Be concrete about specific arguments, debates, or examples tied to THIS concept specifically.

===SECTION===

SECTION 2 — WHY_IT_MATTERS_TODAY (2-3 sentences):
A specific, grounded observation about how this particular concept offers insight into a real contemporary 
challenge (digital life, AI ethics, political conflict, ecological crisis, mental health, etc.). 
Name the challenge specifically; don't be vague.

===SECTION===

SECTION 3 — IN_DIALOGUE_WITH (2-3 sentences):
Name a specific Western or cross-cultural parallel concept, thinker, or field of inquiry, and explain 
precisely HOW this concept converges with or diverges from it. Be specific about the point of comparison.

===SECTION===

SECTION 4 — CRITIQUE (2-3 sentences):
State the primary historical or logical criticism of this concept from within its own tradition or a 
rival school. Name the critic or rival school if known. Then briefly state how proponents responded.

===SECTION===

SECTION 5 — SIT_WITH_THIS (one question, max 30 words):
A contemplative question that arises specifically and only from THIS concept — not a generic "how does this 
change how you live?" question. The question should feel irreplaceable to this idea.

Now write all 5 sections:`;
}

// ── Parse Sections from Gemini Output ─────────────────────────────────────────
function parseSections(raw: string): {
  the_idea: string;
  why_it_matters_today: string;
  in_dialogue_with: string;
  critique: string;
  sit_with_this: string;
} | null {
  const parts = raw.split('===SECTION===').map(s => s.trim());
  if (parts.length < 5) {
    console.warn(`  ⚠️  Expected 5 sections, got ${parts.length}. Raw: ${raw.slice(0, 200)}`);
    return null;
  }

  // Strip any "SECTION N —" prefix lines
  const clean = (s: string) => s.replace(/^SECTION \d+[^\n]*\n/, '').trim();

  return {
    the_idea: clean(parts[0]),
    why_it_matters_today: clean(parts[1]),
    in_dialogue_with: clean(parts[2]),
    critique: clean(parts[3]),
    sit_with_this: clean(parts[4]),
  };
}

// ── Read current data file as text ────────────────────────────────────────────
function readDataFile(): string {
  return fs.readFileSync(DATA_FILE, 'utf-8');
}

// ── Extract concept entries from the data file ────────────────────────────────
interface ConceptEntry {
  index: number;
  dayIndex: number;
  tradition: string;
  school: string;
  concept_name: string;
  concept_name_original?: string;
  thinker: string;
  thinker_bio: string;
  summary: string;
  related_thinkers: string[];
  related_texts: string[];
  // The fields we will update:
  the_idea: string;
  why_it_matters_today: string;
  in_dialogue_with: string;
  critique: string;
  sit_with_this: string;
}

function extractEntries(content: string): ConceptEntry[] {
  // We need to eval-extract the array safely. Use a simple approach:
  // build a temporary module that exports the array, eval it.
  // Since the file is TypeScript, we strip the type annotations first.
  try {
    // Remove TS type exports, keep only the array
    const stripped = content
      .replace(/^\/\/.*$/gm, '')
      .replace(/export type[\s\S]+?;/g, '')
      .replace(/export interface[\s\S]+?}/g, '')
      .replace(/export const PHILOSOPHY_CONCEPTS: PhilosophyConcept\[\] =/, 'const DATA =')
      .trim();
    
    // Use Function constructor to evaluate in isolated scope
    const fn = new Function(`${stripped}; return DATA;`);
    return fn() as ConceptEntry[];
  } catch (err) {
    console.error('Failed to parse data file:', err);
    return [];
  }
}

// ── String-replace helpers ─────────────────────────────────────────────────────
function escapeForStringLiteral(s: string): string {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
}

// ── Log helpers ────────────────────────────────────────────────────────────────
function log(msg: string) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
  fs.appendFileSync(LOG_FILE, line + '\n', 'utf-8');
}

// ── Load already-regenerated index set (idempotent re-runs) ───────────────────
function loadDoneSet(): Set<number> {
  if (!fs.existsSync(LOG_FILE)) return new Set();
  const lines = fs.readFileSync(LOG_FILE, 'utf-8').split('\n');
  const done = new Set<number>();
  for (const line of lines) {
    const m = line.match(/DONE dayIndex=(\d+)/);
    if (m) done.add(parseInt(m[1], 10));
  }
  return done;
}

// ── Main ───────────────────────────────────────────────────────────────────────
async function main() {
  log('=== Darshan Regeneration Script Starting ===');
  log(`Limit: ${isFinite(limit) ? limit : 'all'} | Start: ${startAt} | Tradition filter: ${filterTradition || 'none'}`);

  const entries = extractEntries(readDataFile());
  if (entries.length === 0) {
    log('ERROR: Could not parse any entries from data-philosophy.ts');
    process.exit(1);
  }
  log(`Loaded ${entries.length} entries from data-philosophy.ts`);

  // Filter and slice
  let targets = entries.slice(startAt);
  if (filterTradition) {
    targets = targets.filter(e => e.tradition === filterTradition);
    log(`Filtered to ${targets.length} entries for tradition "${filterTradition}"`);
  }
  if (isFinite(limit)) {
    targets = targets.slice(0, limit);
  }
  log(`Will process ${targets.length} entries`);

  const doneSet = loadDoneSet();
  log(`Already done: ${doneSet.size} entries (will skip these)`);

  let dataContent = readDataFile();
  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (let i = 0; i < targets.length; i++) {
    const entry = targets[i];
    const dayIdx = entry.dayIndex;

    if (doneSet.has(dayIdx)) {
      log(`SKIP dayIndex=${dayIdx} (already regenerated)`);
      skipCount++;
      continue;
    }

    log(`[${i + 1}/${targets.length}] Regenerating dayIndex=${dayIdx} — ${entry.concept_name} (${entry.tradition})`);

    try {
      const prompt = buildPrompt(entry);
      const raw = await callGemini(prompt);
      const sections = parseSections(raw);

      if (!sections) {
        log(`ERROR dayIndex=${dayIdx}: Could not parse sections from response`);
        errorCount++;
        // Rate limit still applies
        await sleep(RATE_LIMIT_MS);
        continue;
      }

      // Replace the specific fields in the data file content using targeted string replacement
      // We find the block for this dayIndex and replace each field value
      // Strategy: find `dayIndex: X,` then find the next occurrence of each target field key
      // and replace the string value.
      
      // Build a regex that matches each field value for this specific entry.
      // We locate the entry by finding "dayIndex: N," first, then replace within that block.
      
      const dayIndexMarker = `dayIndex: ${dayIdx},`;
      const markerPos = dataContent.indexOf(dayIndexMarker);
      
      if (markerPos === -1) {
        log(`ERROR dayIndex=${dayIdx}: Could not find marker in data file`);
        errorCount++;
        continue;
      }

      // Find the next entry's dayIndex marker to scope our replacements
      const nextMarkerPos = dataContent.indexOf('dayIndex:', markerPos + dayIndexMarker.length);
      const entryBlock = nextMarkerPos === -1
        ? dataContent.slice(markerPos)
        : dataContent.slice(markerPos, nextMarkerPos);

      // Replace each field within the entry block
      let updatedBlock = entryBlock;

      const fields: [keyof typeof sections, string][] = [
        ['the_idea', sections.the_idea],
        ['why_it_matters_today', sections.why_it_matters_today],
        ['in_dialogue_with', sections.in_dialogue_with],
        ['critique', sections.critique],
        ['sit_with_this', sections.sit_with_this],
      ];

      for (const [field, newValue] of fields) {
        // Match: field_name: "...any content...", (handles both single and double quote, multiline)
        const fieldRegex = new RegExp(
          `(${field}:\\s*")[^"]*(")`
          , 'g'
        );
        const escaped = escapeForStringLiteral(newValue);
        if (fieldRegex.test(updatedBlock)) {
          updatedBlock = updatedBlock.replace(
            new RegExp(`(${field}:\\s*")[^"]*(")`),
            `$1${escaped}$2`
          );
        }
      }

      // Splice the updated block back into dataContent
      if (nextMarkerPos === -1) {
        dataContent = dataContent.slice(0, markerPos) + updatedBlock;
      } else {
        dataContent = dataContent.slice(0, markerPos) + updatedBlock + dataContent.slice(nextMarkerPos);
      }

      log(`DONE dayIndex=${dayIdx} — ${entry.concept_name} ✓`);
      doneSet.add(dayIdx);
      successCount++;

    } catch (err: any) {
      log(`ERROR dayIndex=${dayIdx}: ${err.message}`);
      errorCount++;
    }

    // Rate limiting
    await sleep(RATE_LIMIT_MS);

    // Write progress every 10 entries (in case of interruption)
    if ((i + 1) % 10 === 0) {
      fs.writeFileSync(DATA_FILE, dataContent, 'utf-8');
      log(`Progress saved (${i + 1}/${targets.length})`);
    }
  }

  // Final write
  fs.writeFileSync(DATA_FILE, dataContent, 'utf-8');
  log('=== Regeneration Complete ===');
  log(`Success: ${successCount} | Skipped: ${skipCount} | Errors: ${errorCount}`);
  console.log(`\n✅ Done! ${successCount} entries regenerated, ${skipCount} skipped, ${errorCount} errors.`);
  console.log(`   Log: ${LOG_FILE}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
