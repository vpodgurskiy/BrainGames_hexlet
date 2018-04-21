#!/usr/bin/env node

import { question } from 'readline-sync';
import playGcdGame from '../games/gcd';
import playCalcGame from '../games/calc';
import playEvenGame from '../games/even';
import playBalanceGame from '../games/balance';
import playProgressionGame from '../games/progression';
import playPrimeGame from '../games/prime';
import { newLine, showMenu } from '../function/secondary_functions';
import { gameName } from '../function/gameProperty';

newLine();
gameName();
showMenu();

const game = question('Choose a game:');

newLine();

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
  case '4':
    playBalanceGame();
    break;
  case '5':
    playProgressionGame();
    break;
  case '6':
    playPrimeGame();
    break;
  default:
    console.log(`${game}, incorrect choice`);
    break;
}
