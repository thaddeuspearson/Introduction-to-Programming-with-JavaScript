/*
Reimplement the factorial function from exercise 2 using recursion. 
Once again, you may assume that the argument is always a positive integer.
*/

let factorial = (num) => num === 1 ? 1 : (factorial(num - 1) * num);

console.log(factorial(5));