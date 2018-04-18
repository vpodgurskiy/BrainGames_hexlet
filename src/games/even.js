

import generateNum from '../function/randNumber';
import startGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const makeGame = (num = generateNum()) => ({ question: num, answer: (num % 2 === 0) ? 'yes' : 'no' });

const playGame = () => {
  startGame(makeGame, description);
};

export default playGame;

