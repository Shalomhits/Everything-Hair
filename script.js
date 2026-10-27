const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');

if (toggle && menu) {
  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}