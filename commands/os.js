import os from 'os';
import { stdout } from 'process';
import { showFailedMessage } from '../utils/messages.js';

export const osInfo = (flag) => {
  switch (flag) {
    case '--EOL':
      stdout.write(os.EOL);
      break;
    case '--cpus':
      stdout.write(os.cpus());
      break;
    case '--homedir':
      stdout.write(os.homedir());
      break;
    case '--username':
      stdout.write(os.hostname());
      break;
    case '--architecture':
      stdout.write(os.arch());
      break;
    default:
      showFailedMessage();
      break;
  }
};
