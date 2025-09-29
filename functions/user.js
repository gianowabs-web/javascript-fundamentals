// This function defination without parameters
function greeting(){
     console.log("Hello World");
}

//function calling
greeting();

// function defination with parameter

function rectangle(length, width){
    console.log(`the area is ${length} x ${width} = ${length * width}m2`);
}

// function calling
// argument are supplied during function calling
rectangle(78,50);

// Variable containing function
let varcontainingFuction=function(){
    let varInFuction="I am in  a fuction.";
    console.log("Hi there",varInFuction);
}
// to call this function use the following syntax
varcontainingFuction();