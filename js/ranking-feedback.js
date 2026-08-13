/* Lightweight prototype: use parent/learner feedback as one ranking signal.
   It never replaces contextual relevance, age fit, language, format or source quality. */
(function(){
  const KEY='shia-resource-hub-plan-feedback';
  const WEIGHTS={worked:3,help:1,'too-much':-2,'lost-interest':-3};
  const MIN_OBSERVATIONS=3;
  function scores(){
    let data={};try{data=JSON.parse(localStorage.getItem(KEY)||'{}')}catch{}
    const out={};
    Object.values(data).forEach(x=>{
      if(!x?.resourceId)return;
      const id=x.resourceId;
      if(!out[id])out[id]={score:0,count:0};
      out[id].score+=(WEIGHTS[x.value]||0);
      out[id].count+=1;
    });
    return out;
  }
  function apply(){
    const grid=document.getElementById('resourceGrid');if(!grid)return;
    const s=scores();
    const mature=Object.entries(s).filter(([,v])=>v.count>=MIN_OBSERVATIONS);
    // Do not materially reorder contextual recommendations until enough
    // observations exist for at least two resources.
    if(mature.length<2)return;
    const cards=[...grid.querySelectorAll('.resource-card')];
    if(cards.length<2)return;
    const value=id=>s[id]?.count>=MIN_OBSERVATIONS?s[id].score:0;
    cards.sort((a,b)=>{
      const id=a.querySelector('a[href*="resource.html?id="]')?.getAttribute('href')?.split('id=')[1]||'';
      const jd=b.querySelector('a[href*="resource.html?id="]')?.getAttribute('href')?.split('id=')[1]||'';
      // Feedback only breaks close ties; contextual relevance remains primary.
      const delta=Math.max(-2,Math.min(2,value(decodeURIComponent(id))-value(decodeURIComponent(jd))));
      return delta===0?0:-delta;
    }).forEach(c=>grid.appendChild(c));
  }
  document.addEventListener('DOMContentLoaded',()=>{
    const grid=document.getElementById('resourceGrid');if(!grid)return;
    new MutationObserver(()=>setTimeout(apply,0)).observe(grid,{childList:true});
    setTimeout(apply,700);
  });
})();
