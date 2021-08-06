const a = {
  fNama: 'Muhammad',
  lNama: 'Imron',
  tglLahir: 1996,
  pekerjaan: 'staff',
  other: ['Nasi Goreng', 'Bakso', 'Batagor'],
  lisensi: true,

  propertyA: function () {
    // console.log(this);
    this.umur = 2037 - this.tglLahir;
    return this.umur;
  },
  propertyB: function () {
    this.nama = this.fNama + ' ' + this.lNama;
    return this.nama;
  },
  // TODO Exercise --> Muhammad Imron is a 25-year old staff, and he has a driver license.
  propertyC: function () {
    this.nama = this.fNama + ' ' + this.lNama;
    this.job = this.pekerjaan;
    this.sim = this.lisensi;
    this.umur = 2021 - this.tglLahir;
    return console.log(
      `${this.nama} is a ${this.umur}-year old ${this.job}, and he has ${
        this.sim ? 'a' : 'no'
      } driver license.`
    );
  },
  propertyD: function () {
    this.nama = this.fNama + ' ' + this.lNama;
    this.job = this.pekerjaan;
    this.sim = this.lisensi;
    this.umur = 2021 - this.tglLahir;
    const isMillenial = () => {
      console.log(
        `${this.nama} is a ${this.umur}-year old ${this.job}, and he has ${
          this.sim ? 'a' : 'no'
        } driver license.`
      );
    };
    isMillenial();
  },

  // propertyC: () => (this.umur1 = 2037 - this.tglLahir),
};

// TODO Calling Object Methods
console.log(a.propertyA());
console.log(a.umur - 20);
console.log(a.propertyB());
console.log(a.nama + ' ' + 'haha');

a.propertyC();
a.propertyD();
// console.log(a.propertyC());
// console.log(a.hasil);
// console.log(a.);
