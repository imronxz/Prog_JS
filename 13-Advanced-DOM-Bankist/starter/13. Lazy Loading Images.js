// TODO Lazy loading img great for performance, with specific image
const imgTarget = document.querySelectorAll('img[data-src]');

const loading = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // * Replace src with data-src
  entry.target.src = entry.target.dataset.src; // main src mengubah resolisi img dgn DOM

  // TODO jima img dataset telah di load, maka remove blur effect
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );

  // TODO remove observer
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTarget.forEach(img => imgObserver.observe(img));
