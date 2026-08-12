(() => {
  const params = new URLSearchParams(location.search);
  const isParentFlow = params.has('age') && (params.has('time') || params.has('language') || params.has('type'));
  if (!isParentFlow) return;
  const grid = document.getElementById('resourceGrid');
  if (!grid) return;
  const apply = () => {
    const cards = [...grid.querySelectorAll('.resource-card')];
    cards.forEach((card, i) => {
      card.hidden = i >= 3;
      card.setAttribute('data-parent-rank', i < 3 ? String(i + 1) : '');
    });
    const context = document.getElementById('supportContext');
    if (context && cards.length > 3 && !context.querySelector('.small-start-note')) {
      const note = document.createElement('p');
      note.className = 'small-start-note';
      note.textContent = 'Start with these first 3 options. You can reset filters or broaden the search when your child is ready for more.';
      context.appendChild(note);
    }
  };
  const observer = new MutationObserver(apply);
  observer.observe(grid, { childList: true });
  apply();
})();
