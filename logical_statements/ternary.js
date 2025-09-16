/*
ternary operators
 - the syntax
    oprand ? operand ? operand;


*/
let marks = 60
let remarks = marks < 50 ? "fail" : "pass";
console.log(remarks);

// another version
let m = 70;
let w = 60
m < w ? console.log("fail again"): console.log("pass again");