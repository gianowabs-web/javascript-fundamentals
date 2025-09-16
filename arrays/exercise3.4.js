/*
1. Create a new my car object for acar . add some properties, including ,
but not limited to, make and model, and values for a typical car on your 
car. feel free to use Booleans, strings or numbers.
2. Create a variable that can hold the string value color. this variable 
containing a string value color can now be used to reference the property 
name withi my car. then , use the variable within the square bracket notation 
to assign a new value to the color property my car.
3. Use that same variable and assign a new propery string value to it, such as
forsale. Use  the bracket notation once again to assign a new value to the 
forsale propertyto indicate whether the car is available for purchase.
4. Output make and model into the console.
5.Output the value of forsale into the console.

*/
let car ={
    car_name: "pickup",
    brand:"ford",
    milleage:350,
    model:835.2025,
    price:1500000,
    platenumber:"GIANWAYS01",
    color:"orange",
    forsale:1450000
};
console.log(car);
car["color"]="white";
console.log(car);
console.log(car.forsale);
car["forsale"] = "available"
console.log(car);
console.log(car.forsale);

