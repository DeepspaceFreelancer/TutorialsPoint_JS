var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('11_input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('11_input.txt.gz'));

console.log("File Compressed.");