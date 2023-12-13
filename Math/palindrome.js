const prompt=require("prompt-sync")({sigint:true});

function plin() {
    n=prompt('enter a number:-');
	let sum=0,r,temp;
     temp=n;
	while(n>0){
       r=n%10;
       sum=(sum*10)+r;
       n=parseInt(n/10);
	}
	if(temp==sum) {
		console.log('both are equls');
	}else{
		console.log('not equals');
	}
	console.log(sum);
}

plin();