
const sortArrAsc = (arr) => {
  const sortArr = arr.sort(((a, b) => (a > b ? 1 : -1)));
  return sortArr;
};

const subtractedArgument = (arr) => {
  let arg = 0;
  if ((arr[arr.length - 1] - arr[0]) > 1) {
    arg = (arr[arr.length - 1] - arr[0]) - 1;
  }
  return arg;
};

const createNewArray = (arr) => {
  const newArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i += 1) {
    newArray[i] = arr[i];
  }
  return newArray;
};

const arrWithSubArg = (arr, subArg) => {
  const newArr = createNewArray(arr);
  const firstIndex = 0;
  const lastIndex = arr.length - 1;
  const firstElement = arr[0];
  const lastElement = arr[arr.length - 1];

  newArr[firstIndex] = firstElement + subArg;
  newArr[lastIndex] = lastElement - subArg;

  return newArr;
};

const arrBalance = (arr) => {
  const sortArr = sortArrAsc(arr);
  const subArg = subtractedArgument(sortArr);
  if (subArg < 1) return sortArr;
  const newArr = arrWithSubArg(sortArr, subArg);
  return arrBalance(newArr);
};

const stringToArray = (string) => {
  const arrNum = new Array(string.length);
  for (let i = 0; i < string.length; i += 1) {
    arrNum[i] = Number(string[i]);
  }
  return arrNum;
};

const arrayToString = (arr) => {
  let stringOfArray = '';
  for (let i = 0; i < arr.length; i += 1) {
    stringOfArray += `${arr[i]}`;
  }
  return stringOfArray;
};

const balanceNum = (num) => {
  const numString = String(num);
  const arrNum = stringToArray(numString);
  const balanceArr = arrBalance(arrNum);
  const balNum = arrayToString(balanceArr);

  return balNum;
};
export default balanceNum;

