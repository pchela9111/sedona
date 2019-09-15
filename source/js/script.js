'use strict'

if (document.querySelector('.sorting__menu')) {
  var sortingLink = document.querySelector('.sorting__title');
  var sortingPopup = document.querySelector('.sorting__menu');

  sortingLink.addEventListener('click', function (a) {
    a.preventDefault();
    sortingPopup.classList.toggle('sorting__menu--opened');
  });
}

if (document.querySelector('.search__modal')) {
  var link = document.querySelector('.button--dark');
  var popup = document.querySelector('.search__modal');

  link.addEventListener('click', function (a) {
    a.preventDefault();
    popup.classList.toggle('search__modal--closed');
  });
}
