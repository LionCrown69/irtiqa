const fs = require('fs');

const files = [
  'src/emails/templates.ts',
  'src/emails/reminder-templates.ts'
];

// Color Mapping based on src/index.css
const replacements = [
  { from: /#f9f8f6/g, to: '#FAFAF8' }, // bg
  { from: /#fbfaf8/g, to: '#F4F3EE' }, // hero bg / inner cards
  { from: /#e8e4de/g, to: '#ECEAE2' }, // borders
  { from: /#ddd8d0/g, to: '#BEBBB3' }, // darker borders / dim text
  { from: /#1a1a18/g, to: '#0C0C0B' }, // main ink
  { from: /#3a3a36/g, to: '#1A1A18' }, // secondary ink
  { from: /#6b6861/g, to: '#6B6B67' }, // sub text
  { from: /#8a8780/g, to: '#BEBBB3' }, // dim text
  { from: /#5a5753/g, to: '#6B6B67' }  // another sub text
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });
  // Update link colors to electric blue #1641F5 where appropriate
  // We'll target the meetingLink inside the "paste this link" section
  content = content.replace(/color: #6B6B67; text-decoration: underline;/g, 'color: #1641F5; text-decoration: underline;');
  
  // Make the "Booking Confirmed" and "Starts in X" dots blue instead of green/black
  content = content.replace(/background-color:#10b981;/g, 'background-color:#1641F5;');
  content = content.replace(/background-color:#0C0C0B; border-radius:50%; margin-right:6px/g, 'background-color:#1641F5; border-radius:50%; margin-right:6px');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Colors synced to index.css brand tokens!');
