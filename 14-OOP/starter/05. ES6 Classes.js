// TODO Class declaration
class PersonCl {
  constructor(namaAwal, tgglLahir) {
    this.namaAwal = namaAwal;
    this.tgglLahir = tgglLahir;
  }
  // * Methods will be added to .prototype property
  hitungUmur() {
    console.log(2037 - this.tgglLahir);
  }
  haloo() {
    console.log(`Halo ${this.namaAwal}`);
  }
}
const imronxz = new PersonCl('imron', 1996);
imronxz.hitungUmur();

console.log(imronxz.__proto__ == PersonCl.prototype);
// PersonCl.prototype.haloo = function () {
//   console.log(`Halo ${this.namaAwal}`);
// };
imronxz.haloo();

/* HACK  What is Classes?
    1. Classes are NOT hoisted
    2. Class are first-class citizes
    3. Classes are execute in strict mode
    */
