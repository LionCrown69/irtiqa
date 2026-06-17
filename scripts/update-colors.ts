import fs from 'fs';

const files = [
  'src/emails/templates.ts',
  'src/emails/reminder-templates.ts'
];

// Color Mapping based on src/index.css
const replacements = [
  { from: /#f9f8f6/gi, to: '#FAFAF8' }, // bg
  { from: /#fbfaf8/gi, to: '#F4F3EE' }, // hero bg / inner cards
  { from: /#e8e4de/gi, to: '#ECEAE2' }, // borders
  { from: /#ddd8d0/gi, to: '#BEBBB3' }, // darker borders / dim text
  { from: /#1a1a18/gi, to: '#0C0C0B' }, // main ink
  { from: /#3a3a36/gi, to: '#1A1A18' }, // secondary ink
  { from: /#6b6861/gi, to: '#6B6B67' }, // sub text
  { from: /#8a8780/gi, to: '#BEBBB3' }, // dim text
  { from: /#5a5753/gi, to: '#6B6B67' }  // another sub text
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });
  // Update link colors to electric blue #1641F5 where appropriate
  content = content.replace(/color: #6B6B67; text-decoration: underline;/g, 'color: #1641F5; text-decoration: underline;');
  
  // Make the "Booking Confirmed" and "Starts in X" dots blue instead of green/black
  content = content.replace(/background-color:#10b981;/g, 'background-color:#1641F5;');
  content = content.replace(/background-color:#1a1a18; border-radius:50%; margin-right:6px/g, 'background-color:#1641F5; border-radius:50%; margin-right:6px');
  content = content.replace(/background-color:#0C0C0B; border-radius:50%; margin-right:6px/g, 'background-color:#1641F5; border-radius:50%; margin-right:6px');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Colors synced to index.css brand tokens!');
