import startGame from '..';
import generateNum from '../function/randNumber';
import { generateProgression, transformProgression, getRandIndexOfProgression } from '../function/arithmeticProgression';
import { getAnswerForProgression } from '../function/checkAnswers';

const game = () => {
  const description = 'What number is missing in this progression?';
  const a1 = generateNum(5, 30);
  const numAmount = 10;
  const progression = generateProgression(a1, numAmount, 2);
  const randIndexOfProgression = getRandIndexOfProgression(progression);
  const question = `${transformProgression(progression, randIndexOfProgression)}`;
  const answer = `${getAnswerForProgression(progression, randIndexOfProgression)}`;

  return { description, question, answer };
};

const playProgressionGame = () => {
  startGame(game);
};

export default playProgressionGame;
