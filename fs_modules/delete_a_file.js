// Importing the file system module
const fs = require('fs');

// Setting a variable to hold the name of the file
let fileName = 'example2.txt';

// Removing a file
fs.unlink(fileName, (err) =>
{
    //
    if (err) throw err;

    //
    console.log(`successfully deleted the file ${fileName}`);
});
