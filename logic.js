console.log("Welcome to Rock, Paper, Scissors!");
let hscore = 0;
let cscore = 0;
let rounds = 0;
let cimg = document.querySelector('.compimg');

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

function playRound(human, comp) {
    if (human === comp) {
        return 'tie';
    }

    if (
        (human === 'rock' && comp === 'scissors') ||
        (human === 'paper' && comp === 'rock') ||
        (human === 'scissors' && comp === 'paper')
    ) {
        return 'human';
    } else {
        return 'comp';
    }
}

let choices = document.querySelectorAll('.choice');

choices.forEach(button => {
    button.addEventListener('click', () => {
        if (rounds >= 5) return;

        let human = button.dataset.choice;
        let comp = getComputerChoice();

        if(comp === 'scissors') {
            cimg.src = 'scissors.png';
        }
        else if(comp === 'rock') {
            cimg.src = 'rock.svg';
        }
        else {
            cimg.src = 'paper.svg';
        }

        let result = playRound(human, comp);

        console.log("Human:", human);
        console.log("Computer:", comp);
        console.log("Result:", result);

        if (result === 'human') {
            hscore++;
        } else if (result === 'comp') {
            cscore++;
        }

        rounds++;

        console.log(`Score → Human: ${hscore}, Computer: ${cscore}`);
        console.log("-------------------");

        if (rounds === 5) {
            let winnerText = '';
            if (hscore > cscore) {
                winnerText = 'You win the game!';
            } else if (cscore > hscore) {
                winnerText = 'Computer wins the game!';
            } else {
                winnerText = "It's a tie!";
            }
            // Remove all content and show only the winner
            document.body.innerHTML = `<div class="winner"><h1>${winnerText}</h1></div>`;
        }
    });
});