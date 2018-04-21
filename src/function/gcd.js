
const gcd = (a, b) => {
  if (a !== 0) {
    return a > b ? gcd(b % a, a) : gcd(a, b % a);
  }
  return b;
};

export default gcd;
