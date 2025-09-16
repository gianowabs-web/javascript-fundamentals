/*
1. Start by setting a variable that gets a random value assigned to it 
the value is assigned by generating a random number 0-5, for 6 possible
results. You can increase this number as you add more results.
2. Create a prompt that can get a string value input from from a user you can
repeat back in the final Output
3. Create 6 responses using the switch statement each assigned to a 
different value from random number generator.
4. create a variable to hold the end response which should be sentence 
printed for the user. You can assign different string values for each 
case assigning new values depending on the results from the random.
5. Output the user's original question , plus the randomly selected 
case response. to the console after the user enters their question.
*/

let names= Math.random(0,0);
console.log(names);
name_1 = names * 10;
console.log(name_1);
jina =Math.floor(name_1);
console.log(jina);

let user =Number(prompt("Pick a random number to match your name and win 500 bob"));
 switch(jina){
    case 0:
        console.log("Adrian");
        document.writeln("Adrian");
        break;
    case 1:
        console.log("Juma");
        document.writeln("Juma");
        break;
    case 2:
        console.log("maina");
        document.writeln("Maina");
        break;
    case 3:
        console.log("Jayden");
        document.writeln("Jayden");
        break;
    case 4:
        console.log("Gian");
        document.writeln("Gian");
        break;
    default:
        console.log("invalid");
        document.writeln("invalid");

        
 }