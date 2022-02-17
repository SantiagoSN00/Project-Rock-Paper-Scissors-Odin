let hands= ["rock","paper","scissors"]

function computerPlay(){

    // Returns a random int [0,2]
    let randomNum = Math.floor(Math.random() * (3 - 0)) + 0;
    console.log(randomNum)
    // Returns a random hand
    return hands[randomNum]
}

function playRound(Player,Computer){

    console.log(Player,Computer);

    if(Player == Computer){
        return "It's a draw :T";
    }
    else if(Player === "rock" && Computer === "scissors" || 
            Player === "scissors" && Computer === "paper"||
            Player === "paper" && Computer === "rock"){
                return "You won! :D";
            } else return "You lost! :(";
}

function playSets(){
        let player="";
        player = prompt("Enter the hand you want to play (\"Rock\",\"Paper\",\"Scissors\")")
        player = player.toLowerCase();
        while(player !== "rock" && player !=="paper" && player !=="scissors"){
            player = prompt("Unvalid hand, please check for typing errors and try again")
            player = player.toLowerCase()
        }
        return(playRound(player,computerPlay()));
}
