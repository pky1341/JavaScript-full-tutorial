const prompt=require("prompt-sync")({sigint:true});

function pow() {
    let x=prompt('enter a number:-');
	let n=prompt('enter a number:-');

	let power=1;
	for (var i = 1; i <=n; i++) {
		power=power*x;
	}
	console.log(`your exact result ${power}`);
}

pow();