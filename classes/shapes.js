class Rectangle{
    constructor(length,width){
    this.length=length;
    this.width = width;
}
// method to calculate the area
 area(){
    return this.length* this.width;
 }
}

// child class
  class cuboid extends Rectangle{
    constructor(length, width, height){
        super(length, width);
        this.height=height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
  }

 // create an object

 let shape = new cuboid(56,45,30);

 console.log(shape.area());
 console.log(shape.volume());