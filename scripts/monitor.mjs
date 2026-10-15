import fs from 'node:fs';
const pages=fs.readdirSync('.').filter(p=>p.endsWith('.html'));
const roots=JSON.parse(fs.readFileSync('acessos.json','utf8')).mirrors.map(m=>m.url);
const paths=[...pages.filter(p=>p!=='offline.html').flatMap(p=>[p,p.replace('.html','')]),'manifest.webmanifest'];
const jobs=roots.flatMap(root=>paths.map(path=>({url:root+'/'+path,path})));let next=0,failures=0;
async function worker(){while(next<jobs.length){const {url,path}=jobs[next++];const start=Date.now();try{const r=await fetch(url,{signal:AbortSignal.timeout(15000),cache:'no-store'});if(!r.ok)throw Error('HTTP '+r.status);const body=await r.text();if(path==='manifest.webmanifest'){if(JSON.parse(body).display!=='standalone')throw Error('Invalid manifest');}else if(!body.includes('Brasil em Fontes'))throw Error('Unexpected content');console.log(JSON.stringify({url,status:r.status,duration_ms:Date.now()-start}));}catch(e){failures++;console.error(JSON.stringify({url,error:e.message}));}}}
await Promise.all(Array.from({length:8},worker));console.log(JSON.stringify({checked:jobs.length,failures}));if(failures)process.exitCode=1;
