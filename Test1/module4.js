const path = require('path');
console.log(path.sep)


const filePat = path.join('\\', "test", "testSub", "test.txt")
console.log(filePat)

const base = path.basename(filePat)
console.log(base)
console.log(path.resolve(__dirname, 'test', 'testSub','test.txt'))
