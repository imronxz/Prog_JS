'use strict';

// TODO Prototypes

// Person constructor function
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

const imron = new Person('imron', 1996);
console.log(imron);
const muhammad = new Person('Muhammad', 2000);
console.log(muhammad);

/* TODO Object.create
1. New {} is created
2. The function is called, this = {}
3. {} linked to prototype
4. function automatically returns {} */

// TODO Prototypes delegation from Person constructor function
// *  Person.prototype -> is gonna be used as the prototype of all objects created from Person constructor function
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

imron.calcAge();
muhammad.calcAge();

// ? @prototype properties
// * __proto__ -> from new Operator contains steps number 3, __proto__ properties on the object to the prototype property of the CONSTRUCTOR FUNCTION
console.log(imron.__proto__); // Person.prototype
console.log(imron.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(imron)); // true
console.log(Person.prototype.isPrototypeOf(muhammad)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototypeOflinkedObject

// TODO Properties of Prototypes
Person.prototype.species = 'Homo Sapiens';
console.log(imron.species, muhammad.species);

console.log(imron.hasOwnProperty('name'));
console.log(imron.hasOwnProperty('species'));
