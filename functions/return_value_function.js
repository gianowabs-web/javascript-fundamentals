/*
RETURN FUNCTION
-this type fo function has "return "keyword as the statement in the function defination
*/
function addTwoNumbers(x,y){
    return x +y; // this is the return statement.
}

// to call this fuction you must supply a variab;e called instance variable
// to hold the function call.

let result = addTwoNumbers(4,5);
console.log(result); // let result= addtwoNumbers(4,5);
// console.log(result)

for(let i=0;i<10;i++){
    let result =addTwoNumbers(i,2*i);
    console.log(result);

}
//let in arrow  fuction
let addThreeNumbers=(x,y,z) =>{
    console.log("Adding...");
    return x + y + z;

}
console.log(addThreeNumbers(4,6,8));
let instance_variable = addThreeNumbers(9,2,5);
console.log(instance_variable);