import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const getDirname = (importMetaUrl) => {
  return fileURLToPath(dirname(importMetaUrl));
};

export const getFilename = (importMetaUrl) => {
  return fileURLToPath(importMetaUrl);
};
