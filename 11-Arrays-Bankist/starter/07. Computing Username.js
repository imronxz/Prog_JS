const account3 = {
  owner: 'Muhammad Imron',
  movements: [50000, 34000, -1500, -7900, -32100, -10000, 85000, -300],
  interestRate: 1.5,
  pin: 1234,
};
accounts = [account3];
// Computing USERNAMES.
const awalNamaKecil = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

awalNamaKecil(accounts); // mis
console.log(accounts);
