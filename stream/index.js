/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'input.txt');
const targetOutputFilePath = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(filePath, {
  highWaterMark: 5
});
const writableStream = fs.createWriteStream(targetOutputFilePath);

readableStream.on('readable', () => {
  try {
    writableStream.write(`${readableStream.read()}`);
  } catch (error) {
    console.error('Read failed:', error.message);
  }
});

readableStream.on('end', () => {
  writableStream.end();
});