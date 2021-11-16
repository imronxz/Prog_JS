const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');

// TODO Sticky Navigation: Membuat nav bar mengikuti
const initialCoords = section1.getBoundingClientRect(); // 0 viewport
console.log(initialCoords);
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) {
    // jika scrollY > 0 maka nav bar akan mengikuti scroll
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
