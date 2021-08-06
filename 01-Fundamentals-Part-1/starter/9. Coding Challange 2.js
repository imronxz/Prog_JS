// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(
    `Data BMI Mark : \n\
${BMIMark}`,
    `\nData BMI John : \n${BMIJohn} \n`
);

if (BMIMark > BMIJohn) {
    console.log(`Mark BMI (${BMIMark}) is higher than John (${BMIJohn})!`);
} else {
    console.log(`John BMI (${BMIJohn}) is higher than Mark (${BMIMark})!`);
}
