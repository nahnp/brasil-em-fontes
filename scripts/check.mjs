import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const js = readFileSync('app.js', 'utf8');
const html = readFileSync('index.html', 'utf8');
const dataEnd = js.indexOf("let lang='pt'");
assert(dataEnd > 0, 'Data boundary missing');
const { sources, labels } = vm.runInNewContext(js.slice(0, dataEnd) + ';({sources,labels})', {}, { timeout: 1000 });
const exported = JSON.parse(readFileSync('fontes.json', 'utf8'));
assert.equal(JSON.stringify(exported.sources), JSON.stringify(sources), 'Download and displayed directory differ');
const keys = [...html.matchAll(/data-i="([^"]+)"/g)].map(m => m[1]);
for (const lang of ['pt', 'en', 'es']) {
  for (const key of keys) assert.equal(typeof labels[lang][key], 'string', `Missing ${lang}:${key}`);
}
const urls = new Set();
for (const source of sources) {
  const url = new URL(source.url);
  assert.equal(url.protocol, 'https:');
  assert(!url.username && !url.password, 'Credentials in URL');
  assert(!urls.has(source.url), 'Duplicate source');
  urls.add(source.url);
  for (const key of ['name', 'owner', 'pt', 'en', 'es']) assert(source[key]?.trim(), `Missing source ${key}`);
  for (const lang of ['pt', 'en', 'es']) assert(labels[lang][source.cat], 'Unknown category');
}
assert(html.includes('https://github.com/nahnp/brasil-em-fontes/issues/new/choose'), 'Contribution link missing');
assert(html.includes('https://github.com/nahnp/brasil-em-fontes'), 'Repository link missing');
assert(!/<script[^>]+src=["']https?:/i.test(html), 'Unexpected remote script');
console.log(`Validated ${sources.length} sources, 3 languages, directory consistency and collaboration links. External content accuracy requires editorial review.`);
