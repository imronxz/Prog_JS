import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('Banana', 4);
add('Tomato', 5);
console.log(cart);

// TODO cloneDeep using lodash-es modules NPM
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 2 },
    { product: 'Apple', quantity: 1 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;

console.log(stateDeepClone);
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting} ${this.name}`);
  }
}
const imron = new Person('imron');

console.log('imron' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// TODO polyfill
import 'core-js/stable';
// import 'core-js/stable/promise';
// import 'core-js/stable/array/find';

// Polyfilling async function
import 'regenerator-runtime/runtime';
