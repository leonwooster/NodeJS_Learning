const http = require('http')
const fs = require('fs')

const readStream = fs.createReadStream(__dirname + '/file.txt');


readStream.on('data',(chunk)=>{
    console.log('new data received');
    console.log(chunk);
});