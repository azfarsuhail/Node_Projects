"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// Function to generate a random number between min (inclusive) and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Initialize the game
let rounds = 1;
let score = 0;
function startGame() {
    return __awaiter(this, void 0, void 0, function* () {
        const targetNumber = generateRandomNumber(1, 100);
        console.log(`Round ${rounds}`);
        console.log('Guess the number between 1 and 100');
        const userInput = yield inquirer_1.default.prompt({
            type: 'input',
            name: 'guess',
            message: 'Your guess:',
        });
        const guessedNumber = parseInt(userInput.guess, 10);
        if (isNaN(guessedNumber)) {
            console.log('Please enter a valid number.');
            startGame();
        }
        else {
            if (guessedNumber === targetNumber) {
                console.log('Congratulations! You guessed the correct number.');
                score++;
            }
            else {
                console.log(`Wrong guess. The correct number was ${targetNumber}.`);
            }
            // Ask if the user wants to play another round
            const playAgain = yield inquirer_1.default.prompt({
                type: 'confirm',
                name: 'playAgain',
                message: 'Do you want to play another round?',
            });
            if (playAgain.playAgain) {
                rounds++;
                startGame();
            }
            else {
                console.log(`Game over! Your score is ${score} out of ${rounds - 1} rounds.`);
            }
        }
    });
}
// Start the game
startGame();
