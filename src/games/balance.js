import generateNum from '../function/randNumber';
import startGame from '..';
import { getAnswerForBalanceNum } from '../function/checkAnswers';

const game = () => {
  const description = 'Balance the given number.';
  const num = generateNum(1, 1000);
  const question = `${num}`;
  const answer = `${getAnswerForBalanceNum(num)}`;

  return { description, question, answer };
};

const playBalanceGame = () => {
  startGame(game);
};

export default playBalanceGame;
