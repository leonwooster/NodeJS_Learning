console.log(__dirname);
console.log(__filename);

const names = require('./module1');
const sayHi = require('./module2');

require('./module3') //to trigger the execution of another file.

console.log(names);

const name = 'james';
sayHi(names.john);
sayHi(names.peter);


const os = require('os')
const user = os.userInfo()
console.log(user)