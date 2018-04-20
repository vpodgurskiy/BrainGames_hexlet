
import generateNum from '../function/randNumber';
import { getAnswerForMathMeanings } from '../function/checkAnswers';
import { mathOp } from '../function/mathFunction';
import startGame from '..';

const game = () => {
  const description = 'What is the result of the expression?';
  const attempts = 3;
  const a = generateNum();
  const b = generateNum();
  const math = mathOp();
  const question = `${a} ${math} ${b}`;
  const answer = `${getAnswerForMathMeanings(a, b, math)}`;

  return {
    description, attempts, question, answer,
  };
};

const playCalcGame = () => {
  startGame(game);
};

export default playCalcGame;
