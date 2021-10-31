const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You're deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You're withdraw ${Math.abs(movement)}`);
  }
}

console.log('---FOREACH---');
movements.forEach(function (mov, i, arr) {
  //First val is current element, second was an index
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You're deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You're withdraw ${Math.abs(mov)}`);
  }
});
