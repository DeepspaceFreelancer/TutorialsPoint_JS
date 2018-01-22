
var fs = require("fs");

var testDirectory = 'testDirectory';

console.log("Going to create directory: " + testDirectory);
fs.mkdir(testDirectory, function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});

var listCurrentFolderFn = function () {
    console.log("Going to read current directory");
    fs.readdir('.', function(err, files) {
       if (err) {
          return console.error(err);
       }
       files.forEach(function (file) {
          console.log(file);
       });
    });
};

listCurrentFolderFn();

console.log("Deleting folder: " + testDirectory);
fs.rmdir(testDirectory, function(err) {
   if (err) {
      return console.error(err);
   }   
});

listCurrentFolderFn();