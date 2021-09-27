account1 = {
  owner: 'Muhammad Imron',
  movements: [50000, 34000, -1500, -7900, -32100, -10000, 85000, -300],
  interestRate: 1.5,
  pin: 1234,
};
const accounts = [account1];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// TODO FInd Methods
/* FInd methods: Only return the first element on the array, yang menhasilkan output berupa object
 */
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
// TODO Mencari spesifik value di objek menggunakan Find methods
const account = accounts.find(acc => acc.owner === 'Muhammad Imron');
console.log(account);
