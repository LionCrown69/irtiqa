const fs = require('fs');
const readline = require('readline');

async function recover() {
  const fileStream = fs.createReadStream('C:\\Users\\Alok\\.gemini\\antigravity-ide\\brain\\f8d67313-c0bf-4b94-96ea-6773522c8e83\\.system_generated\\logs\\transcript.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let templates = '';
  let reminder = '';
  let shadow = '';
  let rejection = '';

  for await (const line of rl) {
    if (line.includes('getConfirmationEmailHtmlLight')) {
      try {
        const parsed = JSON.parse(line);
        if (parsed.type === "TOOL_RESPONSE" && parsed.content.includes("File Path: `file:///c:/Users/Alok/irtiqa-react/src/emails/templates.ts`")) {
          templates = parsed.content;
        }
      } catch (e) {}
    }
    if (line.includes('getReminderEmailHtml48hr')) {
      try {
        const parsed = JSON.parse(line);
        if (parsed.type === "TOOL_RESPONSE" && parsed.content.includes("File Path: `file:///c:/Users/Alok/irtiqa-react/src/emails/reminder-templates.ts`")) {
          reminder = parsed.content;
        }
      } catch (e) {}
    }
    if (line.includes('getShadowAuditEmailHtml')) {
      try {
        const parsed = JSON.parse(line);
        if (parsed.type === "TOOL_RESPONSE" && parsed.content.includes("File Path: `file:///c:/Users/Alok/irtiqa-react/src/emails/shadow-audit-template.ts`")) {
          shadow = parsed.content;
        }
      } catch (e) {}
    }
    if (line.includes('getRejectionEmailHtml')) {
      try {
        const parsed = JSON.parse(line);
        if (parsed.type === "TOOL_RESPONSE" && parsed.content.includes("File Path: `file:///c:/Users/Alok/irtiqa-react/src/emails/rejection-template.ts`")) {
          rejection = parsed.content;
        }
      } catch (e) {}
    }
  }

  function cleanAndWrite(rawContent, targetPath) {
    if (!rawContent) return;
    
    // The content is a formatted string with line numbers from the view_file tool.
    // e.g. "1: export function..."
    const lines = rawContent.split('\\n');
    let inCodeBlock = false;
    let actualCode = [];
    
    for (const line of lines) {
      if (line.match(/^\\d+: /)) {
        actualCode.push(line.replace(/^\\d+: /, ''));
      }
    }
    
    if (actualCode.length > 0) {
      fs.writeFileSync(targetPath, actualCode.join('\\n'));
    }
  }

  cleanAndWrite(templates, 'c:\\\\Users\\\\Alok\\\\irtiqa-react\\\\src\\\\emails\\\\templates.ts');
  cleanAndWrite(reminder, 'c:\\\\Users\\\\Alok\\\\irtiqa-react\\\\src\\\\emails\\\\reminder-templates.ts');
  cleanAndWrite(shadow, 'c:\\\\Users\\\\Alok\\\\irtiqa-react\\\\src\\\\emails\\\\shadow-audit-template.ts');
  cleanAndWrite(rejection, 'c:\\\\Users\\\\Alok\\\\irtiqa-react\\\\src\\\\emails\\\\rejection-template.ts');
}

recover();
