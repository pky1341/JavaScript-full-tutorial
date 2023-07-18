How the let, const, and var Keywords Work in JavaScript




How to Declare Variables in JavaScript
In JavaScript, we can declare variables in three different ways like this:

// Without keywords. It is essentially the same as var 
// and not allowed in 'strict' mode.
name = 'Jack'; 

// Using var
var price = 100;

// Using let
let isPermanent = false; 

// Using const
const PUBLICATION = 'freeCodeCamp' 
It is best when you understand var, let, and const with these three concepts:

1.Scope
2.Reassigning a new value
3.When you access a variable before declaring it




Variable Scope in JavaScript
In JavaScript, we use scope as a way to identify where and whether we can use a variable. The variables may exist within a block, inside a function, or outside a function and block.

So, what is a block? A block (that is, a code block) is a section of the code we define using a pair of curly brace s({...}). Something like this:

{
  let name = "alex";
}
On the other hand, a function is a bunch of code instructions you want to place logically together.

Usually, you define a function using the function keyword and a name. Just be aware that you can define a function without a name, which we call an anonymous function. But we won't discuss that in today's article for simplicity.

Here is a function with the name test.

function test() {
  let name = "alex";
}
Anything and everything outside of a block or a function we'll call Global. So, when we declare variables, they can exist within a block, inside a function, or outside of a block/function – that is, they have global scope.

There are mainly three types of scope:

1.Block Scope  
2.Functional Scope  
3.Global Scope
The three keywords var, let, and const work around these scopes. So let's understand how things fit together.









How to Use JavaScript Variables in Block Scope
If you do not want a variable declared inside a { } block to be accessed outside of the block, you need to declare them using the let or const keywords. Variables declared with the var keyword inside the { } block are accessible outside of the block too. So, be careful.

Let's take an example:

{
    let f_name  = 'Alex';
    const ZIP = 500067;
    var age = 25;
}

console.log(f_name); // Uncaught ReferenceError: f_name is not defined
console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined
console.log(age);  // 25
As you see, the value of the age variable may get overridden unknowingly and eventually introduce a bug. So, the moral of the story is,

Do not use the var keyword inside a block (block scope). Always use let and const instead.






How to Use JavaScript Variables in Global Scope
Variables declared outside of any functions and blocks are global and are said to have Global Scope. This means you can access them from any part of the current JavaScript program.

You can use var, let, and const to declare global variables. But you shouldn't do it too often.

let f_name = "Alex";
 const ZIP = 560089;
 var age = 25;  

// f1() is a function
function f1() {
  console.log(f_name); // Alex
  console.log(ZIP);  // 560089
  console.log(age);  // 25
}

f1();

console.log(f_name); // Alex
console.log(ZIP);  // 560089
console.log(age);  // 25
As you see, the variables are accessible everywhere.

So, to restrict the scope of a variable using the var, let, and const keywords, here's the order of accessibility in scope starting with the lowest:

var: The functional scope level
let: The block scope level
const: The block scope level




How to Reassign a New Value to a Variable in JavaScript
Once you've declared a variable with var or let, you can reassign a new value to the variable in your programming flow. It is possible if the variable is accessible to assign a value. But with const, you can't reassign a new value at all.

// Declare variables with initial values
let f_name = "Alex";
const ZIP = 560089;
var age = 25;

// Reassign values
f_name = "Bob"; // the f_name value is 'Bob"
ZIP = 65457; // Uncaught TypeError: Assignment to constant variable.
age = 78; // the age value is 78
There is a tricky part with const that you must be aware of. When an object is declared and assigned a value with const, you can still change the value of its properties. But you can not reassign another object value to the same variable. This is a common mistake many devs make.

Check out the example here:

const blog = {
    'url': 'https://greenroots.info'
}

blog.url = 'https://blog.greenroots.info"; //Allowed

blog = {}; // Uncaught TypeError: Assignment to c
