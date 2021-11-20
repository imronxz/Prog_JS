'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //* Never create a function inside a constructor.
  /*
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  */
};

const imron = new Person('Imron', 1996);
console.log(imron);

// 1. New {} is created
// 2. The function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const muhammad = new Person('Muhammad', 2021);
const jj = new Person('jj', 2022);
console.log(muhammad, jj);

const jay = 'Jay';

console.log(imron instanceof Person); // true
console.log(jay instanceof Person); // false
