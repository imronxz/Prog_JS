const nav = document.querySelector('.nav');

// TODO Passing Arguments to Event Handlers
// TODO* Menu fade animation || Only 1 parameter
const handleHover = function (e, opacity) {
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
