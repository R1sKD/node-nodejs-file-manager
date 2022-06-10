import { stdin } from 'process';
import os from 'os';
import { showGoodbyeMessage } from '../utils/messages.js';

export function listenStdin() {
  stdin.on('data', (data) => {
    const command = data.toString().slice(0, -os.EOL.length);
    switch (command) {
      case '.exit':
        process.exit();
      default:
        break;
    }
  });
}

export function listenProcessExit() {
  ['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach((signal) =>
    process.on(signal, () => {
      process.exit();
    })
  );
  process.on('exit', () => {
    showGoodbyeMessage();
  });
}
