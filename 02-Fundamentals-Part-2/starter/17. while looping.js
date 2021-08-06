// TODO* for (let i = 0; i <= 3; i++) {
// TODO*    console.log(`Lifting weights repetition ${i}🏋️‍♀️`);
// TODO* }

// TODO! While looping
let ketika = 1;
while (ketika <= 3) {
  console.log(`lifting weights repetition WHILE ${ketika}🏋️‍♀️`);
  ketika++;
}

let dadu = Math.trunc(Math.random() * 6) + 1;
while (dadu !== 6) {
  console.log(`Kamu Melempar angka: ${dadu}`);
  dadu = Math.trunc(Math.random() * 6) + 1;
  if (dadu === 6) {
    console.log('Anda Belum Beruntung');
  }
}
