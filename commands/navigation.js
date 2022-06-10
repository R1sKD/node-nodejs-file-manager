import { chdir } from 'process';
import { showCurrentPath, showFailedMessage } from '../utils/messages.js';

export function up() {
  try {
    chdir('../');
    showCurrentPath();
  } catch (err) {
    showFailedMessage();
  }
}
