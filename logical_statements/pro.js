// student to enter marks
let mathematics = Number(prompt("Enter marks for mathematics?"));
let english = Number(prompt("Enter marks for english?"));
let kiswahili = Number(prompt("Enter marks for kiswahili?"));
let geography = Number(prompt("Enter marks for geography?"));
let physics =Number(prompt("Enter marks for physics?"));
let history = Number(prompt("Enter marks for history?"));
let chemistry =Number(prompt("Enter marks for chemistry?"));

// calculate the total marks
let total_marks = mathematics + english + kiswahili + geography + physics + history + chemistry;

// calculate the average marks
let average_marks = total_marks / 7;

/*
A  80 - 99
A- 75 - 79
B+ 70 - 74
B  65 - 69
B- 60 - 64
C+ 55 - 59
C  50 - 54
C- 50 - 54
D+ 45 - 49
D  35 - 39

*/
 

if(average_marks>= 80 && average_marks<= 99){
    document.writeln("your grade is => A",average_marks);
}
else if(average_marks>= 75 && average_marks<= 79){
    document.writeln("your grade is => A-",average_marks);
}
else if(average_marks>= 70 && average_marks<=74){
     document.writeln("your grade is => B+",average_marks);
}
else if(average_marks>= 65 && average_marks<= 69){
    document.writeln("your grade is => B",average_marks);
}
else if(average_marks>=60 && average_marks<=64){
    document.writeln("your grade is => B-",average_marks);
}
else if(average_marks>=55 && average_marks<=59){
    document.writeln("your grade is => C+",average_marks);
}
else if(average_marks>=50 && average_marks<=54){
    document.writeln("your grade is => c",average_marks);
}
else if(average_marks>=45 && average_marks<= 49){
    document.writeln("your grade is => C-",average_marks);
}
else if(average_marks>=40 && average_marks<=44){
    document.writeln("your grade is => D+",average_marks);
}
else if(average_marks>=35 && average_marks<=39){
    document.writeln("your grade is => D",average_marks);
}
else{
    document.writeln("the average marks is invalid!",average_marks);
}
