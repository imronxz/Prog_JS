/*TODO Boolean Logic
AND
1 1 0 0
1 0 1 0
1 0 0 0

OR
1 0 1 0
1 0 1 0
1 1 1 0
 */

// Logical Operator

const hasDriverLicenseT = true; // A
const hasGoodVIsionT = true; // B
const hasDriverLicenseF = true; // A
const hasGoodVIsionF = true; // B

//  TODO --> true AND true
console.log(`---------AND-----------`);
console.log(hasDriverLicenseT && hasGoodVIsionT);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(`---------OR-----------`);
// TODO --> true OR true
console.log(hasDriverLicenseF || hasGoodVIsionF);
console.log(true || false);
console.log(false || true);
console.log(false || false);
