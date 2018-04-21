
import { product, sum, subtraction } from './mathFunction';
import { stringToArray, arrBalance, arrayToString } from './arrayFunctions';
import gcd from './gcd';

const checkAnswer = (userAnswer, rightAnswer) => {
  const isCorrect = (userAnswer === rightAnswer);
  return isCorrect;
};

const getAnswerForMathMeanings = (a, b, math) => {
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

const getAnswerForProgression = (progression, randIndexOfProgression) => {
  const elementOfProgression = progression[randIndexOfProgression];
  return elementOfProgression;
};

const getAnswerForBalanceNum = (num) => {
  const numString = String(num);
  const arrNum = stringToArray(numString);
  const balanceArr = arrBalance(arrNum);
  const balNum = arrayToString(balanceArr);

  return balNum;
};

const getAnswerForGcd = (a, b) => {
  const gcdOfNum = gcd(a, b);
  return gcdOfNum;
};

export {
  checkAnswer, getAnswerForMathMeanings, getAnswerForProgression,
  getAnswerForBalanceNum, getAnswerForGcd,
};
