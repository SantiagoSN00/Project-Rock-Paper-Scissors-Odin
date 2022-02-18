function computerPlay(){

    let hands= ["rock","paper","scissors"]

    // Returns a random int [0,2]
    let randomNum = Math.floor(Math.random() * (3 - 0)) + 0;
    // Returns a random hand
    return hands[randomNum]
}

function playRound(Player,Computer){

    // Check if it is a draw
    if(Player == Computer){
        return "It's a draw :T";
    }

    // Check if you win
    else if(Player === "rock" && Computer === "scissors" || 
            Player === "scissors" && Computer === "paper"||
            Player === "paper" && Computer === "rock"){
                return "You won! :D";
            } 
            
    // Else you lose
    else return "You lost! :(";
}

let hands = document.querySelectorAll('img')
hands.forEach(e => {
    e.addEventListener('click',playerSelection)
});

let wins=losses=draws=0;

let p = document.querySelectorAll('.para')[1]

function setFinished(){
    if(wins === 5){
        p.textContent = `Great job, you showed the futuristic monster who the boss is, want to try again?`
    } else p.textContent = `Oh no! Now who will save us from this horrible, badly designed and non responsive webpage`
    wins=losses=0
}

function playerSelection(e){
    
    let playerHand = e.target.alt.toLowerCase()
    p.textContent = playRound(playerHand,computerPlay())
    if(p.textContent === "You won! :D") wins++;
    else if(p.textContent === "You lost! :(") losses ++;
    else draws++;
    if(wins>=5 || losses >=5){
        setFinished();
        return;
    }
    p.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    p.textContent += `W:${wins}|L:${losses}`
}