// local variable in function
function testAvailability(x){
    console.log("Available here",x);
}
testAvailability('hi');

//console.log("Not available here:",x);

// variable x is only seen inside the function defination block of code.
/*
let vs var
- the difference between let and var is that var is function-scoped, which is the concept we described 
aboove.
-let is actually not fuction-scoped but block-scoped
- a block is defined by two cyrly braces{}

if we use var, the variable becomes function-scoped and is available anywhere in the 
function block (even before defining with the value undefined).
*/

function test(){
    if(true){
        //local variable
        let x = 100;
        //global variable
        var y =56

    }
    //console.log("the variable x is local", x)
    console.log(y);
}
test();