// TODO Static Methods
// 1. Static Methods on constructor function/ classes expression
const Person0 = function (fName, lName) {
  this.fName = fName;
  this.lName = lName;
};
const nama0 = new Person0('imron0', 'muhammad');
console.log(nama0);
Person0.hey = function () {
  console.log('Hey Classes 🍅');
  // console.log(this);
};
Person0.hey();

// 2. Static Methods on Classes declaration
class Person1 {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  static hey() {
    console.log('Hey Classes 🍕');
  }
}
const nama1 = new Person1('Imron1', 'Muhammad');
console.log(nama1);
Person1.hey();
