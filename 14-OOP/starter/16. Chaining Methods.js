'use strict';
// TODO Chaining Methods
class Account {
  // Public Field
  local = navigator.language;
  //   Private Field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    this.local = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public API
  deposits(val) {
    this.#movements.push(val);
    return this; //Chaining Methods
  }
  withdraw(val) {
    this.deposits(-val);
    return this; //Chaining Methods
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposits(-val);
      console.log(`Loan approved`);
      return this; //Chaining Methods
    }
  }
  getMovements() {
    return this.#movements;
  }
}
const account1 = new Account('John', 'USD', 1234);
console.log(account1);

account1.deposits(250);
account1.withdraw(100);
account1.requestLoan(1000);
account1.approveLoan(1000);

console.log(account1);
// console.log(account1.#pin);

// TODO Chaining Methods
account1
  .deposits(250)
  .deposits(100)
  .withdraw(50)
  .requestLoan(12000)
  .withdraw(5000);
console.log(account1.getMovements());
console.log(account1);
