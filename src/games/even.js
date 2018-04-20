import startGame from '..';
import generateNum from '../function/randNumber';

const game = () => {
  const num = generateNum();
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const attempts = 3;
  const question = num;
  const answer = (num % 2 === 0) ? 'yes' : 'no';

  return {
    description, attempts, question, answer,
  };
};

const playEvenGame = () => {
  startGame(game);
};

export default playEvenGame;

