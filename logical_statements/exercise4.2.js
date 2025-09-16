/*
1. create a prompt to ask the user's age
2. convert the response from the prompt to a number.
3. Declare a message variable that you will use to hold the 
console message message for the user.
4. if the input age is equal to or greater than 21, set 
the message variable to confirm entry to the venue and ability
to purchase alcohol.
5. if the input age is equal to or greater than 19, set the message 
variable to confirm entry to the venue but deny deny the purchase 
of alcohol
6. provide a default else  statement to set the message variable to deny
entry if none are true.
7. Output the response message variable to the console.

*/
age =prompt("Enter your age?");
real_age= Number(age);
console.log(real_age);
document.writeln(real_age);

if(real_age>= 21){
    alert(`you're allowed Entry and purchase of alcohol ${real_age}years old`);
}
if(real_age>=19){
    alert(`you're allowed Entry but denied purchase of alcohol ${real_age}years old`);
}
else{
    alert(`you're not allowed entry nor purchase of alcohol`);
}