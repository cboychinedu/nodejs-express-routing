// Importing the necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Specifying the port to listen on
let PORT = 3000;
let ipAddr = 'localhost';

//
app.use(express.static('static'));

// Using the bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// GET REQUEST
app.get('/', (req, res) =>
{
    // Sending the file
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
});

// POST REQUEST
app.post('/', (req, res) =>
{
    // Getting the data using the POST request
    console.log(req.body);

    // Database work here

    // Sending back
    res.send({message: "Hello, it's working!"});

});

// Running the Nodejs server
app.listen(PORT, ipAddr);
console.log(`The server is running on ${ipAddr}:${PORT}`);
