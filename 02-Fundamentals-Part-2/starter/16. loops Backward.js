const imron = [
    "Muhammad",
    "Imron",
    2021 - 1996,
    "staff",
    ["a", "b", "c"],
    true,
];
// 0,1,...5
// 4,3,... 0

// TODO Pengulangan Index Array
/* TODO var i menyimpan: panjang Array imron index [-1],
jika var i lebih besar dari 0, => Lakukan Decrement
 */
for (let i = imron.length - 1; i >= 0; i--) {
    console.log(i, imron[i]);
}

// TODO Loops Inside a Loops
/*TODO var excer1 = 1, Jika excer1 < 4, lakukan Increment dan-
print --- Starting excercises --- (execer1 logic)
*/
for (let excer1 = 1; excer1 < 4; excer1++) {
    console.log(`--- Starting excercises---${excer1}`);

    /*TODO var case1 = 1, jika case1 < 6, lakukan Increment dan-
    print sampai login case1 terpenuhi
     */
    for (let case1 = 1; case1 < 6; case1++) {
        console.log(`print_out ${case1}🏋️‍♀️`);
    }
}
