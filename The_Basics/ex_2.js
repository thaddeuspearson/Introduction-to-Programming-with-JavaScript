/*
Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

    1. thousands place is 4
    2. hundreds place is 9
    3. tens place is 3
    4. ones place is 6
*/
let num = 4936
let ones = num % 10
console.log(ones)           // produces 6

num =  (num - ones) / 10    // remove remainder and reduce
let tens = num % 10         
console.log(tens)           // produces 3

num = (num - tens) / 10     // remove remainder and reduce
let hundreds = num % 10     
console.log(hundreds)       // produces 9

num = (num - hundreds) / 10 // remove remainder and reduce
let thousands = num % 10    
console.log(thousands)      // produces 1