/*
map()
- this method is to perfom certain operation on the item 
in the array
*/

let arr =[1, 2,3,4];
let mapped_array = arr.map(x => x + 1);
console.log(mapped_array);

/*
Finding the last occurence in an array
a) indexOf()
b)lastIndexOf()
It will return the index of the last element  with the value, if it can find it at all;
*/
let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));

/*
practical 
Remove duplicates from the array using filter() and indexOf9(). The starting array is
let my =["laurance", "Mike", "larry", "kim", "joanne", "laurance", "mike", "laurence", "Mike",L
auranc", "mike"]

using the array filter() method this will create a new array using the element that pass the test 
condition implemented by the function . The final result will be :
["laurance", 'mike', 'larry, "kim",joanne]


take the following steps
1. create an array of names of people . make sure you include duplicates the exercise will 
remove the duplicates names
2. using filter() method assign the results of each item from the array a arguments within
 any anonymus function using the value index and array arguments return the filtered results 
 You can set the return value to true temporalily as will  build a new array with all the results 
 in the original array.
3. add a console.log call within the function that will output the index vaue of the current 
item in an array also add the value so you can see the result of the item value tat has the
current index number and the first marching results from arrays index value 
4. Using indexOf() the current value returns the index value of the item and applies the conditions
to check to see if it matches the original index value. This condition will only be true on 
the first result so all sequencnt duplicates will be false and not get added to the new array.
the duplicate will all be false since the indexOf() only gets the first match in the array.
5. output the new unique value array into the console.
*/
let names =["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence",
    "Mike", "Laurence", "Mike"];

    names.pop();
    names.pop();
    names.pop();
    names.pop();
    names.pop();
    names.pop();


 new_names=[];
 function checklist(element, index){
    return element === "list";
 }
  let name = names.filter(checklist);
  for(item of names){
    new_names.push(item);
  }
  console.log(new_names);
  console.log(new_names.length);