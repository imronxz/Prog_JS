const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The Filter method
/* filter: Returns the elements of an array that meet the condition specified in a callback function.
 */
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits); //[200, 450, 3000, 70, 1300]

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); //[200, 450, 3000, 70, 1300]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); //[-400, -650, -130]
