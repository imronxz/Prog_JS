'use strict';

const flight = 'imron';
const obj = {
  name: 'Muhammad Imron',
  id: 14045,
};

const pr = function (flightNum, passenger) {
  flightNum = 'LH99';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.id === 14045) {
    alert('Correct Number!');
  } else {
    alert('Wrong Number!');
  }
};

// pr(flight, obj);
// console.log(flight);
// console.log(obj);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = obj;

const newPassport = function (person) {
  person.id = Math.trunc(Math.random() * 1000000);
};
newPassport(obj);
pr(flight, obj);
console.log(flight);
console.log(obj);
