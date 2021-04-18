'use strict';
//создаем секретное число
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMe = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMe('No number :/');
    // when player wins
  } else if (guess === secretNumber) {
    displayMe('Correct number!:) ');
    document.querySelector('body').style.backgroundColor = '#60b647';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    highScore < score ? (highScore = score) : highScore;
    document.querySelector('.highscore').textContent = highScore;
    console.log(highScore);
    console.log(score);
  }

  //when guess is different from secretNumber
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMe(
        (document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too high!' : 'Too low!')
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMe('You have lost the game;(');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//again btn functionality
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = ''; //
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMe('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
