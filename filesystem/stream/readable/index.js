const fs = require('fs');
const path = require('path');

// Dynamic
const filePath = path.resolve(__dirname, '..', '..' ,'notes.txt');

const readableStream = fs.createReadStream(filePath, {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});