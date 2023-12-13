
function diff_hours(dt2, dt1) {
	let diff=(dt2.getTime()-dt1.getTime())/1000;
    diff=diff/(60*60);
	return Math.abs(Math.round(diff));	
}
var dt1 = new Date("December 13, 2023 10:00:00");
var dt2 = new Date("December 13, 2023 14:30:00");
var hoursDiff = diff_hours(dt2, dt1);
console.log(hoursDiff);