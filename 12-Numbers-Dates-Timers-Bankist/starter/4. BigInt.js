console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5);

console.log(4838409882080248129408120248);
console.log(BigInt(4838409));

// Operation
console.log(10000n + 10000n);
console.log(2313213412487861286487218478174n * 1087218917n);

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exception
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + 'is REALLY big!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
