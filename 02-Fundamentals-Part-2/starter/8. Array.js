const friend1 = "Michel";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michel", "Steven", "Peter"];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// TODO lenght --> Jumlah Array
console.log(friends.length);
// TODO spesifik Array
console.log(friends[friends.length - 1]);
console.log(friends[friends.length - 3]);

// TODO Mengganti value Array
friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Joy"];
// TODO Array inside Array
const imron = ["Joy", "wendy", 2037 - 1991, "\n"];
const imron1 = ["Joy", "wendy", 2037 - 1991, "guru", friends];
console.log(imron, imron1);

// HAX Ecercise
const calcAge = (tgglLahir) => 2037 - tgglLahir;
const tahun = [1990, 1967, 2002, 2010, 2018];

const hasil1 = calcAge(tahun[0]);
const hasil2 = calcAge(tahun[1]);
const hasil3 = calcAge(tahun[tahun.length - 1]);
console.log(hasil1, hasil2, hasil3);

// TODO value into Array
const umur = [
    calcAge(tahun[0]),
    calcAge(tahun[1]),
    calcAge(tahun[tahun.length - 1]),
];
console.log(umur);
