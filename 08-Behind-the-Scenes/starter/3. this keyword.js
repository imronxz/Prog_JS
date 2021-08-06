'use strict';

// TODO this keyword: Special variable for every execution context (every function).
//! this: Always point to the object it is calling the method

// expression fucntion
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);
// arrow function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);
// array function
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

//! Method borrow this object from jonas
const imron = {
  year: 2017,
};
imron.calcAge = jonas.calcAge;
console.log(imron);
imron.calcAge();

const f = jonas.calcAge;
f();
