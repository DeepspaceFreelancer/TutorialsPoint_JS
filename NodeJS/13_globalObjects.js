
// Let's try to print the value of __filename
console.log( __filename );

// Let's try to print the value of __dirname
console.log( __dirname );

// Timeout Play ###################################################################################
function printHelloTimeout() {
   console.log( "Hello, World Timeout!");
}
setTimeout(printHelloTimeout, 2000);

function printHelloTimeoutWillNeverHappen() {
   console.log( "Hello, World Timeout (Will Never happen)!");
}
var t = setTimeout(printHelloTimeoutWillNeverHappen, 2000);
clearTimeout(t);

// Interval Play #################################################################################
function printHelloInterval() {
   console.log( "Hello, World Interval!");
}

var interval = setInterval(printHelloInterval, 500);
setTimeout(function () {
    clearInterval(interval);
}, 2000);

// Console Play ###################################################################################
console.info("Program Started");
var counter = 10;
console.log("Counter: %d", counter);
console.time("Getting data");
console.timeEnd('Getting data');

// Process Play ###################################################################################
process.stdout.write("Process Hello World!" + "\n");
process.argv.forEach(function(val, index, array) {
   console.log('Process Parameters: ' + index + ': ' + val);
});

console.log('process.execPath: ' + process.execPath);
console.log('process.platform: ' + process.platform);
console.log('Current directory: ' + process.cwd());
console.log('Current version: ' + process.version);
console.log('Memory ussage: ');
console.log(process.memoryUsage());

process.on('exit', function(code) {

   // Following code will never execute.
   setTimeout(function() {
      console.log("This will not run");
   }, 0);
  
   console.log('About to exit with code:', code);
});

console.log("Program Ended");