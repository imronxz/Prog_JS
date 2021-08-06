'use strict';

// TODO HOISTING

// Variable
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Imron';
let job = 'staff';
const year = 1996;

// Function: Only declFunction can use before inisialization
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example
if (!numProduct) deleteShoppingCart();

var numProduct = 10;
function deleteShoppingCart() {
  console.log('All product Deleted!');
}

// Perbedaaan var, const, let
var x = 1; // true terdapat di windows object
let y = 2; // false
const z = 3; // false

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
// TODO TDZ (Temporal Dead Zone)
