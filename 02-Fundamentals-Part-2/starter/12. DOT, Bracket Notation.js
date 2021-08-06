const a = {
    firstName: "Jonas",
    lastName: "Monkey",
    umur: 23,
    pekerjaan: "pegawai kontrak",
    status: "jomblo",
    teman: ["?", "Apa", "Motherfucker."],
};
console.log(a);
console.log(a.lastName);
console.log(a["lastName"]);

// TODO Bracket notasi

const nameKey = "Name";
console.log(a["first" + nameKey]);
console.log(a["last" + nameKey]);

/* TODO Prompt Input Data DOM
const interestedIn = prompt(
    "What do you want about a? Choose between firstName, lastName, umur, pekerjaan, status, dan teman"
);
*/
/* TODO Statement 1
if (a[interestedIn]) {
    console.log(a[interestedIn]);
} else {
    console.log(
        "No Keys! Choose between firstName, lastName, umur, pekerjaan, status, dan teman"
    );
}
 */

// TODO Arrow statement 1
/* ab = a[interestedIn]
    ? console.log(ab[interestedIn])
    : console.log(
          "No Keys! Choose between firstName, lastName, umur, pekerjaan, status, dan teman"
      );
*/

a.location = "Indonesia";
a["github"] = "@imronxz";
console.log(a);

// FIXME Challange -->
// 'Jonas has 3 Friends, and his best friend is called ?'
const findBestFriend = a["teman"];
console.log(
    `${a.firstName} has ${findBestFriend}, and his best friend is called ${a.teman[0]}`
);
// Challange
