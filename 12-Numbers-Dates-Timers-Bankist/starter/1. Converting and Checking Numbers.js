console.log(23 === 23.0);

// Base 10 -> 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversing
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

// parseFloat -> checking float value,
// parseInt -> checking int value,
// Name space from Number for parseFloat and parseInt
console.log(Number.parseFloat('  2.5rem'));
console.log(Number.parseInt('  2.5rem'));

// Using isNaN -> Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Using isFinite -> Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
