// How to create strings in JavaScript

/*

In JavaScript, you can create strings by wrapping the text inside 
single quotes ('), double quotes ("), or backticks (`).


*/
// A string created using single quotes
let string1 = 'I am a very cool string! 😎';

// A string created using double quotes
let string2 = "I am a very cool string! 😎";

// A string created using backticks, also known as template literal
let string3 = `I am a very cool string! 😎`;

// you can compare these are three string then you got alll equals 

// lets

console.log(string1===string3);

/*
 there is another way to create strings in JavaScript, which is via the String() constructor. 
 The String() constructor generates a string as an object (when called with new).
*/


let str1=new String(`hello world`);


// console.log(str1);
// console.log(typeof str1);

let str2=String(`hello world`);

let str3='hello world';

console.log(str1===str2);
console.log(str1===str3);
console.log(str2===str3);