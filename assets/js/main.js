(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  function closeMenu() { toggle?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('open'); }
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { const wasOpen = nav?.classList.contains('open'); closeMenu(); if (wasOpen) toggle.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });
  matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
  const input = document.querySelector('#venture-search');
  const cards = [...document.querySelectorAll('.directory-grid .venture-card')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  let category = 'all';
  function filter() {
    const query = (input?.value || '').trim().toLocaleLowerCase();
    let count = 0;
    cards.forEach(card => {
      const show = (category === 'all' || card.dataset.category === category) && card.dataset.search.includes(query);
      card.hidden = !show; if (show) count++;
    });
    const output = document.querySelector('[data-result-count]');
    if (output) output.textContent = `${count} ${count === 1 ? output.dataset.singular : output.dataset.plural}`;
    const empty = document.querySelector('.no-results'); if (empty) empty.hidden = count !== 0;
    const url = new URL(location.href); url.searchParams.delete('category'); url.searchParams.delete('q');
    if (category !== 'all') url.searchParams.set('category', category);
    if (query) url.searchParams.set('q', input.value.trim());
    history.replaceState(null, '', url);
    document.querySelectorAll('.language').forEach(a => { const target = new URL(a.href); target.search = url.search; a.href = target.href; });
  }
  if (input) {
    const params = new URLSearchParams(location.search);
    category = buttons.some(b => b.dataset.filter === params.get('category')) ? params.get('category') : 'all';
    input.value = params.get('q') || '';
    buttons.forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.filter === category)); button.addEventListener('click', () => { category = button.dataset.filter; buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button))); filter(); }); });
    input.addEventListener('input', filter); filter();
  }
})();
