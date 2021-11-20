// TODO Encapsulations Protected Properties and Methods

class Protected {
  constructor(name) {
    this.name = name;
    // Protected Properties
    this._movements = [];
  }
  // TODO Public Interfaces
  getName() {
    return this.name;
  }
  myp(val) {
    this._movements.push(val);
  }
  _approvePin(val) {
    return true;
  }
  requestPin(val) {
    if (this._approvePin(val)) {
      this.myp(val);
      console.log(`Pin diterima`);
    }
  }
}
const john = new Protected('John');
// john._movements.push(123);
console.log(john.getName());
console.log(john);

john.requestPin(12);
console.log(john);
