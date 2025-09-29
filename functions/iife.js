/*
IMMEDIATELY INVOKED FUNCTION EXPRESSION
- The immediately invoked function expression (IIFE) is a way of expressing a
function so that it gets called immediately
it is annonymous it doesn't have a name, and it is self executing.
*/

(function(){
    console.log("IIFE");
})();

// you can combine it with arrow function
(()=>{
    console.log("run right away");
})();

// here its () that is used to invoke the function that you created.

let magic=((x)=>{return x})(5);
console.log(magic)