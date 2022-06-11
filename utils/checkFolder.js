import { access } from 'fs/promises';

export const checkFolderExists = async (path) => {
  let isFolderExists = true;
  await access(path).catch((err) => {
    isFolderExists = false;
  });
  return isFolderExists;
};
