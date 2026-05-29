const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', '(app)', 'shabda', 'data.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// We will extract arrays by using simple regex or JS eval if it's clean TS.
// Since it's TS, eval might fail on exports or types. Let's parse with simple regex.

function extractArray(content, arrayName, keyName) {
  const regex = new RegExp(`export const ${arrayName}\\s*:\\s*\\w+\\[\\]\\s*=\\s*\\[([\\s\\S]*?)\\n\\];`, 'm');
  const match = content.match(regex);
  if (!match) {
    console.log(`Could not match ${arrayName}`);
    return [];
  }
  const arrayBody = match[1];
  const items = [];
  const itemRegex = new RegExp(`${keyName}:\\s*"([^"]+)"`, 'g');
  let itemMatch;
  while ((itemMatch = itemRegex.exec(arrayBody)) !== null) {
    items.push(itemMatch[1]);
  }
  return items;
}

console.log('WORDS_OF_DAY:', extractArray(fileContent, 'WORDS_OF_DAY', 'word'));
console.log('PHRASES_OF_DAY:', extractArray(fileContent, 'PHRASES_OF_DAY', 'phrase'));
console.log('FANCY_WORDS:', extractArray(fileContent, 'FANCY_WORDS', 'word'));
console.log('GENZ_TERMS:', extractArray(fileContent, 'GENZ_TERMS', 'term'));
