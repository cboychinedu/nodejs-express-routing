// Importing the file system module
const fs = require('fs');

// Creating a folder
fs.mkdir('test-folder', (err) =>
{
    //
    if (err) throw err;

    //
    console.log('Folder created');
});
