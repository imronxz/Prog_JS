'use strict';

const airline = {
  name: 'Sultan Taha',
  accsCode: 'DJB',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} Booked a seat on name: ${this.name} Kode Penerbangan ${this.accsCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.accsCode}${flightNum}`, name });
  },
};

airline.book(239, 'Muhammad Imron');
airline.book(222, 'Jonas Schmedtmann');
console.log(airline);

const euairlines = {
  name: 'EuAir',
  accsCode: 'EU',
  booking: [],
};

const book = airline.book;

const swiss = {
  name: 'Swiss Air Lines',
  accsCode: 'SW',
  booking: [],
};

// TODO bind methods:Function.bind(this: Function, thisArg: any, ...argArray: any[]): any

const bookDjb = book.bind(airline);
const bookEu = book.bind(euairlines);
const bookSw = book.bind(swiss);
bookDjb(22, 'Penerbangan Jambi');
// bookEu(23, 'Penerbangan Europe');
// bookSw(24, 'Penerbangan Swiss');

// TODO Set flightNum args with bind
const bookEu23 = book.bind(euairlines, 23);
bookEu23('Muhammad Imron');
bookEu23('Jonas Cooper');

// TODO With event listeners bind
airline.planes = 300;
airline.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', airline.buyPlane.bind(airline));

// TODO Partial Application bind
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.23, 100));
console.log(addTax(0.23, 23));

//! func addTax With bind
const addVat = addTax.bind(null, 0.23);
//same as  --> addVat = (rate, value) => value + value * 0.23;
console.log(addVat(100));
console.log(addVat(23));

//! returning function Arrow
const arrBi = rate => value => value + value * rate;
const addVal = arrBi(0.23);
console.log(addVal(100));
console.log(addVal(23));
