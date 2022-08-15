// Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(arr) {
    return array.reduce((acc, int)  => acc + (int * int), 0);
}
