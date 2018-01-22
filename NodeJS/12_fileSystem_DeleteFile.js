var fs = require("fs");

var deleteFile = '12_deleteFile.txt';
fs.writeFile(deleteFile, 'I will delete this file.',  function(err) {
   if (err) {
      return console.error(err);
   }
});

console.log("Going to delete an existing file");
fs.unlink(deleteFile, function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});

