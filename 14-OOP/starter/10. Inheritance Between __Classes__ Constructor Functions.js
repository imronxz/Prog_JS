// TODO Inheritance Between __Classes__ Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// TODO Inheritance Between "CLASSES"
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  //   Person(firstName, birthYear);
  this.course = course;
  //   console.log(Person);
};

// TODO Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const imron = new Student('Imron', 1996, 'JS');
imron.introduce();
imron.calcAge();

console.log(imron.__proto__);
console.log(imron.__proto__.__proto__);

console.log(imron instanceof Student);
console.log(imron instanceof Person);
console.log(imron instanceof Object);

console.dir(Student.prototype.constructor);
