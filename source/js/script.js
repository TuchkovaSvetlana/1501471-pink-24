var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.header__toggle');
// var navHeader = document.querySelector('.header');

navMain.classList.remove('nav--close');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--close')) {
    navMain.classList.remove('nav--close');
    navMain.classList.add('nav--open');
  } else {
    navMain.classList.add('nav--close');
    navMain.classList.remove('nav--open');
  }
});

navToggle.classList.remove('header__toggle--open');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('header__toggle--open')) {
    navToggle.classList.remove('header__toggle--open');
    navToggle.classList.add('header__toggle--close');
  } else {
    navToggle.classList.add('header__toggle--open');
    navToggle.classList.remove('header__toggle--close');
  }
});

// navHeader.classList.add('header--open');

// navToggle.addEventListener('click', function() {
//   if (navHeader.contains(!'header--open')) {
//     navHeader.classList.add('header--open');
//   } else {
//     navHeader.classList.remove('header--open');
//   }
// }

