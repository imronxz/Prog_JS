// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
// console.type(inputYear);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = '1' + 1; // TODO --> 1 string + 1 int = 11
n = n - 1;
console.log(n); // Hasil 10
