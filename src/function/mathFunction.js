
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

export { product, sum, subtraction, mathOp };
