const fs = require('fs');
const path = require('path')

const targetFilePath = path.resolve(__dirname, 'output.txt');
 
const writableStream = fs.createWriteStream(targetFilePath);
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end();