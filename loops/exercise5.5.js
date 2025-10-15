/*
1 Create a grid array variable
2. set a value of 64 for the number of cells.
3. set a counter to 0
4 .Create a global variable to be used for the row array .
5. Create a loop that will iterate up to the number of cells 
you want in an array ,plus one to include the zero value. in our 
example it would be 64+1
6 Add an outer if statement, which uses modulo to check if the main
counter is divisible by 8 or whatever number of columns you want.
7. Inside the preceding if statement add another if bstatement to check
if the row is undefined, idicating whether it is the first run or whatever 
it is the first run or whether the row is complete.if the row has been defined
then add the row to the main grid array.
8. to finish off the outer if statement , if the counter is divisible by 8 clear
the row array - it has already been added to the grid by the inner if statement
9.at the end of the for loop incrementof the main counter by 1.
10. Set up a temporary variable to hold the value of the counter and push 
it to the row array.
11. Withi the loop iteration, check if the value of the counter is equal to teh
total number of cololums you want, if it is, then add the current row to the grid
12. please note that the extra cell will not be grid since there aren't enough
cells to make a  new row within the condition that adds the row within the condition 
that adds the row to the grid. An alternative solution would be to remove the 1+ from
loop condition and add grid.push(row) after the loop is completed both of which will
provide the same solution output.
13. Output the grid into the console .
*/
let grid_array=[];

for(let i = 0;i < 8; i++){
    grid_array.push([]);
    for(let k = 0;k < 8; k++){
    grid_array[i].push([k]);
}

}
    console.log(grid_array);
// nested loop 
