import { listenStdin, listenProcessExit } from './cli/listeners.js';
import { showCurrentPath, showWelcomeMessage } from './utils/messages.js';
import { getDirname } from './utils/paths.js';

function startApp() {
  showWelcomeMessage();
  showCurrentPath(getDirname(import.meta.url));
  listenStdin();
  listenProcessExit();
}

startApp();
