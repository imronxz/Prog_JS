const dolphinScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;
console.log(dolphinScore, koalasScore);

if (dolphinScore > koalasScore) {
    console.log("Dolphins win the trophy 🏆");
} else if (dolphinScore > koalasScore) {
    console.log("Koala win the trophy 🏆");
} else if (dolphinScore === koalasScore) {
    console.log("Both win the trophy 🏆🏆");
} else {
    console.log("You guys suck!:@");
}
// TODO Case bonus 1
const dolphinScore1 = (97 + 112 + 101) / 3;
const koalasScore1 = (109 + 95 + 123) / 3;
console.log(dolphinScore1, koalasScore1);

if (dolphinScore1 > koalasScore1) {
    console.log("Dolphins win the trophy 🏆");
} else if (dolphinScore1 < koalasScore1) {
    console.log("Koala win the trophy 🏆");
} else if (dolphinScore1 === koalasScore1) {
    console.log("Both win the trophy 🏆🏆");
} else {
    console.log("You guys suck!:@");
}
// TODO Case Bonus 2
const dolphinScore2 = (97 + 112 + 101) / 3;
const koalasScore2 = (109 + 95 + 106) / 3;
console.log(dolphinScore2, koalasScore2);

if (dolphinScore2 > koalasScore2) {
    console.log("Dolphins win the trophy 🏆");
} else if (dolphinScore2 < koalasScore2) {
    console.log("Koala win the trophy 🏆");
} else if (dolphinScore2 === koalasScore2) {
    console.log("Both win the trophy 🏆🏆");
} else {
    console.log("You guys suck!:@");
}
// TODO Case bonus 3
const dolphinScore3 = (97 + 112 + 80) / 3;
const koalasScore3 = (109 + 95 + 50) / 3;
console.log(dolphinScore3, koalasScore3);

if (
    dolphinScore3 > koalasScore3 &&
    dolphinScore3 >= 100 &&
    koalasScore3 >= 100
) {
    console.log("Dolphins win the trophy 🏆");
} else if (
    dolphinScore3 < koalasScore3 &&
    dolphinScore3 >= 100 &&
    koalasScore3 >= 100
) {
    console.log("Koala win the trophy 🏆");
} else if (
    dolphinScore3 === koalasScore3 &&
    dolphinScore3 >= 100 &&
    koalasScore3 >= 100
) {
    console.log("Both win the trophy 🏆🏆");
} else {
    console.log("You guys suck!:@");
}
