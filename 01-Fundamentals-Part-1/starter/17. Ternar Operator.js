// TODO Case 1
const age = 23;
// TODO jika age kurang dr samadengan 18, maka execute console.log! (ternary operators)
age >= 18
    ? console.log("I like to drink wine 🍷")
    : console.log("I like to drink water"); // else execute this line

// TODO Case 2
const age1 = 20;
// var drink --> Jika benar age > 18 maka print wine, else print water
const drink = age1 >= 18 ? "wine" : "water";
console.log(drink);

// TODO Case 3
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
