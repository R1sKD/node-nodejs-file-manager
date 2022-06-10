import { fileURLToPath } from 'url';
import { dirname } from 'path';

export function getDirname(importMetaUrl) {
  return fileURLToPath(dirname(importMetaUrl));
}

export function getFilename(importMetaUrl) {
  return fileURLToPath(importMetaUrl);
}
