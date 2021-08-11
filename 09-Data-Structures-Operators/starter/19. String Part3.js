'use strict';

// TODO Working with strings 3
console.log('a+very+nice+string'.split('+')); //[ 'a', 'very', 'nice', 'string' ]
console.log('Muhammad Imron'.split(' ')); //[ 'Muhammad', 'Imron' ]

const [firstName, lastName] = 'Muhammad Imron'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Mr. Muhammad IMRON

// TODO Membuat awal kalimat menjadi UpperCase
const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  /*- setiap variable n dari names
       masukkan var namesUpper into array, var n index-0 => toUpperCase +
       var n kalimat pertama setelah space.
    - Mengubah namesUpper array ke bentuk string
   */
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizedName('Muhammad and Imron davis'); // Muhammad_And_Imron_Davis
capitalizedName('Muhammad Imron'); // Muhammad_Imron

// Padding a String
const message = 'Go to gae 23!';
console.log(message.padStart(22, '+').padEnd(32, '+'));
console.log('imron'.padStart(15, '-').padEnd(25, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard(1212891921));
console.log(maskCreditCard('12391028312831203891023'));

// Repeated String
const foo = 'Bad weather . . . All departure Delayed';
console.log(foo.repeat(5));

const fooLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
fooLine(5);
fooLine(3);
fooLine(2);
