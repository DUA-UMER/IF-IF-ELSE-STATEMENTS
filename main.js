var psychoLogists = 45;
var dermatoLogists = 40;
var neuroLogists = 35;
var totalDoctors = 100;
var requiredDoctors = psychoLogists + dermatoLogists + neuroLogists;
var limit = (totalDoctors / requiredDoctors) * 100;
console.log("limit:");
console.log("psychoLogists:", psychoLogists);
console.log("dermatoLogists:", dermatoLogists);
console.log("neurologists:", neuroLogists);
console.log("totalDoctors:", totalDoctors);
console.log("requiredDoctors:", requiredDoctors);
console.log("limit:", limit.toFixed(2) + "%");
if (limit >= 30) {
    console.log("yes");
}
else if (limit >= 15) {
    console.log("no");
}
else if (limit >= 10) {
    console.log("yes");
}
else if (limit >= 9) {
    console.log("no");
}
else {
    console.log("no limit");
}
