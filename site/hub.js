// Wide screens: one plate beside the list shows the card of the entry being hovered or focused.
// Without this script, each entry keeps its own card inline.
(() => {
  const works = document.querySelector('.works');
  const entries = [...document.querySelectorAll('.entry')];
  if (!works || entries.length < 2) return;
  const plates = document.createElement('div');
  plates.className = 'plates';
  plates.setAttribute('aria-hidden', 'true');
  entries.forEach(entry => {
    const plate = entry.querySelector('.plate').cloneNode(true);
    plate.dataset.for = entry.dataset.plate;
    plate.querySelector('img').loading = 'eager';
    plates.append(plate);
  });
  works.append(plates);
  document.body.classList.add('has-plates');
  const show = entry => {
    entries.forEach(e => e.setAttribute('aria-current', String(e === entry)));
    plates.querySelectorAll('.plate').forEach(p => p.toggleAttribute('data-active', p.dataset.for === entry.dataset.plate));
  };
  entries.forEach(entry => {
    entry.addEventListener('pointerenter', () => show(entry));
    entry.addEventListener('focusin', () => show(entry));
  });
  show(entries[0]);
})();
