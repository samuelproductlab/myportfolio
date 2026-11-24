const menu = document.querySelector('.menu');
const isOpen = () => menu.getAttribute('aria-expanded') === 'true';
const setOpen = open => menu.setAttribute('aria-expanded', open);

menu.addEventListener('click', () => setOpen(!isOpen()));
document.addEventListener('click', event => {
  if (event.target.closest('.nav a') || !event.target.closest('.bar')) setOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && isOpen()) {
    setOpen(false);
    menu.focus();
  }
});
