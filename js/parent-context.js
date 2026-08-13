(() => {
  const p = new URLSearchParams(location.search);
  const hasSupportContext = ['age', 'time', 'language', 'type'].some(key => {
    const value = p.get(key);
    return value && value !== 'All' && value !== 'any';
  });
  const apply = () => {
    const box = document.getElementById('supportContext');
    if (box && !hasSupportContext) box.innerHTML = '';
  };
  document.addEventListener('DOMContentLoaded', apply);
  new MutationObserver(apply).observe(document.documentElement, { childList: true, subtree: true });
})();
