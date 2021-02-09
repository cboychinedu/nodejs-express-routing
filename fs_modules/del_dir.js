// Importing the file system module
const fs = require('fs');

// Deleting a folder
fs.rmdir('test-folder', (err) =>
{
    // Checking for errors 
    if (err) throw err;

    // Displaying the result
    console.log('Folder deleted.');
})
