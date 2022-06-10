import { cwd, stdout } from 'process';
import { userName } from './userName.js';

export function showWelcomeMessage() {
  stdout.write(`Welcome to the File Manager, ${userName}!\n\n`);
}

export function showGoodbyeMessage() {
  stdout.write(`Thank you for using File Manager, ${userName}!`);
}

export function showCurrentPath() {
  stdout.write(`You are currently in ${cwd()}\n`);
}

export function showInvalidMessage() {
  stdout.write('Invalid input\n');
}

export function showFailedMessage() {
  stdout.write('Operation failed\n');
}
