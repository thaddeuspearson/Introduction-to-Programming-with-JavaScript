/*
ex_1: Write a dynamic greeter program named greeter.js. 
The program should ask for your name, then output
"Hello, {name}!" where {name} is the name you entered.
*/

/*
let rlSync = require('readline-sync');
let name = rlSync.question("What is your name?\n");
console.log(`Hello, ${name}!`);
*/

/*
ex_2: Modify the greeter.js program to ask for the user's 
first and last names separately, then greet the user with 
their full name.
*/

let rlSync = require('readline-sync');
let firstName = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);

