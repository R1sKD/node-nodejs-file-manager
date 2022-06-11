import { readFile } from 'fs/promises';
import { stdout } from 'process';
import { showFailedMessage } from '../utils/messages.js';

export const calcHash = async (filePath) => {
  try {
    const { createHash } = await import('crypto');
    let fileContent = null;
    await readFile(filePath).then((data) => (fileContent = data));
    const hash = createHash('sha256').update(fileContent).digest('hex');
    stdout.write(`${hash}\n`);
  } catch (error) {
    showFailedMessage();
  }
};
