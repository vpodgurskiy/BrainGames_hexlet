#!/usr/bin/env node

import { question } from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = question('May I have your name?');

console.log(`Hi, ${userName}!`);
