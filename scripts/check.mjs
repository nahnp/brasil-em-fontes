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
const civicHtml=readFileSync('cidadania.html','utf8');
const civicJs=readFileSync('cidadania.js','utf8');
const civic=vm.runInNewContext(civicJs.slice(0,civicJs.indexOf("let language='pt'"))+';civic',{}, {timeout:1000});
for(const key of [...civicHtml.matchAll(/data-c="([^"]+)"/g)].map(m=>m[1]))for(const lang of ['pt','en','es'])assert.equal(typeof civic[lang][key],'string',`Missing citizenship ${lang}:${key}`);
assert(!/<form|<input|serviceWorker|supabase/i.test(civicHtml+civicJs),'Unexpected personal-data collection or private cache');
const timelines=JSON.parse(readFileSync('timeline-data.json','utf8'));
assert.equal(timelines.cases.length,2);
let events=0;
for(const item of timelines.cases){assert(/^[a-zA-Z0-9_-]{11}$/.test(item.video_id));assert(item.gaps.length>0);let previous='';for(const event of item.events){assert(/^\d{4}(-\d{2})?(-\d{2})?$/.test(event.date));assert(event.date>=previous,'Unsorted timeline');previous=event.date;assert(event.reported_at<=timelines.reviewed_at,'Source after cutoff');assert.equal(new URL(event.source_url).protocol,'https:');assert(event.evidence&&event.source_name&&event.type);events++}}
assert(html.includes('timeline.html')&&html.includes('cidadania.html'));
console.log(`Validated citizenship translations, no report form, ${events} dated timeline records with attribution and gaps.`);

for(const item of timelines.cases){assert(['UOL','Mídia NINJA'].includes(item.video_channel));for(const event of item.events){assert.equal(new URL(event.source_url).hostname,'noticias.uol.com.br');assert.equal(event.source_name.startsWith('UOL'),true);}}
assert(readFileSync('timeline.html','utf8').includes('id="podcast-tecnico"'));
console.log('Validated editorial allowlist and separate technical podcast.');

const recommendations=JSON.parse(readFileSync('canais.json','utf8'));assert.equal(recommendations.videos.length,9);assert.equal(new Set(recommendations.videos.map(v=>v.id)).size,9);for(const item of [...recommendations.channels,...recommendations.videos,...recommendations.whatsapp])assert.equal(new URL(item.url).protocol,'https:');assert(readFileSync('canais.html','utf8').includes('titularidade não confirmada'));console.log('Validated recommendations: unique videos, HTTPS and verification limits.');

assert(readFileSync('canais.html','utf8').includes('template=video.yml'));assert(recommendations.videos.every(v=>v.moderation_status==='pending_full_review'));assert(recommendations.moderation_policy.publication.includes('não são publicadas automaticamente'));console.log('Validated review gate and explicit pending moderation status.');

const filmoteca=JSON.parse(readFileSync('filmoteca.json','utf8'));assert.equal(filmoteca.films.length,22);assert.equal(new Set(filmoteca.films.map(f=>f.title)).size,22);for(const f of filmoteca.films){assert.equal(new URL(f.url).protocol,'https:');assert(f.access&&f.type&&f.moderation);}assert.equal(recommendations.political_and_news_links.length,5);console.log('Validated 22 film references and five additional channels.');
