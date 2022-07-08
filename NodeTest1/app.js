const { Console } = require("console");
const events = require("events");
const myEmitter = new events.EventEmitter();

myEmitter.on("test", function (arg) {
  console.log(arg);
});

myEmitter.emit("test", "hello world");

const fs = require("fs");
fs.mkdir("folder", () => {
    fs.writeFile('./folder/test.txt', 'test data', (error) => {
        console.log("File is written");
    });
});
