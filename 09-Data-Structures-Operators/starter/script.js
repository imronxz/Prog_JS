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

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

/*1. || Short circuiting  */
// Use ANY data type, return ANY data type,
//* return first true value or the last value is all of em are false
console.log(3 || 'Jonas'); // return 3: first true value
console.log('' || 'Jonas'); // return Jonas: first true value
console.log(true || 0); //return true: first true value
console.log(undefined || null); //false or null: null

console.log(undefined || 0 || '' || 'hello' || 23 ||
  null); //return hello: first true

// TODO Using ternary statement
// numGuest doesn't exist', return 10: first true value
// if true --> restaurant.numGuests, else return 10
restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// TODO Using || Operator
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

/* 2. && Short circuiting */
//* return first false value or the last value is all of em are true
console.log('---AND---');
console.log(0 && 'Jonas'); // return 0: first false value
console.log(7 && 'Jonas'); // return Jonas: first false value
console.log(true && 0); // return o: first false value
console.log('Hello' && 23 && null && 'Jonas'); // return null: first false value

// TODO Using statement
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
};

// TODO Using && Operator
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');