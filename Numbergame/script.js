'use strict';

const scoreZero = document.querySelector('#score--0');
let currentZero = document.getElementById('current--0');
const scoreOne = document.querySelector('#score--1');
let currentOne = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const  holdScore = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const hold = document.querySelector('.btn--hold');
const reset = document.querySelector('.btn--new');

let playing = true;
let currentScore = 0;
let scores = [0, 0]
let activePlayer = 0;


//starting conditions
const startingConditions = () => {
    scores = [0,0];
    scoreZero.textContent = 0;
    scoreOne.textContent = 0;
    activePlayer = 0;
    currentZero.textContent = 0;
    currentOne.textContent = 0;
    dice.classList.add('hidden');
    playing = true;
    player0.classList.add('player--active');
    player1.classList.remove('player--active')
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
}

//switch player function
const switchPlayer = ()=>{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0? 1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    currentScore = 0;
}

startingConditions()

//roll dice functionality
rollDice.addEventListener('click', ()=>{
    if(playing){
        let diceRoll = Math.trunc(Math.random()*6) + 1;
        dice.classList.remove('hidden');
        dice.src = `dice-${diceRoll}.png`;

        if(diceRoll !== 1){
            currentScore += diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else{
            switchPlayer();
            
            //method one for colour switching
            // if(activePlayer === 0){
            //     player0.classList.add('player--active');
            //     player1.classList.remove('player--active');
            // } else {
            //     player0.classList.remove('player--active');
            //     player1.classList.add('player--active');
            // }

            //method two for colour switching
            
        }
    }
})

hold.addEventListener('click', ()=>{
    if(playing){
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

        } else {
            switchPlayer();
    }
}
});

reset.addEventListener('click', startingConditions);