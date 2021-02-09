// Importing the file system module
const fs = require('fs');

// Getting the full path
const path = require('path');

// Folder name
let folderName = "test-folder";

// File name
let fileName = "test-folder/test-file.bin";
let fileContents = "This is a new created file\nAnd i hope you are happy about it.";

// Removing a file and a folder together
fs.unlink("./test-folder/test-file.bin", (err) =>
{
    // CODE
    if (err) throw err;

    // Deleting the file
    console.log("File deleted.");


});
