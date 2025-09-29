/*
 FUNCTION CALLBACK
 - This involves passing a function as an argument to another function
*/

function doFlexibleStuff(executestuff){
    executestuff();
    console.log("inside doFlexibleStufffunction");
}
// function to be called inside another function
let executestuff = function(){
    console.log("Hey i have been called inside another function");
}

doFlexibleStuff(executestuff);


//setTimeout()
let youGotThis = function(){
    console.log("You're doing really well, keep coding");

};
setTimeout(youGotThis,1500);// will wait for 1500 millisecond before calling the function