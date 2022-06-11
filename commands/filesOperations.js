import {
  access,
  readFile,
  writeFile,
  rename,
  copyFile,
  mkdir,
  unlink,
} from 'fs/promises';
import path, { resolve } from 'path';
import { cwd, stdout } from 'process';
import { checkFolderExists } from '../utils/checkFolder.js';
import { showFailedMessage } from '../utils/messages.js';
import { getDirname } from '../utils/paths.js';

export const cat = async (filePath) => {
  try {
    await readFile(filePath, 'utf-8').then((data) => stdout.write(`${data}\n`));
  } catch (error) {
    showFailedMessage();
  }
};

export const add = async (filePath) => {
  try {
    await access(filePath);
    showFailedMessage();
  } catch (error) {
    await writeFile(filePath, '');
  }
};

export const rn = async (oldPath, newPath) => {
  const destPath = path.join(path.dirname(resolve(oldPath)), newPath);
  try {
    await rename(oldPath, destPath);
  } catch (err) {
    showFailedMessage();
  }
};

export const cp = async (srcPath, destPath) => {
  try {
    const currentPath = cwd();
    const fileName = path.basename(srcPath);
    const destinationWithFilePath = path.join(destPath, fileName);
    const isFolderExists = await checkFolderExists(
      path.join(currentPath, destPath)
    );
    if (!isFolderExists) {
      mkdir(path.join(currentPath, destPath));
    }
    await copyFile(
      path.join(currentPath, srcPath),
      path.join(currentPath, destinationWithFilePath)
    );
  } catch (err) {
    showFailedMessage();
  }
};

export const mv = async (srcPath, destPath) => {
  try {
    const currentPath = cwd();
    const fileName = path.basename(srcPath);
    const destinationWithFilePath = path.join(destPath, fileName);
    const isFolderExists = await checkFolderExists(
      path.join(currentPath, destPath)
    );
    if (!isFolderExists) {
      mkdir(path.join(currentPath, destPath));
    }
    await copyFile(
      path.join(currentPath, srcPath),
      path.join(currentPath, destinationWithFilePath)
    );
    await unlink(path.join(currentPath, srcPath));
  } catch (err) {
    showFailedMessage();
  }
};

export const rm = async (filePath) => {
  try {
    await unlink(path.join(filePath));
  } catch (err) {
    showFailedMessage();
  }
};
