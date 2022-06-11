import { stdin } from 'process';
import os from 'os';
import {
  showCurrentPath,
  showGoodbyeMessage,
  showInvalidMessage,
} from '../utils/messages.js';
import { cd, list, up } from '../commands/navigation.js';
import { getCommand, getCommandArgs } from './parseCommandLIne.js';
import { add, cat, cp, mv, rm, rn } from '../commands/filesOperations.js';
import { osInfo } from '../commands/os.js';
import { calcHash } from '../commands/hash.js';
import { compress, decompress } from '../commands/zip.js';

export function listenStdin() {
  stdin.on('data', (data) => {
    const commandLine = data.toString().slice(0, -os.EOL.length);
    const command = getCommand(commandLine);
    const args = getCommandArgs(commandLine);
    showCurrentPath();
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
      case 'cat':
        cat(args[0]);
        break;
      case 'add':
        add(args[0]);
        break;
      case 'rn':
        rn(args[0], args[1]);
        break;
      case 'cp':
        cp(args[0], args[1]);
        break;
      case 'mv':
        mv(args[0], args[1]);
        break;
      case 'rm':
        rm(args[0]);
        break;
      case 'os':
        osInfo(args[0]);
        break;
      case 'hash':
        calcHash(args[0]);
        break;
      case 'compress':
        compress(args[0], args[1]);
        break;
      case 'decompress':
        decompress(args[0], args[1]);
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
