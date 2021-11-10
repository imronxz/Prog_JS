'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

// TODO Tabbed Component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove Active Classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content areas
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  // TODO jika event target terdapat class operations__tab maka, setiap tabs yg memiliki function attribute (tab, i) maka,jika event rarget === tab maka, untuk setiap tabsContent yg memiliki function attribute (content) maka, hapus classList content class operations__content--active, else index tabContent tambahkan classList class operations__content--active.

  /* if (e.target.classList.contains('operations__tab')) {
    tabs.forEach(function (tab, i) {
      if (e.target === tab) {
        tabsContent.forEach(function (content) {
          content.classList.remove('operations__content--active');
        });
        tabsContent[i].classList.add('operations__content--active');
      }
    });
  } */
});

// TODO Passing Arguments to Event Handlers
// TODO* Menu fade animation || Only 1 parameter
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
/*HACK Passing an argument toward eventHandlers
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
*/
// nav.addEventListener('mouseover', e => handleHover(e, 0.5));
// nav.addEventListener('mouseout', e => handleHover(e, 1));

// HACK with bind methods: passing args in eventHandlers
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// TODO Sticky Navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
