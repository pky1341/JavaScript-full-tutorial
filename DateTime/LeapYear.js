const prompt=require("prompt-sync")({sigint:true});

function isLeap(year) {
	if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const leapYear = prompt("Enter a any Year:");
var isYear=isLeap(leapYear);

if (isYear) {
	console.log(`${leapYear} this year is a leapYear`);
} else {
	console.log(`${leapYear} this year is not a leapYear`);
}


