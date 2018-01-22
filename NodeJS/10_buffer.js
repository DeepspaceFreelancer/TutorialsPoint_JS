var buf = new Buffer(256);
var len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);

// Playing with character encoding
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

// JSon
buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);

// Buffer concat
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

// Compare Buffer
buffer1 = new Buffer('ABC');
buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}


// Buffer Copy
buffer1 = new Buffer('ABCoutofrange');
buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

// Slice a buffer
buffer1 = new Buffer('TutorialsPoint');
buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());

// Length of buffer
buffer = new Buffer('TutorialsPoint');
console.log("buffer length: " + buffer.length);
