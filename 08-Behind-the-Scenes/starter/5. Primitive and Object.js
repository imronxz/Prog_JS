'use strict';
// contoh 1 | primitive type
let age = 30;
let oldAge = age;
age = 31;
console.log('Age', age);
console.log('Old Age', oldAge);
// contoh 1 object method | Reference type
const me = {
  name: 'Imron',
  age: 25,
};
console.log(me.age);
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
// contoh 2 object method | Reference type
const imron = {
  name: 'Muhammad',
  lastName: 'imron',
  age: 27,
};

const marriedImron = imron;
marriedImron.lastName = 'jonas';
console.log('Sebelum Menikah', imron);
console.log('Setelah Menikah', marriedImron);

// Copying objects: only copy a property in the first clone
// Deep Cloning --> using library low dash
const imron2 = {
  firstName: 'Muhammad',
  lastName: 'imron',
  age: 27,
  family: ['Alice', 'Bob'], // Second Property --> Need a deep clone
};

const imronCopy = Object.assign({}, imron2);
imronCopy.lastName = 'Davis';

imronCopy.family.push('Mary');
imronCopy.family.push('John');
console.log('Before Mariage', imron2);
console.log('After Mariage', imronCopy);
