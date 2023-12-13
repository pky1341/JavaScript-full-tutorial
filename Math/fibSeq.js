const prompt=require("prompt-sync")({sigint:true});

function Fibonacci() {
    n=prompt('enter a number:-');
	let a=0,b=1,c,i;
    console.log(a);
    console.log(b);

	if (n===0) {
		return [n];
	} else {
		for(i=2;i<=n;i++){
			c=a+b;
			a=b;
			b=c;
			console.log(c);
		}
	}
}

Fibonacci();