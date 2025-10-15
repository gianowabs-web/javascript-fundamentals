/*
1. Setup a blank array, Mywork.
2. using a for loop create a list of 10 objects each of which 
is a numbered (lesson1,lesson 2, lesson 3...)with an alternating
true or false status for every item to indicate whether the class
will be runningthis year. for example
       name:'lesson 1', status: true
3. You can specify the status by using ternary operators that checks
 whether the modulo of the given lesson value is equal to zero and by 
 setting up a boolean value to alternate the value each iteration.
4. Create a lesson using a temporary object variable , containg the 
 name (lesson with the numeric value ) and Predefined status (which 
 we set up in the previuos step).
5. Push the objects to the my work array
6. Output  the array to the console.

*/
my_work=[];
for(let i=0;i<=10;i++){
   my_work.push("Maths","English","Kiswahili","Chemistry", "Biology","Physics",
    "History","agriculture","computer studies","Business");
    let status =my_work? "true" :"false";
    console.log(my_work);

   }
