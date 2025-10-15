/*
1.Create a simple object with three items in it.
2.using the for in loop, get the propertes names and 
value from the object and output them into console.
3. Create an array containig the same three items Using 
either the for loop or the for in loop , output the 
values from the array into the console.
*/
 let dog = {
    name:"Rex",
    breed:"German shephard",
    color:"brown and white"
 };
 for(prop in dog){
    console.log(prop);
 }
 array=["name","breed","color"];
 for(item in array){
    console.log(item);
 }