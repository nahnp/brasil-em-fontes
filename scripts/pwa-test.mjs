import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const manifest=JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));assert.equal(manifest.scope,'./');assert.equal(manifest.start_url,'./');assert(manifest.icons.some(i=>i.sizes==='192x192'));assert(manifest.icons.some(i=>i.sizes==='512x512'));
for(const file of ['index.html','cidadania.html','timeline.html','canais.html','filmoteca.html','destaques.html','materia-borelli.html','monitoramento.html']){const html=fs.readFileSync(file,'utf8');assert(html.includes('href="manifest.webmanifest"'));assert(html.includes('href="monitoramento.html"'));assert(html.includes('rel="canonical"'));assert(html.includes('application/ld+json'));}
const events={},cacheMap=new Map(),deleted=[];let networkFail=false,calls=0;
const cache={addAll:async()=>{},put:async(k,v)=>cacheMap.set(k,v)};
const context={URL,Response,Set,Promise,Error,AbortSignal,AbortController,setTimeout,clearTimeout,self:{skipWaiting:async()=>{},location:{href:'https://example.test/brasil-em-fontes/sw.js'},clients:{claim:async()=>{}},addEventListener:(name,handler)=>events[name]=handler},caches:{open:async()=>cache,keys:async()=>['brasil-fontes-public-old','unrelated-cache'],delete:async k=>deleted.push(k),match:async k=>cacheMap.get(k)},fetch:async()=>{calls++;if(networkFail)throw Error();return new Response('current public page')}};
vm.runInNewContext(fs.readFileSync('sw.js','utf8'),context);let pending;events.activate({waitUntil:p=>pending=p});await pending;assert.deepEqual(deleted,['brasil-fontes-public-old']);
async function request(url){let reply;events.fetch({request:{url,method:'GET',mode:'navigate'},respondWith:p=>reply=p});return reply?await reply:undefined;}
assert.equal(await(await request('https://example.test/brasil-em-fontes/canais?lang=en')).text(),'current public page');networkFail=true;assert.equal(await(await request('https://example.test/brasil-em-fontes/canais')).text(),'current public page');assert.equal(await request('https://youtube.com/watch?v=test'),undefined);assert.equal(await request('https://example.test/brasil-em-fontes/private'),undefined);assert.equal(calls,2);
console.log('Validated PWA manifest, relative scope, network-first offline fallback, no external/private caching and safe cache cleanup.');

// Reproduce hosting redirects from .html to extensionless routes, including precache.
context.fetch=async()=>{const response=new Response('redirected public page');Object.defineProperty(response,'redirected',{value:true});return response;};
events.install({waitUntil:p=>pending=p});await pending;assert(cacheMap.size>20);for(const response of cacheMap.values())assert.equal(response.redirected,false);
assert.equal((await request('https://example.test/brasil-em-fontes/filmoteca.html')).redirected,false);
context.fetch=async()=>{throw Error('offline')};assert.equal((await request('https://example.test/brasil-em-fontes/filmoteca.html')).redirected,false);
console.log('Validated redirected precache and online/offline navigation responses.');
