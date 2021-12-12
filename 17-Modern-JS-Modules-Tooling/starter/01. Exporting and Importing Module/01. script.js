// TODO Importing module
/*
* Importing module version 1
import {
  shoppingCost,
  addToCart,
  totalPrice as TP,
  TQ,
} from './01. ShoppingChart.js';

console.log(shoppingCost);
addToCart('Coffee', 2);
console.log(TP, TQ);
*/
console.log('Importing module');

/*
* Importing module version 2
import * as ShoppingCart from './01. ShoppingChart.js';
ShoppingCart.addToCart('Coffee', 2);
console.log(ShoppingCart.totalPrice, ShoppingCart.TQ);
*/

// TODO Importing default module version 3
// import add, {shoppingCost, totalPrice as TP,TQ,} from './01. ShoppingChart.js';
import add, { cart } from './01. ShoppingChart.js';

add('Coffee', 2);
add('Pizza', 7);
add('Apples', 12);
// console.log(shoppingCost, TP, TQ);
console.log(cart);

// import are not copy of the export they are instead like a live connection
