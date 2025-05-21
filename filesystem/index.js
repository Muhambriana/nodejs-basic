const fs = require('fs');
const path = require('path')

// Dynamic
const filePath = path.resolve(__dirname, 'notes.txt');

const fileReadCallback = (error, data) => {
  if(error) {
    console.log('Failed to read file');
    return;
  }

  console.log(data)
}

fs.readFile(filePath, 'utf-8', fileReadCallback);
