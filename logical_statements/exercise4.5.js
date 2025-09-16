/*
1. Create a variable called prize and use  aprompt to ask 
the user to set value by selecting a number between 0 and 10
2. Convert the prompt response to a number data type
3. Create a variable to use for the output message containing 
" my selection:"
4. Using the switch statement (and creativity) provide a response back 
regarding a prize that is awarded depending on what numbr is selected.
5. Use the switch break to add combined results for prizes
6. Output the message back to the user by concatenating your prize variable 
strings and the output Message string.

*/
prize = prompt("select a number between 0 and 10 and Win ?");
prize =Number(prize);
prize =Math.random(0,0);
console.log(prize);
prize = prize* 10;
console.log(prize);
prize = Math.floor(prize);
console.log(prize);

switch(prize){
    case 0:
        console.log("Buggati");
        document.writeln("Buggati");
        break;
    case 1:
        console.log("invalid");
        document.writeln("invalid");
        break;
    case 2:
        console.log("school bus");
        document.writeln("school bus");
        break;
    case 3:
        console.log("kes 300000");
        document.writeln("kes 300000");
        break;
    case 4:
        console.log("house");
        document.writeln("house");
        break;
    case 5:
        console.log("laptop");
        document.writeln("laptop");
        break;
    case 6:
        console.log("ps 5");
        document.writeln("ps 5");
        break;
    case 7:
        console.log("perfum");
        document.writeln("perfum");
        break;
    case 8:
        comsole.log(`Sponsored Trip to Dubai`);
        document.writeln(`Sponsored trip to Dubai`);
        break;
    case 9:
        console.log("I phone 16pro");
        document.writeln("I phone 16 pro");
        break;
    default:
        console.log("sorry try again");
        document.writeln("Sorry try again");

}


