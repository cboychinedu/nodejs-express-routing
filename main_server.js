/* Learning Nodejs */
// Importing the necessary modules
const express = require('express');
const force_modules = require('./modules/force_module');
const path = require('path');

// Using the event module
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Creating an event emitter to be called on later on in the code
eventEmitter.on('addition', (num1, num2) =>
  {
    console.log("The addition event emitter has been called");
    let result = num1 + num2;
    console.log(`The result is: ${result}`);
  });

// Calling the emit function
eventEmitter.emit('addition', 2, 3);

// Using the "force_modules" for some specific calculations
let calForce = force_modules.force(30, 0.98);
console.log(`The calculated force is: ${calForce}`);

let calMass = force_modules.mass(0.987, 20.387);
console.log(`The calculated mass is: ${calMass}`);

let calAcc = force_modules.acceleration(0.00987, 21);
console.log(`The calculated acceleration is: ${calAcc}`);

// Reading the line using the "readline module"
const readline = require('readline');
let r1 = readline.createInterface({input : process.stdin,
                          output : process.stdout});   // input <=


let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 + num2;

// Taking the user input and storing it into a variable called userInput
r1.question(`What is ${ num1 } + ${ num2 }: `, (userInput) =>
{
    // Working with the userInput
    let userFloatValue = parseFloat(userInput.trim());
    if (userFloatValue === answer )
    {
        //
        r1.close();
        console.log(typeof userInput.trim());
        console.log(typeof userFloatValue);
    }

    //
    else
    {
        //
        console.log("Wrong answer!");
        r1.setPrompt("Incorrect response, please try again\n");
        r1.prompt();

    }

    // Existing the process
    // process.exit();
})
