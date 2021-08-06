'use strict';

const jonas = {
  namaAwal: 'imron',
  tahun: 1996,
  itungUmur: function () {
    // console.log(this);
    console.log(2037 - this.tahun);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.tahun >= 1981 && self.tahun <= 1996);
    //   // console.log(this.tahun >= 1981 && this.tahun <= 1996);
    // };

    //! Solution 2 ES6 use Arrow function while in parrent object
    const isMillenial = () => {
      // console.log(this);
      console.log(this.tahun >= 1981 && this.tahun <= 1996);
    };
    isMillenial();
  },
  // Arrow function doesn't own this keyword
  greet: () => console.log(`Hey ${this.namaAwal}`),
  // Regular function have this keyword
  greet: function () {
    console.log(`Hey ${this.namaAwal}`);
  },
};

jonas.greet();
jonas.itungUmur();

// regular arguments keyword
const addExpr = function (a, b) {
  console.log(arguments); //local var arguments =IArguments
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// Arrow argument keyword
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
addArrow(1, 2, 3, 4);
