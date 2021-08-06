//  Case 1 func declaration
const umur = valAge(1991);
function valAge(tgglLahir) {
    return 2037 - tgglLahir;
}
console.log(umur);

// Case 2 func expression
const valAge2 = function (tgglLahir2) {
    return 2037 - tgglLahir2;
};
const umur2 = valAge2(1996);
console.log(umur2);
