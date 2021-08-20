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

// Manipulating this. from book with call method
book.call(euairlines, 23, 'Sarah Williams');
console.log(euairlines);

book.call(airline, 233, 'a John');
console.log(airline);

const swiss = {
  name: 'Swiss Air Lines',
  accsCode: 'SW',
  booking: [],
};

book.call(swiss, 24, 'Imrons');
console.log(swiss);

// Apply method: apply does not received a list but array
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// New modern method for apply
book.call(swiss, ...flightData);
