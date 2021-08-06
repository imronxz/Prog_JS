// TODO for loop: Perulangan beruntun sampai stop
for (let rep = 1; rep <= 4; rep++) {
    console.log(`Lifting weights repetition 🏋️‍♀️${rep}`);
}

// TODO Array Loops
const myArray = [1, 2, 3, 4, "a", "b", "c", "d", true];

for (let loopArray = 0; loopArray < myArray.length; loopArray++) {
    console.log(myArray[loopArray]);
}

// TODO Array Iteration: Memasukkan data ke array lagi
const zeroTypeArray = []; //TODO<-- Array Kosong
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i], typeof myArray[i]);

    // TODO==> Filling type Array
    zeroTypeArray[i] = typeof myArray[i]; // Meth 1
    zeroTypeArray.push(typeof myArray[i]); //Meth 2
}
console.log(zeroTypeArray);

// TODO Case 1 Array Iteration
const years = [1991, 1992, 1993, 1994, 1995];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// TODO Countinue and Breakpoint
const cbArrays = [1, 2, 3, 4, "a", "b", 5, "c", "d", true];
console.log("----- only string with continue -----");
for (let i = 0; i < cbArrays.length; i++) {
    // TODO Jika type data tidak sama dengan string, maka lanjut
    if (typeof cbArrays[i] !== "string") continue;
    console.log(cbArrays[i], typeof cbArrays[i]);
}
const cbArrays1 = ["a", "b", "c", "d", 1, 2, 3, 4, true];
console.log("----- only number with breakline -----");
for (let i = 0; i < cbArrays1.length; i++) {
    // TODO Jika type data sama dengan number, maka berhenti
    // HACK Akan berhenti jika ketemu type data number.
    if (typeof cbArrays1[i] === "number") break;
    console.log(cbArrays1[i], typeof cbArrays1[i]);
}
