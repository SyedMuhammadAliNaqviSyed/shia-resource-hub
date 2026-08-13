/* Lightweight natural-language query interpreter. It only translates obvious user signals into the existing resources.html filters. It does not make religious judgments. */
(function(){
  const agePatterns=[[/\b(?:age\s*)?(3|4|5)\s*(?:years?|saal)\b/i,'3–5'],[/\b(?:age\s*)?(6|7|8)\s*(?:years?|saal)\b/i,'6–8'],[/\b(?:age\s*)?(9|10|11|12)\s*(?:years?|saal)\b/i,'9–12'],[/\b(?:age\s*)?(13|14|15|16|17)\s*(?:years?|saal)\b/i,'13–17'],[/\b(?:age\s*)?(18|19|20)\s*(?:years?|saal)?\s*(?:\+|plus)?\b/i,'18+']];
  const has=(s,arr)=>arr.some(x=>new RegExp(`(?:^|\\s|[^\\p{L}])${x}(?:$|\\s|[^\\p{L}])`,'iu').test(s));
  const parse=(raw)=>{
    const s=String(raw||'').trim(); const out={q:s,age:'',language:'',type:'',time:''};
    for(const [re,age] of agePatterns){if(re.test(s)){out.age=age;break}}
    if(has(s,['urdu','اردو']))out.language='Urdu'; else if(has(s,['arabic','arabi','عربی']))out.language='Arabic'; else if(has(s,['persian','farsi','فارسی']))out.language='Persian'; else if(has(s,['english']))out.language='English';
    // Audio is an intent/relevance signal, not a hard format filter: the
    // directory currently has no valid `Audio` type option.
    if(has(s,['video','videos','watch','dekhna','دیکھنا']))out.type='Video'; else if(has(s,['book','books','kitab','کتاب','reading']))out.type='Book';
    if(/\b(?:5\s*(?:-|to)\s*10|5\s*[-–]\s*10)\s*(?:min|mins|minutes)?\b/i.test(s))out.time='5-10'; else if(/\b(?:10\s*(?:-|to)\s*20)\s*(?:min|mins|minutes)?\b/i.test(s))out.time='10-20'; else if(/\b20\s*\+\s*(?:min|mins|minutes)?\b/i.test(s))out.time='20-plus';
    const intentTerms=[['quran',['quran','qur’an','قرآن']],['hadith',['hadith','hadees','حدیث','احادیث']],['duas',['dua','duas','duain','دعاء','دعا']],['history',['history','tareekh','tarikh','تاریخ','karbala','کربلا']],['prayer',['prayer','namaz','salah','نماز','wuzu','wudhu','وضو']],['kids',['kids','kid','children','child','bachay','bacha','بچے','بچہ']],['youth',['youth','teen','teenager','jawan','jawaan','نوجوان']],['parents',['parent','parents','walidain','والدین','parenting','tarbiyat']]];
    const matched=intentTerms.filter(([,terms])=>has(s,terms)).map(([key])=>key);
    // Keep meaningful terms while removing obvious age/format/time noise. Existing search.js remains the ranking engine.
    const noise=/\b(?:age|years?|saal|year|old|urdu|arabic|arabi|persian|farsi|english|video|videos|audio|listen|watch|dekhna|5\s*(?:-|to)\s*10|10\s*(?:-|to)\s*20|20\s*\+|minutes?|mins?|min)\b/gi;
    let cleaned=s.replace(noise,' ').replace(/\s+/g,' ').trim();
    if(matched.length) cleaned=matched.join(' ')+' '+cleaned;
    out.q=cleaned||s;
    return out;
  };
  window.SRHSmartQuery=parse;
  document.addEventListener('DOMContentLoaded',()=>{
    const input=document.getElementById('directorySearch'); if(!input)return;
    let busy=false,last='';
    input.addEventListener('input',()=>{
      if(busy)return; const raw=input.value; if(raw===last)return;
      const p=parse(raw); if(p.q===raw)return;
      busy=true; input.value=p.q;
      const url=new URL(location.href); if(p.age)url.searchParams.set('age',p.age); if(p.language)url.searchParams.set('language',p.language); if(p.type)url.searchParams.set('type',p.type); if(p.time)url.searchParams.set('time',p.time); url.searchParams.set('search',p.q); history.replaceState(null,'',url.href);
      busy=false; input.dispatchEvent(new Event('input',{bubbles:true})); last=p.q;
    });
  });
})();
