import { chdir } from 'process';
import os from 'os';
import { listenStdin, listenProcessExit } from './cli/listeners.js';
import { showCurrentPath, showWelcomeMessage } from './utils/messages.js';

const redirectToHomeWorkingDirectory = () => {
  chdir(os.homedir());
};

const startApp = () => {
  showWelcomeMessage();
  redirectToHomeWorkingDirectory();
  showCurrentPath();
  listenStdin();
  listenProcessExit();
};

startApp();
