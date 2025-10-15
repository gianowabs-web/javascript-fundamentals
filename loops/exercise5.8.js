/*
1. set a string variable to use as output
2.select a number to skip , and set that number as a variable 
3. Create a for loop that counts to 10
4. Add a condition to check if the value of the looped variable
   is equal to the number that should be skipped.
5. if the number is to be skipped to the condition ,continue to
   the next number 
6. as you iterate through the value append the new count value to the end 
of the main output variabe
7. Output the main variable after the loop completes.
8. Reuse the code, but change the countinue break and see the difference .
it should now stop at the skip value.
*/
let skip = 8;
for(let i=2;i<10;i++){
    console.log(i);
    if(i===8){
    console.log("Skip yah")
    continue;
    }
}
for(let i=2;i<10;i++){
    console.log(i);
    if(i===8){
    console.log("Skip yah")
    break;
    }
}  
