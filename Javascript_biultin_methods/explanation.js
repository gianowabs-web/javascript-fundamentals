/*
we have seen some of the built in methods example
console.log()
math.random()
prompt()
*/
let words = "hello";
console.log(words.concat( " there!"));
console.log(words.toUpperCase());
console.log(words.replace("Hello", "Hi!"));


//GLOBAL METHODS


/*
arrays methods
foreach()

*/
let arrays = ["grapefruit", 4, "hello", 5.6, true];

function printstuff(element, index){
    console.log("printing stuff:", element, "on array position:", index);

}
arrays.forEach(printstuff);
/*
Filtering an array
    filter()
    the filter method takes a function  as an argument and this function should
    return a Boolean if the boolean has the value true the element will end up in the  
    filltered array if the boolean has the value false the element wiil be left out 

*/

// mixed array

let mixed =["squirrel", 5, "tjed", new Date(), true];
let clean =[]

function checkstring(element, index){
    return typeof element=== "string";
}
let filtered_array=mixed.filter(checkstring);

// for of
for (item of filtered_array){
    clean.push(item);
}
console.log(clean.length);


/*
every()
used to see wether something is true or all elements
in the array. if that is the case the every() method  will return
true, else it will return false



*/

let random_words=["kenya", "bangladesh", "somalia", "chan", "america", "russia","botswana"];
function check_5_letter(element, index){
     return element.length === 7;
}
console.log(random_words.every(check_5_letter));
console.log(random_words.filter(check_5_letter));