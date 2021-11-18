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

// TODO ES6 Classes

// class expression
// const PersonCl = class{

// }

// TODO Class declaration
class PersonCl {
  constructor(fullName, tgglLahir) {
    this.fullName = fullName;
    this.tgglLahir = tgglLahir;
  }
  // * Methods will be added to .prototype property
  hitungUmur() {
    console.log(2037 - this.tgglLahir);
  }
  haloo() {
    console.log(`Halo ${this.fullName}`);
  }

  get age() {
    return 2037 - this.tgglLahir;
  }
  // HACK Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}
const imronxz = new PersonCl('Muhammad Imron', 1996);
console.log(imronxz);
imronxz.hitungUmur();
console.log(imronxz.age);

console.log(imronxz.__proto__ == PersonCl.prototype);
// PersonCl.prototype.haloo = function () {
//   console.log(`Halo ${this.fullName}`);
// };
imronxz.haloo();

/* HACK  What is Classes?
1. Classes are NOT hoisted
2. Class are first-class citizes
3. Classes are execute in strict mode
*/

// TODO Getters and Setters
const oveo = new PersonCl('Imron muhammad', 1926);

const account = {
  owner: 'imron',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
