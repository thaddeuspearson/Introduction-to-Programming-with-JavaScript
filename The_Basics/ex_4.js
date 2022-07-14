// Explain why this code logs '510' instead of 15

console.log('5' + 10);

/* The interpreter is doing implicit type conversion and changing the 
integer value 10 to a string, and then concatenating '5' and '10' together.
*/