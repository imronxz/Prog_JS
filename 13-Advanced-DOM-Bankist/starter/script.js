'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// TODO Modal btn
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// TODO Implementing Smooth scrolling
// button scrolling
btnScrollTo.addEventListener('click', function (e) {
  // TODO getBoundingClientRect -> method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); // section1 coordinates
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (x/y)', window.scrollX, window.scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // TODO Scroll absolute position relative to document (section 1)
  // top of the pages Not using viewport
  /*
  window.scrollTo(
    s1coords.left + window.screenX,
    s1coords.top + window.scrollY
  );
  */

  // TODO Behavior smooth
  /*
  window.scrollTo({
    top: s1coords.top + window.scrollY,
    left: s1coords.left + window.scrollX,
    behavior: 'smooth',
  });
   */

  // TODO modern scroll smoothing
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// TODO Page navigation

/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // Implementing a navigation
  });
}); */

// TODO event delegation
// 1. Add event listener to common parent elements
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //? Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // Implementing a navigation
  }
});

// TODO DOM Traversing
const h1 = document.querySelector('h1');
// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// GOing upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// TODO
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) {
    (el.style.color = 'red'), (el.style.transform = 'scale(0.5)');
  }
});
