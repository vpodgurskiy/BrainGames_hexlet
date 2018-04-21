
import { createNewArray } from './arrayFunctions';

const transformProgression = (progression, indexOfProgression) => {
  const newProgression = createNewArray(progression);
  newProgression[indexOfProgression] = '..';
  return newProgression;
};

const generateProgression = (a1, n, d) => {
  let a = a1;
  const arrProgression = [n];
  arrProgression[0] = a1;
  for (let i = 1; i < n; i += 1) {
    a += d;
    arrProgression[i] = a;
  }
  return arrProgression;
};

const getRandIndexOfProgression = (progression) => {
  const randIndex = Math.floor(Math.random() * progression.length);
  return randIndex;
};

export { generateProgression, transformProgression, getRandIndexOfProgression };
