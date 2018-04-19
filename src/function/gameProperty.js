
import readlineSync from 'readline-sync';

const gameName = () => {
  console.log('Welcome to Brain Games!');
};

const gameDescription = (description) => {
  console.log(description);
};

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);
  return name;
};

export { gameName, gameDescription, userName };
