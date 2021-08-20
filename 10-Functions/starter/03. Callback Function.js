'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};

// TODO Higher order functions
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transform string: ${fn(str)}`); // Callback functions
  console.log(`Transform by: ${fn.name}`); // Name of methods
};
/*
transformer os High order function,
UpperFirstWord n oneWord is Callback Function,
 */
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// TODO Callback functions
const high5 = function () {
  console.log('🖐');
};
/*
addEventListener is High order function,
high5 is Callback Function,
 */
document.body.addEventListener('click', high5);
// forEach of them, this high5 callback will be called
['a', 'b', 'c'].forEach(high5);

/* Pros Callback
1. easy to split up and more readable
2. callback allow us to create abstractions
*/
