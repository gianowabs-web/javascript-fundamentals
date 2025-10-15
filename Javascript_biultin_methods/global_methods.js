/*
Global methods
isNaN()

*/
let x = 7;

console.log(Number.isNaN(x));
console.log(isNaN(x));// isNaN returns true when it isn't a number
// and 7 is a number so it will log false.


/*
parsing  Numbers
Parsing refers to converting numbers which are treated as string that otherwise re numbers 
- prompt () treat user input as string even though some may be numbers.
here we can use

   parseInt()methods
   - this method belong to number class but it is global.
*/

let str_int = "6";
let convet = parseInt(str_int);
console.log("type of",str_int,'is', typeof str_int);
console.log("Type of", convert, "is", typeof convet);


let str_float= "2.345";
let float_version = parseFloat(str_float);
console.log(float_version, typeof float_version);