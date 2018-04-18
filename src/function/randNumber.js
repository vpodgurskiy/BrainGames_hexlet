
const generateNum = () => {
  let num = 0;
  const min = 2;
  const max = 100;
  num = Math.floor(Math.random() * ((max - (min + 1)) + min));
  return num;
};

export default generateNum;
