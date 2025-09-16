/*
the boolean data type could hold two values
   true
   false
-it is majorly used in control flow statements.

typeof()
-This function return the datatype of the value 
stored in variable.

conversion or typecasting
There are three conversion methods
     string()
     number()
     Boolean()

*/
let numberToString = 6;
console.log(numberToString, typeof(numberToString));

let convert = String(numberToString);
console.log(numberToString, typeof(convert));

// Number()
let nr1 = 2;
let nr2 ='2';
console.log(nr1 + Number(nr2));



// String()


let option_one =100
console.log(typeof(option_one));

let option_two =150
console.log(typeof(option_two));

let string_value ="this is a message";
console.log(typeof(string_value));

// Boolean(true/ false)

console.log(option_one > option_two);
console.log(option_two > option_one);