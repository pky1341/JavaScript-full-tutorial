// Differences between Dot Notation and Bracket Notation Property Accessor

let mySym=Symbol("hello i am")
let jsObj={
	name:"pk",
	mySym:"123",
	lang:'english'
};

const myKey="name";
console.log(jsObj.hasOwnProperty('na'));

console.log('nam' in jsObj);

