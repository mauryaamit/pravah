// scripts/regenerate-kitab.ts
// Regenerates the KITAB_DATA entries so that each dayIndex has unique books
// across all tabs (hindi, english, indian_regional, world, classical_heritage).
// Currently all 91 entries reuse the same 2 books per tab (data quality bug).
//
// Usage:
//   npx tsx scripts/regenerate-kitab.ts              # Regenerate all 91 entries
//   npx tsx scripts/regenerate-kitab.ts --limit 5    # First 5 entries only
//   npx tsx scripts/regenerate-kitab.ts --tab hindi  # One tab only
//
// Produces unique books for each slot by seeding the AI with a "not these books" list.

import * as fs from 'fs';
import * as path from 'path';

// Load .env.local
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

const DATA_FILE = path.join(process.cwd(), 'src/app/(app)/kitab/data.ts');
const LOG_FILE = path.join(process.cwd(), 'data/content-history/kitab-regen.log');
const RATE_LIMIT_MS = 1500;

// CLI args
const args = process.argv.slice(2);
const limitArg = args.find(a => a.startsWith('--limit'));
const tabArg = args.find(a => a.startsWith('--tab'));
const limit = limitArg
  ? parseInt(limitArg.includes('=') ? limitArg.split('=')[1] : args[args.indexOf(limitArg) + 1], 10)
  : Infinity;
const filterTab = tabArg
  ? (tabArg.includes('=') ? tabArg.split('=')[1] : args[args.indexOf(tabArg) + 1])
  : null;

const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY ||
  process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
  process.env.GOOGLE_AI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ No Gemini API key found. Set GEMINI_API_KEY in .env.local');
  process.exit(1);
}

async function callGemini(prompt: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.8, maxOutputTokens: 1024 },
  };
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) await sleep(2000 * attempt);
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 429 || res.status >= 500) { continue; }
    if (!res.ok) { const t = await res.text(); throw new Error(`HTTP ${res.status}: ${t.slice(0, 200)}`); }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error(`No text in response`);
    return text as string;
  }
  throw new Error('Max retries');
}

function sleep(ms: number) { return new Promise<void>(r => setTimeout(r, ms)); }

interface BookSpec {
  title: string;
  author: string;
  year: string;
  genre: string;
  citation: string;
  summary: string;
  opening_line: string;
  read_if: string;
  similar_books: string[];
  purchase_or_info_link: string;
}

type TabKey = 'hindi' | 'english' | 'indian_regional' | 'world' | 'classical_heritage';

const TAB_CONFIGS: Record<TabKey, {
  language: string;
  contemporary_era: string;
  classical_era: string;
  examples_contemporary: string[];
  examples_classical: string[];
}> = {
  hindi: {
    language: 'Hindi literature',
    contemporary_era: 'post-1950',
    classical_era: 'pre-1950',
    examples_contemporary: ['Raag Darbari', 'Maila Anchal', 'Kashi Ka Assi'],
    examples_classical: ['Godaan', 'Nirmala', 'Gaban'],
  },
  english: {
    language: 'English literature',
    contemporary_era: 'post-1950',
    classical_era: 'pre-1950',
    examples_contemporary: ['The God of Small Things', 'Midnight\'s Children', 'The White Tiger'],
    examples_classical: ['1984', 'To Kill a Mockingbird', 'Pride and Prejudice'],
  },
  indian_regional: {
    language: 'Indian regional literature (Marathi, Bengali, Tamil, Kannada, Malayalam, Telugu, Gujarati, Punjabi, Odia, etc.) — NOT Hindi or English',
    contemporary_era: 'post-1950',
    classical_era: 'pre-1950',
    examples_contemporary: ['The Legends of Khasak', 'Samskara', 'Chemmeen'],
    examples_classical: ['Chokher Bali', 'Gora', 'Devdas'],
  },
  world: {
    language: 'World literature (Latin American, European, African, East Asian, Middle Eastern, Russian — NOT English or Indian)',
    contemporary_era: 'post-1950',
    classical_era: 'pre-1950',
    examples_contemporary: ['One Hundred Years of Solitude', 'The Alchemist', 'Crime and Punishment'],
    examples_classical: ['The Metamorphosis', 'Don Quixote', 'Anna Karenina'],
  },
  classical_heritage: {
    language: 'Classical/ancient texts (Sanskrit, Greek, Latin, Persian, Chinese, Arabic — ancient philosophy, epics, poetry collections)',
    contemporary_era: '19th century translation/commentary',
    classical_era: 'ancient/medieval original',
    examples_contemporary: ['The Rubaiyat of Omar Khayyam', 'Gitanjali', 'The Prophet'],
    examples_classical: ['Arthashastra', 'Panchatantra', 'Mahabharata selections'],
  },
};

function buildBookPrompt(
  tab: TabKey,
  type: 'contemporary' | 'classical',
  excludeBooks: string[]
): string {
  const config = TAB_CONFIGS[tab];
  const era = type === 'contemporary' ? config.contemporary_era : config.classical_era;
  const excludeList = excludeBooks.slice(-20).join(', ') || 'none';

  return `You are a literary curator for a daily reading app. Recommend ONE specific ${type} book from ${config.language}.

Era: ${era}
IMPORTANT: Do NOT recommend any of these already-used books: ${excludeList}

Provide a real, existing book (not fictional). Respond ONLY with a JSON object (no markdown fences):
{
  "title": "Exact book title",
  "author": "Author full name",
  "year": "Publication year as string",
  "genre": "Genre description (2-4 words)",
  "citation": "Author, I. (Year). Title. Publisher.",
  "summary": "2-3 sentence compelling summary of what makes this book unique and worth reading.",
  "opening_line": "The actual famous opening line or a representative line from the book.",
  "read_if": "Complete this: Read this if you want to... (one sentence)",
  "similar_books": ["Book 1", "Book 2", "Book 3"],
  "purchase_or_info_link": "https://en.wikipedia.org/wiki/BOOK_TITLE_HERE"
}`;
}

function parseBook(raw: string): BookSpec | null {
  try {
    const jsonStr = raw.trim()
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/```\s*$/i, '')
      .trim();
    const parsed = JSON.parse(jsonStr);
    if (!parsed.title || !parsed.author) return null;
    return parsed as BookSpec;
  } catch {
    return null;
  }
}

function log(msg: string) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
  fs.appendFileSync(LOG_FILE, line + '\n', 'utf-8');
}

function escapeTs(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function bookToTs(book: BookSpec): string {
  return `{
          title: "${escapeTs(book.title)}",
          author: "${escapeTs(book.author)}",
          year: "${escapeTs(book.year)}",
          genre: "${escapeTs(book.genre)}",
          citation: "${escapeTs(book.citation)}",
          summary: "${escapeTs(book.summary)}",
          opening_line: "${escapeTs(book.opening_line)}",
          read_if: "${escapeTs(book.read_if)}",
          similar_books: [${book.similar_books.map(s => `"${escapeTs(s)}"`).join(', ')}],
          purchase_or_info_link: "${escapeTs(book.purchase_or_info_link || '')}"
        }`;
}

async function main() {
  log('=== Kitab Regeneration Script Starting ===');

  let dataContent = fs.readFileSync(DATA_FILE, 'utf-8');
  const entryCount = (dataContent.match(/dayIndex:/g) || []).length;
  log(`Found ${entryCount} entries in KITAB_DATA`);

  const tabs: TabKey[] = filterTab
    ? [filterTab as TabKey]
    : ['hindi', 'english', 'indian_regional', 'world', 'classical_heritage'];

  log(`Processing tabs: ${tabs.join(', ')}`);

  const targetCount = Math.min(isFinite(limit) ? limit : entryCount, entryCount);
  log(`Will process ${targetCount} entries`);

  // Track which books have been used per tab to avoid repeats
  const usedByTab: Record<string, string[]> = {};
  for (const tab of tabs) {
    usedByTab[tab + '_contemporary'] = [];
    usedByTab[tab + '_classical'] = [];
  }

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < targetCount; i++) {
    const dayNum = i + 1; // dayIndex is 1-based in data
    log(`[${i + 1}/${targetCount}] Processing dayIndex=${dayNum}`);

    for (const tab of tabs) {
      for (const type of ['contemporary', 'classical'] as const) {
        const key = `${tab}_${type}`;
        const excludeBooks = usedByTab[key] || [];
        log(`  Generating ${tab} ${type} book (exclude: ${excludeBooks.length} already used)...`);

        try {
          const prompt = buildBookPrompt(tab, type, excludeBooks);
          const raw = await callGemini(prompt);
          const book = parseBook(raw);

          if (!book) {
            log(`  ERROR: Could not parse book for ${tab} ${type} (dayIndex=${dayNum})`);
            errorCount++;
            await sleep(RATE_LIMIT_MS);
            continue;
          }

          usedByTab[key].push(book.title);
          log(`  ✓ ${tab} ${type}: "${book.title}" by ${book.author}`);

          // Replace the specific field in the data file
          // Find the dayIndex marker, then within that entry replace the tab/type block
          const dayIndexMarker = `dayIndex: ${dayNum},`;
          const markerPos = dataContent.indexOf(dayIndexMarker);

          if (markerPos === -1) {
            log(`  ERROR: Could not find dayIndex=${dayNum} in data file`);
            continue;
          }

          const nextMarkerPos = dataContent.indexOf('dayIndex:', markerPos + dayIndexMarker.length);
          const entryBlock = nextMarkerPos === -1
            ? dataContent.slice(markerPos)
            : dataContent.slice(markerPos, nextMarkerPos);

          // Find the tab block, then find the type block within it
          const tabRegex = new RegExp(`${tab}:\\s*\\{`);
          const tabMatch = tabRegex.exec(entryBlock);
          if (!tabMatch) {
            log(`  ERROR: Could not find tab "${tab}" in entry ${dayNum}`);
            continue;
          }

          // Find the type (contemporary/classical) block within tab block
          const tabStart = tabMatch.index;
          const typeRegex = new RegExp(`${type}:\\s*\\{[\\s\\S]*?\\}`);
          const entryFromTab = entryBlock.slice(tabStart);
          const typeMatch = typeRegex.exec(entryFromTab);

          if (!typeMatch) {
            log(`  ERROR: Could not find ${type} block in ${tab} for dayIndex=${dayNum}`);
            continue;
          }

          const typeBlockStart = markerPos + tabStart + typeMatch.index;
          const typeBlockEnd = typeBlockStart + typeMatch[0].length;

          const newTypeBlock = `${type}: ${bookToTs(book)}`;
          dataContent = dataContent.slice(0, typeBlockStart) + newTypeBlock + dataContent.slice(typeBlockEnd);

          successCount++;
          await sleep(RATE_LIMIT_MS);

        } catch (err: any) {
          log(`  ERROR ${tab} ${type} dayIndex=${dayNum}: ${err.message}`);
          errorCount++;
          await sleep(RATE_LIMIT_MS);
        }
      }
    }

    // Save progress every entry
    fs.writeFileSync(DATA_FILE, dataContent, 'utf-8');
    log(`  Progress saved (entry ${i + 1}/${targetCount})`);
  }

  fs.writeFileSync(DATA_FILE, dataContent, 'utf-8');
  log('=== Kitab Regeneration Complete ===');
  log(`Success: ${successCount} | Errors: ${errorCount}`);
  console.log(`\n✅ Done! ${successCount} book slots regenerated, ${errorCount} errors.`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
