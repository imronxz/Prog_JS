/////////////////////////////////////////////////
// SLICE Methods: Keeping original arrays
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log('SLICE');
console.log(arr.slice(2)); //["c", "d", "e"]
console.log(arr.slice(2, 4)); // ["c", "d"]
console.log(arr.slice(-2)); //["d", "e"]
console.log(arr.slice(-1)); //["e"]
console.log(arr.slice(1, -2)); //["b", "c"]
console.log(arr.slice()); //["a", "b", "c", "d", "e"]
console.log(...arr); //a b c d e --> Spread Operators

// SPLICE Methods: Remove original arrays
console.log('SPLICE');
// console.log(arr.splice(2)); //["c", "d", "e"]
arr.splice(-1); //["e"]
console.log(arr); //["a", "b", "c", "d"]

// REVERSE Methods: Reverses the elements in an array in place.
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['k ', 'j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

/* CONCAT Methods: Combines two or more arrays.
This method returns a new array without modifying any existing arrays.
*/
const letters = arr.concat(arr2);
console.log(letters); //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k "]
// TODO Without remove original array
console.log([...arr, ...arr2]); //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k "]

/*  JOIN Methods: Adds all the elements of an array into a string,
 separated by the specified separator string
 */
console.log(letters.join(' - ')); //a - b - c - d - e - f - g - h - i - j - k

//! MDN Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
