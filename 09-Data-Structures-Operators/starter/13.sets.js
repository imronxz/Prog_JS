'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // TODO ES6 Enhanced Object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};
// Sets: Menghilangkan duplikat value yg sama.
const orderSets = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSets);
console.log(new Set('Imron'));
console.log(orderSets.size); // Jumlah set pada array
console.log(orderSets.has('Pizza')); // true
console.log(orderSets.has('Bread')); // false
orderSets.add('Garlic Bread'); // add value
orderSets.add('Garlic Bread'); // ignored because of set
console.log(orderSets);
orderSets.delete('Risotto'); // delete value
console.log(orderSets);
orderSets.clear(); // Delete all values
console.log(orderSets);

for (const order of orderSets) console.log(order);

const staff = ['a', 'b', 'a', 'c', 'b', 'a'];
const staffUnique = [...new Set(staff)]; // new spread array ith set
console.log(staffUnique);
console.log(new Set(['a', 'b', 'a', 'c', 'b', 'a']).size);
console.log(new Set('Muhammad Imron').size);
