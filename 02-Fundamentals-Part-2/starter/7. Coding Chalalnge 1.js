// Def DATA

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Case 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas, scoreDolphins);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin Win 🏆 (${avgDolphins} vs. ${avgKoalas}) `);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koala Win 🏆 (${avgKoalas} vs. ${avgDolphins}) `);
    } else {
        console.log("You Guys Suck!!..");
    }
};
checkWinner(scoreDolphins, scoreDolphins);
checkWinner(576, 11);

// Case 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
