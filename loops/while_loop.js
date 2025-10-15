/*
while loop 
 - while loop executes a certain block of code as long as an
 expression evaluates to true.
    syntax:
     while (condition){
       // code that gets executed
    }
*/
let i = 0;  // 0, 1, 2,3,4,5,6,7,8,9,10
while (i < 10){ // true,true,true,true,true,true,true,true,true,true,
 console.log(i); // 0,1,2,3,4,5,6,7,8,9
 i++;// 0+1, 1+1, 2+1,3+1,4+1,5+1,6+1,7+1,8+1,9+1

}
//reversed loop

// loop through an array
let people_names= ["mike", "Antal","Marc", "Emir", "Louiza","Jacky"];
let notFound = true;

while (notFound && people_names.length>0){
    if (people_names[0] === "Louiza"){
        console.log("Found her", people_names[0]);
        notFound=false;
    }
    else{
        people_names.shift();
    }

}