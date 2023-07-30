/*
what is implicit type conversion
*/

let sum = 35 + "pky";
console.log(sum); //35pky

console.log(typeof sum); //string

/*
This is because a number equivalent to a string is NaN but a string equivalent for a number, say 15, is "15" – so it makes more sense to concatenate two strings than to sum a number and NaN.
*/

const time = 35 * "pky";

console.log(time);

/*
Here, we use times * for a number and a string. There's no operation with strings that involves multiplication, so here, the ideal coercion is from string to number (as numbers have compatible operations with multiplication).

But since a string (in this case, "hello") is converted to a number (which is NaN) and that number is multiplied by 35, the final result is NaN.

*/

const string = "1";
const number = 40;
const boolean = true;

console.log(!string); //true

console.log(number + string); //401

console.log(number + boolean); //41
