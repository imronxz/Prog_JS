// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (ages) {
  // Jika age <= 2 maka, age dikali 2. Else 16 + (age * 4)
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // TODO Good case using reduce (arr)parameter
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};
*/
// Arrow function and chaining.
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); // [36, 4, 32, 2, 76, 48, 28]
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); // [80, 40, 56, 36, 40, 2, 32]
console.log(avg1, avg2); //44, 47.333333333333336
