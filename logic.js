function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

function getHumanChoice() {
    let input = prompt("Enter rock/paper/scissors");

    if (!input) {
        console.log("Game cancelled!!");
        return null;
    }

    let i = input.toLowerCase();

    if (i != 'rock' && i != 'paper' && i != 'scissors') {
        console.log("invalid entry, only enter rock, paper or scissors!!");
        return null;
    }

    return i;
}

function playRound(human, comp) {
    if (human === comp) {
        return `Both chose the same ${human}, therefore a tie`;
    }

    if (
        (comp === 'paper' && human === 'rock') || 
        (comp === 'scissors' && human === 'paper') ||
        (comp === 'rock' && human === 'scissors')
    ) {
        return `human`;
    } else {
        return `comp`;
    }
}

let hscore = 0;
let cscore = 0; 

for (let i = 0; i < 5; i++) {
    const human = getHumanChoice();

    if (human === null) {
        console.log('skipping human choice...');
        i--;
        continue;
    }

    const comp = getComputerChoice();
    const ans = playRound(human, comp);

    console.log(`Round ${i + 1}`);
    console.log("Human:", human);
    console.log("Computer:", comp);
    console.log(ans);

    if (ans === `human`) {
        hscore++;
    } else if (ans === `comp`) {
        cscore++;
    } else {
        console.log(`round is a tie`);
    }

    console.log("----------------------");
}

console.log("Final Score:");
console.log("Human:", hscore);
console.log("Computer:", cscore);

if (hscore > cscore) {
    console.log("🏆 Human wins the game!");
} else if (cscore > hscore) {
    console.log("💻 Computer wins the game!");
} else {
    console.log("🤝 The game is a tie!");
}