/*
PROTOTYPE
a prototype is the mechanism in javascript that enables objects and inheritance
default behavior if nothing is psecified , objects automatically inherit from object. pototype.
Object. prototype: A built- in javascript boased object that provides default properties and methods 
- role in inhertance : acts as the top of inheritance  chain ensuring all objects have access to core 
methods 
- simplified view : you don't need to know its internal implementation - just that its always present 
N/B : in javascript prototype allow objects to share behaviours all objects ultimately  inhrit from
there is a prototype property available on all classes  and is 

*/

class person {
    constructor(firstname, lastname){
        this.firstname=firstname;
        this.lastname=lastname;

    }
    greet(){
        console.log("Hi there!");
    }
}
// prototype allows you to add function to a class dynamically. exemple of function 
// we want to add is "introduce"

person.prototype.introduce = function(){
    console.log("Hi I'm", this.firstname);
}

// prototype is a property holding all properties and methods of an object, so 
// adding a function to prototype is adding a function to the class 
// you can use apropttype to add properties or methods to an object like we did in the above 
// example in our code with the introduce function . you can also do this for properties:

person.prototype.favoriteColor="green";

// and  then you call them from instances of person 
let p  = new person("Maria", "Saga");
console.log(p.favoriteColor);
p.introduce();