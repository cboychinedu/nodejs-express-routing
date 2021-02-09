// Importing the file system module
const fs = require('fs');

// Setting a variable to hold the name of the file
let fileName = 'example2.txt';

// Data to be saved
fileData = 'This is a new file data ... \n';

// Appending data to the file
fs.appendFile(fileName, fileData, (err) =>
{
    //
    if (err) throw err;

    //
    console.log("Data appended to the file.");
})
