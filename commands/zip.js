import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';
import { showFailedMessage } from '../utils/messages.js';
import path from 'path';

const pipe = promisify(pipeline);

export const compress = async (input, output) => {
  input = path.resolve(input);
  const fileName = path.basename(input);
  output = path.join(path.resolve(output), `${fileName}.br`);
  const brotliZip = createBrotliCompress();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, brotliZip, destination).catch((err) => {
    showFailedMessage();
  });
};

export const decompress = async (input, output) => {
  input = path.resolve(input);
  const fileName = path.basename(input).split('.').slice(0, -1).join('.');
  output = path.join(path.resolve(output), fileName);
  const brotliUnzip = createBrotliDecompress();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, brotliUnzip, destination).catch((err) => {
    console.log(err);
    showFailedMessage();
  });
};
