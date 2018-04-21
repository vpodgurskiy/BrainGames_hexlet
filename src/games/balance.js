import generateNum from '../function/randNumber';
import startGame from '..';
import { balanceNum } from '../function/arrayFunctions';

const game = () => {
  const description = 'Balance the given number.';
  const attempts = 3;
  const num = generateNum(1, 1000);
  const question = `${num}`;
  const answer = `${balanceNum(num)}`;

  return {
    description, attempts, question, answer,
  };
};

const playBalanceGame = () => {
  startGame(game);
};

export default playBalanceGame;
