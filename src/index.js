
import { question } from 'readline-sync';

const startGame = (createGame, description) => {
  console.log('Welcome to Brain Games!');
  console.log(`${description} \n`);
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  const attempts = 3;
  for (let i = 0; i < attempts; i += 1) {
    const game = createGame();

    console.log(`Question: ${game.question}`);
    const result = question('Your answer: ');
    const isCorrect = game.answer === result;

    if (!isCorrect) {
      console.log(`'${result}' is wrong answer ;(. Correct answer was ${game.answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
