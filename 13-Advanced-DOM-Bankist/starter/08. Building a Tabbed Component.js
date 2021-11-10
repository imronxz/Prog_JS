// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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
