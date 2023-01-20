'use strict';
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const checkGuess = () => {
    let guess = Number(document.querySelector('.guess').value);
    //when there is no input
        if(!guess){
            displayMessage('Input a number!');
            //when player wins
        } else if(guess === secretNumber){
            displayMessage('Correct Number!');
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.highscore').textContent = score;
            if(score > document.querySelector('.highscore').textContent){
                document.querySelector('.highscore').textContent = score;
            }
            //incorrect guess
        } else if(guess !== secretNumber){
            if(score > 1){
                displayMessage(guess > secretNumber?'Number is too high!': 'Number is too low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('Game Over');
            }
        }
}

document.querySelector('.check').addEventListener('click', checkGuess);

document.querySelector('.again').addEventListener('click', ()=>{
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});

document.addEventListener('keydown', (k)=>{
    if(k.key === 'Enter'){
        checkGuess();
    }
})