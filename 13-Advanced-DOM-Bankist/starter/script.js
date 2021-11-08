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

/* // TODO Selecting, Creating and Deleting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
console.log(header);

// ? Node List
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.querySelector('section--1');

// ? Html Collection
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// TODO Creating and Inserting elements
//.insertAdjacentHTML();

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies to ensure that we give you the best experience on our website.';
message.innerHTML =
  'We use cookies to ensure that we give you the best experience on our website.<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // teks atas
header.append(message); // teks bawah
// header.append(message.cloneNode(true)); // double teks

// header.before(message); // sebelum header
// header.after(message); // setelah header

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message); //DOM preversing
  });

//TODO Styles, Attributes and classes
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height + 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.className);
console.log(logo.alt);

logo.alt = 'Beautiful minimalist logo';

// Non-standard attributes
console.log(logo.attributes);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
console.log(logo.classList);
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use className, use classList
logo.className = 'Imron';
 */

/* // TODO Type of Event and Event Handlers
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };
 */
// TODO Event Propagation
