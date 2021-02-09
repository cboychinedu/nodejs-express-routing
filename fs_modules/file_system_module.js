// Importing the file system module
const fs = require('fs');

// Create a file/ Write to a file
fs.writeFile('exampleFile.txt', 'This is an example \n', (err) =>
{
    //
    if (err) throw err;

    //
    console.log("File successfully created");
})

// Read from a file
fs.readFile('exampleFile.txt', 'utf8', (err, file) =>
{
    //
    if (err) throw err;

    //
    console.log(file);
});

// Renaming a file
fs.rename('exampleFile.txt', 'example2.txt', (err) =>
{
    //
    if (err) throw err;

    //
    console.log("File renamed successfully.");
})
