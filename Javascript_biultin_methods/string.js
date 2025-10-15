/*
strings
*/

// converting strings to array
let result = "Hello Javascript";
let arr_result = result.split(" ");
console.log(arr_result);

// converting string to array

let letters= ["a", "b", "c"];
let x = letters.join();
console.log(x);

// searching for a particular substring in a string
let searchstr= "When i see fellow, I say hello";
let pos = searchstr.search("lo");
console.log(pos);

// CharAt() methods gets you the value at a certain index position
let pos1 = searchstr.charAt(11);
console.log(pos1);

// uppercase and lowercase

let low_bye ="bye!";
let up_bye= low_bye.toUpperCase();
console.log(up_bye);

let caps = "HI HOW ARE YOU";
let fixed_caps= caps.toLowerCase();
console.log(fixed_caps);