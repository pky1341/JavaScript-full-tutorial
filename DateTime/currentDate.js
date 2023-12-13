// const prompt=require("prompt-sync")({sigint:true});

function currentDate() {
	const today=new Date();

	let day=today.getDate();
	let month=today.getMonth()+1;
	let year=today.getFullYear();

	return `${day}-${month}-${year}`;	
}

const formatDate = currentDate();

console.log(`This is your formmated date: ${formatDate}`);