/*
PROPERTIES
 priperties, sometimes also called fields holds the data of the class
 we have seen one kind of property already, when we created them in our constructor

*/
 class person{
    constructor(firstname, lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
 }
 // here the properties are "firstname" and "lastname"
 // we will create an object
 let p = new person("Mike", "Peter");
 console.log("Hi",p.firstname);

 /*
 you can add propertisee that are not accessible from outside
 example
    class person{
    #firstname
    #lastname
    }
we do that by adding the hash tag before the name
 */

class Mtu{
    #firstname
    #lastname
    constructor(firstname, lastname){
        this.#firstname=firstname;
        this.#lastname=lastname;
    }
}
// the properties #firstname and #lastname cannot be accessed from outside
let s = new Mtu("Maria", "Saga");
console.log(p.firstname);