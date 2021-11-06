// Internationalizing Numbers
const num = 3884764.23;
console.log(
  'Dollar:',
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num)
);
console.log(
  'Rupiah:',
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(num)
);
console.log(
  'Syria:',
  new Intl.NumberFormat('ar-SY', {
    style: 'currency',
    currency: 'SYP',
  }).format(num)
);
console.log(
  'Euro:',
  new Intl.NumberFormat('eu-EU', {
    style: 'currency',
    currency: 'EUR',
  }).format(num)
);

// Internationalizing number formatted in app
