import inquirer from "inquirer"

// Function to generate a random number between min (inclusive) and max (inclusive)
function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize the game
let rounds = 1;
let score = 0;

async function startGame() {
  const targetNumber = generateRandomNumber(1, 100);

  console.log(`Round ${rounds}`);
  console.log('Guess the number between 1 and 100');

  const userInput = await inquirer.prompt({
    type: 'input',
    name: 'guess',
    message: 'Your guess:',
  });

  const guessedNumber = parseInt(userInput.guess, 10);

  if (isNaN(guessedNumber)) {
    console.log('Please enter a valid number.');
    startGame();
  } else {
    if (guessedNumber === targetNumber) {
      console.log('Congratulations! You guessed the correct number.');
      score++;
    } else {
      console.log(`Wrong guess. The correct number was ${targetNumber}.`);
    }

    // Ask if the user wants to play another round
    const playAgain = await inquirer.prompt({
      type: 'confirm',
      name: 'playAgain',
      message: 'Do you want to play another round?',
    });

    if (playAgain.playAgain) {
      rounds++;
      startGame();
    } else {
      console.log(`Game over! Your score is ${score} out of ${rounds - 1} rounds.`);
    }
  }
}

// Start the game
startGame();
