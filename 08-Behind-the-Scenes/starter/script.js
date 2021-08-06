'use strict';
// contoh 1 primitive
let age = 30;
let oldAge = age;
age = 31;
console.log('Age', age);
console.log('Old Age', oldAge);
// contoh 1 object method
const me = {
  name: 'Imron',
  age: 25,
};
console.log(me.age);
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
// contoh 2 object method
const imron = {
  name: 'Muhammad',
  lastName: 'imron',
  age: 27,
};
const marriedImron = imron;
marriedImron.lastName = 'jonas';
console.log('Seblum Menikah', imron);
console.log('Setelah Menikah', marriedImron);
