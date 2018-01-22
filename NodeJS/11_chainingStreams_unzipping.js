var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('11_input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('11_input.txt'));
  
console.log("File Decompressed.");