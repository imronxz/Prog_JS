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
  }

};

const ingredients = [
  // prompt('let\'s make pasta! Ingredient 1?'),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?')
]
console.log(ingredients);
restaurant.orderPasta(...ingredients);


// TODO Objects Spread Operators
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'imron'
};
console.log(newRestaurant);


// TODO Copying Object Spread Operators
const restaurantCopy = {
  ...restaurant
};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// TODO Old Method push Array
const arr = [7, 8, 9, 10];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// TODO ES6 Method ... Spread Operators Arrays
const newArr = [1, 2, ...arr]; // taking value var arr to the rest of the newArr
console.log(newArr);
console.log(...newArr); // Spread Operators outside array

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

// Iterable: arrays, strings, maps, sets, NOT Objects
const str = 'imron';
const letters = [...str, '', 'S.'];
console.log(letters);