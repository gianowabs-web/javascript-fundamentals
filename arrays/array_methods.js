/*
ARRAYS METHODS
a) Adding and replacing elements
     push()
     -this method is used to an item as the last item 
     in the array.
     
     splice()
      - to add elementsat at a certain index position we use splice method.
     concat()
      - joins two arrays together.
*/

// push()
favoriteFruits = ["grapefruits", "oranges", "lemon"];
//add an item using push()method
favoriteFruits.push("mangoes");
console.log(favoriteFruits);

// To add an element at a certain index
let shapes = ["circle", "triangle", "rectangle", "pentagon"];
console.log(shapes);
// 2 is the indexpositon to insert the two items ,0 is the number of item to delete
shapes.splice(2,0,'square', "trapezoid");
console.log(shapes);

// concat()
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let joined = arr1.concat(arr2);
console.log(joined);

/*
deleting elements
> to remove the last item from an array we use the pop() method

*/
let countries = ["kenya","uganda","tanzania","ethopia", "sudan","burundi"];
countries.pop();
console.log(countries);


// splice()
countries.splice(3,2);
console.log(countries);

/*
finding Element
find()- this function wuill be executed on every element in the arrays until it finds 
a match, and if it does not then it will return undefined.

// indexof()
 gets you the index position of the item in the array.
 
 //sort()
 - this method is used to sort values from small to high and string A-Z,

// reversed
 - this method puts the last element first and viceverser
*/

arr8 = [32,76,43,33,99,32,45,74];
let findvalue =arr8.find(e=> e === 32);
console.log("found",findvalue);

// index position of 32
console.log("index position of 32 is >", arr8.indexOf(findvalue));

// sort()
arr8.sort()
console.log(arr8);

//reversed
arr8.reverse
console.log(arr8);


