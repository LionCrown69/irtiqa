const fs = require('fs');

const file = process.argv.slice(2).join(' ');

if (!file) {
  console.error('Usage: node scripts/extract-pdf-strings.cjs <pdf-path>');
  process.exit(1);
}

const raw = fs.readFileSync(file, 'latin1');
const matches = raw.match(/[A-Za-z0-9][A-Za-z0-9 ,.'’()\-:/&%+]{20,}/g) || [];
const cleaned = matches
  .map((line) => line.replace(/\s+/g, ' ').trim())
  .filter((line, index, arr) => line.length > 24 && arr.indexOf(line) === index)
  .slice(0, 300);

console.log(cleaned.join('\n'));
