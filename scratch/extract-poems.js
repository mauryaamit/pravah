const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../src/app/(app)/sukoon/page.tsx');
const destPath = path.join(__dirname, '../src/lib/constants/poems.ts');

const content = fs.readFileSync(srcPath, 'utf8');
const lines = content.split(/\r?\n/);

// Extract lines 14 to 718 (which is index 13 to 717 inclusive)
const extractedLines = lines.slice(13, 718);

fs.writeFileSync(destPath, extractedLines.join('\n'), 'utf8');
console.log('Successfully extracted poems to:', destPath);
