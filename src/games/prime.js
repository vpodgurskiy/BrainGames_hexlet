import generateNum from '../function/randNumber';
import { getAnswerForPrime } from '../function/checkAnswers';
import startGame from '..';

const game = () => {
  const description = 'Answer "yes" if number prime otherwise answer "no".';
  const a = generateNum();
  const question = `Is this number prime? ${a}`;
  const answer = `${getAnswerForPrime(a)}`;

  return { description, question, answer };
};

const playPrimeGame = () => {
  startGame(game);
};

export default playPrimeGame;
