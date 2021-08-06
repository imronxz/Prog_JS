const a = ["Michael", "Steven", "Peter"];
// TODO Menambahkan value ke Array dengan push
const masukkanValue = a.push("Jay");
console.log(a);
console.log(masukkanValue);

// TODO Menambahkan value ke Array dengan unshift
a.unshift("imron");
console.log(a);

// TODO menghapus last value dengan pop
a.pop();
const b = a.pop();
console.log(b, "val b");
console.log(a);

// TODO menghaous first value dengan shift
a.shift();
console.log(a);

// TODO Menentukan position di Array
console.log(a.indexOf("Steven"));
console.log(a.indexOf("imron")); // value tidak di Array

a.push(23);
// TODO ES6 Methode --> true jika value ada di Array or else
console.log(a.includes("Steven"));
console.log(a.includes("imron"));
console.log(a.includes(23));
console.log(a);

if (a.includes("Steven")) {
    console.log(
        "Terdapat Nama Steven ",
        "Pada index ke - " + a.indexOf("Steven")
    );
}
