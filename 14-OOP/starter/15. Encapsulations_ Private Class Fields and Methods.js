// TODO Encapsulations_ Private Class Fields and Methods

// TODO 1) Public fields
// TODO 2) Private fields
// TODO 3) Public methods
// TODO 4) Private methods
// (there is  also the static keyword)

class Protected {
  // TODO 1) Public fields (instances)
  locale = navigator.language;

  // TODO 2) Private fields (instances)
  #mov = [];
  #token;

  constructor(name, birthYear, token) {
    this.name = name;
    this.birthYear = birthYear;
    this.#token = token;
    // this._mov = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${name}`);
  }
  // TODO 3) Public methods
  // Public interface
  introduce() {
    console.log(
      `${this.name} lahir pada ${this.birthYear} with an id ${this.#token}`
    );
  }
  getMov() {
    return this.#mov;
  }
  myp(val) {
    this.#mov.push(val);
  }
  requestPin(val) {
    if (this._approvePin(val)) {
      this.myp(val);
      console.log(`Pin diterima`);
    }
  }
  // TODO 4) Private methods
  // Private interface
  // #approvePin(val) {
  _approvePin(val) {
    return true;
  }
  // TODO 5) Static methods
  static helper() {
    console.log('Static Helper');
  }
}
const acc1 = new Protected('Imron', 1996, 'grzvewcd@');
console.log(acc1);

acc1.introduce();
acc1.requestPin(123);
console.log(acc1);
console.log(`You're new pin is: ${acc1.getMov()}`);
// console.log(acc1.#mov) // private
// console.log(acc1.#token); // private
// console.log(acc1.#approvePin(123)); // private

Protected.helper();
