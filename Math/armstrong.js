
let n=new Number(input('Enter a number:-'));
let sum=0,temp,r;
console.log(typeof n);
console.log(n);
temp=n;
while(n!=0){
    r=n%10;
    sum=sum+(r*r*r);
    n=Math.floor(n/10);
}
console.log(sum);
if (temp==sum) {
	console.log(`this number is ${temp} armstrong number ${sum}`);
} else {
	console.log(`this is not a armstrong number`);
}