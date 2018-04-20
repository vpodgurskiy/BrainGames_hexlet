
const gcdItter = (numArr, result = 1) => {
  if (result === 1) return result;
  for (let i = 0; i < numArr.length; i += 1) {
    if (numArr[i] % result !== 0) {
      const count = result - 1;
      return gcdItter(numArr, count);
    }
  }
  return result;
};

const min = (numArr) => {
  let minNum = numArr[0];
  for (let i = 0; i < numArr; i += 1) {
    if (numArr[i] < minNum) {
      minNum = numArr[i];
    }
  }
  return minNum;
};

const gcd = (num) => {
  const minNum = min(num);
  if (minNum === 0) return 0;
  const result = gcdItter(num, minNum);
  return result;
};

export default gcd;
