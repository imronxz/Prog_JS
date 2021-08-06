// TODO Basic Operation

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

// Multi operation
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 adalah 2 pangkat 3 | 2 x 2 x 2

const firstName = "Jonas";
const lastName = "moru";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // increment 1
x--; // decremnt 1
console.log(x);

// Comparison Operators | true or false
// TODO >, <, >=, <=, !=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 16);

const isFullAge = ageSarah >= 16;

console.log(now - 1991 > now - 2020);
