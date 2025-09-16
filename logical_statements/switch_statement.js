/*
switch(expression){
      case value1:
        // code to be executed 
        break;
        case value2:
            // code to be executed 
            break;
        case value3:
            //code to be executed 
            break;
        case value-n:
            // code to be executed 
            break;
        default:
            code to be executed when no case match 
            break;
}
- here if expression == value1, the code in that case is executed if false case two 
is considered untill "value-n".
- if the value in expression is not among any case, default case is considered.
it is like else block in if statements.

MODULES
Math.random() - gives you random numbers in a range of 0 to less than 1, including 0 but not 
1.
You can scale it to the desired range by multiplying the result and using
 Math.floor() to round it down to the nearest whole number
 to generate random number between 0 and 9  use the following
*/
let random_number = Math.random(); // generate random number between 0 and 1
console.log(random_number);

// multiply by 10 to obtain a number between 0 and 10
random_number = random_number*10;
console.log(random_number);

// remove digits past decimal place to provide a whole number 
let Random_num = Math.floor(random_number);
console.log(Random_num);

let user = Number(prompt("Pick a random number between 0 - 5 to find which number represent Kenya"));

switch(Random_num){
    case 0:
        console.log("Kenya");
        document.writeln("Kenya");
        break;
    case 1:
        console.log("Uganda");
        document.writeln("Uganda");
        break;
    case 2:
        console.log("Tanzania");
        document.writeln("Tanzania");
        break;
    case 3:
        console.log("Ethopia");
        document.writeln("Ethopia");
        break;
    case 4:
        console.log("Sudan");
        document.writeln("Sudan");
    case 5:
        console.log("Rwanda");
        document.writeln("Rwanda");
    default:
        console.log("invalid result");
        document.writeln("invalid result");
    

}
