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
