'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// TODO Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// TODO without temp
[main, secondary] = [secondary, main];
console.log(main, secondary);

// TODO indexing JS: Receiving 2 return values from a fucntion
const [menuPembuka, menuUtama] = restaurant.order(2, 0);
console.log(menuPembuka, menuUtama);

// TODO Nested destructuring
const nested = [2, 4, [5, 6]];
const [a1, , b1] = nested; // index [0], , [2]
console.log(a1, b1);
const [x1, , [y1, z1]] = nested; // index [0], ,[2,3]
console.log(x1, y1, z1);

// TODO Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log([p, q, r]);
