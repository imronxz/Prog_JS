// TODO Building a Slider Component_ Part 1
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlides = 0;
const maxSlides = slides.length;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.3) translateX(-800px)';
// slider.style.overflow = 'visible';

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

// index 0 = 0 - 1 -> -1 * 100 = -100
// index 1 = 1 - 1 -> 0 * 100 = 0
// index 2 = 2 - 1 -> 1 * 100 = 100
// index 3 = 3 - 1 -> 2 * 100 = 200
// curSlides = -100%, 0%, 100%, 200%

const nextSlide = function () {
  // jika curSlides === maxSlides maka curSlides return 0
  if (curSlides === maxSlides - 1) {
    curSlides = 0;
  } else {
    curSlides++;
  }
  goToSlide(curSlides);
};

const prevSlide = () => {
  // jika curSlides === 0 maka curSlides return maxSlides - 1
  if (curSlides === 0) {
    curSlides = maxSlides - 1;
  } else {
    curSlides--;
  }

  goToSlide(curSlides);
};
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
