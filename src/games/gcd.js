
import generateNum from '../function/randNumber';
import { getAnswerForGcd } from '../function/checkAnswers';
import startGame from '..';

const game = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const a = generateNum(2, 50);
  const b = generateNum(8, 90);
  const question = `${a} ${b}`;
  const answer = `${getAnswerForGcd(a, b)}`;

  return { description, question, answer };
};

const playGcdGame = () => {
  startGame(game);
};

export default playGcdGame;
