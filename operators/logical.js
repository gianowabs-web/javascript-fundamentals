/*
logical operators
a) and &&
-it is used to evaluate two different expressions.
- if both the expressions are the overall results 
are true, else if one expression is false the overall 
result is false.
b) or - ||
- it is used to evaluate two different expressions.
- if either of the expression is true the overall result
is true if all the two expressions are true the result will 
be true.

c) not!
-this reverses the outcome of other operators
*/
let x = 2;
let y = 4;
let z = 7;
let w = 9;

console.log(x < y && w < z);
console.log(x < y && w > z);

console.log(x < y || w < z);
console.log(x < y || w > z);

console.log(!(x < y));

