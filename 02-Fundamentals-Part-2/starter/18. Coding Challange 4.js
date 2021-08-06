/*TODO!
var calctip = function bill  return, -Statement/IF->
Jika benar bill >= 50 AND bill <= 300 maka, return bill * 0.5
Jika salah kedua statement diatas tidak terpenuhi maka, return bill * 0.2
*/
const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 295, 176,440,105,1100,86, 52 * 0.15
// 22, 37,,10 * 0.2
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]); // Algoritma calcTip
  tips.push(tip);
  //! 4.4, 147. 5, 88,88, 7.4, 52.5, 2, 220, 43, 6 */
  totals.push(tip + bills[i]);
  //! 26.4, 442.5, 264, 528, 44.4, 157.5, 12, 1320, 129, 78 */
}
console.log(bills, tips, totals);

const rataRata = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log([2, 3, 7]);
console.log(rataRata(totals));
console.log(rataRata(tips));
