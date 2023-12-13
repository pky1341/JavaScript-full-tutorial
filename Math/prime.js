const prompt=require("prompt-sync")({sigint:true});

function isPrime(num) {
	if (num===1) {
		return false;
	} else if (num===2) {
		return true;
	} else {
		for (var i = 2; i <=num ; i++) {
             if (num%i === 0) {
                 return true;
             }
		}
	}
	return false;
}

let number=prompt('Enter Number:-');

console.log(isPrime(number));