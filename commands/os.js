import os from 'os';
import { showFailedMessage } from '../utils/messages.js';

export const osInfo = (flag) => {
  switch (flag) {
    case '--EOL':
      console.log(os.EOL);
      break;
    case '--cpus':
      console.log(os.cpus());
      break;
    case '--homedir':
      console.log(os.homedir());
      break;
    case '--username':
      console.log(os.hostname());
      break;
    case '--architecture':
      console.log(os.arch());
      break;
    default:
      showFailedMessage();
      break;
  }
};
