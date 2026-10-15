const button = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-links');
button?.addEventListener('click', () => {
  const opened = navigation.classList.toggle('open');
  button.setAttribute('aria-expanded', String(opened));
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
}));
const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());
