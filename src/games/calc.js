
import generateNum from '../function/randNumber';
import { getAnswer } from '../function/checkAnswers';
import { mathOp } from '../function/mathFunction';
import startGame from '..';

const game = () => {
  const description = 'What is the result of the expression? \n';
  const attempts = 3;
  const a = generateNum();
  const b = generateNum();
  const math = mathOp();
  const question = `${a} ${math} ${b}`;
  const answer = `${getAnswer(a, b, math)}`;

  return {
    description, attempts, question, answer,
  };
};

const playGame = () => {
  startGame(game);
};

export default playGame;
