// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2021 18:05:41'));
console.log(new Date('December 25, 2015'));
// console.log(object);

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getMilliseconds());
console.log(future.getTime());

console.log(new Date(2142256980000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future);
