
import generateNum from '../function/randNumber';
import { product, sum, subtraction } from '../function/mathFunction';
import startGame from '..';

const description = 'What is the result of the expression?';

const mathOp = () => {
  const arrMath = ['*', '+', '-'];
  const rand = Math.floor(Math.random() * arrMath.length);
  return arrMath[rand];
};

const getAnswer = (a, b, math) => {
  switch (math) {
    case '*':
      return product(a, b);
    case '-':
      return subtraction(a, b);
    case '+':
      return sum(a, b);
    default:
      return 0;
  }
};

const makeGame = (a = generateNum(), b = generateNum(), math = mathOp()) => ({
  question: `${a} ${math} ${b}`,
  answer: `${getAnswer(a, b, math)}`,
});

const playGame = () => {
  startGame(makeGame, description);
};

export default playGame;
