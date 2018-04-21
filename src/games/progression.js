import startGame from '..';
import generateNum from '../function/randNumber';
import { generateProgression, transformProgression, getRandIndexOfProgression } from '../function/arithmeticProgression';
import { getAnswerForProgression } from '../function/checkAnswers';

const game = () => {
  const description = 'What number is missing in this progression?';
  const a1 = generateNum(2, 20);
  const numAmount = 10;
  const progression = generateProgression(a1, numAmount, 2);
  const randIndexOfProgression = getRandIndexOfProgression(progression);
  const question = `${transformProgression(progression, randIndexOfProgression)}`;
  const answer = `${getAnswerForProgression(progression, randIndexOfProgression)}`;

  return { description, question, answer };
};

const playEvenGame = () => {
  startGame(game);
};

export default playEvenGame;
