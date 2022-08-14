/* 
Write a function that computes and returns the factorial of a number by using a for loop. 
The factorial of a positive integer n, signified by n!, is defined as the product of all 
integers between 1 and n, inclusive.
*/

function factorial(num) {
    result = num;
    for (let i = num - 1; i > 1; i -= 1) {
        result *= i
    }
    return result;
}

console.log(factorial(5));