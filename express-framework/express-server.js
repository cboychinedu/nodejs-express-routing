/* Express is a webframe work for Nodejs */
// Importing the express module
const express = require('express');
const app = express();

// Setting the PORT and ADDRESS to listen on
const PORT = 3000;
const ipAddress = 'localhost';

// Using the get method
app.get('/', (req, res) =>
{
    // Sending the response
    res.send(`
      <h2> Hello World! </h2> <br> <br>
      <p style='margin-left: 20px; background-color: blue; text-align: center;'> Hello Chinedu, just testing the framework </p> <br>
      <p> Closing up </p>

    `);

});

// Adding another route
app.get('/example', (req, res) =>
{
    // Sending response
    res.send(`<h4> Hitting the example route </h4>`);
});

// Adding another route
app.get('/example/:name/:age', (req, res) =>
{
    // Sending the response
    console.log(req.params);

    // Checking the user's query 
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});






// Running the express server
app.listen(PORT, ipAddress);
console.log(`The server is running on: ${ipAddress}:${PORT}`);
