// TODO Implementing Smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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
