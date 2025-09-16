// take length and width of rectangle 
let length = Number(prompt("Enter length"));
let width = Number(prompt("Enter width"));

//calculate the area
let area = length * width;

document.writeln("the area of the rectangle is: ",area);
console.log("The area of rectangle is:", area);

// if statement
if(area>=50){ // is area greater or equal to 50.answers are two(true or false)
    // if true if block is executed  if (true){block}
    alert(`The shape is very small,${area}m2`);
}
else{
    // if false else {block} is executed
    alert(`the shape is very big it has,${area}m2`);

}

