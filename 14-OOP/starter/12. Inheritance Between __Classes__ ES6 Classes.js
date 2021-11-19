class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  introduce() {
    console.log(
      `hi nama saya: ${this.name} saya lahir pada tahun ${this.birthYear} 🥇`
    );
  }
}
class StudentCl extends Person {
  constructor(name, birthYear, id) {
    // TODO Need to happend first
    super(name, birthYear);
    this.id = id;
  }
  getAge() {
    console.log(2047 - this.birthYear);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}
const imron = new StudentCl('Imron', 1996, 2);
console.log(imron);
imron.getAge();
imron.calcAge();
imron.introduce();
