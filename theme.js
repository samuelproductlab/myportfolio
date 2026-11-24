const root = document.documentElement;
const button = document.querySelector('.print');
const label = button.querySelector('.print-label');
const meta = document.querySelector('meta[name="theme-color"]');

function show(theme) {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  button.setAttribute('aria-pressed', dark);
  button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  label.textContent = dark ? 'Light mode' : 'Dark mode';
  meta.content = dark ? '#0C122E' : '#F4F1E8';
}

show(root.dataset.theme);

button.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  if (document.startViewTransition) document.startViewTransition(() => show(next));
  else show(next);
});
