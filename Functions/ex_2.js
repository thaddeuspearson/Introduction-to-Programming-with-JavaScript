/* 
In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. 
Add a function to this program that solicits the user's first and last names in separate invocations; 
the function should return the appropriate name as a string. Use the return values to greet the user 
with their full name.
*/

let getName = (rlSync, nameType) => rlSync.question(`What is your ${nameType} name?\n`);
let greeting = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`;
let getRlSync = () => require('readline-sync');

let rlSync = getRlSync();
let firstName = getName(rlSync, 'first');
let lastName = getName(rlSync, 'last');
console.log(greeting(firstName, lastName));