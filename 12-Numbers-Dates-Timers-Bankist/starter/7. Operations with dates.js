// LIBRARY FOR

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

// Math.abs => value without regard to whether it is positive or negative
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// 1000 milliseconds -> seconds, minutes, hours, days

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);
