var navToggle = document.querySelector('.main-header__nav-toggle');
var navMain = document.querySelector('.main-header__nav');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed');
  } else {
    navMain.classList.add('main-header__nav--closed');
  }
});
