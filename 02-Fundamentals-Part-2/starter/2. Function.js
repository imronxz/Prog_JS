function logger() {
    console.log("My name is Imron");
}

// calling / running / invoking function
logger();

function buahBuahan(apel, jeruk) {
    console.log("apel, jeruk");
    const jus = `Juss dengan ${apel} buah apel dan ${jeruk} dengan jeruk`;
    return jus;
}

const jusApel = buahBuahan(5, 0);
console.log(jusApel);
