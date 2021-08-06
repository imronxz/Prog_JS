const age = 15;
// console.log(isOldEnough);

if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 19 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😶`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
