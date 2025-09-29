/*
Methods
- fuctions on a class are called methods
- When defining these methods, we dont use the function Keywords. we start directly with the name:

*/
class person{
    // the first method constructor method
    constructor(firstname, lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    // the second method, user defined method
    greet(){
        console.log("hi, there i am ",this.firstname);
    }
    // second method with parameters
    compliment(continent){
        return "the continent is" + continent;
    }
}
let p = new person("James", "Peter");

//use the p object to access the class and pick the methods
let method_one = p.compliment("Africa");
console.log(method_one);