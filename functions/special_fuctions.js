/*
SPECIAL FUNCTIONS
THEY INCLUDE:
  1. ARROW FUNCTION
  2.Spread operator
  3. rest operator

*/
 function doingStuff(x){
    console.log(x);
 }
 // function call 
 doingStuff("Greet!");

 //arrow function version
 let doingArrowStuff = x =>console.log(x);
 doingArrowStuff("Yeah");

 // arrow fuction with two parameters
 let anotherarrowstuff=(x,y) =>console.log(x+y);
 anotherarrowstuff(5,3);


 // arrow fuction without parameter
 let sayHi=()=>console.log("Hi");

 // foreach() method -can be used ,where it executes a certain fuction fior every element
 // in array
 const arr=['squirrel','alpaca','buddy'];
 arr.forEach(e=>console.log("The animal is",e));

 /*
 Spread operators
 it is a special operator consssists of three dots used before a referrence expression or string and it 
 spread out the arguments or elements of an array
 - it is used udring function calling.

 */
let spread =['so', "much","fun"];
let messages = ["Javascript", "is", ...spread, "and","very", "powerful"];
console.log(messages)

function addTwoNumbers(x,y){
    console.log(x+y);

}
let numbers= [5,9];
addTwoNumbers(...numbers);
addTwoNumbers(5,9);

function addFourNumbers(w,x,y,z){
    console.log(w+x+y+z);
}
let a = [6,4];
let b = [9,7];
addFourNumbers(...a, ...b);

/*
Rest operator
- it is used during function defination
- it has the same symbol as the operator but it is used inside the function paraneters list
- it allows you to supply many arguments
*/
function someFuction(number1,...number2){
    console.log(number1,number2);
}
someFuction(56,54,53,37,89,23,54,22,78,50,97,65,21,46);