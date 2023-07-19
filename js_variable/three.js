// How to Use JavaScript Variables in Global Scope

var name = "pradiep";
let age = 20;
const passion = "web developer";

function pky() {
	console.log(name); //pradiep
	console.log(age); //20
}
pky();
console.log(passion); //web developer
console.log(age); // 20
console.warn(passion);

// As you see, the variables are accessible everywhere.
