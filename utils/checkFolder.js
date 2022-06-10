import { access } from 'fs/promises';

export async function checkFolderExists(path) {
  let isFolderExists = true;
  await access(path).catch((err) => {
    isFolderExists = false;
  });
  return isFolderExists;
}
