const { execSync } = require('child_process');

try {
  console.log("Reverting emails directory via Git...");
  const output = execSync('git checkout -- src/emails/templates.ts src/emails/reminder-templates.ts src/emails/shadow-audit-template.ts src/emails/rejection-template.ts', { encoding: 'utf8' });
  console.log("Git checkout successful:", output);
} catch (e) {
  console.error("Git checkout failed:", e.message);
}
