// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (Called EV) as a CHILD "class" of Car,
Besides a make and current speed, the EV also has a battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chareTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%, Then log a message
like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake', 'chargeBattery' (charge to 90%). notice
what happens when you 'accelerate'! HINT: Review the definition of polymorphism.

DATA CAR 1: 'Tesla going at 120 km/h, with a charge of 23%'

GOOD LUCK!
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 20;
  console.log(
    `${this.make}is going at ${this.speed} km/h, with a charge of ${this.chargeTo}%`
  );
};
*/
/*
const EV = function (make, speed, charge) {
      Car.call(this, make, speed);
      this.charge = charge;
};
*/
/*
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
*/
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}
// TODO Inheritance from parrent class
class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }
  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  }
  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  }
}

// TODO link prototypes
EV.prototype = Object.create(Car.prototype);

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
