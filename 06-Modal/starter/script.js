'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);
/*
Perulangan var i = 0 dan i < btnOpenModal.length lakukan inc-
 --> print btnOpenModal length dlm bentuk string.
TODO* Mengaktifkan btn dgn perulangan kemudian remove hidden class untuk menampilkan modal class
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked 🖱');
    TODO Touch modal class then remove hidden class, without [.hidden] command!!
    TODO [dot]. only for selector
    modal.classList.remove('hidden');
    TODO overlay: Menghilangkan background website, saat execute modal
    overlay.classList.remove('hidden');
  });
}
*/
// TODO* Menghilangkan hidden class (modal dan overlay) menggunakan classList.remove
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// TODO* Melakukan perulangan pada btnOpenModal.length
// --> pada saat click lakukan openModal function
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// TODO* Mengembalikan hidden class (modal dan overlay) menggunakan classList.add
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    return closeModal();
    // if (!modal.classList.contains('hidden')) {
    //   closeModal();
    // }
  }
});
