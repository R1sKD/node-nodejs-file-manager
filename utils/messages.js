import { stdout } from 'process';
import { userName } from './userName.js';

export function showWelcomeMessage() {
  stdout.write(`Welcome to the File Manager, ${userName}!\n\n`);
}

export function showGoodbyeMessage() {
  stdout.write(`Thank you for using File Manager, ${userName}!`);
}
