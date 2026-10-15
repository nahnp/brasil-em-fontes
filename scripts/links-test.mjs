import fs from 'node:fs';
import assert from 'node:assert/strict';
const pages=fs.readdirSync('.').filter(p=>p.endsWith('.html'));
for(const page of pages)for(const match of fs.readFileSync(page,'utf8').matchAll(/(?:href|src)="([^"#]+)"/g)){const value=match[1].split(/[?#]/)[0];if(!value||/^(?:https?:|data:|mailto:|tel:)/.test(value))continue;const file=value==='./'?'index.html':value.replace(/^\.\//,'');assert(fs.existsSync(file),`${page}: missing ${file}`);}
console.log(`Validated local links and assets in ${pages.length} HTML pages.`);
