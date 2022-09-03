'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let maxScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    displayMessage('No number⚠️');
    //when the input is more than 20 or less than 1
  } else if (guess > 20 || guess < 1) {
    displayMessage('The number should be between 1 and 20!💀');
    //when player wins the game
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!🎉');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#68d8d6';

    document.querySelector('.number').style.width = '30rem';

    if (score > maxScore) {
      maxScore = score;
      document.querySelector('.highscore').textContent = maxScore;
    }

    document.querySelector('.check').disabled = true;
    //when guess is too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high📈' : 'Too low📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!💥');

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing!🎯');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#9b5de5';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.check').disabled = false;
});
