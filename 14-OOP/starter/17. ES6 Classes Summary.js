'use strict';

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}

class Student extends Person {
  university = 'University of Amikom Yogyakarta';
  #studyHours = 0;
  #course;
  static numSubjects = 10;

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);
    this.startYear = startYear;
    this.#course = course;
  }
  introduce() {
    console.log(`I study ${this.course} at ${this.university}`);
  }
  study(h) {
    this.#makeCoffe();
    this.#studyHours += h;
    console.log(`I study ${this.#studyHours} hours a day`);
  }
  #makeCoffe() {
    return 'Here is a coffe for you ☕';
  }
  get testScore() {
    return this._testScore;
  }
  set testScore(score) {
    this._testScore = score <= 20 ? score : this.#makeCoffe();
  }
  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}
const students = new Student('Imron', 1996, 2037, 'CS');
students.introduce(); //I study undefined at University of Amikom Yogyakarta
students.study(10); //I study 10 hours a day
// students.#makeCoffe();
students.testScore = 22; //Here is a coffe for you ☕
console.log(students.testScore);
console.log(students);
