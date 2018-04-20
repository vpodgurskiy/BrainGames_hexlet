
const generateNum = (min = 2, max = 100) => {
  let num = 0;
  num = Math.floor(Math.random() * ((max - (min + 1)) + min));
  return num;
};

export default generateNum;
