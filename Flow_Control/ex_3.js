/* 
Let's improve our previous implementation of evenOrOdd. 
Add a validation check to ensure that the argument is an integer. 
If it isn't, the function should issue an error message and return.
*/

let evenOrOdd = (int) => Number.isInteger(int) ? (int % 2 === 0 ? 'even' : 'odd') : "Error: argument provided is not an integer";
