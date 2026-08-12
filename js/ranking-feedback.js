/* Lightweight prototype: use parent/learner feedback as one ranking signal.
   It never replaces contextual relevance, age fit, language, format or source quality. */
(function(){
  const KEY='shia-resource-hub-plan-feedback';
  const WEIGHTS={worked:3,help:1,'too-much':-2,'lost-interest':-3};
  function scores(){
    let data={};try{data=JSON.parse(localStorage.getItem(KEY)||'{}')}catch{}
    const out={};
    Object.values(data).forEach(x=>{if(!x?.resourceId)return;out[x.resourceId]=(out[x.resourceId]||0)+(WEIGHTS[x.value]||0)});
    return out;
  }
  function apply(){
    const grid=document.getElementById('resourceGrid');if(!grid)return;
    const s=scores();const cards=[...grid.querySelectorAll('.resource-card')];
    if(cards.length<2||!Object.keys(s).length)return;
    cards.sort((a,b)=>{
      const id=a.querySelector('a[href*="resource.html?id="]')?.getAttribute('href')?.split('id=')[1]||'';
      const jd=b.querySelector('a[href*="resource.html?id="]')?.getAttribute('href')?.split('id=')[1]||'';
      const sa=s[decodeURIComponent(id)]||0,sb=s[decodeURIComponent(jd)]||0;
      return sb-sa;
    }).forEach(c=>grid.appendChild(c));
  }
  document.addEventListener('DOMContentLoaded',()=>{
    const grid=document.getElementById('resourceGrid');if(!grid)return;
    new MutationObserver(()=>setTimeout(apply,0)).observe(grid,{childList:true});
    setTimeout(apply,700);
  });
})();