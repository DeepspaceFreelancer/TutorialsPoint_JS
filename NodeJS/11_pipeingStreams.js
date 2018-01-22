var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('11_input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('11_output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");