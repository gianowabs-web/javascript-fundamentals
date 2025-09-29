// this is class defination
class person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
// create  a new object called "p" from the person class
let p = new person("Mike", "Van Putten");

// the object p will be used to access attributes or properties of a class
// to access the first name and lastname
let access1= p.firstname;
let access2= p.lastname;

console.log(`hello there ${access1} ${access2}`);