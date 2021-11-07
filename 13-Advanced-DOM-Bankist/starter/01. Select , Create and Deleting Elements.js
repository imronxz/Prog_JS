// TODO Selecting, Creating and Deleting Elements
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
