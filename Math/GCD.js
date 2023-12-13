const prompt=require("prompt-sync")({sigint:true});

function gcd() {
    a=prompt('enter a number:-');
	b=prompt('enter a number:-');

	let res=Math.min(a,b);
	while(res>0){
		if (a%res==0 && b%res==0) {
			break;
		}
		res--;
	}
	console.log(`your exact result ${res}`);
}

gcd();