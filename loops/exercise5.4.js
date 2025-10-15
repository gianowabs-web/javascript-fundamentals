/*
1. To create a table generator first create an empty array, my table, to hold 
your table data
2. set variable values for the number of row and collumns. This will allows
us to dynamically control how many row and collumn  we want within the table.
separation the separation the value from the main code helps make updates to 
the dimensions easier.
3. Set up a counter variable with an intial value 0. The counter will be used 
  to set the content and count the value of cells within the table.
4. create a for loop with condition to set the number of iterations, and 
to construct each row of the table, Within it , set up a new temporary array
(tempTable) to hold each row of data the collumn will be nested with the row
 generating each cells needed for the collumn.
5. Nest a second loop within the first to count the collumn  Columns are run within
the row loop so that we have a uniform number of collumn within the table
*/
my_table=[];
let rows=0;
let collumn =2;
let counter = 0;
for(let row=0;row < 10;row++){
    my_table.push([]);
    for(let collumn=2; collumn <10; collumn++){
        my_table[row].push([collumn]);
    }
    console.log(my_table);
    console.table(my_table);
}