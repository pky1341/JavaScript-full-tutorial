const prompt=require("prompt-sync")({sigint:true});
function isSum() {
	let n=4,sum=0;
	for (var i = 1;i<=n; i++) {
		if (i%2==0) {
			sum=sum+i;
		}
	}
	console.log(`sum of even numbers ${sum}`);
}

isSum();