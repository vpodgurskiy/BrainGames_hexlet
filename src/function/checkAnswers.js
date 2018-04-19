
import { product, sum, subtraction } from './mathFunction';

const checkAnswer = (userAnswer, rightAnswer) => {
  const isCorrect = (userAnswer === rightAnswer);
  return isCorrect;
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

export { checkAnswer, getAnswer };
