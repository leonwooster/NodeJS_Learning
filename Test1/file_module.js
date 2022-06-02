const { readFileSync, writeFileSync, readFile } = require('fs')

const first = readFileSync('./test/testSub/test.txt', 'utf-8')
const second = readFileSync('./test/testSub/second.txt', 'utf-8')

writeFileSync('./test/testSub/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' })

console.log("read file");
readFileSync('./test/testSub/result-sync.txt', 'utf8', (err, result) => {
    debugger;
    if (err) {
        console.log('error' + err);
        return;
    }
    console.log(result);
});