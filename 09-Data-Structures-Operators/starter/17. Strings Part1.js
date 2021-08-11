'use strict';

// TODO Working with strings
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //A
console.log('B737'[0]); //B

console.log(airline.length); //16
console.log('B737'.length); //4

console.log(airline.indexOf('A')); //First string
console.log(airline.lastIndexOf('A')); //Last string
console.log(airline.indexOf('Portugal')); //8
// TODO slice return to a new string
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); //start, end

const airline1 = 'TAP Air Portugal';
console.log(airline1.slice(0, airline1.indexOf(' '))); //TAP
console.log(airline1.slice(airline1.lastIndexOf(' ') + 1)); //Portugal

console.log(airline1.slice(-2)); //al
console.log(airline1.slice(1, -1)); //AP Air Portugal
console.log(airline1.slice(-2)); //al

// TODO String Object with slice
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('imron')); //[String: 'imron']
console.log(typeof new String('imron')); //Object

console.log(new String('imron').slice()); //imron
console.log(typeof new String('imron').slice()); //string
