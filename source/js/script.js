'use strict'

if (document.querySelector('.search__modal')) {
  var link = document.querySelector('.button--dark');
  var popup = document.querySelector('.search__modal');

  link.addEventListener('click', function (a) {
    a.preventDefault();
    popup.classList.toggle('search__modal--closed');
  });
}
