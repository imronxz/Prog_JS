'use strict';

// TODO Returns function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Muhammad');
greeterHey('Imron');

greet('Hello')('Imron');

// Arrow Returns function
const gc = a => b => console.log(`${a} ${b}`);

const gcHey = gc('sup')('ducky');
