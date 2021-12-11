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
