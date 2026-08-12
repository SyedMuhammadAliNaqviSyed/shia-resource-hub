(() => {
  const p = new URLSearchParams(location.search);
  const isParentContext = p.has('age') && (p.has('time') || p.has('language') || p.has('type'));
  const apply = () => {
    const box = document.getElementById('supportContext');
    if (box && !isParentContext) box.innerHTML = '';
  };
  document.addEventListener('DOMContentLoaded', apply);
  new MutationObserver(apply).observe(document.documentElement, { childList: true, subtree: true });
})();
