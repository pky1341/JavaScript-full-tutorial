const prompt=require("prompt-sync")({sigint:true});

function convertToTimezone(date,timeZone) {
	const datte=new Date(date);
	let options={timeZone:timeZone,timeZoneName:`short`};
	let formmatedDate=datte.toLocaleString('en-IN',options);
	return formmatedDate;
}

const userDateInput = prompt("Enter a date (YYYY-MM-DD HH:mm:ss):");
const userTimezoneInput = prompt("Enter a timezone (e.g., 'UTC', 'America/New_York'):");

const userDate = new Date(userDateInput);
const convertedDate = convertToTimezone(userDate, userTimezoneInput);

console.log(`Original Date: ${userDate}`);
console.log(`Converted Date in ${userTimezoneInput}: ${convertedDate}`);