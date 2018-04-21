
const gcdItter = (a, b, result = 1) => {
  if (result === 1) return result;
  if (a % result !== 0) {
    const count = result - 1;
    return gcdItter(a, b, count);
  }
  if (b % result !== 0) {
    const count = result - 1;
    return gcdItter(a, b, count);
  }
  return result;
};

const gcd = (a, b) => {
  const minNum = a < b ? a : b;
  if (minNum === 0) return 0;
  const gcdNum = gcdItter(a, b, minNum);

  return gcdNum;
};

export default gcd;
