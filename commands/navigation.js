import { readdir } from 'fs/promises';
import { chdir, cwd, stdout } from 'process';
import { showFailedMessage } from '../utils/messages.js';

export const up = () => {
  try {
    chdir('../');
  } catch (err) {
    showFailedMessage();
  }
};

export const cd = (path) => {
  try {
    chdir(`${path}`);
  } catch (err) {
    showFailedMessage();
  }
};

export const list = async () => {
  try {
    await readdir(cwd()).then((files) => {
      files = files.join('\n');
      stdout.write(`${files}\n`);
    });
  } catch (err) {
    showFailedMessage();
  }
};
