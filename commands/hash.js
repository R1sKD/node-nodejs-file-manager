import { readFile } from 'fs/promises';
import { showFailedMessage } from '../utils/messages.js';

export const calcHash = async (filePath) => {
  try {
    const { createHash } = await import('crypto');
    let fileContent = null;
    await readFile(filePath).then((data) => (fileContent = data));
    const hash = createHash('sha256').update(fileContent).digest('hex');
    console.log(hash);
  } catch (error) {
    showFailedMessage();
  }
};
