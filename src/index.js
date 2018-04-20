
import readline from 'readline-sync';
import { gameName, gameDescription, userName } from './function/gameProperty';
import { checkAnswer } from './function/checkAnswers';
import { newLine } from './function/secondary_functions';

const startGame = (game) => {
  const newGame = game();
  gameName();
  gameDescription(newGame.description);
  newLine();
  const name = userName();

  let count = 0;
  while (count < newGame.attempts) {
    const userGame = game();

    const gameQuestion = userGame.question;
    console.log(`Question: ${gameQuestion}`);

    const userAnswer = readline.question('Your answer: ');
    const rightAnswer = userGame.answer;

    const isCorrect = checkAnswer(userAnswer, rightAnswer);

    if (!isCorrect) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    count += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
