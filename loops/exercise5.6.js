/*
1. create an empty array
2. run loop 10 times , adding a new increment value to the 
array
3. Log the array into the console
4. Use the forloop to iterate although the array ( adjust the number of the iterate
to however many values are in your array ) and output into the console.
5. Use the for loop to output the value into the console from the array.

*/
empty_array=[];
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
for(i=0;i < 10; i++){
    console.log(i);
    empty_array.push(i);
}
console.log(empty_array);
