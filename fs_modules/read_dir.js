// Importing the file system module
const fs = require('fs');

// Getting the full path
const path = require('path');

// Setting the directory name
let dirName = "test-dir"; 

// Showing files present in the specified directory/folder
fs.readdir(dirName, (err, files) =>
{
    // CODE
    if (err) throw err;

    // Showing files present in the directory
    console.log(files);
})
