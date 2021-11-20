// TODO Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1990;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);
// TODO Using initial
const straven = Object.create(PersonProto);
straven.init('Straven', 1979);
straven.calcAge();
