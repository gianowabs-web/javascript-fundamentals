1. /*
create an empty array to use as a  shoppuing list
2. add "milk", bread and apples to your list
3. upate bread with banana and Eggs
4. remove the last item from the array and output it to console 
5. sort the list alphabetically
6. find and output the index value of milk
7. after bananas add carrots and lettuce
8. create a new list containing juice and pop.
9. combine both lists adding the new list twice to the end 
of the first list.
10. get the last index value of pop and output it to the console
11. your final list should look like this ;
["bananas","Carrots","lettuce", "eggs" ,"milk",
 "juice", "pop", "juice"", "pop"]
*/

shopping_list =[];
shopping_list.push("milk", "Bread", "Apples");
console.log(shopping_list);

shopping_list.splice(1,1,'banana', "eggs");
console.log(shopping_list);

shopping_list.pop();
console.log(shopping_list);

shopping_list.sort();
console.log(shopping_list);

console.log("index position of milk is >",shopping_list.indexOf('milk'));

shopping_list.splice(1,0,'carrots',"lettuce");
console.log(shopping_list);

new_list =["juice","pop"];
console.log(new_list);

let joined_list =  shopping_list.concat(new_list, new_list);
console.log(joined_list);

console.log(`the index position of pop is >`,joined_list.indexOf('pop'));

