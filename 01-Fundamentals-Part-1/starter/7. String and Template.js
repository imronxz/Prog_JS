const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
    "i'm " +
    firstName +
    ", a " +
    (year - birthYear + " years old " + job + "!");
console.log(jonas);

// TODO Template Literals
// backtic's atas Tab sebelah 1
const jonasNew = `i'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log("Just a regular string...");

console.log("String with \n\
multiple\n\
lines\n\
" + `${firstName} Monke`);
