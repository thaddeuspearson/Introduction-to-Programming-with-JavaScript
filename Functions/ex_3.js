/* 
Write a program that uses a multiply function to multiply two numbers and returns the result. 
Ask the user to enter the two numbers, then output the numbers and result as a simple equation.
*/

let getRlSync = () => require('readline-sync');
let multiply = (num1, num2) => num1 * num2;
let getNum = (rlSync, numPosition) => rlSync.question(`Enter the ${numPosition} number: `)

rlSync = getRlSync();
num1 = getNum(rlSync, 'first');
num2 = getNum(rlSync, 'second');

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);