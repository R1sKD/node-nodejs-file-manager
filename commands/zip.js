import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';
import { showFailedMessage } from '../utils/messages.js';

const pipe = promisify(pipeline);

export const compress = async (input, output) => {
  const brotliZip = createBrotliCompress();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, brotliZip, destination).catch((err) => {
    showFailedMessage();
  });
};

export const decompress = async (input, output) => {
  const brotliUnzip = createBrotliDecompress();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, brotliUnzip, destination).catch((err) => {
    showFailedMessage();
  });
};
