var os = require("os");

// Here is the path for this tutorial for further info: https://www.tutorialspoint.com/nodejs/nodejs_os_module.htm

// Temp
console.log('temp dir : ' + os.tmpdir());

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");