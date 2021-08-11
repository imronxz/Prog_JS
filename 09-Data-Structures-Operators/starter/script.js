'use strict';

// TODO Working with strings
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); //TAP AIR PORTUGAL

// FIx capitalization in name
const passenger = 'Muhammad iMroN';
const passengerLow = passenger.toLowerCase();
const passengerCorrect =
  passengerLow[0].toUpperCase() + passengerLow.slice(1, 8);
const passengerCorrect1 =
  passengerLow[9].toUpperCase() + passengerLow.slice(10);
console.log(passengerCorrect, passengerCorrect1); //Imron

// Comparing emails
const email = 'hello@gmail.com';
const loginEmail = 'Hello@Gmail.com\n';
const normalizedLogin = loginEmail.toLowerCase().trim();
console.log(normalizedLogin);
console.log(email === normalizedLogin);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, boarding door 23';
console.log(announcement.replace('door', 'gate')); //.replace method
console.log(announcement.replace(/door/g, 'gate')); //Regex

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); //using includes
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air')); //using startsWith
// Case 1 using startsWith and endWith
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family\n');
}

// Case 2
// menjadikan parameter items ke lowerCase ->
// check string baggage apakah termasuk 'knife' or 'gun'
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed in this flight');
  } else {
    console.log('Welcome to aboard, have a good days!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Sock and camera');
checkBaggage('Got some snacks and a gun for protection');
