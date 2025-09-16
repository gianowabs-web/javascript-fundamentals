/*
Object are used to describe real life objects as well as more complex concept
- Arrays is an example of object



*/
// test to see if an array is an object
let arr =[0,2,3];
console.log(typeof(arr));

// example object
let dog = {
       dogname:"javascript",
       weight:2.4,
       color:"brown",
       breed:"chihuahua",
       age:3,
       burglarBiter:true


};

// dogname,weight,color,breed,age,burgarBiter are properties of the
// obbject called dog

//to access properties of the dog we do the following
console.log("the dog has the following weight", dog.weight);

// to update a new value to a property in an object
dog["color"] = "blue"
dog.weight=3.2
console.log(dog);

let bd = "BullDog";
dog.breed = bd;
console.log(dog);
/*
practise exercise 3.4

*/