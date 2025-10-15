// check of something is not a number
let x = "Hello";
console.log(isNaN(x));// recognises whats not a number

// check for integer
let y = 78;
console.log(Number.isInteger(y));

// specify decimal places
let w = 1.239567;
let n = w.toFixed(2);
console.log(n);