// TODO Arrow Function converted to normal function

const calcAge = (tgglLahir) => 2037 - tgglLahir;

const sisaTahun = (tgglLahir, namaPertama) => {
    const umur = calcAge(tgglLahir);
    const pensiun = 65 - umur;

    if (pensiun > 0) {
        console.log(`${namaPertama} pensiun pada ${pensiun} tahun!`);
        return pensiun;
    } else {
        console.log(`${namaPertama} pensiun pada ${pensiun} tahun!`);
        return -1;
    }
    //     return ``;
};
const sisa = sisaTahun(1997, "momo");
const sisa1 = sisaTahun(1950, "Mike");
console.log(sisa, sisa1);

