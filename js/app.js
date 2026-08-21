const DATA_PATHS=['data/resources.json','data/additional-resources.json','data/research-resources.json','data/urdu-south-asia-resources.json','data/expansion-batch-01.json','data/expansion-batch-02.json','data/expansion-batch-03.json'];
const LAST_KEY='srh-last-resource';
const TOP_FEATURED=['al-islam','thaqalayn','sistani','wikishia','duas-org','shia-kids','al-islam-quran','thaqalayn-app'];
const esc=(s='')=>s.replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[c]));
const quality=(r)=>{const b=[];if(r.verified)b.push('<span class="quality-badge verified">✓ Verified</span>');if(r.official)b.push('<span class="quality-badge official">Official</span>');if(r.free)b.push('<span class="quality-badge free">Free</span>');if(TOP_FEATURED.includes(r.id))b.push('<span class="quality-badge free">Top pick</span>');return b.join('')};
function card(r){return `<article class="resource-card"><div class="resource-meta"><span class="badge">${esc(r.type)}</span><span class="tag">${esc((r.languages||[]).join(' · '))}</span></div>${quality(r)?`<div class="quality-row">${quality(r)}</div>`:''}<h3>${esc(r.name)}</h3><p>${esc(r.description)}</p><div class="tags">${(r.categories||[]).slice(0,3).map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div><a class="resource-link" href="resource.html?id=${encodeURIComponent(r.id)}">Details →</a></article>`}
const resourceDate=r=>r.addedAt||r.dateAdded||r.updatedAt||null;
const loadJson=async p=>fetch(p).then(r=>r.ok?r.json():[]).catch(()=>[]);
async function getResources(){const [sets,qualityData,rankData]=await Promise.all([Promise.all(DATA_PATHS.map(loadJson)),loadJson('data/quality.json'),fetch('data/ranking.json').then(r=>r.ok?r.json():{scores:{}}).catch(()=>({scores:{}}))]);const q=new Map(qualityData.map(x=>[x.id,x]));const ranks=rankData.scores||{};const seen=new Set();return sets.flat().filter(r=>{if(!r||!r.id||seen.has(r.id))return false;seen.add(r.id);return true}).map(r=>({...r,...(q.get(r.id)||{}),_rank:ranks[r.id]||0}))}
function dayIndex(){const d=new Date();return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000)}
const TODAY_PICKS=[
  {title:'Quran — 15 minutes',blurb:'Open a reliable Quran reader and complete one short session.',href:'resource.html?id=al-islam-quran',tag:'Daily'},
  {title:'One dua today',blurb:'Pick one dua from a trusted collection and recite with meaning.',href:'resource.html?id=duas-org',tag:'Devotion'},
  {title:'Urdu media start',blurb:'Browse Urdu books or lectures without random scrolling.',href:'resources.html?language=Urdu',tag:'Urdu'},
  {title:'Hadith search practice',blurb:'Look up one narration with source filters on Thaqalayn.',href:'resource.html?id=thaqalayn-search',tag:'Study'},
  {title:'Family kids path',blurb:'Choose one child-friendly activity instead of open autoplay.',href:'videos.html',tag:'Family'},
  {title:'Beliefs short path',blurb:'Follow the English youth beliefs path for a structured start.',href:'learning-paths.html',tag:'Youth'},
  {title:'Fiqh answer desk',blurb:'Use Sistani Q&A as the first stop for a practical question.',href:'resource.html?id=sistani-qa',tag:'Practical'}
];
function renderToday(){
  const box=document.getElementById('todayGrid');if(!box)return;
  const i=dayIndex()%TODAY_PICKS.length;
  const picks=[TODAY_PICKS[i],TODAY_PICKS[(i+1)%TODAY_PICKS.length],TODAY_PICKS[(i+2)%TODAY_PICKS.length]];
  box.innerHTML=picks.map(p=>`<a class="today-card" href="${esc(p.href)}"><span class="today-tag">${esc(p.tag)}</span><strong>${esc(p.title)}</strong><small>${esc(p.blurb)}</small><b>Start →</b></a>`).join('');
}
function renderContinue(resources){
  const box=document.getElementById('continueBox');if(!box)return;
  let last=null;try{last=JSON.parse(localStorage.getItem(LAST_KEY)||'null')}catch{}
  if(!last?.id){box.hidden=true;return}
  const r=resources.find(x=>x.id===last.id);
  if(!r){box.hidden=true;return}
  box.hidden=false;
  box.innerHTML=`<div class="continue-inner"><div><p class="eyebrow">Continue</p><strong>${esc(r.name)}</strong><p>You opened this recently. Pick up where you left off.</p></div><a class="button" href="resource.html?id=${encodeURIComponent(r.id)}">Open again →</a></div>`;
}
async function load(){try{const resources=await getResources();renderToday();renderContinue(resources);const featured=document.querySelector('#featuredGrid');if(featured){const byId=new Map(resources.map(r=>[r.id,r]));const top=TOP_FEATURED.map(id=>byId.get(id)).filter(Boolean);const rest=resources.filter(r=>!TOP_FEATURED.includes(r.id)&&(r.featured||r.verified||r._rank>=75)).sort((a,b)=>(b._rank||0)-(a._rank||0));const selected=[...top,...rest].slice(0,8);featured.innerHTML=selected.length?selected.map(card).join(''):'<div class="empty">Featured resources are being curated.</div>'}const count=document.querySelector('#resourceCount');if(count)count.textContent=`${resources.length}`;const categoryCount=document.querySelector('#categoryCount');if(categoryCount)categoryCount.textContent=`${new Set(resources.flatMap(r=>r.categories||[])).size}`;const languageCount=document.querySelector('#languageCount');if(languageCount)languageCount.textContent=`${new Set(resources.flatMap(r=>r.languages||[])).size}`;const recent=document.querySelector('#recentGrid');if(recent){const dated=resources.filter(r=>resourceDate(r)).sort((a,b)=>new Date(resourceDate(b))-new Date(resourceDate(a)));const selected=(dated.length?dated:resources).slice(0,6);recent.innerHTML=selected.length?selected.map(card).join(''):'<div class="empty">Resources are being curated.</div>'}const collectionGrid=document.querySelector('#homeCollectionGrid');if(collectionGrid){const icons={'start-here':'🧭','urdu-south-asia':'🌐','kids-families':'👨‍👩‍👧','research':'🔬','fiqh-practical':'⚖️','duas-ziyarat':'🤲','youth-english':'🎓'};const collections=await loadJson('data/collections-v2.json');collectionGrid.innerHTML=collections.length?collections.slice(0,3).map(c=>`<a class="collection-card" href="resources.html?search=${encodeURIComponent(c.search||c.category||'')}"><span aria-hidden="true">${icons[c.id]||'✦'}</span><h2>${esc(c.title)}</h2><p>${esc(c.description)}</p><b>Explore →</b></a>`).join(''):'<div class="empty">Collections could not be loaded right now. <a href="collections.html">Browse collections →</a></div>'}const input=document.querySelector('#searchInput');const clear=document.querySelector('#clearSearch');if(input){const go=q=>{const value=q.trim();if(!value)return;if(/^urdu$/i.test(value))window.location.href='resources.html?language=Urdu';else window.location.href=`resources.html?search=${encodeURIComponent(value)}`};input.addEventListener('keydown',e=>{if(e.key==='Enter')go(input.value)});clear?.addEventListener('click',()=>{input.value='';input.focus()});document.querySelectorAll('[data-query]').forEach(b=>b.addEventListener('click',()=>{input.value=b.dataset.query;go(input.value)}));}}catch(e){console.error('Could not load resources',e)}}
document.addEventListener('DOMContentLoaded',load);
