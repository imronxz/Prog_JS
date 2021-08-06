'use strict';

// TODO Scope Case

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // Scope chain: bisa di akses hanya di function
  function printAge() {
    let output = `Nama saya: ${firstName},\nberumur ${age},\nborn in ${birthYear}`;
    console.log(output);

    // Block scope: Only available inside the block (str)
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // CREATING NEW VAR WITH SAME NAME AS OUTER SCOPE'S
      const firstName = 'jonas';

      // REASSIGNING OUTER SCOPE'S VARIABLE
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

// global scope: Bersifat global dan dapat di akses dimana pun
const firstName = 'Imron';
calcAge(1995);
