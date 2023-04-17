const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.header-menu');

burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('active');
  menu.classList.toggle('menu--active');
});
