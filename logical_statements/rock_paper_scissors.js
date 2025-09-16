/*
ROCK PAPER SCISSORS GAME

1. Create an array that contain the variable rock, paper, scissors.
2. set up the variable that generates a random number 0-2 for the
player and then do the same for the computer selection, the number 
represents  the index value in the array of the 3 items
3. create a variable to hold a response message to the user.
 this can show the random results for players and then 
 also result for the computer of the matching item from
 the array
4. Create a condition to handle the player and computer selections.
if both are the same, this result in a tie.
5. use conditions to apply game logic and return the right results.
There are several ways to do this with the condition statements, 
but you could check which player index value is bigger and 
assign the victory accordingly, with the exception of rock 
bitting scissors.
6. Add a new output message that shows the player selection 
versus the computer selction and the result of the Game.

*/
// Create an array that contain the variable rock, paper, scissors.
let choices = ["rock", "paper","Scissors"];
      
//set up the variable that generates a random number 0-2 for the
//player and then do the same for the computer selection
let random_number= Math.random();//generates random number between 0 and 1
// multiply by 2 to obtain number between 0 and 2
random_number=random_number*3;
console.log(random_number);
// remove digits past decimal place to provide whole number.
let computer_random_number= Math.floor(random_number);
let username = prompt("Enter your name")

let user_pick = Number(prompt("pick either of the following \n0.rock \n1.paper \n2.scissors \nEnter here"));

// create 2 lists for computer and user
let user_list = [];
user_list.push(username)
let score_board = ["Draw", "Win", "Lose"];
let user_draw_list=[];
let user_win_list =[];
let user_lose_list = [];
let computer_lose_list =[];
let computer_draw_list =[];
let computer_win_list =[];
/*
rock will beat scissors
paper will beat rock
scissor will beat out paper
*/

if(user_pick == 0 && computer_random_number == 0){
    user_win_list.push(score_board[user_pick]);
    computer_draw_list.push(score_board[computer_random_number]);


    document.writeln(`${user_list[0]}, wins${user_draw_list.length}, Draws ${user_draw_list.length}, lose ${user_lose_list.length}`);
    document.writeln(`computer wins ${computer_win_list.length}, Draw ${computer_draw_list.length}, lose${computer_lose_list.length}`);
    document.writeln(`${user_draw_list.length}`);
    
}
//rock = 0, paper = 1, scissor = 2
else if(user_pick == 1 && computer_random_number == 0){
    user_win_list.push(score_board[user_pick]);
    computer_lose_list.push(score_board[computer_random_number]);
    document.writeln(`user won,${score_board[user_pick]}`);

    document.writeln(`${user_list[0]}, wins${user_draw_list.length}, Draws ${user_draw_list.length}, lose ${user_lose_list.length}`);
    document.writeln(`computer wins ${computer_win_list.length},Draw ${computer_draw_list.length}, lose${computer_lose_list.length}`);
    document.writeln(`${user_draw_list.length}`);
    
    
}
else if(user_pick == 1 && computer_random_number == 1){
    user_draw_list.push(score_board[user_pick]);
    computer_draw_list.push(score_board[computer_random_number]);

    document.writeln(`${user_list[0]}, wins${user_draw_list.length}, Draws ${user_draw_list.length}, lose ${user_lose_list.length}`);
    document.writeln(`computer wins ${computer_win_list.length}, Draw ${computer_draw_list.length}, lose${computer_lose_list.length}`);
    document.writeln(`${user_draw_list.length}`);
    document.writeln(`that's a Draw,${score_board[user_pick]}`);
}
else if(user_pick ==0  && computer_random_number == 1){
    user_lose_list.push("LOSE");
    computer_win_list.push("WIN");
    document.writeln(`${user_list[0]}, wins${user_draw_list.length}, Draws ${user_draw_list.length}, lose ${user_lose_list.length}`);
    document.writeln(`computer wins ${computer_win_list.length},Draw ${computer_draw_list.length}, lose${computer_lose_list.length}`);
    document.writeln(`computer wins,${computer_win_list.length}]}`);
}
else if(user_pick == 2 && computer_random_number == 0){
    user_win_list.push("WIN");
    computer_lose_list.push("LOSE");
    document.writeln(`${user_list[0]}, wins${user_draw_list.length}, Draws ${user_draw_list.length}, lose ${user_lose_list.length}`);
    document.writeln(`computer wins ${computer_win_list.length}, Draw ${computer_draw_list.length}, lose${computer_lose_list.length}`);
    document.writeln(`user wins ,${score_board[user_pick]}`);
}
else if(user_pick == 2 && computer_random_number == 1){
    user_win_list.push("WIN");
    computer_lose_list.push("LOSE");
    document.writeln(`${user_list[0]}, wins${user_draw_list.length}, Draws ${user_draw_list.length}, lose ${user_lose_list.length}`);
    document.writeln(`computer wins ${computer_win_list.length}, Draw ${computer_draw_list.length}, lose${computer_lose_list.length}`);
    document.writeln(`user wins,${score_board[user_pick]}`);
}
else if(user_pick == 0 && computer_random_number == 2){
    user_lose_list.push("LOSE");
    computer_win_list.push("WIN");
    document.writeln(`${user_list[0]}, wins${user_draw_list.length}, Draws ${user_draw_list.length}, lose ${user_lose_list.length}`);
    document.writeln(`computer wins ${computer_win_list.length}, Draw ${computer_draw_list.length}, lose${computer_lose_list.length}`);
    document.writeln(`computer wins,${score_board[user_pick]}`);
}
else if(user_pick == 1 && computer_random_number == 2){
    user_lose_list.push("LOSE");
    computer_win_list.push("WIN");
    document.writeln(`${user_list[0]}, wins${user_draw_list.length}, Draws ${user_draw_list.length}, lose ${user_lose_list.length}`);
    document.writeln(`computer wins ${computer_win_list.length}, Draw ${computer_draw_list.length}, lose${computer_lose_list.length}`);
    document.writeln(`computer wins,${score_board[user_pick]}`);
}

    else if(user_pick == 2 && computer_random_number == 2){
    user_win_list.push("WIN");
    computer_lose_list.push("LOSE");
    document.writeln(`${user_list[0]}, wins${user_draw_list.length}, Draws ${user_draw_list.length}, lose ${user_lose_list.length}`);
    document.writeln(`computer wins ${computer_win_list.length}, Draw ${computer_draw_list.length}, lose${computer_lose_list.length}`)
    document.writeln(`this is a draw,${score_board[user_pick]}`);

}
console.log(user_win_list);



























