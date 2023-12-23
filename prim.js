function isPrime(n) {
	let count=0;
		for (var i = 2; i <=n; i++) {
			if (n%i==0) {
				count++;
			}
		}

	if (count==1) {
		return `this number is prime number ${n}`;
	}else{
		return `this number is not prime  number ${n}`;
	}
}

let n=21;
prim=isPrime(n)
console.log(prim);
