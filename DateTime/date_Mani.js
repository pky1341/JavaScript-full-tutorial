const prompt=require("prompt-sync")({sigint:true});

function getDayOfWeek(date) {
	const dateObj=new Date(date);
	const dateNumber=dateObj.getDay();

	const daysName=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	return daysName[dateNumber];
}
const userDate=prompt('Enter A date (YYYY-MM-DD):-');
const day = getDayOfWeek(userDate);

console.log(`The day of the week is: ${day}`);