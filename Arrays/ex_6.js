/*
Use map and filter to first determine the lengths of all
the elements in an array of string values, then discard 
the even values (keep the odd values).
*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
    return arr.map(str => str.length).filter(int => int % 2 === 1);
}