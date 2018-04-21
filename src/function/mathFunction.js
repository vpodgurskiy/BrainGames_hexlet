
const product = (a, b) => {
  const result = a * b;
  return result;
};

const sum = (a, b) => {
  const result = a + b;
  return result;
};

const subtraction = (a, b) => {
  const result = a - b;
  return result;
};

const mathOp = () => {
  const arrMath = ['*', '+', '-'];
  const rand = Math.floor(Math.random() * arrMath.length);
  return arrMath[rand];
};

const primeNum = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export { product, sum, subtraction, mathOp, primeNum };
