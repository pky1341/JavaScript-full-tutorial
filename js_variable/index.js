// How to Declare Variables in JavaScript
// In JavaScript, we can declare variables in three different ways like this:


// not allowed in strict mode
// name=jack

// using var
//  var price=1234;
//  console.log(price);


 // using let
//  let isprice=false;
//  console.log(isprice);



// Here is a function with the name test.


// function test() {
//   var name = "jack";
//   console.log(name);
// }

// There are mainly three types of scope:

// Block Scope  
// Functional Scope  
// Global Scope

// The three keywords var, let, and const work around these scopes. So let's understand how things fit together.

// How to Use JavaScript Variables in Block Scope

{
    var name = "pradeep";
    let age = 20;
    const height = 180;
}

console.log(name);
console.log(age);   
console.log(height);

// Do not use the var keyword inside a block (block scope). Always use let and const instead.