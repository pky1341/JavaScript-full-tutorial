let jsObj={};

jsObj={
	name:"prdiep kumaar",
	addr:"prayagraj",
	email:"pradiep@google.com",
}

// console.log(jsObj);

jsObj.email="pky@test.com";

console.log(jsObj["email"]);

// You can add a new key-value pair to an existing JavaScript object using the following methods:

// 1.Dot Notation
jsObj.age=20;

// console.log(jsObj);

//2. Square Bracket Notation

jsObj['age']=30;

// 3. Object.assign()

Object.assign(jsObj,{age:35});
// console.log(jsObj);


// 4. Spread (...) Syntax

let newJsObj={...jsObj,"age":45}
console.log(newJsObj);



