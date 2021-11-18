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

// TODO Prototypal Inheritance

console.log(imron.__proto__);
/* {species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}
calcAge: ƒ ()
species: "Homo Sapiens"
constructor: ƒ (name, birthYear)
[[Prototype]]: Object
 */
console.log(imron.__proto__.__proto__);
/* {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
 */
console.log(imron.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);
/* (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}
 */
// console.dir(Person.)
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1.__proto__);
console.dir(x => x + 1);
