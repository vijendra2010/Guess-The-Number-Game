'use strict';

let score = 20;
document.querySelector('.score').textContent = score;

let highestScore = 0;
document.querySelector('.highscore').textContent = highestScore;

let randomNumber = Math.trunc(Math.random()*20);

document.querySelector('.btn-check').addEventListener('click', function() {
    //If score reached 0 then restart the game.
    if(score === 0){
        document.querySelector('.message').textContent = '🚩 You lost! Play Again';
    } else{
        const guessValue = Number(document.querySelector('.guess').value);
        //If no value is entered
        if(!guessValue){
            document.querySelector('.message').textContent = 'No Value! :(';
        } 
        //If guess is correct
        else if(guessValue === randomNumber){
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = randomNumber;
            document.querySelector('.message').textContent = '🙌 Correct Number!';
            if(highestScore < score){
                highestScore = score;
                document.querySelector('.highscore').textContent = highestScore;
            }
        } 
        //If guess if too high
        else if(guessValue > randomNumber){
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } 
        //If guess is too low
        else if(guessValue < randomNumber){
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    } 
});

document.querySelector('.btn-again').addEventListener('click', function() {
    document.querySelector('.message').textContent = '😎 Start guesssing...';
    score = 20;
    
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    
    randomNumber = Math.trunc(Math.random()*20);
    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
});