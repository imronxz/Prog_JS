class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.local = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  deposits(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposits(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposits(-val);
      console.log(`Loan approved`);
    }
  }
}
const account1 = new Account('John', 'USD', 1234);
console.log(account1);

account1.deposits(250);
account1.withdraw(100);
account1.requestLoan(1000);
account1.approveLoan(1000);

console.log(account1);
console.log(account1.pin);
