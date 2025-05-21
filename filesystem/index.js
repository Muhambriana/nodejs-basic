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

// Async
// fs.readFile(filePath, 'utf-8', fileReadCallback);

// Sync
try {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log(data);
} catch (error) {
  console.log('Failed to read file');
}
