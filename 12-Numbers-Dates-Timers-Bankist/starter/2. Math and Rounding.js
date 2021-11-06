// TODO Math and Rounding

console.log(Math.sqrt(25)); //5 -> bilangan kuadrat
console.log(25 ** 1 / 2); //12.5
console.log(8 ** (1 / 3)); //2

console.log(Math.max(5, 18, 23, 11, 2)); //23 -> nilai terbesar
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

console.log(Math.min(5, 18, 23, 11, 2)); //2 -> nilai terkecil

console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793
console.log(Math.trunc(Math.random() * 6 + 1)); // ? (random 1-6)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding integers

console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor('23.9')); //23

console.log(Math.trunc(23.3)); //23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); //-24

// Rounding decimal -> value dibelakang koma
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.7).toFixed(2));
