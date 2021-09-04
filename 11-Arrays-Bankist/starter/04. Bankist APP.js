'use strict';
const account1 = {
  owner: 'Muhammad Imron',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const containerMovements = document.querySelector('.movements');
// Creating DOM Elements
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdraw';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    // TODO Memasukkan var html ke index.html
    /*
    'afterbegin': Just inside the element, before its first child.
    https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    */
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
