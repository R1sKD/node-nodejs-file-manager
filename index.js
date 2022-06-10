import { listenStdin, listenProcessExit } from './cli/listeners.js';
import { showWelcomeMessage } from './utils/messages.js';

function startApp() {
  showWelcomeMessage();
  listenStdin();
  listenProcessExit();
}

startApp();
