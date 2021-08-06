const hari = "minggu";

switch (hari) {
    case "senin": // apabila hari = senin, maka execute
        console.log("Jadwal Mingguan GYM");
        console.log("Go to GYM");
        break;
    case "selasa":
        console.log("Persiapan Video");
        break;
    case "rabu":
    case "kamis":
        console.log("Write Code examples");
        break;
    case "jum'at":
        console.log("Record videos");
        break;
    case "sabtu":
    case "minggu":
        console.log("Enjoy the weekend ✈");
        break;
}
