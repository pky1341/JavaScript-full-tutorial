// Stack and Heap memory in js

/*

expalin:-

Stack(Primitive) and Heap(Non-Primitive)



*/

let myName="pradeepKumar";

let yourName=myName;

yourName="pankajSir";

console.log(yourName);
console.log(myName);

let userOne={
	email:"pky463775@gmail.com",
	upi:"user@sbiok",
}

let userTwo=userOne;

userTwo.email="pky887436@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);