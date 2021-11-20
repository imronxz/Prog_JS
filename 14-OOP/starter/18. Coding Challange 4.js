'use strict';

// Coding Challenge #4

/*
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
// TODO Inheritance from parrent class
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    this.#charge++;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

console.log(rivian);
console.log(rivian.chargeBattery(10));
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .accelerate()
  .brake()
  .accelerate()
  .accelerate()
  .brake()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake();
console.log(`${rivian.speedUS} mph`);
