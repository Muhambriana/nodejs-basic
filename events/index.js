const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}
 
const eventEmitter = new EventEmitter()
 
eventEmitter.on('birthday', birthdayEventListener);

eventEmitter.emit('birthday', 'Shell');