import { stdin } from 'process';
import os from 'os';
import {
  showCurrentPath,
  showGoodbyeMessage,
  showInvalidMessage,
} from '../utils/messages.js';
import { cd, list, up } from '../commands/navigation.js';
import { getCommand, getCommandArgs } from './parseCommandLIne.js';

export function listenStdin() {
  stdin.on('data', (data) => {
    const commandLine = data.toString().slice(0, -os.EOL.length);
    const command = getCommand(commandLine);
    const args = getCommandArgs(commandLine);
    // showCurrentPath();
    switch (command) {
      case 'up':
        up();
        break;
      case 'cd':
        cd(args[0]);
        break;
      case 'list':
        list();
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
