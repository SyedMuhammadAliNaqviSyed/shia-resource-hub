(function(){
  const KEY='srh-theme';
  const root=document.documentElement;
  const getStored=()=>{try{return localStorage.getItem(KEY)}catch{return null}};
  const systemDark=()=>window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
  const apply=mode=>{
    const dark=mode==='dark';
    root.setAttribute('data-theme',dark?'dark':'light');
    root.style.colorScheme=dark?'dark':'light';
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.content=dark?'#0f1612':'#176b4d';
    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
      btn.setAttribute('aria-pressed',String(dark));
      btn.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
      btn.textContent=dark?'☀':'☾';
      btn.title=dark?'Light mode':'Dark mode';
    });
  };
  const resolve=()=>{
    const s=getStored();
    if(s==='dark'||s==='light')return s;
    return systemDark()?'dark':'light';
  };
  apply(resolve());
  const toggle=()=>{
    const next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    try{localStorage.setItem(KEY,next)}catch{}
    apply(next);
  };
  const mount=()=>{
    if(document.querySelector('[data-theme-toggle]'))return;
    const wrap=document.querySelector('.nav-wrap');
    if(!wrap)return;
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='theme-toggle';
    btn.setAttribute('data-theme-toggle','');
    btn.addEventListener('click',toggle);
    const menu=wrap.querySelector('.menu-toggle');
    if(menu)wrap.insertBefore(btn,menu);
    else wrap.appendChild(btn);
    apply(resolve());
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);
  else mount();
  if(window.matchMedia){
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{
      if(!getStored())apply(resolve());
    });
  }
  window.SRHTheme={toggle,apply,resolve};
})();
