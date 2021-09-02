'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//! MAP Method
/* Map ==> Calls a defined callback function on each element of an array, and returns an array that contains the results */
const eurToUsd = 1.1;
/*
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
*/
// Arrow Methods
const movementsUsd = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movements ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
