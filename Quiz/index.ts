import inquirer from 'inquirer';
import quizQuestions from './question.js';

async function runQuiz() {
  let score = 0;

  for (const question of quizQuestions) {
    const { answer } = await inquirer.prompt([
      {
        type: 'list',
        name: 'answer',
        message: question.question,
        choices: question.choices,
      },
    ]);

    if (answer === question.correctAnswer) {
      console.log('Correct!\n');
      score++;
    } else {
      console.log(`Wrong! The correct answer is ${question.correctAnswer}.\n`);
    }
  }

  console.log(`Quiz completed. Your score: ${score}/${quizQuestions.length}`);
}

runQuiz();
