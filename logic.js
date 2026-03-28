function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choice.length());
    return choice[index];
}

function getHumanChoice() {
    let input = prompt("Enter rock/paper/scissors");

    if(!input){
        console.log("Game cancelled!!");
        return null;
    }

    let i = input.toLowerCase();
    if(i != 'rock' && i != 'paper' && i != 'scissors'){
        console.log("invalid entry, only enter rock, paper or scissors!!");
        return null;
    }
    
    console.log(input);
    return(input);
    
}

function playRound() {

}

const human = getHumanChoice();
const comp = getComputerChoice();

playRound(human, computer);