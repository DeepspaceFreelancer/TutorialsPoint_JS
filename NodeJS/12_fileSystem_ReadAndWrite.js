var fs = require("fs");

var readAndWrite = '12_readandwrite.txt';

console.log("Going to write into existing file");
fs.writeFile(readAndWrite, 'Simply Easy Learning!',  function(err) {
   if (err) {
      return console.error(err);
   }

   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile(readAndWrite, function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});