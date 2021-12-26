var navHeader = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');
var navToggleClose = document.querySelector('.header__toggle--close');


navHeader.classList.remove('header--no-js');
navHeader.classList.add('header--close');

navToggle.addEventListener('click', function() {
  if (navHeader.classList.contains('header--close')) {
    navHeader.classList.remove('header--close');
    navHeader.classList.add('header--open');
  }
});

navHeader.classList.remove('header--open');

navToggleClose.addEventListener('click', function() {
  if (navHeader.classList.contains('header--open')) {
    navHeader.classList.remove('header--open');
    navHeader.classList.add('header--close');
  }
});
