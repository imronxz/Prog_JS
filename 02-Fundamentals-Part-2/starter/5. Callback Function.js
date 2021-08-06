
// const potonganBuah = function(buah){
//       return fruit * 4;
// }
const potonganBuah = (buah) => buah * 4;


// function buah1(apel, jeruk) {
//     const potonganAple = potonganBuah(apel);
//     const potonganJeruk = potonganBuah(jeruk);

//     const juss = `Juss Apel ${potonganAple} potong dan juss Jeruk ${potonganJeruk} potong.`;
//     return juss;
// }

// console.log(buah1(2, 3));

const buah1 = (apel, jeruk) => {
    const potonganAple = potonganBuah(apel);
    const potonganJeruk = potonganBuah(jeruk);

    const juss = `Juss Apel ${potonganAple} potong dan juss Jeruk ${potonganJeruk} potong.`;
    return juss;
};
console.log(buah1(2, 3));
