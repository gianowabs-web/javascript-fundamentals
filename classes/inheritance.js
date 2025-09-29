/*
INHERITANCE
- INHERITANCE  allows a class (child ) to acquire propeties and methods from another class 
(parent)
- lets you define common feature once in a parent class and reuses them in multiple child classes 
-parent class : contain shared attributes and behavior (eg vehicle)
child classes: Extend the parent class to create specialised version (eg. Car boat, bycycle. motocycle
)
- purpose :promote code reuse , organization and easier maintenance

*/

// PARENT CLASS
class Vehicle{
    constructor(color, currentspeed, maxspeed){
        this.color=color;
        this.currentspeed= currentspeed;
        this.maxspeed=maxspeed;
    }
    move(){
        console.log("Moving at", this.currentspeed);

    }
    accelerate(amount){
        this.currentspeed += amount;
    }

}

// above we have two methods in put parent class Vehicle- move - accelarate
// we will create a class below called motocycle to inherit from theclass vehicle
// to do tht we will use "extends" keywords it is used to specify that certain class is the child of another 
// in this caes "motocycle "is the child class of vehicle hence "motocycle "can access attributes of vehicle
// class
// we use "super()"methods in the consturctor of child class to call the constructor from the parent, the
// vehicle constructor in this case This makes sure that fields from parent are set as wwell and that the
// methods are available wihout having to do anthing else , they are automatically inherited
// calling super () method is a must , when you are ina class that is inherited from another class else you
// will get a reference error

class motocycle extends Vehicle{
    constructor(color, currentspeed, maxspeed, fuel){
        // here super() function is inside the child class constructor
        super(color, currentspeed, maxspeed);
        this.fuel=fuel;// initializing child class
    }
    dowheelie(){
        console.log("Driving on one wheel", this.fuel);
    }
}

// to create an object you use the child class
let motor =new motocycle("Black", 0, 250, "gasoline");
console.log(motor.color); // accessing the color property from the parent class

motor.accelerate(50);
motor.move();

motor.dowheelie();