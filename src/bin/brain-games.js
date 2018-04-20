#!/usr/bin/env node

import { question } from 'readline-sync';
import playGcdGame from '../games/gcd';
import playCalcGame from '../games/calc';
import playEvenGame from '../games/even';
import { newLine, showMenu } from '../function/secondary_functions';
import { gameName } from '../function/gameProperty';

gameName();
newLine();
showMenu();
newLine();

const game = question('Choose a game:');
switch (game) {
  case '1':
    playEvenGame();
    break;
  case '2':
    playCalcGame();
    break;
  case '3':
    playGcdGame();
    break;
  default:
    console.log(`${game}, incorrect choice`);
    break;
}
