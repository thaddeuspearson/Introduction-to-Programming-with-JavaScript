// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); 

/*
This will log [1, 4, 3] to the console, as variables for objects are passed by reference.
*/

