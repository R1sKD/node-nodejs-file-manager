import { stdin } from 'process';
import os from 'os';
import {
  showCurrentPath,
  showGoodbyeMessage,
  showInvalidMessage,
} from '../utils/messages.js';
import { up } from '../commands/navigation.js';

export function listenStdin() {
  stdin.on('data', (data) => {
    const command = data.toString().slice(0, -os.EOL.length);
    showCurrentPath();
    switch (command) {
      case 'up':
        up();
        break;
      case '.exit':
        process.exit();
      default:
        showInvalidMessage();
        break;
    }
  });
}

export function listenProcessExit() {
  process.on('SIGINT', () => {
    process.exit();
  });
  process.on('exit', () => {
    showGoodbyeMessage();
  });
}
