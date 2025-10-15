/*
1. Set up a blank array to contain the final multiplication table
2. Set a value variable to specify how many values you want to multiply
with one another to show the results for
3. Create an outer for loop to iterate through eachrow and temp array to store 
the row values Each row will be an array of cells that will be nested into the 
final table.
4. Add an inner for loop for the collumn values which will push the multiplied 
row and collumn values to the temp array
5. Add the temporay row data that contains the calculated solutions to the main 
array of the final table the final result will add row of values for the calculations.
*/
blank_array=[];
let row_value=1
let collumn_value=1
for (let row_value=1;row_value< 5;row_value*collumn_value){
    blank_array.push([]);
    for(let collumn_value=1;collumn_value<7;collumn_value*row_value){
        blank_array[row_value].push(collumn_value);
    }
    console.log(blank_array);
    console.table(blank_array);
}