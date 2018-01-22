var path = require("path");

// More documentation for the path is: https://www.tutorialspoint.com/nodejs/nodejs_path_module.htm

// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve : ' + path.resolve("14_modules_Path.js"));

// extName
console.log('ext name : ' + path.extname("14_modules_Path.js"));