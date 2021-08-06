// Case 2 func expression
const valAge2 = function (tgglLahir2) {
    return 2037 - tgglLahir2;
};
const umur2 = valAge2(2001);
console.log(umur2);

/* TODO Arrow Function
var valAge3 = fucntion(tgglLahir3) return 2037 - tgglLahir3;
TODO Case 1*/

const valAge3 = (tgglLahir3) => 2037 - tgglLahir3;
const umur3 = valAge3(2001);
console.log(umur3);

// TODO Case 2
const sisaTahunSampaiPensiun = (tgglLahir4, firstName) => {
    const umur4 = 2037 - tgglLahir4;
    const pensiun = 65 - umur4;
    return `${firstName} pensiun dalam ${pensiun} tahun`;
};
console.log(sisaTahunSampaiPensiun(1991, "imron"));
console.log(sisaTahunSampaiPensiun(1980, "Jonas"));

