// Importing the file system module
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

//
const readStream = fs.createReadStream('./example.txt');
const writeStream = fs.createWriteStream('./example2.txt');

// Piping the data from the first file.
readStream.pipe(gzip).pipe(writeStream);
