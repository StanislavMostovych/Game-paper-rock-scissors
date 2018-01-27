function getUserChoice(userInput) {

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;

    } else {
        console.log('Error!');

    }

};

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

function determineWinner(getUserChoice, getComputerChoice) {
    if (getComputerChoice === getUserChoice) {
        return 'The game is a tie!';
    }
    if (getUserChoice = 'rock') {
        if (getComputerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (getUserChoice === 'paper') {
        if (getComputerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (getUserChoice === 'scissors') {
        if (getComputerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
};

function letsPlay() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
letsPlay();
