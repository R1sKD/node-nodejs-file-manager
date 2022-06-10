import { readdir } from 'fs/promises';
import { chdir, cwd } from 'process';
import { showCurrentPath, showFailedMessage } from '../utils/messages.js';

export function up() {
  try {
    chdir('../');
    showCurrentPath();
  } catch (err) {
    showFailedMessage();
  }
}

export function cd(path) {
  try {
    chdir(`${path}`);
    showCurrentPath();
  } catch (err) {
    showFailedMessage();
  }
}

export const list = async () => {
  try {
    await readdir(cwd()).then((files) => {
      console.log(files);
    });
  } catch (err) {
    showFailedMessage();
  }
};
