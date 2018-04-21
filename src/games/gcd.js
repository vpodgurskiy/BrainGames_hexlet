
import generateNum from '../function/randNumber';
import gcd from '../function/gcd';
import startGame from '..';

const game = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const attempts = 3;
  const a = generateNum(2, 50);
  const b = generateNum(8, 90);
  const question = `${a} ${b}`;
  const answer = `${gcd(a, b)}`;

  return {
    description, attempts, question, answer,
  };
};

const playGcdGame = () => {
  startGame(game);
};

export default playGcdGame;
