/*
getters and setters
- getters and setters are special properties that we can use to get data from a class

they start with and  set keywords. it is considered good practise to make fields private 
as much as possible and access to them using getters and setters.

This way, the propertise can't be set from outside without the object itself being in control 
this principle is called encapsulation

*/

class person{
    #firstname;
    #lastname;
    constructor(firstname, lastname){
        this.#firstname= firstname;
        this.#lastname= lastname;
    }
    get firstname(){
        return this.#firstname
    }
    set firstname(firstname){
        this.#firstname=firstname;
    
    }
    get lastname(){
        return this.#lastname;
    }
    set lastname(latsname){
        this.#lastname=this.#lastname;
    }

}

//getter is used to get properties therfore doesn't take parameters but returns the property
//setter it takes parameter assigns new value to the property and return nothing
// here property are no longer directly accessible from outside the class, but can be accessed
//via the getter to get value and via setter to update the value.


let p = new person ("Maria","Saga")
console.log(p.firstname)

// assign a new value to the property
p.firstname="Adnane"

console.log(p.firstname)